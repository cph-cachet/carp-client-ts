import { User } from "@/shared/models";
import Endpoint from "../endpoint";

class Researchers extends Endpoint {
  endpoint: string = "/api/studies";

  /**
   * @deprecated.
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
   * Add researcher assistant to a study
   * @param studyId The ID of the study
   * @param email The email of the researcher assistant to add
   */
  async addResearcherAssistantToStudy({
    studyId,
    email,
  }: {
    studyId: string;
    email: string;
  }) {
    const query = new URLSearchParams({ email }).toString();
    await this.actions.post(
      `${this.endpoint}/${studyId}/researcher-assistants/add`,
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
   * Get all researcher assistants for a study
   * @param studyId The ID of the study
   * @returns The list of researcher assistants
   */
  async getStudyResearcherAssistants({ studyId }: { studyId: string }) {
    const response = await this.actions.get(
      `${this.endpoint}/${studyId}/researcher-assistants`,
    );
    return response.data as User[];
  }

  /**
   * @deprecated
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

  /**
   * Remove a researcher assistant from a study
   * @param studyId The ID of the study
   * @param email The email of the researcher to remove
   */
  async removeResearcherAssistantFromStudy({
    studyId,
    email,
  }: {
    studyId: string;
    email: string;
  }) {
    const query = new URLSearchParams({ email }).toString();
    await this.actions.delete(
      `${this.endpoint}/${studyId}/researcher-assistants?${query}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
  }
}

export default Researchers;
