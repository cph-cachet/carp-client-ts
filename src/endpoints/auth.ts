import { Endpoint } from "@/shared/endpoint"

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

    return await this.post<{ access_token: string }>(
      `/realms/${this.realm}/protocol/openid-connect/token`,
      query,
      {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    )
  }
}
