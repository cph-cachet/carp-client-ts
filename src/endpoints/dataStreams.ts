/* eslint-disable no-underscore-dangle */
import {
  DataStreamId,
  DataStreamsConfiguration,
  DataStreamServiceRequest,
  DataStreamSummary,
  DataStreamSummaryRequest,
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
import { objectKeysFromSnakeToCamel } from "@/shared/utils";

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
    batch: CarpDataStreamBatch;
  }) {
    const batches = batch.sequences.map((sequence) => {
      return {
        dataStream: {
          studyDeploymentId:
            sequence.dataStream.studyDeploymentId.stringRepresentation,
          deviceRoleName: sequence.dataStream.deviceRoleName,
          dataType: sequence.dataStream.dataType.toString(),
        },
        firstSequenceId: sequence.firstSequenceId.toNumber(),
        measurements: sequence.measurements.toArray().map((measurement) => {
          return {
            sensorStartTime: measurement.sensorStartTime.toNumber(),
            data: {
              ...Object.fromEntries(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                Object.entries(measurement.data).filter(([_, value]) => value),
              ),
              __type: sequence.dataStream.dataType.toString(),
            },
          };
        }),
        triggerIds: sequence.triggerIds.toArray(),
        syncPoint: {
          synchronizedOn: new Date(
            sequence.syncPoint.synchronizedOn.toEpochMilliseconds(),
          ).toISOString(),
          sensorTimestampAtSyncPoint:
            sequence.syncPoint.sensorTimestampAtSyncPoint.toNumber(),
          relativeClockSpeed: sequence.syncPoint.relativeClockSpeed,
        },
      };
    });

    const request = {
      __type:
        "dk.cachet.carp.data.infrastructure.DataStreamServiceRequest.AppendToDataStreams",
      apiVersion: "1.1",
      studyDeploymentId,
      batch: batches,
    };

    const serializedRequest = JSON.stringify(request);

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

  /**
   * Get data stream summary
   * @returns The data stream summary
   * @param request The data stream summary request
   */
  async getDataStreamSummary(
    request: DataStreamSummaryRequest,
  ): Promise<DataStreamSummary> {
    const response = await this.actions.get<DataStreamSummary>(
      `${this.endpoint}/summary`,
      {
        params: objectKeysFromSnakeToCamel(request),
      },
    );

    return response.data;
  }
}

export default DataStreams;
