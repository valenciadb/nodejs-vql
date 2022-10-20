import expected from "@akromio/expected"
import ParamBind from "../ParamBind"
import CryptoKeyStmt from "./CryptoKeyStmt"

suite(import.meta.url, () => {
  suite("hasCryptoKey()", () => {
    test("when _key not contains usages, false must be returned", () => {
      // (1) act
      const out = new CryptoKeyStmt("master", new ParamBind("key")).hasCryptoKey()

      // (2) assessment
      expected(out).equalTo(false)
    })
  })
})
