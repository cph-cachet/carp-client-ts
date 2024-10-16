import carpCommon from '@cachet/carp-common';
import carpProtocolsCore from '@cachet/carp-protocols-core';
import carpStudiesCore from '@cachet/carp-studies-core';

import { kotlin } from '@cachet/carp-kotlin';
import { kotlinx as kxd } from '@cachet/carp-kotlinx-datetime';
import { kotlinx } from '@cachet/carp-kotlinx-serialization';
import { AxiosRequestConfig } from 'axios';
import 'dotenv/config';
import FormData from 'form-data';
import * as fs from 'fs';
import * as path from 'path';
import {
  CarpDocument,
  ConsentFile,
  DataPoint,
  MessageData,
  ProtocolJSONObject,
  Token,
} from '../models';
import {
  badRequestConfig,
  carpInstance,
  contentType,
  defaultParams,
  getAccesToken,
  getBearerAuthConfig,
  getCurrentAcountId,
  grantType,
  loginParams,
} from './utils';

import pdk = carpProtocolsCore.dk;
import dk = carpStudiesCore.dk;
import cdk = carpCommon.dk;

import Instant = kxd.datetime.Instant;

import getSerializer = kotlinx.serialization.getSerializer;

import UUID = cdk.cachet.carp.common.application.UUID;
import DefaultSerializer = cdk.cachet.carp.common.infrastructure.serialization.JSON;

import StudyProtocolSnapshot = pdk.cachet.carp.protocols.application.StudyProtocolSnapshot;
import ProtocolVersion = pdk.cachet.carp.protocols.application.ProtocolVersion;

import Participant = dk.cachet.carp.studies.application.users.Participant;

import StudyStatus = dk.cachet.carp.studies.application.StudyStatus;
import StudyDetails = dk.cachet.carp.studies.application.StudyDetails;
import ParticipantGroupStatus = dk.cachet.carp.studies.application.users.ParticipantGroupStatus;

import Pair = kotlin.Pair;
import Nullable = kotlin.Nullable;
import Data = dk.cachet.carp.common.application.data.Data;
import Sex = dk.cachet.carp.common.application.data.input.Sex;
import CarpInputDataTypes = dk.cachet.carp.common.application.data.input.CarpInputDataTypes;
import NamespacedId = dk.cachet.carp.common.application.NamespacedId;

require('dotenv').config();

const toMap = kotlin.collections.mapOf;

