import { describe } from "node:test";
import { afterAll, beforeAll, expect, test } from "vitest";
import {
  StudyStatus,
  ParticipantGroupStatus,
  getSerializer,
  StudyProtocolSnapshot,
  DefaultSerializer,
  DataStreamsConfiguration,
  NamespacedId,
  MutableDataStreamBatch,
  MutableDataStreamSequence,
  DataStreamId,
  toLong,
  SyncPoint,
  Measurement,
  Geolocation,
  toList,
} from "@/shared";
import { CarpTestClient } from "@/client";
import { STUDY_PROTOCOL } from "../consts";
import { setupTestClient } from "../utils";

describe("DataStreams", () => {
  let testClient: CarpTestClient;
  let researcherAccountId: string;
  let study: StudyStatus;
  let participantGroupStatus: ParticipantGroupStatus;
  let namespaceId: NamespacedId;

  beforeAll(async () => {
    const { client, accountId } = await setupTestClient();
    testClient = client;
    researcherAccountId = accountId;

    // create a study
    study = await testClient.studies.create({
      name: "Test study",
      description: "This is a test study",
      ownerId: researcherAccountId,
    });

    // set invitation
    await testClient.study.setInvitation({
      studyId: study.studyId.stringRepresentation,
      title: "Test invitation",
      description: "This is a test invitation",
    });

    // set protocol
    const json = DefaultSerializer;
    const serializer = getSerializer(StudyProtocolSnapshot);
    const protocol = json.decodeFromString(
      serializer,
      JSON.stringify(STUDY_PROTOCOL),
    ) as StudyProtocolSnapshot;

    await testClient.study.setProtocol({
      protocol,
      studyId: study.studyId.stringRepresentation,
    });

    // set study as live
    await testClient.study.goLive({
      studyId: study.studyId.stringRepresentation,
    });

    const emails = [import.meta.env.VITE_RESEARCHER_EMAIL];

    // add the participants
    await testClient.study.recruitment.addMultipleByEmail({
      studyId: study.studyId.stringRepresentation,
      emails,
    });

    // query the participant
    const participants = await testClient.study.recruitment.getParticipants({
      studyId: study.studyId.stringRepresentation,
    });

    // invite the participants
    participantGroupStatus =
      await testClient.study.recruitment.inviteNewParticipantGroup({
        studyId: study.studyId.stringRepresentation,
        participantsWithRoles: participants.map((p) => ({
          id: p.id.stringRepresentation,
          assignedRoles: ["Participant"],
        })),
      });

    await testClient.authentication.refresh();

    namespaceId = new NamespacedId(
      STUDY_PROTOCOL.tasks[0].measures[0].type.replace(
        `.${STUDY_PROTOCOL.tasks[0].measures[0].type.split(".").pop()}`,
        "",
      ),
      STUDY_PROTOCOL.tasks[0].measures[0].type.split(".").pop(),
    );
    await expect(
      testClient.dataStreams.openDataStreams({
        studyDeploymentId: participantGroupStatus.id.stringRepresentation,
        expectedDataStreams: [
          new DataStreamsConfiguration.ExpectedDataStream(
            STUDY_PROTOCOL.primaryDevices[0].roleName,
            namespaceId,
          ),
        ],
      }),
    ).resolves.not.toThrow();
  }, 15000);

  test("should be able to append to a data stream", async () => {
    const batch = new MutableDataStreamBatch();
    const sequence = new MutableDataStreamSequence(
      new DataStreamId(
        participantGroupStatus.id,
        STUDY_PROTOCOL.primaryDevices[0].roleName,
        namespaceId,
      ),
      toLong(0),
      toList([1]),
      SyncPoint.Companion.UnixEpoch,
    );
    sequence.appendMeasurementsList(
      toList([
        new Measurement(
          toLong(1),
          null,
          namespaceId,
          new Geolocation(57, 45, null) as any,
        ),
      ]),
    );

    batch.appendSequence(sequence);

    await expect(
      testClient.dataStreams.appendToDataStreams({
        studyDeploymentId: participantGroupStatus.id.stringRepresentation,
        batch,
      }),
    ).resolves.not.toThrow();
  });

  test("should be able to get data streams", async () => {
    const batch = new MutableDataStreamBatch();
    const sequence = new MutableDataStreamSequence(
      new DataStreamId(
        participantGroupStatus.id,
        STUDY_PROTOCOL.primaryDevices[0].roleName,
        namespaceId,
      ),
      toLong(1),
      toList([1]),
      SyncPoint.Companion.UnixEpoch,
    );
    sequence.appendMeasurementsList(
      toList([
        new Measurement(
          toLong(1),
          null,
          namespaceId,
          new Geolocation(57, 45, null) as any,
        ),
      ]),
    );

    batch.appendSequence(sequence);

    await expect(
      testClient.dataStreams.appendToDataStreams({
        studyDeploymentId: participantGroupStatus.id.stringRepresentation,
        batch,
      }),
    ).resolves.not.toThrow();

    const response = await testClient.dataStreams.getDataStream({
      dataStream: new DataStreamId(
        participantGroupStatus.id,
        STUDY_PROTOCOL.primaryDevices[0].roleName,
        namespaceId,
      ),
      fromSequenceId: 0,
    });

    expect(response.isEmpty()).toBe(false);
    expect(response.sequences.length).to.be.at.least(1);
    expect(response.sequences[0].measurements.toArray().length).to.be.at.least(
      1,
    );
    response
      .getDataStreamPoints(
        new DataStreamId(
          participantGroupStatus.id,
          STUDY_PROTOCOL.primaryDevices[0].roleName,
          namespaceId,
        ),
      )
      .forEach((point) => {
        expect(point).toBeInstanceOf(Measurement);
      });
  });

  afterAll(async () => {
    if (study) {
      await expect(
        testClient.dataStreams.closeDataStreams({
          studyDeploymentIds: [participantGroupStatus.id.stringRepresentation],
        }),
      ).resolves.not.toThrow();
      await expect(
        testClient.dataStreams.removeDataStreams({
          studyDeploymentIds: [participantGroupStatus.id.stringRepresentation],
        }),
      ).resolves.not.toThrow();
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
