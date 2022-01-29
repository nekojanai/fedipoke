import { exportPKCS8, exportSPKI, generateKeyPair } from "../deps/jose.ts";

export interface KeyPair {
  publicKey: string;
  privateKey: string;
}

export async function generateKeys(): Promise<KeyPair> {
  const keyPair = await generateKeyPair("RS256", {
    extractable: true,
    modulusLength: 4096,
  });
  return {
    publicKey: await exportSPKI(keyPair.publicKey),
    privateKey: await exportPKCS8(keyPair.privateKey),
  };
}
