import { Role, User } from "@/shared/models";
import Endpoint from "../endpoint";

class Researchers extends Endpoint {
  endpoint: string = "/api/studies";

  /**
   * Add user with email to a study with a role
   * @param studyId The ID of the study
   * @param email The email of the researcher to add
   * @param role The role of the researcher to add (RESEARCHER or RESEARCH_ASSISTANT)
   */
  async addResearcherToStudy({
    studyId,
    email,
    role,
  }: {
    studyId: string;
    email: string;
    role: Role;
  }) {
    const query = new URLSearchParams({ email, role }).toString();
    await this.actions.post(
      `${this.endpoint}/${studyId}/researchers/add`,
      query,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
  }

  /**
   * Get all researchers for a study
   * @param studyId The ID of the study
   * @returns The list of researchers
   */
  async getStudyResearchers({ studyId }: { studyId: string }) {
    const response = await this.actions.get(
      `${this.endpoint}/${studyId}/researchers`,
    );
    return response.data as User[];
  }

  /**
   * Get all research assistants for a study
   * @param studyId The ID of the study
   * @returns The list of research assistants
   */
  async getStudyResearchAssistants({ studyId }: { studyId: string }) {
    const response = await this.actions.get(
      `${this.endpoint}/${studyId}/research-assistants`,
    );
    return response.data as User[];
  }

  /**
   * Remove a researcher from a study
   * @param studyId The ID of the study
   * @param email The email of the researcher to remove
   */
  async removeResearcherFromStudy({
    studyId,
    email,
  }: {
    studyId: string;
    email: string;
  }) {
    const query = new URLSearchParams({ email }).toString();
    await this.actions.delete(
      `${this.endpoint}/${studyId}/researchers?${query}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
  }
}

export default Researchers;
