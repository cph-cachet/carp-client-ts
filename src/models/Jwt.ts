export interface Jwt {
  exp: number | undefined;
  iat: number | undefined;
  iss: string | undefined;
  jti: string | undefined;
  sub: string | undefined;
  typ: string | undefined;
  azp: string | undefined;
  aud: string | undefined;
  sid: string | undefined;
  session_state: string | undefined;
  acr: string | undefined;
  realm_access: RealmAccess | undefined;
  resource_access: ResourceAccess | undefined;
  scope: string | undefined;
  email_verified: boolean | undefined;
  preferred_username: string | undefined;
  username: string | undefined;
  email: string | undefined;
  name: string | undefined;
  given_name: string | undefined;
  family_name: string | undefined;
  client_id: string | undefined;
  active: boolean | undefined;
}

export interface RealmAccess {
  roles: string[] | undefined;
}

export interface ResourceAccess {
  account: Account | undefined;
}

export interface Account {
  roles: string[] | undefined;
}
