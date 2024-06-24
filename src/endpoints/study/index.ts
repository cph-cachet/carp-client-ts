import {
  StudyInvitation,
  StudyProtocolSnapshot,
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
import Recruitment from "./recruitment";

/**
 * Endpoint for interacting with a particular study
 */
class Study extends Endpoint {
  coreEndpoint: string = "/api/study-service";

  researchers: Researchers;

  summaries: Summaries;

  recruitment: Recruitment;

  constructor(client: CarpClient) {
    super(client);
    this.researchers = new Researchers(client);
    this.summaries = new Summaries(client);
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

  /**
   * Set invitation information
   * @param studyId The ID of the study
   * @param title The title of the invitation
   * @param description The description of the invitation
   */
  async setInvitation({
    studyId,
    title,
    description,
  }: {
    studyId: string;
    title: string;
    description: string;
  }) {
    const setInvitation = new StudyServiceRequest.SetInvitation(
      new UUID(studyId),
      new StudyInvitation(title, description),
    );
    const request = serializeRequest({
      request: setInvitation,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(this.coreEndpoint, request);

    const studyStatus = deserializeResponse({
      response,
      responseType: StudyStatus,
    });

    return studyStatus;
  }

  /**
   * Set protocol
   * @param studyId The ID of the study
   * @param protocol The protocol to set
   */
  async setProtocol({
    studyId,
    protocol,
  }: {
    studyId: string;
    protocol: StudyProtocolSnapshot;
  }) {
    const setProtocol = new StudyServiceRequest.SetProtocol(
      new UUID(studyId),
      protocol,
    );
    const request = serializeRequest({
      request: setProtocol,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(this.coreEndpoint, request);

    const studyStatus = deserializeResponse({
      response,
      responseType: StudyStatus,
    });

    return studyStatus;
  }

  /**
   * Set a study as live
   * @param studyId The ID of the study
   */
  async goLive({ studyId }: { studyId: string }) {
    const goLive = new StudyServiceRequest.GoLive(new UUID(studyId));
    const request = serializeRequest({
      request: goLive,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(this.coreEndpoint, request);

    const studyStatus = deserializeResponse({
      response,
      responseType: StudyStatus,
    });

    return studyStatus;
  }
}

export default Study;
