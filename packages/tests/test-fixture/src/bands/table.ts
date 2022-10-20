import {
  Connector,
  ContainerType,
  Index,
  Indexes,
  KeyField,
  ReadWriteContainer
} from "@vql/model"
import {Pipeline} from "@vql/pipeline"

export default new ReadWriteContainer(
  {} as Connector,
  ContainerType.table,
  "bands",
  undefined,
  new Indexes().addIndex(new Index("primary", [new KeyField("name")])),
  {preWrite: new Pipeline(), postRead: new Pipeline()}
)
