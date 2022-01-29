export const webFingerRoute = "/.well-known/well-known";

export interface WebFingerLink {
  rel: string;
  type: string;
  href: string;
}

export interface WebFinger {
  subject: string;
  links: WebFingerLink[];
}

export function newWebfingerLink(href: string): WebFingerLink {
  return {
    rel: "self",
    type: "application/activity+pub",
    href,
  };
}

export function newWebfinger(username: string, domain: string): WebFinger {
  return {
    subject: `acct:${username}@${domain}}`,
    links: [newWebfingerLink(createUserApiUrl(domain, username))],
  };
}
