import Endpoint from "./endpoint";

class Accounts extends Endpoint {
  endpoint: string = "/api/accounts";

  async invite({ emailAddress, role }: { emailAddress: string; role: string }) {
    await this.actions.post(`${this.endpoint}/invite`, { emailAddress, role });
  }

  async isAccountOfRole({
    emailAddress,
    role,
  }: {
    emailAddress: string;
    role: string;
  }) {
    return this.actions.post(`${this.endpoint}/role`, { emailAddress, role });
  }

  async getRedirectURIs() {
    return this.actions.get<string[]>(`${this.endpoint}/redirect-uris`);
  }
}

export default Accounts;
