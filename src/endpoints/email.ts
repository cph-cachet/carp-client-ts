import { GenericEmailRequest } from "@/shared";
import Endpoint from "./endpoint";

class Email extends Endpoint {
  endpoint: string = "/api/email";

  async sendEmail(emailRequest: GenericEmailRequest) {
    await this.actions.post(`${this.endpoint}/send-generic`, emailRequest);
  }
}

export default Email;
