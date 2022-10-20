import {
  DataTypeId,
  dataTypeCheckOp,
  defaultValueOp,
  fieldLevelDecryptionOp,
  fieldLevelEncryptionOp,
  Pipeline,
  dataTypeCastingOp,
  schemaValidationOp
} from "@vql/pipeline"

import {
  Decoder,
  Encoder,
  EncryptedJsonDecoder,
  EncryptedJsonEncoder,
  JsonDecoder,
  JsonEncoder
} from "@vql/encoder"

import {Connector, Connectors} from "../connectors"
import {CryptoKey, CryptoIv} from "../crypto"
import {ModelError} from "../errors"
import {Index, Indexes, KeyField} from "../indexes"
import {Schema} from "../schemas"
import {AppendOnlyContainer, ReadOnlyContainer, ReadWriteContainer} from "./impl"
import Model from "../Model"
import Container from "./Container"
import ContainerType from "./ContainerType"
import KeyFieldDataType from "./KeyFieldDataType"

/**
 * The TDE configuration for a container TDE.
 */
type Tde = {cryptoKeyName: string; cryptoIvName: string; fieldName?: string}

/**
 * The field-level TDE parameters.
 */
type FieldLevelTdeParams = {fieldName: string; cryptoKey: CryptoKey; cryptoIv: CryptoIv}

/**
 * The container key definition.
 */
type KeyDef = {name: string; dataType: KeyFieldDataType}[]

/**
 * A builder of containers.
 */
export default class ContainerBuilder {
  /**
   * Creates a builder with the given arguments.
   *
   * @param connectors - The connectors to use.
   * @param model - The model to use.
   */
  constructor(readonly connectors: Connectors, readonly model: Model) {}

  /**
   * Creates a container attending to the arguments.
   *
   * @param connectorName - Connector to use with the container.
   * @param kind - Container type.
   * @param containerName - Container name to set.
   * @param schemaName - Schema associated to this container.
   * @param keyFields - Fields of its primary key.
   * @param mode - Access mode allowed.
   * @param tde - TDE configuration.
   * @param defaults - Default values to set when needed.
   * @param ttl - TTL to set when needed.
   */
  createContainer(
    connectorName: string | undefined,
    kind: ContainerType,
    containerName: string,
    schemaName: string | undefined,
    keyFields: KeyDef,
    mode: "APPEND ONLY" | "READ ONLY" | "READ WRITE",
    tde: Tde | undefined,
    defaults: Record<string, any> | undefined,
    ttl: string | undefined
  ): Container {
    // (1) get dependent objects
    const {connector, schema, indexes, fieldLevelTdeParams, encoder, decoder} =
      this.getDependentObjectsOfContainerToCreate(connectorName, schemaName, tde, keyFields)

    // (2) create pipelines
    const postReadPipe = this.addKeyFieldCastingOpsToPipeline(
      keyFields,
      this.addTdeDecryptionOpsToPipeline(fieldLevelTdeParams, new Pipeline())
    )

    const preWritePipe = this.addSchemaValidationOpToPipeline(
      schema,
      this.addKeyFieldCheckOpsToPipeline(
        keyFields,
        this.addTdeEncryptionOpsToPipeline(
          fieldLevelTdeParams,
          this.addKeyFieldCastingOpsToPipeline(
            keyFields,
            this.addDefaultOpsToPipeline(defaults, new Pipeline())
          )
        )
      )
    )

    // (3) create and add table to containers
    let container: Container

    if (mode == "READ ONLY") {
      container = new ReadOnlyContainer(
        connector,
        kind,
        containerName,
        schema,
        indexes,
        {postRead: postReadPipe},
        decoder
      )
    } else if (mode == "APPEND ONLY") {
      container = new AppendOnlyContainer(
        connector,
        kind,
        containerName,
        schema,
        indexes,
        {preWrite: preWritePipe},
        encoder,
        ttl
      )
    } else {
      container = new ReadWriteContainer(
        connector,
        kind,
        containerName,
        schema,
        indexes,
        {preWrite: preWritePipe, postRead: postReadPipe},
        encoder,
        decoder,
        ttl
      )
    }

    // (4) return container
    return container
  }

