import { beforeAll, describe, expect, it } from "vitest";
import {
  CarpDocument,
  DefaultSerializer,
  getSerializer,
  ResourceData,
  StudyProtocolSnapshot,
  StudyStatus,
} from "@/shared";
import CarpTestClient from "../../client/carpTestClient";
import { STUDY_PROTOCOL } from "@/test/consts";
import { setupTestClient } from "@/test/utils";

describe("Collections", () => {
  let testClient: CarpTestClient;
  let study: StudyStatus;
  let researcherAccountId: string;
  let document: CarpDocument;

  const data = {
    title: "Test Document",
    description: "Test test",
    someNumber: 42,
  };

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

    document = await testClient.study.collections.createDocument({
      studyId: study.studyId.stringRepresentation,
      collectionName: "resources",
      document: data,
      fileName: "Test Document",
    });

    await testClient.authentication.refresh();
  }, 25000);

  it("should be able to create a document", async () => {
    expect(document).toBeDefined();
    expect(document.data as ResourceData).toEqual(data);
  });

  it("should be able to query collection", async () => {
    const resources = await testClient.study.collections.getByName({
      studyId: study.studyId.stringRepresentation,
      collectionName: "resources",
    });

    expect(resources).toBeDefined();
    expect(resources.documents.length).toBeGreaterThan(0);
    expect(resources.documents[0].data as ResourceData).toEqual(data);
  });

  it("should be able to get a document by id", async () => {
    const retrievedDocument =
      await testClient.study.collections.getDocumentById({
        studyId: study.studyId.stringRepresentation,
        documentId: document.id,
      });

    expect(retrievedDocument).toBeDefined();
    expect(retrievedDocument.data).toEqual(data);
  });

  it("should be able to get document by name", async () => {
    const retrievedDocument =
      await testClient.study.collections.getDocumentByFileName({
        studyId: study.studyId.stringRepresentation,
        collectionName: "resources",
        fileName: document.name,
      });

    expect(retrievedDocument).toBeDefined();
    expect(retrievedDocument.data).toEqual(data);
  });

  it("should be able to update a document", async () => {
    const newData = {
      title: "Updated test document",
      description: "Updated description",
      someNumber: 84,
    };

    const updatedDocument =
      await testClient.study.collections.updateDocumentById({
        studyId: study.studyId.stringRepresentation,
        documentId: document.id,
        document: newData,
        fileName: "Updated test file",
      });

    expect(updatedDocument).toBeDefined();
    expect(updatedDocument.data as ResourceData).toEqual(newData);

    await testClient.study.collections.updateDocumentById({
      studyId: study.studyId.stringRepresentation,
      documentId: document.id,
      document: data,
      fileName: "Test file",
    });
  });

  it("should be able to upload an image", async () => {
    const imageData = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
    const file = new File([imageData], "test.png", { type: "image/png" });
    const imageDocument = await testClient.study.collections.uploadImage({
      studyId: study.studyId.stringRepresentation,
      image: file,
    });

    expect(imageDocument).toBeDefined();
    expect(() => new URL(imageDocument)).not.throws();
  });

  it("should be able to delete a document", async () => {
    const newDocument = await testClient.study.collections.createDocument({
      studyId: study.studyId.stringRepresentation,
      collectionName: "resources",
      document: data,
      fileName: document.name,
    });

    expect(newDocument).toBeDefined();
    expect(newDocument.data as ResourceData).toEqual(data);

    await testClient.study.collections.deleteDocumentById({
      studyId: study.studyId.stringRepresentation,
      documentId: newDocument.id,
    });

    const resources = await testClient.study.collections.getByName({
      studyId: study.studyId.stringRepresentation,
      collectionName: "resources",
    });

    const found = resources.documents.find((doc) => doc.id === newDocument.id);
    expect(found).toBeUndefined();
  });
});
