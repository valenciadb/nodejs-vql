import os from "node:os"
import path from "node:path"
import {FsConnector} from "@vql/fs"
import {createTableTests} from "@vql/itg-test"

// (1) create connector to test
const connectorOptions = {
  baseDirPath: path.join(os.tmpdir(), "vql", new Date().valueOf().toString())
}

const connector = new FsConnector("default", connectorOptions)

// (2) create itg tests
createTableTests(connector)