  /**
   * Returns and builds, when needed, the dependents object for a new container.
   *
   * @param connectorName - The connector name.
   * @param schemaName - The schema name.
   * @param tde - The TDE configuration.
   * @param keyFields - The container key fields.
   *
   * @returns The dependent objects.
   */
  private getDependentObjectsOfContainerToCreate(
    connectorName: string | undefined,
    schemaName: string | undefined,
    tde: Tde | undefined,
    keyFields: KeyDef
  ): {
    connector: Connector
    schema: Schema | undefined
    indexes: Indexes
    fieldLevelTdeParams: FieldLevelTdeParams | undefined
    encoder: Encoder
    decoder: Decoder
  } {
    // (1) get dependent objects
    const connector = this.getConnector(connectorName)
    const schema = this.getSchema(schemaName)
    const {cryptoKey, cryptoIv, fieldLevelTdeParams} = this.getCryptoObjects(tde)
    const {encoder, decoder} = this.buildSerializers(cryptoKey, cryptoIv)
    const indexes = new Indexes().addIndex(
      new Index(
        "primary",
        keyFields.map((field) => new KeyField(field.name))
      )
    )

    // (2) return objects
    return {connector, schema, indexes, fieldLevelTdeParams, encoder, decoder}
  }

  /**
   * Returns a connector by its name.
   *
   * @param name - Connector name. default if unset.
   * @returns The connector.
   * @throw {@link ModelError} If connector not found.
   */
  private getConnector(name: string | undefined): Connector {
    // (1) get schema
    let connector: Connector | undefined

    if (!(connector = this.connectors.getConnector((name = name ?? "default")))) {
      throw new ModelError(`Connector not found: ${name}.`)
    }

    // (2) return connector
    return connector
  }

  /**
   * Returns a schema by its name.
   *
   * @param name - Schema name to find.
   * @returns The schema or undefined if name is undefined.
   * @throws {@link ModelError} If schema not found.
   */
  private getSchema(name: string | undefined): Schema | undefined {
    // (1) get schema
    let schema: Schema | undefined

    if (name) {
      if (!(schema = this.model.schemas.getSchema(name))) {
        throw new ModelError(`Schema not found in the model: ${name}.`)
      }
    }

    // (2) return schema
    return schema
  }

  /**
   * Returns the cryptographic objects from the model for a given TDE
   * configuration.
   *
   * @param tde - The TDE configuration.
   * @returns The [key, iv] if objects available; otherwise, [undefined, undefined].
   * @throws {@link ModelError} If some object not found in the model.
   */
  private getCryptoObjects(tde: Tde | undefined): {
    cryptoKey: CryptoKey | undefined
    cryptoIv: CryptoIv | undefined
    fieldLevelTdeParams: FieldLevelTdeParams | undefined
  } {
    // (1) get crypto objects from the model
    let cryptoKey: CryptoKey | undefined
    let cryptoIv: CryptoIv | undefined
    let fieldLevelTdeParams: FieldLevelTdeParams | undefined

    if (tde) {
      if (!(cryptoKey = this.model.cryptoKeys.getKey(tde.cryptoKeyName))) {
        throw new ModelError(`Cryptographic key not found in the model: ${tde.cryptoKeyName}.`)
      }

      if (!(cryptoIv = this.model.cryptoIvs.getIv(tde.cryptoIvName!))) {
        throw new ModelError(`Cryptographic IV not found in the model: ${tde.cryptoIvName}.`)
      }

      if (tde.fieldName) {
        fieldLevelTdeParams = {
          fieldName: tde.fieldName,
          cryptoKey: cryptoKey,
          cryptoIv: cryptoIv
        }
      }
    }

    // (2) return objects
    return {cryptoKey, cryptoIv, fieldLevelTdeParams}
  }

