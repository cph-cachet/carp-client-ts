import { Endpoint } from "@/shared/endpoint"

export class Accounts extends Endpoint {
  endpoint: string = "/api/accounts"

  async invite({ emailAddress, role }: { emailAddress: string; role: string }) {
    await this.post(`${this.endpoint}/invite`, { emailAddress, role })
  }

  async isAccountOfRole({
    emailAddress,
    role,
  }: {
    emailAddress: string
    role: string
  }) {
    return this.post(`${this.endpoint}/role`, { emailAddress, role })
  }
}
