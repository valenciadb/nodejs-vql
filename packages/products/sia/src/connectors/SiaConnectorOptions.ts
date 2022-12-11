import {ConnectorOptions} from "@vql/connector"

/**
 * Connector options for Sia.
 */
type SiaConnectorOptions = ConnectorOptions & {
  /**
   * URL to the Skynet portal.
   */
  portal: string

  /**
   * API key to use.
   */
  apiKey: string
}

export default SiaConnectorOptions
