(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@cachet/carp-common-generated', '@cachet/kotlin-kotlin-stdlib', '@cachet/kotlinx-serialization-kotlinx-serialization-core', '@cachet/Kotlin-DateTime-library-kotlinx-datetime', '@cachet/carp-deployments-core-generated', '@cachet/carp-protocols-core-generated'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@cachet/carp-common-generated'), require('@cachet/kotlin-kotlin-stdlib'), require('@cachet/kotlinx-serialization-kotlinx-serialization-core'), require('@cachet/Kotlin-DateTime-library-kotlinx-datetime'), require('@cachet/carp-deployments-core-generated'), require('@cachet/carp-protocols-core-generated'));
  else {
    if (typeof this['carp-common-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-studies-core-generated'. Its dependency 'carp-common-generated' was not found. Please, check whether 'carp-common-generated' is loaded prior to 'carp-studies-core-generated'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'carp-studies-core-generated'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'carp-studies-core-generated'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'carp-studies-core-generated'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'carp-studies-core-generated'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'carp-studies-core-generated'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'carp-studies-core-generated'.");
    }
    if (typeof this['carp-deployments-core-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-studies-core-generated'. Its dependency 'carp-deployments-core-generated' was not found. Please, check whether 'carp-deployments-core-generated' is loaded prior to 'carp-studies-core-generated'.");
    }
    if (typeof this['carp-protocols-core-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-studies-core-generated'. Its dependency 'carp-protocols-core-generated' was not found. Please, check whether 'carp-protocols-core-generated' is loaded prior to 'carp-studies-core-generated'.");
    }
    root['carp-studies-core-generated'] = factory(typeof this['carp-studies-core-generated'] === 'undefined' ? {} : this['carp-studies-core-generated'], this['carp-common-generated'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['Kotlin-DateTime-library-kotlinx-datetime'], this['carp-deployments-core-generated'], this['carp-protocols-core-generated']);
  }
}(this, function (_, kotlin_dk_cachet_carp_common_carp_common, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_dk_cachet_carp_deployments_carp_deployments_core, kotlin_dk_cachet_carp_protocols_carp_protocols_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ApiVersion = kotlin_dk_cachet_carp_common_carp_common.$_$.d;
  var protoOf = kotlin_kotlin.$_$.m8;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var UUIDSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.k1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var InstantIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var $serializer_getInstance = kotlin_dk_cachet_carp_deployments_carp_deployments_core.$_$.e;
  var $serializer_getInstance_0 = kotlin_dk_cachet_carp_protocols_carp_protocols_core.$_$.a;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.bb;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var VOID = kotlin_kotlin.$_$.f;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var objectCreate = kotlin_kotlin.$_$.k8;
  var getStringHashCode = kotlin_kotlin.$_$.q7;
  var equals = kotlin_kotlin.$_$.l7;
  var classMeta = kotlin_kotlin.$_$.i7;
  var defineProp = kotlin_kotlin.$_$.k7;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var getKClass = kotlin_kotlin.$_$.e;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var getBooleanHashCode = kotlin_kotlin.$_$.n7;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.ub;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var Companion_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.c1;
  var hashCode = kotlin_kotlin.$_$.r7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var toSet = kotlin_kotlin.$_$.u6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wb;
  var Roles = kotlin_dk_cachet_carp_common_carp_common.$_$.i;
  var emptySet = kotlin_kotlin.$_$.o5;
  var All = kotlin_dk_cachet_carp_common_carp_common.$_$.h;
  var addAll = kotlin_kotlin.$_$.s4;
  var Companion_getInstance_0 = kotlin_dk_cachet_carp_common_carp_common.$_$.a1;
  var Companion_instance = kotlin_dk_cachet_carp_common_carp_common.$_$.j1;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var DeployingDevices = kotlin_dk_cachet_carp_deployments_carp_deployments_core.$_$.a;
  var Invited = kotlin_dk_cachet_carp_deployments_carp_deployments_core.$_$.b;
  var Stopped = kotlin_dk_cachet_carp_deployments_carp_deployments_core.$_$.d;
  var toString = kotlin_kotlin.$_$.r8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Running = kotlin_dk_cachet_carp_deployments_carp_deployments_core.$_$.c;
  var Companion_getInstance_1 = kotlin_dk_cachet_carp_deployments_carp_deployments_core.$_$.f;
  var ApiVersionSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.y;
  var EmailAddressSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.g1;
  var UsernameSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.f1;
  var ignoreTypeParameters = kotlin_dk_cachet_carp_common_carp_common.$_$.r;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var arrayOf = kotlin_kotlin.$_$.nb;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var isInterface = kotlin_kotlin.$_$.b8;
  var List = kotlin_kotlin.$_$.l4;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var ApplicationServiceRequest = kotlin_dk_cachet_carp_common_carp_common.$_$.s;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u3;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(StudyDetails, 'StudyDetails', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(StudyStatus, 'StudyStatus', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_7});
  setMetadataFor(Configuring, 'Configuring', classMeta, StudyStatus, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  setMetadataFor(Live, 'Live', classMeta, StudyStatus, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  setMetadataFor(Companion_4, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(AssignedParticipantRoles, 'AssignedParticipantRoles', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor($serializer_3, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Participant, 'Participant', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor($serializer_4, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_8, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor($serializer_5, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor($serializer_6, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor($serializer_7, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ParticipantGroupStatus, 'ParticipantGroupStatus', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_15});
  setMetadataFor(Staged, 'Staged', classMeta, ParticipantGroupStatus, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  setMetadataFor(InDeployment, 'InDeployment', classMeta, ParticipantGroupStatus, VOID, VOID, VOID, {0: Companion_getInstance_11});
  setMetadataFor(Invited_0, 'Invited', classMeta, InDeployment, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  setMetadataFor(Running_0, 'Running', classMeta, InDeployment, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  setMetadataFor(Stopped_0, 'Stopped', classMeta, InDeployment, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  setMetadataFor(Companion_12, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor($serializer_8, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(RecruitmentService$addParticipant$ref, 'RecruitmentService$addParticipant$ref', classMeta, VOID, VOID, VOID, VOID, VOID, [3]);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor($serializer_9, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(RecruitmentService$addParticipant$ref_1, 'RecruitmentService$addParticipant$ref', classMeta, VOID, VOID, VOID, VOID, VOID, [3]);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor($serializer_10, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor($serializer_11, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor($serializer_12, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor($serializer_13, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor($serializer_14, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Serializer, 'Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(RecruitmentServiceRequest, 'RecruitmentServiceRequest', classMeta, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_23});
  setMetadataFor(AddParticipantByEmailAddress, 'AddParticipantByEmailAddress', classMeta, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  setMetadataFor(AddParticipantByUsername, 'AddParticipantByUsername', classMeta, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  setMetadataFor(GetParticipant, 'GetParticipant', classMeta, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_12});
  setMetadataFor(GetParticipants, 'GetParticipants', classMeta, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_13});
  setMetadataFor(InviteNewParticipantGroup, 'InviteNewParticipantGroup', classMeta, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_14});
  setMetadataFor(GetParticipantGroupStatusList, 'GetParticipantGroupStatusList', classMeta, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_15});
  setMetadataFor(StopParticipantGroup, 'StopParticipantGroup', classMeta, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_16});
  setMetadataFor(Companion_20, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor($serializer_15, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor($serializer_16, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor($serializer_17, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor($serializer_18, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor($serializer_19, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor($serializer_20, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor($serializer_21, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor($serializer_22, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor($serializer_23, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor($serializer_24, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Serializer_0, 'Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(StudyServiceRequest, 'StudyServiceRequest', classMeta, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_34});
  setMetadataFor(CreateStudy, 'CreateStudy', classMeta, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_17});
  setMetadataFor(SetInternalDescription, 'SetInternalDescription', classMeta, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_18});
  setMetadataFor(GetStudyDetails, 'GetStudyDetails', classMeta, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_19});
  setMetadataFor(GetStudyStatus, 'GetStudyStatus', classMeta, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_20});
  setMetadataFor(GetStudiesOverview, 'GetStudiesOverview', classMeta, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_21});
  setMetadataFor(SetInvitation, 'SetInvitation', classMeta, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_22});
  setMetadataFor(SetProtocol, 'SetProtocol', classMeta, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_23});
  setMetadataFor(RemoveProtocol, 'RemoveProtocol', classMeta, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_24});
  setMetadataFor(GoLive, 'GoLive', classMeta, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_25});
  setMetadataFor(Remove, 'Remove', classMeta, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_26});
  setMetadataFor(Companion_31, 'Companion', objectMeta, VOID, [SerializerFactory]);
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.l2j_1 = new ApiVersion(1, 2);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).m16 = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_1;
  function Companion_getInstance_3() {
    return Companion_instance_1;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.StudyDetails', this, 7);
    tmp0_serialDesc.nt('studyId', false);
    tmp0_serialDesc.nt('ownerId', false);
    tmp0_serialDesc.nt('name', false);
    tmp0_serialDesc.nt('createdOn', false);
    tmp0_serialDesc.nt('description', false);
    tmp0_serialDesc.nt('invitation', false);
    tmp0_serialDesc.nt('protocolSnapshot', false);
    this.m2j_1 = tmp0_serialDesc;
  }
  protoOf($serializer).pi = function () {
    return this.m2j_1;
  };
  protoOf($serializer).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), InstantIso8601Serializer_getInstance(), get_nullable(StringSerializer_getInstance()), $serializer_getInstance(), get_nullable($serializer_getInstance_0())];
  };
  protoOf($serializer).ri = function (decoder) {
    var tmp0_desc = this.m2j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.xl(tmp0_desc);
    if (tmp11_input.om()) {
      tmp4_local0 = tmp11_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.hm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.jm(tmp0_desc, 3, InstantIso8601Serializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.lm(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.jm(tmp0_desc, 5, $serializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.lm(tmp0_desc, 6, $serializer_getInstance_0(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.hm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.jm(tmp0_desc, 3, InstantIso8601Serializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.lm(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.jm(tmp0_desc, 5, $serializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.lm(tmp0_desc, 6, $serializer_getInstance_0(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.yl(tmp0_desc);
    return StudyDetails_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer).n2j = function (encoder, value) {
    var tmp0_desc = this.m2j_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.ownerId);
    tmp1_output.nn(tmp0_desc, 2, value.name);
    tmp1_output.pn(tmp0_desc, 3, InstantIso8601Serializer_getInstance(), value.createdOn);
    tmp1_output.rn(tmp0_desc, 4, StringSerializer_getInstance(), value.description);
    tmp1_output.pn(tmp0_desc, 5, $serializer_getInstance(), value.invitation);
    tmp1_output.rn(tmp0_desc, 6, $serializer_getInstance_0(), value.protocolSnapshot);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer).qi = function (encoder, value) {
    return this.n2j(encoder, value instanceof StudyDetails ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance_1() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function StudyDetails_init_$Init$(seen1, studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot, serializationConstructorMarker, $this) {
    if (!(127 === (127 & seen1))) {
      throwMissingFieldException(seen1, 127, $serializer_getInstance_1().m2j_1);
    }
    $this.studyId = studyId;
    $this.ownerId = ownerId;
    $this.name = name;
    $this.createdOn = createdOn;
    $this.description = description;
    $this.invitation = invitation;
    $this.protocolSnapshot = protocolSnapshot;
    return $this;
  }
  function StudyDetails_init_$Create$(seen1, studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot, serializationConstructorMarker) {
    return StudyDetails_init_$Init$(seen1, studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot, serializationConstructorMarker, objectCreate(protoOf(StudyDetails)));
  }
  function StudyDetails(studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot) {
    this.studyId = studyId;
    this.ownerId = ownerId;
    this.name = name;
    this.createdOn = createdOn;
    this.description = description;
    this.invitation = invitation;
    this.protocolSnapshot = protocolSnapshot;
  }
  protoOf(StudyDetails).o2j = function () {
    return this.studyId;
  };
  protoOf(StudyDetails).q24 = function () {
    return this.ownerId;
  };
  protoOf(StudyDetails).ra = function () {
    return this.name;
  };
  protoOf(StudyDetails).a1z = function () {
    return this.createdOn;
  };
  protoOf(StudyDetails).o1u = function () {
    return this.description;
  };
  protoOf(StudyDetails).o2f = function () {
    return this.invitation;
  };
  protoOf(StudyDetails).p2j = function () {
    return this.protocolSnapshot;
  };
  protoOf(StudyDetails).od = function () {
    return this.studyId;
  };
  protoOf(StudyDetails).pd = function () {
    return this.ownerId;
  };
  protoOf(StudyDetails).r1g = function () {
    return this.name;
  };
  protoOf(StudyDetails).q1h = function () {
    return this.createdOn;
  };
  protoOf(StudyDetails).r1m = function () {
    return this.description;
  };
  protoOf(StudyDetails).l1p = function () {
    return this.invitation;
  };
  protoOf(StudyDetails).x24 = function () {
    return this.protocolSnapshot;
  };
  protoOf(StudyDetails).q2j = function (studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot) {
    return new StudyDetails(studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot);
  };
  protoOf(StudyDetails).copy = function (studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    ownerId = ownerId === VOID ? this.ownerId : ownerId;
    name = name === VOID ? this.name : name;
    createdOn = createdOn === VOID ? this.createdOn : createdOn;
    description = description === VOID ? this.description : description;
    invitation = invitation === VOID ? this.invitation : invitation;
    protocolSnapshot = protocolSnapshot === VOID ? this.protocolSnapshot : protocolSnapshot;
    return this.q2j(studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot);
  };
  protoOf(StudyDetails).toString = function () {
    return 'StudyDetails(studyId=' + this.studyId + ', ownerId=' + this.ownerId + ', name=' + this.name + ', createdOn=' + this.createdOn + ', description=' + this.description + ', invitation=' + this.invitation + ', protocolSnapshot=' + this.protocolSnapshot + ')';
  };
  protoOf(StudyDetails).hashCode = function () {
    var result = this.studyId.hashCode();
    result = imul(result, 31) + this.ownerId.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.name) | 0;
    result = imul(result, 31) + this.createdOn.hashCode() | 0;
    result = imul(result, 31) + (this.description == null ? 0 : getStringHashCode(this.description)) | 0;
    result = imul(result, 31) + this.invitation.hashCode() | 0;
    result = imul(result, 31) + (this.protocolSnapshot == null ? 0 : this.protocolSnapshot.hashCode()) | 0;
    return result;
  };
  protoOf(StudyDetails).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StudyDetails))
      return false;
    var tmp0_other_with_cast = other instanceof StudyDetails ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    if (!this.ownerId.equals(tmp0_other_with_cast.ownerId))
      return false;
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    if (!this.createdOn.equals(tmp0_other_with_cast.createdOn))
      return false;
    if (!(this.description == tmp0_other_with_cast.description))
      return false;
    if (!this.invitation.equals(tmp0_other_with_cast.invitation))
      return false;
    if (!equals(this.protocolSnapshot, tmp0_other_with_cast.protocolSnapshot))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_2 = this;
    this.r2j_1 = new ApiVersion(1, 1);
  }
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).m16 = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_3;
  function Companion_getInstance_5() {
    return Companion_instance_3;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.StudyStatus.Configuring', this, 8);
    tmp0_serialDesc.nt('studyId', false);
    tmp0_serialDesc.nt('name', false);
    tmp0_serialDesc.nt('createdOn', false);
    tmp0_serialDesc.nt('studyProtocolId', false);
    tmp0_serialDesc.nt('canSetInvitation', false);
    tmp0_serialDesc.nt('canSetStudyProtocol', false);
    tmp0_serialDesc.nt('canDeployToParticipants', false);
    tmp0_serialDesc.nt('canGoLive', false);
    this.s2j_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).pi = function () {
    return this.s2j_1;
  };
  protoOf($serializer_0).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), StringSerializer_getInstance(), InstantIso8601Serializer_getInstance(), get_nullable(UUIDSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  protoOf($serializer_0).ri = function (decoder) {
    var tmp0_desc = this.s2j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_local6 = false;
    var tmp11_local7 = false;
    var tmp12_input = decoder.xl(tmp0_desc);
    if (tmp12_input.om()) {
      tmp4_local0 = tmp12_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.hm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.jm(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.lm(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.zl(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.zl(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.zl(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.zl(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.hm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.jm(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.lm(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.zl(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.zl(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.zl(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.zl(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.yl(tmp0_desc);
    return Configuring_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_0).t2j = function (encoder, value) {
    var tmp0_desc = this.s2j_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.u2j_1);
    tmp1_output.nn(tmp0_desc, 1, value.v2j_1);
    tmp1_output.pn(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), value.w2j_1);
    tmp1_output.rn(tmp0_desc, 3, UUIDSerializer_getInstance(), value.x2j_1);
    tmp1_output.fn(tmp0_desc, 4, value.y2j_1);
    tmp1_output.fn(tmp0_desc, 5, value.z2j_1);
    tmp1_output.fn(tmp0_desc, 6, value.a2k_1);
    tmp1_output.fn(tmp0_desc, 7, value.canGoLive);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_0).qi = function (encoder, value) {
    return this.t2j(encoder, value instanceof Configuring ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_2() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Configuring_init_$Init$(seen1, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive, serializationConstructorMarker, $this) {
    if (!(255 === (255 & seen1))) {
      throwMissingFieldException(seen1, 255, $serializer_getInstance_2().s2j_1);
    }
    StudyStatus_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.u2j_1 = studyId;
    $this.v2j_1 = name;
    $this.w2j_1 = createdOn;
    $this.x2j_1 = studyProtocolId;
    $this.y2j_1 = canSetInvitation;
    $this.z2j_1 = canSetStudyProtocol;
    $this.a2k_1 = canDeployToParticipants;
    $this.canGoLive = canGoLive;
    return $this;
  }
  function Configuring_init_$Create$(seen1, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive, serializationConstructorMarker) {
    return Configuring_init_$Init$(seen1, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive, serializationConstructorMarker, objectCreate(protoOf(Configuring)));
  }
  function Companion_3() {
  }
  protoOf(Companion_3).m16 = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_4;
  function Companion_getInstance_6() {
    return Companion_instance_4;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.StudyStatus.Live', this, 7);
    tmp0_serialDesc.nt('studyId', false);
    tmp0_serialDesc.nt('name', false);
    tmp0_serialDesc.nt('createdOn', false);
    tmp0_serialDesc.nt('studyProtocolId', false);
    tmp0_serialDesc.nt('canSetInvitation', false);
    tmp0_serialDesc.nt('canSetStudyProtocol', false);
    tmp0_serialDesc.nt('canDeployToParticipants', false);
    this.b2k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).pi = function () {
    return this.b2k_1;
  };
  protoOf($serializer_1).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), StringSerializer_getInstance(), InstantIso8601Serializer_getInstance(), get_nullable(UUIDSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  protoOf($serializer_1).ri = function (decoder) {
    var tmp0_desc = this.b2k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_local6 = false;
    var tmp11_input = decoder.xl(tmp0_desc);
    if (tmp11_input.om()) {
      tmp4_local0 = tmp11_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.hm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.jm(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.lm(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.zl(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.zl(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.zl(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.hm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.jm(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.lm(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.zl(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.zl(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.zl(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.yl(tmp0_desc);
    return Live_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_1).c2k = function (encoder, value) {
    var tmp0_desc = this.b2k_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.d2k_1);
    tmp1_output.nn(tmp0_desc, 1, value.e2k_1);
    tmp1_output.pn(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), value.f2k_1);
    tmp1_output.rn(tmp0_desc, 3, UUIDSerializer_getInstance(), value.g2k_1);
    tmp1_output.fn(tmp0_desc, 4, value.h2k_1);
    tmp1_output.fn(tmp0_desc, 5, value.i2k_1);
    tmp1_output.fn(tmp0_desc, 6, value.j2k_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_1).qi = function (encoder, value) {
    return this.c2k(encoder, value instanceof Live ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_3() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Live_init_$Init$(seen1, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, serializationConstructorMarker, $this) {
    if (!(127 === (127 & seen1))) {
      throwMissingFieldException(seen1, 127, $serializer_getInstance_3().b2k_1);
    }
    StudyStatus_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.d2k_1 = studyId;
    $this.e2k_1 = name;
    $this.f2k_1 = createdOn;
    $this.g2k_1 = studyProtocolId;
    $this.h2k_1 = canSetInvitation;
    $this.i2k_1 = canSetStudyProtocol;
    $this.j2k_1 = canDeployToParticipants;
    return $this;
  }
  function Live_init_$Create$(seen1, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, serializationConstructorMarker) {
    return Live_init_$Init$(seen1, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, serializationConstructorMarker, objectCreate(protoOf(Live)));
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.k2k_1.r2();
  }
  function StudyStatus$Companion$_anonymous__bcs06s() {
    var tmp = getKClass(StudyStatus);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(Configuring), getKClass(Live)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_2(), $serializer_getInstance_3()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.studies.application.StudyStatus', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Configuring(studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive) {
    StudyStatus.call(this);
    this.u2j_1 = studyId;
    this.v2j_1 = name;
    this.w2j_1 = createdOn;
    this.x2j_1 = studyProtocolId;
    this.y2j_1 = canSetInvitation;
    this.z2j_1 = canSetStudyProtocol;
    this.a2k_1 = canDeployToParticipants;
    this.canGoLive = canGoLive;
  }
  protoOf(Configuring).o2j = function () {
    return this.u2j_1;
  };
  protoOf(Configuring).ra = function () {
    return this.v2j_1;
  };
  protoOf(Configuring).a1z = function () {
    return this.w2j_1;
  };
  protoOf(Configuring).l2k = function () {
    return this.x2j_1;
  };
  protoOf(Configuring).m2k = function () {
    return this.y2j_1;
  };
  protoOf(Configuring).n2k = function () {
    return this.z2j_1;
  };
  protoOf(Configuring).o2k = function () {
    return this.a2k_1;
  };
  protoOf(Configuring).p2k = function () {
    return this.canGoLive;
  };
  protoOf(Configuring).od = function () {
    return this.u2j_1;
  };
  protoOf(Configuring).pd = function () {
    return this.v2j_1;
  };
  protoOf(Configuring).r1g = function () {
    return this.w2j_1;
  };
  protoOf(Configuring).q1h = function () {
    return this.x2j_1;
  };
  protoOf(Configuring).r1m = function () {
    return this.y2j_1;
  };
  protoOf(Configuring).l1p = function () {
    return this.z2j_1;
  };
  protoOf(Configuring).x24 = function () {
    return this.a2k_1;
  };
  protoOf(Configuring).y24 = function () {
    return this.canGoLive;
  };
  protoOf(Configuring).q2k = function (studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive) {
    return new Configuring(studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive);
  };
  protoOf(Configuring).copy = function (studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive, $super) {
    studyId = studyId === VOID ? this.u2j_1 : studyId;
    name = name === VOID ? this.v2j_1 : name;
    createdOn = createdOn === VOID ? this.w2j_1 : createdOn;
    studyProtocolId = studyProtocolId === VOID ? this.x2j_1 : studyProtocolId;
    canSetInvitation = canSetInvitation === VOID ? this.y2j_1 : canSetInvitation;
    canSetStudyProtocol = canSetStudyProtocol === VOID ? this.z2j_1 : canSetStudyProtocol;
    canDeployToParticipants = canDeployToParticipants === VOID ? this.a2k_1 : canDeployToParticipants;
    canGoLive = canGoLive === VOID ? this.canGoLive : canGoLive;
    return this.q2k(studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive);
  };
  protoOf(Configuring).toString = function () {
    return 'Configuring(studyId=' + this.u2j_1 + ', name=' + this.v2j_1 + ', createdOn=' + this.w2j_1 + ', studyProtocolId=' + this.x2j_1 + ', canSetInvitation=' + this.y2j_1 + ', canSetStudyProtocol=' + this.z2j_1 + ', canDeployToParticipants=' + this.a2k_1 + ', canGoLive=' + this.canGoLive + ')';
  };
  protoOf(Configuring).hashCode = function () {
    var result = this.u2j_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.v2j_1) | 0;
    result = imul(result, 31) + this.w2j_1.hashCode() | 0;
    result = imul(result, 31) + (this.x2j_1 == null ? 0 : this.x2j_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.y2j_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.z2j_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.a2k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.canGoLive) | 0;
    return result;
  };
  protoOf(Configuring).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Configuring))
      return false;
    var tmp0_other_with_cast = other instanceof Configuring ? other : THROW_CCE();
    if (!this.u2j_1.equals(tmp0_other_with_cast.u2j_1))
      return false;
    if (!(this.v2j_1 === tmp0_other_with_cast.v2j_1))
      return false;
    if (!this.w2j_1.equals(tmp0_other_with_cast.w2j_1))
      return false;
    if (!equals(this.x2j_1, tmp0_other_with_cast.x2j_1))
      return false;
    if (!(this.y2j_1 === tmp0_other_with_cast.y2j_1))
      return false;
    if (!(this.z2j_1 === tmp0_other_with_cast.z2j_1))
      return false;
    if (!(this.a2k_1 === tmp0_other_with_cast.a2k_1))
      return false;
    if (!(this.canGoLive === tmp0_other_with_cast.canGoLive))
      return false;
    return true;
  };
  function Live(studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants) {
    StudyStatus.call(this);
    this.d2k_1 = studyId;
    this.e2k_1 = name;
    this.f2k_1 = createdOn;
    this.g2k_1 = studyProtocolId;
    this.h2k_1 = canSetInvitation;
    this.i2k_1 = canSetStudyProtocol;
    this.j2k_1 = canDeployToParticipants;
  }
  protoOf(Live).o2j = function () {
    return this.d2k_1;
  };
  protoOf(Live).ra = function () {
    return this.e2k_1;
  };
  protoOf(Live).a1z = function () {
    return this.f2k_1;
  };
  protoOf(Live).l2k = function () {
    return this.g2k_1;
  };
  protoOf(Live).m2k = function () {
    return this.h2k_1;
  };
  protoOf(Live).n2k = function () {
    return this.i2k_1;
  };
  protoOf(Live).o2k = function () {
    return this.j2k_1;
  };
  protoOf(Live).od = function () {
    return this.d2k_1;
  };
  protoOf(Live).pd = function () {
    return this.e2k_1;
  };
  protoOf(Live).r1g = function () {
    return this.f2k_1;
  };
  protoOf(Live).q1h = function () {
    return this.g2k_1;
  };
  protoOf(Live).r1m = function () {
    return this.h2k_1;
  };
  protoOf(Live).l1p = function () {
    return this.i2k_1;
  };
  protoOf(Live).x24 = function () {
    return this.j2k_1;
  };
  protoOf(Live).r2k = function (studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants) {
    return new Live(studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants);
  };
  protoOf(Live).copy = function (studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, $super) {
    studyId = studyId === VOID ? this.d2k_1 : studyId;
    name = name === VOID ? this.e2k_1 : name;
    createdOn = createdOn === VOID ? this.f2k_1 : createdOn;
    studyProtocolId = studyProtocolId === VOID ? this.g2k_1 : studyProtocolId;
    canSetInvitation = canSetInvitation === VOID ? this.h2k_1 : canSetInvitation;
    canSetStudyProtocol = canSetStudyProtocol === VOID ? this.i2k_1 : canSetStudyProtocol;
    canDeployToParticipants = canDeployToParticipants === VOID ? this.j2k_1 : canDeployToParticipants;
    return this.r2k(studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants);
  };
  protoOf(Live).toString = function () {
    return 'Live(studyId=' + this.d2k_1 + ', name=' + this.e2k_1 + ', createdOn=' + this.f2k_1 + ', studyProtocolId=' + this.g2k_1 + ', canSetInvitation=' + this.h2k_1 + ', canSetStudyProtocol=' + this.i2k_1 + ', canDeployToParticipants=' + this.j2k_1 + ')';
  };
  protoOf(Live).hashCode = function () {
    var result = this.d2k_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.e2k_1) | 0;
    result = imul(result, 31) + this.f2k_1.hashCode() | 0;
    result = imul(result, 31) + (this.g2k_1 == null ? 0 : this.g2k_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.h2k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.i2k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.j2k_1) | 0;
    return result;
  };
  protoOf(Live).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Live))
      return false;
    var tmp0_other_with_cast = other instanceof Live ? other : THROW_CCE();
    if (!this.d2k_1.equals(tmp0_other_with_cast.d2k_1))
      return false;
    if (!(this.e2k_1 === tmp0_other_with_cast.e2k_1))
      return false;
    if (!this.f2k_1.equals(tmp0_other_with_cast.f2k_1))
      return false;
    if (!equals(this.g2k_1, tmp0_other_with_cast.g2k_1))
      return false;
    if (!(this.h2k_1 === tmp0_other_with_cast.h2k_1))
      return false;
    if (!(this.i2k_1 === tmp0_other_with_cast.i2k_1))
      return false;
    if (!(this.j2k_1 === tmp0_other_with_cast.j2k_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.k2k_1 = lazy(tmp_0, StudyStatus$Companion$_anonymous__bcs06s);
  }
  protoOf(Companion_4).m16 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_4).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function StudyStatus_init_$Init$(seen1, serializationConstructorMarker, $this) {
    return $this;
  }
  function StudyStatus() {
    Companion_getInstance_7();
  }
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s2k_1 = [null, Companion_getInstance().m16()];
  }
  protoOf(Companion_5).m16 = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_6;
  function Companion_getInstance_8() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.AssignedParticipantRoles', this, 2);
    tmp0_serialDesc.nt('participantId', false);
    tmp0_serialDesc.nt('assignedRoles', false);
    this.t2k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).pi = function () {
    return this.t2k_1;
  };
  protoOf($serializer_2).cu = function () {
    var tmp0_cached = Companion_getInstance_8().s2k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1]];
  };
  protoOf($serializer_2).ri = function (decoder) {
    var tmp0_desc = this.t2k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_8().s2k_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return AssignedParticipantRoles_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).u2k = function (encoder, value) {
    var tmp0_desc = this.t2k_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().s2k_1;
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.participantId);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.assignedRoles);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_2).qi = function (encoder, value) {
    return this.u2k(encoder, value instanceof AssignedParticipantRoles ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_4() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function AssignedParticipantRoles_init_$Init$(seen1, participantId, assignedRoles, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_4().t2k_1);
    }
    $this.participantId = participantId;
    $this.assignedRoles = assignedRoles;
    return $this;
  }
  function AssignedParticipantRoles_init_$Create$(seen1, participantId, assignedRoles, serializationConstructorMarker) {
    return AssignedParticipantRoles_init_$Init$(seen1, participantId, assignedRoles, serializationConstructorMarker, objectCreate(protoOf(AssignedParticipantRoles)));
  }
  function AssignedParticipantRoles(participantId, assignedRoles) {
    Companion_getInstance_8();
    this.participantId = participantId;
    this.assignedRoles = assignedRoles;
  }
  protoOf(AssignedParticipantRoles).h2g = function () {
    return this.participantId;
  };
  protoOf(AssignedParticipantRoles).i2g = function () {
    return this.assignedRoles;
  };
  protoOf(AssignedParticipantRoles).od = function () {
    return this.participantId;
  };
  protoOf(AssignedParticipantRoles).pd = function () {
    return this.assignedRoles;
  };
  protoOf(AssignedParticipantRoles).v2k = function (participantId, assignedRoles) {
    return new AssignedParticipantRoles(participantId, assignedRoles);
  };
  protoOf(AssignedParticipantRoles).copy = function (participantId, assignedRoles, $super) {
    participantId = participantId === VOID ? this.participantId : participantId;
    assignedRoles = assignedRoles === VOID ? this.assignedRoles : assignedRoles;
    return this.v2k(participantId, assignedRoles);
  };
  protoOf(AssignedParticipantRoles).toString = function () {
    return 'AssignedParticipantRoles(participantId=' + this.participantId + ', assignedRoles=' + this.assignedRoles + ')';
  };
  protoOf(AssignedParticipantRoles).hashCode = function () {
    var result = this.participantId.hashCode();
    result = imul(result, 31) + hashCode(this.assignedRoles) | 0;
    return result;
  };
  protoOf(AssignedParticipantRoles).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AssignedParticipantRoles))
      return false;
    var tmp0_other_with_cast = other instanceof AssignedParticipantRoles ? other : THROW_CCE();
    if (!this.participantId.equals(tmp0_other_with_cast.participantId))
      return false;
    if (!equals(this.assignedRoles, tmp0_other_with_cast.assignedRoles))
      return false;
    return true;
  };
  function participantIds(_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.t();
    while (tmp0_iterator.u()) {
      var item = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.studies.application.users.participantIds.<anonymous>' call
      var tmp$ret$0 = item.participantId;
      destination.q(tmp$ret$0);
    }
    return toSet(destination);
  }
  function participantRoles(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = _this__u8e3s4.t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.studies.application.users.participantRoles.<anonymous>' call
      var tmp0_subject = element.assignedRoles;
      var tmp;
      if (tmp0_subject instanceof All) {
        tmp = emptySet();
      } else {
        if (tmp0_subject instanceof Roles) {
          tmp = element.assignedRoles.roleNames;
        } else {
          noWhenBranchMatchedException();
        }
      }
      var list = tmp;
      addAll(destination, list);
    }
    return toSet(destination);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w2k_1 = [Companion_getInstance_0().m16(), null];
  }
  protoOf(Companion_6).m16 = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_7;
  function Companion_getInstance_9() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.Participant', this, 2);
    tmp0_serialDesc.nt('accountIdentity', false);
    tmp0_serialDesc.nt('id', false);
    this.x2k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).pi = function () {
    return this.x2k_1;
  };
  protoOf($serializer_3).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_9().w2k_1[0], UUIDSerializer_getInstance()];
  };
  protoOf($serializer_3).ri = function (decoder) {
    var tmp0_desc = this.x2k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_9().w2k_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return Participant_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).y2k = function (encoder, value) {
    var tmp0_desc = this.x2k_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().w2k_1;
    tmp1_output.pn(tmp0_desc, 0, tmp2_cached[0], value.accountIdentity);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.id);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_3).qi = function (encoder, value) {
    return this.y2k(encoder, value instanceof Participant ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_5() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function Participant_init_$Init$(seen1, accountIdentity, id, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_5().x2k_1);
    }
    $this.accountIdentity = accountIdentity;
    $this.id = id;
    return $this;
  }
  function Participant_init_$Create$(seen1, accountIdentity, id, serializationConstructorMarker) {
    return Participant_init_$Init$(seen1, accountIdentity, id, serializationConstructorMarker, objectCreate(protoOf(Participant)));
  }
  function Participant(accountIdentity, id) {
    Companion_getInstance_9();
    id = id === VOID ? Companion_instance.randomUUID() : id;
    this.accountIdentity = accountIdentity;
    this.id = id;
  }
  protoOf(Participant).z2k = function () {
    return this.accountIdentity;
  };
  protoOf(Participant).z1y = function () {
    return this.id;
  };
  protoOf(Participant).od = function () {
    return this.accountIdentity;
  };
  protoOf(Participant).pd = function () {
    return this.id;
  };
  protoOf(Participant).a2l = function (accountIdentity, id) {
    return new Participant(accountIdentity, id);
  };
  protoOf(Participant).copy = function (accountIdentity, id, $super) {
    accountIdentity = accountIdentity === VOID ? this.accountIdentity : accountIdentity;
    id = id === VOID ? this.id : id;
    return this.a2l(accountIdentity, id);
  };
  protoOf(Participant).toString = function () {
    return 'Participant(accountIdentity=' + this.accountIdentity + ', id=' + this.id + ')';
  };
  protoOf(Participant).hashCode = function () {
    var result = hashCode(this.accountIdentity);
    result = imul(result, 31) + this.id.hashCode() | 0;
    return result;
  };
  protoOf(Participant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Participant))
      return false;
    var tmp0_other_with_cast = other instanceof Participant ? other : THROW_CCE();
    if (!equals(this.accountIdentity, tmp0_other_with_cast.accountIdentity))
      return false;
    if (!this.id.equals(tmp0_other_with_cast.id))
      return false;
    return true;
  };
  function Companion_7() {
    Companion_instance_8 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b2l_1 = [null, new LinkedHashSetSerializer($serializer_getInstance_5())];
  }
  protoOf(Companion_7).m16 = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_8;
  function Companion_getInstance_10() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.ParticipantGroupStatus.Staged', this, 2);
    tmp0_serialDesc.nt('id', false);
    tmp0_serialDesc.nt('participants', false);
    this.c2l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).pi = function () {
    return this.c2l_1;
  };
  protoOf($serializer_4).cu = function () {
    var tmp0_cached = Companion_getInstance_10().b2l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1]];
  };
  protoOf($serializer_4).ri = function (decoder) {
    var tmp0_desc = this.c2l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_10().b2l_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return Staged_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).d2l = function (encoder, value) {
    var tmp0_desc = this.c2l_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().b2l_1;
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.e2l_1);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.f2l_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_4).qi = function (encoder, value) {
    return this.d2l(encoder, value instanceof Staged ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_6() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function Staged_init_$Init$(seen1, id, participants, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_6().c2l_1);
    }
    ParticipantGroupStatus_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.e2l_1 = id;
    $this.f2l_1 = participants;
    return $this;
  }
  function Staged_init_$Create$(seen1, id, participants, serializationConstructorMarker) {
    return Staged_init_$Init$(seen1, id, participants, serializationConstructorMarker, objectCreate(protoOf(Staged)));
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.g2l_1.r2();
  }
  function ParticipantGroupStatus$InDeployment$Companion$_anonymous__4r30td() {
    var tmp = getKClass(InDeployment);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(Invited_0), getKClass(Running_0), getKClass(Stopped_0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_7(), $serializer_getInstance_8(), $serializer_getInstance_9()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.studies.application.users.ParticipantGroupStatus.InDeployment', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.g2l_1 = lazy(tmp_0, ParticipantGroupStatus$InDeployment$Companion$_anonymous__4r30td);
  }
  protoOf(Companion_8).fromDeploymentStatus = function (participants, deploymentStatus) {
    var id = deploymentStatus.studyDeploymentId;
    var createdOn = deploymentStatus.createdOn;
    var startedOn = deploymentStatus.startedOn;
    var tmp;
    var tmp_0;
    if (deploymentStatus instanceof Invited) {
      tmp_0 = true;
    } else {
      tmp_0 = deploymentStatus instanceof DeployingDevices;
    }
    if (tmp_0) {
      tmp = startedOn == null ? new Invited_0(id, participants, createdOn, deploymentStatus) : new Running_0(id, participants, createdOn, deploymentStatus, startedOn);
    } else {
      if (deploymentStatus instanceof Running) {
        // Inline function 'kotlin.checkNotNull' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (startedOn == null) {
            // Inline function 'kotlin.checkNotNull.<anonymous>' call
            var message = 'Required value was null.';
            throw IllegalStateException_init_$Create$(toString(message));
          } else {
            tmp$ret$1 = startedOn;
            break $l$block;
          }
        }
        var tmp$ret$2 = tmp$ret$1;
        tmp = new Running_0(id, participants, createdOn, deploymentStatus, tmp$ret$2);
      } else {
        if (deploymentStatus instanceof Stopped) {
          tmp = new Stopped_0(id, participants, createdOn, deploymentStatus, startedOn, deploymentStatus.stoppedOn);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  protoOf(Companion_8).m16 = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_8).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_9;
  function Companion_getInstance_11() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function InDeployment_init_$Init$(seen1, serializationConstructorMarker, $this) {
    ParticipantGroupStatus_init_$Init$(seen1, serializationConstructorMarker, $this);
    return $this;
  }
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h2l_1 = [null, new LinkedHashSetSerializer($serializer_getInstance_5()), null, Companion_getInstance_1().m16()];
  }
  protoOf(Companion_9).m16 = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_10;
  function Companion_getInstance_12() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.ParticipantGroupStatus.Invited', this, 4);
    tmp0_serialDesc.nt('id', false);
    tmp0_serialDesc.nt('participants', false);
    tmp0_serialDesc.nt('invitedOn', false);
    tmp0_serialDesc.nt('studyDeploymentStatus', false);
    this.i2l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).pi = function () {
    return this.i2l_1;
  };
  protoOf($serializer_5).cu = function () {
    var tmp0_cached = Companion_getInstance_12().h2l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1], InstantIso8601Serializer_getInstance(), tmp0_cached[3]];
  };
  protoOf($serializer_5).ri = function (decoder) {
    var tmp0_desc = this.i2l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_12().h2l_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.jm(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.jm(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return Invited_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_5).j2l = function (encoder, value) {
    var tmp0_desc = this.i2l_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().h2l_1;
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.k2l_1);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.l2l_1);
    tmp1_output.pn(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), value.m2l_1);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.n2l_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_5).qi = function (encoder, value) {
    return this.j2l(encoder, value instanceof Invited_0 ? value : THROW_CCE());
  };
  var $serializer_instance_5;
  function $serializer_getInstance_7() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function Invited_init_$Init$(seen1, id, participants, invitedOn, studyDeploymentStatus, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_7().i2l_1);
    }
    InDeployment_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.k2l_1 = id;
    $this.l2l_1 = participants;
    $this.m2l_1 = invitedOn;
    $this.n2l_1 = studyDeploymentStatus;
    return $this;
  }
  function Invited_init_$Create$(seen1, id, participants, invitedOn, studyDeploymentStatus, serializationConstructorMarker) {
    return Invited_init_$Init$(seen1, id, participants, invitedOn, studyDeploymentStatus, serializationConstructorMarker, objectCreate(protoOf(Invited_0)));
  }
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o2l_1 = [null, new LinkedHashSetSerializer($serializer_getInstance_5()), null, Companion_getInstance_1().m16(), null];
  }
  protoOf(Companion_10).m16 = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_11;
  function Companion_getInstance_13() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.ParticipantGroupStatus.Running', this, 5);
    tmp0_serialDesc.nt('id', false);
    tmp0_serialDesc.nt('participants', false);
    tmp0_serialDesc.nt('invitedOn', false);
    tmp0_serialDesc.nt('studyDeploymentStatus', false);
    tmp0_serialDesc.nt('startedOn', false);
    this.p2l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).pi = function () {
    return this.p2l_1;
  };
  protoOf($serializer_6).cu = function () {
    var tmp0_cached = Companion_getInstance_13().o2l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1], InstantIso8601Serializer_getInstance(), tmp0_cached[3], InstantIso8601Serializer_getInstance()];
  };
  protoOf($serializer_6).ri = function (decoder) {
    var tmp0_desc = this.p2l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xl(tmp0_desc);
    var tmp10_cached = Companion_getInstance_13().o2l_1;
    if (tmp9_input.om()) {
      tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jm(tmp0_desc, 1, tmp10_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jm(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jm(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.jm(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.jm(tmp0_desc, 1, tmp10_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.jm(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jm(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.jm(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yl(tmp0_desc);
    return Running_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_6).q2l = function (encoder, value) {
    var tmp0_desc = this.p2l_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().o2l_1;
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.r2l_1);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.s2l_1);
    tmp1_output.pn(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), value.t2l_1);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.u2l_1);
    tmp1_output.pn(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), value.startedOn);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_6).qi = function (encoder, value) {
    return this.q2l(encoder, value instanceof Running_0 ? value : THROW_CCE());
  };
  var $serializer_instance_6;
  function $serializer_getInstance_8() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function Running_init_$Init$(seen1, id, participants, invitedOn, studyDeploymentStatus, startedOn, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_8().p2l_1);
    }
    InDeployment_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.r2l_1 = id;
    $this.s2l_1 = participants;
    $this.t2l_1 = invitedOn;
    $this.u2l_1 = studyDeploymentStatus;
    $this.startedOn = startedOn;
    return $this;
  }
  function Running_init_$Create$(seen1, id, participants, invitedOn, studyDeploymentStatus, startedOn, serializationConstructorMarker) {
    return Running_init_$Init$(seen1, id, participants, invitedOn, studyDeploymentStatus, startedOn, serializationConstructorMarker, objectCreate(protoOf(Running_0)));
  }
  function Companion_11() {
    Companion_instance_12 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v2l_1 = [null, new LinkedHashSetSerializer($serializer_getInstance_5()), null, Companion_getInstance_1().m16(), null, null];
  }
  protoOf(Companion_11).m16 = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_12;
  function Companion_getInstance_14() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.ParticipantGroupStatus.Stopped', this, 6);
    tmp0_serialDesc.nt('id', false);
    tmp0_serialDesc.nt('participants', false);
    tmp0_serialDesc.nt('invitedOn', false);
    tmp0_serialDesc.nt('studyDeploymentStatus', false);
    tmp0_serialDesc.nt('startedOn', false);
    tmp0_serialDesc.nt('stoppedOn', false);
    this.w2l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).pi = function () {
    return this.w2l_1;
  };
  protoOf($serializer_7).cu = function () {
    var tmp0_cached = Companion_getInstance_14().v2l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1], InstantIso8601Serializer_getInstance(), tmp0_cached[3], get_nullable(InstantIso8601Serializer_getInstance()), InstantIso8601Serializer_getInstance()];
  };
  protoOf($serializer_7).ri = function (decoder) {
    var tmp0_desc = this.w2l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.xl(tmp0_desc);
    var tmp11_cached = Companion_getInstance_14().v2l_1;
    if (tmp10_input.om()) {
      tmp4_local0 = tmp10_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.jm(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.jm(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.jm(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.lm(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.jm(tmp0_desc, 5, InstantIso8601Serializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.jm(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.jm(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.jm(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.lm(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.jm(tmp0_desc, 5, InstantIso8601Serializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.yl(tmp0_desc);
    return Stopped_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_7).x2l = function (encoder, value) {
    var tmp0_desc = this.w2l_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().v2l_1;
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.y2l_1);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.z2l_1);
    tmp1_output.pn(tmp0_desc, 2, InstantIso8601Serializer_getInstance(), value.a2m_1);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.b2m_1);
    tmp1_output.rn(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), value.startedOn);
    tmp1_output.pn(tmp0_desc, 5, InstantIso8601Serializer_getInstance(), value.stoppedOn);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_7).qi = function (encoder, value) {
    return this.x2l(encoder, value instanceof Stopped_0 ? value : THROW_CCE());
  };
  var $serializer_instance_7;
  function $serializer_getInstance_9() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function Stopped_init_$Init$(seen1, id, participants, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen1))) {
      throwMissingFieldException(seen1, 63, $serializer_getInstance_9().w2l_1);
    }
    InDeployment_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.y2l_1 = id;
    $this.z2l_1 = participants;
    $this.a2m_1 = invitedOn;
    $this.b2m_1 = studyDeploymentStatus;
    $this.startedOn = startedOn;
    $this.stoppedOn = stoppedOn;
    return $this;
  }
  function Stopped_init_$Create$(seen1, id, participants, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, serializationConstructorMarker) {
    return Stopped_init_$Init$(seen1, id, participants, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, serializationConstructorMarker, objectCreate(protoOf(Stopped_0)));
  }
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.c2m_1.r2();
  }
  function ParticipantGroupStatus$Companion$_anonymous__m1lxbl() {
    var tmp = getKClass(ParticipantGroupStatus);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(Invited_0), getKClass(Running_0), getKClass(Stopped_0), getKClass(Staged)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_7(), $serializer_getInstance_8(), $serializer_getInstance_9(), $serializer_getInstance_6()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.studies.application.users.ParticipantGroupStatus', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Staged(id, participants) {
    Companion_getInstance_10();
    ParticipantGroupStatus.call(this);
    this.e2l_1 = id;
    this.f2l_1 = participants;
  }
  protoOf(Staged).z1y = function () {
    return this.e2l_1;
  };
  protoOf(Staged).d2m = function () {
    return this.f2l_1;
  };
  protoOf(Staged).od = function () {
    return this.e2l_1;
  };
  protoOf(Staged).pd = function () {
    return this.f2l_1;
  };
  protoOf(Staged).e2m = function (id, participants) {
    return new Staged(id, participants);
  };
  protoOf(Staged).copy = function (id, participants, $super) {
    id = id === VOID ? this.e2l_1 : id;
    participants = participants === VOID ? this.f2l_1 : participants;
    return this.e2m(id, participants);
  };
  protoOf(Staged).toString = function () {
    return 'Staged(id=' + this.e2l_1 + ', participants=' + this.f2l_1 + ')';
  };
  protoOf(Staged).hashCode = function () {
    var result = this.e2l_1.hashCode();
    result = imul(result, 31) + hashCode(this.f2l_1) | 0;
    return result;
  };
  protoOf(Staged).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Staged))
      return false;
    var tmp0_other_with_cast = other instanceof Staged ? other : THROW_CCE();
    if (!this.e2l_1.equals(tmp0_other_with_cast.e2l_1))
      return false;
    if (!equals(this.f2l_1, tmp0_other_with_cast.f2l_1))
      return false;
    return true;
  };
  function InDeployment() {
    Companion_getInstance_11();
    ParticipantGroupStatus.call(this);
  }
  function Invited_0(id, participants, invitedOn, studyDeploymentStatus) {
    Companion_getInstance_12();
    InDeployment.call(this);
    this.k2l_1 = id;
    this.l2l_1 = participants;
    this.m2l_1 = invitedOn;
    this.n2l_1 = studyDeploymentStatus;
  }
  protoOf(Invited_0).z1y = function () {
    return this.k2l_1;
  };
  protoOf(Invited_0).d2m = function () {
    return this.l2l_1;
  };
  protoOf(Invited_0).f2m = function () {
    return this.m2l_1;
  };
  protoOf(Invited_0).g2m = function () {
    return this.n2l_1;
  };
  protoOf(Invited_0).od = function () {
    return this.k2l_1;
  };
  protoOf(Invited_0).pd = function () {
    return this.l2l_1;
  };
  protoOf(Invited_0).r1g = function () {
    return this.m2l_1;
  };
  protoOf(Invited_0).q1h = function () {
    return this.n2l_1;
  };
  protoOf(Invited_0).h2m = function (id, participants, invitedOn, studyDeploymentStatus) {
    return new Invited_0(id, participants, invitedOn, studyDeploymentStatus);
  };
  protoOf(Invited_0).copy = function (id, participants, invitedOn, studyDeploymentStatus, $super) {
    id = id === VOID ? this.k2l_1 : id;
    participants = participants === VOID ? this.l2l_1 : participants;
    invitedOn = invitedOn === VOID ? this.m2l_1 : invitedOn;
    studyDeploymentStatus = studyDeploymentStatus === VOID ? this.n2l_1 : studyDeploymentStatus;
    return this.h2m(id, participants, invitedOn, studyDeploymentStatus);
  };
  protoOf(Invited_0).toString = function () {
    return 'Invited(id=' + this.k2l_1 + ', participants=' + this.l2l_1 + ', invitedOn=' + this.m2l_1 + ', studyDeploymentStatus=' + this.n2l_1 + ')';
  };
  protoOf(Invited_0).hashCode = function () {
    var result = this.k2l_1.hashCode();
    result = imul(result, 31) + hashCode(this.l2l_1) | 0;
    result = imul(result, 31) + this.m2l_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.n2l_1) | 0;
    return result;
  };
  protoOf(Invited_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Invited_0))
      return false;
    var tmp0_other_with_cast = other instanceof Invited_0 ? other : THROW_CCE();
    if (!this.k2l_1.equals(tmp0_other_with_cast.k2l_1))
      return false;
    if (!equals(this.l2l_1, tmp0_other_with_cast.l2l_1))
      return false;
    if (!this.m2l_1.equals(tmp0_other_with_cast.m2l_1))
      return false;
    if (!equals(this.n2l_1, tmp0_other_with_cast.n2l_1))
      return false;
    return true;
  };
  function Running_0(id, participants, invitedOn, studyDeploymentStatus, startedOn) {
    Companion_getInstance_13();
    InDeployment.call(this);
    this.r2l_1 = id;
    this.s2l_1 = participants;
    this.t2l_1 = invitedOn;
    this.u2l_1 = studyDeploymentStatus;
    this.startedOn = startedOn;
  }
  protoOf(Running_0).z1y = function () {
    return this.r2l_1;
  };
  protoOf(Running_0).d2m = function () {
    return this.s2l_1;
  };
  protoOf(Running_0).f2m = function () {
    return this.t2l_1;
  };
  protoOf(Running_0).g2m = function () {
    return this.u2l_1;
  };
  protoOf(Running_0).f2f = function () {
    return this.startedOn;
  };
  protoOf(Running_0).od = function () {
    return this.r2l_1;
  };
  protoOf(Running_0).pd = function () {
    return this.s2l_1;
  };
  protoOf(Running_0).r1g = function () {
    return this.t2l_1;
  };
  protoOf(Running_0).q1h = function () {
    return this.u2l_1;
  };
  protoOf(Running_0).r1m = function () {
    return this.startedOn;
  };
  protoOf(Running_0).i2m = function (id, participants, invitedOn, studyDeploymentStatus, startedOn) {
    return new Running_0(id, participants, invitedOn, studyDeploymentStatus, startedOn);
  };
  protoOf(Running_0).copy = function (id, participants, invitedOn, studyDeploymentStatus, startedOn, $super) {
    id = id === VOID ? this.r2l_1 : id;
    participants = participants === VOID ? this.s2l_1 : participants;
    invitedOn = invitedOn === VOID ? this.t2l_1 : invitedOn;
    studyDeploymentStatus = studyDeploymentStatus === VOID ? this.u2l_1 : studyDeploymentStatus;
    startedOn = startedOn === VOID ? this.startedOn : startedOn;
    return this.i2m(id, participants, invitedOn, studyDeploymentStatus, startedOn);
  };
  protoOf(Running_0).toString = function () {
    return 'Running(id=' + this.r2l_1 + ', participants=' + this.s2l_1 + ', invitedOn=' + this.t2l_1 + ', studyDeploymentStatus=' + this.u2l_1 + ', startedOn=' + this.startedOn + ')';
  };
  protoOf(Running_0).hashCode = function () {
    var result = this.r2l_1.hashCode();
    result = imul(result, 31) + hashCode(this.s2l_1) | 0;
    result = imul(result, 31) + this.t2l_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.u2l_1) | 0;
    result = imul(result, 31) + this.startedOn.hashCode() | 0;
    return result;
  };
  protoOf(Running_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Running_0))
      return false;
    var tmp0_other_with_cast = other instanceof Running_0 ? other : THROW_CCE();
    if (!this.r2l_1.equals(tmp0_other_with_cast.r2l_1))
      return false;
    if (!equals(this.s2l_1, tmp0_other_with_cast.s2l_1))
      return false;
    if (!this.t2l_1.equals(tmp0_other_with_cast.t2l_1))
      return false;
    if (!equals(this.u2l_1, tmp0_other_with_cast.u2l_1))
      return false;
    if (!this.startedOn.equals(tmp0_other_with_cast.startedOn))
      return false;
    return true;
  };
  function Stopped_0(id, participants, invitedOn, studyDeploymentStatus, startedOn, stoppedOn) {
    Companion_getInstance_14();
    InDeployment.call(this);
    this.y2l_1 = id;
    this.z2l_1 = participants;
    this.a2m_1 = invitedOn;
    this.b2m_1 = studyDeploymentStatus;
    this.startedOn = startedOn;
    this.stoppedOn = stoppedOn;
  }
  protoOf(Stopped_0).z1y = function () {
    return this.y2l_1;
  };
  protoOf(Stopped_0).d2m = function () {
    return this.z2l_1;
  };
  protoOf(Stopped_0).f2m = function () {
    return this.a2m_1;
  };
  protoOf(Stopped_0).g2m = function () {
    return this.b2m_1;
  };
  protoOf(Stopped_0).f2f = function () {
    return this.startedOn;
  };
  protoOf(Stopped_0).i2f = function () {
    return this.stoppedOn;
  };
  protoOf(Stopped_0).od = function () {
    return this.y2l_1;
  };
  protoOf(Stopped_0).pd = function () {
    return this.z2l_1;
  };
  protoOf(Stopped_0).r1g = function () {
    return this.a2m_1;
  };
  protoOf(Stopped_0).q1h = function () {
    return this.b2m_1;
  };
  protoOf(Stopped_0).r1m = function () {
    return this.startedOn;
  };
  protoOf(Stopped_0).l1p = function () {
    return this.stoppedOn;
  };
  protoOf(Stopped_0).j2m = function (id, participants, invitedOn, studyDeploymentStatus, startedOn, stoppedOn) {
    return new Stopped_0(id, participants, invitedOn, studyDeploymentStatus, startedOn, stoppedOn);
  };
  protoOf(Stopped_0).copy = function (id, participants, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, $super) {
    id = id === VOID ? this.y2l_1 : id;
    participants = participants === VOID ? this.z2l_1 : participants;
    invitedOn = invitedOn === VOID ? this.a2m_1 : invitedOn;
    studyDeploymentStatus = studyDeploymentStatus === VOID ? this.b2m_1 : studyDeploymentStatus;
    startedOn = startedOn === VOID ? this.startedOn : startedOn;
    stoppedOn = stoppedOn === VOID ? this.stoppedOn : stoppedOn;
    return this.j2m(id, participants, invitedOn, studyDeploymentStatus, startedOn, stoppedOn);
  };
  protoOf(Stopped_0).toString = function () {
    return 'Stopped(id=' + this.y2l_1 + ', participants=' + this.z2l_1 + ', invitedOn=' + this.a2m_1 + ', studyDeploymentStatus=' + this.b2m_1 + ', startedOn=' + this.startedOn + ', stoppedOn=' + this.stoppedOn + ')';
  };
  protoOf(Stopped_0).hashCode = function () {
    var result = this.y2l_1.hashCode();
    result = imul(result, 31) + hashCode(this.z2l_1) | 0;
    result = imul(result, 31) + this.a2m_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.b2m_1) | 0;
    result = imul(result, 31) + (this.startedOn == null ? 0 : this.startedOn.hashCode()) | 0;
    result = imul(result, 31) + this.stoppedOn.hashCode() | 0;
    return result;
  };
  protoOf(Stopped_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stopped_0))
      return false;
    var tmp0_other_with_cast = other instanceof Stopped_0 ? other : THROW_CCE();
    if (!this.y2l_1.equals(tmp0_other_with_cast.y2l_1))
      return false;
    if (!equals(this.z2l_1, tmp0_other_with_cast.z2l_1))
      return false;
    if (!this.a2m_1.equals(tmp0_other_with_cast.a2m_1))
      return false;
    if (!equals(this.b2m_1, tmp0_other_with_cast.b2m_1))
      return false;
    if (!equals(this.startedOn, tmp0_other_with_cast.startedOn))
      return false;
    if (!this.stoppedOn.equals(tmp0_other_with_cast.stoppedOn))
      return false;
    return true;
  };
  function Companion_12() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.c2m_1 = lazy(tmp_0, ParticipantGroupStatus$Companion$_anonymous__m1lxbl);
  }
  protoOf(Companion_12).m16 = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_12).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_13;
  function Companion_getInstance_15() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function ParticipantGroupStatus_init_$Init$(seen1, serializationConstructorMarker, $this) {
    return $this;
  }
  function ParticipantGroupStatus() {
    Companion_getInstance_15();
  }
  function RecruitmentServiceRequest$Companion$serializer$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.d1r(p0);
    };
    l.callableName = 'serializer';
    return l;
  }
  function Companion_13() {
  }
  protoOf(Companion_13).m16 = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_14;
  function Companion_getInstance_16() {
    return Companion_instance_14;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.AddParticipantByEmailAddress', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    tmp0_serialDesc.nt('email', false);
    this.l2m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).pi = function () {
    return this.l2m_1;
  };
  protoOf($serializer_8).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), EmailAddressSerializer_getInstance()];
  };
  protoOf($serializer_8).ri = function (decoder) {
    var tmp0_desc = this.l2m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, EmailAddressSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, EmailAddressSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return AddParticipantByEmailAddress_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_8).m2m = function (encoder, value) {
    var tmp0_desc = this.l2m_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.pn(tmp0_desc, 2, EmailAddressSerializer_getInstance(), value.email);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_8).qi = function (encoder, value) {
    return this.m2m(encoder, value instanceof AddParticipantByEmailAddress ? value : THROW_CCE());
  };
  var $serializer_instance_8;
  function $serializer_getInstance_10() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function AddParticipantByEmailAddress_init_$Init$(seen1, apiVersion, studyId, email, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_10().l2m_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.email = email;
    return $this;
  }
  function AddParticipantByEmailAddress_init_$Create$(seen1, apiVersion, studyId, email, serializationConstructorMarker) {
    return AddParticipantByEmailAddress_init_$Init$(seen1, apiVersion, studyId, email, serializationConstructorMarker, objectCreate(protoOf(AddParticipantByEmailAddress)));
  }
  function RecruitmentService$addParticipant$ref() {
  }
  protoOf(RecruitmentService$addParticipant$ref).o2m = function (p0, p1, p2, $completion) {
    return p0.p2m(p1, p2, $completion);
  };
  function RecruitmentService$addParticipant$ref_0() {
    var i = new RecruitmentService$addParticipant$ref();
    var l = function (p0, p1, p2, $completion) {
      return i.o2m(p0, p1, p2, $completion);
    };
    l.callableName = 'addParticipant';
    l.$arity = 3;
    return l;
  }
  function Companion_14() {
  }
  protoOf(Companion_14).m16 = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_15;
  function Companion_getInstance_17() {
    return Companion_instance_15;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.AddParticipantByUsername', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    tmp0_serialDesc.nt('username', false);
    this.q2m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).pi = function () {
    return this.q2m_1;
  };
  protoOf($serializer_9).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), UsernameSerializer_getInstance()];
  };
  protoOf($serializer_9).ri = function (decoder) {
    var tmp0_desc = this.q2m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, UsernameSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, UsernameSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return AddParticipantByUsername_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_9).r2m = function (encoder, value) {
    var tmp0_desc = this.q2m_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.pn(tmp0_desc, 2, UsernameSerializer_getInstance(), value.username);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_9).qi = function (encoder, value) {
    return this.r2m(encoder, value instanceof AddParticipantByUsername ? value : THROW_CCE());
  };
  var $serializer_instance_9;
  function $serializer_getInstance_11() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function AddParticipantByUsername_init_$Init$(seen1, apiVersion, studyId, username, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_11().q2m_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.username = username;
    return $this;
  }
  function AddParticipantByUsername_init_$Create$(seen1, apiVersion, studyId, username, serializationConstructorMarker) {
    return AddParticipantByUsername_init_$Init$(seen1, apiVersion, studyId, username, serializationConstructorMarker, objectCreate(protoOf(AddParticipantByUsername)));
  }
  function RecruitmentService$addParticipant$ref_1() {
  }
  protoOf(RecruitmentService$addParticipant$ref_1).t2m = function (p0, p1, p2, $completion) {
    return p0.u2m(p1, p2, $completion);
  };
  function RecruitmentService$addParticipant$ref_2() {
    var i = new RecruitmentService$addParticipant$ref_1();
    var l = function (p0, p1, p2, $completion) {
      return i.t2m(p0, p1, p2, $completion);
    };
    l.callableName = 'addParticipant';
    l.$arity = 3;
    return l;
  }
  function Companion_15() {
  }
  protoOf(Companion_15).m16 = function () {
    return $serializer_getInstance_12();
  };
  var Companion_instance_16;
  function Companion_getInstance_18() {
    return Companion_instance_16;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.GetParticipant', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    tmp0_serialDesc.nt('participantId', false);
    this.v2m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).pi = function () {
    return this.v2m_1;
  };
  protoOf($serializer_10).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_10).ri = function (decoder) {
    var tmp0_desc = this.v2m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, UUIDSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, UUIDSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return GetParticipant_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_10).w2m = function (encoder, value) {
    var tmp0_desc = this.v2m_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.pn(tmp0_desc, 2, UUIDSerializer_getInstance(), value.participantId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_10).qi = function (encoder, value) {
    return this.w2m(encoder, value instanceof GetParticipant ? value : THROW_CCE());
  };
  var $serializer_instance_10;
  function $serializer_getInstance_12() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function GetParticipant_init_$Init$(seen1, apiVersion, studyId, participantId, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_12().v2m_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.participantId = participantId;
    return $this;
  }
  function GetParticipant_init_$Create$(seen1, apiVersion, studyId, participantId, serializationConstructorMarker) {
    return GetParticipant_init_$Init$(seen1, apiVersion, studyId, participantId, serializationConstructorMarker, objectCreate(protoOf(GetParticipant)));
  }
  function Companion_16() {
  }
  protoOf(Companion_16).m16 = function () {
    return $serializer_getInstance_13();
  };
  var Companion_instance_17;
  function Companion_getInstance_19() {
    return Companion_instance_17;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.GetParticipants', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    this.y2m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).pi = function () {
    return this.y2m_1;
  };
  protoOf($serializer_11).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_11).ri = function (decoder) {
    var tmp0_desc = this.y2m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return GetParticipants_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).z2m = function (encoder, value) {
    var tmp0_desc = this.y2m_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_11).qi = function (encoder, value) {
    return this.z2m(encoder, value instanceof GetParticipants ? value : THROW_CCE());
  };
  var $serializer_instance_11;
  function $serializer_getInstance_13() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function GetParticipants_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_13().y2m_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function GetParticipants_init_$Create$(seen1, apiVersion, studyId, serializationConstructorMarker) {
    return GetParticipants_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(GetParticipants)));
  }
  function Companion_17() {
    Companion_instance_18 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b2n_1 = [null, null, new LinkedHashSetSerializer($serializer_getInstance_4())];
  }
  protoOf(Companion_17).m16 = function () {
    return $serializer_getInstance_14();
  };
  var Companion_instance_18;
  function Companion_getInstance_20() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.InviteNewParticipantGroup', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    tmp0_serialDesc.nt('group', false);
    this.c2n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).pi = function () {
    return this.c2n_1;
  };
  protoOf($serializer_12).cu = function () {
    var tmp0_cached = Companion_getInstance_20().b2n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2]];
  };
  protoOf($serializer_12).ri = function (decoder) {
    var tmp0_desc = this.c2n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    var tmp8_cached = Companion_getInstance_20().b2n_1;
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return InviteNewParticipantGroup_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_12).d2n = function (encoder, value) {
    var tmp0_desc = this.c2n_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().b2n_1;
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.group);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_12).qi = function (encoder, value) {
    return this.d2n(encoder, value instanceof InviteNewParticipantGroup ? value : THROW_CCE());
  };
  var $serializer_instance_12;
  function $serializer_getInstance_14() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function InviteNewParticipantGroup_init_$Init$(seen1, apiVersion, studyId, group, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_14().c2n_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.group = group;
    return $this;
  }
  function InviteNewParticipantGroup_init_$Create$(seen1, apiVersion, studyId, group, serializationConstructorMarker) {
    return InviteNewParticipantGroup_init_$Init$(seen1, apiVersion, studyId, group, serializationConstructorMarker, objectCreate(protoOf(InviteNewParticipantGroup)));
  }
  function Companion_18() {
  }
  protoOf(Companion_18).m16 = function () {
    return $serializer_getInstance_15();
  };
  var Companion_instance_19;
  function Companion_getInstance_21() {
    return Companion_instance_19;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.GetParticipantGroupStatusList', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    this.f2n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).pi = function () {
    return this.f2n_1;
  };
  protoOf($serializer_13).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_13).ri = function (decoder) {
    var tmp0_desc = this.f2n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return GetParticipantGroupStatusList_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_13).g2n = function (encoder, value) {
    var tmp0_desc = this.f2n_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_13).qi = function (encoder, value) {
    return this.g2n(encoder, value instanceof GetParticipantGroupStatusList ? value : THROW_CCE());
  };
  var $serializer_instance_13;
  function $serializer_getInstance_15() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function GetParticipantGroupStatusList_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_15().f2n_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function GetParticipantGroupStatusList_init_$Create$(seen1, apiVersion, studyId, serializationConstructorMarker) {
    return GetParticipantGroupStatusList_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(GetParticipantGroupStatusList)));
  }
  function Companion_19() {
  }
  protoOf(Companion_19).m16 = function () {
    return $serializer_getInstance_16();
  };
  var Companion_instance_20;
  function Companion_getInstance_22() {
    return Companion_instance_20;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.StopParticipantGroup', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    tmp0_serialDesc.nt('groupId', false);
    this.i2n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).pi = function () {
    return this.i2n_1;
  };
  protoOf($serializer_14).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_14).ri = function (decoder) {
    var tmp0_desc = this.i2n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, UUIDSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, UUIDSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return StopParticipantGroup_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_14).j2n = function (encoder, value) {
    var tmp0_desc = this.i2n_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.pn(tmp0_desc, 2, UUIDSerializer_getInstance(), value.groupId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_14).qi = function (encoder, value) {
    return this.j2n(encoder, value instanceof StopParticipantGroup ? value : THROW_CCE());
  };
  var $serializer_instance_14;
  function $serializer_getInstance_16() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function StopParticipantGroup_init_$Init$(seen1, apiVersion, studyId, groupId, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_16().i2n_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.groupId = groupId;
    return $this;
  }
  function StopParticipantGroup_init_$Create$(seen1, apiVersion, studyId, groupId, serializationConstructorMarker) {
    return StopParticipantGroup_init_$Init$(seen1, apiVersion, studyId, groupId, serializationConstructorMarker, objectCreate(protoOf(StopParticipantGroup)));
  }
  function _get_$cachedSerializer__te6jhj_2($this) {
    return $this.k2m_1.r2();
  }
  function RecruitmentServiceRequest$Companion$_anonymous__3j4vax() {
    var tmp = getKClass(RecruitmentServiceRequest);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(AddParticipantByEmailAddress), getKClass(AddParticipantByUsername), getKClass(GetParticipant), getKClass(GetParticipantGroupStatusList), getKClass(GetParticipants), getKClass(InviteNewParticipantGroup), getKClass(StopParticipantGroup)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_10(), $serializer_getInstance_11(), $serializer_getInstance_12(), $serializer_getInstance_15(), $serializer_getInstance_13(), $serializer_getInstance_14(), $serializer_getInstance_16()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Serializer() {
    Serializer_instance = this;
    var tmp = this;
    tmp.l2n_1 = ignoreTypeParameters(RecruitmentServiceRequest$Companion$serializer$ref(Companion_getInstance_23()));
  }
  protoOf(Serializer).pi = function () {
    return this.l2n_1.pi();
  };
  protoOf(Serializer).ri = function (decoder) {
    return this.l2n_1.ri(decoder);
  };
  protoOf(Serializer).m2n = function (encoder, value) {
    this.l2n_1.qi(encoder, value);
  };
  protoOf(Serializer).qi = function (encoder, value) {
    return this.m2n(encoder, value instanceof RecruitmentServiceRequest ? value : THROW_CCE());
  };
  var Serializer_instance;
  function Serializer_getInstance() {
    if (Serializer_instance == null)
      new Serializer();
    return Serializer_instance;
  }
  function AddParticipantByEmailAddress(studyId, email) {
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
    this.email = email;
  }
  protoOf(AddParticipantByEmailAddress).o2j = function () {
    return this.studyId;
  };
  protoOf(AddParticipantByEmailAddress).n2n = function () {
    return this.email;
  };
  protoOf(AddParticipantByEmailAddress).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Participant), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(AddParticipantByEmailAddress).matchesServiceRequest = function (request) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dk.cachet.carp.studies.infrastructure.AddParticipantByEmailAddress.matchesServiceRequest.<anonymous>' call
    var tmp$ret$1 = RecruitmentService$addParticipant$ref_0();
    return equals(request, tmp$ret$1);
  };
  protoOf(AddParticipantByEmailAddress).od = function () {
    return this.studyId;
  };
  protoOf(AddParticipantByEmailAddress).pd = function () {
    return this.email;
  };
  protoOf(AddParticipantByEmailAddress).o2n = function (studyId, email) {
    return new AddParticipantByEmailAddress(studyId, email);
  };
  protoOf(AddParticipantByEmailAddress).copy = function (studyId, email, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    email = email === VOID ? this.email : email;
    return this.o2n(studyId, email);
  };
  protoOf(AddParticipantByEmailAddress).toString = function () {
    return 'AddParticipantByEmailAddress(studyId=' + this.studyId + ', email=' + this.email + ')';
  };
  protoOf(AddParticipantByEmailAddress).hashCode = function () {
    var result = this.studyId.hashCode();
    result = imul(result, 31) + this.email.hashCode() | 0;
    return result;
  };
  protoOf(AddParticipantByEmailAddress).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AddParticipantByEmailAddress))
      return false;
    var tmp0_other_with_cast = other instanceof AddParticipantByEmailAddress ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    if (!this.email.equals(tmp0_other_with_cast.email))
      return false;
    return true;
  };
  function AddParticipantByUsername(studyId, username) {
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
    this.username = username;
  }
  protoOf(AddParticipantByUsername).o2j = function () {
    return this.studyId;
  };
  protoOf(AddParticipantByUsername).g1x = function () {
    return this.username;
  };
  protoOf(AddParticipantByUsername).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Participant), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(AddParticipantByUsername).matchesServiceRequest = function (request) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dk.cachet.carp.studies.infrastructure.AddParticipantByUsername.matchesServiceRequest.<anonymous>' call
    var tmp$ret$1 = RecruitmentService$addParticipant$ref_2();
    return equals(request, tmp$ret$1);
  };
  protoOf(AddParticipantByUsername).od = function () {
    return this.studyId;
  };
  protoOf(AddParticipantByUsername).pd = function () {
    return this.username;
  };
  protoOf(AddParticipantByUsername).q2n = function (studyId, username) {
    return new AddParticipantByUsername(studyId, username);
  };
  protoOf(AddParticipantByUsername).copy = function (studyId, username, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    username = username === VOID ? this.username : username;
    return this.q2n(studyId, username);
  };
  protoOf(AddParticipantByUsername).toString = function () {
    return 'AddParticipantByUsername(studyId=' + this.studyId + ', username=' + this.username + ')';
  };
  protoOf(AddParticipantByUsername).hashCode = function () {
    var result = this.studyId.hashCode();
    result = imul(result, 31) + this.username.hashCode() | 0;
    return result;
  };
  protoOf(AddParticipantByUsername).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AddParticipantByUsername))
      return false;
    var tmp0_other_with_cast = other instanceof AddParticipantByUsername ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    if (!this.username.equals(tmp0_other_with_cast.username))
      return false;
    return true;
  };
  function GetParticipant(studyId, participantId) {
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
    this.participantId = participantId;
  }
  protoOf(GetParticipant).o2j = function () {
    return this.studyId;
  };
  protoOf(GetParticipant).h2g = function () {
    return this.participantId;
  };
  protoOf(GetParticipant).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Participant), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetParticipant).od = function () {
    return this.studyId;
  };
  protoOf(GetParticipant).pd = function () {
    return this.participantId;
  };
  protoOf(GetParticipant).r2n = function (studyId, participantId) {
    return new GetParticipant(studyId, participantId);
  };
  protoOf(GetParticipant).copy = function (studyId, participantId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    participantId = participantId === VOID ? this.participantId : participantId;
    return this.r2n(studyId, participantId);
  };
  protoOf(GetParticipant).toString = function () {
    return 'GetParticipant(studyId=' + this.studyId + ', participantId=' + this.participantId + ')';
  };
  protoOf(GetParticipant).hashCode = function () {
    var result = this.studyId.hashCode();
    result = imul(result, 31) + this.participantId.hashCode() | 0;
    return result;
  };
  protoOf(GetParticipant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetParticipant))
      return false;
    var tmp0_other_with_cast = other instanceof GetParticipant ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    if (!this.participantId.equals(tmp0_other_with_cast.participantId))
      return false;
    return true;
  };
  function GetParticipants(studyId) {
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(GetParticipants).o2j = function () {
    return this.studyId;
  };
  protoOf(GetParticipants).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Participant), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetParticipants).od = function () {
    return this.studyId;
  };
  protoOf(GetParticipants).f28 = function (studyId) {
    return new GetParticipants(studyId);
  };
  protoOf(GetParticipants).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return this.f28(studyId);
  };
  protoOf(GetParticipants).toString = function () {
    return 'GetParticipants(studyId=' + this.studyId + ')';
  };
  protoOf(GetParticipants).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(GetParticipants).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetParticipants))
      return false;
    var tmp0_other_with_cast = other instanceof GetParticipants ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    return true;
  };
  function InviteNewParticipantGroup(studyId, group) {
    Companion_getInstance_20();
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
    this.group = group;
  }
  protoOf(InviteNewParticipantGroup).o2j = function () {
    return this.studyId;
  };
  protoOf(InviteNewParticipantGroup).s2n = function () {
    return this.group;
  };
  protoOf(InviteNewParticipantGroup).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(ParticipantGroupStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(InviteNewParticipantGroup).od = function () {
    return this.studyId;
  };
  protoOf(InviteNewParticipantGroup).pd = function () {
    return this.group;
  };
  protoOf(InviteNewParticipantGroup).t2n = function (studyId, group) {
    return new InviteNewParticipantGroup(studyId, group);
  };
  protoOf(InviteNewParticipantGroup).copy = function (studyId, group, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    group = group === VOID ? this.group : group;
    return this.t2n(studyId, group);
  };
  protoOf(InviteNewParticipantGroup).toString = function () {
    return 'InviteNewParticipantGroup(studyId=' + this.studyId + ', group=' + this.group + ')';
  };
  protoOf(InviteNewParticipantGroup).hashCode = function () {
    var result = this.studyId.hashCode();
    result = imul(result, 31) + hashCode(this.group) | 0;
    return result;
  };
  protoOf(InviteNewParticipantGroup).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InviteNewParticipantGroup))
      return false;
    var tmp0_other_with_cast = other instanceof InviteNewParticipantGroup ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    if (!equals(this.group, tmp0_other_with_cast.group))
      return false;
    return true;
  };
  function GetParticipantGroupStatusList(studyId) {
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(GetParticipantGroupStatusList).o2j = function () {
    return this.studyId;
  };
  protoOf(GetParticipantGroupStatusList).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ParticipantGroupStatus), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetParticipantGroupStatusList).od = function () {
    return this.studyId;
  };
  protoOf(GetParticipantGroupStatusList).f28 = function (studyId) {
    return new GetParticipantGroupStatusList(studyId);
  };
  protoOf(GetParticipantGroupStatusList).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return this.f28(studyId);
  };
  protoOf(GetParticipantGroupStatusList).toString = function () {
    return 'GetParticipantGroupStatusList(studyId=' + this.studyId + ')';
  };
  protoOf(GetParticipantGroupStatusList).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(GetParticipantGroupStatusList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetParticipantGroupStatusList))
      return false;
    var tmp0_other_with_cast = other instanceof GetParticipantGroupStatusList ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    return true;
  };
  function StopParticipantGroup(studyId, groupId) {
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
    this.groupId = groupId;
  }
  protoOf(StopParticipantGroup).o2j = function () {
    return this.studyId;
  };
  protoOf(StopParticipantGroup).u2n = function () {
    return this.groupId;
  };
  protoOf(StopParticipantGroup).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(ParticipantGroupStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(StopParticipantGroup).od = function () {
    return this.studyId;
  };
  protoOf(StopParticipantGroup).pd = function () {
    return this.groupId;
  };
  protoOf(StopParticipantGroup).r2n = function (studyId, groupId) {
    return new StopParticipantGroup(studyId, groupId);
  };
  protoOf(StopParticipantGroup).copy = function (studyId, groupId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    groupId = groupId === VOID ? this.groupId : groupId;
    return this.r2n(studyId, groupId);
  };
  protoOf(StopParticipantGroup).toString = function () {
    return 'StopParticipantGroup(studyId=' + this.studyId + ', groupId=' + this.groupId + ')';
  };
  protoOf(StopParticipantGroup).hashCode = function () {
    var result = this.studyId.hashCode();
    result = imul(result, 31) + this.groupId.hashCode() | 0;
    return result;
  };
  protoOf(StopParticipantGroup).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StopParticipantGroup))
      return false;
    var tmp0_other_with_cast = other instanceof StopParticipantGroup ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    if (!this.groupId.equals(tmp0_other_with_cast.groupId))
      return false;
    return true;
  };
  function Companion_20() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.k2m_1 = lazy(tmp_0, RecruitmentServiceRequest$Companion$_anonymous__3j4vax);
  }
  protoOf(Companion_20).d1r = function (typeSerial0) {
    return _get_$cachedSerializer__te6jhj_2(this);
  };
  protoOf(Companion_20).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  var Companion_instance_21;
  function Companion_getInstance_23() {
    if (Companion_instance_21 == null)
      new Companion_20();
    return Companion_instance_21;
  }
  function RecruitmentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.p2n_1 = apiVersion;
    return $this;
  }
  function RecruitmentServiceRequest() {
    Companion_getInstance_23();
    ApplicationServiceRequest.call(this);
    this.p2n_1 = Companion_getInstance_2().l2j_1;
  }
  protoOf(RecruitmentServiceRequest).o22 = function () {
    return this.p2n_1;
  };
  function StudyServiceRequest$Companion$serializer$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.d1r(p0);
    };
    l.callableName = 'serializer';
    return l;
  }
  function Companion_21() {
  }
  protoOf(Companion_21).m16 = function () {
    return $serializer_getInstance_17();
  };
  var Companion_instance_22;
  function Companion_getInstance_24() {
    return Companion_instance_22;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.CreateStudy', this, 5);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('ownerId', false);
    tmp0_serialDesc.nt('name', false);
    tmp0_serialDesc.nt('description', true);
    tmp0_serialDesc.nt('invitation', true);
    this.w2n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).pi = function () {
    return this.w2n_1;
  };
  protoOf($serializer_15).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance())];
  };
  protoOf($serializer_15).ri = function (decoder) {
    var tmp0_desc = this.w2n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xl(tmp0_desc);
    if (tmp9_input.om()) {
      tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.hm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.lm(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.lm(tmp0_desc, 4, $serializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.hm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.lm(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.lm(tmp0_desc, 4, $serializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yl(tmp0_desc);
    return CreateStudy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_15).x2n = function (encoder, value) {
    var tmp0_desc = this.w2n_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.ownerId);
    tmp1_output.nn(tmp0_desc, 2, value.name);
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !(value.description == null)) {
      tmp1_output.rn(tmp0_desc, 3, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.vn(tmp0_desc, 4) ? true : !(value.invitation == null)) {
      tmp1_output.rn(tmp0_desc, 4, $serializer_getInstance(), value.invitation);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_15).qi = function (encoder, value) {
    return this.x2n(encoder, value instanceof CreateStudy ? value : THROW_CCE());
  };
  var $serializer_instance_15;
  function $serializer_getInstance_17() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function CreateStudy_init_$Init$(seen1, apiVersion, ownerId, name, description, invitation, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_17().w2n_1);
    }
    StudyServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.ownerId = ownerId;
    $this.name = name;
    if (0 === (seen1 & 8))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen1 & 16))
      $this.invitation = null;
    else
      $this.invitation = invitation;
    return $this;
  }
  function CreateStudy_init_$Create$(seen1, apiVersion, ownerId, name, description, invitation, serializationConstructorMarker) {
    return CreateStudy_init_$Init$(seen1, apiVersion, ownerId, name, description, invitation, serializationConstructorMarker, objectCreate(protoOf(CreateStudy)));
  }
  function Companion_22() {
  }
  protoOf(Companion_22).m16 = function () {
    return $serializer_getInstance_18();
  };
  var Companion_instance_23;
  function Companion_getInstance_25() {
    return Companion_instance_23;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.SetInternalDescription', this, 4);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    tmp0_serialDesc.nt('name', false);
    tmp0_serialDesc.nt('description', false);
    this.z2n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).pi = function () {
    return this.z2n_1;
  };
  protoOf($serializer_16).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_16).ri = function (decoder) {
    var tmp0_desc = this.z2n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.hm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.lm(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.hm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.lm(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return SetInternalDescription_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_16).a2o = function (encoder, value) {
    var tmp0_desc = this.z2n_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.nn(tmp0_desc, 2, value.name);
    tmp1_output.rn(tmp0_desc, 3, StringSerializer_getInstance(), value.description);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_16).qi = function (encoder, value) {
    return this.a2o(encoder, value instanceof SetInternalDescription ? value : THROW_CCE());
  };
  var $serializer_instance_16;
  function $serializer_getInstance_18() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function SetInternalDescription_init_$Init$(seen1, apiVersion, studyId, name, description, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_18().z2n_1);
    }
    StudyServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.name = name;
    $this.description = description;
    return $this;
  }
  function SetInternalDescription_init_$Create$(seen1, apiVersion, studyId, name, description, serializationConstructorMarker) {
    return SetInternalDescription_init_$Init$(seen1, apiVersion, studyId, name, description, serializationConstructorMarker, objectCreate(protoOf(SetInternalDescription)));
  }
  function Companion_23() {
  }
  protoOf(Companion_23).m16 = function () {
    return $serializer_getInstance_19();
  };
  var Companion_instance_24;
  function Companion_getInstance_26() {
    return Companion_instance_24;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.GetStudyDetails', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    this.c2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).pi = function () {
    return this.c2o_1;
  };
  protoOf($serializer_17).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_17).ri = function (decoder) {
    var tmp0_desc = this.c2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return GetStudyDetails_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_17).d2o = function (encoder, value) {
    var tmp0_desc = this.c2o_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_17).qi = function (encoder, value) {
    return this.d2o(encoder, value instanceof GetStudyDetails ? value : THROW_CCE());
  };
  var $serializer_instance_17;
  function $serializer_getInstance_19() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function GetStudyDetails_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_19().c2o_1);
    }
    StudyServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function GetStudyDetails_init_$Create$(seen1, apiVersion, studyId, serializationConstructorMarker) {
    return GetStudyDetails_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(GetStudyDetails)));
  }
  function Companion_24() {
  }
  protoOf(Companion_24).m16 = function () {
    return $serializer_getInstance_20();
  };
  var Companion_instance_25;
  function Companion_getInstance_27() {
    return Companion_instance_25;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.GetStudyStatus', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    this.f2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).pi = function () {
    return this.f2o_1;
  };
  protoOf($serializer_18).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_18).ri = function (decoder) {
    var tmp0_desc = this.f2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return GetStudyStatus_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_18).g2o = function (encoder, value) {
    var tmp0_desc = this.f2o_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_18).qi = function (encoder, value) {
    return this.g2o(encoder, value instanceof GetStudyStatus ? value : THROW_CCE());
  };
  var $serializer_instance_18;
  function $serializer_getInstance_20() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function GetStudyStatus_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_20().f2o_1);
    }
    StudyServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function GetStudyStatus_init_$Create$(seen1, apiVersion, studyId, serializationConstructorMarker) {
    return GetStudyStatus_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(GetStudyStatus)));
  }
  function Companion_25() {
  }
  protoOf(Companion_25).m16 = function () {
    return $serializer_getInstance_21();
  };
  var Companion_instance_26;
  function Companion_getInstance_28() {
    return Companion_instance_26;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.GetStudiesOverview', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('ownerId', false);
    this.i2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).pi = function () {
    return this.i2o_1;
  };
  protoOf($serializer_19).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_19).ri = function (decoder) {
    var tmp0_desc = this.i2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return GetStudiesOverview_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_19).j2o = function (encoder, value) {
    var tmp0_desc = this.i2o_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.ownerId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_19).qi = function (encoder, value) {
    return this.j2o(encoder, value instanceof GetStudiesOverview ? value : THROW_CCE());
  };
  var $serializer_instance_19;
  function $serializer_getInstance_21() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function GetStudiesOverview_init_$Init$(seen1, apiVersion, ownerId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_21().i2o_1);
    }
    StudyServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.ownerId = ownerId;
    return $this;
  }
  function GetStudiesOverview_init_$Create$(seen1, apiVersion, ownerId, serializationConstructorMarker) {
    return GetStudiesOverview_init_$Init$(seen1, apiVersion, ownerId, serializationConstructorMarker, objectCreate(protoOf(GetStudiesOverview)));
  }
  function Companion_26() {
  }
  protoOf(Companion_26).m16 = function () {
    return $serializer_getInstance_22();
  };
  var Companion_instance_27;
  function Companion_getInstance_29() {
    return Companion_instance_27;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.SetInvitation', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    tmp0_serialDesc.nt('invitation', false);
    this.l2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).pi = function () {
    return this.l2o_1;
  };
  protoOf($serializer_20).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), $serializer_getInstance()];
  };
  protoOf($serializer_20).ri = function (decoder) {
    var tmp0_desc = this.l2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, $serializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, $serializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return SetInvitation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_20).m2o = function (encoder, value) {
    var tmp0_desc = this.l2o_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.pn(tmp0_desc, 2, $serializer_getInstance(), value.invitation);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_20).qi = function (encoder, value) {
    return this.m2o(encoder, value instanceof SetInvitation ? value : THROW_CCE());
  };
  var $serializer_instance_20;
  function $serializer_getInstance_22() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function SetInvitation_init_$Init$(seen1, apiVersion, studyId, invitation, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_22().l2o_1);
    }
    StudyServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.invitation = invitation;
    return $this;
  }
  function SetInvitation_init_$Create$(seen1, apiVersion, studyId, invitation, serializationConstructorMarker) {
    return SetInvitation_init_$Init$(seen1, apiVersion, studyId, invitation, serializationConstructorMarker, objectCreate(protoOf(SetInvitation)));
  }
  function Companion_27() {
  }
  protoOf(Companion_27).m16 = function () {
    return $serializer_getInstance_23();
  };
  var Companion_instance_28;
  function Companion_getInstance_30() {
    return Companion_instance_28;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.SetProtocol', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    tmp0_serialDesc.nt('protocol', false);
    this.o2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).pi = function () {
    return this.o2o_1;
  };
  protoOf($serializer_21).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), $serializer_getInstance_0()];
  };
  protoOf($serializer_21).ri = function (decoder) {
    var tmp0_desc = this.o2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, $serializer_getInstance_0(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, $serializer_getInstance_0(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return SetProtocol_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_21).p2o = function (encoder, value) {
    var tmp0_desc = this.o2o_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.pn(tmp0_desc, 2, $serializer_getInstance_0(), value.protocol);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_21).qi = function (encoder, value) {
    return this.p2o(encoder, value instanceof SetProtocol ? value : THROW_CCE());
  };
  var $serializer_instance_21;
  function $serializer_getInstance_23() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function SetProtocol_init_$Init$(seen1, apiVersion, studyId, protocol, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_23().o2o_1);
    }
    StudyServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.protocol = protocol;
    return $this;
  }
  function SetProtocol_init_$Create$(seen1, apiVersion, studyId, protocol, serializationConstructorMarker) {
    return SetProtocol_init_$Init$(seen1, apiVersion, studyId, protocol, serializationConstructorMarker, objectCreate(protoOf(SetProtocol)));
  }
  function Companion_28() {
  }
  protoOf(Companion_28).m16 = function () {
    return $serializer_getInstance_24();
  };
  var Companion_instance_29;
  function Companion_getInstance_31() {
    return Companion_instance_29;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.RemoveProtocol', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    this.r2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).pi = function () {
    return this.r2o_1;
  };
  protoOf($serializer_22).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_22).ri = function (decoder) {
    var tmp0_desc = this.r2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return RemoveProtocol_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_22).s2o = function (encoder, value) {
    var tmp0_desc = this.r2o_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_22).qi = function (encoder, value) {
    return this.s2o(encoder, value instanceof RemoveProtocol ? value : THROW_CCE());
  };
  var $serializer_instance_22;
  function $serializer_getInstance_24() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function RemoveProtocol_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_24().r2o_1);
    }
    StudyServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function RemoveProtocol_init_$Create$(seen1, apiVersion, studyId, serializationConstructorMarker) {
    return RemoveProtocol_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(RemoveProtocol)));
  }
  function Companion_29() {
  }
  protoOf(Companion_29).m16 = function () {
    return $serializer_getInstance_25();
  };
  var Companion_instance_30;
  function Companion_getInstance_32() {
    return Companion_instance_30;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.GoLive', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    this.u2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).pi = function () {
    return this.u2o_1;
  };
  protoOf($serializer_23).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_23).ri = function (decoder) {
    var tmp0_desc = this.u2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return GoLive_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_23).v2o = function (encoder, value) {
    var tmp0_desc = this.u2o_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_23).qi = function (encoder, value) {
    return this.v2o(encoder, value instanceof GoLive ? value : THROW_CCE());
  };
  var $serializer_instance_23;
  function $serializer_getInstance_25() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function GoLive_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_25().u2o_1);
    }
    StudyServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function GoLive_init_$Create$(seen1, apiVersion, studyId, serializationConstructorMarker) {
    return GoLive_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(GoLive)));
  }
  function Companion_30() {
  }
  protoOf(Companion_30).m16 = function () {
    return $serializer_getInstance_26();
  };
  var Companion_instance_31;
  function Companion_getInstance_33() {
    return Companion_instance_31;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.Remove', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyId', false);
    this.x2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).pi = function () {
    return this.x2o_1;
  };
  protoOf($serializer_24).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_24).ri = function (decoder) {
    var tmp0_desc = this.x2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return Remove_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_24).y2o = function (encoder, value) {
    var tmp0_desc = this.x2o_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_24).qi = function (encoder, value) {
    return this.y2o(encoder, value instanceof Remove ? value : THROW_CCE());
  };
  var $serializer_instance_24;
  function $serializer_getInstance_26() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function Remove_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_26().x2o_1);
    }
    StudyServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function Remove_init_$Create$(seen1, apiVersion, studyId, serializationConstructorMarker) {
    return Remove_init_$Init$(seen1, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(Remove)));
  }
  function _get_$cachedSerializer__te6jhj_3($this) {
    return $this.v2n_1.r2();
  }
  function StudyServiceRequest$Companion$_anonymous__9tlrg4() {
    var tmp = getKClass(StudyServiceRequest);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(CreateStudy), getKClass(GetStudiesOverview), getKClass(GetStudyDetails), getKClass(GetStudyStatus), getKClass(GoLive), getKClass(Remove), getKClass(RemoveProtocol), getKClass(SetInternalDescription), getKClass(SetInvitation), getKClass(SetProtocol)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_17(), $serializer_getInstance_21(), $serializer_getInstance_19(), $serializer_getInstance_20(), $serializer_getInstance_25(), $serializer_getInstance_26(), $serializer_getInstance_24(), $serializer_getInstance_18(), $serializer_getInstance_22(), $serializer_getInstance_23()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.studies.infrastructure.StudyServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Serializer_0() {
    Serializer_instance_0 = this;
    var tmp = this;
    tmp.a2p_1 = ignoreTypeParameters(StudyServiceRequest$Companion$serializer$ref(Companion_getInstance_34()));
  }
  protoOf(Serializer_0).pi = function () {
    return this.a2p_1.pi();
  };
  protoOf(Serializer_0).ri = function (decoder) {
    return this.a2p_1.ri(decoder);
  };
  protoOf(Serializer_0).b2p = function (encoder, value) {
    this.a2p_1.qi(encoder, value);
  };
  protoOf(Serializer_0).qi = function (encoder, value) {
    return this.b2p(encoder, value instanceof StudyServiceRequest ? value : THROW_CCE());
  };
  var Serializer_instance_0;
  function Serializer_getInstance_0() {
    if (Serializer_instance_0 == null)
      new Serializer_0();
    return Serializer_instance_0;
  }
  function CreateStudy(ownerId, name, description, invitation) {
    description = description === VOID ? null : description;
    invitation = invitation === VOID ? null : invitation;
    StudyServiceRequest.call(this);
    this.ownerId = ownerId;
    this.name = name;
    this.description = description;
    this.invitation = invitation;
  }
  protoOf(CreateStudy).q24 = function () {
    return this.ownerId;
  };
  protoOf(CreateStudy).ra = function () {
    return this.name;
  };
  protoOf(CreateStudy).o1u = function () {
    return this.description;
  };
  protoOf(CreateStudy).o2f = function () {
    return this.invitation;
  };
  protoOf(CreateStudy).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(CreateStudy).od = function () {
    return this.ownerId;
  };
  protoOf(CreateStudy).pd = function () {
    return this.name;
  };
  protoOf(CreateStudy).r1g = function () {
    return this.description;
  };
  protoOf(CreateStudy).q1h = function () {
    return this.invitation;
  };
  protoOf(CreateStudy).c2p = function (ownerId, name, description, invitation) {
    return new CreateStudy(ownerId, name, description, invitation);
  };
  protoOf(CreateStudy).copy = function (ownerId, name, description, invitation, $super) {
    ownerId = ownerId === VOID ? this.ownerId : ownerId;
    name = name === VOID ? this.name : name;
    description = description === VOID ? this.description : description;
    invitation = invitation === VOID ? this.invitation : invitation;
    return this.c2p(ownerId, name, description, invitation);
  };
  protoOf(CreateStudy).toString = function () {
    return 'CreateStudy(ownerId=' + this.ownerId + ', name=' + this.name + ', description=' + this.description + ', invitation=' + this.invitation + ')';
  };
  protoOf(CreateStudy).hashCode = function () {
    var result = this.ownerId.hashCode();
    result = imul(result, 31) + getStringHashCode(this.name) | 0;
    result = imul(result, 31) + (this.description == null ? 0 : getStringHashCode(this.description)) | 0;
    result = imul(result, 31) + (this.invitation == null ? 0 : this.invitation.hashCode()) | 0;
    return result;
  };
  protoOf(CreateStudy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateStudy))
      return false;
    var tmp0_other_with_cast = other instanceof CreateStudy ? other : THROW_CCE();
    if (!this.ownerId.equals(tmp0_other_with_cast.ownerId))
      return false;
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    if (!(this.description == tmp0_other_with_cast.description))
      return false;
    if (!equals(this.invitation, tmp0_other_with_cast.invitation))
      return false;
    return true;
  };
  function SetInternalDescription(studyId, name, description) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
    this.name = name;
    this.description = description;
  }
  protoOf(SetInternalDescription).o2j = function () {
    return this.studyId;
  };
  protoOf(SetInternalDescription).ra = function () {
    return this.name;
  };
  protoOf(SetInternalDescription).o1u = function () {
    return this.description;
  };
  protoOf(SetInternalDescription).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(SetInternalDescription).od = function () {
    return this.studyId;
  };
  protoOf(SetInternalDescription).pd = function () {
    return this.name;
  };
  protoOf(SetInternalDescription).r1g = function () {
    return this.description;
  };
  protoOf(SetInternalDescription).e2p = function (studyId, name, description) {
    return new SetInternalDescription(studyId, name, description);
  };
  protoOf(SetInternalDescription).copy = function (studyId, name, description, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    name = name === VOID ? this.name : name;
    description = description === VOID ? this.description : description;
    return this.e2p(studyId, name, description);
  };
  protoOf(SetInternalDescription).toString = function () {
    return 'SetInternalDescription(studyId=' + this.studyId + ', name=' + this.name + ', description=' + this.description + ')';
  };
  protoOf(SetInternalDescription).hashCode = function () {
    var result = this.studyId.hashCode();
    result = imul(result, 31) + getStringHashCode(this.name) | 0;
    result = imul(result, 31) + (this.description == null ? 0 : getStringHashCode(this.description)) | 0;
    return result;
  };
  protoOf(SetInternalDescription).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetInternalDescription))
      return false;
    var tmp0_other_with_cast = other instanceof SetInternalDescription ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    if (!(this.description == tmp0_other_with_cast.description))
      return false;
    return true;
  };
  function GetStudyDetails(studyId) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(GetStudyDetails).o2j = function () {
    return this.studyId;
  };
  protoOf(GetStudyDetails).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDetails), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetStudyDetails).od = function () {
    return this.studyId;
  };
  protoOf(GetStudyDetails).f28 = function (studyId) {
    return new GetStudyDetails(studyId);
  };
  protoOf(GetStudyDetails).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return this.f28(studyId);
  };
  protoOf(GetStudyDetails).toString = function () {
    return 'GetStudyDetails(studyId=' + this.studyId + ')';
  };
  protoOf(GetStudyDetails).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(GetStudyDetails).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetStudyDetails))
      return false;
    var tmp0_other_with_cast = other instanceof GetStudyDetails ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    return true;
  };
  function GetStudyStatus(studyId) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(GetStudyStatus).o2j = function () {
    return this.studyId;
  };
  protoOf(GetStudyStatus).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetStudyStatus).od = function () {
    return this.studyId;
  };
  protoOf(GetStudyStatus).f28 = function (studyId) {
    return new GetStudyStatus(studyId);
  };
  protoOf(GetStudyStatus).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return this.f28(studyId);
  };
  protoOf(GetStudyStatus).toString = function () {
    return 'GetStudyStatus(studyId=' + this.studyId + ')';
  };
  protoOf(GetStudyStatus).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(GetStudyStatus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetStudyStatus))
      return false;
    var tmp0_other_with_cast = other instanceof GetStudyStatus ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    return true;
  };
  function GetStudiesOverview(ownerId) {
    StudyServiceRequest.call(this);
    this.ownerId = ownerId;
  }
  protoOf(GetStudiesOverview).q24 = function () {
    return this.ownerId;
  };
  protoOf(GetStudiesOverview).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(StudyStatus), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetStudiesOverview).od = function () {
    return this.ownerId;
  };
  protoOf(GetStudiesOverview).f28 = function (ownerId) {
    return new GetStudiesOverview(ownerId);
  };
  protoOf(GetStudiesOverview).copy = function (ownerId, $super) {
    ownerId = ownerId === VOID ? this.ownerId : ownerId;
    return this.f28(ownerId);
  };
  protoOf(GetStudiesOverview).toString = function () {
    return 'GetStudiesOverview(ownerId=' + this.ownerId + ')';
  };
  protoOf(GetStudiesOverview).hashCode = function () {
    return this.ownerId.hashCode();
  };
  protoOf(GetStudiesOverview).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetStudiesOverview))
      return false;
    var tmp0_other_with_cast = other instanceof GetStudiesOverview ? other : THROW_CCE();
    if (!this.ownerId.equals(tmp0_other_with_cast.ownerId))
      return false;
    return true;
  };
  function SetInvitation(studyId, invitation) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
    this.invitation = invitation;
  }
  protoOf(SetInvitation).o2j = function () {
    return this.studyId;
  };
  protoOf(SetInvitation).o2f = function () {
    return this.invitation;
  };
  protoOf(SetInvitation).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(SetInvitation).od = function () {
    return this.studyId;
  };
  protoOf(SetInvitation).pd = function () {
    return this.invitation;
  };
  protoOf(SetInvitation).f2p = function (studyId, invitation) {
    return new SetInvitation(studyId, invitation);
  };
  protoOf(SetInvitation).copy = function (studyId, invitation, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    invitation = invitation === VOID ? this.invitation : invitation;
    return this.f2p(studyId, invitation);
  };
  protoOf(SetInvitation).toString = function () {
    return 'SetInvitation(studyId=' + this.studyId + ', invitation=' + this.invitation + ')';
  };
  protoOf(SetInvitation).hashCode = function () {
    var result = this.studyId.hashCode();
    result = imul(result, 31) + this.invitation.hashCode() | 0;
    return result;
  };
  protoOf(SetInvitation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetInvitation))
      return false;
    var tmp0_other_with_cast = other instanceof SetInvitation ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    if (!this.invitation.equals(tmp0_other_with_cast.invitation))
      return false;
    return true;
  };
  function SetProtocol(studyId, protocol) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
    this.protocol = protocol;
  }
  protoOf(SetProtocol).o2j = function () {
    return this.studyId;
  };
  protoOf(SetProtocol).y27 = function () {
    return this.protocol;
  };
  protoOf(SetProtocol).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(SetProtocol).od = function () {
    return this.studyId;
  };
  protoOf(SetProtocol).pd = function () {
    return this.protocol;
  };
  protoOf(SetProtocol).g2p = function (studyId, protocol) {
    return new SetProtocol(studyId, protocol);
  };
  protoOf(SetProtocol).copy = function (studyId, protocol, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    protocol = protocol === VOID ? this.protocol : protocol;
    return this.g2p(studyId, protocol);
  };
  protoOf(SetProtocol).toString = function () {
    return 'SetProtocol(studyId=' + this.studyId + ', protocol=' + this.protocol + ')';
  };
  protoOf(SetProtocol).hashCode = function () {
    var result = this.studyId.hashCode();
    result = imul(result, 31) + this.protocol.hashCode() | 0;
    return result;
  };
  protoOf(SetProtocol).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetProtocol))
      return false;
    var tmp0_other_with_cast = other instanceof SetProtocol ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    if (!this.protocol.equals(tmp0_other_with_cast.protocol))
      return false;
    return true;
  };
  function RemoveProtocol(studyId) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(RemoveProtocol).o2j = function () {
    return this.studyId;
  };
  protoOf(RemoveProtocol).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(RemoveProtocol).od = function () {
    return this.studyId;
  };
  protoOf(RemoveProtocol).f28 = function (studyId) {
    return new RemoveProtocol(studyId);
  };
  protoOf(RemoveProtocol).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return this.f28(studyId);
  };
  protoOf(RemoveProtocol).toString = function () {
    return 'RemoveProtocol(studyId=' + this.studyId + ')';
  };
  protoOf(RemoveProtocol).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(RemoveProtocol).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RemoveProtocol))
      return false;
    var tmp0_other_with_cast = other instanceof RemoveProtocol ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    return true;
  };
  function GoLive(studyId) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(GoLive).o2j = function () {
    return this.studyId;
  };
  protoOf(GoLive).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GoLive).od = function () {
    return this.studyId;
  };
  protoOf(GoLive).f28 = function (studyId) {
    return new GoLive(studyId);
  };
  protoOf(GoLive).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return this.f28(studyId);
  };
  protoOf(GoLive).toString = function () {
    return 'GoLive(studyId=' + this.studyId + ')';
  };
  protoOf(GoLive).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(GoLive).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GoLive))
      return false;
    var tmp0_other_with_cast = other instanceof GoLive ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    return true;
  };
  function Remove(studyId) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(Remove).o2j = function () {
    return this.studyId;
  };
  protoOf(Remove).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(PrimitiveClasses_getInstance().c7(), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(Remove).od = function () {
    return this.studyId;
  };
  protoOf(Remove).f28 = function (studyId) {
    return new Remove(studyId);
  };
  protoOf(Remove).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return this.f28(studyId);
  };
  protoOf(Remove).toString = function () {
    return 'Remove(studyId=' + this.studyId + ')';
  };
  protoOf(Remove).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(Remove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Remove))
      return false;
    var tmp0_other_with_cast = other instanceof Remove ? other : THROW_CCE();
    if (!this.studyId.equals(tmp0_other_with_cast.studyId))
      return false;
    return true;
  };
  function Companion_31() {
    Companion_instance_32 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v2n_1 = lazy(tmp_0, StudyServiceRequest$Companion$_anonymous__9tlrg4);
  }
  protoOf(Companion_31).d1r = function (typeSerial0) {
    return _get_$cachedSerializer__te6jhj_3(this);
  };
  protoOf(Companion_31).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  var Companion_instance_32;
  function Companion_getInstance_34() {
    if (Companion_instance_32 == null)
      new Companion_31();
    return Companion_instance_32;
  }
  function StudyServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.d2p_1 = apiVersion;
    return $this;
  }
  function StudyServiceRequest() {
    Companion_getInstance_34();
    ApplicationServiceRequest.call(this);
    this.d2p_1 = Companion_getInstance_4().r2j_1;
  }
  protoOf(StudyServiceRequest).o22 = function () {
    return this.d2p_1;
  };
  //region block: post-declaration
  protoOf($serializer).du = typeParametersSerializers;
  protoOf($serializer_0).du = typeParametersSerializers;
  protoOf($serializer_1).du = typeParametersSerializers;
  defineProp(protoOf(StudyStatus), 'studyId', function () {
    return this.o2j();
  });
  defineProp(protoOf(StudyStatus), 'name', function () {
    return this.ra();
  });
  defineProp(protoOf(StudyStatus), 'createdOn', function () {
    return this.a1z();
  });
  defineProp(protoOf(StudyStatus), 'studyProtocolId', function () {
    return this.l2k();
  });
  defineProp(protoOf(StudyStatus), 'canSetInvitation', function () {
    return this.m2k();
  });
  defineProp(protoOf(StudyStatus), 'canSetStudyProtocol', function () {
    return this.n2k();
  });
  defineProp(protoOf(StudyStatus), 'canDeployToParticipants', function () {
    return this.o2k();
  });
  protoOf($serializer_2).du = typeParametersSerializers;
  protoOf($serializer_3).du = typeParametersSerializers;
  protoOf($serializer_4).du = typeParametersSerializers;
  protoOf($serializer_5).du = typeParametersSerializers;
  protoOf($serializer_6).du = typeParametersSerializers;
  protoOf($serializer_7).du = typeParametersSerializers;
  defineProp(protoOf(ParticipantGroupStatus), 'id', function () {
    return this.z1y();
  });
  defineProp(protoOf(ParticipantGroupStatus), 'participants', function () {
    return this.d2m();
  });
  defineProp(protoOf(InDeployment), 'invitedOn', function () {
    return this.f2m();
  });
  defineProp(protoOf(InDeployment), 'studyDeploymentStatus', function () {
    return this.g2m();
  });
  protoOf($serializer_8).du = typeParametersSerializers;
  protoOf($serializer_9).du = typeParametersSerializers;
  protoOf($serializer_10).du = typeParametersSerializers;
  protoOf($serializer_11).du = typeParametersSerializers;
  protoOf($serializer_12).du = typeParametersSerializers;
  protoOf($serializer_13).du = typeParametersSerializers;
  protoOf($serializer_14).du = typeParametersSerializers;
  protoOf($serializer_15).du = typeParametersSerializers;
  protoOf($serializer_16).du = typeParametersSerializers;
  protoOf($serializer_17).du = typeParametersSerializers;
  protoOf($serializer_18).du = typeParametersSerializers;
  protoOf($serializer_19).du = typeParametersSerializers;
  protoOf($serializer_20).du = typeParametersSerializers;
  protoOf($serializer_21).du = typeParametersSerializers;
  protoOf($serializer_22).du = typeParametersSerializers;
  protoOf($serializer_23).du = typeParametersSerializers;
  protoOf($serializer_24).du = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_14 = new Companion_13();
  Companion_instance_15 = new Companion_14();
  Companion_instance_16 = new Companion_15();
  Companion_instance_17 = new Companion_16();
  Companion_instance_19 = new Companion_18();
  Companion_instance_20 = new Companion_19();
  Companion_instance_22 = new Companion_21();
  Companion_instance_23 = new Companion_22();
  Companion_instance_24 = new Companion_23();
  Companion_instance_25 = new Companion_24();
  Companion_instance_26 = new Companion_25();
  Companion_instance_27 = new Companion_26();
  Companion_instance_28 = new Companion_27();
  Companion_instance_29 = new Companion_28();
  Companion_instance_30 = new Companion_29();
  Companion_instance_31 = new Companion_30();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$studies = $dk$cachet$carp.studies || ($dk$cachet$carp.studies = {});
    var $dk$cachet$carp$studies$application = $dk$cachet$carp$studies.application || ($dk$cachet$carp$studies.application = {});
    $dk$cachet$carp$studies$application.StudyDetails = StudyDetails;
    defineProp($dk$cachet$carp$studies$application.StudyDetails, 'Companion', Companion_getInstance_3);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$studies = $dk$cachet$carp.studies || ($dk$cachet$carp.studies = {});
    var $dk$cachet$carp$studies$application = $dk$cachet$carp$studies.application || ($dk$cachet$carp$studies.application = {});
    $dk$cachet$carp$studies$application.StudyStatus = StudyStatus;
    $dk$cachet$carp$studies$application.StudyStatus.Configuring = Configuring;
    defineProp($dk$cachet$carp$studies$application.StudyStatus.Configuring, 'Companion', Companion_getInstance_5);
    $dk$cachet$carp$studies$application.StudyStatus.Live = Live;
    defineProp($dk$cachet$carp$studies$application.StudyStatus.Live, 'Companion', Companion_getInstance_6);
    defineProp($dk$cachet$carp$studies$application.StudyStatus, 'Companion', Companion_getInstance_7);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$studies = $dk$cachet$carp.studies || ($dk$cachet$carp.studies = {});
    var $dk$cachet$carp$studies$application = $dk$cachet$carp$studies.application || ($dk$cachet$carp$studies.application = {});
    var $dk$cachet$carp$studies$application$users = $dk$cachet$carp$studies$application.users || ($dk$cachet$carp$studies$application.users = {});
    $dk$cachet$carp$studies$application$users.AssignedParticipantRoles = AssignedParticipantRoles;
    defineProp($dk$cachet$carp$studies$application$users.AssignedParticipantRoles, 'Companion', Companion_getInstance_8);
    $dk$cachet$carp$studies$application$users.participantIds = participantIds;
    $dk$cachet$carp$studies$application$users.participantRoles = participantRoles;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$studies = $dk$cachet$carp.studies || ($dk$cachet$carp.studies = {});
    var $dk$cachet$carp$studies$application = $dk$cachet$carp$studies.application || ($dk$cachet$carp$studies.application = {});
    var $dk$cachet$carp$studies$application$users = $dk$cachet$carp$studies$application.users || ($dk$cachet$carp$studies$application.users = {});
    $dk$cachet$carp$studies$application$users.Participant = Participant;
    defineProp($dk$cachet$carp$studies$application$users.Participant, 'Companion', Companion_getInstance_9);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$studies = $dk$cachet$carp.studies || ($dk$cachet$carp.studies = {});
    var $dk$cachet$carp$studies$application = $dk$cachet$carp$studies.application || ($dk$cachet$carp$studies.application = {});
    var $dk$cachet$carp$studies$application$users = $dk$cachet$carp$studies$application.users || ($dk$cachet$carp$studies$application.users = {});
    $dk$cachet$carp$studies$application$users.ParticipantGroupStatus = ParticipantGroupStatus;
    $dk$cachet$carp$studies$application$users.ParticipantGroupStatus.Staged = Staged;
    defineProp($dk$cachet$carp$studies$application$users.ParticipantGroupStatus.Staged, 'Companion', Companion_getInstance_10);
    $dk$cachet$carp$studies$application$users.ParticipantGroupStatus.InDeployment = InDeployment;
    defineProp($dk$cachet$carp$studies$application$users.ParticipantGroupStatus.InDeployment, 'Companion', Companion_getInstance_11);
    $dk$cachet$carp$studies$application$users.ParticipantGroupStatus.Invited = Invited_0;
    defineProp($dk$cachet$carp$studies$application$users.ParticipantGroupStatus.Invited, 'Companion', Companion_getInstance_12);
    $dk$cachet$carp$studies$application$users.ParticipantGroupStatus.Running = Running_0;
    defineProp($dk$cachet$carp$studies$application$users.ParticipantGroupStatus.Running, 'Companion', Companion_getInstance_13);
    $dk$cachet$carp$studies$application$users.ParticipantGroupStatus.Stopped = Stopped_0;
    defineProp($dk$cachet$carp$studies$application$users.ParticipantGroupStatus.Stopped, 'Companion', Companion_getInstance_14);
    defineProp($dk$cachet$carp$studies$application$users.ParticipantGroupStatus, 'Companion', Companion_getInstance_15);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$studies = $dk$cachet$carp.studies || ($dk$cachet$carp.studies = {});
    var $dk$cachet$carp$studies$infrastructure = $dk$cachet$carp$studies.infrastructure || ($dk$cachet$carp$studies.infrastructure = {});
    $dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest = RecruitmentServiceRequest;
    defineProp($dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest, 'Serializer', Serializer_getInstance);
    $dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.AddParticipantByEmailAddress = AddParticipantByEmailAddress;
    defineProp($dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.AddParticipantByEmailAddress, 'Companion', Companion_getInstance_16);
    $dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.AddParticipantByUsername = AddParticipantByUsername;
    defineProp($dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.AddParticipantByUsername, 'Companion', Companion_getInstance_17);
    $dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.GetParticipant = GetParticipant;
    defineProp($dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.GetParticipant, 'Companion', Companion_getInstance_18);
    $dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.GetParticipants = GetParticipants;
    defineProp($dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.GetParticipants, 'Companion', Companion_getInstance_19);
    $dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.InviteNewParticipantGroup = InviteNewParticipantGroup;
    defineProp($dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.InviteNewParticipantGroup, 'Companion', Companion_getInstance_20);
    $dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.GetParticipantGroupStatusList = GetParticipantGroupStatusList;
    defineProp($dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.GetParticipantGroupStatusList, 'Companion', Companion_getInstance_21);
    $dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.StopParticipantGroup = StopParticipantGroup;
    defineProp($dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest.StopParticipantGroup, 'Companion', Companion_getInstance_22);
    defineProp($dk$cachet$carp$studies$infrastructure.RecruitmentServiceRequest, 'Companion', Companion_getInstance_23);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$studies = $dk$cachet$carp.studies || ($dk$cachet$carp.studies = {});
    var $dk$cachet$carp$studies$infrastructure = $dk$cachet$carp$studies.infrastructure || ($dk$cachet$carp$studies.infrastructure = {});
    $dk$cachet$carp$studies$infrastructure.StudyServiceRequest = StudyServiceRequest;
    defineProp($dk$cachet$carp$studies$infrastructure.StudyServiceRequest, 'Serializer', Serializer_getInstance_0);
    $dk$cachet$carp$studies$infrastructure.StudyServiceRequest.CreateStudy = CreateStudy;
    defineProp($dk$cachet$carp$studies$infrastructure.StudyServiceRequest.CreateStudy, 'Companion', Companion_getInstance_24);
    $dk$cachet$carp$studies$infrastructure.StudyServiceRequest.SetInternalDescription = SetInternalDescription;
    defineProp($dk$cachet$carp$studies$infrastructure.StudyServiceRequest.SetInternalDescription, 'Companion', Companion_getInstance_25);
    $dk$cachet$carp$studies$infrastructure.StudyServiceRequest.GetStudyDetails = GetStudyDetails;
    defineProp($dk$cachet$carp$studies$infrastructure.StudyServiceRequest.GetStudyDetails, 'Companion', Companion_getInstance_26);
    $dk$cachet$carp$studies$infrastructure.StudyServiceRequest.GetStudyStatus = GetStudyStatus;
    defineProp($dk$cachet$carp$studies$infrastructure.StudyServiceRequest.GetStudyStatus, 'Companion', Companion_getInstance_27);
    $dk$cachet$carp$studies$infrastructure.StudyServiceRequest.GetStudiesOverview = GetStudiesOverview;
    defineProp($dk$cachet$carp$studies$infrastructure.StudyServiceRequest.GetStudiesOverview, 'Companion', Companion_getInstance_28);
    $dk$cachet$carp$studies$infrastructure.StudyServiceRequest.SetInvitation = SetInvitation;
    defineProp($dk$cachet$carp$studies$infrastructure.StudyServiceRequest.SetInvitation, 'Companion', Companion_getInstance_29);
    $dk$cachet$carp$studies$infrastructure.StudyServiceRequest.SetProtocol = SetProtocol;
    defineProp($dk$cachet$carp$studies$infrastructure.StudyServiceRequest.SetProtocol, 'Companion', Companion_getInstance_30);
    $dk$cachet$carp$studies$infrastructure.StudyServiceRequest.RemoveProtocol = RemoveProtocol;
    defineProp($dk$cachet$carp$studies$infrastructure.StudyServiceRequest.RemoveProtocol, 'Companion', Companion_getInstance_31);
    $dk$cachet$carp$studies$infrastructure.StudyServiceRequest.GoLive = GoLive;
    defineProp($dk$cachet$carp$studies$infrastructure.StudyServiceRequest.GoLive, 'Companion', Companion_getInstance_32);
    $dk$cachet$carp$studies$infrastructure.StudyServiceRequest.Remove = Remove;
    defineProp($dk$cachet$carp$studies$infrastructure.StudyServiceRequest.Remove, 'Companion', Companion_getInstance_33);
    defineProp($dk$cachet$carp$studies$infrastructure.StudyServiceRequest, 'Companion', Companion_getInstance_34);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=carp-studies-core-generated.js.map
