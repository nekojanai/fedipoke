function createUserApiUrl(
  domain: string,
  username: string,
  additionalString?: string
): string {
  return `https://${domain}/api/v1/users/${username}/${additionalString}`;
}
