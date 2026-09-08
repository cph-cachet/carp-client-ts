import { EnableSelfSignupRequest, SelfSignupConfig } from "@/shared";
import Endpoint from "../endpoint";

/**
 * Endpoint for administering self-signup of a study
 */
class SelfSignup extends Endpoint {
  endpoint: string = "/api/studies";

  /**
   * Get the current self-signup config/status for a study
   * @param studyId The ID of the study
   * @returns The config, or null if self-signup has never been enabled
   */
  async getConfig({ studyId }: { studyId: string }) {
    const response = await this.actions.get<SelfSignupConfig | "">(
      `${this.endpoint}/${studyId}/self-signup`,
    );

    // The service answers 200 with an empty body when self-signup has never been enabled.
    return response.data === "" ? null : response.data;
  }

  /**
   * Enable self-signup for a study, or reconfigure it if it was already enabled
   * or ended before. The study must be live and the participant role must exist
   * on its protocol. The short code is generated on first enable only, and
   * survives an enable -> end -> re-enable cycle.
   * @param studyId The ID of the study
   * @param participantRoleName The participant role to assign to signed up participants
   * @param clientId The ID of the client the magic links redirect to
   * @param redirectUri The URI the magic links redirect to
   * @param maxParticipants The lifetime cap on participants
   * @param subdomain The subdomain of the magic links
   * @param expirationSeconds The lifetime of the magic links, at most 30 days
   */
  async enable({
    studyId,
    participantRoleName,
    clientId,
    redirectUri,
    maxParticipants,
    subdomain,
    expirationSeconds,
  }: EnableSelfSignupRequest) {
    const response = await this.actions.put<SelfSignupConfig>(
      `${this.endpoint}/${studyId}/self-signup`,
      {
        participantRoleName,
        clientId,
        redirectUri,
        maxParticipants,
        subdomain,
        expirationSeconds,
      },
    );

    return response.data;
  }

  /**
   * End self-signup for a study. The short code and cumulative participant count
   * are kept, so re-enabling later resumes under the same code.
   * @param studyId The ID of the study
   */
  async end({ studyId }: { studyId: string }) {
    const response = await this.actions.delete<SelfSignupConfig>(
      `${this.endpoint}/${studyId}/self-signup`,
    );

    return response.data;
  }
}

export default SelfSignup;
