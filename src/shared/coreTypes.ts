import { kotlin } from "@cachet/carp-kotlin";
import {
  kotlinx,
  kotlinx as kotlinxcore,
} from "@cachet/carp-kotlinx-serialization";

import carpCommon from "@cachet/carp-common";
import carpDepolymentsCore from "@cachet/carp-deployments-core";
import carpProtocolsCore from "@cachet/carp-protocols-core";
import carpStudiesCore from "@cachet/carp-studies-core";

import pdk = carpProtocolsCore.dk;
import sdk = carpStudiesCore.dk;
import cdk = carpCommon.dk;
import ddk = carpDepolymentsCore.dk;
import Nullable = kotlin.Nullable;

import DefaultSerializer = cdk.cachet.carp.common.infrastructure.serialization.JSON;
import UUID = cdk.cachet.carp.common.application.UUID;
import getSerializer = kotlinx.serialization.getSerializer;
import StudyServiceRequest = sdk.cachet.carp.studies.infrastructure.StudyServiceRequest;
import NamespacedId = cdk.cachet.carp.common.application.NamespacedId;
import DefaultDeviceRegistration = cdk.cachet.carp.common.application.devices.DefaultDeviceRegistration;
import Data = ddk.cachet.carp.common.application.data.Data;

import RecruitmentServiceRequest = sdk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest;
import StudyStatus = sdk.cachet.carp.studies.application.StudyStatus;
import StudyDetails = sdk.cachet.carp.studies.application.StudyDetails;
import Participant = sdk.cachet.carp.studies.application.users.Participant;
import ParticipantGroupStatus = sdk.cachet.carp.studies.application.users.ParticipantGroupStatus;
import StudyProtocolSnapshot = sdk.cachet.carp.protocols.application.StudyProtocolSnapshot;
import ProtocolServiceRequest = pdk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest;
import ProtocolVersion = pdk.cachet.carp.protocols.application.ProtocolVersion;

import ParticipationServiceRequest = ddk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest;
import ActiveParticipationInvitation = ddk.cachet.carp.deployments.application.users.ActiveParticipationInvitation;
import DeploymentServiceRequest = ddk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest;
import MasterDeviceDeployment = ddk.cachet.carp.deployments.application.PrimaryDeviceDeployment;
import StudyDeploymentStatus = ddk.cachet.carp.deployments.application.StudyDeploymentStatus;
import ParticipantData = ddk.cachet.carp.deployments.application.users.ParticipantData;
import ArrayList = kotlin.collections.List;
import HashMap = kotlin.collections.Map;
import Json = kotlinx.serialization.json.Json;
import Pair = kotlin.Pair;
import ListSerializer = kotlinxcore.serialization.builtins.ListSerializer;
import SetSerializer = kotlinxcore.serialization.builtins.SetSerializer;

const { StudyInvitation } = ddk.cachet.carp.deployments.application.users;

const toSet = kotlin.collections.setOf;
const toMap = kotlin.collections.mapOf;

const serializeRequest = ({
  request,
  serializer,
}: {
  request: any;
  serializer: any;
}): string => {
  const json: Json = DefaultSerializer;
  const serializedUpdateStudy = json.encodeToString(serializer, request);

  return serializedUpdateStudy;
};

const deserializeResponse = <T>({
  response,
  responseType,
}: {
  response: unknown;
  responseType: T;
}): T => {
  const stringifiedResponse = JSON.stringify(response);
  const json: Json = DefaultSerializer;
  const deserializer = getSerializer(responseType);
  const decodedResponse = json.decodeFromString(
    deserializer,
    stringifiedResponse,
  ) as T;

  return decodedResponse;
};

export {
  ActiveParticipationInvitation,
  ArrayList,
  DefaultSerializer,
  DeploymentServiceRequest,
  HashMap,
  Json,
  ListSerializer,
  MasterDeviceDeployment,
  Nullable,
  Pair,
  Participant,
  ParticipantData,
  ParticipantGroupStatus,
  ParticipationServiceRequest,
  ProtocolServiceRequest,
  ProtocolVersion,
  RecruitmentServiceRequest,
  SetSerializer,
  StudyDeploymentStatus,
  StudyDetails,
  StudyProtocolSnapshot,
  StudyServiceRequest,
  NamespacedId,
  DefaultDeviceRegistration,
  StudyInvitation,
  Data,
  StudyStatus,
  UUID,
  cdk,
  deserializeResponse,
  getSerializer,
  kotlinx,
  kotlinxcore,
  sdk,
  serializeRequest,
  toSet,
  toMap,
};
