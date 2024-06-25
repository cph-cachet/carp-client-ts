import { CarpTestClient } from "..";
import Endpoint from "./endpoint";

export type CarpToken = {
  access_token: string;
  refresh_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
};

class Auth extends Endpoint {
  private realm: string = import.meta.env.VITE_AUTH_REALM;

  private baseUrl: string = import.meta.env.VITE_AUTH_BASE_URL;

  async login(params: {
    username: string;
    password: string;
    client_id: string;
    client_secret: string;
    grant_type: string;
  }) {
    const query = new URLSearchParams(params).toString();

    const response = await this.actions.post<CarpToken>(
      `${this.baseUrl}/realms/${this.realm}/protocol/openid-connect/token`,
      query,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    (this.client as CarpTestClient).setInternalToken(response.data);

    return response.data;
  }

  async getAccountId(params: {
    token: string;
    client_id: string;
    client_secret: string;
  }) {
    const query = new URLSearchParams(params).toString();
    const response = await this.actions.post(
      `${this.baseUrl}/realms/Carp/protocol/openid-connect/token/introspect`,
      query,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const data = response.data as Record<string, unknown>;
    return data.sub as string;
  }

  /**
   * Refresh the access token.
   */
  async refresh() {
    const params = {
      client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
      client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: (this.client as CarpTestClient).getInternalToken
        .refresh_token,
    };
    const query = new URLSearchParams(params).toString();
    const response = await this.actions.post<CarpToken>(
      `${this.baseUrl}/realms/${this.realm}/protocol/openid-connect/token`,
      query,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    (this.client as CarpTestClient).setInternalToken(response.data);
    this.client.setAuthToken(response.data.access_token);

    return response.data;
  }
}

export default Auth;
