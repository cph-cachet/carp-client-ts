import {
  Endpoint,
  StudyServiceRequest,
  StudyStatus,
  UUID,
  deserializeResponse,
  serializeRequest,
} from "@/shared"
import { StudyOverview } from "@/shared/models"
import { User } from "@/shared/models/general"

export class Studies extends Endpoint {
  coreEndpoint: string = "/api/study-service"
  wsEndpoint: string = "/api/studies"

  /**
   * Create a study
   * @param name The name of the study
   * @param description The description of the study
   * @param ownerId The owner of the study, i.e the ID of the user creating the study. Must be a valid UUID
   * @returns
   */
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
    name: string
    description: string
    ownerId: string
  }) {
    const createStudy = new StudyServiceRequest.CreateStudy(
      new UUID(ownerId),
      name,
      description
    )
    const serializedCreateStudy = serializeRequest({
      request: createStudy,
      serializer: StudyServiceRequest.Serializer,
    })

    const response = await this.post(this.coreEndpoint, serializedCreateStudy)
    const studyStatus = deserializeResponse({
      response: response.data,
      responseType: StudyStatus,
    })
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
    const setInternalDescription =
      new StudyServiceRequest.SetInternalDescription(
        new UUID(studyId),
        studyName,
        studyDescription
      )
    const serializedUpdateStudy = serializeRequest({
      request: setInternalDescription,
      serializer: StudyServiceRequest.Serializer,
    })

    const response = await this.post(this.coreEndpoint, serializedUpdateStudy)
    const studyStatus = deserializeResponse({
      response: response.data,
      responseType: StudyStatus,
    })

    return studyStatus
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
      new UUID(studyId)
    )
    const serializedGetStudy = serializeRequest({
      request: getStudyDetails,
      serializer: StudyServiceRequest.Serializer,
    })

    const response = await this.post(this.coreEndpoint, serializedGetStudy)
    const studyStatus = deserializeResponse({
      response: response.data,
      responseType: StudyStatus,
    })

    return studyStatus
  }

  /**
   * Get overview of all studies this account is a researcher on
   */
  async getOverview() {
    const response = await this.get(`${this.wsEndpoint}/study-overview`)

    return response.data as StudyOverview[]
  }

  /**
   * Get the status for a study
   * @param studyId The ID of the study
   */
  async getStatus({ studyId }: { studyId: string }) {
    const getStudyStatus = new StudyServiceRequest.GetStudyStatus(
      new UUID(studyId)
    )
    const serializedGetStudyStatus = serializeRequest({
      request: getStudyStatus,
      serializer: StudyServiceRequest.Serializer,
    })

    const response = await this.post(
      this.coreEndpoint,
      serializedGetStudyStatus
    )
    const studyStatus = deserializeResponse({
      response: response.data,
      responseType: StudyStatus,
    })

    return studyStatus
  }

  /**
   * Delete a study
   * @param studyId The ID of the study
   */
  async deleteStudy({ studyId }: { studyId: string }) {
    const deleteStudy = new StudyServiceRequest.Remove(new UUID(studyId))
    const serializedDeleteStudy = serializeRequest({
      request: deleteStudy,
      serializer: StudyServiceRequest.Serializer,
    })

    await this.post(this.coreEndpoint, serializedDeleteStudy)
  }

  /**
   * Add researcher to a study
   * @param studyId The ID of the study
   * @param email The email of the researcher to add
   */
  async addResearcher({ studyId, email }: { studyId: string; email: string }) {
    const query = new URLSearchParams({ email }).toString()
    await this.post(`${this.wsEndpoint}/${studyId}/researchers/add`, query, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
  }

  /**
   * Get all researchers for a study
   * @param studyId The ID of the study
   * @returns The list of researchers
   */
  async getResearchers({ studyId }: { studyId: string }) {
    const response = await this.get(`${this.wsEndpoint}/${studyId}/researchers`)
    return response.data as User[]
  }

  /**
   * Remove a researcher from a study
   * @param studyId The ID of the study
   * @param email The email of the researcher to remove
   */
  async removeResearcher({
    studyId,
    email,
  }: {
    studyId: string
    email: string
  }) {
    const query = new URLSearchParams({ email }).toString()
    await this.delete(`${this.wsEndpoint}/${studyId}/researchers?${query}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
  }
}
