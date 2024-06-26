import {
  DefaultSerializer,
  StudyProtocolSnapshot,
  getSerializer,
} from "@/shared";

const serializedProtocol = `{
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

const protocol = () => {
  const json = DefaultSerializer;
  const serializer = getSerializer(StudyProtocolSnapshot);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return json.decodeFromString(
    serializer,
    serializedProtocol,
  ) as StudyProtocolSnapshot;
};

const STUDY_PROTOCOL = protocol();

export default STUDY_PROTOCOL;