  /**
   * Builds the encoder and the decoder to use,
   * attending to the given cryptographic objects.
   *
   * @param cryptoKey - The cryptographic key.
   * @param cryptoIv - The cryptographic IV.
   *
   * @returns The encoder and the decoder.
   */
  private buildSerializers(
    cryptoKey: CryptoKey | undefined,
    cryptoIv: CryptoIv | undefined
  ): {encoder: Encoder; decoder: Decoder} {
    // (1) build serializers
    let encoder: Encoder
    let decoder: Decoder

    if (cryptoKey && cryptoIv) {
      encoder = new EncryptedJsonEncoder(cryptoKey.key, cryptoIv.iv)
      decoder = new EncryptedJsonDecoder(cryptoKey.key, cryptoIv.iv)
    } else {
      encoder = new JsonEncoder()
      decoder = new JsonDecoder()
    }

    // (2) return serializers
    return {encoder, decoder}
  }

  /**
   * Updates a given pipeline for performing the schema validation if available.
   *
   * @param schema - Schema to validate.
   * @param pipeline - Pipeline to update.
   *
   * @returns The pipeline for chaining if needed.
   */
  private addSchemaValidationOpToPipeline(
    schema: Schema | undefined,
    pipeline: Pipeline
  ): Pipeline {
    // (1) add op to pipeline
    if (schema) {
      pipeline.addOperation(schemaValidationOp(schema.validator))
    }

    // (2) return pipeline
    return pipeline
  }

  /**
   * Updates a given pipeline for performing the data type checks.
   *
   * @param key - The key to use.
   * @param pipeline - The pipeline to update.
   *
   * @returns The pipeline for chaining if needed.
   */
  private addKeyFieldCheckOpsToPipeline(key: KeyDef, pipeline: Pipeline): Pipeline {
    // (1) add the check operations
    for (const field of key) {
      pipeline.addOperation(dataTypeCheckOp(field.name, field.dataType as DataTypeId))
    }

    // (2) return pipeline
    return pipeline
  }

  /**
   * Updates a given pipeline for performing the data type castings.
   *
   * @param key - The key to use.
   * @param pipeline - The pipeline to update.
   *
   * @returns The pipeline for chaining if needed.
   */
  private addKeyFieldCastingOpsToPipeline(key: KeyDef, pipeline: Pipeline): Pipeline {
    // (1) add the check operations
    for (const field of key) {
      pipeline.addOperation(dataTypeCastingOp(field.name, field.dataType as DataTypeId))
    }

    // (2) return pipeline
    return pipeline
  }

  /**
   * Updates a given pipeline with the TDE encryption ops.
   *
   * @param tde - The field-level TDE parameters.
   * @param pipeline - The pipeline to update.
   *
   * @returns The pipeline for chaining if needed.
   */
  private addTdeEncryptionOpsToPipeline(
    tde: FieldLevelTdeParams | undefined,
    pipeline: Pipeline
  ): Pipeline {
    // (1) update the pipeline
    if (tde) {
      pipeline.addOperation(
        fieldLevelEncryptionOp(tde.fieldName, tde.cryptoKey.key, tde.cryptoIv.iv)
      )
    }

    // (2) return pipeline
    return pipeline
  }

  /**
   * Updates a given pipeline with the TDE decryption ops.
   *
   * @param tde - The field-level TDE parameters.
   * @param pipeline - Pipeline to update.
   *
   * @returns The pipeline for chaining if needed.
   */
  private addTdeDecryptionOpsToPipeline(
    tde: FieldLevelTdeParams | undefined,
    pipeline: Pipeline
  ): Pipeline {
    // (1) update
    if (tde) {
      pipeline.addOperation(
        fieldLevelDecryptionOp(tde.fieldName, tde.cryptoKey.key, tde.cryptoIv.iv)
      )
    }

    // (2) return pipeline
    return pipeline
  }

  /**
   * Updates the given pipeline for performing the defaults if needed.
   *
   * @param defaults - The DEFAULT values.
   * @param pipeline - The pipeline to update.
   *
   * @returns The pipeline for chaining if needed.
   */
  private addDefaultOpsToPipeline(
    defaults: Record<string, any> | undefined,
    pipeline: Pipeline
  ): Pipeline {
    // (1) update the pipeline
    if (defaults) {
      for (const [fieldName, def] of Object.entries(defaults)) {
        pipeline.addOperation(defaultValueOp(fieldName, def.value, def.op))
      }
    }

    // (2) return pipeline
    return pipeline
  }
}
