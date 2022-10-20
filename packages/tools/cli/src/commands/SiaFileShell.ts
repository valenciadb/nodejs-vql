import {SiaFileConnector} from "@vql/sia"
import Shell from "./Shell"

/**
 * A shell command with a fs connector.
 */
export default class LfsShell extends Shell {
  /**
   * The command description.
   */
  readonly desc = "Run a shell for running queries one by one on Sia File."

  /**
   * The command options.
   */
  readonly options: any = {
    vqlFilePath: {
      alias: ["q"],
      type: "string",
      desc: "VQL script file to load."
    },

    paramFilePath: {
      alias: ["p"],
      type: "string",
      desc: "Parameters file to use with the script."
    },

    portal: {
      type: "string",
      desc: "Skynet portal to use.",
      default: "https://siasky.net"
    }
  }

  /** @override */
  protected createConnector({portal, baseSkylink}: any): Promise<SiaFileConnector> {
    return Promise.resolve(new SiaFileConnector("default", {portal, baseSkylink}))
  }
}
