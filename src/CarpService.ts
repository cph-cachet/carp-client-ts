import carpCommon from '@cachet/carp-common';
import carpDepolymentsCore from '@cachet/carp-deployments-core';
import { kotlin } from '@cachet/carp-kotlin';
import { kotlinx as kxd } from '@cachet/carp-kotlinx-datetime';
import {
  kotlinx,
  kotlinx as kotlinxcore,
} from '@cachet/carp-kotlinx-serialization';
import carpProtocolsCore from '@cachet/carp-protocols-core';
import carpStudiesCore from '@cachet/carp-studies-core';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import * as FormDataPackage from 'form-data';
import { jwtDecode } from 'jwt-decode';
import * as qs from 'qs';
import {
  AnonymousLinksRequest,
  CarpDocument,
  CarpDocumentData,
  CarpServiceError,
  Collection,
  ConsentFile,
  ConsentResponse,
  DataPoint,
  DataResponse,
  Export,
  HttpResult,
  InactiveDeployment,
  LatestProtocol,
  ParticipantAccount,
  ParticipantGroups,
  ParticipantInfo,
  ParticipantWithRoles,
  ProtocolJSONObject,
  Role,
  SessionLoginParams,
  SessionRefreshParams,
  StudyOverview,
  SummaryData,
  SummaryToDownload,
  Token,
  TokenIntrospectionParams,
  TokenJSON,
  err,
} from './models';
import { Statistics } from './models/Statistics';
import pdk = carpProtocolsCore.dk;
import sdk = carpStudiesCore.dk;
import cdk = carpCommon.dk;
import ddk = carpDepolymentsCore.dk;
import Nullable = kotlin.Nullable;

import DefaultSerializer = cdk.cachet.carp.common.infrastructure.serialization.JSON;
import UUID = cdk.cachet.carp.common.application.UUID;
import NamespacedId = cdk.cachet.carp.common.application.NamespacedId;
import DefaultDeviceRegistration = cdk.cachet.carp.common.application.devices.DefaultDeviceRegistration;
import Data = ddk.cachet.carp.common.application.data.Data;

import StudyServiceRequest = sdk.cachet.carp.studies.infrastructure.StudyServiceRequest;
import RecruitmentServiceRequest = sdk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest;
import StudyStatus = sdk.cachet.carp.studies.application.StudyStatus;
import StudyDetails = sdk.cachet.carp.studies.application.StudyDetails;
import Participant = sdk.cachet.carp.studies.application.users.Participant;
import ParticipantGroupStatus = sdk.cachet.carp.studies.application.users.ParticipantGroupStatus;
import StudyProtocolSnapshot = pdk.cachet.carp.protocols.application.StudyProtocolSnapshot;
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

import getSerializer = kotlinx.serialization.getSerializer;

import { GenericEmailRequest } from './models/Email';
import { InputDataType } from './models/InputDataTypes';
import { Jwt } from './models/Jwt';
import { User, UserJwtTokenDecoded } from './models/User';
import Instant = kxd.datetime.Instant;

const { Roles } = cdk.cachet.carp.common.application.users.AssignedTo;
const { EmailAddress } = cdk.cachet.carp.common.application;
const { Username } = cdk.cachet.carp.common.application.users;
const AssignParticipantRoles =
  sdk.cachet.carp.studies.application.users.AssignedParticipantRoles;

const { StudyInvitation } = ddk.cachet.carp.deployments.application.users;

const toSet = kotlin.collections.setOf;
const toMap = kotlin.collections.mapOf;

const unwrapError = <T>(
  error: unknown,
  errorResponse: string
): HttpResult<CarpServiceError, T> => {
  if (axios.isAxiosError(error)) {
    const error2 = error as {
      response: {
        status: number;
        data: { error_description: string; message: string };
      };
    };
    return err({
      message: errorResponse,
      httpResponseCode: error2.response?.status || 0,
      httpResponseMessage:
        error2.response?.data.error_description ||
        error2.response?.data.message,
    });
  }
  // eslint-disable-next-line no-console
  return err({
    message: 'An unknown error occured, please check the console.',
    httpResponseCode: 0,
    httpResponseMessage: 'An unknown error occured',
  });
};

export default class CarpInstance {
  instance: AxiosInstance;

  authInstance?: AxiosInstance;

  constructor(instance: AxiosInstance, authInstance: AxiosInstance) {
    this.instance = instance;
    this.authInstance = authInstance;
  }

  // For testing purposes, do not use in production.
  // Can only be used with a client that permits direct acces grants.
  authenticate = async (
    params: SessionLoginParams | SessionRefreshParams,
    config: AxiosRequestConfig
  ): Promise<Token> => {
    if (!this.authInstance) {
      throw new Error('No auth instance available');
    }
    try {
      const response = await this.authInstance.post(
        '/realms/Carp/protocol/openid-connect/token',
        qs.stringify(params),
        config
      );
      const carpToken = Token.fromJSON(response.data as TokenJSON);
      return await Promise.resolve(carpToken);
    } catch (error) {
      return Promise.reject(unwrapError(error, 'Authorization failed').value);
    }
  };

