import { Endpoint } from "@/shared/endpoint"

export type CarpToken = {
  access_token: string
}

export class Auth extends Endpoint {
  private realm: string = import.meta.env.VITE_AUTH_REALM

  async login(params: {
    username: string
    password: string
    client_id: string
    client_secret: string
    grant_type: string
  }) {
    const query = new URLSearchParams(params).toString()

    const response = await this.post<CarpToken>(
      `/realms/${this.realm}/protocol/openid-connect/token`,
      query,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      }
    )

    return response.data
  }

  async getAccountId(params: { token: string, clientId: string, clientSecret: string }) {
    const query = new URLSearchParams(params).toString()
      const response = await this.post(
        '/realms/Carp/protocol/openid-connect/token/introspect',
        query,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const data = response.data as Record<string, unknown>;
      return data.sub as string;
  }
}
