import {SiaFileConnector} from "@vql/sia"
import {createTableTests} from "@vql/itg-test"

// (1) create connector to test
const portal = "https://web3portal.com"
const connectorOptions = {
  portal,
  baseSkylink: "AAB-Z5RcNJn454tmaw-VI9l7-bs9d6obXOzJuVgeM5ZnEQ",
  apiKey: "99FU0HQQ8NE54OCS6C8I0C3NQJG5JITEIG1QJESJUCBKUV44FR1G"
}

const connector = new SiaFileConnector("default", connectorOptions)

// (2) create itg tests
createTableTests(connector)
