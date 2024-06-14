import { DefaultSerializer, Endpoint, Json, StudyServiceRequest, StudyStatus, UUID, getSerializer } from "@/shared"

export class Studies extends Endpoint {
  endpoint: string = "/api/studies-service"

  /**
   *
   * @param name The name of the study
   * @param description The description of the study
   * @param ownerId The owner of the study, i.e the ID of the user creating the study. Must be a valid UUID
   * @returns
   */
  async create({
    name,
    description,
    ownerId,
  }: {
    name: string
    description: string
    ownerId: string
  }) {
    const createStudy = new StudyServiceRequest.CreateStudy(
      new UUID(ownerId),
      name,
      description
    )
    const json: Json = DefaultSerializer
    const serializer = StudyServiceRequest.Serializer
    const serializedCreateStudy = json.encodeToString(serializer, createStudy)

    const response = await this.post(
      this.endpoint,
      serializedCreateStudy
    )
    const serializedStudyStatus = JSON.stringify(response.data)
    const statusSerializer = getSerializer(StudyStatus)
    const studyStatus: StudyStatus = json.decodeFromString(
      statusSerializer,
      serializedStudyStatus
    )
    return studyStatus
  }
}
