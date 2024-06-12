export class Token {
  access_token: string;

  refresh_token: string;

  token_type: string;

  scope: string;

  expires_in: number;

  constructor(
    access_token: string,
    refresh_token: string,
    token_type: string,
    scope: string,
    expires_in: number
  ) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.token_type = token_type;
    this.scope = scope;
    this.expires_in = expires_in;
  }

  toJSON(): TokenJSON {
    return {
      ...this, // no conversion needed
    };
  }

  // Calling both options is possible:
  // const token = JSON.parse(JSON.stringify(json), Token.reviver)
  // const token = Token.fromJSON(json)
  static fromJSON(json: TokenJSON | string): Token {
    if (typeof json === 'string') {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      return JSON.parse(json, Token.reviver) as Token;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const token = Object.create(Token.prototype);
    return Object.assign(token, json, {
      // no conversion needed
    }) as Token;
  }

  static reviver(
    key: string,
    value: TokenJSON | string
  ): Token | TokenJSON | string {
    return key === '' ? Token.fromJSON(value) : value;
  }
}

export interface TokenJSON {
  access_token: string;
  refresh_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
}

export interface SessionLoginParams {
  username: string;
  password: string;
  client_id: string;
  client_secret: string;
  grant_type: string;
}

export interface SessionRefreshParams {
  client_id: string;
  client_secret: string;
  grant_type: string;
  refresh_token: string;
}

export interface TokenIntrospectionParams {
  client_id: string;
  client_secret: string;
  token: string;
}

export interface UserRegister {
  accountId: string;
  password: string;
  firstName: string;
  lastName: string;
}
