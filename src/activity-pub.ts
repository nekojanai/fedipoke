import { createUserApiUrl } from "./utils.ts";

export interface ActorIcon {
  type: "Image";
  url: string;
  sensitive: boolean;
}

export interface ActorPublicKey {
  id: string;
  owner: string;
  publicKeyPem: string;
}

export interface Actor {
  "@context": string[];
  type: "Person";
  id: string;
  name: string;
  inbox: string;
  outbox: string;
  icon?: ActorIcon;
  publicKey: ActorPublicKey;
}

export const baseContext = [
  "https://www.w3.org/ns/activitystreams",
  "https://w3id.org/security/v1",
];

export function newActorIcon(url: string, sensitive: boolean): ActorIcon {
  return {
    type: "Image",
    url,
    sensitive,
  };
}

export function newActorPublicKey(
  username: string,
  domain: string,
  publicKeyPem: string
): ActorPublicKey {
  return {
    id: createUserApiUrl(domain, username, "#main-key"),
    owner: createUserApiUrl(domain, username),
    publicKeyPem,
  };
}

export function newActor(
  username: string,
  domain: string,
  publicKey: ActorPublicKey,
  icon?: ActorIcon
): Actor {
  return {
    "@context": baseContext,
    type: "Person",
    id: createUserApiUrl(domain, username),
    name: username,
    inbox: createUserApiUrl(domain, username, "/inbox"),
    outbox: createUserApiUrl(domain, username, "/outbox"),
    icon,
    publicKey,
  };
}