  // For testing purposes, do not use in production.
  // Can only be used with a client that permits direct acces grants.
  getJwtInUse = async (
    params: TokenIntrospectionParams,
    config: AxiosRequestConfig
  ): Promise<Jwt> => {
    if (!this.authInstance) {
      throw new Error('No auth instance available');
    }
    try {
      const response = await this.authInstance.post(
        '/realms/Carp/protocol/openid-connect/token/introspect',
        qs.stringify(params),
        config
      );
      const jwtData = response.data as Jwt;
      return await Promise.resolve(jwtData);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Getting jwt information has failed').value
      );
    }
  };

  invite = async (
    emailAddress: string,
    role: Role,
    config: AxiosRequestConfig
  ): Promise<void> => {
    try {
      await this.instance.post(
        '/api/accounts/invite',
        { emailAddress, role },
        config
      );
      return await Promise.resolve();
    } catch (error) {
      return Promise.reject(unwrapError(error, 'Inviting failed!').value);
    }
  };

  isAccountOfRole = async (
    emailAddress: string,
    role: Role,
    config: AxiosRequestConfig
  ): Promise<boolean> => {
    try {
      await this.instance.post(
        '/api/accounts/role',
        { emailAddress, role },
        config
      );
      return await Promise.resolve(true);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Account is not a researcher!').value
      );
    }
  };

  addResearcherToStudy = async (
    studyId: string,
    email: string,
    config: AxiosRequestConfig
  ): Promise<void> => {
    try {
      await this.instance.post(
        `/api/studies/${studyId}/researchers/add?email=${email}`,
        null,
        config
      );
      return await Promise.resolve();
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Adding researcher failed!').value
      );
    }
  };

  getResearchersForStudy = async (
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<User[]> => {
    try {
      const response = await this.instance.get(
        `/api/studies/${studyId}/researchers`,
        config
      );
      return await Promise.resolve(response.data as User[]);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Get researchers data failed!').value
      );
    }
  };

  removeResearchersFromStudy = async (
    studyId: string,
    email: string,
    config: AxiosRequestConfig
  ): Promise<void> => {
    try {
      await this.instance.delete(
        `/api/studies/${studyId}/researchers?email=${email}`,
        config
      );
      return await Promise.resolve();
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Remove researcher failed!').value
      );
    }
  };

  getParticipantInfo = async (
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<ParticipantInfo[]> => {
    try {
      const response = await this.instance.get(
        `/api/studies/${studyId}/participants`,
        config
      );
      return await Promise.resolve(response.data as ParticipantInfo[]);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Get participants data failed!').value
      );
    }
  };

  getParticipantsAccounts = async (
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<ParticipantAccount[]> => {
    try {
      const response = await this.instance.get(
        `/api/studies/${studyId}/participants/accounts`,
        config
      );
      return await Promise.resolve(response.data as ParticipantAccount[]);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Get participants accounts failed!').value
      );
    }
  };

  downloadExport = async (
    studyId: string,
    summaryId: string,
    config: AxiosRequestConfig
  ): Promise<SummaryToDownload> => {
    try {
      const response = await this.instance.get(
        `/api/studies/${studyId}/exports/${summaryId}`,
        {
          ...config,
          responseType: 'blob',
        }
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const header = response.headers['content-disposition'] as string;
      const regex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = regex.exec(header);
      const filename =
        matches != null && matches[1]
          ? matches[1].replace(/['"]/g, '')
          : 'download.zip';
      const data = response.data as SummaryData;
      return await Promise.resolve({
        data,
        filename,
      } as SummaryToDownload);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Download summary failed!').value
      );
    }
  };

  pollExports = async (
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<Export[]> => {
    try {
      const response = await this.instance.get(
        `/api/studies/${studyId}/exports`,
        config
      );
      return await Promise.resolve(response.data as Export[]);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Getting summaries failed!').value
      );
    }
  };

  createSummary = async (
    studyId: string,
    deploymentIds: string[],
    config: AxiosRequestConfig
  ): Promise<Export> => {
    try {
      const serializedDeploymentIds = JSON.stringify({
        deploymentIds,
      });
      const response = await this.instance.post(
        `/api/studies/${studyId}/exports/summaries`,
        serializedDeploymentIds,
        config
      );
      return await Promise.resolve(response.data as Export);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Creating summary failed').value
      );
    }
  };

  deleteExport = async (
    studyId: string,
    summaryId: string,
    config: AxiosRequestConfig
  ): Promise<void> => {
    try {
      await this.instance.delete(
        `/api/studies/${studyId}/exports/${summaryId}`,
        config
      );
      return await Promise.resolve();
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Deleting summary failed').value
      );
    }
  };

  createStudy_CORE = async (
    studyOwner: string,
    studyName: string,
    studyDescription: string,
    config: AxiosRequestConfig
  ): Promise<StudyStatus> => {
    try {
      const createStudy = new StudyServiceRequest.CreateStudy(
        new UUID(studyOwner),
        studyName,
        studyDescription
        // StudyInvitation.Companion.empty()
      );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = StudyServiceRequest.Serializer;
      const serializedCreateStudy = json.encodeToString(
        serializer,
        createStudy
      );

      const response = await this.instance.post(
        '/api/study-service',
        serializedCreateStudy,
        config
      );
      const serializedStudyStatus = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const statusSerializer = getSerializer(StudyStatus);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyStatus: StudyStatus = json.decodeFromString(
        statusSerializer,
        serializedStudyStatus
      );
      return await Promise.resolve(studyStatus);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Creating new study failed').value
      );
    }
  };

  setInternalDescription_CORE = async (
    studyId: string,
    studyName: string,
    studyDescription: string,
    config: AxiosRequestConfig
  ): Promise<StudyStatus> => {
    try {
      const setInternalDescription =
        new StudyServiceRequest.SetInternalDescription(
          new UUID(studyId),
          studyName,
          studyDescription
        );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = StudyServiceRequest.Serializer;
      const serializedSetInternalDescription = json.encodeToString(
        serializer,
        setInternalDescription
      );

      const response = await this.instance.post(
        '/api/study-service',
        serializedSetInternalDescription,
        config
      );
      const serializedStudyStatus = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const statusSerializer = getSerializer(StudyStatus);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyStatus: StudyStatus = json.decodeFromString(
        statusSerializer,
        serializedStudyStatus
      );
      return await Promise.resolve(studyStatus);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Setting internal description failed').value
      );
    }
  };

  getStudyDetails_CORE = async (
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<StudyDetails> => {
    try {
      const getStudyDetails = new StudyServiceRequest.GetStudyDetails(
        new UUID(studyId)
      );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = StudyServiceRequest.Serializer;
      const serializedGetStudyDetails = json.encodeToString(
        serializer,
        getStudyDetails
      );

      const response = await this.instance.post(
        '/api/study-service',
        serializedGetStudyDetails,
        config
      );
      const serializedStudyDetails = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const detailSerializer = getSerializer(StudyDetails);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyDetails: StudyDetails = json.decodeFromString(
        detailSerializer,
        serializedStudyDetails
      );
      return await Promise.resolve(studyDetails);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Getting study details failed').value
      );
    }
  };

  getStudiesOverview = async (
    config: AxiosRequestConfig
  ): Promise<StudyOverview[]> => {
    try {
      const response = await this.instance.get(
        '/api/studies/studies-overview',
        config
      );
      return await Promise.resolve(response.data as StudyOverview[]);
    } catch (error) {
      return Promise.reject(unwrapError(error, 'Getting studies failed').value);
    }
  };

  getStudyStatus_CORE = async (
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<StudyStatus> => {
    try {
      const getStudyStatus = new StudyServiceRequest.GetStudyStatus(
        new UUID(studyId)
      );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = StudyServiceRequest.Serializer;
      const serializedStudyId = json.encodeToString(serializer, getStudyStatus);
      const response = await this.instance.post(
        '/api/study-service',
        serializedStudyId,
        config
      );
      const serializedStudyStatus = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const statusSerializer = getSerializer(StudyStatus);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyStatus: StudyStatus = json.decodeFromString(
        statusSerializer,
        serializedStudyStatus
      );
      return await Promise.resolve(studyStatus);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Retrieving study status failed').value
      );
    }
  };

  deleteStudy_CORE = async (
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<void> => {
    try {
      const deleteStudy = new StudyServiceRequest.Remove(new UUID(studyId));
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = StudyServiceRequest.Serializer;
      const serializedStudyId = json.encodeToString(serializer, deleteStudy);

      await this.instance.post('/api/study-service', serializedStudyId, config);
      return await Promise.resolve();
    } catch (error) {
      return Promise.reject(unwrapError(error, 'Delete study failed!').value);
    }
  };

  getActiveParticipationInvitations_CORE = async (
    userId: string,
    config: AxiosRequestConfig
  ): Promise<ActiveParticipationInvitation[]> => {
    try {
      const getActiveParticipationInvitations =
        new ParticipationServiceRequest.GetActiveParticipationInvitations(
          new UUID(userId)
        );
      // Serialize it
      const configModify: AxiosRequestConfig = {
        headers: config.headers as { [key: string]: string },
        transformResponse: [],
      };
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = ParticipationServiceRequest.Serializer;
      const serializedRequest = json.encodeToString(
        serializer,
        getActiveParticipationInvitations
      );
      const response = await this.instance.post(
        '/api/participation-service',
        serializedRequest,
        configModify
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const reponseSerializer = SetSerializer(
        getSerializer(ActiveParticipationInvitation)
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const decodedReponse: any = json.decodeFromString(
        reponseSerializer,
        response.data as string
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      const decodedResponseArray: ActiveParticipationInvitation[] =
        decodedReponse.toArray();
      return await Promise.resolve(decodedResponseArray);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Retrieving invitations failed').value
      );
    }
  };

  addInformedConsent = async (
    deploymentId: string,
    consentFile: ConsentFile,
    config: AxiosRequestConfig
  ): Promise<ConsentResponse> => {
    try {
      const response = await this.instance.post(
        `/api/deployments/${deploymentId}/consent-documents`,
        consentFile,
        config
      );
      return await Promise.resolve(response.data as ConsentResponse);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'posting consent file failed').value
      );
    }
  };

  deleteInformedConsent = async (
    deploymentId: string,
    consentId: number,
    config: AxiosRequestConfig
  ): Promise<ConsentResponse> => {
    try {
      const response = await this.instance.delete(
        `/api/deployments/${deploymentId}/consent-documents/${consentId}`,
        config
      );
      return await Promise.resolve(response.data as ConsentResponse);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'deleting consent file failed').value
      );
    }
  };

  getInformedConsent = async (
    deploymentId: string,
    consentId: number,
    config: AxiosRequestConfig
  ): Promise<ConsentResponse> => {
    try {
      const response = await this.instance.get(
        `/api/deployments/${deploymentId}/consent-documents/${consentId}`,
        config
      );
      return await Promise.resolve(response.data as ConsentResponse);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'getting consent file failed').value
      );
    }
  };

  getAllInformedConsent = async (
    deploymentId: string,
    config: AxiosRequestConfig
  ): Promise<ConsentResponse[]> => {
    try {
      const response = await this.instance.get(
        `/api/deployments/${deploymentId}/consent-documents`,
        config
      ); // add deployment ID to URL
      return await Promise.resolve(response.data as ConsentResponse[]);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'getting consent files failed').value
      );
    }
  };

  addDataPoint = async (
    deploymentId: string,
    dataPoint: DataPoint,
    config: AxiosRequestConfig
  ): Promise<DataResponse> => {
    try {
      const response = await this.instance.post(
        `/api/deployments/${deploymentId}/data-points`,
        dataPoint,
        config
      );
      return await Promise.resolve(response.data as DataResponse);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'posting datapoint failed').value
      );
    }
  };

  deleteDataPoint = async (
    deploymentId: string,
    dataPointId: number,
    config: AxiosRequestConfig
  ): Promise<void> => {
    try {
      await this.instance.delete(
        `/api/deployments/${deploymentId}/data-points/${dataPointId}`,
        config
      );
      return await Promise.resolve();
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'deleting datapoint failed').value
      );
    }
  };

  getDataPoint = async (
    deploymentId: string,
    dataPointId: number,
    config: AxiosRequestConfig
  ): Promise<DataResponse> => {
    try {
      const response = await this.instance.get(
        `/api/deployments/${deploymentId}/data-points/${dataPointId}`,
        config
      );
      return await Promise.resolve(response.data as DataResponse);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'getting datapoint failed').value
      );
    }
  };

  getAllDataPoints = async (
    deploymentId: string,
    config: AxiosRequestConfig
  ): Promise<DataResponse[]> => {
    try {
      const response = await this.instance.get(
        `/api/deployments/${deploymentId}/data-points`,
        config
      );
      return await Promise.resolve(response.data as DataResponse[]);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'getting datapoints failed').value
      );
    }
  };

  getAllDataPointsWithQuery = async (
    deploymentId: string,
    query: string,
    config: AxiosRequestConfig
  ): Promise<DataResponse[]> => {
    try {
      const response = await this.instance.get(
        `/api/deployments/${deploymentId}/data-points?query=${query}`,
        config
      );
      return await Promise.resolve(response.data as DataResponse[]);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'getting datapoints failed').value
      );
    }
  };

  getParticipantData_CORE = async (
    studyDeploymentId: string,
    config: AxiosRequestConfig
  ): Promise<ParticipantData> => {
    try {
      const participantDataRequest =
        new ParticipationServiceRequest.GetParticipantData(
          new UUID(studyDeploymentId)
        );
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = ParticipationServiceRequest.Serializer;
      const serializedRequest = json.encodeToString(
        serializer,
        participantDataRequest
      );
      const response = await this.instance.post(
        '/api/participation-service',
        serializedRequest,
        config
      );
      if (response.data.common) {
        response.data.common = toMap(
          Object.entries(response.data.common).map(
            ([key, value]) => new Pair(key, value)
          )
        );
      }
      return await Promise.resolve(response.data as ParticipantData);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'getting participant data failed').value
      );
    }
  };

  getParticipantDataList_CORE = async (
    studyIds: string[],
    config: AxiosRequestConfig
  ): Promise<ParticipantData[]> => {
    try {
      const ids: UUID[] = [];
      studyIds.forEach(id => {
        ids.push(new UUID(id));
      });
      const studyIdsSet = toSet(ids);
      const participantDataRequest =
        new ParticipationServiceRequest.GetParticipantDataList(studyIdsSet);

      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = ParticipationServiceRequest.Serializer;
      const serializedRequest = json.encodeToString(
        serializer,
        participantDataRequest
      );
      const response = await this.instance.post(
        '/api/participation-service',
        serializedRequest,
        config
      );
      const modifiedResponse = response.data.map((data: any) => {
        const modified = data;
        if (modified.common) {
          modified.common = toMap(
            Object.entries(modified.common).map(
              ([key, value]) => new Pair(key, value)
            )
          );
        }
        return modified;
      });
      return await Promise.resolve(modifiedResponse as ParticipantData[]);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'getting participant datalist failed').value
      );
    }
  };

  getDeploymentStatistics = async (
    deploymentIds: string[],
    config: AxiosRequestConfig
  ): Promise<Statistics[]> => {
    try {
      const response = await this.instance.post(
        '/api/deployment-service/statistics',
        { deploymentIds },
        config
      ); // add deployment ID to URL
      const responseData: {
        deployments: { deploymentId: string; uploads: any }[];
      }[] = [];
      const res: { deploymentId: string; uploads: any }[] = [];

      const DeploymentIdArray: string[] = [];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
      const { statistics } = response.data;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      Object.keys(statistics).forEach(id => {
        DeploymentIdArray.push(id);
      });

      DeploymentIdArray.forEach(id => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        const value = statistics[id];

        const dataTypes: string[] = [];
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        Object.keys(value).forEach(dataType => {
          dataTypes.push(dataType);
        });

        const uploads: any[] = [];
        dataTypes.forEach(element => {
          // eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/ban-types
          const obj: {
            dataType: string;
            uploads: { count: number; uploads: {} };
          } = {
            dataType: element,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            uploads: value[element],
          };
          uploads.push(obj);
        });

        const obj: { deploymentId: string; uploads: any[] } = {
          deploymentId: id,
          uploads,
        };
        res.push(obj);
        responseData.push({
          deployments: res,
        });
      });

      return await Promise.resolve(responseData);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'getting statistics failed').value
      );
    }
  };

  getDeploymentsStatus = async (
    studyDeploymentId: string,
    config: AxiosRequestConfig
  ): Promise<StudyDeploymentStatus> => {
    try {
      const getDeploymentStatus =
        new DeploymentServiceRequest.GetStudyDeploymentStatus(
          new UUID(studyDeploymentId)
        );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = DeploymentServiceRequest.Serializer;
      const serializedGetDeploymentStatus = json.encodeToString(
        serializer,
        getDeploymentStatus
      );
      const response = await this.instance.post(
        '/api/deployment-service',
        serializedGetDeploymentStatus,
        config
      );
      const serializedDeploymentStatus = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const statusSerializer = getSerializer(StudyDeploymentStatus);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const deploymentStatus: StudyDeploymentStatus = json.decodeFromString(
        statusSerializer,
        serializedDeploymentStatus
      );
      return await Promise.resolve(deploymentStatus);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Retrieving group deployment status failed').value
      );
    }
  };

  getAllDeploymentsStatus = async (
    studyDeploymentIds: string[],
    config: AxiosRequestConfig
  ): Promise<StudyDeploymentStatus[]> => {
    try {
      studyDeploymentIds.map(id => new UUID(id));
      const deploymentIds = toSet(studyDeploymentIds.map(id => new UUID(id)));
      const getDeploymentsStatus =
        new DeploymentServiceRequest.GetStudyDeploymentStatusList(
          deploymentIds
        );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = DeploymentServiceRequest.Serializer;
      const serializedGetDeploymentsStatus = json.encodeToString(
        serializer,
        getDeploymentsStatus
      );
      const response = await this.instance.post(
        '/api/deployment-service',
        serializedGetDeploymentsStatus,
        config
      );
      const serializedDeploymentsStatus = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const statusSerializer = ListSerializer(
        getSerializer(StudyDeploymentStatus)
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const deploymentsStatus = json.decodeFromString(
        statusSerializer,
        serializedDeploymentsStatus
      ) as ArrayList<StudyDeploymentStatus>;
      return await Promise.resolve(deploymentsStatus.toArray());
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Retrieving group deployment status failed').value
      );
    }
  };

  registerDevice_CORE = async (
    studyDeploymentId: string,
    primaryDeviceRoleName: string,
    deviceId: string,
    config: AxiosRequestConfig
  ): Promise<StudyDeploymentStatus.Running> => {
    try {
      const registerDevice = new DeploymentServiceRequest.RegisterDevice(
        new UUID(studyDeploymentId),
        primaryDeviceRoleName,
        new DefaultDeviceRegistration(deviceId)
      );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = DeploymentServiceRequest.Serializer;
      const serializedRegisterDevice = json.encodeToString(
        serializer,
        registerDevice
      );
      const response = await this.instance.post(
        '/api/deployment-service',
        serializedRegisterDevice,
        config
      );
      const serializedDeviceDeployment = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const DeviceDeploymentSerializer = getSerializer(StudyDeploymentStatus);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const deviceDeployment: StudyDeploymentStatus.Running =
        json.decodeFromString(
          DeviceDeploymentSerializer,
          serializedDeviceDeployment
        );
      return await Promise.resolve(deviceDeployment);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'registering device failed').value
      );
    }
  };

  updateDeviceRegistration = async (
    studyDeploymentId: string,
    primaryDeviceRoleName: string,
    lastUpdated: Instant,
    config: AxiosRequestConfig
  ): Promise<StudyDeploymentStatus.Running> => {
    try {
      const registerDevice = new DeploymentServiceRequest.DeviceDeployed(
        new UUID(studyDeploymentId),
        primaryDeviceRoleName,
        lastUpdated
      );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = DeploymentServiceRequest.Serializer;
      const serializedRegisterDevice = json.encodeToString(
        serializer,
        registerDevice
      );
      const response = await this.instance.post(
        '/api/deployment-service',
        serializedRegisterDevice,
        config
      );
      const serializedDeviceDeployment = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const DeviceDeploymentSerializer = getSerializer(StudyDeploymentStatus);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const deviceDeployment: StudyDeploymentStatus.Running =
        json.decodeFromString(
          DeviceDeploymentSerializer,
          serializedDeviceDeployment
        );
      return await Promise.resolve(deviceDeployment);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'updating device registration failed').value
      );
    }
  };

  GetDeviceDeploymentFor_CORE = async (
    studyDeploymentId: string,
    primaryDeviceRoleName: string,
    config: AxiosRequestConfig
  ): Promise<MasterDeviceDeployment> => {
    try {
      const getDeviceDeploymentFor =
        new DeploymentServiceRequest.GetDeviceDeploymentFor(
          new UUID(studyDeploymentId),
          primaryDeviceRoleName
        );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = DeploymentServiceRequest.Serializer;
      const serializedRegisterDevice = json.encodeToString(
        serializer,
        getDeviceDeploymentFor
      );
      const response = await this.instance.post(
        '/api/deployment-service',
        serializedRegisterDevice,
        config
      );
      const serializedDeviceDeployment = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const DeviceDeploymentSerializer = getSerializer(MasterDeviceDeployment);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const deviceDeployment: MasterDeviceDeployment = json.decodeFromString(
        DeviceDeploymentSerializer,
        serializedDeviceDeployment
      );
      return await Promise.resolve(deviceDeployment);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'getting deviceDeployment failed').value
      );
    }
  };

  setParticipantData_CORE = async (
    studyDeploymentId: string,
    data: { [key: string]: InputDataType },
    inputRoleName: string | null,
    config: AxiosRequestConfig
  ): Promise<ParticipantData> => {
    try {
      const request = {
        __type:
          'dk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest.SetParticipantData',
        apiVersion: '1.0',
        studyDeploymentId: studyDeploymentId,
        data: data,
        inputByParticipantRole: inputRoleName,
      };
      const response = await this.instance.post(
        '/api/participation-service',
        request,
        config
      );
      const serializedParticipantData = JSON.stringify(response.data);
      const json: Json = DefaultSerializer;
      const participantDataSerializer = getSerializer(ParticipantData);

      const participantData: ParticipantData = json.decodeFromString(
        participantDataSerializer,
        serializedParticipantData
      );
      return await Promise.resolve(participantData);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'setting participant data failed').value
      );
    }
  };

  getStudiesOverview_CORE = async (
    studyOwner: string,
    config: AxiosRequestConfig
  ): Promise<StudyStatus[]> => {
    try {
      const getStudiesOverview = new StudyServiceRequest.GetStudiesOverview(
        new UUID(studyOwner)
      );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = StudyServiceRequest.Serializer;
      const serializedGetStudiesOverview = json.encodeToString(
        serializer,
        getStudiesOverview
      );

      const response = await this.instance.post(
        '/api/study-service',
        serializedGetStudiesOverview,
        config
      );
      const serializedStudyStatusList = JSON.stringify(response.data);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const statusSerializer = ListSerializer(getSerializer(StudyStatus));
      const studyStatusArrayList = json.decodeFromString(
        statusSerializer,
        serializedStudyStatusList
      ) as ArrayList<StudyStatus>;
      const studyStatusArray = studyStatusArrayList.toArray();
      return await Promise.resolve(studyStatusArray);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Retrieving studies overview failed').value
      );
    }
  };

  getStudiesOverviewForResearcher = async (
    accountId: string,
    config: AxiosRequestConfig
  ): Promise<StudyStatus[]> => {
    try {
      const json: Json = DefaultSerializer;
      const response = await this.instance.get(
        `api/accounts/${accountId}/study-manager`,
        config
      );
      // TODO: In the response we are getting "type" and not "__type"!!!
      const serializedStudyStatusList = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const statusSerializer = ListSerializer(getSerializer(StudyStatus));
      const studyStatusArrayList = json.decodeFromString(
        statusSerializer,
        serializedStudyStatusList
      ) as ArrayList<StudyStatus>;
      const studyStatusList = studyStatusArrayList.toArray();
      return await Promise.resolve(studyStatusList);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'getStudiesForResearcherFailed').value
      );
    }
  };

  addParticipantByEmailAddress_CORE = async (
    studyId: string,
    email: string,
    config: AxiosRequestConfig
  ): Promise<Participant> => {
    try {
      const addParticipant =
        new RecruitmentServiceRequest.AddParticipantByEmailAddress(
          new UUID(studyId),
          new EmailAddress(email)
        );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = RecruitmentServiceRequest.Serializer;
      const serializedAddParticipant = json.encodeToString(
        serializer,
        addParticipant
      );

      const response = await this.instance.post(
        '/api/recruitment-service',
        serializedAddParticipant,
        config
      );
      const serializedParticipant = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const participantSerializer = getSerializer(Participant);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const participant: Participant = json.decodeFromString(
        participantSerializer,
        serializedParticipant
      );
      return await Promise.resolve(participant);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Adding new participant failed').value
      );
    }
  };

  addParticipantByUsername_CORE = async (
    studyId: string,
    username: string,
    config: AxiosRequestConfig
  ): Promise<Participant> => {
    try {
      const addParticipant =
        new RecruitmentServiceRequest.AddParticipantByUsername(
          new UUID(studyId),
          new Username(username)
        );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = RecruitmentServiceRequest.Serializer;
      const serializedAddParticipant = json.encodeToString(
        serializer,
        addParticipant
      );

      const response = await this.instance.post(
        '/api/recruitment-service',
        serializedAddParticipant,
        config
      );
      const serializedParticipant = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const participantSerializer = getSerializer(Participant);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const participant: Participant = json.decodeFromString(
        participantSerializer,
        serializedParticipant
      );
      return await Promise.resolve(participant);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Adding new participant failed').value
      );
    }
  };

  addParticipants = async (
    studyId: string,
    emails: string[],
    config: AxiosRequestConfig
  ): Promise<Participant[]> => {
    try {
      const response = await this.instance.post(
        `/api/studies/${studyId}/participants/add`,
        { emails },
        config
      );
      return await Promise.resolve(response.data as Participant[]);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Adding participants failed').value
      );
    }
  };

  generateAnonymousAccounts = async ({
    studyId,
    amountOfAccounts,
    expirationSeconds,
    redirectUri,
    participantRoleName,
    config,
  }: AnonymousLinksRequest): Promise<Export> => {
    try {
      const response = await this.instance.post(
        `/api/studies/${studyId}/exports/anonymous-participants`,
        {
          amountOfAccounts,
          expirationSeconds,
          redirectUri,
          participantRoleName,
        },
        config
      );

      return await Promise.resolve(response.data as Export);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Generating anonymous accounts failed').value
      );
    }
  };

  getParticipants_CORE = async (
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<Participant[]> => {
    try {
      const getParticipants = new RecruitmentServiceRequest.GetParticipants(
        new UUID(studyId)
      );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = RecruitmentServiceRequest.Serializer;
      const serializedGetParticipants = json.encodeToString(
        serializer,
        getParticipants
      );
      const response = await this.instance.post(
        '/api/recruitment-service',
        serializedGetParticipants,
        config
      );

      const serializedParticipantList = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const participantListSerializer = ListSerializer(
        getSerializer(Participant)
      );
      const participantList = json.decodeFromString(
        participantListSerializer,
        serializedParticipantList
      ) as ArrayList<Participant>;
      return await Promise.resolve(participantList.toArray());
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Retrieving participants failed').value
      );
    }
  };

  setInvitation_CORE = async (
    studyId: string,
    invitationName: string,
    invitationDescription: string,
    config: AxiosRequestConfig
  ): Promise<StudyStatus> => {
    try {
      const setInvitation = new StudyServiceRequest.SetInvitation(
        new UUID(studyId),
        new StudyInvitation(invitationName, invitationDescription, studyId)
      );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = StudyServiceRequest.Serializer;
      const serializedSetInvitation = json.encodeToString(
        serializer,
        setInvitation
      );

      const response = await this.instance.post(
        '/api/study-service',
        serializedSetInvitation,
        config
      );
      const serializedStudyStatus = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const statusSerializer = getSerializer(StudyStatus);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyStatus: StudyStatus = json.decodeFromString(
        statusSerializer,
        serializedStudyStatus
      );
      return await Promise.resolve(studyStatus);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Setting invitation failed').value
      );
    }
  };

  setProtocol_CORE = async (
    studyId: string,
    protocol: StudyProtocolSnapshot,
    config: AxiosRequestConfig
  ): Promise<StudyStatus> => {
    try {
      const setProtocol = new StudyServiceRequest.SetProtocol(
        new UUID(studyId),
        protocol as unknown as sdk.cachet.carp.protocols.application.StudyProtocolSnapshot
      );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = StudyServiceRequest.Serializer;
      const serializedSetProtocol = json.encodeToString(
        serializer,
        setProtocol
      );

      const response = await this.instance.post(
        '/api/study-service',
        serializedSetProtocol,
        config
      );
      const serializedStudyStatus = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const statusSerializer = getSerializer(StudyStatus);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyStatus: StudyStatus = json.decodeFromString(
        statusSerializer,
        serializedStudyStatus
      );
      return await Promise.resolve(studyStatus);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Setting protocol failed').value
      );
    }
  };

  goLive_CORE = async (
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<StudyStatus> => {
    try {
      const goLive = new StudyServiceRequest.GoLive(new UUID(studyId));
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = StudyServiceRequest.Serializer;
      const serializedGoLive = json.encodeToString(serializer, goLive);

      const response = await this.instance.post(
        '/api/study-service',
        serializedGoLive,
        config
      );
      const serializedStudyStatus = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const statusSerializer = getSerializer(StudyStatus);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyStatus: StudyStatus = json.decodeFromString(
        statusSerializer,
        serializedStudyStatus
      );
      return await Promise.resolve(studyStatus);
    } catch (error) {
      return Promise.reject(unwrapError(error, 'Going live failed').value);
    }
  };

  inviteNewParticipantGroup_CORE = async (
    studyId: string,
    participantsWithRoles: ParticipantWithRoles[],
    config: AxiosRequestConfig
  ): Promise<ParticipantGroupStatus> => {
    try {
      // Serialize it
      const json: Json = DefaultSerializer;
      const assignParticipantRoles = participantsWithRoles.map(
        (participantWithRoles: ParticipantWithRoles) =>
          new AssignParticipantRoles(
            new UUID(participantWithRoles.id),
            new Roles(toSet(participantWithRoles.assignedRoles))
          )
      );

      const inviteNewParticipantGroup =
        new RecruitmentServiceRequest.InviteNewParticipantGroup(
          new UUID(studyId),
          toSet(assignParticipantRoles)
        );

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = RecruitmentServiceRequest.Serializer;
      const serializedInviteNewParticipantGroup = json.encodeToString(
        serializer,
        inviteNewParticipantGroup
      );
      const response = await this.instance.post(
        '/api/recruitment-service',
        serializedInviteNewParticipantGroup,
        config
      );

      const serializedParticipantGroupStatus = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const participantGroupSerializer = getSerializer(ParticipantGroupStatus);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const participantGroupStatus: ParticipantGroupStatus =
        json.decodeFromString(
          participantGroupSerializer,
          serializedParticipantGroupStatus
        );
      return await Promise.resolve(participantGroupStatus);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Deploying participant group failed').value
      );
    }
  };

  getParticipantGroupStatusList_CORE = async (
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<ParticipantGroupStatus[]> => {
    try {
      const getParticipantGroupStatusList =
        new RecruitmentServiceRequest.GetParticipantGroupStatusList(
          new UUID(studyId)
        );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = RecruitmentServiceRequest.Serializer;
      const serializedGetParticipantGroupStatusList = json.encodeToString(
        serializer,
        getParticipantGroupStatusList
      );

      const response = await this.instance.post(
        '/api/recruitment-service',
        serializedGetParticipantGroupStatusList,
        config
      );
      const serializedParticipantGroupStatusList = JSON.stringify(
        response.data
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const participantGroupStatusSerializer = ListSerializer(
        getSerializer(ParticipantGroupStatus)
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const participantGroupStatusArrayList: ArrayList<ParticipantGroupStatus> =
        json.decodeFromString(
          participantGroupStatusSerializer,
          serializedParticipantGroupStatusList
        );
      return await Promise.resolve(participantGroupStatusArrayList.toArray());
    } catch (error) {
      return Promise.reject(unwrapError(error, 'Getting status failed').value);
    }
  };

  getParticipantGroupsAccountsAndStatus = async (
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<ParticipantGroups> => {
    try {
      return await Promise.resolve(
        (
          await this.instance.get(
            `/api/studies/${studyId}/participantGroup/status`,
            config
          )
        ).data as ParticipantGroups
      );
    } catch (error) {
      return Promise.reject(
        unwrapError(
          error,
          'Getting participant groups accounts and status failed'
        ).value
      );
    }
  };

  stopParticipantGroup_CORE = async (
    studyId: string,
    groupId: string,
    config: AxiosRequestConfig
  ): Promise<ParticipantGroupStatus> => {
    try {
      const stopParticipantGroup =
        new RecruitmentServiceRequest.StopParticipantGroup(
          new UUID(studyId),
          new UUID(groupId)
        );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = RecruitmentServiceRequest.Serializer;
      const serializedStopParticipantGroup = json.encodeToString(
        serializer,
        stopParticipantGroup
      );
      const response = await this.instance.post(
        '/api/recruitment-service',
        serializedStopParticipantGroup,
        config
      );
      const serializedParticipantGroupStatus = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const participantGroupSerializer = getSerializer(ParticipantGroupStatus);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const participantGroupStatus: ParticipantGroupStatus =
        json.decodeFromString(
          participantGroupSerializer,
          serializedParticipantGroupStatus
        );
      return await Promise.resolve(participantGroupStatus);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Stopping participant group failed').value
      );
    }
  };

  addProtocol_CORE = async (
    protocol: ProtocolJSONObject,
    versionTag: string,
    config: AxiosRequestConfig
  ): Promise<void> => {
    try {
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const protocolSerializer = getSerializer(StudyProtocolSnapshot);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const protocolConverted = json.decodeFromString(
        protocolSerializer,
        JSON.stringify(protocol)
      );
      const protocolObj = new ProtocolServiceRequest.Add(
        protocolConverted as StudyProtocolSnapshot,
        versionTag
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const addSerializer = ProtocolServiceRequest.Serializer;
      const serializedAddProtocol = json.encodeToString(
        addSerializer,
        protocolObj
      );
      await this.instance.post(
        '/api/protocol-service',
        serializedAddProtocol,
        config
      );
      return await Promise.resolve();
    } catch (error) {
      return Promise.reject(unwrapError(error, 'Adding protocol failed').value);
    }
  };

  updateProtocol_CORE = async (
    protocol: ProtocolJSONObject,
    versionTag: string,
    config: AxiosRequestConfig
  ): Promise<void> => {
    try {
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const protocolSerializer = getSerializer(StudyProtocolSnapshot);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const protocolConverted = json.decodeFromString(
        protocolSerializer,
        JSON.stringify(protocol)
      );
      const protocolObj = new ProtocolServiceRequest.AddVersion(
        protocolConverted as StudyProtocolSnapshot,
        versionTag
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const addSerializer = ProtocolServiceRequest.Serializer;
      const serializedAddVersion = json.encodeToString(
        addSerializer,
        protocolObj
      );
      await this.instance.post(
        '/api/protocol-service',
        serializedAddVersion,
        config
      );
      return await Promise.resolve();
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Adding new version failed').value
      );
    }
  };

  getProtocolBy_CORE = async (
    protocolId: string,
    config: AxiosRequestConfig,
    versionTag?: string
  ): Promise<StudyProtocolSnapshot> => {
    try {
      const getProtocolBy = new ProtocolServiceRequest.GetBy(
        new UUID(protocolId),
        versionTag
      );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = ProtocolServiceRequest.Serializer;
      const serializedGetProtocolBy = json.encodeToString(
        serializer,
        getProtocolBy
      );
      const response = await this.instance.post(
        '/api/protocol-service',
        serializedGetProtocolBy,
        config
      );

      const serializedStudyProtocolSnapshot = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyProtocolSnapshotSerializer = getSerializer(
        StudyProtocolSnapshot
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyProtocolSnapshot: StudyProtocolSnapshot =
        json.decodeFromString(
          studyProtocolSnapshotSerializer,
          serializedStudyProtocolSnapshot
        );
      return await Promise.resolve(studyProtocolSnapshot);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Getting protocol failed').value
      );
    }
  };

  getLatestProtocol = async (
    protocolId: string,
    config: AxiosRequestConfig
  ): Promise<LatestProtocol> => {
    try {
      const response = await this.instance.get(
        `/api/protocols/${protocolId}/latest`,
        config
      );
      const data = response.data as LatestProtocol;
      const json: Json = DefaultSerializer;
      const serializedLatestProtocol = JSON.stringify(data.snapshot);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyProtocolSnapshotSerializer = getSerializer(
        StudyProtocolSnapshot
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyProtocolSnapshot: StudyProtocolSnapshot =
        json.decodeFromString(
          studyProtocolSnapshotSerializer,
          serializedLatestProtocol
        );
      const objectToReturn = {
        versionTag: data.versionTag,
        snapshot: studyProtocolSnapshot,
        firstVersionCreatedDate: data.firstVersionCreatedDate,
        lastVersionCreatedDate: data.lastVersionCreatedDate,
      };
      return await Promise.resolve(objectToReturn as LatestProtocol);
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Getting latest protocol failed').value
      );
    }
  };

  getAllProtocolsForOwner_CORE = async (
    ownerId: string,
    config: AxiosRequestConfig
  ): Promise<StudyProtocolSnapshot[]> => {
    try {
      const getAllProtocolForOwner = new ProtocolServiceRequest.GetAllForOwner(
        new UUID(ownerId)
      );
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = ProtocolServiceRequest.Serializer;
      const serializedGetAllProtocolForOwner = json.encodeToString(
        serializer,
        getAllProtocolForOwner
      );
      const response = await this.instance.post(
        '/api/protocol-service',
        serializedGetAllProtocolForOwner,
        config
      );
      const serializedStudyProtocolSnapshotList = JSON.stringify(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyProtocolSnapshotListSerializer = ListSerializer(
        getSerializer(StudyProtocolSnapshot)
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const studyProtocolSnapshotList: ArrayList<StudyProtocolSnapshot> =
        json.decodeFromString(
          studyProtocolSnapshotListSerializer,
          serializedStudyProtocolSnapshotList
        );
      return await Promise.resolve(studyProtocolSnapshotList.toArray());
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Getting protocols for owner failed').value
      );
    }
  };

  getVersionHistoryForProtocol_CORE = async (
    protocolId: string,
    config: AxiosRequestConfig
  ): Promise<ProtocolVersion[]> => {
    try {
      const getVersionHistoryFor =
        new ProtocolServiceRequest.GetVersionHistoryFor(new UUID(protocolId));
      // Serialize it
      const json: Json = DefaultSerializer;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = ProtocolServiceRequest.Serializer;
      const serializedGetVersionHistoryForProtocol = json.encodeToString(
        serializer,
        getVersionHistoryFor
      );
      const configModify: AxiosRequestConfig = {
        baseURL: config.baseURL,
        headers: config.headers as { [key: string]: string },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        transformResponse: r => r,
      };
      const response = await this.instance.post(
        '/api/protocol-service',
        serializedGetVersionHistoryForProtocol,
        configModify
      );
      const serializedVersionHistoryList = response.data as string;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const versionHistoryListSerializer = ListSerializer(
        getSerializer(ProtocolVersion)
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const versionHistoryList: ArrayList<ProtocolVersion> =
        json.decodeFromString(
          versionHistoryListSerializer,
          serializedVersionHistoryList
        );
      return await Promise.resolve(versionHistoryList.toArray());
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Getting versions for protocol failed').value
      );
    }
  };

  getCollectionByName = async (
    collectionName: string,
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<Collection> => {
    try {
      return await Promise.resolve(
        (
          await this.instance.get(
            `/api/studies/${studyId}/collections/${collectionName}`,
            config
          )
        ).data as Collection
      );
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Getting collection failed').value
      );
    }
  };

  createDocumentInCollection = async (
    collectionName: string,
    studyId: string,
    document: CarpDocumentData,
    config: AxiosRequestConfig,
    fileName?: string
  ): Promise<CarpDocument> => {
    const newFileName =
      fileName ?? UUID.Companion.randomUUID().stringRepresentation;

    try {
      return await Promise.resolve(
        (
          await this.instance.post(
            `/api/studies/${studyId}/collections/${collectionName}/${newFileName}`,
            document,
            config
          )
        ).data as CarpDocument
      );
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Creating document failed').value
      );
    }
  };

  getDocumentById = async (
    studyId: string,
    documentId: string,
    config: AxiosRequestConfig
  ): Promise<CarpDocument> => {
    try {
      return await Promise.resolve(
        (
          await this.instance.get(
            `/api/studies/${studyId}/documents/${documentId}`,
            config
          )
        ).data as CarpDocument
      );
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Getting document failed').value
      );
    }
  };

  getCollectionDocumentByFilename = async (
    collectionName: string,
    fileName: string,
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<CarpDocument> => {
    try {
      return await Promise.resolve(
        (
          await this.instance.get(
            `/api/studies/${studyId}/collections/${collectionName}/${fileName}`,
            config
          )
        ).data as CarpDocument
      );
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Getting collection failed').value
      );
    }
  };

  deleteDocumentById = async (
    studyId: string,
    documentId: string,
    config: AxiosRequestConfig
  ): Promise<void> => {
    try {
      await this.instance.delete(
        `/api/studies/${studyId}/documents/${documentId}`,
        config
      );
      return await Promise.resolve();
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Deleting document failed').value
      );
    }
  };

  uploadImageToStudy = async (
    studyId: string,
    formData: FormData | FormDataPackage,
    config: AxiosRequestConfig
  ): Promise<string> => {
    try {
      let configModified = config;
      if ((formData as FormDataPackage).getHeaders?.()) {
        configModified = {
          ...configModified,
          headers: {
            ...(configModified.headers as {
              [key: string]: string;
            }),
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            ...((formData as FormDataPackage).getHeaders() as {
              [key: string]: string;
            }),
          },
        };
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        configModified.headers!['Content-Type'] = undefined;
      }
      return await Promise.resolve(
        (
          await this.instance.post(
            `/api/studies/${studyId}/images`,
            formData,
            configModified
          )
        ).data as string
      );
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Uploading document failed').value
      );
    }
  };

  updateDocumentById = async (
    studyId: string,
    documentId: string,
    document: CarpDocumentData,
    config: AxiosRequestConfig,
    name?: string
  ): Promise<CarpDocument> => {
    try {
      const body = {
        name: name ?? (document.id as string),
        data: document,
      };
      return await Promise.resolve(
        (
          await this.instance.put(
            `/api/studies/${studyId}/documents/${documentId}`,
            body,
            config
          )
        ).data as CarpDocument
      );
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Updating document failed').value
      );
    }
  };

  // eslint-disable-next-line class-methods-use-this
  parseUser = (jwtToken: string): User => {
    const userDecoded: UserJwtTokenDecoded = jwtDecode(jwtToken);
    let role;
    if (userDecoded.realm_access.roles.includes('system_admin')) {
      role = 'SYSTEM_ADMIN';
    } else if (userDecoded.realm_access.roles.includes('carp_admin')) {
      role = 'CARP_ADMIN';
    } else if (userDecoded.realm_access.roles.includes('researcher')) {
      role = 'RESEARCHER';
    } else if (userDecoded.realm_access.roles.includes('participant')) {
      role = 'PARTICIPANT';
    } else {
      role = 'UNKNOWN';
    }
    return new User(
      userDecoded.sub,
      userDecoded.email,
      userDecoded.given_name,
      userDecoded.family_name,
      userDecoded.email_verified,
      userDecoded.sub,
      [role]
    );
  };

  getInactiveDeployments = async (
    studyId: string,
    lastUpdate: number,
    config: AxiosRequestConfig
  ): Promise<InactiveDeployment[]> => {
    try {
      return await Promise.resolve(
        (
          await this.instance.get(
            `/api/studies/${studyId}/inactive_deployments?last_update=${lastUpdate}`,
            config
          )
        ).data as InactiveDeployment[]
      );
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Getting inactive deployments failed').value
      );
    }
  };

  postEmailSendGeneric = async (
    genericEmailRequest: GenericEmailRequest,
    config: AxiosRequestConfig
  ): Promise<void> => {
    try {
      return await Promise.resolve(
        await this.instance.post(
          '/api/email/send-generic',
          genericEmailRequest,
          config
        )
      );
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Sending generic email failed').value
      );
    }
  };

  createFile = async (
    studyId: string,
    file: File,
    config: AxiosRequestConfig,
    metadata?: string
  ): Promise<File> => {
    try {
      return await Promise.resolve(
        (
          await this.instance.post(
            `/api/studies/${studyId}/files`,
            {
              metadata,
              file,
            },
            config
          )
        ).data as File
      );
    } catch (error) {
      return Promise.reject(unwrapError(error, 'Creating file failed').value);
    }
  };

  downloadFile = async (
    studyId: string,
    fileId: string,
    config: AxiosRequestConfig
  ): Promise<File> => {
    try {
      return await Promise.resolve(
        (
          await this.instance.get(
            `/api/studies/${studyId}/files/${fileId}`,
            config
          )
        ).data as File
      );
    } catch (error) {
      return Promise.reject(
        unwrapError(error, 'Downloading file failed').value
      );
    }
  };

  getFiles = async (
    studyId: string,
    config: AxiosRequestConfig
  ): Promise<File[]> => {
    try {
      return await Promise.resolve(
        (await this.instance.get(`/api/studies/${studyId}/files`, config))
          .data as File[]
      );
    } catch (error) {
      return Promise.reject(unwrapError(error, 'Getting files failed').value);
    }
  };

  getFile = async (
    studyId: string,
    fileId: string,
    config: AxiosRequestConfig
  ): Promise<File> => {
    try {
      return await Promise.resolve(
        (
          await this.instance.get(
            `/api/studies/${studyId}/files/${fileId}`,
            config
          )
        ).data as File
      );
    } catch (error) {
      return Promise.reject(unwrapError(error, 'Getting file failed').value);
    }
  };
}
