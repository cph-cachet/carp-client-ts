import { CarpDocument, Collection } from "@/shared/models";
import Endpoint from "../endpoint";
import { UUID } from "@/shared";

class Collections extends Endpoint {
  endpoint: string = "/api/studies";

  /**
   * Get collection by name
   * @param studyId The ID of the study
   * @param collectionName The name of the collection
   */
  async getByName({
    studyId,
    collectionName,
  }: {
    studyId: string;
    collectionName: string;
  }) {
    const response = await this.actions.get<Collection>(
      `${this.endpoint}/${studyId}/collections/${collectionName}`,
    );

    return response.data;
  }

  /**
   * Create a document in collection
   * @param studyId The ID of the study
   * @param collectionName The name of the collection
   * @param document The document to create
   * @param fileName The name of the file
   */
  async createDocument({
    studyId,
    collectionName,
    document,
    fileName = UUID.Companion.randomUUID().stringRepresentation,
  }: {
    studyId: string;
    collectionName: string;
    document: any;
    fileName?: string;
  }) {
    const response = await this.actions.post<CarpDocument>(
      `${this.endpoint}/${studyId}/collections/${collectionName}/${fileName}`,
      document,
    );

    return response.data;
  }

  /**
   * Get document from collection by its ID
   * @param studyId The ID of the study
   * @param documentId The ID of the document
   */
  async getDocumentById({
    studyId,
    documentId,
  }: {
    studyId: string;
    documentId: string;
  }) {
    const response = await this.actions.get<CarpDocument>(
      `${this.endpoint}/${studyId}/documents/${documentId}`,
    );

    return response.data;
  }

  /**
   * Get document from collection by its file name
   * @param studyId The ID of the study
   * @param collectionName The name of the collection
   * @param fileName The name of the document
   */
  async getDocumentByFileName({
    studyId,
    collectionName,
    fileName,
  }: {
    studyId: string;
    collectionName: string;
    fileName: string;
  }) {
    const response = await this.actions.get<CarpDocument>(
      `${this.endpoint}/${studyId}/collections/${collectionName}/${fileName}`,
    );

    return response.data;
  }

  /**
   * Update document by its ID
   * @param studyId The ID of the study
   * @param documentId The ID of the document
   * @param document The document to update
   * @param fileName The name of the file
   */
  async updateDocumentById({
    studyId,
    documentId,
    document,
    fileName,
  }: {
    studyId: string;
    documentId: string;
    document: any;
    fileName?: string;
  }) {
    const body = {
      name: fileName ?? (document.id as string),
      data: document,
    };
    const response = await this.actions.put<CarpDocument>(
      `${this.endpoint}/${studyId}/documents/${documentId}`,
      body,
    );

    return response.data;
  }

  /**
   * Delete document by its ID
   * @param studyId The ID of the study
   * @param documentId The ID of the document
   */
  async deleteDocumentById({
    studyId,
    documentId,
  }: {
    studyId: string;
    documentId: string;
  }) {
    await this.actions.delete(
      `${this.endpoint}/${studyId}/documents/${documentId}`,
    );
  }

  /**
   * Upload an image to S3 and return the URL
   * @param studyId The ID of the study
   * @param image The image to upload
   * @param fileName The name of the file
   */
  async uploadImage({ studyId, image }: { studyId: string; image: File }) {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("fileName", image.name);

    const response = await this.actions.post<string>(
      `${this.endpoint}/${studyId}/images`,
      formData,
      {
        headers: {
          "Content-Type": "undefined",
        },
      },
    );

    return response.data;
  }
}

export default Collections;
