(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@cachet/carp-common-generated', '@cachet/kotlin-kotlin-stdlib', '@cachet/kotlinx-serialization-kotlinx-serialization-core', '@cachet/Kotlin-DateTime-library-kotlinx-datetime'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@cachet/carp-common-generated'), require('@cachet/kotlin-kotlin-stdlib'), require('@cachet/kotlinx-serialization-kotlinx-serialization-core'), require('@cachet/Kotlin-DateTime-library-kotlinx-datetime'));
  else {
    if (typeof this['carp-common-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-protocols-core-generated'. Its dependency 'carp-common-generated' was not found. Please, check whether 'carp-common-generated' is loaded prior to 'carp-protocols-core-generated'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'carp-protocols-core-generated'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'carp-protocols-core-generated'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'carp-protocols-core-generated'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'carp-protocols-core-generated'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'carp-protocols-core-generated'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'carp-protocols-core-generated'.");
    }
    root['carp-protocols-core-generated'] = factory(typeof this['carp-protocols-core-generated'] === 'undefined' ? {} : this['carp-protocols-core-generated'], this['carp-common-generated'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['Kotlin-DateTime-library-kotlinx-datetime']);
  }
}(this, function (_, kotlin_dk_cachet_carp_common_carp_common, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_datetime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ApiVersion = kotlin_dk_cachet_carp_common_carp_common.$_$.d;
  var protoOf = kotlin_kotlin.$_$.m8;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var InstantIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.bb;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var VOID = kotlin_kotlin.$_$.f;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var objectCreate = kotlin_kotlin.$_$.k8;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var getStringHashCode = kotlin_kotlin.$_$.q7;
  var classMeta = kotlin_kotlin.$_$.i7;
  var defineProp = kotlin_kotlin.$_$.k7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var addAll = kotlin_kotlin.$_$.s4;
  var isPrimary = kotlin_dk_cachet_carp_common_carp_common.$_$.c;
  var Companion_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.x;
  var UnitSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var Companion_getInstance_0 = kotlin_dk_cachet_carp_common_carp_common.$_$.v;
  var TaskConfiguration = kotlin_dk_cachet_carp_common_carp_common.$_$.e;
  var getKClass = kotlin_kotlin.$_$.e;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var TriggerConfiguration = kotlin_dk_cachet_carp_common_carp_common.$_$.g;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var $serializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.z;
  var $serializer_getInstance_0 = kotlin_dk_cachet_carp_common_carp_common.$_$.e1;
  var $serializer_getInstance_1 = kotlin_dk_cachet_carp_common_carp_common.$_$.d1;
  var ApplicationDataSerializer = kotlin_dk_cachet_carp_common_carp_common.$_$.p;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x4;
  var mapCapacity = kotlin_kotlin.$_$.d6;
  var coerceAtLeast = kotlin_kotlin.$_$.t8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var to = kotlin_kotlin.$_$.zb;
  var toSet = kotlin_kotlin.$_$.u6;
  var minus = kotlin_kotlin.$_$.f6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var TaskControl = kotlin_dk_cachet_carp_common_carp_common.$_$.f;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var Roles = kotlin_dk_cachet_carp_common_carp_common.$_$.i;
  var toMap = kotlin_kotlin.$_$.t6;
  var UUIDSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.k1;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var emptySet = kotlin_kotlin.$_$.o5;
  var equals = kotlin_kotlin.$_$.l7;
  var emptyMap = kotlin_kotlin.$_$.n5;
  var hashCode = kotlin_kotlin.$_$.r7;
  var Snapshot = kotlin_dk_cachet_carp_common_carp_common.$_$.o;
  var plus = kotlin_kotlin.$_$.h6;
  var toList = kotlin_kotlin.$_$.q6;
  var PrimaryDeviceConfiguration = kotlin_dk_cachet_carp_common_carp_common.$_$.b;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var sorted = kotlin_kotlin.$_$.n6;
  var last = kotlin_kotlin.$_$.b6;
  var first = kotlin_kotlin.$_$.q5;
  var toString = kotlin_kotlin.$_$.r8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Companion_instance = kotlin_dk_cachet_carp_common_carp_common.$_$.j1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var listOf = kotlin_kotlin.$_$.c6;
  var All_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.b1;
  var checkIndexOverflow = kotlin_kotlin.$_$.w4;
  var indexOf = kotlin_kotlin.$_$.u5;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var toMap_0 = kotlin_kotlin.$_$.s6;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var IllegalStateException = kotlin_kotlin.$_$.xa;
  var AbstractMap = kotlin_kotlin.$_$.e4;
  var ExtractUniqueKeyMap = kotlin_dk_cachet_carp_common_carp_common.$_$.n;
  var Map = kotlin_kotlin.$_$.n4;
  var isInterface = kotlin_kotlin.$_$.b8;
  var plus_0 = kotlin_kotlin.$_$.i6;
  var hasNoConflicts = kotlin_dk_cachet_carp_common_carp_common.$_$.j;
  var IllegalArgumentException = kotlin_kotlin.$_$.wa;
  var interfaceMeta = kotlin_kotlin.$_$.s7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wb;
  var Collection = kotlin_kotlin.$_$.g4;
  var All = kotlin_dk_cachet_carp_common_carp_common.$_$.h;
  var AggregateRoot = kotlin_dk_cachet_carp_common_carp_common.$_$.m;
  var ApiVersionSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.y;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var ignoreTypeParameters = kotlin_dk_cachet_carp_common_carp_common.$_$.r;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var arrayOf = kotlin_kotlin.$_$.nb;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.ub;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var ApplicationServiceRequest = kotlin_dk_cachet_carp_common_carp_common.$_$.s;
  var Unit = kotlin_kotlin.$_$.mb;
  var List = kotlin_kotlin.$_$.l4;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ProtocolVersion, 'ProtocolVersion', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(DeviceConnection, 'DeviceConnection', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(StudyProtocolSnapshot, 'StudyProtocolSnapshot', classMeta, VOID, [Snapshot], VOID, VOID, {0: $serializer_getInstance_4});
  setMetadataFor(Event, 'Event', classMeta);
  setMetadataFor(PrimaryDeviceAdded, 'PrimaryDeviceAdded', classMeta, Event);
  setMetadataFor(ConnectedDeviceAdded, 'ConnectedDeviceAdded', classMeta, Event);
  setMetadataFor(TriggerAdded, 'TriggerAdded', classMeta, Event);
  setMetadataFor(TaskAdded, 'TaskAdded', classMeta, Event);
  setMetadataFor(TaskControlAdded, 'TaskControlAdded', classMeta, Event);
  setMetadataFor(ParticipantRoleAdded, 'ParticipantRoleAdded', classMeta, Event);
  setMetadataFor(DeviceAssignmentChanged, 'DeviceAssignmentChanged', classMeta, Event);
  setMetadataFor(ExpectedParticipantDataAdded, 'ExpectedParticipantDataAdded', classMeta, Event);
  setMetadataFor(Factory, 'Factory', objectMeta);
  function getConnectedDevices$default(primaryDevice, includeChainedDevices, $super) {
    includeChainedDevices = includeChainedDevices === VOID ? false : includeChainedDevices;
    return $super === VOID ? this.b26(primaryDevice, includeChainedDevices) : $super.b26.call(this, primaryDevice, includeChainedDevices);
  }
  setMetadataFor(ProtocolDeviceConfiguration, 'ProtocolDeviceConfiguration', interfaceMeta);
  function isValidAssignment(assignment) {
    var tmp;
    if (assignment instanceof All) {
      tmp = true;
    } else {
      if (assignment instanceof Roles) {
        // Inline function 'kotlin.collections.map' call
        var this_0 = this.i24();
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
        var tmp0_iterator = this_0.t();
        while (tmp0_iterator.u()) {
          var item = tmp0_iterator.v();
          // Inline function 'dk.cachet.carp.protocols.domain.configuration.ProtocolParticipantConfiguration.isValidAssignment.<anonymous>' call
          var tmp$ret$0 = item.role;
          destination.q(tmp$ret$0);
        }
        var roles = destination;
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.collections.all' call
          var this_1 = assignment.roleNames;
          var tmp_0;
          if (isInterface(this_1, Collection)) {
            tmp_0 = this_1.y();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_0;
          }
          var tmp0_iterator_0 = this_1.t();
          while (tmp0_iterator_0.u()) {
            var element = tmp0_iterator_0.v();
            // Inline function 'dk.cachet.carp.protocols.domain.configuration.ProtocolParticipantConfiguration.isValidAssignment.<anonymous>' call
            if (!roles.p(element)) {
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
  setMetadataFor(ProtocolParticipantConfiguration, 'ProtocolParticipantConfiguration', interfaceMeta);
  setMetadataFor(StudyProtocolComposition, 'StudyProtocolComposition', classMeta, AggregateRoot, [ProtocolDeviceConfiguration, ProtocolParticipantConfiguration, AggregateRoot]);
  setMetadataFor(StudyProtocol, 'StudyProtocol', classMeta, StudyProtocolComposition);
  setMetadataFor(TaskControl_0, 'TaskControl', classMeta);
  setMetadataFor(TriggerWithId, 'TriggerWithId', classMeta);
  setMetadataFor(EmptyProtocolDeviceConfiguration, 'EmptyProtocolDeviceConfiguration', classMeta, AbstractMap, [AbstractMap, ProtocolDeviceConfiguration], EmptyProtocolDeviceConfiguration);
  setMetadataFor(EmptyProtocolParticipantConfiguration, 'EmptyProtocolParticipantConfiguration', classMeta, VOID, [ProtocolParticipantConfiguration], EmptyProtocolParticipantConfiguration);
  setMetadataFor(EmptyProtocolTaskConfiguration, 'EmptyProtocolTaskConfiguration', classMeta, AbstractMap, VOID, EmptyProtocolTaskConfiguration);
  setMetadataFor(BackgroundTaskWithNoMeasuresWarning, 'BackgroundTaskWithNoMeasuresWarning', classMeta);
  setMetadataFor(NoPrimaryDeviceError, 'NoPrimaryDeviceError', classMeta);
  setMetadataFor(OnlyOptionalDevicesWarning, 'OnlyOptionalDevicesWarning', classMeta, VOID, VOID, OnlyOptionalDevicesWarning);
  setMetadataFor(UnexpectedMeasuresWarning, 'UnexpectedMeasuresWarning', classMeta);
  setMetadataFor(UnstartedTasksWarning, 'UnstartedTasksWarning', classMeta);
  setMetadataFor(UnusedDevicesWarning, 'UnusedDevicesWarning', classMeta);
  setMetadataFor(UseCompositeTaskWarning, 'UseCompositeTaskWarning', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Serializer, 'Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ProtocolFactoryServiceRequest, 'ProtocolFactoryServiceRequest', classMeta, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_7});
  setMetadataFor(CreateCustomProtocol, 'CreateCustomProtocol', classMeta, ProtocolFactoryServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  setMetadataFor(Companion_5, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor($serializer_3, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor($serializer_4, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor($serializer_5, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor($serializer_6, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor($serializer_7, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor($serializer_8, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Serializer_0, 'Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ProtocolServiceRequest, 'ProtocolServiceRequest', classMeta, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_14});
  setMetadataFor(Add, 'Add', classMeta, ProtocolServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  setMetadataFor(AddVersion, 'AddVersion', classMeta, ProtocolServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  setMetadataFor(UpdateParticipantDataConfiguration, 'UpdateParticipantDataConfiguration', classMeta, ProtocolServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  setMetadataFor(GetBy, 'GetBy', classMeta, ProtocolServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  setMetadataFor(GetAllForOwner, 'GetAllForOwner', classMeta, ProtocolServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  setMetadataFor(GetVersionHistoryFor, 'GetVersionHistoryFor', classMeta, ProtocolServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  setMetadataFor(Companion_12, 'Companion', objectMeta, VOID, [SerializerFactory]);
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.p22_1 = new ApiVersion(1, 1);
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.q22_1 = new ApiVersion(1, 1);
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).m16 = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.application.ProtocolVersion', this, 2);
    tmp0_serialDesc.nt('tag', false);
    tmp0_serialDesc.nt('date', false);
    this.r22_1 = tmp0_serialDesc;
  }
  protoOf($serializer).pi = function () {
    return this.r22_1;
  };
  protoOf($serializer).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), InstantIso8601Serializer_getInstance()];
  };
  protoOf($serializer).ri = function (decoder) {
    var tmp0_desc = this.r22_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return ProtocolVersion_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).s22 = function (encoder, value) {
    var tmp0_desc = this.r22_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.tag);
    tmp1_output.pn(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), value.date);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer).qi = function (encoder, value) {
    return this.s22(encoder, value instanceof ProtocolVersion ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance_2() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function ProtocolVersion_init_$Init$(seen1, tag, date, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_2().r22_1);
    }
    $this.tag = tag;
    $this.date = date;
    return $this;
  }
  function ProtocolVersion_init_$Create$(seen1, tag, date, serializationConstructorMarker) {
    return ProtocolVersion_init_$Init$(seen1, tag, date, serializationConstructorMarker, objectCreate(protoOf(ProtocolVersion)));
  }
  function ProtocolVersion(tag, date) {
    date = date === VOID ? System_instance.q13() : date;
    this.tag = tag;
    this.date = date;
  }
  protoOf(ProtocolVersion).t22 = function () {
    return this.tag;
  };
  protoOf(ProtocolVersion).u22 = function () {
    return this.date;
  };
  protoOf(ProtocolVersion).od = function () {
    return this.tag;
  };
  protoOf(ProtocolVersion).pd = function () {
    return this.date;
  };
  protoOf(ProtocolVersion).v22 = function (tag, date) {
    return new ProtocolVersion(tag, date);
  };
  protoOf(ProtocolVersion).copy = function (tag, date, $super) {
    tag = tag === VOID ? this.tag : tag;
    date = date === VOID ? this.date : date;
    return this.v22(tag, date);
  };
  protoOf(ProtocolVersion).toString = function () {
    return 'ProtocolVersion(tag=' + this.tag + ', date=' + this.date + ')';
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
    var tmp0_other_with_cast = other instanceof ProtocolVersion ? other : THROW_CCE();
    if (!(this.tag === tmp0_other_with_cast.tag))
      return false;
    if (!this.date.equals(tmp0_other_with_cast.date))
      return false;
    return true;
  };
  function Companion_2() {
  }
  protoOf(Companion_2).m16 = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.application.StudyProtocolSnapshot.DeviceConnection', this, 2);
    tmp0_serialDesc.nt('roleName', false);
    tmp0_serialDesc.nt('connectedToRoleName', false);
    this.w22_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).pi = function () {
    return this.w22_1;
  };
  protoOf($serializer_0).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_0).ri = function (decoder) {
    var tmp0_desc = this.w22_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.hm(tmp0_desc, 1);
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
            tmp5_local1 = tmp6_input.hm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return DeviceConnection_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).x22 = function (encoder, value) {
    var tmp0_desc = this.w22_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.roleName);
    tmp1_output.nn(tmp0_desc, 1, value.connectedToRoleName);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_0).qi = function (encoder, value) {
    return this.x22(encoder, value instanceof DeviceConnection ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_3() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function DeviceConnection_init_$Init$(seen1, roleName, connectedToRoleName, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_3().w22_1);
    }
    $this.roleName = roleName;
    $this.connectedToRoleName = connectedToRoleName;
    return $this;
  }
  function DeviceConnection_init_$Create$(seen1, roleName, connectedToRoleName, serializationConstructorMarker) {
    return DeviceConnection_init_$Init$(seen1, roleName, connectedToRoleName, serializationConstructorMarker, objectCreate(protoOf(DeviceConnection)));
  }
  function getConnections($this, protocol, primaryDevice) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var connections = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = protocol.y22(primaryDevice).t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.protocols.application.Companion.getConnections.<anonymous>' call
      connections.q(new DeviceConnection(element.roleName, primaryDevice.roleName));
      if (isPrimary(element)) {
        addAll(connections, getConnections(Companion_getInstance_5(), protocol, element));
      }
    }
    return connections;
  }
  function DeviceConnection(roleName, connectedToRoleName) {
    this.roleName = roleName;
    this.connectedToRoleName = connectedToRoleName;
  }
  protoOf(DeviceConnection).u1o = function () {
    return this.roleName;
  };
  protoOf(DeviceConnection).z22 = function () {
    return this.connectedToRoleName;
  };
  protoOf(DeviceConnection).od = function () {
    return this.roleName;
  };
  protoOf(DeviceConnection).pd = function () {
    return this.connectedToRoleName;
  };
  protoOf(DeviceConnection).r1f = function (roleName, connectedToRoleName) {
    return new DeviceConnection(roleName, connectedToRoleName);
  };
  protoOf(DeviceConnection).copy = function (roleName, connectedToRoleName, $super) {
    roleName = roleName === VOID ? this.roleName : roleName;
    connectedToRoleName = connectedToRoleName === VOID ? this.connectedToRoleName : connectedToRoleName;
    return this.r1f(roleName, connectedToRoleName);
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
    var tmp0_other_with_cast = other instanceof DeviceConnection ? other : THROW_CCE();
    if (!(this.roleName === tmp0_other_with_cast.roleName))
      return false;
    if (!(this.connectedToRoleName === tmp0_other_with_cast.connectedToRoleName))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = new LinkedHashSetSerializer(Companion_getInstance().z1q(UnitSerializer_getInstance(), UnitSerializer_getInstance()));
    var tmp_1 = new LinkedHashSetSerializer(Companion_getInstance_0().z1q(UnitSerializer_getInstance(), UnitSerializer_getInstance()));
    var tmp_2 = new LinkedHashSetSerializer($serializer_getInstance_3());
    var tmp_3 = getKClass(TaskConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    var tmp_4 = new LinkedHashSetSerializer(PolymorphicSerializer_init_$Create$(tmp_3, tmp$ret$2));
    var tmp_5 = IntSerializer_getInstance();
    var tmp_6 = getKClass(TriggerConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a23_1 = [null, null, null, null, null, null, tmp_0, tmp_1, tmp_2, tmp_4, new LinkedHashMapSerializer(tmp_5, PolymorphicSerializer_init_$Create$(tmp_6, tmp$ret$5)), new LinkedHashSetSerializer($serializer_getInstance()), new LinkedHashSetSerializer($serializer_getInstance_0()), new LinkedHashMapSerializer(StringSerializer_getInstance(), new LinkedHashSetSerializer(StringSerializer_getInstance())), new LinkedHashSetSerializer($serializer_getInstance_1()), new ApplicationDataSerializer()];
  }
  protoOf(Companion_3).fromProtocol = function (protocol, version) {
    // Inline function 'kotlin.collections.associate' call
    var this_0 = protocol.q23();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = this_0.t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'dk.cachet.carp.protocols.application.Companion.fromProtocol.<anonymous>' call
      var pair = to(element.r23_1, element.s23_1);
      destination.n2(pair.md_1, pair.nd_1);
    }
    var triggers = destination;
    var tmp = protocol.ra();
    var tmp_0 = protocol.o1u();
    var tmp_1 = toSet(protocol.a24());
    var tmp_2 = toSet(minus(protocol.b24(), protocol.a24()));
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_1 = protocol.a24();
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = this_1.t();
    while (tmp0_iterator_0.u()) {
      var element_0 = tmp0_iterator_0.v();
      // Inline function 'dk.cachet.carp.protocols.application.Companion.fromProtocol.<anonymous>' call
      var list = getConnections(Companion_getInstance_5(), protocol, element_0);
      addAll(destination_0, list);
    }
    var tmp_3 = toSet(destination_0);
    var tmp_4 = toSet(protocol.c24());
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_1 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_1 = triggers.p2().t();
    while (tmp0_iterator_1.u()) {
      var element_1 = tmp0_iterator_1.v();
      // Inline function 'dk.cachet.carp.protocols.application.Companion.fromProtocol.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_2 = protocol.d24(element_1.r2());
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
      var tmp0_iterator_2 = this_2.t();
      while (tmp0_iterator_2.u()) {
        var item = tmp0_iterator_2.v();
        // Inline function 'dk.cachet.carp.protocols.application.Companion.fromProtocol.<anonymous>.<anonymous>' call
        var tmp$ret$7 = to(element_1, item);
        destination_2.q(tmp$ret$7);
      }
      var list_0 = destination_2;
      addAll(destination_1, list_0);
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_1, 10));
    var tmp0_iterator_3 = destination_1.t();
    while (tmp0_iterator_3.u()) {
      var item_0 = tmp0_iterator_3.v();
      // Inline function 'dk.cachet.carp.protocols.application.Companion.fromProtocol.<anonymous>' call
      var trigger = item_0.od();
      var tc = item_0.pd();
      var tmp$ret$13 = new TaskControl(trigger.q2(), tc.f24_1.name, tc.g24_1.roleName, tc.h24_1);
      destination_3.q(tmp$ret$13);
    }
    var tmp_5 = toSet(destination_3);
    var tmp_6 = toSet(protocol.i24());
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_3 = protocol.j24();
    var destination_4 = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_4 = this_3.p2().t();
    while (tmp0_iterator_4.u()) {
      var element_2 = tmp0_iterator_4.v();
      // Inline function 'dk.cachet.carp.protocols.application.Companion.fromProtocol.<anonymous>' call
      var tmp_7 = element_2.r2();
      if (tmp_7 instanceof Roles) {
        destination_4.n2(element_2.q2(), element_2.r2());
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_5 = ArrayList_init_$Create$_0(destination_4.n());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_5 = destination_4.p2().t();
    while (tmp0_iterator_5.u()) {
      var item_1 = tmp0_iterator_5.v();
      // Inline function 'dk.cachet.carp.protocols.application.Companion.fromProtocol.<anonymous>' call
      var tmp_8 = item_1.q2().roleName;
      var tmp_9 = item_1.r2();
      var tmp$ret$21 = to(tmp_8, (tmp_9 instanceof Roles ? tmp_9 : THROW_CCE()).roleNames);
      destination_5.q(tmp$ret$21);
    }
    return new StudyProtocolSnapshot(protocol.n1y_1, protocol.o1y_1, version, protocol.i23_1, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, triggers, tmp_5, tmp_6, toMap(destination_5), toSet(protocol.k24()), protocol.o23_1);
  };
  protoOf(Companion_3).m16 = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.application.StudyProtocolSnapshot', this, 16);
    tmp0_serialDesc.nt('id', false);
    tmp0_serialDesc.nt('createdOn', false);
    tmp0_serialDesc.nt('version', false);
    tmp0_serialDesc.nt('ownerId', false);
    tmp0_serialDesc.nt('name', false);
    tmp0_serialDesc.nt('description', true);
    tmp0_serialDesc.nt('primaryDevices', true);
    tmp0_serialDesc.nt('connectedDevices', true);
    tmp0_serialDesc.nt('connections', true);
    tmp0_serialDesc.nt('tasks', true);
    tmp0_serialDesc.nt('triggers', true);
    tmp0_serialDesc.nt('taskControls', true);
    tmp0_serialDesc.nt('participantRoles', true);
    tmp0_serialDesc.nt('assignedDevices', true);
    tmp0_serialDesc.nt('expectedParticipantData', true);
    tmp0_serialDesc.nt('applicationData', true);
    this.l24_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).pi = function () {
    return this.l24_1;
  };
  protoOf($serializer_1).cu = function () {
    var tmp0_cached = Companion_getInstance_5().a23_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), InstantIso8601Serializer_getInstance(), IntSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[6], tmp0_cached[7], tmp0_cached[8], tmp0_cached[9], tmp0_cached[10], tmp0_cached[11], tmp0_cached[12], tmp0_cached[13], tmp0_cached[14], get_nullable(tmp0_cached[15])];
  };
  protoOf($serializer_1).ri = function (decoder) {
    var tmp0_desc = this.l24_1;
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
    var tmp20_input = decoder.xl(tmp0_desc);
    var tmp21_cached = Companion_getInstance_5().a23_1;
    if (tmp20_input.om()) {
      tmp4_local0 = tmp20_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.jm(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.cm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.jm(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.hm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.lm(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.jm(tmp0_desc, 6, tmp21_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.jm(tmp0_desc, 7, tmp21_cached[7], tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.jm(tmp0_desc, 8, tmp21_cached[8], tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.jm(tmp0_desc, 9, tmp21_cached[9], tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.jm(tmp0_desc, 10, tmp21_cached[10], tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.jm(tmp0_desc, 11, tmp21_cached[11], tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.jm(tmp0_desc, 12, tmp21_cached[12], tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.jm(tmp0_desc, 13, tmp21_cached[13], tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.jm(tmp0_desc, 14, tmp21_cached[14], tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.lm(tmp0_desc, 15, tmp21_cached[15], tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.jm(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.cm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.jm(tmp0_desc, 3, UUIDSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.hm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.lm(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.jm(tmp0_desc, 6, tmp21_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.jm(tmp0_desc, 7, tmp21_cached[7], tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.jm(tmp0_desc, 8, tmp21_cached[8], tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.jm(tmp0_desc, 9, tmp21_cached[9], tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.jm(tmp0_desc, 10, tmp21_cached[10], tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.jm(tmp0_desc, 11, tmp21_cached[11], tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.jm(tmp0_desc, 12, tmp21_cached[12], tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.jm(tmp0_desc, 13, tmp21_cached[13], tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.jm(tmp0_desc, 14, tmp21_cached[14], tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.lm(tmp0_desc, 15, tmp21_cached[15], tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp20_input.yl(tmp0_desc);
    return StudyProtocolSnapshot_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  };
  protoOf($serializer_1).m24 = function (encoder, value) {
    var tmp0_desc = this.l24_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().a23_1;
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.n24_1);
    tmp1_output.pn(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), value.o24_1);
    tmp1_output.in(tmp0_desc, 2, value.p24_1);
    tmp1_output.pn(tmp0_desc, 3, UUIDSerializer_getInstance(), value.ownerId);
    tmp1_output.nn(tmp0_desc, 4, value.name);
    if (tmp1_output.vn(tmp0_desc, 5) ? true : !(value.description == null)) {
      tmp1_output.rn(tmp0_desc, 5, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.vn(tmp0_desc, 6) ? true : !equals(value.primaryDevices, emptySet())) {
      tmp1_output.pn(tmp0_desc, 6, tmp2_cached[6], value.primaryDevices);
    }
    if (tmp1_output.vn(tmp0_desc, 7) ? true : !equals(value.connectedDevices, emptySet())) {
      tmp1_output.pn(tmp0_desc, 7, tmp2_cached[7], value.connectedDevices);
    }
    if (tmp1_output.vn(tmp0_desc, 8) ? true : !equals(value.connections, emptySet())) {
      tmp1_output.pn(tmp0_desc, 8, tmp2_cached[8], value.connections);
    }
    if (tmp1_output.vn(tmp0_desc, 9) ? true : !equals(value.tasks, emptySet())) {
      tmp1_output.pn(tmp0_desc, 9, tmp2_cached[9], value.tasks);
    }
    if (tmp1_output.vn(tmp0_desc, 10) ? true : !equals(value.triggers, emptyMap())) {
      tmp1_output.pn(tmp0_desc, 10, tmp2_cached[10], value.triggers);
    }
    if (tmp1_output.vn(tmp0_desc, 11) ? true : !equals(value.taskControls, emptySet())) {
      tmp1_output.pn(tmp0_desc, 11, tmp2_cached[11], value.taskControls);
    }
    if (tmp1_output.vn(tmp0_desc, 12) ? true : !equals(value.participantRoles, emptySet())) {
      tmp1_output.pn(tmp0_desc, 12, tmp2_cached[12], value.participantRoles);
    }
    if (tmp1_output.vn(tmp0_desc, 13) ? true : !equals(value.assignedDevices, emptyMap())) {
      tmp1_output.pn(tmp0_desc, 13, tmp2_cached[13], value.assignedDevices);
    }
    if (tmp1_output.vn(tmp0_desc, 14) ? true : !equals(value.expectedParticipantData, emptySet())) {
      tmp1_output.pn(tmp0_desc, 14, tmp2_cached[14], value.expectedParticipantData);
    }
    if (tmp1_output.vn(tmp0_desc, 15) ? true : !(value.applicationData == null)) {
      tmp1_output.rn(tmp0_desc, 15, tmp2_cached[15], value.applicationData);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_1).qi = function (encoder, value) {
    return this.m24(encoder, value instanceof StudyProtocolSnapshot ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_4() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function StudyProtocolSnapshot_init_$Init$(seen1, id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_4().l24_1);
    }
    $this.n24_1 = id;
    $this.o24_1 = createdOn;
    $this.p24_1 = version;
    $this.ownerId = ownerId;
    $this.name = name;
    if (0 === (seen1 & 32))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen1 & 64))
      $this.primaryDevices = emptySet();
    else
      $this.primaryDevices = primaryDevices;
    if (0 === (seen1 & 128))
      $this.connectedDevices = emptySet();
    else
      $this.connectedDevices = connectedDevices;
    if (0 === (seen1 & 256))
      $this.connections = emptySet();
    else
      $this.connections = connections;
    if (0 === (seen1 & 512))
      $this.tasks = emptySet();
    else
      $this.tasks = tasks;
    if (0 === (seen1 & 1024))
      $this.triggers = emptyMap();
    else
      $this.triggers = triggers;
    if (0 === (seen1 & 2048))
      $this.taskControls = emptySet();
    else
      $this.taskControls = taskControls;
    if (0 === (seen1 & 4096))
      $this.participantRoles = emptySet();
    else
      $this.participantRoles = participantRoles;
    if (0 === (seen1 & 8192))
      $this.assignedDevices = emptyMap();
    else
      $this.assignedDevices = assignedDevices;
    if (0 === (seen1 & 16384))
      $this.expectedParticipantData = emptySet();
    else
      $this.expectedParticipantData = expectedParticipantData;
    if (0 === (seen1 & 32768))
      $this.applicationData = null;
    else
      $this.applicationData = applicationData;
    return $this;
  }
  function StudyProtocolSnapshot_init_$Create$(seen1, id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData, serializationConstructorMarker) {
    return StudyProtocolSnapshot_init_$Init$(seen1, id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData, serializationConstructorMarker, objectCreate(protoOf(StudyProtocolSnapshot)));
  }
  function StudyProtocolSnapshot(id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData) {
    Companion_getInstance_5();
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
    this.n24_1 = id;
    this.o24_1 = createdOn;
    this.p24_1 = version;
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
  protoOf(StudyProtocolSnapshot).z1y = function () {
    return this.n24_1;
  };
  protoOf(StudyProtocolSnapshot).a1z = function () {
    return this.o24_1;
  };
  protoOf(StudyProtocolSnapshot).b1z = function () {
    return this.p24_1;
  };
  protoOf(StudyProtocolSnapshot).q24 = function () {
    return this.ownerId;
  };
  protoOf(StudyProtocolSnapshot).ra = function () {
    return this.name;
  };
  protoOf(StudyProtocolSnapshot).o1u = function () {
    return this.description;
  };
  protoOf(StudyProtocolSnapshot).a24 = function () {
    return this.primaryDevices;
  };
  protoOf(StudyProtocolSnapshot).r24 = function () {
    return this.connectedDevices;
  };
  protoOf(StudyProtocolSnapshot).s24 = function () {
    return this.connections;
  };
  protoOf(StudyProtocolSnapshot).c24 = function () {
    return this.tasks;
  };
  protoOf(StudyProtocolSnapshot).q23 = function () {
    return this.triggers;
  };
  protoOf(StudyProtocolSnapshot).t24 = function () {
    return this.taskControls;
  };
  protoOf(StudyProtocolSnapshot).i24 = function () {
    return this.participantRoles;
  };
  protoOf(StudyProtocolSnapshot).u24 = function () {
    return this.assignedDevices;
  };
  protoOf(StudyProtocolSnapshot).k24 = function () {
    return this.expectedParticipantData;
  };
  protoOf(StudyProtocolSnapshot).v24 = function () {
    return this.applicationData;
  };
  protoOf(StudyProtocolSnapshot).toObject = function () {
    return Factory_instance.w24(this);
  };
  protoOf(StudyProtocolSnapshot).od = function () {
    return this.n24_1;
  };
  protoOf(StudyProtocolSnapshot).pd = function () {
    return this.o24_1;
  };
  protoOf(StudyProtocolSnapshot).r1g = function () {
    return this.p24_1;
  };
  protoOf(StudyProtocolSnapshot).q1h = function () {
    return this.ownerId;
  };
  protoOf(StudyProtocolSnapshot).r1m = function () {
    return this.name;
  };
  protoOf(StudyProtocolSnapshot).l1p = function () {
    return this.description;
  };
  protoOf(StudyProtocolSnapshot).x24 = function () {
    return this.primaryDevices;
  };
  protoOf(StudyProtocolSnapshot).y24 = function () {
    return this.connectedDevices;
  };
  protoOf(StudyProtocolSnapshot).z24 = function () {
    return this.connections;
  };
  protoOf(StudyProtocolSnapshot).a25 = function () {
    return this.tasks;
  };
  protoOf(StudyProtocolSnapshot).b25 = function () {
    return this.triggers;
  };
  protoOf(StudyProtocolSnapshot).c25 = function () {
    return this.taskControls;
  };
  protoOf(StudyProtocolSnapshot).d25 = function () {
    return this.participantRoles;
  };
  protoOf(StudyProtocolSnapshot).e25 = function () {
    return this.assignedDevices;
  };
  protoOf(StudyProtocolSnapshot).f25 = function () {
    return this.expectedParticipantData;
  };
  protoOf(StudyProtocolSnapshot).g25 = function () {
    return this.applicationData;
  };
  protoOf(StudyProtocolSnapshot).h25 = function (id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData) {
    return new StudyProtocolSnapshot(id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData);
  };
  protoOf(StudyProtocolSnapshot).copy = function (id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData, $super) {
    id = id === VOID ? this.n24_1 : id;
    createdOn = createdOn === VOID ? this.o24_1 : createdOn;
    version = version === VOID ? this.p24_1 : version;
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
    return this.h25(id, createdOn, version, ownerId, name, description, primaryDevices, connectedDevices, connections, tasks, triggers, taskControls, participantRoles, assignedDevices, expectedParticipantData, applicationData);
  };
  protoOf(StudyProtocolSnapshot).toString = function () {
    return 'StudyProtocolSnapshot(id=' + this.n24_1 + ', createdOn=' + this.o24_1 + ', version=' + this.p24_1 + ', ownerId=' + this.ownerId + ', name=' + this.name + ', description=' + this.description + ', primaryDevices=' + this.primaryDevices + ', connectedDevices=' + this.connectedDevices + ', connections=' + this.connections + ', tasks=' + this.tasks + ', triggers=' + this.triggers + ', taskControls=' + this.taskControls + ', participantRoles=' + this.participantRoles + ', assignedDevices=' + this.assignedDevices + ', expectedParticipantData=' + this.expectedParticipantData + ', applicationData=' + this.applicationData + ')';
  };
  protoOf(StudyProtocolSnapshot).hashCode = function () {
    var result = this.n24_1.hashCode();
    result = imul(result, 31) + this.o24_1.hashCode() | 0;
    result = imul(result, 31) + this.p24_1 | 0;
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
    result = imul(result, 31) + (this.applicationData == null ? 0 : getStringHashCode(this.applicationData)) | 0;
    return result;
  };
  protoOf(StudyProtocolSnapshot).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StudyProtocolSnapshot))
      return false;
    var tmp0_other_with_cast = other instanceof StudyProtocolSnapshot ? other : THROW_CCE();
    if (!this.n24_1.equals(tmp0_other_with_cast.n24_1))
      return false;
    if (!this.o24_1.equals(tmp0_other_with_cast.o24_1))
      return false;
    if (!(this.p24_1 === tmp0_other_with_cast.p24_1))
      return false;
    if (!this.ownerId.equals(tmp0_other_with_cast.ownerId))
      return false;
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    if (!(this.description == tmp0_other_with_cast.description))
      return false;
    if (!equals(this.primaryDevices, tmp0_other_with_cast.primaryDevices))
      return false;
    if (!equals(this.connectedDevices, tmp0_other_with_cast.connectedDevices))
      return false;
    if (!equals(this.connections, tmp0_other_with_cast.connections))
      return false;
    if (!equals(this.tasks, tmp0_other_with_cast.tasks))
      return false;
    if (!equals(this.triggers, tmp0_other_with_cast.triggers))
      return false;
    if (!equals(this.taskControls, tmp0_other_with_cast.taskControls))
      return false;
    if (!equals(this.participantRoles, tmp0_other_with_cast.participantRoles))
      return false;
    if (!equals(this.assignedDevices, tmp0_other_with_cast.assignedDevices))
      return false;
    if (!equals(this.expectedParticipantData, tmp0_other_with_cast.expectedParticipantData))
      return false;
    if (!(this.applicationData == tmp0_other_with_cast.applicationData))
      return false;
    return true;
  };
  function PrimaryDeviceAdded(device) {
    Event.call(this);
    this.i25_1 = device;
  }
  protoOf(PrimaryDeviceAdded).toString = function () {
    return 'PrimaryDeviceAdded(device=' + this.i25_1 + ')';
  };
  protoOf(PrimaryDeviceAdded).hashCode = function () {
    return hashCode(this.i25_1);
  };
  protoOf(PrimaryDeviceAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimaryDeviceAdded))
      return false;
    var tmp0_other_with_cast = other instanceof PrimaryDeviceAdded ? other : THROW_CCE();
    if (!equals(this.i25_1, tmp0_other_with_cast.i25_1))
      return false;
    return true;
  };
  function ConnectedDeviceAdded(connected, primary) {
    Event.call(this);
    this.j25_1 = connected;
    this.k25_1 = primary;
  }
  protoOf(ConnectedDeviceAdded).toString = function () {
    return 'ConnectedDeviceAdded(connected=' + this.j25_1 + ', primary=' + this.k25_1 + ')';
  };
  protoOf(ConnectedDeviceAdded).hashCode = function () {
    var result = hashCode(this.j25_1);
    result = imul(result, 31) + hashCode(this.k25_1) | 0;
    return result;
  };
  protoOf(ConnectedDeviceAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ConnectedDeviceAdded))
      return false;
    var tmp0_other_with_cast = other instanceof ConnectedDeviceAdded ? other : THROW_CCE();
    if (!equals(this.j25_1, tmp0_other_with_cast.j25_1))
      return false;
    if (!equals(this.k25_1, tmp0_other_with_cast.k25_1))
      return false;
    return true;
  };
  function TriggerAdded(trigger) {
    Event.call(this);
    this.l25_1 = trigger;
  }
  protoOf(TriggerAdded).toString = function () {
    return 'TriggerAdded(trigger=' + this.l25_1 + ')';
  };
  protoOf(TriggerAdded).hashCode = function () {
    return hashCode(this.l25_1);
  };
  protoOf(TriggerAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TriggerAdded))
      return false;
    var tmp0_other_with_cast = other instanceof TriggerAdded ? other : THROW_CCE();
    if (!equals(this.l25_1, tmp0_other_with_cast.l25_1))
      return false;
    return true;
  };
  function TaskAdded(task) {
    Event.call(this);
    this.m25_1 = task;
  }
  protoOf(TaskAdded).toString = function () {
    return 'TaskAdded(task=' + this.m25_1 + ')';
  };
  protoOf(TaskAdded).hashCode = function () {
    return hashCode(this.m25_1);
  };
  protoOf(TaskAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TaskAdded))
      return false;
    var tmp0_other_with_cast = other instanceof TaskAdded ? other : THROW_CCE();
    if (!equals(this.m25_1, tmp0_other_with_cast.m25_1))
      return false;
    return true;
  };
  function TaskControlAdded(control) {
    Event.call(this);
    this.n25_1 = control;
  }
  protoOf(TaskControlAdded).toString = function () {
    return 'TaskControlAdded(control=' + this.n25_1 + ')';
  };
  protoOf(TaskControlAdded).hashCode = function () {
    return this.n25_1.hashCode();
  };
  protoOf(TaskControlAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TaskControlAdded))
      return false;
    var tmp0_other_with_cast = other instanceof TaskControlAdded ? other : THROW_CCE();
    if (!this.n25_1.equals(tmp0_other_with_cast.n25_1))
      return false;
    return true;
  };
  function ParticipantRoleAdded(role) {
    Event.call(this);
    this.o25_1 = role;
  }
  protoOf(ParticipantRoleAdded).toString = function () {
    return 'ParticipantRoleAdded(role=' + this.o25_1 + ')';
  };
  protoOf(ParticipantRoleAdded).hashCode = function () {
    return this.o25_1.hashCode();
  };
  protoOf(ParticipantRoleAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParticipantRoleAdded))
      return false;
    var tmp0_other_with_cast = other instanceof ParticipantRoleAdded ? other : THROW_CCE();
    if (!this.o25_1.equals(tmp0_other_with_cast.o25_1))
      return false;
    return true;
  };
  function DeviceAssignmentChanged(device, assignedTo) {
    Event.call(this);
    this.p25_1 = device;
    this.q25_1 = assignedTo;
  }
  protoOf(DeviceAssignmentChanged).toString = function () {
    return 'DeviceAssignmentChanged(device=' + this.p25_1 + ', assignedTo=' + this.q25_1 + ')';
  };
  protoOf(DeviceAssignmentChanged).hashCode = function () {
    var result = hashCode(this.p25_1);
    result = imul(result, 31) + hashCode(this.q25_1) | 0;
    return result;
  };
  protoOf(DeviceAssignmentChanged).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeviceAssignmentChanged))
      return false;
    var tmp0_other_with_cast = other instanceof DeviceAssignmentChanged ? other : THROW_CCE();
    if (!equals(this.p25_1, tmp0_other_with_cast.p25_1))
      return false;
    if (!equals(this.q25_1, tmp0_other_with_cast.q25_1))
      return false;
    return true;
  };
  function ExpectedParticipantDataAdded(expectedData) {
    Event.call(this);
    this.r25_1 = expectedData;
  }
  protoOf(ExpectedParticipantDataAdded).toString = function () {
    return 'ExpectedParticipantDataAdded(expectedData=' + this.r25_1 + ')';
  };
  protoOf(ExpectedParticipantDataAdded).hashCode = function () {
    return this.r25_1.hashCode();
  };
  protoOf(ExpectedParticipantDataAdded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExpectedParticipantDataAdded))
      return false;
    var tmp0_other_with_cast = other instanceof ExpectedParticipantDataAdded ? other : THROW_CCE();
    if (!this.r25_1.equals(tmp0_other_with_cast.r25_1))
      return false;
    return true;
  };
  function Event() {
  }
  function Factory() {
  }
  protoOf(Factory).w24 = function (snapshot) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>' call
    var protocol = new StudyProtocol(snapshot.ownerId, snapshot.name, snapshot.description, snapshot.n24_1, snapshot.o24_1);
    protocol.o23_1 = snapshot.applicationData;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = snapshot.primaryDevices.t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>' call
      protocol.s25(element);
    }
    var allDevices = toList(plus(snapshot.connectedDevices, snapshot.primaryDevices));
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = snapshot.connections.t();
    while (tmp0_iterator_0.u()) {
      var element_0 = tmp0_iterator_0.v();
      // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>' call
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator_1 = allDevices.t();
        while (tmp0_iterator_1.u()) {
          var element_1 = tmp0_iterator_1.v();
          if (element_1 instanceof PrimaryDeviceConfiguration) {
            destination.q(element_1);
          }
        }
        var tmp0_iterator_2 = destination.t();
        while (tmp0_iterator_2.u()) {
          var element_2 = tmp0_iterator_2.v();
          // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>.<anonymous>' call
          if (element_2.roleName === element_0.connectedToRoleName) {
            tmp$ret$5 = element_2;
            break $l$block;
          }
        }
        tmp$ret$5 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$5;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$("Can't find primary device with role name '" + element_0.connectedToRoleName + "' in snapshot.");
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var primary = tmp;
      var tmp$ret$7;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_3 = allDevices.t();
        while (tmp0_iterator_3.u()) {
          var element_3 = tmp0_iterator_3.v();
          // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>.<anonymous>' call
          if (element_3.roleName === element_0.roleName) {
            tmp$ret$7 = element_3;
            break $l$block_0;
          }
        }
        tmp$ret$7 = null;
      }
      var tmp1_elvis_lhs = tmp$ret$7;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$("Can't find connected device with role name '" + element_0.roleName + "' in snapshot.");
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var connected = tmp_0;
      protocol.t25(connected, primary);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_4 = snapshot.tasks.t();
    while (tmp0_iterator_4.u()) {
      var element_4 = tmp0_iterator_4.v();
      // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>' call
      protocol.u25(element_4);
    }
    var triggerIds = sorted(snapshot.triggers.l2());
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!triggerIds.y()) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(first(triggerIds) === 0 ? last(triggerIds) === (triggerIds.n() - 1 | 0) : false)) {
        // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>' call
        var message = 'Triggers should be given sequential IDs starting with 0.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(triggerIds, 10));
      var tmp0_iterator_5 = triggerIds.t();
      while (tmp0_iterator_5.u()) {
        var item = tmp0_iterator_5.v();
        // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>' call
        // Inline function 'kotlin.checkNotNull' call
        var value = snapshot.triggers.x2(item);
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        $l$block_1: {
          // Inline function 'kotlin.checkNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (value == null) {
            // Inline function 'kotlin.checkNotNull.<anonymous>' call
            var message_0 = 'Required value was null.';
            throw IllegalStateException_init_$Create$(toString(message_0));
          } else {
            tmp$ret$11 = value;
            break $l$block_1;
          }
        }
        var trigger = tmp$ret$11;
        var tmp$ret$13 = protocol.v25(trigger);
        destination_0.q(tmp$ret$13);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_6 = snapshot.taskControls.t();
    while (tmp0_iterator_6.u()) {
      var element_5 = tmp0_iterator_6.v();
      // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>' call
      var tmp$ret$17;
      $l$block_3: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var tmp0_iterator_7 = snapshot.triggers.p2().t();
        while (tmp0_iterator_7.u()) {
          var element_6 = tmp0_iterator_7.v();
          // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>.<anonymous>' call
          if (element_6.q2() === element_5.triggerId) {
            if (found) {
              tmp$ret$17 = null;
              break $l$block_3;
            }
            single = element_6;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$17 = null;
          break $l$block_3;
        }
        tmp$ret$17 = single;
      }
      var tmp0_elvis_lhs_0 = tmp$ret$17;
      var tmp_1;
      if (tmp0_elvis_lhs_0 == null) {
        throw IllegalArgumentException_init_$Create$("Can't find trigger with id '" + element_5.triggerId + "' in snapshot.");
      } else {
        tmp_1 = tmp0_elvis_lhs_0;
      }
      var triggerMatch = tmp_1;
      var tmp$ret$19;
      $l$block_5: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single_0 = null;
        var found_0 = false;
        var tmp0_iterator_8 = protocol.c24().t();
        while (tmp0_iterator_8.u()) {
          var element_7 = tmp0_iterator_8.v();
          // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>.<anonymous>' call
          if (element_7.name === element_5.taskName) {
            if (found_0) {
              tmp$ret$19 = null;
              break $l$block_5;
            }
            single_0 = element_7;
            found_0 = true;
          }
        }
        if (!found_0) {
          tmp$ret$19 = null;
          break $l$block_5;
        }
        tmp$ret$19 = single_0;
      }
      var tmp1_elvis_lhs_0 = tmp$ret$19;
      var tmp_2;
      if (tmp1_elvis_lhs_0 == null) {
        throw IllegalArgumentException_init_$Create$("Can't find task with name '" + element_5.taskName + "' in snapshot.");
      } else {
        tmp_2 = tmp1_elvis_lhs_0;
      }
      var task = tmp_2;
      var tmp$ret$21;
      $l$block_7: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single_1 = null;
        var found_1 = false;
        var tmp0_iterator_9 = protocol.b24().t();
        while (tmp0_iterator_9.u()) {
          var element_8 = tmp0_iterator_9.v();
          // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>.<anonymous>' call
          if (element_8.roleName === element_5.destinationDeviceRoleName) {
            if (found_1) {
              tmp$ret$21 = null;
              break $l$block_7;
            }
            single_1 = element_8;
            found_1 = true;
          }
        }
        if (!found_1) {
          tmp$ret$21 = null;
          break $l$block_7;
        }
        tmp$ret$21 = single_1;
      }
      var tmp2_elvis_lhs = tmp$ret$21;
      var tmp_3;
      if (tmp2_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$("Can't find device with role name '" + element_5.destinationDeviceRoleName + "' in snapshot.");
      } else {
        tmp_3 = tmp2_elvis_lhs;
      }
      var device = tmp_3;
      protocol.w25(triggerMatch.r2(), task, device, element_5.control);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_10 = snapshot.participantRoles.t();
    while (tmp0_iterator_10.u()) {
      var element_9 = tmp0_iterator_10.v();
      // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>' call
      protocol.x25(element_9);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_11 = snapshot.expectedParticipantData.t();
    while (tmp0_iterator_11.u()) {
      var element_10 = tmp0_iterator_11.v();
      // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>' call
      protocol.y25(element_10);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_12 = snapshot.assignedDevices.p2().t();
    while (tmp0_iterator_12.u()) {
      var element_11 = tmp0_iterator_12.v();
      // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var deviceRoleName = element_11.q2();
      // Inline function 'kotlin.collections.component2' call
      var assignedParticipantRoles = element_11.r2();
      var tmp$ret$28;
      $l$block_10: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp$ret$26;
        $l$block_9: {
          // Inline function 'kotlin.collections.singleOrNull' call
          var single_2 = null;
          var found_2 = false;
          var tmp0_iterator_13 = protocol.a24().t();
          while (tmp0_iterator_13.u()) {
            var element_12 = tmp0_iterator_13.v();
            // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>.<anonymous>' call
            if (element_12.roleName === deviceRoleName) {
              if (found_2) {
                tmp$ret$26 = null;
                break $l$block_9;
              }
              single_2 = element_12;
              found_2 = true;
            }
          }
          if (!found_2) {
            tmp$ret$26 = null;
            break $l$block_9;
          }
          tmp$ret$26 = single_2;
        }
        var value_0 = tmp$ret$26;
        // Inline function 'kotlin.contracts.contract' call
        if (value_0 == null) {
          // Inline function 'dk.cachet.carp.protocols.domain.Factory.fromSnapshot.<anonymous>.<anonymous>' call
          var message_1 = "Can't find device with role name '" + deviceRoleName + "' in snapshot.";
          throw IllegalArgumentException_init_$Create$(toString(message_1));
        } else {
          tmp$ret$28 = value_0;
          break $l$block_10;
        }
      }
      var device_0 = tmp$ret$28;
      protocol.z25(device_0, new Roles(assignedParticipantRoles));
    }
    protocol.u1y();
    protocol.r1y(snapshot);
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
    id = id === VOID ? Companion_instance.randomUUID() : id;
    createdOn = createdOn === VOID ? System_instance.q13() : createdOn;
    StudyProtocolComposition.call(this, new EmptyProtocolDeviceConfiguration(), new EmptyProtocolTaskConfiguration(), new EmptyProtocolParticipantConfiguration(), id, createdOn);
    this.i23_1 = ownerId;
    this.j23_1 = name;
    this.k23_1 = description;
    this.l23_1 = LinkedHashSet_init_$Create$();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.m23_1 = LinkedHashMap_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.n23_1 = LinkedHashMap_init_$Create$_0();
    this.o23_1 = null;
    this.p23_1 = listOf([new NoPrimaryDeviceError(), new OnlyOptionalDevicesWarning(), new UnstartedTasksWarning(), new BackgroundTaskWithNoMeasuresWarning(), new UseCompositeTaskWarning(), new UnusedDevicesWarning(), new UnexpectedMeasuresWarning()]);
  }
  protoOf(StudyProtocol).ra = function () {
    return this.j23_1;
  };
  protoOf(StudyProtocol).o1u = function () {
    return this.k23_1;
  };
  protoOf(StudyProtocol).s25 = function (primaryDevice) {
    var isAdded = protoOf(StudyProtocolComposition).s25.call(this, primaryDevice);
    if (isAdded) {
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.n23_1;
      var value = All_getInstance();
      this_0.n2(primaryDevice, value);
      this.s1y(new PrimaryDeviceAdded(primaryDevice));
    }
    return isAdded;
  };
  protoOf(StudyProtocol).t25 = function (device, primaryDevice) {
    var tmp = protoOf(StudyProtocolComposition).t25.call(this, device, primaryDevice);
    return this.t1y(tmp, true, StudyProtocol$addConnectedDevice$lambda(device, primaryDevice));
  };
  protoOf(StudyProtocol).q23 = function () {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = this.l23_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.t();
    while (tmp0_iterator.u()) {
      var item = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.protocols.domain.StudyProtocol.<get-triggers>.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var tmp$ret$0 = new TriggerWithId(index_0, item);
      destination.q(tmp$ret$0);
    }
    return destination;
  };
  protoOf(StudyProtocol).v25 = function (trigger) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.x23_1.b24().t();
      while (tmp0_iterator.u()) {
        var element = tmp0_iterator.v();
        // Inline function 'dk.cachet.carp.protocols.domain.StudyProtocol.addTrigger.<anonymous>' call
        if (element.roleName === trigger.sourceDeviceRoleName) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('The passed trigger does not belong to any device specified in this study protocol.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var device = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!trigger.requiresPrimaryDevice ? true : isPrimary(device))) {
      // Inline function 'dk.cachet.carp.protocols.domain.StudyProtocol.addTrigger.<anonymous>' call
      var message = 'The passed trigger cannot be initiated by the specified device since it is not a primary device.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var isAdded = this.l23_1.q(trigger);
    if (isAdded) {
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.m23_1;
      // Inline function 'kotlin.collections.mutableSetOf' call
      var value = LinkedHashSet_init_$Create$();
      this_0.n2(trigger, value);
      this.s1y(new TriggerAdded(trigger));
    }
    return new TriggerWithId(indexOf(this.l23_1, trigger), trigger);
  };
  protoOf(StudyProtocol).w25 = function (trigger, task, destinationDevice, control) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.b24().p(destinationDevice)) {
      // Inline function 'dk.cachet.carp.protocols.domain.StudyProtocol.addTaskControl.<anonymous>' call
      var message = 'The passed device to which the task needs to be sent is not included in this study protocol.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.v25(trigger);
    this.u25(task);
    var taskControl = new TaskControl_0(trigger, task, destinationDevice, control);
    var tmp = ensureNotNull(this.m23_1.x2(trigger)).q(taskControl);
    return this.t1y(tmp, true, StudyProtocol$addTaskControl$lambda(taskControl));
  };
  protoOf(StudyProtocol).d24 = function (trigger) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.l23_1.p(trigger)) {
      // Inline function 'dk.cachet.carp.protocols.domain.StudyProtocol.getTaskControls.<anonymous>' call
      var message = 'The passed trigger is not part of this study protocol.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return ensureNotNull(this.m23_1.x2(trigger));
  };
  protoOf(StudyProtocol).u25 = function (task) {
    var tmp = protoOf(StudyProtocolComposition).u25.call(this, task);
    return this.t1y(tmp, true, StudyProtocol$addTask$lambda(task));
  };
  protoOf(StudyProtocol).x25 = function (role) {
    var tmp = protoOf(StudyProtocolComposition).x25.call(this, role);
    return this.t1y(tmp, true, StudyProtocol$addParticipantRole$lambda(role));
  };
  protoOf(StudyProtocol).y25 = function (expectedData) {
    var tmp = protoOf(StudyProtocolComposition).y25.call(this, expectedData);
    return this.t1y(tmp, true, StudyProtocol$addExpectedParticipantData$lambda(expectedData));
  };
  protoOf(StudyProtocol).j24 = function () {
    return toMap_0(this.n23_1);
  };
  protoOf(StudyProtocol).z25 = function (device, assignedTo) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.n23_1.u2(device)) {
      // Inline function 'dk.cachet.carp.protocols.domain.StudyProtocol.changeDeviceAssignment.<anonymous>' call
      var message = 'The device configuration is not part of this protocol.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.a26(assignedTo)) {
      // Inline function 'dk.cachet.carp.protocols.domain.StudyProtocol.changeDeviceAssignment.<anonymous>' call
      var message_0 = 'One of the assigned participant roles is not part of this protocol.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var isChanged = !equals(this.n23_1.n2(device, assignedTo), assignedTo);
    if (isChanged) {
      this.s1y(new DeviceAssignmentChanged(device, assignedTo));
    }
    return isChanged;
  };
  function TaskControl_0(trigger, task, destinationDevice, control) {
    this.e24_1 = trigger;
    this.f24_1 = task;
    this.g24_1 = destinationDevice;
    this.h24_1 = control;
  }
  protoOf(TaskControl_0).toString = function () {
    return 'TaskControl(trigger=' + this.e24_1 + ', task=' + this.f24_1 + ', destinationDevice=' + this.g24_1 + ', control=' + this.h24_1 + ')';
  };
  protoOf(TaskControl_0).hashCode = function () {
    var result = hashCode(this.e24_1);
    result = imul(result, 31) + hashCode(this.f24_1) | 0;
    result = imul(result, 31) + hashCode(this.g24_1) | 0;
    result = imul(result, 31) + this.h24_1.hashCode() | 0;
    return result;
  };
  protoOf(TaskControl_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TaskControl_0))
      return false;
    var tmp0_other_with_cast = other instanceof TaskControl_0 ? other : THROW_CCE();
    if (!equals(this.e24_1, tmp0_other_with_cast.e24_1))
      return false;
    if (!equals(this.f24_1, tmp0_other_with_cast.f24_1))
      return false;
    if (!equals(this.g24_1, tmp0_other_with_cast.g24_1))
      return false;
    if (!this.h24_1.equals(tmp0_other_with_cast.h24_1))
      return false;
    return true;
  };
  function TriggerWithId(id, trigger) {
    this.r23_1 = id;
    this.s23_1 = trigger;
  }
  protoOf(TriggerWithId).toString = function () {
    return 'TriggerWithId(id=' + this.r23_1 + ', trigger=' + this.s23_1 + ')';
  };
  protoOf(TriggerWithId).hashCode = function () {
    var result = this.r23_1;
    result = imul(result, 31) + hashCode(this.s23_1) | 0;
    return result;
  };
  protoOf(TriggerWithId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TriggerWithId))
      return false;
    var tmp0_other_with_cast = other instanceof TriggerWithId ? other : THROW_CCE();
    if (!(this.r23_1 === tmp0_other_with_cast.r23_1))
      return false;
    if (!equals(this.s23_1, tmp0_other_with_cast.s23_1))
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
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!$this.b24().p(device)) {
      // Inline function 'dk.cachet.carp.protocols.domain.configuration.EmptyProtocolDeviceConfiguration.verifyPrimaryDevice.<anonymous>' call
      var message = 'The passed primary device with role name "' + device.roleName + '" is not part of this device configuration.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return tmp;
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
    tmp.e26_1 = new ExtractUniqueKeyMap(tmp_0, EmptyProtocolDeviceConfiguration$_devices$lambda_0);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.f26_1 = LinkedHashMap_init_$Create$_0();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_2.g26_1 = LinkedHashSet_init_$Create$();
  }
  protoOf(EmptyProtocolDeviceConfiguration).p2 = function () {
    return this.e26_1.p2();
  };
  protoOf(EmptyProtocolDeviceConfiguration).b24 = function () {
    return toSet(this.e26_1.m2());
  };
  protoOf(EmptyProtocolDeviceConfiguration).a24 = function () {
    return this.g26_1;
  };
  protoOf(EmptyProtocolDeviceConfiguration).s25 = function (primaryDevice) {
    verifySamplingConfigurations(this, primaryDevice);
    var isNewDevice = this.e26_1.y1y(primaryDevice);
    this.g26_1.q(primaryDevice);
    return isNewDevice;
  };
  protoOf(EmptyProtocolDeviceConfiguration).t25 = function (device, primaryDevice) {
    verifySamplingConfigurations(this, device);
    verifyPrimaryDevice(this, primaryDevice);
    this.e26_1.y1y(device);
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.f26_1;
    var value = this_0.x2(primaryDevice);
    var tmp;
    if (value == null) {
      // Inline function 'dk.cachet.carp.protocols.domain.configuration.EmptyProtocolDeviceConfiguration.addConnectedDevice.<anonymous>' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var answer = LinkedHashSet_init_$Create$();
      this_0.n2(primaryDevice, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp.q(device);
  };
  protoOf(EmptyProtocolDeviceConfiguration).b26 = function (primaryDevice, includeChainedDevices) {
    verifyPrimaryDevice(this, primaryDevice);
    // Inline function 'kotlin.collections.mutableListOf' call
    var connectedDevices = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.f26_1;
    if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).u2(primaryDevice)) {
      connectedDevices.r(ensureNotNull(this.f26_1.x2(primaryDevice)));
      if (includeChainedDevices) {
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = connectedDevices.t();
        while (tmp0_iterator.u()) {
          var element = tmp0_iterator.v();
          if (element instanceof PrimaryDeviceConfiguration) {
            destination.q(element);
          }
        }
        var tmp0_iterator_0 = destination.t();
        while (tmp0_iterator_0.u()) {
          var element_0 = tmp0_iterator_0.v();
          // Inline function 'dk.cachet.carp.protocols.domain.configuration.EmptyProtocolDeviceConfiguration.getConnectedDevices.<anonymous>' call
          addAll(connectedDevices, this.b26(element_0, true));
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
    tmp.h26_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    var tmp_1 = EmptyProtocolParticipantConfiguration$_participantRoles$lambda;
    tmp_0.i26_1 = new ExtractUniqueKeyMap(tmp_1, EmptyProtocolParticipantConfiguration$_participantRoles$lambda_0);
  }
  protoOf(EmptyProtocolParticipantConfiguration).k24 = function () {
    return toSet(this.h26_1);
  };
  protoOf(EmptyProtocolParticipantConfiguration).i24 = function () {
    return toSet(this.i26_1.m2());
  };
  protoOf(EmptyProtocolParticipantConfiguration).y25 = function (expectedData) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.a26(expectedData.assignedTo)) {
      // Inline function 'dk.cachet.carp.protocols.domain.configuration.EmptyProtocolParticipantConfiguration.addExpectedParticipantData.<anonymous>' call
      var message = "The expected data contains participant role names which aren't part of this participant configuration.";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    try {
      hasNoConflicts(plus_0(this.k24(), expectedData), true);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var ex = $p;
        throw IllegalArgumentException_init_$Create$_0('The expected data conflicts with existing specified existing data.', ex);
      } else {
        throw $p;
      }
    }
    return this.h26_1.q(expectedData);
  };
  protoOf(EmptyProtocolParticipantConfiguration).x25 = function (role) {
    return this.i26_1.y1y(role);
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
    tmp.l26_1 = new ExtractUniqueKeyMap(tmp_0, EmptyProtocolTaskConfiguration$_tasks$lambda_0);
  }
  protoOf(EmptyProtocolTaskConfiguration).p2 = function () {
    return this.l26_1.p2();
  };
  protoOf(EmptyProtocolTaskConfiguration).c24 = function () {
    return toSet(this.l26_1.m2());
  };
  protoOf(EmptyProtocolTaskConfiguration).u25 = function (task) {
    return this.l26_1.y1y(task);
  };
  function ProtocolDeviceConfiguration() {
  }
  function ProtocolParticipantConfiguration() {
  }
  function StudyProtocolComposition(deviceConfiguration, taskConfiguration, participantConfiguration, id, createdOn) {
    AggregateRoot.call(this, id, createdOn);
    this.x23_1 = deviceConfiguration;
    this.y23_1 = taskConfiguration;
    this.z23_1 = participantConfiguration;
  }
  protoOf(StudyProtocolComposition).b24 = function () {
    return this.x23_1.b24();
  };
  protoOf(StudyProtocolComposition).a24 = function () {
    return this.x23_1.a24();
  };
  protoOf(StudyProtocolComposition).t25 = function (device, primaryDevice) {
    return this.x23_1.t25(device, primaryDevice);
  };
  protoOf(StudyProtocolComposition).s25 = function (primaryDevice) {
    return this.x23_1.s25(primaryDevice);
  };
  protoOf(StudyProtocolComposition).b26 = function (primaryDevice, includeChainedDevices) {
    return this.x23_1.b26(primaryDevice, includeChainedDevices);
  };
  protoOf(StudyProtocolComposition).c24 = function () {
    return this.y23_1.c24();
  };
  protoOf(StudyProtocolComposition).u25 = function (task) {
    return this.y23_1.u25(task);
  };
  protoOf(StudyProtocolComposition).k24 = function () {
    return this.z23_1.k24();
  };
  protoOf(StudyProtocolComposition).i24 = function () {
    return this.z23_1.i24();
  };
  protoOf(StudyProtocolComposition).y25 = function (expectedData) {
    return this.z23_1.y25(expectedData);
  };
  protoOf(StudyProtocolComposition).x25 = function (role) {
    return this.z23_1.x25(role);
  };
  protoOf(StudyProtocolComposition).a26 = function (assignment) {
    return this.z23_1.a26(assignment);
  };
  function BackgroundTaskWithNoMeasuresWarning() {
    this.m26_1 = "The study protocol contains a background task which doesn't contain any measures. A background task without any measures doesn't do anything.";
  }
  function NoPrimaryDeviceError() {
    this.n26_1 = 'At least one primary device needs to be specified in a study protocol. Without a primary device, no data can be collected.';
  }
  function OnlyOptionalDevicesWarning() {
    this.o26_1 = "The study protocol only contains optional primary devices. This implies that a deployment could 'start' without any devices or participants, indicating a problem.";
  }
  function UnexpectedMeasuresWarning() {
    this.p26_1 = "The study protocol contains measures that are requested on a device for which the requested data type isn't expected. This is allowed, but requires the client implementation to have corresponding support to handle this unexpected data type.";
  }
  function UnstartedTasksWarning() {
    this.q26_1 = 'The study protocol contains tasks which are never started by a trigger. Tasks which are never started by a trigger are never used during the study.';
  }
  function UnusedDevicesWarning() {
    this.r26_1 = 'The study protocol contains devices which are never used as the source or target of triggers, or to relay data (primary device). These devices thus serve no purpose as part of the specified study protocol.';
  }
  function UseCompositeTaskWarning() {
    this.s26_1 = 'The study protocol contains triggers which send multiple tasks to a single device. It is recommended to model this as one composite task instead, for clarity and to circumvent potential concurrency issues.';
  }
  function ProtocolFactoryServiceRequest$Companion$serializer$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.d1r(p0);
    };
    l.callableName = 'serializer';
    return l;
  }
  function Companion_4() {
  }
  protoOf(Companion_4).m16 = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolFactoryServiceRequest.CreateCustomProtocol', this, 5);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('ownerId', false);
    tmp0_serialDesc.nt('name', false);
    tmp0_serialDesc.nt('customProtocol', false);
    tmp0_serialDesc.nt('description', false);
    this.u26_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).pi = function () {
    return this.u26_1;
  };
  protoOf($serializer_2).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_2).ri = function (decoder) {
    var tmp0_desc = this.u26_1;
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
      tmp7_local3 = tmp9_input.hm(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.lm(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
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
            tmp7_local3 = tmp9_input.hm(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.lm(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yl(tmp0_desc);
    return CreateCustomProtocol_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_2).v26 = function (encoder, value) {
    var tmp0_desc = this.u26_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.ownerId);
    tmp1_output.nn(tmp0_desc, 2, value.name);
    tmp1_output.nn(tmp0_desc, 3, value.customProtocol);
    tmp1_output.rn(tmp0_desc, 4, StringSerializer_getInstance(), value.description);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_2).qi = function (encoder, value) {
    return this.v26(encoder, value instanceof CreateCustomProtocol ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_5() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function CreateCustomProtocol_init_$Init$(seen1, apiVersion, ownerId, name, customProtocol, description, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_5().u26_1);
    }
    ProtocolFactoryServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.ownerId = ownerId;
    $this.name = name;
    $this.customProtocol = customProtocol;
    $this.description = description;
    return $this;
  }
  function CreateCustomProtocol_init_$Create$(seen1, apiVersion, ownerId, name, customProtocol, description, serializationConstructorMarker) {
    return CreateCustomProtocol_init_$Init$(seen1, apiVersion, ownerId, name, customProtocol, description, serializationConstructorMarker, objectCreate(protoOf(CreateCustomProtocol)));
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.t26_1.r2();
  }
  function ProtocolFactoryServiceRequest$Companion$_anonymous__my7w03() {
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
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.protocols.infrastructure.ProtocolFactoryServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Serializer() {
    Serializer_instance = this;
    var tmp = this;
    tmp.x26_1 = ignoreTypeParameters(ProtocolFactoryServiceRequest$Companion$serializer$ref(Companion_getInstance_7()));
  }
  protoOf(Serializer).pi = function () {
    return this.x26_1.pi();
  };
  protoOf(Serializer).ri = function (decoder) {
    return this.x26_1.ri(decoder);
  };
  protoOf(Serializer).y26 = function (encoder, value) {
    this.x26_1.qi(encoder, value);
  };
  protoOf(Serializer).qi = function (encoder, value) {
    return this.y26(encoder, value instanceof ProtocolFactoryServiceRequest ? value : THROW_CCE());
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
  protoOf(CreateCustomProtocol).q24 = function () {
    return this.ownerId;
  };
  protoOf(CreateCustomProtocol).ra = function () {
    return this.name;
  };
  protoOf(CreateCustomProtocol).z26 = function () {
    return this.customProtocol;
  };
  protoOf(CreateCustomProtocol).o1u = function () {
    return this.description;
  };
  protoOf(CreateCustomProtocol).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyProtocolSnapshot), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(CreateCustomProtocol).od = function () {
    return this.ownerId;
  };
  protoOf(CreateCustomProtocol).pd = function () {
    return this.name;
  };
  protoOf(CreateCustomProtocol).r1g = function () {
    return this.customProtocol;
  };
  protoOf(CreateCustomProtocol).q1h = function () {
    return this.description;
  };
  protoOf(CreateCustomProtocol).a27 = function (ownerId, name, customProtocol, description) {
    return new CreateCustomProtocol(ownerId, name, customProtocol, description);
  };
  protoOf(CreateCustomProtocol).copy = function (ownerId, name, customProtocol, description, $super) {
    ownerId = ownerId === VOID ? this.ownerId : ownerId;
    name = name === VOID ? this.name : name;
    customProtocol = customProtocol === VOID ? this.customProtocol : customProtocol;
    description = description === VOID ? this.description : description;
    return this.a27(ownerId, name, customProtocol, description);
  };
  protoOf(CreateCustomProtocol).toString = function () {
    return 'CreateCustomProtocol(ownerId=' + this.ownerId + ', name=' + this.name + ', customProtocol=' + this.customProtocol + ', description=' + this.description + ')';
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
    var tmp0_other_with_cast = other instanceof CreateCustomProtocol ? other : THROW_CCE();
    if (!this.ownerId.equals(tmp0_other_with_cast.ownerId))
      return false;
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    if (!(this.customProtocol === tmp0_other_with_cast.customProtocol))
      return false;
    if (!(this.description == tmp0_other_with_cast.description))
      return false;
    return true;
  };
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.t26_1 = lazy(tmp_0, ProtocolFactoryServiceRequest$Companion$_anonymous__my7w03);
  }
  protoOf(Companion_5).d1r = function (typeSerial0) {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_5).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function ProtocolFactoryServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.b27_1 = apiVersion;
    return $this;
  }
  function ProtocolFactoryServiceRequest() {
    Companion_getInstance_7();
    ApplicationServiceRequest.call(this);
    this.b27_1 = Companion_getInstance_1().p22_1;
  }
  protoOf(ProtocolFactoryServiceRequest).o22 = function () {
    return this.b27_1;
  };
  function ProtocolServiceRequest$Companion$serializer$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.d1r(p0);
    };
    l.callableName = 'serializer';
    return l;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).m16 = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.Add', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('protocol', false);
    tmp0_serialDesc.nt('versionTag', true);
    this.d27_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).pi = function () {
    return this.d27_1;
  };
  protoOf($serializer_3).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), $serializer_getInstance_4(), StringSerializer_getInstance()];
  };
  protoOf($serializer_3).ri = function (decoder) {
    var tmp0_desc = this.d27_1;
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
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, $serializer_getInstance_4(), tmp5_local1);
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
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, $serializer_getInstance_4(), tmp5_local1);
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
    return Add_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_3).e27 = function (encoder, value) {
    var tmp0_desc = this.d27_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, $serializer_getInstance_4(), value.protocol);
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.versionTag === 'Initial')) {
      tmp1_output.nn(tmp0_desc, 2, value.versionTag);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_3).qi = function (encoder, value) {
    return this.e27(encoder, value instanceof Add ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_6() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function Add_init_$Init$(seen1, apiVersion, protocol, versionTag, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_6().d27_1);
    }
    ProtocolServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.protocol = protocol;
    if (0 === (seen1 & 4))
      $this.versionTag = 'Initial';
    else
      $this.versionTag = versionTag;
    return $this;
  }
  function Add_init_$Create$(seen1, apiVersion, protocol, versionTag, serializationConstructorMarker) {
    return Add_init_$Init$(seen1, apiVersion, protocol, versionTag, serializationConstructorMarker, objectCreate(protoOf(Add)));
  }
  function Companion_7() {
  }
  protoOf(Companion_7).m16 = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.AddVersion', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('protocol', false);
    tmp0_serialDesc.nt('versionTag', true);
    this.g27_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).pi = function () {
    return this.g27_1;
  };
  protoOf($serializer_4).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), $serializer_getInstance_4(), StringSerializer_getInstance()];
  };
  protoOf($serializer_4).ri = function (decoder) {
    var tmp0_desc = this.g27_1;
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
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, $serializer_getInstance_4(), tmp5_local1);
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
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, $serializer_getInstance_4(), tmp5_local1);
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
    return AddVersion_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_4).h27 = function (encoder, value) {
    var tmp0_desc = this.g27_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, $serializer_getInstance_4(), value.protocol);
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.versionTag === System_instance.q13().toString())) {
      tmp1_output.nn(tmp0_desc, 2, value.versionTag);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_4).qi = function (encoder, value) {
    return this.h27(encoder, value instanceof AddVersion ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_7() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function AddVersion_init_$Init$(seen1, apiVersion, protocol, versionTag, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_7().g27_1);
    }
    ProtocolServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.protocol = protocol;
    if (0 === (seen1 & 4))
      $this.versionTag = System_instance.q13().toString();
    else
      $this.versionTag = versionTag;
    return $this;
  }
  function AddVersion_init_$Create$(seen1, apiVersion, protocol, versionTag, serializationConstructorMarker) {
    return AddVersion_init_$Init$(seen1, apiVersion, protocol, versionTag, serializationConstructorMarker, objectCreate(protoOf(AddVersion)));
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j27_1 = [null, null, null, new LinkedHashSetSerializer($serializer_getInstance_1())];
  }
  protoOf(Companion_8).m16 = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.UpdateParticipantDataConfiguration', this, 4);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('protocolId', false);
    tmp0_serialDesc.nt('versionTag', false);
    tmp0_serialDesc.nt('expectedParticipantData', false);
    this.k27_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).pi = function () {
    return this.k27_1;
  };
  protoOf($serializer_5).cu = function () {
    var tmp0_cached = Companion_getInstance_10().j27_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[3]];
  };
  protoOf($serializer_5).ri = function (decoder) {
    var tmp0_desc = this.k27_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_10().j27_1;
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
    return UpdateParticipantDataConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_5).l27 = function (encoder, value) {
    var tmp0_desc = this.k27_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().j27_1;
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.protocolId);
    tmp1_output.nn(tmp0_desc, 2, value.versionTag);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.expectedParticipantData);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_5).qi = function (encoder, value) {
    return this.l27(encoder, value instanceof UpdateParticipantDataConfiguration ? value : THROW_CCE());
  };
  var $serializer_instance_5;
  function $serializer_getInstance_8() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function UpdateParticipantDataConfiguration_init_$Init$(seen1, apiVersion, protocolId, versionTag, expectedParticipantData, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_8().k27_1);
    }
    ProtocolServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.protocolId = protocolId;
    $this.versionTag = versionTag;
    $this.expectedParticipantData = expectedParticipantData;
    return $this;
  }
  function UpdateParticipantDataConfiguration_init_$Create$(seen1, apiVersion, protocolId, versionTag, expectedParticipantData, serializationConstructorMarker) {
    return UpdateParticipantDataConfiguration_init_$Init$(seen1, apiVersion, protocolId, versionTag, expectedParticipantData, serializationConstructorMarker, objectCreate(protoOf(UpdateParticipantDataConfiguration)));
  }
  function Companion_9() {
  }
  protoOf(Companion_9).m16 = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    return Companion_instance_10;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.GetBy', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('protocolId', false);
    tmp0_serialDesc.nt('versionTag', true);
    this.n27_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).pi = function () {
    return this.n27_1;
  };
  protoOf($serializer_6).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_6).ri = function (decoder) {
    var tmp0_desc = this.n27_1;
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
      tmp6_local2 = tmp7_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
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
            tmp6_local2 = tmp7_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return GetBy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).o27 = function (encoder, value) {
    var tmp0_desc = this.n27_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.protocolId);
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.versionTag == null)) {
      tmp1_output.rn(tmp0_desc, 2, StringSerializer_getInstance(), value.versionTag);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_6).qi = function (encoder, value) {
    return this.o27(encoder, value instanceof GetBy ? value : THROW_CCE());
  };
  var $serializer_instance_6;
  function $serializer_getInstance_9() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function GetBy_init_$Init$(seen1, apiVersion, protocolId, versionTag, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_9().n27_1);
    }
    ProtocolServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.protocolId = protocolId;
    if (0 === (seen1 & 4))
      $this.versionTag = null;
    else
      $this.versionTag = versionTag;
    return $this;
  }
  function GetBy_init_$Create$(seen1, apiVersion, protocolId, versionTag, serializationConstructorMarker) {
    return GetBy_init_$Init$(seen1, apiVersion, protocolId, versionTag, serializationConstructorMarker, objectCreate(protoOf(GetBy)));
  }
  function Companion_10() {
  }
  protoOf(Companion_10).m16 = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    return Companion_instance_11;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.GetAllForOwner', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('ownerId', false);
    this.q27_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).pi = function () {
    return this.q27_1;
  };
  protoOf($serializer_7).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_7).ri = function (decoder) {
    var tmp0_desc = this.q27_1;
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
    return GetAllForOwner_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_7).r27 = function (encoder, value) {
    var tmp0_desc = this.q27_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.ownerId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_7).qi = function (encoder, value) {
    return this.r27(encoder, value instanceof GetAllForOwner ? value : THROW_CCE());
  };
  var $serializer_instance_7;
  function $serializer_getInstance_10() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function GetAllForOwner_init_$Init$(seen1, apiVersion, ownerId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_10().q27_1);
    }
    ProtocolServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.ownerId = ownerId;
    return $this;
  }
  function GetAllForOwner_init_$Create$(seen1, apiVersion, ownerId, serializationConstructorMarker) {
    return GetAllForOwner_init_$Init$(seen1, apiVersion, ownerId, serializationConstructorMarker, objectCreate(protoOf(GetAllForOwner)));
  }
  function Companion_11() {
  }
  protoOf(Companion_11).m16 = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.GetVersionHistoryFor', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('protocolId', false);
    this.t27_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).pi = function () {
    return this.t27_1;
  };
  protoOf($serializer_8).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  protoOf($serializer_8).ri = function (decoder) {
    var tmp0_desc = this.t27_1;
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
    return GetVersionHistoryFor_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_8).u27 = function (encoder, value) {
    var tmp0_desc = this.t27_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.protocolId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_8).qi = function (encoder, value) {
    return this.u27(encoder, value instanceof GetVersionHistoryFor ? value : THROW_CCE());
  };
  var $serializer_instance_8;
  function $serializer_getInstance_11() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function GetVersionHistoryFor_init_$Init$(seen1, apiVersion, protocolId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_11().t27_1);
    }
    ProtocolServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.protocolId = protocolId;
    return $this;
  }
  function GetVersionHistoryFor_init_$Create$(seen1, apiVersion, protocolId, serializationConstructorMarker) {
    return GetVersionHistoryFor_init_$Init$(seen1, apiVersion, protocolId, serializationConstructorMarker, objectCreate(protoOf(GetVersionHistoryFor)));
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.c27_1.r2();
  }
  function ProtocolServiceRequest$Companion$_anonymous__cea8fx() {
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
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Serializer_0() {
    Serializer_instance_0 = this;
    var tmp = this;
    tmp.w27_1 = ignoreTypeParameters(ProtocolServiceRequest$Companion$serializer$ref(Companion_getInstance_14()));
  }
  protoOf(Serializer_0).pi = function () {
    return this.w27_1.pi();
  };
  protoOf(Serializer_0).ri = function (decoder) {
    return this.w27_1.ri(decoder);
  };
  protoOf(Serializer_0).x27 = function (encoder, value) {
    this.w27_1.qi(encoder, value);
  };
  protoOf(Serializer_0).qi = function (encoder, value) {
    return this.x27(encoder, value instanceof ProtocolServiceRequest ? value : THROW_CCE());
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
  protoOf(Add).y27 = function () {
    return this.protocol;
  };
  protoOf(Add).z27 = function () {
    return this.versionTag;
  };
  protoOf(Add).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Unit), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(Add).od = function () {
    return this.protocol;
  };
  protoOf(Add).pd = function () {
    return this.versionTag;
  };
  protoOf(Add).a28 = function (protocol, versionTag) {
    return new Add(protocol, versionTag);
  };
  protoOf(Add).copy = function (protocol, versionTag, $super) {
    protocol = protocol === VOID ? this.protocol : protocol;
    versionTag = versionTag === VOID ? this.versionTag : versionTag;
    return this.a28(protocol, versionTag);
  };
  protoOf(Add).toString = function () {
    return 'Add(protocol=' + this.protocol + ', versionTag=' + this.versionTag + ')';
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
    var tmp0_other_with_cast = other instanceof Add ? other : THROW_CCE();
    if (!this.protocol.equals(tmp0_other_with_cast.protocol))
      return false;
    if (!(this.versionTag === tmp0_other_with_cast.versionTag))
      return false;
    return true;
  };
  function AddVersion(protocol, versionTag) {
    versionTag = versionTag === VOID ? System_instance.q13().toString() : versionTag;
    ProtocolServiceRequest.call(this);
    this.protocol = protocol;
    this.versionTag = versionTag;
  }
  protoOf(AddVersion).y27 = function () {
    return this.protocol;
  };
  protoOf(AddVersion).z27 = function () {
    return this.versionTag;
  };
  protoOf(AddVersion).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Unit), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(AddVersion).od = function () {
    return this.protocol;
  };
  protoOf(AddVersion).pd = function () {
    return this.versionTag;
  };
  protoOf(AddVersion).a28 = function (protocol, versionTag) {
    return new AddVersion(protocol, versionTag);
  };
  protoOf(AddVersion).copy = function (protocol, versionTag, $super) {
    protocol = protocol === VOID ? this.protocol : protocol;
    versionTag = versionTag === VOID ? this.versionTag : versionTag;
    return this.a28(protocol, versionTag);
  };
  protoOf(AddVersion).toString = function () {
    return 'AddVersion(protocol=' + this.protocol + ', versionTag=' + this.versionTag + ')';
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
    var tmp0_other_with_cast = other instanceof AddVersion ? other : THROW_CCE();
    if (!this.protocol.equals(tmp0_other_with_cast.protocol))
      return false;
    if (!(this.versionTag === tmp0_other_with_cast.versionTag))
      return false;
    return true;
  };
  function UpdateParticipantDataConfiguration(protocolId, versionTag, expectedParticipantData) {
    Companion_getInstance_10();
    ProtocolServiceRequest.call(this);
    this.protocolId = protocolId;
    this.versionTag = versionTag;
    this.expectedParticipantData = expectedParticipantData;
  }
  protoOf(UpdateParticipantDataConfiguration).c28 = function () {
    return this.protocolId;
  };
  protoOf(UpdateParticipantDataConfiguration).z27 = function () {
    return this.versionTag;
  };
  protoOf(UpdateParticipantDataConfiguration).k24 = function () {
    return this.expectedParticipantData;
  };
  protoOf(UpdateParticipantDataConfiguration).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyProtocolSnapshot), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(UpdateParticipantDataConfiguration).od = function () {
    return this.protocolId;
  };
  protoOf(UpdateParticipantDataConfiguration).pd = function () {
    return this.versionTag;
  };
  protoOf(UpdateParticipantDataConfiguration).r1g = function () {
    return this.expectedParticipantData;
  };
  protoOf(UpdateParticipantDataConfiguration).d28 = function (protocolId, versionTag, expectedParticipantData) {
    return new UpdateParticipantDataConfiguration(protocolId, versionTag, expectedParticipantData);
  };
  protoOf(UpdateParticipantDataConfiguration).copy = function (protocolId, versionTag, expectedParticipantData, $super) {
    protocolId = protocolId === VOID ? this.protocolId : protocolId;
    versionTag = versionTag === VOID ? this.versionTag : versionTag;
    expectedParticipantData = expectedParticipantData === VOID ? this.expectedParticipantData : expectedParticipantData;
    return this.d28(protocolId, versionTag, expectedParticipantData);
  };
  protoOf(UpdateParticipantDataConfiguration).toString = function () {
    return 'UpdateParticipantDataConfiguration(protocolId=' + this.protocolId + ', versionTag=' + this.versionTag + ', expectedParticipantData=' + this.expectedParticipantData + ')';
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
    var tmp0_other_with_cast = other instanceof UpdateParticipantDataConfiguration ? other : THROW_CCE();
    if (!this.protocolId.equals(tmp0_other_with_cast.protocolId))
      return false;
    if (!(this.versionTag === tmp0_other_with_cast.versionTag))
      return false;
    if (!equals(this.expectedParticipantData, tmp0_other_with_cast.expectedParticipantData))
      return false;
    return true;
  };
  function GetBy(protocolId, versionTag) {
    versionTag = versionTag === VOID ? null : versionTag;
    ProtocolServiceRequest.call(this);
    this.protocolId = protocolId;
    this.versionTag = versionTag;
  }
  protoOf(GetBy).c28 = function () {
    return this.protocolId;
  };
  protoOf(GetBy).z27 = function () {
    return this.versionTag;
  };
  protoOf(GetBy).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(StudyProtocolSnapshot), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetBy).od = function () {
    return this.protocolId;
  };
  protoOf(GetBy).pd = function () {
    return this.versionTag;
  };
  protoOf(GetBy).e28 = function (protocolId, versionTag) {
    return new GetBy(protocolId, versionTag);
  };
  protoOf(GetBy).copy = function (protocolId, versionTag, $super) {
    protocolId = protocolId === VOID ? this.protocolId : protocolId;
    versionTag = versionTag === VOID ? this.versionTag : versionTag;
    return this.e28(protocolId, versionTag);
  };
  protoOf(GetBy).toString = function () {
    return 'GetBy(protocolId=' + this.protocolId + ', versionTag=' + this.versionTag + ')';
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
    var tmp0_other_with_cast = other instanceof GetBy ? other : THROW_CCE();
    if (!this.protocolId.equals(tmp0_other_with_cast.protocolId))
      return false;
    if (!(this.versionTag == tmp0_other_with_cast.versionTag))
      return false;
    return true;
  };
  function GetAllForOwner(ownerId) {
    ProtocolServiceRequest.call(this);
    this.ownerId = ownerId;
  }
  protoOf(GetAllForOwner).q24 = function () {
    return this.ownerId;
  };
  protoOf(GetAllForOwner).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(StudyProtocolSnapshot), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetAllForOwner).od = function () {
    return this.ownerId;
  };
  protoOf(GetAllForOwner).f28 = function (ownerId) {
    return new GetAllForOwner(ownerId);
  };
  protoOf(GetAllForOwner).copy = function (ownerId, $super) {
    ownerId = ownerId === VOID ? this.ownerId : ownerId;
    return this.f28(ownerId);
  };
  protoOf(GetAllForOwner).toString = function () {
    return 'GetAllForOwner(ownerId=' + this.ownerId + ')';
  };
  protoOf(GetAllForOwner).hashCode = function () {
    return this.ownerId.hashCode();
  };
  protoOf(GetAllForOwner).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetAllForOwner))
      return false;
    var tmp0_other_with_cast = other instanceof GetAllForOwner ? other : THROW_CCE();
    if (!this.ownerId.equals(tmp0_other_with_cast.ownerId))
      return false;
    return true;
  };
  function GetVersionHistoryFor(protocolId) {
    ProtocolServiceRequest.call(this);
    this.protocolId = protocolId;
  }
  protoOf(GetVersionHistoryFor).c28 = function () {
    return this.protocolId;
  };
  protoOf(GetVersionHistoryFor).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ProtocolVersion), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetVersionHistoryFor).od = function () {
    return this.protocolId;
  };
  protoOf(GetVersionHistoryFor).f28 = function (protocolId) {
    return new GetVersionHistoryFor(protocolId);
  };
  protoOf(GetVersionHistoryFor).copy = function (protocolId, $super) {
    protocolId = protocolId === VOID ? this.protocolId : protocolId;
    return this.f28(protocolId);
  };
  protoOf(GetVersionHistoryFor).toString = function () {
    return 'GetVersionHistoryFor(protocolId=' + this.protocolId + ')';
  };
  protoOf(GetVersionHistoryFor).hashCode = function () {
    return this.protocolId.hashCode();
  };
  protoOf(GetVersionHistoryFor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetVersionHistoryFor))
      return false;
    var tmp0_other_with_cast = other instanceof GetVersionHistoryFor ? other : THROW_CCE();
    if (!this.protocolId.equals(tmp0_other_with_cast.protocolId))
      return false;
    return true;
  };
  function Companion_12() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.c27_1 = lazy(tmp_0, ProtocolServiceRequest$Companion$_anonymous__cea8fx);
  }
  protoOf(Companion_12).d1r = function (typeSerial0) {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_12).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function ProtocolServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.b28_1 = apiVersion;
    return $this;
  }
  function ProtocolServiceRequest() {
    Companion_getInstance_14();
    ApplicationServiceRequest.call(this);
    this.b28_1 = Companion_getInstance_2().q22_1;
  }
  protoOf(ProtocolServiceRequest).o22 = function () {
    return this.b28_1;
  };
  //region block: post-declaration
  protoOf($serializer).du = typeParametersSerializers;
  protoOf($serializer_0).du = typeParametersSerializers;
  protoOf($serializer_1).du = typeParametersSerializers;
  defineProp(protoOf(StudyProtocolSnapshot), 'id', function () {
    return this.z1y();
  });
  defineProp(protoOf(StudyProtocolSnapshot), 'createdOn', function () {
    return this.a1z();
  });
  defineProp(protoOf(StudyProtocolSnapshot), 'version', function () {
    return this.b1z();
  });
  protoOf(StudyProtocolComposition).y22 = getConnectedDevices$default;
  protoOf(EmptyProtocolDeviceConfiguration).y22 = getConnectedDevices$default;
  protoOf(EmptyProtocolParticipantConfiguration).a26 = isValidAssignment;
  protoOf($serializer_2).du = typeParametersSerializers;
  protoOf($serializer_3).du = typeParametersSerializers;
  protoOf($serializer_4).du = typeParametersSerializers;
  protoOf($serializer_5).du = typeParametersSerializers;
  protoOf($serializer_6).du = typeParametersSerializers;
  protoOf($serializer_7).du = typeParametersSerializers;
  protoOf($serializer_8).du = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Factory_instance = new Factory();
  Companion_instance_5 = new Companion_4();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_10 = new Companion_9();
  Companion_instance_11 = new Companion_10();
  Companion_instance_12 = new Companion_11();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$protocols = $dk$cachet$carp.protocols || ($dk$cachet$carp.protocols = {});
    var $dk$cachet$carp$protocols$application = $dk$cachet$carp$protocols.application || ($dk$cachet$carp$protocols.application = {});
    $dk$cachet$carp$protocols$application.ProtocolVersion = ProtocolVersion;
    defineProp($dk$cachet$carp$protocols$application.ProtocolVersion, 'Companion', Companion_getInstance_3);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$protocols = $dk$cachet$carp.protocols || ($dk$cachet$carp.protocols = {});
    var $dk$cachet$carp$protocols$application = $dk$cachet$carp$protocols.application || ($dk$cachet$carp$protocols.application = {});
    $dk$cachet$carp$protocols$application.StudyProtocolSnapshot = StudyProtocolSnapshot;
    $dk$cachet$carp$protocols$application.StudyProtocolSnapshot.DeviceConnection = DeviceConnection;
    defineProp($dk$cachet$carp$protocols$application.StudyProtocolSnapshot.DeviceConnection, 'Companion', Companion_getInstance_4);
    defineProp($dk$cachet$carp$protocols$application.StudyProtocolSnapshot, 'Companion', Companion_getInstance_5);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$protocols = $dk$cachet$carp.protocols || ($dk$cachet$carp.protocols = {});
    var $dk$cachet$carp$protocols$infrastructure = $dk$cachet$carp$protocols.infrastructure || ($dk$cachet$carp$protocols.infrastructure = {});
    $dk$cachet$carp$protocols$infrastructure.ProtocolFactoryServiceRequest = ProtocolFactoryServiceRequest;
    defineProp($dk$cachet$carp$protocols$infrastructure.ProtocolFactoryServiceRequest, 'Serializer', Serializer_getInstance);
    $dk$cachet$carp$protocols$infrastructure.ProtocolFactoryServiceRequest.CreateCustomProtocol = CreateCustomProtocol;
    defineProp($dk$cachet$carp$protocols$infrastructure.ProtocolFactoryServiceRequest.CreateCustomProtocol, 'Companion', Companion_getInstance_6);
    defineProp($dk$cachet$carp$protocols$infrastructure.ProtocolFactoryServiceRequest, 'Companion', Companion_getInstance_7);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$protocols = $dk$cachet$carp.protocols || ($dk$cachet$carp.protocols = {});
    var $dk$cachet$carp$protocols$infrastructure = $dk$cachet$carp$protocols.infrastructure || ($dk$cachet$carp$protocols.infrastructure = {});
    $dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest = ProtocolServiceRequest;
    defineProp($dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest, 'Serializer', Serializer_getInstance_0);
    $dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest.Add = Add;
    defineProp($dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest.Add, 'Companion', Companion_getInstance_8);
    $dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest.AddVersion = AddVersion;
    defineProp($dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest.AddVersion, 'Companion', Companion_getInstance_9);
    $dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest.UpdateParticipantDataConfiguration = UpdateParticipantDataConfiguration;
    defineProp($dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest.UpdateParticipantDataConfiguration, 'Companion', Companion_getInstance_10);
    $dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest.GetBy = GetBy;
    defineProp($dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest.GetBy, 'Companion', Companion_getInstance_11);
    $dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest.GetAllForOwner = GetAllForOwner;
    defineProp($dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest.GetAllForOwner, 'Companion', Companion_getInstance_12);
    $dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest.GetVersionHistoryFor = GetVersionHistoryFor;
    defineProp($dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest.GetVersionHistoryFor, 'Companion', Companion_getInstance_13);
    defineProp($dk$cachet$carp$protocols$infrastructure.ProtocolServiceRequest, 'Companion', Companion_getInstance_14);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = $serializer_getInstance_4;
  //endregion
  return _;
}));

//# sourceMappingURL=carp-protocols-core-generated.js.map
