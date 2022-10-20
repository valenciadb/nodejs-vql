import {SiaFileConnector} from "@vql/sia"
import {createTableTests} from "@vql/itg-test"

// (1) create connector to test
const portal = "https://siasky.net"
const connectorOptions = {
  portal,
  baseSkylink: "AADK2pY2jvPk-8igd8s_JcVRh6YDbbORz49ZZDePqwahHg"
}

const connector = new SiaFileConnector("default", connectorOptions)

// (2) create itg tests
createTableTests(connector)
