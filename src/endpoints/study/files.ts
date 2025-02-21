import { CarpFile } from "@/shared";
import Endpoint from "../endpoint";

class Files extends Endpoint {
  endpoint: string = "/api/studies";

  async getFile({ studyId, fileId }: { studyId: string; fileId: number }) {
    const response = await this.actions.get(
      `${this.endpoint}/${studyId}/files/${fileId}`,
    );

    return response.data as CarpFile;
  }

  async getFiles({ studyId }: { studyId: string }) {
    const response = await this.actions.get(
      `${this.endpoint}/${studyId}/files`,
    );

    return response.data as CarpFile[];
  }

  async downloadFile({ studyId, fileId }: { studyId: string; fileId: number }) {
    const response = await this.actions.get(
      `${this.endpoint}/${studyId}/files/${fileId}/download`,
    );

    return response.data as File;
  }

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
