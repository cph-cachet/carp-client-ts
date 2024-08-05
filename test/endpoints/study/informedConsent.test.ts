import {
  afterAll,
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  it,
} from "vitest";
import { STUDY_PROTOCOL, INFORMED_CONSENT } from "test/consts";
import { setupTestClient } from "test/utils";
import { InformedConsentResponse } from "@/shared/models";
import { CarpTestClient } from "@/client";
import {
  StudyStatus,
  ParticipantGroupStatus,
  getSerializer,
  StudiesStudyProtocolSnapshot as StudyProtocolSnapshot,
  DefaultSerializer,
} from "@/shared";

describe("Informed consent", () => {
  let testClient: CarpTestClient;
  let researcherAccountId: string;
  let study: StudyStatus;
  let participantGroupStatus: ParticipantGroupStatus;
  let newInformedConsent: InformedConsentResponse;

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

    // add a data point
    const informedConsent = INFORMED_CONSENT;
    newInformedConsent = await testClient.study.informedConsent.add({
      informedConsent,
      studyDeploymentId: participantGroupStatus.id.stringRepresentation,
    });
  }, 15000);

  it("should add informed consent", () => {
    expect(newInformedConsent).toBeDefined();
    expect(newInformedConsent.id).toBeDefined();
    expectTypeOf(newInformedConsent).toMatchTypeOf<InformedConsentResponse>();
  });

  it("should get informed consent", async () => {
    const informedConsent = await testClient.study.informedConsent.get({
      studyDeploymentId: participantGroupStatus.id.stringRepresentation,
      informedConsentId: newInformedConsent.id,
    });

    expect(informedConsent).toBeDefined();
    expect(informedConsent.id).toEqual(newInformedConsent.id);
    expectTypeOf(informedConsent).toMatchTypeOf<InformedConsentResponse>();
  });

  it("should get all informed consents", async () => {
    const informedConsents = await testClient.study.informedConsent.getAll({
      studyDeploymentId: participantGroupStatus.id.stringRepresentation,
    });

    expect(informedConsents).toBeDefined();
    expect(informedConsents).toBeInstanceOf(Array);
    expect(informedConsents).not.toHaveLength(0);
    expectTypeOf(informedConsents).toMatchTypeOf<InformedConsentResponse[]>();
  });

  it("should delete informed consent", async () => {
    await testClient.study.informedConsent.delete({
      studyDeploymentId: participantGroupStatus.id.stringRepresentation,
      informedConsentId: newInformedConsent.id,
    });

    const informedConsents = await testClient.study.informedConsent.getAll({
      studyDeploymentId: participantGroupStatus.id.stringRepresentation,
    });

    expect(informedConsents).toBeDefined();
    expect(informedConsents).toBeInstanceOf(Array);
    expect(informedConsents).toHaveLength(0);
    expectTypeOf(informedConsents).toMatchTypeOf<InformedConsentResponse[]>();
  });

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
