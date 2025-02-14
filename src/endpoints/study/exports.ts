import { Export, ExportData, ExportToDownload } from "@/shared";
import Endpoint from "../endpoint";

class Exports extends Endpoint {
  endpoint: string = "/api/studies";

  /**
   * Get all summaries
   * @param studyId The ID of the study
   */
  async getAll({ studyId }: { studyId: string }) {
    const response = await this.actions.get<Export[]>(
      `${this.endpoint}/${studyId}/exports`,
    );
    return response.data;
  }

  /**
   * Download a summary
   * @param exportId The ID of the summary
   */
  async download({ studyId, exportId }: { studyId: string; exportId: string }) {
    const response = await this.actions.get(
      `${this.endpoint}/${studyId}/exports/${exportId}`,
      {
        responseType: "blob",
      },
    );
    const regex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const header = response.headers["content-disposition"] as string;
    const matches = regex.exec(header);
    const filename =
      matches != null && matches[1]
        ? matches[1].replace(/['"]/g, "")
        : "download.zip";
    const data = response.data as ExportData;

    return { data, filename } as ExportToDownload;
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
    const response = await this.actions.post<Export>(
      `${this.endpoint}/${studyId}/exports/summaries`,
      {
        deploymentIds,
      },
    );

    return response.data;
  }

  /**
   * Delete a summary
   * @param exportId The ID of the summary
   */
  async delete({ studyId, exportId }: { studyId: string; exportId: string }) {
    await this.actions.delete(
      `${this.endpoint}/${studyId}/exports/${exportId}`,
    );
  }
}

export default Exports;
