import { describe, beforeAll, expect, it, afterAll } from "vitest";
import CarpTestClient from "../../client/carpTestClient";
import { STUDY_PROTOCOL } from "../../consts";
import {
  DefaultSerializer,
  Participant,
  ParticipantGroupStatus,
  StudyProtocolSnapshot,
  StudyStatus,
  getSerializer,
} from "@/shared";
import { generateRandomEmail, setupTestClient } from "@/test/utils";

describe("Recruitment", () => {
  let participants: Participant[];
  let participantGroupStatus: ParticipantGroupStatus;
  let testClient: CarpTestClient;
  let researcherAccountId: string;
  let study: StudyStatus;

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

    // HACK: sleep for a while to allow the study to be marked ready for deployment
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });

    // generate 2 random emails
    const emails = [generateRandomEmail(), generateRandomEmail()];

    // add the participants
    await testClient.study.recruitment.addMultipleByEmail({
      studyId: study.studyId.stringRepresentation,
      emails,
    });

    // query the participant
    participants = await testClient.study.recruitment.getParticipants({
      studyId: study.studyId.stringRepresentation,
    });
  }, 40000);

  it("should be able to invite new participant group", async () => {
    participantGroupStatus =
      await testClient.study.recruitment.inviteNewParticipantGroup({
        studyId: study.studyId.stringRepresentation,
        participantsWithRoles: participants.map((p) => ({
          id: p.id.stringRepresentation,
          assignedRoles: ["Participant"],
        })),
      });

    expect(participantGroupStatus).toBeInstanceOf(ParticipantGroupStatus);
  });

  it("should be able to get study deployment statuses in list", async () => {
    const studyDeploymentStatus =
      await testClient.study.recruitment.getParticipantGroupAccountsAndStatus({
        studyId: study.studyId.stringRepresentation,
      });

    // we should find the participant group status in the list
    const found = studyDeploymentStatus.groups.find(
      (g) =>
        g.participantGroupId === participantGroupStatus.id.stringRepresentation,
    );

    expect(found).toBeDefined();
  });

  it("should be able to stop a participant group", async () => {
    const stoppedParticipantGroupStatus =
      await testClient.study.recruitment.stopParticipantGroup({
        studyId: study.studyId.stringRepresentation,
        studyDeploymentId: participantGroupStatus.id.stringRepresentation,
      });

    expect(stoppedParticipantGroupStatus).toBeInstanceOf(
      ParticipantGroupStatus,
    );
    expect(stoppedParticipantGroupStatus).toBeInstanceOf(
      ParticipantGroupStatus.Stopped,
    );
  });

  it("should be able to get inactive deployments", async () => {
    const inactiveParticipantGroups =
      await testClient.study.recruitment.getInactiveDeployments({
        studyId: study.studyId.stringRepresentation,
        lastUpdate: 2,
      });

    expect(inactiveParticipantGroups).toBeDefined();
    expect(inactiveParticipantGroups).toBeInstanceOf(Array);
  });

  it("should be able to get paginated participant account information", async () => {
    const accountInfo =
      await testClient.study.recruitment.queryParticipantAccounts({
        studyId: study.studyId.stringRepresentation,
        request: {
          page: 0,
          size: 50,
          search: null,
          isDeployed: null,
          sortDirection: "asc",
          sortBy: "is_deployed",
        },
      });

    expect(accountInfo).toBeDefined();
    expect(accountInfo.page).toBe(0);
    expect(accountInfo.size).toBe(50);
    expect(accountInfo.total).toBe(2);
    expect(accountInfo.content).toBeInstanceOf(Array);
    const account = accountInfo.content[0];
    expect(account).toBeDefined();
    expect(account.accountIdentity).toBeDefined();
    expect(account.participantId).toBeDefined();
    expect(account.isDeployed).toBeDefined();
    expect(account.invitedOn).toBeDefined();
    expect(account.carpUser).toBeDefined();
  });

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});

describe("Recruitment participant group create/update/invite flow", () => {
  let testClient: CarpTestClient;
  let researcherAccountId: string;
  let study: StudyStatus;
  let participants: Participant[];

  beforeAll(async () => {
    const { client, accountId } = await setupTestClient();
    testClient = client;
    researcherAccountId = accountId;

    study = await testClient.studies.create({
      name: "Test study",
      description: "This is a test study",
      ownerId: researcherAccountId,
    });

    await testClient.study.setInvitation({
      studyId: study.studyId.stringRepresentation,
      title: "Test invitation",
      description: "This is a test invitation",
    });

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

    await testClient.study.goLive({
      studyId: study.studyId.stringRepresentation,
    });

    // HACK: sleep for a while to allow the study to be marked ready for deployment
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });

    await testClient.study.recruitment.addOneByEmail({
      studyId: study.studyId.stringRepresentation,
      email: generateRandomEmail(),
    });

    participants = await testClient.study.recruitment.getParticipants({
      studyId: study.studyId.stringRepresentation,
    });
  }, 15000);

  it("should be able to create, update and invite a participant group", async () => {
    const created = await testClient.study.recruitment.createParticipantGroup({
      studyId: study.studyId.stringRepresentation,
      participantsWithRoles: participants.map((p) => ({
        id: p.id.stringRepresentation,
        assignedRoles: ["Participant"],
      })),
      representationName: "Original name",
    });

    expect(created).toBeInstanceOf(ParticipantGroupStatus.Staged);
    expect((created as ParticipantGroupStatus.Staged).representation.name).toBe(
      "Original name",
    );

    const updated = await testClient.study.recruitment.updateParticipantGroup({
      groupId: created.id.stringRepresentation,
      representationName: "Updated name",
    });

    expect(updated).toBeInstanceOf(ParticipantGroupStatus.Staged);
    expect((updated as ParticipantGroupStatus.Staged).representation.name).toBe(
      "Updated name",
    );

    const invited = await testClient.study.recruitment.inviteParticipantGroup({
      groupId: created.id.stringRepresentation,
    });

    expect(invited).toBeInstanceOf(ParticipantGroupStatus.InDeployment);
  });

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
