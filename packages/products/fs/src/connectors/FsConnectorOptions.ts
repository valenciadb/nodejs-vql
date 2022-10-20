import {ConnectorOptions} from "@vql/connector"

/**
 * The options for creating a filesystem connector.
 */
type FsConnectorOptions = ConnectorOptions & {
  /**
   * The base directory path where the database starts.
   */
  baseDirPath: string
}

export default FsConnectorOptions
