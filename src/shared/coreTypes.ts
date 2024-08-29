import { kotlin } from "@cachet/carp-kotlin";
import {
  kotlinx,
  kotlinx as kotlinxcore,
} from "@cachet/carp-kotlinx-serialization";

import carpCommon from "@cachet/carp-common";
import carpDepolymentsCore from "@cachet/carp-deployments-core";
import carpProtocolsCore from "@cachet/carp-protocols-core";
import carpStudiesCore from "@cachet/carp-studies-core";

import { kotlinx as kxd } from "@cachet/carp-kotlinx-datetime";
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
import Sex = ddk.cachet.carp.common.application.data.input.Sex;

import RecruitmentServiceRequest = sdk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest;
import StudyStatus = sdk.cachet.carp.studies.application.StudyStatus;
import StudyDetails = sdk.cachet.carp.studies.application.StudyDetails;
import Participant = sdk.cachet.carp.studies.application.users.Participant;
import ParticipantGroupStatus = sdk.cachet.carp.studies.application.users.ParticipantGroupStatus;
import ProtocolServiceRequest = pdk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest;
import StudyProtocolSnapshot = pdk.cachet.carp.protocols.application.StudyProtocolSnapshot;
import ProtocolVersion = pdk.cachet.carp.protocols.application.ProtocolVersion;

import ParticipationServiceRequest = ddk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest;
import ActiveParticipationInvitation = ddk.cachet.carp.deployments.application.users.ActiveParticipationInvitation;
import DeploymentServiceRequest = ddk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest;
import MasterDeviceDeployment = ddk.cachet.carp.deployments.application.PrimaryDeviceDeployment;
import StudyDeploymentStatus = ddk.cachet.carp.deployments.application.StudyDeploymentStatus;
import ParticipantData = ddk.cachet.carp.deployments.application.users.ParticipantData;
import Set = kotlin.collections.Set;
import ArrayList = kotlin.collections.List;
import HashMap = kotlin.collections.Map;
import Json = kotlinx.serialization.json.Json;
import Pair = kotlin.Pair;
import ListSerializer = kotlinxcore.serialization.builtins.ListSerializer;
import SetSerializer = kotlinxcore.serialization.builtins.SetSerializer;

import Instant = kxd.datetime.Instant;

import EmailAccountIdentity = carpStudiesCore.dk.cachet.carp.common.application.users.EmailAccountIdentity;
import UsernameAccountIdentity = carpStudiesCore.dk.cachet.carp.common.application.users.UsernameAccountIdentity;
import CarpInputDataTypes = cdk.cachet.carp.common.application.data.input.CarpInputDataTypes;

const { Roles } = cdk.cachet.carp.common.application.users.AssignedTo;
const { EmailAddress } = cdk.cachet.carp.common.application;
const { Username } = cdk.cachet.carp.common.application.users;
const AssignParticipantRoles =
  sdk.cachet.carp.studies.application.users.AssignedParticipantRoles;

const { StudyInvitation } = ddk.cachet.carp.deployments.application.users;

const toSet = kotlin.collections.setOf;
const toMap = kotlin.collections.mapOf;

const serialize = ({
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

/**
 *
 * @param data the data to be deserialized
 * @param serializer the serializer to use to parse the data
 * @param shouldGetSerializer whether to use the passed serializer to get the serializer to use, just immediately use the passed serializer, i.e if the serializer is a list or a set serializer
 */
const deserialize = <T>({
  data,
  serializer,
  shouldGetSerializer = true,
}: {
  data: unknown;
  serializer: T;
  shouldGetSerializer?: boolean;
}): T => {
  const stringifiedResponse = JSON.stringify(data);
  const json: Json = DefaultSerializer;

  let deserializer = serializer;
  if (shouldGetSerializer) {
    deserializer = getSerializer(serializer);
  }
  const decodedResponse = json.decodeFromString(
    deserializer,
    stringifiedResponse,
  ) as T;

  return decodedResponse;
};

export {
  ActiveParticipationInvitation,
  ArrayList,
  CarpInputDataTypes,
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
  Set,
  Sex,
  SetSerializer,
  StudyDeploymentStatus,
  StudyDetails,
  StudyProtocolSnapshot,
  StudyServiceRequest,
  NamespacedId,
  DefaultDeviceRegistration,
  StudyInvitation,
  Data,
  Roles,
  EmailAddress,
  EmailAccountIdentity,
  Username,
  UsernameAccountIdentity,
  AssignParticipantRoles,
  StudyStatus,
  UUID,
  cdk,
  deserialize,
  getSerializer,
  kotlinx,
  kotlinxcore,
  sdk,
  serialize,
  toSet,
  toMap,
  Instant,
};
