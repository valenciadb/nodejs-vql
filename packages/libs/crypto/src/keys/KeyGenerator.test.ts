import expected from "@akromio/expected"
import KeyGenerator from "./KeyGenerator"

suite(import.meta.url, () => {
  const gen = new KeyGenerator()

  suite("generateKeyFromSeed()", () => {
    test("when called, a CryptoKey must be generated and returned", async () => {
      // (1) act
      const out = await gen.generateKeyFromSeed("my seed", "my salt", 256)
      // (2) assessment
      expected(out)
        .toBe("CryptoKey")
        .toHave({
          type: "secret",
          extractable: false,
          algorithm: {name: "AES-CBC", length: 256},
          usages: ["encrypt", "decrypt"]
        })
    })
  })
})
