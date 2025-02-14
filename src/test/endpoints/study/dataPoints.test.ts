import {
  describe,
  beforeAll,
  afterAll,
  expect,
  it,
  expectTypeOf,
} from "vitest";
import { setupTestClient } from "@/test/utils";
import { DATA_POINT, STUDY_PROTOCOL } from "@/test/consts";
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
  let newDataPoint: DataPointResponse;

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
      setTimeout(resolve, 5000);
    });
    await testClient.authentication.refresh();

    // add a data point
    const data = DATA_POINT;
    newDataPoint = await testClient.study.dataPoints.add({
      dataPoint: data,
      studyDeploymentId: participantGroupStatus.id.stringRepresentation,
    });
  }, 15000);

  it("should add a data point", async () => {
    expect(newDataPoint).toBeDefined();
    expectTypeOf(newDataPoint).toMatchTypeOf<DataPointResponse>();
  });

  it("should get data points", async () => {
    const dataPoints = await testClient.study.dataPoints.getAll({
      studyDeploymentId: participantGroupStatus.id.stringRepresentation,
    });

    expect(dataPoints).toBeDefined();
    expectTypeOf(dataPoints).toMatchTypeOf<DataPointResponse[]>();
  });

  it("should get a data point", async () => {
    const dataPoint = await testClient.study.dataPoints.getById({
      dataPointId: newDataPoint.id,
      studyDeploymentId: participantGroupStatus.id.stringRepresentation,
    });

    expect(dataPoint).toBeDefined();
    expectTypeOf(dataPoint).toMatchTypeOf<DataPointResponse>();
    expect(dataPoint.id).toEqual(newDataPoint.id);
  });

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
