import {
  StudyServiceRequest,
  StudyStatus,
  UUID,
  deserializeResponse,
  serializeRequest,
} from "@/shared";
import Endpoint from "../endpoint";

import { CarpClient } from "@/client";
import Researchers from "./researchers";
import Summaries from "./summaries";

/**
 * Endpoint for interacting with a particular study
 */
class Study extends Endpoint {
  coreEndpoint: string = "/api/study-service";

  researchers: Researchers;

  summaries: Summaries;

  constructor(client: CarpClient) {
    super(client);
    this.researchers = new Researchers(client);
    this.summaries = new Summaries(client);
  }

  /**
   * Create a study
   * @param name The name of the study
   * @param description The description of the study
   * @param ownerId The owner of the study, i.e the ID of the user creating the study. Must be a valid UUID
   * @returns The study status
   */
  async create({
    name,
    description,
    ownerId,
  }: {
    name: string;
    description: string;
    ownerId: string;
  }) {
    const createStudy = new StudyServiceRequest.CreateStudy(
      new UUID(ownerId),
      name,
      description,
    );
    const serializedCreateStudy = serializeRequest({
      request: createStudy,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedCreateStudy,
    );
    const studyStatus = deserializeResponse({
      response: response.data,
      responseType: StudyStatus,
    });
    return studyStatus;
  }

  /**
   * Set a study description
   * @param studyId The ID of the study
   * @param studyName The name of the study
   * @param studyDescription The description of the study
   */
  async setDescription({
    studyId,
    studyName,
    studyDescription,
  }: {
    studyId: string;
    studyName: string;
    studyDescription: string;
  }) {
    const setInternalDescription =
      new StudyServiceRequest.SetInternalDescription(
        new UUID(studyId),
        studyName,
        studyDescription,
      );
    const serializedUpdateStudy = serializeRequest({
      request: setInternalDescription,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedUpdateStudy,
    );
    const studyStatus = deserializeResponse({
      response: response.data,
      responseType: StudyStatus,
    });

    return studyStatus;
  }

  /**
   * Get a study
   * @param studyId The ID of the study
   */
  /**
   * Get study details
   * @param studyId The ID of the study
   */
  async getDetails({ studyId }: { studyId: string }) {
    const getStudyDetails = new StudyServiceRequest.GetStudyDetails(
      new UUID(studyId),
    );
    const serializedGetStudy = serializeRequest({
      request: getStudyDetails,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedGetStudy,
    );
    const studyStatus = deserializeResponse({
      response: response.data,
      responseType: StudyStatus,
    });

    return studyStatus;
  }

  /**
   * Get the status for a study
   * @param studyId The ID of the study
   */
  async getStatus({ studyId }: { studyId: string }) {
    const getStudyStatus = new StudyServiceRequest.GetStudyStatus(
      new UUID(studyId),
    );
    const serializedGetStudyStatus = serializeRequest({
      request: getStudyStatus,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedGetStudyStatus,
    );
    const studyStatus = deserializeResponse({
      response: response.data,
      responseType: StudyStatus,
    });

    return studyStatus;
  }

  /**
   * Delete a study
   * @param studyId The ID of the study
   */
  async delete({ studyId }: { studyId: string }) {
    const deleteStudy = new StudyServiceRequest.Remove(new UUID(studyId));
    const serializedDeleteStudy = serializeRequest({
      request: deleteStudy,
      serializer: StudyServiceRequest.Serializer,
    });

    await this.actions.post(this.coreEndpoint, serializedDeleteStudy);
  }
}

export default Study;
