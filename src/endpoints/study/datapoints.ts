import { DataPoint, DataPointResponse } from "@/shared/models";
import Endpoint from "../endpoint";

/**
 * @deprecated Will be replaced with the new DataStreams endpoint
 */
class DataPoints extends Endpoint {
  endpoint: string = "/api/deployments";

  /**
   * Add new data point
   * @param dataPoint The data point to add
   * @param studyDeploymentId The ID of the study deployment
   * @deprecated
   */
  async add({
    dataPoint,
    studyDeploymentId,
  }: {
    dataPoint: DataPoint;
    studyDeploymentId: string;
  }) {
    const response = await this.actions.post<DataPointResponse>(
      `${this.endpoint}/${studyDeploymentId}/data-points`,
      dataPoint,
    );

    return response.data;
  }

  /**
   * Get all data points for a study deployment
   * @param studyDeploymentId The ID of the study deployment
   * @deprecated
   */
  async getAll({ studyDeploymentId }: { studyDeploymentId: string }) {
    const response = await this.actions.get<DataPointResponse[]>(
      `${this.endpoint}/${studyDeploymentId}/data-points`,
    );

    return response.data;
  }

  /**
   * Get a data point by ID
   * @param studyDeploymentId The ID of the study deployment
   * @param dataPointId The ID of the data point
   * @deprecated
   */
  async getById({
    studyDeploymentId,
    dataPointId,
  }: {
    studyDeploymentId: string;
    dataPointId: number;
  }) {
    const response = await this.actions.get<DataPointResponse>(
      `${this.endpoint}/${studyDeploymentId}/data-points/${dataPointId}`,
    );

    return response.data;
  }

  /**
   * Get all datapoints with a query
   * @param studyDeploymentId The ID of the study deployment
   * @param query The query to filter the data points
   * @deprecated
   */
  async getAllWithQuery({
    studyDeploymentId,
    query,
  }: {
    studyDeploymentId: string;
    query: string;
  }) {
    const response = await this.actions.get<DataPointResponse[]>(
      `${this.endpoint}/${studyDeploymentId}/data-points?query?=${query}`,
    );

    return response.data;
  }
}

export default DataPoints;
