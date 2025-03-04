/* eslint-disable no-underscore-dangle */
import {
  DataStreamBatch,
  DataStreamId,
  DataStreamsConfiguration,
  DataStreamServiceRequest,
  Measurement,
  MutableDataStreamSequence,
  NamespacedId,
  serialize,
  SyncPoint,
  toList,
  toLong,
  toSet,
  UUID,
} from "@/shared";
import Endpoint from "./endpoint";
import CarpDataStreamBatch from "@/shared/models/carpDataStreamBatch";

class DataStreams extends Endpoint {
  endpoint: string = "/api/data-stream-service";

  /**
   * Open data streams
   * @param studyDeploymentId The ID of the study deployment
   * @param expectedDataStreams The expected data streams configuration
   */
  async openDataStreams({
    studyDeploymentId,
    expectedDataStreams,
  }: {
    studyDeploymentId: string;
    expectedDataStreams: DataStreamsConfiguration.ExpectedDataStream[];
  }) {
    const request = new DataStreamServiceRequest.OpenDataStreams(
      new DataStreamsConfiguration(
        new UUID(studyDeploymentId),
        toSet(expectedDataStreams),
      ),
    );

    const serializedRequest = serialize({
      request,
      serializer: DataStreamServiceRequest.Serializer,
    });

    await this.actions.post(this.endpoint, serializedRequest);
  }

  /**
   * Append to data streams
   * @param studyDeploymentId The ID of the study deployment
   * @param batch The data stream batch
   */
  async appendToDataStreams({
    studyDeploymentId,
    batch,
  }: {
    studyDeploymentId: string;
    batch: DataStreamBatch;
  }) {
    const request = new DataStreamServiceRequest.AppendToDataStreams(
      new UUID(studyDeploymentId),
      batch,
    );

    const serializedRequest = serialize({
      request,
      serializer: DataStreamServiceRequest.Serializer,
    });

    await this.actions.post(this.endpoint, serializedRequest);
  }

  /**
   * Get data stream
   * @param dataStream The data stream ID
   * @param fromSequenceId The sequence ID to start from
   * @param toSequenceIdInclusive The sequence ID to end at
   * @returns The data stream sequence
   */
  async getDataStream({
    dataStream,
    fromSequenceId,
    toSequenceIdInclusive,
  }: {
    dataStream: DataStreamId;
    fromSequenceId: number;
    toSequenceIdInclusive?: number | null;
  }) {
    const request = new DataStreamServiceRequest.GetDataStream(
      dataStream,
      toLong(fromSequenceId),
      toSequenceIdInclusive ? toLong(toSequenceIdInclusive) : null,
    );

    const serializedRequest = serialize({
      request,
      serializer: DataStreamServiceRequest.Serializer,
    });

    const response = await this.actions.post<any[]>(
      this.endpoint,
      serializedRequest,
    );

    const returnValue = new CarpDataStreamBatch();
    response.data.forEach((data) => {
      const namespaceId = new NamespacedId(
        data.dataStream.dataType.replace(
          `.${data.dataStream.dataType.split(".").pop()}`,
          "",
        ),
        data.dataStream.dataType.split(".").pop(),
      );
      const dataStreamId = new DataStreamId(
        data.dataStream.studyDeploymentId,
        data.dataStream.deviceRoleName,
        namespaceId,
      );
      const sequence = new MutableDataStreamSequence(
        dataStreamId,
        toLong(data.firstSequenceId),
        toList(data.triggerIds),
        SyncPoint.Companion.UnixEpoch,
      );
      const measurements = data.measurements.map((measurement) => {
        return new Measurement(
          measurement.sensorStartTime,
          null,
          namespaceId,
          measurement.data,
        );
      });
      sequence.appendMeasurementsList(toList(measurements));
      returnValue.sequences.push(sequence);
    });

    return returnValue;
  }

  /**
   * Close data streams
   * @param studyDeploymentIds The IDs of the study deployments
   */
  async closeDataStreams({
    studyDeploymentIds,
  }: {
    studyDeploymentIds: string[];
  }) {
    const request = new DataStreamServiceRequest.CloseDataStreams(
      toSet(studyDeploymentIds.map((id) => new UUID(id))),
    );

    const serializedRequest = serialize({
      request,
      serializer: DataStreamServiceRequest.Serializer,
    });

    await this.actions.post(this.endpoint, serializedRequest);
  }

  /**
   * Remove data streams
   * @param studyDeploymentIds The IDs of the study deployments
   */
  async removeDataStreams({
    studyDeploymentIds,
  }: {
    studyDeploymentIds: string[];
  }) {
    const request = new DataStreamServiceRequest.RemoveDataStreams(
      toSet(studyDeploymentIds.map((id) => new UUID(id))),
    );

    const serializedRequest = serialize({
      request,
      serializer: DataStreamServiceRequest.Serializer,
    });

    await this.actions.post(this.endpoint, serializedRequest);
  }
}

export default DataStreams;
