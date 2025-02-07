import {
  StudyDetails,
  StudyInvitation,
  StudyProtocolSnapshot,
  StudyServiceRequest,
  StudyStatus,
  UUID,
  deserialize,
  sdk,
  serialize,
} from "@/shared";
import Endpoint from "../endpoint";

import { CarpClient } from "@/client";
import Researchers from "./researchers";
import Exports from "./exports";
import Recruitment from "./recruitment";
import Deployments from "./deployments";
import DataPoints from "./datapoints";
import Collections from "./collections";
import Files from "./files";

/**
 * Endpoint for interacting with a particular study
 */
class Study extends Endpoint {
  coreEndpoint: string = "/api/study-service";

  researchers: Researchers;

  exports: Exports;

  recruitment: Recruitment;

  deployments: Deployments;

  /**
   * @deprecated
   */
  dataPoints: DataPoints;

  collections: Collections;

  files: Files;

  constructor(client: CarpClient) {
    super(client);

    this.researchers = new Researchers(client);
    this.exports = new Exports(client);
    this.recruitment = new Recruitment(client);
    this.deployments = new Deployments(client);
    this.dataPoints = new DataPoints(client);
    this.collections = new Collections(client);
    this.files = new Files(client);
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
    const serializedUpdateStudy = serialize({
      request: setInternalDescription,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedUpdateStudy,
    );
    const studyStatus = deserialize({
      data: response.data,
      serializer: StudyStatus,
    }) as unknown as StudyStatus;

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
    const serializedGetStudy = serialize({
      request: getStudyDetails,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedGetStudy,
    );
    const studyStatus = deserialize({
      data: response.data,
      serializer: StudyDetails,
    }) as unknown as StudyDetails;

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
    const serializedGetStudyStatus = serialize({
      request: getStudyStatus,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedGetStudyStatus,
    );
    const studyStatus = deserialize({
      data: response.data,
      serializer: StudyStatus,
    }) as unknown as StudyStatus;

    return studyStatus;
  }

  /**
   * Delete a study
   * @param studyId The ID of the study
   */
  async delete({ studyId }: { studyId: string }) {
    const deleteStudy = new StudyServiceRequest.Remove(new UUID(studyId));
    const serializedDeleteStudy = serialize({
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
    const request = serialize({
      request: setInvitation,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(this.coreEndpoint, request);

    const studyStatus = deserialize({
      data: response.data,
      serializer: StudyStatus,
    }) as unknown as StudyStatus;

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
      protocol as unknown as sdk.cachet.carp.protocols.application.StudyProtocolSnapshot,
    );
    const request = serialize({
      request: setProtocol,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(this.coreEndpoint, request);

    const studyStatus = deserialize({
      data: response.data,
      serializer: StudyStatus,
    }) as unknown as StudyStatus;

    return studyStatus;
  }

  /**
   * Set a study as live
   * @param studyId The ID of the study
   */
  async goLive({ studyId }: { studyId: string }) {
    const goLive = new StudyServiceRequest.GoLive(new UUID(studyId));
    const request = serialize({
      request: goLive,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(this.coreEndpoint, request);

    const studyStatus = deserialize({
      data: response.data,
      serializer: StudyStatus,
    }) as unknown as StudyStatus;

    return studyStatus;
  }
}

export default Study;
