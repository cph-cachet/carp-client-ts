import { StudyOverview } from "@/shared/models";
import Endpoint from "./endpoint";

/**
 * Endpoint for overall studies belonging to the account
 */
class Studies extends Endpoint {
  endpoint: string = "/api/studies";

  /**
   * Get overview of all studies this account is a researcher on
   */
  async getOverview() {
    const response = await this.actions.get(`${this.endpoint}/study-overview`);

    return response.data as StudyOverview[];
  }
}

export default Studies;
