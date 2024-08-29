import { InformedConsentFile, InformedConsentResponse } from "@/shared/models";
import Endpoint from "../endpoint";

class InformedConsent extends Endpoint {
  endpoint: string = "/api/deployments";

  /**
   * Add new informed consent
   * @param informedConsent The informed consent to add
   * @param studyDeploymentId The ID of the study deployment
   */
  async add({
    informedConsent,
    studyDeploymentId,
  }: {
    informedConsent: InformedConsentFile;
    studyDeploymentId: string;
  }) {
    const response = await this.actions.post<InformedConsentResponse>(
      `${this.endpoint}/${studyDeploymentId}/consent-documents`,
      informedConsent,
    );

    return response.data;
  }

  /**
   * Get informed consent
   * @param studyDeploymentId The ID of the study deployment
   * @param informedConsentId The ID of the informed consent
   */
  async get({
    studyDeploymentId,
    informedConsentId,
  }: {
    studyDeploymentId: string;
    informedConsentId: number;
  }) {
    const response = await this.actions.get<InformedConsentResponse>(
      `${this.endpoint}/${studyDeploymentId}/consent-documents/${informedConsentId}`,
    );

    return response.data;
  }

  /**
   * Ge all informed consents
   * @param studyDeploymentId The ID of the study deployment
   */
  async getAll({ studyDeploymentId }: { studyDeploymentId: string }) {
    const response = await this.actions.get<InformedConsentResponse[]>(
      `${this.endpoint}/${studyDeploymentId}/consent-documents`,
    );

    return response.data;
  }

  /**
   * Delete informed consent
   * @param studyDeploymentId The ID of the study deployment
   * @param informedConsentId The ID of the informed consent
   */
  async delete({
    studyDeploymentId,
    informedConsentId,
  }: {
    studyDeploymentId: string;
    informedConsentId: number;
  }) {
    await this.actions.delete(
      `${this.endpoint}/${studyDeploymentId}/consent-documents/${informedConsentId}`,
    );
  }
}

export default InformedConsent;
