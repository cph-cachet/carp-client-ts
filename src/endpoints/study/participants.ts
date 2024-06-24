import {
  ArrayList,
  ListSerializer,
  Participant,
  RecruitmentServiceRequest,
  UUID,
  deserialize,
  getSerializer,
  serialize,
} from "@/shared";
import Endpoint from "../endpoint";
import { AnonymousLinksRequest, AnonymousLinksResponse } from "@/shared/models";

class StudyParticipants extends Endpoint {
  endpoint: string = "/api/studies";

  coreEndpoint: string = "/api/recruitment-service";

  /**
   * Add participants to a study
   * @param studyId The ID of the study
   * @param emails The emails of the participants to add
   */
  async add({
    studyId,
    participantIds: emails,
  }: {
    studyId: string;
    participantIds: string[];
  }) {
    const response = await this.actions.post<Participant[]>(
      `${this.endpoint}/${studyId}/participants/add`,
      {
        emails,
      },
    );

    return response.data;
  }

  /**
   * Generate anonymous accounts
   * @param studyId The ID of the study
   * @param amountOfAccounts The number of accounts to generate
   * @param expirationSeconds The number of seconds until the accounts expire
   * @param redirectUri The URL to redirect participants to
   * @param participantRoleName What role to assign participants to when they are deployed to the study
   */
  async generateAnonymousAccounts({
    studyId,
    amountOfAccounts,
    expirationSeconds,
    redirectUri,
    participantRoleName,
  }: AnonymousLinksRequest) {
    const response = await this.actions.post<AnonymousLinksResponse>(
      `${this.endpoint}/${studyId}/participants/generate-anonymous-accounts`,
      {
        amountOfAccounts,
        expirationSeconds,
        redirectUri,
        participantRoleName,
      },
    );

    const header = response.headers["content-disposition"] as string;
    const regex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = regex.exec(header);
    const filename =
      matches != null && matches[1]
        ? matches[1].replace(/['"]/g, "")
        : "accounts.csv";

    return {
      filename,
      data: response.data.data,
    } as AnonymousLinksResponse;
  }

  /**
   * Get participants in a study
   * @param studyId The ID of the study
   */
  async getParticipants({ studyId }: { studyId: string }) {
    const getParticipants = new RecruitmentServiceRequest.GetParticipants(
      new UUID(studyId),
    );

    const request = serialize({
      request: getParticipants,
      serializer: RecruitmentServiceRequest.Serializer,
    });
    const response = await this.actions.post(this.coreEndpoint, request);
    const decodedResponse = deserialize({
      data: response.data,
      serializer: ListSerializer(getSerializer(Participant)),
    }) as ArrayList<Participant>;

    return decodedResponse.toArray();
  }
}

export default StudyParticipants;
