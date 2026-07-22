(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@cachet/carp-common-generated', '@cachet/kotlin-kotlin-stdlib', '@cachet/kotlinx-serialization-kotlinx-serialization-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@cachet/carp-common-generated'), require('@cachet/kotlin-kotlin-stdlib'), require('@cachet/kotlinx-serialization-kotlinx-serialization-core'));
  else {
    if (typeof globalThis['carp-common-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-protocols-core-generated'. Its dependency 'carp-common-generated' was not found. Please, check whether 'carp-common-generated' is loaded prior to 'carp-protocols-core-generated'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'carp-protocols-core-generated'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'carp-protocols-core-generated'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'carp-protocols-core-generated'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'carp-protocols-core-generated'.");
    }
    globalThis['carp-protocols-core-generated'] = factory(typeof globalThis['carp-protocols-core-generated'] === 'undefined' ? {} : globalThis['carp-protocols-core-generated'], globalThis['carp-common-generated'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_dk_cachet_carp_common_carp_common, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ApiVersion = kotlin_dk_cachet_carp_common_carp_common.$_$.d;
  var protoOf = kotlin_kotlin.$_$.b9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h8;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var InstantSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var THROW_CCE = kotlin_kotlin.$_$.sb;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var initMetadataForObject = kotlin_kotlin.$_$.m8;
  var VOID = kotlin_kotlin.$_$.b;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var Unit_instance = kotlin_kotlin.$_$.u2;
  var objectCreate = kotlin_kotlin.$_$.a9;
  var System_instance = kotlin_kotlin.$_$.j2;
  var getStringHashCode = kotlin_kotlin.$_$.e8;
  var initMetadataForClass = kotlin_kotlin.$_$.g8;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z2;
  var addAll = kotlin_kotlin.$_$.q4;
  var isPrimary = kotlin_dk_cachet_carp_common_carp_common.$_$.c;
  var Companion_instance = kotlin_dk_cachet_carp_common_carp_common.$_$.v;
  var UnitSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var Companion_instance_0 = kotlin_dk_cachet_carp_common_carp_common.$_$.t;
  var TaskConfiguration = kotlin_dk_cachet_carp_common_carp_common.$_$.e;
  var getKClass = kotlin_kotlin.$_$.q9;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var TriggerConfiguration = kotlin_dk_cachet_carp_common_carp_common.$_$.g;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var $serializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.x;
  var $serializer_getInstance_0 = kotlin_dk_cachet_carp_common_carp_common.$_$.b1;
  var $serializer_getInstance_1 = kotlin_dk_cachet_carp_common_carp_common.$_$.a1;
  var Companion_instance_1 = kotlin_dk_cachet_carp_common_carp_common.$_$.d1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.x2;
  var lazy = kotlin_kotlin.$_$.lc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w4;
  var mapCapacity = kotlin_kotlin.$_$.c6;
  var coerceAtLeast = kotlin_kotlin.$_$.f9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.h3;
  var to = kotlin_kotlin.$_$.qc;
  var toSet = kotlin_kotlin.$_$.t6;
  var minus = kotlin_kotlin.$_$.e6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.y2;
  var TaskControl = kotlin_dk_cachet_carp_common_carp_common.$_$.f;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.i3;
  var Roles = kotlin_dk_cachet_carp_common_carp_common.$_$.j;
  var toMap = kotlin_kotlin.$_$.s6;
  var UUIDSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.i1;
  var emptySet = kotlin_kotlin.$_$.n5;
  var equals = kotlin_kotlin.$_$.z7;
  var emptyMap = kotlin_kotlin.$_$.m5;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var toString = kotlin_kotlin.$_$.d9;
  var toString_0 = kotlin_kotlin.$_$.pc;
  var hashCode = kotlin_kotlin.$_$.f8;
  var defineProp = kotlin_kotlin.$_$.y7;
  var Snapshot = kotlin_dk_cachet_carp_common_carp_common.$_$.p;
  var plus = kotlin_kotlin.$_$.g6;
  var toList = kotlin_kotlin.$_$.p6;
  var PrimaryDeviceConfiguration = kotlin_dk_cachet_carp_common_carp_common.$_$.b;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s3;
  var sorted = kotlin_kotlin.$_$.m6;
  var first = kotlin_kotlin.$_$.p5;
  var last = kotlin_kotlin.$_$.a6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v3;
  var Companion_instance_2 = kotlin_dk_cachet_carp_common_carp_common.$_$.h1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.k3;
  var listOf = kotlin_kotlin.$_$.b6;
  var All_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.y;
  var checkIndexOverflow = kotlin_kotlin.$_$.v4;
  var indexOf = kotlin_kotlin.$_$.t5;
  var ensureNotNull = kotlin_kotlin.$_$.hc;
  var toMap_0 = kotlin_kotlin.$_$.r6;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.u3;
  var IllegalStateException = kotlin_kotlin.$_$.pb;
  var AbstractMap = kotlin_kotlin.$_$.b4;
  var ExtractUniqueKeyMap = kotlin_dk_cachet_carp_common_carp_common.$_$.o;
  var KtMap = kotlin_kotlin.$_$.l4;
  var isInterface = kotlin_kotlin.$_$.v8;
  var plus_0 = kotlin_kotlin.$_$.h6;
  var hasNoConflicts = kotlin_dk_cachet_carp_common_carp_common.$_$.k;
  var IllegalArgumentException = kotlin_kotlin.$_$.ob;
  var initMetadataForInterface = kotlin_kotlin.$_$.k8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nc;
  var Collection = kotlin_kotlin.$_$.d4;
  var All = kotlin_dk_cachet_carp_common_carp_common.$_$.i;
  var AggregateRoot = kotlin_dk_cachet_carp_common_carp_common.$_$.n;
  var constructCallableReference = kotlin_kotlin.$_$.x7;
  var ApiVersionSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.w;
  var ignoreTypeParameters = kotlin_dk_cachet_carp_common_carp_common.$_$.r;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var arrayOf = kotlin_kotlin.$_$.ec;
  var createKType = kotlin_kotlin.$_$.o9;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var ApplicationServiceRequest = kotlin_dk_cachet_carp_common_carp_common.$_$.s;
  var Unit = kotlin_kotlin.$_$.dc;
  var KtList = kotlin_kotlin.$_$.i4;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.n9;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ProtocolVersion, 'ProtocolVersion', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DeviceConnection, 'DeviceConnection', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StudyProtocolSnapshot, 'StudyProtocolSnapshot', VOID, VOID, [Snapshot], VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForClass(Event, 'Event');
  initMetadataForClass(PrimaryDeviceAdded, 'PrimaryDeviceAdded', VOID, Event);
  initMetadataForClass(ConnectedDeviceAdded, 'ConnectedDeviceAdded', VOID, Event);
  initMetadataForClass(TriggerAdded, 'TriggerAdded', VOID, Event);
  initMetadataForClass(TaskAdded, 'TaskAdded', VOID, Event);
  initMetadataForClass(TaskControlAdded, 'TaskControlAdded', VOID, Event);
  initMetadataForClass(ParticipantRoleAdded, 'ParticipantRoleAdded', VOID, Event);
  initMetadataForClass(DeviceAssignmentChanged, 'DeviceAssignmentChanged', VOID, Event);
  initMetadataForClass(ExpectedParticipantDataAdded, 'ExpectedParticipantDataAdded', VOID, Event);
  initMetadataForObject(Factory, 'Factory');
  function getConnectedDevices$default(primaryDevice, includeChainedDevices, $super) {
    includeChainedDevices = includeChainedDevices === VOID ? false : includeChainedDevices;
    return $super === VOID ? this.r29(primaryDevice, includeChainedDevices) : $super.r29.call(this, primaryDevice, includeChainedDevices);
  }
  initMetadataForInterface(ProtocolDeviceConfiguration, 'ProtocolDeviceConfiguration');
  function isValidAssignment(assignment) {
    var tmp;
    if (assignment instanceof All) {
      tmp = true;
    } else {
      if (assignment instanceof Roles) {
        // Inline function 'kotlin.collections.map' call
        var this_0 = this.a28();
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
        var _iterator__ex2g4s = this_0.r();
        while (_iterator__ex2g4s.s()) {
          var item = _iterator__ex2g4s.t();
          var tmp$ret$2 = item.role;
          destination.y(tmp$ret$2);
        }
        var roles = destination;
        var tmp0 = assignment.roleNames;
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.collections.all' call
          var tmp_0;
          if (isInterface(tmp0, Collection)) {
            tmp_0 = tmp0.p();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_0;
          }
          var _iterator__ex2g4s_0 = tmp0.r();
          while (_iterator__ex2g4s_0.s()) {
            var element = _iterator__ex2g4s_0.t();
            if (!roles.o1(element)) {
              tmp$ret$3 = false;
              break $l$block_0;
            }
          }
          tmp$ret$3 = true;
        }
        tmp = tmp$ret$3;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  initMetadataForInterface(ProtocolParticipantConfiguration, 'ProtocolParticipantConfiguration');
  initMetadataForClass(StudyProtocolComposition, 'StudyProtocolComposition', VOID, AggregateRoot, [ProtocolDeviceConfiguration, ProtocolParticipantConfiguration]);
  initMetadataForClass(StudyProtocol, 'StudyProtocol', VOID, StudyProtocolComposition);
  initMetadataForClass(TaskControl_0, 'TaskControl');
  initMetadataForClass(TriggerWithId, 'TriggerWithId');
  initMetadataForClass(EmptyProtocolDeviceConfiguration, 'EmptyProtocolDeviceConfiguration', EmptyProtocolDeviceConfiguration, AbstractMap, [ProtocolDeviceConfiguration]);
  initMetadataForClass(EmptyProtocolParticipantConfiguration, 'EmptyProtocolParticipantConfiguration', EmptyProtocolParticipantConfiguration, VOID, [ProtocolParticipantConfiguration]);
  initMetadataForClass(EmptyProtocolTaskConfiguration, 'EmptyProtocolTaskConfiguration', EmptyProtocolTaskConfiguration, AbstractMap);
  initMetadataForClass(BackgroundTaskWithNoMeasuresWarning, 'BackgroundTaskWithNoMeasuresWarning');
  initMetadataForClass(NoPrimaryDeviceError, 'NoPrimaryDeviceError');
  initMetadataForClass(OnlyOptionalDevicesWarning, 'OnlyOptionalDevicesWarning', OnlyOptionalDevicesWarning);
  initMetadataForClass(UnexpectedMeasuresWarning, 'UnexpectedMeasuresWarning');
  initMetadataForClass(UnstartedTasksWarning, 'UnstartedTasksWarning');
  initMetadataForClass(UnusedDevicesWarning, 'UnusedDevicesWarning');
  initMetadataForClass(UseCompositeTaskWarning, 'UseCompositeTaskWarning');
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(Serializer, 'Serializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ProtocolFactoryServiceRequest, 'ProtocolFactoryServiceRequest', VOID, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_5});
  initMetadataForClass(CreateCustomProtocol, 'CreateCustomProtocol', VOID, ProtocolFactoryServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_5, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_11);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(Serializer_0, 'Serializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ProtocolServiceRequest, 'ProtocolServiceRequest', VOID, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_12});
  initMetadataForClass(Add, 'Add', VOID, ProtocolServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForClass(AddVersion, 'AddVersion', VOID, ProtocolServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForClass(UpdateParticipantDataConfiguration, 'UpdateParticipantDataConfiguration', VOID, ProtocolServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForClass(GetBy, 'GetBy', VOID, ProtocolServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForClass(GetAllForOwner, 'GetAllForOwner', VOID, ProtocolServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForClass(GetVersionHistoryFor, 'GetVersionHistoryFor', VOID, ProtocolServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForCompanion(Companion_12, VOID, [SerializerFactory]);
  //endregion
  function Companion() {
    Companion_instance_3 = this;
    this.h26_1 = new ApiVersion(1, 1);
  }
  var Companion_instance_3;
  function Companion_getInstance() {
    if (Companion_instance_3 == null)
      new Companion();
    return Companion_instance_3;
  }
  function Companion_0() {
    Companion_instance_4 = this;
    this.i26_1 = new ApiVersion(1, 1);
  }
  var Companion_instance_4;
  function Companion_getInstance_0() {
    if (Companion_instance_4 == null)
      new Companion_0();
    return Companion_instance_4;
  }
  function Companion_1() {
  }
  var Companion_instance_5;
  function Companion_getInstance_1() {
    return Companion_instance_5;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.application.ProtocolVersion', this, 2);
    tmp0_serialDesc.pv('tag', false);
    tmp0_serialDesc.pv('date', false);
    this.j26_1 = tmp0_serialDesc;
  }
  protoOf($serializer).k26 = function (encoder, value) {
    var tmp0_desc = this.j26_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.mp(tmp0_desc, 0, value.tag);
    tmp1_output.op(tmp0_desc, 1, InstantSerializer_getInstance(), value.date);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer).nk = function (encoder, value) {
    return this.k26(encoder, value instanceof ProtocolVersion ? value : THROW_CCE());
  };
  protoOf($serializer).ok = function (decoder) {
    var tmp0_desc = this.j26_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, InstantSerializer_getInstance(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, InstantSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return ProtocolVersion_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).mk = function () {
    return this.j26_1;
  };
  protoOf($serializer).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), InstantSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance_2() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function ProtocolVersion_init_$Init$(seen0, tag, date, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_2().j26_1);
    }
    $this.tag = tag;
    $this.date = date;
    return $this;
  }
  function ProtocolVersion_init_$Create$(seen0, tag, date, serializationConstructorMarker) {
    return ProtocolVersion_init_$Init$(seen0, tag, date, serializationConstructorMarker, objectCreate(protoOf(ProtocolVersion)));
  }
  function ProtocolVersion(tag, date) {
    date = date === VOID ? System_instance.lg() : date;
    this.tag = tag;
    this.date = date;
  }
  protoOf(ProtocolVersion).l26 = function () {
    return this.tag;
  };
  protoOf(ProtocolVersion).m26 = function () {
    return this.date;
  };
  protoOf(ProtocolVersion).sd = function () {
    return this.tag;
  };
  protoOf(ProtocolVersion).td = function () {
    return this.date;
  };
  protoOf(ProtocolVersion).n26 = function (tag, date) {
    return new ProtocolVersion(tag, date);
  };
  protoOf(ProtocolVersion).copy = function (tag, date, $super) {
    tag = tag === VOID ? this.tag : tag;
    date = date === VOID ? this.date : date;
    return $super === VOID ? this.n26(tag, date) : $super.n26.call(this, tag, date);
  };
  protoOf(ProtocolVersion).toString = function () {
    return 'ProtocolVersion(tag=' + this.tag + ', date=' + this.date.toString() + ')';
  };
  protoOf(ProtocolVersion).hashCode = function () {
    var result = getStringHashCode(this.tag);
    result = imul(result, 31) + this.date.hashCode() | 0;
    return result;
  };
  protoOf(ProtocolVersion).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProtocolVersion))
      return false;
    if (!(this.tag === other.tag))
      return false;
    if (!this.date.equals(other.date))
      return false;
    return true;
  };
  function Companion_2() {
  }
  var Companion_instance_6;
  function Companion_getInstance_2() {
    return Companion_instance_6;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.application.StudyProtocolSnapshot.DeviceConnection', this, 2);
    tmp0_serialDesc.pv('roleName', false);
    tmp0_serialDesc.pv('connectedToRoleName', false);
    this.o26_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).p26 = function (encoder, value) {
    var tmp0_desc = this.o26_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.mp(tmp0_desc, 0, value.roleName);
    tmp1_output.mp(tmp0_desc, 1, value.connectedToRoleName);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_0).nk = function (encoder, value) {
    return this.p26(encoder, value instanceof DeviceConnection ? value : THROW_CCE());
  };
  protoOf($serializer_0).ok = function (decoder) {
    var tmp0_desc = this.o26_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ho(tmp0_desc, 1);
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
            tmp5_local1 = tmp6_input.ho(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return DeviceConnection_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).mk = function () {
    return this.o26_1;
  };
  protoOf($serializer_0).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_3() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function DeviceConnection_init_$Init$(seen0, roleName, connectedToRoleName, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().o26_1);
    }
    $this.roleName = roleName;
    $this.connectedToRoleName = connectedToRoleName;
    return $this;
  }
  function DeviceConnection_init_$Create$(seen0, roleName, connectedToRoleName, serializationConstructorMarker) {
    return DeviceConnection_init_$Init$(seen0, roleName, connectedToRoleName, serializationConstructorMarker, objectCreate(protoOf(DeviceConnection)));
  }
  function getConnections($this, protocol, primaryDevice) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var connections = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = protocol.q26(primaryDevice).r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      connections.y(new DeviceConnection(element.roleName, primaryDevice.roleName));
      if (isPrimary(element)) {
        addAll(connections, getConnections(Companion_getInstance_3(), protocol, element));
      }
    }
    return connections;
  }
  function StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp() {
    return new LinkedHashSetSerializer(Companion_instance.y1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()));
  }
  function StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_0() {
    return new LinkedHashSetSerializer(Companion_instance_0.i1u(UnitSerializer_getInstance(), UnitSerializer_getInstance()));
  }
  function StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_1() {
    return new LinkedHashSetSerializer($serializer_getInstance_3());
  }
  function StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_2() {
    var tmp = getKClass(TaskConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashSetSerializer(PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0));
  }
  function StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_3() {
    var tmp = IntSerializer_getInstance();
    var tmp_0 = getKClass(TriggerConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashMapSerializer(tmp, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$0));
  }
  function StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_4() {
    return new LinkedHashSetSerializer($serializer_getInstance());
  }
  function StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_5() {
    return new LinkedHashSetSerializer($serializer_getInstance_0());
  }
  function StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_6() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), new LinkedHashSetSerializer(StringSerializer_getInstance()));
  }
  function StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_7() {
    return new LinkedHashSetSerializer($serializer_getInstance_1());
  }
  function StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_8() {
    return Companion_instance_1.i18();
  }
  function DeviceConnection(roleName, connectedToRoleName) {
    this.roleName = roleName;
    this.connectedToRoleName = connectedToRoleName;
  }
  protoOf(DeviceConnection).q1r = function () {
    return this.roleName;
  };
  protoOf(DeviceConnection).r26 = function () {
    return this.connectedToRoleName;
  };
  protoOf(DeviceConnection).sd = function () {
    return this.roleName;
  };
  protoOf(DeviceConnection).td = function () {
    return this.connectedToRoleName;
  };
  protoOf(DeviceConnection).m1i = function (roleName, connectedToRoleName) {
    return new DeviceConnection(roleName, connectedToRoleName);
  };
  protoOf(DeviceConnection).copy = function (roleName, connectedToRoleName, $super) {
    roleName = roleName === VOID ? this.roleName : roleName;
    connectedToRoleName = connectedToRoleName === VOID ? this.connectedToRoleName : connectedToRoleName;
    return $super === VOID ? this.m1i(roleName, connectedToRoleName) : $super.m1i.call(this, roleName, connectedToRoleName);
  };
  protoOf(DeviceConnection).toString = function () {
    return 'DeviceConnection(roleName=' + this.roleName + ', connectedToRoleName=' + this.connectedToRoleName + ')';
  };
  protoOf(DeviceConnection).hashCode = function () {
    var result = getStringHashCode(this.roleName);
    result = imul(result, 31) + getStringHashCode(this.connectedToRoleName) | 0;
    return result;
  };
  protoOf(DeviceConnection).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeviceConnection))
      return false;
    if (!(this.roleName === other.roleName))
      return false;
    if (!(this.connectedToRoleName === other.connectedToRoleName))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_11 = lazy(tmp_10, StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_4);
    var tmp_12 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_13 = lazy(tmp_12, StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_5);
    var tmp_14 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_15 = lazy(tmp_14, StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_6);
    var tmp_16 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_17 = lazy(tmp_16, StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_7);
    var tmp_18 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s26_1 = [null, null, null, null, null, null, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp_13, tmp_15, tmp_17, lazy(tmp_18, StudyProtocolSnapshot$Companion$$childSerializers$_anonymous__imspvp_8)];
  }
  protoOf(Companion_3).fromProtocol = function (protocol, version) {
    // Inline function 'kotlin.collections.associate' call
    var this_0 = protocol.i27();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.j27_1, element.k27_1);
      destination.k2(pair.first, pair.second);
    }
    var triggers = destination;
    var tmp = protocol.k();
    var tmp_0 = protocol.e1y();
    var tmp_1 = toSet(protocol.s27());
    var tmp_2 = toSet(minus(protocol.t27(), protocol.s27()));
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = protocol.s27();
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = tmp0.r();
    while (_iterator__ex2g4s_0.s()) {
      var element_0 = _iterator__ex2g4s_0.t();
      var list = getConnections(Companion_getInstance_3(), protocol, element_0);
      addAll(destination_0, list);
    }
    var tmp_3 = toSet(destination_0);
    var tmp_4 = toSet(protocol.u27());
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_1 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_1 = triggers.f1().r();
    while (_iterator__ex2g4s_1.s()) {
      var element_1 = _iterator__ex2g4s_1.t();
      // Inline function 'kotlin.collections.map' call
      var this_1 = protocol.v27(element_1.s2());
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
      var _iterator__ex2g4s_2 = this_1.r();
      while (_iterator__ex2g4s_2.s()) {
        var item = _iterator__ex2g4s_2.t();
        var tmp$ret$13 = to(element_1, item);
        destination_2.y(tmp$ret$13);
      }
      var list_0 = destination_2;
      addAll(destination_1, list_0);
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_1, 10));
    var _iterator__ex2g4s_3 = destination_1.r();
    while (_iterator__ex2g4s_3.s()) {
      var item_0 = _iterator__ex2g4s_3.t();
      var trigger = item_0.sd();
      var tc = item_0.td();
      var tmp$ret$16 = new TaskControl(trigger.r2(), tc.x27_1.name, tc.y27_1.roleName, tc.z27_1);
      destination_3.y(tmp$ret$16);
    }
    var tmp_5 = toSet(destination_3);
    var tmp_6 = toSet(protocol.a28());
    // Inline function 'kotlin.collections.filter' call
    var tmp0_0 = protocol.b28();
    // Inline function 'kotlin.collections.filterTo' call
    var destination_4 = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_4 = tmp0_0.f1().r();
    while (_iterator__ex2g4s_4.s()) {
      var element_2 = _iterator__ex2g4s_4.t();
      var tmp_7 = element_2.s2();
      if (tmp_7 instanceof Roles) {
        destination_4.k2(element_2.r2(), element_2.s2());
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_5 = ArrayList_init_$Create$_0(destination_4.a1());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_5 = destination_4.f1().r();
    while (_iterator__ex2g4s_5.s()) {
      var item_1 = _iterator__ex2g4s_5.t();
      var tmp_8 = item_1.r2().roleName;
      var tmp_9 = item_1.s2();
      var tmp$ret$24 = to(tmp_8, (tmp_9 instanceof Roles ? tmp_9 : THROW_CCE()).roleNames);
      destination_5.y(tmp$ret$24);
    }
    return new StudyProtocolSnapshot(protocol.a22_1, protocol.b22_1, version, protocol.a27_1, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, triggers, tmp_5, tmp_6, toMap(destination_5), toSet(protocol.c28()), protocol.g27_1);
  };
  protoOf(Companion_3).i18 = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_7;
  function Companion_getInstance_3() {
    if (Companion_instance_7 == null)
      new Companion_3();
    return Companion_instance_7;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.application.StudyProtocolSnapshot', this, 16);
    tmp0_serialDesc.pv('id', false);
    tmp0_serialDesc.pv('createdOn', false);
    tmp0_serialDesc.pv('version', false);
    tmp0_serialDesc.pv('ownerId', false);
    tmp0_serialDesc.pv('name', false);
    tmp0_serialDesc.pv('description', true);
    tmp0_serialDesc.pv('primaryDevices', true);
    tmp0_serialDesc.pv('connectedDevices', true);
    tmp0_serialDesc.pv('connections', true);
    tmp0_serialDesc.pv('tasks', true);
    tmp0_serialDesc.pv('triggers', true);
    tmp0_serialDesc.pv('taskControls', true);
    tmp0_serialDesc.pv('participantRoles', true);
    tmp0_serialDesc.pv('assignedDevices', true);
    tmp0_serialDesc.pv('expectedParticipantData', true);
    tmp0_serialDesc.pv('applicationData', true);
    this.d28_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).e28 = function (encoder, value) {
    var tmp0_desc = this.d28_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().s26_1;
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.f28_1);
    tmp1_output.op(tmp0_desc, 1, InstantSerializer_getInstance(), value.g28_1);
    tmp1_output.hp(tmp0_desc, 2, value.h28_1);
    tmp1_output.op(tmp0_desc, 3, UUIDSerializer_getInstance(), value.ownerId);
    tmp1_output.mp(tmp0_desc, 4, value.name);
    if (tmp1_output.up(tmp0_desc, 5) ? true : !(value.description == null)) {
      tmp1_output.qp(tmp0_desc, 5, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.up(tmp0_desc, 6) ? true : !equals(value.primaryDevices, emptySet())) {
      tmp1_output.op(tmp0_desc, 6, tmp2_cached[6].s2(), value.primaryDevices);
    }
    if (tmp1_output.up(tmp0_desc, 7) ? true : !equals(value.connectedDevices, emptySet())) {
      tmp1_output.op(tmp0_desc, 7, tmp2_cached[7].s2(), value.connectedDevices);
    }
    if (tmp1_output.up(tmp0_desc, 8) ? true : !equals(value.connections, emptySet())) {
      tmp1_output.op(tmp0_desc, 8, tmp2_cached[8].s2(), value.connections);
    }
    if (tmp1_output.up(tmp0_desc, 9) ? true : !equals(value.tasks, emptySet())) {
      tmp1_output.op(tmp0_desc, 9, tmp2_cached[9].s2(), value.tasks);
    }
    if (tmp1_output.up(tmp0_desc, 10) ? true : !equals(value.triggers, emptyMap())) {
      tmp1_output.op(tmp0_desc, 10, tmp2_cached[10].s2(), value.triggers);
    }
    if (tmp1_output.up(tmp0_desc, 11) ? true : !equals(value.taskControls, emptySet())) {
      tmp1_output.op(tmp0_desc, 11, tmp2_cached[11].s2(), value.taskControls);
    }
    if (tmp1_output.up(tmp0_desc, 12) ? true : !equals(value.participantRoles, emptySet())) {
      tmp1_output.op(tmp0_desc, 12, tmp2_cached[12].s2(), value.participantRoles);
    }
    if (tmp1_output.up(tmp0_desc, 13) ? true : !equals(value.assignedDevices, emptyMap())) {
      tmp1_output.op(tmp0_desc, 13, tmp2_cached[13].s2(), value.assignedDevices);
    }
    if (tmp1_output.up(tmp0_desc, 14) ? true : !equals(value.expectedParticipantData, emptySet())) {
      tmp1_output.op(tmp0_desc, 14, tmp2_cached[14].s2(), value.expectedParticipantData);
    }
    if (tmp1_output.up(tmp0_desc, 15) ? true : !(value.applicationData == null)) {
      tmp1_output.qp(tmp0_desc, 15, tmp2_cached[15].s2(), value.applicationData);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_1).nk = function (encoder, value) {
    return this.e28(encoder, value instanceof StudyProtocolSnapshot ? value : THROW_CCE());
  };
  protoOf($serializer_1).ok = function (decoder) {
    var tmp0_desc = this.d28_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_input = decoder.xn(tmp0_desc);
    var tmp21_cached = Companion_getInstance_3().s26_1;
    if (tmp20_input.no()) {
      tmp4_local0 = tmp20_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.jo(tmp0_desc, 1, InstantSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.co(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.jo(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.ho(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.lo(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.jo(tmp0_desc, 6, tmp21_cached[6].s2(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.jo(tmp0_desc, 7, tmp21_cached[7].s2(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.jo(tmp0_desc, 8, tmp21_cached[8].s2(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.jo(tmp0_desc, 9, tmp21_cached[9].s2(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.jo(tmp0_desc, 10, tmp21_cached[10].s2(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.jo(tmp0_desc, 11, tmp21_cached[11].s2(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.jo(tmp0_desc, 12, tmp21_cached[12].s2(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.jo(tmp0_desc, 13, tmp21_cached[13].s2(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.jo(tmp0_desc, 14, tmp21_cached[14].s2(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.lo(tmp0_desc, 15, tmp21_cached[15].s2(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.jo(tmp0_desc, 1, InstantSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.co(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.jo(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.ho(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.lo(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.jo(tmp0_desc, 6, tmp21_cached[6].s2(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.jo(tmp0_desc, 7, tmp21_cached[7].s2(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.jo(tmp0_desc, 8, tmp21_cached[8].s2(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.jo(tmp0_desc, 9, tmp21_cached[9].s2(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.jo(tmp0_desc, 10, tmp21_cached[10].s2(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.jo(tmp0_desc, 11, tmp21_cached[11].s2(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.jo(tmp0_desc, 12, tmp21_cached[12].s2(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.jo(tmp0_desc, 13, tmp21_cached[13].s2(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.jo(tmp0_desc, 14, tmp21_cached[14].s2(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.lo(tmp0_desc, 15, tmp21_cached[15].s2(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp20_input.yn(tmp0_desc);
    return StudyProtocolSnapshot_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  };
  protoOf($serializer_1).mk = function () {
    return this.d28_1;
  };
  protoOf($serializer_1).ew = function () {
    var tmp0_cached = Companion_getInstance_3().s26_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), InstantSerializer_getInstance(), IntSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[6].s2(), tmp0_cached[7].s2(), tmp0_cached[8].s2(), tmp0_cached[9].s2(), tmp0_cached[10].s2(), tmp0_cached[11].s2(), tmp0_cached[12].s2(), tmp0_cached[13].s2(), tmp0_cached[14].s2(), get_nullable(tmp0_cached[15].s2())];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_4() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function StudyProtocolSnapshot_init_$Init$(seen0, id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_4().d28_1);
    }
    $this.f28_1 = id;
    $this.g28_1 = createdOn;
    $this.h28_1 = version;
    $this.ownerId = ownerId;
    $this.name = name;
    if (0 === (seen0 & 32))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 64))
      $this.primaryDevices = emptySet();
    else
      $this.primaryDevices = primaryDevices;
    if (0 === (seen0 & 128))
      $this.connectedDevices = emptySet();
    else
      $this.connectedDevices = connectedDevices;
    if (0 === (seen0 & 256))
      $this.connections = emptySet();
    else
      $this.connections = connections;
    if (0 === (seen0 & 512))
      $this.tasks = emptySet();
    else
      $this.tasks = tasks;
    if (0 === (seen0 & 1024))
      $this.triggers = emptyMap();
    else
      $this.triggers = triggers;
    if (0 === (seen0 & 2048))
      $this.taskControls = emptySet();
    else
      $this.taskControls = taskControls;
    if (0 === (seen0 & 4096))
      $this.participantRoles = emptySet();
    else
      $this.participantRoles = participantRoles;
    if (0 === (seen0 & 8192))
      $this.assignedDevices = emptyMap();
    else
      $this.assignedDevices = assignedDevices;
    if (0 === (seen0 & 16384))
      $this.expectedParticipantData = emptySet();
    else
      $this.expectedParticipantData = expectedParticipantData;
    if (0 === (seen0 & 32768))
      $this.applicationData = null;
    else
      $this.applicationData = applicationData;
    return $this;
  }
  function StudyProtocolSnapshot_init_$Create$(seen0, id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData, serializationConstructorMarker) {
    return StudyProtocolSnapshot_init_$Init$(seen0, id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData, serializationConstructorMarker, objectCreate(protoOf(StudyProtocolSnapshot)));
  }
  function StudyProtocolSnapshot(id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData) {
    Companion_getInstance_3();
    description = description === VOID ? null : description;
    primaryDevices = primaryDevices === VOID ? emptySet() : primaryDevices;
    connectedDevices = connectedDevices === VOID ? emptySet() : connectedDevices;
    connections = connections === VOID ? emptySet() : connections;
    tasks = tasks === VOID ? emptySet() : tasks;
    triggers = triggers === VOID ? emptyMap() : triggers;
    taskControls = taskControls === VOID ? emptySet() : taskControls;
    participantRoles = participantRoles === VOID ? emptySet() : participantRoles;
    assignedDevices = assignedDevices === VOID ? emptyMap() : assignedDevices;
    expectedParticipantData = expectedParticipantData === VOID ? emptySet() : expectedParticipantData;
    applicationData = applicationData === VOID ? null : applicationData;
    this.f28_1 = id;
    this.g28_1 = createdOn;
    this.h28_1 = version;
    this.ownerId = ownerId;
    this.name = name;
    this.description = description;
    this.primaryDevices = primaryDevices;
    this.connectedDevices = connectedDevices;
    this.connections = connections;
    this.tasks = tasks;
    this.triggers = triggers;
    this.taskControls = taskControls;
    this.participantRoles = participantRoles;
    this.assignedDevices = assignedDevices;
    this.expectedParticipantData = expectedParticipantData;
    this.applicationData = applicationData;
  }
  protoOf(StudyProtocolSnapshot).m22 = function () {
    return this.f28_1;
  };
  protoOf(StudyProtocolSnapshot).n22 = function () {
    return this.g28_1;
  };
  protoOf(StudyProtocolSnapshot).o22 = function () {
    return this.h28_1;
  };
  protoOf(StudyProtocolSnapshot).i28 = function () {
    return this.ownerId;
  };
  protoOf(StudyProtocolSnapshot).k = function () {
    return this.name;
  };
  protoOf(StudyProtocolSnapshot).e1y = function () {
    return this.description;
  };
  protoOf(StudyProtocolSnapshot).s27 = function () {
    return this.primaryDevices;
  };
  protoOf(StudyProtocolSnapshot).j28 = function () {
    return this.connectedDevices;
  };
  protoOf(StudyProtocolSnapshot).k28 = function () {
    return this.connections;
  };
  protoOf(StudyProtocolSnapshot).u27 = function () {
    return this.tasks;
  };
  protoOf(StudyProtocolSnapshot).i27 = function () {
    return this.triggers;
  };
  protoOf(StudyProtocolSnapshot).l28 = function () {
    return this.taskControls;
  };
  protoOf(StudyProtocolSnapshot).a28 = function () {
    return this.participantRoles;
  };
  protoOf(StudyProtocolSnapshot).m28 = function () {
    return this.assignedDevices;
  };
  protoOf(StudyProtocolSnapshot).c28 = function () {
    return this.expectedParticipantData;
  };
  protoOf(StudyProtocolSnapshot).n28 = function () {
    return this.applicationData;
  };
  protoOf(StudyProtocolSnapshot).toObject = function () {
    return Factory_instance.o28(this);
  };
  protoOf(StudyProtocolSnapshot).sd = function () {
    return this.f28_1;
  };
  protoOf(StudyProtocolSnapshot).td = function () {
    return this.g28_1;
  };
  protoOf(StudyProtocolSnapshot).m1j = function () {
    return this.h28_1;
  };
  protoOf(StudyProtocolSnapshot).l1k = function () {
    return this.ownerId;
  };
  protoOf(StudyProtocolSnapshot).m1p = function () {
    return this.name;
  };
  protoOf(StudyProtocolSnapshot).n1s = function () {
    return this.description;
  };
  protoOf(StudyProtocolSnapshot).o1s = function () {
    return this.primaryDevices;
  };
  protoOf(StudyProtocolSnapshot).p1s = function () {
    return this.connectedDevices;
  };
  protoOf(StudyProtocolSnapshot).p28 = function () {
    return this.connections;
  };
  protoOf(StudyProtocolSnapshot).q28 = function () {
    return this.tasks;
  };
  protoOf(StudyProtocolSnapshot).r28 = function () {
    return this.triggers;
  };
  protoOf(StudyProtocolSnapshot).s28 = function () {
    return this.taskControls;
  };
  protoOf(StudyProtocolSnapshot).t28 = function () {
    return this.participantRoles;
  };
  protoOf(StudyProtocolSnapshot).u28 = function () {
    return this.assignedDevices;
  };
  protoOf(StudyProtocolSnapshot).v28 = function () {
    return this.expectedParticipantData;
  };
  protoOf(StudyProtocolSnapshot).w28 = function () {
    return this.applicationData;
  };
  protoOf(StudyProtocolSnapshot).x28 = function (id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData) {
    return new StudyProtocolSnapshot(id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData);
  };
  protoOf(StudyProtocolSnapshot).copy = function (id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData, $super) {
    id = id === VOID ? this.f28_1 : id;
    createdOn = createdOn === VOID ? this.g28_1 : createdOn;
    version = version === VOID ? this.h28_1 : version;
    ownerId = ownerId === VOID ? this.ownerId : ownerId;
    name = name === VOID ? this.name : name;
    description = description === VOID ? this.description : description;
    primaryDevices = primaryDevices === VOID ? this.primaryDevices : primaryDevices;
    connectedDevices = connectedDevices === VOID ? this.connectedDevices : connectedDevices;
    connections = connections === VOID ? this.connections : connections;
    tasks = tasks === VOID ? this.tasks : tasks;
    triggers = triggers === VOID ? this.triggers : triggers;
    taskControls = taskControls === VOID ? this.taskControls : taskControls;
    participantRoles = participantRoles === VOID ? this.participantRoles : participantRoles;
    assignedDevices = assignedDevices === VOID ? this.assignedDevices : assignedDevices;
    expectedParticipantData = expectedParticipantData === VOID ? this.expectedParticipantData : expectedParticipantData;
    applicationData = applicationData === VOID ? this.applicationData : applicationData;
    return $super === VOID ? this.x28(id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData) : $super.x28.call(this, id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData);
  };
  protoOf(StudyProtocolSnapshot).toString = function () {
    return 'StudyProtocolSnapshot(id=' + this.f28_1.toString() + ', createdOn=' + this.g28_1.toString() + ', version=' + this.h28_1 + ', ownerId=' + this.ownerId.toString() + ', name=' + this.name + ', description=' + this.description + ', primaryDevices=' + toString(this.primaryDevices) + ', connectedDevices=' + toString(this.connectedDevices) + ', connections=' + toString(this.connections) + ', tasks=' + toString(this.tasks) + ', triggers=' + toString(this.triggers) + ', taskControls=' + toString(this.taskControls) + ', participantRoles=' + toString(this.participantRoles) + ', assignedDevices=' + toString(this.assignedDevices) + ', expectedParticipantData=' + toString(this.expectedParticipantData) + ', applicationData=' + toString_0(this.applicationData) + ')';
  };
  protoOf(StudyProtocolSnapshot).hashCode = function () {
    var result = this.f28_1.hashCode();
    result = imul(result, 31) + this.g28_1.hashCode() | 0;
    result = imul(result, 31) + this.h28_1 | 0;
    result = imul(result, 31) + this.ownerId.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.name) | 0;
    result = imul(result, 31) + (this.description == null ? 0 : getStringHashCode(this.description)) | 0;
    result = imul(result, 31) + hashCode(this.primaryDevices) | 0;
    result = imul(result, 31) + hashCode(this.connectedDevices) | 0;
    result = imul(result, 31) + hashCode(this.connections) | 0;
    result = imul(result, 31) + hashCode(this.tasks) | 0;
    result = imul(result, 31) + hashCode(this.triggers) | 0;
    result = imul(result, 31) + hashCode(this.taskControls) | 0;
    result = imul(result, 31) + hashCode(this.participantRoles) | 0;
    result = imul(result, 31) + hashCode(this.assignedDevices) | 0;
    result = imul(result, 31) + hashCode(this.expectedParticipantData) | 0;
    result = imul(result, 31) + (this.applicationData == null ? 0 : this.applicationData.hashCode()) | 0;
    return result;
  };
  protoOf(StudyProtocolSnapshot).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StudyProtocolSnapshot))
      return false;
    if (!this.f28_1.equals(other.f28_1))
      return false;
    if (!this.g28_1.equals(other.g28_1))
      return false;
    if (!(this.h28_1 === other.h28_1))
      return false;
    if (!this.ownerId.equals(other.ownerId))
      return false;
    if (!(this.name === other.name))
      return false;
    if (!(this.description == other.description))
      return false;
    if (!equals(this.primaryDevices, other.primaryDevices))
      return false;
    if (!equals(this.connectedDevices, other.connectedDevices))
      return false;
    if (!equals(this.connections, other.connections))
      return false;
    if (!equals(this.tasks, other.tasks))
      return false;
    if (!equals(this.triggers, other.triggers))
      return false;
    if (!equals(this.taskControls, other.taskControls))
      return false;
    if (!equals(this.participantRoles, other.participantRoles))
      return false;
    if (!equals(this.assignedDevices, other.assignedDevices))
      return false;
    if (!equals(this.expectedParticipantData, other.expectedParticipantData))
      return false;
    if (!equals(this.applicationData, other.applicationData))
      return false;
    return true;
  };
  function PrimaryDeviceAdded(device) {
    Event.call(this);
    this.y28_1 = device;
  }
  protoOf(PrimaryDeviceAdded).toString = function () {
    return 'PrimaryDeviceAdded(device=' + toString(this.y28_1) + ')';
  };
  protoOf(PrimaryDeviceAdded).hashCode = function () {
    return hashCode(this.y28_1);
  };
  protoOf(PrimaryDeviceAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimaryDeviceAdded))
      return false;
    if (!equals(this.y28_1, other.y28_1))
      return false;
    return true;
  };
  function ConnectedDeviceAdded(connected, primary) {
    Event.call(this);
    this.z28_1 = connected;
    this.a29_1 = primary;
  }
  protoOf(ConnectedDeviceAdded).toString = function () {
    return 'ConnectedDeviceAdded(connected=' + toString(this.z28_1) + ', primary=' + toString(this.a29_1) + ')';
  };
  protoOf(ConnectedDeviceAdded).hashCode = function () {
    var result = hashCode(this.z28_1);
    result = imul(result, 31) + hashCode(this.a29_1) | 0;
    return result;
  };
  protoOf(ConnectedDeviceAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ConnectedDeviceAdded))
      return false;
    if (!equals(this.z28_1, other.z28_1))
      return false;
    if (!equals(this.a29_1, other.a29_1))
      return false;
    return true;
  };
  function TriggerAdded(trigger) {
    Event.call(this);
    this.b29_1 = trigger;
  }
  protoOf(TriggerAdded).toString = function () {
    return 'TriggerAdded(trigger=' + toString(this.b29_1) + ')';
  };
  protoOf(TriggerAdded).hashCode = function () {
    return hashCode(this.b29_1);
  };
  protoOf(TriggerAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TriggerAdded))
      return false;
    if (!equals(this.b29_1, other.b29_1))
      return false;
    return true;
  };
  function TaskAdded(task) {
    Event.call(this);
    this.c29_1 = task;
  }
  protoOf(TaskAdded).toString = function () {
    return 'TaskAdded(task=' + toString(this.c29_1) + ')';
  };
  protoOf(TaskAdded).hashCode = function () {
    return hashCode(this.c29_1);
  };
  protoOf(TaskAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TaskAdded))
      return false;
    if (!equals(this.c29_1, other.c29_1))
      return false;
    return true;
  };
  function TaskControlAdded(control) {
    Event.call(this);
    this.d29_1 = control;
  }
  protoOf(TaskControlAdded).toString = function () {
    return 'TaskControlAdded(control=' + this.d29_1.toString() + ')';
  };
  protoOf(TaskControlAdded).hashCode = function () {
    return this.d29_1.hashCode();
  };
  protoOf(TaskControlAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TaskControlAdded))
      return false;
    if (!this.d29_1.equals(other.d29_1))
      return false;
    return true;
  };
  function ParticipantRoleAdded(role) {
    Event.call(this);
    this.e29_1 = role;
  }
  protoOf(ParticipantRoleAdded).toString = function () {
    return 'ParticipantRoleAdded(role=' + this.e29_1.toString() + ')';
  };
  protoOf(ParticipantRoleAdded).hashCode = function () {
    return this.e29_1.hashCode();
  };
  protoOf(ParticipantRoleAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParticipantRoleAdded))
      return false;
    if (!this.e29_1.equals(other.e29_1))
      return false;
    return true;
  };
  function DeviceAssignmentChanged(device, assignedTo) {
    Event.call(this);
    this.f29_1 = device;
    this.g29_1 = assignedTo;
  }
  protoOf(DeviceAssignmentChanged).toString = function () {
    return 'DeviceAssignmentChanged(device=' + toString(this.f29_1) + ', assignedTo=' + toString(this.g29_1) + ')';
  };
  protoOf(DeviceAssignmentChanged).hashCode = function () {
    var result = hashCode(this.f29_1);
    result = imul(result, 31) + hashCode(this.g29_1) | 0;
    return result;
  };
  protoOf(DeviceAssignmentChanged).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeviceAssignmentChanged))
      return false;
    if (!equals(this.f29_1, other.f29_1))
      return false;
    if (!equals(this.g29_1, other.g29_1))
      return false;
    return true;
  };
  function ExpectedParticipantDataAdded(expectedData) {
    Event.call(this);
    this.h29_1 = expectedData;
  }
  protoOf(ExpectedParticipantDataAdded).toString = function () {
    return 'ExpectedParticipantDataAdded(expectedData=' + this.h29_1.toString() + ')';
  };
  protoOf(ExpectedParticipantDataAdded).hashCode = function () {
    return this.h29_1.hashCode();
  };
  protoOf(ExpectedParticipantDataAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExpectedParticipantDataAdded))
      return false;
    if (!this.h29_1.equals(other.h29_1))
      return false;
    return true;
  };
  function Event() {
  }
  function Factory() {
  }
  protoOf(Factory).o28 = function (snapshot) {
    // Inline function 'kotlin.with' call
    var protocol = new StudyProtocol(snapshot.ownerId, snapshot.name, snapshot.description, snapshot.f28_1, snapshot.g28_1);
    protocol.g27_1 = snapshot.applicationData;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = snapshot.primaryDevices.r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      protocol.i29(element);
    }
    var allDevices = toList(plus(snapshot.connectedDevices, snapshot.primaryDevices));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = snapshot.connections.r();
    while (_iterator__ex2g4s_0.s()) {
      var element_0 = _iterator__ex2g4s_0.t();
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s_1 = allDevices.r();
      while (_iterator__ex2g4s_1.s()) {
        var element_1 = _iterator__ex2g4s_1.t();
        if (element_1 instanceof PrimaryDeviceConfiguration) {
          destination.y(element_1);
        }
      }
      var tmp$ret$8;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_2 = destination.r();
        while (_iterator__ex2g4s_2.s()) {
          var element_2 = _iterator__ex2g4s_2.t();
          if (element_2.roleName === element_0.connectedToRoleName) {
            tmp$ret$8 = element_2;
            break $l$block;
          }
        }
        tmp$ret$8 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$8;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$("Can't find primary device with role name '" + element_0.connectedToRoleName + "' in snapshot.");
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var primary = tmp;
      var tmp$ret$10;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_3 = allDevices.r();
        while (_iterator__ex2g4s_3.s()) {
          var element_3 = _iterator__ex2g4s_3.t();
          if (element_3.roleName === element_0.roleName) {
            tmp$ret$10 = element_3;
            break $l$block_0;
          }
        }
        tmp$ret$10 = null;
      }
      var tmp1_elvis_lhs = tmp$ret$10;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$("Can't find connected device with role name '" + element_0.roleName + "' in snapshot.");
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var connected = tmp_0;
      protocol.j29(connected, primary);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_4 = snapshot.tasks.r();
    while (_iterator__ex2g4s_4.s()) {
      var element_4 = _iterator__ex2g4s_4.t();
      protocol.k29(element_4);
    }
    var triggerIds = sorted(snapshot.triggers.m2());
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!triggerIds.p()) {
      // Inline function 'kotlin.require' call
      if (!(first(triggerIds) === 0 && last(triggerIds) === (triggerIds.a1() - 1 | 0))) {
        var message = 'Triggers should be given sequential IDs starting with 0.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(triggerIds, 10));
      var _iterator__ex2g4s_5 = triggerIds.r();
      while (_iterator__ex2g4s_5.s()) {
        var item = _iterator__ex2g4s_5.t();
        // Inline function 'kotlin.checkNotNull' call
        var tmp0 = snapshot.triggers.q2(item);
        var tmp$ret$21;
        $l$block_1: {
          // Inline function 'kotlin.checkNotNull' call
          if (tmp0 == null) {
            var message_0 = 'Required value was null.';
            throw IllegalStateException_init_$Create$(toString(message_0));
          } else {
            tmp$ret$21 = tmp0;
            break $l$block_1;
          }
        }
        var trigger = tmp$ret$21;
        var tmp$ret$19 = protocol.l29(trigger);
        destination_0.y(tmp$ret$19);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_6 = snapshot.taskControls.r();
    while (_iterator__ex2g4s_6.s()) {
      var element_5 = _iterator__ex2g4s_6.t();
      var tmp0_0 = snapshot.triggers.f1();
      var tmp$ret$25;
      $l$block_3: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var _iterator__ex2g4s_7 = tmp0_0.r();
        while (_iterator__ex2g4s_7.s()) {
          var element_6 = _iterator__ex2g4s_7.t();
          if (element_6.r2() === element_5.triggerId) {
            if (found) {
              tmp$ret$25 = null;
              break $l$block_3;
            }
            single = element_6;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$25 = null;
          break $l$block_3;
        }
        tmp$ret$25 = single;
      }
      var tmp0_elvis_lhs_0 = tmp$ret$25;
      var tmp_1;
      if (tmp0_elvis_lhs_0 == null) {
        throw IllegalArgumentException_init_$Create$("Can't find trigger with id '" + element_5.triggerId + "' in snapshot.");
      } else {
        tmp_1 = tmp0_elvis_lhs_0;
      }
      var triggerMatch = tmp_1;
      var tmp0_1 = protocol.u27();
      var tmp$ret$27;
      $l$block_5: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single_0 = null;
        var found_0 = false;
        var _iterator__ex2g4s_8 = tmp0_1.r();
        while (_iterator__ex2g4s_8.s()) {
          var element_7 = _iterator__ex2g4s_8.t();
          if (element_7.name === element_5.taskName) {
            if (found_0) {
              tmp$ret$27 = null;
              break $l$block_5;
            }
            single_0 = element_7;
            found_0 = true;
          }
        }
        if (!found_0) {
          tmp$ret$27 = null;
          break $l$block_5;
        }
        tmp$ret$27 = single_0;
      }
      var tmp1_elvis_lhs_0 = tmp$ret$27;
      var tmp_2;
      if (tmp1_elvis_lhs_0 == null) {
        throw IllegalArgumentException_init_$Create$("Can't find task with name '" + element_5.taskName + "' in snapshot.");
      } else {
        tmp_2 = tmp1_elvis_lhs_0;
      }
      var task = tmp_2;
      var tmp0_2 = protocol.t27();
      var tmp$ret$29;
      $l$block_7: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single_1 = null;
        var found_1 = false;
        var _iterator__ex2g4s_9 = tmp0_2.r();
        while (_iterator__ex2g4s_9.s()) {
          var element_8 = _iterator__ex2g4s_9.t();
          if (element_8.roleName === element_5.destinationDeviceRoleName) {
            if (found_1) {
              tmp$ret$29 = null;
              break $l$block_7;
            }
            single_1 = element_8;
            found_1 = true;
          }
        }
        if (!found_1) {
          tmp$ret$29 = null;
          break $l$block_7;
        }
        tmp$ret$29 = single_1;
      }
      var tmp2_elvis_lhs = tmp$ret$29;
      var tmp_3;
      if (tmp2_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$("Can't find device with role name '" + element_5.destinationDeviceRoleName + "' in snapshot.");
      } else {
        tmp_3 = tmp2_elvis_lhs;
      }
      var device = tmp_3;
      protocol.m29(triggerMatch.s2(), task, device, element_5.control);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_10 = snapshot.participantRoles.r();
    while (_iterator__ex2g4s_10.s()) {
      var element_9 = _iterator__ex2g4s_10.t();
      protocol.n29(element_9);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_11 = snapshot.expectedParticipantData.r();
    while (_iterator__ex2g4s_11.s()) {
      var element_10 = _iterator__ex2g4s_11.t();
      protocol.o29(element_10);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_12 = snapshot.assignedDevices.f1().r();
    while (_iterator__ex2g4s_12.s()) {
      var element_11 = _iterator__ex2g4s_12.t();
      // Inline function 'kotlin.collections.component1' call
      var deviceRoleName = element_11.r2();
      // Inline function 'kotlin.collections.component2' call
      var assignedParticipantRoles = element_11.s2();
      var tmp0_3 = protocol.s27();
      var tmp$ret$40;
      $l$block_9: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single_2 = null;
        var found_2 = false;
        var _iterator__ex2g4s_13 = tmp0_3.r();
        while (_iterator__ex2g4s_13.s()) {
          var element_12 = _iterator__ex2g4s_13.t();
          if (element_12.roleName === deviceRoleName) {
            if (found_2) {
              tmp$ret$40 = null;
              break $l$block_9;
            }
            single_2 = element_12;
            found_2 = true;
          }
        }
        if (!found_2) {
          tmp$ret$40 = null;
          break $l$block_9;
        }
        tmp$ret$40 = single_2;
      }
      var tmp0_4 = tmp$ret$40;
      var tmp$ret$42;
      $l$block_10: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_4 == null) {
          var message_1 = "Can't find device with role name '" + deviceRoleName + "' in snapshot.";
          throw IllegalArgumentException_init_$Create$(toString(message_1));
        } else {
          tmp$ret$42 = tmp0_4;
          break $l$block_10;
        }
      }
      var device_0 = tmp$ret$42;
      protocol.p29(device_0, new Roles(assignedParticipantRoles));
    }
    protocol.h22();
    protocol.e22(snapshot);
    return protocol;
  };
  var Factory_instance;
  function Factory_getInstance() {
    return Factory_instance;
  }
  function StudyProtocol$addConnectedDevice$lambda($device, $primaryDevice) {
    return function () {
      return new ConnectedDeviceAdded($device, $primaryDevice);
    };
  }
  function StudyProtocol$addTaskControl$lambda($taskControl) {
    return function () {
      return new TaskControlAdded($taskControl);
    };
  }
  function StudyProtocol$addTask$lambda($task) {
    return function () {
      return new TaskAdded($task);
    };
  }
  function StudyProtocol$addParticipantRole$lambda($role) {
    return function () {
      return new ParticipantRoleAdded($role);
    };
  }
  function StudyProtocol$addExpectedParticipantData$lambda($expectedData) {
    return function () {
      return new ExpectedParticipantDataAdded($expectedData);
    };
  }
  function StudyProtocol(ownerId, name, description, id, createdOn) {
    description = description === VOID ? null : description;
    id = id === VOID ? Companion_instance_2.randomUUID() : id;
    createdOn = createdOn === VOID ? System_instance.lg() : createdOn;
    StudyProtocolComposition.call(this, new EmptyProtocolDeviceConfiguration(), new EmptyProtocolTaskConfiguration(), new EmptyProtocolParticipantConfiguration(), id, createdOn);
    this.a27_1 = ownerId;
    this.b27_1 = name;
    this.c27_1 = description;
    this.d27_1 = LinkedHashSet_init_$Create$();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.e27_1 = LinkedHashMap_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.f27_1 = LinkedHashMap_init_$Create$_0();
    this.g27_1 = null;
    this.h27_1 = listOf([new NoPrimaryDeviceError(), new OnlyOptionalDevicesWarning(), new UnstartedTasksWarning(), new BackgroundTaskWithNoMeasuresWarning(), new UseCompositeTaskWarning(), new UnusedDevicesWarning(), new UnexpectedMeasuresWarning()]);
  }
  protoOf(StudyProtocol).k = function () {
    return this.b27_1;
  };
  protoOf(StudyProtocol).e1y = function () {
    return this.c27_1;
  };
  protoOf(StudyProtocol).i29 = function (primaryDevice) {
    var isAdded = protoOf(StudyProtocolComposition).i29.call(this, primaryDevice);
    if (isAdded) {
      var tmp0 = this.f27_1;
      // Inline function 'kotlin.collections.set' call
      var value = All_getInstance();
      tmp0.k2(primaryDevice, value);
      this.f22(new PrimaryDeviceAdded(primaryDevice));
    }
    return isAdded;
  };
  protoOf(StudyProtocol).j29 = function (device, primaryDevice) {
    var tmp = protoOf(StudyProtocolComposition).j29.call(this, device, primaryDevice);
    return this.g22(tmp, true, StudyProtocol$addConnectedDevice$lambda(device, primaryDevice));
  };
  protoOf(StudyProtocol).i27 = function () {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = this.d27_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var _iterator__ex2g4s = this_0.r();
    while (_iterator__ex2g4s.s()) {
      var item = _iterator__ex2g4s.t();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp$ret$2 = new TriggerWithId(index_0, item);
      destination.y(tmp$ret$2);
    }
    return destination;
  };
  protoOf(StudyProtocol).l29 = function (trigger) {
    var tmp0 = this.p27_1.t27();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.r();
      while (_iterator__ex2g4s.s()) {
        var element = _iterator__ex2g4s.t();
        if (element.roleName === trigger.sourceDeviceRoleName) {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('The passed trigger does not belong to any device specified in this study protocol.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var device = tmp;
    // Inline function 'kotlin.require' call
    if (!(!trigger.requiresPrimaryDevice || isPrimary(device))) {
      var message = 'The passed trigger cannot be initiated by the specified device since it is not a primary device.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var isAdded = this.d27_1.y(trigger);
    if (isAdded) {
      var tmp0_0 = this.e27_1;
      // Inline function 'kotlin.collections.mutableSetOf' call
      // Inline function 'kotlin.collections.set' call
      var value = LinkedHashSet_init_$Create$();
      tmp0_0.k2(trigger, value);
      this.f22(new TriggerAdded(trigger));
    }
    return new TriggerWithId(indexOf(this.d27_1, trigger), trigger);
  };
  protoOf(StudyProtocol).m29 = function (trigger, task, destinationDevice, control) {
    // Inline function 'kotlin.require' call
    if (!this.t27().o1(destinationDevice)) {
      var message = 'The passed device to which the task needs to be sent is not included in this study protocol.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.l29(trigger);
    this.k29(task);
    var taskControl = new TaskControl_0(trigger, task, destinationDevice, control);
    var tmp = ensureNotNull(this.e27_1.q2(trigger)).y(taskControl);
    return this.g22(tmp, true, StudyProtocol$addTaskControl$lambda(taskControl));
  };
  protoOf(StudyProtocol).v27 = function (trigger) {
    // Inline function 'kotlin.require' call
    if (!this.d27_1.o1(trigger)) {
      var message = 'The passed trigger is not part of this study protocol.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return ensureNotNull(this.e27_1.q2(trigger));
  };
  protoOf(StudyProtocol).k29 = function (task) {
    var tmp = protoOf(StudyProtocolComposition).k29.call(this, task);
    return this.g22(tmp, true, StudyProtocol$addTask$lambda(task));
  };
  protoOf(StudyProtocol).n29 = function (role) {
    var tmp = protoOf(StudyProtocolComposition).n29.call(this, role);
    return this.g22(tmp, true, StudyProtocol$addParticipantRole$lambda(role));
  };
  protoOf(StudyProtocol).o29 = function (expectedData) {
    var tmp = protoOf(StudyProtocolComposition).o29.call(this, expectedData);
    return this.g22(tmp, true, StudyProtocol$addExpectedParticipantData$lambda(expectedData));
  };
  protoOf(StudyProtocol).b28 = function () {
    return toMap_0(this.f27_1);
  };
  protoOf(StudyProtocol).p29 = function (device, assignedTo) {
    // Inline function 'kotlin.require' call
    if (!this.f27_1.o2(device)) {
      var message = 'The device configuration is not part of this protocol.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!this.q29(assignedTo)) {
      var message_0 = 'One of the assigned participant roles is not part of this protocol.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var isChanged = !equals(this.f27_1.k2(device, assignedTo), assignedTo);
    if (isChanged) {
      this.f22(new DeviceAssignmentChanged(device, assignedTo));
    }
    return isChanged;
  };
  function TaskControl_0(trigger, task, destinationDevice, control) {
    this.w27_1 = trigger;
    this.x27_1 = task;
    this.y27_1 = destinationDevice;
    this.z27_1 = control;
  }
  protoOf(TaskControl_0).toString = function () {
    return 'TaskControl(trigger=' + toString(this.w27_1) + ', task=' + toString(this.x27_1) + ', destinationDevice=' + toString(this.y27_1) + ', control=' + this.z27_1.toString() + ')';
  };
  protoOf(TaskControl_0).hashCode = function () {
    var result = hashCode(this.w27_1);
    result = imul(result, 31) + hashCode(this.x27_1) | 0;
    result = imul(result, 31) + hashCode(this.y27_1) | 0;
    result = imul(result, 31) + this.z27_1.hashCode() | 0;
    return result;
  };
  protoOf(TaskControl_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TaskControl_0))
      return false;
    if (!equals(this.w27_1, other.w27_1))
      return false;
    if (!equals(this.x27_1, other.x27_1))
      return false;
    if (!equals(this.y27_1, other.y27_1))
      return false;
    if (!this.z27_1.equals(other.z27_1))
      return false;
    return true;
  };
  function TriggerWithId(id, trigger) {
    this.j27_1 = id;
    this.k27_1 = trigger;
  }
  protoOf(TriggerWithId).toString = function () {
    return 'TriggerWithId(id=' + this.j27_1 + ', trigger=' + toString(this.k27_1) + ')';
  };
  protoOf(TriggerWithId).hashCode = function () {
    var result = this.j27_1;
    result = imul(result, 31) + hashCode(this.k27_1) | 0;
    return result;
  };
  protoOf(TriggerWithId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TriggerWithId))
      return false;
    if (!(this.j27_1 === other.j27_1))
      return false;
    if (!equals(this.k27_1, other.k27_1))
      return false;
    return true;
  };
  function verifySamplingConfigurations($this, device) {
    var tmp;
    try {
      device.validateDefaultSamplingConfiguration();
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalStateException) {
        var ex = $p;
        throw IllegalArgumentException_init_$Create$_0('The device with role name `' + device.roleName + '` contains an invalid sampling configuration.', ex);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function verifyPrimaryDevice($this, device) {
    // Inline function 'kotlin.require' call
    if (!$this.t27().o1(device)) {
      var message = 'The passed primary device with role name "' + device.roleName + '" is not part of this device configuration.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return Unit_instance;
  }
  function EmptyProtocolDeviceConfiguration$_devices$lambda(device) {
    return device.roleName;
  }
  function EmptyProtocolDeviceConfiguration$_devices$lambda_0(it) {
    return IllegalArgumentException_init_$Create$('Role name "' + it + '" is not unique within device configuration.');
  }
  function EmptyProtocolDeviceConfiguration() {
    AbstractMap.call(this);
    var tmp = this;
    var tmp_0 = EmptyProtocolDeviceConfiguration$_devices$lambda;
    tmp.u29_1 = new ExtractUniqueKeyMap(tmp_0, EmptyProtocolDeviceConfiguration$_devices$lambda_0);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.v29_1 = LinkedHashMap_init_$Create$_0();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_2.w29_1 = LinkedHashSet_init_$Create$();
  }
  protoOf(EmptyProtocolDeviceConfiguration).f1 = function () {
    return this.u29_1.f1();
  };
  protoOf(EmptyProtocolDeviceConfiguration).t27 = function () {
    return toSet(this.u29_1.n2());
  };
  protoOf(EmptyProtocolDeviceConfiguration).s27 = function () {
    return this.w29_1;
  };
  protoOf(EmptyProtocolDeviceConfiguration).i29 = function (primaryDevice) {
    verifySamplingConfigurations(this, primaryDevice);
    var isNewDevice = this.u29_1.l22(primaryDevice);
    this.w29_1.y(primaryDevice);
    return isNewDevice;
  };
  protoOf(EmptyProtocolDeviceConfiguration).j29 = function (device, primaryDevice) {
    verifySamplingConfigurations(this, device);
    verifyPrimaryDevice(this, primaryDevice);
    this.u29_1.l22(device);
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.v29_1;
    var value = this_0.q2(primaryDevice);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.mutableSetOf' call
      var answer = LinkedHashSet_init_$Create$();
      this_0.k2(primaryDevice, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp.y(device);
  };
  protoOf(EmptyProtocolDeviceConfiguration).r29 = function (primaryDevice, includeChainedDevices) {
    verifyPrimaryDevice(this, primaryDevice);
    // Inline function 'kotlin.collections.mutableListOf' call
    var connectedDevices = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.v29_1;
    if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).o2(primaryDevice)) {
      connectedDevices.c1(ensureNotNull(this.v29_1.q2(primaryDevice)));
      if (includeChainedDevices) {
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = connectedDevices.r();
        while (_iterator__ex2g4s.s()) {
          var element = _iterator__ex2g4s.t();
          if (element instanceof PrimaryDeviceConfiguration) {
            destination.y(element);
          }
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = destination.r();
        while (_iterator__ex2g4s_0.s()) {
          var element_0 = _iterator__ex2g4s_0.t();
          addAll(connectedDevices, this.r29(element_0, true));
        }
      }
    }
    return connectedDevices;
  };
  function EmptyProtocolParticipantConfiguration$_participantRoles$lambda(role) {
    return role.role;
  }
  function EmptyProtocolParticipantConfiguration$_participantRoles$lambda_0(it) {
    return IllegalArgumentException_init_$Create$('Role name "' + it + '" is not unique within participant configuration.');
  }
  function EmptyProtocolParticipantConfiguration() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.x29_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    var tmp_1 = EmptyProtocolParticipantConfiguration$_participantRoles$lambda;
    tmp_0.y29_1 = new ExtractUniqueKeyMap(tmp_1, EmptyProtocolParticipantConfiguration$_participantRoles$lambda_0);
  }
  protoOf(EmptyProtocolParticipantConfiguration).c28 = function () {
    return toSet(this.x29_1);
  };
  protoOf(EmptyProtocolParticipantConfiguration).a28 = function () {
    return toSet(this.y29_1.n2());
  };
  protoOf(EmptyProtocolParticipantConfiguration).o29 = function (expectedData) {
    // Inline function 'kotlin.require' call
    if (!this.q29(expectedData.assignedTo)) {
      var message = "The expected data contains participant role names which aren't part of this participant configuration.";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    try {
      hasNoConflicts(plus_0(this.c28(), expectedData), true);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var ex = $p;
        throw IllegalArgumentException_init_$Create$_0('The expected data conflicts with existing specified existing data.', ex);
      } else {
        throw $p;
      }
    }
    return this.x29_1.y(expectedData);
  };
  protoOf(EmptyProtocolParticipantConfiguration).n29 = function (role) {
    return this.y29_1.l22(role);
  };
  function EmptyProtocolTaskConfiguration$_tasks$lambda(task) {
    return task.name;
  }
  function EmptyProtocolTaskConfiguration$_tasks$lambda_0(it) {
    return IllegalArgumentException_init_$Create$('Task name "' + it + '" is not unique within task configuration.');
  }
  function EmptyProtocolTaskConfiguration() {
    AbstractMap.call(this);
    var tmp = this;
    var tmp_0 = EmptyProtocolTaskConfiguration$_tasks$lambda;
    tmp.b2a_1 = new ExtractUniqueKeyMap(tmp_0, EmptyProtocolTaskConfiguration$_tasks$lambda_0);
  }
  protoOf(EmptyProtocolTaskConfiguration).f1 = function () {
    return this.b2a_1.f1();
  };
  protoOf(EmptyProtocolTaskConfiguration).u27 = function () {
    return toSet(this.b2a_1.n2());
  };
  protoOf(EmptyProtocolTaskConfiguration).k29 = function (task) {
    return this.b2a_1.l22(task);
  };
  function ProtocolDeviceConfiguration() {
  }
  function ProtocolParticipantConfiguration() {
  }
  function StudyProtocolComposition(deviceConfiguration, taskConfiguration, participantConfiguration, id, createdOn) {
    AggregateRoot.call(this, id, createdOn);
    this.p27_1 = deviceConfiguration;
    this.q27_1 = taskConfiguration;
    this.r27_1 = participantConfiguration;
  }
  protoOf(StudyProtocolComposition).t27 = function () {
    return this.p27_1.t27();
  };
  protoOf(StudyProtocolComposition).s27 = function () {
    return this.p27_1.s27();
  };
  protoOf(StudyProtocolComposition).i29 = function (primaryDevice) {
    return this.p27_1.i29(primaryDevice);
  };
  protoOf(StudyProtocolComposition).j29 = function (device, primaryDevice) {
    return this.p27_1.j29(device, primaryDevice);
  };
  protoOf(StudyProtocolComposition).r29 = function (primaryDevice, includeChainedDevices) {
    return this.p27_1.r29(primaryDevice, includeChainedDevices);
  };
  protoOf(StudyProtocolComposition).u27 = function () {
    return this.q27_1.u27();
  };
  protoOf(StudyProtocolComposition).k29 = function (task) {
    return this.q27_1.k29(task);
  };
  protoOf(StudyProtocolComposition).a28 = function () {
    return this.r27_1.a28();
  };
  protoOf(StudyProtocolComposition).c28 = function () {
    return this.r27_1.c28();
  };
  protoOf(StudyProtocolComposition).n29 = function (role) {
    return this.r27_1.n29(role);
  };
  protoOf(StudyProtocolComposition).q29 = function (assignment) {
    return this.r27_1.q29(assignment);
  };
  protoOf(StudyProtocolComposition).o29 = function (expectedData) {
    return this.r27_1.o29(expectedData);
  };
  function BackgroundTaskWithNoMeasuresWarning() {
    this.c2a_1 = "The study protocol contains a background task which doesn't contain any measures. A background task without any measures doesn't do anything.";
  }
  function NoPrimaryDeviceError() {
    this.d2a_1 = 'At least one primary device needs to be specified in a study protocol. Without a primary device, no data can be collected.';
  }
  function OnlyOptionalDevicesWarning() {
    this.e2a_1 = "The study protocol only contains optional primary devices. This implies that a deployment could 'start' without any devices or participants, indicating a problem.";
  }
  function UnexpectedMeasuresWarning() {
    this.f2a_1 = "The study protocol contains measures that are requested on a device for which the requested data type isn't expected. This is allowed, but requires the client implementation to have corresponding support to handle this unexpected data type.";
  }
  function UnstartedTasksWarning() {
    this.g2a_1 = 'The study protocol contains tasks which are never started by a trigger. Tasks which are never started by a trigger are never used during the study.';
  }
  function UnusedDevicesWarning() {
    this.h2a_1 = 'The study protocol contains devices which are never used as the source or target of triggers, or to relay data (primary device). These devices thus serve no purpose as part of the specified study protocol.';
  }
  function UseCompositeTaskWarning() {
    this.i2a_1 = 'The study protocol contains triggers which send multiple tasks to a single device. It is recommended to model this as one composite task instead, for clarity and to circumvent potential concurrency issues.';
  }
  function ProtocolFactoryServiceRequest$Companion$serializer$ref(p0) {
    return constructCallableReference(function (p0_0) {
      return p0.j2a(p0_0);
    }, 1, 0, 14, 'serializer', [p0]);
  }
  function Companion_4() {
  }
  var Companion_instance_8;
  function Companion_getInstance_4() {
    return Companion_instance_8;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolFactoryServiceRequest.CreateCustomProtocol', this, 5);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('ownerId', false);
    tmp0_serialDesc.pv('name', false);
    tmp0_serialDesc.pv('customProtocol', false);
    tmp0_serialDesc.pv('description', false);
    this.k2a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).l2a = function (encoder, value) {
    var tmp0_desc = this.k2a_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.ownerId);
    tmp1_output.mp(tmp0_desc, 2, value.name);
    tmp1_output.mp(tmp0_desc, 3, value.customProtocol);
    tmp1_output.qp(tmp0_desc, 4, StringSerializer_getInstance(), value.description);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_2).nk = function (encoder, value) {
    return this.l2a(encoder, value instanceof CreateCustomProtocol ? value : THROW_CCE());
  };
  protoOf($serializer_2).ok = function (decoder) {
    var tmp0_desc = this.k2a_1;
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
      tmp7_local3 = tmp9_input.ho(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.lo(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
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
            tmp7_local3 = tmp9_input.ho(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.lo(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return CreateCustomProtocol_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_2).mk = function () {
    return this.k2a_1;
  };
  protoOf($serializer_2).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_5() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function CreateCustomProtocol_init_$Init$(seen0, apiVersion, ownerId, name, customProtocol, description, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_5().k2a_1);
    }
    ProtocolFactoryServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.ownerId = ownerId;
    $this.name = name;
    $this.customProtocol = customProtocol;
    $this.description = description;
    return $this;
  }
  function CreateCustomProtocol_init_$Create$(seen0, apiVersion, ownerId, name, customProtocol, description, serializationConstructorMarker) {
    return CreateCustomProtocol_init_$Init$(seen0, apiVersion, ownerId, name, customProtocol, description, serializationConstructorMarker, objectCreate(protoOf(CreateCustomProtocol)));
  }
  function Serializer() {
    Serializer_instance = this;
    var tmp = this;
    tmp.n2a_1 = ignoreTypeParameters(ProtocolFactoryServiceRequest$Companion$serializer$ref(Companion_instance_9));
  }
  protoOf(Serializer).mk = function () {
    return this.n2a_1.mk();
  };
  protoOf(Serializer).o2a = function (encoder, value) {
    this.n2a_1.nk(encoder, value);
  };
  protoOf(Serializer).nk = function (encoder, value) {
    return this.o2a(encoder, value instanceof ProtocolFactoryServiceRequest ? value : THROW_CCE());
  };
  protoOf(Serializer).ok = function (decoder) {
    return this.n2a_1.ok(decoder);
  };
  var Serializer_instance;
  function Serializer_getInstance() {
    if (Serializer_instance == null)
      new Serializer();
    return Serializer_instance;
  }
  function CreateCustomProtocol(ownerId, name, customProtocol, description) {
    ProtocolFactoryServiceRequest.call(this);
    this.ownerId = ownerId;
    this.name = name;
    this.customProtocol = customProtocol;
    this.description = description;
  }
  protoOf(CreateCustomProtocol).i28 = function () {
    return this.ownerId;
  };
  protoOf(CreateCustomProtocol).k = function () {
    return this.name;
  };
  protoOf(CreateCustomProtocol).p2a = function () {
    return this.customProtocol;
  };
  protoOf(CreateCustomProtocol).e1y = function () {
    return this.description;
  };
  protoOf(CreateCustomProtocol).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyProtocolSnapshot), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(CreateCustomProtocol).sd = function () {
    return this.ownerId;
  };
  protoOf(CreateCustomProtocol).td = function () {
    return this.name;
  };
  protoOf(CreateCustomProtocol).m1j = function () {
    return this.customProtocol;
  };
  protoOf(CreateCustomProtocol).l1k = function () {
    return this.description;
  };
  protoOf(CreateCustomProtocol).q2a = function (ownerId, name, customProtocol, description) {
    return new CreateCustomProtocol(ownerId, name, customProtocol, description);
  };
  protoOf(CreateCustomProtocol).copy = function (ownerId, name, customProtocol, description, $super) {
    ownerId = ownerId === VOID ? this.ownerId : ownerId;
    name = name === VOID ? this.name : name;
    customProtocol = customProtocol === VOID ? this.customProtocol : customProtocol;
    description = description === VOID ? this.description : description;
    return $super === VOID ? this.q2a(ownerId, name, customProtocol, description) : $super.q2a.call(this, ownerId, name, customProtocol, description);
  };
  protoOf(CreateCustomProtocol).toString = function () {
    return 'CreateCustomProtocol(ownerId=' + this.ownerId.toString() + ', name=' + this.name + ', customProtocol=' + this.customProtocol + ', description=' + this.description + ')';
  };
  protoOf(CreateCustomProtocol).hashCode = function () {
    var result = this.ownerId.hashCode();
    result = imul(result, 31) + getStringHashCode(this.name) | 0;
    result = imul(result, 31) + getStringHashCode(this.customProtocol) | 0;
    result = imul(result, 31) + (this.description == null ? 0 : getStringHashCode(this.description)) | 0;
    return result;
  };
  protoOf(CreateCustomProtocol).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateCustomProtocol))
      return false;
    if (!this.ownerId.equals(other.ownerId))
      return false;
    if (!(this.name === other.name))
      return false;
    if (!(this.customProtocol === other.customProtocol))
      return false;
    if (!(this.description == other.description))
      return false;
    return true;
  };
  function Companion_5() {
  }
  protoOf(Companion_5).j2a = function (typeSerial0) {
    var tmp = getKClass(ProtocolFactoryServiceRequest);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(CreateCustomProtocol)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_5()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.protocols.infrastructure.ProtocolFactoryServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$6);
  };
  protoOf(Companion_5).pw = function (typeParamsSerializers) {
    return this.j2a(typeParamsSerializers[0]);
  };
  var Companion_instance_9;
  function Companion_getInstance_5() {
    return Companion_instance_9;
  }
  function ProtocolFactoryServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.r2a_1 = apiVersion;
    return $this;
  }
  function ProtocolFactoryServiceRequest() {
    ApplicationServiceRequest.call(this);
    this.r2a_1 = Companion_getInstance().h26_1;
  }
  protoOf(ProtocolFactoryServiceRequest).g26 = function () {
    return this.r2a_1;
  };
  function ProtocolServiceRequest$Companion$serializer$ref(p0) {
    return constructCallableReference(function (p0_0) {
      return p0.j2a(p0_0);
    }, 1, 0, 15, 'serializer', [p0]);
  }
  function Companion_6() {
  }
  var Companion_instance_10;
  function Companion_getInstance_6() {
    return Companion_instance_10;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.Add', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('protocol', false);
    tmp0_serialDesc.pv('versionTag', true);
    this.s2a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).t2a = function (encoder, value) {
    var tmp0_desc = this.s2a_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, $serializer_getInstance_4(), value.protocol);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.versionTag === 'Initial')) {
      tmp1_output.mp(tmp0_desc, 2, value.versionTag);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_3).nk = function (encoder, value) {
    return this.t2a(encoder, value instanceof Add ? value : THROW_CCE());
  };
  protoOf($serializer_3).ok = function (decoder) {
    var tmp0_desc = this.s2a_1;
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
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, $serializer_getInstance_4(), tmp5_local1);
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
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, $serializer_getInstance_4(), tmp5_local1);
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
    return Add_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_3).mk = function () {
    return this.s2a_1;
  };
  protoOf($serializer_3).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), $serializer_getInstance_4(), StringSerializer_getInstance()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_6() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function Add_init_$Init$(seen0, apiVersion, protocol, versionTag, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_6().s2a_1);
    }
    ProtocolServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.protocol = protocol;
    if (0 === (seen0 & 4))
      $this.versionTag = 'Initial';
    else
      $this.versionTag = versionTag;
    return $this;
  }
  function Add_init_$Create$(seen0, apiVersion, protocol, versionTag, serializationConstructorMarker) {
    return Add_init_$Init$(seen0, apiVersion, protocol, versionTag, serializationConstructorMarker, objectCreate(protoOf(Add)));
  }
  function Companion_7() {
  }
  var Companion_instance_11;
  function Companion_getInstance_7() {
    return Companion_instance_11;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.AddVersion', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('protocol', false);
    tmp0_serialDesc.pv('versionTag', true);
    this.v2a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).w2a = function (encoder, value) {
    var tmp0_desc = this.v2a_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, $serializer_getInstance_4(), value.protocol);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.versionTag === System_instance.lg().toString())) {
      tmp1_output.mp(tmp0_desc, 2, value.versionTag);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_4).nk = function (encoder, value) {
    return this.w2a(encoder, value instanceof AddVersion ? value : THROW_CCE());
  };
  protoOf($serializer_4).ok = function (decoder) {
    var tmp0_desc = this.v2a_1;
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
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, $serializer_getInstance_4(), tmp5_local1);
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
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, $serializer_getInstance_4(), tmp5_local1);
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
    return AddVersion_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_4).mk = function () {
    return this.v2a_1;
  };
  protoOf($serializer_4).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), $serializer_getInstance_4(), StringSerializer_getInstance()];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_7() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function AddVersion_init_$Init$(seen0, apiVersion, protocol, versionTag, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_7().v2a_1);
    }
    ProtocolServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.protocol = protocol;
    if (0 === (seen0 & 4))
      $this.versionTag = System_instance.lg().toString();
    else
      $this.versionTag = versionTag;
    return $this;
  }
  function AddVersion_init_$Create$(seen0, apiVersion, protocol, versionTag, serializationConstructorMarker) {
    return AddVersion_init_$Init$(seen0, apiVersion, protocol, versionTag, serializationConstructorMarker, objectCreate(protoOf(AddVersion)));
  }
  function ProtocolServiceRequest$UpdateParticipantDataConfiguration$Companion$$childSerializers$_anonymous__ysx6lm() {
    return new LinkedHashSetSerializer($serializer_getInstance_1());
  }
  function Companion_8() {
    Companion_instance_12 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y2a_1 = [null, null, null, lazy(tmp_0, ProtocolServiceRequest$UpdateParticipantDataConfiguration$Companion$$childSerializers$_anonymous__ysx6lm)];
  }
  var Companion_instance_12;
  function Companion_getInstance_8() {
    if (Companion_instance_12 == null)
      new Companion_8();
    return Companion_instance_12;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.UpdateParticipantDataConfiguration', this, 4);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('protocolId', false);
    tmp0_serialDesc.pv('versionTag', false);
    tmp0_serialDesc.pv('expectedParticipantData', false);
    this.z2a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).a2b = function (encoder, value) {
    var tmp0_desc = this.z2a_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().y2a_1;
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.protocolId);
    tmp1_output.mp(tmp0_desc, 2, value.versionTag);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.expectedParticipantData);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_5).nk = function (encoder, value) {
    return this.a2b(encoder, value instanceof UpdateParticipantDataConfiguration ? value : THROW_CCE());
  };
  protoOf($serializer_5).ok = function (decoder) {
    var tmp0_desc = this.z2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_8().y2a_1;
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
    return UpdateParticipantDataConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_5).mk = function () {
    return this.z2a_1;
  };
  protoOf($serializer_5).ew = function () {
    var tmp0_cached = Companion_getInstance_8().y2a_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[3].s2()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_8() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function UpdateParticipantDataConfiguration_init_$Init$(seen0, apiVersion, protocolId, versionTag, expectedParticipantData, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().z2a_1);
    }
    ProtocolServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.protocolId = protocolId;
    $this.versionTag = versionTag;
    $this.expectedParticipantData = expectedParticipantData;
    return $this;
  }
  function UpdateParticipantDataConfiguration_init_$Create$(seen0, apiVersion, protocolId, versionTag, expectedParticipantData, serializationConstructorMarker) {
    return UpdateParticipantDataConfiguration_init_$Init$(seen0, apiVersion, protocolId, versionTag, expectedParticipantData, serializationConstructorMarker, objectCreate(protoOf(UpdateParticipantDataConfiguration)));
  }
  function Companion_9() {
  }
  var Companion_instance_13;
  function Companion_getInstance_9() {
    return Companion_instance_13;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.GetBy', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('protocolId', false);
    tmp0_serialDesc.pv('versionTag', true);
    this.c2b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).d2b = function (encoder, value) {
    var tmp0_desc = this.c2b_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.protocolId);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.versionTag == null)) {
      tmp1_output.qp(tmp0_desc, 2, StringSerializer_getInstance(), value.versionTag);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_6).nk = function (encoder, value) {
    return this.d2b(encoder, value instanceof GetBy ? value : THROW_CCE());
  };
  protoOf($serializer_6).ok = function (decoder) {
    var tmp0_desc = this.c2b_1;
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
      tmp6_local2 = tmp7_input.lo(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
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
            tmp6_local2 = tmp7_input.lo(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return GetBy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).mk = function () {
    return this.c2b_1;
  };
  protoOf($serializer_6).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_9() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function GetBy_init_$Init$(seen0, apiVersion, protocolId, versionTag, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_9().c2b_1);
    }
    ProtocolServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.protocolId = protocolId;
    if (0 === (seen0 & 4))
      $this.versionTag = null;
    else
      $this.versionTag = versionTag;
    return $this;
  }
  function GetBy_init_$Create$(seen0, apiVersion, protocolId, versionTag, serializationConstructorMarker) {
    return GetBy_init_$Init$(seen0, apiVersion, protocolId, versionTag, serializationConstructorMarker, objectCreate(protoOf(GetBy)));
  }
  function Companion_10() {
  }
  var Companion_instance_14;
  function Companion_getInstance_10() {
    return Companion_instance_14;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.GetAllForOwner', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('ownerId', false);
    this.f2b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).g2b = function (encoder, value) {
    var tmp0_desc = this.f2b_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.ownerId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_7).nk = function (encoder, value) {
    return this.g2b(encoder, value instanceof GetAllForOwner ? value : THROW_CCE());
  };
  protoOf($serializer_7).ok = function (decoder) {
    var tmp0_desc = this.f2b_1;
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
    return GetAllForOwner_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_7).mk = function () {
    return this.f2b_1;
  };
  protoOf($serializer_7).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_10() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function GetAllForOwner_init_$Init$(seen0, apiVersion, ownerId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_10().f2b_1);
    }
    ProtocolServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.ownerId = ownerId;
    return $this;
  }
  function GetAllForOwner_init_$Create$(seen0, apiVersion, ownerId, serializationConstructorMarker) {
    return GetAllForOwner_init_$Init$(seen0, apiVersion, ownerId, serializationConstructorMarker, objectCreate(protoOf(GetAllForOwner)));
  }
  function Companion_11() {
  }
  var Companion_instance_15;
  function Companion_getInstance_11() {
    return Companion_instance_15;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.GetVersionHistoryFor', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('protocolId', false);
    this.i2b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).j2b = function (encoder, value) {
    var tmp0_desc = this.i2b_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.protocolId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_8).nk = function (encoder, value) {
    return this.j2b(encoder, value instanceof GetVersionHistoryFor ? value : THROW_CCE());
  };
  protoOf($serializer_8).ok = function (decoder) {
    var tmp0_desc = this.i2b_1;
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
    return GetVersionHistoryFor_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_8).mk = function () {
    return this.i2b_1;
  };
  protoOf($serializer_8).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_11() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function GetVersionHistoryFor_init_$Init$(seen0, apiVersion, protocolId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_11().i2b_1);
    }
    ProtocolServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.protocolId = protocolId;
    return $this;
  }
  function GetVersionHistoryFor_init_$Create$(seen0, apiVersion, protocolId, serializationConstructorMarker) {
    return GetVersionHistoryFor_init_$Init$(seen0, apiVersion, protocolId, serializationConstructorMarker, objectCreate(protoOf(GetVersionHistoryFor)));
  }
  function Serializer_0() {
    Serializer_instance_0 = this;
    var tmp = this;
    tmp.l2b_1 = ignoreTypeParameters(ProtocolServiceRequest$Companion$serializer$ref(Companion_instance_16));
  }
  protoOf(Serializer_0).mk = function () {
    return this.l2b_1.mk();
  };
  protoOf(Serializer_0).m2b = function (encoder, value) {
    this.l2b_1.nk(encoder, value);
  };
  protoOf(Serializer_0).nk = function (encoder, value) {
    return this.m2b(encoder, value instanceof ProtocolServiceRequest ? value : THROW_CCE());
  };
  protoOf(Serializer_0).ok = function (decoder) {
    return this.l2b_1.ok(decoder);
  };
  var Serializer_instance_0;
  function Serializer_getInstance_0() {
    if (Serializer_instance_0 == null)
      new Serializer_0();
    return Serializer_instance_0;
  }
  function Add(protocol, versionTag) {
    versionTag = versionTag === VOID ? 'Initial' : versionTag;
    ProtocolServiceRequest.call(this);
    this.protocol = protocol;
    this.versionTag = versionTag;
  }
  protoOf(Add).n2b = function () {
    return this.protocol;
  };
  protoOf(Add).o2b = function () {
    return this.versionTag;
  };
  protoOf(Add).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Unit), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(Add).sd = function () {
    return this.protocol;
  };
  protoOf(Add).td = function () {
    return this.versionTag;
  };
  protoOf(Add).p2b = function (protocol, versionTag) {
    return new Add(protocol, versionTag);
  };
  protoOf(Add).copy = function (protocol, versionTag, $super) {
    protocol = protocol === VOID ? this.protocol : protocol;
    versionTag = versionTag === VOID ? this.versionTag : versionTag;
    return $super === VOID ? this.p2b(protocol, versionTag) : $super.p2b.call(this, protocol, versionTag);
  };
  protoOf(Add).toString = function () {
    return 'Add(protocol=' + this.protocol.toString() + ', versionTag=' + this.versionTag + ')';
  };
  protoOf(Add).hashCode = function () {
    var result = this.protocol.hashCode();
    result = imul(result, 31) + getStringHashCode(this.versionTag) | 0;
    return result;
  };
  protoOf(Add).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Add))
      return false;
    if (!this.protocol.equals(other.protocol))
      return false;
    if (!(this.versionTag === other.versionTag))
      return false;
    return true;
  };
  function AddVersion(protocol, versionTag) {
    versionTag = versionTag === VOID ? System_instance.lg().toString() : versionTag;
    ProtocolServiceRequest.call(this);
    this.protocol = protocol;
    this.versionTag = versionTag;
  }
  protoOf(AddVersion).n2b = function () {
    return this.protocol;
  };
  protoOf(AddVersion).o2b = function () {
    return this.versionTag;
  };
  protoOf(AddVersion).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Unit), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(AddVersion).sd = function () {
    return this.protocol;
  };
  protoOf(AddVersion).td = function () {
    return this.versionTag;
  };
  protoOf(AddVersion).p2b = function (protocol, versionTag) {
    return new AddVersion(protocol, versionTag);
  };
  protoOf(AddVersion).copy = function (protocol, versionTag, $super) {
    protocol = protocol === VOID ? this.protocol : protocol;
    versionTag = versionTag === VOID ? this.versionTag : versionTag;
    return $super === VOID ? this.p2b(protocol, versionTag) : $super.p2b.call(this, protocol, versionTag);
  };
  protoOf(AddVersion).toString = function () {
    return 'AddVersion(protocol=' + this.protocol.toString() + ', versionTag=' + this.versionTag + ')';
  };
  protoOf(AddVersion).hashCode = function () {
    var result = this.protocol.hashCode();
    result = imul(result, 31) + getStringHashCode(this.versionTag) | 0;
    return result;
  };
  protoOf(AddVersion).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AddVersion))
      return false;
    if (!this.protocol.equals(other.protocol))
      return false;
    if (!(this.versionTag === other.versionTag))
      return false;
    return true;
  };
  function UpdateParticipantDataConfiguration(protocolId, versionTag, expectedParticipantData) {
    Companion_getInstance_8();
    ProtocolServiceRequest.call(this);
    this.protocolId = protocolId;
    this.versionTag = versionTag;
    this.expectedParticipantData = expectedParticipantData;
  }
  protoOf(UpdateParticipantDataConfiguration).r2b = function () {
    return this.protocolId;
  };
  protoOf(UpdateParticipantDataConfiguration).o2b = function () {
    return this.versionTag;
  };
  protoOf(UpdateParticipantDataConfiguration).c28 = function () {
    return this.expectedParticipantData;
  };
  protoOf(UpdateParticipantDataConfiguration).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyProtocolSnapshot), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(UpdateParticipantDataConfiguration).sd = function () {
    return this.protocolId;
  };
  protoOf(UpdateParticipantDataConfiguration).td = function () {
    return this.versionTag;
  };
  protoOf(UpdateParticipantDataConfiguration).m1j = function () {
    return this.expectedParticipantData;
  };
  protoOf(UpdateParticipantDataConfiguration).s2b = function (protocolId, versionTag, expectedParticipantData) {
    return new UpdateParticipantDataConfiguration(protocolId, versionTag, expectedParticipantData);
  };
  protoOf(UpdateParticipantDataConfiguration).copy = function (protocolId, versionTag, expectedParticipantData, $super) {
    protocolId = protocolId === VOID ? this.protocolId : protocolId;
    versionTag = versionTag === VOID ? this.versionTag : versionTag;
    expectedParticipantData = expectedParticipantData === VOID ? this.expectedParticipantData : expectedParticipantData;
    return $super === VOID ? this.s2b(protocolId, versionTag, expectedParticipantData) : $super.s2b.call(this, protocolId, versionTag, expectedParticipantData);
  };
  protoOf(UpdateParticipantDataConfiguration).toString = function () {
    return 'UpdateParticipantDataConfiguration(protocolId=' + this.protocolId.toString() + ', versionTag=' + this.versionTag + ', expectedParticipantData=' + toString(this.expectedParticipantData) + ')';
  };
  protoOf(UpdateParticipantDataConfiguration).hashCode = function () {
    var result = this.protocolId.hashCode();
    result = imul(result, 31) + getStringHashCode(this.versionTag) | 0;
    result = imul(result, 31) + hashCode(this.expectedParticipantData) | 0;
    return result;
  };
  protoOf(UpdateParticipantDataConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UpdateParticipantDataConfiguration))
      return false;
    if (!this.protocolId.equals(other.protocolId))
      return false;
    if (!(this.versionTag === other.versionTag))
      return false;
    if (!equals(this.expectedParticipantData, other.expectedParticipantData))
      return false;
    return true;
  };
  function GetBy(protocolId, versionTag) {
    versionTag = versionTag === VOID ? null : versionTag;
    ProtocolServiceRequest.call(this);
    this.protocolId = protocolId;
    this.versionTag = versionTag;
  }
  protoOf(GetBy).r2b = function () {
    return this.protocolId;
  };
  protoOf(GetBy).o2b = function () {
    return this.versionTag;
  };
  protoOf(GetBy).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyProtocolSnapshot), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetBy).sd = function () {
    return this.protocolId;
  };
  protoOf(GetBy).td = function () {
    return this.versionTag;
  };
  protoOf(GetBy).t2b = function (protocolId, versionTag) {
    return new GetBy(protocolId, versionTag);
  };
  protoOf(GetBy).copy = function (protocolId, versionTag, $super) {
    protocolId = protocolId === VOID ? this.protocolId : protocolId;
    versionTag = versionTag === VOID ? this.versionTag : versionTag;
    return $super === VOID ? this.t2b(protocolId, versionTag) : $super.t2b.call(this, protocolId, versionTag);
  };
  protoOf(GetBy).toString = function () {
    return 'GetBy(protocolId=' + this.protocolId.toString() + ', versionTag=' + this.versionTag + ')';
  };
  protoOf(GetBy).hashCode = function () {
    var result = this.protocolId.hashCode();
    result = imul(result, 31) + (this.versionTag == null ? 0 : getStringHashCode(this.versionTag)) | 0;
    return result;
  };
  protoOf(GetBy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetBy))
      return false;
    if (!this.protocolId.equals(other.protocolId))
      return false;
    if (!(this.versionTag == other.versionTag))
      return false;
    return true;
  };
  function GetAllForOwner(ownerId) {
    ProtocolServiceRequest.call(this);
    this.ownerId = ownerId;
  }
  protoOf(GetAllForOwner).i28 = function () {
    return this.ownerId;
  };
  protoOf(GetAllForOwner).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(StudyProtocolSnapshot), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetAllForOwner).sd = function () {
    return this.ownerId;
  };
  protoOf(GetAllForOwner).u2b = function (ownerId) {
    return new GetAllForOwner(ownerId);
  };
  protoOf(GetAllForOwner).copy = function (ownerId, $super) {
    ownerId = ownerId === VOID ? this.ownerId : ownerId;
    return $super === VOID ? this.u2b(ownerId) : $super.u2b.call(this, ownerId);
  };
  protoOf(GetAllForOwner).toString = function () {
    return 'GetAllForOwner(ownerId=' + this.ownerId.toString() + ')';
  };
  protoOf(GetAllForOwner).hashCode = function () {
    return this.ownerId.hashCode();
  };
  protoOf(GetAllForOwner).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetAllForOwner))
      return false;
    if (!this.ownerId.equals(other.ownerId))
      return false;
    return true;
  };
  function GetVersionHistoryFor(protocolId) {
    ProtocolServiceRequest.call(this);
    this.protocolId = protocolId;
  }
  protoOf(GetVersionHistoryFor).r2b = function () {
    return this.protocolId;
  };
  protoOf(GetVersionHistoryFor).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ProtocolVersion), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetVersionHistoryFor).sd = function () {
    return this.protocolId;
  };
  protoOf(GetVersionHistoryFor).u2b = function (protocolId) {
    return new GetVersionHistoryFor(protocolId);
  };
  protoOf(GetVersionHistoryFor).copy = function (protocolId, $super) {
    protocolId = protocolId === VOID ? this.protocolId : protocolId;
    return $super === VOID ? this.u2b(protocolId) : $super.u2b.call(this, protocolId);
  };
  protoOf(GetVersionHistoryFor).toString = function () {
    return 'GetVersionHistoryFor(protocolId=' + this.protocolId.toString() + ')';
  };
  protoOf(GetVersionHistoryFor).hashCode = function () {
    return this.protocolId.hashCode();
  };
  protoOf(GetVersionHistoryFor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetVersionHistoryFor))
      return false;
    if (!this.protocolId.equals(other.protocolId))
      return false;
    return true;
  };
  function Companion_12() {
  }
  protoOf(Companion_12).j2a = function (typeSerial0) {
    var tmp = getKClass(ProtocolServiceRequest);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(Add), getKClass(AddVersion), getKClass(GetAllForOwner), getKClass(GetBy), getKClass(GetVersionHistoryFor), getKClass(UpdateParticipantDataConfiguration)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_6(), $serializer_getInstance_7(), $serializer_getInstance_10(), $serializer_getInstance_9(), $serializer_getInstance_11(), $serializer_getInstance_8()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$6);
  };
  protoOf(Companion_12).pw = function (typeParamsSerializers) {
    return this.j2a(typeParamsSerializers[0]);
  };
  var Companion_instance_16;
  function Companion_getInstance_12() {
    return Companion_instance_16;
  }
  function ProtocolServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.q2b_1 = apiVersion;
    return $this;
  }
  function ProtocolServiceRequest() {
    ApplicationServiceRequest.call(this);
    this.q2b_1 = Companion_getInstance_0().i26_1;
  }
  protoOf(ProtocolServiceRequest).g26 = function () {
    return this.q2b_1;
  };
  //region block: post-declaration
  protoOf($serializer).fw = typeParametersSerializers;
  protoOf($serializer_0).fw = typeParametersSerializers;
  protoOf($serializer_1).fw = typeParametersSerializers;
  defineProp(protoOf(StudyProtocolSnapshot), 'id', function () {
    return this.m22();
  });
  defineProp(protoOf(StudyProtocolSnapshot), 'createdOn', function () {
    return this.n22();
  });
  defineProp(protoOf(StudyProtocolSnapshot), 'version', function () {
    return this.o22();
  });
  protoOf(StudyProtocolComposition).q26 = getConnectedDevices$default;
  protoOf(EmptyProtocolDeviceConfiguration).q26 = getConnectedDevices$default;
  protoOf(EmptyProtocolParticipantConfiguration).q29 = isValidAssignment;
  protoOf($serializer_2).fw = typeParametersSerializers;
  protoOf($serializer_3).fw = typeParametersSerializers;
  protoOf($serializer_4).fw = typeParametersSerializers;
  protoOf($serializer_5).fw = typeParametersSerializers;
  protoOf($serializer_6).fw = typeParametersSerializers;
  protoOf($serializer_7).fw = typeParametersSerializers;
  protoOf($serializer_8).fw = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_5 = new Companion_1();
  Companion_instance_6 = new Companion_2();
  Factory_instance = new Factory();
  Companion_instance_8 = new Companion_4();
  Companion_instance_9 = new Companion_5();
  Companion_instance_10 = new Companion_6();
  Companion_instance_11 = new Companion_7();
  Companion_instance_13 = new Companion_9();
  Companion_instance_14 = new Companion_10();
  Companion_instance_15 = new Companion_11();
  Companion_instance_16 = new Companion_12();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var dk = _.dk || (_.dk = {});
    var cachet = dk.cachet || (dk.cachet = {});
    var carp = cachet.carp || (cachet.carp = {});
    var protocols = carp.protocols || (carp.protocols = {});
    var application = protocols.application || (protocols.application = {});
    application.ProtocolVersion = ProtocolVersion;
    var dk_0 = _.dk || (_.dk = {});
    var cachet_0 = dk_0.cachet || (dk_0.cachet = {});
    var carp_0 = cachet_0.carp || (cachet_0.carp = {});
    var protocols_0 = carp_0.protocols || (carp_0.protocols = {});
    var application_0 = protocols_0.application || (protocols_0.application = {});
    application_0.StudyProtocolSnapshot = StudyProtocolSnapshot;
    application_0.StudyProtocolSnapshot.DeviceConnection = DeviceConnection;
    defineProp(application_0.StudyProtocolSnapshot, 'Companion', Companion_getInstance_3, VOID, true);
    var dk_1 = _.dk || (_.dk = {});
    var cachet_1 = dk_1.cachet || (dk_1.cachet = {});
    var carp_1 = cachet_1.carp || (cachet_1.carp = {});
    var protocols_1 = carp_1.protocols || (carp_1.protocols = {});
    var infrastructure = protocols_1.infrastructure || (protocols_1.infrastructure = {});
    infrastructure.ProtocolFactoryServiceRequest = ProtocolFactoryServiceRequest;
    defineProp(infrastructure.ProtocolFactoryServiceRequest, 'Serializer', Serializer_getInstance, VOID, true);
    infrastructure.ProtocolFactoryServiceRequest.CreateCustomProtocol = CreateCustomProtocol;
    var dk_2 = _.dk || (_.dk = {});
    var cachet_2 = dk_2.cachet || (dk_2.cachet = {});
    var carp_2 = cachet_2.carp || (cachet_2.carp = {});
    var protocols_2 = carp_2.protocols || (carp_2.protocols = {});
    var infrastructure_0 = protocols_2.infrastructure || (protocols_2.infrastructure = {});
    infrastructure_0.ProtocolServiceRequest = ProtocolServiceRequest;
    defineProp(infrastructure_0.ProtocolServiceRequest, 'Serializer', Serializer_getInstance_0, VOID, true);
    infrastructure_0.ProtocolServiceRequest.Add = Add;
    infrastructure_0.ProtocolServiceRequest.AddVersion = AddVersion;
    infrastructure_0.ProtocolServiceRequest.UpdateParticipantDataConfiguration = UpdateParticipantDataConfiguration;
    infrastructure_0.ProtocolServiceRequest.GetBy = GetBy;
    infrastructure_0.ProtocolServiceRequest.GetAllForOwner = GetAllForOwner;
    infrastructure_0.ProtocolServiceRequest.GetVersionHistoryFor = GetVersionHistoryFor;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = $serializer_getInstance_4;
  //endregion
  return _;
}));

//# sourceMappingURL=carp-protocols-core-generated.js.map
