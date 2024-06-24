import { Summary, SummaryData, SummaryToDownload } from "@/shared/models";
import Endpoint from "../endpoint";

class Summaries extends Endpoint {
  endpoint: string = "/api/summary";

  /**
   * Get all summaries
   * @param studyId The ID of the study
   */
  async getAll({ studyId }: { studyId: string }) {
    const response = await this.actions.get<Summary[]>(
      `${this.endpoint}/list?study_id=${studyId}`,
    );
    return response.data;
  }

  /**
   * Get a summary
   * @param summaryId The ID of the summary
   */
  async getOne({ summaryId }: { summaryId: string }) {
    const response = await this.actions.get<Summary>(
      `${this.endpoint}/${summaryId}`,
    );
    return response.data;
  }

  /**
   * Download a summary
   * @param summaryId The ID of the summary
   */
  async download({ summaryId }: { summaryId: string }) {
    const response = await this.actions.get(
      `${this.endpoint}/download/${summaryId}`,
      {
        serializer: "blob",
      },
    );
    const regex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const header = response.headers["content-disposition"] as string;
    const matches = regex.exec(header);
    const filename =
      matches != null && matches[1]
        ? matches[1].replace(/['"]/g, "")
        : "download.zip";
    const data = response.data as SummaryData;

    return { data, filename } as SummaryToDownload;
  }

  /**
   * Create a summary
   * @param studyId The ID of the study
   * @param deploymentIds: The IDs of the deployments to include in the summary
   */
  async create({
    studyId,
    deploymentIds,
  }: {
    studyId: string;
    deploymentIds: string[];
  }) {
    const response = await this.actions.post<Summary>(`${this.endpoint}`, {
      studyId,
      deploymentIds,
    });

    return response.data;
  }

  /**
   * Delete a summary
   * @param summaryId The ID of the summary
   */
  async delete({ summaryId }: { summaryId: string }) {
    await this.actions.delete(`${this.endpoint}/${summaryId}`);
  }
}

export default Summaries;
