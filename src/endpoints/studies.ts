import { StudyOverview } from "@/shared/models";
import Endpoint from "./endpoint";
import {
  StudyServiceRequest,
  StudyStatus,
  UUID,
  deserialize,
  serialize,
} from "@/shared";

/**
 * Endpoint for overall studies belonging to the account
 */
class Studies extends Endpoint {
  endpoint: string = "/api/studies";

  coreEndpoint: string = "/api/study-service";

  /**
   * Get overview of all studies this account is a researcher on
   */
  async getOverview() {
    const response = await this.actions.get(
      `${this.endpoint}/studies-overview`,
    );

    return response.data as StudyOverview[];
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
    const serializedCreateStudy = serialize({
      request: createStudy,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedCreateStudy,
    );
    const studyStatus = deserialize({
      data: response.data,
      serializer: StudyStatus,
    });
    return studyStatus as unknown as StudyStatus;
  }
}

export default Studies;
