import { DefaultSerializer, Endpoint, Json, StudyServiceRequest, StudyStatus, UUID, getSerializer } from "@/shared"
import { StudyOverview } from "@/shared/models"

export class Studies extends Endpoint {
  endpoint: string = "/api/studies-service"

  /**
   * Create a study
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
      studyId: string
      studyName: string
      studyDescription: string
    }) {
      const setInternalDescription = new StudyServiceRequest.SetInternalDescription(
        new UUID(studyId),
        studyName,
        studyDescription
      )
      const json: Json = DefaultSerializer
      const serializer = StudyServiceRequest.Serializer
      const serializedUpdateStudy = json.encodeToString(serializer, setInternalDescription)
  
      const response = await this.post(
        this.endpoint,
        serializedUpdateStudy
      )
      const serializedStudyStatus = JSON.stringify(response.data)
      const statusSerializer = getSerializer(StudyStatus)
      const studyStatus: StudyStatus = json.decodeFromString(
        statusSerializer,
        serializedStudyStatus
      )

      return studyStatus
    }

    /**
     * Get a study 
     * @param studyId The ID of the study
     */
    async getDetails({
      studyId,
    }: {
      studyId: string
    }) {
      const getStudyDetails = new StudyServiceRequest.GetStudyDetails(
        new UUID(studyId)
      )
      const json: Json = DefaultSerializer
      const serializer = StudyServiceRequest.Serializer
      const serializedGetStudy = json.encodeToString(serializer, getStudyDetails)
  
      const response = await this.post(
        this.endpoint,
        serializedGetStudy
      )

      const serializedStudyDetails = JSON.stringify(response.data)
      const detailSerializer = getSerializer(StudyStatus)
      const studyStatus: StudyStatus = json.decodeFromString(
        detailSerializer,
        serializedStudyDetails
      )

      return studyStatus
    }

    /**
     * Get overview of all studies this account is a researcher on
     */
    async getOverview() {
      const response = await this.get(
        '/api/studies/study-overview'
      )

      return response.data as StudyOverview[]
    }

    /**
     * Get the status for a study
     * @param studyId The ID of the study
     */
    async getStatus({
      studyId,
    }: {
      studyId: string
    }) {
      const getStudyStatus = new StudyServiceRequest.GetStudyStatus(
        new UUID(studyId)
      )
      const json: Json = DefaultSerializer
      const serializer = StudyServiceRequest.Serializer
      const serializedGetStudyStatus = json.encodeToString(serializer, getStudyStatus)
  
      const response = await this.post(
        this.endpoint,
        serializedGetStudyStatus
      )

      const serializedStudyStatus = JSON.stringify(response.data)
      const statusSerializer = getSerializer(StudyStatus)
      const studyStatus: StudyStatus = json.decodeFromString(
        statusSerializer,
        serializedStudyStatus
      )

      return studyStatus
    }

    /**
     * Delete a study
     * @param studyId The ID of the study
     */
    async deleteStudy({
      studyId,
    }: {
      studyId: string
    }) {
      const deleteStudy = new StudyServiceRequest.Remove(
        new UUID(studyId)
      )
      const json: Json = DefaultSerializer
      const serializer = StudyServiceRequest.Serializer
      const serializedDeleteStudy = json.encodeToString(serializer, deleteStudy)
  
      await this.post(
        this.endpoint,
        serializedDeleteStudy
      )
    }
}
