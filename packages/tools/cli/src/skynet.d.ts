declare module "@skynetlabs/skynet-nodejs" {
  export function getEntryLink(publicKey: string, dataKey: string): string
  export function genKeyPairAndSeed(): {publicKey: string; privateKey: string; seed: string}
  export function genKeyPairFromSeed(seed: string): {publicKey: string; privateKey: string}
  export const defaultPortalUrl: string

  export class SkynetClient {
    constructor(portal: string, options: {skynetApiKey: string})

    downloadData(skylink: string, customOptions?: any): Promise<any>
    getMetadata(skylinkUrl: string, customOptions?: any): Promise<any>

    dbV2: {
      getJSON(publicKey: string, dataKey: string): Promise<{data: any; dataLink: string}>

      setJSON(
        privateKey: string,
        dataKey: string,
        doc: any
      ): Promise<{data: any; dataLink: string}>

      deleteJSON(privateKey: string, dataKey: string): Promise<void>
    }
  }
}
