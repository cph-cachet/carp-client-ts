import { User } from "@/shared/models";
import Endpoint from "../endpoint";

class Researchers extends Endpoint {
  endpoint: string = "/api/studies";

  /**
   * Add researcher to a study
   * @param studyId The ID of the study
   * @param email The email of the researcher to add
   */
  async addResearcherToStudy({
    studyId,
    email,
  }: {
    studyId: string;
    email: string;
  }) {
    const query = new URLSearchParams({ email }).toString();
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
