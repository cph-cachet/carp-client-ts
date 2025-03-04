import {
  DataStreamId,
  DataStreamPoint,
  DataStreamSequence,
} from "../coreTypes";

class CarpDataStreamBatch {
  sequences: DataStreamSequence<any>[] = [];

  isEmpty = (): boolean => {
    return this.sequences.length === 0;
  };

  getDataStreamPoints = (dataStream: DataStreamId): DataStreamPoint<any>[] => {
    return this.sequences
      .filter((sequence) => sequence.dataStream === dataStream)
      .map((sequence) => {
        return sequence.measurements.toArray().map((measurement) => {
          return new DataStreamPoint(
            sequence.firstSequenceId,
            sequence.dataStream.studyDeploymentId,
            sequence.dataStream.deviceRoleName,
            measurement,
            sequence.triggerIds,
            sequence.syncPoint,
          );
        });
      })
      .flat();
  };
}

export default CarpDataStreamBatch;
