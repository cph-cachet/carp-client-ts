(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@cachet/carp-common-generated', '@cachet/kotlin-kotlin-stdlib', '@cachet/kotlinx-serialization-kotlinx-serialization-core', '@cachet/carp-protocols-core-generated'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@cachet/carp-common-generated'), require('@cachet/kotlin-kotlin-stdlib'), require('@cachet/kotlinx-serialization-kotlinx-serialization-core'), require('@cachet/carp-protocols-core-generated'));
  else {
    if (typeof globalThis['carp-common-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-deployments-core-generated'. Its dependency 'carp-common-generated' was not found. Please, check whether 'carp-common-generated' is loaded prior to 'carp-deployments-core-generated'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'carp-deployments-core-generated'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'carp-deployments-core-generated'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'carp-deployments-core-generated'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'carp-deployments-core-generated'.");
    }
    if (typeof globalThis['carp-protocols-core-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-deployments-core-generated'. Its dependency 'carp-protocols-core-generated' was not found. Please, check whether 'carp-protocols-core-generated' is loaded prior to 'carp-deployments-core-generated'.");
    }
    globalThis['carp-deployments-core-generated'] = factory(typeof globalThis['carp-deployments-core-generated'] === 'undefined' ? {} : globalThis['carp-deployments-core-generated'], globalThis['carp-common-generated'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['carp-protocols-core-generated']);
  }
}(function (_, kotlin_dk_cachet_carp_common_carp_common, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_dk_cachet_carp_protocols_carp_protocols_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ApiVersion = kotlin_dk_cachet_carp_common_carp_common.$_$.d;
  var protoOf = kotlin_kotlin.$_$.b9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h8;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.x2;
  var lazy = kotlin_kotlin.$_$.lc;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var Companion_instance = kotlin_dk_cachet_carp_common_carp_common.$_$.t;
  var UnitSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var THROW_CCE = kotlin_kotlin.$_$.sb;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var initMetadataForObject = kotlin_kotlin.$_$.m8;
  var VOID = kotlin_kotlin.$_$.b;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var Unit_instance = kotlin_kotlin.$_$.u2;
  var objectCreate = kotlin_kotlin.$_$.a9;
  var Companion_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.u;
  var getKClass = kotlin_kotlin.$_$.q9;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var defineProp = kotlin_kotlin.$_$.y7;
  var initMetadataForClass = kotlin_kotlin.$_$.g8;
  var initMetadataForInterface = kotlin_kotlin.$_$.k8;
  var toString = kotlin_kotlin.$_$.d9;
  var hashCode = kotlin_kotlin.$_$.f8;
  var getBooleanHashCode = kotlin_kotlin.$_$.b8;
  var equals = kotlin_kotlin.$_$.z7;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var TaskConfiguration = kotlin_dk_cachet_carp_common_carp_common.$_$.e;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var TriggerConfiguration = kotlin_dk_cachet_carp_common_carp_common.$_$.g;
  var $serializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.x;
  var $serializer_getInstance_0 = kotlin_dk_cachet_carp_common_carp_common.$_$.a1;
  var Companion_instance_0 = kotlin_dk_cachet_carp_common_carp_common.$_$.d1;
  var toString_0 = kotlin_kotlin.$_$.pc;
  var plus = kotlin_kotlin.$_$.g6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w4;
  var mapCapacity = kotlin_kotlin.$_$.c6;
  var coerceAtLeast = kotlin_kotlin.$_$.f9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.h3;
  var ensureNotNull = kotlin_kotlin.$_$.hc;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.y2;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.y3;
  var toSet = kotlin_kotlin.$_$.t6;
  var Companion_instance_1 = kotlin_dk_cachet_carp_common_carp_common.$_$.v;
  var emptySet = kotlin_kotlin.$_$.n5;
  var emptyMap = kotlin_kotlin.$_$.m5;
  var plus_0 = kotlin_kotlin.$_$.i6;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.x3;
  var compareTo = kotlin_kotlin.$_$.w7;
  var InstantSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var hasNoConflicts = kotlin_dk_cachet_carp_common_carp_common.$_$.k;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var UUIDSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.i1;
  var PrimaryDeviceConfiguration = kotlin_dk_cachet_carp_common_carp_common.$_$.b;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s3;
  var Roles = kotlin_dk_cachet_carp_common_carp_common.$_$.j;
  var addAll = kotlin_kotlin.$_$.q4;
  var Collection = kotlin_kotlin.$_$.d4;
  var isInterface = kotlin_kotlin.$_$.v8;
  var All = kotlin_dk_cachet_carp_common_carp_common.$_$.i;
  var NamespacedIdSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.g1;
  var Data = kotlin_dk_cachet_carp_common_carp_common.$_$.a;
  var getStringHashCode = kotlin_kotlin.$_$.e8;
  var Companion_getInstance_0 = kotlin_dk_cachet_carp_common_carp_common.$_$.z;
  var AccountIdentity = kotlin_dk_cachet_carp_common_carp_common.$_$.h;
  var All_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.y;
  var Companion_instance_2 = kotlin_dk_cachet_carp_common_carp_common.$_$.h1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nc;
  var constructCallableReference = kotlin_kotlin.$_$.x7;
  var ApiVersionSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.w;
  var $serializer_getInstance_1 = kotlin_dk_cachet_carp_protocols_carp_protocols_core.$_$.a;
  var ignoreTypeParameters = kotlin_dk_cachet_carp_common_carp_common.$_$.r;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var arrayOf = kotlin_kotlin.$_$.ec;
  var createKType = kotlin_kotlin.$_$.o9;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var KtSet = kotlin_kotlin.$_$.p4;
  var UUID = kotlin_dk_cachet_carp_common_carp_common.$_$.l;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.n9;
  var KtList = kotlin_kotlin.$_$.i4;
  var ApplicationServiceRequest = kotlin_dk_cachet_carp_common_carp_common.$_$.s;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DeviceDeploymentStatus, 'DeviceDeploymentStatus', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_6});
  initMetadataForClass(NotDeployed, 'NotDeployed', VOID, DeviceDeploymentStatus);
  initMetadataForInterface(HasDeviceRegistration, 'HasDeviceRegistration');
  initMetadataForClass(Unregistered, 'Unregistered', VOID, NotDeployed, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForClass(Registered, 'Registered', VOID, NotDeployed, [HasDeviceRegistration], VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForClass(Deployed, 'Deployed', VOID, DeviceDeploymentStatus, [HasDeviceRegistration], VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForClass(NeedsRedeployment, 'NeedsRedeployment', VOID, NotDeployed, [HasDeviceRegistration], VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_4, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(RuntimeDeviceInfo, 'RuntimeDeviceInfo');
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PrimaryDeviceDeployment, 'PrimaryDeviceDeployment', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StudyDeploymentStatus, 'StudyDeploymentStatus', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_13});
  initMetadataForClass(Invited, 'Invited', VOID, StudyDeploymentStatus, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForClass(DeployingDevices, 'DeployingDevices', VOID, StudyDeploymentStatus, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForClass(Running, 'Running', VOID, StudyDeploymentStatus, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForClass(Stopped, 'Stopped', VOID, StudyDeploymentStatus, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForCompanion(Companion_11, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_12);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ActiveParticipationInvitation, 'ActiveParticipationInvitation', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForCompanion(Companion_13);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AssignedPrimaryDevice, 'AssignedPrimaryDevice', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
  initMetadataForCompanion(Companion_14);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RoleData, 'RoleData', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
  initMetadataForCompanion(Companion_15);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ParticipantData, 'ParticipantData', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
  initMetadataForCompanion(Companion_16);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ParticipantInvitation, 'ParticipantInvitation', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
  initMetadataForCompanion(Companion_17);
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ParticipantStatus, 'ParticipantStatus', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
  initMetadataForCompanion(Companion_18);
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Participation, 'Participation', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
  initMetadataForCompanion(Companion_19);
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StudyInvitation, 'StudyInvitation', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
  initMetadataForCompanion(Companion_20);
  initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_21);
  initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_22);
  initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_23);
  initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_24);
  initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_25);
  initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_26);
  initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_27);
  initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_28);
  initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(Serializer, 'Serializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(DeploymentServiceRequest, 'DeploymentServiceRequest', VOID, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_31});
  initMetadataForClass(CreateStudyDeployment, 'CreateStudyDeployment', VOID, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_19});
  initMetadataForClass(RemoveStudyDeployments, 'RemoveStudyDeployments', VOID, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_20});
  initMetadataForClass(GetStudyDeploymentStatus, 'GetStudyDeploymentStatus', VOID, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_21});
  initMetadataForClass(GetStudyDeploymentStatusList, 'GetStudyDeploymentStatusList', VOID, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_22});
  initMetadataForClass(RegisterDevice, 'RegisterDevice', VOID, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_23});
  initMetadataForClass(UnregisterDevice, 'UnregisterDevice', VOID, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_24});
  initMetadataForClass(GetDeviceDeploymentFor, 'GetDeviceDeploymentFor', VOID, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_25});
  initMetadataForClass(DeviceDeployed, 'DeviceDeployed', VOID, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_26});
  initMetadataForClass(Stop, 'Stop', VOID, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_27});
  initMetadataForCompanion(Companion_29, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_30);
  initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_31);
  initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_32);
  initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_33);
  initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(Serializer_0, 'Serializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ParticipationServiceRequest, 'ParticipationServiceRequest', VOID, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_36});
  initMetadataForClass(GetActiveParticipationInvitations, 'GetActiveParticipationInvitations', VOID, ParticipationServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_28});
  initMetadataForClass(GetParticipantData, 'GetParticipantData', VOID, ParticipationServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_29});
  initMetadataForClass(GetParticipantDataList, 'GetParticipantDataList', VOID, ParticipationServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_30});
  initMetadataForClass(SetParticipantData, 'SetParticipantData', VOID, ParticipationServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_31});
  initMetadataForCompanion(Companion_34, VOID, [SerializerFactory]);
  //endregion
  function Companion() {
    Companion_instance_3 = this;
    this.v2b_1 = new ApiVersion(1, 3);
  }
  var Companion_instance_3;
  function Companion_getInstance_1() {
    if (Companion_instance_3 == null)
      new Companion();
    return Companion_instance_3;
  }
  function DeviceDeploymentStatus$Unregistered$Companion$$childSerializers$_anonymous__tcayq0() {
    return new LinkedHashSetSerializer(StringSerializer_getInstance());
  }
  function DeviceDeploymentStatus$Unregistered$Companion$$childSerializers$_anonymous__tcayq0_0() {
    return new LinkedHashSetSerializer(StringSerializer_getInstance());
  }
  function Companion_0() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DeviceDeploymentStatus$Unregistered$Companion$$childSerializers$_anonymous__tcayq0);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w2b_1 = [null, null, tmp_1, lazy(tmp_2, DeviceDeploymentStatus$Unregistered$Companion$$childSerializers$_anonymous__tcayq0_0)];
  }
  var Companion_instance_4;
  function Companion_getInstance_2() {
    if (Companion_instance_4 == null)
      new Companion_0();
    return Companion_instance_4;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.DeviceDeploymentStatus.Unregistered', this, 4);
    tmp0_serialDesc.pv('device', false);
    tmp0_serialDesc.pv('canBeDeployed', false);
    tmp0_serialDesc.pv('remainingDevicesToRegisterToObtainDeployment', false);
    tmp0_serialDesc.pv('remainingDevicesToRegisterBeforeDeployment', false);
    this.x2b_1 = tmp0_serialDesc;
  }
  protoOf($serializer).y2b = function (encoder, value) {
    var tmp0_desc = this.x2b_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().w2b_1;
    tmp1_output.op(tmp0_desc, 0, Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), value.z2b_1);
    tmp1_output.ep(tmp0_desc, 1, value.a2c_1);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.b2c_1);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.c2c_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer).nk = function (encoder, value) {
    return this.y2b(encoder, value instanceof Unregistered ? value : THROW_CCE());
  };
  protoOf($serializer).ok = function (decoder) {
    var tmp0_desc = this.x2b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_2().w2b_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.jo(tmp0_desc, 0, Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.zn(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jo(tmp0_desc, 2, tmp9_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.jo(tmp0_desc, 3, tmp9_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.jo(tmp0_desc, 0, Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.zn(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.jo(tmp0_desc, 2, tmp9_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.jo(tmp0_desc, 3, tmp9_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return Unregistered_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer).mk = function () {
    return this.x2b_1;
  };
  protoOf($serializer).ew = function () {
    var tmp0_cached = Companion_getInstance_2().w2b_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), BooleanSerializer_getInstance(), tmp0_cached[2].s2(), tmp0_cached[3].s2()];
  };
  var $serializer_instance;
  function $serializer_getInstance_2() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Unregistered_init_$Init$(seen0, device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_2().x2b_1);
    }
    NotDeployed.call($this);
    $this.z2b_1 = device;
    $this.a2c_1 = canBeDeployed;
    $this.b2c_1 = remainingDevicesToRegisterToObtainDeployment;
    $this.c2c_1 = remainingDevicesToRegisterBeforeDeployment;
    return $this;
  }
  function Unregistered_init_$Create$(seen0, device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, serializationConstructorMarker) {
    return Unregistered_init_$Init$(seen0, device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, serializationConstructorMarker, objectCreate(protoOf(Unregistered)));
  }
  function DeviceDeploymentStatus$Registered$Companion$$childSerializers$_anonymous__bpvfpt() {
    return Companion_getInstance().i18();
  }
  function DeviceDeploymentStatus$Registered$Companion$$childSerializers$_anonymous__bpvfpt_0() {
    return new LinkedHashSetSerializer(StringSerializer_getInstance());
  }
  function DeviceDeploymentStatus$Registered$Companion$$childSerializers$_anonymous__bpvfpt_1() {
    return new LinkedHashSetSerializer(StringSerializer_getInstance());
  }
  function Companion_1() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DeviceDeploymentStatus$Registered$Companion$$childSerializers$_anonymous__bpvfpt);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, DeviceDeploymentStatus$Registered$Companion$$childSerializers$_anonymous__bpvfpt_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.d2c_1 = [null, tmp_1, null, tmp_3, lazy(tmp_4, DeviceDeploymentStatus$Registered$Companion$$childSerializers$_anonymous__bpvfpt_1)];
  }
  var Companion_instance_5;
  function Companion_getInstance_3() {
    if (Companion_instance_5 == null)
      new Companion_1();
    return Companion_instance_5;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.DeviceDeploymentStatus.Registered', this, 5);
    tmp0_serialDesc.pv('device', false);
    tmp0_serialDesc.pv('deviceRegistration', false);
    tmp0_serialDesc.pv('canBeDeployed', false);
    tmp0_serialDesc.pv('remainingDevicesToRegisterToObtainDeployment', false);
    tmp0_serialDesc.pv('remainingDevicesToRegisterBeforeDeployment', false);
    this.e2c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).f2c = function (encoder, value) {
    var tmp0_desc = this.e2c_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().d2c_1;
    tmp1_output.op(tmp0_desc, 0, Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), value.g2c_1);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.h2c_1);
    tmp1_output.ep(tmp0_desc, 2, value.i2c_1);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.j2c_1);
    tmp1_output.op(tmp0_desc, 4, tmp2_cached[4].s2(), value.k2c_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_0).nk = function (encoder, value) {
    return this.f2c(encoder, value instanceof Registered ? value : THROW_CCE());
  };
  protoOf($serializer_0).ok = function (decoder) {
    var tmp0_desc = this.e2c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xn(tmp0_desc);
    var tmp10_cached = Companion_getInstance_3().d2c_1;
    if (tmp9_input.no()) {
      tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jo(tmp0_desc, 1, tmp10_cached[1].s2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.zn(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.jo(tmp0_desc, 4, tmp10_cached[4].s2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.jo(tmp0_desc, 1, tmp10_cached[1].s2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.zn(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.jo(tmp0_desc, 4, tmp10_cached[4].s2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return Registered_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_0).mk = function () {
    return this.e2c_1;
  };
  protoOf($serializer_0).ew = function () {
    var tmp0_cached = Companion_getInstance_3().d2c_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp0_cached[1].s2(), BooleanSerializer_getInstance(), tmp0_cached[3].s2(), tmp0_cached[4].s2()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_3() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Registered_init_$Init$(seen0, device, deviceRegistration, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_3().e2c_1);
    }
    NotDeployed.call($this);
    $this.g2c_1 = device;
    $this.h2c_1 = deviceRegistration;
    $this.i2c_1 = canBeDeployed;
    $this.j2c_1 = remainingDevicesToRegisterToObtainDeployment;
    $this.k2c_1 = remainingDevicesToRegisterBeforeDeployment;
    return $this;
  }
  function Registered_init_$Create$(seen0, device, deviceRegistration, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, serializationConstructorMarker) {
    return Registered_init_$Init$(seen0, device, deviceRegistration, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, serializationConstructorMarker, objectCreate(protoOf(Registered)));
  }
  function DeviceDeploymentStatus$Deployed$Companion$$childSerializers$_anonymous__7gzd0z() {
    return Companion_getInstance().i18();
  }
  function Companion_2() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.l2c_1 = [null, lazy(tmp_0, DeviceDeploymentStatus$Deployed$Companion$$childSerializers$_anonymous__7gzd0z), null];
  }
  var Companion_instance_6;
  function Companion_getInstance_4() {
    if (Companion_instance_6 == null)
      new Companion_2();
    return Companion_instance_6;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.DeviceDeploymentStatus.Deployed', this, 3);
    tmp0_serialDesc.pv('device', false);
    tmp0_serialDesc.pv('deviceRegistration', false);
    tmp0_serialDesc.pv('canBeDeployed', true);
    this.m2c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).n2c = function (encoder, value) {
    var tmp0_desc = this.m2c_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().l2c_1;
    tmp1_output.op(tmp0_desc, 0, Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), value.o2c_1);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.p2c_1);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.q2c_1 === true)) {
      tmp1_output.ep(tmp0_desc, 2, value.q2c_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_1).nk = function (encoder, value) {
    return this.n2c(encoder, value instanceof Deployed ? value : THROW_CCE());
  };
  protoOf($serializer_1).ok = function (decoder) {
    var tmp0_desc = this.m2c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_4().l2c_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, tmp8_cached[1].s2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.zn(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, tmp8_cached[1].s2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.zn(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return Deployed_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_1).mk = function () {
    return this.m2c_1;
  };
  protoOf($serializer_1).ew = function () {
    var tmp0_cached = Companion_getInstance_4().l2c_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp0_cached[1].s2(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_4() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Deployed_init_$Init$(seen0, device, deviceRegistration, canBeDeployed, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_4().m2c_1);
    }
    DeviceDeploymentStatus_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.o2c_1 = device;
    $this.p2c_1 = deviceRegistration;
    if (0 === (seen0 & 4))
      $this.q2c_1 = true;
    else
      $this.q2c_1 = canBeDeployed;
    return $this;
  }
  function Deployed_init_$Create$(seen0, device, deviceRegistration, canBeDeployed, serializationConstructorMarker) {
    return Deployed_init_$Init$(seen0, device, deviceRegistration, canBeDeployed, serializationConstructorMarker, objectCreate(protoOf(Deployed)));
  }
  function DeviceDeploymentStatus$NeedsRedeployment$Companion$$childSerializers$_anonymous__krvgh8() {
    return Companion_getInstance().i18();
  }
  function DeviceDeploymentStatus$NeedsRedeployment$Companion$$childSerializers$_anonymous__krvgh8_0() {
    return new LinkedHashSetSerializer(StringSerializer_getInstance());
  }
  function DeviceDeploymentStatus$NeedsRedeployment$Companion$$childSerializers$_anonymous__krvgh8_1() {
    return new LinkedHashSetSerializer(StringSerializer_getInstance());
  }
  function Companion_3() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DeviceDeploymentStatus$NeedsRedeployment$Companion$$childSerializers$_anonymous__krvgh8);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, DeviceDeploymentStatus$NeedsRedeployment$Companion$$childSerializers$_anonymous__krvgh8_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r2c_1 = [null, tmp_1, tmp_3, lazy(tmp_4, DeviceDeploymentStatus$NeedsRedeployment$Companion$$childSerializers$_anonymous__krvgh8_1), null];
  }
  var Companion_instance_7;
  function Companion_getInstance_5() {
    if (Companion_instance_7 == null)
      new Companion_3();
    return Companion_instance_7;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.DeviceDeploymentStatus.NeedsRedeployment', this, 5);
    tmp0_serialDesc.pv('device', false);
    tmp0_serialDesc.pv('deviceRegistration', false);
    tmp0_serialDesc.pv('remainingDevicesToRegisterToObtainDeployment', false);
    tmp0_serialDesc.pv('remainingDevicesToRegisterBeforeDeployment', false);
    tmp0_serialDesc.pv('canBeDeployed', true);
    this.s2c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).t2c = function (encoder, value) {
    var tmp0_desc = this.s2c_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().r2c_1;
    tmp1_output.op(tmp0_desc, 0, Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), value.u2c_1);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.v2c_1);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.w2c_1);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.x2c_1);
    if (tmp1_output.up(tmp0_desc, 4) ? true : !(value.y2c_1 === true)) {
      tmp1_output.ep(tmp0_desc, 4, value.y2c_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_2).nk = function (encoder, value) {
    return this.t2c(encoder, value instanceof NeedsRedeployment ? value : THROW_CCE());
  };
  protoOf($serializer_2).ok = function (decoder) {
    var tmp0_desc = this.s2c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_input = decoder.xn(tmp0_desc);
    var tmp10_cached = Companion_getInstance_5().r2c_1;
    if (tmp9_input.no()) {
      tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jo(tmp0_desc, 1, tmp10_cached[1].s2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jo(tmp0_desc, 2, tmp10_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.zn(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.jo(tmp0_desc, 1, tmp10_cached[1].s2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.jo(tmp0_desc, 2, tmp10_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.zn(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return NeedsRedeployment_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_2).mk = function () {
    return this.s2c_1;
  };
  protoOf($serializer_2).ew = function () {
    var tmp0_cached = Companion_getInstance_5().r2c_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp0_cached[1].s2(), tmp0_cached[2].s2(), tmp0_cached[3].s2(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_5() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function NeedsRedeployment_init_$Init$(seen0, device, deviceRegistration, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, canBeDeployed, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_5().s2c_1);
    }
    NotDeployed.call($this);
    $this.u2c_1 = device;
    $this.v2c_1 = deviceRegistration;
    $this.w2c_1 = remainingDevicesToRegisterToObtainDeployment;
    $this.x2c_1 = remainingDevicesToRegisterBeforeDeployment;
    if (0 === (seen0 & 16))
      $this.y2c_1 = true;
    else
      $this.y2c_1 = canBeDeployed;
    return $this;
  }
  function NeedsRedeployment_init_$Create$(seen0, device, deviceRegistration, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, canBeDeployed, serializationConstructorMarker) {
    return NeedsRedeployment_init_$Init$(seen0, device, deviceRegistration, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, canBeDeployed, serializationConstructorMarker, objectCreate(protoOf(NeedsRedeployment)));
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.z2c_1.s2();
  }
  function DeviceDeploymentStatus$Companion$_anonymous__q6jrr2() {
    var tmp = getKClass(DeviceDeploymentStatus);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(Deployed), getKClass(NeedsRedeployment), getKClass(Registered), getKClass(Unregistered)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_4(), $serializer_getInstance_5(), $serializer_getInstance_3(), $serializer_getInstance_2()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.deployments.application.DeviceDeploymentStatus', tmp, tmp_0, tmp_1, tmp$ret$6);
  }
  function NotDeployed() {
    DeviceDeploymentStatus.call(this);
  }
  protoOf(NotDeployed).a2d = function () {
    return this.canBeDeployed && this.remainingDevicesToRegisterBeforeDeployment.p();
  };
  function HasDeviceRegistration() {
  }
  function Unregistered(device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) {
    Companion_getInstance_2();
    NotDeployed.call(this);
    this.z2b_1 = device;
    this.a2c_1 = canBeDeployed;
    this.b2c_1 = remainingDevicesToRegisterToObtainDeployment;
    this.c2c_1 = remainingDevicesToRegisterBeforeDeployment;
  }
  protoOf(Unregistered).d2d = function () {
    return this.z2b_1;
  };
  protoOf(Unregistered).e2d = function () {
    return this.a2c_1;
  };
  protoOf(Unregistered).b2d = function () {
    return this.b2c_1;
  };
  protoOf(Unregistered).c2d = function () {
    return this.c2c_1;
  };
  protoOf(Unregistered).sd = function () {
    return this.z2b_1;
  };
  protoOf(Unregistered).td = function () {
    return this.a2c_1;
  };
  protoOf(Unregistered).m1j = function () {
    return this.b2c_1;
  };
  protoOf(Unregistered).l1k = function () {
    return this.c2c_1;
  };
  protoOf(Unregistered).h2d = function (device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) {
    return new Unregistered(device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment);
  };
  protoOf(Unregistered).copy = function (device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, $super) {
    device = device === VOID ? this.z2b_1 : device;
    canBeDeployed = canBeDeployed === VOID ? this.a2c_1 : canBeDeployed;
    remainingDevicesToRegisterToObtainDeployment = remainingDevicesToRegisterToObtainDeployment === VOID ? this.b2c_1 : remainingDevicesToRegisterToObtainDeployment;
    remainingDevicesToRegisterBeforeDeployment = remainingDevicesToRegisterBeforeDeployment === VOID ? this.c2c_1 : remainingDevicesToRegisterBeforeDeployment;
    return $super === VOID ? this.h2d(device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) : $super.h2d.call(this, device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment);
  };
  protoOf(Unregistered).toString = function () {
    return 'Unregistered(device=' + toString(this.z2b_1) + ', canBeDeployed=' + this.a2c_1 + ', remainingDevicesToRegisterToObtainDeployment=' + toString(this.b2c_1) + ', remainingDevicesToRegisterBeforeDeployment=' + toString(this.c2c_1) + ')';
  };
  protoOf(Unregistered).hashCode = function () {
    var result = hashCode(this.z2b_1);
    result = imul(result, 31) + getBooleanHashCode(this.a2c_1) | 0;
    result = imul(result, 31) + hashCode(this.b2c_1) | 0;
    result = imul(result, 31) + hashCode(this.c2c_1) | 0;
    return result;
  };
  protoOf(Unregistered).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Unregistered))
      return false;
    if (!equals(this.z2b_1, other.z2b_1))
      return false;
    if (!(this.a2c_1 === other.a2c_1))
      return false;
    if (!equals(this.b2c_1, other.b2c_1))
      return false;
    if (!equals(this.c2c_1, other.c2c_1))
      return false;
    return true;
  };
  function Registered(device, deviceRegistration, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) {
    Companion_getInstance_3();
    NotDeployed.call(this);
    this.g2c_1 = device;
    this.h2c_1 = deviceRegistration;
    this.i2c_1 = canBeDeployed;
    this.j2c_1 = remainingDevicesToRegisterToObtainDeployment;
    this.k2c_1 = remainingDevicesToRegisterBeforeDeployment;
  }
  protoOf(Registered).d2d = function () {
    return this.g2c_1;
  };
  protoOf(Registered).g2d = function () {
    return this.h2c_1;
  };
  protoOf(Registered).e2d = function () {
    return this.i2c_1;
  };
  protoOf(Registered).b2d = function () {
    return this.j2c_1;
  };
  protoOf(Registered).c2d = function () {
    return this.k2c_1;
  };
  protoOf(Registered).sd = function () {
    return this.g2c_1;
  };
  protoOf(Registered).td = function () {
    return this.h2c_1;
  };
  protoOf(Registered).m1j = function () {
    return this.i2c_1;
  };
  protoOf(Registered).l1k = function () {
    return this.j2c_1;
  };
  protoOf(Registered).m1p = function () {
    return this.k2c_1;
  };
  protoOf(Registered).i2d = function (device, deviceRegistration, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) {
    return new Registered(device, deviceRegistration, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment);
  };
  protoOf(Registered).copy = function (device, deviceRegistration, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, $super) {
    device = device === VOID ? this.g2c_1 : device;
    deviceRegistration = deviceRegistration === VOID ? this.h2c_1 : deviceRegistration;
    canBeDeployed = canBeDeployed === VOID ? this.i2c_1 : canBeDeployed;
    remainingDevicesToRegisterToObtainDeployment = remainingDevicesToRegisterToObtainDeployment === VOID ? this.j2c_1 : remainingDevicesToRegisterToObtainDeployment;
    remainingDevicesToRegisterBeforeDeployment = remainingDevicesToRegisterBeforeDeployment === VOID ? this.k2c_1 : remainingDevicesToRegisterBeforeDeployment;
    return $super === VOID ? this.i2d(device, deviceRegistration, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) : $super.i2d.call(this, device, deviceRegistration, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment);
  };
  protoOf(Registered).toString = function () {
    return 'Registered(device=' + toString(this.g2c_1) + ', deviceRegistration=' + toString(this.h2c_1) + ', canBeDeployed=' + this.i2c_1 + ', remainingDevicesToRegisterToObtainDeployment=' + toString(this.j2c_1) + ', remainingDevicesToRegisterBeforeDeployment=' + toString(this.k2c_1) + ')';
  };
  protoOf(Registered).hashCode = function () {
    var result = hashCode(this.g2c_1);
    result = imul(result, 31) + hashCode(this.h2c_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.i2c_1) | 0;
    result = imul(result, 31) + hashCode(this.j2c_1) | 0;
    result = imul(result, 31) + hashCode(this.k2c_1) | 0;
    return result;
  };
  protoOf(Registered).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Registered))
      return false;
    if (!equals(this.g2c_1, other.g2c_1))
      return false;
    if (!equals(this.h2c_1, other.h2c_1))
      return false;
    if (!(this.i2c_1 === other.i2c_1))
      return false;
    if (!equals(this.j2c_1, other.j2c_1))
      return false;
    if (!equals(this.k2c_1, other.k2c_1))
      return false;
    return true;
  };
  function Deployed(device, deviceRegistration) {
    Companion_getInstance_4();
    DeviceDeploymentStatus.call(this);
    this.o2c_1 = device;
    this.p2c_1 = deviceRegistration;
    this.q2c_1 = true;
  }
  protoOf(Deployed).d2d = function () {
    return this.o2c_1;
  };
  protoOf(Deployed).g2d = function () {
    return this.p2c_1;
  };
  protoOf(Deployed).e2d = function () {
    return this.q2c_1;
  };
  protoOf(Deployed).sd = function () {
    return this.o2c_1;
  };
  protoOf(Deployed).td = function () {
    return this.p2c_1;
  };
  protoOf(Deployed).j2d = function (device, deviceRegistration) {
    return new Deployed(device, deviceRegistration);
  };
  protoOf(Deployed).copy = function (device, deviceRegistration, $super) {
    device = device === VOID ? this.o2c_1 : device;
    deviceRegistration = deviceRegistration === VOID ? this.p2c_1 : deviceRegistration;
    return $super === VOID ? this.j2d(device, deviceRegistration) : $super.j2d.call(this, device, deviceRegistration);
  };
  protoOf(Deployed).toString = function () {
    return 'Deployed(device=' + toString(this.o2c_1) + ', deviceRegistration=' + toString(this.p2c_1) + ')';
  };
  protoOf(Deployed).hashCode = function () {
    var result = hashCode(this.o2c_1);
    result = imul(result, 31) + hashCode(this.p2c_1) | 0;
    return result;
  };
  protoOf(Deployed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Deployed))
      return false;
    if (!equals(this.o2c_1, other.o2c_1))
      return false;
    if (!equals(this.p2c_1, other.p2c_1))
      return false;
    return true;
  };
  function NeedsRedeployment(device, deviceRegistration, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) {
    Companion_getInstance_5();
    NotDeployed.call(this);
    this.u2c_1 = device;
    this.v2c_1 = deviceRegistration;
    this.w2c_1 = remainingDevicesToRegisterToObtainDeployment;
    this.x2c_1 = remainingDevicesToRegisterBeforeDeployment;
    this.y2c_1 = true;
  }
  protoOf(NeedsRedeployment).d2d = function () {
    return this.u2c_1;
  };
  protoOf(NeedsRedeployment).g2d = function () {
    return this.v2c_1;
  };
  protoOf(NeedsRedeployment).b2d = function () {
    return this.w2c_1;
  };
  protoOf(NeedsRedeployment).c2d = function () {
    return this.x2c_1;
  };
  protoOf(NeedsRedeployment).e2d = function () {
    return this.y2c_1;
  };
  protoOf(NeedsRedeployment).sd = function () {
    return this.u2c_1;
  };
  protoOf(NeedsRedeployment).td = function () {
    return this.v2c_1;
  };
  protoOf(NeedsRedeployment).m1j = function () {
    return this.w2c_1;
  };
  protoOf(NeedsRedeployment).l1k = function () {
    return this.x2c_1;
  };
  protoOf(NeedsRedeployment).k2d = function (device, deviceRegistration, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) {
    return new NeedsRedeployment(device, deviceRegistration, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment);
  };
  protoOf(NeedsRedeployment).copy = function (device, deviceRegistration, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, $super) {
    device = device === VOID ? this.u2c_1 : device;
    deviceRegistration = deviceRegistration === VOID ? this.v2c_1 : deviceRegistration;
    remainingDevicesToRegisterToObtainDeployment = remainingDevicesToRegisterToObtainDeployment === VOID ? this.w2c_1 : remainingDevicesToRegisterToObtainDeployment;
    remainingDevicesToRegisterBeforeDeployment = remainingDevicesToRegisterBeforeDeployment === VOID ? this.x2c_1 : remainingDevicesToRegisterBeforeDeployment;
    return $super === VOID ? this.k2d(device, deviceRegistration, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) : $super.k2d.call(this, device, deviceRegistration, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment);
  };
  protoOf(NeedsRedeployment).toString = function () {
    return 'NeedsRedeployment(device=' + toString(this.u2c_1) + ', deviceRegistration=' + toString(this.v2c_1) + ', remainingDevicesToRegisterToObtainDeployment=' + toString(this.w2c_1) + ', remainingDevicesToRegisterBeforeDeployment=' + toString(this.x2c_1) + ')';
  };
  protoOf(NeedsRedeployment).hashCode = function () {
    var result = hashCode(this.u2c_1);
    result = imul(result, 31) + hashCode(this.v2c_1) | 0;
    result = imul(result, 31) + hashCode(this.w2c_1) | 0;
    result = imul(result, 31) + hashCode(this.x2c_1) | 0;
    return result;
  };
  protoOf(NeedsRedeployment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NeedsRedeployment))
      return false;
    if (!equals(this.u2c_1, other.u2c_1))
      return false;
    if (!equals(this.v2c_1, other.v2c_1))
      return false;
    if (!equals(this.w2c_1, other.w2c_1))
      return false;
    if (!equals(this.x2c_1, other.x2c_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.z2c_1 = lazy(tmp_0, DeviceDeploymentStatus$Companion$_anonymous__q6jrr2);
  }
  protoOf(Companion_4).i18 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_4).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_8;
  function Companion_getInstance_6() {
    if (Companion_instance_8 == null)
      new Companion_4();
    return Companion_instance_8;
  }
  function DeviceDeploymentStatus_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function DeviceDeploymentStatus() {
    Companion_getInstance_6();
  }
  protoOf(DeviceDeploymentStatus).f2d = function () {
    var tmp;
    if (this instanceof Deployed) {
      tmp = true;
    } else {
      var tmp_0;
      if (this instanceof NotDeployed) {
        tmp_0 = this.remainingDevicesToRegisterToObtainDeployment.p();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function Companion_5() {
    Companion_instance_9 = this;
    this.l2d_1 = new ApiVersion(1, 0);
  }
  var Companion_instance_9;
  function Companion_getInstance_7() {
    if (Companion_instance_9 == null)
      new Companion_5();
    return Companion_instance_9;
  }
  function PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn() {
    return Companion_getInstance().i18();
  }
  function PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_0() {
    return new LinkedHashSetSerializer(Companion_instance.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()));
  }
  function PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_1() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), Companion_getInstance().i18());
  }
  function PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_2() {
    var tmp = getKClass(TaskConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashSetSerializer(PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0));
  }
  function PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_3() {
    var tmp = IntSerializer_getInstance();
    var tmp_0 = getKClass(TriggerConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashMapSerializer(tmp, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$0));
  }
  function PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_4() {
    return new LinkedHashSetSerializer($serializer_getInstance());
  }
  function PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_5() {
    return new LinkedHashSetSerializer($serializer_getInstance_0());
  }
  function PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_6() {
    return Companion_instance_0.i18();
  }
  function RuntimeDeviceInfo(configuration, isConnectedDevice, registration, defaultSamplingConfiguration, tasks) {
    this.configuration = configuration;
    this.isConnectedDevice = isConnectedDevice;
    this.registration = registration;
    this.defaultSamplingConfiguration = defaultSamplingConfiguration;
    this.tasks = tasks;
  }
  protoOf(RuntimeDeviceInfo).m2d = function () {
    return this.configuration;
  };
  protoOf(RuntimeDeviceInfo).n2d = function () {
    return this.isConnectedDevice;
  };
  protoOf(RuntimeDeviceInfo).o2d = function () {
    return this.registration;
  };
  protoOf(RuntimeDeviceInfo).s1r = function () {
    return this.defaultSamplingConfiguration;
  };
  protoOf(RuntimeDeviceInfo).u27 = function () {
    return this.tasks;
  };
  protoOf(RuntimeDeviceInfo).sd = function () {
    return this.configuration;
  };
  protoOf(RuntimeDeviceInfo).td = function () {
    return this.isConnectedDevice;
  };
  protoOf(RuntimeDeviceInfo).m1j = function () {
    return this.registration;
  };
  protoOf(RuntimeDeviceInfo).l1k = function () {
    return this.defaultSamplingConfiguration;
  };
  protoOf(RuntimeDeviceInfo).m1p = function () {
    return this.tasks;
  };
  protoOf(RuntimeDeviceInfo).p2d = function (configuration, isConnectedDevice, registration, defaultSamplingConfiguration, tasks) {
    return new RuntimeDeviceInfo(configuration, isConnectedDevice, registration, defaultSamplingConfiguration, tasks);
  };
  protoOf(RuntimeDeviceInfo).copy = function (configuration, isConnectedDevice, registration, defaultSamplingConfiguration, tasks, $super) {
    configuration = configuration === VOID ? this.configuration : configuration;
    isConnectedDevice = isConnectedDevice === VOID ? this.isConnectedDevice : isConnectedDevice;
    registration = registration === VOID ? this.registration : registration;
    defaultSamplingConfiguration = defaultSamplingConfiguration === VOID ? this.defaultSamplingConfiguration : defaultSamplingConfiguration;
    tasks = tasks === VOID ? this.tasks : tasks;
    return $super === VOID ? this.p2d(configuration, isConnectedDevice, registration, defaultSamplingConfiguration, tasks) : $super.p2d.call(this, configuration, isConnectedDevice, registration, defaultSamplingConfiguration, tasks);
  };
  protoOf(RuntimeDeviceInfo).toString = function () {
    return 'RuntimeDeviceInfo(configuration=' + toString(this.configuration) + ', isConnectedDevice=' + this.isConnectedDevice + ', registration=' + toString_0(this.registration) + ', defaultSamplingConfiguration=' + toString(this.defaultSamplingConfiguration) + ', tasks=' + toString(this.tasks) + ')';
  };
  protoOf(RuntimeDeviceInfo).hashCode = function () {
    var result = hashCode(this.configuration);
    result = imul(result, 31) + getBooleanHashCode(this.isConnectedDevice) | 0;
    result = imul(result, 31) + (this.registration == null ? 0 : hashCode(this.registration)) | 0;
    result = imul(result, 31) + hashCode(this.defaultSamplingConfiguration) | 0;
    result = imul(result, 31) + hashCode(this.tasks) | 0;
    return result;
  };
  protoOf(RuntimeDeviceInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RuntimeDeviceInfo))
      return false;
    if (!equals(this.configuration, other.configuration))
      return false;
    if (!(this.isConnectedDevice === other.isConnectedDevice))
      return false;
    if (!equals(this.registration, other.registration))
      return false;
    if (!equals(this.defaultSamplingConfiguration, other.defaultSamplingConfiguration))
      return false;
    if (!equals(this.tasks, other.tasks))
      return false;
    return true;
  };
  function getDefaultSamplingConfigurations($this, device) {
    var samplingSchemes = device.getDataTypeSamplingSchemes();
    var dataTypes = plus(samplingSchemes.m2(), device.defaultSamplingConfiguration.m2());
    // Inline function 'kotlin.collections.associateWith' call
    var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(dataTypes, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var _iterator__ex2g4s = dataTypes.r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      var tmp0_elvis_lhs = device.defaultSamplingConfiguration.q2(element);
      var tmp$ret$2 = tmp0_elvis_lhs == null ? ensureNotNull(samplingSchemes.q2(element)).default : tmp0_elvis_lhs;
      result.k2(element, tmp$ret$2);
    }
    return result;
  }
  function getDeviceTasks($this, device) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this.taskControls;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      if (element.destinationDeviceRoleName === device.roleName) {
        destination.y(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var _iterator__ex2g4s_0 = destination.r();
    while (_iterator__ex2g4s_0.s()) {
      var item = _iterator__ex2g4s_0.t();
      var tmp0_0 = $this.tasks;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.collections.first' call
        var _iterator__ex2g4s_1 = tmp0_0.r();
        while (_iterator__ex2g4s_1.s()) {
          var element_0 = _iterator__ex2g4s_1.t();
          if (element_0.name === item.taskName) {
            tmp$ret$6 = element_0;
            break $l$block;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var tmp$ret$5 = tmp$ret$6;
      destination_0.y(tmp$ret$5);
    }
    return toSet(destination_0);
  }
  function Companion_6() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_11 = lazy(tmp_10, PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_4);
    var tmp_12 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_13 = lazy(tmp_12, PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_5);
    var tmp_14 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q2d_1 = [null, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp_13, lazy(tmp_14, PrimaryDeviceDeployment$Companion$$childSerializers$_anonymous__o3aovn_6), null];
  }
  var Companion_instance_10;
  function Companion_getInstance_8() {
    if (Companion_instance_10 == null)
      new Companion_6();
    return Companion_instance_10;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.PrimaryDeviceDeployment', this, 10);
    tmp0_serialDesc.pv('deviceConfiguration', false);
    tmp0_serialDesc.pv('registration', false);
    tmp0_serialDesc.pv('connectedDevices', true);
    tmp0_serialDesc.pv('connectedDeviceRegistrations', true);
    tmp0_serialDesc.pv('tasks', true);
    tmp0_serialDesc.pv('triggers', true);
    tmp0_serialDesc.pv('taskControls', true);
    tmp0_serialDesc.pv('expectedParticipantData', true);
    tmp0_serialDesc.pv('applicationData', true);
    tmp0_serialDesc.pv('lastUpdatedOn', true);
    this.r2d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).s2d = function (encoder, value) {
    var tmp0_desc = this.r2d_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().q2d_1;
    tmp1_output.op(tmp0_desc, 0, Companion_instance_1.y1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), value.deviceConfiguration);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.registration);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !equals(value.connectedDevices, emptySet())) {
      tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.connectedDevices);
    }
    if (tmp1_output.up(tmp0_desc, 3) ? true : !equals(value.connectedDeviceRegistrations, emptyMap())) {
      tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.connectedDeviceRegistrations);
    }
    if (tmp1_output.up(tmp0_desc, 4) ? true : !equals(value.tasks, emptySet())) {
      tmp1_output.op(tmp0_desc, 4, tmp2_cached[4].s2(), value.tasks);
    }
    if (tmp1_output.up(tmp0_desc, 5) ? true : !equals(value.triggers, emptyMap())) {
      tmp1_output.op(tmp0_desc, 5, tmp2_cached[5].s2(), value.triggers);
    }
    if (tmp1_output.up(tmp0_desc, 6) ? true : !equals(value.taskControls, emptySet())) {
      tmp1_output.op(tmp0_desc, 6, tmp2_cached[6].s2(), value.taskControls);
    }
    if (tmp1_output.up(tmp0_desc, 7) ? true : !equals(value.expectedParticipantData, emptySet())) {
      tmp1_output.op(tmp0_desc, 7, tmp2_cached[7].s2(), value.expectedParticipantData);
    }
    if (tmp1_output.up(tmp0_desc, 8) ? true : !(value.applicationData == null)) {
      tmp1_output.qp(tmp0_desc, 8, tmp2_cached[8].s2(), value.applicationData);
    }
    var tmp;
    if (tmp1_output.up(tmp0_desc, 9)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.maxOf' call
      var iterator = plus_0(value.connectedDeviceRegistrations.n2(), value.registration).r();
      if (!iterator.s())
        throw NoSuchElementException_init_$Create$_0();
      var maxValue = iterator.t().registrationCreatedOn;
      while (iterator.s()) {
        var v = iterator.t().registrationCreatedOn;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      var tmp$ret$0 = maxValue;
      tmp = !value.lastUpdatedOn.equals(tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.op(tmp0_desc, 9, InstantSerializer_getInstance(), value.lastUpdatedOn);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_3).nk = function (encoder, value) {
    return this.s2d(encoder, value instanceof PrimaryDeviceDeployment ? value : THROW_CCE());
  };
  protoOf($serializer_3).ok = function (decoder) {
    var tmp0_desc = this.r2d_1;
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
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.xn(tmp0_desc);
    var tmp15_cached = Companion_getInstance_8().q2d_1;
    if (tmp14_input.no()) {
      tmp4_local0 = tmp14_input.jo(tmp0_desc, 0, Companion_instance_1.y1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.jo(tmp0_desc, 1, tmp15_cached[1].s2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.jo(tmp0_desc, 2, tmp15_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.jo(tmp0_desc, 3, tmp15_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.jo(tmp0_desc, 4, tmp15_cached[4].s2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.jo(tmp0_desc, 5, tmp15_cached[5].s2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.jo(tmp0_desc, 6, tmp15_cached[6].s2(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.jo(tmp0_desc, 7, tmp15_cached[7].s2(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.lo(tmp0_desc, 8, tmp15_cached[8].s2(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.jo(tmp0_desc, 9, InstantSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.jo(tmp0_desc, 0, Companion_instance_1.y1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.jo(tmp0_desc, 1, tmp15_cached[1].s2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.jo(tmp0_desc, 2, tmp15_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.jo(tmp0_desc, 3, tmp15_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.jo(tmp0_desc, 4, tmp15_cached[4].s2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.jo(tmp0_desc, 5, tmp15_cached[5].s2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.jo(tmp0_desc, 6, tmp15_cached[6].s2(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.jo(tmp0_desc, 7, tmp15_cached[7].s2(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.lo(tmp0_desc, 8, tmp15_cached[8].s2(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.jo(tmp0_desc, 9, InstantSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.yn(tmp0_desc);
    return PrimaryDeviceDeployment_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  protoOf($serializer_3).mk = function () {
    return this.r2d_1;
  };
  protoOf($serializer_3).ew = function () {
    var tmp0_cached = Companion_getInstance_8().q2d_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_instance_1.y1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp0_cached[1].s2(), tmp0_cached[2].s2(), tmp0_cached[3].s2(), tmp0_cached[4].s2(), tmp0_cached[5].s2(), tmp0_cached[6].s2(), tmp0_cached[7].s2(), get_nullable(tmp0_cached[8].s2()), InstantSerializer_getInstance()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_6() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function PrimaryDeviceDeployment_init_$Init$(seen0, deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData, lastUpdatedOn, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_6().r2d_1);
    }
    $this.deviceConfiguration = deviceConfiguration;
    $this.registration = registration;
    if (0 === (seen0 & 4))
      $this.connectedDevices = emptySet();
    else
      $this.connectedDevices = connectedDevices;
    if (0 === (seen0 & 8))
      $this.connectedDeviceRegistrations = emptyMap();
    else
      $this.connectedDeviceRegistrations = connectedDeviceRegistrations;
    if (0 === (seen0 & 16))
      $this.tasks = emptySet();
    else
      $this.tasks = tasks;
    if (0 === (seen0 & 32))
      $this.triggers = emptyMap();
    else
      $this.triggers = triggers;
    if (0 === (seen0 & 64))
      $this.taskControls = emptySet();
    else
      $this.taskControls = taskControls;
    if (0 === (seen0 & 128))
      $this.expectedParticipantData = emptySet();
    else
      $this.expectedParticipantData = expectedParticipantData;
    if (0 === (seen0 & 256))
      $this.applicationData = null;
    else
      $this.applicationData = applicationData;
    hasNoConflicts($this.expectedParticipantData, true);
    if (0 === (seen0 & 512)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.maxOf' call
      var iterator = plus_0($this.connectedDeviceRegistrations.n2(), $this.registration).r();
      if (!iterator.s())
        throw NoSuchElementException_init_$Create$_0();
      var maxValue = iterator.t().registrationCreatedOn;
      while (iterator.s()) {
        var v = iterator.t().registrationCreatedOn;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      tmp.lastUpdatedOn = maxValue;
    } else
      $this.lastUpdatedOn = lastUpdatedOn;
    return $this;
  }
  function PrimaryDeviceDeployment_init_$Create$(seen0, deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData, lastUpdatedOn, serializationConstructorMarker) {
    return PrimaryDeviceDeployment_init_$Init$(seen0, deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData, lastUpdatedOn, serializationConstructorMarker, objectCreate(protoOf(PrimaryDeviceDeployment)));
  }
  function PrimaryDeviceDeployment(deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData) {
    Companion_getInstance_8();
    connectedDevices = connectedDevices === VOID ? emptySet() : connectedDevices;
    connectedDeviceRegistrations = connectedDeviceRegistrations === VOID ? emptyMap() : connectedDeviceRegistrations;
    tasks = tasks === VOID ? emptySet() : tasks;
    triggers = triggers === VOID ? emptyMap() : triggers;
    taskControls = taskControls === VOID ? emptySet() : taskControls;
    expectedParticipantData = expectedParticipantData === VOID ? emptySet() : expectedParticipantData;
    applicationData = applicationData === VOID ? null : applicationData;
    this.deviceConfiguration = deviceConfiguration;
    this.registration = registration;
    this.connectedDevices = connectedDevices;
    this.connectedDeviceRegistrations = connectedDeviceRegistrations;
    this.tasks = tasks;
    this.triggers = triggers;
    this.taskControls = taskControls;
    this.expectedParticipantData = expectedParticipantData;
    this.applicationData = applicationData;
    hasNoConflicts(this.expectedParticipantData, true);
    var tmp = this;
    // Inline function 'kotlin.collections.maxOf' call
    var iterator = plus_0(this.connectedDeviceRegistrations.n2(), this.registration).r();
    if (!iterator.s())
      throw NoSuchElementException_init_$Create$_0();
    var maxValue = iterator.t().registrationCreatedOn;
    while (iterator.s()) {
      var v = iterator.t().registrationCreatedOn;
      if (compareTo(maxValue, v) < 0) {
        maxValue = v;
      }
    }
    tmp.lastUpdatedOn = maxValue;
  }
  protoOf(PrimaryDeviceDeployment).t2d = function () {
    return this.deviceConfiguration;
  };
  protoOf(PrimaryDeviceDeployment).o2d = function () {
    return this.registration;
  };
  protoOf(PrimaryDeviceDeployment).j28 = function () {
    return this.connectedDevices;
  };
  protoOf(PrimaryDeviceDeployment).u2d = function () {
    return this.connectedDeviceRegistrations;
  };
  protoOf(PrimaryDeviceDeployment).u27 = function () {
    return this.tasks;
  };
  protoOf(PrimaryDeviceDeployment).i27 = function () {
    return this.triggers;
  };
  protoOf(PrimaryDeviceDeployment).l28 = function () {
    return this.taskControls;
  };
  protoOf(PrimaryDeviceDeployment).c28 = function () {
    return this.expectedParticipantData;
  };
  protoOf(PrimaryDeviceDeployment).n28 = function () {
    return this.applicationData;
  };
  protoOf(PrimaryDeviceDeployment).v2d = function () {
    return this.lastUpdatedOn;
  };
  protoOf(PrimaryDeviceDeployment).getRuntimeDeviceInfo = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.connectedDevices;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.r();
    while (_iterator__ex2g4s.s()) {
      var item = _iterator__ex2g4s.t();
      var tmp$ret$2 = new RuntimeDeviceInfo(item, true, this.connectedDeviceRegistrations.q2(item.roleName), getDefaultSamplingConfigurations(this, item), getDeviceTasks(this, item));
      destination.y(tmp$ret$2);
    }
    return plus_0(destination, new RuntimeDeviceInfo(this.deviceConfiguration, false, this.registration, getDefaultSamplingConfigurations(this, this.deviceConfiguration), getDeviceTasks(this, this.deviceConfiguration)));
  };
  protoOf(PrimaryDeviceDeployment).sd = function () {
    return this.deviceConfiguration;
  };
  protoOf(PrimaryDeviceDeployment).td = function () {
    return this.registration;
  };
  protoOf(PrimaryDeviceDeployment).m1j = function () {
    return this.connectedDevices;
  };
  protoOf(PrimaryDeviceDeployment).l1k = function () {
    return this.connectedDeviceRegistrations;
  };
  protoOf(PrimaryDeviceDeployment).m1p = function () {
    return this.tasks;
  };
  protoOf(PrimaryDeviceDeployment).n1s = function () {
    return this.triggers;
  };
  protoOf(PrimaryDeviceDeployment).o1s = function () {
    return this.taskControls;
  };
  protoOf(PrimaryDeviceDeployment).p1s = function () {
    return this.expectedParticipantData;
  };
  protoOf(PrimaryDeviceDeployment).p28 = function () {
    return this.applicationData;
  };
  protoOf(PrimaryDeviceDeployment).w2d = function (deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData) {
    return new PrimaryDeviceDeployment(deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData);
  };
  protoOf(PrimaryDeviceDeployment).copy = function (deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData, $super) {
    deviceConfiguration = deviceConfiguration === VOID ? this.deviceConfiguration : deviceConfiguration;
    registration = registration === VOID ? this.registration : registration;
    connectedDevices = connectedDevices === VOID ? this.connectedDevices : connectedDevices;
    connectedDeviceRegistrations = connectedDeviceRegistrations === VOID ? this.connectedDeviceRegistrations : connectedDeviceRegistrations;
    tasks = tasks === VOID ? this.tasks : tasks;
    triggers = triggers === VOID ? this.triggers : triggers;
    taskControls = taskControls === VOID ? this.taskControls : taskControls;
    expectedParticipantData = expectedParticipantData === VOID ? this.expectedParticipantData : expectedParticipantData;
    applicationData = applicationData === VOID ? this.applicationData : applicationData;
    return $super === VOID ? this.w2d(deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData) : $super.w2d.call(this, deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData);
  };
  protoOf(PrimaryDeviceDeployment).toString = function () {
    return 'PrimaryDeviceDeployment(deviceConfiguration=' + toString(this.deviceConfiguration) + ', registration=' + toString(this.registration) + ', connectedDevices=' + toString(this.connectedDevices) + ', connectedDeviceRegistrations=' + toString(this.connectedDeviceRegistrations) + ', tasks=' + toString(this.tasks) + ', triggers=' + toString(this.triggers) + ', taskControls=' + toString(this.taskControls) + ', expectedParticipantData=' + toString(this.expectedParticipantData) + ', applicationData=' + toString_0(this.applicationData) + ')';
  };
  protoOf(PrimaryDeviceDeployment).hashCode = function () {
    var result = hashCode(this.deviceConfiguration);
    result = imul(result, 31) + hashCode(this.registration) | 0;
    result = imul(result, 31) + hashCode(this.connectedDevices) | 0;
    result = imul(result, 31) + hashCode(this.connectedDeviceRegistrations) | 0;
    result = imul(result, 31) + hashCode(this.tasks) | 0;
    result = imul(result, 31) + hashCode(this.triggers) | 0;
    result = imul(result, 31) + hashCode(this.taskControls) | 0;
    result = imul(result, 31) + hashCode(this.expectedParticipantData) | 0;
    result = imul(result, 31) + (this.applicationData == null ? 0 : this.applicationData.hashCode()) | 0;
    return result;
  };
  protoOf(PrimaryDeviceDeployment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimaryDeviceDeployment))
      return false;
    if (!equals(this.deviceConfiguration, other.deviceConfiguration))
      return false;
    if (!equals(this.registration, other.registration))
      return false;
    if (!equals(this.connectedDevices, other.connectedDevices))
      return false;
    if (!equals(this.connectedDeviceRegistrations, other.connectedDeviceRegistrations))
      return false;
    if (!equals(this.tasks, other.tasks))
      return false;
    if (!equals(this.triggers, other.triggers))
      return false;
    if (!equals(this.taskControls, other.taskControls))
      return false;
    if (!equals(this.expectedParticipantData, other.expectedParticipantData))
      return false;
    if (!equals(this.applicationData, other.applicationData))
      return false;
    return true;
  };
  function StudyDeploymentStatus$Invited$Companion$$childSerializers$_anonymous__b71jyl() {
    return new ArrayListSerializer(Companion_getInstance_6().i18());
  }
  function StudyDeploymentStatus$Invited$Companion$$childSerializers$_anonymous__b71jyl_0() {
    return new ArrayListSerializer($serializer_getInstance_16());
  }
  function Companion_7() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, StudyDeploymentStatus$Invited$Companion$$childSerializers$_anonymous__b71jyl);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x2d_1 = [null, null, tmp_1, lazy(tmp_2, StudyDeploymentStatus$Invited$Companion$$childSerializers$_anonymous__b71jyl_0), null];
  }
  var Companion_instance_11;
  function Companion_getInstance_9() {
    if (Companion_instance_11 == null)
      new Companion_7();
    return Companion_instance_11;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.StudyDeploymentStatus.Invited', this, 5);
    tmp0_serialDesc.pv('createdOn', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('deviceStatusList', false);
    tmp0_serialDesc.pv('participantStatusList', false);
    tmp0_serialDesc.pv('startedOn', false);
    this.y2d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).z2d = function (encoder, value) {
    var tmp0_desc = this.y2d_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().x2d_1;
    tmp1_output.op(tmp0_desc, 0, InstantSerializer_getInstance(), value.a2e_1);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.b2e_1);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.c2e_1);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.d2e_1);
    tmp1_output.qp(tmp0_desc, 4, InstantSerializer_getInstance(), value.e2e_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_4).nk = function (encoder, value) {
    return this.z2d(encoder, value instanceof Invited ? value : THROW_CCE());
  };
  protoOf($serializer_4).ok = function (decoder) {
    var tmp0_desc = this.y2d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xn(tmp0_desc);
    var tmp10_cached = Companion_getInstance_9().x2d_1;
    if (tmp9_input.no()) {
      tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, InstantSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jo(tmp0_desc, 2, tmp10_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.lo(tmp0_desc, 4, InstantSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, InstantSerializer_getInstance(), tmp4_local0);
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
            tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.lo(tmp0_desc, 4, InstantSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return Invited_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_4).mk = function () {
    return this.y2d_1;
  };
  protoOf($serializer_4).ew = function () {
    var tmp0_cached = Companion_getInstance_9().x2d_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantSerializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2].s2(), tmp0_cached[3].s2(), get_nullable(InstantSerializer_getInstance())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_7() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function Invited_init_$Init$(seen0, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_7().y2d_1);
    }
    StudyDeploymentStatus_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.a2e_1 = createdOn;
    $this.b2e_1 = studyDeploymentId;
    $this.c2e_1 = deviceStatusList;
    $this.d2e_1 = participantStatusList;
    $this.e2e_1 = startedOn;
    return $this;
  }
  function Invited_init_$Create$(seen0, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker) {
    return Invited_init_$Init$(seen0, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker, objectCreate(protoOf(Invited)));
  }
  function StudyDeploymentStatus$DeployingDevices$Companion$$childSerializers$_anonymous__61yllo() {
    return new ArrayListSerializer(Companion_getInstance_6().i18());
  }
  function StudyDeploymentStatus$DeployingDevices$Companion$$childSerializers$_anonymous__61yllo_0() {
    return new ArrayListSerializer($serializer_getInstance_16());
  }
  function Companion_8() {
    Companion_instance_12 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, StudyDeploymentStatus$DeployingDevices$Companion$$childSerializers$_anonymous__61yllo);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f2e_1 = [null, null, tmp_1, lazy(tmp_2, StudyDeploymentStatus$DeployingDevices$Companion$$childSerializers$_anonymous__61yllo_0), null];
  }
  var Companion_instance_12;
  function Companion_getInstance_10() {
    if (Companion_instance_12 == null)
      new Companion_8();
    return Companion_instance_12;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.StudyDeploymentStatus.DeployingDevices', this, 5);
    tmp0_serialDesc.pv('createdOn', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('deviceStatusList', false);
    tmp0_serialDesc.pv('participantStatusList', false);
    tmp0_serialDesc.pv('startedOn', false);
    this.g2e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).h2e = function (encoder, value) {
    var tmp0_desc = this.g2e_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().f2e_1;
    tmp1_output.op(tmp0_desc, 0, InstantSerializer_getInstance(), value.i2e_1);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.j2e_1);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.k2e_1);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.l2e_1);
    tmp1_output.qp(tmp0_desc, 4, InstantSerializer_getInstance(), value.m2e_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_5).nk = function (encoder, value) {
    return this.h2e(encoder, value instanceof DeployingDevices ? value : THROW_CCE());
  };
  protoOf($serializer_5).ok = function (decoder) {
    var tmp0_desc = this.g2e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xn(tmp0_desc);
    var tmp10_cached = Companion_getInstance_10().f2e_1;
    if (tmp9_input.no()) {
      tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, InstantSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jo(tmp0_desc, 2, tmp10_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.lo(tmp0_desc, 4, InstantSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, InstantSerializer_getInstance(), tmp4_local0);
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
            tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.lo(tmp0_desc, 4, InstantSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return DeployingDevices_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_5).mk = function () {
    return this.g2e_1;
  };
  protoOf($serializer_5).ew = function () {
    var tmp0_cached = Companion_getInstance_10().f2e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantSerializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2].s2(), tmp0_cached[3].s2(), get_nullable(InstantSerializer_getInstance())];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_8() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function DeployingDevices_init_$Init$(seen0, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_8().g2e_1);
    }
    StudyDeploymentStatus_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.i2e_1 = createdOn;
    $this.j2e_1 = studyDeploymentId;
    $this.k2e_1 = deviceStatusList;
    $this.l2e_1 = participantStatusList;
    $this.m2e_1 = startedOn;
    return $this;
  }
  function DeployingDevices_init_$Create$(seen0, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker) {
    return DeployingDevices_init_$Init$(seen0, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker, objectCreate(protoOf(DeployingDevices)));
  }
  function StudyDeploymentStatus$Running$Companion$$childSerializers$_anonymous__rs69ht() {
    return new ArrayListSerializer(Companion_getInstance_6().i18());
  }
  function StudyDeploymentStatus$Running$Companion$$childSerializers$_anonymous__rs69ht_0() {
    return new ArrayListSerializer($serializer_getInstance_16());
  }
  function Companion_9() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, StudyDeploymentStatus$Running$Companion$$childSerializers$_anonymous__rs69ht);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n2e_1 = [null, null, tmp_1, lazy(tmp_2, StudyDeploymentStatus$Running$Companion$$childSerializers$_anonymous__rs69ht_0), null];
  }
  var Companion_instance_13;
  function Companion_getInstance_11() {
    if (Companion_instance_13 == null)
      new Companion_9();
    return Companion_instance_13;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.StudyDeploymentStatus.Running', this, 5);
    tmp0_serialDesc.pv('createdOn', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('deviceStatusList', false);
    tmp0_serialDesc.pv('participantStatusList', false);
    tmp0_serialDesc.pv('startedOn', false);
    this.o2e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).p2e = function (encoder, value) {
    var tmp0_desc = this.o2e_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().n2e_1;
    tmp1_output.op(tmp0_desc, 0, InstantSerializer_getInstance(), value.q2e_1);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.r2e_1);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.s2e_1);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.t2e_1);
    tmp1_output.op(tmp0_desc, 4, InstantSerializer_getInstance(), value.u2e_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_6).nk = function (encoder, value) {
    return this.p2e(encoder, value instanceof Running ? value : THROW_CCE());
  };
  protoOf($serializer_6).ok = function (decoder) {
    var tmp0_desc = this.o2e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xn(tmp0_desc);
    var tmp10_cached = Companion_getInstance_11().n2e_1;
    if (tmp9_input.no()) {
      tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, InstantSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jo(tmp0_desc, 2, tmp10_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.jo(tmp0_desc, 4, InstantSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, InstantSerializer_getInstance(), tmp4_local0);
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
            tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.jo(tmp0_desc, 4, InstantSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return Running_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_6).mk = function () {
    return this.o2e_1;
  };
  protoOf($serializer_6).ew = function () {
    var tmp0_cached = Companion_getInstance_11().n2e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantSerializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2].s2(), tmp0_cached[3].s2(), InstantSerializer_getInstance()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_9() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function Running_init_$Init$(seen0, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_9().o2e_1);
    }
    StudyDeploymentStatus_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.q2e_1 = createdOn;
    $this.r2e_1 = studyDeploymentId;
    $this.s2e_1 = deviceStatusList;
    $this.t2e_1 = participantStatusList;
    $this.u2e_1 = startedOn;
    return $this;
  }
  function Running_init_$Create$(seen0, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker) {
    return Running_init_$Init$(seen0, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker, objectCreate(protoOf(Running)));
  }
  function StudyDeploymentStatus$Stopped$Companion$$childSerializers$_anonymous__rh6r8h() {
    return new ArrayListSerializer(Companion_getInstance_6().i18());
  }
  function StudyDeploymentStatus$Stopped$Companion$$childSerializers$_anonymous__rh6r8h_0() {
    return new ArrayListSerializer($serializer_getInstance_16());
  }
  function Companion_10() {
    Companion_instance_14 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, StudyDeploymentStatus$Stopped$Companion$$childSerializers$_anonymous__rh6r8h);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v2e_1 = [null, null, tmp_1, lazy(tmp_2, StudyDeploymentStatus$Stopped$Companion$$childSerializers$_anonymous__rh6r8h_0), null, null];
  }
  var Companion_instance_14;
  function Companion_getInstance_12() {
    if (Companion_instance_14 == null)
      new Companion_10();
    return Companion_instance_14;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.StudyDeploymentStatus.Stopped', this, 6);
    tmp0_serialDesc.pv('createdOn', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('deviceStatusList', false);
    tmp0_serialDesc.pv('participantStatusList', false);
    tmp0_serialDesc.pv('startedOn', false);
    tmp0_serialDesc.pv('stoppedOn', false);
    this.w2e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).x2e = function (encoder, value) {
    var tmp0_desc = this.w2e_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().v2e_1;
    tmp1_output.op(tmp0_desc, 0, InstantSerializer_getInstance(), value.y2e_1);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.z2e_1);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.a2f_1);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.b2f_1);
    tmp1_output.qp(tmp0_desc, 4, InstantSerializer_getInstance(), value.c2f_1);
    tmp1_output.op(tmp0_desc, 5, InstantSerializer_getInstance(), value.stoppedOn);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_7).nk = function (encoder, value) {
    return this.x2e(encoder, value instanceof Stopped ? value : THROW_CCE());
  };
  protoOf($serializer_7).ok = function (decoder) {
    var tmp0_desc = this.w2e_1;
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
    var tmp11_cached = Companion_getInstance_12().v2e_1;
    if (tmp10_input.no()) {
      tmp4_local0 = tmp10_input.jo(tmp0_desc, 0, InstantSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.jo(tmp0_desc, 2, tmp11_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.jo(tmp0_desc, 3, tmp11_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.lo(tmp0_desc, 4, InstantSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.jo(tmp0_desc, 5, InstantSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.jo(tmp0_desc, 0, InstantSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.jo(tmp0_desc, 2, tmp11_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.jo(tmp0_desc, 3, tmp11_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.lo(tmp0_desc, 4, InstantSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.jo(tmp0_desc, 5, InstantSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.yn(tmp0_desc);
    return Stopped_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_7).mk = function () {
    return this.w2e_1;
  };
  protoOf($serializer_7).ew = function () {
    var tmp0_cached = Companion_getInstance_12().v2e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantSerializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2].s2(), tmp0_cached[3].s2(), get_nullable(InstantSerializer_getInstance()), InstantSerializer_getInstance()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_10() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function Stopped_init_$Init$(seen0, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_10().w2e_1);
    }
    StudyDeploymentStatus_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.y2e_1 = createdOn;
    $this.z2e_1 = studyDeploymentId;
    $this.a2f_1 = deviceStatusList;
    $this.b2f_1 = participantStatusList;
    $this.c2f_1 = startedOn;
    $this.stoppedOn = stoppedOn;
    return $this;
  }
  function Stopped_init_$Create$(seen0, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn, serializationConstructorMarker) {
    return Stopped_init_$Init$(seen0, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn, serializationConstructorMarker, objectCreate(protoOf(Stopped)));
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.d2f_1.s2();
  }
  function StudyDeploymentStatus$Companion$_anonymous__3kl6wh() {
    var tmp = getKClass(StudyDeploymentStatus);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(DeployingDevices), getKClass(Invited), getKClass(Running), getKClass(Stopped)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_8(), $serializer_getInstance_7(), $serializer_getInstance_9(), $serializer_getInstance_10()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.deployments.application.StudyDeploymentStatus', tmp, tmp_0, tmp_1, tmp$ret$6);
  }
  function Invited(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) {
    Companion_getInstance_9();
    StudyDeploymentStatus.call(this);
    this.a2e_1 = createdOn;
    this.b2e_1 = studyDeploymentId;
    this.c2e_1 = deviceStatusList;
    this.d2e_1 = participantStatusList;
    this.e2e_1 = startedOn;
  }
  protoOf(Invited).n22 = function () {
    return this.a2e_1;
  };
  protoOf(Invited).e2f = function () {
    return this.b2e_1;
  };
  protoOf(Invited).f2f = function () {
    return this.c2e_1;
  };
  protoOf(Invited).g2f = function () {
    return this.d2e_1;
  };
  protoOf(Invited).h2f = function () {
    return this.e2e_1;
  };
  protoOf(Invited).sd = function () {
    return this.a2e_1;
  };
  protoOf(Invited).td = function () {
    return this.b2e_1;
  };
  protoOf(Invited).m1j = function () {
    return this.c2e_1;
  };
  protoOf(Invited).l1k = function () {
    return this.d2e_1;
  };
  protoOf(Invited).m1p = function () {
    return this.e2e_1;
  };
  protoOf(Invited).i2f = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) {
    return new Invited(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn);
  };
  protoOf(Invited).copy = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, $super) {
    createdOn = createdOn === VOID ? this.a2e_1 : createdOn;
    studyDeploymentId = studyDeploymentId === VOID ? this.b2e_1 : studyDeploymentId;
    deviceStatusList = deviceStatusList === VOID ? this.c2e_1 : deviceStatusList;
    participantStatusList = participantStatusList === VOID ? this.d2e_1 : participantStatusList;
    startedOn = startedOn === VOID ? this.e2e_1 : startedOn;
    return $super === VOID ? this.i2f(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) : $super.i2f.call(this, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn);
  };
  protoOf(Invited).toString = function () {
    return 'Invited(createdOn=' + this.a2e_1.toString() + ', studyDeploymentId=' + this.b2e_1.toString() + ', deviceStatusList=' + toString(this.c2e_1) + ', participantStatusList=' + toString(this.d2e_1) + ', startedOn=' + toString_0(this.e2e_1) + ')';
  };
  protoOf(Invited).hashCode = function () {
    var result = this.a2e_1.hashCode();
    result = imul(result, 31) + this.b2e_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.c2e_1) | 0;
    result = imul(result, 31) + hashCode(this.d2e_1) | 0;
    result = imul(result, 31) + (this.e2e_1 == null ? 0 : this.e2e_1.hashCode()) | 0;
    return result;
  };
  protoOf(Invited).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Invited))
      return false;
    if (!this.a2e_1.equals(other.a2e_1))
      return false;
    if (!this.b2e_1.equals(other.b2e_1))
      return false;
    if (!equals(this.c2e_1, other.c2e_1))
      return false;
    if (!equals(this.d2e_1, other.d2e_1))
      return false;
    if (!equals(this.e2e_1, other.e2e_1))
      return false;
    return true;
  };
  function DeployingDevices(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) {
    Companion_getInstance_10();
    StudyDeploymentStatus.call(this);
    this.i2e_1 = createdOn;
    this.j2e_1 = studyDeploymentId;
    this.k2e_1 = deviceStatusList;
    this.l2e_1 = participantStatusList;
    this.m2e_1 = startedOn;
  }
  protoOf(DeployingDevices).n22 = function () {
    return this.i2e_1;
  };
  protoOf(DeployingDevices).e2f = function () {
    return this.j2e_1;
  };
  protoOf(DeployingDevices).f2f = function () {
    return this.k2e_1;
  };
  protoOf(DeployingDevices).g2f = function () {
    return this.l2e_1;
  };
  protoOf(DeployingDevices).h2f = function () {
    return this.m2e_1;
  };
  protoOf(DeployingDevices).sd = function () {
    return this.i2e_1;
  };
  protoOf(DeployingDevices).td = function () {
    return this.j2e_1;
  };
  protoOf(DeployingDevices).m1j = function () {
    return this.k2e_1;
  };
  protoOf(DeployingDevices).l1k = function () {
    return this.l2e_1;
  };
  protoOf(DeployingDevices).m1p = function () {
    return this.m2e_1;
  };
  protoOf(DeployingDevices).i2f = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) {
    return new DeployingDevices(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn);
  };
  protoOf(DeployingDevices).copy = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, $super) {
    createdOn = createdOn === VOID ? this.i2e_1 : createdOn;
    studyDeploymentId = studyDeploymentId === VOID ? this.j2e_1 : studyDeploymentId;
    deviceStatusList = deviceStatusList === VOID ? this.k2e_1 : deviceStatusList;
    participantStatusList = participantStatusList === VOID ? this.l2e_1 : participantStatusList;
    startedOn = startedOn === VOID ? this.m2e_1 : startedOn;
    return $super === VOID ? this.i2f(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) : $super.i2f.call(this, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn);
  };
  protoOf(DeployingDevices).toString = function () {
    return 'DeployingDevices(createdOn=' + this.i2e_1.toString() + ', studyDeploymentId=' + this.j2e_1.toString() + ', deviceStatusList=' + toString(this.k2e_1) + ', participantStatusList=' + toString(this.l2e_1) + ', startedOn=' + toString_0(this.m2e_1) + ')';
  };
  protoOf(DeployingDevices).hashCode = function () {
    var result = this.i2e_1.hashCode();
    result = imul(result, 31) + this.j2e_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.k2e_1) | 0;
    result = imul(result, 31) + hashCode(this.l2e_1) | 0;
    result = imul(result, 31) + (this.m2e_1 == null ? 0 : this.m2e_1.hashCode()) | 0;
    return result;
  };
  protoOf(DeployingDevices).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeployingDevices))
      return false;
    if (!this.i2e_1.equals(other.i2e_1))
      return false;
    if (!this.j2e_1.equals(other.j2e_1))
      return false;
    if (!equals(this.k2e_1, other.k2e_1))
      return false;
    if (!equals(this.l2e_1, other.l2e_1))
      return false;
    if (!equals(this.m2e_1, other.m2e_1))
      return false;
    return true;
  };
  function Running(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) {
    Companion_getInstance_11();
    StudyDeploymentStatus.call(this);
    this.q2e_1 = createdOn;
    this.r2e_1 = studyDeploymentId;
    this.s2e_1 = deviceStatusList;
    this.t2e_1 = participantStatusList;
    this.u2e_1 = startedOn;
  }
  protoOf(Running).n22 = function () {
    return this.q2e_1;
  };
  protoOf(Running).e2f = function () {
    return this.r2e_1;
  };
  protoOf(Running).f2f = function () {
    return this.s2e_1;
  };
  protoOf(Running).g2f = function () {
    return this.t2e_1;
  };
  protoOf(Running).h2f = function () {
    return this.u2e_1;
  };
  protoOf(Running).sd = function () {
    return this.q2e_1;
  };
  protoOf(Running).td = function () {
    return this.r2e_1;
  };
  protoOf(Running).m1j = function () {
    return this.s2e_1;
  };
  protoOf(Running).l1k = function () {
    return this.t2e_1;
  };
  protoOf(Running).m1p = function () {
    return this.u2e_1;
  };
  protoOf(Running).j2f = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) {
    return new Running(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn);
  };
  protoOf(Running).copy = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, $super) {
    createdOn = createdOn === VOID ? this.q2e_1 : createdOn;
    studyDeploymentId = studyDeploymentId === VOID ? this.r2e_1 : studyDeploymentId;
    deviceStatusList = deviceStatusList === VOID ? this.s2e_1 : deviceStatusList;
    participantStatusList = participantStatusList === VOID ? this.t2e_1 : participantStatusList;
    startedOn = startedOn === VOID ? this.u2e_1 : startedOn;
    return $super === VOID ? this.j2f(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) : $super.j2f.call(this, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn);
  };
  protoOf(Running).toString = function () {
    return 'Running(createdOn=' + this.q2e_1.toString() + ', studyDeploymentId=' + this.r2e_1.toString() + ', deviceStatusList=' + toString(this.s2e_1) + ', participantStatusList=' + toString(this.t2e_1) + ', startedOn=' + this.u2e_1.toString() + ')';
  };
  protoOf(Running).hashCode = function () {
    var result = this.q2e_1.hashCode();
    result = imul(result, 31) + this.r2e_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.s2e_1) | 0;
    result = imul(result, 31) + hashCode(this.t2e_1) | 0;
    result = imul(result, 31) + this.u2e_1.hashCode() | 0;
    return result;
  };
  protoOf(Running).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Running))
      return false;
    if (!this.q2e_1.equals(other.q2e_1))
      return false;
    if (!this.r2e_1.equals(other.r2e_1))
      return false;
    if (!equals(this.s2e_1, other.s2e_1))
      return false;
    if (!equals(this.t2e_1, other.t2e_1))
      return false;
    if (!this.u2e_1.equals(other.u2e_1))
      return false;
    return true;
  };
  function Stopped(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn) {
    Companion_getInstance_12();
    StudyDeploymentStatus.call(this);
    this.y2e_1 = createdOn;
    this.z2e_1 = studyDeploymentId;
    this.a2f_1 = deviceStatusList;
    this.b2f_1 = participantStatusList;
    this.c2f_1 = startedOn;
    this.stoppedOn = stoppedOn;
  }
  protoOf(Stopped).n22 = function () {
    return this.y2e_1;
  };
  protoOf(Stopped).e2f = function () {
    return this.z2e_1;
  };
  protoOf(Stopped).f2f = function () {
    return this.a2f_1;
  };
  protoOf(Stopped).g2f = function () {
    return this.b2f_1;
  };
  protoOf(Stopped).h2f = function () {
    return this.c2f_1;
  };
  protoOf(Stopped).k2f = function () {
    return this.stoppedOn;
  };
  protoOf(Stopped).sd = function () {
    return this.y2e_1;
  };
  protoOf(Stopped).td = function () {
    return this.z2e_1;
  };
  protoOf(Stopped).m1j = function () {
    return this.a2f_1;
  };
  protoOf(Stopped).l1k = function () {
    return this.b2f_1;
  };
  protoOf(Stopped).m1p = function () {
    return this.c2f_1;
  };
  protoOf(Stopped).n1s = function () {
    return this.stoppedOn;
  };
  protoOf(Stopped).l2f = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn) {
    return new Stopped(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn);
  };
  protoOf(Stopped).copy = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn, $super) {
    createdOn = createdOn === VOID ? this.y2e_1 : createdOn;
    studyDeploymentId = studyDeploymentId === VOID ? this.z2e_1 : studyDeploymentId;
    deviceStatusList = deviceStatusList === VOID ? this.a2f_1 : deviceStatusList;
    participantStatusList = participantStatusList === VOID ? this.b2f_1 : participantStatusList;
    startedOn = startedOn === VOID ? this.c2f_1 : startedOn;
    stoppedOn = stoppedOn === VOID ? this.stoppedOn : stoppedOn;
    return $super === VOID ? this.l2f(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn) : $super.l2f.call(this, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn);
  };
  protoOf(Stopped).toString = function () {
    return 'Stopped(createdOn=' + this.y2e_1.toString() + ', studyDeploymentId=' + this.z2e_1.toString() + ', deviceStatusList=' + toString(this.a2f_1) + ', participantStatusList=' + toString(this.b2f_1) + ', startedOn=' + toString_0(this.c2f_1) + ', stoppedOn=' + this.stoppedOn.toString() + ')';
  };
  protoOf(Stopped).hashCode = function () {
    var result = this.y2e_1.hashCode();
    result = imul(result, 31) + this.z2e_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.a2f_1) | 0;
    result = imul(result, 31) + hashCode(this.b2f_1) | 0;
    result = imul(result, 31) + (this.c2f_1 == null ? 0 : this.c2f_1.hashCode()) | 0;
    result = imul(result, 31) + this.stoppedOn.hashCode() | 0;
    return result;
  };
  protoOf(Stopped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stopped))
      return false;
    if (!this.y2e_1.equals(other.y2e_1))
      return false;
    if (!this.z2e_1.equals(other.z2e_1))
      return false;
    if (!equals(this.a2f_1, other.a2f_1))
      return false;
    if (!equals(this.b2f_1, other.b2f_1))
      return false;
    if (!equals(this.c2f_1, other.c2f_1))
      return false;
    if (!this.stoppedOn.equals(other.stoppedOn))
      return false;
    return true;
  };
  function Companion_11() {
    Companion_instance_15 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.d2f_1 = lazy(tmp_0, StudyDeploymentStatus$Companion$_anonymous__3kl6wh);
  }
  protoOf(Companion_11).i18 = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_11).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_15;
  function Companion_getInstance_13() {
    if (Companion_instance_15 == null)
      new Companion_11();
    return Companion_instance_15;
  }
  function StudyDeploymentStatus_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function StudyDeploymentStatus() {
    Companion_getInstance_13();
  }
  protoOf(StudyDeploymentStatus).getRemainingDevicesToRegister = function () {
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = this.deviceStatusList;
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      if (element instanceof Unregistered) {
        destination.y(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var _iterator__ex2g4s_0 = destination.r();
    while (_iterator__ex2g4s_0.s()) {
      var item = _iterator__ex2g4s_0.t();
      var tmp$ret$4 = item.z2b_1;
      destination_0.y(tmp$ret$4);
    }
    return toSet(destination_0);
  };
  protoOf(StudyDeploymentStatus).getRemainingDevicesReadyToDeploy = function () {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.deviceStatusList;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      var tmp;
      if (element instanceof NotDeployed) {
        tmp = element.canObtainDeviceDeployment;
      } else {
        tmp = false;
      }
      if (tmp) {
        destination.y(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var _iterator__ex2g4s_0 = destination.r();
    while (_iterator__ex2g4s_0.s()) {
      var item = _iterator__ex2g4s_0.t();
      var tmp$ret$5 = item.device;
      destination_0.y(tmp$ret$5);
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination_1 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_1 = destination_0.r();
    while (_iterator__ex2g4s_1.s()) {
      var element_0 = _iterator__ex2g4s_1.t();
      if (element_0 instanceof PrimaryDeviceConfiguration) {
        destination_1.y(element_0);
      }
    }
    return toSet(destination_1);
  };
  protoOf(StudyDeploymentStatus).getDeviceStatus = function (device) {
    var tmp0 = this.deviceStatusList;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.r();
      while (_iterator__ex2g4s.s()) {
        var element = _iterator__ex2g4s.t();
        if (equals(element.device, device)) {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('The given device was not found in this study deployment.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(StudyDeploymentStatus).getDeviceStatusByRoleName = function (deviceRoleName) {
    var tmp0 = this.deviceStatusList;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.r();
      while (_iterator__ex2g4s.s()) {
        var element = _iterator__ex2g4s.t();
        if (element.device.roleName === deviceRoleName) {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('The device with the given role name was not found in this study deployment.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function throwIfInvalidInvitations(_this__u8e3s4, invitations) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!invitations.p()) {
      var message = 'No participants invited.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(invitations, 10));
    var _iterator__ex2g4s = invitations.r();
    while (_iterator__ex2g4s.s()) {
      var item = _iterator__ex2g4s.t();
      var tmp$ret$5 = item.assignedRoles;
      destination.y(tmp$ret$5);
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = destination.r();
    while (_iterator__ex2g4s_0.s()) {
      var element = _iterator__ex2g4s_0.t();
      if (element instanceof Roles) {
        destination_0.y(element);
      }
    }
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_1 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_1 = destination_0.r();
    while (_iterator__ex2g4s_1.s()) {
      var element_0 = _iterator__ex2g4s_1.t();
      var list = element_0.roleNames;
      addAll(destination_1, list);
    }
    var assignedParticipantRoles = toSet(destination_1);
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.participantRoles;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_2 = this_0.r();
    while (_iterator__ex2g4s_2.s()) {
      var item_0 = _iterator__ex2g4s_2.t();
      var tmp$ret$13 = item_0.role;
      destination_2.y(tmp$ret$13);
    }
    var availableRoles = toSet(destination_2);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_3 = assignedParticipantRoles.r();
    while (_iterator__ex2g4s_3.s()) {
      var element_1 = _iterator__ex2g4s_3.t();
      // Inline function 'kotlin.require' call
      if (!availableRoles.o1(element_1)) {
        var message_0 = 'The assigned participant role "' + element_1 + '" is not part of the study protocol.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    var tmp$ret$18;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(invitations, Collection)) {
        tmp = invitations.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$18 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_4 = invitations.r();
      while (_iterator__ex2g4s_4.s()) {
        var element_2 = _iterator__ex2g4s_4.t();
        var tmp_0 = element_2.assignedRoles;
        if (tmp_0 instanceof All) {
          tmp$ret$18 = true;
          break $l$block_0;
        }
      }
      tmp$ret$18 = false;
    }
    var allRolesAssigned = tmp$ret$18;
    if (!allRolesAssigned) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = _this__u8e3s4.participantRoles;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_3 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_5 = tmp0.r();
      while (_iterator__ex2g4s_5.s()) {
        var element_3 = _iterator__ex2g4s_5.t();
        if (!element_3.isOptional) {
          destination_3.y(element_3);
        }
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_4 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_3, 10));
      var _iterator__ex2g4s_6 = destination_3.r();
      while (_iterator__ex2g4s_6.s()) {
        var item_1 = _iterator__ex2g4s_6.t();
        var tmp$ret$25 = item_1.role;
        destination_4.y(tmp$ret$25);
      }
      var requiredRoles = toSet(destination_4);
      // Inline function 'kotlin.require' call
      if (!assignedParticipantRoles.e2(requiredRoles)) {
        var message_1 = 'Not all necessary participant roles have been assigned a participant.';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = _this__u8e3s4.primaryDevices;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_5 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_7 = tmp0_0.r();
      while (_iterator__ex2g4s_7.s()) {
        var element_4 = _iterator__ex2g4s_7.t();
        if (!element_4.isOptional) {
          destination_5.y(element_4);
        }
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_6 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_5, 10));
      var _iterator__ex2g4s_8 = destination_5.r();
      while (_iterator__ex2g4s_8.s()) {
        var item_2 = _iterator__ex2g4s_8.t();
        var tmp$ret$33 = item_2.roleName;
        destination_6.y(tmp$ret$33);
      }
      var requiredPrimaryDeviceRoleNames = destination_6;
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination_7 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_9 = invitations.r();
      while (_iterator__ex2g4s_9.s()) {
        var element_5 = _iterator__ex2g4s_9.t();
        var list_0 = getAssignedDeviceRoleNames(_this__u8e3s4, element_5.assignedRoles);
        addAll(destination_7, list_0);
      }
      var assignedPrimaryDeviceRoleNames = toSet(destination_7);
      // Inline function 'kotlin.require' call
      if (!assignedPrimaryDeviceRoleNames.e2(requiredPrimaryDeviceRoleNames)) {
        var message_2 = 'Not all necessary devices required for this study have been assigned to a participant.';
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
  }
  function throwIfInvalidPreregistrations(_this__u8e3s4, connectedDevicePreregistrations) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = connectedDevicePreregistrations.f1().r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      // Inline function 'kotlin.collections.component1' call
      var roleName = element.r2();
      // Inline function 'kotlin.collections.component2' call
      var registration = element.s2();
      var tmp0 = _this__u8e3s4.connectedDevices;
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = tmp0.r();
        while (_iterator__ex2g4s_0.s()) {
          var element_0 = _iterator__ex2g4s_0.t();
          if (element_0.roleName === roleName) {
            tmp$ret$5 = element_0;
            break $l$block;
          }
        }
        tmp$ret$5 = null;
      }
      var connectedDevice = tmp$ret$5;
      $l$block_0: {
        // Inline function 'kotlin.requireNotNull' call
        if (connectedDevice == null) {
          var message = 'The device with role name "' + roleName + '" for which a preregistration was defined ' + "isn't a connected device in the study protocol.";
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          break $l$block_0;
        }
      }
      var isInvalidRegistration = connectedDevice.isDefinitelyInvalidRegistration(registration);
      // Inline function 'kotlin.require' call
      if (!!isInvalidRegistration) {
        var message_0 = 'The preregistration for the connected device with role name "' + roleName + '" is invalid.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
  }
  function ActiveParticipationInvitation$Companion$$childSerializers$_anonymous__46wi96() {
    return new LinkedHashSetSerializer($serializer_getInstance_12());
  }
  function Companion_12() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m2f_1 = [null, null, lazy(tmp_0, ActiveParticipationInvitation$Companion$$childSerializers$_anonymous__46wi96)];
  }
  var Companion_instance_16;
  function Companion_getInstance_14() {
    if (Companion_instance_16 == null)
      new Companion_12();
    return Companion_instance_16;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.ActiveParticipationInvitation', this, 3);
    tmp0_serialDesc.pv('participation', false);
    tmp0_serialDesc.pv('invitation', false);
    tmp0_serialDesc.pv('assignedDevices', false);
    this.n2f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).o2f = function (encoder, value) {
    var tmp0_desc = this.n2f_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().m2f_1;
    tmp1_output.op(tmp0_desc, 0, $serializer_getInstance_17(), value.participation);
    tmp1_output.op(tmp0_desc, 1, $serializer_getInstance_18(), value.invitation);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.assignedDevices);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_8).nk = function (encoder, value) {
    return this.o2f(encoder, value instanceof ActiveParticipationInvitation ? value : THROW_CCE());
  };
  protoOf($serializer_8).ok = function (decoder) {
    var tmp0_desc = this.n2f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_14().m2f_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, $serializer_getInstance_17(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, $serializer_getInstance_18(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, $serializer_getInstance_17(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, $serializer_getInstance_18(), tmp5_local1);
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
    return ActiveParticipationInvitation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_8).mk = function () {
    return this.n2f_1;
  };
  protoOf($serializer_8).ew = function () {
    var tmp0_cached = Companion_getInstance_14().m2f_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_17(), $serializer_getInstance_18(), tmp0_cached[2].s2()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_11() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function ActiveParticipationInvitation_init_$Init$(seen0, participation, invitation, assignedDevices, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_11().n2f_1);
    }
    $this.participation = participation;
    $this.invitation = invitation;
    $this.assignedDevices = assignedDevices;
    return $this;
  }
  function ActiveParticipationInvitation_init_$Create$(seen0, participation, invitation, assignedDevices, serializationConstructorMarker) {
    return ActiveParticipationInvitation_init_$Init$(seen0, participation, invitation, assignedDevices, serializationConstructorMarker, objectCreate(protoOf(ActiveParticipationInvitation)));
  }
  function ActiveParticipationInvitation(participation, invitation, assignedDevices) {
    Companion_getInstance_14();
    this.participation = participation;
    this.invitation = invitation;
    this.assignedDevices = assignedDevices;
  }
  protoOf(ActiveParticipationInvitation).p2f = function () {
    return this.participation;
  };
  protoOf(ActiveParticipationInvitation).q2f = function () {
    return this.invitation;
  };
  protoOf(ActiveParticipationInvitation).m28 = function () {
    return this.assignedDevices;
  };
  protoOf(ActiveParticipationInvitation).sd = function () {
    return this.participation;
  };
  protoOf(ActiveParticipationInvitation).td = function () {
    return this.invitation;
  };
  protoOf(ActiveParticipationInvitation).m1j = function () {
    return this.assignedDevices;
  };
  protoOf(ActiveParticipationInvitation).r2f = function (participation, invitation, assignedDevices) {
    return new ActiveParticipationInvitation(participation, invitation, assignedDevices);
  };
  protoOf(ActiveParticipationInvitation).copy = function (participation, invitation, assignedDevices, $super) {
    participation = participation === VOID ? this.participation : participation;
    invitation = invitation === VOID ? this.invitation : invitation;
    assignedDevices = assignedDevices === VOID ? this.assignedDevices : assignedDevices;
    return $super === VOID ? this.r2f(participation, invitation, assignedDevices) : $super.r2f.call(this, participation, invitation, assignedDevices);
  };
  protoOf(ActiveParticipationInvitation).toString = function () {
    return 'ActiveParticipationInvitation(participation=' + this.participation.toString() + ', invitation=' + this.invitation.toString() + ', assignedDevices=' + toString(this.assignedDevices) + ')';
  };
  protoOf(ActiveParticipationInvitation).hashCode = function () {
    var result = this.participation.hashCode();
    result = imul(result, 31) + this.invitation.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.assignedDevices) | 0;
    return result;
  };
  protoOf(ActiveParticipationInvitation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ActiveParticipationInvitation))
      return false;
    if (!this.participation.equals(other.participation))
      return false;
    if (!this.invitation.equals(other.invitation))
      return false;
    if (!equals(this.assignedDevices, other.assignedDevices))
      return false;
    return true;
  };
  function AssignedPrimaryDevice$Companion$$childSerializers$_anonymous__8dmw80() {
    return Companion_getInstance().i18();
  }
  function Companion_13() {
    Companion_instance_17 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s2f_1 = [null, lazy(tmp_0, AssignedPrimaryDevice$Companion$$childSerializers$_anonymous__8dmw80)];
  }
  var Companion_instance_17;
  function Companion_getInstance_15() {
    if (Companion_instance_17 == null)
      new Companion_13();
    return Companion_instance_17;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.AssignedPrimaryDevice', this, 2);
    tmp0_serialDesc.pv('device', false);
    tmp0_serialDesc.pv('registration', true);
    this.t2f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).u2f = function (encoder, value) {
    var tmp0_desc = this.t2f_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().s2f_1;
    tmp1_output.op(tmp0_desc, 0, Companion_instance_1.y1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), value.device);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.registration == null)) {
      tmp1_output.qp(tmp0_desc, 1, tmp2_cached[1].s2(), value.registration);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_9).nk = function (encoder, value) {
    return this.u2f(encoder, value instanceof AssignedPrimaryDevice ? value : THROW_CCE());
  };
  protoOf($serializer_9).ok = function (decoder) {
    var tmp0_desc = this.t2f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_15().s2f_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, Companion_instance_1.y1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.lo(tmp0_desc, 1, tmp7_cached[1].s2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, Companion_instance_1.y1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.lo(tmp0_desc, 1, tmp7_cached[1].s2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return AssignedPrimaryDevice_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_9).mk = function () {
    return this.t2f_1;
  };
  protoOf($serializer_9).ew = function () {
    var tmp0_cached = Companion_getInstance_15().s2f_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_instance_1.y1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()), get_nullable(tmp0_cached[1].s2())];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_12() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function AssignedPrimaryDevice_init_$Init$(seen0, device, registration, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_12().t2f_1);
    }
    $this.device = device;
    if (0 === (seen0 & 2))
      $this.registration = null;
    else
      $this.registration = registration;
    return $this;
  }
  function AssignedPrimaryDevice_init_$Create$(seen0, device, registration, serializationConstructorMarker) {
    return AssignedPrimaryDevice_init_$Init$(seen0, device, registration, serializationConstructorMarker, objectCreate(protoOf(AssignedPrimaryDevice)));
  }
  function AssignedPrimaryDevice(device, registration) {
    Companion_getInstance_15();
    registration = registration === VOID ? null : registration;
    this.device = device;
    this.registration = registration;
  }
  protoOf(AssignedPrimaryDevice).d2d = function () {
    return this.device;
  };
  protoOf(AssignedPrimaryDevice).o2d = function () {
    return this.registration;
  };
  protoOf(AssignedPrimaryDevice).sd = function () {
    return this.device;
  };
  protoOf(AssignedPrimaryDevice).td = function () {
    return this.registration;
  };
  protoOf(AssignedPrimaryDevice).v2f = function (device, registration) {
    return new AssignedPrimaryDevice(device, registration);
  };
  protoOf(AssignedPrimaryDevice).copy = function (device, registration, $super) {
    device = device === VOID ? this.device : device;
    registration = registration === VOID ? this.registration : registration;
    return $super === VOID ? this.v2f(device, registration) : $super.v2f.call(this, device, registration);
  };
  protoOf(AssignedPrimaryDevice).toString = function () {
    return 'AssignedPrimaryDevice(device=' + toString(this.device) + ', registration=' + toString_0(this.registration) + ')';
  };
  protoOf(AssignedPrimaryDevice).hashCode = function () {
    var result = hashCode(this.device);
    result = imul(result, 31) + (this.registration == null ? 0 : hashCode(this.registration)) | 0;
    return result;
  };
  protoOf(AssignedPrimaryDevice).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AssignedPrimaryDevice))
      return false;
    if (!equals(this.device, other.device))
      return false;
    if (!equals(this.registration, other.registration))
      return false;
    return true;
  };
  function ParticipantData$RoleData$Companion$$childSerializers$_anonymous__9fz059() {
    var tmp = NamespacedIdSerializer_getInstance();
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashMapSerializer(tmp, get_nullable(PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$0)));
  }
  function Companion_14() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w2f_1 = [null, lazy(tmp_0, ParticipantData$RoleData$Companion$$childSerializers$_anonymous__9fz059)];
  }
  var Companion_instance_18;
  function Companion_getInstance_16() {
    if (Companion_instance_18 == null)
      new Companion_14();
    return Companion_instance_18;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.ParticipantData.RoleData', this, 2);
    tmp0_serialDesc.pv('roleName', false);
    tmp0_serialDesc.pv('data', false);
    this.x2f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).y2f = function (encoder, value) {
    var tmp0_desc = this.x2f_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().w2f_1;
    tmp1_output.mp(tmp0_desc, 0, value.roleName);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.data);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_10).nk = function (encoder, value) {
    return this.y2f(encoder, value instanceof RoleData ? value : THROW_CCE());
  };
  protoOf($serializer_10).ok = function (decoder) {
    var tmp0_desc = this.x2f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_16().w2f_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.ho(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.ho(tmp0_desc, 0);
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
    return RoleData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_10).mk = function () {
    return this.x2f_1;
  };
  protoOf($serializer_10).ew = function () {
    var tmp0_cached = Companion_getInstance_16().w2f_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].s2()];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_13() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function RoleData_init_$Init$(seen0, roleName, data, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_13().x2f_1);
    }
    $this.roleName = roleName;
    $this.data = data;
    return $this;
  }
  function RoleData_init_$Create$(seen0, roleName, data, serializationConstructorMarker) {
    return RoleData_init_$Init$(seen0, roleName, data, serializationConstructorMarker, objectCreate(protoOf(RoleData)));
  }
  function ParticipantData$Companion$$childSerializers$_anonymous__4mgjxp() {
    var tmp = NamespacedIdSerializer_getInstance();
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashMapSerializer(tmp, get_nullable(PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$0)));
  }
  function ParticipantData$Companion$$childSerializers$_anonymous__4mgjxp_0() {
    return new ArrayListSerializer($serializer_getInstance_13());
  }
  function RoleData(roleName, data) {
    Companion_getInstance_16();
    this.roleName = roleName;
    this.data = data;
  }
  protoOf(RoleData).q1r = function () {
    return this.roleName;
  };
  protoOf(RoleData).x1h = function () {
    return this.data;
  };
  protoOf(RoleData).sd = function () {
    return this.roleName;
  };
  protoOf(RoleData).td = function () {
    return this.data;
  };
  protoOf(RoleData).z2f = function (roleName, data) {
    return new RoleData(roleName, data);
  };
  protoOf(RoleData).copy = function (roleName, data, $super) {
    roleName = roleName === VOID ? this.roleName : roleName;
    data = data === VOID ? this.data : data;
    return $super === VOID ? this.z2f(roleName, data) : $super.z2f.call(this, roleName, data);
  };
  protoOf(RoleData).toString = function () {
    return 'RoleData(roleName=' + this.roleName + ', data=' + toString(this.data) + ')';
  };
  protoOf(RoleData).hashCode = function () {
    var result = getStringHashCode(this.roleName);
    result = imul(result, 31) + hashCode(this.data) | 0;
    return result;
  };
  protoOf(RoleData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoleData))
      return false;
    if (!(this.roleName === other.roleName))
      return false;
    if (!equals(this.data, other.data))
      return false;
    return true;
  };
  function Companion_15() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ParticipantData$Companion$$childSerializers$_anonymous__4mgjxp);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a2g_1 = [null, tmp_1, lazy(tmp_2, ParticipantData$Companion$$childSerializers$_anonymous__4mgjxp_0)];
  }
  var Companion_instance_19;
  function Companion_getInstance_17() {
    if (Companion_instance_19 == null)
      new Companion_15();
    return Companion_instance_19;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.ParticipantData', this, 3);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('common', false);
    tmp0_serialDesc.pv('roles', false);
    this.b2g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).c2g = function (encoder, value) {
    var tmp0_desc = this.b2g_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_17().a2g_1;
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.common);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.roles);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_11).nk = function (encoder, value) {
    return this.c2g(encoder, value instanceof ParticipantData ? value : THROW_CCE());
  };
  protoOf($serializer_11).ok = function (decoder) {
    var tmp0_desc = this.b2g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_17().a2g_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, tmp8_cached[1].s2(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, tmp8_cached[1].s2(), tmp5_local1);
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
    return ParticipantData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_11).mk = function () {
    return this.b2g_1;
  };
  protoOf($serializer_11).ew = function () {
    var tmp0_cached = Companion_getInstance_17().a2g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1].s2(), tmp0_cached[2].s2()];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_14() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function ParticipantData_init_$Init$(seen0, studyDeploymentId, common, roles, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_14().b2g_1);
    }
    $this.studyDeploymentId = studyDeploymentId;
    $this.common = common;
    $this.roles = roles;
    return $this;
  }
  function ParticipantData_init_$Create$(seen0, studyDeploymentId, common, roles, serializationConstructorMarker) {
    return ParticipantData_init_$Init$(seen0, studyDeploymentId, common, roles, serializationConstructorMarker, objectCreate(protoOf(ParticipantData)));
  }
  function ParticipantData(studyDeploymentId, common, roles) {
    Companion_getInstance_17();
    this.studyDeploymentId = studyDeploymentId;
    this.common = common;
    this.roles = roles;
  }
  protoOf(ParticipantData).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(ParticipantData).d2g = function () {
    return this.common;
  };
  protoOf(ParticipantData).e2g = function () {
    return this.roles;
  };
  protoOf(ParticipantData).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(ParticipantData).td = function () {
    return this.common;
  };
  protoOf(ParticipantData).m1j = function () {
    return this.roles;
  };
  protoOf(ParticipantData).f2g = function (studyDeploymentId, common, roles) {
    return new ParticipantData(studyDeploymentId, common, roles);
  };
  protoOf(ParticipantData).copy = function (studyDeploymentId, common, roles, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    common = common === VOID ? this.common : common;
    roles = roles === VOID ? this.roles : roles;
    return $super === VOID ? this.f2g(studyDeploymentId, common, roles) : $super.f2g.call(this, studyDeploymentId, common, roles);
  };
  protoOf(ParticipantData).toString = function () {
    return 'ParticipantData(studyDeploymentId=' + this.studyDeploymentId.toString() + ', common=' + toString(this.common) + ', roles=' + toString(this.roles) + ')';
  };
  protoOf(ParticipantData).hashCode = function () {
    var result = this.studyDeploymentId.hashCode();
    result = imul(result, 31) + hashCode(this.common) | 0;
    result = imul(result, 31) + hashCode(this.roles) | 0;
    return result;
  };
  protoOf(ParticipantData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParticipantData))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    if (!equals(this.common, other.common))
      return false;
    if (!equals(this.roles, other.roles))
      return false;
    return true;
  };
  function ParticipantInvitation$Companion$$childSerializers$_anonymous__j60w1q() {
    return Companion_getInstance_0().i18();
  }
  function ParticipantInvitation$Companion$$childSerializers$_anonymous__j60w1q_0() {
    var tmp = getKClass(AccountIdentity);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_16() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ParticipantInvitation$Companion$$childSerializers$_anonymous__j60w1q);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g2g_1 = [null, tmp_1, lazy(tmp_2, ParticipantInvitation$Companion$$childSerializers$_anonymous__j60w1q_0), null];
  }
  var Companion_instance_20;
  function Companion_getInstance_18() {
    if (Companion_instance_20 == null)
      new Companion_16();
    return Companion_instance_20;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.ParticipantInvitation', this, 4);
    tmp0_serialDesc.pv('participantId', false);
    tmp0_serialDesc.pv('assignedRoles', false);
    tmp0_serialDesc.pv('identity', false);
    tmp0_serialDesc.pv('invitation', false);
    this.h2g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).i2g = function (encoder, value) {
    var tmp0_desc = this.h2g_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_18().g2g_1;
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.participantId);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.assignedRoles);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.identity);
    tmp1_output.op(tmp0_desc, 3, $serializer_getInstance_18(), value.invitation);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_12).nk = function (encoder, value) {
    return this.i2g(encoder, value instanceof ParticipantInvitation ? value : THROW_CCE());
  };
  protoOf($serializer_12).ok = function (decoder) {
    var tmp0_desc = this.h2g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_18().g2g_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, tmp9_cached[1].s2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jo(tmp0_desc, 2, tmp9_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.jo(tmp0_desc, 3, $serializer_getInstance_18(), tmp7_local3);
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
            tmp7_local3 = tmp8_input.jo(tmp0_desc, 3, $serializer_getInstance_18(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return ParticipantInvitation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_12).mk = function () {
    return this.h2g_1;
  };
  protoOf($serializer_12).ew = function () {
    var tmp0_cached = Companion_getInstance_18().g2g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1].s2(), tmp0_cached[2].s2(), $serializer_getInstance_18()];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_15() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function ParticipantInvitation_init_$Init$(seen0, participantId, assignedRoles, identity, invitation, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_15().h2g_1);
    }
    $this.participantId = participantId;
    $this.assignedRoles = assignedRoles;
    $this.identity = identity;
    $this.invitation = invitation;
    return $this;
  }
  function ParticipantInvitation_init_$Create$(seen0, participantId, assignedRoles, identity, invitation, serializationConstructorMarker) {
    return ParticipantInvitation_init_$Init$(seen0, participantId, assignedRoles, identity, invitation, serializationConstructorMarker, objectCreate(protoOf(ParticipantInvitation)));
  }
  function ParticipantInvitation(participantId, assignedRoles, identity, invitation) {
    Companion_getInstance_18();
    this.participantId = participantId;
    this.assignedRoles = assignedRoles;
    this.identity = identity;
    this.invitation = invitation;
  }
  protoOf(ParticipantInvitation).j2g = function () {
    return this.participantId;
  };
  protoOf(ParticipantInvitation).k2g = function () {
    return this.assignedRoles;
  };
  protoOf(ParticipantInvitation).l2g = function () {
    return this.identity;
  };
  protoOf(ParticipantInvitation).q2f = function () {
    return this.invitation;
  };
  protoOf(ParticipantInvitation).sd = function () {
    return this.participantId;
  };
  protoOf(ParticipantInvitation).td = function () {
    return this.assignedRoles;
  };
  protoOf(ParticipantInvitation).m1j = function () {
    return this.identity;
  };
  protoOf(ParticipantInvitation).l1k = function () {
    return this.invitation;
  };
  protoOf(ParticipantInvitation).m2g = function (participantId, assignedRoles, identity, invitation) {
    return new ParticipantInvitation(participantId, assignedRoles, identity, invitation);
  };
  protoOf(ParticipantInvitation).copy = function (participantId, assignedRoles, identity, invitation, $super) {
    participantId = participantId === VOID ? this.participantId : participantId;
    assignedRoles = assignedRoles === VOID ? this.assignedRoles : assignedRoles;
    identity = identity === VOID ? this.identity : identity;
    invitation = invitation === VOID ? this.invitation : invitation;
    return $super === VOID ? this.m2g(participantId, assignedRoles, identity, invitation) : $super.m2g.call(this, participantId, assignedRoles, identity, invitation);
  };
  protoOf(ParticipantInvitation).toString = function () {
    return 'ParticipantInvitation(participantId=' + this.participantId.toString() + ', assignedRoles=' + toString(this.assignedRoles) + ', identity=' + toString(this.identity) + ', invitation=' + this.invitation.toString() + ')';
  };
  protoOf(ParticipantInvitation).hashCode = function () {
    var result = this.participantId.hashCode();
    result = imul(result, 31) + hashCode(this.assignedRoles) | 0;
    result = imul(result, 31) + hashCode(this.identity) | 0;
    result = imul(result, 31) + this.invitation.hashCode() | 0;
    return result;
  };
  protoOf(ParticipantInvitation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParticipantInvitation))
      return false;
    if (!this.participantId.equals(other.participantId))
      return false;
    if (!equals(this.assignedRoles, other.assignedRoles))
      return false;
    if (!equals(this.identity, other.identity))
      return false;
    if (!this.invitation.equals(other.invitation))
      return false;
    return true;
  };
  function ParticipantStatus$Companion$$childSerializers$_anonymous__v85wf9() {
    return Companion_getInstance_0().i18();
  }
  function ParticipantStatus$Companion$$childSerializers$_anonymous__v85wf9_0() {
    return new LinkedHashSetSerializer(StringSerializer_getInstance());
  }
  function Companion_17() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ParticipantStatus$Companion$$childSerializers$_anonymous__v85wf9);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n2g_1 = [null, tmp_1, lazy(tmp_2, ParticipantStatus$Companion$$childSerializers$_anonymous__v85wf9_0)];
  }
  var Companion_instance_21;
  function Companion_getInstance_19() {
    if (Companion_instance_21 == null)
      new Companion_17();
    return Companion_instance_21;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.ParticipantStatus', this, 3);
    tmp0_serialDesc.pv('participantId', false);
    tmp0_serialDesc.pv('assignedParticipantRoles', false);
    tmp0_serialDesc.pv('assignedPrimaryDeviceRoleNames', false);
    this.o2g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).p2g = function (encoder, value) {
    var tmp0_desc = this.o2g_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().n2g_1;
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.participantId);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.assignedParticipantRoles);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.assignedPrimaryDeviceRoleNames);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_13).nk = function (encoder, value) {
    return this.p2g(encoder, value instanceof ParticipantStatus ? value : THROW_CCE());
  };
  protoOf($serializer_13).ok = function (decoder) {
    var tmp0_desc = this.o2g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_19().n2g_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, tmp8_cached[1].s2(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, tmp8_cached[1].s2(), tmp5_local1);
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
    return ParticipantStatus_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_13).mk = function () {
    return this.o2g_1;
  };
  protoOf($serializer_13).ew = function () {
    var tmp0_cached = Companion_getInstance_19().n2g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1].s2(), tmp0_cached[2].s2()];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_16() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function ParticipantStatus_init_$Init$(seen0, participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_16().o2g_1);
    }
    $this.participantId = participantId;
    $this.assignedParticipantRoles = assignedParticipantRoles;
    $this.assignedPrimaryDeviceRoleNames = assignedPrimaryDeviceRoleNames;
    return $this;
  }
  function ParticipantStatus_init_$Create$(seen0, participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames, serializationConstructorMarker) {
    return ParticipantStatus_init_$Init$(seen0, participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames, serializationConstructorMarker, objectCreate(protoOf(ParticipantStatus)));
  }
  function ParticipantStatus(participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames) {
    Companion_getInstance_19();
    this.participantId = participantId;
    this.assignedParticipantRoles = assignedParticipantRoles;
    this.assignedPrimaryDeviceRoleNames = assignedPrimaryDeviceRoleNames;
  }
  protoOf(ParticipantStatus).j2g = function () {
    return this.participantId;
  };
  protoOf(ParticipantStatus).q2g = function () {
    return this.assignedParticipantRoles;
  };
  protoOf(ParticipantStatus).r2g = function () {
    return this.assignedPrimaryDeviceRoleNames;
  };
  protoOf(ParticipantStatus).sd = function () {
    return this.participantId;
  };
  protoOf(ParticipantStatus).td = function () {
    return this.assignedParticipantRoles;
  };
  protoOf(ParticipantStatus).m1j = function () {
    return this.assignedPrimaryDeviceRoleNames;
  };
  protoOf(ParticipantStatus).s2g = function (participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames) {
    return new ParticipantStatus(participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames);
  };
  protoOf(ParticipantStatus).copy = function (participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames, $super) {
    participantId = participantId === VOID ? this.participantId : participantId;
    assignedParticipantRoles = assignedParticipantRoles === VOID ? this.assignedParticipantRoles : assignedParticipantRoles;
    assignedPrimaryDeviceRoleNames = assignedPrimaryDeviceRoleNames === VOID ? this.assignedPrimaryDeviceRoleNames : assignedPrimaryDeviceRoleNames;
    return $super === VOID ? this.s2g(participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames) : $super.s2g.call(this, participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames);
  };
  protoOf(ParticipantStatus).toString = function () {
    return 'ParticipantStatus(participantId=' + this.participantId.toString() + ', assignedParticipantRoles=' + toString(this.assignedParticipantRoles) + ', assignedPrimaryDeviceRoleNames=' + toString(this.assignedPrimaryDeviceRoleNames) + ')';
  };
  protoOf(ParticipantStatus).hashCode = function () {
    var result = this.participantId.hashCode();
    result = imul(result, 31) + hashCode(this.assignedParticipantRoles) | 0;
    result = imul(result, 31) + hashCode(this.assignedPrimaryDeviceRoleNames) | 0;
    return result;
  };
  protoOf(ParticipantStatus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParticipantStatus))
      return false;
    if (!this.participantId.equals(other.participantId))
      return false;
    if (!equals(this.assignedParticipantRoles, other.assignedParticipantRoles))
      return false;
    if (!equals(this.assignedPrimaryDeviceRoleNames, other.assignedPrimaryDeviceRoleNames))
      return false;
    return true;
  };
  function Participation$Companion$$childSerializers$_anonymous__dmdgkp() {
    return Companion_getInstance_0().i18();
  }
  function Companion_18() {
    Companion_instance_22 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t2g_1 = [null, lazy(tmp_0, Participation$Companion$$childSerializers$_anonymous__dmdgkp), null];
  }
  var Companion_instance_22;
  function Companion_getInstance_20() {
    if (Companion_instance_22 == null)
      new Companion_18();
    return Companion_instance_22;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.Participation', this, 3);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('assignedRoles', false);
    tmp0_serialDesc.pv('participantId', false);
    this.u2g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).v2g = function (encoder, value) {
    var tmp0_desc = this.u2g_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().t2g_1;
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.assignedRoles);
    tmp1_output.op(tmp0_desc, 2, UUIDSerializer_getInstance(), value.participantId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_14).nk = function (encoder, value) {
    return this.v2g(encoder, value instanceof Participation ? value : THROW_CCE());
  };
  protoOf($serializer_14).ok = function (decoder) {
    var tmp0_desc = this.u2g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_20().t2g_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, tmp8_cached[1].s2(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, tmp8_cached[1].s2(), tmp5_local1);
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
    return Participation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_14).mk = function () {
    return this.u2g_1;
  };
  protoOf($serializer_14).ew = function () {
    var tmp0_cached = Companion_getInstance_20().t2g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1].s2(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_17() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function Participation_init_$Init$(seen0, studyDeploymentId, assignedRoles, participantId, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_17().u2g_1);
    }
    $this.studyDeploymentId = studyDeploymentId;
    $this.assignedRoles = assignedRoles;
    $this.participantId = participantId;
    return $this;
  }
  function Participation_init_$Create$(seen0, studyDeploymentId, assignedRoles, participantId, serializationConstructorMarker) {
    return Participation_init_$Init$(seen0, studyDeploymentId, assignedRoles, participantId, serializationConstructorMarker, objectCreate(protoOf(Participation)));
  }
  function Participation(studyDeploymentId, assignedRoles, participantId) {
    Companion_getInstance_20();
    assignedRoles = assignedRoles === VOID ? All_getInstance() : assignedRoles;
    participantId = participantId === VOID ? Companion_instance_2.randomUUID() : participantId;
    this.studyDeploymentId = studyDeploymentId;
    this.assignedRoles = assignedRoles;
    this.participantId = participantId;
  }
  protoOf(Participation).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(Participation).k2g = function () {
    return this.assignedRoles;
  };
  protoOf(Participation).j2g = function () {
    return this.participantId;
  };
  protoOf(Participation).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(Participation).td = function () {
    return this.assignedRoles;
  };
  protoOf(Participation).m1j = function () {
    return this.participantId;
  };
  protoOf(Participation).w2g = function (studyDeploymentId, assignedRoles, participantId) {
    return new Participation(studyDeploymentId, assignedRoles, participantId);
  };
  protoOf(Participation).copy = function (studyDeploymentId, assignedRoles, participantId, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    assignedRoles = assignedRoles === VOID ? this.assignedRoles : assignedRoles;
    participantId = participantId === VOID ? this.participantId : participantId;
    return $super === VOID ? this.w2g(studyDeploymentId, assignedRoles, participantId) : $super.w2g.call(this, studyDeploymentId, assignedRoles, participantId);
  };
  protoOf(Participation).toString = function () {
    return 'Participation(studyDeploymentId=' + this.studyDeploymentId.toString() + ', assignedRoles=' + toString(this.assignedRoles) + ', participantId=' + this.participantId.toString() + ')';
  };
  protoOf(Participation).hashCode = function () {
    var result = this.studyDeploymentId.hashCode();
    result = imul(result, 31) + hashCode(this.assignedRoles) | 0;
    result = imul(result, 31) + this.participantId.hashCode() | 0;
    return result;
  };
  protoOf(Participation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Participation))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    if (!equals(this.assignedRoles, other.assignedRoles))
      return false;
    if (!this.participantId.equals(other.participantId))
      return false;
    return true;
  };
  function StudyInvitation$Companion$$childSerializers$_anonymous__tv3xso() {
    return Companion_instance_0.i18();
  }
  function Companion_19() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x2g_1 = [null, null, lazy(tmp_0, StudyInvitation$Companion$$childSerializers$_anonymous__tv3xso)];
  }
  var Companion_instance_23;
  function Companion_getInstance_21() {
    if (Companion_instance_23 == null)
      new Companion_19();
    return Companion_instance_23;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.StudyInvitation', this, 3);
    tmp0_serialDesc.pv('name', false);
    tmp0_serialDesc.pv('description', true);
    tmp0_serialDesc.pv('applicationData', true);
    this.y2g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).z2g = function (encoder, value) {
    var tmp0_desc = this.y2g_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().x2g_1;
    tmp1_output.mp(tmp0_desc, 0, value.name);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.description == null)) {
      tmp1_output.qp(tmp0_desc, 1, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.applicationData == null)) {
      tmp1_output.qp(tmp0_desc, 2, tmp2_cached[2].s2(), value.applicationData);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_15).nk = function (encoder, value) {
    return this.z2g(encoder, value instanceof StudyInvitation ? value : THROW_CCE());
  };
  protoOf($serializer_15).ok = function (decoder) {
    var tmp0_desc = this.y2g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_21().x2g_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.lo(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.lo(tmp0_desc, 2, tmp8_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.lo(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.lo(tmp0_desc, 2, tmp8_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return StudyInvitation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_15).mk = function () {
    return this.y2g_1;
  };
  protoOf($serializer_15).ew = function () {
    var tmp0_cached = Companion_getInstance_21().x2g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2].s2())];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_18() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function StudyInvitation_init_$Init$(seen0, name, description, applicationData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_18().y2g_1);
    }
    $this.name = name;
    if (0 === (seen0 & 2))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 4))
      $this.applicationData = null;
    else
      $this.applicationData = applicationData;
    return $this;
  }
  function StudyInvitation_init_$Create$(seen0, name, description, applicationData, serializationConstructorMarker) {
    return StudyInvitation_init_$Init$(seen0, name, description, applicationData, serializationConstructorMarker, objectCreate(protoOf(StudyInvitation)));
  }
  function StudyInvitation(name, description, applicationData) {
    Companion_getInstance_21();
    description = description === VOID ? null : description;
    applicationData = applicationData === VOID ? null : applicationData;
    this.name = name;
    this.description = description;
    this.applicationData = applicationData;
  }
  protoOf(StudyInvitation).k = function () {
    return this.name;
  };
  protoOf(StudyInvitation).e1y = function () {
    return this.description;
  };
  protoOf(StudyInvitation).n28 = function () {
    return this.applicationData;
  };
  protoOf(StudyInvitation).sd = function () {
    return this.name;
  };
  protoOf(StudyInvitation).td = function () {
    return this.description;
  };
  protoOf(StudyInvitation).m1j = function () {
    return this.applicationData;
  };
  protoOf(StudyInvitation).a2h = function (name, description, applicationData) {
    return new StudyInvitation(name, description, applicationData);
  };
  protoOf(StudyInvitation).copy = function (name, description, applicationData, $super) {
    name = name === VOID ? this.name : name;
    description = description === VOID ? this.description : description;
    applicationData = applicationData === VOID ? this.applicationData : applicationData;
    return $super === VOID ? this.a2h(name, description, applicationData) : $super.a2h.call(this, name, description, applicationData);
  };
  protoOf(StudyInvitation).toString = function () {
    return 'StudyInvitation(name=' + this.name + ', description=' + this.description + ', applicationData=' + toString_0(this.applicationData) + ')';
  };
  protoOf(StudyInvitation).hashCode = function () {
    var result = getStringHashCode(this.name);
    result = imul(result, 31) + (this.description == null ? 0 : getStringHashCode(this.description)) | 0;
    result = imul(result, 31) + (this.applicationData == null ? 0 : this.applicationData.hashCode()) | 0;
    return result;
  };
  protoOf(StudyInvitation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StudyInvitation))
      return false;
    if (!(this.name === other.name))
      return false;
    if (!(this.description == other.description))
      return false;
    if (!equals(this.applicationData, other.applicationData))
      return false;
    return true;
  };
  function getAssignedDeviceRoleNames(_this__u8e3s4, assignedParticipantRoles) {
    if (assignedParticipantRoles instanceof Roles) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.participantRoles;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.r();
      while (_iterator__ex2g4s.s()) {
        var item = _iterator__ex2g4s.t();
        var tmp$ret$2 = item.role;
        destination.y(tmp$ret$2);
      }
      // Inline function 'kotlin.require' call
      if (!destination.e2(assignedParticipantRoles.roleNames)) {
        var message = "A participant role which isn't part of this protocol is specified.";
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    // Inline function 'kotlin.collections.map' call
    var this_1 = _this__u8e3s4.primaryDevices;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.r();
    while (_iterator__ex2g4s_0.s()) {
      var item_0 = _iterator__ex2g4s_0.t();
      var tmp$ret$7 = item_0.roleName;
      destination_0.y(tmp$ret$7);
    }
    var primaryDeviceRoleNames = destination_0;
    var tmp;
    if (assignedParticipantRoles instanceof All) {
      tmp = primaryDeviceRoleNames;
    } else {
      if (assignedParticipantRoles instanceof Roles) {
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var destination_1 = ArrayList_init_$Create$();
        var _iterator__ex2g4s_1 = primaryDeviceRoleNames.r();
        while (_iterator__ex2g4s_1.s()) {
          var element = _iterator__ex2g4s_1.t();
          var tmp$ret$10;
          $l$block: {
            var tmp0_elvis_lhs = _this__u8e3s4.assignedDevices.q2(element);
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$10 = true;
              break $l$block;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }
            var rolesForDevice = tmp_0;
            var tmp0 = assignedParticipantRoles.roleNames;
            var tmp$ret$11;
            $l$block_1: {
              // Inline function 'kotlin.collections.any' call
              var tmp_1;
              if (isInterface(tmp0, Collection)) {
                tmp_1 = tmp0.p();
              } else {
                tmp_1 = false;
              }
              if (tmp_1) {
                tmp$ret$11 = false;
                break $l$block_1;
              }
              var _iterator__ex2g4s_2 = tmp0.r();
              while (_iterator__ex2g4s_2.s()) {
                var element_0 = _iterator__ex2g4s_2.t();
                if (rolesForDevice.o1(element_0)) {
                  tmp$ret$11 = true;
                  break $l$block_1;
                }
              }
              tmp$ret$11 = false;
            }
            tmp$ret$10 = tmp$ret$11;
          }
          if (tmp$ret$10) {
            destination_1.y(element);
          }
        }
        tmp = destination_1;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return toSet(tmp);
  }
  function DeploymentServiceRequest$Companion$serializer$ref(p0) {
    return constructCallableReference(function (p0_0) {
      return p0.j2a(p0_0);
    }, 1, 0, 16, 'serializer', [p0]);
  }
  function DeploymentServiceRequest$CreateStudyDeployment$Companion$$childSerializers$_anonymous__f1udpf() {
    return new ArrayListSerializer($serializer_getInstance_15());
  }
  function DeploymentServiceRequest$CreateStudyDeployment$Companion$$childSerializers$_anonymous__f1udpf_0() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), Companion_getInstance().i18());
  }
  function Companion_20() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DeploymentServiceRequest$CreateStudyDeployment$Companion$$childSerializers$_anonymous__f1udpf);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b2h_1 = [null, null, null, tmp_1, lazy(tmp_2, DeploymentServiceRequest$CreateStudyDeployment$Companion$$childSerializers$_anonymous__f1udpf_0)];
  }
  var Companion_instance_24;
  function Companion_getInstance_22() {
    if (Companion_instance_24 == null)
      new Companion_20();
    return Companion_instance_24;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.CreateStudyDeployment', this, 5);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('id', false);
    tmp0_serialDesc.pv('protocol', false);
    tmp0_serialDesc.pv('invitations', false);
    tmp0_serialDesc.pv('connectedDevicePreregistrations', true);
    this.c2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).d2h = function (encoder, value) {
    var tmp0_desc = this.c2h_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().b2h_1;
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.id);
    tmp1_output.op(tmp0_desc, 2, $serializer_getInstance_1(), value.protocol);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.invitations);
    if (tmp1_output.up(tmp0_desc, 4) ? true : !equals(value.connectedDevicePreregistrations, emptyMap())) {
      tmp1_output.op(tmp0_desc, 4, tmp2_cached[4].s2(), value.connectedDevicePreregistrations);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_16).nk = function (encoder, value) {
    return this.d2h(encoder, value instanceof CreateStudyDeployment ? value : THROW_CCE());
  };
  protoOf($serializer_16).ok = function (decoder) {
    var tmp0_desc = this.c2h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xn(tmp0_desc);
    var tmp10_cached = Companion_getInstance_22().b2h_1;
    if (tmp9_input.no()) {
      tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jo(tmp0_desc, 2, $serializer_getInstance_1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.jo(tmp0_desc, 4, tmp10_cached[4].s2(), tmp8_local4);
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
            tmp6_local2 = tmp9_input.jo(tmp0_desc, 2, $serializer_getInstance_1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.jo(tmp0_desc, 4, tmp10_cached[4].s2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return CreateStudyDeployment_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_16).mk = function () {
    return this.c2h_1;
  };
  protoOf($serializer_16).ew = function () {
    var tmp0_cached = Companion_getInstance_22().b2h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), $serializer_getInstance_1(), tmp0_cached[3].s2(), tmp0_cached[4].s2()];
  };
  var $serializer_instance_16;
  function $serializer_getInstance_19() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function CreateStudyDeployment_init_$Init$(seen0, apiVersion, id, protocol, invitations, connectedDevicePreregistrations, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_19().c2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.id = id;
    $this.protocol = protocol;
    $this.invitations = invitations;
    if (0 === (seen0 & 16))
      $this.connectedDevicePreregistrations = emptyMap();
    else
      $this.connectedDevicePreregistrations = connectedDevicePreregistrations;
    return $this;
  }
  function CreateStudyDeployment_init_$Create$(seen0, apiVersion, id, protocol, invitations, connectedDevicePreregistrations, serializationConstructorMarker) {
    return CreateStudyDeployment_init_$Init$(seen0, apiVersion, id, protocol, invitations, connectedDevicePreregistrations, serializationConstructorMarker, objectCreate(protoOf(CreateStudyDeployment)));
  }
  function DeploymentServiceRequest$RemoveStudyDeployments$Companion$$childSerializers$_anonymous__q8kc2s() {
    return new LinkedHashSetSerializer(UUIDSerializer_getInstance());
  }
  function Companion_21() {
    Companion_instance_25 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f2h_1 = [null, lazy(tmp_0, DeploymentServiceRequest$RemoveStudyDeployments$Companion$$childSerializers$_anonymous__q8kc2s)];
  }
  var Companion_instance_25;
  function Companion_getInstance_23() {
    if (Companion_instance_25 == null)
      new Companion_21();
    return Companion_instance_25;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.RemoveStudyDeployments', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentIds', false);
    this.g2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).h2h = function (encoder, value) {
    var tmp0_desc = this.g2h_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().f2h_1;
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.studyDeploymentIds);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_17).nk = function (encoder, value) {
    return this.h2h(encoder, value instanceof RemoveStudyDeployments ? value : THROW_CCE());
  };
  protoOf($serializer_17).ok = function (decoder) {
    var tmp0_desc = this.g2h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_23().f2h_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
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
    return RemoveStudyDeployments_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_17).mk = function () {
    return this.g2h_1;
  };
  protoOf($serializer_17).ew = function () {
    var tmp0_cached = Companion_getInstance_23().f2h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), tmp0_cached[1].s2()];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_20() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function RemoveStudyDeployments_init_$Init$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_20().g2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentIds = studyDeploymentIds;
    return $this;
  }
  function RemoveStudyDeployments_init_$Create$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker) {
    return RemoveStudyDeployments_init_$Init$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker, objectCreate(protoOf(RemoveStudyDeployments)));
  }
  function Companion_22() {
  }
  var Companion_instance_26;
  function Companion_getInstance_24() {
    return Companion_instance_26;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.GetStudyDeploymentStatus', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    this.j2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).k2h = function (encoder, value) {
    var tmp0_desc = this.j2h_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_18).nk = function (encoder, value) {
    return this.k2h(encoder, value instanceof GetStudyDeploymentStatus ? value : THROW_CCE());
  };
  protoOf($serializer_18).ok = function (decoder) {
    var tmp0_desc = this.j2h_1;
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
    return GetStudyDeploymentStatus_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_18).mk = function () {
    return this.j2h_1;
  };
  protoOf($serializer_18).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_21() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function GetStudyDeploymentStatus_init_$Init$(seen0, apiVersion, studyDeploymentId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_21().j2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    return $this;
  }
  function GetStudyDeploymentStatus_init_$Create$(seen0, apiVersion, studyDeploymentId, serializationConstructorMarker) {
    return GetStudyDeploymentStatus_init_$Init$(seen0, apiVersion, studyDeploymentId, serializationConstructorMarker, objectCreate(protoOf(GetStudyDeploymentStatus)));
  }
  function DeploymentServiceRequest$GetStudyDeploymentStatusList$Companion$$childSerializers$_anonymous__11ymt9() {
    return new LinkedHashSetSerializer(UUIDSerializer_getInstance());
  }
  function Companion_23() {
    Companion_instance_27 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m2h_1 = [null, lazy(tmp_0, DeploymentServiceRequest$GetStudyDeploymentStatusList$Companion$$childSerializers$_anonymous__11ymt9)];
  }
  var Companion_instance_27;
  function Companion_getInstance_25() {
    if (Companion_instance_27 == null)
      new Companion_23();
    return Companion_instance_27;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.GetStudyDeploymentStatusList', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentIds', false);
    this.n2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).o2h = function (encoder, value) {
    var tmp0_desc = this.n2h_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().m2h_1;
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.studyDeploymentIds);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_19).nk = function (encoder, value) {
    return this.o2h(encoder, value instanceof GetStudyDeploymentStatusList ? value : THROW_CCE());
  };
  protoOf($serializer_19).ok = function (decoder) {
    var tmp0_desc = this.n2h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_25().m2h_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
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
    return GetStudyDeploymentStatusList_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_19).mk = function () {
    return this.n2h_1;
  };
  protoOf($serializer_19).ew = function () {
    var tmp0_cached = Companion_getInstance_25().m2h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), tmp0_cached[1].s2()];
  };
  var $serializer_instance_19;
  function $serializer_getInstance_22() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function GetStudyDeploymentStatusList_init_$Init$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_22().n2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentIds = studyDeploymentIds;
    return $this;
  }
  function GetStudyDeploymentStatusList_init_$Create$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker) {
    return GetStudyDeploymentStatusList_init_$Init$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker, objectCreate(protoOf(GetStudyDeploymentStatusList)));
  }
  function DeploymentServiceRequest$RegisterDevice$Companion$$childSerializers$_anonymous__6d6g7o() {
    return Companion_getInstance().i18();
  }
  function Companion_24() {
    Companion_instance_28 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q2h_1 = [null, null, null, lazy(tmp_0, DeploymentServiceRequest$RegisterDevice$Companion$$childSerializers$_anonymous__6d6g7o)];
  }
  var Companion_instance_28;
  function Companion_getInstance_26() {
    if (Companion_instance_28 == null)
      new Companion_24();
    return Companion_instance_28;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.RegisterDevice', this, 4);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('deviceRoleName', false);
    tmp0_serialDesc.pv('registration', false);
    this.r2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).s2h = function (encoder, value) {
    var tmp0_desc = this.r2h_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().q2h_1;
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.mp(tmp0_desc, 2, value.deviceRoleName);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.registration);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_20).nk = function (encoder, value) {
    return this.s2h(encoder, value instanceof RegisterDevice ? value : THROW_CCE());
  };
  protoOf($serializer_20).ok = function (decoder) {
    var tmp0_desc = this.r2h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_26().q2h_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ho(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.jo(tmp0_desc, 3, tmp9_cached[3].s2(), tmp7_local3);
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
            tmp7_local3 = tmp8_input.jo(tmp0_desc, 3, tmp9_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return RegisterDevice_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_20).mk = function () {
    return this.r2h_1;
  };
  protoOf($serializer_20).ew = function () {
    var tmp0_cached = Companion_getInstance_26().q2h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[3].s2()];
  };
  var $serializer_instance_20;
  function $serializer_getInstance_23() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function RegisterDevice_init_$Init$(seen0, apiVersion, studyDeploymentId, deviceRoleName, registration, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_23().r2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    $this.deviceRoleName = deviceRoleName;
    $this.registration = registration;
    return $this;
  }
  function RegisterDevice_init_$Create$(seen0, apiVersion, studyDeploymentId, deviceRoleName, registration, serializationConstructorMarker) {
    return RegisterDevice_init_$Init$(seen0, apiVersion, studyDeploymentId, deviceRoleName, registration, serializationConstructorMarker, objectCreate(protoOf(RegisterDevice)));
  }
  function Companion_25() {
  }
  var Companion_instance_29;
  function Companion_getInstance_27() {
    return Companion_instance_29;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.UnregisterDevice', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('deviceRoleName', false);
    this.u2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).v2h = function (encoder, value) {
    var tmp0_desc = this.u2h_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.mp(tmp0_desc, 2, value.deviceRoleName);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_21).nk = function (encoder, value) {
    return this.v2h(encoder, value instanceof UnregisterDevice ? value : THROW_CCE());
  };
  protoOf($serializer_21).ok = function (decoder) {
    var tmp0_desc = this.u2h_1;
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
      tmp6_local2 = tmp7_input.ho(tmp0_desc, 2);
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
            tmp6_local2 = tmp7_input.ho(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return UnregisterDevice_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_21).mk = function () {
    return this.u2h_1;
  };
  protoOf($serializer_21).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_24() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function UnregisterDevice_init_$Init$(seen0, apiVersion, studyDeploymentId, deviceRoleName, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_24().u2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    $this.deviceRoleName = deviceRoleName;
    return $this;
  }
  function UnregisterDevice_init_$Create$(seen0, apiVersion, studyDeploymentId, deviceRoleName, serializationConstructorMarker) {
    return UnregisterDevice_init_$Init$(seen0, apiVersion, studyDeploymentId, deviceRoleName, serializationConstructorMarker, objectCreate(protoOf(UnregisterDevice)));
  }
  function Companion_26() {
  }
  var Companion_instance_30;
  function Companion_getInstance_28() {
    return Companion_instance_30;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.GetDeviceDeploymentFor', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('primaryDeviceRoleName', false);
    this.x2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).y2h = function (encoder, value) {
    var tmp0_desc = this.x2h_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.mp(tmp0_desc, 2, value.primaryDeviceRoleName);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_22).nk = function (encoder, value) {
    return this.y2h(encoder, value instanceof GetDeviceDeploymentFor ? value : THROW_CCE());
  };
  protoOf($serializer_22).ok = function (decoder) {
    var tmp0_desc = this.x2h_1;
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
      tmp6_local2 = tmp7_input.ho(tmp0_desc, 2);
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
            tmp6_local2 = tmp7_input.ho(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return GetDeviceDeploymentFor_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_22).mk = function () {
    return this.x2h_1;
  };
  protoOf($serializer_22).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_22;
  function $serializer_getInstance_25() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function GetDeviceDeploymentFor_init_$Init$(seen0, apiVersion, studyDeploymentId, primaryDeviceRoleName, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_25().x2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    $this.primaryDeviceRoleName = primaryDeviceRoleName;
    return $this;
  }
  function GetDeviceDeploymentFor_init_$Create$(seen0, apiVersion, studyDeploymentId, primaryDeviceRoleName, serializationConstructorMarker) {
    return GetDeviceDeploymentFor_init_$Init$(seen0, apiVersion, studyDeploymentId, primaryDeviceRoleName, serializationConstructorMarker, objectCreate(protoOf(GetDeviceDeploymentFor)));
  }
  function Companion_27() {
  }
  var Companion_instance_31;
  function Companion_getInstance_29() {
    return Companion_instance_31;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.DeviceDeployed', this, 4);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('primaryDeviceRoleName', false);
    tmp0_serialDesc.pv('deviceDeploymentLastUpdatedOn', false);
    this.a2i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).b2i = function (encoder, value) {
    var tmp0_desc = this.a2i_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.mp(tmp0_desc, 2, value.primaryDeviceRoleName);
    tmp1_output.op(tmp0_desc, 3, InstantSerializer_getInstance(), value.deviceDeploymentLastUpdatedOn);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_23).nk = function (encoder, value) {
    return this.b2i(encoder, value instanceof DeviceDeployed ? value : THROW_CCE());
  };
  protoOf($serializer_23).ok = function (decoder) {
    var tmp0_desc = this.a2i_1;
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
      tmp7_local3 = tmp8_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
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
            tmp7_local3 = tmp8_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return DeviceDeployed_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_23).mk = function () {
    return this.a2i_1;
  };
  protoOf($serializer_23).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), InstantSerializer_getInstance()];
  };
  var $serializer_instance_23;
  function $serializer_getInstance_26() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function DeviceDeployed_init_$Init$(seen0, apiVersion, studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_26().a2i_1);
    }
    DeploymentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    $this.primaryDeviceRoleName = primaryDeviceRoleName;
    $this.deviceDeploymentLastUpdatedOn = deviceDeploymentLastUpdatedOn;
    return $this;
  }
  function DeviceDeployed_init_$Create$(seen0, apiVersion, studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn, serializationConstructorMarker) {
    return DeviceDeployed_init_$Init$(seen0, apiVersion, studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn, serializationConstructorMarker, objectCreate(protoOf(DeviceDeployed)));
  }
  function Companion_28() {
  }
  var Companion_instance_32;
  function Companion_getInstance_30() {
    return Companion_instance_32;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.Stop', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    this.d2i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).e2i = function (encoder, value) {
    var tmp0_desc = this.d2i_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_24).nk = function (encoder, value) {
    return this.e2i(encoder, value instanceof Stop ? value : THROW_CCE());
  };
  protoOf($serializer_24).ok = function (decoder) {
    var tmp0_desc = this.d2i_1;
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
    return Stop_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_24).mk = function () {
    return this.d2i_1;
  };
  protoOf($serializer_24).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_24;
  function $serializer_getInstance_27() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function Stop_init_$Init$(seen0, apiVersion, studyDeploymentId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_27().d2i_1);
    }
    DeploymentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    return $this;
  }
  function Stop_init_$Create$(seen0, apiVersion, studyDeploymentId, serializationConstructorMarker) {
    return Stop_init_$Init$(seen0, apiVersion, studyDeploymentId, serializationConstructorMarker, objectCreate(protoOf(Stop)));
  }
  function Serializer() {
    Serializer_instance = this;
    var tmp = this;
    tmp.g2i_1 = ignoreTypeParameters(DeploymentServiceRequest$Companion$serializer$ref(Companion_instance_33));
  }
  protoOf(Serializer).mk = function () {
    return this.g2i_1.mk();
  };
  protoOf(Serializer).h2i = function (encoder, value) {
    this.g2i_1.nk(encoder, value);
  };
  protoOf(Serializer).nk = function (encoder, value) {
    return this.h2i(encoder, value instanceof DeploymentServiceRequest ? value : THROW_CCE());
  };
  protoOf(Serializer).ok = function (decoder) {
    return this.g2i_1.ok(decoder);
  };
  var Serializer_instance;
  function Serializer_getInstance() {
    if (Serializer_instance == null)
      new Serializer();
    return Serializer_instance;
  }
  function CreateStudyDeployment(id, protocol, invitations, connectedDevicePreregistrations) {
    Companion_getInstance_22();
    connectedDevicePreregistrations = connectedDevicePreregistrations === VOID ? emptyMap() : connectedDevicePreregistrations;
    DeploymentServiceRequest.call(this);
    this.id = id;
    this.protocol = protocol;
    this.invitations = invitations;
    this.connectedDevicePreregistrations = connectedDevicePreregistrations;
  }
  protoOf(CreateStudyDeployment).m22 = function () {
    return this.id;
  };
  protoOf(CreateStudyDeployment).n2b = function () {
    return this.protocol;
  };
  protoOf(CreateStudyDeployment).i2i = function () {
    return this.invitations;
  };
  protoOf(CreateStudyDeployment).j2i = function () {
    return this.connectedDevicePreregistrations;
  };
  protoOf(CreateStudyDeployment).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(CreateStudyDeployment).sd = function () {
    return this.id;
  };
  protoOf(CreateStudyDeployment).td = function () {
    return this.protocol;
  };
  protoOf(CreateStudyDeployment).m1j = function () {
    return this.invitations;
  };
  protoOf(CreateStudyDeployment).l1k = function () {
    return this.connectedDevicePreregistrations;
  };
  protoOf(CreateStudyDeployment).k2i = function (id, protocol, invitations, connectedDevicePreregistrations) {
    return new CreateStudyDeployment(id, protocol, invitations, connectedDevicePreregistrations);
  };
  protoOf(CreateStudyDeployment).copy = function (id, protocol, invitations, connectedDevicePreregistrations, $super) {
    id = id === VOID ? this.id : id;
    protocol = protocol === VOID ? this.protocol : protocol;
    invitations = invitations === VOID ? this.invitations : invitations;
    connectedDevicePreregistrations = connectedDevicePreregistrations === VOID ? this.connectedDevicePreregistrations : connectedDevicePreregistrations;
    return $super === VOID ? this.k2i(id, protocol, invitations, connectedDevicePreregistrations) : $super.k2i.call(this, id, protocol, invitations, connectedDevicePreregistrations);
  };
  protoOf(CreateStudyDeployment).toString = function () {
    return 'CreateStudyDeployment(id=' + this.id.toString() + ', protocol=' + this.protocol.toString() + ', invitations=' + toString(this.invitations) + ', connectedDevicePreregistrations=' + toString(this.connectedDevicePreregistrations) + ')';
  };
  protoOf(CreateStudyDeployment).hashCode = function () {
    var result = this.id.hashCode();
    result = imul(result, 31) + this.protocol.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.invitations) | 0;
    result = imul(result, 31) + hashCode(this.connectedDevicePreregistrations) | 0;
    return result;
  };
  protoOf(CreateStudyDeployment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateStudyDeployment))
      return false;
    if (!this.id.equals(other.id))
      return false;
    if (!this.protocol.equals(other.protocol))
      return false;
    if (!equals(this.invitations, other.invitations))
      return false;
    if (!equals(this.connectedDevicePreregistrations, other.connectedDevicePreregistrations))
      return false;
    return true;
  };
  function RemoveStudyDeployments(studyDeploymentIds) {
    Companion_getInstance_23();
    DeploymentServiceRequest.call(this);
    this.studyDeploymentIds = studyDeploymentIds;
  }
  protoOf(RemoveStudyDeployments).m2i = function () {
    return this.studyDeploymentIds;
  };
  protoOf(RemoveStudyDeployments).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UUID), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(RemoveStudyDeployments).sd = function () {
    return this.studyDeploymentIds;
  };
  protoOf(RemoveStudyDeployments).n2i = function (studyDeploymentIds) {
    return new RemoveStudyDeployments(studyDeploymentIds);
  };
  protoOf(RemoveStudyDeployments).copy = function (studyDeploymentIds, $super) {
    studyDeploymentIds = studyDeploymentIds === VOID ? this.studyDeploymentIds : studyDeploymentIds;
    return $super === VOID ? this.n2i(studyDeploymentIds) : $super.n2i.call(this, studyDeploymentIds);
  };
  protoOf(RemoveStudyDeployments).toString = function () {
    return 'RemoveStudyDeployments(studyDeploymentIds=' + toString(this.studyDeploymentIds) + ')';
  };
  protoOf(RemoveStudyDeployments).hashCode = function () {
    return hashCode(this.studyDeploymentIds);
  };
  protoOf(RemoveStudyDeployments).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RemoveStudyDeployments))
      return false;
    if (!equals(this.studyDeploymentIds, other.studyDeploymentIds))
      return false;
    return true;
  };
  function GetStudyDeploymentStatus(studyDeploymentId) {
    DeploymentServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
  }
  protoOf(GetStudyDeploymentStatus).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetStudyDeploymentStatus).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetStudyDeploymentStatus).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetStudyDeploymentStatus).u2b = function (studyDeploymentId) {
    return new GetStudyDeploymentStatus(studyDeploymentId);
  };
  protoOf(GetStudyDeploymentStatus).copy = function (studyDeploymentId, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    return $super === VOID ? this.u2b(studyDeploymentId) : $super.u2b.call(this, studyDeploymentId);
  };
  protoOf(GetStudyDeploymentStatus).toString = function () {
    return 'GetStudyDeploymentStatus(studyDeploymentId=' + this.studyDeploymentId.toString() + ')';
  };
  protoOf(GetStudyDeploymentStatus).hashCode = function () {
    return this.studyDeploymentId.hashCode();
  };
  protoOf(GetStudyDeploymentStatus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetStudyDeploymentStatus))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    return true;
  };
  function GetStudyDeploymentStatusList(studyDeploymentIds) {
    Companion_getInstance_25();
    DeploymentServiceRequest.call(this);
    this.studyDeploymentIds = studyDeploymentIds;
  }
  protoOf(GetStudyDeploymentStatusList).m2i = function () {
    return this.studyDeploymentIds;
  };
  protoOf(GetStudyDeploymentStatusList).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetStudyDeploymentStatusList).sd = function () {
    return this.studyDeploymentIds;
  };
  protoOf(GetStudyDeploymentStatusList).n2i = function (studyDeploymentIds) {
    return new GetStudyDeploymentStatusList(studyDeploymentIds);
  };
  protoOf(GetStudyDeploymentStatusList).copy = function (studyDeploymentIds, $super) {
    studyDeploymentIds = studyDeploymentIds === VOID ? this.studyDeploymentIds : studyDeploymentIds;
    return $super === VOID ? this.n2i(studyDeploymentIds) : $super.n2i.call(this, studyDeploymentIds);
  };
  protoOf(GetStudyDeploymentStatusList).toString = function () {
    return 'GetStudyDeploymentStatusList(studyDeploymentIds=' + toString(this.studyDeploymentIds) + ')';
  };
  protoOf(GetStudyDeploymentStatusList).hashCode = function () {
    return hashCode(this.studyDeploymentIds);
  };
  protoOf(GetStudyDeploymentStatusList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetStudyDeploymentStatusList))
      return false;
    if (!equals(this.studyDeploymentIds, other.studyDeploymentIds))
      return false;
    return true;
  };
  function RegisterDevice(studyDeploymentId, deviceRoleName, registration) {
    Companion_getInstance_26();
    DeploymentServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
    this.deviceRoleName = deviceRoleName;
    this.registration = registration;
  }
  protoOf(RegisterDevice).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(RegisterDevice).o2i = function () {
    return this.deviceRoleName;
  };
  protoOf(RegisterDevice).o2d = function () {
    return this.registration;
  };
  protoOf(RegisterDevice).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(RegisterDevice).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(RegisterDevice).td = function () {
    return this.deviceRoleName;
  };
  protoOf(RegisterDevice).m1j = function () {
    return this.registration;
  };
  protoOf(RegisterDevice).p2i = function (studyDeploymentId, deviceRoleName, registration) {
    return new RegisterDevice(studyDeploymentId, deviceRoleName, registration);
  };
  protoOf(RegisterDevice).copy = function (studyDeploymentId, deviceRoleName, registration, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    deviceRoleName = deviceRoleName === VOID ? this.deviceRoleName : deviceRoleName;
    registration = registration === VOID ? this.registration : registration;
    return $super === VOID ? this.p2i(studyDeploymentId, deviceRoleName, registration) : $super.p2i.call(this, studyDeploymentId, deviceRoleName, registration);
  };
  protoOf(RegisterDevice).toString = function () {
    return 'RegisterDevice(studyDeploymentId=' + this.studyDeploymentId.toString() + ', deviceRoleName=' + this.deviceRoleName + ', registration=' + toString(this.registration) + ')';
  };
  protoOf(RegisterDevice).hashCode = function () {
    var result = this.studyDeploymentId.hashCode();
    result = imul(result, 31) + getStringHashCode(this.deviceRoleName) | 0;
    result = imul(result, 31) + hashCode(this.registration) | 0;
    return result;
  };
  protoOf(RegisterDevice).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RegisterDevice))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    if (!(this.deviceRoleName === other.deviceRoleName))
      return false;
    if (!equals(this.registration, other.registration))
      return false;
    return true;
  };
  function UnregisterDevice(studyDeploymentId, deviceRoleName) {
    DeploymentServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
    this.deviceRoleName = deviceRoleName;
  }
  protoOf(UnregisterDevice).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(UnregisterDevice).o2i = function () {
    return this.deviceRoleName;
  };
  protoOf(UnregisterDevice).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(UnregisterDevice).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(UnregisterDevice).td = function () {
    return this.deviceRoleName;
  };
  protoOf(UnregisterDevice).q2i = function (studyDeploymentId, deviceRoleName) {
    return new UnregisterDevice(studyDeploymentId, deviceRoleName);
  };
  protoOf(UnregisterDevice).copy = function (studyDeploymentId, deviceRoleName, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    deviceRoleName = deviceRoleName === VOID ? this.deviceRoleName : deviceRoleName;
    return $super === VOID ? this.q2i(studyDeploymentId, deviceRoleName) : $super.q2i.call(this, studyDeploymentId, deviceRoleName);
  };
  protoOf(UnregisterDevice).toString = function () {
    return 'UnregisterDevice(studyDeploymentId=' + this.studyDeploymentId.toString() + ', deviceRoleName=' + this.deviceRoleName + ')';
  };
  protoOf(UnregisterDevice).hashCode = function () {
    var result = this.studyDeploymentId.hashCode();
    result = imul(result, 31) + getStringHashCode(this.deviceRoleName) | 0;
    return result;
  };
  protoOf(UnregisterDevice).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UnregisterDevice))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    if (!(this.deviceRoleName === other.deviceRoleName))
      return false;
    return true;
  };
  function GetDeviceDeploymentFor(studyDeploymentId, primaryDeviceRoleName) {
    DeploymentServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
    this.primaryDeviceRoleName = primaryDeviceRoleName;
  }
  protoOf(GetDeviceDeploymentFor).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetDeviceDeploymentFor).r2i = function () {
    return this.primaryDeviceRoleName;
  };
  protoOf(GetDeviceDeploymentFor).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(PrimaryDeviceDeployment), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetDeviceDeploymentFor).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetDeviceDeploymentFor).td = function () {
    return this.primaryDeviceRoleName;
  };
  protoOf(GetDeviceDeploymentFor).q2i = function (studyDeploymentId, primaryDeviceRoleName) {
    return new GetDeviceDeploymentFor(studyDeploymentId, primaryDeviceRoleName);
  };
  protoOf(GetDeviceDeploymentFor).copy = function (studyDeploymentId, primaryDeviceRoleName, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    primaryDeviceRoleName = primaryDeviceRoleName === VOID ? this.primaryDeviceRoleName : primaryDeviceRoleName;
    return $super === VOID ? this.q2i(studyDeploymentId, primaryDeviceRoleName) : $super.q2i.call(this, studyDeploymentId, primaryDeviceRoleName);
  };
  protoOf(GetDeviceDeploymentFor).toString = function () {
    return 'GetDeviceDeploymentFor(studyDeploymentId=' + this.studyDeploymentId.toString() + ', primaryDeviceRoleName=' + this.primaryDeviceRoleName + ')';
  };
  protoOf(GetDeviceDeploymentFor).hashCode = function () {
    var result = this.studyDeploymentId.hashCode();
    result = imul(result, 31) + getStringHashCode(this.primaryDeviceRoleName) | 0;
    return result;
  };
  protoOf(GetDeviceDeploymentFor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetDeviceDeploymentFor))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    if (!(this.primaryDeviceRoleName === other.primaryDeviceRoleName))
      return false;
    return true;
  };
  function DeviceDeployed(studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn) {
    DeploymentServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
    this.primaryDeviceRoleName = primaryDeviceRoleName;
    this.deviceDeploymentLastUpdatedOn = deviceDeploymentLastUpdatedOn;
  }
  protoOf(DeviceDeployed).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(DeviceDeployed).r2i = function () {
    return this.primaryDeviceRoleName;
  };
  protoOf(DeviceDeployed).s2i = function () {
    return this.deviceDeploymentLastUpdatedOn;
  };
  protoOf(DeviceDeployed).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(DeviceDeployed).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(DeviceDeployed).td = function () {
    return this.primaryDeviceRoleName;
  };
  protoOf(DeviceDeployed).m1j = function () {
    return this.deviceDeploymentLastUpdatedOn;
  };
  protoOf(DeviceDeployed).t2i = function (studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn) {
    return new DeviceDeployed(studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn);
  };
  protoOf(DeviceDeployed).copy = function (studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    primaryDeviceRoleName = primaryDeviceRoleName === VOID ? this.primaryDeviceRoleName : primaryDeviceRoleName;
    deviceDeploymentLastUpdatedOn = deviceDeploymentLastUpdatedOn === VOID ? this.deviceDeploymentLastUpdatedOn : deviceDeploymentLastUpdatedOn;
    return $super === VOID ? this.t2i(studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn) : $super.t2i.call(this, studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn);
  };
  protoOf(DeviceDeployed).toString = function () {
    return 'DeviceDeployed(studyDeploymentId=' + this.studyDeploymentId.toString() + ', primaryDeviceRoleName=' + this.primaryDeviceRoleName + ', deviceDeploymentLastUpdatedOn=' + this.deviceDeploymentLastUpdatedOn.toString() + ')';
  };
  protoOf(DeviceDeployed).hashCode = function () {
    var result = this.studyDeploymentId.hashCode();
    result = imul(result, 31) + getStringHashCode(this.primaryDeviceRoleName) | 0;
    result = imul(result, 31) + this.deviceDeploymentLastUpdatedOn.hashCode() | 0;
    return result;
  };
  protoOf(DeviceDeployed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeviceDeployed))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    if (!(this.primaryDeviceRoleName === other.primaryDeviceRoleName))
      return false;
    if (!this.deviceDeploymentLastUpdatedOn.equals(other.deviceDeploymentLastUpdatedOn))
      return false;
    return true;
  };
  function Stop(studyDeploymentId) {
    DeploymentServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
  }
  protoOf(Stop).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(Stop).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(Stop).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(Stop).u2b = function (studyDeploymentId) {
    return new Stop(studyDeploymentId);
  };
  protoOf(Stop).copy = function (studyDeploymentId, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    return $super === VOID ? this.u2b(studyDeploymentId) : $super.u2b.call(this, studyDeploymentId);
  };
  protoOf(Stop).toString = function () {
    return 'Stop(studyDeploymentId=' + this.studyDeploymentId.toString() + ')';
  };
  protoOf(Stop).hashCode = function () {
    return this.studyDeploymentId.hashCode();
  };
  protoOf(Stop).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stop))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    return true;
  };
  function Companion_29() {
  }
  protoOf(Companion_29).j2a = function (typeSerial0) {
    var tmp = getKClass(DeploymentServiceRequest);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(CreateStudyDeployment), getKClass(DeviceDeployed), getKClass(GetDeviceDeploymentFor), getKClass(GetStudyDeploymentStatus), getKClass(GetStudyDeploymentStatusList), getKClass(RegisterDevice), getKClass(RemoveStudyDeployments), getKClass(Stop), getKClass(UnregisterDevice)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_19(), $serializer_getInstance_26(), $serializer_getInstance_25(), $serializer_getInstance_21(), $serializer_getInstance_22(), $serializer_getInstance_23(), $serializer_getInstance_20(), $serializer_getInstance_27(), $serializer_getInstance_24()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$6);
  };
  protoOf(Companion_29).pw = function (typeParamsSerializers) {
    return this.j2a(typeParamsSerializers[0]);
  };
  var Companion_instance_33;
  function Companion_getInstance_31() {
    return Companion_instance_33;
  }
  function DeploymentServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.l2i_1 = apiVersion;
    return $this;
  }
  function DeploymentServiceRequest() {
    ApplicationServiceRequest.call(this);
    this.l2i_1 = Companion_getInstance_1().v2b_1;
  }
  protoOf(DeploymentServiceRequest).g26 = function () {
    return this.l2i_1;
  };
  function ParticipationServiceRequest$Companion$serializer$ref(p0) {
    return constructCallableReference(function (p0_0) {
      return p0.j2a(p0_0);
    }, 1, 0, 17, 'serializer', [p0]);
  }
  function Companion_30() {
  }
  var Companion_instance_34;
  function Companion_getInstance_32() {
    return Companion_instance_34;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest.GetActiveParticipationInvitations', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('accountId', false);
    this.u2i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).v2i = function (encoder, value) {
    var tmp0_desc = this.u2i_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.accountId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_25).nk = function (encoder, value) {
    return this.v2i(encoder, value instanceof GetActiveParticipationInvitations ? value : THROW_CCE());
  };
  protoOf($serializer_25).ok = function (decoder) {
    var tmp0_desc = this.u2i_1;
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
    return GetActiveParticipationInvitations_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_25).mk = function () {
    return this.u2i_1;
  };
  protoOf($serializer_25).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_25;
  function $serializer_getInstance_28() {
    if ($serializer_instance_25 == null)
      new $serializer_25();
    return $serializer_instance_25;
  }
  function GetActiveParticipationInvitations_init_$Init$(seen0, apiVersion, accountId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_28().u2i_1);
    }
    ParticipationServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.accountId = accountId;
    return $this;
  }
  function GetActiveParticipationInvitations_init_$Create$(seen0, apiVersion, accountId, serializationConstructorMarker) {
    return GetActiveParticipationInvitations_init_$Init$(seen0, apiVersion, accountId, serializationConstructorMarker, objectCreate(protoOf(GetActiveParticipationInvitations)));
  }
  function Companion_31() {
  }
  var Companion_instance_35;
  function Companion_getInstance_33() {
    return Companion_instance_35;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest.GetParticipantData', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    this.x2i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).y2i = function (encoder, value) {
    var tmp0_desc = this.x2i_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_26).nk = function (encoder, value) {
    return this.y2i(encoder, value instanceof GetParticipantData ? value : THROW_CCE());
  };
  protoOf($serializer_26).ok = function (decoder) {
    var tmp0_desc = this.x2i_1;
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
    return GetParticipantData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_26).mk = function () {
    return this.x2i_1;
  };
  protoOf($serializer_26).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_26;
  function $serializer_getInstance_29() {
    if ($serializer_instance_26 == null)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function GetParticipantData_init_$Init$(seen0, apiVersion, studyDeploymentId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_29().x2i_1);
    }
    ParticipationServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    return $this;
  }
  function GetParticipantData_init_$Create$(seen0, apiVersion, studyDeploymentId, serializationConstructorMarker) {
    return GetParticipantData_init_$Init$(seen0, apiVersion, studyDeploymentId, serializationConstructorMarker, objectCreate(protoOf(GetParticipantData)));
  }
  function ParticipationServiceRequest$GetParticipantDataList$Companion$$childSerializers$_anonymous__x80jng() {
    return new LinkedHashSetSerializer(UUIDSerializer_getInstance());
  }
  function Companion_32() {
    Companion_instance_36 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a2j_1 = [null, lazy(tmp_0, ParticipationServiceRequest$GetParticipantDataList$Companion$$childSerializers$_anonymous__x80jng)];
  }
  var Companion_instance_36;
  function Companion_getInstance_34() {
    if (Companion_instance_36 == null)
      new Companion_32();
    return Companion_instance_36;
  }
  function $serializer_27() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest.GetParticipantDataList', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentIds', false);
    this.b2j_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).c2j = function (encoder, value) {
    var tmp0_desc = this.b2j_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_34().a2j_1;
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.studyDeploymentIds);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_27).nk = function (encoder, value) {
    return this.c2j(encoder, value instanceof GetParticipantDataList ? value : THROW_CCE());
  };
  protoOf($serializer_27).ok = function (decoder) {
    var tmp0_desc = this.b2j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_34().a2j_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
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
    return GetParticipantDataList_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_27).mk = function () {
    return this.b2j_1;
  };
  protoOf($serializer_27).ew = function () {
    var tmp0_cached = Companion_getInstance_34().a2j_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), tmp0_cached[1].s2()];
  };
  var $serializer_instance_27;
  function $serializer_getInstance_30() {
    if ($serializer_instance_27 == null)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function GetParticipantDataList_init_$Init$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_30().b2j_1);
    }
    ParticipationServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentIds = studyDeploymentIds;
    return $this;
  }
  function GetParticipantDataList_init_$Create$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker) {
    return GetParticipantDataList_init_$Init$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker, objectCreate(protoOf(GetParticipantDataList)));
  }
  function ParticipationServiceRequest$SetParticipantData$Companion$$childSerializers$_anonymous__axy6yu() {
    var tmp = NamespacedIdSerializer_getInstance();
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashMapSerializer(tmp, get_nullable(PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$0)));
  }
  function Companion_33() {
    Companion_instance_37 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e2j_1 = [null, null, lazy(tmp_0, ParticipationServiceRequest$SetParticipantData$Companion$$childSerializers$_anonymous__axy6yu), null];
  }
  var Companion_instance_37;
  function Companion_getInstance_35() {
    if (Companion_instance_37 == null)
      new Companion_33();
    return Companion_instance_37;
  }
  function $serializer_28() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest.SetParticipantData', this, 4);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('data', false);
    tmp0_serialDesc.pv('inputByParticipantRole', true);
    this.f2j_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).g2j = function (encoder, value) {
    var tmp0_desc = this.f2j_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_35().e2j_1;
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.data);
    if (tmp1_output.up(tmp0_desc, 3) ? true : !(value.inputByParticipantRole == null)) {
      tmp1_output.qp(tmp0_desc, 3, StringSerializer_getInstance(), value.inputByParticipantRole);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_28).nk = function (encoder, value) {
    return this.g2j(encoder, value instanceof SetParticipantData ? value : THROW_CCE());
  };
  protoOf($serializer_28).ok = function (decoder) {
    var tmp0_desc = this.f2j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_35().e2j_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jo(tmp0_desc, 2, tmp9_cached[2].s2(), tmp6_local2);
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
            tmp6_local2 = tmp8_input.jo(tmp0_desc, 2, tmp9_cached[2].s2(), tmp6_local2);
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
    return SetParticipantData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_28).mk = function () {
    return this.f2j_1;
  };
  protoOf($serializer_28).ew = function () {
    var tmp0_cached = Companion_getInstance_35().e2j_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2].s2(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_28;
  function $serializer_getInstance_31() {
    if ($serializer_instance_28 == null)
      new $serializer_28();
    return $serializer_instance_28;
  }
  function SetParticipantData_init_$Init$(seen0, apiVersion, studyDeploymentId, data, inputByParticipantRole, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_31().f2j_1);
    }
    ParticipationServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    $this.data = data;
    if (0 === (seen0 & 8))
      $this.inputByParticipantRole = null;
    else
      $this.inputByParticipantRole = inputByParticipantRole;
    return $this;
  }
  function SetParticipantData_init_$Create$(seen0, apiVersion, studyDeploymentId, data, inputByParticipantRole, serializationConstructorMarker) {
    return SetParticipantData_init_$Init$(seen0, apiVersion, studyDeploymentId, data, inputByParticipantRole, serializationConstructorMarker, objectCreate(protoOf(SetParticipantData)));
  }
  function Serializer_0() {
    Serializer_instance_0 = this;
    var tmp = this;
    tmp.i2j_1 = ignoreTypeParameters(ParticipationServiceRequest$Companion$serializer$ref(Companion_instance_38));
  }
  protoOf(Serializer_0).mk = function () {
    return this.i2j_1.mk();
  };
  protoOf(Serializer_0).j2j = function (encoder, value) {
    this.i2j_1.nk(encoder, value);
  };
  protoOf(Serializer_0).nk = function (encoder, value) {
    return this.j2j(encoder, value instanceof ParticipationServiceRequest ? value : THROW_CCE());
  };
  protoOf(Serializer_0).ok = function (decoder) {
    return this.i2j_1.ok(decoder);
  };
  var Serializer_instance_0;
  function Serializer_getInstance_0() {
    if (Serializer_instance_0 == null)
      new Serializer_0();
    return Serializer_instance_0;
  }
  function GetActiveParticipationInvitations(accountId) {
    ParticipationServiceRequest.call(this);
    this.accountId = accountId;
  }
  protoOf(GetActiveParticipationInvitations).k2j = function () {
    return this.accountId;
  };
  protoOf(GetActiveParticipationInvitations).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ActiveParticipationInvitation), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetActiveParticipationInvitations).sd = function () {
    return this.accountId;
  };
  protoOf(GetActiveParticipationInvitations).u2b = function (accountId) {
    return new GetActiveParticipationInvitations(accountId);
  };
  protoOf(GetActiveParticipationInvitations).copy = function (accountId, $super) {
    accountId = accountId === VOID ? this.accountId : accountId;
    return $super === VOID ? this.u2b(accountId) : $super.u2b.call(this, accountId);
  };
  protoOf(GetActiveParticipationInvitations).toString = function () {
    return 'GetActiveParticipationInvitations(accountId=' + this.accountId.toString() + ')';
  };
  protoOf(GetActiveParticipationInvitations).hashCode = function () {
    return this.accountId.hashCode();
  };
  protoOf(GetActiveParticipationInvitations).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetActiveParticipationInvitations))
      return false;
    if (!this.accountId.equals(other.accountId))
      return false;
    return true;
  };
  function GetParticipantData(studyDeploymentId) {
    ParticipationServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
  }
  protoOf(GetParticipantData).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetParticipantData).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(ParticipantData), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetParticipantData).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetParticipantData).u2b = function (studyDeploymentId) {
    return new GetParticipantData(studyDeploymentId);
  };
  protoOf(GetParticipantData).copy = function (studyDeploymentId, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    return $super === VOID ? this.u2b(studyDeploymentId) : $super.u2b.call(this, studyDeploymentId);
  };
  protoOf(GetParticipantData).toString = function () {
    return 'GetParticipantData(studyDeploymentId=' + this.studyDeploymentId.toString() + ')';
  };
  protoOf(GetParticipantData).hashCode = function () {
    return this.studyDeploymentId.hashCode();
  };
  protoOf(GetParticipantData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetParticipantData))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    return true;
  };
  function GetParticipantDataList(studyDeploymentIds) {
    Companion_getInstance_34();
    ParticipationServiceRequest.call(this);
    this.studyDeploymentIds = studyDeploymentIds;
  }
  protoOf(GetParticipantDataList).m2i = function () {
    return this.studyDeploymentIds;
  };
  protoOf(GetParticipantDataList).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ParticipantData), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetParticipantDataList).sd = function () {
    return this.studyDeploymentIds;
  };
  protoOf(GetParticipantDataList).n2i = function (studyDeploymentIds) {
    return new GetParticipantDataList(studyDeploymentIds);
  };
  protoOf(GetParticipantDataList).copy = function (studyDeploymentIds, $super) {
    studyDeploymentIds = studyDeploymentIds === VOID ? this.studyDeploymentIds : studyDeploymentIds;
    return $super === VOID ? this.n2i(studyDeploymentIds) : $super.n2i.call(this, studyDeploymentIds);
  };
  protoOf(GetParticipantDataList).toString = function () {
    return 'GetParticipantDataList(studyDeploymentIds=' + toString(this.studyDeploymentIds) + ')';
  };
  protoOf(GetParticipantDataList).hashCode = function () {
    return hashCode(this.studyDeploymentIds);
  };
  protoOf(GetParticipantDataList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetParticipantDataList))
      return false;
    if (!equals(this.studyDeploymentIds, other.studyDeploymentIds))
      return false;
    return true;
  };
  function SetParticipantData(studyDeploymentId, data, inputByParticipantRole) {
    Companion_getInstance_35();
    inputByParticipantRole = inputByParticipantRole === VOID ? null : inputByParticipantRole;
    ParticipationServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
    this.data = data;
    this.inputByParticipantRole = inputByParticipantRole;
  }
  protoOf(SetParticipantData).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(SetParticipantData).x1h = function () {
    return this.data;
  };
  protoOf(SetParticipantData).m2j = function () {
    return this.inputByParticipantRole;
  };
  protoOf(SetParticipantData).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(ParticipantData), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(SetParticipantData).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(SetParticipantData).td = function () {
    return this.data;
  };
  protoOf(SetParticipantData).m1j = function () {
    return this.inputByParticipantRole;
  };
  protoOf(SetParticipantData).n2j = function (studyDeploymentId, data, inputByParticipantRole) {
    return new SetParticipantData(studyDeploymentId, data, inputByParticipantRole);
  };
  protoOf(SetParticipantData).copy = function (studyDeploymentId, data, inputByParticipantRole, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    data = data === VOID ? this.data : data;
    inputByParticipantRole = inputByParticipantRole === VOID ? this.inputByParticipantRole : inputByParticipantRole;
    return $super === VOID ? this.n2j(studyDeploymentId, data, inputByParticipantRole) : $super.n2j.call(this, studyDeploymentId, data, inputByParticipantRole);
  };
  protoOf(SetParticipantData).toString = function () {
    return 'SetParticipantData(studyDeploymentId=' + this.studyDeploymentId.toString() + ', data=' + toString(this.data) + ', inputByParticipantRole=' + this.inputByParticipantRole + ')';
  };
  protoOf(SetParticipantData).hashCode = function () {
    var result = this.studyDeploymentId.hashCode();
    result = imul(result, 31) + hashCode(this.data) | 0;
    result = imul(result, 31) + (this.inputByParticipantRole == null ? 0 : getStringHashCode(this.inputByParticipantRole)) | 0;
    return result;
  };
  protoOf(SetParticipantData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetParticipantData))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    if (!equals(this.data, other.data))
      return false;
    if (!(this.inputByParticipantRole == other.inputByParticipantRole))
      return false;
    return true;
  };
  function Companion_34() {
  }
  protoOf(Companion_34).j2a = function (typeSerial0) {
    var tmp = getKClass(ParticipationServiceRequest);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(GetActiveParticipationInvitations), getKClass(GetParticipantData), getKClass(GetParticipantDataList), getKClass(SetParticipantData)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_28(), $serializer_getInstance_29(), $serializer_getInstance_30(), $serializer_getInstance_31()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$6);
  };
  protoOf(Companion_34).pw = function (typeParamsSerializers) {
    return this.j2a(typeParamsSerializers[0]);
  };
  var Companion_instance_38;
  function Companion_getInstance_36() {
    return Companion_instance_38;
  }
  function ParticipationServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.l2j_1 = apiVersion;
    return $this;
  }
  function ParticipationServiceRequest() {
    ApplicationServiceRequest.call(this);
    this.l2j_1 = Companion_getInstance_7().l2d_1;
  }
  protoOf(ParticipationServiceRequest).g26 = function () {
    return this.l2j_1;
  };
  //region block: post-declaration
  protoOf($serializer).fw = typeParametersSerializers;
  protoOf($serializer_0).fw = typeParametersSerializers;
  protoOf($serializer_1).fw = typeParametersSerializers;
  protoOf($serializer_2).fw = typeParametersSerializers;
  defineProp(protoOf(DeviceDeploymentStatus), 'device', function () {
    return this.d2d();
  });
  defineProp(protoOf(DeviceDeploymentStatus), 'canBeDeployed', function () {
    return this.e2d();
  });
  defineProp(protoOf(DeviceDeploymentStatus), 'canObtainDeviceDeployment', protoOf(DeviceDeploymentStatus).f2d);
  defineProp(protoOf(NotDeployed), 'isReadyForDeployment', protoOf(NotDeployed).a2d);
  defineProp(protoOf(NotDeployed), 'remainingDevicesToRegisterToObtainDeployment', function () {
    return this.b2d();
  });
  defineProp(protoOf(NotDeployed), 'remainingDevicesToRegisterBeforeDeployment', function () {
    return this.c2d();
  });
  defineProp(protoOf(Registered), 'deviceRegistration', function () {
    return this.g2d();
  });
  defineProp(protoOf(Deployed), 'deviceRegistration', function () {
    return this.g2d();
  });
  defineProp(protoOf(NeedsRedeployment), 'deviceRegistration', function () {
    return this.g2d();
  });
  protoOf($serializer_3).fw = typeParametersSerializers;
  protoOf($serializer_4).fw = typeParametersSerializers;
  protoOf($serializer_5).fw = typeParametersSerializers;
  protoOf($serializer_6).fw = typeParametersSerializers;
  protoOf($serializer_7).fw = typeParametersSerializers;
  defineProp(protoOf(StudyDeploymentStatus), 'createdOn', function () {
    return this.n22();
  });
  defineProp(protoOf(StudyDeploymentStatus), 'studyDeploymentId', function () {
    return this.e2f();
  });
  defineProp(protoOf(StudyDeploymentStatus), 'deviceStatusList', function () {
    return this.f2f();
  });
  defineProp(protoOf(StudyDeploymentStatus), 'participantStatusList', function () {
    return this.g2f();
  });
  defineProp(protoOf(StudyDeploymentStatus), 'startedOn', function () {
    return this.h2f();
  });
  protoOf($serializer_8).fw = typeParametersSerializers;
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
  Companion_instance_26 = new Companion_22();
  Companion_instance_29 = new Companion_25();
  Companion_instance_30 = new Companion_26();
  Companion_instance_31 = new Companion_27();
  Companion_instance_32 = new Companion_28();
  Companion_instance_33 = new Companion_29();
  Companion_instance_34 = new Companion_30();
  Companion_instance_35 = new Companion_31();
  Companion_instance_38 = new Companion_34();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var dk = _.dk || (_.dk = {});
    var cachet = dk.cachet || (dk.cachet = {});
    var carp = cachet.carp || (cachet.carp = {});
    var deployments = carp.deployments || (carp.deployments = {});
    var application = deployments.application || (deployments.application = {});
    application.DeviceDeploymentStatus = DeviceDeploymentStatus;
    application.DeviceDeploymentStatus.NotDeployed = NotDeployed;
    application.DeviceDeploymentStatus.Unregistered = Unregistered;
    application.DeviceDeploymentStatus.Registered = Registered;
    application.DeviceDeploymentStatus.Deployed = Deployed;
    application.DeviceDeploymentStatus.NeedsRedeployment = NeedsRedeployment;
    var dk_0 = _.dk || (_.dk = {});
    var cachet_0 = dk_0.cachet || (dk_0.cachet = {});
    var carp_0 = cachet_0.carp || (cachet_0.carp = {});
    var deployments_0 = carp_0.deployments || (carp_0.deployments = {});
    var application_0 = deployments_0.application || (deployments_0.application = {});
    application_0.PrimaryDeviceDeployment = PrimaryDeviceDeployment;
    application_0.PrimaryDeviceDeployment.RuntimeDeviceInfo = RuntimeDeviceInfo;
    var dk_1 = _.dk || (_.dk = {});
    var cachet_1 = dk_1.cachet || (dk_1.cachet = {});
    var carp_1 = cachet_1.carp || (cachet_1.carp = {});
    var deployments_1 = carp_1.deployments || (carp_1.deployments = {});
    var application_1 = deployments_1.application || (deployments_1.application = {});
    application_1.StudyDeploymentStatus = StudyDeploymentStatus;
    application_1.StudyDeploymentStatus.Invited = Invited;
    application_1.StudyDeploymentStatus.DeployingDevices = DeployingDevices;
    application_1.StudyDeploymentStatus.Running = Running;
    application_1.StudyDeploymentStatus.Stopped = Stopped;
    var dk_2 = _.dk || (_.dk = {});
    var cachet_2 = dk_2.cachet || (dk_2.cachet = {});
    var carp_2 = cachet_2.carp || (cachet_2.carp = {});
    var deployments_2 = carp_2.deployments || (carp_2.deployments = {});
    var application_2 = deployments_2.application || (deployments_2.application = {});
    application_2.throwIfInvalidInvitations = throwIfInvalidInvitations;
    application_2.throwIfInvalidPreregistrations = throwIfInvalidPreregistrations;
    var dk_3 = _.dk || (_.dk = {});
    var cachet_3 = dk_3.cachet || (dk_3.cachet = {});
    var carp_3 = cachet_3.carp || (cachet_3.carp = {});
    var deployments_3 = carp_3.deployments || (carp_3.deployments = {});
    var application_3 = deployments_3.application || (deployments_3.application = {});
    var users = application_3.users || (application_3.users = {});
    users.ActiveParticipationInvitation = ActiveParticipationInvitation;
    var dk_4 = _.dk || (_.dk = {});
    var cachet_4 = dk_4.cachet || (dk_4.cachet = {});
    var carp_4 = cachet_4.carp || (cachet_4.carp = {});
    var deployments_4 = carp_4.deployments || (carp_4.deployments = {});
    var application_4 = deployments_4.application || (deployments_4.application = {});
    var users_0 = application_4.users || (application_4.users = {});
    users_0.AssignedPrimaryDevice = AssignedPrimaryDevice;
    var dk_5 = _.dk || (_.dk = {});
    var cachet_5 = dk_5.cachet || (dk_5.cachet = {});
    var carp_5 = cachet_5.carp || (cachet_5.carp = {});
    var deployments_5 = carp_5.deployments || (carp_5.deployments = {});
    var application_5 = deployments_5.application || (deployments_5.application = {});
    var users_1 = application_5.users || (application_5.users = {});
    users_1.ParticipantData = ParticipantData;
    users_1.ParticipantData.RoleData = RoleData;
    var dk_6 = _.dk || (_.dk = {});
    var cachet_6 = dk_6.cachet || (dk_6.cachet = {});
    var carp_6 = cachet_6.carp || (cachet_6.carp = {});
    var deployments_6 = carp_6.deployments || (carp_6.deployments = {});
    var application_6 = deployments_6.application || (deployments_6.application = {});
    var users_2 = application_6.users || (application_6.users = {});
    users_2.ParticipantInvitation = ParticipantInvitation;
    var dk_7 = _.dk || (_.dk = {});
    var cachet_7 = dk_7.cachet || (dk_7.cachet = {});
    var carp_7 = cachet_7.carp || (cachet_7.carp = {});
    var deployments_7 = carp_7.deployments || (carp_7.deployments = {});
    var application_7 = deployments_7.application || (deployments_7.application = {});
    var users_3 = application_7.users || (application_7.users = {});
    users_3.ParticipantStatus = ParticipantStatus;
    var dk_8 = _.dk || (_.dk = {});
    var cachet_8 = dk_8.cachet || (dk_8.cachet = {});
    var carp_8 = cachet_8.carp || (cachet_8.carp = {});
    var deployments_8 = carp_8.deployments || (carp_8.deployments = {});
    var application_8 = deployments_8.application || (deployments_8.application = {});
    var users_4 = application_8.users || (application_8.users = {});
    users_4.Participation = Participation;
    var dk_9 = _.dk || (_.dk = {});
    var cachet_9 = dk_9.cachet || (dk_9.cachet = {});
    var carp_9 = cachet_9.carp || (cachet_9.carp = {});
    var deployments_9 = carp_9.deployments || (carp_9.deployments = {});
    var application_9 = deployments_9.application || (deployments_9.application = {});
    var users_5 = application_9.users || (application_9.users = {});
    users_5.StudyInvitation = StudyInvitation;
    var dk_10 = _.dk || (_.dk = {});
    var cachet_10 = dk_10.cachet || (dk_10.cachet = {});
    var carp_10 = cachet_10.carp || (cachet_10.carp = {});
    var deployments_10 = carp_10.deployments || (carp_10.deployments = {});
    var infrastructure = deployments_10.infrastructure || (deployments_10.infrastructure = {});
    infrastructure.DeploymentServiceRequest = DeploymentServiceRequest;
    defineProp(infrastructure.DeploymentServiceRequest, 'Serializer', Serializer_getInstance, VOID, true);
    infrastructure.DeploymentServiceRequest.CreateStudyDeployment = CreateStudyDeployment;
    infrastructure.DeploymentServiceRequest.RemoveStudyDeployments = RemoveStudyDeployments;
    infrastructure.DeploymentServiceRequest.GetStudyDeploymentStatus = GetStudyDeploymentStatus;
    infrastructure.DeploymentServiceRequest.GetStudyDeploymentStatusList = GetStudyDeploymentStatusList;
    infrastructure.DeploymentServiceRequest.RegisterDevice = RegisterDevice;
    infrastructure.DeploymentServiceRequest.UnregisterDevice = UnregisterDevice;
    infrastructure.DeploymentServiceRequest.GetDeviceDeploymentFor = GetDeviceDeploymentFor;
    infrastructure.DeploymentServiceRequest.DeviceDeployed = DeviceDeployed;
    infrastructure.DeploymentServiceRequest.Stop = Stop;
    var dk_11 = _.dk || (_.dk = {});
    var cachet_11 = dk_11.cachet || (dk_11.cachet = {});
    var carp_11 = cachet_11.carp || (cachet_11.carp = {});
    var deployments_11 = carp_11.deployments || (carp_11.deployments = {});
    var infrastructure_0 = deployments_11.infrastructure || (deployments_11.infrastructure = {});
    infrastructure_0.ParticipationServiceRequest = ParticipationServiceRequest;
    defineProp(infrastructure_0.ParticipationServiceRequest, 'Serializer', Serializer_getInstance_0, VOID, true);
    infrastructure_0.ParticipationServiceRequest.GetActiveParticipationInvitations = GetActiveParticipationInvitations;
    infrastructure_0.ParticipationServiceRequest.GetParticipantData = GetParticipantData;
    infrastructure_0.ParticipationServiceRequest.GetParticipantDataList = GetParticipantDataList;
    infrastructure_0.ParticipationServiceRequest.SetParticipantData = SetParticipantData;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = DeployingDevices;
  _.$_$.b = Invited;
  _.$_$.c = Running;
  _.$_$.d = Stopped;
  _.$_$.e = $serializer_getInstance_18;
  _.$_$.f = Companion_getInstance_13;
  //endregion
  return _;
}));

//# sourceMappingURL=carp-deployments-core-generated.js.map