describe('CARP tests', () => {
  let config: AxiosRequestConfig;
  let currentAccountId: string;
  let token: string;
  const TEST_EMAIL = process.env.TEST_EMAIL as string;
  const RESEARCHER_EMAIL = process.env.RESEARCHER_EMAIL as string;
  const TEST_USERNAME = process.env.TEST_USERNAME as string;
  const RANDOM_UUID_NONEXISTENT = UUID.Companion.randomUUID();

  beforeAll(async () => {
    token = await getAccesToken();
    currentAccountId = await getCurrentAcountId(token);
    config = getBearerAuthConfig(token);
  });

  describe('CARP auth services', () => {
    describe('authenticate', () => {
      test('should fail', async () => {
        const wrongLoginParams = {
          ...loginParams,
          username: 'wrong',
        };

        await carpInstance
          .authenticate(
            {
              ...defaultParams,
              ...wrongLoginParams,
              grant_type: grantType.password,
            },
            {
              headers: {
                'Content-Type': contentType.application_x_www_form_urlencoded,
              },
            }
          )
          .catch(error => {
            expect(error).toHaveProperty('httpResponseCode', 401);
            expect(error).toHaveProperty('message', 'Authorization failed');
          });
      });

      test('should succeed', async () => {
        const response = await carpInstance.authenticate(
          {
            ...defaultParams,
            ...loginParams,
            grant_type: grantType.password,
          },
          {
            headers: {
              'Content-Type': contentType.application_x_www_form_urlencoded,
            },
          }
        );
        expect(response instanceof Token).toBeTruthy();
        expect(response).toHaveProperty('access_token');
        expect(response).toHaveProperty('refresh_token');
        expect(response).toHaveProperty('token_type');
        expect(response).toHaveProperty('scope');
        expect(response).toHaveProperty('expires_in');
      });
    });

    describe('getJwtInUse', () => {
      test('should succeed', async () => {
        const response = await carpInstance.getJwtInUse(
          { ...defaultParams, token },
          {
            headers: {
              'Content-Type': contentType.application_x_www_form_urlencoded,
            },
          }
        );
        expect(response).toBeTruthy();
        expect(response.active).toBeTruthy();
      });

      test('should fail', async () => {
        await carpInstance
          .getJwtInUse(
            { ...defaultParams, token: 'wrong' },
            {
              headers: {
                'Content-Type': contentType.application_x_www_form_urlencoded,
              },
            }
          )
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'Getting currently logged in user failed'
            );
            expect(error).toHaveProperty('httpResponseCode', 401);
            expect(error).toHaveProperty(
              'httpResponseMessage',
              'Invalid access token'
            );
          });
      });
    });

    describe('invite', () => {
      test('should succeed', async () => {
        await expect(
          carpInstance.invite(TEST_EMAIL, 'RESEARCHER', config)
        ).resolves.toBeUndefined();
      });
    });

    describe('isAccountOfRole', () => {
      test('should succeed', async () => {
        const response = await carpInstance.isAccountOfRole(
          TEST_EMAIL,
          'RESEARCHER',
          config
        );
        expect(response).toBeTruthy();
      });

      test('should fail', async () => {
        await carpInstance
          .isAccountOfRole(`${TEST_EMAIL}random`, 'RESEARCHER', config)
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'Account is not a researcher!'
            );
            expect(error).toHaveProperty('httpResponseCode', 400);
          });
      });
    });
  });

  describe('CARP studies services', () => {
    let participantId: UUID;
    let studyDeploymentId: UUID;
    let lastUpdateDate: Instant;
    let studyId: UUID;
    let protocol: StudyProtocolSnapshot;

    beforeAll(async () => {
      const studyName = `23LiveTestStuddy ${new Date().toLocaleString(
        'en-GB'
      )}`;
      const studyDescription = 'TestStudyDescription';
      const response = await carpInstance.createStudy_CORE(
        currentAccountId,
        studyName,
        studyDescription,
        config
      );
      const responseStudyStatus = response as StudyStatus.Configuring;
      expect(responseStudyStatus).not.toBeUndefined();
      expect(
        responseStudyStatus instanceof StudyStatus.Configuring
      ).toBeTruthy();
      studyId = responseStudyStatus.studyId;

      // Create a protocol from a deserialized state, NO CONSTRUCTOR available
      const serializedProtocolSnapshot = `{
        "id": "237e2a9a-ed93-4614-b06b-46c1ac6cd121",
        "name": "Nonmotorized transport study",
        "tasks": [
          {
            "name": "Monitor movement",
            "__type": "dk.cachet.carp.common.application.tasks.BackgroundTask",
            "duration": "PT168H",
            "measures": [
              {
                "type": "dk.cachet.carp.geolocation",
                "__type": "dk.cachet.carp.common.application.tasks.Measure.DataStream",
                "overrideSamplingConfiguration": {
                  "low": {
                    "__type": "dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration",
                    "granularity": "Coarse"
                  },
                  "__type": "dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfiguration",
                  "normal": {
                    "__type": "dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration",
                    "granularity": "Balanced"
                  }
                }
              },
              {
                "type": "dk.cachet.carp.stepcount",
                "__type": "dk.cachet.carp.common.application.tasks.Measure.DataStream",
                "overrideSamplingConfiguration": {
                  "__type": "dk.cachet.carp.common.application.sampling.NoOptionsSamplingConfiguration"
                }
              }
            ],
            "description": "Track step count and geolocation for one week."
          },
          {
            "name": "Monitor proximity to bike",
            "__type": "dk.cachet.carp.common.application.tasks.BackgroundTask",
            "duration": "PT168H",
            "measures": [
              {
                "type": "dk.cachet.carp.signalstrength",
                "__type": "dk.cachet.carp.common.application.tasks.Measure.DataStream",
                "overrideSamplingConfiguration": {
                  "__type": "dk.cachet.carp.common.application.sampling.NoOptionsSamplingConfiguration"
                }
              }
            ]
          }
        ],
        "ownerId": "4c5b4df0-e8d3-4522-aa2b-e498a28dbfdb",
        "version": 0,
        "triggers": {
          "0": {
            "__type": "dk.cachet.carp.common.application.triggers.ElapsedTimeTrigger",
            "elapsedTime": "PT0S",
            "sourceDeviceRoleName": "Participant's phone"
          }
        },
        "createdOn": "2022-01-18T10:56:59Z",
        "connections": [
          {
            "roleName": "Participant's bike",
            "connectedToRoleName": "Participant's phone"
          }
        ],
        "description": "Track how much nonmotorized movement participants perform.",
        "taskControls": [
          {
            "control": "Start",
            "taskName": "Monitor movement",
            "triggerId": 0,
            "destinationDeviceRoleName": "Participant's phone"
          },
          {
            "control": "Start",
            "taskName": "Monitor proximity to bike",
            "triggerId": 0,
            "destinationDeviceRoleName": "Participant's bike"
          }
        ],
        "primaryDevices": [
          {
            "__type": "dk.cachet.carp.common.application.devices.Smartphone",
            "roleName": "Participant's phone",
            "isPrimaryDevice": true,
            "defaultSamplingConfiguration": {
              "dk.cachet.carp.geolocation": {
                "low": {
                  "__type": "dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration",
                  "granularity": "Coarse"
                },
                "__type": "dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfiguration",
                "normal": {
                  "__type": "dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration",
                  "granularity": "Detailed"
                }
              }
            }
          }
        ],
        "applicationData": {
          "uiTheme": "black"
        },
        "connectedDevices": [
          {
            "__type": "dk.cachet.carp.common.application.devices.AltBeacon",
            "roleName": "Participant's bike",
            "isOptional": true
          }
        ],
        "participantRoles": [
          {
            "role": "Participant",
            "isOptional": false
          }
        ],
        "expectedParticipantData": [
          {
            "attribute": {
              "__type": "dk.cachet.carp.common.application.users.ParticipantAttribute.DefaultParticipantAttribute",
              "inputDataType": "dk.cachet.carp.input.sex"
            }
          }
        ]
      }`;
      const json = DefaultSerializer;
      const serializer = getSerializer(StudyProtocolSnapshot);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      protocol = json.decodeFromString(serializer, serializedProtocolSnapshot);
    });

    test('createStudy_CORE should succeed', () => {
      expect(studyId).not.toBeUndefined();
    });

    test('createStudy_CORE should fail', async () => {
      const studyName = 'testStudy';
      const studyDescription = 'TestStudyDescription';
      await carpInstance
        .createStudy_CORE(
          currentAccountId,
          studyName,
          studyDescription,
          badRequestConfig
        )
        .catch(error => {
          expect(error).toHaveProperty('message', 'Creating new study failed');
          expect(error).toHaveProperty('httpResponseCode', 401);
        });
    });

    test('setInternalDescription_CORE should succeed', async () => {
      const studyName = `testing expected data ${new Date().toLocaleString(
        'en-GB'
      )}`;
      const studyDescription = 'TestStudyDescription';

      const response = await carpInstance.setInternalDescription_CORE(
        studyId.stringRepresentation,
        studyName,
        studyDescription,
        config
      );
      expect(response).not.toBeUndefined();
      expect(response instanceof StudyStatus).toBeTruthy();
    });

    test('setInternalDescription_CORE should fail', async () => {
      const studyName = 'testing expected data';
      const studyDesciption = 'TestStudyDescription';

      await carpInstance
        .setInternalDescription_CORE(
          RANDOM_UUID_NONEXISTENT.stringRepresentation,
          studyName,
          studyDesciption,
          config
        )
        .catch(error => {
          expect(error).toHaveProperty(
            'message',
            'Setting internal description failed'
          );
          expect(error).toHaveProperty('httpResponseCode', 400);
        });
    });

    test('getStudyDetails_CORE should succeed', async () => {
      const response = await carpInstance.getStudyDetails_CORE(
        studyId.stringRepresentation,
        config
      );
      expect(response).not.toBeUndefined();
      expect(response instanceof StudyDetails).toBeTruthy();
    });

    test('getStudyDetails_CORE should fail', async () => {
      await carpInstance
        .getStudyDetails_CORE(
          RANDOM_UUID_NONEXISTENT.stringRepresentation,
          config
        )
        .catch(error => {
          expect(error).toHaveProperty(
            'message',
            'Getting study details failed'
          );
          expect(error).toHaveProperty('httpResponseCode', 400);
        });
    });

    test('getStudyStatus_CORE should succeed', async () => {
      const response = await carpInstance.getStudyStatus_CORE(
        studyId.stringRepresentation,
        config
      );
      expect(response).not.toBeUndefined();
      expect(response instanceof StudyStatus).toBeTruthy();
    });

    test('getStudyStatus_CORE should fail', async () => {
      await carpInstance
        .getStudyStatus_CORE(
          RANDOM_UUID_NONEXISTENT.stringRepresentation,
          config
        )
        .catch(error => {
          expect(error).toHaveProperty(
            'message',
            'Retrieving study status failed'
          );
          expect(error).toHaveProperty('httpResponseCode', 400);
        });
    });

    test('getStudiesOverview_CORE should succeed', async () => {
      const response = await carpInstance.getStudiesOverview_CORE(
        currentAccountId,
        config
      );
      expect(response).not.toBeUndefined();
      expect(response[0] instanceof StudyStatus).toBeTruthy();
    });

    test('getStudiesOverview_CORE should fail', async () => {
      await carpInstance
        .getStudiesOverview_CORE(currentAccountId, badRequestConfig)
        .catch(error => {
          expect(error).toHaveProperty(
            'message',
            'Retrieving studies overview failed'
          );
          expect(error).toHaveProperty('httpResponseCode', 401);
        });
    });

    test('addParticipantByEmailAddress_CORE should succeed', async () => {
      const email = RESEARCHER_EMAIL;
      const responseParticipant =
        await carpInstance.addParticipantByEmailAddress_CORE(
          studyId.stringRepresentation,
          email,
          config
        );
      expect(responseParticipant).not.toBeUndefined();
      expect(responseParticipant instanceof Participant).toBeTruthy();
      participantId = responseParticipant.id;
    });

    test('addParticipantByUsername_CORE should succeed', async () => {
      const username = TEST_USERNAME;
      const responseParticipant =
        await carpInstance.addParticipantByUsername_CORE(
          studyId.stringRepresentation,
          username,
          config
        );
      expect(responseParticipant).not.toBeUndefined();
      expect(responseParticipant instanceof Participant).toBeTruthy();
      participantId = responseParticipant.id;
    });

    test('addParticipantByEmailAddress_CORE should fail', async () => {
      const randomId = RANDOM_UUID_NONEXISTENT.stringRepresentation;
      await carpInstance
        .addParticipantByEmailAddress_CORE(randomId, 'test', config)
        .catch(error => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          expect(error).toHaveProperty(
            'message',
            'Adding new participant failed'
          );
          expect(error).toHaveProperty('httpResponseCode', 400);
        });
    });

    test('addParticipantByUsername_CORE should fail', async () => {
      const randomId = RANDOM_UUID_NONEXISTENT.stringRepresentation;
      await carpInstance
        .addParticipantByUsername_CORE(randomId, 'test', config)
        .catch(error => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          expect(error).toHaveProperty(
            'message',
            'Adding new participant failed'
          );
          expect(error).toHaveProperty('httpResponseCode', 400);
        });
    });

    test('getResearchersForStudy should succeed', async () => {
      const response = await carpInstance.getResearchersForStudy(
        studyId.stringRepresentation,
        config
      );
      expect(response).not.toBeUndefined();
      expect(Array.isArray(response)).toBeTruthy();
      expect(response.length > 0).toBeTruthy();
    });

    test('getResearchersForStudy should fail', async () => {
      await carpInstance
        .getResearchersForStudy(
          RANDOM_UUID_NONEXISTENT.stringRepresentation,
          config
        )
        .catch(error => {
          expect(error).toHaveProperty(
            'message',
            'Get researchers data failed!'
          );
          expect(error).toHaveProperty('httpResponseCode', 400);
        });
    });

    test('addResearcherToStudy should succeed', async () => {
      await expect(
        carpInstance.addResearcherToStudy(
          studyId.stringRepresentation,
          TEST_EMAIL,
          config
        )
      ).resolves.toBeUndefined();
    });

    test('removeResearchersFromStudy should succeed', async () => {
      await expect(
        carpInstance.removeResearchersFromStudy(
          studyId.stringRepresentation,
          TEST_EMAIL,
          config
        )
      ).resolves.toBeUndefined();
    });

    test('removeResearchersFromStudy should fail', async () => {
      await carpInstance
        .removeResearchersFromStudy(
          TEST_EMAIL,
          RANDOM_UUID_NONEXISTENT.stringRepresentation,
          config
        )
        .catch(error => {
          expect(error).toHaveProperty('message', 'Remove researcher failed!');
          expect(error).toHaveProperty('httpResponseCode', 400);
        });
    });

    test('getParticipants_CORE should succeed', async () => {
      const responseParticipantList = await carpInstance.getParticipants_CORE(
        studyId.stringRepresentation,
        config
      );
      expect(responseParticipantList).not.toBeUndefined();
      expect(Array.isArray(responseParticipantList)).toBeTruthy();
      expect(
        responseParticipantList.length > 0 &&
          responseParticipantList[0] instanceof Participant
      ).toBeTruthy();
    });

    test('getParticipants_CORE should fail', async () => {
      const randomId = RANDOM_UUID_NONEXISTENT.stringRepresentation;
      await carpInstance.getParticipants_CORE(randomId, config).catch(error => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(error).toHaveProperty(
          'message',
          'Retrieving participants failed'
        );
        expect(error).toHaveProperty('httpResponseCode', 400);
      });
    });

    test('setInvitation_CORE should succeed', async () => {
      const response = await carpInstance.setInvitation_CORE(
        studyId.stringRepresentation,
        'name',
        'description',
        config
      );
      expect(response).not.toBeUndefined();
      expect(response instanceof StudyStatus).toBeTruthy();
    });

    test('setInvitation_CORE should fail', async () => {
      await carpInstance
        .setInvitation_CORE(
          RANDOM_UUID_NONEXISTENT.stringRepresentation,
          'name',
          'description',
          config
        )
        .catch(error => {
          expect(error).toHaveProperty('message', 'Setting invitation failed');
          expect(error).toHaveProperty('httpResponseCode', 400);
        });
    });

    test('setProtocol_CORE should succeed', async () => {
      const response = await carpInstance.setProtocol_CORE(
        studyId.stringRepresentation,
        protocol,
        config
      );
      expect(response).not.toBeUndefined();
      expect(response instanceof StudyStatus).toBeTruthy();
    });

    test('setProtocol_CORE should fail', async () => {
      await carpInstance
        .setProtocol_CORE(
          RANDOM_UUID_NONEXISTENT.stringRepresentation,
          protocol,
          config
        )
        .catch(error => {
          expect(error).toHaveProperty('message', 'Setting protocol failed');
          expect(error).toHaveProperty('httpResponseCode', 400);
        });
    });

    test('goLive_CORE should succeed', async () => {
      const response = await carpInstance.goLive_CORE(
        studyId.stringRepresentation,
        config
      );
      expect(response).not.toBeUndefined();
      expect(response instanceof StudyStatus).toBeTruthy();
    });

    test('goLive_CORE should fail', async () => {
      await carpInstance
        .goLive_CORE(RANDOM_UUID_NONEXISTENT.stringRepresentation, config)
        .catch(error => {
          expect(error).toHaveProperty('message', 'Going live failed');
          expect(error).toHaveProperty('httpResponseCode', 400);
        });
    });

    test('inviteNewParticipantGroup_CORE should succeed', async () => {
      const responseParticipantGroupStatus =
        await carpInstance.inviteNewParticipantGroup_CORE(
          studyId.stringRepresentation,
          [
            {
              id: participantId.stringRepresentation,
              assignedRoles: ['Participant'],
            },
          ],
          config
        );
      expect(responseParticipantGroupStatus).not.toBeUndefined();
      expect(
        responseParticipantGroupStatus instanceof ParticipantGroupStatus
      ).toBeTruthy();

      // For register device participant Group Id
      const deploymentStatus =
        responseParticipantGroupStatus as ParticipantGroupStatus.Invited;
      studyDeploymentId = new UUID(
        deploymentStatus.studyDeploymentStatus.studyDeploymentId.stringRepresentation
      );
    });

    test('inviteNewParticipantGroup_CORE should fail', async () => {
      await carpInstance
        .inviteNewParticipantGroup_CORE(
          RANDOM_UUID_NONEXISTENT.stringRepresentation,
          [
            {
              id: participantId.stringRepresentation,
              assignedRoles: ['Participant'],
            },
          ],
          config
        )
        .catch(error => {
          expect(error).toHaveProperty(
            'message',
            'Deploying participant group failed'
          );
          expect(error).toHaveProperty('httpResponseCode', 400);
        });
    });

    describe('registerDevice_CORE', () => {
      test('registerDevice_CORE should succeed', async () => {
        const roleName = "Participant's phone";
        const deviceId = "Participant's phone";

        const response = await carpInstance.registerDevice_CORE(
          studyDeploymentId.stringRepresentation,
          roleName,
          deviceId,
          config
        );
        expect(response).not.toBeUndefined();
        expect(response).toHaveProperty('studyDeploymentId');
      });

      test('registerDevice_CORE should fail', async () => {
        const roleName = "Participant's phone";
        const deviceId = "Participant's phone";

        await carpInstance
          .registerDevice_CORE(
            RANDOM_UUID_NONEXISTENT.stringRepresentation,
            roleName,
            deviceId,
            config
          )
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'registering device failed'
            );
            expect(error).toHaveProperty('httpResponseCode', 401);
          });
      });

      describe('updateDeviceRegistration', () => {
        test('GetDeviceDeploymentFor_CORE should succeed', async () => {
          const roleName = "Participant's phone";
          const response = await carpInstance.GetDeviceDeploymentFor_CORE(
            studyDeploymentId.stringRepresentation,
            roleName,
            config
          );
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          lastUpdateDate = (response as any).lastUpdatedOn;
        });

        test('GetDeviceDeploymentFor_CORE should fail', async () => {
          const roleName = "Participant's phone";
          await carpInstance
            .GetDeviceDeploymentFor_CORE(
              RANDOM_UUID_NONEXISTENT.stringRepresentation,
              roleName,
              config
            )
            .catch(error => {
              expect(error).toHaveProperty(
                'message',
                'getting deviceDeployment failed'
              );
              expect(error).toHaveProperty('httpResponseCode', 401);
            });
        });

        test('DeviceDeployed_CORE should succeed', async () => {
          const roleName = "Participant's phone";

          const response = await carpInstance.updateDeviceRegistration(
            studyDeploymentId.stringRepresentation,
            roleName,
            lastUpdateDate,
            config
          );
          expect(response).not.toBeUndefined();
          expect(response).toHaveProperty('studyDeploymentId');

          // const deploymentStatus = response.value as StudyDeploymentStatus.Running;
        });

        test('DeviceDeployed_CORE should fail', async () => {
          const roleName = "Participant's phone";
          await carpInstance
            .updateDeviceRegistration(
              RANDOM_UUID_NONEXISTENT.stringRepresentation,
              roleName,
              lastUpdateDate,
              config
            )
            .catch(error => {
              expect(error).toHaveProperty(
                'message',
                'updating device registration failed'
              );
              expect(error).toHaveProperty('httpResponseCode', 401);
            });
        });
      });
    });

    describe('recruitment service', () => {
      test('getParticipantGroupStatusList_CORE should succeed', async () => {
        const responseParticipantGroupStatusList =
          await carpInstance.getParticipantGroupStatusList_CORE(
            studyId.stringRepresentation,
            config
          );
        expect(responseParticipantGroupStatusList).not.toBeUndefined();
        expect(responseParticipantGroupStatusList).toHaveLength(1);
        expect(responseParticipantGroupStatusList[0]).toBeInstanceOf(
          ParticipantGroupStatus
        );
      });

      test('getParticipantGroupStatusList_CORE should fail', async () => {
        await carpInstance
          .getParticipantGroupStatusList_CORE(
            RANDOM_UUID_NONEXISTENT.stringRepresentation,
            config
          )
          .catch(error => {
            expect(error).toHaveProperty('message', 'Getting status failed');
            expect(error).toHaveProperty('httpResponseCode', 400);
          });
      });

      test('stopParticipantGroup_CORE should succeed', async () => {
        const responseParticipantGroupStatus =
          await carpInstance.stopParticipantGroup_CORE(
            studyId.stringRepresentation,
            studyDeploymentId.stringRepresentation,
            config
          );
        expect(responseParticipantGroupStatus).not.toBeUndefined();
        expect(
          responseParticipantGroupStatus instanceof ParticipantGroupStatus
        ).toBeTruthy();
      });
    });

    test('generateAnonymousAccounts should succeed', async () => {
      const generatedAccountsResponse =
        await carpInstance.generateAnonymousAccounts({
          studyId: studyId.stringRepresentation,
          amountOfAccounts: 1,
          participantRoleName: 'Participant',
          redirectUri: 'http://localhost:3000',
          expirationSeconds: 12000,
          config,
        });

      expect(generatedAccountsResponse).not.toBeUndefined();
      expect(generatedAccountsResponse.file_name).not.toBeUndefined();
      expect(generatedAccountsResponse.type).toBe('ANONYMOUS_PARTICIPANTS');
    });

    describe('participation-service', () => {
      test('getActiveParticipationInvitations_CORE should succeed', async () => {
        // first add yourself to the study
        const email = RESEARCHER_EMAIL;

        const responseParticipant =
          await carpInstance.addParticipantByEmailAddress_CORE(
            studyId.stringRepresentation,
            email,
            config
          );
        expect(responseParticipant instanceof Participant).toBeTruthy();

        participantId = responseParticipant.id;
        // invite yourself to the study
        const responseInvite =
          await carpInstance.inviteNewParticipantGroup_CORE(
            studyId.stringRepresentation,
            [
              {
                id: participantId.stringRepresentation,
                assignedRoles: ['Participant'],
              },
            ],
            config
          );
        expect(responseInvite instanceof ParticipantGroupStatus).toBeTruthy();

        // see if this user is now in the invitaiton list
        // you can only request your own invitations, so pass in your own account id
        const response =
          await carpInstance.getActiveParticipationInvitations_CORE(
            currentAccountId,
            config
          );
        expect(response).not.toBeUndefined();
        expect(response).not.toHaveLength(0);
        expect(
          response[0].participation.studyDeploymentId.stringRepresentation
        ).not.toBeNull();
        expect(response instanceof Array).toBeTruthy();
      });

      test('getActiveParticipationInvitations_CORE should fail', async () => {
        await carpInstance
          .getActiveParticipationInvitations_CORE(
            RANDOM_UUID_NONEXISTENT.stringRepresentation,
            config
          )
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'Retrieving invitations failed'
            );
            expect(error).toHaveProperty('httpResponseCode', 403);
          });
      });

      test('getParticipantData should succeed', async () => {
        // You need to use existing ids from deployments table snapshot column
        const deployment =
          await carpInstance.getActiveParticipationInvitations_CORE(
            currentAccountId,
            config
          );
        const response = await carpInstance.getParticipantData_CORE(
          deployment[0].participation.studyDeploymentId.stringRepresentation,
          config
        );
        expect(response).not.toBeUndefined();
        expect(response.studyDeploymentId).not.toBeUndefined();
      });

      test('getParticipantData should fail', async () => {
        // You need to use existing ids from deployments table snapshot column
        await carpInstance
          .getParticipantData_CORE(
            RANDOM_UUID_NONEXISTENT.stringRepresentation,
            config
          )
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'getting participant data failed'
            );
            expect(error).toHaveProperty('httpResponseCode', 401);
          });
      });

      test('getParticipantDataList should succeed', async () => {
        const deployment =
          await carpInstance.getActiveParticipationInvitations_CORE(
            currentAccountId,
            config
          );
        const response = await carpInstance.getParticipantDataList_CORE(
          deployment.map(
            d => d.participation.studyDeploymentId.stringRepresentation
          ),
          config
        );
        expect(response).not.toBeUndefined();
        expect(response).toBeInstanceOf(Array);
        expect(response.length).toBeGreaterThan(0);
        expect(response[0]).toHaveProperty('studyDeploymentId');
      });

      test('getParticipantDataList should fail', async () => {
        await carpInstance
          .getParticipantDataList_CORE(
            [RANDOM_UUID_NONEXISTENT.stringRepresentation],
            config
          )
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'getting participant datalist failed'
            );
            expect(error).toHaveProperty('httpResponseCode', 401);
          });
      });

      test('setParticipantData should succeed', async () => {
        const participantData = toMap([
          new Pair(
            CarpInputDataTypes.SEX,
            CarpInputDataTypes.inputToDataConverters.get(
              CarpInputDataTypes.SEX
            )(Sex.Male.name) as Nullable<Data>
          ),
        ]);
        const response = await carpInstance.setParticipantData_CORE(
          studyDeploymentId.stringRepresentation,
          participantData as any,
          // converter, ParticipationServiceRequest.SetParticipantData
          // uses Data from different namespace,
          // so we have to cast it to any if we don't want an error
          null,
          config
        );
        expect(response.studyDeploymentId).not.toBeUndefined();
      });

      // test('setParticipantData should fail', async () => {
      //   const inputDataType = new NamespacedId(
      //     'dk.cachet.carp.input.sex',
      //     'sex'
      //   );
      //   const participantData = toMap([new Pair(inputDataType, null)]);
      //   await carpInstance
      //     .setParticipantData_CORE(
      //       studyDeploymentId.stringRepresentation,
      //       participantData,
      //       null,
      //       config
      //     )
      //     .catch(error => {
      //       expect(error).toHaveProperty(
      //         'message',
      //         'setting participant data failed'
      //       );
      //       expect(error).toHaveProperty('httpResponseCode', 400);
      //     });
      // });
    });

    describe('consent document service', () => {
      let consentId: number;

      test('addInformedConsent should succeed', async () => {
        const newConsentFile: ConsentFile = {
          text: 'i Consent to this stuff',
          signature: 'Nick Rat',
        };
        const response = await carpInstance.addInformedConsent(
          studyDeploymentId.stringRepresentation,
          newConsentFile,
          config
        );
        expect(response).toHaveProperty('id');
        consentId = response.id;
        expect(response).toHaveProperty('deployment_id');
        expect(response).toHaveProperty('data');
        expect(response).toHaveProperty('created_by');
        expect(response).toHaveProperty('created_at');
        expect(response).toHaveProperty('updated_by');
        expect(response).toHaveProperty('updated_at');
      });

      test('addInformedConsent should fail', async () => {
        const newConsentFile: ConsentFile = {
          text: 'i Consent to this stuff',
          signature: 'Nick Rat',
        };

        await carpInstance
          .addInformedConsent(
            RANDOM_UUID_NONEXISTENT.stringRepresentation,
            newConsentFile,
            config
          )
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'posting consent file failed'
            );
            expect(error).toHaveProperty('httpResponseCode', 401);
          });
      });

      test('getInformedConsent should succeed', async () => {
        const response = await carpInstance.getInformedConsent(
          studyDeploymentId.stringRepresentation,
          consentId,
          config
        );
        expect(response).toHaveProperty('id');
        consentId = response.id;
        expect(response).toHaveProperty('deployment_id');
        expect(response).toHaveProperty('data');
        expect(response).toHaveProperty('created_by');
        expect(response).toHaveProperty('created_at');
        expect(response).toHaveProperty('updated_by');
        expect(response).toHaveProperty('updated_at');
      });

      // TODO: why is this getting a consent documentw hen the study ID doesn't exist?
      test('getInformedConsent should fail', async () => {
        await carpInstance
          .getInformedConsent(
            RANDOM_UUID_NONEXISTENT.stringRepresentation,
            1,
            config
          )
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'getting consent file failed'
            );
            expect(error).toHaveProperty('httpResponseCode', 403);
          });
      });

      test('getAllInformedConsent should succeed', async () => {
        const response = await carpInstance.getAllInformedConsent(
          studyDeploymentId.stringRepresentation,
          config
        );
        expect(response).not.toBeUndefined();
        expect(response).toBeInstanceOf(Array);
        expect(response.length).toBeGreaterThan(0);
        expect(response[0]).toHaveProperty('id');
      });

      test('getAllInformedConsent should fail', async () => {
        await carpInstance
          .getAllInformedConsent(
            RANDOM_UUID_NONEXISTENT.stringRepresentation,
            config
          )
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'getting consent files failed'
            );
            expect(error).toHaveProperty('httpResponseCode', 403);
          });
      });

      test('deleteInformedConsent should succeed', async () => {
        await expect(
          carpInstance.deleteInformedConsent(
            studyDeploymentId.stringRepresentation,
            consentId,
            config
          )
        ).resolves.not.toBeUndefined();
      });

      test('deleteInformedConsent should fail', async () => {
        await carpInstance
          .deleteInformedConsent(
            RANDOM_UUID_NONEXISTENT.stringRepresentation,
            23874273,
            config
          )
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'deleting consent file failed'
            );
            expect(error).toHaveProperty('httpResponseCode', 403);
          });
      });
    });

    describe('data points service', () => {
      let dataPointId: number;

      test('addDataPoint should succeed', async () => {
        const newDataPoint: DataPoint = {
          carp_header: {
            study_id: '8',
            user_id: 'user@dtu.dk',
            device_role_name: "Patient's phone",
            trigger_id: 'task1',
            data_format: {
              namepace: 'carp',
              name: 'location',
            },
            start_time: '2018-11-08T15:30:40.721748Z',
          },
          carp_body: {
            classname: 'LocationDatum',
            id: '3fdd1760-bd30-11e8-e209-ef7ee8358d2f',
            timestamp: '2018-11-08T15:30:40.721748Z',
            device_info: {},
            latitude: 23454.345,
            longitude: 23.4,
            altitude: 43.3,
            accuracy: 12.4,
            speed: 2.3,
            speed_accuracy: 12.3,
          },
        };
        const response = await carpInstance.addDataPoint(
          studyDeploymentId.stringRepresentation,
          newDataPoint,
          config
        );
        dataPointId = response.id;
        expect(response).toHaveProperty('carp_header');
        expect(response).toHaveProperty('carp_body');
      });

      test('addDataPoint should fail', async () => {
        const newDataPoint: DataPoint = {
          carp_header: {
            study_id: '8',
            user_id: 'user@dtu.dk',
            device_role_name: "Patient's phone",
            trigger_id: 'task1',
            data_format: {
              namepace: 'carp',
              name: 'location',
            },
            start_time: '2018-11-08T15:30:40.721748Z',
          },
          carp_body: {
            classname: 'LocationDatum',
            id: '3fdd1760-bd30-11e8-e209-ef7ee8358d2f',
            timestamp: '2018-11-08T15:30:40.721748Z',
            device_info: {},
            latitude: 23454.345,
            longitude: 23.4,
            altitude: 43.3,
            accuracy: 12.4,
            speed: 2.3,
            speed_accuracy: 12.3,
          },
        };
        await carpInstance
          .addDataPoint(
            RANDOM_UUID_NONEXISTENT.stringRepresentation,
            newDataPoint,
            config
          )
          .catch(error => {
            expect(error).toHaveProperty('message', 'posting datapoint failed');
            expect(error).toHaveProperty('httpResponseCode', 401);
          });
      });

      test('getDataPoint should succeed', async () => {
        const response = await carpInstance.getDataPoint(
          studyDeploymentId.stringRepresentation,
          dataPointId,
          config
        );
        expect(response).not.toBeUndefined();
        expect(response).toHaveProperty('id');
        expect(response).toHaveProperty('carp_header');
        expect(response).toHaveProperty('carp_body');
      });

      // TODO: why does this get a datapoint even though it doesnt belong to the study ID?
      test('getDataPoint should fail', async () => {
        await carpInstance
          .getDataPoint(
            RANDOM_UUID_NONEXISTENT.stringRepresentation,
            dataPointId,
            config
          )
          .catch(error => {
            expect(error).toHaveProperty('message', 'getting datapoint failed');
            expect(error).toHaveProperty('httpResponseCode', 400);
          });
      });

      test('getAllDataPoints should succeed', async () => {
        const response = await carpInstance.getAllDataPoints(
          studyDeploymentId.stringRepresentation,
          config
        );
        expect(response).not.toBeUndefined();
        expect(response).toBeInstanceOf(Array);
        expect(response.length).toBeGreaterThan(0);
        expect(response[0]).toHaveProperty('id');
      });

      test('getAllDataPoints should fail', async () => {
        await carpInstance
          .getAllDataPoints(
            RANDOM_UUID_NONEXISTENT.stringRepresentation,
            config
          )
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'getting datapoints failed'
            );
            expect(error).toHaveProperty('httpResponseCode', 401);
          });
      });

      test('deleteDataPoint should succeed', async () => {
        await expect(
          carpInstance.deleteDataPoint(
            studyDeploymentId.stringRepresentation,
            dataPointId,
            config
          )
        ).resolves.toBeUndefined();
      });

      test('deleteDataPoint should fail', async () => {
        await carpInstance
          .deleteDataPoint(
            RANDOM_UUID_NONEXISTENT.stringRepresentation,
            1,
            config
          )
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'deleting datapoint failed'
            );
            expect(error).toHaveProperty('httpResponseCode', 403);
          });
      });
    });

    describe('DocumentService', () => {
      const announcementJson: MessageData = {
        id: '2282f700-539a-11ec-97cf-c5caea39cdc9',
        url: 'https://test.com',
        type: 'announcement',
        title: 'The importance of healthy eating',
        message: 'This is a test announcement',
        subTitle: 'This is a test subtitle',
        timestamp: '2021-12-02T19:03:21.072205',
      };

      let announcementDocument: CarpDocument;

      test('getCollectionByName should fail', async () => {
        await carpInstance
          .getCollectionByName('messages', studyId.stringRepresentation, config)
          .catch(error => {
            expect(error).toHaveProperty(
              'message',
              'Getting collection failed'
            );
            expect(error).toHaveProperty('httpResponseCode', 404);
          });
      });

      test('createDocumentInCollection should pass', async () => {
        const response = await carpInstance.createDocumentInCollection(
          'messages',
          studyId.stringRepresentation,
          announcementJson,
          config,
          'testannouncement'
        );
        expect(response).toHaveProperty('id');
        expect(response).toHaveProperty('name');
        expect(response).toHaveProperty('collection_id');
        expect(response).toHaveProperty('data');
        announcementDocument = response;
      });

      test('getCollectionByName should pass', async () => {
        const response = await carpInstance.getCollectionByName(
          'messages',
          studyId.stringRepresentation,
          config
        );
        expect(response).toHaveProperty('id');
        expect(response).toHaveProperty('name');
        expect(response).toHaveProperty('study_id');
        expect(response).toHaveProperty('documents');
        expect(response.documents).toHaveLength(1);
      });

      test('getDocumentById should pass', async () => {
        const response = await carpInstance.getDocumentById(
          studyId.stringRepresentation,
          announcementDocument.id.toString(),
          config
        );
        expect(response).toHaveProperty('id');
        expect(response).toHaveProperty('name');
        expect(response).toHaveProperty('collection_id');
        expect(response).toHaveProperty('data');
        expect(response.data).toHaveProperty('id', announcementJson.id);
        expect(response.data).toHaveProperty('url', announcementJson.url);
        expect(response.data).toHaveProperty('type', announcementJson.type);
        expect(response.data).toHaveProperty('title', announcementJson.title);
        expect(response.data).toHaveProperty(
          'message',
          announcementJson.message
        );
        expect(response.data).toHaveProperty(
          'subTitle',
          announcementJson.subTitle
        );
      });

      test('getCollectionDocumentByFilename should pass', async () => {
        const response = await carpInstance.getCollectionDocumentByFilename(
          'messages',
          'testannouncement',
          studyId.stringRepresentation,
          config
        );
        expect(response).toHaveProperty('id');
        expect(response).toHaveProperty('name');
        expect(response).toHaveProperty('collection_id');
        expect(response).toHaveProperty('data');
        expect(response.data).toHaveProperty('id', announcementJson.id);
        expect(response.data).toHaveProperty('url', announcementJson.url);
        expect(response.data).toHaveProperty('type', announcementJson.type);
        expect(response.data).toHaveProperty('title', announcementJson.title);
        expect(response.data).toHaveProperty(
          'message',
          announcementJson.message
        );
        expect(response.data).toHaveProperty(
          'subTitle',
          announcementJson.subTitle
        );
      });

      test('updateDocumentById should pass', async () => {
        const updatedDocument = {
          ...announcementJson,
          message: 'This is an updated test announcement',
        };
        const response = await carpInstance.updateDocumentById(
          studyId.stringRepresentation,
          announcementDocument.id.toString(),
          updatedDocument,
          config
        );
        expect(response).toHaveProperty('id');
        expect(response).toHaveProperty('name');
        expect(response).toHaveProperty('collection_id');
        expect(response).toHaveProperty('data');
        expect(response.data).toHaveProperty('id', announcementJson.id);
        expect(response.data).toHaveProperty('url', announcementJson.url);
        expect(response.data).toHaveProperty('type', announcementJson.type);
        expect(response.data).toHaveProperty('title', announcementJson.title);
        expect(response.data).toHaveProperty(
          'subTitle',
          announcementJson.subTitle
        );
      });

      test('upload image should pass', async () => {
        const filename = 'testImage.png';
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        const formData = new FormData();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        formData.append(
          'image',
          fs.createReadStream(path.join(__dirname, filename))
        );
        const response = await carpInstance.uploadImageToStudy(
          studyId.stringRepresentation,
          formData,
          config
        );
        expect(response).toContain('https://');
      });

      test('deleteDocumentById should pass', async () => {
        await expect(
          carpInstance.deleteDocumentById(
            studyId.stringRepresentation,
            announcementDocument.id.toString(),
            config
          )
        ).resolves.toBeUndefined();
      });
    });
  });

  describe('test ProtocolService endpoints', () => {
    let protocolSnapshot: StudyProtocolSnapshot;
    let protocolObject: ProtocolJSONObject;
    beforeAll(() => {
      protocolObject = {
        id: RANDOM_UUID_NONEXISTENT.stringRepresentation,
        createdOn: new Date('2022-01-18T10:56:59Z'),
        ownerId: currentAccountId,
        name: 'Nonmotorized transport study',
        description:
          'Track how much nonmotorized movement participants perform.',
        version: 1,
        primaryDevices: [
          {
            __type: 'dk.cachet.carp.common.application.devices.Smartphone',
            isPrimaryDevice: true,
            roleName: "Participant's phone",
            defaultSamplingConfiguration: {
              'dk.cachet.carp.geolocation': {
                __type:
                  'dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfiguration',
                normal: {
                  __type:
                    'dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration',
                  granularity: 'Detailed',
                },
                low: {
                  __type:
                    'dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration',
                  granularity: 'Coarse',
                },
              },
            },
          },
        ],
        connectedDevices: [
          {
            __type: 'dk.cachet.carp.common.application.devices.AltBeacon',
            roleName: "Participant's bike",
            isOptional: true,
          },
        ],
        connections: [
          {
            roleName: "Participant's bike",
            connectedToRoleName: "Participant's phone",
          },
        ],
        tasks: [
          {
            __type: 'dk.cachet.carp.common.application.tasks.BackgroundTask',
            name: 'Monitor movement',
            measures: [
              {
                __type:
                  'dk.cachet.carp.common.application.tasks.Measure.DataStream',
                type: 'dk.cachet.carp.geolocation',
                overrideSamplingConfiguration: {
                  __type:
                    'dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfiguration',
                  normal: {
                    __type:
                      'dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration',
                    granularity: 'Balanced',
                  },
                  low: {
                    __type:
                      'dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration',
                    granularity: 'Coarse',
                  },
                },
              },
              {
                __type:
                  'dk.cachet.carp.common.application.tasks.Measure.DataStream',
                type: 'dk.cachet.carp.stepcount',
                overrideSamplingConfiguration: {
                  __type:
                    'dk.cachet.carp.common.application.sampling.NoOptionsSamplingConfiguration',
                },
              },
            ],
            description: 'Track step count and geolocation for one week.',
            duration: 'PT168H',
          },
          {
            __type: 'dk.cachet.carp.common.application.tasks.BackgroundTask',
            name: 'Monitor proximity to bike',
            measures: [
              {
                __type:
                  'dk.cachet.carp.common.application.tasks.Measure.DataStream',
                type: 'dk.cachet.carp.signalstrength',
                overrideSamplingConfiguration: {
                  __type:
                    'dk.cachet.carp.common.application.sampling.NoOptionsSamplingConfiguration',
                },
              },
            ],
            duration: 'PT168H',
          },
        ],
        triggers: {
          0: {
            __type:
              'dk.cachet.carp.common.application.triggers.ElapsedTimeTrigger',
            sourceDeviceRoleName: "Participant's phone",
            elapsedTime: 'PT0S',
          },
        },
        taskControls: [
          {
            triggerId: 0,
            taskName: 'Monitor movement',
            destinationDeviceRoleName: "Participant's phone",
            control: 'Start',
          },
          {
            triggerId: 0,
            taskName: 'Monitor proximity to bike',
            destinationDeviceRoleName: "Participant's bike",
            control: 'Start',
          },
        ],
        participantRoles: [
          {
            role: 'Participant',
            isOptional: false,
          },
        ],
        applicationData: {
          uiTheme: 'black',
        },
        expectedParticipantData: [
          {
            attribute: {
              __type:
                'dk.cachet.carp.common.application.users.ParticipantAttribute.DefaultParticipantAttribute',
              inputDataType: 'dk.cachet.carp.input.sex',
            },
          },
        ],
      };

      const protocolString = JSON.stringify(protocolObject);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const serializer = getSerializer(StudyProtocolSnapshot);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      protocolSnapshot = DefaultSerializer.decodeFromString(
        serializer,
        protocolString
      );
    });

    test('addProtocol_CORE should succeed', async () => {
      const version = '1.0';
      await expect(
        carpInstance.addProtocol_CORE(protocolObject, version, config)
      ).resolves.toBeUndefined();
    });

    test('addNewProtocolVersion_CORE should succeed', async () => {
      const version = '2.0';
      await expect(
        carpInstance.updateProtocol_CORE(protocolObject, version, config)
      ).resolves.toBeUndefined();
    });

    test('getProtocol_CORE should succeed', async () => {
      const version = '2.0';
      const response = await carpInstance.getProtocolBy_CORE(
        protocolObject.id,
        config,
        version
      );
      expect(response).not.toBeUndefined();
      expect(response instanceof StudyProtocolSnapshot).toBeTruthy();
      expect(response).toHaveProperty('name', protocolSnapshot.name);
      expect(response).toHaveProperty('ownerId', protocolSnapshot.ownerId);
      expect(response).toHaveProperty(
        'description',
        protocolSnapshot.description
      );
      expect(response).toHaveProperty(
        'expectedParticipantData',
        protocolSnapshot.expectedParticipantData
      );
    });

    test('getAllProtocolsByOwner_CORE should succeed', async () => {
      const response = await carpInstance.getAllProtocolsForOwner_CORE(
        currentAccountId,
        config
      );
      expect(response).not.toBeUndefined();
      expect(response.length).toBeGreaterThan(0);
      expect(response).not.toBeUndefined();
      expect(response[0]).toBeInstanceOf(StudyProtocolSnapshot);
    });

    test('getVersionHistoryForProtocol_CORE should succeed', async () => {
      const response = await carpInstance.getVersionHistoryForProtocol_CORE(
        protocolObject.id,
        config
      );
      expect(response).not.toBeUndefined();
      expect(response).toHaveLength(2);
      expect(response[0]).toBeInstanceOf(ProtocolVersion);
    });
  });
  // test('deleteStudy should pass', async () => {
  //   await expect(carpInstance.deleteStudy_CORE(studyId.stringRepresentation, config)).resolves.toBeUndefined();
  // });
  // test('deleteStudy should pass', async () => {
  //   await carpInstance.deleteStudy_CORE(RANDOM_UUID_NONEXISTENT.stringRepresentation, config).catch(error => {
  //     expect(error).toHaveProperty('message', 'Delete study failed!');
  //     expect(error).toHaveProperty('httpResponseCode', 400);
  //   });
  // });
});