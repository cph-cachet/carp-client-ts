import { SelfSignupResult } from "@/shared";
import Endpoint from "./endpoint";

/**
 * Endpoint for public, unauthenticated self-signup by short code
 */
class SelfSignup extends Endpoint {
  endpoint: string = "/api/self-signup";

  /**
   * Sign up for the study a short code belongs to. Creates one new anonymous
   * account, deployment and participant, and returns its magic link.
   * @param shortCode The self-signup short code of the study
   */
  async signUp({ shortCode }: { shortCode: string }) {
    const response = await this.actions.post<SelfSignupResult>(
      `${this.endpoint}/${shortCode}`,
    );

    return response.data;
  }
}

export default SelfSignup;
