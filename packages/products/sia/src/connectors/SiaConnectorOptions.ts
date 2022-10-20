import {ConnectorOptions} from "@vql/connector"

/**
 * Connector options for Sia.
 */
type SiaConnectorOptions = ConnectorOptions & {
  /**
   * The URL to the Skynet portal.
   */
  portal: string
}

export default SiaConnectorOptions
