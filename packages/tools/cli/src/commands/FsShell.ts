import {FsConnector} from "@vql/fs"
import Shell from "./Shell"

/**
 * A shell command with a fs connector.
 */
export default class FsShell extends Shell {
  /**
   * The command description.
   */
  readonly desc = "Run a shell for running queries one by one on Local Filesystem."

  /** @override */
  protected createConnector({baseDirPath}: any): Promise<FsConnector> {
    return Promise.resolve(new FsConnector("default", {baseDirPath}))
  }
}
