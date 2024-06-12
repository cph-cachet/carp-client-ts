(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@cachet/carp-common-generated', '@cachet/kotlin-kotlin-stdlib', '@cachet/kotlinx-serialization-kotlinx-serialization-core', '@cachet/Kotlin-DateTime-library-kotlinx-datetime', '@cachet/carp-protocols-core-generated'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@cachet/carp-common-generated'), require('@cachet/kotlin-kotlin-stdlib'), require('@cachet/kotlinx-serialization-kotlinx-serialization-core'), require('@cachet/Kotlin-DateTime-library-kotlinx-datetime'), require('@cachet/carp-protocols-core-generated'));
  else {
    if (typeof this['carp-common-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-deployments-core-generated'. Its dependency 'carp-common-generated' was not found. Please, check whether 'carp-common-generated' is loaded prior to 'carp-deployments-core-generated'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'carp-deployments-core-generated'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'carp-deployments-core-generated'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'carp-deployments-core-generated'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'carp-deployments-core-generated'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'carp-deployments-core-generated'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'carp-deployments-core-generated'.");
    }
    if (typeof this['carp-protocols-core-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-deployments-core-generated'. Its dependency 'carp-protocols-core-generated' was not found. Please, check whether 'carp-protocols-core-generated' is loaded prior to 'carp-deployments-core-generated'.");
    }
    root['carp-deployments-core-generated'] = factory(typeof this['carp-deployments-core-generated'] === 'undefined' ? {} : this['carp-deployments-core-generated'], this['carp-common-generated'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['Kotlin-DateTime-library-kotlinx-datetime'], this['carp-protocols-core-generated']);
  }
}(this, function (_, kotlin_dk_cachet_carp_common_carp_common, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_dk_cachet_carp_protocols_carp_protocols_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ApiVersion = kotlin_dk_cachet_carp_common_carp_common.$_$.d;
  var protoOf = kotlin_kotlin.$_$.m8;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var Companion_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.v;
  var UnitSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.bb;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var VOID = kotlin_kotlin.$_$.f;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var objectCreate = kotlin_kotlin.$_$.k8;
  var getKClass = kotlin_kotlin.$_$.e;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var defineProp = kotlin_kotlin.$_$.k7;
  var classMeta = kotlin_kotlin.$_$.i7;
  var hashCode = kotlin_kotlin.$_$.r7;
  var getBooleanHashCode = kotlin_kotlin.$_$.n7;
  var equals = kotlin_kotlin.$_$.l7;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.ub;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var plus = kotlin_kotlin.$_$.h6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x4;
  var mapCapacity = kotlin_kotlin.$_$.d6;
  var coerceAtLeast = kotlin_kotlin.$_$.t8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var toSet = kotlin_kotlin.$_$.u6;
  var Companion_getInstance_0 = kotlin_dk_cachet_carp_common_carp_common.$_$.x;
  var Companion_getInstance_1 = kotlin_dk_cachet_carp_common_carp_common.$_$.w;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var TaskConfiguration = kotlin_dk_cachet_carp_common_carp_common.$_$.e;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var TriggerConfiguration = kotlin_dk_cachet_carp_common_carp_common.$_$.g;
  var $serializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.z;
  var $serializer_getInstance_0 = kotlin_dk_cachet_carp_common_carp_common.$_$.d1;
  var ApplicationDataSerializer = kotlin_dk_cachet_carp_common_carp_common.$_$.p;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var InstantIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var emptySet = kotlin_kotlin.$_$.o5;
  var emptyMap = kotlin_kotlin.$_$.n5;
  var plus_0 = kotlin_kotlin.$_$.j6;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var compareTo = kotlin_kotlin.$_$.j7;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var hasNoConflicts = kotlin_dk_cachet_carp_common_carp_common.$_$.j;
  var getStringHashCode = kotlin_kotlin.$_$.q7;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var UUIDSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.k1;
  var PrimaryDeviceConfiguration = kotlin_dk_cachet_carp_common_carp_common.$_$.b;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var toString = kotlin_kotlin.$_$.r8;
  var Roles = kotlin_dk_cachet_carp_common_carp_common.$_$.i;
  var addAll = kotlin_kotlin.$_$.s4;
  var Collection = kotlin_kotlin.$_$.g4;
  var isInterface = kotlin_kotlin.$_$.b8;
  var All = kotlin_dk_cachet_carp_common_carp_common.$_$.h;
  var NamespacedIdSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.i1;
  var Data = kotlin_dk_cachet_carp_common_carp_common.$_$.a;
  var Companion_getInstance_2 = kotlin_dk_cachet_carp_common_carp_common.$_$.c1;
  var Companion_getInstance_3 = kotlin_dk_cachet_carp_common_carp_common.$_$.a1;
  var All_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.b1;
  var Companion_instance = kotlin_dk_cachet_carp_common_carp_common.$_$.j1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wb;
  var ApiVersionSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.y;
  var $serializer_getInstance_1 = kotlin_dk_cachet_carp_protocols_carp_protocols_core.$_$.a;
  var ignoreTypeParameters = kotlin_dk_cachet_carp_common_carp_common.$_$.r;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var arrayOf = kotlin_kotlin.$_$.nb;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var Set = kotlin_kotlin.$_$.r4;
  var UUID = kotlin_dk_cachet_carp_common_carp_common.$_$.k;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var List = kotlin_kotlin.$_$.l4;
  var ApplicationServiceRequest = kotlin_dk_cachet_carp_common_carp_common.$_$.s;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(DeviceDeploymentStatus, 'DeviceDeploymentStatus', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_9});
  setMetadataFor(NotDeployed, 'NotDeployed', classMeta, DeviceDeploymentStatus);
  setMetadataFor(Unregistered, 'Unregistered', classMeta, NotDeployed, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  setMetadataFor(Registered, 'Registered', classMeta, NotDeployed, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  setMetadataFor(Deployed, 'Deployed', classMeta, DeviceDeploymentStatus, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  setMetadataFor(NeedsRedeployment, 'NeedsRedeployment', classMeta, NotDeployed, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  setMetadataFor(Companion_4, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(RuntimeDeviceInfo, 'RuntimeDeviceInfo', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor($serializer_3, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(PrimaryDeviceDeployment, 'PrimaryDeviceDeployment', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor($serializer_4, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor($serializer_5, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor($serializer_6, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor($serializer_7, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(StudyDeploymentStatus, 'StudyDeploymentStatus', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_16});
  setMetadataFor(Invited, 'Invited', classMeta, StudyDeploymentStatus, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  setMetadataFor(DeployingDevices, 'DeployingDevices', classMeta, StudyDeploymentStatus, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  setMetadataFor(Running, 'Running', classMeta, StudyDeploymentStatus, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  setMetadataFor(Stopped, 'Stopped', classMeta, StudyDeploymentStatus, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  setMetadataFor(Companion_11, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor($serializer_8, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ActiveParticipationInvitation, 'ActiveParticipationInvitation', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor($serializer_9, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(AssignedPrimaryDevice, 'AssignedPrimaryDevice', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor($serializer_10, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(RoleData, 'RoleData', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor($serializer_11, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ParticipantData, 'ParticipantData', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor($serializer_12, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ParticipantInvitation, 'ParticipantInvitation', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor($serializer_13, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ParticipantStatus, 'ParticipantStatus', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor($serializer_14, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Participation, 'Participation', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor($serializer_15, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(StudyInvitation, 'StudyInvitation', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor($serializer_16, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor($serializer_17, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor($serializer_18, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor($serializer_19, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor($serializer_20, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor($serializer_21, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor($serializer_22, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor($serializer_23, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor($serializer_24, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Serializer, 'Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DeploymentServiceRequest, 'DeploymentServiceRequest', classMeta, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_34});
  setMetadataFor(CreateStudyDeployment, 'CreateStudyDeployment', classMeta, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_19});
  setMetadataFor(RemoveStudyDeployments, 'RemoveStudyDeployments', classMeta, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_20});
  setMetadataFor(GetStudyDeploymentStatus, 'GetStudyDeploymentStatus', classMeta, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_21});
  setMetadataFor(GetStudyDeploymentStatusList, 'GetStudyDeploymentStatusList', classMeta, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_22});
  setMetadataFor(RegisterDevice, 'RegisterDevice', classMeta, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_23});
  setMetadataFor(UnregisterDevice, 'UnregisterDevice', classMeta, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_24});
  setMetadataFor(GetDeviceDeploymentFor, 'GetDeviceDeploymentFor', classMeta, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_25});
  setMetadataFor(DeviceDeployed, 'DeviceDeployed', classMeta, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_26});
  setMetadataFor(Stop, 'Stop', classMeta, DeploymentServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_27});
  setMetadataFor(Companion_29, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor($serializer_25, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor($serializer_26, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor($serializer_27, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor($serializer_28, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Serializer_0, 'Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ParticipationServiceRequest, 'ParticipationServiceRequest', classMeta, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_39});
  setMetadataFor(GetActiveParticipationInvitations, 'GetActiveParticipationInvitations', classMeta, ParticipationServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_28});
  setMetadataFor(GetParticipantData, 'GetParticipantData', classMeta, ParticipationServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_29});
  setMetadataFor(GetParticipantDataList, 'GetParticipantDataList', classMeta, ParticipationServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_30});
  setMetadataFor(SetParticipantData, 'SetParticipantData', classMeta, ParticipationServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_31});
  setMetadataFor(Companion_34, 'Companion', objectMeta, VOID, [SerializerFactory]);
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.a2c_1 = new ApiVersion(1, 1);
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b2c_1 = [Companion_getInstance().z1q(UnitSerializer_getInstance(), UnitSerializer_getInstance()), null, new LinkedHashSetSerializer(StringSerializer_getInstance()), new LinkedHashSetSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_0).m16 = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.DeviceDeploymentStatus.Unregistered', this, 4);
    tmp0_serialDesc.nt('device', false);
    tmp0_serialDesc.nt('canBeDeployed', false);
    tmp0_serialDesc.nt('remainingDevicesToRegisterToObtainDeployment', false);
    tmp0_serialDesc.nt('remainingDevicesToRegisterBeforeDeployment', false);
    this.c2c_1 = tmp0_serialDesc;
  }
  protoOf($serializer).pi = function () {
    return this.c2c_1;
  };
  protoOf($serializer).cu = function () {
    var tmp0_cached = Companion_getInstance_5().b2c_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], BooleanSerializer_getInstance(), tmp0_cached[2], tmp0_cached[3]];
  };
  protoOf($serializer).ri = function (decoder) {
    var tmp0_desc = this.c2c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_5().b2c_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.zl(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
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
            tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.zl(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
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
    return Unregistered_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer).d2c = function (encoder, value) {
    var tmp0_desc = this.c2c_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().b2c_1;
    tmp1_output.pn(tmp0_desc, 0, tmp2_cached[0], value.e2c_1);
    tmp1_output.fn(tmp0_desc, 1, value.f2c_1);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.g2c_1);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.h2c_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer).qi = function (encoder, value) {
    return this.d2c(encoder, value instanceof Unregistered ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance_2() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Unregistered_init_$Init$(seen1, device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_2().c2c_1);
    }
    NotDeployed.call($this);
    $this.e2c_1 = device;
    $this.f2c_1 = canBeDeployed;
    $this.g2c_1 = remainingDevicesToRegisterToObtainDeployment;
    $this.h2c_1 = remainingDevicesToRegisterBeforeDeployment;
    return $this;
  }
  function Unregistered_init_$Create$(seen1, device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, serializationConstructorMarker) {
    return Unregistered_init_$Init$(seen1, device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, serializationConstructorMarker, objectCreate(protoOf(Unregistered)));
  }
  function Companion_1() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i2c_1 = [Companion_getInstance().z1q(UnitSerializer_getInstance(), UnitSerializer_getInstance()), null, new LinkedHashSetSerializer(StringSerializer_getInstance()), new LinkedHashSetSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_1).m16 = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_2;
  function Companion_getInstance_6() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.DeviceDeploymentStatus.Registered', this, 4);
    tmp0_serialDesc.nt('device', false);
    tmp0_serialDesc.nt('canBeDeployed', false);
    tmp0_serialDesc.nt('remainingDevicesToRegisterToObtainDeployment', false);
    tmp0_serialDesc.nt('remainingDevicesToRegisterBeforeDeployment', false);
    this.j2c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).pi = function () {
    return this.j2c_1;
  };
  protoOf($serializer_0).cu = function () {
    var tmp0_cached = Companion_getInstance_6().i2c_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], BooleanSerializer_getInstance(), tmp0_cached[2], tmp0_cached[3]];
  };
  protoOf($serializer_0).ri = function (decoder) {
    var tmp0_desc = this.j2c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_6().i2c_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.zl(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
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
            tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.zl(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
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
    return Registered_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_0).k2c = function (encoder, value) {
    var tmp0_desc = this.j2c_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().i2c_1;
    tmp1_output.pn(tmp0_desc, 0, tmp2_cached[0], value.l2c_1);
    tmp1_output.fn(tmp0_desc, 1, value.m2c_1);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.n2c_1);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.o2c_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_0).qi = function (encoder, value) {
    return this.k2c(encoder, value instanceof Registered ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_3() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Registered_init_$Init$(seen1, device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_3().j2c_1);
    }
    NotDeployed.call($this);
    $this.l2c_1 = device;
    $this.m2c_1 = canBeDeployed;
    $this.n2c_1 = remainingDevicesToRegisterToObtainDeployment;
    $this.o2c_1 = remainingDevicesToRegisterBeforeDeployment;
    return $this;
  }
  function Registered_init_$Create$(seen1, device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, serializationConstructorMarker) {
    return Registered_init_$Init$(seen1, device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, serializationConstructorMarker, objectCreate(protoOf(Registered)));
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p2c_1 = [Companion_getInstance().z1q(UnitSerializer_getInstance(), UnitSerializer_getInstance()), null];
  }
  protoOf(Companion_2).m16 = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_3;
  function Companion_getInstance_7() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.DeviceDeploymentStatus.Deployed', this, 2);
    tmp0_serialDesc.nt('device', false);
    tmp0_serialDesc.nt('canBeDeployed', true);
    this.q2c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).pi = function () {
    return this.q2c_1;
  };
  protoOf($serializer_1).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_7().p2c_1[0], BooleanSerializer_getInstance()];
  };
  protoOf($serializer_1).ri = function (decoder) {
    var tmp0_desc = this.q2c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().p2c_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.zl(tmp0_desc, 1);
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
            tmp5_local1 = tmp6_input.zl(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return Deployed_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_1).r2c = function (encoder, value) {
    var tmp0_desc = this.q2c_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().p2c_1;
    tmp1_output.pn(tmp0_desc, 0, tmp2_cached[0], value.s2c_1);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.t2c_1 === true)) {
      tmp1_output.fn(tmp0_desc, 1, value.t2c_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_1).qi = function (encoder, value) {
    return this.r2c(encoder, value instanceof Deployed ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_4() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Deployed_init_$Init$(seen1, device, canBeDeployed, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_4().q2c_1);
    }
    DeviceDeploymentStatus_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.s2c_1 = device;
    if (0 === (seen1 & 2))
      $this.t2c_1 = true;
    else
      $this.t2c_1 = canBeDeployed;
    return $this;
  }
  function Deployed_init_$Create$(seen1, device, canBeDeployed, serializationConstructorMarker) {
    return Deployed_init_$Init$(seen1, device, canBeDeployed, serializationConstructorMarker, objectCreate(protoOf(Deployed)));
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.u2c_1 = [Companion_getInstance().z1q(UnitSerializer_getInstance(), UnitSerializer_getInstance()), new LinkedHashSetSerializer(StringSerializer_getInstance()), new LinkedHashSetSerializer(StringSerializer_getInstance()), null];
  }
  protoOf(Companion_3).m16 = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_4;
  function Companion_getInstance_8() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.DeviceDeploymentStatus.NeedsRedeployment', this, 4);
    tmp0_serialDesc.nt('device', false);
    tmp0_serialDesc.nt('remainingDevicesToRegisterToObtainDeployment', false);
    tmp0_serialDesc.nt('remainingDevicesToRegisterBeforeDeployment', false);
    tmp0_serialDesc.nt('canBeDeployed', true);
    this.v2c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).pi = function () {
    return this.v2c_1;
  };
  protoOf($serializer_2).cu = function () {
    var tmp0_cached = Companion_getInstance_8().u2c_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1], tmp0_cached[2], BooleanSerializer_getInstance()];
  };
  protoOf($serializer_2).ri = function (decoder) {
    var tmp0_desc = this.v2c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_8().u2c_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.zl(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.zl(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return NeedsRedeployment_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).w2c = function (encoder, value) {
    var tmp0_desc = this.v2c_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().u2c_1;
    tmp1_output.pn(tmp0_desc, 0, tmp2_cached[0], value.x2c_1);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.y2c_1);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.z2c_1);
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !(value.a2d_1 === true)) {
      tmp1_output.fn(tmp0_desc, 3, value.a2d_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_2).qi = function (encoder, value) {
    return this.w2c(encoder, value instanceof NeedsRedeployment ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_5() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function NeedsRedeployment_init_$Init$(seen1, device, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, canBeDeployed, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_5().v2c_1);
    }
    NotDeployed.call($this);
    $this.x2c_1 = device;
    $this.y2c_1 = remainingDevicesToRegisterToObtainDeployment;
    $this.z2c_1 = remainingDevicesToRegisterBeforeDeployment;
    if (0 === (seen1 & 8))
      $this.a2d_1 = true;
    else
      $this.a2d_1 = canBeDeployed;
    return $this;
  }
  function NeedsRedeployment_init_$Create$(seen1, device, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, canBeDeployed, serializationConstructorMarker) {
    return NeedsRedeployment_init_$Init$(seen1, device, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, canBeDeployed, serializationConstructorMarker, objectCreate(protoOf(NeedsRedeployment)));
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.b2d_1.r2();
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
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.deployments.application.DeviceDeploymentStatus', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function NotDeployed() {
    DeviceDeploymentStatus.call(this);
  }
  protoOf(NotDeployed).c2d = function () {
    return this.canBeDeployed ? this.remainingDevicesToRegisterBeforeDeployment.y() : false;
  };
  function Unregistered(device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) {
    Companion_getInstance_5();
    NotDeployed.call(this);
    this.e2c_1 = device;
    this.f2c_1 = canBeDeployed;
    this.g2c_1 = remainingDevicesToRegisterToObtainDeployment;
    this.h2c_1 = remainingDevicesToRegisterBeforeDeployment;
  }
  protoOf(Unregistered).f2d = function () {
    return this.e2c_1;
  };
  protoOf(Unregistered).g2d = function () {
    return this.f2c_1;
  };
  protoOf(Unregistered).d2d = function () {
    return this.g2c_1;
  };
  protoOf(Unregistered).e2d = function () {
    return this.h2c_1;
  };
  protoOf(Unregistered).od = function () {
    return this.e2c_1;
  };
  protoOf(Unregistered).pd = function () {
    return this.f2c_1;
  };
  protoOf(Unregistered).r1g = function () {
    return this.g2c_1;
  };
  protoOf(Unregistered).q1h = function () {
    return this.h2c_1;
  };
  protoOf(Unregistered).i2d = function (device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) {
    return new Unregistered(device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment);
  };
  protoOf(Unregistered).copy = function (device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, $super) {
    device = device === VOID ? this.e2c_1 : device;
    canBeDeployed = canBeDeployed === VOID ? this.f2c_1 : canBeDeployed;
    remainingDevicesToRegisterToObtainDeployment = remainingDevicesToRegisterToObtainDeployment === VOID ? this.g2c_1 : remainingDevicesToRegisterToObtainDeployment;
    remainingDevicesToRegisterBeforeDeployment = remainingDevicesToRegisterBeforeDeployment === VOID ? this.h2c_1 : remainingDevicesToRegisterBeforeDeployment;
    return this.i2d(device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment);
  };
  protoOf(Unregistered).toString = function () {
    return 'Unregistered(device=' + this.e2c_1 + ', canBeDeployed=' + this.f2c_1 + ', remainingDevicesToRegisterToObtainDeployment=' + this.g2c_1 + ', remainingDevicesToRegisterBeforeDeployment=' + this.h2c_1 + ')';
  };
  protoOf(Unregistered).hashCode = function () {
    var result = hashCode(this.e2c_1);
    result = imul(result, 31) + getBooleanHashCode(this.f2c_1) | 0;
    result = imul(result, 31) + hashCode(this.g2c_1) | 0;
    result = imul(result, 31) + hashCode(this.h2c_1) | 0;
    return result;
  };
  protoOf(Unregistered).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Unregistered))
      return false;
    var tmp0_other_with_cast = other instanceof Unregistered ? other : THROW_CCE();
    if (!equals(this.e2c_1, tmp0_other_with_cast.e2c_1))
      return false;
    if (!(this.f2c_1 === tmp0_other_with_cast.f2c_1))
      return false;
    if (!equals(this.g2c_1, tmp0_other_with_cast.g2c_1))
      return false;
    if (!equals(this.h2c_1, tmp0_other_with_cast.h2c_1))
      return false;
    return true;
  };
  function Registered(device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) {
    Companion_getInstance_6();
    NotDeployed.call(this);
    this.l2c_1 = device;
    this.m2c_1 = canBeDeployed;
    this.n2c_1 = remainingDevicesToRegisterToObtainDeployment;
    this.o2c_1 = remainingDevicesToRegisterBeforeDeployment;
  }
  protoOf(Registered).f2d = function () {
    return this.l2c_1;
  };
  protoOf(Registered).g2d = function () {
    return this.m2c_1;
  };
  protoOf(Registered).d2d = function () {
    return this.n2c_1;
  };
  protoOf(Registered).e2d = function () {
    return this.o2c_1;
  };
  protoOf(Registered).od = function () {
    return this.l2c_1;
  };
  protoOf(Registered).pd = function () {
    return this.m2c_1;
  };
  protoOf(Registered).r1g = function () {
    return this.n2c_1;
  };
  protoOf(Registered).q1h = function () {
    return this.o2c_1;
  };
  protoOf(Registered).i2d = function (device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) {
    return new Registered(device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment);
  };
  protoOf(Registered).copy = function (device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, $super) {
    device = device === VOID ? this.l2c_1 : device;
    canBeDeployed = canBeDeployed === VOID ? this.m2c_1 : canBeDeployed;
    remainingDevicesToRegisterToObtainDeployment = remainingDevicesToRegisterToObtainDeployment === VOID ? this.n2c_1 : remainingDevicesToRegisterToObtainDeployment;
    remainingDevicesToRegisterBeforeDeployment = remainingDevicesToRegisterBeforeDeployment === VOID ? this.o2c_1 : remainingDevicesToRegisterBeforeDeployment;
    return this.i2d(device, canBeDeployed, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment);
  };
  protoOf(Registered).toString = function () {
    return 'Registered(device=' + this.l2c_1 + ', canBeDeployed=' + this.m2c_1 + ', remainingDevicesToRegisterToObtainDeployment=' + this.n2c_1 + ', remainingDevicesToRegisterBeforeDeployment=' + this.o2c_1 + ')';
  };
  protoOf(Registered).hashCode = function () {
    var result = hashCode(this.l2c_1);
    result = imul(result, 31) + getBooleanHashCode(this.m2c_1) | 0;
    result = imul(result, 31) + hashCode(this.n2c_1) | 0;
    result = imul(result, 31) + hashCode(this.o2c_1) | 0;
    return result;
  };
  protoOf(Registered).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Registered))
      return false;
    var tmp0_other_with_cast = other instanceof Registered ? other : THROW_CCE();
    if (!equals(this.l2c_1, tmp0_other_with_cast.l2c_1))
      return false;
    if (!(this.m2c_1 === tmp0_other_with_cast.m2c_1))
      return false;
    if (!equals(this.n2c_1, tmp0_other_with_cast.n2c_1))
      return false;
    if (!equals(this.o2c_1, tmp0_other_with_cast.o2c_1))
      return false;
    return true;
  };
  function Deployed(device) {
    Companion_getInstance_7();
    DeviceDeploymentStatus.call(this);
    this.s2c_1 = device;
    this.t2c_1 = true;
  }
  protoOf(Deployed).f2d = function () {
    return this.s2c_1;
  };
  protoOf(Deployed).g2d = function () {
    return this.t2c_1;
  };
  protoOf(Deployed).od = function () {
    return this.s2c_1;
  };
  protoOf(Deployed).j2d = function (device) {
    return new Deployed(device);
  };
  protoOf(Deployed).copy = function (device, $super) {
    device = device === VOID ? this.s2c_1 : device;
    return this.j2d(device);
  };
  protoOf(Deployed).toString = function () {
    return 'Deployed(device=' + this.s2c_1 + ')';
  };
  protoOf(Deployed).hashCode = function () {
    return hashCode(this.s2c_1);
  };
  protoOf(Deployed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Deployed))
      return false;
    var tmp0_other_with_cast = other instanceof Deployed ? other : THROW_CCE();
    if (!equals(this.s2c_1, tmp0_other_with_cast.s2c_1))
      return false;
    return true;
  };
  function NeedsRedeployment(device, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) {
    Companion_getInstance_8();
    NotDeployed.call(this);
    this.x2c_1 = device;
    this.y2c_1 = remainingDevicesToRegisterToObtainDeployment;
    this.z2c_1 = remainingDevicesToRegisterBeforeDeployment;
    this.a2d_1 = true;
  }
  protoOf(NeedsRedeployment).f2d = function () {
    return this.x2c_1;
  };
  protoOf(NeedsRedeployment).d2d = function () {
    return this.y2c_1;
  };
  protoOf(NeedsRedeployment).e2d = function () {
    return this.z2c_1;
  };
  protoOf(NeedsRedeployment).g2d = function () {
    return this.a2d_1;
  };
  protoOf(NeedsRedeployment).od = function () {
    return this.x2c_1;
  };
  protoOf(NeedsRedeployment).pd = function () {
    return this.y2c_1;
  };
  protoOf(NeedsRedeployment).r1g = function () {
    return this.z2c_1;
  };
  protoOf(NeedsRedeployment).k2d = function (device, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment) {
    return new NeedsRedeployment(device, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment);
  };
  protoOf(NeedsRedeployment).copy = function (device, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment, $super) {
    device = device === VOID ? this.x2c_1 : device;
    remainingDevicesToRegisterToObtainDeployment = remainingDevicesToRegisterToObtainDeployment === VOID ? this.y2c_1 : remainingDevicesToRegisterToObtainDeployment;
    remainingDevicesToRegisterBeforeDeployment = remainingDevicesToRegisterBeforeDeployment === VOID ? this.z2c_1 : remainingDevicesToRegisterBeforeDeployment;
    return this.k2d(device, remainingDevicesToRegisterToObtainDeployment, remainingDevicesToRegisterBeforeDeployment);
  };
  protoOf(NeedsRedeployment).toString = function () {
    return 'NeedsRedeployment(device=' + this.x2c_1 + ', remainingDevicesToRegisterToObtainDeployment=' + this.y2c_1 + ', remainingDevicesToRegisterBeforeDeployment=' + this.z2c_1 + ')';
  };
  protoOf(NeedsRedeployment).hashCode = function () {
    var result = hashCode(this.x2c_1);
    result = imul(result, 31) + hashCode(this.y2c_1) | 0;
    result = imul(result, 31) + hashCode(this.z2c_1) | 0;
    return result;
  };
  protoOf(NeedsRedeployment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NeedsRedeployment))
      return false;
    var tmp0_other_with_cast = other instanceof NeedsRedeployment ? other : THROW_CCE();
    if (!equals(this.x2c_1, tmp0_other_with_cast.x2c_1))
      return false;
    if (!equals(this.y2c_1, tmp0_other_with_cast.y2c_1))
      return false;
    if (!equals(this.z2c_1, tmp0_other_with_cast.z2c_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.b2d_1 = lazy(tmp_0, DeviceDeploymentStatus$Companion$_anonymous__q6jrr2);
  }
  protoOf(Companion_4).m16 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_4).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_5;
  function Companion_getInstance_9() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function DeviceDeploymentStatus_init_$Init$(seen1, serializationConstructorMarker, $this) {
    return $this;
  }
  function DeviceDeploymentStatus() {
    Companion_getInstance_9();
  }
  protoOf(DeviceDeploymentStatus).h2d = function () {
    var tmp;
    if (this instanceof Deployed) {
      tmp = true;
    } else {
      var tmp_0;
      if (this instanceof NotDeployed) {
        tmp_0 = this.remainingDevicesToRegisterToObtainDeployment.y();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function Companion_5() {
    Companion_instance_6 = this;
    this.l2d_1 = new ApiVersion(1, 0);
  }
  var Companion_instance_6;
  function Companion_getInstance_10() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function RuntimeDeviceInfo(configuration, isConnectedDevice, registration, defaultSamplingConfiguration, tasks) {
    this.configuration = configuration;
    this.isConnectedDevice = isConnectedDevice;
    this.registration = registration;
    this.defaultSamplingConfiguration = defaultSamplingConfiguration;
    this.tasks = tasks;
  }
  protoOf(RuntimeDeviceInfo).q2b = function () {
    return this.configuration;
  };
  protoOf(RuntimeDeviceInfo).m2d = function () {
    return this.isConnectedDevice;
  };
  protoOf(RuntimeDeviceInfo).n2d = function () {
    return this.registration;
  };
  protoOf(RuntimeDeviceInfo).w1o = function () {
    return this.defaultSamplingConfiguration;
  };
  protoOf(RuntimeDeviceInfo).c24 = function () {
    return this.tasks;
  };
  protoOf(RuntimeDeviceInfo).od = function () {
    return this.configuration;
  };
  protoOf(RuntimeDeviceInfo).pd = function () {
    return this.isConnectedDevice;
  };
  protoOf(RuntimeDeviceInfo).r1g = function () {
    return this.registration;
  };
  protoOf(RuntimeDeviceInfo).q1h = function () {
    return this.defaultSamplingConfiguration;
  };
  protoOf(RuntimeDeviceInfo).r1m = function () {
    return this.tasks;
  };
  protoOf(RuntimeDeviceInfo).o2d = function (configuration, isConnectedDevice, registration, defaultSamplingConfiguration, tasks) {
    return new RuntimeDeviceInfo(configuration, isConnectedDevice, registration, defaultSamplingConfiguration, tasks);
  };
  protoOf(RuntimeDeviceInfo).copy = function (configuration, isConnectedDevice, registration, defaultSamplingConfiguration, tasks, $super) {
    configuration = configuration === VOID ? this.configuration : configuration;
    isConnectedDevice = isConnectedDevice === VOID ? this.isConnectedDevice : isConnectedDevice;
    registration = registration === VOID ? this.registration : registration;
    defaultSamplingConfiguration = defaultSamplingConfiguration === VOID ? this.defaultSamplingConfiguration : defaultSamplingConfiguration;
    tasks = tasks === VOID ? this.tasks : tasks;
    return this.o2d(configuration, isConnectedDevice, registration, defaultSamplingConfiguration, tasks);
  };
  protoOf(RuntimeDeviceInfo).toString = function () {
    return 'RuntimeDeviceInfo(configuration=' + this.configuration + ', isConnectedDevice=' + this.isConnectedDevice + ', registration=' + this.registration + ', defaultSamplingConfiguration=' + this.defaultSamplingConfiguration + ', tasks=' + this.tasks + ')';
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
    var tmp0_other_with_cast = other instanceof RuntimeDeviceInfo ? other : THROW_CCE();
    if (!equals(this.configuration, tmp0_other_with_cast.configuration))
      return false;
    if (!(this.isConnectedDevice === tmp0_other_with_cast.isConnectedDevice))
      return false;
    if (!equals(this.registration, tmp0_other_with_cast.registration))
      return false;
    if (!equals(this.defaultSamplingConfiguration, tmp0_other_with_cast.defaultSamplingConfiguration))
      return false;
    if (!equals(this.tasks, tmp0_other_with_cast.tasks))
      return false;
    return true;
  };
  function getDefaultSamplingConfigurations($this, device) {
    var samplingSchemes = device.getDataTypeSamplingSchemes();
    var dataTypes = plus(samplingSchemes.l2(), device.defaultSamplingConfiguration.l2());
    // Inline function 'kotlin.collections.associateWith' call
    var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(dataTypes, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = dataTypes.t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.deployments.application.PrimaryDeviceDeployment.getDefaultSamplingConfigurations.<anonymous>' call
      var tmp0_elvis_lhs = device.defaultSamplingConfiguration.x2(element);
      var tmp$ret$0 = tmp0_elvis_lhs == null ? ensureNotNull(samplingSchemes.x2(element)).default : tmp0_elvis_lhs;
      result.n2(element, tmp$ret$0);
    }
    return result;
  }
  function getDeviceTasks($this, device) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = $this.taskControls;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.deployments.application.PrimaryDeviceDeployment.getDeviceTasks.<anonymous>' call
      if (element.destinationDeviceRoleName === device.roleName) {
        destination.q(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.t();
    while (tmp0_iterator_0.u()) {
      var item = tmp0_iterator_0.v();
      // Inline function 'dk.cachet.carp.deployments.application.PrimaryDeviceDeployment.getDeviceTasks.<anonymous>' call
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.collections.first' call
        var tmp0_iterator_1 = $this.tasks.t();
        while (tmp0_iterator_1.u()) {
          var element_0 = tmp0_iterator_1.v();
          // Inline function 'dk.cachet.carp.deployments.application.PrimaryDeviceDeployment.getDeviceTasks.<anonymous>.<anonymous>' call
          if (element_0.name === item.taskName) {
            tmp$ret$4 = element_0;
            break $l$block;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var tmp$ret$5 = tmp$ret$4;
      destination_0.q(tmp$ret$5);
    }
    return toSet(destination_0);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = Companion_getInstance_0().z1q(UnitSerializer_getInstance(), UnitSerializer_getInstance());
    var tmp_1 = Companion_getInstance_1().m16();
    var tmp_2 = new LinkedHashSetSerializer(Companion_getInstance().z1q(UnitSerializer_getInstance(), UnitSerializer_getInstance()));
    var tmp_3 = new LinkedHashMapSerializer(StringSerializer_getInstance(), Companion_getInstance_1().m16());
    var tmp_4 = getKClass(TaskConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    var tmp_5 = new LinkedHashSetSerializer(PolymorphicSerializer_init_$Create$(tmp_4, tmp$ret$2));
    var tmp_6 = IntSerializer_getInstance();
    var tmp_7 = getKClass(TriggerConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p2d_1 = [tmp_0, tmp_1, tmp_2, tmp_3, tmp_5, new LinkedHashMapSerializer(tmp_6, PolymorphicSerializer_init_$Create$(tmp_7, tmp$ret$5)), new LinkedHashSetSerializer($serializer_getInstance()), new LinkedHashSetSerializer($serializer_getInstance_0()), new ApplicationDataSerializer(), null];
  }
  protoOf(Companion_6).m16 = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_7;
  function Companion_getInstance_11() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.PrimaryDeviceDeployment', this, 10);
    tmp0_serialDesc.nt('deviceConfiguration', false);
    tmp0_serialDesc.nt('registration', false);
    tmp0_serialDesc.nt('connectedDevices', true);
    tmp0_serialDesc.nt('connectedDeviceRegistrations', true);
    tmp0_serialDesc.nt('tasks', true);
    tmp0_serialDesc.nt('triggers', true);
    tmp0_serialDesc.nt('taskControls', true);
    tmp0_serialDesc.nt('expectedParticipantData', true);
    tmp0_serialDesc.nt('applicationData', true);
    tmp0_serialDesc.nt('lastUpdatedOn', true);
    this.q2d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).pi = function () {
    return this.q2d_1;
  };
  protoOf($serializer_3).cu = function () {
    var tmp0_cached = Companion_getInstance_11().p2d_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1], tmp0_cached[2], tmp0_cached[3], tmp0_cached[4], tmp0_cached[5], tmp0_cached[6], tmp0_cached[7], get_nullable(tmp0_cached[8]), InstantIso8601Serializer_getInstance()];
  };
  protoOf($serializer_3).ri = function (decoder) {
    var tmp0_desc = this.q2d_1;
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
    var tmp14_input = decoder.xl(tmp0_desc);
    var tmp15_cached = Companion_getInstance_11().p2d_1;
    if (tmp14_input.om()) {
      tmp4_local0 = tmp14_input.jm(tmp0_desc, 0, tmp15_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.jm(tmp0_desc, 1, tmp15_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.jm(tmp0_desc, 2, tmp15_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.jm(tmp0_desc, 3, tmp15_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.jm(tmp0_desc, 4, tmp15_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.jm(tmp0_desc, 5, tmp15_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.jm(tmp0_desc, 6, tmp15_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.jm(tmp0_desc, 7, tmp15_cached[7], tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.lm(tmp0_desc, 8, tmp15_cached[8], tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.jm(tmp0_desc, 9, InstantIso8601Serializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.jm(tmp0_desc, 0, tmp15_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.jm(tmp0_desc, 1, tmp15_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.jm(tmp0_desc, 2, tmp15_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.jm(tmp0_desc, 3, tmp15_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.jm(tmp0_desc, 4, tmp15_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.jm(tmp0_desc, 5, tmp15_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.jm(tmp0_desc, 6, tmp15_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.jm(tmp0_desc, 7, tmp15_cached[7], tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.lm(tmp0_desc, 8, tmp15_cached[8], tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.jm(tmp0_desc, 9, InstantIso8601Serializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.yl(tmp0_desc);
    return PrimaryDeviceDeployment_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  protoOf($serializer_3).r2d = function (encoder, value) {
    var tmp0_desc = this.q2d_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().p2d_1;
    tmp1_output.pn(tmp0_desc, 0, tmp2_cached[0], value.deviceConfiguration);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.registration);
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !equals(value.connectedDevices, emptySet())) {
      tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.connectedDevices);
    }
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !equals(value.connectedDeviceRegistrations, emptyMap())) {
      tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.connectedDeviceRegistrations);
    }
    if (tmp1_output.vn(tmp0_desc, 4) ? true : !equals(value.tasks, emptySet())) {
      tmp1_output.pn(tmp0_desc, 4, tmp2_cached[4], value.tasks);
    }
    if (tmp1_output.vn(tmp0_desc, 5) ? true : !equals(value.triggers, emptyMap())) {
      tmp1_output.pn(tmp0_desc, 5, tmp2_cached[5], value.triggers);
    }
    if (tmp1_output.vn(tmp0_desc, 6) ? true : !equals(value.taskControls, emptySet())) {
      tmp1_output.pn(tmp0_desc, 6, tmp2_cached[6], value.taskControls);
    }
    if (tmp1_output.vn(tmp0_desc, 7) ? true : !equals(value.expectedParticipantData, emptySet())) {
      tmp1_output.pn(tmp0_desc, 7, tmp2_cached[7], value.expectedParticipantData);
    }
    if (tmp1_output.vn(tmp0_desc, 8) ? true : !(value.applicationData == null)) {
      tmp1_output.rn(tmp0_desc, 8, tmp2_cached[8], value.applicationData);
    }
    var tmp;
    if (tmp1_output.vn(tmp0_desc, 9)) {
      tmp = true;
    } else {
      var tmp_0;
      if (value.connectedDeviceRegistrations == null ? true : value.registration == null) {
        tmp_0 = System_instance.q13();
      } else {
        // Inline function 'kotlin.collections.maxOf' call
        var iterator = plus_0(value.connectedDeviceRegistrations.m2(), value.registration).t();
        if (!iterator.u())
          throw NoSuchElementException_init_$Create$_0();
        // Inline function 'dk.cachet.carp.deployments.application.$serializer.serialize.<anonymous>' call
        var maxValue = iterator.v().registrationCreatedOn;
        while (iterator.u()) {
          // Inline function 'dk.cachet.carp.deployments.application.$serializer.serialize.<anonymous>' call
          var v = iterator.v().registrationCreatedOn;
          if (compareTo(maxValue, v) < 0) {
            maxValue = v;
          }
        }
        tmp_0 = maxValue;
      }
      tmp = !value.lastUpdatedOn.equals(tmp_0);
    }
    if (tmp) {
      tmp1_output.pn(tmp0_desc, 9, InstantIso8601Serializer_getInstance(), value.lastUpdatedOn);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_3).qi = function (encoder, value) {
    return this.r2d(encoder, value instanceof PrimaryDeviceDeployment ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_6() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function PrimaryDeviceDeployment_init_$Init$(seen1, deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData, lastUpdatedOn, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_6().q2d_1);
    }
    $this.deviceConfiguration = deviceConfiguration;
    $this.registration = registration;
    if (0 === (seen1 & 4))
      $this.connectedDevices = emptySet();
    else
      $this.connectedDevices = connectedDevices;
    if (0 === (seen1 & 8))
      $this.connectedDeviceRegistrations = emptyMap();
    else
      $this.connectedDeviceRegistrations = connectedDeviceRegistrations;
    if (0 === (seen1 & 16))
      $this.tasks = emptySet();
    else
      $this.tasks = tasks;
    if (0 === (seen1 & 32))
      $this.triggers = emptyMap();
    else
      $this.triggers = triggers;
    if (0 === (seen1 & 64))
      $this.taskControls = emptySet();
    else
      $this.taskControls = taskControls;
    if (0 === (seen1 & 128))
      $this.expectedParticipantData = emptySet();
    else
      $this.expectedParticipantData = expectedParticipantData;
    if (0 === (seen1 & 256))
      $this.applicationData = null;
    else
      $this.applicationData = applicationData;
    hasNoConflicts($this.expectedParticipantData, true);
    if (0 === (seen1 & 512)) {
      var tmp = $this;
      var tmp_0;
      if ($this.connectedDeviceRegistrations == null ? true : $this.registration == null) {
        tmp_0 = System_instance.q13();
      } else {
        // Inline function 'kotlin.collections.maxOf' call
        var iterator = plus_0($this.connectedDeviceRegistrations.m2(), $this.registration).t();
        if (!iterator.u())
          throw NoSuchElementException_init_$Create$_0();
        // Inline function 'dk.cachet.carp.deployments.application.PrimaryDeviceDeployment.<init>.<anonymous>' call
        var maxValue = iterator.v().registrationCreatedOn;
        while (iterator.u()) {
          // Inline function 'dk.cachet.carp.deployments.application.PrimaryDeviceDeployment.<init>.<anonymous>' call
          var v = iterator.v().registrationCreatedOn;
          if (compareTo(maxValue, v) < 0) {
            maxValue = v;
          }
        }
        tmp_0 = maxValue;
      }
      tmp.lastUpdatedOn = tmp_0;
    } else
      $this.lastUpdatedOn = lastUpdatedOn;
    return $this;
  }
  function PrimaryDeviceDeployment_init_$Create$(seen1, deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData, lastUpdatedOn, serializationConstructorMarker) {
    return PrimaryDeviceDeployment_init_$Init$(seen1, deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData, lastUpdatedOn, serializationConstructorMarker, objectCreate(protoOf(PrimaryDeviceDeployment)));
  }
  function PrimaryDeviceDeployment(deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData) {
    Companion_getInstance_11();
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
    var tmp_0;
    if (this.connectedDeviceRegistrations == null ? true : this.registration == null) {
      tmp_0 = System_instance.q13();
    } else {
      // Inline function 'kotlin.collections.maxOf' call
      var iterator = plus_0(this.connectedDeviceRegistrations.m2(), this.registration).t();
      if (!iterator.u())
        throw NoSuchElementException_init_$Create$_0();
      // Inline function 'dk.cachet.carp.deployments.application.PrimaryDeviceDeployment.lastUpdatedOn.<anonymous>' call
      var maxValue = iterator.v().registrationCreatedOn;
      while (iterator.u()) {
        // Inline function 'dk.cachet.carp.deployments.application.PrimaryDeviceDeployment.lastUpdatedOn.<anonymous>' call
        var v = iterator.v().registrationCreatedOn;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      tmp_0 = maxValue;
    }
    tmp.lastUpdatedOn = tmp_0;
  }
  protoOf(PrimaryDeviceDeployment).s2d = function () {
    return this.deviceConfiguration;
  };
  protoOf(PrimaryDeviceDeployment).n2d = function () {
    return this.registration;
  };
  protoOf(PrimaryDeviceDeployment).r24 = function () {
    return this.connectedDevices;
  };
  protoOf(PrimaryDeviceDeployment).t2d = function () {
    return this.connectedDeviceRegistrations;
  };
  protoOf(PrimaryDeviceDeployment).c24 = function () {
    return this.tasks;
  };
  protoOf(PrimaryDeviceDeployment).q23 = function () {
    return this.triggers;
  };
  protoOf(PrimaryDeviceDeployment).t24 = function () {
    return this.taskControls;
  };
  protoOf(PrimaryDeviceDeployment).k24 = function () {
    return this.expectedParticipantData;
  };
  protoOf(PrimaryDeviceDeployment).v24 = function () {
    return this.applicationData;
  };
  protoOf(PrimaryDeviceDeployment).u2d = function () {
    return this.lastUpdatedOn;
  };
  protoOf(PrimaryDeviceDeployment).getRuntimeDeviceInfo = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.connectedDevices;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.t();
    while (tmp0_iterator.u()) {
      var item = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.deployments.application.PrimaryDeviceDeployment.getRuntimeDeviceInfo.<anonymous>' call
      var tmp$ret$0 = new RuntimeDeviceInfo(item, true, this.connectedDeviceRegistrations.x2(item.roleName), getDefaultSamplingConfigurations(this, item), getDeviceTasks(this, item));
      destination.q(tmp$ret$0);
    }
    return plus_0(destination, new RuntimeDeviceInfo(this.deviceConfiguration, false, this.registration, getDefaultSamplingConfigurations(this, this.deviceConfiguration), getDeviceTasks(this, this.deviceConfiguration)));
  };
  protoOf(PrimaryDeviceDeployment).od = function () {
    return this.deviceConfiguration;
  };
  protoOf(PrimaryDeviceDeployment).pd = function () {
    return this.registration;
  };
  protoOf(PrimaryDeviceDeployment).r1g = function () {
    return this.connectedDevices;
  };
  protoOf(PrimaryDeviceDeployment).q1h = function () {
    return this.connectedDeviceRegistrations;
  };
  protoOf(PrimaryDeviceDeployment).r1m = function () {
    return this.tasks;
  };
  protoOf(PrimaryDeviceDeployment).l1p = function () {
    return this.triggers;
  };
  protoOf(PrimaryDeviceDeployment).x24 = function () {
    return this.taskControls;
  };
  protoOf(PrimaryDeviceDeployment).y24 = function () {
    return this.expectedParticipantData;
  };
  protoOf(PrimaryDeviceDeployment).z24 = function () {
    return this.applicationData;
  };
  protoOf(PrimaryDeviceDeployment).v2d = function (deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData) {
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
    return this.v2d(deviceConfiguration, registration, connectedDevices, connectedDeviceRegistrations, tasks, triggers, taskControls, expectedParticipantData, applicationData);
  };
  protoOf(PrimaryDeviceDeployment).toString = function () {
    return 'PrimaryDeviceDeployment(deviceConfiguration=' + this.deviceConfiguration + ', registration=' + this.registration + ', connectedDevices=' + this.connectedDevices + ', connectedDeviceRegistrations=' + this.connectedDeviceRegistrations + ', tasks=' + this.tasks + ', triggers=' + this.triggers + ', taskControls=' + this.taskControls + ', expectedParticipantData=' + this.expectedParticipantData + ', applicationData=' + this.applicationData + ')';
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
    result = imul(result, 31) + (this.applicationData == null ? 0 : getStringHashCode(this.applicationData)) | 0;
    return result;
  };
  protoOf(PrimaryDeviceDeployment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimaryDeviceDeployment))
      return false;
    var tmp0_other_with_cast = other instanceof PrimaryDeviceDeployment ? other : THROW_CCE();
    if (!equals(this.deviceConfiguration, tmp0_other_with_cast.deviceConfiguration))
      return false;
    if (!equals(this.registration, tmp0_other_with_cast.registration))
      return false;
    if (!equals(this.connectedDevices, tmp0_other_with_cast.connectedDevices))
      return false;
    if (!equals(this.connectedDeviceRegistrations, tmp0_other_with_cast.connectedDeviceRegistrations))
      return false;
    if (!equals(this.tasks, tmp0_other_with_cast.tasks))
      return false;
    if (!equals(this.triggers, tmp0_other_with_cast.triggers))
      return false;
    if (!equals(this.taskControls, tmp0_other_with_cast.taskControls))
      return false;
    if (!equals(this.expectedParticipantData, tmp0_other_with_cast.expectedParticipantData))
      return false;
    if (!(this.applicationData == tmp0_other_with_cast.applicationData))
      return false;
    return true;
  };
  function Companion_7() {
    Companion_instance_8 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w2d_1 = [null, null, new ArrayListSerializer(Companion_getInstance_9().m16()), new ArrayListSerializer($serializer_getInstance_16()), null];
  }
  protoOf(Companion_7).m16 = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_8;
  function Companion_getInstance_12() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.StudyDeploymentStatus.Invited', this, 5);
    tmp0_serialDesc.nt('createdOn', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('deviceStatusList', false);
    tmp0_serialDesc.nt('participantStatusList', false);
    tmp0_serialDesc.nt('startedOn', false);
    this.x2d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).pi = function () {
    return this.x2d_1;
  };
  protoOf($serializer_4).cu = function () {
    var tmp0_cached = Companion_getInstance_12().w2d_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantIso8601Serializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2], tmp0_cached[3], get_nullable(InstantIso8601Serializer_getInstance())];
  };
  protoOf($serializer_4).ri = function (decoder) {
    var tmp0_desc = this.x2d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xl(tmp0_desc);
    var tmp10_cached = Companion_getInstance_12().w2d_1;
    if (tmp9_input.om()) {
      tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jm(tmp0_desc, 2, tmp10_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jm(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.lm(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.jm(tmp0_desc, 2, tmp10_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jm(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.lm(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yl(tmp0_desc);
    return Invited_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_4).y2d = function (encoder, value) {
    var tmp0_desc = this.x2d_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().w2d_1;
    tmp1_output.pn(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), value.z2d_1);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.a2e_1);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.b2e_1);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.c2e_1);
    tmp1_output.rn(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), value.d2e_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_4).qi = function (encoder, value) {
    return this.y2d(encoder, value instanceof Invited ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_7() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function Invited_init_$Init$(seen1, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_7().x2d_1);
    }
    StudyDeploymentStatus_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.z2d_1 = createdOn;
    $this.a2e_1 = studyDeploymentId;
    $this.b2e_1 = deviceStatusList;
    $this.c2e_1 = participantStatusList;
    $this.d2e_1 = startedOn;
    return $this;
  }
  function Invited_init_$Create$(seen1, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker) {
    return Invited_init_$Init$(seen1, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker, objectCreate(protoOf(Invited)));
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e2e_1 = [null, null, new ArrayListSerializer(Companion_getInstance_9().m16()), new ArrayListSerializer($serializer_getInstance_16()), null];
  }
  protoOf(Companion_8).m16 = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_9;
  function Companion_getInstance_13() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.StudyDeploymentStatus.DeployingDevices', this, 5);
    tmp0_serialDesc.nt('createdOn', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('deviceStatusList', false);
    tmp0_serialDesc.nt('participantStatusList', false);
    tmp0_serialDesc.nt('startedOn', false);
    this.f2e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).pi = function () {
    return this.f2e_1;
  };
  protoOf($serializer_5).cu = function () {
    var tmp0_cached = Companion_getInstance_13().e2e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantIso8601Serializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2], tmp0_cached[3], get_nullable(InstantIso8601Serializer_getInstance())];
  };
  protoOf($serializer_5).ri = function (decoder) {
    var tmp0_desc = this.f2e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xl(tmp0_desc);
    var tmp10_cached = Companion_getInstance_13().e2e_1;
    if (tmp9_input.om()) {
      tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jm(tmp0_desc, 2, tmp10_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jm(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.lm(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.jm(tmp0_desc, 2, tmp10_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jm(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.lm(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yl(tmp0_desc);
    return DeployingDevices_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_5).g2e = function (encoder, value) {
    var tmp0_desc = this.f2e_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().e2e_1;
    tmp1_output.pn(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), value.h2e_1);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.i2e_1);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.j2e_1);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.k2e_1);
    tmp1_output.rn(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), value.l2e_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_5).qi = function (encoder, value) {
    return this.g2e(encoder, value instanceof DeployingDevices ? value : THROW_CCE());
  };
  var $serializer_instance_5;
  function $serializer_getInstance_8() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function DeployingDevices_init_$Init$(seen1, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_8().f2e_1);
    }
    StudyDeploymentStatus_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.h2e_1 = createdOn;
    $this.i2e_1 = studyDeploymentId;
    $this.j2e_1 = deviceStatusList;
    $this.k2e_1 = participantStatusList;
    $this.l2e_1 = startedOn;
    return $this;
  }
  function DeployingDevices_init_$Create$(seen1, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker) {
    return DeployingDevices_init_$Init$(seen1, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker, objectCreate(protoOf(DeployingDevices)));
  }
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m2e_1 = [null, null, new ArrayListSerializer(Companion_getInstance_9().m16()), new ArrayListSerializer($serializer_getInstance_16()), null];
  }
  protoOf(Companion_9).m16 = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_10;
  function Companion_getInstance_14() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.StudyDeploymentStatus.Running', this, 5);
    tmp0_serialDesc.nt('createdOn', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('deviceStatusList', false);
    tmp0_serialDesc.nt('participantStatusList', false);
    tmp0_serialDesc.nt('startedOn', false);
    this.n2e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).pi = function () {
    return this.n2e_1;
  };
  protoOf($serializer_6).cu = function () {
    var tmp0_cached = Companion_getInstance_14().m2e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantIso8601Serializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2], tmp0_cached[3], InstantIso8601Serializer_getInstance()];
  };
  protoOf($serializer_6).ri = function (decoder) {
    var tmp0_desc = this.n2e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xl(tmp0_desc);
    var tmp10_cached = Companion_getInstance_14().m2e_1;
    if (tmp9_input.om()) {
      tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jm(tmp0_desc, 2, tmp10_cached[2], tmp6_local2);
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
            tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.jm(tmp0_desc, 2, tmp10_cached[2], tmp6_local2);
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
  protoOf($serializer_6).o2e = function (encoder, value) {
    var tmp0_desc = this.n2e_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().m2e_1;
    tmp1_output.pn(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), value.p2e_1);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.q2e_1);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.r2e_1);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.s2e_1);
    tmp1_output.pn(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), value.t2e_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_6).qi = function (encoder, value) {
    return this.o2e(encoder, value instanceof Running ? value : THROW_CCE());
  };
  var $serializer_instance_6;
  function $serializer_getInstance_9() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function Running_init_$Init$(seen1, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_9().n2e_1);
    }
    StudyDeploymentStatus_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.p2e_1 = createdOn;
    $this.q2e_1 = studyDeploymentId;
    $this.r2e_1 = deviceStatusList;
    $this.s2e_1 = participantStatusList;
    $this.t2e_1 = startedOn;
    return $this;
  }
  function Running_init_$Create$(seen1, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker) {
    return Running_init_$Init$(seen1, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, serializationConstructorMarker, objectCreate(protoOf(Running)));
  }
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.u2e_1 = [null, null, new ArrayListSerializer(Companion_getInstance_9().m16()), new ArrayListSerializer($serializer_getInstance_16()), null, null];
  }
  protoOf(Companion_10).m16 = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_11;
  function Companion_getInstance_15() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.StudyDeploymentStatus.Stopped', this, 6);
    tmp0_serialDesc.nt('createdOn', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('deviceStatusList', false);
    tmp0_serialDesc.nt('participantStatusList', false);
    tmp0_serialDesc.nt('startedOn', false);
    tmp0_serialDesc.nt('stoppedOn', false);
    this.v2e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).pi = function () {
    return this.v2e_1;
  };
  protoOf($serializer_7).cu = function () {
    var tmp0_cached = Companion_getInstance_15().u2e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantIso8601Serializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2], tmp0_cached[3], get_nullable(InstantIso8601Serializer_getInstance()), InstantIso8601Serializer_getInstance()];
  };
  protoOf($serializer_7).ri = function (decoder) {
    var tmp0_desc = this.v2e_1;
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
    var tmp11_cached = Companion_getInstance_15().u2e_1;
    if (tmp10_input.om()) {
      tmp4_local0 = tmp10_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.jm(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
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
            tmp4_local0 = tmp10_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.jm(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
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
  protoOf($serializer_7).w2e = function (encoder, value) {
    var tmp0_desc = this.v2e_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().u2e_1;
    tmp1_output.pn(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), value.x2e_1);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.y2e_1);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.z2e_1);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.a2f_1);
    tmp1_output.rn(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), value.b2f_1);
    tmp1_output.pn(tmp0_desc, 5, InstantIso8601Serializer_getInstance(), value.stoppedOn);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_7).qi = function (encoder, value) {
    return this.w2e(encoder, value instanceof Stopped ? value : THROW_CCE());
  };
  var $serializer_instance_7;
  function $serializer_getInstance_10() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function Stopped_init_$Init$(seen1, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen1))) {
      throwMissingFieldException(seen1, 63, $serializer_getInstance_10().v2e_1);
    }
    StudyDeploymentStatus_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.x2e_1 = createdOn;
    $this.y2e_1 = studyDeploymentId;
    $this.z2e_1 = deviceStatusList;
    $this.a2f_1 = participantStatusList;
    $this.b2f_1 = startedOn;
    $this.stoppedOn = stoppedOn;
    return $this;
  }
  function Stopped_init_$Create$(seen1, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn, serializationConstructorMarker) {
    return Stopped_init_$Init$(seen1, createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn, serializationConstructorMarker, objectCreate(protoOf(Stopped)));
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.c2f_1.r2();
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
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.deployments.application.StudyDeploymentStatus', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Invited(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) {
    Companion_getInstance_12();
    StudyDeploymentStatus.call(this);
    this.z2d_1 = createdOn;
    this.a2e_1 = studyDeploymentId;
    this.b2e_1 = deviceStatusList;
    this.c2e_1 = participantStatusList;
    this.d2e_1 = startedOn;
  }
  protoOf(Invited).a1z = function () {
    return this.z2d_1;
  };
  protoOf(Invited).s28 = function () {
    return this.a2e_1;
  };
  protoOf(Invited).d2f = function () {
    return this.b2e_1;
  };
  protoOf(Invited).e2f = function () {
    return this.c2e_1;
  };
  protoOf(Invited).f2f = function () {
    return this.d2e_1;
  };
  protoOf(Invited).od = function () {
    return this.z2d_1;
  };
  protoOf(Invited).pd = function () {
    return this.a2e_1;
  };
  protoOf(Invited).r1g = function () {
    return this.b2e_1;
  };
  protoOf(Invited).q1h = function () {
    return this.c2e_1;
  };
  protoOf(Invited).r1m = function () {
    return this.d2e_1;
  };
  protoOf(Invited).g2f = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) {
    return new Invited(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn);
  };
  protoOf(Invited).copy = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, $super) {
    createdOn = createdOn === VOID ? this.z2d_1 : createdOn;
    studyDeploymentId = studyDeploymentId === VOID ? this.a2e_1 : studyDeploymentId;
    deviceStatusList = deviceStatusList === VOID ? this.b2e_1 : deviceStatusList;
    participantStatusList = participantStatusList === VOID ? this.c2e_1 : participantStatusList;
    startedOn = startedOn === VOID ? this.d2e_1 : startedOn;
    return this.g2f(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn);
  };
  protoOf(Invited).toString = function () {
    return 'Invited(createdOn=' + this.z2d_1 + ', studyDeploymentId=' + this.a2e_1 + ', deviceStatusList=' + this.b2e_1 + ', participantStatusList=' + this.c2e_1 + ', startedOn=' + this.d2e_1 + ')';
  };
  protoOf(Invited).hashCode = function () {
    var result = this.z2d_1.hashCode();
    result = imul(result, 31) + this.a2e_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.b2e_1) | 0;
    result = imul(result, 31) + hashCode(this.c2e_1) | 0;
    result = imul(result, 31) + (this.d2e_1 == null ? 0 : this.d2e_1.hashCode()) | 0;
    return result;
  };
  protoOf(Invited).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Invited))
      return false;
    var tmp0_other_with_cast = other instanceof Invited ? other : THROW_CCE();
    if (!this.z2d_1.equals(tmp0_other_with_cast.z2d_1))
      return false;
    if (!this.a2e_1.equals(tmp0_other_with_cast.a2e_1))
      return false;
    if (!equals(this.b2e_1, tmp0_other_with_cast.b2e_1))
      return false;
    if (!equals(this.c2e_1, tmp0_other_with_cast.c2e_1))
      return false;
    if (!equals(this.d2e_1, tmp0_other_with_cast.d2e_1))
      return false;
    return true;
  };
  function DeployingDevices(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) {
    Companion_getInstance_13();
    StudyDeploymentStatus.call(this);
    this.h2e_1 = createdOn;
    this.i2e_1 = studyDeploymentId;
    this.j2e_1 = deviceStatusList;
    this.k2e_1 = participantStatusList;
    this.l2e_1 = startedOn;
  }
  protoOf(DeployingDevices).a1z = function () {
    return this.h2e_1;
  };
  protoOf(DeployingDevices).s28 = function () {
    return this.i2e_1;
  };
  protoOf(DeployingDevices).d2f = function () {
    return this.j2e_1;
  };
  protoOf(DeployingDevices).e2f = function () {
    return this.k2e_1;
  };
  protoOf(DeployingDevices).f2f = function () {
    return this.l2e_1;
  };
  protoOf(DeployingDevices).od = function () {
    return this.h2e_1;
  };
  protoOf(DeployingDevices).pd = function () {
    return this.i2e_1;
  };
  protoOf(DeployingDevices).r1g = function () {
    return this.j2e_1;
  };
  protoOf(DeployingDevices).q1h = function () {
    return this.k2e_1;
  };
  protoOf(DeployingDevices).r1m = function () {
    return this.l2e_1;
  };
  protoOf(DeployingDevices).g2f = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) {
    return new DeployingDevices(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn);
  };
  protoOf(DeployingDevices).copy = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, $super) {
    createdOn = createdOn === VOID ? this.h2e_1 : createdOn;
    studyDeploymentId = studyDeploymentId === VOID ? this.i2e_1 : studyDeploymentId;
    deviceStatusList = deviceStatusList === VOID ? this.j2e_1 : deviceStatusList;
    participantStatusList = participantStatusList === VOID ? this.k2e_1 : participantStatusList;
    startedOn = startedOn === VOID ? this.l2e_1 : startedOn;
    return this.g2f(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn);
  };
  protoOf(DeployingDevices).toString = function () {
    return 'DeployingDevices(createdOn=' + this.h2e_1 + ', studyDeploymentId=' + this.i2e_1 + ', deviceStatusList=' + this.j2e_1 + ', participantStatusList=' + this.k2e_1 + ', startedOn=' + this.l2e_1 + ')';
  };
  protoOf(DeployingDevices).hashCode = function () {
    var result = this.h2e_1.hashCode();
    result = imul(result, 31) + this.i2e_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.j2e_1) | 0;
    result = imul(result, 31) + hashCode(this.k2e_1) | 0;
    result = imul(result, 31) + (this.l2e_1 == null ? 0 : this.l2e_1.hashCode()) | 0;
    return result;
  };
  protoOf(DeployingDevices).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeployingDevices))
      return false;
    var tmp0_other_with_cast = other instanceof DeployingDevices ? other : THROW_CCE();
    if (!this.h2e_1.equals(tmp0_other_with_cast.h2e_1))
      return false;
    if (!this.i2e_1.equals(tmp0_other_with_cast.i2e_1))
      return false;
    if (!equals(this.j2e_1, tmp0_other_with_cast.j2e_1))
      return false;
    if (!equals(this.k2e_1, tmp0_other_with_cast.k2e_1))
      return false;
    if (!equals(this.l2e_1, tmp0_other_with_cast.l2e_1))
      return false;
    return true;
  };
  function Running(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) {
    Companion_getInstance_14();
    StudyDeploymentStatus.call(this);
    this.p2e_1 = createdOn;
    this.q2e_1 = studyDeploymentId;
    this.r2e_1 = deviceStatusList;
    this.s2e_1 = participantStatusList;
    this.t2e_1 = startedOn;
  }
  protoOf(Running).a1z = function () {
    return this.p2e_1;
  };
  protoOf(Running).s28 = function () {
    return this.q2e_1;
  };
  protoOf(Running).d2f = function () {
    return this.r2e_1;
  };
  protoOf(Running).e2f = function () {
    return this.s2e_1;
  };
  protoOf(Running).f2f = function () {
    return this.t2e_1;
  };
  protoOf(Running).od = function () {
    return this.p2e_1;
  };
  protoOf(Running).pd = function () {
    return this.q2e_1;
  };
  protoOf(Running).r1g = function () {
    return this.r2e_1;
  };
  protoOf(Running).q1h = function () {
    return this.s2e_1;
  };
  protoOf(Running).r1m = function () {
    return this.t2e_1;
  };
  protoOf(Running).h2f = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn) {
    return new Running(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn);
  };
  protoOf(Running).copy = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, $super) {
    createdOn = createdOn === VOID ? this.p2e_1 : createdOn;
    studyDeploymentId = studyDeploymentId === VOID ? this.q2e_1 : studyDeploymentId;
    deviceStatusList = deviceStatusList === VOID ? this.r2e_1 : deviceStatusList;
    participantStatusList = participantStatusList === VOID ? this.s2e_1 : participantStatusList;
    startedOn = startedOn === VOID ? this.t2e_1 : startedOn;
    return this.h2f(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn);
  };
  protoOf(Running).toString = function () {
    return 'Running(createdOn=' + this.p2e_1 + ', studyDeploymentId=' + this.q2e_1 + ', deviceStatusList=' + this.r2e_1 + ', participantStatusList=' + this.s2e_1 + ', startedOn=' + this.t2e_1 + ')';
  };
  protoOf(Running).hashCode = function () {
    var result = this.p2e_1.hashCode();
    result = imul(result, 31) + this.q2e_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.r2e_1) | 0;
    result = imul(result, 31) + hashCode(this.s2e_1) | 0;
    result = imul(result, 31) + this.t2e_1.hashCode() | 0;
    return result;
  };
  protoOf(Running).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Running))
      return false;
    var tmp0_other_with_cast = other instanceof Running ? other : THROW_CCE();
    if (!this.p2e_1.equals(tmp0_other_with_cast.p2e_1))
      return false;
    if (!this.q2e_1.equals(tmp0_other_with_cast.q2e_1))
      return false;
    if (!equals(this.r2e_1, tmp0_other_with_cast.r2e_1))
      return false;
    if (!equals(this.s2e_1, tmp0_other_with_cast.s2e_1))
      return false;
    if (!this.t2e_1.equals(tmp0_other_with_cast.t2e_1))
      return false;
    return true;
  };
  function Stopped(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn) {
    Companion_getInstance_15();
    StudyDeploymentStatus.call(this);
    this.x2e_1 = createdOn;
    this.y2e_1 = studyDeploymentId;
    this.z2e_1 = deviceStatusList;
    this.a2f_1 = participantStatusList;
    this.b2f_1 = startedOn;
    this.stoppedOn = stoppedOn;
  }
  protoOf(Stopped).a1z = function () {
    return this.x2e_1;
  };
  protoOf(Stopped).s28 = function () {
    return this.y2e_1;
  };
  protoOf(Stopped).d2f = function () {
    return this.z2e_1;
  };
  protoOf(Stopped).e2f = function () {
    return this.a2f_1;
  };
  protoOf(Stopped).f2f = function () {
    return this.b2f_1;
  };
  protoOf(Stopped).i2f = function () {
    return this.stoppedOn;
  };
  protoOf(Stopped).od = function () {
    return this.x2e_1;
  };
  protoOf(Stopped).pd = function () {
    return this.y2e_1;
  };
  protoOf(Stopped).r1g = function () {
    return this.z2e_1;
  };
  protoOf(Stopped).q1h = function () {
    return this.a2f_1;
  };
  protoOf(Stopped).r1m = function () {
    return this.b2f_1;
  };
  protoOf(Stopped).l1p = function () {
    return this.stoppedOn;
  };
  protoOf(Stopped).j2f = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn) {
    return new Stopped(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn);
  };
  protoOf(Stopped).copy = function (createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn, $super) {
    createdOn = createdOn === VOID ? this.x2e_1 : createdOn;
    studyDeploymentId = studyDeploymentId === VOID ? this.y2e_1 : studyDeploymentId;
    deviceStatusList = deviceStatusList === VOID ? this.z2e_1 : deviceStatusList;
    participantStatusList = participantStatusList === VOID ? this.a2f_1 : participantStatusList;
    startedOn = startedOn === VOID ? this.b2f_1 : startedOn;
    stoppedOn = stoppedOn === VOID ? this.stoppedOn : stoppedOn;
    return this.j2f(createdOn, studyDeploymentId, deviceStatusList, participantStatusList, startedOn, stoppedOn);
  };
  protoOf(Stopped).toString = function () {
    return 'Stopped(createdOn=' + this.x2e_1 + ', studyDeploymentId=' + this.y2e_1 + ', deviceStatusList=' + this.z2e_1 + ', participantStatusList=' + this.a2f_1 + ', startedOn=' + this.b2f_1 + ', stoppedOn=' + this.stoppedOn + ')';
  };
  protoOf(Stopped).hashCode = function () {
    var result = this.x2e_1.hashCode();
    result = imul(result, 31) + this.y2e_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.z2e_1) | 0;
    result = imul(result, 31) + hashCode(this.a2f_1) | 0;
    result = imul(result, 31) + (this.b2f_1 == null ? 0 : this.b2f_1.hashCode()) | 0;
    result = imul(result, 31) + this.stoppedOn.hashCode() | 0;
    return result;
  };
  protoOf(Stopped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stopped))
      return false;
    var tmp0_other_with_cast = other instanceof Stopped ? other : THROW_CCE();
    if (!this.x2e_1.equals(tmp0_other_with_cast.x2e_1))
      return false;
    if (!this.y2e_1.equals(tmp0_other_with_cast.y2e_1))
      return false;
    if (!equals(this.z2e_1, tmp0_other_with_cast.z2e_1))
      return false;
    if (!equals(this.a2f_1, tmp0_other_with_cast.a2f_1))
      return false;
    if (!equals(this.b2f_1, tmp0_other_with_cast.b2f_1))
      return false;
    if (!this.stoppedOn.equals(tmp0_other_with_cast.stoppedOn))
      return false;
    return true;
  };
  function Companion_11() {
    Companion_instance_12 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.c2f_1 = lazy(tmp_0, StudyDeploymentStatus$Companion$_anonymous__3kl6wh);
  }
  protoOf(Companion_11).m16 = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_11).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_12;
  function Companion_getInstance_16() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function StudyDeploymentStatus_init_$Init$(seen1, serializationConstructorMarker, $this) {
    return $this;
  }
  function StudyDeploymentStatus() {
    Companion_getInstance_16();
  }
  protoOf(StudyDeploymentStatus).getRemainingDevicesToRegister = function () {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = this.deviceStatusList;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      if (element instanceof Unregistered) {
        destination.q(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.t();
    while (tmp0_iterator_0.u()) {
      var item = tmp0_iterator_0.v();
      // Inline function 'dk.cachet.carp.deployments.application.StudyDeploymentStatus.getRemainingDevicesToRegister.<anonymous>' call
      var tmp$ret$2 = item.e2c_1;
      destination_0.q(tmp$ret$2);
    }
    return toSet(destination_0);
  };
  protoOf(StudyDeploymentStatus).getRemainingDevicesReadyToDeploy = function () {
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = this.deviceStatusList;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.deployments.application.StudyDeploymentStatus.getRemainingDevicesReadyToDeploy.<anonymous>' call
      var tmp;
      if (element instanceof NotDeployed) {
        tmp = element.canObtainDeviceDeployment;
      } else {
        tmp = false;
      }
      if (tmp) {
        destination.q(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.t();
    while (tmp0_iterator_0.u()) {
      var item = tmp0_iterator_0.v();
      // Inline function 'dk.cachet.carp.deployments.application.StudyDeploymentStatus.getRemainingDevicesReadyToDeploy.<anonymous>' call
      var tmp$ret$3 = item.device;
      destination_0.q(tmp$ret$3);
    }
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = destination_0.t();
    while (tmp0_iterator_1.u()) {
      var element_0 = tmp0_iterator_1.v();
      if (element_0 instanceof PrimaryDeviceConfiguration) {
        destination_1.q(element_0);
      }
    }
    return toSet(destination_1);
  };
  protoOf(StudyDeploymentStatus).getDeviceStatus = function (device) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.deviceStatusList.t();
      while (tmp0_iterator.u()) {
        var element = tmp0_iterator.v();
        // Inline function 'dk.cachet.carp.deployments.application.StudyDeploymentStatus.getDeviceStatus.<anonymous>' call
        if (equals(element.device, device)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('The given device was not found in this study deployment.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(StudyDeploymentStatus).getDeviceStatusByRoleName = function (deviceRoleName) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.deviceStatusList.t();
      while (tmp0_iterator.u()) {
        var element = tmp0_iterator.v();
        // Inline function 'dk.cachet.carp.deployments.application.StudyDeploymentStatus.getDeviceStatus.<anonymous>' call
        if (element.device.roleName === deviceRoleName) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('The device with the given role name was not found in this study deployment.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function throwIfInvalidInvitations(_this__u8e3s4, invitations) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!invitations.y()) {
      // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
      var message = 'No participants invited.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(invitations, 10));
    var tmp0_iterator = invitations.t();
    while (tmp0_iterator.u()) {
      var item = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
      var tmp$ret$2 = item.assignedRoles;
      destination.q(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = destination.t();
    while (tmp0_iterator_0.u()) {
      var element = tmp0_iterator_0.v();
      if (element instanceof Roles) {
        destination_0.q(element);
      }
    }
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = destination_0.t();
    while (tmp0_iterator_1.u()) {
      var element_0 = tmp0_iterator_1.v();
      // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
      var list = element_0.roleNames;
      addAll(destination_1, list);
    }
    var assignedParticipantRoles = toSet(destination_1);
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.participantRoles;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator_2 = this_0.t();
    while (tmp0_iterator_2.u()) {
      var item_0 = tmp0_iterator_2.v();
      // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
      var tmp$ret$10 = item_0.role;
      destination_2.q(tmp$ret$10);
    }
    var availableRoles = toSet(destination_2);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_3 = assignedParticipantRoles.t();
    while (tmp0_iterator_3.u()) {
      var element_1 = tmp0_iterator_3.v();
      // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!availableRoles.p(element_1)) {
        // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>.<anonymous>' call
        var message_0 = 'The assigned participant role "' + element_1 + '" is not part of the study protocol.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    var tmp$ret$14;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(invitations, Collection)) {
        tmp = invitations.y();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$14 = false;
        break $l$block_0;
      }
      var tmp0_iterator_4 = invitations.t();
      while (tmp0_iterator_4.u()) {
        var element_2 = tmp0_iterator_4.v();
        // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
        var tmp_0 = element_2.assignedRoles;
        if (tmp_0 instanceof All) {
          tmp$ret$14 = true;
          break $l$block_0;
        }
      }
      tmp$ret$14 = false;
    }
    var allRolesAssigned = tmp$ret$14;
    if (!allRolesAssigned) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_1 = _this__u8e3s4.participantRoles;
      var destination_3 = ArrayList_init_$Create$();
      var tmp0_iterator_5 = this_1.t();
      while (tmp0_iterator_5.u()) {
        var element_3 = tmp0_iterator_5.v();
        // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
        if (!element_3.isOptional) {
          destination_3.q(element_3);
        }
      }
      // Inline function 'kotlin.collections.mapTo' call
      var destination_4 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_3, 10));
      var tmp0_iterator_6 = destination_3.t();
      while (tmp0_iterator_6.u()) {
        var item_1 = tmp0_iterator_6.v();
        // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
        var tmp$ret$19 = item_1.role;
        destination_4.q(tmp$ret$19);
      }
      var requiredRoles = toSet(destination_4);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!assignedParticipantRoles.x(requiredRoles)) {
        // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
        var message_1 = 'Not all necessary participant roles have been assigned a participant.';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_2 = _this__u8e3s4.primaryDevices;
      var destination_5 = ArrayList_init_$Create$();
      var tmp0_iterator_7 = this_2.t();
      while (tmp0_iterator_7.u()) {
        var element_4 = tmp0_iterator_7.v();
        // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
        if (!element_4.isOptional) {
          destination_5.q(element_4);
        }
      }
      // Inline function 'kotlin.collections.mapTo' call
      var destination_6 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_5, 10));
      var tmp0_iterator_8 = destination_5.t();
      while (tmp0_iterator_8.u()) {
        var item_2 = tmp0_iterator_8.v();
        // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
        var tmp$ret$26 = item_2.roleName;
        destination_6.q(tmp$ret$26);
      }
      var requiredPrimaryDeviceRoleNames = destination_6;
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination_7 = ArrayList_init_$Create$();
      var tmp0_iterator_9 = invitations.t();
      while (tmp0_iterator_9.u()) {
        var element_5 = tmp0_iterator_9.v();
        // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
        var list_0 = getAssignedDeviceRoleNames(_this__u8e3s4, element_5.assignedRoles);
        addAll(destination_7, list_0);
      }
      var assignedPrimaryDeviceRoleNames = toSet(destination_7);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!assignedPrimaryDeviceRoleNames.x(requiredPrimaryDeviceRoleNames)) {
        // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidInvitations.<anonymous>' call
        var message_2 = 'Not all necessary devices required for this study have been assigned to a participant.';
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
  }
  function throwIfInvalidPreregistrations(_this__u8e3s4, connectedDevicePreregistrations) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = connectedDevicePreregistrations.p2().t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidPreregistrations.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var roleName = element.q2();
      // Inline function 'kotlin.collections.component2' call
      var registration = element.r2();
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = _this__u8e3s4.connectedDevices.t();
        while (tmp0_iterator_0.u()) {
          var element_0 = tmp0_iterator_0.v();
          // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidPreregistrations.<anonymous>.<anonymous>' call
          if (element_0.roleName === roleName) {
            tmp$ret$4 = element_0;
            break $l$block;
          }
        }
        tmp$ret$4 = null;
      }
      var connectedDevice = tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.requireNotNull' call
        // Inline function 'kotlin.contracts.contract' call
        if (connectedDevice == null) {
          // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidPreregistrations.<anonymous>.<anonymous>' call
          var message = 'The device with role name "' + roleName + '" for which a preregistration was defined ' + "isn't a connected device in the study protocol.";
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          break $l$block_0;
        }
      }
      var isInvalidRegistration = connectedDevice.isDefinitelyInvalidRegistration(registration);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isInvalidRegistration) {
        // Inline function 'dk.cachet.carp.deployments.application.throwIfInvalidPreregistrations.<anonymous>.<anonymous>' call
        var message_0 = 'The preregistration for the connected device with role name "' + roleName + '" is invalid.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
  }
  function Companion_12() {
    Companion_instance_13 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k2f_1 = [null, null, new LinkedHashSetSerializer($serializer_getInstance_12())];
  }
  protoOf(Companion_12).m16 = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_13;
  function Companion_getInstance_17() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.ActiveParticipationInvitation', this, 3);
    tmp0_serialDesc.nt('participation', false);
    tmp0_serialDesc.nt('invitation', false);
    tmp0_serialDesc.nt('assignedDevices', false);
    this.l2f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).pi = function () {
    return this.l2f_1;
  };
  protoOf($serializer_8).cu = function () {
    var tmp0_cached = Companion_getInstance_17().k2f_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_17(), $serializer_getInstance_18(), tmp0_cached[2]];
  };
  protoOf($serializer_8).ri = function (decoder) {
    var tmp0_desc = this.l2f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    var tmp8_cached = Companion_getInstance_17().k2f_1;
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, $serializer_getInstance_17(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, $serializer_getInstance_18(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, $serializer_getInstance_17(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, $serializer_getInstance_18(), tmp5_local1);
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
    return ActiveParticipationInvitation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_8).m2f = function (encoder, value) {
    var tmp0_desc = this.l2f_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_17().k2f_1;
    tmp1_output.pn(tmp0_desc, 0, $serializer_getInstance_17(), value.participation);
    tmp1_output.pn(tmp0_desc, 1, $serializer_getInstance_18(), value.invitation);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.assignedDevices);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_8).qi = function (encoder, value) {
    return this.m2f(encoder, value instanceof ActiveParticipationInvitation ? value : THROW_CCE());
  };
  var $serializer_instance_8;
  function $serializer_getInstance_11() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function ActiveParticipationInvitation_init_$Init$(seen1, participation, invitation, assignedDevices, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_11().l2f_1);
    }
    $this.participation = participation;
    $this.invitation = invitation;
    $this.assignedDevices = assignedDevices;
    return $this;
  }
  function ActiveParticipationInvitation_init_$Create$(seen1, participation, invitation, assignedDevices, serializationConstructorMarker) {
    return ActiveParticipationInvitation_init_$Init$(seen1, participation, invitation, assignedDevices, serializationConstructorMarker, objectCreate(protoOf(ActiveParticipationInvitation)));
  }
  function ActiveParticipationInvitation(participation, invitation, assignedDevices) {
    Companion_getInstance_17();
    this.participation = participation;
    this.invitation = invitation;
    this.assignedDevices = assignedDevices;
  }
  protoOf(ActiveParticipationInvitation).n2f = function () {
    return this.participation;
  };
  protoOf(ActiveParticipationInvitation).o2f = function () {
    return this.invitation;
  };
  protoOf(ActiveParticipationInvitation).u24 = function () {
    return this.assignedDevices;
  };
  protoOf(ActiveParticipationInvitation).od = function () {
    return this.participation;
  };
  protoOf(ActiveParticipationInvitation).pd = function () {
    return this.invitation;
  };
  protoOf(ActiveParticipationInvitation).r1g = function () {
    return this.assignedDevices;
  };
  protoOf(ActiveParticipationInvitation).p2f = function (participation, invitation, assignedDevices) {
    return new ActiveParticipationInvitation(participation, invitation, assignedDevices);
  };
  protoOf(ActiveParticipationInvitation).copy = function (participation, invitation, assignedDevices, $super) {
    participation = participation === VOID ? this.participation : participation;
    invitation = invitation === VOID ? this.invitation : invitation;
    assignedDevices = assignedDevices === VOID ? this.assignedDevices : assignedDevices;
    return this.p2f(participation, invitation, assignedDevices);
  };
  protoOf(ActiveParticipationInvitation).toString = function () {
    return 'ActiveParticipationInvitation(participation=' + this.participation + ', invitation=' + this.invitation + ', assignedDevices=' + this.assignedDevices + ')';
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
    var tmp0_other_with_cast = other instanceof ActiveParticipationInvitation ? other : THROW_CCE();
    if (!this.participation.equals(tmp0_other_with_cast.participation))
      return false;
    if (!this.invitation.equals(tmp0_other_with_cast.invitation))
      return false;
    if (!equals(this.assignedDevices, tmp0_other_with_cast.assignedDevices))
      return false;
    return true;
  };
  function Companion_13() {
    Companion_instance_14 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q2f_1 = [Companion_getInstance_0().z1q(UnitSerializer_getInstance(), UnitSerializer_getInstance()), Companion_getInstance_1().m16()];
  }
  protoOf(Companion_13).m16 = function () {
    return $serializer_getInstance_12();
  };
  var Companion_instance_14;
  function Companion_getInstance_18() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.AssignedPrimaryDevice', this, 2);
    tmp0_serialDesc.nt('device', false);
    tmp0_serialDesc.nt('registration', true);
    this.r2f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).pi = function () {
    return this.r2f_1;
  };
  protoOf($serializer_9).cu = function () {
    var tmp0_cached = Companion_getInstance_18().q2f_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], get_nullable(tmp0_cached[1])];
  };
  protoOf($serializer_9).ri = function (decoder) {
    var tmp0_desc = this.r2f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_18().q2f_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.lm(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
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
            tmp5_local1 = tmp6_input.lm(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return AssignedPrimaryDevice_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_9).s2f = function (encoder, value) {
    var tmp0_desc = this.r2f_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_18().q2f_1;
    tmp1_output.pn(tmp0_desc, 0, tmp2_cached[0], value.device);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.registration == null)) {
      tmp1_output.rn(tmp0_desc, 1, tmp2_cached[1], value.registration);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_9).qi = function (encoder, value) {
    return this.s2f(encoder, value instanceof AssignedPrimaryDevice ? value : THROW_CCE());
  };
  var $serializer_instance_9;
  function $serializer_getInstance_12() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function AssignedPrimaryDevice_init_$Init$(seen1, device, registration, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_12().r2f_1);
    }
    $this.device = device;
    if (0 === (seen1 & 2))
      $this.registration = null;
    else
      $this.registration = registration;
    return $this;
  }
  function AssignedPrimaryDevice_init_$Create$(seen1, device, registration, serializationConstructorMarker) {
    return AssignedPrimaryDevice_init_$Init$(seen1, device, registration, serializationConstructorMarker, objectCreate(protoOf(AssignedPrimaryDevice)));
  }
  function AssignedPrimaryDevice(device, registration) {
    Companion_getInstance_18();
    registration = registration === VOID ? null : registration;
    this.device = device;
    this.registration = registration;
  }
  protoOf(AssignedPrimaryDevice).f2d = function () {
    return this.device;
  };
  protoOf(AssignedPrimaryDevice).n2d = function () {
    return this.registration;
  };
  protoOf(AssignedPrimaryDevice).od = function () {
    return this.device;
  };
  protoOf(AssignedPrimaryDevice).pd = function () {
    return this.registration;
  };
  protoOf(AssignedPrimaryDevice).t2f = function (device, registration) {
    return new AssignedPrimaryDevice(device, registration);
  };
  protoOf(AssignedPrimaryDevice).copy = function (device, registration, $super) {
    device = device === VOID ? this.device : device;
    registration = registration === VOID ? this.registration : registration;
    return this.t2f(device, registration);
  };
  protoOf(AssignedPrimaryDevice).toString = function () {
    return 'AssignedPrimaryDevice(device=' + this.device + ', registration=' + this.registration + ')';
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
    var tmp0_other_with_cast = other instanceof AssignedPrimaryDevice ? other : THROW_CCE();
    if (!equals(this.device, tmp0_other_with_cast.device))
      return false;
    if (!equals(this.registration, tmp0_other_with_cast.registration))
      return false;
    return true;
  };
  function Companion_14() {
    Companion_instance_15 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = NamespacedIdSerializer_getInstance();
    var tmp_1 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.u2f_1 = [null, new LinkedHashMapSerializer(tmp_0, get_nullable(PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$2)))];
  }
  protoOf(Companion_14).m16 = function () {
    return $serializer_getInstance_13();
  };
  var Companion_instance_15;
  function Companion_getInstance_19() {
    if (Companion_instance_15 == null)
      new Companion_14();
    return Companion_instance_15;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.ParticipantData.RoleData', this, 2);
    tmp0_serialDesc.nt('roleName', false);
    tmp0_serialDesc.nt('data', false);
    this.v2f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).pi = function () {
    return this.v2f_1;
  };
  protoOf($serializer_10).cu = function () {
    var tmp0_cached = Companion_getInstance_19().u2f_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1]];
  };
  protoOf($serializer_10).ri = function (decoder) {
    var tmp0_desc = this.v2f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_19().u2f_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.hm(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.hm(tmp0_desc, 0);
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
    return RoleData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_10).w2f = function (encoder, value) {
    var tmp0_desc = this.v2f_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().u2f_1;
    tmp1_output.nn(tmp0_desc, 0, value.roleName);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.data);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_10).qi = function (encoder, value) {
    return this.w2f(encoder, value instanceof RoleData ? value : THROW_CCE());
  };
  var $serializer_instance_10;
  function $serializer_getInstance_13() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function RoleData_init_$Init$(seen1, roleName, data, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_13().v2f_1);
    }
    $this.roleName = roleName;
    $this.data = data;
    return $this;
  }
  function RoleData_init_$Create$(seen1, roleName, data, serializationConstructorMarker) {
    return RoleData_init_$Init$(seen1, roleName, data, serializationConstructorMarker, objectCreate(protoOf(RoleData)));
  }
  function RoleData(roleName, data) {
    Companion_getInstance_19();
    this.roleName = roleName;
    this.data = data;
  }
  protoOf(RoleData).u1o = function () {
    return this.roleName;
  };
  protoOf(RoleData).f2a = function () {
    return this.data;
  };
  protoOf(RoleData).od = function () {
    return this.roleName;
  };
  protoOf(RoleData).pd = function () {
    return this.data;
  };
  protoOf(RoleData).x2f = function (roleName, data) {
    return new RoleData(roleName, data);
  };
  protoOf(RoleData).copy = function (roleName, data, $super) {
    roleName = roleName === VOID ? this.roleName : roleName;
    data = data === VOID ? this.data : data;
    return this.x2f(roleName, data);
  };
  protoOf(RoleData).toString = function () {
    return 'RoleData(roleName=' + this.roleName + ', data=' + this.data + ')';
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
    var tmp0_other_with_cast = other instanceof RoleData ? other : THROW_CCE();
    if (!(this.roleName === tmp0_other_with_cast.roleName))
      return false;
    if (!equals(this.data, tmp0_other_with_cast.data))
      return false;
    return true;
  };
  function Companion_15() {
    Companion_instance_16 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = NamespacedIdSerializer_getInstance();
    var tmp_1 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y2f_1 = [null, new LinkedHashMapSerializer(tmp_0, get_nullable(PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$2))), new ArrayListSerializer($serializer_getInstance_13())];
  }
  protoOf(Companion_15).m16 = function () {
    return $serializer_getInstance_14();
  };
  var Companion_instance_16;
  function Companion_getInstance_20() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.ParticipantData', this, 3);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('common', false);
    tmp0_serialDesc.nt('roles', false);
    this.z2f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).pi = function () {
    return this.z2f_1;
  };
  protoOf($serializer_11).cu = function () {
    var tmp0_cached = Companion_getInstance_20().y2f_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1], tmp0_cached[2]];
  };
  protoOf($serializer_11).ri = function (decoder) {
    var tmp0_desc = this.z2f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    var tmp8_cached = Companion_getInstance_20().y2f_1;
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
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
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
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
    return ParticipantData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_11).a2g = function (encoder, value) {
    var tmp0_desc = this.z2f_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().y2f_1;
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.common);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.roles);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_11).qi = function (encoder, value) {
    return this.a2g(encoder, value instanceof ParticipantData ? value : THROW_CCE());
  };
  var $serializer_instance_11;
  function $serializer_getInstance_14() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function ParticipantData_init_$Init$(seen1, studyDeploymentId, common, roles, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_14().z2f_1);
    }
    $this.studyDeploymentId = studyDeploymentId;
    $this.common = common;
    $this.roles = roles;
    return $this;
  }
  function ParticipantData_init_$Create$(seen1, studyDeploymentId, common, roles, serializationConstructorMarker) {
    return ParticipantData_init_$Init$(seen1, studyDeploymentId, common, roles, serializationConstructorMarker, objectCreate(protoOf(ParticipantData)));
  }
  function ParticipantData(studyDeploymentId, common, roles) {
    Companion_getInstance_20();
    this.studyDeploymentId = studyDeploymentId;
    this.common = common;
    this.roles = roles;
  }
  protoOf(ParticipantData).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(ParticipantData).b2g = function () {
    return this.common;
  };
  protoOf(ParticipantData).c2g = function () {
    return this.roles;
  };
  protoOf(ParticipantData).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(ParticipantData).pd = function () {
    return this.common;
  };
  protoOf(ParticipantData).r1g = function () {
    return this.roles;
  };
  protoOf(ParticipantData).d2g = function (studyDeploymentId, common, roles) {
    return new ParticipantData(studyDeploymentId, common, roles);
  };
  protoOf(ParticipantData).copy = function (studyDeploymentId, common, roles, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    common = common === VOID ? this.common : common;
    roles = roles === VOID ? this.roles : roles;
    return this.d2g(studyDeploymentId, common, roles);
  };
  protoOf(ParticipantData).toString = function () {
    return 'ParticipantData(studyDeploymentId=' + this.studyDeploymentId + ', common=' + this.common + ', roles=' + this.roles + ')';
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
    var tmp0_other_with_cast = other instanceof ParticipantData ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    if (!equals(this.common, tmp0_other_with_cast.common))
      return false;
    if (!equals(this.roles, tmp0_other_with_cast.roles))
      return false;
    return true;
  };
  function Companion_16() {
    Companion_instance_17 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e2g_1 = [null, Companion_getInstance_2().m16(), Companion_getInstance_3().m16(), null];
  }
  protoOf(Companion_16).m16 = function () {
    return $serializer_getInstance_15();
  };
  var Companion_instance_17;
  function Companion_getInstance_21() {
    if (Companion_instance_17 == null)
      new Companion_16();
    return Companion_instance_17;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.ParticipantInvitation', this, 4);
    tmp0_serialDesc.nt('participantId', false);
    tmp0_serialDesc.nt('assignedRoles', false);
    tmp0_serialDesc.nt('identity', false);
    tmp0_serialDesc.nt('invitation', false);
    this.f2g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).pi = function () {
    return this.f2g_1;
  };
  protoOf($serializer_12).cu = function () {
    var tmp0_cached = Companion_getInstance_21().e2g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1], tmp0_cached[2], $serializer_getInstance_18()];
  };
  protoOf($serializer_12).ri = function (decoder) {
    var tmp0_desc = this.f2g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_21().e2g_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.jm(tmp0_desc, 3, $serializer_getInstance_18(), tmp7_local3);
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
            tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.jm(tmp0_desc, 3, $serializer_getInstance_18(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return ParticipantInvitation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_12).g2g = function (encoder, value) {
    var tmp0_desc = this.f2g_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().e2g_1;
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.participantId);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.assignedRoles);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.identity);
    tmp1_output.pn(tmp0_desc, 3, $serializer_getInstance_18(), value.invitation);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_12).qi = function (encoder, value) {
    return this.g2g(encoder, value instanceof ParticipantInvitation ? value : THROW_CCE());
  };
  var $serializer_instance_12;
  function $serializer_getInstance_15() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function ParticipantInvitation_init_$Init$(seen1, participantId, assignedRoles, identity, invitation, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_15().f2g_1);
    }
    $this.participantId = participantId;
    $this.assignedRoles = assignedRoles;
    $this.identity = identity;
    $this.invitation = invitation;
    return $this;
  }
  function ParticipantInvitation_init_$Create$(seen1, participantId, assignedRoles, identity, invitation, serializationConstructorMarker) {
    return ParticipantInvitation_init_$Init$(seen1, participantId, assignedRoles, identity, invitation, serializationConstructorMarker, objectCreate(protoOf(ParticipantInvitation)));
  }
  function ParticipantInvitation(participantId, assignedRoles, identity, invitation) {
    Companion_getInstance_21();
    this.participantId = participantId;
    this.assignedRoles = assignedRoles;
    this.identity = identity;
    this.invitation = invitation;
  }
  protoOf(ParticipantInvitation).h2g = function () {
    return this.participantId;
  };
  protoOf(ParticipantInvitation).i2g = function () {
    return this.assignedRoles;
  };
  protoOf(ParticipantInvitation).j2g = function () {
    return this.identity;
  };
  protoOf(ParticipantInvitation).o2f = function () {
    return this.invitation;
  };
  protoOf(ParticipantInvitation).od = function () {
    return this.participantId;
  };
  protoOf(ParticipantInvitation).pd = function () {
    return this.assignedRoles;
  };
  protoOf(ParticipantInvitation).r1g = function () {
    return this.identity;
  };
  protoOf(ParticipantInvitation).q1h = function () {
    return this.invitation;
  };
  protoOf(ParticipantInvitation).k2g = function (participantId, assignedRoles, identity, invitation) {
    return new ParticipantInvitation(participantId, assignedRoles, identity, invitation);
  };
  protoOf(ParticipantInvitation).copy = function (participantId, assignedRoles, identity, invitation, $super) {
    participantId = participantId === VOID ? this.participantId : participantId;
    assignedRoles = assignedRoles === VOID ? this.assignedRoles : assignedRoles;
    identity = identity === VOID ? this.identity : identity;
    invitation = invitation === VOID ? this.invitation : invitation;
    return this.k2g(participantId, assignedRoles, identity, invitation);
  };
  protoOf(ParticipantInvitation).toString = function () {
    return 'ParticipantInvitation(participantId=' + this.participantId + ', assignedRoles=' + this.assignedRoles + ', identity=' + this.identity + ', invitation=' + this.invitation + ')';
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
    var tmp0_other_with_cast = other instanceof ParticipantInvitation ? other : THROW_CCE();
    if (!this.participantId.equals(tmp0_other_with_cast.participantId))
      return false;
    if (!equals(this.assignedRoles, tmp0_other_with_cast.assignedRoles))
      return false;
    if (!equals(this.identity, tmp0_other_with_cast.identity))
      return false;
    if (!this.invitation.equals(tmp0_other_with_cast.invitation))
      return false;
    return true;
  };
  function Companion_17() {
    Companion_instance_18 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.l2g_1 = [null, Companion_getInstance_2().m16(), new LinkedHashSetSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_17).m16 = function () {
    return $serializer_getInstance_16();
  };
  var Companion_instance_18;
  function Companion_getInstance_22() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.ParticipantStatus', this, 3);
    tmp0_serialDesc.nt('participantId', false);
    tmp0_serialDesc.nt('assignedParticipantRoles', false);
    tmp0_serialDesc.nt('assignedPrimaryDeviceRoleNames', false);
    this.m2g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).pi = function () {
    return this.m2g_1;
  };
  protoOf($serializer_13).cu = function () {
    var tmp0_cached = Companion_getInstance_22().l2g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1], tmp0_cached[2]];
  };
  protoOf($serializer_13).ri = function (decoder) {
    var tmp0_desc = this.m2g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    var tmp8_cached = Companion_getInstance_22().l2g_1;
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
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
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
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
    return ParticipantStatus_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_13).n2g = function (encoder, value) {
    var tmp0_desc = this.m2g_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().l2g_1;
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.participantId);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.assignedParticipantRoles);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.assignedPrimaryDeviceRoleNames);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_13).qi = function (encoder, value) {
    return this.n2g(encoder, value instanceof ParticipantStatus ? value : THROW_CCE());
  };
  var $serializer_instance_13;
  function $serializer_getInstance_16() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function ParticipantStatus_init_$Init$(seen1, participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_16().m2g_1);
    }
    $this.participantId = participantId;
    $this.assignedParticipantRoles = assignedParticipantRoles;
    $this.assignedPrimaryDeviceRoleNames = assignedPrimaryDeviceRoleNames;
    return $this;
  }
  function ParticipantStatus_init_$Create$(seen1, participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames, serializationConstructorMarker) {
    return ParticipantStatus_init_$Init$(seen1, participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames, serializationConstructorMarker, objectCreate(protoOf(ParticipantStatus)));
  }
  function ParticipantStatus(participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames) {
    Companion_getInstance_22();
    this.participantId = participantId;
    this.assignedParticipantRoles = assignedParticipantRoles;
    this.assignedPrimaryDeviceRoleNames = assignedPrimaryDeviceRoleNames;
  }
  protoOf(ParticipantStatus).h2g = function () {
    return this.participantId;
  };
  protoOf(ParticipantStatus).o2g = function () {
    return this.assignedParticipantRoles;
  };
  protoOf(ParticipantStatus).p2g = function () {
    return this.assignedPrimaryDeviceRoleNames;
  };
  protoOf(ParticipantStatus).od = function () {
    return this.participantId;
  };
  protoOf(ParticipantStatus).pd = function () {
    return this.assignedParticipantRoles;
  };
  protoOf(ParticipantStatus).r1g = function () {
    return this.assignedPrimaryDeviceRoleNames;
  };
  protoOf(ParticipantStatus).q2g = function (participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames) {
    return new ParticipantStatus(participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames);
  };
  protoOf(ParticipantStatus).copy = function (participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames, $super) {
    participantId = participantId === VOID ? this.participantId : participantId;
    assignedParticipantRoles = assignedParticipantRoles === VOID ? this.assignedParticipantRoles : assignedParticipantRoles;
    assignedPrimaryDeviceRoleNames = assignedPrimaryDeviceRoleNames === VOID ? this.assignedPrimaryDeviceRoleNames : assignedPrimaryDeviceRoleNames;
    return this.q2g(participantId, assignedParticipantRoles, assignedPrimaryDeviceRoleNames);
  };
  protoOf(ParticipantStatus).toString = function () {
    return 'ParticipantStatus(participantId=' + this.participantId + ', assignedParticipantRoles=' + this.assignedParticipantRoles + ', assignedPrimaryDeviceRoleNames=' + this.assignedPrimaryDeviceRoleNames + ')';
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
    var tmp0_other_with_cast = other instanceof ParticipantStatus ? other : THROW_CCE();
    if (!this.participantId.equals(tmp0_other_with_cast.participantId))
      return false;
    if (!equals(this.assignedParticipantRoles, tmp0_other_with_cast.assignedParticipantRoles))
      return false;
    if (!equals(this.assignedPrimaryDeviceRoleNames, tmp0_other_with_cast.assignedPrimaryDeviceRoleNames))
      return false;
    return true;
  };
  function Companion_18() {
    Companion_instance_19 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r2g_1 = [null, Companion_getInstance_2().m16(), null];
  }
  protoOf(Companion_18).m16 = function () {
    return $serializer_getInstance_17();
  };
  var Companion_instance_19;
  function Companion_getInstance_23() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.Participation', this, 3);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('assignedRoles', false);
    tmp0_serialDesc.nt('participantId', false);
    this.s2g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).pi = function () {
    return this.s2g_1;
  };
  protoOf($serializer_14).cu = function () {
    var tmp0_cached = Companion_getInstance_23().r2g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1], UUIDSerializer_getInstance()];
  };
  protoOf($serializer_14).ri = function (decoder) {
    var tmp0_desc = this.s2g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    var tmp8_cached = Companion_getInstance_23().r2g_1;
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
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
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
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
    return Participation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_14).t2g = function (encoder, value) {
    var tmp0_desc = this.s2g_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().r2g_1;
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.assignedRoles);
    tmp1_output.pn(tmp0_desc, 2, UUIDSerializer_getInstance(), value.participantId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_14).qi = function (encoder, value) {
    return this.t2g(encoder, value instanceof Participation ? value : THROW_CCE());
  };
  var $serializer_instance_14;
  function $serializer_getInstance_17() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function Participation_init_$Init$(seen1, studyDeploymentId, assignedRoles, participantId, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_17().s2g_1);
    }
    $this.studyDeploymentId = studyDeploymentId;
    $this.assignedRoles = assignedRoles;
    $this.participantId = participantId;
    return $this;
  }
  function Participation_init_$Create$(seen1, studyDeploymentId, assignedRoles, participantId, serializationConstructorMarker) {
    return Participation_init_$Init$(seen1, studyDeploymentId, assignedRoles, participantId, serializationConstructorMarker, objectCreate(protoOf(Participation)));
  }
  function Participation(studyDeploymentId, assignedRoles, participantId) {
    Companion_getInstance_23();
    assignedRoles = assignedRoles === VOID ? All_getInstance() : assignedRoles;
    participantId = participantId === VOID ? Companion_instance.randomUUID() : participantId;
    this.studyDeploymentId = studyDeploymentId;
    this.assignedRoles = assignedRoles;
    this.participantId = participantId;
  }
  protoOf(Participation).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(Participation).i2g = function () {
    return this.assignedRoles;
  };
  protoOf(Participation).h2g = function () {
    return this.participantId;
  };
  protoOf(Participation).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(Participation).pd = function () {
    return this.assignedRoles;
  };
  protoOf(Participation).r1g = function () {
    return this.participantId;
  };
  protoOf(Participation).u2g = function (studyDeploymentId, assignedRoles, participantId) {
    return new Participation(studyDeploymentId, assignedRoles, participantId);
  };
  protoOf(Participation).copy = function (studyDeploymentId, assignedRoles, participantId, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    assignedRoles = assignedRoles === VOID ? this.assignedRoles : assignedRoles;
    participantId = participantId === VOID ? this.participantId : participantId;
    return this.u2g(studyDeploymentId, assignedRoles, participantId);
  };
  protoOf(Participation).toString = function () {
    return 'Participation(studyDeploymentId=' + this.studyDeploymentId + ', assignedRoles=' + this.assignedRoles + ', participantId=' + this.participantId + ')';
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
    var tmp0_other_with_cast = other instanceof Participation ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    if (!equals(this.assignedRoles, tmp0_other_with_cast.assignedRoles))
      return false;
    if (!this.participantId.equals(tmp0_other_with_cast.participantId))
      return false;
    return true;
  };
  function Companion_19() {
    Companion_instance_20 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v2g_1 = [null, null, new ApplicationDataSerializer()];
  }
  protoOf(Companion_19).m16 = function () {
    return $serializer_getInstance_18();
  };
  var Companion_instance_20;
  function Companion_getInstance_24() {
    if (Companion_instance_20 == null)
      new Companion_19();
    return Companion_instance_20;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.application.users.StudyInvitation', this, 3);
    tmp0_serialDesc.nt('name', false);
    tmp0_serialDesc.nt('description', true);
    tmp0_serialDesc.nt('applicationData', true);
    this.w2g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).pi = function () {
    return this.w2g_1;
  };
  protoOf($serializer_15).cu = function () {
    var tmp0_cached = Companion_getInstance_24().v2g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2])];
  };
  protoOf($serializer_15).ri = function (decoder) {
    var tmp0_desc = this.w2g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    var tmp8_cached = Companion_getInstance_24().v2g_1;
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.lm(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.lm(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.hm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.lm(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.lm(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return StudyInvitation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_15).x2g = function (encoder, value) {
    var tmp0_desc = this.w2g_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().v2g_1;
    tmp1_output.nn(tmp0_desc, 0, value.name);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.description == null)) {
      tmp1_output.rn(tmp0_desc, 1, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.applicationData == null)) {
      tmp1_output.rn(tmp0_desc, 2, tmp2_cached[2], value.applicationData);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_15).qi = function (encoder, value) {
    return this.x2g(encoder, value instanceof StudyInvitation ? value : THROW_CCE());
  };
  var $serializer_instance_15;
  function $serializer_getInstance_18() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function StudyInvitation_init_$Init$(seen1, name, description, applicationData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_18().w2g_1);
    }
    $this.name = name;
    if (0 === (seen1 & 2))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen1 & 4))
      $this.applicationData = null;
    else
      $this.applicationData = applicationData;
    return $this;
  }
  function StudyInvitation_init_$Create$(seen1, name, description, applicationData, serializationConstructorMarker) {
    return StudyInvitation_init_$Init$(seen1, name, description, applicationData, serializationConstructorMarker, objectCreate(protoOf(StudyInvitation)));
  }
  function StudyInvitation(name, description, applicationData) {
    Companion_getInstance_24();
    description = description === VOID ? null : description;
    applicationData = applicationData === VOID ? null : applicationData;
    this.name = name;
    this.description = description;
    this.applicationData = applicationData;
  }
  protoOf(StudyInvitation).ra = function () {
    return this.name;
  };
  protoOf(StudyInvitation).o1u = function () {
    return this.description;
  };
  protoOf(StudyInvitation).v24 = function () {
    return this.applicationData;
  };
  protoOf(StudyInvitation).od = function () {
    return this.name;
  };
  protoOf(StudyInvitation).pd = function () {
    return this.description;
  };
  protoOf(StudyInvitation).r1g = function () {
    return this.applicationData;
  };
  protoOf(StudyInvitation).y2g = function (name, description, applicationData) {
    return new StudyInvitation(name, description, applicationData);
  };
  protoOf(StudyInvitation).copy = function (name, description, applicationData, $super) {
    name = name === VOID ? this.name : name;
    description = description === VOID ? this.description : description;
    applicationData = applicationData === VOID ? this.applicationData : applicationData;
    return this.y2g(name, description, applicationData);
  };
  protoOf(StudyInvitation).toString = function () {
    return 'StudyInvitation(name=' + this.name + ', description=' + this.description + ', applicationData=' + this.applicationData + ')';
  };
  protoOf(StudyInvitation).hashCode = function () {
    var result = getStringHashCode(this.name);
    result = imul(result, 31) + (this.description == null ? 0 : getStringHashCode(this.description)) | 0;
    result = imul(result, 31) + (this.applicationData == null ? 0 : getStringHashCode(this.applicationData)) | 0;
    return result;
  };
  protoOf(StudyInvitation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StudyInvitation))
      return false;
    var tmp0_other_with_cast = other instanceof StudyInvitation ? other : THROW_CCE();
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    if (!(this.description == tmp0_other_with_cast.description))
      return false;
    if (!(this.applicationData == tmp0_other_with_cast.applicationData))
      return false;
    return true;
  };
  function getAssignedDeviceRoleNames(_this__u8e3s4, assignedParticipantRoles) {
    if (assignedParticipantRoles instanceof Roles) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.participantRoles;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.t();
      while (tmp0_iterator.u()) {
        var item = tmp0_iterator.v();
        // Inline function 'dk.cachet.carp.deployments.domain.users.getAssignedDeviceRoleNames.<anonymous>' call
        var tmp$ret$0 = item.role;
        destination.q(tmp$ret$0);
      }
      // Inline function 'kotlin.contracts.contract' call
      if (!destination.x(assignedParticipantRoles.roleNames)) {
        // Inline function 'dk.cachet.carp.deployments.domain.users.getAssignedDeviceRoleNames.<anonymous>' call
        var message = "A participant role which isn't part of this protocol is specified.";
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    // Inline function 'kotlin.collections.map' call
    var this_1 = _this__u8e3s4.primaryDevices;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_0 = this_1.t();
    while (tmp0_iterator_0.u()) {
      var item_0 = tmp0_iterator_0.v();
      // Inline function 'dk.cachet.carp.deployments.domain.users.getAssignedDeviceRoleNames.<anonymous>' call
      var tmp$ret$4 = item_0.roleName;
      destination_0.q(tmp$ret$4);
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
        var tmp0_iterator_1 = primaryDeviceRoleNames.t();
        while (tmp0_iterator_1.u()) {
          var element = tmp0_iterator_1.v();
          var tmp$ret$7;
          $l$block: {
            // Inline function 'dk.cachet.carp.deployments.domain.users.getAssignedDeviceRoleNames.<anonymous>' call
            var tmp0_elvis_lhs = _this__u8e3s4.assignedDevices.x2(element);
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$7 = true;
              break $l$block;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }
            var rolesForDevice = tmp_0;
            var tmp$ret$8;
            $l$block_1: {
              // Inline function 'kotlin.collections.any' call
              var this_2 = assignedParticipantRoles.roleNames;
              var tmp_1;
              if (isInterface(this_2, Collection)) {
                tmp_1 = this_2.y();
              } else {
                tmp_1 = false;
              }
              if (tmp_1) {
                tmp$ret$8 = false;
                break $l$block_1;
              }
              var tmp0_iterator_2 = this_2.t();
              while (tmp0_iterator_2.u()) {
                var element_0 = tmp0_iterator_2.v();
                // Inline function 'dk.cachet.carp.deployments.domain.users.getAssignedDeviceRoleNames.<anonymous>.<anonymous>' call
                if (rolesForDevice.p(element_0)) {
                  tmp$ret$8 = true;
                  break $l$block_1;
                }
              }
              tmp$ret$8 = false;
            }
            tmp$ret$7 = tmp$ret$8;
          }
          if (tmp$ret$7) {
            destination_1.q(element);
          }
        }
        tmp = destination_1;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return toSet(tmp);
  }
  function DeploymentServiceRequest$Companion$serializer$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.d1r(p0);
    };
    l.callableName = 'serializer';
    return l;
  }
  function Companion_20() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a2h_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_15()), new LinkedHashMapSerializer(StringSerializer_getInstance(), Companion_getInstance_1().m16())];
  }
  protoOf(Companion_20).m16 = function () {
    return $serializer_getInstance_19();
  };
  var Companion_instance_21;
  function Companion_getInstance_25() {
    if (Companion_instance_21 == null)
      new Companion_20();
    return Companion_instance_21;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.CreateStudyDeployment', this, 5);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('id', false);
    tmp0_serialDesc.nt('protocol', false);
    tmp0_serialDesc.nt('invitations', false);
    tmp0_serialDesc.nt('connectedDevicePreregistrations', true);
    this.b2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).pi = function () {
    return this.b2h_1;
  };
  protoOf($serializer_16).cu = function () {
    var tmp0_cached = Companion_getInstance_25().a2h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), $serializer_getInstance_1(), tmp0_cached[3], tmp0_cached[4]];
  };
  protoOf($serializer_16).ri = function (decoder) {
    var tmp0_desc = this.b2h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xl(tmp0_desc);
    var tmp10_cached = Companion_getInstance_25().a2h_1;
    if (tmp9_input.om()) {
      tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jm(tmp0_desc, 2, $serializer_getInstance_1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jm(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.jm(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
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
            tmp6_local2 = tmp9_input.jm(tmp0_desc, 2, $serializer_getInstance_1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jm(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.jm(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yl(tmp0_desc);
    return CreateStudyDeployment_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_16).c2h = function (encoder, value) {
    var tmp0_desc = this.b2h_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().a2h_1;
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.id);
    tmp1_output.pn(tmp0_desc, 2, $serializer_getInstance_1(), value.protocol);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.invitations);
    if (tmp1_output.vn(tmp0_desc, 4) ? true : !equals(value.connectedDevicePreregistrations, emptyMap())) {
      tmp1_output.pn(tmp0_desc, 4, tmp2_cached[4], value.connectedDevicePreregistrations);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_16).qi = function (encoder, value) {
    return this.c2h(encoder, value instanceof CreateStudyDeployment ? value : THROW_CCE());
  };
  var $serializer_instance_16;
  function $serializer_getInstance_19() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function CreateStudyDeployment_init_$Init$(seen1, apiVersion, id, protocol, invitations, connectedDevicePreregistrations, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_19().b2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.id = id;
    $this.protocol = protocol;
    $this.invitations = invitations;
    if (0 === (seen1 & 16))
      $this.connectedDevicePreregistrations = emptyMap();
    else
      $this.connectedDevicePreregistrations = connectedDevicePreregistrations;
    return $this;
  }
  function CreateStudyDeployment_init_$Create$(seen1, apiVersion, id, protocol, invitations, connectedDevicePreregistrations, serializationConstructorMarker) {
    return CreateStudyDeployment_init_$Init$(seen1, apiVersion, id, protocol, invitations, connectedDevicePreregistrations, serializationConstructorMarker, objectCreate(protoOf(CreateStudyDeployment)));
  }
  function Companion_21() {
    Companion_instance_22 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e2h_1 = [null, new LinkedHashSetSerializer(UUIDSerializer_getInstance())];
  }
  protoOf(Companion_21).m16 = function () {
    return $serializer_getInstance_20();
  };
  var Companion_instance_22;
  function Companion_getInstance_26() {
    if (Companion_instance_22 == null)
      new Companion_21();
    return Companion_instance_22;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.RemoveStudyDeployments', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentIds', false);
    this.f2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).pi = function () {
    return this.f2h_1;
  };
  protoOf($serializer_17).cu = function () {
    var tmp0_cached = Companion_getInstance_26().e2h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), tmp0_cached[1]];
  };
  protoOf($serializer_17).ri = function (decoder) {
    var tmp0_desc = this.f2h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_26().e2h_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
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
    return RemoveStudyDeployments_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_17).g2h = function (encoder, value) {
    var tmp0_desc = this.f2h_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().e2h_1;
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.studyDeploymentIds);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_17).qi = function (encoder, value) {
    return this.g2h(encoder, value instanceof RemoveStudyDeployments ? value : THROW_CCE());
  };
  var $serializer_instance_17;
  function $serializer_getInstance_20() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function RemoveStudyDeployments_init_$Init$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_20().f2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentIds = studyDeploymentIds;
    return $this;
  }
  function RemoveStudyDeployments_init_$Create$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker) {
    return RemoveStudyDeployments_init_$Init$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker, objectCreate(protoOf(RemoveStudyDeployments)));
  }
  function Companion_22() {
  }
  protoOf(Companion_22).m16 = function () {
    return $serializer_getInstance_21();
  };
  var Companion_instance_23;
  function Companion_getInstance_27() {
    return Companion_instance_23;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.GetStudyDeploymentStatus', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    this.i2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).pi = function () {
    return this.i2h_1;
  };
  protoOf($serializer_18).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_18).ri = function (decoder) {
    var tmp0_desc = this.i2h_1;
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
    return GetStudyDeploymentStatus_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_18).j2h = function (encoder, value) {
    var tmp0_desc = this.i2h_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_18).qi = function (encoder, value) {
    return this.j2h(encoder, value instanceof GetStudyDeploymentStatus ? value : THROW_CCE());
  };
  var $serializer_instance_18;
  function $serializer_getInstance_21() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function GetStudyDeploymentStatus_init_$Init$(seen1, apiVersion, studyDeploymentId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_21().i2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    return $this;
  }
  function GetStudyDeploymentStatus_init_$Create$(seen1, apiVersion, studyDeploymentId, serializationConstructorMarker) {
    return GetStudyDeploymentStatus_init_$Init$(seen1, apiVersion, studyDeploymentId, serializationConstructorMarker, objectCreate(protoOf(GetStudyDeploymentStatus)));
  }
  function Companion_23() {
    Companion_instance_24 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.l2h_1 = [null, new LinkedHashSetSerializer(UUIDSerializer_getInstance())];
  }
  protoOf(Companion_23).m16 = function () {
    return $serializer_getInstance_22();
  };
  var Companion_instance_24;
  function Companion_getInstance_28() {
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.GetStudyDeploymentStatusList', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentIds', false);
    this.m2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).pi = function () {
    return this.m2h_1;
  };
  protoOf($serializer_19).cu = function () {
    var tmp0_cached = Companion_getInstance_28().l2h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), tmp0_cached[1]];
  };
  protoOf($serializer_19).ri = function (decoder) {
    var tmp0_desc = this.m2h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_28().l2h_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
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
    return GetStudyDeploymentStatusList_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_19).n2h = function (encoder, value) {
    var tmp0_desc = this.m2h_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().l2h_1;
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.studyDeploymentIds);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_19).qi = function (encoder, value) {
    return this.n2h(encoder, value instanceof GetStudyDeploymentStatusList ? value : THROW_CCE());
  };
  var $serializer_instance_19;
  function $serializer_getInstance_22() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function GetStudyDeploymentStatusList_init_$Init$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_22().m2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentIds = studyDeploymentIds;
    return $this;
  }
  function GetStudyDeploymentStatusList_init_$Create$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker) {
    return GetStudyDeploymentStatusList_init_$Init$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker, objectCreate(protoOf(GetStudyDeploymentStatusList)));
  }
  function Companion_24() {
    Companion_instance_25 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p2h_1 = [null, null, null, Companion_getInstance_1().m16()];
  }
  protoOf(Companion_24).m16 = function () {
    return $serializer_getInstance_23();
  };
  var Companion_instance_25;
  function Companion_getInstance_29() {
    if (Companion_instance_25 == null)
      new Companion_24();
    return Companion_instance_25;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.RegisterDevice', this, 4);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('deviceRoleName', false);
    tmp0_serialDesc.nt('registration', false);
    this.q2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).pi = function () {
    return this.q2h_1;
  };
  protoOf($serializer_20).cu = function () {
    var tmp0_cached = Companion_getInstance_29().p2h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[3]];
  };
  protoOf($serializer_20).ri = function (decoder) {
    var tmp0_desc = this.q2h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_29().p2h_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.hm(tmp0_desc, 2);
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
            tmp7_local3 = tmp8_input.jm(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return RegisterDevice_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_20).r2h = function (encoder, value) {
    var tmp0_desc = this.q2h_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_29().p2h_1;
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.nn(tmp0_desc, 2, value.deviceRoleName);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.registration);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_20).qi = function (encoder, value) {
    return this.r2h(encoder, value instanceof RegisterDevice ? value : THROW_CCE());
  };
  var $serializer_instance_20;
  function $serializer_getInstance_23() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function RegisterDevice_init_$Init$(seen1, apiVersion, studyDeploymentId, deviceRoleName, registration, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_23().q2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    $this.deviceRoleName = deviceRoleName;
    $this.registration = registration;
    return $this;
  }
  function RegisterDevice_init_$Create$(seen1, apiVersion, studyDeploymentId, deviceRoleName, registration, serializationConstructorMarker) {
    return RegisterDevice_init_$Init$(seen1, apiVersion, studyDeploymentId, deviceRoleName, registration, serializationConstructorMarker, objectCreate(protoOf(RegisterDevice)));
  }
  function Companion_25() {
  }
  protoOf(Companion_25).m16 = function () {
    return $serializer_getInstance_24();
  };
  var Companion_instance_26;
  function Companion_getInstance_30() {
    return Companion_instance_26;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.UnregisterDevice', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('deviceRoleName', false);
    this.t2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).pi = function () {
    return this.t2h_1;
  };
  protoOf($serializer_21).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_21).ri = function (decoder) {
    var tmp0_desc = this.t2h_1;
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
      tmp6_local2 = tmp7_input.hm(tmp0_desc, 2);
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
            tmp6_local2 = tmp7_input.hm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return UnregisterDevice_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_21).u2h = function (encoder, value) {
    var tmp0_desc = this.t2h_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.nn(tmp0_desc, 2, value.deviceRoleName);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_21).qi = function (encoder, value) {
    return this.u2h(encoder, value instanceof UnregisterDevice ? value : THROW_CCE());
  };
  var $serializer_instance_21;
  function $serializer_getInstance_24() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function UnregisterDevice_init_$Init$(seen1, apiVersion, studyDeploymentId, deviceRoleName, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_24().t2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    $this.deviceRoleName = deviceRoleName;
    return $this;
  }
  function UnregisterDevice_init_$Create$(seen1, apiVersion, studyDeploymentId, deviceRoleName, serializationConstructorMarker) {
    return UnregisterDevice_init_$Init$(seen1, apiVersion, studyDeploymentId, deviceRoleName, serializationConstructorMarker, objectCreate(protoOf(UnregisterDevice)));
  }
  function Companion_26() {
  }
  protoOf(Companion_26).m16 = function () {
    return $serializer_getInstance_25();
  };
  var Companion_instance_27;
  function Companion_getInstance_31() {
    return Companion_instance_27;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.GetDeviceDeploymentFor', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('primaryDeviceRoleName', false);
    this.w2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).pi = function () {
    return this.w2h_1;
  };
  protoOf($serializer_22).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_22).ri = function (decoder) {
    var tmp0_desc = this.w2h_1;
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
      tmp6_local2 = tmp7_input.hm(tmp0_desc, 2);
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
            tmp6_local2 = tmp7_input.hm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return GetDeviceDeploymentFor_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_22).x2h = function (encoder, value) {
    var tmp0_desc = this.w2h_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.nn(tmp0_desc, 2, value.primaryDeviceRoleName);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_22).qi = function (encoder, value) {
    return this.x2h(encoder, value instanceof GetDeviceDeploymentFor ? value : THROW_CCE());
  };
  var $serializer_instance_22;
  function $serializer_getInstance_25() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function GetDeviceDeploymentFor_init_$Init$(seen1, apiVersion, studyDeploymentId, primaryDeviceRoleName, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_25().w2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    $this.primaryDeviceRoleName = primaryDeviceRoleName;
    return $this;
  }
  function GetDeviceDeploymentFor_init_$Create$(seen1, apiVersion, studyDeploymentId, primaryDeviceRoleName, serializationConstructorMarker) {
    return GetDeviceDeploymentFor_init_$Init$(seen1, apiVersion, studyDeploymentId, primaryDeviceRoleName, serializationConstructorMarker, objectCreate(protoOf(GetDeviceDeploymentFor)));
  }
  function Companion_27() {
  }
  protoOf(Companion_27).m16 = function () {
    return $serializer_getInstance_26();
  };
  var Companion_instance_28;
  function Companion_getInstance_32() {
    return Companion_instance_28;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.DeviceDeployed', this, 4);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('primaryDeviceRoleName', false);
    tmp0_serialDesc.nt('deviceDeploymentLastUpdatedOn', false);
    this.z2h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).pi = function () {
    return this.z2h_1;
  };
  protoOf($serializer_23).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), InstantIso8601Serializer_getInstance()];
  };
  protoOf($serializer_23).ri = function (decoder) {
    var tmp0_desc = this.z2h_1;
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
      tmp7_local3 = tmp8_input.jm(tmp0_desc, 3, InstantIso8601Serializer_getInstance(), tmp7_local3);
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
            tmp7_local3 = tmp8_input.jm(tmp0_desc, 3, InstantIso8601Serializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return DeviceDeployed_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_23).a2i = function (encoder, value) {
    var tmp0_desc = this.z2h_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.nn(tmp0_desc, 2, value.primaryDeviceRoleName);
    tmp1_output.pn(tmp0_desc, 3, InstantIso8601Serializer_getInstance(), value.deviceDeploymentLastUpdatedOn);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_23).qi = function (encoder, value) {
    return this.a2i(encoder, value instanceof DeviceDeployed ? value : THROW_CCE());
  };
  var $serializer_instance_23;
  function $serializer_getInstance_26() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function DeviceDeployed_init_$Init$(seen1, apiVersion, studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_26().z2h_1);
    }
    DeploymentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    $this.primaryDeviceRoleName = primaryDeviceRoleName;
    $this.deviceDeploymentLastUpdatedOn = deviceDeploymentLastUpdatedOn;
    return $this;
  }
  function DeviceDeployed_init_$Create$(seen1, apiVersion, studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn, serializationConstructorMarker) {
    return DeviceDeployed_init_$Init$(seen1, apiVersion, studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn, serializationConstructorMarker, objectCreate(protoOf(DeviceDeployed)));
  }
  function Companion_28() {
  }
  protoOf(Companion_28).m16 = function () {
    return $serializer_getInstance_27();
  };
  var Companion_instance_29;
  function Companion_getInstance_33() {
    return Companion_instance_29;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest.Stop', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    this.c2i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).pi = function () {
    return this.c2i_1;
  };
  protoOf($serializer_24).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_24).ri = function (decoder) {
    var tmp0_desc = this.c2i_1;
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
    return Stop_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_24).d2i = function (encoder, value) {
    var tmp0_desc = this.c2i_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_24).qi = function (encoder, value) {
    return this.d2i(encoder, value instanceof Stop ? value : THROW_CCE());
  };
  var $serializer_instance_24;
  function $serializer_getInstance_27() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function Stop_init_$Init$(seen1, apiVersion, studyDeploymentId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_27().c2i_1);
    }
    DeploymentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    return $this;
  }
  function Stop_init_$Create$(seen1, apiVersion, studyDeploymentId, serializationConstructorMarker) {
    return Stop_init_$Init$(seen1, apiVersion, studyDeploymentId, serializationConstructorMarker, objectCreate(protoOf(Stop)));
  }
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.z2g_1.r2();
  }
  function DeploymentServiceRequest$Companion$_anonymous__2yfv68() {
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
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.deployments.infrastructure.DeploymentServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Serializer() {
    Serializer_instance = this;
    var tmp = this;
    tmp.f2i_1 = ignoreTypeParameters(DeploymentServiceRequest$Companion$serializer$ref(Companion_getInstance_34()));
  }
  protoOf(Serializer).pi = function () {
    return this.f2i_1.pi();
  };
  protoOf(Serializer).ri = function (decoder) {
    return this.f2i_1.ri(decoder);
  };
  protoOf(Serializer).g2i = function (encoder, value) {
    this.f2i_1.qi(encoder, value);
  };
  protoOf(Serializer).qi = function (encoder, value) {
    return this.g2i(encoder, value instanceof DeploymentServiceRequest ? value : THROW_CCE());
  };
  var Serializer_instance;
  function Serializer_getInstance() {
    if (Serializer_instance == null)
      new Serializer();
    return Serializer_instance;
  }
  function CreateStudyDeployment(id, protocol, invitations, connectedDevicePreregistrations) {
    Companion_getInstance_25();
    connectedDevicePreregistrations = connectedDevicePreregistrations === VOID ? emptyMap() : connectedDevicePreregistrations;
    DeploymentServiceRequest.call(this);
    this.id = id;
    this.protocol = protocol;
    this.invitations = invitations;
    this.connectedDevicePreregistrations = connectedDevicePreregistrations;
  }
  protoOf(CreateStudyDeployment).z1y = function () {
    return this.id;
  };
  protoOf(CreateStudyDeployment).y27 = function () {
    return this.protocol;
  };
  protoOf(CreateStudyDeployment).h2i = function () {
    return this.invitations;
  };
  protoOf(CreateStudyDeployment).i2i = function () {
    return this.connectedDevicePreregistrations;
  };
  protoOf(CreateStudyDeployment).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(CreateStudyDeployment).od = function () {
    return this.id;
  };
  protoOf(CreateStudyDeployment).pd = function () {
    return this.protocol;
  };
  protoOf(CreateStudyDeployment).r1g = function () {
    return this.invitations;
  };
  protoOf(CreateStudyDeployment).q1h = function () {
    return this.connectedDevicePreregistrations;
  };
  protoOf(CreateStudyDeployment).j2i = function (id, protocol, invitations, connectedDevicePreregistrations) {
    return new CreateStudyDeployment(id, protocol, invitations, connectedDevicePreregistrations);
  };
  protoOf(CreateStudyDeployment).copy = function (id, protocol, invitations, connectedDevicePreregistrations, $super) {
    id = id === VOID ? this.id : id;
    protocol = protocol === VOID ? this.protocol : protocol;
    invitations = invitations === VOID ? this.invitations : invitations;
    connectedDevicePreregistrations = connectedDevicePreregistrations === VOID ? this.connectedDevicePreregistrations : connectedDevicePreregistrations;
    return this.j2i(id, protocol, invitations, connectedDevicePreregistrations);
  };
  protoOf(CreateStudyDeployment).toString = function () {
    return 'CreateStudyDeployment(id=' + this.id + ', protocol=' + this.protocol + ', invitations=' + this.invitations + ', connectedDevicePreregistrations=' + this.connectedDevicePreregistrations + ')';
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
    var tmp0_other_with_cast = other instanceof CreateStudyDeployment ? other : THROW_CCE();
    if (!this.id.equals(tmp0_other_with_cast.id))
      return false;
    if (!this.protocol.equals(tmp0_other_with_cast.protocol))
      return false;
    if (!equals(this.invitations, tmp0_other_with_cast.invitations))
      return false;
    if (!equals(this.connectedDevicePreregistrations, tmp0_other_with_cast.connectedDevicePreregistrations))
      return false;
    return true;
  };
  function RemoveStudyDeployments(studyDeploymentIds) {
    Companion_getInstance_26();
    DeploymentServiceRequest.call(this);
    this.studyDeploymentIds = studyDeploymentIds;
  }
  protoOf(RemoveStudyDeployments).y2b = function () {
    return this.studyDeploymentIds;
  };
  protoOf(RemoveStudyDeployments).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Set), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UUID), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(RemoveStudyDeployments).od = function () {
    return this.studyDeploymentIds;
  };
  protoOf(RemoveStudyDeployments).z2b = function (studyDeploymentIds) {
    return new RemoveStudyDeployments(studyDeploymentIds);
  };
  protoOf(RemoveStudyDeployments).copy = function (studyDeploymentIds, $super) {
    studyDeploymentIds = studyDeploymentIds === VOID ? this.studyDeploymentIds : studyDeploymentIds;
    return this.z2b(studyDeploymentIds);
  };
  protoOf(RemoveStudyDeployments).toString = function () {
    return 'RemoveStudyDeployments(studyDeploymentIds=' + this.studyDeploymentIds + ')';
  };
  protoOf(RemoveStudyDeployments).hashCode = function () {
    return hashCode(this.studyDeploymentIds);
  };
  protoOf(RemoveStudyDeployments).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RemoveStudyDeployments))
      return false;
    var tmp0_other_with_cast = other instanceof RemoveStudyDeployments ? other : THROW_CCE();
    if (!equals(this.studyDeploymentIds, tmp0_other_with_cast.studyDeploymentIds))
      return false;
    return true;
  };
  function GetStudyDeploymentStatus(studyDeploymentId) {
    DeploymentServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
  }
  protoOf(GetStudyDeploymentStatus).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetStudyDeploymentStatus).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetStudyDeploymentStatus).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetStudyDeploymentStatus).f28 = function (studyDeploymentId) {
    return new GetStudyDeploymentStatus(studyDeploymentId);
  };
  protoOf(GetStudyDeploymentStatus).copy = function (studyDeploymentId, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    return this.f28(studyDeploymentId);
  };
  protoOf(GetStudyDeploymentStatus).toString = function () {
    return 'GetStudyDeploymentStatus(studyDeploymentId=' + this.studyDeploymentId + ')';
  };
  protoOf(GetStudyDeploymentStatus).hashCode = function () {
    return this.studyDeploymentId.hashCode();
  };
  protoOf(GetStudyDeploymentStatus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetStudyDeploymentStatus))
      return false;
    var tmp0_other_with_cast = other instanceof GetStudyDeploymentStatus ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    return true;
  };
  function GetStudyDeploymentStatusList(studyDeploymentIds) {
    Companion_getInstance_28();
    DeploymentServiceRequest.call(this);
    this.studyDeploymentIds = studyDeploymentIds;
  }
  protoOf(GetStudyDeploymentStatusList).y2b = function () {
    return this.studyDeploymentIds;
  };
  protoOf(GetStudyDeploymentStatusList).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetStudyDeploymentStatusList).od = function () {
    return this.studyDeploymentIds;
  };
  protoOf(GetStudyDeploymentStatusList).z2b = function (studyDeploymentIds) {
    return new GetStudyDeploymentStatusList(studyDeploymentIds);
  };
  protoOf(GetStudyDeploymentStatusList).copy = function (studyDeploymentIds, $super) {
    studyDeploymentIds = studyDeploymentIds === VOID ? this.studyDeploymentIds : studyDeploymentIds;
    return this.z2b(studyDeploymentIds);
  };
  protoOf(GetStudyDeploymentStatusList).toString = function () {
    return 'GetStudyDeploymentStatusList(studyDeploymentIds=' + this.studyDeploymentIds + ')';
  };
  protoOf(GetStudyDeploymentStatusList).hashCode = function () {
    return hashCode(this.studyDeploymentIds);
  };
  protoOf(GetStudyDeploymentStatusList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetStudyDeploymentStatusList))
      return false;
    var tmp0_other_with_cast = other instanceof GetStudyDeploymentStatusList ? other : THROW_CCE();
    if (!equals(this.studyDeploymentIds, tmp0_other_with_cast.studyDeploymentIds))
      return false;
    return true;
  };
  function RegisterDevice(studyDeploymentId, deviceRoleName, registration) {
    Companion_getInstance_29();
    DeploymentServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
    this.deviceRoleName = deviceRoleName;
    this.registration = registration;
  }
  protoOf(RegisterDevice).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(RegisterDevice).t28 = function () {
    return this.deviceRoleName;
  };
  protoOf(RegisterDevice).n2d = function () {
    return this.registration;
  };
  protoOf(RegisterDevice).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(RegisterDevice).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(RegisterDevice).pd = function () {
    return this.deviceRoleName;
  };
  protoOf(RegisterDevice).r1g = function () {
    return this.registration;
  };
  protoOf(RegisterDevice).l2i = function (studyDeploymentId, deviceRoleName, registration) {
    return new RegisterDevice(studyDeploymentId, deviceRoleName, registration);
  };
  protoOf(RegisterDevice).copy = function (studyDeploymentId, deviceRoleName, registration, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    deviceRoleName = deviceRoleName === VOID ? this.deviceRoleName : deviceRoleName;
    registration = registration === VOID ? this.registration : registration;
    return this.l2i(studyDeploymentId, deviceRoleName, registration);
  };
  protoOf(RegisterDevice).toString = function () {
    return 'RegisterDevice(studyDeploymentId=' + this.studyDeploymentId + ', deviceRoleName=' + this.deviceRoleName + ', registration=' + this.registration + ')';
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
    var tmp0_other_with_cast = other instanceof RegisterDevice ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    if (!(this.deviceRoleName === tmp0_other_with_cast.deviceRoleName))
      return false;
    if (!equals(this.registration, tmp0_other_with_cast.registration))
      return false;
    return true;
  };
  function UnregisterDevice(studyDeploymentId, deviceRoleName) {
    DeploymentServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
    this.deviceRoleName = deviceRoleName;
  }
  protoOf(UnregisterDevice).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(UnregisterDevice).t28 = function () {
    return this.deviceRoleName;
  };
  protoOf(UnregisterDevice).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(UnregisterDevice).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(UnregisterDevice).pd = function () {
    return this.deviceRoleName;
  };
  protoOf(UnregisterDevice).m2i = function (studyDeploymentId, deviceRoleName) {
    return new UnregisterDevice(studyDeploymentId, deviceRoleName);
  };
  protoOf(UnregisterDevice).copy = function (studyDeploymentId, deviceRoleName, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    deviceRoleName = deviceRoleName === VOID ? this.deviceRoleName : deviceRoleName;
    return this.m2i(studyDeploymentId, deviceRoleName);
  };
  protoOf(UnregisterDevice).toString = function () {
    return 'UnregisterDevice(studyDeploymentId=' + this.studyDeploymentId + ', deviceRoleName=' + this.deviceRoleName + ')';
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
    var tmp0_other_with_cast = other instanceof UnregisterDevice ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    if (!(this.deviceRoleName === tmp0_other_with_cast.deviceRoleName))
      return false;
    return true;
  };
  function GetDeviceDeploymentFor(studyDeploymentId, primaryDeviceRoleName) {
    DeploymentServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
    this.primaryDeviceRoleName = primaryDeviceRoleName;
  }
  protoOf(GetDeviceDeploymentFor).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetDeviceDeploymentFor).n2i = function () {
    return this.primaryDeviceRoleName;
  };
  protoOf(GetDeviceDeploymentFor).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(PrimaryDeviceDeployment), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetDeviceDeploymentFor).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetDeviceDeploymentFor).pd = function () {
    return this.primaryDeviceRoleName;
  };
  protoOf(GetDeviceDeploymentFor).m2i = function (studyDeploymentId, primaryDeviceRoleName) {
    return new GetDeviceDeploymentFor(studyDeploymentId, primaryDeviceRoleName);
  };
  protoOf(GetDeviceDeploymentFor).copy = function (studyDeploymentId, primaryDeviceRoleName, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    primaryDeviceRoleName = primaryDeviceRoleName === VOID ? this.primaryDeviceRoleName : primaryDeviceRoleName;
    return this.m2i(studyDeploymentId, primaryDeviceRoleName);
  };
  protoOf(GetDeviceDeploymentFor).toString = function () {
    return 'GetDeviceDeploymentFor(studyDeploymentId=' + this.studyDeploymentId + ', primaryDeviceRoleName=' + this.primaryDeviceRoleName + ')';
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
    var tmp0_other_with_cast = other instanceof GetDeviceDeploymentFor ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    if (!(this.primaryDeviceRoleName === tmp0_other_with_cast.primaryDeviceRoleName))
      return false;
    return true;
  };
  function DeviceDeployed(studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn) {
    DeploymentServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
    this.primaryDeviceRoleName = primaryDeviceRoleName;
    this.deviceDeploymentLastUpdatedOn = deviceDeploymentLastUpdatedOn;
  }
  protoOf(DeviceDeployed).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(DeviceDeployed).n2i = function () {
    return this.primaryDeviceRoleName;
  };
  protoOf(DeviceDeployed).o2i = function () {
    return this.deviceDeploymentLastUpdatedOn;
  };
  protoOf(DeviceDeployed).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(DeviceDeployed).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(DeviceDeployed).pd = function () {
    return this.primaryDeviceRoleName;
  };
  protoOf(DeviceDeployed).r1g = function () {
    return this.deviceDeploymentLastUpdatedOn;
  };
  protoOf(DeviceDeployed).p2i = function (studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn) {
    return new DeviceDeployed(studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn);
  };
  protoOf(DeviceDeployed).copy = function (studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    primaryDeviceRoleName = primaryDeviceRoleName === VOID ? this.primaryDeviceRoleName : primaryDeviceRoleName;
    deviceDeploymentLastUpdatedOn = deviceDeploymentLastUpdatedOn === VOID ? this.deviceDeploymentLastUpdatedOn : deviceDeploymentLastUpdatedOn;
    return this.p2i(studyDeploymentId, primaryDeviceRoleName, deviceDeploymentLastUpdatedOn);
  };
  protoOf(DeviceDeployed).toString = function () {
    return 'DeviceDeployed(studyDeploymentId=' + this.studyDeploymentId + ', primaryDeviceRoleName=' + this.primaryDeviceRoleName + ', deviceDeploymentLastUpdatedOn=' + this.deviceDeploymentLastUpdatedOn + ')';
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
    var tmp0_other_with_cast = other instanceof DeviceDeployed ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    if (!(this.primaryDeviceRoleName === tmp0_other_with_cast.primaryDeviceRoleName))
      return false;
    if (!this.deviceDeploymentLastUpdatedOn.equals(tmp0_other_with_cast.deviceDeploymentLastUpdatedOn))
      return false;
    return true;
  };
  function Stop(studyDeploymentId) {
    DeploymentServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
  }
  protoOf(Stop).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(Stop).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyDeploymentStatus), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(Stop).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(Stop).f28 = function (studyDeploymentId) {
    return new Stop(studyDeploymentId);
  };
  protoOf(Stop).copy = function (studyDeploymentId, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    return this.f28(studyDeploymentId);
  };
  protoOf(Stop).toString = function () {
    return 'Stop(studyDeploymentId=' + this.studyDeploymentId + ')';
  };
  protoOf(Stop).hashCode = function () {
    return this.studyDeploymentId.hashCode();
  };
  protoOf(Stop).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stop))
      return false;
    var tmp0_other_with_cast = other instanceof Stop ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    return true;
  };
  function Companion_29() {
    Companion_instance_30 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.z2g_1 = lazy(tmp_0, DeploymentServiceRequest$Companion$_anonymous__2yfv68);
  }
  protoOf(Companion_29).d1r = function (typeSerial0) {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_29).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  var Companion_instance_30;
  function Companion_getInstance_34() {
    if (Companion_instance_30 == null)
      new Companion_29();
    return Companion_instance_30;
  }
  function DeploymentServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.k2i_1 = apiVersion;
    return $this;
  }
  function DeploymentServiceRequest() {
    Companion_getInstance_34();
    ApplicationServiceRequest.call(this);
    this.k2i_1 = Companion_getInstance_4().a2c_1;
  }
  protoOf(DeploymentServiceRequest).o22 = function () {
    return this.k2i_1;
  };
  function ParticipationServiceRequest$Companion$serializer$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.d1r(p0);
    };
    l.callableName = 'serializer';
    return l;
  }
  function Companion_30() {
  }
  protoOf(Companion_30).m16 = function () {
    return $serializer_getInstance_28();
  };
  var Companion_instance_31;
  function Companion_getInstance_35() {
    return Companion_instance_31;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest.GetActiveParticipationInvitations', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('accountId', false);
    this.r2i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).pi = function () {
    return this.r2i_1;
  };
  protoOf($serializer_25).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_25).ri = function (decoder) {
    var tmp0_desc = this.r2i_1;
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
    return GetActiveParticipationInvitations_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_25).s2i = function (encoder, value) {
    var tmp0_desc = this.r2i_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.accountId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_25).qi = function (encoder, value) {
    return this.s2i(encoder, value instanceof GetActiveParticipationInvitations ? value : THROW_CCE());
  };
  var $serializer_instance_25;
  function $serializer_getInstance_28() {
    if ($serializer_instance_25 == null)
      new $serializer_25();
    return $serializer_instance_25;
  }
  function GetActiveParticipationInvitations_init_$Init$(seen1, apiVersion, accountId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_28().r2i_1);
    }
    ParticipationServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.accountId = accountId;
    return $this;
  }
  function GetActiveParticipationInvitations_init_$Create$(seen1, apiVersion, accountId, serializationConstructorMarker) {
    return GetActiveParticipationInvitations_init_$Init$(seen1, apiVersion, accountId, serializationConstructorMarker, objectCreate(protoOf(GetActiveParticipationInvitations)));
  }
  function Companion_31() {
  }
  protoOf(Companion_31).m16 = function () {
    return $serializer_getInstance_29();
  };
  var Companion_instance_32;
  function Companion_getInstance_36() {
    return Companion_instance_32;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest.GetParticipantData', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    this.u2i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).pi = function () {
    return this.u2i_1;
  };
  protoOf($serializer_26).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_26).ri = function (decoder) {
    var tmp0_desc = this.u2i_1;
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
    return GetParticipantData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_26).v2i = function (encoder, value) {
    var tmp0_desc = this.u2i_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_26).qi = function (encoder, value) {
    return this.v2i(encoder, value instanceof GetParticipantData ? value : THROW_CCE());
  };
  var $serializer_instance_26;
  function $serializer_getInstance_29() {
    if ($serializer_instance_26 == null)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function GetParticipantData_init_$Init$(seen1, apiVersion, studyDeploymentId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_29().u2i_1);
    }
    ParticipationServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    return $this;
  }
  function GetParticipantData_init_$Create$(seen1, apiVersion, studyDeploymentId, serializationConstructorMarker) {
    return GetParticipantData_init_$Init$(seen1, apiVersion, studyDeploymentId, serializationConstructorMarker, objectCreate(protoOf(GetParticipantData)));
  }
  function Companion_32() {
    Companion_instance_33 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x2i_1 = [null, new LinkedHashSetSerializer(UUIDSerializer_getInstance())];
  }
  protoOf(Companion_32).m16 = function () {
    return $serializer_getInstance_30();
  };
  var Companion_instance_33;
  function Companion_getInstance_37() {
    if (Companion_instance_33 == null)
      new Companion_32();
    return Companion_instance_33;
  }
  function $serializer_27() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest.GetParticipantDataList', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentIds', false);
    this.y2i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).pi = function () {
    return this.y2i_1;
  };
  protoOf($serializer_27).cu = function () {
    var tmp0_cached = Companion_getInstance_37().x2i_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), tmp0_cached[1]];
  };
  protoOf($serializer_27).ri = function (decoder) {
    var tmp0_desc = this.y2i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_37().x2i_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
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
    return GetParticipantDataList_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_27).z2i = function (encoder, value) {
    var tmp0_desc = this.y2i_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_37().x2i_1;
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.studyDeploymentIds);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_27).qi = function (encoder, value) {
    return this.z2i(encoder, value instanceof GetParticipantDataList ? value : THROW_CCE());
  };
  var $serializer_instance_27;
  function $serializer_getInstance_30() {
    if ($serializer_instance_27 == null)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function GetParticipantDataList_init_$Init$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_30().y2i_1);
    }
    ParticipationServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentIds = studyDeploymentIds;
    return $this;
  }
  function GetParticipantDataList_init_$Create$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker) {
    return GetParticipantDataList_init_$Init$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker, objectCreate(protoOf(GetParticipantDataList)));
  }
  function Companion_33() {
    Companion_instance_34 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = NamespacedIdSerializer_getInstance();
    var tmp_1 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b2j_1 = [null, null, new LinkedHashMapSerializer(tmp_0, get_nullable(PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$2))), null];
  }
  protoOf(Companion_33).m16 = function () {
    return $serializer_getInstance_31();
  };
  var Companion_instance_34;
  function Companion_getInstance_38() {
    if (Companion_instance_34 == null)
      new Companion_33();
    return Companion_instance_34;
  }
  function $serializer_28() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest.SetParticipantData', this, 4);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('data', false);
    tmp0_serialDesc.nt('inputByParticipantRole', true);
    this.c2j_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).pi = function () {
    return this.c2j_1;
  };
  protoOf($serializer_28).cu = function () {
    var tmp0_cached = Companion_getInstance_38().b2j_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), tmp0_cached[2], get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_28).ri = function (decoder) {
    var tmp0_desc = this.c2j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_38().b2j_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
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
            tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
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
    return SetParticipantData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_28).d2j = function (encoder, value) {
    var tmp0_desc = this.c2j_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_38().b2j_1;
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.data);
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !(value.inputByParticipantRole == null)) {
      tmp1_output.rn(tmp0_desc, 3, StringSerializer_getInstance(), value.inputByParticipantRole);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_28).qi = function (encoder, value) {
    return this.d2j(encoder, value instanceof SetParticipantData ? value : THROW_CCE());
  };
  var $serializer_instance_28;
  function $serializer_getInstance_31() {
    if ($serializer_instance_28 == null)
      new $serializer_28();
    return $serializer_instance_28;
  }
  function SetParticipantData_init_$Init$(seen1, apiVersion, studyDeploymentId, data, inputByParticipantRole, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_31().c2j_1);
    }
    ParticipationServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    $this.data = data;
    if (0 === (seen1 & 8))
      $this.inputByParticipantRole = null;
    else
      $this.inputByParticipantRole = inputByParticipantRole;
    return $this;
  }
  function SetParticipantData_init_$Create$(seen1, apiVersion, studyDeploymentId, data, inputByParticipantRole, serializationConstructorMarker) {
    return SetParticipantData_init_$Init$(seen1, apiVersion, studyDeploymentId, data, inputByParticipantRole, serializationConstructorMarker, objectCreate(protoOf(SetParticipantData)));
  }
  function _get_$cachedSerializer__te6jhj_2($this) {
    return $this.q2i_1.r2();
  }
  function ParticipationServiceRequest$Companion$_anonymous__5r02tw() {
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
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.deployments.infrastructure.ParticipationServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Serializer_0() {
    Serializer_instance_0 = this;
    var tmp = this;
    tmp.f2j_1 = ignoreTypeParameters(ParticipationServiceRequest$Companion$serializer$ref(Companion_getInstance_39()));
  }
  protoOf(Serializer_0).pi = function () {
    return this.f2j_1.pi();
  };
  protoOf(Serializer_0).ri = function (decoder) {
    return this.f2j_1.ri(decoder);
  };
  protoOf(Serializer_0).g2j = function (encoder, value) {
    this.f2j_1.qi(encoder, value);
  };
  protoOf(Serializer_0).qi = function (encoder, value) {
    return this.g2j(encoder, value instanceof ParticipationServiceRequest ? value : THROW_CCE());
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
  protoOf(GetActiveParticipationInvitations).h2j = function () {
    return this.accountId;
  };
  protoOf(GetActiveParticipationInvitations).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Set), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ActiveParticipationInvitation), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetActiveParticipationInvitations).od = function () {
    return this.accountId;
  };
  protoOf(GetActiveParticipationInvitations).f28 = function (accountId) {
    return new GetActiveParticipationInvitations(accountId);
  };
  protoOf(GetActiveParticipationInvitations).copy = function (accountId, $super) {
    accountId = accountId === VOID ? this.accountId : accountId;
    return this.f28(accountId);
  };
  protoOf(GetActiveParticipationInvitations).toString = function () {
    return 'GetActiveParticipationInvitations(accountId=' + this.accountId + ')';
  };
  protoOf(GetActiveParticipationInvitations).hashCode = function () {
    return this.accountId.hashCode();
  };
  protoOf(GetActiveParticipationInvitations).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetActiveParticipationInvitations))
      return false;
    var tmp0_other_with_cast = other instanceof GetActiveParticipationInvitations ? other : THROW_CCE();
    if (!this.accountId.equals(tmp0_other_with_cast.accountId))
      return false;
    return true;
  };
  function GetParticipantData(studyDeploymentId) {
    ParticipationServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
  }
  protoOf(GetParticipantData).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetParticipantData).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(ParticipantData), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetParticipantData).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetParticipantData).f28 = function (studyDeploymentId) {
    return new GetParticipantData(studyDeploymentId);
  };
  protoOf(GetParticipantData).copy = function (studyDeploymentId, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    return this.f28(studyDeploymentId);
  };
  protoOf(GetParticipantData).toString = function () {
    return 'GetParticipantData(studyDeploymentId=' + this.studyDeploymentId + ')';
  };
  protoOf(GetParticipantData).hashCode = function () {
    return this.studyDeploymentId.hashCode();
  };
  protoOf(GetParticipantData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetParticipantData))
      return false;
    var tmp0_other_with_cast = other instanceof GetParticipantData ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    return true;
  };
  function GetParticipantDataList(studyDeploymentIds) {
    Companion_getInstance_37();
    ParticipationServiceRequest.call(this);
    this.studyDeploymentIds = studyDeploymentIds;
  }
  protoOf(GetParticipantDataList).y2b = function () {
    return this.studyDeploymentIds;
  };
  protoOf(GetParticipantDataList).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ParticipantData), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetParticipantDataList).od = function () {
    return this.studyDeploymentIds;
  };
  protoOf(GetParticipantDataList).z2b = function (studyDeploymentIds) {
    return new GetParticipantDataList(studyDeploymentIds);
  };
  protoOf(GetParticipantDataList).copy = function (studyDeploymentIds, $super) {
    studyDeploymentIds = studyDeploymentIds === VOID ? this.studyDeploymentIds : studyDeploymentIds;
    return this.z2b(studyDeploymentIds);
  };
  protoOf(GetParticipantDataList).toString = function () {
    return 'GetParticipantDataList(studyDeploymentIds=' + this.studyDeploymentIds + ')';
  };
  protoOf(GetParticipantDataList).hashCode = function () {
    return hashCode(this.studyDeploymentIds);
  };
  protoOf(GetParticipantDataList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetParticipantDataList))
      return false;
    var tmp0_other_with_cast = other instanceof GetParticipantDataList ? other : THROW_CCE();
    if (!equals(this.studyDeploymentIds, tmp0_other_with_cast.studyDeploymentIds))
      return false;
    return true;
  };
  function SetParticipantData(studyDeploymentId, data, inputByParticipantRole) {
    Companion_getInstance_38();
    inputByParticipantRole = inputByParticipantRole === VOID ? null : inputByParticipantRole;
    ParticipationServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
    this.data = data;
    this.inputByParticipantRole = inputByParticipantRole;
  }
  protoOf(SetParticipantData).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(SetParticipantData).f2a = function () {
    return this.data;
  };
  protoOf(SetParticipantData).j2j = function () {
    return this.inputByParticipantRole;
  };
  protoOf(SetParticipantData).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(ParticipantData), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(SetParticipantData).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(SetParticipantData).pd = function () {
    return this.data;
  };
  protoOf(SetParticipantData).r1g = function () {
    return this.inputByParticipantRole;
  };
  protoOf(SetParticipantData).k2j = function (studyDeploymentId, data, inputByParticipantRole) {
    return new SetParticipantData(studyDeploymentId, data, inputByParticipantRole);
  };
  protoOf(SetParticipantData).copy = function (studyDeploymentId, data, inputByParticipantRole, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    data = data === VOID ? this.data : data;
    inputByParticipantRole = inputByParticipantRole === VOID ? this.inputByParticipantRole : inputByParticipantRole;
    return this.k2j(studyDeploymentId, data, inputByParticipantRole);
  };
  protoOf(SetParticipantData).toString = function () {
    return 'SetParticipantData(studyDeploymentId=' + this.studyDeploymentId + ', data=' + this.data + ', inputByParticipantRole=' + this.inputByParticipantRole + ')';
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
    var tmp0_other_with_cast = other instanceof SetParticipantData ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    if (!equals(this.data, tmp0_other_with_cast.data))
      return false;
    if (!(this.inputByParticipantRole == tmp0_other_with_cast.inputByParticipantRole))
      return false;
    return true;
  };
  function Companion_34() {
    Companion_instance_35 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.q2i_1 = lazy(tmp_0, ParticipationServiceRequest$Companion$_anonymous__5r02tw);
  }
  protoOf(Companion_34).d1r = function (typeSerial0) {
    return _get_$cachedSerializer__te6jhj_2(this);
  };
  protoOf(Companion_34).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  var Companion_instance_35;
  function Companion_getInstance_39() {
    if (Companion_instance_35 == null)
      new Companion_34();
    return Companion_instance_35;
  }
  function ParticipationServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.i2j_1 = apiVersion;
    return $this;
  }
  function ParticipationServiceRequest() {
    Companion_getInstance_39();
    ApplicationServiceRequest.call(this);
    this.i2j_1 = Companion_getInstance_10().l2d_1;
  }
  protoOf(ParticipationServiceRequest).o22 = function () {
    return this.i2j_1;
  };
  //region block: post-declaration
  protoOf($serializer).du = typeParametersSerializers;
  protoOf($serializer_0).du = typeParametersSerializers;
  protoOf($serializer_1).du = typeParametersSerializers;
  protoOf($serializer_2).du = typeParametersSerializers;
  defineProp(protoOf(DeviceDeploymentStatus), 'device', function () {
    return this.f2d();
  });
  defineProp(protoOf(DeviceDeploymentStatus), 'canBeDeployed', function () {
    return this.g2d();
  });
  defineProp(protoOf(DeviceDeploymentStatus), 'canObtainDeviceDeployment', protoOf(DeviceDeploymentStatus).h2d);
  defineProp(protoOf(NotDeployed), 'isReadyForDeployment', protoOf(NotDeployed).c2d);
  defineProp(protoOf(NotDeployed), 'remainingDevicesToRegisterToObtainDeployment', function () {
    return this.d2d();
  });
  defineProp(protoOf(NotDeployed), 'remainingDevicesToRegisterBeforeDeployment', function () {
    return this.e2d();
  });
  protoOf($serializer_3).du = typeParametersSerializers;
  protoOf($serializer_4).du = typeParametersSerializers;
  protoOf($serializer_5).du = typeParametersSerializers;
  protoOf($serializer_6).du = typeParametersSerializers;
  protoOf($serializer_7).du = typeParametersSerializers;
  defineProp(protoOf(StudyDeploymentStatus), 'createdOn', function () {
    return this.a1z();
  });
  defineProp(protoOf(StudyDeploymentStatus), 'studyDeploymentId', function () {
    return this.s28();
  });
  defineProp(protoOf(StudyDeploymentStatus), 'deviceStatusList', function () {
    return this.d2f();
  });
  defineProp(protoOf(StudyDeploymentStatus), 'participantStatusList', function () {
    return this.e2f();
  });
  defineProp(protoOf(StudyDeploymentStatus), 'startedOn', function () {
    return this.f2f();
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
  protoOf($serializer_25).du = typeParametersSerializers;
  protoOf($serializer_26).du = typeParametersSerializers;
  protoOf($serializer_27).du = typeParametersSerializers;
  protoOf($serializer_28).du = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_23 = new Companion_22();
  Companion_instance_26 = new Companion_25();
  Companion_instance_27 = new Companion_26();
  Companion_instance_28 = new Companion_27();
  Companion_instance_29 = new Companion_28();
  Companion_instance_31 = new Companion_30();
  Companion_instance_32 = new Companion_31();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$application = $dk$cachet$carp$deployments.application || ($dk$cachet$carp$deployments.application = {});
    $dk$cachet$carp$deployments$application.DeviceDeploymentStatus = DeviceDeploymentStatus;
    $dk$cachet$carp$deployments$application.DeviceDeploymentStatus.NotDeployed = NotDeployed;
    $dk$cachet$carp$deployments$application.DeviceDeploymentStatus.Unregistered = Unregistered;
    defineProp($dk$cachet$carp$deployments$application.DeviceDeploymentStatus.Unregistered, 'Companion', Companion_getInstance_5);
    $dk$cachet$carp$deployments$application.DeviceDeploymentStatus.Registered = Registered;
    defineProp($dk$cachet$carp$deployments$application.DeviceDeploymentStatus.Registered, 'Companion', Companion_getInstance_6);
    $dk$cachet$carp$deployments$application.DeviceDeploymentStatus.Deployed = Deployed;
    defineProp($dk$cachet$carp$deployments$application.DeviceDeploymentStatus.Deployed, 'Companion', Companion_getInstance_7);
    $dk$cachet$carp$deployments$application.DeviceDeploymentStatus.NeedsRedeployment = NeedsRedeployment;
    defineProp($dk$cachet$carp$deployments$application.DeviceDeploymentStatus.NeedsRedeployment, 'Companion', Companion_getInstance_8);
    defineProp($dk$cachet$carp$deployments$application.DeviceDeploymentStatus, 'Companion', Companion_getInstance_9);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$application = $dk$cachet$carp$deployments.application || ($dk$cachet$carp$deployments.application = {});
    $dk$cachet$carp$deployments$application.PrimaryDeviceDeployment = PrimaryDeviceDeployment;
    $dk$cachet$carp$deployments$application.PrimaryDeviceDeployment.RuntimeDeviceInfo = RuntimeDeviceInfo;
    defineProp($dk$cachet$carp$deployments$application.PrimaryDeviceDeployment, 'Companion', Companion_getInstance_11);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$application = $dk$cachet$carp$deployments.application || ($dk$cachet$carp$deployments.application = {});
    $dk$cachet$carp$deployments$application.StudyDeploymentStatus = StudyDeploymentStatus;
    $dk$cachet$carp$deployments$application.StudyDeploymentStatus.Invited = Invited;
    defineProp($dk$cachet$carp$deployments$application.StudyDeploymentStatus.Invited, 'Companion', Companion_getInstance_12);
    $dk$cachet$carp$deployments$application.StudyDeploymentStatus.DeployingDevices = DeployingDevices;
    defineProp($dk$cachet$carp$deployments$application.StudyDeploymentStatus.DeployingDevices, 'Companion', Companion_getInstance_13);
    $dk$cachet$carp$deployments$application.StudyDeploymentStatus.Running = Running;
    defineProp($dk$cachet$carp$deployments$application.StudyDeploymentStatus.Running, 'Companion', Companion_getInstance_14);
    $dk$cachet$carp$deployments$application.StudyDeploymentStatus.Stopped = Stopped;
    defineProp($dk$cachet$carp$deployments$application.StudyDeploymentStatus.Stopped, 'Companion', Companion_getInstance_15);
    defineProp($dk$cachet$carp$deployments$application.StudyDeploymentStatus, 'Companion', Companion_getInstance_16);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$application = $dk$cachet$carp$deployments.application || ($dk$cachet$carp$deployments.application = {});
    $dk$cachet$carp$deployments$application.throwIfInvalidInvitations = throwIfInvalidInvitations;
    $dk$cachet$carp$deployments$application.throwIfInvalidPreregistrations = throwIfInvalidPreregistrations;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$application = $dk$cachet$carp$deployments.application || ($dk$cachet$carp$deployments.application = {});
    var $dk$cachet$carp$deployments$application$users = $dk$cachet$carp$deployments$application.users || ($dk$cachet$carp$deployments$application.users = {});
    $dk$cachet$carp$deployments$application$users.ActiveParticipationInvitation = ActiveParticipationInvitation;
    defineProp($dk$cachet$carp$deployments$application$users.ActiveParticipationInvitation, 'Companion', Companion_getInstance_17);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$application = $dk$cachet$carp$deployments.application || ($dk$cachet$carp$deployments.application = {});
    var $dk$cachet$carp$deployments$application$users = $dk$cachet$carp$deployments$application.users || ($dk$cachet$carp$deployments$application.users = {});
    $dk$cachet$carp$deployments$application$users.AssignedPrimaryDevice = AssignedPrimaryDevice;
    defineProp($dk$cachet$carp$deployments$application$users.AssignedPrimaryDevice, 'Companion', Companion_getInstance_18);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$application = $dk$cachet$carp$deployments.application || ($dk$cachet$carp$deployments.application = {});
    var $dk$cachet$carp$deployments$application$users = $dk$cachet$carp$deployments$application.users || ($dk$cachet$carp$deployments$application.users = {});
    $dk$cachet$carp$deployments$application$users.ParticipantData = ParticipantData;
    $dk$cachet$carp$deployments$application$users.ParticipantData.RoleData = RoleData;
    defineProp($dk$cachet$carp$deployments$application$users.ParticipantData.RoleData, 'Companion', Companion_getInstance_19);
    defineProp($dk$cachet$carp$deployments$application$users.ParticipantData, 'Companion', Companion_getInstance_20);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$application = $dk$cachet$carp$deployments.application || ($dk$cachet$carp$deployments.application = {});
    var $dk$cachet$carp$deployments$application$users = $dk$cachet$carp$deployments$application.users || ($dk$cachet$carp$deployments$application.users = {});
    $dk$cachet$carp$deployments$application$users.ParticipantInvitation = ParticipantInvitation;
    defineProp($dk$cachet$carp$deployments$application$users.ParticipantInvitation, 'Companion', Companion_getInstance_21);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$application = $dk$cachet$carp$deployments.application || ($dk$cachet$carp$deployments.application = {});
    var $dk$cachet$carp$deployments$application$users = $dk$cachet$carp$deployments$application.users || ($dk$cachet$carp$deployments$application.users = {});
    $dk$cachet$carp$deployments$application$users.ParticipantStatus = ParticipantStatus;
    defineProp($dk$cachet$carp$deployments$application$users.ParticipantStatus, 'Companion', Companion_getInstance_22);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$application = $dk$cachet$carp$deployments.application || ($dk$cachet$carp$deployments.application = {});
    var $dk$cachet$carp$deployments$application$users = $dk$cachet$carp$deployments$application.users || ($dk$cachet$carp$deployments$application.users = {});
    $dk$cachet$carp$deployments$application$users.Participation = Participation;
    defineProp($dk$cachet$carp$deployments$application$users.Participation, 'Companion', Companion_getInstance_23);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$application = $dk$cachet$carp$deployments.application || ($dk$cachet$carp$deployments.application = {});
    var $dk$cachet$carp$deployments$application$users = $dk$cachet$carp$deployments$application.users || ($dk$cachet$carp$deployments$application.users = {});
    $dk$cachet$carp$deployments$application$users.StudyInvitation = StudyInvitation;
    defineProp($dk$cachet$carp$deployments$application$users.StudyInvitation, 'Companion', Companion_getInstance_24);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$infrastructure = $dk$cachet$carp$deployments.infrastructure || ($dk$cachet$carp$deployments.infrastructure = {});
    $dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest = DeploymentServiceRequest;
    defineProp($dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest, 'Serializer', Serializer_getInstance);
    $dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.CreateStudyDeployment = CreateStudyDeployment;
    defineProp($dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.CreateStudyDeployment, 'Companion', Companion_getInstance_25);
    $dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.RemoveStudyDeployments = RemoveStudyDeployments;
    defineProp($dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.RemoveStudyDeployments, 'Companion', Companion_getInstance_26);
    $dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.GetStudyDeploymentStatus = GetStudyDeploymentStatus;
    defineProp($dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.GetStudyDeploymentStatus, 'Companion', Companion_getInstance_27);
    $dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.GetStudyDeploymentStatusList = GetStudyDeploymentStatusList;
    defineProp($dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.GetStudyDeploymentStatusList, 'Companion', Companion_getInstance_28);
    $dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.RegisterDevice = RegisterDevice;
    defineProp($dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.RegisterDevice, 'Companion', Companion_getInstance_29);
    $dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.UnregisterDevice = UnregisterDevice;
    defineProp($dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.UnregisterDevice, 'Companion', Companion_getInstance_30);
    $dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.GetDeviceDeploymentFor = GetDeviceDeploymentFor;
    defineProp($dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.GetDeviceDeploymentFor, 'Companion', Companion_getInstance_31);
    $dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.DeviceDeployed = DeviceDeployed;
    defineProp($dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.DeviceDeployed, 'Companion', Companion_getInstance_32);
    $dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.Stop = Stop;
    defineProp($dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest.Stop, 'Companion', Companion_getInstance_33);
    defineProp($dk$cachet$carp$deployments$infrastructure.DeploymentServiceRequest, 'Companion', Companion_getInstance_34);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$deployments = $dk$cachet$carp.deployments || ($dk$cachet$carp.deployments = {});
    var $dk$cachet$carp$deployments$infrastructure = $dk$cachet$carp$deployments.infrastructure || ($dk$cachet$carp$deployments.infrastructure = {});
    $dk$cachet$carp$deployments$infrastructure.ParticipationServiceRequest = ParticipationServiceRequest;
    defineProp($dk$cachet$carp$deployments$infrastructure.ParticipationServiceRequest, 'Serializer', Serializer_getInstance_0);
    $dk$cachet$carp$deployments$infrastructure.ParticipationServiceRequest.GetActiveParticipationInvitations = GetActiveParticipationInvitations;
    defineProp($dk$cachet$carp$deployments$infrastructure.ParticipationServiceRequest.GetActiveParticipationInvitations, 'Companion', Companion_getInstance_35);
    $dk$cachet$carp$deployments$infrastructure.ParticipationServiceRequest.GetParticipantData = GetParticipantData;
    defineProp($dk$cachet$carp$deployments$infrastructure.ParticipationServiceRequest.GetParticipantData, 'Companion', Companion_getInstance_36);
    $dk$cachet$carp$deployments$infrastructure.ParticipationServiceRequest.GetParticipantDataList = GetParticipantDataList;
    defineProp($dk$cachet$carp$deployments$infrastructure.ParticipationServiceRequest.GetParticipantDataList, 'Companion', Companion_getInstance_37);
    $dk$cachet$carp$deployments$infrastructure.ParticipationServiceRequest.SetParticipantData = SetParticipantData;
    defineProp($dk$cachet$carp$deployments$infrastructure.ParticipationServiceRequest.SetParticipantData, 'Companion', Companion_getInstance_38);
    defineProp($dk$cachet$carp$deployments$infrastructure.ParticipationServiceRequest, 'Companion', Companion_getInstance_39);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = DeployingDevices;
  _.$_$.b = Invited;
  _.$_$.c = Running;
  _.$_$.d = Stopped;
  _.$_$.e = $serializer_getInstance_18;
  _.$_$.f = Companion_getInstance_16;
  //endregion
  return _;
}));

//# sourceMappingURL=carp-deployments-core-generated.js.map
