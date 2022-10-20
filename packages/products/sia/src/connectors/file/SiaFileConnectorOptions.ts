import SiaConnectorOptions from "../SiaConnectorOptions"

/**
 * Options for a SiaFilesConnector.
 */
type SiaFileConnectorOptions = SiaConnectorOptions & {
  /**
   * The Skylink to the root directory where the database
   * is.
   */
  baseSkylink: string
}

export default SiaFileConnectorOptions
