import { setupTestClient } from "test/utils";
import {
  describe,
  beforeAll,
  afterAll,
  expect,
  it,
  expectTypeOf,
} from "vitest";
import { DATA_POINT, STUDY_PROTOCOL } from "test/consts";
import { CarpTestClient } from "@/client";
import {
  StudyStatus,
  DefaultSerializer,
  ParticipantGroupStatus,
  StudyProtocolSnapshot,
  getSerializer,
} from "@/shared";
import { DataPointResponse } from "@/shared/models";

describe("Data points", () => {
  let testClient: CarpTestClient;
  let researcherAccountId: string;
  let study: StudyStatus;
  let participantGroupStatus: ParticipantGroupStatus;

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

    await new Promise((resolve) => {
      setTimeout(resolve, 10000);
    });
    await testClient.authentication.refresh();
  }, 15000);

  it("should get data points and should be empty at first", async () => {
    const dataPoints = await testClient.study.dataPoints.getAll({
      studyDeploymentId: participantGroupStatus.id.stringRepresentation,
    });

    expect(dataPoints).toBeDefined();
    expect(dataPoints).toBeInstanceOf(Array);
    expect(dataPoints.length).toEqual(0);
  });

  it("should add a data point", async () => {
    const data = DATA_POINT;

    const newDataPoint = await testClient.study.dataPoints.add({
      dataPoint: data,
      studyDeploymentId: participantGroupStatus.id.stringRepresentation,
    });

    expect(newDataPoint).toBeDefined();
    expectTypeOf(newDataPoint).toMatchTypeOf<DataPointResponse>();

    // get the data point
    const dataPoints = await testClient.study.dataPoints.getAll({
      studyDeploymentId: participantGroupStatus.id.stringRepresentation,
    });

    expect(dataPoints).toBeDefined();
    expect(dataPoints).toBeInstanceOf(Array);
    expect(dataPoints.length).toEqual(1);
    expect(dataPoints[0]).toEqual(newDataPoint);
  });

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
