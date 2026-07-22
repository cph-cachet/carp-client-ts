(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@cachet/carp-common-generated', '@cachet/kotlin-kotlin-stdlib', '@cachet/kotlinx-serialization-kotlinx-serialization-core', '@cachet/carp-deployments-core-generated', '@cachet/carp-protocols-core-generated'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@cachet/carp-common-generated'), require('@cachet/kotlin-kotlin-stdlib'), require('@cachet/kotlinx-serialization-kotlinx-serialization-core'), require('@cachet/carp-deployments-core-generated'), require('@cachet/carp-protocols-core-generated'));
  else {
    if (typeof globalThis['carp-common-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-studies-core-generated'. Its dependency 'carp-common-generated' was not found. Please, check whether 'carp-common-generated' is loaded prior to 'carp-studies-core-generated'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'carp-studies-core-generated'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'carp-studies-core-generated'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'carp-studies-core-generated'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'carp-studies-core-generated'.");
    }
    if (typeof globalThis['carp-deployments-core-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-studies-core-generated'. Its dependency 'carp-deployments-core-generated' was not found. Please, check whether 'carp-deployments-core-generated' is loaded prior to 'carp-studies-core-generated'.");
    }
    if (typeof globalThis['carp-protocols-core-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-studies-core-generated'. Its dependency 'carp-protocols-core-generated' was not found. Please, check whether 'carp-protocols-core-generated' is loaded prior to 'carp-studies-core-generated'.");
    }
    globalThis['carp-studies-core-generated'] = factory(typeof globalThis['carp-studies-core-generated'] === 'undefined' ? {} : globalThis['carp-studies-core-generated'], globalThis['carp-common-generated'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['carp-deployments-core-generated'], globalThis['carp-protocols-core-generated']);
  }
}(function (_, kotlin_dk_cachet_carp_common_carp_common, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_dk_cachet_carp_deployments_carp_deployments_core, kotlin_dk_cachet_carp_protocols_carp_protocols_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ApiVersion = kotlin_dk_cachet_carp_common_carp_common.$_$.d;
  var protoOf = kotlin_kotlin.$_$.b9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h8;
  var constructCallableReference = kotlin_kotlin.$_$.x7;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var UUIDSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.i1;
  var InstantSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var $serializer_getInstance = kotlin_dk_cachet_carp_deployments_carp_deployments_core.$_$.e;
  var $serializer_getInstance_0 = kotlin_dk_cachet_carp_protocols_carp_protocols_core.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.sb;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var initMetadataForObject = kotlin_kotlin.$_$.m8;
  var VOID = kotlin_kotlin.$_$.b;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var Unit_instance = kotlin_kotlin.$_$.u2;
  var objectCreate = kotlin_kotlin.$_$.a9;
  var toString = kotlin_kotlin.$_$.pc;
  var getStringHashCode = kotlin_kotlin.$_$.e8;
  var equals = kotlin_kotlin.$_$.z7;
  var initMetadataForClass = kotlin_kotlin.$_$.g8;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var getKClass = kotlin_kotlin.$_$.q9;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var getBooleanHashCode = kotlin_kotlin.$_$.b8;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.x2;
  var lazy = kotlin_kotlin.$_$.lc;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var defineProp = kotlin_kotlin.$_$.y7;
  var Companion_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.z;
  var toString_0 = kotlin_kotlin.$_$.d9;
  var hashCode = kotlin_kotlin.$_$.f8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.y2;
  var toSet = kotlin_kotlin.$_$.t6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.z2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nc;
  var Roles = kotlin_dk_cachet_carp_common_carp_common.$_$.j;
  var emptySet = kotlin_kotlin.$_$.n5;
  var All = kotlin_dk_cachet_carp_common_carp_common.$_$.i;
  var addAll = kotlin_kotlin.$_$.q4;
  var AccountIdentity = kotlin_dk_cachet_carp_common_carp_common.$_$.h;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Companion_instance = kotlin_dk_cachet_carp_common_carp_common.$_$.h1;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var DeployingDevices = kotlin_dk_cachet_carp_deployments_carp_deployments_core.$_$.a;
  var Invited = kotlin_dk_cachet_carp_deployments_carp_deployments_core.$_$.b;
  var Stopped = kotlin_dk_cachet_carp_deployments_carp_deployments_core.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v3;
  var Running = kotlin_dk_cachet_carp_deployments_carp_deployments_core.$_$.c;
  var Companion_getInstance_0 = kotlin_dk_cachet_carp_deployments_carp_deployments_core.$_$.f;
  var ApiVersionSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.w;
  var EmailAddressSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.e1;
  var KFunctionImpl = kotlin_kotlin.$_$.m9;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.j8;
  var UsernameSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.c1;
  var ignoreTypeParameters = kotlin_dk_cachet_carp_common_carp_common.$_$.r;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var arrayOf = kotlin_kotlin.$_$.ec;
  var createKType = kotlin_kotlin.$_$.o9;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var isInterface = kotlin_kotlin.$_$.v8;
  var KtList = kotlin_kotlin.$_$.i4;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.n9;
  var ApplicationServiceRequest = kotlin_dk_cachet_carp_common_carp_common.$_$.s;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i2;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StudyDetails, 'StudyDetails', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StudyStatus, 'StudyStatus', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_6});
  initMetadataForClass(Configuring, 'Configuring', VOID, StudyStatus, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForClass(Live, 'Live', VOID, StudyStatus, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_4, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AssignedParticipantRoles, 'AssignedParticipantRoles', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Participant, 'Participant', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ParticipantGroupRepresentation, 'ParticipantGroupRepresentation', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_9, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_11);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_12);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ParticipantGroupStatus, 'ParticipantGroupStatus', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_15});
  initMetadataForClass(Staged, 'Staged', VOID, ParticipantGroupStatus, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForClass(InDeployment, 'InDeployment', VOID, ParticipantGroupStatus, VOID, VOID, VOID, {0: Companion_getInstance_11});
  initMetadataForClass(Invited_0, 'Invited', VOID, InDeployment, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForClass(Running_0, 'Running', VOID, InDeployment, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForClass(Stopped_0, 'Stopped', VOID, InDeployment, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForCompanion(Companion_13, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_14);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForFunctionReference(RecruitmentService$addParticipant$ref_1, KFunctionImpl, VOID, [3]);
  initMetadataForCompanion(Companion_15);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForFunctionReference(RecruitmentService$addParticipant$ref_2, KFunctionImpl, VOID, [3]);
  initMetadataForCompanion(Companion_16);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_17);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_18);
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_19);
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_20);
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_21);
  initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_22);
  initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_23);
  initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(Serializer, 'Serializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(RecruitmentServiceRequest, 'RecruitmentServiceRequest', VOID, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_26});
  initMetadataForClass(AddParticipantByEmailAddress, 'AddParticipantByEmailAddress', VOID, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForClass(AddParticipantByUsername, 'AddParticipantByUsername', VOID, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_12});
  initMetadataForClass(GetParticipant, 'GetParticipant', VOID, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_13});
  initMetadataForClass(GetParticipants, 'GetParticipants', VOID, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_14});
  initMetadataForClass(InviteNewParticipantGroup, 'InviteNewParticipantGroup', VOID, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_15});
  initMetadataForClass(CreateParticipantGroup, 'CreateParticipantGroup', VOID, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_16});
  initMetadataForClass(UpdateParticipantGroup, 'UpdateParticipantGroup', VOID, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_17});
  initMetadataForClass(InviteParticipantGroup, 'InviteParticipantGroup', VOID, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_18});
  initMetadataForClass(GetParticipantGroupStatusList, 'GetParticipantGroupStatusList', VOID, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_19});
  initMetadataForClass(StopParticipantGroup, 'StopParticipantGroup', VOID, RecruitmentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_20});
  initMetadataForCompanion(Companion_24, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_25);
  initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_26);
  initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_27);
  initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_28);
  initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_29);
  initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_30);
  initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_31);
  initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_32);
  initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_33);
  initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_34);
  initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(Serializer_0, 'Serializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(StudyServiceRequest, 'StudyServiceRequest', VOID, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_37});
  initMetadataForClass(CreateStudy, 'CreateStudy', VOID, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_21});
  initMetadataForClass(SetInternalDescription, 'SetInternalDescription', VOID, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_22});
  initMetadataForClass(GetStudyDetails, 'GetStudyDetails', VOID, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_23});
  initMetadataForClass(GetStudyStatus, 'GetStudyStatus', VOID, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_24});
  initMetadataForClass(GetStudiesOverview, 'GetStudiesOverview', VOID, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_25});
  initMetadataForClass(SetInvitation, 'SetInvitation', VOID, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_26});
  initMetadataForClass(SetProtocol, 'SetProtocol', VOID, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_27});
  initMetadataForClass(RemoveProtocol, 'RemoveProtocol', VOID, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_28});
  initMetadataForClass(GoLive, 'GoLive', VOID, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_29});
  initMetadataForClass(Remove, 'Remove', VOID, StudyServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_30});
  initMetadataForCompanion(Companion_35, VOID, [SerializerFactory]);
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.o2j_1 = new ApiVersion(1, 3);
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function RecruitmentService$addParticipant$ref() {
    var i = new RecruitmentService$addParticipant$ref_1();
    return constructCallableReference(function (p0, p1, p2, $completion) {
      return i.s2j(p0, p1, p2, $completion);
    }, 3, 1, 18, 'addParticipant');
  }
  function RecruitmentService$addParticipant$ref_0() {
    var i = new RecruitmentService$addParticipant$ref_2();
    return constructCallableReference(function (p0, p1, p2, $completion) {
      return i.w2j(p0, p1, p2, $completion);
    }, 3, 1, 19, 'addParticipant');
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.StudyDetails', this, 7);
    tmp0_serialDesc.pv('studyId', false);
    tmp0_serialDesc.pv('ownerId', false);
    tmp0_serialDesc.pv('name', false);
    tmp0_serialDesc.pv('createdOn', false);
    tmp0_serialDesc.pv('description', false);
    tmp0_serialDesc.pv('invitation', false);
    tmp0_serialDesc.pv('protocolSnapshot', false);
    this.x2j_1 = tmp0_serialDesc;
  }
  protoOf($serializer).y2j = function (encoder, value) {
    var tmp0_desc = this.x2j_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.ownerId);
    tmp1_output.mp(tmp0_desc, 2, value.name);
    tmp1_output.op(tmp0_desc, 3, InstantSerializer_getInstance(), value.createdOn);
    tmp1_output.qp(tmp0_desc, 4, StringSerializer_getInstance(), value.description);
    tmp1_output.op(tmp0_desc, 5, $serializer_getInstance(), value.invitation);
    tmp1_output.qp(tmp0_desc, 6, $serializer_getInstance_0(), value.protocolSnapshot);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer).nk = function (encoder, value) {
    return this.y2j(encoder, value instanceof StudyDetails ? value : THROW_CCE());
  };
  protoOf($serializer).ok = function (decoder) {
    var tmp0_desc = this.x2j_1;
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
    var tmp11_input = decoder.xn(tmp0_desc);
    if (tmp11_input.no()) {
      tmp4_local0 = tmp11_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.ho(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.lo(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.jo(tmp0_desc, 5, $serializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.lo(tmp0_desc, 6, $serializer_getInstance_0(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.ho(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.lo(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.jo(tmp0_desc, 5, $serializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.lo(tmp0_desc, 6, $serializer_getInstance_0(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.yn(tmp0_desc);
    return StudyDetails_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer).mk = function () {
    return this.x2j_1;
  };
  protoOf($serializer).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), InstantSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), $serializer_getInstance(), get_nullable($serializer_getInstance_0())];
  };
  var $serializer_instance;
  function $serializer_getInstance_1() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function StudyDetails_init_$Init$(seen0, studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot, serializationConstructorMarker, $this) {
    if (!(127 === (127 & seen0))) {
      throwMissingFieldException(seen0, 127, $serializer_getInstance_1().x2j_1);
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
  function StudyDetails_init_$Create$(seen0, studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot, serializationConstructorMarker) {
    return StudyDetails_init_$Init$(seen0, studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot, serializationConstructorMarker, objectCreate(protoOf(StudyDetails)));
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
  protoOf(StudyDetails).z2j = function () {
    return this.studyId;
  };
  protoOf(StudyDetails).i28 = function () {
    return this.ownerId;
  };
  protoOf(StudyDetails).k = function () {
    return this.name;
  };
  protoOf(StudyDetails).n22 = function () {
    return this.createdOn;
  };
  protoOf(StudyDetails).e1y = function () {
    return this.description;
  };
  protoOf(StudyDetails).q2f = function () {
    return this.invitation;
  };
  protoOf(StudyDetails).a2k = function () {
    return this.protocolSnapshot;
  };
  protoOf(StudyDetails).sd = function () {
    return this.studyId;
  };
  protoOf(StudyDetails).td = function () {
    return this.ownerId;
  };
  protoOf(StudyDetails).m1j = function () {
    return this.name;
  };
  protoOf(StudyDetails).l1k = function () {
    return this.createdOn;
  };
  protoOf(StudyDetails).m1p = function () {
    return this.description;
  };
  protoOf(StudyDetails).n1s = function () {
    return this.invitation;
  };
  protoOf(StudyDetails).o1s = function () {
    return this.protocolSnapshot;
  };
  protoOf(StudyDetails).b2k = function (studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot) {
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
    return $super === VOID ? this.b2k(studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot) : $super.b2k.call(this, studyId, ownerId, name, createdOn, description, invitation, protocolSnapshot);
  };
  protoOf(StudyDetails).toString = function () {
    return 'StudyDetails(studyId=' + this.studyId.toString() + ', ownerId=' + this.ownerId.toString() + ', name=' + this.name + ', createdOn=' + this.createdOn.toString() + ', description=' + this.description + ', invitation=' + this.invitation.toString() + ', protocolSnapshot=' + toString(this.protocolSnapshot) + ')';
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
    if (!this.studyId.equals(other.studyId))
      return false;
    if (!this.ownerId.equals(other.ownerId))
      return false;
    if (!(this.name === other.name))
      return false;
    if (!this.createdOn.equals(other.createdOn))
      return false;
    if (!(this.description == other.description))
      return false;
    if (!this.invitation.equals(other.invitation))
      return false;
    if (!equals(this.protocolSnapshot, other.protocolSnapshot))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_2 = this;
    this.c2k_1 = new ApiVersion(1, 1);
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.StudyStatus.Configuring', this, 8);
    tmp0_serialDesc.pv('studyId', false);
    tmp0_serialDesc.pv('name', false);
    tmp0_serialDesc.pv('createdOn', false);
    tmp0_serialDesc.pv('studyProtocolId', false);
    tmp0_serialDesc.pv('canSetInvitation', false);
    tmp0_serialDesc.pv('canSetStudyProtocol', false);
    tmp0_serialDesc.pv('canDeployToParticipants', false);
    tmp0_serialDesc.pv('canGoLive', false);
    this.d2k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).e2k = function (encoder, value) {
    var tmp0_desc = this.d2k_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.f2k_1);
    tmp1_output.mp(tmp0_desc, 1, value.g2k_1);
    tmp1_output.op(tmp0_desc, 2, InstantSerializer_getInstance(), value.h2k_1);
    tmp1_output.qp(tmp0_desc, 3, UUIDSerializer_getInstance(), value.i2k_1);
    tmp1_output.ep(tmp0_desc, 4, value.j2k_1);
    tmp1_output.ep(tmp0_desc, 5, value.k2k_1);
    tmp1_output.ep(tmp0_desc, 6, value.l2k_1);
    tmp1_output.ep(tmp0_desc, 7, value.canGoLive);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_0).nk = function (encoder, value) {
    return this.e2k(encoder, value instanceof Configuring ? value : THROW_CCE());
  };
  protoOf($serializer_0).ok = function (decoder) {
    var tmp0_desc = this.d2k_1;
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
    var tmp12_input = decoder.xn(tmp0_desc);
    if (tmp12_input.no()) {
      tmp4_local0 = tmp12_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.ho(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.jo(tmp0_desc, 2, InstantSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.lo(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.zn(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.zn(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.zn(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.zn(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.ho(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.jo(tmp0_desc, 2, InstantSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.lo(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.zn(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.zn(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.zn(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.zn(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.yn(tmp0_desc);
    return Configuring_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_0).mk = function () {
    return this.d2k_1;
  };
  protoOf($serializer_0).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), StringSerializer_getInstance(), InstantSerializer_getInstance(), get_nullable(UUIDSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_2() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Configuring_init_$Init$(seen0, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive, serializationConstructorMarker, $this) {
    if (!(255 === (255 & seen0))) {
      throwMissingFieldException(seen0, 255, $serializer_getInstance_2().d2k_1);
    }
    StudyStatus_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.f2k_1 = studyId;
    $this.g2k_1 = name;
    $this.h2k_1 = createdOn;
    $this.i2k_1 = studyProtocolId;
    $this.j2k_1 = canSetInvitation;
    $this.k2k_1 = canSetStudyProtocol;
    $this.l2k_1 = canDeployToParticipants;
    $this.canGoLive = canGoLive;
    return $this;
  }
  function Configuring_init_$Create$(seen0, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive, serializationConstructorMarker) {
    return Configuring_init_$Init$(seen0, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive, serializationConstructorMarker, objectCreate(protoOf(Configuring)));
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.StudyStatus.Live', this, 7);
    tmp0_serialDesc.pv('studyId', false);
    tmp0_serialDesc.pv('name', false);
    tmp0_serialDesc.pv('createdOn', false);
    tmp0_serialDesc.pv('studyProtocolId', false);
    tmp0_serialDesc.pv('canSetInvitation', false);
    tmp0_serialDesc.pv('canSetStudyProtocol', false);
    tmp0_serialDesc.pv('canDeployToParticipants', false);
    this.m2k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).n2k = function (encoder, value) {
    var tmp0_desc = this.m2k_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.o2k_1);
    tmp1_output.mp(tmp0_desc, 1, value.p2k_1);
    tmp1_output.op(tmp0_desc, 2, InstantSerializer_getInstance(), value.q2k_1);
    tmp1_output.qp(tmp0_desc, 3, UUIDSerializer_getInstance(), value.r2k_1);
    tmp1_output.ep(tmp0_desc, 4, value.s2k_1);
    tmp1_output.ep(tmp0_desc, 5, value.t2k_1);
    tmp1_output.ep(tmp0_desc, 6, value.u2k_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_1).nk = function (encoder, value) {
    return this.n2k(encoder, value instanceof Live ? value : THROW_CCE());
  };
  protoOf($serializer_1).ok = function (decoder) {
    var tmp0_desc = this.m2k_1;
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
    var tmp11_input = decoder.xn(tmp0_desc);
    if (tmp11_input.no()) {
      tmp4_local0 = tmp11_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.ho(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.jo(tmp0_desc, 2, InstantSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.lo(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.zn(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.zn(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.zn(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.ho(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.jo(tmp0_desc, 2, InstantSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.lo(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.zn(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.zn(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.zn(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.yn(tmp0_desc);
    return Live_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_1).mk = function () {
    return this.m2k_1;
  };
  protoOf($serializer_1).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), StringSerializer_getInstance(), InstantSerializer_getInstance(), get_nullable(UUIDSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_3() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Live_init_$Init$(seen0, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, serializationConstructorMarker, $this) {
    if (!(127 === (127 & seen0))) {
      throwMissingFieldException(seen0, 127, $serializer_getInstance_3().m2k_1);
    }
    StudyStatus_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.o2k_1 = studyId;
    $this.p2k_1 = name;
    $this.q2k_1 = createdOn;
    $this.r2k_1 = studyProtocolId;
    $this.s2k_1 = canSetInvitation;
    $this.t2k_1 = canSetStudyProtocol;
    $this.u2k_1 = canDeployToParticipants;
    return $this;
  }
  function Live_init_$Create$(seen0, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, serializationConstructorMarker) {
    return Live_init_$Init$(seen0, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, serializationConstructorMarker, objectCreate(protoOf(Live)));
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.v2k_1.s2();
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
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.studies.application.StudyStatus', tmp, tmp_0, tmp_1, tmp$ret$6);
  }
  function Configuring(studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive) {
    StudyStatus.call(this);
    this.f2k_1 = studyId;
    this.g2k_1 = name;
    this.h2k_1 = createdOn;
    this.i2k_1 = studyProtocolId;
    this.j2k_1 = canSetInvitation;
    this.k2k_1 = canSetStudyProtocol;
    this.l2k_1 = canDeployToParticipants;
    this.canGoLive = canGoLive;
  }
  protoOf(Configuring).z2j = function () {
    return this.f2k_1;
  };
  protoOf(Configuring).k = function () {
    return this.g2k_1;
  };
  protoOf(Configuring).n22 = function () {
    return this.h2k_1;
  };
  protoOf(Configuring).w2k = function () {
    return this.i2k_1;
  };
  protoOf(Configuring).x2k = function () {
    return this.j2k_1;
  };
  protoOf(Configuring).y2k = function () {
    return this.k2k_1;
  };
  protoOf(Configuring).z2k = function () {
    return this.l2k_1;
  };
  protoOf(Configuring).a2l = function () {
    return this.canGoLive;
  };
  protoOf(Configuring).sd = function () {
    return this.f2k_1;
  };
  protoOf(Configuring).td = function () {
    return this.g2k_1;
  };
  protoOf(Configuring).m1j = function () {
    return this.h2k_1;
  };
  protoOf(Configuring).l1k = function () {
    return this.i2k_1;
  };
  protoOf(Configuring).m1p = function () {
    return this.j2k_1;
  };
  protoOf(Configuring).n1s = function () {
    return this.k2k_1;
  };
  protoOf(Configuring).o1s = function () {
    return this.l2k_1;
  };
  protoOf(Configuring).p1s = function () {
    return this.canGoLive;
  };
  protoOf(Configuring).b2l = function (studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive) {
    return new Configuring(studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive);
  };
  protoOf(Configuring).copy = function (studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive, $super) {
    studyId = studyId === VOID ? this.f2k_1 : studyId;
    name = name === VOID ? this.g2k_1 : name;
    createdOn = createdOn === VOID ? this.h2k_1 : createdOn;
    studyProtocolId = studyProtocolId === VOID ? this.i2k_1 : studyProtocolId;
    canSetInvitation = canSetInvitation === VOID ? this.j2k_1 : canSetInvitation;
    canSetStudyProtocol = canSetStudyProtocol === VOID ? this.k2k_1 : canSetStudyProtocol;
    canDeployToParticipants = canDeployToParticipants === VOID ? this.l2k_1 : canDeployToParticipants;
    canGoLive = canGoLive === VOID ? this.canGoLive : canGoLive;
    return $super === VOID ? this.b2l(studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive) : $super.b2l.call(this, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, canGoLive);
  };
  protoOf(Configuring).toString = function () {
    return 'Configuring(studyId=' + this.f2k_1.toString() + ', name=' + this.g2k_1 + ', createdOn=' + this.h2k_1.toString() + ', studyProtocolId=' + toString(this.i2k_1) + ', canSetInvitation=' + this.j2k_1 + ', canSetStudyProtocol=' + this.k2k_1 + ', canDeployToParticipants=' + this.l2k_1 + ', canGoLive=' + this.canGoLive + ')';
  };
  protoOf(Configuring).hashCode = function () {
    var result = this.f2k_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.g2k_1) | 0;
    result = imul(result, 31) + this.h2k_1.hashCode() | 0;
    result = imul(result, 31) + (this.i2k_1 == null ? 0 : this.i2k_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.j2k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.k2k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.l2k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.canGoLive) | 0;
    return result;
  };
  protoOf(Configuring).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Configuring))
      return false;
    if (!this.f2k_1.equals(other.f2k_1))
      return false;
    if (!(this.g2k_1 === other.g2k_1))
      return false;
    if (!this.h2k_1.equals(other.h2k_1))
      return false;
    if (!equals(this.i2k_1, other.i2k_1))
      return false;
    if (!(this.j2k_1 === other.j2k_1))
      return false;
    if (!(this.k2k_1 === other.k2k_1))
      return false;
    if (!(this.l2k_1 === other.l2k_1))
      return false;
    if (!(this.canGoLive === other.canGoLive))
      return false;
    return true;
  };
  function Live(studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants) {
    StudyStatus.call(this);
    this.o2k_1 = studyId;
    this.p2k_1 = name;
    this.q2k_1 = createdOn;
    this.r2k_1 = studyProtocolId;
    this.s2k_1 = canSetInvitation;
    this.t2k_1 = canSetStudyProtocol;
    this.u2k_1 = canDeployToParticipants;
  }
  protoOf(Live).z2j = function () {
    return this.o2k_1;
  };
  protoOf(Live).k = function () {
    return this.p2k_1;
  };
  protoOf(Live).n22 = function () {
    return this.q2k_1;
  };
  protoOf(Live).w2k = function () {
    return this.r2k_1;
  };
  protoOf(Live).x2k = function () {
    return this.s2k_1;
  };
  protoOf(Live).y2k = function () {
    return this.t2k_1;
  };
  protoOf(Live).z2k = function () {
    return this.u2k_1;
  };
  protoOf(Live).sd = function () {
    return this.o2k_1;
  };
  protoOf(Live).td = function () {
    return this.p2k_1;
  };
  protoOf(Live).m1j = function () {
    return this.q2k_1;
  };
  protoOf(Live).l1k = function () {
    return this.r2k_1;
  };
  protoOf(Live).m1p = function () {
    return this.s2k_1;
  };
  protoOf(Live).n1s = function () {
    return this.t2k_1;
  };
  protoOf(Live).o1s = function () {
    return this.u2k_1;
  };
  protoOf(Live).c2l = function (studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants) {
    return new Live(studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants);
  };
  protoOf(Live).copy = function (studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants, $super) {
    studyId = studyId === VOID ? this.o2k_1 : studyId;
    name = name === VOID ? this.p2k_1 : name;
    createdOn = createdOn === VOID ? this.q2k_1 : createdOn;
    studyProtocolId = studyProtocolId === VOID ? this.r2k_1 : studyProtocolId;
    canSetInvitation = canSetInvitation === VOID ? this.s2k_1 : canSetInvitation;
    canSetStudyProtocol = canSetStudyProtocol === VOID ? this.t2k_1 : canSetStudyProtocol;
    canDeployToParticipants = canDeployToParticipants === VOID ? this.u2k_1 : canDeployToParticipants;
    return $super === VOID ? this.c2l(studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants) : $super.c2l.call(this, studyId, name, createdOn, studyProtocolId, canSetInvitation, canSetStudyProtocol, canDeployToParticipants);
  };
  protoOf(Live).toString = function () {
    return 'Live(studyId=' + this.o2k_1.toString() + ', name=' + this.p2k_1 + ', createdOn=' + this.q2k_1.toString() + ', studyProtocolId=' + toString(this.r2k_1) + ', canSetInvitation=' + this.s2k_1 + ', canSetStudyProtocol=' + this.t2k_1 + ', canDeployToParticipants=' + this.u2k_1 + ')';
  };
  protoOf(Live).hashCode = function () {
    var result = this.o2k_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.p2k_1) | 0;
    result = imul(result, 31) + this.q2k_1.hashCode() | 0;
    result = imul(result, 31) + (this.r2k_1 == null ? 0 : this.r2k_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.s2k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.t2k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.u2k_1) | 0;
    return result;
  };
  protoOf(Live).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Live))
      return false;
    if (!this.o2k_1.equals(other.o2k_1))
      return false;
    if (!(this.p2k_1 === other.p2k_1))
      return false;
    if (!this.q2k_1.equals(other.q2k_1))
      return false;
    if (!equals(this.r2k_1, other.r2k_1))
      return false;
    if (!(this.s2k_1 === other.s2k_1))
      return false;
    if (!(this.t2k_1 === other.t2k_1))
      return false;
    if (!(this.u2k_1 === other.u2k_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v2k_1 = lazy(tmp_0, StudyStatus$Companion$_anonymous__bcs06s);
  }
  protoOf(Companion_4).i18 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_4).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function StudyStatus_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function StudyStatus() {
    Companion_getInstance_6();
  }
  function AssignedParticipantRoles$Companion$$childSerializers$_anonymous__8hl88i() {
    return Companion_getInstance().i18();
  }
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.d2l_1 = [null, lazy(tmp_0, AssignedParticipantRoles$Companion$$childSerializers$_anonymous__8hl88i)];
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.AssignedParticipantRoles', this, 2);
    tmp0_serialDesc.pv('participantId', false);
    tmp0_serialDesc.pv('assignedRoles', false);
    this.e2l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).f2l = function (encoder, value) {
    var tmp0_desc = this.e2l_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().d2l_1;
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.participantId);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.assignedRoles);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_2).nk = function (encoder, value) {
    return this.f2l(encoder, value instanceof AssignedParticipantRoles ? value : THROW_CCE());
  };
  protoOf($serializer_2).ok = function (decoder) {
    var tmp0_desc = this.e2l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().d2l_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, tmp7_cached[1].s2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, tmp7_cached[1].s2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return AssignedParticipantRoles_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).mk = function () {
    return this.e2l_1;
  };
  protoOf($serializer_2).ew = function () {
    var tmp0_cached = Companion_getInstance_7().d2l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1].s2()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_4() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function AssignedParticipantRoles_init_$Init$(seen0, participantId, assignedRoles, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_4().e2l_1);
    }
    $this.participantId = participantId;
    $this.assignedRoles = assignedRoles;
    return $this;
  }
  function AssignedParticipantRoles_init_$Create$(seen0, participantId, assignedRoles, serializationConstructorMarker) {
    return AssignedParticipantRoles_init_$Init$(seen0, participantId, assignedRoles, serializationConstructorMarker, objectCreate(protoOf(AssignedParticipantRoles)));
  }
  function AssignedParticipantRoles(participantId, assignedRoles) {
    Companion_getInstance_7();
    this.participantId = participantId;
    this.assignedRoles = assignedRoles;
  }
  protoOf(AssignedParticipantRoles).j2g = function () {
    return this.participantId;
  };
  protoOf(AssignedParticipantRoles).k2g = function () {
    return this.assignedRoles;
  };
  protoOf(AssignedParticipantRoles).sd = function () {
    return this.participantId;
  };
  protoOf(AssignedParticipantRoles).td = function () {
    return this.assignedRoles;
  };
  protoOf(AssignedParticipantRoles).g2l = function (participantId, assignedRoles) {
    return new AssignedParticipantRoles(participantId, assignedRoles);
  };
  protoOf(AssignedParticipantRoles).copy = function (participantId, assignedRoles, $super) {
    participantId = participantId === VOID ? this.participantId : participantId;
    assignedRoles = assignedRoles === VOID ? this.assignedRoles : assignedRoles;
    return $super === VOID ? this.g2l(participantId, assignedRoles) : $super.g2l.call(this, participantId, assignedRoles);
  };
  protoOf(AssignedParticipantRoles).toString = function () {
    return 'AssignedParticipantRoles(participantId=' + this.participantId.toString() + ', assignedRoles=' + toString_0(this.assignedRoles) + ')';
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
    if (!this.participantId.equals(other.participantId))
      return false;
    if (!equals(this.assignedRoles, other.assignedRoles))
      return false;
    return true;
  };
  function participantIds(_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var _iterator__ex2g4s = _this__u8e3s4.r();
    while (_iterator__ex2g4s.s()) {
      var item = _iterator__ex2g4s.t();
      var tmp$ret$2 = item.participantId;
      destination.y(tmp$ret$2);
    }
    return toSet(destination);
  }
  function participantRoles(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = _this__u8e3s4.r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
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
  function Participant$Companion$$childSerializers$_anonymous__m46iif() {
    var tmp = getKClass(AccountIdentity);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h2l_1 = [lazy(tmp_0, Participant$Companion$$childSerializers$_anonymous__m46iif), null];
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.Participant', this, 2);
    tmp0_serialDesc.pv('accountIdentity', false);
    tmp0_serialDesc.pv('id', false);
    this.i2l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).j2l = function (encoder, value) {
    var tmp0_desc = this.i2l_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().h2l_1;
    tmp1_output.op(tmp0_desc, 0, tmp2_cached[0].s2(), value.accountIdentity);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.id);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_3).nk = function (encoder, value) {
    return this.j2l(encoder, value instanceof Participant ? value : THROW_CCE());
  };
  protoOf($serializer_3).ok = function (decoder) {
    var tmp0_desc = this.i2l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_8().h2l_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, tmp7_cached[0].s2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, tmp7_cached[0].s2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return Participant_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).mk = function () {
    return this.i2l_1;
  };
  protoOf($serializer_3).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_8().h2l_1[0].s2(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_5() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function Participant_init_$Init$(seen0, accountIdentity, id, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_5().i2l_1);
    }
    $this.accountIdentity = accountIdentity;
    $this.id = id;
    return $this;
  }
  function Participant_init_$Create$(seen0, accountIdentity, id, serializationConstructorMarker) {
    return Participant_init_$Init$(seen0, accountIdentity, id, serializationConstructorMarker, objectCreate(protoOf(Participant)));
  }
  function Participant(accountIdentity, id) {
    Companion_getInstance_8();
    id = id === VOID ? Companion_instance.randomUUID() : id;
    this.accountIdentity = accountIdentity;
    this.id = id;
  }
  protoOf(Participant).k2l = function () {
    return this.accountIdentity;
  };
  protoOf(Participant).m22 = function () {
    return this.id;
  };
  protoOf(Participant).sd = function () {
    return this.accountIdentity;
  };
  protoOf(Participant).td = function () {
    return this.id;
  };
  protoOf(Participant).l2l = function (accountIdentity, id) {
    return new Participant(accountIdentity, id);
  };
  protoOf(Participant).copy = function (accountIdentity, id, $super) {
    accountIdentity = accountIdentity === VOID ? this.accountIdentity : accountIdentity;
    id = id === VOID ? this.id : id;
    return $super === VOID ? this.l2l(accountIdentity, id) : $super.l2l.call(this, accountIdentity, id);
  };
  protoOf(Participant).toString = function () {
    return 'Participant(accountIdentity=' + toString_0(this.accountIdentity) + ', id=' + this.id.toString() + ')';
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
    if (!equals(this.accountIdentity, other.accountIdentity))
      return false;
    if (!this.id.equals(other.id))
      return false;
    return true;
  };
  function Companion_7() {
    Companion_instance_8 = this;
    this.Default = new ParticipantGroupRepresentation(null);
  }
  protoOf(Companion_7).m2l = function () {
    return this.Default;
  };
  protoOf(Companion_7).i18 = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.ParticipantGroupRepresentation', this, 1);
    tmp0_serialDesc.pv('name', false);
    this.n2l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).o2l = function (encoder, value) {
    var tmp0_desc = this.n2l_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.qp(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_4).nk = function (encoder, value) {
    return this.o2l(encoder, value instanceof ParticipantGroupRepresentation ? value : THROW_CCE());
  };
  protoOf($serializer_4).ok = function (decoder) {
    var tmp0_desc = this.n2l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xn(tmp0_desc);
    if (tmp5_input.no()) {
      tmp4_local0 = tmp5_input.lo(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.lo(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return ParticipantGroupRepresentation_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_4).mk = function () {
    return this.n2l_1;
  };
  protoOf($serializer_4).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_6() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function ParticipantGroupRepresentation_init_$Init$(seen0, name, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_6().n2l_1);
    }
    $this.name = name;
    return $this;
  }
  function ParticipantGroupRepresentation_init_$Create$(seen0, name, serializationConstructorMarker) {
    return ParticipantGroupRepresentation_init_$Init$(seen0, name, serializationConstructorMarker, objectCreate(protoOf(ParticipantGroupRepresentation)));
  }
  function ParticipantGroupRepresentation(name) {
    Companion_getInstance_9();
    this.name = name;
  }
  protoOf(ParticipantGroupRepresentation).k = function () {
    return this.name;
  };
  protoOf(ParticipantGroupRepresentation).sd = function () {
    return this.name;
  };
  protoOf(ParticipantGroupRepresentation).p2l = function (name) {
    return new ParticipantGroupRepresentation(name);
  };
  protoOf(ParticipantGroupRepresentation).copy = function (name, $super) {
    name = name === VOID ? this.name : name;
    return $super === VOID ? this.p2l(name) : $super.p2l.call(this, name);
  };
  protoOf(ParticipantGroupRepresentation).toString = function () {
    return 'ParticipantGroupRepresentation(name=' + this.name + ')';
  };
  protoOf(ParticipantGroupRepresentation).hashCode = function () {
    return this.name == null ? 0 : getStringHashCode(this.name);
  };
  protoOf(ParticipantGroupRepresentation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParticipantGroupRepresentation))
      return false;
    if (!(this.name == other.name))
      return false;
    return true;
  };
  function ParticipantGroupStatus$Staged$Companion$$childSerializers$_anonymous__qf3g2q() {
    return new LinkedHashSetSerializer($serializer_getInstance_5());
  }
  function ParticipantGroupStatus$Staged$Companion$$childSerializers$_anonymous__qf3g2q_0() {
    return new LinkedHashSetSerializer($serializer_getInstance_4());
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ParticipantGroupStatus$Staged$Companion$$childSerializers$_anonymous__qf3g2q);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q2l_1 = [null, tmp_1, lazy(tmp_2, ParticipantGroupStatus$Staged$Companion$$childSerializers$_anonymous__qf3g2q_0), null];
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.ParticipantGroupStatus.Staged', this, 4);
    tmp0_serialDesc.pv('id', false);
    tmp0_serialDesc.pv('participants', false);
    tmp0_serialDesc.pv('assignedParticipantRoles', false);
    tmp0_serialDesc.pv('representation', false);
    this.r2l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).s2l = function (encoder, value) {
    var tmp0_desc = this.r2l_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().q2l_1;
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.t2l_1);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.u2l_1);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.v2l_1);
    tmp1_output.op(tmp0_desc, 3, $serializer_getInstance_6(), value.w2l_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_5).nk = function (encoder, value) {
    return this.s2l(encoder, value instanceof Staged ? value : THROW_CCE());
  };
  protoOf($serializer_5).ok = function (decoder) {
    var tmp0_desc = this.r2l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_10().q2l_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, tmp9_cached[1].s2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jo(tmp0_desc, 2, tmp9_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.jo(tmp0_desc, 3, $serializer_getInstance_6(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, tmp9_cached[1].s2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.jo(tmp0_desc, 2, tmp9_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.jo(tmp0_desc, 3, $serializer_getInstance_6(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return Staged_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_5).mk = function () {
    return this.r2l_1;
  };
  protoOf($serializer_5).ew = function () {
    var tmp0_cached = Companion_getInstance_10().q2l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1].s2(), tmp0_cached[2].s2(), $serializer_getInstance_6()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_7() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function Staged_init_$Init$(seen0, id, participants, assignedParticipantRoles, representation, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_7().r2l_1);
    }
    ParticipantGroupStatus_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.t2l_1 = id;
    $this.u2l_1 = participants;
    $this.v2l_1 = assignedParticipantRoles;
    $this.w2l_1 = representation;
    return $this;
  }
  function Staged_init_$Create$(seen0, id, participants, assignedParticipantRoles, representation, serializationConstructorMarker) {
    return Staged_init_$Init$(seen0, id, participants, assignedParticipantRoles, representation, serializationConstructorMarker, objectCreate(protoOf(Staged)));
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.x2l_1.s2();
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
    var tmp_1 = [$serializer_getInstance_8(), $serializer_getInstance_9(), $serializer_getInstance_10()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.studies.application.users.ParticipantGroupStatus.InDeployment', tmp, tmp_0, tmp_1, tmp$ret$6);
  }
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.x2l_1 = lazy(tmp_0, ParticipantGroupStatus$InDeployment$Companion$_anonymous__4r30td);
  }
  protoOf(Companion_9).fromDeploymentStatus = function (participants, roleAssignment, deploymentStatus, representation) {
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
      var tmp_1;
      if (startedOn == null) {
        tmp_1 = new Invited_0(id, participants, roleAssignment, createdOn, deploymentStatus, representation);
      } else {
        tmp_1 = new Running_0(id, participants, roleAssignment, createdOn, deploymentStatus, startedOn, representation);
      }
      tmp = tmp_1;
    } else {
      if (deploymentStatus instanceof Running) {
        // Inline function 'kotlin.checkNotNull' call
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (startedOn == null) {
            var message = 'Required value was null.';
            throw IllegalStateException_init_$Create$(toString_0(message));
          } else {
            tmp$ret$1 = startedOn;
            break $l$block;
          }
        }
        var tmp$ret$0 = tmp$ret$1;
        tmp = new Running_0(id, participants, roleAssignment, createdOn, deploymentStatus, tmp$ret$0, representation);
      } else {
        if (deploymentStatus instanceof Stopped) {
          tmp = new Stopped_0(id, participants, roleAssignment, createdOn, deploymentStatus, startedOn, deploymentStatus.stoppedOn, representation);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  protoOf(Companion_9).i18 = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_9).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function InDeployment_init_$Init$(seen0, serializationConstructorMarker, $this) {
    ParticipantGroupStatus_init_$Init$(seen0, serializationConstructorMarker, $this);
    return $this;
  }
  function ParticipantGroupStatus$Invited$Companion$$childSerializers$_anonymous__soo2az() {
    return new LinkedHashSetSerializer($serializer_getInstance_5());
  }
  function ParticipantGroupStatus$Invited$Companion$$childSerializers$_anonymous__soo2az_0() {
    return new LinkedHashSetSerializer($serializer_getInstance_4());
  }
  function ParticipantGroupStatus$Invited$Companion$$childSerializers$_anonymous__soo2az_1() {
    return Companion_getInstance_0().i18();
  }
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ParticipantGroupStatus$Invited$Companion$$childSerializers$_anonymous__soo2az);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, ParticipantGroupStatus$Invited$Companion$$childSerializers$_anonymous__soo2az_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y2l_1 = [null, tmp_1, tmp_3, null, lazy(tmp_4, ParticipantGroupStatus$Invited$Companion$$childSerializers$_anonymous__soo2az_1), null];
  }
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.ParticipantGroupStatus.Invited', this, 6);
    tmp0_serialDesc.pv('id', false);
    tmp0_serialDesc.pv('participants', false);
    tmp0_serialDesc.pv('assignedParticipantRoles', false);
    tmp0_serialDesc.pv('invitedOn', false);
    tmp0_serialDesc.pv('studyDeploymentStatus', false);
    tmp0_serialDesc.pv('representation', false);
    this.z2l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).a2m = function (encoder, value) {
    var tmp0_desc = this.z2l_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().y2l_1;
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.b2m_1);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.c2m_1);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.d2m_1);
    tmp1_output.op(tmp0_desc, 3, InstantSerializer_getInstance(), value.e2m_1);
    tmp1_output.op(tmp0_desc, 4, tmp2_cached[4].s2(), value.f2m_1);
    tmp1_output.op(tmp0_desc, 5, $serializer_getInstance_6(), value.g2m_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_6).nk = function (encoder, value) {
    return this.a2m(encoder, value instanceof Invited_0 ? value : THROW_CCE());
  };
  protoOf($serializer_6).ok = function (decoder) {
    var tmp0_desc = this.z2l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.xn(tmp0_desc);
    var tmp11_cached = Companion_getInstance_12().y2l_1;
    if (tmp10_input.no()) {
      tmp4_local0 = tmp10_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.jo(tmp0_desc, 1, tmp11_cached[1].s2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.jo(tmp0_desc, 2, tmp11_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.jo(tmp0_desc, 4, tmp11_cached[4].s2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.jo(tmp0_desc, 5, $serializer_getInstance_6(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.jo(tmp0_desc, 1, tmp11_cached[1].s2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.jo(tmp0_desc, 2, tmp11_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.jo(tmp0_desc, 4, tmp11_cached[4].s2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.jo(tmp0_desc, 5, $serializer_getInstance_6(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.yn(tmp0_desc);
    return Invited_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_6).mk = function () {
    return this.z2l_1;
  };
  protoOf($serializer_6).ew = function () {
    var tmp0_cached = Companion_getInstance_12().y2l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1].s2(), tmp0_cached[2].s2(), InstantSerializer_getInstance(), tmp0_cached[4].s2(), $serializer_getInstance_6()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_8() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function Invited_init_$Init$(seen0, id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, representation, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_8().z2l_1);
    }
    InDeployment_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.b2m_1 = id;
    $this.c2m_1 = participants;
    $this.d2m_1 = assignedParticipantRoles;
    $this.e2m_1 = invitedOn;
    $this.f2m_1 = studyDeploymentStatus;
    $this.g2m_1 = representation;
    return $this;
  }
  function Invited_init_$Create$(seen0, id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, representation, serializationConstructorMarker) {
    return Invited_init_$Init$(seen0, id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, representation, serializationConstructorMarker, objectCreate(protoOf(Invited_0)));
  }
  function ParticipantGroupStatus$Running$Companion$$childSerializers$_anonymous__prba4x() {
    return new LinkedHashSetSerializer($serializer_getInstance_5());
  }
  function ParticipantGroupStatus$Running$Companion$$childSerializers$_anonymous__prba4x_0() {
    return new LinkedHashSetSerializer($serializer_getInstance_4());
  }
  function ParticipantGroupStatus$Running$Companion$$childSerializers$_anonymous__prba4x_1() {
    return Companion_getInstance_0().i18();
  }
  function Companion_11() {
    Companion_instance_12 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ParticipantGroupStatus$Running$Companion$$childSerializers$_anonymous__prba4x);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, ParticipantGroupStatus$Running$Companion$$childSerializers$_anonymous__prba4x_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h2m_1 = [null, tmp_1, tmp_3, null, lazy(tmp_4, ParticipantGroupStatus$Running$Companion$$childSerializers$_anonymous__prba4x_1), null, null];
  }
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.ParticipantGroupStatus.Running', this, 7);
    tmp0_serialDesc.pv('id', false);
    tmp0_serialDesc.pv('participants', false);
    tmp0_serialDesc.pv('assignedParticipantRoles', false);
    tmp0_serialDesc.pv('invitedOn', false);
    tmp0_serialDesc.pv('studyDeploymentStatus', false);
    tmp0_serialDesc.pv('startedOn', false);
    tmp0_serialDesc.pv('representation', false);
    this.i2m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).j2m = function (encoder, value) {
    var tmp0_desc = this.i2m_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().h2m_1;
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.k2m_1);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.l2m_1);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.m2m_1);
    tmp1_output.op(tmp0_desc, 3, InstantSerializer_getInstance(), value.n2m_1);
    tmp1_output.op(tmp0_desc, 4, tmp2_cached[4].s2(), value.o2m_1);
    tmp1_output.op(tmp0_desc, 5, InstantSerializer_getInstance(), value.startedOn);
    tmp1_output.op(tmp0_desc, 6, $serializer_getInstance_6(), value.p2m_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_7).nk = function (encoder, value) {
    return this.j2m(encoder, value instanceof Running_0 ? value : THROW_CCE());
  };
  protoOf($serializer_7).ok = function (decoder) {
    var tmp0_desc = this.i2m_1;
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
    var tmp11_input = decoder.xn(tmp0_desc);
    var tmp12_cached = Companion_getInstance_13().h2m_1;
    if (tmp11_input.no()) {
      tmp4_local0 = tmp11_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.jo(tmp0_desc, 1, tmp12_cached[1].s2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.jo(tmp0_desc, 2, tmp12_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.jo(tmp0_desc, 4, tmp12_cached[4].s2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.jo(tmp0_desc, 5, InstantSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.jo(tmp0_desc, 6, $serializer_getInstance_6(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.jo(tmp0_desc, 1, tmp12_cached[1].s2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.jo(tmp0_desc, 2, tmp12_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.jo(tmp0_desc, 4, tmp12_cached[4].s2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.jo(tmp0_desc, 5, InstantSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.jo(tmp0_desc, 6, $serializer_getInstance_6(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.yn(tmp0_desc);
    return Running_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_7).mk = function () {
    return this.i2m_1;
  };
  protoOf($serializer_7).ew = function () {
    var tmp0_cached = Companion_getInstance_13().h2m_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1].s2(), tmp0_cached[2].s2(), InstantSerializer_getInstance(), tmp0_cached[4].s2(), InstantSerializer_getInstance(), $serializer_getInstance_6()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_9() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function Running_init_$Init$(seen0, id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, representation, serializationConstructorMarker, $this) {
    if (!(127 === (127 & seen0))) {
      throwMissingFieldException(seen0, 127, $serializer_getInstance_9().i2m_1);
    }
    InDeployment_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.k2m_1 = id;
    $this.l2m_1 = participants;
    $this.m2m_1 = assignedParticipantRoles;
    $this.n2m_1 = invitedOn;
    $this.o2m_1 = studyDeploymentStatus;
    $this.startedOn = startedOn;
    $this.p2m_1 = representation;
    return $this;
  }
  function Running_init_$Create$(seen0, id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, representation, serializationConstructorMarker) {
    return Running_init_$Init$(seen0, id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, representation, serializationConstructorMarker, objectCreate(protoOf(Running_0)));
  }
  function ParticipantGroupStatus$Stopped$Companion$$childSerializers$_anonymous__9zk8w3() {
    return new LinkedHashSetSerializer($serializer_getInstance_5());
  }
  function ParticipantGroupStatus$Stopped$Companion$$childSerializers$_anonymous__9zk8w3_0() {
    return new LinkedHashSetSerializer($serializer_getInstance_4());
  }
  function ParticipantGroupStatus$Stopped$Companion$$childSerializers$_anonymous__9zk8w3_1() {
    return Companion_getInstance_0().i18();
  }
  function Companion_12() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ParticipantGroupStatus$Stopped$Companion$$childSerializers$_anonymous__9zk8w3);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, ParticipantGroupStatus$Stopped$Companion$$childSerializers$_anonymous__9zk8w3_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q2m_1 = [null, tmp_1, tmp_3, null, lazy(tmp_4, ParticipantGroupStatus$Stopped$Companion$$childSerializers$_anonymous__9zk8w3_1), null, null, null];
  }
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.application.users.ParticipantGroupStatus.Stopped', this, 8);
    tmp0_serialDesc.pv('id', false);
    tmp0_serialDesc.pv('participants', false);
    tmp0_serialDesc.pv('assignedParticipantRoles', false);
    tmp0_serialDesc.pv('invitedOn', false);
    tmp0_serialDesc.pv('studyDeploymentStatus', false);
    tmp0_serialDesc.pv('startedOn', false);
    tmp0_serialDesc.pv('stoppedOn', false);
    tmp0_serialDesc.pv('representation', false);
    this.r2m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).s2m = function (encoder, value) {
    var tmp0_desc = this.r2m_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().q2m_1;
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.t2m_1);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.u2m_1);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.v2m_1);
    tmp1_output.op(tmp0_desc, 3, InstantSerializer_getInstance(), value.w2m_1);
    tmp1_output.op(tmp0_desc, 4, tmp2_cached[4].s2(), value.x2m_1);
    tmp1_output.qp(tmp0_desc, 5, InstantSerializer_getInstance(), value.startedOn);
    tmp1_output.op(tmp0_desc, 6, InstantSerializer_getInstance(), value.stoppedOn);
    tmp1_output.op(tmp0_desc, 7, $serializer_getInstance_6(), value.y2m_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_8).nk = function (encoder, value) {
    return this.s2m(encoder, value instanceof Stopped_0 ? value : THROW_CCE());
  };
  protoOf($serializer_8).ok = function (decoder) {
    var tmp0_desc = this.r2m_1;
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
    var tmp11_local7 = null;
    var tmp12_input = decoder.xn(tmp0_desc);
    var tmp13_cached = Companion_getInstance_14().q2m_1;
    if (tmp12_input.no()) {
      tmp4_local0 = tmp12_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.jo(tmp0_desc, 1, tmp13_cached[1].s2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.jo(tmp0_desc, 2, tmp13_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.jo(tmp0_desc, 4, tmp13_cached[4].s2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.lo(tmp0_desc, 5, InstantSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.jo(tmp0_desc, 6, InstantSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.jo(tmp0_desc, 7, $serializer_getInstance_6(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.jo(tmp0_desc, 1, tmp13_cached[1].s2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.jo(tmp0_desc, 2, tmp13_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.jo(tmp0_desc, 4, tmp13_cached[4].s2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.lo(tmp0_desc, 5, InstantSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.jo(tmp0_desc, 6, InstantSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.jo(tmp0_desc, 7, $serializer_getInstance_6(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.yn(tmp0_desc);
    return Stopped_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_8).mk = function () {
    return this.r2m_1;
  };
  protoOf($serializer_8).ew = function () {
    var tmp0_cached = Companion_getInstance_14().q2m_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1].s2(), tmp0_cached[2].s2(), InstantSerializer_getInstance(), tmp0_cached[4].s2(), get_nullable(InstantSerializer_getInstance()), InstantSerializer_getInstance(), $serializer_getInstance_6()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_10() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function Stopped_init_$Init$(seen0, id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, representation, serializationConstructorMarker, $this) {
    if (!(255 === (255 & seen0))) {
      throwMissingFieldException(seen0, 255, $serializer_getInstance_10().r2m_1);
    }
    InDeployment_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.t2m_1 = id;
    $this.u2m_1 = participants;
    $this.v2m_1 = assignedParticipantRoles;
    $this.w2m_1 = invitedOn;
    $this.x2m_1 = studyDeploymentStatus;
    $this.startedOn = startedOn;
    $this.stoppedOn = stoppedOn;
    $this.y2m_1 = representation;
    return $this;
  }
  function Stopped_init_$Create$(seen0, id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, representation, serializationConstructorMarker) {
    return Stopped_init_$Init$(seen0, id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, representation, serializationConstructorMarker, objectCreate(protoOf(Stopped_0)));
  }
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.z2m_1.s2();
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
    var tmp_1 = [$serializer_getInstance_8(), $serializer_getInstance_9(), $serializer_getInstance_10(), $serializer_getInstance_7()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.studies.application.users.ParticipantGroupStatus', tmp, tmp_0, tmp_1, tmp$ret$6);
  }
  function Staged(id, participants, assignedParticipantRoles, representation) {
    Companion_getInstance_10();
    representation = representation === VOID ? Companion_getInstance_9().Default : representation;
    ParticipantGroupStatus.call(this);
    this.t2l_1 = id;
    this.u2l_1 = participants;
    this.v2l_1 = assignedParticipantRoles;
    this.w2l_1 = representation;
  }
  protoOf(Staged).m22 = function () {
    return this.t2l_1;
  };
  protoOf(Staged).a2n = function () {
    return this.u2l_1;
  };
  protoOf(Staged).q2g = function () {
    return this.v2l_1;
  };
  protoOf(Staged).b2n = function () {
    return this.w2l_1;
  };
  protoOf(Staged).sd = function () {
    return this.t2l_1;
  };
  protoOf(Staged).td = function () {
    return this.u2l_1;
  };
  protoOf(Staged).m1j = function () {
    return this.v2l_1;
  };
  protoOf(Staged).l1k = function () {
    return this.w2l_1;
  };
  protoOf(Staged).c2n = function (id, participants, assignedParticipantRoles, representation) {
    return new Staged(id, participants, assignedParticipantRoles, representation);
  };
  protoOf(Staged).copy = function (id, participants, assignedParticipantRoles, representation, $super) {
    id = id === VOID ? this.t2l_1 : id;
    participants = participants === VOID ? this.u2l_1 : participants;
    assignedParticipantRoles = assignedParticipantRoles === VOID ? this.v2l_1 : assignedParticipantRoles;
    representation = representation === VOID ? this.w2l_1 : representation;
    return $super === VOID ? this.c2n(id, participants, assignedParticipantRoles, representation) : $super.c2n.call(this, id, participants, assignedParticipantRoles, representation);
  };
  protoOf(Staged).toString = function () {
    return 'Staged(id=' + this.t2l_1.toString() + ', participants=' + toString_0(this.u2l_1) + ', assignedParticipantRoles=' + toString_0(this.v2l_1) + ', representation=' + this.w2l_1.toString() + ')';
  };
  protoOf(Staged).hashCode = function () {
    var result = this.t2l_1.hashCode();
    result = imul(result, 31) + hashCode(this.u2l_1) | 0;
    result = imul(result, 31) + hashCode(this.v2l_1) | 0;
    result = imul(result, 31) + this.w2l_1.hashCode() | 0;
    return result;
  };
  protoOf(Staged).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Staged))
      return false;
    if (!this.t2l_1.equals(other.t2l_1))
      return false;
    if (!equals(this.u2l_1, other.u2l_1))
      return false;
    if (!equals(this.v2l_1, other.v2l_1))
      return false;
    if (!this.w2l_1.equals(other.w2l_1))
      return false;
    return true;
  };
  function InDeployment() {
    Companion_getInstance_11();
    ParticipantGroupStatus.call(this);
  }
  function Invited_0(id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, representation) {
    Companion_getInstance_12();
    representation = representation === VOID ? Companion_getInstance_9().Default : representation;
    InDeployment.call(this);
    this.b2m_1 = id;
    this.c2m_1 = participants;
    this.d2m_1 = assignedParticipantRoles;
    this.e2m_1 = invitedOn;
    this.f2m_1 = studyDeploymentStatus;
    this.g2m_1 = representation;
  }
  protoOf(Invited_0).m22 = function () {
    return this.b2m_1;
  };
  protoOf(Invited_0).a2n = function () {
    return this.c2m_1;
  };
  protoOf(Invited_0).q2g = function () {
    return this.d2m_1;
  };
  protoOf(Invited_0).d2n = function () {
    return this.e2m_1;
  };
  protoOf(Invited_0).e2n = function () {
    return this.f2m_1;
  };
  protoOf(Invited_0).b2n = function () {
    return this.g2m_1;
  };
  protoOf(Invited_0).sd = function () {
    return this.b2m_1;
  };
  protoOf(Invited_0).td = function () {
    return this.c2m_1;
  };
  protoOf(Invited_0).m1j = function () {
    return this.d2m_1;
  };
  protoOf(Invited_0).l1k = function () {
    return this.e2m_1;
  };
  protoOf(Invited_0).m1p = function () {
    return this.f2m_1;
  };
  protoOf(Invited_0).n1s = function () {
    return this.g2m_1;
  };
  protoOf(Invited_0).f2n = function (id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, representation) {
    return new Invited_0(id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, representation);
  };
  protoOf(Invited_0).copy = function (id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, representation, $super) {
    id = id === VOID ? this.b2m_1 : id;
    participants = participants === VOID ? this.c2m_1 : participants;
    assignedParticipantRoles = assignedParticipantRoles === VOID ? this.d2m_1 : assignedParticipantRoles;
    invitedOn = invitedOn === VOID ? this.e2m_1 : invitedOn;
    studyDeploymentStatus = studyDeploymentStatus === VOID ? this.f2m_1 : studyDeploymentStatus;
    representation = representation === VOID ? this.g2m_1 : representation;
    return $super === VOID ? this.f2n(id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, representation) : $super.f2n.call(this, id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, representation);
  };
  protoOf(Invited_0).toString = function () {
    return 'Invited(id=' + this.b2m_1.toString() + ', participants=' + toString_0(this.c2m_1) + ', assignedParticipantRoles=' + toString_0(this.d2m_1) + ', invitedOn=' + this.e2m_1.toString() + ', studyDeploymentStatus=' + toString_0(this.f2m_1) + ', representation=' + this.g2m_1.toString() + ')';
  };
  protoOf(Invited_0).hashCode = function () {
    var result = this.b2m_1.hashCode();
    result = imul(result, 31) + hashCode(this.c2m_1) | 0;
    result = imul(result, 31) + hashCode(this.d2m_1) | 0;
    result = imul(result, 31) + this.e2m_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.f2m_1) | 0;
    result = imul(result, 31) + this.g2m_1.hashCode() | 0;
    return result;
  };
  protoOf(Invited_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Invited_0))
      return false;
    if (!this.b2m_1.equals(other.b2m_1))
      return false;
    if (!equals(this.c2m_1, other.c2m_1))
      return false;
    if (!equals(this.d2m_1, other.d2m_1))
      return false;
    if (!this.e2m_1.equals(other.e2m_1))
      return false;
    if (!equals(this.f2m_1, other.f2m_1))
      return false;
    if (!this.g2m_1.equals(other.g2m_1))
      return false;
    return true;
  };
  function Running_0(id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, representation) {
    Companion_getInstance_13();
    representation = representation === VOID ? Companion_getInstance_9().Default : representation;
    InDeployment.call(this);
    this.k2m_1 = id;
    this.l2m_1 = participants;
    this.m2m_1 = assignedParticipantRoles;
    this.n2m_1 = invitedOn;
    this.o2m_1 = studyDeploymentStatus;
    this.startedOn = startedOn;
    this.p2m_1 = representation;
  }
  protoOf(Running_0).m22 = function () {
    return this.k2m_1;
  };
  protoOf(Running_0).a2n = function () {
    return this.l2m_1;
  };
  protoOf(Running_0).q2g = function () {
    return this.m2m_1;
  };
  protoOf(Running_0).d2n = function () {
    return this.n2m_1;
  };
  protoOf(Running_0).e2n = function () {
    return this.o2m_1;
  };
  protoOf(Running_0).h2f = function () {
    return this.startedOn;
  };
  protoOf(Running_0).b2n = function () {
    return this.p2m_1;
  };
  protoOf(Running_0).sd = function () {
    return this.k2m_1;
  };
  protoOf(Running_0).td = function () {
    return this.l2m_1;
  };
  protoOf(Running_0).m1j = function () {
    return this.m2m_1;
  };
  protoOf(Running_0).l1k = function () {
    return this.n2m_1;
  };
  protoOf(Running_0).m1p = function () {
    return this.o2m_1;
  };
  protoOf(Running_0).n1s = function () {
    return this.startedOn;
  };
  protoOf(Running_0).o1s = function () {
    return this.p2m_1;
  };
  protoOf(Running_0).g2n = function (id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, representation) {
    return new Running_0(id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, representation);
  };
  protoOf(Running_0).copy = function (id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, representation, $super) {
    id = id === VOID ? this.k2m_1 : id;
    participants = participants === VOID ? this.l2m_1 : participants;
    assignedParticipantRoles = assignedParticipantRoles === VOID ? this.m2m_1 : assignedParticipantRoles;
    invitedOn = invitedOn === VOID ? this.n2m_1 : invitedOn;
    studyDeploymentStatus = studyDeploymentStatus === VOID ? this.o2m_1 : studyDeploymentStatus;
    startedOn = startedOn === VOID ? this.startedOn : startedOn;
    representation = representation === VOID ? this.p2m_1 : representation;
    return $super === VOID ? this.g2n(id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, representation) : $super.g2n.call(this, id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, representation);
  };
  protoOf(Running_0).toString = function () {
    return 'Running(id=' + this.k2m_1.toString() + ', participants=' + toString_0(this.l2m_1) + ', assignedParticipantRoles=' + toString_0(this.m2m_1) + ', invitedOn=' + this.n2m_1.toString() + ', studyDeploymentStatus=' + toString_0(this.o2m_1) + ', startedOn=' + this.startedOn.toString() + ', representation=' + this.p2m_1.toString() + ')';
  };
  protoOf(Running_0).hashCode = function () {
    var result = this.k2m_1.hashCode();
    result = imul(result, 31) + hashCode(this.l2m_1) | 0;
    result = imul(result, 31) + hashCode(this.m2m_1) | 0;
    result = imul(result, 31) + this.n2m_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.o2m_1) | 0;
    result = imul(result, 31) + this.startedOn.hashCode() | 0;
    result = imul(result, 31) + this.p2m_1.hashCode() | 0;
    return result;
  };
  protoOf(Running_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Running_0))
      return false;
    if (!this.k2m_1.equals(other.k2m_1))
      return false;
    if (!equals(this.l2m_1, other.l2m_1))
      return false;
    if (!equals(this.m2m_1, other.m2m_1))
      return false;
    if (!this.n2m_1.equals(other.n2m_1))
      return false;
    if (!equals(this.o2m_1, other.o2m_1))
      return false;
    if (!this.startedOn.equals(other.startedOn))
      return false;
    if (!this.p2m_1.equals(other.p2m_1))
      return false;
    return true;
  };
  function Stopped_0(id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, representation) {
    Companion_getInstance_14();
    representation = representation === VOID ? Companion_getInstance_9().Default : representation;
    InDeployment.call(this);
    this.t2m_1 = id;
    this.u2m_1 = participants;
    this.v2m_1 = assignedParticipantRoles;
    this.w2m_1 = invitedOn;
    this.x2m_1 = studyDeploymentStatus;
    this.startedOn = startedOn;
    this.stoppedOn = stoppedOn;
    this.y2m_1 = representation;
  }
  protoOf(Stopped_0).m22 = function () {
    return this.t2m_1;
  };
  protoOf(Stopped_0).a2n = function () {
    return this.u2m_1;
  };
  protoOf(Stopped_0).q2g = function () {
    return this.v2m_1;
  };
  protoOf(Stopped_0).d2n = function () {
    return this.w2m_1;
  };
  protoOf(Stopped_0).e2n = function () {
    return this.x2m_1;
  };
  protoOf(Stopped_0).h2f = function () {
    return this.startedOn;
  };
  protoOf(Stopped_0).k2f = function () {
    return this.stoppedOn;
  };
  protoOf(Stopped_0).b2n = function () {
    return this.y2m_1;
  };
  protoOf(Stopped_0).sd = function () {
    return this.t2m_1;
  };
  protoOf(Stopped_0).td = function () {
    return this.u2m_1;
  };
  protoOf(Stopped_0).m1j = function () {
    return this.v2m_1;
  };
  protoOf(Stopped_0).l1k = function () {
    return this.w2m_1;
  };
  protoOf(Stopped_0).m1p = function () {
    return this.x2m_1;
  };
  protoOf(Stopped_0).n1s = function () {
    return this.startedOn;
  };
  protoOf(Stopped_0).o1s = function () {
    return this.stoppedOn;
  };
  protoOf(Stopped_0).p1s = function () {
    return this.y2m_1;
  };
  protoOf(Stopped_0).h2n = function (id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, representation) {
    return new Stopped_0(id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, representation);
  };
  protoOf(Stopped_0).copy = function (id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, representation, $super) {
    id = id === VOID ? this.t2m_1 : id;
    participants = participants === VOID ? this.u2m_1 : participants;
    assignedParticipantRoles = assignedParticipantRoles === VOID ? this.v2m_1 : assignedParticipantRoles;
    invitedOn = invitedOn === VOID ? this.w2m_1 : invitedOn;
    studyDeploymentStatus = studyDeploymentStatus === VOID ? this.x2m_1 : studyDeploymentStatus;
    startedOn = startedOn === VOID ? this.startedOn : startedOn;
    stoppedOn = stoppedOn === VOID ? this.stoppedOn : stoppedOn;
    representation = representation === VOID ? this.y2m_1 : representation;
    return $super === VOID ? this.h2n(id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, representation) : $super.h2n.call(this, id, participants, assignedParticipantRoles, invitedOn, studyDeploymentStatus, startedOn, stoppedOn, representation);
  };
  protoOf(Stopped_0).toString = function () {
    return 'Stopped(id=' + this.t2m_1.toString() + ', participants=' + toString_0(this.u2m_1) + ', assignedParticipantRoles=' + toString_0(this.v2m_1) + ', invitedOn=' + this.w2m_1.toString() + ', studyDeploymentStatus=' + toString_0(this.x2m_1) + ', startedOn=' + toString(this.startedOn) + ', stoppedOn=' + this.stoppedOn.toString() + ', representation=' + this.y2m_1.toString() + ')';
  };
  protoOf(Stopped_0).hashCode = function () {
    var result = this.t2m_1.hashCode();
    result = imul(result, 31) + hashCode(this.u2m_1) | 0;
    result = imul(result, 31) + hashCode(this.v2m_1) | 0;
    result = imul(result, 31) + this.w2m_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.x2m_1) | 0;
    result = imul(result, 31) + (this.startedOn == null ? 0 : this.startedOn.hashCode()) | 0;
    result = imul(result, 31) + this.stoppedOn.hashCode() | 0;
    result = imul(result, 31) + this.y2m_1.hashCode() | 0;
    return result;
  };
  protoOf(Stopped_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stopped_0))
      return false;
    if (!this.t2m_1.equals(other.t2m_1))
      return false;
    if (!equals(this.u2m_1, other.u2m_1))
      return false;
    if (!equals(this.v2m_1, other.v2m_1))
      return false;
    if (!this.w2m_1.equals(other.w2m_1))
      return false;
    if (!equals(this.x2m_1, other.x2m_1))
      return false;
    if (!equals(this.startedOn, other.startedOn))
      return false;
    if (!this.stoppedOn.equals(other.stoppedOn))
      return false;
    if (!this.y2m_1.equals(other.y2m_1))
      return false;
    return true;
  };
  function Companion_13() {
    Companion_instance_14 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.z2m_1 = lazy(tmp_0, ParticipantGroupStatus$Companion$_anonymous__m1lxbl);
  }
  protoOf(Companion_13).i18 = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_13).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function ParticipantGroupStatus_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function ParticipantGroupStatus() {
    Companion_getInstance_15();
  }
  function RecruitmentServiceRequest$Companion$serializer$ref(p0) {
    return constructCallableReference(function (p0_0) {
      return p0.j2a(p0_0);
    }, 1, 0, 20, 'serializer', [p0]);
  }
  function Companion_14() {
  }
  var Companion_instance_15;
  function Companion_getInstance_16() {
    return Companion_instance_15;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.AddParticipantByEmailAddress', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    tmp0_serialDesc.pv('email', false);
    this.i2n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).j2n = function (encoder, value) {
    var tmp0_desc = this.i2n_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.op(tmp0_desc, 2, EmailAddressSerializer_getInstance(), value.email);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_9).nk = function (encoder, value) {
    return this.j2n(encoder, value instanceof AddParticipantByEmailAddress ? value : THROW_CCE());
  };
  protoOf($serializer_9).ok = function (decoder) {
    var tmp0_desc = this.i2n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, EmailAddressSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, EmailAddressSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return AddParticipantByEmailAddress_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_9).mk = function () {
    return this.i2n_1;
  };
  protoOf($serializer_9).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), EmailAddressSerializer_getInstance()];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_11() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function AddParticipantByEmailAddress_init_$Init$(seen0, apiVersion, studyId, email, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_11().i2n_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.email = email;
    return $this;
  }
  function AddParticipantByEmailAddress_init_$Create$(seen0, apiVersion, studyId, email, serializationConstructorMarker) {
    return AddParticipantByEmailAddress_init_$Init$(seen0, apiVersion, studyId, email, serializationConstructorMarker, objectCreate(protoOf(AddParticipantByEmailAddress)));
  }
  function RecruitmentService$addParticipant$ref_1() {
    KFunctionImpl.call(this, 1, 4, 18);
  }
  protoOf(RecruitmentService$addParticipant$ref_1).s2j = function (p0, p1, p2, $completion) {
    return p0.l2n(p1, p2, $completion);
  };
  function Companion_15() {
  }
  var Companion_instance_16;
  function Companion_getInstance_17() {
    return Companion_instance_16;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.AddParticipantByUsername', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    tmp0_serialDesc.pv('username', false);
    this.m2n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).n2n = function (encoder, value) {
    var tmp0_desc = this.m2n_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.op(tmp0_desc, 2, UsernameSerializer_getInstance(), value.username);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_10).nk = function (encoder, value) {
    return this.n2n(encoder, value instanceof AddParticipantByUsername ? value : THROW_CCE());
  };
  protoOf($serializer_10).ok = function (decoder) {
    var tmp0_desc = this.m2n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, UsernameSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, UsernameSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return AddParticipantByUsername_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_10).mk = function () {
    return this.m2n_1;
  };
  protoOf($serializer_10).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), UsernameSerializer_getInstance()];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_12() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function AddParticipantByUsername_init_$Init$(seen0, apiVersion, studyId, username, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_12().m2n_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.username = username;
    return $this;
  }
  function AddParticipantByUsername_init_$Create$(seen0, apiVersion, studyId, username, serializationConstructorMarker) {
    return AddParticipantByUsername_init_$Init$(seen0, apiVersion, studyId, username, serializationConstructorMarker, objectCreate(protoOf(AddParticipantByUsername)));
  }
  function RecruitmentService$addParticipant$ref_2() {
    KFunctionImpl.call(this, 1, 4, 19);
  }
  protoOf(RecruitmentService$addParticipant$ref_2).w2j = function (p0, p1, p2, $completion) {
    return p0.p2n(p1, p2, $completion);
  };
  function Companion_16() {
  }
  var Companion_instance_17;
  function Companion_getInstance_18() {
    return Companion_instance_17;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.GetParticipant', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    tmp0_serialDesc.pv('participantId', false);
    this.q2n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).r2n = function (encoder, value) {
    var tmp0_desc = this.q2n_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.op(tmp0_desc, 2, UUIDSerializer_getInstance(), value.participantId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_11).nk = function (encoder, value) {
    return this.r2n(encoder, value instanceof GetParticipant ? value : THROW_CCE());
  };
  protoOf($serializer_11).ok = function (decoder) {
    var tmp0_desc = this.q2n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, UUIDSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, UUIDSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return GetParticipant_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_11).mk = function () {
    return this.q2n_1;
  };
  protoOf($serializer_11).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_13() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function GetParticipant_init_$Init$(seen0, apiVersion, studyId, participantId, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_13().q2n_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.participantId = participantId;
    return $this;
  }
  function GetParticipant_init_$Create$(seen0, apiVersion, studyId, participantId, serializationConstructorMarker) {
    return GetParticipant_init_$Init$(seen0, apiVersion, studyId, participantId, serializationConstructorMarker, objectCreate(protoOf(GetParticipant)));
  }
  function Companion_17() {
  }
  var Companion_instance_18;
  function Companion_getInstance_19() {
    return Companion_instance_18;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.GetParticipants', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    this.t2n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).u2n = function (encoder, value) {
    var tmp0_desc = this.t2n_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_12).nk = function (encoder, value) {
    return this.u2n(encoder, value instanceof GetParticipants ? value : THROW_CCE());
  };
  protoOf($serializer_12).ok = function (decoder) {
    var tmp0_desc = this.t2n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return GetParticipants_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_12).mk = function () {
    return this.t2n_1;
  };
  protoOf($serializer_12).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_14() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function GetParticipants_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_14().t2n_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function GetParticipants_init_$Create$(seen0, apiVersion, studyId, serializationConstructorMarker) {
    return GetParticipants_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(GetParticipants)));
  }
  function RecruitmentServiceRequest$InviteNewParticipantGroup$Companion$$childSerializers$_anonymous__h79lud() {
    return new LinkedHashSetSerializer($serializer_getInstance_4());
  }
  function Companion_18() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w2n_1 = [null, null, lazy(tmp_0, RecruitmentServiceRequest$InviteNewParticipantGroup$Companion$$childSerializers$_anonymous__h79lud)];
  }
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.InviteNewParticipantGroup', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    tmp0_serialDesc.pv('group', false);
    this.x2n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).y2n = function (encoder, value) {
    var tmp0_desc = this.x2n_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().w2n_1;
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.group);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_13).nk = function (encoder, value) {
    return this.y2n(encoder, value instanceof InviteNewParticipantGroup ? value : THROW_CCE());
  };
  protoOf($serializer_13).ok = function (decoder) {
    var tmp0_desc = this.x2n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_20().w2n_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, tmp8_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, tmp8_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return InviteNewParticipantGroup_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_13).mk = function () {
    return this.x2n_1;
  };
  protoOf($serializer_13).ew = function () {
    var tmp0_cached = Companion_getInstance_20().w2n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2].s2()];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_15() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function InviteNewParticipantGroup_init_$Init$(seen0, apiVersion, studyId, group, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_15().x2n_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.group = group;
    return $this;
  }
  function InviteNewParticipantGroup_init_$Create$(seen0, apiVersion, studyId, group, serializationConstructorMarker) {
    return InviteNewParticipantGroup_init_$Init$(seen0, apiVersion, studyId, group, serializationConstructorMarker, objectCreate(protoOf(InviteNewParticipantGroup)));
  }
  function RecruitmentServiceRequest$CreateParticipantGroup$Companion$$childSerializers$_anonymous__xq7a24() {
    return new LinkedHashSetSerializer($serializer_getInstance_4());
  }
  function Companion_19() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a2o_1 = [null, null, lazy(tmp_0, RecruitmentServiceRequest$CreateParticipantGroup$Companion$$childSerializers$_anonymous__xq7a24), null, null];
  }
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_19();
    return Companion_instance_20;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.CreateParticipantGroup', this, 5);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('groupId', false);
    tmp0_serialDesc.pv('group', false);
    tmp0_serialDesc.pv('studyId', false);
    tmp0_serialDesc.pv('representation', true);
    this.b2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).c2o = function (encoder, value) {
    var tmp0_desc = this.b2o_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().a2o_1;
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.groupId);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.group);
    tmp1_output.op(tmp0_desc, 3, UUIDSerializer_getInstance(), value.studyId);
    if (tmp1_output.up(tmp0_desc, 4) ? true : !value.representation.equals(Companion_getInstance_9().Default)) {
      tmp1_output.op(tmp0_desc, 4, $serializer_getInstance_6(), value.representation);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_14).nk = function (encoder, value) {
    return this.c2o(encoder, value instanceof CreateParticipantGroup ? value : THROW_CCE());
  };
  protoOf($serializer_14).ok = function (decoder) {
    var tmp0_desc = this.b2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xn(tmp0_desc);
    var tmp10_cached = Companion_getInstance_21().a2o_1;
    if (tmp9_input.no()) {
      tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jo(tmp0_desc, 2, tmp10_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.jo(tmp0_desc, 4, $serializer_getInstance_6(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.jo(tmp0_desc, 2, tmp10_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.jo(tmp0_desc, 4, $serializer_getInstance_6(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return CreateParticipantGroup_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_14).mk = function () {
    return this.b2o_1;
  };
  protoOf($serializer_14).ew = function () {
    var tmp0_cached = Companion_getInstance_21().a2o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2].s2(), UUIDSerializer_getInstance(), $serializer_getInstance_6()];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_16() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function CreateParticipantGroup_init_$Init$(seen0, apiVersion, groupId, group, studyId, representation, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_16().b2o_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.groupId = groupId;
    $this.group = group;
    $this.studyId = studyId;
    if (0 === (seen0 & 16))
      $this.representation = Companion_getInstance_9().Default;
    else
      $this.representation = representation;
    return $this;
  }
  function CreateParticipantGroup_init_$Create$(seen0, apiVersion, groupId, group, studyId, representation, serializationConstructorMarker) {
    return CreateParticipantGroup_init_$Init$(seen0, apiVersion, groupId, group, studyId, representation, serializationConstructorMarker, objectCreate(protoOf(CreateParticipantGroup)));
  }
  function RecruitmentServiceRequest$UpdateParticipantGroup$Companion$$childSerializers$_anonymous__toxfnd() {
    return new LinkedHashSetSerializer($serializer_getInstance_4());
  }
  function Companion_20() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e2o_1 = [null, null, lazy(tmp_0, RecruitmentServiceRequest$UpdateParticipantGroup$Companion$$childSerializers$_anonymous__toxfnd), null];
  }
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_20();
    return Companion_instance_21;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.UpdateParticipantGroup', this, 4);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('groupId', false);
    tmp0_serialDesc.pv('group', true);
    tmp0_serialDesc.pv('representation', true);
    this.f2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).g2o = function (encoder, value) {
    var tmp0_desc = this.f2o_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().e2o_1;
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.groupId);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.group == null)) {
      tmp1_output.qp(tmp0_desc, 2, tmp2_cached[2].s2(), value.group);
    }
    if (tmp1_output.up(tmp0_desc, 3) ? true : !(value.representation == null)) {
      tmp1_output.qp(tmp0_desc, 3, $serializer_getInstance_6(), value.representation);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_15).nk = function (encoder, value) {
    return this.g2o(encoder, value instanceof UpdateParticipantGroup ? value : THROW_CCE());
  };
  protoOf($serializer_15).ok = function (decoder) {
    var tmp0_desc = this.f2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_22().e2o_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lo(tmp0_desc, 2, tmp9_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, $serializer_getInstance_6(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lo(tmp0_desc, 2, tmp9_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, $serializer_getInstance_6(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return UpdateParticipantGroup_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_15).mk = function () {
    return this.f2o_1;
  };
  protoOf($serializer_15).ew = function () {
    var tmp0_cached = Companion_getInstance_22().e2o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), get_nullable(tmp0_cached[2].s2()), get_nullable($serializer_getInstance_6())];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_17() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function UpdateParticipantGroup_init_$Init$(seen0, apiVersion, groupId, group, representation, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_17().f2o_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.groupId = groupId;
    if (0 === (seen0 & 4))
      $this.group = null;
    else
      $this.group = group;
    if (0 === (seen0 & 8))
      $this.representation = null;
    else
      $this.representation = representation;
    return $this;
  }
  function UpdateParticipantGroup_init_$Create$(seen0, apiVersion, groupId, group, representation, serializationConstructorMarker) {
    return UpdateParticipantGroup_init_$Init$(seen0, apiVersion, groupId, group, representation, serializationConstructorMarker, objectCreate(protoOf(UpdateParticipantGroup)));
  }
  function Companion_21() {
  }
  var Companion_instance_22;
  function Companion_getInstance_23() {
    return Companion_instance_22;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.InviteParticipantGroup', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('groupId', false);
    this.i2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).j2o = function (encoder, value) {
    var tmp0_desc = this.i2o_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.groupId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_16).nk = function (encoder, value) {
    return this.j2o(encoder, value instanceof InviteParticipantGroup ? value : THROW_CCE());
  };
  protoOf($serializer_16).ok = function (decoder) {
    var tmp0_desc = this.i2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return InviteParticipantGroup_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_16).mk = function () {
    return this.i2o_1;
  };
  protoOf($serializer_16).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_16;
  function $serializer_getInstance_18() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function InviteParticipantGroup_init_$Init$(seen0, apiVersion, groupId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_18().i2o_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.groupId = groupId;
    return $this;
  }
  function InviteParticipantGroup_init_$Create$(seen0, apiVersion, groupId, serializationConstructorMarker) {
    return InviteParticipantGroup_init_$Init$(seen0, apiVersion, groupId, serializationConstructorMarker, objectCreate(protoOf(InviteParticipantGroup)));
  }
  function Companion_22() {
  }
  var Companion_instance_23;
  function Companion_getInstance_24() {
    return Companion_instance_23;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.GetParticipantGroupStatusList', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    this.l2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).m2o = function (encoder, value) {
    var tmp0_desc = this.l2o_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_17).nk = function (encoder, value) {
    return this.m2o(encoder, value instanceof GetParticipantGroupStatusList ? value : THROW_CCE());
  };
  protoOf($serializer_17).ok = function (decoder) {
    var tmp0_desc = this.l2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return GetParticipantGroupStatusList_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_17).mk = function () {
    return this.l2o_1;
  };
  protoOf($serializer_17).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_19() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function GetParticipantGroupStatusList_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_19().l2o_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function GetParticipantGroupStatusList_init_$Create$(seen0, apiVersion, studyId, serializationConstructorMarker) {
    return GetParticipantGroupStatusList_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(GetParticipantGroupStatusList)));
  }
  function Companion_23() {
  }
  var Companion_instance_24;
  function Companion_getInstance_25() {
    return Companion_instance_24;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest.StopParticipantGroup', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    tmp0_serialDesc.pv('groupId', false);
    this.o2o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).p2o = function (encoder, value) {
    var tmp0_desc = this.o2o_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.op(tmp0_desc, 2, UUIDSerializer_getInstance(), value.groupId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_18).nk = function (encoder, value) {
    return this.p2o(encoder, value instanceof StopParticipantGroup ? value : THROW_CCE());
  };
  protoOf($serializer_18).ok = function (decoder) {
    var tmp0_desc = this.o2o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, UUIDSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, UUIDSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return StopParticipantGroup_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_18).mk = function () {
    return this.o2o_1;
  };
  protoOf($serializer_18).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_20() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function StopParticipantGroup_init_$Init$(seen0, apiVersion, studyId, groupId, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_20().o2o_1);
    }
    RecruitmentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.groupId = groupId;
    return $this;
  }
  function StopParticipantGroup_init_$Create$(seen0, apiVersion, studyId, groupId, serializationConstructorMarker) {
    return StopParticipantGroup_init_$Init$(seen0, apiVersion, studyId, groupId, serializationConstructorMarker, objectCreate(protoOf(StopParticipantGroup)));
  }
  function Serializer() {
    Serializer_instance = this;
    var tmp = this;
    tmp.r2o_1 = ignoreTypeParameters(RecruitmentServiceRequest$Companion$serializer$ref(Companion_instance_25));
  }
  protoOf(Serializer).mk = function () {
    return this.r2o_1.mk();
  };
  protoOf(Serializer).s2o = function (encoder, value) {
    this.r2o_1.nk(encoder, value);
  };
  protoOf(Serializer).nk = function (encoder, value) {
    return this.s2o(encoder, value instanceof RecruitmentServiceRequest ? value : THROW_CCE());
  };
  protoOf(Serializer).ok = function (decoder) {
    return this.r2o_1.ok(decoder);
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
  protoOf(AddParticipantByEmailAddress).z2j = function () {
    return this.studyId;
  };
  protoOf(AddParticipantByEmailAddress).t2o = function () {
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
    var tmp$ret$0 = RecruitmentService$addParticipant$ref();
    return equals(request, tmp$ret$0);
  };
  protoOf(AddParticipantByEmailAddress).sd = function () {
    return this.studyId;
  };
  protoOf(AddParticipantByEmailAddress).td = function () {
    return this.email;
  };
  protoOf(AddParticipantByEmailAddress).u2o = function (studyId, email) {
    return new AddParticipantByEmailAddress(studyId, email);
  };
  protoOf(AddParticipantByEmailAddress).copy = function (studyId, email, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    email = email === VOID ? this.email : email;
    return $super === VOID ? this.u2o(studyId, email) : $super.u2o.call(this, studyId, email);
  };
  protoOf(AddParticipantByEmailAddress).toString = function () {
    return 'AddParticipantByEmailAddress(studyId=' + this.studyId.toString() + ', email=' + this.email.toString() + ')';
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
    if (!this.studyId.equals(other.studyId))
      return false;
    if (!this.email.equals(other.email))
      return false;
    return true;
  };
  function AddParticipantByUsername(studyId, username) {
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
    this.username = username;
  }
  protoOf(AddParticipantByUsername).z2j = function () {
    return this.studyId;
  };
  protoOf(AddParticipantByUsername).u20 = function () {
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
    var tmp$ret$0 = RecruitmentService$addParticipant$ref_0();
    return equals(request, tmp$ret$0);
  };
  protoOf(AddParticipantByUsername).sd = function () {
    return this.studyId;
  };
  protoOf(AddParticipantByUsername).td = function () {
    return this.username;
  };
  protoOf(AddParticipantByUsername).w2o = function (studyId, username) {
    return new AddParticipantByUsername(studyId, username);
  };
  protoOf(AddParticipantByUsername).copy = function (studyId, username, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    username = username === VOID ? this.username : username;
    return $super === VOID ? this.w2o(studyId, username) : $super.w2o.call(this, studyId, username);
  };
  protoOf(AddParticipantByUsername).toString = function () {
    return 'AddParticipantByUsername(studyId=' + this.studyId.toString() + ', username=' + this.username.toString() + ')';
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
    if (!this.studyId.equals(other.studyId))
      return false;
    if (!this.username.equals(other.username))
      return false;
    return true;
  };
  function GetParticipant(studyId, participantId) {
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
    this.participantId = participantId;
  }
  protoOf(GetParticipant).z2j = function () {
    return this.studyId;
  };
  protoOf(GetParticipant).j2g = function () {
    return this.participantId;
  };
  protoOf(GetParticipant).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Participant), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetParticipant).sd = function () {
    return this.studyId;
  };
  protoOf(GetParticipant).td = function () {
    return this.participantId;
  };
  protoOf(GetParticipant).x2o = function (studyId, participantId) {
    return new GetParticipant(studyId, participantId);
  };
  protoOf(GetParticipant).copy = function (studyId, participantId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    participantId = participantId === VOID ? this.participantId : participantId;
    return $super === VOID ? this.x2o(studyId, participantId) : $super.x2o.call(this, studyId, participantId);
  };
  protoOf(GetParticipant).toString = function () {
    return 'GetParticipant(studyId=' + this.studyId.toString() + ', participantId=' + this.participantId.toString() + ')';
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
    if (!this.studyId.equals(other.studyId))
      return false;
    if (!this.participantId.equals(other.participantId))
      return false;
    return true;
  };
  function GetParticipants(studyId) {
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(GetParticipants).z2j = function () {
    return this.studyId;
  };
  protoOf(GetParticipants).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Participant), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetParticipants).sd = function () {
    return this.studyId;
  };
  protoOf(GetParticipants).u2b = function (studyId) {
    return new GetParticipants(studyId);
  };
  protoOf(GetParticipants).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return $super === VOID ? this.u2b(studyId) : $super.u2b.call(this, studyId);
  };
  protoOf(GetParticipants).toString = function () {
    return 'GetParticipants(studyId=' + this.studyId.toString() + ')';
  };
  protoOf(GetParticipants).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(GetParticipants).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetParticipants))
      return false;
    if (!this.studyId.equals(other.studyId))
      return false;
    return true;
  };
  function InviteNewParticipantGroup(studyId, group) {
    Companion_getInstance_20();
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
    this.group = group;
  }
  protoOf(InviteNewParticipantGroup).z2j = function () {
    return this.studyId;
  };
  protoOf(InviteNewParticipantGroup).y2o = function () {
    return this.group;
  };
  protoOf(InviteNewParticipantGroup).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(ParticipantGroupStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(InviteNewParticipantGroup).sd = function () {
    return this.studyId;
  };
  protoOf(InviteNewParticipantGroup).td = function () {
    return this.group;
  };
  protoOf(InviteNewParticipantGroup).z2o = function (studyId, group) {
    return new InviteNewParticipantGroup(studyId, group);
  };
  protoOf(InviteNewParticipantGroup).copy = function (studyId, group, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    group = group === VOID ? this.group : group;
    return $super === VOID ? this.z2o(studyId, group) : $super.z2o.call(this, studyId, group);
  };
  protoOf(InviteNewParticipantGroup).toString = function () {
    return 'InviteNewParticipantGroup(studyId=' + this.studyId.toString() + ', group=' + toString_0(this.group) + ')';
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
    if (!this.studyId.equals(other.studyId))
      return false;
    if (!equals(this.group, other.group))
      return false;
    return true;
  };
  function CreateParticipantGroup(groupId, group, studyId, representation) {
    Companion_getInstance_21();
    representation = representation === VOID ? Companion_getInstance_9().Default : representation;
    RecruitmentServiceRequest.call(this);
    this.groupId = groupId;
    this.group = group;
    this.studyId = studyId;
    this.representation = representation;
  }
  protoOf(CreateParticipantGroup).a2p = function () {
    return this.groupId;
  };
  protoOf(CreateParticipantGroup).y2o = function () {
    return this.group;
  };
  protoOf(CreateParticipantGroup).z2j = function () {
    return this.studyId;
  };
  protoOf(CreateParticipantGroup).b2n = function () {
    return this.representation;
  };
  protoOf(CreateParticipantGroup).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(ParticipantGroupStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(CreateParticipantGroup).sd = function () {
    return this.groupId;
  };
  protoOf(CreateParticipantGroup).td = function () {
    return this.group;
  };
  protoOf(CreateParticipantGroup).m1j = function () {
    return this.studyId;
  };
  protoOf(CreateParticipantGroup).l1k = function () {
    return this.representation;
  };
  protoOf(CreateParticipantGroup).b2p = function (groupId, group, studyId, representation) {
    return new CreateParticipantGroup(groupId, group, studyId, representation);
  };
  protoOf(CreateParticipantGroup).copy = function (groupId, group, studyId, representation, $super) {
    groupId = groupId === VOID ? this.groupId : groupId;
    group = group === VOID ? this.group : group;
    studyId = studyId === VOID ? this.studyId : studyId;
    representation = representation === VOID ? this.representation : representation;
    return $super === VOID ? this.b2p(groupId, group, studyId, representation) : $super.b2p.call(this, groupId, group, studyId, representation);
  };
  protoOf(CreateParticipantGroup).toString = function () {
    return 'CreateParticipantGroup(groupId=' + this.groupId.toString() + ', group=' + toString_0(this.group) + ', studyId=' + this.studyId.toString() + ', representation=' + this.representation.toString() + ')';
  };
  protoOf(CreateParticipantGroup).hashCode = function () {
    var result = this.groupId.hashCode();
    result = imul(result, 31) + hashCode(this.group) | 0;
    result = imul(result, 31) + this.studyId.hashCode() | 0;
    result = imul(result, 31) + this.representation.hashCode() | 0;
    return result;
  };
  protoOf(CreateParticipantGroup).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateParticipantGroup))
      return false;
    if (!this.groupId.equals(other.groupId))
      return false;
    if (!equals(this.group, other.group))
      return false;
    if (!this.studyId.equals(other.studyId))
      return false;
    if (!this.representation.equals(other.representation))
      return false;
    return true;
  };
  function UpdateParticipantGroup(groupId, group, representation) {
    Companion_getInstance_22();
    group = group === VOID ? null : group;
    representation = representation === VOID ? null : representation;
    RecruitmentServiceRequest.call(this);
    this.groupId = groupId;
    this.group = group;
    this.representation = representation;
  }
  protoOf(UpdateParticipantGroup).a2p = function () {
    return this.groupId;
  };
  protoOf(UpdateParticipantGroup).y2o = function () {
    return this.group;
  };
  protoOf(UpdateParticipantGroup).b2n = function () {
    return this.representation;
  };
  protoOf(UpdateParticipantGroup).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(ParticipantGroupStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(UpdateParticipantGroup).sd = function () {
    return this.groupId;
  };
  protoOf(UpdateParticipantGroup).td = function () {
    return this.group;
  };
  protoOf(UpdateParticipantGroup).m1j = function () {
    return this.representation;
  };
  protoOf(UpdateParticipantGroup).c2p = function (groupId, group, representation) {
    return new UpdateParticipantGroup(groupId, group, representation);
  };
  protoOf(UpdateParticipantGroup).copy = function (groupId, group, representation, $super) {
    groupId = groupId === VOID ? this.groupId : groupId;
    group = group === VOID ? this.group : group;
    representation = representation === VOID ? this.representation : representation;
    return $super === VOID ? this.c2p(groupId, group, representation) : $super.c2p.call(this, groupId, group, representation);
  };
  protoOf(UpdateParticipantGroup).toString = function () {
    return 'UpdateParticipantGroup(groupId=' + this.groupId.toString() + ', group=' + toString(this.group) + ', representation=' + toString(this.representation) + ')';
  };
  protoOf(UpdateParticipantGroup).hashCode = function () {
    var result = this.groupId.hashCode();
    result = imul(result, 31) + (this.group == null ? 0 : hashCode(this.group)) | 0;
    result = imul(result, 31) + (this.representation == null ? 0 : this.representation.hashCode()) | 0;
    return result;
  };
  protoOf(UpdateParticipantGroup).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UpdateParticipantGroup))
      return false;
    if (!this.groupId.equals(other.groupId))
      return false;
    if (!equals(this.group, other.group))
      return false;
    if (!equals(this.representation, other.representation))
      return false;
    return true;
  };
  function InviteParticipantGroup(groupId) {
    RecruitmentServiceRequest.call(this);
    this.groupId = groupId;
  }
  protoOf(InviteParticipantGroup).a2p = function () {
    return this.groupId;
  };
  protoOf(InviteParticipantGroup).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(ParticipantGroupStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(InviteParticipantGroup).sd = function () {
    return this.groupId;
  };
  protoOf(InviteParticipantGroup).u2b = function (groupId) {
    return new InviteParticipantGroup(groupId);
  };
  protoOf(InviteParticipantGroup).copy = function (groupId, $super) {
    groupId = groupId === VOID ? this.groupId : groupId;
    return $super === VOID ? this.u2b(groupId) : $super.u2b.call(this, groupId);
  };
  protoOf(InviteParticipantGroup).toString = function () {
    return 'InviteParticipantGroup(groupId=' + this.groupId.toString() + ')';
  };
  protoOf(InviteParticipantGroup).hashCode = function () {
    return this.groupId.hashCode();
  };
  protoOf(InviteParticipantGroup).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InviteParticipantGroup))
      return false;
    if (!this.groupId.equals(other.groupId))
      return false;
    return true;
  };
  function GetParticipantGroupStatusList(studyId) {
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(GetParticipantGroupStatusList).z2j = function () {
    return this.studyId;
  };
  protoOf(GetParticipantGroupStatusList).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ParticipantGroupStatus), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetParticipantGroupStatusList).sd = function () {
    return this.studyId;
  };
  protoOf(GetParticipantGroupStatusList).u2b = function (studyId) {
    return new GetParticipantGroupStatusList(studyId);
  };
  protoOf(GetParticipantGroupStatusList).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return $super === VOID ? this.u2b(studyId) : $super.u2b.call(this, studyId);
  };
  protoOf(GetParticipantGroupStatusList).toString = function () {
    return 'GetParticipantGroupStatusList(studyId=' + this.studyId.toString() + ')';
  };
  protoOf(GetParticipantGroupStatusList).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(GetParticipantGroupStatusList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetParticipantGroupStatusList))
      return false;
    if (!this.studyId.equals(other.studyId))
      return false;
    return true;
  };
  function StopParticipantGroup(studyId, groupId) {
    RecruitmentServiceRequest.call(this);
    this.studyId = studyId;
    this.groupId = groupId;
  }
  protoOf(StopParticipantGroup).z2j = function () {
    return this.studyId;
  };
  protoOf(StopParticipantGroup).a2p = function () {
    return this.groupId;
  };
  protoOf(StopParticipantGroup).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(ParticipantGroupStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(StopParticipantGroup).sd = function () {
    return this.studyId;
  };
  protoOf(StopParticipantGroup).td = function () {
    return this.groupId;
  };
  protoOf(StopParticipantGroup).x2o = function (studyId, groupId) {
    return new StopParticipantGroup(studyId, groupId);
  };
  protoOf(StopParticipantGroup).copy = function (studyId, groupId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    groupId = groupId === VOID ? this.groupId : groupId;
    return $super === VOID ? this.x2o(studyId, groupId) : $super.x2o.call(this, studyId, groupId);
  };
  protoOf(StopParticipantGroup).toString = function () {
    return 'StopParticipantGroup(studyId=' + this.studyId.toString() + ', groupId=' + this.groupId.toString() + ')';
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
    if (!this.studyId.equals(other.studyId))
      return false;
    if (!this.groupId.equals(other.groupId))
      return false;
    return true;
  };
  function Companion_24() {
  }
  protoOf(Companion_24).j2a = function (typeSerial0) {
    var tmp = getKClass(RecruitmentServiceRequest);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(AddParticipantByEmailAddress), getKClass(AddParticipantByUsername), getKClass(CreateParticipantGroup), getKClass(GetParticipant), getKClass(GetParticipantGroupStatusList), getKClass(GetParticipants), getKClass(InviteNewParticipantGroup), getKClass(InviteParticipantGroup), getKClass(StopParticipantGroup), getKClass(UpdateParticipantGroup)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_11(), $serializer_getInstance_12(), $serializer_getInstance_16(), $serializer_getInstance_13(), $serializer_getInstance_19(), $serializer_getInstance_14(), $serializer_getInstance_15(), $serializer_getInstance_18(), $serializer_getInstance_20(), $serializer_getInstance_17()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.studies.infrastructure.RecruitmentServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$6);
  };
  protoOf(Companion_24).pw = function (typeParamsSerializers) {
    return this.j2a(typeParamsSerializers[0]);
  };
  var Companion_instance_25;
  function Companion_getInstance_26() {
    return Companion_instance_25;
  }
  function RecruitmentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.v2o_1 = apiVersion;
    return $this;
  }
  function RecruitmentServiceRequest() {
    ApplicationServiceRequest.call(this);
    this.v2o_1 = Companion_getInstance_1().o2j_1;
  }
  protoOf(RecruitmentServiceRequest).g26 = function () {
    return this.v2o_1;
  };
  function StudyServiceRequest$Companion$serializer$ref(p0) {
    return constructCallableReference(function (p0_0) {
      return p0.j2a(p0_0);
    }, 1, 0, 21, 'serializer', [p0]);
  }
  function Companion_25() {
  }
  var Companion_instance_26;
  function Companion_getInstance_27() {
    return Companion_instance_26;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.CreateStudy', this, 5);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('ownerId', false);
    tmp0_serialDesc.pv('name', false);
    tmp0_serialDesc.pv('description', true);
    tmp0_serialDesc.pv('invitation', true);
    this.d2p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).e2p = function (encoder, value) {
    var tmp0_desc = this.d2p_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.ownerId);
    tmp1_output.mp(tmp0_desc, 2, value.name);
    if (tmp1_output.up(tmp0_desc, 3) ? true : !(value.description == null)) {
      tmp1_output.qp(tmp0_desc, 3, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.up(tmp0_desc, 4) ? true : !(value.invitation == null)) {
      tmp1_output.qp(tmp0_desc, 4, $serializer_getInstance(), value.invitation);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_19).nk = function (encoder, value) {
    return this.e2p(encoder, value instanceof CreateStudy ? value : THROW_CCE());
  };
  protoOf($serializer_19).ok = function (decoder) {
    var tmp0_desc = this.d2p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xn(tmp0_desc);
    if (tmp9_input.no()) {
      tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ho(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.lo(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.lo(tmp0_desc, 4, $serializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ho(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.lo(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.lo(tmp0_desc, 4, $serializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return CreateStudy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_19).mk = function () {
    return this.d2p_1;
  };
  protoOf($serializer_19).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance())];
  };
  var $serializer_instance_19;
  function $serializer_getInstance_21() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function CreateStudy_init_$Init$(seen0, apiVersion, ownerId, name, description, invitation, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_21().d2p_1);
    }
    StudyServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.ownerId = ownerId;
    $this.name = name;
    if (0 === (seen0 & 8))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 16))
      $this.invitation = null;
    else
      $this.invitation = invitation;
    return $this;
  }
  function CreateStudy_init_$Create$(seen0, apiVersion, ownerId, name, description, invitation, serializationConstructorMarker) {
    return CreateStudy_init_$Init$(seen0, apiVersion, ownerId, name, description, invitation, serializationConstructorMarker, objectCreate(protoOf(CreateStudy)));
  }
  function Companion_26() {
  }
  var Companion_instance_27;
  function Companion_getInstance_28() {
    return Companion_instance_27;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.SetInternalDescription', this, 4);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    tmp0_serialDesc.pv('name', false);
    tmp0_serialDesc.pv('description', false);
    this.g2p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).h2p = function (encoder, value) {
    var tmp0_desc = this.g2p_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.mp(tmp0_desc, 2, value.name);
    tmp1_output.qp(tmp0_desc, 3, StringSerializer_getInstance(), value.description);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_20).nk = function (encoder, value) {
    return this.h2p(encoder, value instanceof SetInternalDescription ? value : THROW_CCE());
  };
  protoOf($serializer_20).ok = function (decoder) {
    var tmp0_desc = this.g2p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ho(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ho(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return SetInternalDescription_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_20).mk = function () {
    return this.g2p_1;
  };
  protoOf($serializer_20).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_20;
  function $serializer_getInstance_22() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function SetInternalDescription_init_$Init$(seen0, apiVersion, studyId, name, description, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_22().g2p_1);
    }
    StudyServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.name = name;
    $this.description = description;
    return $this;
  }
  function SetInternalDescription_init_$Create$(seen0, apiVersion, studyId, name, description, serializationConstructorMarker) {
    return SetInternalDescription_init_$Init$(seen0, apiVersion, studyId, name, description, serializationConstructorMarker, objectCreate(protoOf(SetInternalDescription)));
  }
  function Companion_27() {
  }
  var Companion_instance_28;
  function Companion_getInstance_29() {
    return Companion_instance_28;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.GetStudyDetails', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    this.j2p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).k2p = function (encoder, value) {
    var tmp0_desc = this.j2p_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_21).nk = function (encoder, value) {
    return this.k2p(encoder, value instanceof GetStudyDetails ? value : THROW_CCE());
  };
  protoOf($serializer_21).ok = function (decoder) {
    var tmp0_desc = this.j2p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return GetStudyDetails_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_21).mk = function () {
    return this.j2p_1;
  };
  protoOf($serializer_21).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_23() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function GetStudyDetails_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_23().j2p_1);
    }
    StudyServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function GetStudyDetails_init_$Create$(seen0, apiVersion, studyId, serializationConstructorMarker) {
    return GetStudyDetails_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(GetStudyDetails)));
  }
  function Companion_28() {
  }
  var Companion_instance_29;
  function Companion_getInstance_30() {
    return Companion_instance_29;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.GetStudyStatus', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    this.m2p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).n2p = function (encoder, value) {
    var tmp0_desc = this.m2p_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_22).nk = function (encoder, value) {
    return this.n2p(encoder, value instanceof GetStudyStatus ? value : THROW_CCE());
  };
  protoOf($serializer_22).ok = function (decoder) {
    var tmp0_desc = this.m2p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return GetStudyStatus_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_22).mk = function () {
    return this.m2p_1;
  };
  protoOf($serializer_22).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_22;
  function $serializer_getInstance_24() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function GetStudyStatus_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_24().m2p_1);
    }
    StudyServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function GetStudyStatus_init_$Create$(seen0, apiVersion, studyId, serializationConstructorMarker) {
    return GetStudyStatus_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(GetStudyStatus)));
  }
  function Companion_29() {
  }
  var Companion_instance_30;
  function Companion_getInstance_31() {
    return Companion_instance_30;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.GetStudiesOverview', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('ownerId', false);
    this.p2p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).q2p = function (encoder, value) {
    var tmp0_desc = this.p2p_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.ownerId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_23).nk = function (encoder, value) {
    return this.q2p(encoder, value instanceof GetStudiesOverview ? value : THROW_CCE());
  };
  protoOf($serializer_23).ok = function (decoder) {
    var tmp0_desc = this.p2p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return GetStudiesOverview_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_23).mk = function () {
    return this.p2p_1;
  };
  protoOf($serializer_23).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_23;
  function $serializer_getInstance_25() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function GetStudiesOverview_init_$Init$(seen0, apiVersion, ownerId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_25().p2p_1);
    }
    StudyServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.ownerId = ownerId;
    return $this;
  }
  function GetStudiesOverview_init_$Create$(seen0, apiVersion, ownerId, serializationConstructorMarker) {
    return GetStudiesOverview_init_$Init$(seen0, apiVersion, ownerId, serializationConstructorMarker, objectCreate(protoOf(GetStudiesOverview)));
  }
  function Companion_30() {
  }
  var Companion_instance_31;
  function Companion_getInstance_32() {
    return Companion_instance_31;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.SetInvitation', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    tmp0_serialDesc.pv('invitation', false);
    this.s2p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).t2p = function (encoder, value) {
    var tmp0_desc = this.s2p_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.op(tmp0_desc, 2, $serializer_getInstance(), value.invitation);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_24).nk = function (encoder, value) {
    return this.t2p(encoder, value instanceof SetInvitation ? value : THROW_CCE());
  };
  protoOf($serializer_24).ok = function (decoder) {
    var tmp0_desc = this.s2p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, $serializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, $serializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return SetInvitation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_24).mk = function () {
    return this.s2p_1;
  };
  protoOf($serializer_24).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), $serializer_getInstance()];
  };
  var $serializer_instance_24;
  function $serializer_getInstance_26() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function SetInvitation_init_$Init$(seen0, apiVersion, studyId, invitation, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_26().s2p_1);
    }
    StudyServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.invitation = invitation;
    return $this;
  }
  function SetInvitation_init_$Create$(seen0, apiVersion, studyId, invitation, serializationConstructorMarker) {
    return SetInvitation_init_$Init$(seen0, apiVersion, studyId, invitation, serializationConstructorMarker, objectCreate(protoOf(SetInvitation)));
  }
  function Companion_31() {
  }
  var Companion_instance_32;
  function Companion_getInstance_33() {
    return Companion_instance_32;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.SetProtocol', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    tmp0_serialDesc.pv('protocol', false);
    this.v2p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).w2p = function (encoder, value) {
    var tmp0_desc = this.v2p_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.op(tmp0_desc, 2, $serializer_getInstance_0(), value.protocol);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_25).nk = function (encoder, value) {
    return this.w2p(encoder, value instanceof SetProtocol ? value : THROW_CCE());
  };
  protoOf($serializer_25).ok = function (decoder) {
    var tmp0_desc = this.v2p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, $serializer_getInstance_0(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, $serializer_getInstance_0(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return SetProtocol_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_25).mk = function () {
    return this.v2p_1;
  };
  protoOf($serializer_25).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), $serializer_getInstance_0()];
  };
  var $serializer_instance_25;
  function $serializer_getInstance_27() {
    if ($serializer_instance_25 == null)
      new $serializer_25();
    return $serializer_instance_25;
  }
  function SetProtocol_init_$Init$(seen0, apiVersion, studyId, protocol, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_27().v2p_1);
    }
    StudyServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    $this.protocol = protocol;
    return $this;
  }
  function SetProtocol_init_$Create$(seen0, apiVersion, studyId, protocol, serializationConstructorMarker) {
    return SetProtocol_init_$Init$(seen0, apiVersion, studyId, protocol, serializationConstructorMarker, objectCreate(protoOf(SetProtocol)));
  }
  function Companion_32() {
  }
  var Companion_instance_33;
  function Companion_getInstance_34() {
    return Companion_instance_33;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.RemoveProtocol', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    this.y2p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).z2p = function (encoder, value) {
    var tmp0_desc = this.y2p_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_26).nk = function (encoder, value) {
    return this.z2p(encoder, value instanceof RemoveProtocol ? value : THROW_CCE());
  };
  protoOf($serializer_26).ok = function (decoder) {
    var tmp0_desc = this.y2p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return RemoveProtocol_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_26).mk = function () {
    return this.y2p_1;
  };
  protoOf($serializer_26).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_26;
  function $serializer_getInstance_28() {
    if ($serializer_instance_26 == null)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function RemoveProtocol_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_28().y2p_1);
    }
    StudyServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function RemoveProtocol_init_$Create$(seen0, apiVersion, studyId, serializationConstructorMarker) {
    return RemoveProtocol_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(RemoveProtocol)));
  }
  function Companion_33() {
  }
  var Companion_instance_34;
  function Companion_getInstance_35() {
    return Companion_instance_34;
  }
  function $serializer_27() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.GoLive', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    this.b2q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).c2q = function (encoder, value) {
    var tmp0_desc = this.b2q_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_27).nk = function (encoder, value) {
    return this.c2q(encoder, value instanceof GoLive ? value : THROW_CCE());
  };
  protoOf($serializer_27).ok = function (decoder) {
    var tmp0_desc = this.b2q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return GoLive_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_27).mk = function () {
    return this.b2q_1;
  };
  protoOf($serializer_27).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_27;
  function $serializer_getInstance_29() {
    if ($serializer_instance_27 == null)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function GoLive_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_29().b2q_1);
    }
    StudyServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function GoLive_init_$Create$(seen0, apiVersion, studyId, serializationConstructorMarker) {
    return GoLive_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(GoLive)));
  }
  function Companion_34() {
  }
  var Companion_instance_35;
  function Companion_getInstance_36() {
    return Companion_instance_35;
  }
  function $serializer_28() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.studies.infrastructure.StudyServiceRequest.Remove', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyId', false);
    this.e2q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).f2q = function (encoder, value) {
    var tmp0_desc = this.e2q_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_28).nk = function (encoder, value) {
    return this.f2q(encoder, value instanceof Remove ? value : THROW_CCE());
  };
  protoOf($serializer_28).ok = function (decoder) {
    var tmp0_desc = this.e2q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return Remove_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_28).mk = function () {
    return this.e2q_1;
  };
  protoOf($serializer_28).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_28;
  function $serializer_getInstance_30() {
    if ($serializer_instance_28 == null)
      new $serializer_28();
    return $serializer_instance_28;
  }
  function Remove_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_30().e2q_1);
    }
    StudyServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyId = studyId;
    return $this;
  }
  function Remove_init_$Create$(seen0, apiVersion, studyId, serializationConstructorMarker) {
    return Remove_init_$Init$(seen0, apiVersion, studyId, serializationConstructorMarker, objectCreate(protoOf(Remove)));
  }
  function Serializer_0() {
    Serializer_instance_0 = this;
    var tmp = this;
    tmp.h2q_1 = ignoreTypeParameters(StudyServiceRequest$Companion$serializer$ref(Companion_instance_36));
  }
  protoOf(Serializer_0).mk = function () {
    return this.h2q_1.mk();
  };
  protoOf(Serializer_0).i2q = function (encoder, value) {
    this.h2q_1.nk(encoder, value);
  };
  protoOf(Serializer_0).nk = function (encoder, value) {
    return this.i2q(encoder, value instanceof StudyServiceRequest ? value : THROW_CCE());
  };
  protoOf(Serializer_0).ok = function (decoder) {
    return this.h2q_1.ok(decoder);
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
  protoOf(CreateStudy).i28 = function () {
    return this.ownerId;
  };
  protoOf(CreateStudy).k = function () {
    return this.name;
  };
  protoOf(CreateStudy).e1y = function () {
    return this.description;
  };
  protoOf(CreateStudy).q2f = function () {
    return this.invitation;
  };
  protoOf(CreateStudy).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(CreateStudy).sd = function () {
    return this.ownerId;
  };
  protoOf(CreateStudy).td = function () {
    return this.name;
  };
  protoOf(CreateStudy).m1j = function () {
    return this.description;
  };
  protoOf(CreateStudy).l1k = function () {
    return this.invitation;
  };
  protoOf(CreateStudy).j2q = function (ownerId, name, description, invitation) {
    return new CreateStudy(ownerId, name, description, invitation);
  };
  protoOf(CreateStudy).copy = function (ownerId, name, description, invitation, $super) {
    ownerId = ownerId === VOID ? this.ownerId : ownerId;
    name = name === VOID ? this.name : name;
    description = description === VOID ? this.description : description;
    invitation = invitation === VOID ? this.invitation : invitation;
    return $super === VOID ? this.j2q(ownerId, name, description, invitation) : $super.j2q.call(this, ownerId, name, description, invitation);
  };
  protoOf(CreateStudy).toString = function () {
    return 'CreateStudy(ownerId=' + this.ownerId.toString() + ', name=' + this.name + ', description=' + this.description + ', invitation=' + toString(this.invitation) + ')';
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
    if (!this.ownerId.equals(other.ownerId))
      return false;
    if (!(this.name === other.name))
      return false;
    if (!(this.description == other.description))
      return false;
    if (!equals(this.invitation, other.invitation))
      return false;
    return true;
  };
  function SetInternalDescription(studyId, name, description) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
    this.name = name;
    this.description = description;
  }
  protoOf(SetInternalDescription).z2j = function () {
    return this.studyId;
  };
  protoOf(SetInternalDescription).k = function () {
    return this.name;
  };
  protoOf(SetInternalDescription).e1y = function () {
    return this.description;
  };
  protoOf(SetInternalDescription).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(SetInternalDescription).sd = function () {
    return this.studyId;
  };
  protoOf(SetInternalDescription).td = function () {
    return this.name;
  };
  protoOf(SetInternalDescription).m1j = function () {
    return this.description;
  };
  protoOf(SetInternalDescription).l2q = function (studyId, name, description) {
    return new SetInternalDescription(studyId, name, description);
  };
  protoOf(SetInternalDescription).copy = function (studyId, name, description, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    name = name === VOID ? this.name : name;
    description = description === VOID ? this.description : description;
    return $super === VOID ? this.l2q(studyId, name, description) : $super.l2q.call(this, studyId, name, description);
  };
  protoOf(SetInternalDescription).toString = function () {
    return 'SetInternalDescription(studyId=' + this.studyId.toString() + ', name=' + this.name + ', description=' + this.description + ')';
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
    if (!this.studyId.equals(other.studyId))
      return false;
    if (!(this.name === other.name))
      return false;
    if (!(this.description == other.description))
      return false;
    return true;
  };
  function GetStudyDetails(studyId) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(GetStudyDetails).z2j = function () {
    return this.studyId;
  };
  protoOf(GetStudyDetails).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDetails), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetStudyDetails).sd = function () {
    return this.studyId;
  };
  protoOf(GetStudyDetails).u2b = function (studyId) {
    return new GetStudyDetails(studyId);
  };
  protoOf(GetStudyDetails).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return $super === VOID ? this.u2b(studyId) : $super.u2b.call(this, studyId);
  };
  protoOf(GetStudyDetails).toString = function () {
    return 'GetStudyDetails(studyId=' + this.studyId.toString() + ')';
  };
  protoOf(GetStudyDetails).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(GetStudyDetails).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetStudyDetails))
      return false;
    if (!this.studyId.equals(other.studyId))
      return false;
    return true;
  };
  function GetStudyStatus(studyId) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(GetStudyStatus).z2j = function () {
    return this.studyId;
  };
  protoOf(GetStudyStatus).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetStudyStatus).sd = function () {
    return this.studyId;
  };
  protoOf(GetStudyStatus).u2b = function (studyId) {
    return new GetStudyStatus(studyId);
  };
  protoOf(GetStudyStatus).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return $super === VOID ? this.u2b(studyId) : $super.u2b.call(this, studyId);
  };
  protoOf(GetStudyStatus).toString = function () {
    return 'GetStudyStatus(studyId=' + this.studyId.toString() + ')';
  };
  protoOf(GetStudyStatus).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(GetStudyStatus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetStudyStatus))
      return false;
    if (!this.studyId.equals(other.studyId))
      return false;
    return true;
  };
  function GetStudiesOverview(ownerId) {
    StudyServiceRequest.call(this);
    this.ownerId = ownerId;
  }
  protoOf(GetStudiesOverview).i28 = function () {
    return this.ownerId;
  };
  protoOf(GetStudiesOverview).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(StudyStatus), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetStudiesOverview).sd = function () {
    return this.ownerId;
  };
  protoOf(GetStudiesOverview).u2b = function (ownerId) {
    return new GetStudiesOverview(ownerId);
  };
  protoOf(GetStudiesOverview).copy = function (ownerId, $super) {
    ownerId = ownerId === VOID ? this.ownerId : ownerId;
    return $super === VOID ? this.u2b(ownerId) : $super.u2b.call(this, ownerId);
  };
  protoOf(GetStudiesOverview).toString = function () {
    return 'GetStudiesOverview(ownerId=' + this.ownerId.toString() + ')';
  };
  protoOf(GetStudiesOverview).hashCode = function () {
    return this.ownerId.hashCode();
  };
  protoOf(GetStudiesOverview).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetStudiesOverview))
      return false;
    if (!this.ownerId.equals(other.ownerId))
      return false;
    return true;
  };
  function SetInvitation(studyId, invitation) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
    this.invitation = invitation;
  }
  protoOf(SetInvitation).z2j = function () {
    return this.studyId;
  };
  protoOf(SetInvitation).q2f = function () {
    return this.invitation;
  };
  protoOf(SetInvitation).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(SetInvitation).sd = function () {
    return this.studyId;
  };
  protoOf(SetInvitation).td = function () {
    return this.invitation;
  };
  protoOf(SetInvitation).m2q = function (studyId, invitation) {
    return new SetInvitation(studyId, invitation);
  };
  protoOf(SetInvitation).copy = function (studyId, invitation, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    invitation = invitation === VOID ? this.invitation : invitation;
    return $super === VOID ? this.m2q(studyId, invitation) : $super.m2q.call(this, studyId, invitation);
  };
  protoOf(SetInvitation).toString = function () {
    return 'SetInvitation(studyId=' + this.studyId.toString() + ', invitation=' + this.invitation.toString() + ')';
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
    if (!this.studyId.equals(other.studyId))
      return false;
    if (!this.invitation.equals(other.invitation))
      return false;
    return true;
  };
  function SetProtocol(studyId, protocol) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
    this.protocol = protocol;
  }
  protoOf(SetProtocol).z2j = function () {
    return this.studyId;
  };
  protoOf(SetProtocol).n2b = function () {
    return this.protocol;
  };
  protoOf(SetProtocol).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(SetProtocol).sd = function () {
    return this.studyId;
  };
  protoOf(SetProtocol).td = function () {
    return this.protocol;
  };
  protoOf(SetProtocol).n2q = function (studyId, protocol) {
    return new SetProtocol(studyId, protocol);
  };
  protoOf(SetProtocol).copy = function (studyId, protocol, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    protocol = protocol === VOID ? this.protocol : protocol;
    return $super === VOID ? this.n2q(studyId, protocol) : $super.n2q.call(this, studyId, protocol);
  };
  protoOf(SetProtocol).toString = function () {
    return 'SetProtocol(studyId=' + this.studyId.toString() + ', protocol=' + this.protocol.toString() + ')';
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
    if (!this.studyId.equals(other.studyId))
      return false;
    if (!this.protocol.equals(other.protocol))
      return false;
    return true;
  };
  function RemoveProtocol(studyId) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(RemoveProtocol).z2j = function () {
    return this.studyId;
  };
  protoOf(RemoveProtocol).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(RemoveProtocol).sd = function () {
    return this.studyId;
  };
  protoOf(RemoveProtocol).u2b = function (studyId) {
    return new RemoveProtocol(studyId);
  };
  protoOf(RemoveProtocol).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return $super === VOID ? this.u2b(studyId) : $super.u2b.call(this, studyId);
  };
  protoOf(RemoveProtocol).toString = function () {
    return 'RemoveProtocol(studyId=' + this.studyId.toString() + ')';
  };
  protoOf(RemoveProtocol).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(RemoveProtocol).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RemoveProtocol))
      return false;
    if (!this.studyId.equals(other.studyId))
      return false;
    return true;
  };
  function GoLive(studyId) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(GoLive).z2j = function () {
    return this.studyId;
  };
  protoOf(GoLive).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GoLive).sd = function () {
    return this.studyId;
  };
  protoOf(GoLive).u2b = function (studyId) {
    return new GoLive(studyId);
  };
  protoOf(GoLive).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return $super === VOID ? this.u2b(studyId) : $super.u2b.call(this, studyId);
  };
  protoOf(GoLive).toString = function () {
    return 'GoLive(studyId=' + this.studyId.toString() + ')';
  };
  protoOf(GoLive).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(GoLive).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GoLive))
      return false;
    if (!this.studyId.equals(other.studyId))
      return false;
    return true;
  };
  function Remove(studyId) {
    StudyServiceRequest.call(this);
    this.studyId = studyId;
  }
  protoOf(Remove).z2j = function () {
    return this.studyId;
  };
  protoOf(Remove).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(PrimitiveClasses_getInstance().x9(), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(Remove).sd = function () {
    return this.studyId;
  };
  protoOf(Remove).u2b = function (studyId) {
    return new Remove(studyId);
  };
  protoOf(Remove).copy = function (studyId, $super) {
    studyId = studyId === VOID ? this.studyId : studyId;
    return $super === VOID ? this.u2b(studyId) : $super.u2b.call(this, studyId);
  };
  protoOf(Remove).toString = function () {
    return 'Remove(studyId=' + this.studyId.toString() + ')';
  };
  protoOf(Remove).hashCode = function () {
    return this.studyId.hashCode();
  };
  protoOf(Remove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Remove))
      return false;
    if (!this.studyId.equals(other.studyId))
      return false;
    return true;
  };
  function Companion_35() {
  }
  protoOf(Companion_35).j2a = function (typeSerial0) {
    var tmp = getKClass(StudyServiceRequest);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(CreateStudy), getKClass(GetStudiesOverview), getKClass(GetStudyDetails), getKClass(GetStudyStatus), getKClass(GoLive), getKClass(Remove), getKClass(RemoveProtocol), getKClass(SetInternalDescription), getKClass(SetInvitation), getKClass(SetProtocol)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_21(), $serializer_getInstance_25(), $serializer_getInstance_23(), $serializer_getInstance_24(), $serializer_getInstance_29(), $serializer_getInstance_30(), $serializer_getInstance_28(), $serializer_getInstance_22(), $serializer_getInstance_26(), $serializer_getInstance_27()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.studies.infrastructure.StudyServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$6);
  };
  protoOf(Companion_35).pw = function (typeParamsSerializers) {
    return this.j2a(typeParamsSerializers[0]);
  };
  var Companion_instance_36;
  function Companion_getInstance_37() {
    return Companion_instance_36;
  }
  function StudyServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.k2q_1 = apiVersion;
    return $this;
  }
  function StudyServiceRequest() {
    ApplicationServiceRequest.call(this);
    this.k2q_1 = Companion_getInstance_3().c2k_1;
  }
  protoOf(StudyServiceRequest).g26 = function () {
    return this.k2q_1;
  };
  //region block: post-declaration
  protoOf($serializer).fw = typeParametersSerializers;
  protoOf($serializer_0).fw = typeParametersSerializers;
  protoOf($serializer_1).fw = typeParametersSerializers;
  defineProp(protoOf(StudyStatus), 'studyId', function () {
    return this.z2j();
  });
  defineProp(protoOf(StudyStatus), 'name', function () {
    return this.k();
  });
  defineProp(protoOf(StudyStatus), 'createdOn', function () {
    return this.n22();
  });
  defineProp(protoOf(StudyStatus), 'studyProtocolId', function () {
    return this.w2k();
  });
  defineProp(protoOf(StudyStatus), 'canSetInvitation', function () {
    return this.x2k();
  });
  defineProp(protoOf(StudyStatus), 'canSetStudyProtocol', function () {
    return this.y2k();
  });
  defineProp(protoOf(StudyStatus), 'canDeployToParticipants', function () {
    return this.z2k();
  });
  protoOf($serializer_2).fw = typeParametersSerializers;
  protoOf($serializer_3).fw = typeParametersSerializers;
  protoOf($serializer_4).fw = typeParametersSerializers;
  protoOf($serializer_5).fw = typeParametersSerializers;
  protoOf($serializer_6).fw = typeParametersSerializers;
  protoOf($serializer_7).fw = typeParametersSerializers;
  protoOf($serializer_8).fw = typeParametersSerializers;
  defineProp(protoOf(ParticipantGroupStatus), 'id', function () {
    return this.m22();
  });
  defineProp(protoOf(ParticipantGroupStatus), 'representation', function () {
    return this.b2n();
  });
  defineProp(protoOf(ParticipantGroupStatus), 'participants', function () {
    return this.a2n();
  });
  defineProp(protoOf(ParticipantGroupStatus), 'assignedParticipantRoles', function () {
    return this.q2g();
  });
  defineProp(protoOf(InDeployment), 'invitedOn', function () {
    return this.d2n();
  });
  defineProp(protoOf(InDeployment), 'studyDeploymentStatus', function () {
    return this.e2n();
  });
  protoOf($serializer_9).fw = typeParametersSerializers;
  protoOf($serializer_10).fw = typeParametersSerializers;
  protoOf($serializer_11).fw = typeParametersSerializers;
  protoOf($serializer_12).fw = typeParametersSerializers;
  protoOf($serializer_13).fw = typeParametersSerializers;
  protoOf($serializer_14).fw = typeParametersSerializers;
  protoOf($serializer_15).fw = typeParametersSerializers;
  protoOf($serializer_16).fw = typeParametersSerializers;
  protoOf($serializer_17).fw = typeParametersSerializers;
  protoOf($serializer_18).fw = typeParametersSerializers;
  protoOf($serializer_19).fw = typeParametersSerializers;
  protoOf($serializer_20).fw = typeParametersSerializers;
  protoOf($serializer_21).fw = typeParametersSerializers;
  protoOf($serializer_22).fw = typeParametersSerializers;
  protoOf($serializer_23).fw = typeParametersSerializers;
  protoOf($serializer_24).fw = typeParametersSerializers;
  protoOf($serializer_25).fw = typeParametersSerializers;
  protoOf($serializer_26).fw = typeParametersSerializers;
  protoOf($serializer_27).fw = typeParametersSerializers;
  protoOf($serializer_28).fw = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_15 = new Companion_14();
  Companion_instance_16 = new Companion_15();
  Companion_instance_17 = new Companion_16();
  Companion_instance_18 = new Companion_17();
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
  Companion_instance_32 = new Companion_31();
  Companion_instance_33 = new Companion_32();
  Companion_instance_34 = new Companion_33();
  Companion_instance_35 = new Companion_34();
  Companion_instance_36 = new Companion_35();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var dk = _.dk || (_.dk = {});
    var cachet = dk.cachet || (dk.cachet = {});
    var carp = cachet.carp || (cachet.carp = {});
    var studies = carp.studies || (carp.studies = {});
    var application = studies.application || (studies.application = {});
    application.StudyDetails = StudyDetails;
    var dk_0 = _.dk || (_.dk = {});
    var cachet_0 = dk_0.cachet || (dk_0.cachet = {});
    var carp_0 = cachet_0.carp || (cachet_0.carp = {});
    var studies_0 = carp_0.studies || (carp_0.studies = {});
    var application_0 = studies_0.application || (studies_0.application = {});
    application_0.StudyStatus = StudyStatus;
    application_0.StudyStatus.Configuring = Configuring;
    application_0.StudyStatus.Live = Live;
    var dk_1 = _.dk || (_.dk = {});
    var cachet_1 = dk_1.cachet || (dk_1.cachet = {});
    var carp_1 = cachet_1.carp || (cachet_1.carp = {});
    var studies_1 = carp_1.studies || (carp_1.studies = {});
    var application_1 = studies_1.application || (studies_1.application = {});
    var users = application_1.users || (application_1.users = {});
    users.AssignedParticipantRoles = AssignedParticipantRoles;
    users.participantIds = participantIds;
    users.participantRoles = participantRoles;
    var dk_2 = _.dk || (_.dk = {});
    var cachet_2 = dk_2.cachet || (dk_2.cachet = {});
    var carp_2 = cachet_2.carp || (cachet_2.carp = {});
    var studies_2 = carp_2.studies || (carp_2.studies = {});
    var application_2 = studies_2.application || (studies_2.application = {});
    var users_0 = application_2.users || (application_2.users = {});
    users_0.Participant = Participant;
    var dk_3 = _.dk || (_.dk = {});
    var cachet_3 = dk_3.cachet || (dk_3.cachet = {});
    var carp_3 = cachet_3.carp || (cachet_3.carp = {});
    var studies_3 = carp_3.studies || (carp_3.studies = {});
    var application_3 = studies_3.application || (studies_3.application = {});
    var users_1 = application_3.users || (application_3.users = {});
    users_1.ParticipantGroupRepresentation = ParticipantGroupRepresentation;
    defineProp(users_1.ParticipantGroupRepresentation, 'Companion', Companion_getInstance_9, VOID, true);
    var dk_4 = _.dk || (_.dk = {});
    var cachet_4 = dk_4.cachet || (dk_4.cachet = {});
    var carp_4 = cachet_4.carp || (cachet_4.carp = {});
    var studies_4 = carp_4.studies || (carp_4.studies = {});
    var application_4 = studies_4.application || (studies_4.application = {});
    var users_2 = application_4.users || (application_4.users = {});
    users_2.ParticipantGroupStatus = ParticipantGroupStatus;
    users_2.ParticipantGroupStatus.Staged = Staged;
    users_2.ParticipantGroupStatus.InDeployment = InDeployment;
    defineProp(users_2.ParticipantGroupStatus.InDeployment, 'Companion', Companion_getInstance_11, VOID, true);
    users_2.ParticipantGroupStatus.Invited = Invited_0;
    users_2.ParticipantGroupStatus.Running = Running_0;
    users_2.ParticipantGroupStatus.Stopped = Stopped_0;
    var dk_5 = _.dk || (_.dk = {});
    var cachet_5 = dk_5.cachet || (dk_5.cachet = {});
    var carp_5 = cachet_5.carp || (cachet_5.carp = {});
    var studies_5 = carp_5.studies || (carp_5.studies = {});
    var infrastructure = studies_5.infrastructure || (studies_5.infrastructure = {});
    infrastructure.RecruitmentServiceRequest = RecruitmentServiceRequest;
    defineProp(infrastructure.RecruitmentServiceRequest, 'Serializer', Serializer_getInstance, VOID, true);
    infrastructure.RecruitmentServiceRequest.AddParticipantByEmailAddress = AddParticipantByEmailAddress;
    infrastructure.RecruitmentServiceRequest.AddParticipantByUsername = AddParticipantByUsername;
    infrastructure.RecruitmentServiceRequest.GetParticipant = GetParticipant;
    infrastructure.RecruitmentServiceRequest.GetParticipants = GetParticipants;
    infrastructure.RecruitmentServiceRequest.InviteNewParticipantGroup = InviteNewParticipantGroup;
    infrastructure.RecruitmentServiceRequest.CreateParticipantGroup = CreateParticipantGroup;
    infrastructure.RecruitmentServiceRequest.UpdateParticipantGroup = UpdateParticipantGroup;
    infrastructure.RecruitmentServiceRequest.InviteParticipantGroup = InviteParticipantGroup;
    infrastructure.RecruitmentServiceRequest.GetParticipantGroupStatusList = GetParticipantGroupStatusList;
    infrastructure.RecruitmentServiceRequest.StopParticipantGroup = StopParticipantGroup;
    var dk_6 = _.dk || (_.dk = {});
    var cachet_6 = dk_6.cachet || (dk_6.cachet = {});
    var carp_6 = cachet_6.carp || (cachet_6.carp = {});
    var studies_6 = carp_6.studies || (carp_6.studies = {});
    var infrastructure_0 = studies_6.infrastructure || (studies_6.infrastructure = {});
    infrastructure_0.StudyServiceRequest = StudyServiceRequest;
    defineProp(infrastructure_0.StudyServiceRequest, 'Serializer', Serializer_getInstance_0, VOID, true);
    infrastructure_0.StudyServiceRequest.CreateStudy = CreateStudy;
    infrastructure_0.StudyServiceRequest.SetInternalDescription = SetInternalDescription;
    infrastructure_0.StudyServiceRequest.GetStudyDetails = GetStudyDetails;
    infrastructure_0.StudyServiceRequest.GetStudyStatus = GetStudyStatus;
    infrastructure_0.StudyServiceRequest.GetStudiesOverview = GetStudiesOverview;
    infrastructure_0.StudyServiceRequest.SetInvitation = SetInvitation;
    infrastructure_0.StudyServiceRequest.SetProtocol = SetProtocol;
    infrastructure_0.StudyServiceRequest.RemoveProtocol = RemoveProtocol;
    infrastructure_0.StudyServiceRequest.GoLive = GoLive;
    infrastructure_0.StudyServiceRequest.Remove = Remove;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=carp-studies-core-generated.js.map
