import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { setupTestClient } from "test/utils";
import { STUDY_PROTOCOL } from "test/consts";
import { CarpTestClient } from "@/client";
import {
  DefaultSerializer,
  ParticipantGroupStatus,
  StudyDeploymentStatus,
  StudiesStudyProtocolSnapshot as StudyProtocolSnapshot,
  StudyStatus,
  getSerializer,
} from "@/shared";

describe("Deployments", () => {
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

  it("should be able to register and deploy device", async () => {
    const deploymentStatus = await testClient.study.deployments.registerDevice({
      studyDeploymentId: participantGroupStatus.id.stringRepresentation,
      primaryDeviceRoleName: "Participant's phone",
      deviceId: "Participant's phone",
    });

    expect(deploymentStatus).toBeDefined();
    expect(deploymentStatus).toBeInstanceOf(
      StudyDeploymentStatus.DeployingDevices,
    );

    const deviceDeployment =
      await testClient.study.deployments.getDeviceDeploymentFor({
        studyDeploymentId: participantGroupStatus.id.stringRepresentation,
        primaryDeviceRoleName: "Participant's phone",
      });

    const updatedDeviceRegsitration =
      await testClient.study.deployments.updateDeviceRegistration({
        studyDeploymentId: participantGroupStatus.id.stringRepresentation,
        primaryDeviceRoleName: "Participant's phone",
        lastUpdated: (deviceDeployment as any).lastUpdatedOn,
      });

    expect(updatedDeviceRegsitration).toBeDefined();
    expect(updatedDeviceRegsitration).toBeInstanceOf(
      StudyDeploymentStatus.Running,
    );
  });

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
