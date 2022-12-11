import {SkynetClient} from "@skynetlabs/skynet-nodejs"
import {ConnectorBase} from "@vql/connector"
import SiaConnectorOptions from "./SiaConnectorOptions"

/**
 * A Sia connector base.
 */
export default abstract class SiaConnector extends ConnectorBase {
  /**
   * The Skynet client to use.
   */
  protected readonly skynet: SkynetClient

  /**
   * The Skynet portal to use.
   */
  readonly portal: string

  /**
   * Skynet API key to use.
   */
  readonly apiKey: string

  /**
   * Creates a Sia connector with the given options.
   *
   * @param name - Connector name.
   * @param options - Options to use.
   * @param skynet - Skynet client to use if specific one needed.
   */
  protected constructor(name: string, options: SiaConnectorOptions, skynet?: SkynetClient) {
    super(name, "/")

    this.portal = options.portal
    this.apiKey = options.apiKey
    this.skynet = skynet ?? new SkynetClient(this.portal, {skynetApiKey: this.apiKey})
  }
}
