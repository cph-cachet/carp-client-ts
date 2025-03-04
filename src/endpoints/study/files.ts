import { CarpFile } from "@/shared";
import Endpoint from "../endpoint";

class Files extends Endpoint {
  endpoint: string = "/api/studies";

  /**
   * Get a file
   * @param studyId The ID of the study
   * @param fileId The ID of the file
   * @returns The file
   */
  async getFile({ studyId, fileId }: { studyId: string; fileId: number }) {
    const response = await this.actions.get(
      `${this.endpoint}/${studyId}/files/${fileId}`,
    );

    return response.data as CarpFile;
  }

  /**
   * Get all files
   * @param studyId The ID of the study
   * @returns The list of files
   */
  async getFiles({ studyId }: { studyId: string }) {
    const response = await this.actions.get(
      `${this.endpoint}/${studyId}/files`,
    );

    return response.data as CarpFile[];
  }

  /**
   * Download a file
   * @param studyId The ID of the study
   * @param fileId The ID of the file
   * @returns The file
   */
  async downloadFile({ studyId, fileId }: { studyId: string; fileId: number }) {
    const response = await this.actions.get(
      `${this.endpoint}/${studyId}/files/${fileId}/download`,
      {
        responseType: "blob",
      },
    );

    return response.data as File;
  }

  /**
   * Create a file
   * @param studyId The ID of the study
   * @param formData The file data and metadata
   * @returns The created file
   */
  async createFile({
    studyId,
    formData,
  }: {
    studyId: string;
    formData: FormData;
  }) {
    const response = await this.actions.post(
      `${this.endpoint}/${studyId}/files`,
      formData,
      {
        headers: {
          "Content-Type": "undefined",
        },
      },
    );

    return response.data as CarpFile;
  }
}

export default Files;
