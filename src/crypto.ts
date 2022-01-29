import { jose } from "../deps/jose.ts";

export interface KeyPair {
  publicKey: string;
  privateKey: string;
}

export async function generateKeyPair(): Promise<KeyPair> {
  const keyPair = await jose.generateKeyPair("RS256", {
    extractable: true,
    modulusLength: 4096,
  });
  return {
    publicKey: await jose.exportSPKI(keyPair.publicKey),
    privateKey: await jose.exportPKCS8(keyPair.privateKey),
  };
}
