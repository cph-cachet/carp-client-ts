import { LatestProtocol, StudyProtocol } from "@/shared/models/protocol";
import Endpoint from "./endpoint";
import {
  ArrayList,
  ListSerializer,
  ProtocolServiceRequest,
  ProtocolVersion,
  StudyProtocolSnapshot,
  UUID,
  deserialize,
  getSerializer,
  serialize,
} from "@/shared";

class Protocols extends Endpoint {
  coreEndpoint: string = "/api/protocol-service";

  wsEndpoint: string = "/api/protocols";

  /**
   * Add new protocol
   * @param protocol The protocol to add
   * @versionTag version of the protocol
   */
  async create({
    protocol,
    versionTag,
  }: {
    protocol: StudyProtocol;
    versionTag: string;
  }) {
    const protocolSnapshot = deserialize({
      data: JSON.stringify(protocol),
      serializer: StudyProtocolSnapshot,
    }) as unknown as StudyProtocolSnapshot;

    const createProtocol = new ProtocolServiceRequest.Add(
      protocolSnapshot,
      versionTag,
    );

    const serializedCreateProtocol = serialize({
      request: createProtocol,
      serializer: ProtocolServiceRequest.Serializer,
    });

    await this.actions.post(this.coreEndpoint, serializedCreateProtocol);
  }

  /**
   * Update protocol with new version
   * @param protocol The protocol to update
   * @versionTag version of the protocol
   */
  async update({
    protocol,
    versionTag,
  }: {
    protocol: StudyProtocol;
    versionTag: string;
  }) {
    const protocolSnapshot = deserialize({
      data: JSON.stringify(protocol),
      serializer: StudyProtocolSnapshot,
    }) as unknown as StudyProtocolSnapshot;

    const updateProtocol = new ProtocolServiceRequest.AddVersion(
      protocolSnapshot,
      versionTag,
    );

    const serializedUpdateProtocol = serialize({
      request: updateProtocol,
      serializer: ProtocolServiceRequest.Serializer,
    });

    await this.actions.post(this.coreEndpoint, serializedUpdateProtocol);
  }

  /**
   * Get protocol by ID
   * @param protocolId The ID of the protocol
   * @param versionTag The version of the protocol
   */

  async getProtocolBy({
    protocolId,
    versionTag,
  }: {
    protocolId: string;
    versionTag: string;
  }) {
    const getProtocol = new ProtocolServiceRequest.GetBy(
      new UUID(protocolId),
      versionTag,
    );

    const serializedGetProtocol = serialize({
      request: getProtocol,
      serializer: ProtocolServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedGetProtocol,
    );

    const protocol = deserialize({
      data: response.data,
      serializer: StudyProtocolSnapshot,
    }) as unknown as StudyProtocolSnapshot;

    return protocol;
  }

  /**
   * Get latest protocol for a given ID
   * @param protocolId The ID of the protocol
   */
  async getLatestProtocol({ protocolId }: { protocolId: string }) {
    const response = await this.actions.get<LatestProtocol>(
      `${this.coreEndpoint}/${protocolId}/latest`,
    );

    const studyProtocolSnapshot = deserialize({
      data: response.data.snapshot,
      serializer: StudyProtocolSnapshot,
    }) as unknown as StudyProtocolSnapshot;

    const objectToReturn = {
      versionTag: response.data.versionTag,
      snapshot: studyProtocolSnapshot,
      firstVersionCreatedDate: response.data.firstVersionCreatedDate,
      lastVersionCreatedDate: response.data.lastVersionCreatedDate,
    };
    return Promise.resolve(objectToReturn as LatestProtocol);
  }

  /**
   * Get all protocols
   * @param ownerId user ID of who to query protocols for
   */
  async getAllProtocols({ ownerId }: { ownerId: string }) {
    const serializedRequest = serialize({
      request: new ProtocolServiceRequest.GetAllForOwner(new UUID(ownerId)),
      serializer: ProtocolServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedRequest,
    );

    const protocols = deserialize({
      data: response.data,
      serializer: ListSerializer(getSerializer(StudyProtocolSnapshot)),
      shouldGetSerializer: false,
    }) as ArrayList<StudyProtocolSnapshot>;

    return protocols.toArray();
  }

  /**
   * Get version history for a protocol
   * @param protocolId The ID of the protocol
   */
  async getVersionHistory({ protocolId }: { protocolId: string }) {
    const getVersions = new ProtocolServiceRequest.GetVersionHistoryFor(
      new UUID(protocolId),
    );

    const serializedGetVersions = serialize({
      request: getVersions,
      serializer: ProtocolServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedGetVersions,
    );

    const versions = deserialize({
      data: response.data,
      serializer: ListSerializer(getSerializer(ProtocolVersion)),
      shouldGetSerializer: false,
    }) as ArrayList<ProtocolVersion>;

    return versions.toArray();
  }
}

export default Protocols;
