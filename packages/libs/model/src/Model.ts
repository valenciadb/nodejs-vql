import {Containers} from "./containers"
import {CryptoKeys, CryptoIvs} from "./crypto"
import {Schemas} from "./schemas"

/**
 * A data model.
 */
export default class Model {
  /**
   * The available schemas.
   */
  readonly schemas = new Schemas()

  /**
   * The available containers.
   */
  readonly containers = new Containers()

  /**
   * The available cryptographic keys.
   */
  readonly cryptoKeys = new CryptoKeys()

  /**
   * The available cryptographic IVs.
   */
  readonly cryptoIvs = new CryptoIvs()
}
