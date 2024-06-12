(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@cachet/kotlin-kotlin-stdlib', '@cachet/kotlinx-serialization-kotlinx-serialization-core', '@cachet/Kotlin-DateTime-library-kotlinx-datetime', '@cachet/kotlinx-serialization-kotlinx-serialization-json'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@cachet/kotlin-kotlin-stdlib'), require('@cachet/kotlinx-serialization-kotlinx-serialization-core'), require('@cachet/Kotlin-DateTime-library-kotlinx-datetime'), require('@cachet/kotlinx-serialization-kotlinx-serialization-json'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'carp-common-generated'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'carp-common-generated'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'carp-common-generated'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'carp-common-generated'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'carp-common-generated'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'carp-common-generated'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'carp-common-generated'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'carp-common-generated'.");
    }
    root['carp-common-generated'] = factory(typeof this['carp-common-generated'] === 'undefined' ? {} : this['carp-common-generated'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['Kotlin-DateTime-library-kotlinx-datetime'], this['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.m8;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var VOID = kotlin_kotlin.$_$.f;
  var getStringHashCode = kotlin_kotlin.$_$.q7;
  var THROW_CCE = kotlin_kotlin.$_$.bb;
  var classMeta = kotlin_kotlin.$_$.i7;
  var getKClass = kotlin_kotlin.$_$.e;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var defineProp = kotlin_kotlin.$_$.k7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var Map = kotlin_kotlin.$_$.n4;
  var isInterface = kotlin_kotlin.$_$.b8;
  var toString = kotlin_kotlin.$_$.r8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var toLong = kotlin_kotlin.$_$.p8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v1;
  var charArrayOf = kotlin_kotlin.$_$.d7;
  var split = kotlin_kotlin.$_$.u9;
  var replace = kotlin_kotlin.$_$.s9;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.x;
  var isCharSequence = kotlin_kotlin.$_$.x7;
  var trim = kotlin_kotlin.$_$.ma;
  var joinToString = kotlin_kotlin.$_$.x5;
  var last = kotlin_kotlin.$_$.b6;
  var THROW_IAE = kotlin_kotlin.$_$.cb;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var Duration = kotlin_kotlin.$_$.na;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var objectCreate = kotlin_kotlin.$_$.k8;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var ObjectSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var _Duration___get_inWholeMicroseconds__impl__8oe8vv = kotlin_kotlin.$_$.r1;
  var Duration__hashCode_impl_u4exz6 = kotlin_kotlin.$_$.q1;
  var equals = kotlin_kotlin.$_$.l7;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.ub;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x4;
  var mapCapacity = kotlin_kotlin.$_$.d6;
  var coerceAtLeast = kotlin_kotlin.$_$.t8;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var to = kotlin_kotlin.$_$.zb;
  var listOf = kotlin_kotlin.$_$.c6;
  var Collection = kotlin_kotlin.$_$.g4;
  var distinct = kotlin_kotlin.$_$.l5;
  var toInt = kotlin_kotlin.$_$.da;
  var Companion_getInstance = kotlin_kotlin.$_$.v3;
  var toLong_0 = kotlin_kotlin.$_$.fa;
  var DurationUnit_MICROSECONDS_getInstance = kotlin_kotlin.$_$.g;
  var toDuration = kotlin_kotlin.$_$.oa;
  var Enum = kotlin_kotlin.$_$.va;
  var hashCode = kotlin_kotlin.$_$.r7;
  var padStart = kotlin_kotlin.$_$.p9;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var getNumberHashCode = kotlin_kotlin.$_$.o7;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var interfaceMeta = kotlin_kotlin.$_$.s7;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var getBooleanHashCode = kotlin_kotlin.$_$.n7;
  var ShortSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var toSet = kotlin_kotlin.$_$.u6;
  var emptyList = kotlin_kotlin.$_$.m5;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u3;
  var arrayOf = kotlin_kotlin.$_$.nb;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var List = kotlin_kotlin.$_$.l4;
  var createAnnotatedEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var emptyMap = kotlin_kotlin.$_$.n5;
  var numberRangeToNumber = kotlin_kotlin.$_$.g8;
  var InstantIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var ClosedRange = kotlin_kotlin.$_$.s8;
  var contains = kotlin_kotlin.$_$.w8;
  var isBlank = kotlin_kotlin.$_$.m9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.h;
  var toDuration_0 = kotlin_kotlin.$_$.pa;
  var Duration__minus_impl_q5cfm7 = kotlin_kotlin.$_$.t1;
  var _Duration___get_absoluteValue__impl__vr7i6w = kotlin_kotlin.$_$.p1;
  var compareTo = kotlin_kotlin.$_$.j7;
  var toMap = kotlin_kotlin.$_$.s6;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wb;
  var plus = kotlin_kotlin.$_$.j6;
  var replace_0 = kotlin_kotlin.$_$.r9;
  var firstOrNull = kotlin_kotlin.$_$.p5;
  var addAll = kotlin_kotlin.$_$.s4;
  var toList = kotlin_kotlin.$_$.q6;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.s3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var JsonDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var JsonEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var startsWith = kotlin_kotlin.$_$.v9;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toString_0 = kotlin_kotlin.$_$.yb;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.u1;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var plus_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var PolymorphicModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var PolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var emptySet = kotlin_kotlin.$_$.o5;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var charSequenceLength = kotlin_kotlin.$_$.g7;
  var charSequenceGet = kotlin_kotlin.$_$.f7;
  var toString_1 = kotlin_kotlin.$_$.y1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(EmailAddress, 'EmailAddress', classMeta, VOID, VOID, VOID, VOID, {0: EmailAddressSerializer_getInstance});
  setMetadataFor(StringConversionSerializer, 'StringConversionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, StringConversionSerializer);
  setMetadataFor(EmailAddressSerializer, 'EmailAddressSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(EnumObjectMap, 'EnumObjectMap', classMeta, VOID, [Map]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(MACAddress, 'MACAddress', classMeta, VOID, VOID, VOID, VOID, {0: MACAddressSerializer_getInstance});
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, StringConversionSerializer);
  setMetadataFor(MACAddressSerializer, 'MACAddressSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(NamespacedId, 'NamespacedId', classMeta, VOID, VOID, VOID, VOID, {0: NamespacedIdSerializer_getInstance});
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, StringConversionSerializer);
  setMetadataFor(NamespacedIdSerializer, 'NamespacedIdSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(End, 'End', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_5});
  setMetadataFor(Until, 'Until', classMeta, End, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(Count, 'Count', classMeta, End, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Never, 'Never', objectMeta, End, [End, SerializerFactory], VOID, VOID, {0: Never_getInstance});
  setMetadataFor(Companion_4, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Frequency, 'Frequency', classMeta, Enum);
  setMetadataFor(RecurrenceRule, 'RecurrenceRule', classMeta, VOID, VOID, VOID, VOID, {0: RecurrenceRuleSerializer_getInstance});
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, StringConversionSerializer);
  setMetadataFor(RecurrenceRuleSerializer, 'RecurrenceRuleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(TimeOfDay, 'TimeOfDay', classMeta, VOID, VOID, VOID, VOID, {0: TimeOfDaySerializer_getInstance});
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, StringConversionSerializer);
  setMetadataFor(TimeOfDaySerializer, 'TimeOfDaySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Trilean, 'Trilean', classMeta, Enum);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(UUID, 'UUID', classMeta, VOID, VOID, VOID, VOID, {0: UUIDSerializer_getInstance});
  setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta, StringConversionSerializer);
  setMetadataFor(UUIDSerializer, 'UUIDSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Data, 'Data', interfaceMeta);
  setMetadataFor(SensorData, 'SensorData', interfaceMeta, VOID, [Data]);
  setMetadataFor(Acceleration, 'Acceleration', classMeta, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(AngularVelocity, 'AngularVelocity', classMeta, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_2});
  setMetadataFor(DataTypeMetaDataMap, 'DataTypeMetaDataMap', classMeta, EnumObjectMap, VOID, DataTypeMetaDataMap);
  setMetadataFor(CarpDataTypes, 'CarpDataTypes', objectMeta, DataTypeMetaDataMap);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor($serializer_3, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(CompletedTask, 'CompletedTask', classMeta, VOID, [Data], VOID, VOID, {0: $serializer_getInstance_3});
  setMetadataFor(NoData, 'NoData', objectMeta, VOID, [Data, SerializerFactory], VOID, VOID, {0: NoData_getInstance});
  setMetadataFor(DataTypeMetaData, 'DataTypeMetaData', classMeta);
  setMetadataFor(DataTimeType, 'DataTimeType', classMeta, Enum);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor($serializer_4, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ECG, 'ECG', classMeta, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_4});
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor($serializer_5, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(EDA, 'EDA', classMeta, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_5});
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor($serializer_6, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Geolocation, 'Geolocation', classMeta, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_6});
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor($serializer_7, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(HeartRate, 'HeartRate', classMeta, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_7});
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor($serializer_8, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(InterbeatInterval, 'InterbeatInterval', classMeta, VOID, [SensorData], InterbeatInterval, VOID, {0: $serializer_getInstance_8});
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor($serializer_9, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NonGravitationalAcceleration, 'NonGravitationalAcceleration', classMeta, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_9});
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor($serializer_10, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(PPG, 'PPG', classMeta, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_10});
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor($serializer_11, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(SensorSkinContact, 'SensorSkinContact', classMeta, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_11});
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor($serializer_12, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(SignalStrength, 'SignalStrength', classMeta, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_12});
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor($serializer_13, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(StepCount, 'StepCount', classMeta, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_13});
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor($serializer_14, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(TriggeredTask, 'TriggeredTask', classMeta, VOID, [Data], VOID, VOID, {0: $serializer_getInstance_14});
  setMetadataFor(InputDataTypeList, 'InputDataTypeList', classMeta, VOID, [List], create);
  setMetadataFor(CarpInputDataTypes, 'CarpInputDataTypes', objectMeta, InputDataTypeList);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(CustomInput, 'CustomInput', classMeta, VOID, [Data]);
  setMetadataFor(CustomInputSerializer, 'CustomInputSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_23, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Sex, 'Sex', classMeta, Enum, [Enum, Data], VOID, VOID, {0: Companion_getInstance_24});
  setMetadataFor(InputElement, 'InputElement', interfaceMeta);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor($serializer_15, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(SelectOne, 'SelectOne', classMeta, VOID, [InputElement], VOID, VOID, {0: $serializer_getInstance_15});
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor($serializer_16, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Text, 'Text', classMeta, VOID, [InputElement], VOID, VOID, {0: $serializer_getInstance_16});
  setMetadataFor(DataTypeSamplingSchemeMap, 'DataTypeSamplingSchemeMap', classMeta, EnumObjectMap, VOID, DataTypeSamplingSchemeMap);
  setMetadataFor(Sensors, 'Sensors', objectMeta, DataTypeSamplingSchemeMap);
  setMetadataFor(TaskConfigurationList, 'TaskConfigurationList', classMeta, VOID, [List], create_0);
  setMetadataFor(Tasks, 'Tasks', objectMeta, TaskConfigurationList);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor($serializer_17, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(DeviceConfiguration, 'DeviceConfiguration', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_36});
  setMetadataFor(AltBeacon, 'AltBeacon', classMeta, DeviceConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_17});
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor($serializer_18, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(DeviceRegistration, 'DeviceRegistration', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_37});
  setMetadataFor(AltBeaconDeviceRegistration, 'AltBeaconDeviceRegistration', classMeta, DeviceRegistration, VOID, VOID, VOID, {0: $serializer_getInstance_18});
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(DeviceRegistrationBuilder, 'DeviceRegistrationBuilder', classMeta, VOID, VOID, VOID, VOID, {0: NotSerializable_getInstance});
  setMetadataFor(AltBeaconDeviceRegistrationBuilder, 'AltBeaconDeviceRegistrationBuilder', classMeta, DeviceRegistrationBuilder, VOID, AltBeaconDeviceRegistrationBuilder, VOID, {0: NotSerializable_getInstance});
  setMetadataFor(Sensors_0, 'Sensors', objectMeta, DataTypeSamplingSchemeMap);
  setMetadataFor(Tasks_0, 'Tasks', objectMeta, TaskConfigurationList);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor($serializer_19, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(BLEHeartRateDevice, 'BLEHeartRateDevice', classMeta, DeviceConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_19});
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor($serializer_20, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(BLESerialNumberDeviceRegistration, 'BLESerialNumberDeviceRegistration', classMeta, DeviceRegistration, VOID, VOID, VOID, {0: $serializer_getInstance_20});
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(BLESerialNumberDeviceRegistrationBuilder, 'BLESerialNumberDeviceRegistrationBuilder', classMeta, DeviceRegistrationBuilder, VOID, BLESerialNumberDeviceRegistrationBuilder, VOID, {0: NotSerializable_getInstance});
  setMetadataFor(Sensors_1, 'Sensors', objectMeta, DataTypeSamplingSchemeMap);
  setMetadataFor(Tasks_1, 'Tasks', objectMeta, TaskConfigurationList);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor($serializer_21, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(PrimaryDeviceConfiguration, 'PrimaryDeviceConfiguration', classMeta, DeviceConfiguration, VOID, VOID, VOID, {0: Companion_getInstance_41});
  setMetadataFor(CustomProtocolDevice, 'CustomProtocolDevice', classMeta, PrimaryDeviceConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_21});
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor($serializer_22, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(DefaultDeviceRegistration, 'DefaultDeviceRegistration', classMeta, DeviceRegistration, VOID, DefaultDeviceRegistration, VOID, {0: $serializer_getInstance_22});
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  setMetadataFor(DefaultDeviceRegistrationBuilder, 'DefaultDeviceRegistrationBuilder', classMeta, DeviceRegistrationBuilder, VOID, DefaultDeviceRegistrationBuilder, VOID, {0: NotSerializable_getInstance});
  setMetadataFor(Companion_35, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(DeviceConfigurationBuilder, 'DeviceConfigurationBuilder', classMeta);
  setMetadataFor(Companion_36, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_37, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_38, 'Companion', objectMeta);
  setMetadataFor($serializer_23, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(MACAddressDeviceRegistration, 'MACAddressDeviceRegistration', classMeta, DeviceRegistration, VOID, VOID, VOID, {0: $serializer_getInstance_23});
  setMetadataFor(Companion_39, 'Companion', objectMeta);
  setMetadataFor(MACAddressDeviceRegistrationBuilder, 'MACAddressDeviceRegistrationBuilder', classMeta, DeviceRegistrationBuilder, VOID, MACAddressDeviceRegistrationBuilder, VOID, {0: NotSerializable_getInstance});
  setMetadataFor(Companion_40, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_41, 'Companion', objectMeta);
  setMetadataFor(Sensors_2, 'Sensors', objectMeta, DataTypeSamplingSchemeMap);
  setMetadataFor(Tasks_2, 'Tasks', objectMeta, TaskConfigurationList);
  setMetadataFor($serializer_24, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Smartphone, 'Smartphone', classMeta, PrimaryDeviceConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_24});
  setMetadataFor(SmartphoneBuilder, 'SmartphoneBuilder', classMeta, DeviceConfigurationBuilder, VOID, SmartphoneBuilder);
  setMetadataFor(SamplingConfigurationMapBuilder, 'SamplingConfigurationMapBuilder', classMeta, VOID, VOID, SamplingConfigurationMapBuilder);
  setMetadataFor(SmartphoneSamplingConfigurationMapBuilder, 'SmartphoneSamplingConfigurationMapBuilder', classMeta, SamplingConfigurationMapBuilder, VOID, SmartphoneSamplingConfigurationMapBuilder);
  setMetadataFor(Sensors_3, 'Sensors', objectMeta, DataTypeSamplingSchemeMap);
  setMetadataFor(Tasks_3, 'Tasks', objectMeta, TaskConfigurationList);
  setMetadataFor(Companion_42, 'Companion', objectMeta);
  setMetadataFor($serializer_25, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Website, 'Website', classMeta, PrimaryDeviceConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_25});
  setMetadataFor(Companion_43, 'Companion', objectMeta);
  setMetadataFor($serializer_26, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(WebsiteDeviceRegistration, 'WebsiteDeviceRegistration', classMeta, DeviceRegistration, VOID, VOID, VOID, {0: $serializer_getInstance_26});
  setMetadataFor(Companion_44, 'Companion', objectMeta);
  setMetadataFor(WebsiteDeviceRegistrationBuilder, 'WebsiteDeviceRegistrationBuilder', classMeta, DeviceRegistrationBuilder, VOID, WebsiteDeviceRegistrationBuilder, VOID, {0: NotSerializable_getInstance});
  setMetadataFor(DataTypeSamplingScheme, 'DataTypeSamplingScheme', classMeta);
  setMetadataFor(BatteryAwareSamplingScheme, 'BatteryAwareSamplingScheme', classMeta, DataTypeSamplingScheme);
  setMetadataFor(AdaptiveGranularitySamplingScheme, 'AdaptiveGranularitySamplingScheme', classMeta, BatteryAwareSamplingScheme);
  setMetadataFor(Companion_45, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor($serializer_27, '$serializer', classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(SamplingConfiguration, 'SamplingConfiguration', interfaceMeta);
  setMetadataFor(BatteryAwareSamplingConfiguration, 'BatteryAwareSamplingConfiguration', classMeta, VOID, [SamplingConfiguration], VOID, VOID, {0: Companion_getInstance_46});
  function build(samplingScheme) {
    var configuration = this.pr();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!samplingScheme.isValid(configuration)) {
      // Inline function 'dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder.build.<anonymous>' call
      var message = 'The configured sampling configuration is invalid for the corresponding sampling scheme.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return configuration;
  }
  setMetadataFor(SamplingConfigurationBuilder, 'SamplingConfigurationBuilder', interfaceMeta);
  setMetadataFor(BatteryAwareSamplingConfigurationBuilder, 'BatteryAwareSamplingConfigurationBuilder', classMeta, VOID, [SamplingConfigurationBuilder]);
  setMetadataFor(GranularitySamplingScheme, 'GranularitySamplingScheme', classMeta, DataTypeSamplingScheme);
  setMetadataFor(Companion_46, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Granularity, 'Granularity', classMeta, Enum, VOID, VOID, VOID, {0: Companion_getInstance_47});
  setMetadataFor(Companion_47, 'Companion', objectMeta);
  setMetadataFor($serializer_28, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(GranularitySamplingConfiguration, 'GranularitySamplingConfiguration', classMeta, VOID, [SamplingConfiguration], VOID, VOID, {0: $serializer_getInstance_27});
  setMetadataFor(GranularitySamplingConfigurationBuilder, 'GranularitySamplingConfigurationBuilder', classMeta, VOID, [SamplingConfigurationBuilder]);
  setMetadataFor(IntervalSamplingScheme, 'IntervalSamplingScheme', classMeta, DataTypeSamplingScheme);
  setMetadataFor(Companion_48, 'Companion', objectMeta);
  setMetadataFor($serializer_29, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(IntervalSamplingConfiguration, 'IntervalSamplingConfiguration', classMeta, VOID, [SamplingConfiguration], VOID, VOID, {0: $serializer_getInstance_28});
  setMetadataFor(IntervalSamplingConfigurationBuilder, 'IntervalSamplingConfigurationBuilder', classMeta, VOID, [SamplingConfigurationBuilder]);
  setMetadataFor(NoOptionsSamplingScheme, 'NoOptionsSamplingScheme', classMeta, DataTypeSamplingScheme);
  setMetadataFor(NoOptionsSamplingConfiguration, 'NoOptionsSamplingConfiguration', objectMeta, VOID, [SamplingConfiguration, SerializerFactory], VOID, VOID, {0: NoOptionsSamplingConfiguration_getInstance});
  setMetadataFor(NoOptionsSamplingConfigurationBuilder, 'NoOptionsSamplingConfigurationBuilder', objectMeta, VOID, [SamplingConfigurationBuilder]);
  setMetadataFor(Companion_49, 'Companion', objectMeta);
  setMetadataFor(ApiVersion, 'ApiVersion', classMeta, VOID, VOID, VOID, VOID, {0: ApiVersionSerializer_getInstance});
  setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta, StringConversionSerializer);
  setMetadataFor(ApiVersionSerializer, 'ApiVersionSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_50, 'Companion', objectMeta);
  setMetadataFor($serializer_30, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(TaskConfiguration, 'TaskConfiguration', interfaceMeta);
  setMetadataFor(BackgroundTask, 'BackgroundTask', classMeta, VOID, [TaskConfiguration], VOID, VOID, {0: $serializer_getInstance_29});
  setMetadataFor(TaskConfigurationBuilder, 'TaskConfigurationBuilder', classMeta);
  setMetadataFor(BackgroundTaskBuilder, 'BackgroundTaskBuilder', classMeta, TaskConfigurationBuilder, VOID, BackgroundTaskBuilder);
  setMetadataFor(Companion_51, 'Companion', objectMeta);
  setMetadataFor($serializer_31, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(CustomProtocolTask, 'CustomProtocolTask', classMeta, VOID, [TaskConfiguration], VOID, VOID, {0: $serializer_getInstance_30});
  setMetadataFor(Companion_52, 'Companion', objectMeta);
  setMetadataFor($serializer_32, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_53, 'Companion', objectMeta);
  setMetadataFor($serializer_33, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Measure, 'Measure', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_55});
  setMetadataFor(DataStream, 'DataStream', classMeta, Measure, VOID, VOID, VOID, {0: $serializer_getInstance_31});
  setMetadataFor(TriggerData, 'TriggerData', classMeta, Measure, VOID, VOID, VOID, {0: $serializer_getInstance_32});
  setMetadataFor(Companion_54, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(SupportedTaskConfiguration, 'SupportedTaskConfiguration', classMeta);
  setMetadataFor(Companion_55, 'Companion', objectMeta);
  setMetadataFor(UrlVariable, 'UrlVariable', classMeta, Enum);
  setMetadataFor($serializer_34, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(WebTask, 'WebTask', classMeta, VOID, [TaskConfiguration], VOID, VOID, {0: $serializer_getInstance_33});
  setMetadataFor(WebTaskBuilder, 'WebTaskBuilder', classMeta, TaskConfigurationBuilder, VOID, WebTaskBuilder);
  setMetadataFor(Companion_56, 'Companion', objectMeta);
  setMetadataFor($serializer_35, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(TriggerConfiguration, 'TriggerConfiguration', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_61});
  setMetadataFor(ElapsedTimeTrigger, 'ElapsedTimeTrigger', classMeta, TriggerConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_34});
  setMetadataFor(Companion_57, 'Companion', objectMeta);
  setMetadataFor($serializer_36, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ManualTrigger, 'ManualTrigger', classMeta, TriggerConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_35});
  setMetadataFor(Companion_58, 'Companion', objectMeta);
  setMetadataFor($serializer_37, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ScheduledTrigger, 'ScheduledTrigger', classMeta, TriggerConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_36});
  setMetadataFor(Control, 'Control', classMeta, Enum);
  setMetadataFor(Companion_59, 'Companion', objectMeta);
  setMetadataFor($serializer_38, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(TaskControl, 'TaskControl', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_37});
  setMetadataFor(Companion_60, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_61, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(AccountIdentity, 'AccountIdentity', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_62});
  setMetadataFor(Companion_62, 'Companion', objectMeta);
  setMetadataFor($serializer_39, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(EmailAccountIdentity, 'EmailAccountIdentity', classMeta, AccountIdentity, VOID, VOID, VOID, {0: $serializer_getInstance_38});
  setMetadataFor(Companion_63, 'Companion', objectMeta);
  setMetadataFor($serializer_40, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(UsernameAccountIdentity, 'UsernameAccountIdentity', classMeta, AccountIdentity, VOID, VOID, VOID, {0: $serializer_getInstance_39});
  setMetadataFor(Companion_64, 'Companion', objectMeta);
  setMetadataFor($serializer_41, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(AssignedTo, 'AssignedTo', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_66});
  setMetadataFor(All, 'All', objectMeta, AssignedTo, [AssignedTo, SerializerFactory], VOID, VOID, {0: All_getInstance});
  setMetadataFor(Roles, 'Roles', classMeta, AssignedTo, VOID, VOID, VOID, {0: $serializer_getInstance_40});
  setMetadataFor(Companion_65, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_66, 'Companion', objectMeta);
  setMetadataFor($serializer_42, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ExpectedParticipantData, 'ExpectedParticipantData', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_41});
  setMetadataFor(Companion_67, 'Companion', objectMeta);
  setMetadataFor($serializer_43, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_68, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor($serializer_44, '$serializer', classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ParticipantAttribute, 'ParticipantAttribute', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_70});
  setMetadataFor(DefaultParticipantAttribute, 'DefaultParticipantAttribute', classMeta, ParticipantAttribute, VOID, VOID, VOID, {0: $serializer_getInstance_42});
  setMetadataFor(CustomParticipantAttribute, 'CustomParticipantAttribute', classMeta, ParticipantAttribute, VOID, VOID, VOID, {0: Companion_getInstance_69});
  setMetadataFor(Companion_69, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_70, 'Companion', objectMeta);
  setMetadataFor($serializer_45, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ParticipantRole, 'ParticipantRole', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_43});
  setMetadataFor(Companion_71, 'Companion', objectMeta);
  setMetadataFor(Username, 'Username', classMeta, VOID, VOID, VOID, VOID, {0: UsernameSerializer_getInstance});
  setMetadataFor(_no_name_provided__qut3iv_6, VOID, classMeta, StringConversionSerializer);
  setMetadataFor(UsernameSerializer, 'UsernameSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(AggregateRoot, 'AggregateRoot', classMeta);
  setMetadataFor(ExtractUniqueKeyMap, 'ExtractUniqueKeyMap', classMeta, VOID, [Map]);
  setMetadataFor(Snapshot, 'Snapshot', interfaceMeta);
  setMetadataFor(ReflectionAvailable, 'ReflectionAvailable', classMeta);
  setMetadataFor(ApplicationDataSerializer, 'ApplicationDataSerializer', classMeta, VOID, [KSerializer], ApplicationDataSerializer);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(NotSerializable, 'NotSerializable', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ignoreTypeParameters$1, VOID, classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicEnumSerializer, 'PolymorphicEnumSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_72, 'Companion', objectMeta);
  setMetadataFor(UnknownPolymorphicWrapper, 'UnknownPolymorphicWrapper', interfaceMeta);
  setMetadataFor(CustomData, 'CustomData', classMeta, VOID, [Data, UnknownPolymorphicWrapper], VOID, VOID, {0: DataSerializer_getInstance});
  setMetadataFor(UnknownPolymorphicSerializer, 'UnknownPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(_no_name_provided__qut3iv_7, VOID, classMeta, UnknownPolymorphicSerializer);
  setMetadataFor(DataSerializer, 'DataSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_73, 'Companion', objectMeta);
  setMetadataFor(CustomPrimaryDeviceConfiguration, 'CustomPrimaryDeviceConfiguration', classMeta, PrimaryDeviceConfiguration, [PrimaryDeviceConfiguration, UnknownPolymorphicWrapper], VOID, VOID, {0: PrimaryDeviceConfigurationSerializer_getInstance});
  setMetadataFor(Companion_74, 'Companion', objectMeta);
  setMetadataFor(CustomDeviceConfiguration, 'CustomDeviceConfiguration', classMeta, DeviceConfiguration, [DeviceConfiguration, UnknownPolymorphicWrapper], VOID, VOID, {0: DeviceConfigurationSerializer_getInstance});
  setMetadataFor(DeviceConfigurationSerializer, 'DeviceConfigurationSerializer', objectMeta, UnknownPolymorphicSerializer);
  setMetadataFor(_no_name_provided__qut3iv_8, VOID, classMeta, UnknownPolymorphicSerializer);
  setMetadataFor(PrimaryDeviceConfigurationSerializer, 'PrimaryDeviceConfigurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_75, 'Companion', objectMeta);
  setMetadataFor($serializer_46, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(BaseMembers, 'BaseMembers', classMeta, DeviceRegistration, VOID, VOID, VOID, {0: $serializer_getInstance_44});
  setMetadataFor(Companion_76, 'Companion', objectMeta);
  setMetadataFor(CustomDeviceRegistration, 'CustomDeviceRegistration', classMeta, DeviceRegistration, [DeviceRegistration, UnknownPolymorphicWrapper], VOID, VOID, {0: DeviceRegistrationSerializer_getInstance});
  setMetadataFor(_no_name_provided__qut3iv_9, VOID, classMeta, UnknownPolymorphicSerializer);
  setMetadataFor(DeviceRegistrationSerializer, 'DeviceRegistrationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_77, 'Companion', objectMeta);
  setMetadataFor($serializer_47, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(BaseMembers_0, 'BaseMembers', classMeta, DeviceConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_45});
  setMetadataFor(Companion_78, 'Companion', objectMeta);
  setMetadataFor(Companion_79, 'Companion', objectMeta);
  setMetadataFor(CustomSamplingConfiguration, 'CustomSamplingConfiguration', classMeta, VOID, [SamplingConfiguration, UnknownPolymorphicWrapper], VOID, VOID, {0: SamplingConfigurationSerializer_getInstance});
  setMetadataFor(_no_name_provided__qut3iv_10, VOID, classMeta, UnknownPolymorphicSerializer);
  setMetadataFor(SamplingConfigurationSerializer, 'SamplingConfigurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_80, 'Companion', objectMeta);
  setMetadataFor($serializer_48, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(BaseMembers_1, 'BaseMembers', classMeta, VOID, [TaskConfiguration], VOID, VOID, {0: $serializer_getInstance_46});
  setMetadataFor(Companion_81, 'Companion', objectMeta);
  setMetadataFor(CustomTaskConfiguration, 'CustomTaskConfiguration', classMeta, VOID, [TaskConfiguration, UnknownPolymorphicWrapper], VOID, VOID, {0: TaskConfigurationSerializer_getInstance});
  setMetadataFor(_no_name_provided__qut3iv_11, VOID, classMeta, UnknownPolymorphicSerializer);
  setMetadataFor(TaskConfigurationSerializer, 'TaskConfigurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_82, 'Companion', objectMeta);
  setMetadataFor($serializer_49, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(BaseMembers_2, 'BaseMembers', classMeta, TriggerConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_47});
  setMetadataFor(Companion_83, 'Companion', objectMeta);
  setMetadataFor(CustomTriggerConfiguration, 'CustomTriggerConfiguration', classMeta, TriggerConfiguration, [TriggerConfiguration, UnknownPolymorphicWrapper], VOID, VOID, {0: TriggerConfigurationSerializer_getInstance});
  setMetadataFor(_no_name_provided__qut3iv_12, VOID, classMeta, UnknownPolymorphicSerializer);
  setMetadataFor(TriggerConfigurationSerializer, 'TriggerConfigurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ApplicationServiceRequest, 'ApplicationServiceRequest', classMeta);
  setMetadataFor(DefaultUUIDFactory, 'DefaultUUIDFactory', objectMeta);
  setMetadataFor(Reflection, 'Reflection', objectMeta);
  //endregion
  function Companion() {
  }
  protoOf(Companion).m16 = function () {
    return EmailAddressSerializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function EmailAddress(address) {
    this.address = address;
  }
  protoOf(EmailAddress).d1f = function () {
    return this.address;
  };
  protoOf(EmailAddress).toString = function () {
    return this.address;
  };
  protoOf(EmailAddress).od = function () {
    return this.address;
  };
  protoOf(EmailAddress).e1f = function (address) {
    return new EmailAddress(address);
  };
  protoOf(EmailAddress).copy = function (address, $super) {
    address = address === VOID ? this.address : address;
    return this.e1f(address);
  };
  protoOf(EmailAddress).hashCode = function () {
    return getStringHashCode(this.address);
  };
  protoOf(EmailAddress).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmailAddress))
      return false;
    var tmp0_other_with_cast = other instanceof EmailAddress ? other : THROW_CCE();
    if (!(this.address === tmp0_other_with_cast.address))
      return false;
    return true;
  };
  function EmailAddressSerializer$$$delegate_0$lambda(it) {
    return new EmailAddress(it);
  }
  function _no_name_provided__qut3iv($fromString) {
    StringConversionSerializer.call(this, get_NAMESPACE() + '.' + ensureNotNull(getKClass(EmailAddress).i6()), $fromString);
  }
  function EmailAddressSerializer() {
    EmailAddressSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = EmailAddressSerializer$$$delegate_0$lambda;
    tmp.h1f_1 = new _no_name_provided__qut3iv(fromString);
  }
  protoOf(EmailAddressSerializer).pi = function () {
    return this.h1f_1.pi();
  };
  protoOf(EmailAddressSerializer).ri = function (decoder) {
    return this.h1f_1.ri(decoder);
  };
  protoOf(EmailAddressSerializer).i1f = function (encoder, value) {
    this.h1f_1.qi(encoder, value);
  };
  protoOf(EmailAddressSerializer).qi = function (encoder, value) {
    return this.i1f(encoder, value instanceof EmailAddress ? value : THROW_CCE());
  };
  var EmailAddressSerializer_instance;
  function EmailAddressSerializer_getInstance() {
    if (EmailAddressSerializer_instance == null)
      new EmailAddressSerializer();
    return EmailAddressSerializer_instance;
  }
  function EnumObjectMap_init_$Init$(keyOf, $this) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var tmp$ret$0 = LinkedHashMap_init_$Create$();
    EnumObjectMap.call($this, tmp$ret$0, keyOf);
    return $this;
  }
  function EnumObjectMap(map, keyOf) {
    this.j1f_1 = map;
    this.k1f_1 = keyOf;
  }
  protoOf(EnumObjectMap).l1f = function () {
    return this.k1f_1;
  };
  protoOf(EnumObjectMap).p2 = function () {
    return this.j1f_1.p2();
  };
  protoOf(EnumObjectMap).l2 = function () {
    return this.j1f_1.l2();
  };
  protoOf(EnumObjectMap).n = function () {
    return this.j1f_1.n();
  };
  protoOf(EnumObjectMap).m2 = function () {
    return this.j1f_1.m2();
  };
  protoOf(EnumObjectMap).u2 = function (key) {
    return this.j1f_1.u2(key);
  };
  protoOf(EnumObjectMap).v2 = function (value) {
    return this.j1f_1.v2(value);
  };
  protoOf(EnumObjectMap).x2 = function (key) {
    return this.j1f_1.x2(key);
  };
  protoOf(EnumObjectMap).y = function () {
    return this.j1f_1.y();
  };
  protoOf(EnumObjectMap).m1f = function (item) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dk.cachet.carp.common.application.EnumObjectMap.add.<anonymous>' call
    var key = this.k1f_1(item);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.j1f_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).u2(key)) {
      // Inline function 'dk.cachet.carp.common.application.EnumObjectMap.add.<anonymous>.<anonymous>' call
      var message = 'An item with the same key is already present.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.j1f_1.n2(key, item);
    return item;
  };
  function toEpochMicroseconds(_this__u8e3s4) {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.times' call
    var this_0 = _this__u8e3s4.b14().q9(toLong(1000000));
    var other = _this__u8e3s4.c14() / 1000 | 0;
    return this_0.za(toLong(other));
  }
  function get_MACAddressRegex() {
    _init_properties_MACAddress_kt__8ida7v();
    return MACAddressRegex;
  }
  var MACAddressRegex;
  function Companion_0() {
    this.n1f_1 = 6;
  }
  protoOf(Companion_0).parse = function (address) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(split(address, charArrayOf([_Char___init__impl__6a9atx(58)])).n() === 6 ? true : split(address, charArrayOf([_Char___init__impl__6a9atx(45)])).n() === 6)) {
      // Inline function 'dk.cachet.carp.common.application.Companion.parse.<anonymous>' call
      var message = 'Invalid MAC address string representation: expected six groups of two hexadecimal digits (upper or lower case), separated by hyphens (-) or colons (:).';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = address.toUpperCase();
    var recommendedFormatting = replace(tmp$ret$2, _Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(45));
    return new MACAddress(recommendedFormatting);
  };
  protoOf(Companion_0).m16 = function () {
    return MACAddressSerializer_getInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function MACAddress(address) {
    this.address = address;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!get_MACAddressRegex().m8(this.address)) {
      // Inline function 'dk.cachet.carp.common.application.MACAddress.<anonymous>' call
      var message = 'Invalid MAC address string representation: expected six groups of two upper case hexadecimal digits, separated by hyphens (-).';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(MACAddress).d1f = function () {
    return this.address;
  };
  protoOf(MACAddress).toString = function () {
    return this.address;
  };
  protoOf(MACAddress).od = function () {
    return this.address;
  };
  protoOf(MACAddress).e1f = function (address) {
    return new MACAddress(address);
  };
  protoOf(MACAddress).copy = function (address, $super) {
    address = address === VOID ? this.address : address;
    return this.e1f(address);
  };
  protoOf(MACAddress).hashCode = function () {
    return getStringHashCode(this.address);
  };
  protoOf(MACAddress).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MACAddress))
      return false;
    var tmp0_other_with_cast = other instanceof MACAddress ? other : THROW_CCE();
    if (!(this.address === tmp0_other_with_cast.address))
      return false;
    return true;
  };
  function MACAddressSerializer$$$delegate_0$lambda(it) {
    return new MACAddress(it);
  }
  function _no_name_provided__qut3iv_0($fromString) {
    StringConversionSerializer.call(this, get_NAMESPACE() + '.' + ensureNotNull(getKClass(MACAddress).i6()), $fromString);
  }
  function MACAddressSerializer() {
    MACAddressSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = MACAddressSerializer$$$delegate_0$lambda;
    tmp.o1f_1 = new _no_name_provided__qut3iv_0(fromString);
  }
  protoOf(MACAddressSerializer).pi = function () {
    return this.o1f_1.pi();
  };
  protoOf(MACAddressSerializer).ri = function (decoder) {
    return this.o1f_1.ri(decoder);
  };
  protoOf(MACAddressSerializer).p1f = function (encoder, value) {
    this.o1f_1.qi(encoder, value);
  };
  protoOf(MACAddressSerializer).qi = function (encoder, value) {
    return this.p1f(encoder, value instanceof MACAddress ? value : THROW_CCE());
  };
  var MACAddressSerializer_instance;
  function MACAddressSerializer_getInstance() {
    if (MACAddressSerializer_instance == null)
      new MACAddressSerializer();
    return MACAddressSerializer_instance;
  }
  var properties_initialized_MACAddress_kt_60couf;
  function _init_properties_MACAddress_kt__8ida7v() {
    if (!properties_initialized_MACAddress_kt_60couf) {
      properties_initialized_MACAddress_kt_60couf = true;
      MACAddressRegex = Regex_init_$Create$('([0-9A-F]{2}-){5}([0-9A-F]{2})');
    }
  }
  function get_namespaceRegex() {
    _init_properties_NamespacedId_kt__1ds8w4();
    return namespaceRegex;
  }
  var namespaceRegex;
  function get_nameRegex() {
    _init_properties_NamespacedId_kt__1ds8w4();
    return nameRegex;
  }
  var nameRegex;
  function Companion_1() {
  }
  protoOf(Companion_1).fromString = function (fullyQualifiedName) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = toString(trim(isCharSequence(fullyQualifiedName) ? fullyQualifiedName : THROW_CCE())).toLowerCase();
    var segments = split(tmp$ret$2, charArrayOf([_Char___init__impl__6a9atx(46)]));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(segments.n() > 1)) {
      // Inline function 'dk.cachet.carp.common.application.Companion.fromString.<anonymous>' call
      var message = 'A namespace needs to be specified.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var namespace = joinToString(segments.b2(0, segments.n() - 1 | 0), '.');
    var name = last(segments);
    return new NamespacedId(namespace, name);
  };
  protoOf(Companion_1).m16 = function () {
    return NamespacedIdSerializer_getInstance();
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function NamespacedId(namespace, name) {
    this.namespace = namespace;
    this.name = name;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!get_namespaceRegex().m8(this.namespace)) {
      // Inline function 'dk.cachet.carp.common.application.NamespacedId.<anonymous>' call
      var message = 'Invalid namespace representation: expected lowercase alpha-numeric (underscore included) words delimited by dots.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!get_nameRegex().m8(this.name)) {
      // Inline function 'dk.cachet.carp.common.application.NamespacedId.<anonymous>' call
      var message_0 = 'Invalid name representation: expected a single lowercase alpha-numeric (underscore included) word.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NamespacedId).q1f = function () {
    return this.namespace;
  };
  protoOf(NamespacedId).ra = function () {
    return this.name;
  };
  protoOf(NamespacedId).toString = function () {
    return this.namespace + '.' + this.name;
  };
  protoOf(NamespacedId).od = function () {
    return this.namespace;
  };
  protoOf(NamespacedId).pd = function () {
    return this.name;
  };
  protoOf(NamespacedId).r1f = function (namespace, name) {
    return new NamespacedId(namespace, name);
  };
  protoOf(NamespacedId).copy = function (namespace, name, $super) {
    namespace = namespace === VOID ? this.namespace : namespace;
    name = name === VOID ? this.name : name;
    return this.r1f(namespace, name);
  };
  protoOf(NamespacedId).hashCode = function () {
    var result = getStringHashCode(this.namespace);
    result = imul(result, 31) + getStringHashCode(this.name) | 0;
    return result;
  };
  protoOf(NamespacedId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NamespacedId))
      return false;
    var tmp0_other_with_cast = other instanceof NamespacedId ? other : THROW_CCE();
    if (!(this.namespace === tmp0_other_with_cast.namespace))
      return false;
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    return true;
  };
  function NamespacedIdSerializer$$$delegate_0$lambda(s) {
    return Companion_instance_2.fromString(s);
  }
  function _no_name_provided__qut3iv_1($fromString) {
    StringConversionSerializer.call(this, get_NAMESPACE() + '.' + ensureNotNull(getKClass(NamespacedId).i6()), $fromString);
  }
  function NamespacedIdSerializer() {
    NamespacedIdSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = NamespacedIdSerializer$$$delegate_0$lambda;
    tmp.s1f_1 = new _no_name_provided__qut3iv_1(fromString);
  }
  protoOf(NamespacedIdSerializer).pi = function () {
    return this.s1f_1.pi();
  };
  protoOf(NamespacedIdSerializer).ri = function (decoder) {
    return this.s1f_1.ri(decoder);
  };
  protoOf(NamespacedIdSerializer).t1f = function (encoder, value) {
    this.s1f_1.qi(encoder, value);
  };
  protoOf(NamespacedIdSerializer).qi = function (encoder, value) {
    return this.t1f(encoder, value instanceof NamespacedId ? value : THROW_CCE());
  };
  var NamespacedIdSerializer_instance;
  function NamespacedIdSerializer_getInstance() {
    if (NamespacedIdSerializer_instance == null)
      new NamespacedIdSerializer();
    return NamespacedIdSerializer_instance;
  }
  var properties_initialized_NamespacedId_kt_1d840q;
  function _init_properties_NamespacedId_kt__1ds8w4() {
    if (!properties_initialized_NamespacedId_kt_1d840q) {
      properties_initialized_NamespacedId_kt_1d840q = true;
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = '^([a-z_0-9]+\\.?)+[a-z_0-9]$';
      namespaceRegex = Regex_init_$Create$(this_0);
      // Inline function 'kotlin.text.toRegex' call
      var this_1 = '^[a-z_0-9]+?$';
      nameRegex = Regex_init_$Create$(this_1);
    }
  }
  function get_RecurrenceRuleRegex() {
    _init_properties_RecurrenceRule_kt__sy7tqs();
    return RecurrenceRuleRegex;
  }
  var RecurrenceRuleRegex;
  var Frequency_SECONDLY_instance;
  var Frequency_MINUTELY_instance;
  var Frequency_HOURLY_instance;
  var Frequency_DAILY_instance;
  var Frequency_WEEKLY_instance;
  var Frequency_MONTHLY_instance;
  var Frequency_YEARLY_instance;
  function values() {
    return [Frequency_SECONDLY_getInstance(), Frequency_MINUTELY_getInstance(), Frequency_HOURLY_getInstance(), Frequency_DAILY_getInstance(), Frequency_WEEKLY_getInstance(), Frequency_MONTHLY_getInstance(), Frequency_YEARLY_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'SECONDLY':
        return Frequency_SECONDLY_getInstance();
      case 'MINUTELY':
        return Frequency_MINUTELY_getInstance();
      case 'HOURLY':
        return Frequency_HOURLY_getInstance();
      case 'DAILY':
        return Frequency_DAILY_getInstance();
      case 'WEEKLY':
        return Frequency_WEEKLY_getInstance();
      case 'MONTHLY':
        return Frequency_MONTHLY_getInstance();
      case 'YEARLY':
        return Frequency_YEARLY_getInstance();
      default:
        Frequency_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Frequency_entriesInitialized;
  function Frequency_initEntries() {
    if (Frequency_entriesInitialized)
      return Unit_instance;
    Frequency_entriesInitialized = true;
    Frequency_SECONDLY_instance = new Frequency('SECONDLY', 0);
    Frequency_MINUTELY_instance = new Frequency('MINUTELY', 1);
    Frequency_HOURLY_instance = new Frequency('HOURLY', 2);
    Frequency_DAILY_instance = new Frequency('DAILY', 3);
    Frequency_WEEKLY_instance = new Frequency('WEEKLY', 4);
    Frequency_MONTHLY_instance = new Frequency('MONTHLY', 5);
    Frequency_YEARLY_instance = new Frequency('YEARLY', 6);
  }
  function Companion_2() {
  }
  protoOf(Companion_2).m16 = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.RecurrenceRule.End.Until', this, 1);
    tmp0_serialDesc.nt('elapsedTime', false);
    this.u1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer).pi = function () {
    return this.u1f_1;
  };
  protoOf($serializer).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DurationSerializer_getInstance()];
  };
  protoOf($serializer).ri = function (decoder) {
    var tmp0_desc = this.u1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xl(tmp0_desc);
    if (tmp5_input.om()) {
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp4_local0;
      var tmp_1 = tmp5_input.jm(tmp0_desc, 0, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp4_local0 = tmp_1 == null ? null : tmp_1.ag_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp4_local0;
            var tmp_4 = tmp5_input.jm(tmp0_desc, 0, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp4_local0 = tmp_4 == null ? null : tmp_4.ag_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yl(tmp0_desc);
    return Until_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer).v1f = function (encoder, value) {
    var tmp0_desc = this.u1f_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, DurationSerializer_getInstance(), new Duration(value.elapsedTime));
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer).qi = function (encoder, value) {
    return this.v1f(encoder, value instanceof Until ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Until_init_$Init$(seen1, elapsedTime, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance().u1f_1);
    }
    End_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.elapsedTime = elapsedTime;
    return $this;
  }
  function Until_init_$Create$(seen1, elapsedTime, serializationConstructorMarker) {
    return Until_init_$Init$(seen1, elapsedTime, serializationConstructorMarker, objectCreate(protoOf(Until)));
  }
  function Companion_3() {
  }
  protoOf(Companion_3).m16 = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.RecurrenceRule.End.Count', this, 1);
    tmp0_serialDesc.nt('count', false);
    this.w1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).pi = function () {
    return this.w1f_1;
  };
  protoOf($serializer_0).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance()];
  };
  protoOf($serializer_0).ri = function (decoder) {
    var tmp0_desc = this.w1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_input = decoder.xl(tmp0_desc);
    if (tmp5_input.om()) {
      tmp4_local0 = tmp5_input.cm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.cm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yl(tmp0_desc);
    return Count_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_0).x1f = function (encoder, value) {
    var tmp0_desc = this.w1f_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.in(tmp0_desc, 0, value.count);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_0).qi = function (encoder, value) {
    return this.x1f(encoder, value instanceof Count ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Count_init_$Init$(seen1, count, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_0().w1f_1);
    }
    End_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.count = count;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.count >= 1)) {
      // Inline function 'dk.cachet.carp.common.application.Count.<init>.<anonymous>' call
      var message = 'Count needs to be 1 or more.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function Count_init_$Create$(seen1, count, serializationConstructorMarker) {
    return Count_init_$Init$(seen1, count, serializationConstructorMarker, objectCreate(protoOf(Count)));
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.y1f_1.r2();
  }
  function RecurrenceRule$End$Never$_anonymous__iky2dw() {
    var tmp = Never_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer_init_$Create$('dk.cachet.carp.common.application.RecurrenceRule.End.Never', tmp, tmp$ret$2);
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.z1f_1.r2();
  }
  function RecurrenceRule$End$Companion$_anonymous__f3mbfw() {
    var tmp = getKClass(End);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(Count), getKClass(Never), getKClass(Until)];
    // Inline function 'kotlin.arrayOf' call
    var tmp_1 = $serializer_getInstance_0();
    var tmp_2 = Never_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = [tmp_1, ObjectSerializer_init_$Create$('dk.cachet.carp.common.application.RecurrenceRule.End.Never', tmp_2, tmp$ret$5), $serializer_getInstance()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.common.application.RecurrenceRule.End', tmp, tmp_0, tmp_3, tmp$ret$11);
  }
  function Until(elapsedTime) {
    End.call(this);
    this.elapsedTime = elapsedTime;
  }
  protoOf(Until).a1g = function () {
    return this.elapsedTime;
  };
  protoOf(Until).toString = function () {
    return 'UNTIL=' + _Duration___get_inWholeMicroseconds__impl__8oe8vv(this.elapsedTime).toString();
  };
  protoOf(Until).b1g = function () {
    return this.elapsedTime;
  };
  protoOf(Until).c1g = function (elapsedTime) {
    return new Until(elapsedTime);
  };
  protoOf(Until).copy = function (elapsedTime, $super) {
    elapsedTime = elapsedTime === VOID ? this.elapsedTime : elapsedTime;
    return this.c1g(elapsedTime);
  };
  protoOf(Until).hashCode = function () {
    return Duration__hashCode_impl_u4exz6(this.elapsedTime);
  };
  protoOf(Until).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Until))
      return false;
    var tmp0_other_with_cast = other instanceof Until ? other : THROW_CCE();
    if (!equals(this.elapsedTime, tmp0_other_with_cast.elapsedTime))
      return false;
    return true;
  };
  function Count(count) {
    End.call(this);
    this.count = count;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.count >= 1)) {
      // Inline function 'dk.cachet.carp.common.application.Count.<anonymous>' call
      var message = 'Count needs to be 1 or more.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(Count).d1g = function () {
    return this.count;
  };
  protoOf(Count).toString = function () {
    return 'COUNT=' + this.count;
  };
  protoOf(Count).od = function () {
    return this.count;
  };
  protoOf(Count).e1g = function (count) {
    return new Count(count);
  };
  protoOf(Count).copy = function (count, $super) {
    count = count === VOID ? this.count : count;
    return this.e1g(count);
  };
  protoOf(Count).hashCode = function () {
    return this.count;
  };
  protoOf(Count).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Count))
      return false;
    var tmp0_other_with_cast = other instanceof Count ? other : THROW_CCE();
    if (!(this.count === tmp0_other_with_cast.count))
      return false;
    return true;
  };
  function Never() {
    Never_instance = this;
    End.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.y1f_1 = lazy(tmp_0, RecurrenceRule$End$Never$_anonymous__iky2dw);
  }
  protoOf(Never).m16 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Never).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Never_instance;
  function Never_getInstance() {
    if (Never_instance == null)
      new Never();
    return Never_instance;
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.z1f_1 = lazy(tmp_0, RecurrenceRule$End$Companion$_anonymous__f3mbfw);
  }
  protoOf(Companion_4).m16 = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_4).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function End_init_$Init$(seen1, serializationConstructorMarker, $this) {
    return $this;
  }
  function Companion_5() {
  }
  protoOf(Companion_5).f1g = function (interval, end) {
    return new RecurrenceRule(Frequency_SECONDLY_getInstance(), interval, end);
  };
  protoOf(Companion_5).secondly = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return this.f1g(interval, end);
  };
  protoOf(Companion_5).g1g = function (interval, end) {
    return new RecurrenceRule(Frequency_MINUTELY_getInstance(), interval, end);
  };
  protoOf(Companion_5).minutely = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return this.g1g(interval, end);
  };
  protoOf(Companion_5).h1g = function (interval, end) {
    return new RecurrenceRule(Frequency_HOURLY_getInstance(), interval, end);
  };
  protoOf(Companion_5).hourly = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return this.h1g(interval, end);
  };
  protoOf(Companion_5).i1g = function (interval, end) {
    return new RecurrenceRule(Frequency_DAILY_getInstance(), interval, end);
  };
  protoOf(Companion_5).daily = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return this.i1g(interval, end);
  };
  protoOf(Companion_5).j1g = function (interval, end) {
    return new RecurrenceRule(Frequency_WEEKLY_getInstance(), interval, end);
  };
  protoOf(Companion_5).weekly = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return this.j1g(interval, end);
  };
  protoOf(Companion_5).k1g = function (interval, end) {
    return new RecurrenceRule(Frequency_MONTHLY_getInstance(), interval, end);
  };
  protoOf(Companion_5).monthly = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return this.k1g(interval, end);
  };
  protoOf(Companion_5).l1g = function (interval, end) {
    return new RecurrenceRule(Frequency_YEARLY_getInstance(), interval, end);
  };
  protoOf(Companion_5).yearly = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return this.l1g(interval, end);
  };
  protoOf(Companion_5).fromString = function (rrule) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!get_RecurrenceRuleRegex().m8(rrule)) {
      // Inline function 'dk.cachet.carp.common.application.Companion.fromString.<anonymous>' call
      var message = 'Invalid or unsupported RecurrenceRule string representation.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.associate' call
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = rrule.substring(6);
    var this_0 = split(tmp$ret$2, charArrayOf([_Char___init__impl__6a9atx(59)]));
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var tmp0_iterator = this_0.t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'dk.cachet.carp.common.application.Companion.fromString.<anonymous>' call
      var par = split(element, charArrayOf([_Char___init__impl__6a9atx(61)]));
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.collections.count' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(par.n() === 2)) {
        // Inline function 'dk.cachet.carp.common.application.Companion.fromString.<anonymous>.<anonymous>' call
        var message_0 = 'Invalid RRULE parameter format.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var pair = to(par.c1(0), par.c1(1));
      destination.n2(pair.md_1, pair.nd_1);
    }
    var parameters = destination;
    var supportedParameters = listOf(['FREQ', 'INTERVAL', 'UNTIL', 'COUNT']);
    // Inline function 'kotlin.require' call
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var this_1 = parameters.l2();
      var tmp;
      if (isInterface(this_1, Collection)) {
        tmp = this_1.y();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = true;
        break $l$block_0;
      }
      var tmp0_iterator_0 = this_1.t();
      while (tmp0_iterator_0.u()) {
        var element_0 = tmp0_iterator_0.v();
        // Inline function 'dk.cachet.carp.common.application.Companion.fromString.<anonymous>' call
        if (!supportedParameters.p(element_0)) {
          tmp$ret$8 = false;
          break $l$block_0;
        }
      }
      tmp$ret$8 = true;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp$ret$8) {
      // Inline function 'dk.cachet.carp.common.application.Companion.fromString.<anonymous>' call
      var message_1 = 'Invalid or unsupported RRULE parameter found.';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.count' call
    var tmp_0 = distinct(parameters.l2()).n();
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp_0 === parameters.l2().n())) {
      // Inline function 'dk.cachet.carp.common.application.Companion.fromString.<anonymous>' call
      var message_2 = 'RRULE does not allow repeating the same parameter multiple times.';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    var tmp0_elvis_lhs = parameters.x2('FREQ');
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('FREQ needs to be specified.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var frequencyString = tmp_1;
    var frequency = valueOf(frequencyString);
    var interval = 1;
    var until = null;
    var count = null;
    // Inline function 'kotlin.collections.iterator' call
    var tmp1_iterator = parameters.p2().t();
    while (tmp1_iterator.u()) {
      var par_0 = tmp1_iterator.v();
      switch (par_0.q2()) {
        case 'INTERVAL':
          interval = toInt(par_0.r2());
          break;
        case 'UNTIL':
          // Inline function 'kotlin.time.Companion.microseconds' call

          Companion_getInstance();
          var this_2 = toLong_0(par_0.r2());
          until = toDuration(this_2, DurationUnit_MICROSECONDS_getInstance());
          break;
        case 'COUNT':
          count = toInt(par_0.r2());
          break;
      }
    }
    // Inline function 'kotlin.require' call
    var tmp_2;
    var tmp_3 = until;
    if ((tmp_3 == null ? null : new Duration(tmp_3)) == null) {
      tmp_2 = true;
    } else {
      tmp_2 = count == null;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp_2) {
      // Inline function 'dk.cachet.carp.common.application.Companion.fromString.<anonymous>' call
      var message_3 = 'UNTIL and COUNT cannot both be set.';
      throw IllegalArgumentException_init_$Create$(toString(message_3));
    }
    var tmp_4;
    var tmp_5;
    var tmp_6 = until;
    if ((tmp_6 == null ? null : new Duration(tmp_6)) == null) {
      tmp_5 = count == null;
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      tmp_4 = Never_getInstance();
    } else {
      var tmp_7;
      var tmp_8 = until;
      if (!((tmp_8 == null ? null : new Duration(tmp_8)) == null)) {
        tmp_7 = new Until(until);
      } else {
        tmp_7 = new Count(ensureNotNull(count));
      }
      tmp_4 = tmp_7;
    }
    var end = tmp_4;
    return new RecurrenceRule(frequency, interval, end);
  };
  protoOf(Companion_5).m16 = function () {
    return RecurrenceRuleSerializer_getInstance();
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function Frequency(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function End() {
    Companion_getInstance_5();
  }
  function Frequency_SECONDLY_getInstance() {
    Frequency_initEntries();
    return Frequency_SECONDLY_instance;
  }
  function Frequency_MINUTELY_getInstance() {
    Frequency_initEntries();
    return Frequency_MINUTELY_instance;
  }
  function Frequency_HOURLY_getInstance() {
    Frequency_initEntries();
    return Frequency_HOURLY_instance;
  }
  function Frequency_DAILY_getInstance() {
    Frequency_initEntries();
    return Frequency_DAILY_instance;
  }
  function Frequency_WEEKLY_getInstance() {
    Frequency_initEntries();
    return Frequency_WEEKLY_instance;
  }
  function Frequency_MONTHLY_getInstance() {
    Frequency_initEntries();
    return Frequency_MONTHLY_instance;
  }
  function Frequency_YEARLY_getInstance() {
    Frequency_initEntries();
    return Frequency_YEARLY_instance;
  }
  function RecurrenceRule(frequency, interval, end) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    this.frequency = frequency;
    this.interval = interval;
    this.end = end;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.interval >= 1)) {
      // Inline function 'dk.cachet.carp.common.application.RecurrenceRule.<anonymous>' call
      var message = 'Interval needs to be 1 or more.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(RecurrenceRule).o1g = function () {
    return this.frequency;
  };
  protoOf(RecurrenceRule).p1g = function () {
    return this.interval;
  };
  protoOf(RecurrenceRule).q1g = function () {
    return this.end;
  };
  protoOf(RecurrenceRule).toString = function () {
    var rule = 'RRULE:FREQ=' + this.frequency;
    if (!(this.interval === 1))
      rule = rule + (';INTERVAL=' + this.interval);
    if (!equals(this.end, Never_getInstance()))
      rule = rule + (';' + this.end);
    return rule;
  };
  protoOf(RecurrenceRule).od = function () {
    return this.frequency;
  };
  protoOf(RecurrenceRule).pd = function () {
    return this.interval;
  };
  protoOf(RecurrenceRule).r1g = function () {
    return this.end;
  };
  protoOf(RecurrenceRule).s1g = function (frequency, interval, end) {
    return new RecurrenceRule(frequency, interval, end);
  };
  protoOf(RecurrenceRule).copy = function (frequency, interval, end, $super) {
    frequency = frequency === VOID ? this.frequency : frequency;
    interval = interval === VOID ? this.interval : interval;
    end = end === VOID ? this.end : end;
    return this.s1g(frequency, interval, end);
  };
  protoOf(RecurrenceRule).hashCode = function () {
    var result = this.frequency.hashCode();
    result = imul(result, 31) + this.interval | 0;
    result = imul(result, 31) + hashCode(this.end) | 0;
    return result;
  };
  protoOf(RecurrenceRule).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RecurrenceRule))
      return false;
    var tmp0_other_with_cast = other instanceof RecurrenceRule ? other : THROW_CCE();
    if (!this.frequency.equals(tmp0_other_with_cast.frequency))
      return false;
    if (!(this.interval === tmp0_other_with_cast.interval))
      return false;
    if (!equals(this.end, tmp0_other_with_cast.end))
      return false;
    return true;
  };
  function RecurrenceRuleSerializer$$$delegate_0$lambda(s) {
    return Companion_instance_6.fromString(s);
  }
  function _no_name_provided__qut3iv_2($fromString) {
    StringConversionSerializer.call(this, get_NAMESPACE() + '.' + ensureNotNull(getKClass(RecurrenceRule).i6()), $fromString);
  }
  function RecurrenceRuleSerializer() {
    RecurrenceRuleSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = RecurrenceRuleSerializer$$$delegate_0$lambda;
    tmp.t1g_1 = new _no_name_provided__qut3iv_2(fromString);
  }
  protoOf(RecurrenceRuleSerializer).pi = function () {
    return this.t1g_1.pi();
  };
  protoOf(RecurrenceRuleSerializer).ri = function (decoder) {
    return this.t1g_1.ri(decoder);
  };
  protoOf(RecurrenceRuleSerializer).u1g = function (encoder, value) {
    this.t1g_1.qi(encoder, value);
  };
  protoOf(RecurrenceRuleSerializer).qi = function (encoder, value) {
    return this.u1g(encoder, value instanceof RecurrenceRule ? value : THROW_CCE());
  };
  var RecurrenceRuleSerializer_instance;
  function RecurrenceRuleSerializer_getInstance() {
    if (RecurrenceRuleSerializer_instance == null)
      new RecurrenceRuleSerializer();
    return RecurrenceRuleSerializer_instance;
  }
  var properties_initialized_RecurrenceRule_kt_5fhoz6;
  function _init_properties_RecurrenceRule_kt__sy7tqs() {
    if (!properties_initialized_RecurrenceRule_kt_5fhoz6) {
      properties_initialized_RecurrenceRule_kt_5fhoz6 = true;
      RecurrenceRuleRegex = Regex_init_$Create$('RRULE:FREQ=(SECONDLY|MINUTELY|HOURLY|DAILY|WEEKLY|MONTHLY|YEARLY)(;(INTERVAL|UNTIL|COUNT)=\\d+)*');
    }
  }
  function get_TimeOfDayRegex() {
    _init_properties_TimeOfDay_kt__plx1fq();
    return TimeOfDayRegex;
  }
  var TimeOfDayRegex;
  function Companion_6() {
  }
  protoOf(Companion_6).fromString = function (time) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!get_TimeOfDayRegex().m8(time)) {
      // Inline function 'dk.cachet.carp.common.application.Companion.fromString.<anonymous>' call
      var message = 'Invalid TimeOfDay string representation.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_container = split(time, charArrayOf([_Char___init__impl__6a9atx(58)]));
    // Inline function 'kotlin.collections.component1' call
    var hour = tmp0_container.c1(0);
    // Inline function 'kotlin.collections.component2' call
    var minutes = tmp0_container.c1(1);
    // Inline function 'kotlin.collections.component3' call
    var seconds = tmp0_container.c1(2);
    return new TimeOfDay(toInt(hour), toInt(minutes), toInt(seconds));
  };
  protoOf(Companion_6).m16 = function () {
    return TimeOfDaySerializer_getInstance();
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function TimeOfDay(hour, minutes, seconds) {
    minutes = minutes === VOID ? 0 : minutes;
    seconds = seconds === VOID ? 0 : seconds;
    this.hour = hour;
    this.minutes = minutes;
    this.seconds = seconds;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var containsArg = this.hour;
    if (0 <= containsArg ? containsArg <= 23 : false) {
      var containsArg_0 = this.minutes;
      tmp_0 = 0 <= containsArg_0 ? containsArg_0 <= 59 : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var containsArg_1 = this.seconds;
      tmp = 0 <= containsArg_1 ? containsArg_1 <= 59 : false;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'dk.cachet.carp.common.application.TimeOfDay.<anonymous>' call
      var message = 'The hour needs be between 0 and 23, and minutes and seconds between 0 and 59';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(TimeOfDay).v1g = function () {
    return this.hour;
  };
  protoOf(TimeOfDay).w1g = function () {
    return this.minutes;
  };
  protoOf(TimeOfDay).x1g = function () {
    return this.seconds;
  };
  protoOf(TimeOfDay).toString = function () {
    var hour = padStart(this.hour.toString(), 2, _Char___init__impl__6a9atx(48));
    var minutes = padStart(this.minutes.toString(), 2, _Char___init__impl__6a9atx(48));
    var seconds = padStart(this.seconds.toString(), 2, _Char___init__impl__6a9atx(48));
    return hour + ':' + minutes + ':' + seconds;
  };
  protoOf(TimeOfDay).od = function () {
    return this.hour;
  };
  protoOf(TimeOfDay).pd = function () {
    return this.minutes;
  };
  protoOf(TimeOfDay).r1g = function () {
    return this.seconds;
  };
  protoOf(TimeOfDay).y1g = function (hour, minutes, seconds) {
    return new TimeOfDay(hour, minutes, seconds);
  };
  protoOf(TimeOfDay).copy = function (hour, minutes, seconds, $super) {
    hour = hour === VOID ? this.hour : hour;
    minutes = minutes === VOID ? this.minutes : minutes;
    seconds = seconds === VOID ? this.seconds : seconds;
    return this.y1g(hour, minutes, seconds);
  };
  protoOf(TimeOfDay).hashCode = function () {
    var result = this.hour;
    result = imul(result, 31) + this.minutes | 0;
    result = imul(result, 31) + this.seconds | 0;
    return result;
  };
  protoOf(TimeOfDay).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TimeOfDay))
      return false;
    var tmp0_other_with_cast = other instanceof TimeOfDay ? other : THROW_CCE();
    if (!(this.hour === tmp0_other_with_cast.hour))
      return false;
    if (!(this.minutes === tmp0_other_with_cast.minutes))
      return false;
    if (!(this.seconds === tmp0_other_with_cast.seconds))
      return false;
    return true;
  };
  function TimeOfDaySerializer$$$delegate_0$lambda(s) {
    return Companion_instance_7.fromString(s);
  }
  function _no_name_provided__qut3iv_3($fromString) {
    StringConversionSerializer.call(this, get_NAMESPACE() + '.' + ensureNotNull(getKClass(TimeOfDay).i6()), $fromString);
  }
  function TimeOfDaySerializer() {
    TimeOfDaySerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = TimeOfDaySerializer$$$delegate_0$lambda;
    tmp.z1g_1 = new _no_name_provided__qut3iv_3(fromString);
  }
  protoOf(TimeOfDaySerializer).pi = function () {
    return this.z1g_1.pi();
  };
  protoOf(TimeOfDaySerializer).ri = function (decoder) {
    return this.z1g_1.ri(decoder);
  };
  protoOf(TimeOfDaySerializer).a1h = function (encoder, value) {
    this.z1g_1.qi(encoder, value);
  };
  protoOf(TimeOfDaySerializer).qi = function (encoder, value) {
    return this.a1h(encoder, value instanceof TimeOfDay ? value : THROW_CCE());
  };
  var TimeOfDaySerializer_instance;
  function TimeOfDaySerializer_getInstance() {
    if (TimeOfDaySerializer_instance == null)
      new TimeOfDaySerializer();
    return TimeOfDaySerializer_instance;
  }
  var properties_initialized_TimeOfDay_kt_aebdnc;
  function _init_properties_TimeOfDay_kt__plx1fq() {
    if (!properties_initialized_TimeOfDay_kt_aebdnc) {
      properties_initialized_TimeOfDay_kt_aebdnc = true;
      TimeOfDayRegex = Regex_init_$Create$('\\d\\d:\\d\\d:\\d\\d');
    }
  }
  var Trilean_TRUE_instance;
  var Trilean_FALSE_instance;
  var Trilean_UNKNOWN_instance;
  function values_0() {
    return [Trilean_TRUE_getInstance(), Trilean_FALSE_getInstance(), Trilean_UNKNOWN_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'TRUE':
        return Trilean_TRUE_getInstance();
      case 'FALSE':
        return Trilean_FALSE_getInstance();
      case 'UNKNOWN':
        return Trilean_UNKNOWN_getInstance();
      default:
        Trilean_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Trilean_entriesInitialized;
  function Trilean_initEntries() {
    if (Trilean_entriesInitialized)
      return Unit_instance;
    Trilean_entriesInitialized = true;
    Trilean_TRUE_instance = new Trilean('TRUE', 0);
    Trilean_FALSE_instance = new Trilean('FALSE', 1);
    Trilean_UNKNOWN_instance = new Trilean('UNKNOWN', 2);
  }
  function Trilean(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toTrilean(_this__u8e3s4) {
    return _this__u8e3s4 ? Trilean_TRUE_getInstance() : Trilean_FALSE_getInstance();
  }
  function Trilean_TRUE_getInstance() {
    Trilean_initEntries();
    return Trilean_TRUE_instance;
  }
  function Trilean_FALSE_getInstance() {
    Trilean_initEntries();
    return Trilean_FALSE_instance;
  }
  function Trilean_UNKNOWN_getInstance() {
    Trilean_initEntries();
    return Trilean_UNKNOWN_instance;
  }
  function get_UUIDRegex() {
    _init_properties_UUID_kt__55myez();
    return UUIDRegex;
  }
  var UUIDRegex;
  function Companion_7() {
  }
  protoOf(Companion_7).parse = function (uuid) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = uuid.toLowerCase();
    return new UUID(tmp$ret$1);
  };
  protoOf(Companion_7).randomUUID = function () {
    return DefaultUUIDFactory_instance.e1h();
  };
  protoOf(Companion_7).m16 = function () {
    return UUIDSerializer_getInstance();
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function UUID(stringRepresentation) {
    this.stringRepresentation = stringRepresentation;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!get_UUIDRegex().m8(this.stringRepresentation)) {
      // Inline function 'dk.cachet.carp.common.application.UUID.<anonymous>' call
      var message = 'Invalid UUID string representation.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UUID).f1h = function () {
    return this.stringRepresentation;
  };
  protoOf(UUID).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UUID))
      return false;
    return this.stringRepresentation === other.stringRepresentation;
  };
  protoOf(UUID).hashCode = function () {
    return getStringHashCode(this.stringRepresentation);
  };
  protoOf(UUID).toString = function () {
    return this.stringRepresentation;
  };
  function UUIDSerializer$$$delegate_0$lambda(it) {
    return new UUID(it);
  }
  function _no_name_provided__qut3iv_4($fromString) {
    StringConversionSerializer.call(this, get_NAMESPACE() + '.' + ensureNotNull(getKClass(UUID).i6()), $fromString);
  }
  function UUIDSerializer() {
    UUIDSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = UUIDSerializer$$$delegate_0$lambda;
    tmp.g1h_1 = new _no_name_provided__qut3iv_4(fromString);
  }
  protoOf(UUIDSerializer).pi = function () {
    return this.g1h_1.pi();
  };
  protoOf(UUIDSerializer).ri = function (decoder) {
    return this.g1h_1.ri(decoder);
  };
  protoOf(UUIDSerializer).h1h = function (encoder, value) {
    this.g1h_1.qi(encoder, value);
  };
  protoOf(UUIDSerializer).qi = function (encoder, value) {
    return this.h1h(encoder, value instanceof UUID ? value : THROW_CCE());
  };
  var UUIDSerializer_instance;
  function UUIDSerializer_getInstance() {
    if (UUIDSerializer_instance == null)
      new UUIDSerializer();
    return UUIDSerializer_instance;
  }
  var properties_initialized_UUID_kt_e3ef5p;
  function _init_properties_UUID_kt__55myez() {
    if (!properties_initialized_UUID_kt_e3ef5p) {
      properties_initialized_UUID_kt_e3ef5p = true;
      UUIDRegex = Regex_init_$Create$('([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})');
    }
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i1h_1 = [null, null, null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_8).m16 = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.acceleration', this, 4);
    tmp0_serialDesc.nt('x', false);
    tmp0_serialDesc.nt('y', false);
    tmp0_serialDesc.nt('z', false);
    tmp0_serialDesc.nt('sensorSpecificData', true);
    this.j1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).pi = function () {
    return this.j1h_1;
  };
  protoOf($serializer_1).cu = function () {
    var tmp0_cached = Companion_getInstance_9().i1h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(tmp0_cached[3])];
  };
  protoOf($serializer_1).ri = function (decoder) {
    var tmp0_desc = this.j1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_9().i1h_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.fm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.fm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.fm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.lm(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.fm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.fm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.fm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.lm(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return Acceleration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_1).k1h = function (encoder, value) {
    var tmp0_desc = this.j1h_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().i1h_1;
    tmp1_output.ln(tmp0_desc, 0, value.x);
    tmp1_output.ln(tmp0_desc, 1, value.y);
    tmp1_output.ln(tmp0_desc, 2, value.z);
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !(value.l1h_1 == null)) {
      tmp1_output.rn(tmp0_desc, 3, tmp2_cached[3], value.l1h_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_1).qi = function (encoder, value) {
    return this.k1h(encoder, value instanceof Acceleration ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Acceleration_init_$Init$(seen1, x, y, z, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_1().j1h_1);
    }
    $this.x = x;
    $this.y = y;
    $this.z = z;
    if (0 === (seen1 & 8))
      $this.l1h_1 = null;
    else
      $this.l1h_1 = sensorSpecificData;
    return $this;
  }
  function Acceleration_init_$Create$(seen1, x, y, z, sensorSpecificData, serializationConstructorMarker) {
    return Acceleration_init_$Init$(seen1, x, y, z, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(Acceleration)));
  }
  function Acceleration(x, y, z, sensorSpecificData) {
    Companion_getInstance_9();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.x = x;
    this.y = y;
    this.z = z;
    this.l1h_1 = sensorSpecificData;
  }
  protoOf(Acceleration).m1h = function () {
    return this.x;
  };
  protoOf(Acceleration).n1h = function () {
    return this.y;
  };
  protoOf(Acceleration).o1h = function () {
    return this.z;
  };
  protoOf(Acceleration).p1h = function () {
    return this.l1h_1;
  };
  protoOf(Acceleration).od = function () {
    return this.x;
  };
  protoOf(Acceleration).pd = function () {
    return this.y;
  };
  protoOf(Acceleration).r1g = function () {
    return this.z;
  };
  protoOf(Acceleration).q1h = function () {
    return this.l1h_1;
  };
  protoOf(Acceleration).r1h = function (x, y, z, sensorSpecificData) {
    return new Acceleration(x, y, z, sensorSpecificData);
  };
  protoOf(Acceleration).copy = function (x, y, z, sensorSpecificData, $super) {
    x = x === VOID ? this.x : x;
    y = y === VOID ? this.y : y;
    z = z === VOID ? this.z : z;
    sensorSpecificData = sensorSpecificData === VOID ? this.l1h_1 : sensorSpecificData;
    return this.r1h(x, y, z, sensorSpecificData);
  };
  protoOf(Acceleration).toString = function () {
    return 'Acceleration(x=' + this.x + ', y=' + this.y + ', z=' + this.z + ', sensorSpecificData=' + this.l1h_1 + ')';
  };
  protoOf(Acceleration).hashCode = function () {
    var result = getNumberHashCode(this.x);
    result = imul(result, 31) + getNumberHashCode(this.y) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z) | 0;
    result = imul(result, 31) + (this.l1h_1 == null ? 0 : hashCode(this.l1h_1)) | 0;
    return result;
  };
  protoOf(Acceleration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Acceleration))
      return false;
    var tmp0_other_with_cast = other instanceof Acceleration ? other : THROW_CCE();
    if (!equals(this.x, tmp0_other_with_cast.x))
      return false;
    if (!equals(this.y, tmp0_other_with_cast.y))
      return false;
    if (!equals(this.z, tmp0_other_with_cast.z))
      return false;
    if (!equals(this.l1h_1, tmp0_other_with_cast.l1h_1))
      return false;
    return true;
  };
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s1h_1 = [null, null, null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_9).m16 = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.angularvelocity', this, 4);
    tmp0_serialDesc.nt('x', false);
    tmp0_serialDesc.nt('y', false);
    tmp0_serialDesc.nt('z', false);
    tmp0_serialDesc.nt('sensorSpecificData', true);
    this.t1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).pi = function () {
    return this.t1h_1;
  };
  protoOf($serializer_2).cu = function () {
    var tmp0_cached = Companion_getInstance_10().s1h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(tmp0_cached[3])];
  };
  protoOf($serializer_2).ri = function (decoder) {
    var tmp0_desc = this.t1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_10().s1h_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.fm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.fm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.fm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.lm(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.fm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.fm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.fm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.lm(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return AngularVelocity_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).u1h = function (encoder, value) {
    var tmp0_desc = this.t1h_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().s1h_1;
    tmp1_output.ln(tmp0_desc, 0, value.x);
    tmp1_output.ln(tmp0_desc, 1, value.y);
    tmp1_output.ln(tmp0_desc, 2, value.z);
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !(value.v1h_1 == null)) {
      tmp1_output.rn(tmp0_desc, 3, tmp2_cached[3], value.v1h_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_2).qi = function (encoder, value) {
    return this.u1h(encoder, value instanceof AngularVelocity ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function AngularVelocity_init_$Init$(seen1, x, y, z, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_2().t1h_1);
    }
    $this.x = x;
    $this.y = y;
    $this.z = z;
    if (0 === (seen1 & 8))
      $this.v1h_1 = null;
    else
      $this.v1h_1 = sensorSpecificData;
    return $this;
  }
  function AngularVelocity_init_$Create$(seen1, x, y, z, sensorSpecificData, serializationConstructorMarker) {
    return AngularVelocity_init_$Init$(seen1, x, y, z, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(AngularVelocity)));
  }
  function AngularVelocity(x, y, z, sensorSpecificData) {
    Companion_getInstance_10();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.x = x;
    this.y = y;
    this.z = z;
    this.v1h_1 = sensorSpecificData;
  }
  protoOf(AngularVelocity).m1h = function () {
    return this.x;
  };
  protoOf(AngularVelocity).n1h = function () {
    return this.y;
  };
  protoOf(AngularVelocity).o1h = function () {
    return this.z;
  };
  protoOf(AngularVelocity).p1h = function () {
    return this.v1h_1;
  };
  protoOf(AngularVelocity).od = function () {
    return this.x;
  };
  protoOf(AngularVelocity).pd = function () {
    return this.y;
  };
  protoOf(AngularVelocity).r1g = function () {
    return this.z;
  };
  protoOf(AngularVelocity).q1h = function () {
    return this.v1h_1;
  };
  protoOf(AngularVelocity).r1h = function (x, y, z, sensorSpecificData) {
    return new AngularVelocity(x, y, z, sensorSpecificData);
  };
  protoOf(AngularVelocity).copy = function (x, y, z, sensorSpecificData, $super) {
    x = x === VOID ? this.x : x;
    y = y === VOID ? this.y : y;
    z = z === VOID ? this.z : z;
    sensorSpecificData = sensorSpecificData === VOID ? this.v1h_1 : sensorSpecificData;
    return this.r1h(x, y, z, sensorSpecificData);
  };
  protoOf(AngularVelocity).toString = function () {
    return 'AngularVelocity(x=' + this.x + ', y=' + this.y + ', z=' + this.z + ', sensorSpecificData=' + this.v1h_1 + ')';
  };
  protoOf(AngularVelocity).hashCode = function () {
    var result = getNumberHashCode(this.x);
    result = imul(result, 31) + getNumberHashCode(this.y) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z) | 0;
    result = imul(result, 31) + (this.v1h_1 == null ? 0 : hashCode(this.v1h_1)) | 0;
    return result;
  };
  protoOf(AngularVelocity).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AngularVelocity))
      return false;
    var tmp0_other_with_cast = other instanceof AngularVelocity ? other : THROW_CCE();
    if (!equals(this.x, tmp0_other_with_cast.x))
      return false;
    if (!equals(this.y, tmp0_other_with_cast.y))
      return false;
    if (!equals(this.z, tmp0_other_with_cast.z))
      return false;
    if (!equals(this.v1h_1, tmp0_other_with_cast.v1h_1))
      return false;
    return true;
  };
  function CarpDataTypes() {
    CarpDataTypes_instance = this;
    DataTypeMetaDataMap.call(this);
    this.CARP_NAMESPACE = 'dk.cachet.carp';
    this.y1h_1 = 'dk.cachet.carp.geolocation';
    this.GEOLOCATION = this.add('dk.cachet.carp.geolocation', 'Geolocation', DataTimeType_POINT_getInstance());
    this.z1h_1 = 'dk.cachet.carp.stepcount';
    this.STEP_COUNT = this.add('dk.cachet.carp.stepcount', 'Step count', DataTimeType_TIME_SPAN_getInstance());
    this.a1i_1 = 'dk.cachet.carp.ecg';
    this.ECG = this.add('dk.cachet.carp.ecg', 'Electrocardiography (ECG)', DataTimeType_POINT_getInstance());
    this.b1i_1 = 'dk.cachet.carp.ppg';
    this.PPG = this.add('dk.cachet.carp.ppg', 'Photoplethysmography (PPG)', DataTimeType_POINT_getInstance());
    this.c1i_1 = 'dk.cachet.carp.heartrate';
    this.HEART_RATE = this.add('dk.cachet.carp.heartrate', 'Heart rate', DataTimeType_POINT_getInstance());
    this.d1i_1 = 'dk.cachet.carp.interbeatinterval';
    this.INTERBEAT_INTERVAL = this.add('dk.cachet.carp.interbeatinterval', 'Interbeat interval', DataTimeType_TIME_SPAN_getInstance());
    this.e1i_1 = 'dk.cachet.carp.sensorskincontact';
    this.SENSOR_SKIN_CONTACT = this.add('dk.cachet.carp.sensorskincontact', 'Sensor skin contact', DataTimeType_POINT_getInstance());
    this.f1i_1 = 'dk.cachet.carp.nongravitationalacceleration';
    this.NON_GRAVITATIONAL_ACCELERATION = this.add('dk.cachet.carp.nongravitationalacceleration', 'Acceleration without gravity', DataTimeType_POINT_getInstance());
    this.g1i_1 = 'dk.cachet.carp.eda';
    this.EDA = this.add('dk.cachet.carp.eda', 'Electrodermal activity', DataTimeType_POINT_getInstance());
    this.h1i_1 = 'dk.cachet.carp.acceleration';
    this.ACCELERATION = this.add('dk.cachet.carp.acceleration', 'Acceleration including gravity', DataTimeType_POINT_getInstance());
    this.i1i_1 = 'dk.cachet.carp.angularvelocity';
    this.ANGULAR_VELOCITY = this.add('dk.cachet.carp.angularvelocity', 'Angular velocity', DataTimeType_POINT_getInstance());
    this.j1i_1 = 'dk.cachet.carp.signalstrength';
    this.SIGNAL_STRENGTH = this.add('dk.cachet.carp.signalstrength', 'Signal strength', DataTimeType_POINT_getInstance());
    this.k1i_1 = 'dk.cachet.carp.triggeredtask';
    this.TRIGGERED_TASK = this.add('dk.cachet.carp.triggeredtask', 'Triggered task', DataTimeType_POINT_getInstance());
    this.l1i_1 = 'dk.cachet.carp.completedtask';
    this.COMPLETED_TASK = this.add('dk.cachet.carp.completedtask', 'Completed task', DataTimeType_TIME_SPAN_getInstance());
  }
  protoOf(CarpDataTypes).m1i = function () {
    return this.CARP_NAMESPACE;
  };
  protoOf(CarpDataTypes).n1i = function () {
    return this.y1h_1;
  };
  protoOf(CarpDataTypes).o1i = function () {
    return this.GEOLOCATION;
  };
  protoOf(CarpDataTypes).p1i = function () {
    return this.z1h_1;
  };
  protoOf(CarpDataTypes).q1i = function () {
    return this.STEP_COUNT;
  };
  protoOf(CarpDataTypes).r1i = function () {
    return this.a1i_1;
  };
  protoOf(CarpDataTypes).s1i = function () {
    return this.ECG;
  };
  protoOf(CarpDataTypes).t1i = function () {
    return this.b1i_1;
  };
  protoOf(CarpDataTypes).u1i = function () {
    return this.PPG;
  };
  protoOf(CarpDataTypes).v1i = function () {
    return this.c1i_1;
  };
  protoOf(CarpDataTypes).w1i = function () {
    return this.HEART_RATE;
  };
  protoOf(CarpDataTypes).x1i = function () {
    return this.d1i_1;
  };
  protoOf(CarpDataTypes).y1i = function () {
    return this.INTERBEAT_INTERVAL;
  };
  protoOf(CarpDataTypes).z1i = function () {
    return this.e1i_1;
  };
  protoOf(CarpDataTypes).a1j = function () {
    return this.SENSOR_SKIN_CONTACT;
  };
  protoOf(CarpDataTypes).b1j = function () {
    return this.f1i_1;
  };
  protoOf(CarpDataTypes).c1j = function () {
    return this.NON_GRAVITATIONAL_ACCELERATION;
  };
  protoOf(CarpDataTypes).d1j = function () {
    return this.g1i_1;
  };
  protoOf(CarpDataTypes).e1j = function () {
    return this.EDA;
  };
  protoOf(CarpDataTypes).f1j = function () {
    return this.h1i_1;
  };
  protoOf(CarpDataTypes).g1j = function () {
    return this.ACCELERATION;
  };
  protoOf(CarpDataTypes).h1j = function () {
    return this.i1i_1;
  };
  protoOf(CarpDataTypes).i1j = function () {
    return this.ANGULAR_VELOCITY;
  };
  protoOf(CarpDataTypes).j1j = function () {
    return this.j1i_1;
  };
  protoOf(CarpDataTypes).k1j = function () {
    return this.SIGNAL_STRENGTH;
  };
  protoOf(CarpDataTypes).l1j = function () {
    return this.k1i_1;
  };
  protoOf(CarpDataTypes).m1j = function () {
    return this.TRIGGERED_TASK;
  };
  protoOf(CarpDataTypes).n1j = function () {
    return this.l1i_1;
  };
  protoOf(CarpDataTypes).o1j = function () {
    return this.COMPLETED_TASK;
  };
  var CarpDataTypes_instance;
  function CarpDataTypes_getInstance() {
    if (CarpDataTypes_instance == null)
      new CarpDataTypes();
    return CarpDataTypes_instance;
  }
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p1j_1 = [null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_10).m16 = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.completedtask', this, 2);
    tmp0_serialDesc.nt('taskName', false);
    tmp0_serialDesc.nt('taskData', true);
    this.q1j_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).pi = function () {
    return this.q1j_1;
  };
  protoOf($serializer_3).cu = function () {
    var tmp0_cached = Companion_getInstance_11().p1j_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(tmp0_cached[1])];
  };
  protoOf($serializer_3).ri = function (decoder) {
    var tmp0_desc = this.q1j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_11().p1j_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.hm(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.hm(tmp0_desc, 0);
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
    return CompletedTask_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).r1j = function (encoder, value) {
    var tmp0_desc = this.q1j_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().p1j_1;
    tmp1_output.nn(tmp0_desc, 0, value.taskName);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.taskData == null)) {
      tmp1_output.rn(tmp0_desc, 1, tmp2_cached[1], value.taskData);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_3).qi = function (encoder, value) {
    return this.r1j(encoder, value instanceof CompletedTask ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function CompletedTask_init_$Init$(seen1, taskName, taskData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_3().q1j_1);
    }
    $this.taskName = taskName;
    if (0 === (seen1 & 2))
      $this.taskData = null;
    else
      $this.taskData = taskData;
    return $this;
  }
  function CompletedTask_init_$Create$(seen1, taskName, taskData, serializationConstructorMarker) {
    return CompletedTask_init_$Init$(seen1, taskName, taskData, serializationConstructorMarker, objectCreate(protoOf(CompletedTask)));
  }
  function CompletedTask(taskName, taskData) {
    Companion_getInstance_11();
    taskData = taskData === VOID ? null : taskData;
    this.taskName = taskName;
    this.taskData = taskData;
  }
  protoOf(CompletedTask).s1j = function () {
    return this.taskName;
  };
  protoOf(CompletedTask).t1j = function () {
    return this.taskData;
  };
  protoOf(CompletedTask).od = function () {
    return this.taskName;
  };
  protoOf(CompletedTask).pd = function () {
    return this.taskData;
  };
  protoOf(CompletedTask).u1j = function (taskName, taskData) {
    return new CompletedTask(taskName, taskData);
  };
  protoOf(CompletedTask).copy = function (taskName, taskData, $super) {
    taskName = taskName === VOID ? this.taskName : taskName;
    taskData = taskData === VOID ? this.taskData : taskData;
    return this.u1j(taskName, taskData);
  };
  protoOf(CompletedTask).toString = function () {
    return 'CompletedTask(taskName=' + this.taskName + ', taskData=' + this.taskData + ')';
  };
  protoOf(CompletedTask).hashCode = function () {
    var result = getStringHashCode(this.taskName);
    result = imul(result, 31) + (this.taskData == null ? 0 : hashCode(this.taskData)) | 0;
    return result;
  };
  protoOf(CompletedTask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedTask))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedTask ? other : THROW_CCE();
    if (!(this.taskName === tmp0_other_with_cast.taskName))
      return false;
    if (!equals(this.taskData, tmp0_other_with_cast.taskData))
      return false;
    return true;
  };
  function Data() {
  }
  function SensorData() {
  }
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.v1j_1.r2();
  }
  function NoData$_anonymous__smq75g() {
    var tmp = NoData_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer_init_$Create$('dk.cachet.carp.common.application.data.NoData', tmp, tmp$ret$2);
  }
  function NoData() {
    NoData_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v1j_1 = lazy(tmp_0, NoData$_anonymous__smq75g);
  }
  protoOf(NoData).m16 = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(NoData).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var NoData_instance;
  function NoData_getInstance() {
    if (NoData_instance == null)
      new NoData();
    return NoData_instance;
  }
  function DataTypeMetaData(type, displayName, timeType) {
    this.type = type;
    this.displayName = displayName;
    this.timeType = timeType;
  }
  protoOf(DataTypeMetaData).w1j = function () {
    return this.type;
  };
  protoOf(DataTypeMetaData).x1j = function () {
    return this.displayName;
  };
  protoOf(DataTypeMetaData).y1j = function () {
    return this.timeType;
  };
  protoOf(DataTypeMetaData).od = function () {
    return this.type;
  };
  protoOf(DataTypeMetaData).pd = function () {
    return this.displayName;
  };
  protoOf(DataTypeMetaData).r1g = function () {
    return this.timeType;
  };
  protoOf(DataTypeMetaData).z1j = function (type, displayName, timeType) {
    return new DataTypeMetaData(type, displayName, timeType);
  };
  protoOf(DataTypeMetaData).copy = function (type, displayName, timeType, $super) {
    type = type === VOID ? this.type : type;
    displayName = displayName === VOID ? this.displayName : displayName;
    timeType = timeType === VOID ? this.timeType : timeType;
    return this.z1j(type, displayName, timeType);
  };
  protoOf(DataTypeMetaData).toString = function () {
    return 'DataTypeMetaData(type=' + this.type + ', displayName=' + this.displayName + ', timeType=' + this.timeType + ')';
  };
  protoOf(DataTypeMetaData).hashCode = function () {
    var result = this.type.hashCode();
    result = imul(result, 31) + getStringHashCode(this.displayName) | 0;
    result = imul(result, 31) + this.timeType.hashCode() | 0;
    return result;
  };
  protoOf(DataTypeMetaData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataTypeMetaData))
      return false;
    var tmp0_other_with_cast = other instanceof DataTypeMetaData ? other : THROW_CCE();
    if (!this.type.equals(tmp0_other_with_cast.type))
      return false;
    if (!(this.displayName === tmp0_other_with_cast.displayName))
      return false;
    if (!this.timeType.equals(tmp0_other_with_cast.timeType))
      return false;
    return true;
  };
  var DataTimeType_POINT_instance;
  var DataTimeType_TIME_SPAN_instance;
  function values_1() {
    return [DataTimeType_POINT_getInstance(), DataTimeType_TIME_SPAN_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'POINT':
        return DataTimeType_POINT_getInstance();
      case 'TIME_SPAN':
        return DataTimeType_TIME_SPAN_getInstance();
      default:
        DataTimeType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var DataTimeType_entriesInitialized;
  function DataTimeType_initEntries() {
    if (DataTimeType_entriesInitialized)
      return Unit_instance;
    DataTimeType_entriesInitialized = true;
    DataTimeType_POINT_instance = new DataTimeType('POINT', 0);
    DataTimeType_TIME_SPAN_instance = new DataTimeType('TIME_SPAN', 1);
  }
  function DataTimeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DataTimeType_POINT_getInstance() {
    DataTimeType_initEntries();
    return DataTimeType_POINT_instance;
  }
  function DataTimeType_TIME_SPAN_getInstance() {
    DataTimeType_initEntries();
    return DataTimeType_TIME_SPAN_instance;
  }
  function DataTypeMetaDataMap$_init_$lambda_4mr1r2(metaData) {
    return metaData.type;
  }
  function DataTypeMetaDataMap() {
    EnumObjectMap_init_$Init$(DataTypeMetaDataMap$_init_$lambda_4mr1r2, this);
  }
  protoOf(DataTypeMetaDataMap).add = function (fullyQualifiedName, displayName, timeType) {
    return protoOf(EnumObjectMap).m1f.call(this, new DataTypeMetaData(Companion_instance_2.fromString(fullyQualifiedName), displayName, timeType));
  };
  function Companion_11() {
    Companion_instance_12 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c1k_1 = [null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_11).m16 = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.ecg', this, 2);
    tmp0_serialDesc.nt('milliVolt', false);
    tmp0_serialDesc.nt('sensorSpecificData', true);
    this.d1k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).pi = function () {
    return this.d1k_1;
  };
  protoOf($serializer_4).cu = function () {
    var tmp0_cached = Companion_getInstance_12().c1k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), get_nullable(tmp0_cached[1])];
  };
  protoOf($serializer_4).ri = function (decoder) {
    var tmp0_desc = this.d1k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_12().c1k_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.fm(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.fm(tmp0_desc, 0);
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
    return ECG_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).e1k = function (encoder, value) {
    var tmp0_desc = this.d1k_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().c1k_1;
    tmp1_output.ln(tmp0_desc, 0, value.milliVolt);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.f1k_1 == null)) {
      tmp1_output.rn(tmp0_desc, 1, tmp2_cached[1], value.f1k_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_4).qi = function (encoder, value) {
    return this.e1k(encoder, value instanceof ECG ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function ECG_init_$Init$(seen1, milliVolt, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_4().d1k_1);
    }
    $this.milliVolt = milliVolt;
    if (0 === (seen1 & 2))
      $this.f1k_1 = null;
    else
      $this.f1k_1 = sensorSpecificData;
    return $this;
  }
  function ECG_init_$Create$(seen1, milliVolt, sensorSpecificData, serializationConstructorMarker) {
    return ECG_init_$Init$(seen1, milliVolt, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(ECG)));
  }
  function ECG(milliVolt, sensorSpecificData) {
    Companion_getInstance_12();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.milliVolt = milliVolt;
    this.f1k_1 = sensorSpecificData;
  }
  protoOf(ECG).g1k = function () {
    return this.milliVolt;
  };
  protoOf(ECG).p1h = function () {
    return this.f1k_1;
  };
  protoOf(ECG).od = function () {
    return this.milliVolt;
  };
  protoOf(ECG).pd = function () {
    return this.f1k_1;
  };
  protoOf(ECG).h1k = function (milliVolt, sensorSpecificData) {
    return new ECG(milliVolt, sensorSpecificData);
  };
  protoOf(ECG).copy = function (milliVolt, sensorSpecificData, $super) {
    milliVolt = milliVolt === VOID ? this.milliVolt : milliVolt;
    sensorSpecificData = sensorSpecificData === VOID ? this.f1k_1 : sensorSpecificData;
    return this.h1k(milliVolt, sensorSpecificData);
  };
  protoOf(ECG).toString = function () {
    return 'ECG(milliVolt=' + this.milliVolt + ', sensorSpecificData=' + this.f1k_1 + ')';
  };
  protoOf(ECG).hashCode = function () {
    var result = getNumberHashCode(this.milliVolt);
    result = imul(result, 31) + (this.f1k_1 == null ? 0 : hashCode(this.f1k_1)) | 0;
    return result;
  };
  protoOf(ECG).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ECG))
      return false;
    var tmp0_other_with_cast = other instanceof ECG ? other : THROW_CCE();
    if (!equals(this.milliVolt, tmp0_other_with_cast.milliVolt))
      return false;
    if (!equals(this.f1k_1, tmp0_other_with_cast.f1k_1))
      return false;
    return true;
  };
  function Companion_12() {
    Companion_instance_13 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i1k_1 = [null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_12).m16 = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.eda', this, 2);
    tmp0_serialDesc.nt('microSiemens', false);
    tmp0_serialDesc.nt('sensorSpecificData', true);
    this.j1k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).pi = function () {
    return this.j1k_1;
  };
  protoOf($serializer_5).cu = function () {
    var tmp0_cached = Companion_getInstance_13().i1k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), get_nullable(tmp0_cached[1])];
  };
  protoOf($serializer_5).ri = function (decoder) {
    var tmp0_desc = this.j1k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_13().i1k_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.fm(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.fm(tmp0_desc, 0);
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
    return EDA_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_5).k1k = function (encoder, value) {
    var tmp0_desc = this.j1k_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().i1k_1;
    tmp1_output.ln(tmp0_desc, 0, value.microSiemens);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.l1k_1 == null)) {
      tmp1_output.rn(tmp0_desc, 1, tmp2_cached[1], value.l1k_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_5).qi = function (encoder, value) {
    return this.k1k(encoder, value instanceof EDA ? value : THROW_CCE());
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function EDA_init_$Init$(seen1, microSiemens, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_5().j1k_1);
    }
    $this.microSiemens = microSiemens;
    if (0 === (seen1 & 2))
      $this.l1k_1 = null;
    else
      $this.l1k_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.microSiemens >= 0.0)) {
      // Inline function 'dk.cachet.carp.common.application.data.EDA.<init>.<anonymous>' call
      var message = 'EDA conductance in microsiemens needs to be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function EDA_init_$Create$(seen1, microSiemens, sensorSpecificData, serializationConstructorMarker) {
    return EDA_init_$Init$(seen1, microSiemens, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(EDA)));
  }
  function EDA(microSiemens, sensorSpecificData) {
    Companion_getInstance_13();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.microSiemens = microSiemens;
    this.l1k_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.microSiemens >= 0.0)) {
      // Inline function 'dk.cachet.carp.common.application.data.EDA.<anonymous>' call
      var message = 'EDA conductance in microsiemens needs to be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(EDA).m1k = function () {
    return this.microSiemens;
  };
  protoOf(EDA).p1h = function () {
    return this.l1k_1;
  };
  protoOf(EDA).od = function () {
    return this.microSiemens;
  };
  protoOf(EDA).pd = function () {
    return this.l1k_1;
  };
  protoOf(EDA).h1k = function (microSiemens, sensorSpecificData) {
    return new EDA(microSiemens, sensorSpecificData);
  };
  protoOf(EDA).copy = function (microSiemens, sensorSpecificData, $super) {
    microSiemens = microSiemens === VOID ? this.microSiemens : microSiemens;
    sensorSpecificData = sensorSpecificData === VOID ? this.l1k_1 : sensorSpecificData;
    return this.h1k(microSiemens, sensorSpecificData);
  };
  protoOf(EDA).toString = function () {
    return 'EDA(microSiemens=' + this.microSiemens + ', sensorSpecificData=' + this.l1k_1 + ')';
  };
  protoOf(EDA).hashCode = function () {
    var result = getNumberHashCode(this.microSiemens);
    result = imul(result, 31) + (this.l1k_1 == null ? 0 : hashCode(this.l1k_1)) | 0;
    return result;
  };
  protoOf(EDA).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EDA))
      return false;
    var tmp0_other_with_cast = other instanceof EDA ? other : THROW_CCE();
    if (!equals(this.microSiemens, tmp0_other_with_cast.microSiemens))
      return false;
    if (!equals(this.l1k_1, tmp0_other_with_cast.l1k_1))
      return false;
    return true;
  };
  function Companion_13() {
    Companion_instance_14 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n1k_1 = [null, null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
    this.MIN_LATITUDE = -90.0;
    this.MAX_LATITUDE = 90.0;
    this.MIN_LONGITUDE = -180.0;
    this.MAX_LONGITUDE = 180.0;
  }
  protoOf(Companion_13).o1k = function () {
    return this.MIN_LATITUDE;
  };
  protoOf(Companion_13).p1k = function () {
    return this.MAX_LATITUDE;
  };
  protoOf(Companion_13).q1k = function () {
    return this.MIN_LONGITUDE;
  };
  protoOf(Companion_13).r1k = function () {
    return this.MAX_LONGITUDE;
  };
  protoOf(Companion_13).m16 = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.geolocation', this, 3);
    tmp0_serialDesc.nt('latitude', false);
    tmp0_serialDesc.nt('longitude', false);
    tmp0_serialDesc.nt('sensorSpecificData', true);
    this.s1k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).pi = function () {
    return this.s1k_1;
  };
  protoOf($serializer_6).cu = function () {
    var tmp0_cached = Companion_getInstance_14().n1k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(tmp0_cached[2])];
  };
  protoOf($serializer_6).ri = function (decoder) {
    var tmp0_desc = this.s1k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    var tmp8_cached = Companion_getInstance_14().n1k_1;
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.fm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.fm(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.fm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.fm(tmp0_desc, 1);
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
    return Geolocation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).t1k = function (encoder, value) {
    var tmp0_desc = this.s1k_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().n1k_1;
    tmp1_output.ln(tmp0_desc, 0, value.latitude);
    tmp1_output.ln(tmp0_desc, 1, value.longitude);
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.u1k_1 == null)) {
      tmp1_output.rn(tmp0_desc, 2, tmp2_cached[2], value.u1k_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_6).qi = function (encoder, value) {
    return this.t1k(encoder, value instanceof Geolocation ? value : THROW_CCE());
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function Geolocation_init_$Init$(seen1, latitude, longitude, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_6().s1k_1);
    }
    $this.latitude = latitude;
    $this.longitude = longitude;
    if (0 === (seen1 & 4))
      $this.u1k_1 = null;
    else
      $this.u1k_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    var containsArg = $this.latitude;
    // Inline function 'kotlin.contracts.contract' call
    if (!(-90.0 <= containsArg ? containsArg <= 90.0 : false)) {
      // Inline function 'dk.cachet.carp.common.application.data.Geolocation.<init>.<anonymous>' call
      var message = 'Latitude needs to lie between -90 and 90 decimal degrees.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var containsArg_0 = $this.longitude;
    // Inline function 'kotlin.contracts.contract' call
    if (!(-180.0 <= containsArg_0 ? containsArg_0 <= 180.0 : false)) {
      // Inline function 'dk.cachet.carp.common.application.data.Geolocation.<init>.<anonymous>' call
      var message_0 = 'Longitude needs to lie between -180 and 180 decimal degrees.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return $this;
  }
  function Geolocation_init_$Create$(seen1, latitude, longitude, sensorSpecificData, serializationConstructorMarker) {
    return Geolocation_init_$Init$(seen1, latitude, longitude, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(Geolocation)));
  }
  function Geolocation(latitude, longitude, sensorSpecificData) {
    Companion_getInstance_14();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.latitude = latitude;
    this.longitude = longitude;
    this.u1k_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    var containsArg = this.latitude;
    // Inline function 'kotlin.contracts.contract' call
    if (!(-90.0 <= containsArg ? containsArg <= 90.0 : false)) {
      // Inline function 'dk.cachet.carp.common.application.data.Geolocation.<anonymous>' call
      var message = 'Latitude needs to lie between -90 and 90 decimal degrees.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var containsArg_0 = this.longitude;
    // Inline function 'kotlin.contracts.contract' call
    if (!(-180.0 <= containsArg_0 ? containsArg_0 <= 180.0 : false)) {
      // Inline function 'dk.cachet.carp.common.application.data.Geolocation.<anonymous>' call
      var message_0 = 'Longitude needs to lie between -180 and 180 decimal degrees.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(Geolocation).v1k = function () {
    return this.latitude;
  };
  protoOf(Geolocation).w1k = function () {
    return this.longitude;
  };
  protoOf(Geolocation).p1h = function () {
    return this.u1k_1;
  };
  protoOf(Geolocation).od = function () {
    return this.latitude;
  };
  protoOf(Geolocation).pd = function () {
    return this.longitude;
  };
  protoOf(Geolocation).r1g = function () {
    return this.u1k_1;
  };
  protoOf(Geolocation).x1k = function (latitude, longitude, sensorSpecificData) {
    return new Geolocation(latitude, longitude, sensorSpecificData);
  };
  protoOf(Geolocation).copy = function (latitude, longitude, sensorSpecificData, $super) {
    latitude = latitude === VOID ? this.latitude : latitude;
    longitude = longitude === VOID ? this.longitude : longitude;
    sensorSpecificData = sensorSpecificData === VOID ? this.u1k_1 : sensorSpecificData;
    return this.x1k(latitude, longitude, sensorSpecificData);
  };
  protoOf(Geolocation).toString = function () {
    return 'Geolocation(latitude=' + this.latitude + ', longitude=' + this.longitude + ', sensorSpecificData=' + this.u1k_1 + ')';
  };
  protoOf(Geolocation).hashCode = function () {
    var result = getNumberHashCode(this.latitude);
    result = imul(result, 31) + getNumberHashCode(this.longitude) | 0;
    result = imul(result, 31) + (this.u1k_1 == null ? 0 : hashCode(this.u1k_1)) | 0;
    return result;
  };
  protoOf(Geolocation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Geolocation))
      return false;
    var tmp0_other_with_cast = other instanceof Geolocation ? other : THROW_CCE();
    if (!equals(this.latitude, tmp0_other_with_cast.latitude))
      return false;
    if (!equals(this.longitude, tmp0_other_with_cast.longitude))
      return false;
    if (!equals(this.u1k_1, tmp0_other_with_cast.u1k_1))
      return false;
    return true;
  };
  function Companion_14() {
    Companion_instance_15 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y1k_1 = [null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_14).m16 = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_14();
    return Companion_instance_15;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.heartrate', this, 2);
    tmp0_serialDesc.nt('bpm', false);
    tmp0_serialDesc.nt('sensorSpecificData', true);
    this.z1k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).pi = function () {
    return this.z1k_1;
  };
  protoOf($serializer_7).cu = function () {
    var tmp0_cached = Companion_getInstance_15().y1k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), get_nullable(tmp0_cached[1])];
  };
  protoOf($serializer_7).ri = function (decoder) {
    var tmp0_desc = this.z1k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_15().y1k_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.cm(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.cm(tmp0_desc, 0);
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
    return HeartRate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_7).a1l = function (encoder, value) {
    var tmp0_desc = this.z1k_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().y1k_1;
    tmp1_output.in(tmp0_desc, 0, value.bpm);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.b1l_1 == null)) {
      tmp1_output.rn(tmp0_desc, 1, tmp2_cached[1], value.b1l_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_7).qi = function (encoder, value) {
    return this.a1l(encoder, value instanceof HeartRate ? value : THROW_CCE());
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function HeartRate_init_$Init$(seen1, bpm, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_7().z1k_1);
    }
    $this.bpm = bpm;
    if (0 === (seen1 & 2))
      $this.b1l_1 = null;
    else
      $this.b1l_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.bpm >= 0)) {
      // Inline function 'dk.cachet.carp.common.application.data.HeartRate.<init>.<anonymous>' call
      var message = 'Beats per minute needs to be a positive number.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function HeartRate_init_$Create$(seen1, bpm, sensorSpecificData, serializationConstructorMarker) {
    return HeartRate_init_$Init$(seen1, bpm, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(HeartRate)));
  }
  function HeartRate(bpm, sensorSpecificData) {
    Companion_getInstance_15();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.bpm = bpm;
    this.b1l_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.bpm >= 0)) {
      // Inline function 'dk.cachet.carp.common.application.data.HeartRate.<anonymous>' call
      var message = 'Beats per minute needs to be a positive number.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(HeartRate).c1l = function () {
    return this.bpm;
  };
  protoOf(HeartRate).p1h = function () {
    return this.b1l_1;
  };
  protoOf(HeartRate).od = function () {
    return this.bpm;
  };
  protoOf(HeartRate).pd = function () {
    return this.b1l_1;
  };
  protoOf(HeartRate).d1l = function (bpm, sensorSpecificData) {
    return new HeartRate(bpm, sensorSpecificData);
  };
  protoOf(HeartRate).copy = function (bpm, sensorSpecificData, $super) {
    bpm = bpm === VOID ? this.bpm : bpm;
    sensorSpecificData = sensorSpecificData === VOID ? this.b1l_1 : sensorSpecificData;
    return this.d1l(bpm, sensorSpecificData);
  };
  protoOf(HeartRate).toString = function () {
    return 'HeartRate(bpm=' + this.bpm + ', sensorSpecificData=' + this.b1l_1 + ')';
  };
  protoOf(HeartRate).hashCode = function () {
    var result = this.bpm;
    result = imul(result, 31) + (this.b1l_1 == null ? 0 : hashCode(this.b1l_1)) | 0;
    return result;
  };
  protoOf(HeartRate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeartRate))
      return false;
    var tmp0_other_with_cast = other instanceof HeartRate ? other : THROW_CCE();
    if (!(this.bpm === tmp0_other_with_cast.bpm))
      return false;
    if (!equals(this.b1l_1, tmp0_other_with_cast.b1l_1))
      return false;
    return true;
  };
  function Companion_15() {
    Companion_instance_16 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e1l_1 = [PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_15).m16 = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.interbeatinterval', this, 1);
    tmp0_serialDesc.nt('sensorSpecificData', true);
    this.f1l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).pi = function () {
    return this.f1l_1;
  };
  protoOf($serializer_8).cu = function () {
    var tmp0_cached = Companion_getInstance_16().e1l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0])];
  };
  protoOf($serializer_8).ri = function (decoder) {
    var tmp0_desc = this.f1l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xl(tmp0_desc);
    var tmp6_cached = Companion_getInstance_16().e1l_1;
    if (tmp5_input.om()) {
      tmp4_local0 = tmp5_input.lm(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.lm(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yl(tmp0_desc);
    return InterbeatInterval_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_8).g1l = function (encoder, value) {
    var tmp0_desc = this.f1l_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().e1l_1;
    if (tmp1_output.vn(tmp0_desc, 0) ? true : !(value.h1l_1 == null)) {
      tmp1_output.rn(tmp0_desc, 0, tmp2_cached[0], value.h1l_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_8).qi = function (encoder, value) {
    return this.g1l(encoder, value instanceof InterbeatInterval ? value : THROW_CCE());
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function InterbeatInterval_init_$Init$(seen1, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_8().f1l_1);
    }
    if (0 === (seen1 & 1))
      $this.h1l_1 = null;
    else
      $this.h1l_1 = sensorSpecificData;
    return $this;
  }
  function InterbeatInterval_init_$Create$(seen1, sensorSpecificData, serializationConstructorMarker) {
    return InterbeatInterval_init_$Init$(seen1, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(InterbeatInterval)));
  }
  function InterbeatInterval(sensorSpecificData) {
    Companion_getInstance_16();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.h1l_1 = sensorSpecificData;
  }
  protoOf(InterbeatInterval).p1h = function () {
    return this.h1l_1;
  };
  protoOf(InterbeatInterval).od = function () {
    return this.h1l_1;
  };
  protoOf(InterbeatInterval).i1l = function (sensorSpecificData) {
    return new InterbeatInterval(sensorSpecificData);
  };
  protoOf(InterbeatInterval).copy = function (sensorSpecificData, $super) {
    sensorSpecificData = sensorSpecificData === VOID ? this.h1l_1 : sensorSpecificData;
    return this.i1l(sensorSpecificData);
  };
  protoOf(InterbeatInterval).toString = function () {
    return 'InterbeatInterval(sensorSpecificData=' + this.h1l_1 + ')';
  };
  protoOf(InterbeatInterval).hashCode = function () {
    return this.h1l_1 == null ? 0 : hashCode(this.h1l_1);
  };
  protoOf(InterbeatInterval).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InterbeatInterval))
      return false;
    var tmp0_other_with_cast = other instanceof InterbeatInterval ? other : THROW_CCE();
    if (!equals(this.h1l_1, tmp0_other_with_cast.h1l_1))
      return false;
    return true;
  };
  function Companion_16() {
    Companion_instance_17 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j1l_1 = [null, null, null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_16).m16 = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_16();
    return Companion_instance_17;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.nongravitationalacceleration', this, 4);
    tmp0_serialDesc.nt('x', false);
    tmp0_serialDesc.nt('y', false);
    tmp0_serialDesc.nt('z', false);
    tmp0_serialDesc.nt('sensorSpecificData', true);
    this.k1l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).pi = function () {
    return this.k1l_1;
  };
  protoOf($serializer_9).cu = function () {
    var tmp0_cached = Companion_getInstance_17().j1l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(tmp0_cached[3])];
  };
  protoOf($serializer_9).ri = function (decoder) {
    var tmp0_desc = this.k1l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_17().j1l_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.fm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.fm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.fm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.lm(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.fm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.fm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.fm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.lm(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return NonGravitationalAcceleration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_9).l1l = function (encoder, value) {
    var tmp0_desc = this.k1l_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_17().j1l_1;
    tmp1_output.ln(tmp0_desc, 0, value.x);
    tmp1_output.ln(tmp0_desc, 1, value.y);
    tmp1_output.ln(tmp0_desc, 2, value.z);
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !(value.m1l_1 == null)) {
      tmp1_output.rn(tmp0_desc, 3, tmp2_cached[3], value.m1l_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_9).qi = function (encoder, value) {
    return this.l1l(encoder, value instanceof NonGravitationalAcceleration ? value : THROW_CCE());
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function NonGravitationalAcceleration_init_$Init$(seen1, x, y, z, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_9().k1l_1);
    }
    $this.x = x;
    $this.y = y;
    $this.z = z;
    if (0 === (seen1 & 8))
      $this.m1l_1 = null;
    else
      $this.m1l_1 = sensorSpecificData;
    return $this;
  }
  function NonGravitationalAcceleration_init_$Create$(seen1, x, y, z, sensorSpecificData, serializationConstructorMarker) {
    return NonGravitationalAcceleration_init_$Init$(seen1, x, y, z, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(NonGravitationalAcceleration)));
  }
  function NonGravitationalAcceleration(x, y, z, sensorSpecificData) {
    Companion_getInstance_17();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.x = x;
    this.y = y;
    this.z = z;
    this.m1l_1 = sensorSpecificData;
  }
  protoOf(NonGravitationalAcceleration).m1h = function () {
    return this.x;
  };
  protoOf(NonGravitationalAcceleration).n1h = function () {
    return this.y;
  };
  protoOf(NonGravitationalAcceleration).o1h = function () {
    return this.z;
  };
  protoOf(NonGravitationalAcceleration).p1h = function () {
    return this.m1l_1;
  };
  protoOf(NonGravitationalAcceleration).od = function () {
    return this.x;
  };
  protoOf(NonGravitationalAcceleration).pd = function () {
    return this.y;
  };
  protoOf(NonGravitationalAcceleration).r1g = function () {
    return this.z;
  };
  protoOf(NonGravitationalAcceleration).q1h = function () {
    return this.m1l_1;
  };
  protoOf(NonGravitationalAcceleration).r1h = function (x, y, z, sensorSpecificData) {
    return new NonGravitationalAcceleration(x, y, z, sensorSpecificData);
  };
  protoOf(NonGravitationalAcceleration).copy = function (x, y, z, sensorSpecificData, $super) {
    x = x === VOID ? this.x : x;
    y = y === VOID ? this.y : y;
    z = z === VOID ? this.z : z;
    sensorSpecificData = sensorSpecificData === VOID ? this.m1l_1 : sensorSpecificData;
    return this.r1h(x, y, z, sensorSpecificData);
  };
  protoOf(NonGravitationalAcceleration).toString = function () {
    return 'NonGravitationalAcceleration(x=' + this.x + ', y=' + this.y + ', z=' + this.z + ', sensorSpecificData=' + this.m1l_1 + ')';
  };
  protoOf(NonGravitationalAcceleration).hashCode = function () {
    var result = getNumberHashCode(this.x);
    result = imul(result, 31) + getNumberHashCode(this.y) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z) | 0;
    result = imul(result, 31) + (this.m1l_1 == null ? 0 : hashCode(this.m1l_1)) | 0;
    return result;
  };
  protoOf(NonGravitationalAcceleration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NonGravitationalAcceleration))
      return false;
    var tmp0_other_with_cast = other instanceof NonGravitationalAcceleration ? other : THROW_CCE();
    if (!equals(this.x, tmp0_other_with_cast.x))
      return false;
    if (!equals(this.y, tmp0_other_with_cast.y))
      return false;
    if (!equals(this.z, tmp0_other_with_cast.z))
      return false;
    if (!equals(this.m1l_1, tmp0_other_with_cast.m1l_1))
      return false;
    return true;
  };
  function Companion_17() {
    Companion_instance_18 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = new LinkedHashMapSerializer(StringSerializer_getInstance(), DoubleSerializer_getInstance());
    var tmp_1 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n1l_1 = [tmp_0, PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$2)];
  }
  protoOf(Companion_17).m16 = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.ppg', this, 2);
    tmp0_serialDesc.nt('lightSources', false);
    tmp0_serialDesc.nt('sensorSpecificData', true);
    this.o1l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).pi = function () {
    return this.o1l_1;
  };
  protoOf($serializer_10).cu = function () {
    var tmp0_cached = Companion_getInstance_18().n1l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], get_nullable(tmp0_cached[1])];
  };
  protoOf($serializer_10).ri = function (decoder) {
    var tmp0_desc = this.o1l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_18().n1l_1;
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
    return PPG_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_10).p1l = function (encoder, value) {
    var tmp0_desc = this.o1l_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_18().n1l_1;
    tmp1_output.pn(tmp0_desc, 0, tmp2_cached[0], value.lightSources);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.q1l_1 == null)) {
      tmp1_output.rn(tmp0_desc, 1, tmp2_cached[1], value.q1l_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_10).qi = function (encoder, value) {
    return this.p1l(encoder, value instanceof PPG ? value : THROW_CCE());
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function PPG_init_$Init$(seen1, lightSources, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_10().o1l_1);
    }
    $this.lightSources = lightSources;
    if (0 === (seen1 & 2))
      $this.q1l_1 = null;
    else
      $this.q1l_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.lightSources.y()) {
      // Inline function 'dk.cachet.carp.common.application.data.PPG.<init>.<anonymous>' call
      var message = 'Data for at least one light sources needs to be provided.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PPG_init_$Create$(seen1, lightSources, sensorSpecificData, serializationConstructorMarker) {
    return PPG_init_$Init$(seen1, lightSources, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(PPG)));
  }
  function PPG(lightSources, sensorSpecificData) {
    Companion_getInstance_18();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.lightSources = lightSources;
    this.q1l_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.lightSources.y()) {
      // Inline function 'dk.cachet.carp.common.application.data.PPG.<anonymous>' call
      var message = 'Data for at least one light sources needs to be provided.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(PPG).r1l = function () {
    return this.lightSources;
  };
  protoOf(PPG).p1h = function () {
    return this.q1l_1;
  };
  protoOf(PPG).od = function () {
    return this.lightSources;
  };
  protoOf(PPG).pd = function () {
    return this.q1l_1;
  };
  protoOf(PPG).s1l = function (lightSources, sensorSpecificData) {
    return new PPG(lightSources, sensorSpecificData);
  };
  protoOf(PPG).copy = function (lightSources, sensorSpecificData, $super) {
    lightSources = lightSources === VOID ? this.lightSources : lightSources;
    sensorSpecificData = sensorSpecificData === VOID ? this.q1l_1 : sensorSpecificData;
    return this.s1l(lightSources, sensorSpecificData);
  };
  protoOf(PPG).toString = function () {
    return 'PPG(lightSources=' + this.lightSources + ', sensorSpecificData=' + this.q1l_1 + ')';
  };
  protoOf(PPG).hashCode = function () {
    var result = hashCode(this.lightSources);
    result = imul(result, 31) + (this.q1l_1 == null ? 0 : hashCode(this.q1l_1)) | 0;
    return result;
  };
  protoOf(PPG).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PPG))
      return false;
    var tmp0_other_with_cast = other instanceof PPG ? other : THROW_CCE();
    if (!equals(this.lightSources, tmp0_other_with_cast.lightSources))
      return false;
    if (!equals(this.q1l_1, tmp0_other_with_cast.q1l_1))
      return false;
    return true;
  };
  function Companion_18() {
    Companion_instance_19 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t1l_1 = [null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_18).m16 = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.sensorskincontact', this, 2);
    tmp0_serialDesc.nt('contact', false);
    tmp0_serialDesc.nt('sensorSpecificData', true);
    this.u1l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).pi = function () {
    return this.u1l_1;
  };
  protoOf($serializer_11).cu = function () {
    var tmp0_cached = Companion_getInstance_19().t1l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), get_nullable(tmp0_cached[1])];
  };
  protoOf($serializer_11).ri = function (decoder) {
    var tmp0_desc = this.u1l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_19().t1l_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.zl(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.zl(tmp0_desc, 0);
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
    return SensorSkinContact_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).v1l = function (encoder, value) {
    var tmp0_desc = this.u1l_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().t1l_1;
    tmp1_output.fn(tmp0_desc, 0, value.contact);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.w1l_1 == null)) {
      tmp1_output.rn(tmp0_desc, 1, tmp2_cached[1], value.w1l_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_11).qi = function (encoder, value) {
    return this.v1l(encoder, value instanceof SensorSkinContact ? value : THROW_CCE());
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function SensorSkinContact_init_$Init$(seen1, contact, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_11().u1l_1);
    }
    $this.contact = contact;
    if (0 === (seen1 & 2))
      $this.w1l_1 = null;
    else
      $this.w1l_1 = sensorSpecificData;
    return $this;
  }
  function SensorSkinContact_init_$Create$(seen1, contact, sensorSpecificData, serializationConstructorMarker) {
    return SensorSkinContact_init_$Init$(seen1, contact, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(SensorSkinContact)));
  }
  function SensorSkinContact(contact, sensorSpecificData) {
    Companion_getInstance_19();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.contact = contact;
    this.w1l_1 = sensorSpecificData;
  }
  protoOf(SensorSkinContact).x1l = function () {
    return this.contact;
  };
  protoOf(SensorSkinContact).p1h = function () {
    return this.w1l_1;
  };
  protoOf(SensorSkinContact).od = function () {
    return this.contact;
  };
  protoOf(SensorSkinContact).pd = function () {
    return this.w1l_1;
  };
  protoOf(SensorSkinContact).y1l = function (contact, sensorSpecificData) {
    return new SensorSkinContact(contact, sensorSpecificData);
  };
  protoOf(SensorSkinContact).copy = function (contact, sensorSpecificData, $super) {
    contact = contact === VOID ? this.contact : contact;
    sensorSpecificData = sensorSpecificData === VOID ? this.w1l_1 : sensorSpecificData;
    return this.y1l(contact, sensorSpecificData);
  };
  protoOf(SensorSkinContact).toString = function () {
    return 'SensorSkinContact(contact=' + this.contact + ', sensorSpecificData=' + this.w1l_1 + ')';
  };
  protoOf(SensorSkinContact).hashCode = function () {
    var result = getBooleanHashCode(this.contact);
    result = imul(result, 31) + (this.w1l_1 == null ? 0 : hashCode(this.w1l_1)) | 0;
    return result;
  };
  protoOf(SensorSkinContact).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SensorSkinContact))
      return false;
    var tmp0_other_with_cast = other instanceof SensorSkinContact ? other : THROW_CCE();
    if (!(this.contact === tmp0_other_with_cast.contact))
      return false;
    if (!equals(this.w1l_1, tmp0_other_with_cast.w1l_1))
      return false;
    return true;
  };
  function Companion_19() {
    Companion_instance_20 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.z1l_1 = [null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_19).m16 = function () {
    return $serializer_getInstance_12();
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_19();
    return Companion_instance_20;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.signalstrength', this, 2);
    tmp0_serialDesc.nt('rssi', false);
    tmp0_serialDesc.nt('sensorSpecificData', true);
    this.a1m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).pi = function () {
    return this.a1m_1;
  };
  protoOf($serializer_12).cu = function () {
    var tmp0_cached = Companion_getInstance_20().z1l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ShortSerializer_getInstance(), get_nullable(tmp0_cached[1])];
  };
  protoOf($serializer_12).ri = function (decoder) {
    var tmp0_desc = this.a1m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_20().z1l_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.bm(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.bm(tmp0_desc, 0);
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
    return SignalStrength_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_12).b1m = function (encoder, value) {
    var tmp0_desc = this.a1m_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().z1l_1;
    tmp1_output.hn(tmp0_desc, 0, value.rssi);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.c1m_1 == null)) {
      tmp1_output.rn(tmp0_desc, 1, tmp2_cached[1], value.c1m_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_12).qi = function (encoder, value) {
    return this.b1m(encoder, value instanceof SignalStrength ? value : THROW_CCE());
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function SignalStrength_init_$Init$(seen1, rssi, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_12().a1m_1);
    }
    $this.rssi = rssi;
    if (0 === (seen1 & 2))
      $this.c1m_1 = null;
    else
      $this.c1m_1 = sensorSpecificData;
    return $this;
  }
  function SignalStrength_init_$Create$(seen1, rssi, sensorSpecificData, serializationConstructorMarker) {
    return SignalStrength_init_$Init$(seen1, rssi, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(SignalStrength)));
  }
  function SignalStrength(rssi, sensorSpecificData) {
    Companion_getInstance_20();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.rssi = rssi;
    this.c1m_1 = sensorSpecificData;
  }
  protoOf(SignalStrength).d1m = function () {
    return this.rssi;
  };
  protoOf(SignalStrength).p1h = function () {
    return this.c1m_1;
  };
  protoOf(SignalStrength).od = function () {
    return this.rssi;
  };
  protoOf(SignalStrength).pd = function () {
    return this.c1m_1;
  };
  protoOf(SignalStrength).e1m = function (rssi, sensorSpecificData) {
    return new SignalStrength(rssi, sensorSpecificData);
  };
  protoOf(SignalStrength).copy = function (rssi, sensorSpecificData, $super) {
    rssi = rssi === VOID ? this.rssi : rssi;
    sensorSpecificData = sensorSpecificData === VOID ? this.c1m_1 : sensorSpecificData;
    return this.e1m(rssi, sensorSpecificData);
  };
  protoOf(SignalStrength).toString = function () {
    return 'SignalStrength(rssi=' + this.rssi + ', sensorSpecificData=' + this.c1m_1 + ')';
  };
  protoOf(SignalStrength).hashCode = function () {
    var result = this.rssi;
    result = imul(result, 31) + (this.c1m_1 == null ? 0 : hashCode(this.c1m_1)) | 0;
    return result;
  };
  protoOf(SignalStrength).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SignalStrength))
      return false;
    var tmp0_other_with_cast = other instanceof SignalStrength ? other : THROW_CCE();
    if (!(this.rssi === tmp0_other_with_cast.rssi))
      return false;
    if (!equals(this.c1m_1, tmp0_other_with_cast.c1m_1))
      return false;
    return true;
  };
  function Companion_20() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f1m_1 = [null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_20).m16 = function () {
    return $serializer_getInstance_13();
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_20();
    return Companion_instance_21;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.stepcount', this, 2);
    tmp0_serialDesc.nt('steps', false);
    tmp0_serialDesc.nt('sensorSpecificData', true);
    this.g1m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).pi = function () {
    return this.g1m_1;
  };
  protoOf($serializer_13).cu = function () {
    var tmp0_cached = Companion_getInstance_21().f1m_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), get_nullable(tmp0_cached[1])];
  };
  protoOf($serializer_13).ri = function (decoder) {
    var tmp0_desc = this.g1m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_21().f1m_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.cm(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.cm(tmp0_desc, 0);
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
    return StepCount_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_13).h1m = function (encoder, value) {
    var tmp0_desc = this.g1m_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().f1m_1;
    tmp1_output.in(tmp0_desc, 0, value.steps);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.i1m_1 == null)) {
      tmp1_output.rn(tmp0_desc, 1, tmp2_cached[1], value.i1m_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_13).qi = function (encoder, value) {
    return this.h1m(encoder, value instanceof StepCount ? value : THROW_CCE());
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function StepCount_init_$Init$(seen1, steps, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_13().g1m_1);
    }
    $this.steps = steps;
    if (0 === (seen1 & 2))
      $this.i1m_1 = null;
    else
      $this.i1m_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.steps >= 0)) {
      // Inline function 'dk.cachet.carp.common.application.data.StepCount.<init>.<anonymous>' call
      var message = 'Number of steps needs to be a positive number.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function StepCount_init_$Create$(seen1, steps, sensorSpecificData, serializationConstructorMarker) {
    return StepCount_init_$Init$(seen1, steps, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(StepCount)));
  }
  function StepCount(steps, sensorSpecificData) {
    Companion_getInstance_21();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.steps = steps;
    this.i1m_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.steps >= 0)) {
      // Inline function 'dk.cachet.carp.common.application.data.StepCount.<anonymous>' call
      var message = 'Number of steps needs to be a positive number.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(StepCount).j1m = function () {
    return this.steps;
  };
  protoOf(StepCount).p1h = function () {
    return this.i1m_1;
  };
  protoOf(StepCount).od = function () {
    return this.steps;
  };
  protoOf(StepCount).pd = function () {
    return this.i1m_1;
  };
  protoOf(StepCount).d1l = function (steps, sensorSpecificData) {
    return new StepCount(steps, sensorSpecificData);
  };
  protoOf(StepCount).copy = function (steps, sensorSpecificData, $super) {
    steps = steps === VOID ? this.steps : steps;
    sensorSpecificData = sensorSpecificData === VOID ? this.i1m_1 : sensorSpecificData;
    return this.d1l(steps, sensorSpecificData);
  };
  protoOf(StepCount).toString = function () {
    return 'StepCount(steps=' + this.steps + ', sensorSpecificData=' + this.i1m_1 + ')';
  };
  protoOf(StepCount).hashCode = function () {
    var result = this.steps;
    result = imul(result, 31) + (this.i1m_1 == null ? 0 : hashCode(this.i1m_1)) | 0;
    return result;
  };
  protoOf(StepCount).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StepCount))
      return false;
    var tmp0_other_with_cast = other instanceof StepCount ? other : THROW_CCE();
    if (!(this.steps === tmp0_other_with_cast.steps))
      return false;
    if (!equals(this.i1m_1, tmp0_other_with_cast.i1m_1))
      return false;
    return true;
  };
  function Companion_21() {
    Companion_instance_22 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = createSimpleEnumSerializer('dk.cachet.carp.common.application.triggers.TaskControl.Control', values_5());
    var tmp_1 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k1m_1 = [null, null, null, tmp_0, PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$2)];
  }
  protoOf(Companion_21).m16 = function () {
    return $serializer_getInstance_14();
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_21();
    return Companion_instance_22;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.triggeredtask', this, 5);
    tmp0_serialDesc.nt('triggerId', false);
    tmp0_serialDesc.nt('taskName', false);
    tmp0_serialDesc.nt('destinationDeviceRoleName', false);
    tmp0_serialDesc.nt('control', false);
    tmp0_serialDesc.nt('triggerData', true);
    this.l1m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).pi = function () {
    return this.l1m_1;
  };
  protoOf($serializer_14).cu = function () {
    var tmp0_cached = Companion_getInstance_22().k1m_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[3], get_nullable(tmp0_cached[4])];
  };
  protoOf($serializer_14).ri = function (decoder) {
    var tmp0_desc = this.l1m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xl(tmp0_desc);
    var tmp10_cached = Companion_getInstance_22().k1m_1;
    if (tmp9_input.om()) {
      tmp4_local0 = tmp9_input.cm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.hm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.hm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jm(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.lm(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.cm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.hm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.hm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jm(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.lm(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yl(tmp0_desc);
    return TriggeredTask_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_14).m1m = function (encoder, value) {
    var tmp0_desc = this.l1m_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().k1m_1;
    tmp1_output.in(tmp0_desc, 0, value.triggerId);
    tmp1_output.nn(tmp0_desc, 1, value.taskName);
    tmp1_output.nn(tmp0_desc, 2, value.destinationDeviceRoleName);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.control);
    if (tmp1_output.vn(tmp0_desc, 4) ? true : !(value.triggerData == null)) {
      tmp1_output.rn(tmp0_desc, 4, tmp2_cached[4], value.triggerData);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_14).qi = function (encoder, value) {
    return this.m1m(encoder, value instanceof TriggeredTask ? value : THROW_CCE());
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function TriggeredTask_init_$Init$(seen1, triggerId, taskName, destinationDeviceRoleName, control, triggerData, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_14().l1m_1);
    }
    $this.triggerId = triggerId;
    $this.taskName = taskName;
    $this.destinationDeviceRoleName = destinationDeviceRoleName;
    $this.control = control;
    if (0 === (seen1 & 16))
      $this.triggerData = null;
    else
      $this.triggerData = triggerData;
    return $this;
  }
  function TriggeredTask_init_$Create$(seen1, triggerId, taskName, destinationDeviceRoleName, control, triggerData, serializationConstructorMarker) {
    return TriggeredTask_init_$Init$(seen1, triggerId, taskName, destinationDeviceRoleName, control, triggerData, serializationConstructorMarker, objectCreate(protoOf(TriggeredTask)));
  }
  function TriggeredTask(triggerId, taskName, destinationDeviceRoleName, control, triggerData) {
    Companion_getInstance_22();
    triggerData = triggerData === VOID ? null : triggerData;
    this.triggerId = triggerId;
    this.taskName = taskName;
    this.destinationDeviceRoleName = destinationDeviceRoleName;
    this.control = control;
    this.triggerData = triggerData;
  }
  protoOf(TriggeredTask).n1m = function () {
    return this.triggerId;
  };
  protoOf(TriggeredTask).s1j = function () {
    return this.taskName;
  };
  protoOf(TriggeredTask).o1m = function () {
    return this.destinationDeviceRoleName;
  };
  protoOf(TriggeredTask).p1m = function () {
    return this.control;
  };
  protoOf(TriggeredTask).q1m = function () {
    return this.triggerData;
  };
  protoOf(TriggeredTask).od = function () {
    return this.triggerId;
  };
  protoOf(TriggeredTask).pd = function () {
    return this.taskName;
  };
  protoOf(TriggeredTask).r1g = function () {
    return this.destinationDeviceRoleName;
  };
  protoOf(TriggeredTask).q1h = function () {
    return this.control;
  };
  protoOf(TriggeredTask).r1m = function () {
    return this.triggerData;
  };
  protoOf(TriggeredTask).s1m = function (triggerId, taskName, destinationDeviceRoleName, control, triggerData) {
    return new TriggeredTask(triggerId, taskName, destinationDeviceRoleName, control, triggerData);
  };
  protoOf(TriggeredTask).copy = function (triggerId, taskName, destinationDeviceRoleName, control, triggerData, $super) {
    triggerId = triggerId === VOID ? this.triggerId : triggerId;
    taskName = taskName === VOID ? this.taskName : taskName;
    destinationDeviceRoleName = destinationDeviceRoleName === VOID ? this.destinationDeviceRoleName : destinationDeviceRoleName;
    control = control === VOID ? this.control : control;
    triggerData = triggerData === VOID ? this.triggerData : triggerData;
    return this.s1m(triggerId, taskName, destinationDeviceRoleName, control, triggerData);
  };
  protoOf(TriggeredTask).toString = function () {
    return 'TriggeredTask(triggerId=' + this.triggerId + ', taskName=' + this.taskName + ', destinationDeviceRoleName=' + this.destinationDeviceRoleName + ', control=' + this.control + ', triggerData=' + this.triggerData + ')';
  };
  protoOf(TriggeredTask).hashCode = function () {
    var result = this.triggerId;
    result = imul(result, 31) + getStringHashCode(this.taskName) | 0;
    result = imul(result, 31) + getStringHashCode(this.destinationDeviceRoleName) | 0;
    result = imul(result, 31) + this.control.hashCode() | 0;
    result = imul(result, 31) + (this.triggerData == null ? 0 : hashCode(this.triggerData)) | 0;
    return result;
  };
  protoOf(TriggeredTask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TriggeredTask))
      return false;
    var tmp0_other_with_cast = other instanceof TriggeredTask ? other : THROW_CCE();
    if (!(this.triggerId === tmp0_other_with_cast.triggerId))
      return false;
    if (!(this.taskName === tmp0_other_with_cast.taskName))
      return false;
    if (!(this.destinationDeviceRoleName === tmp0_other_with_cast.destinationDeviceRoleName))
      return false;
    if (!this.control.equals(tmp0_other_with_cast.control))
      return false;
    if (!equals(this.triggerData, tmp0_other_with_cast.triggerData))
      return false;
    return true;
  };
  function CarpInputDataTypes$SEX$lambda(it) {
    return valueOf_2(it);
  }
  function CarpInputDataTypes$SEX$lambda_0(it) {
    return it.m9_1;
  }
  function CarpInputDataTypes() {
    CarpInputDataTypes_instance = this;
    InputDataTypeList_init_$Init$(this);
    this.CARP_NAMESPACE = 'dk.cachet.carp.input';
    this.x1m_1 = 'dk.cachet.carp.input.sex';
    var tmp = this;
    var tmp_0 = Companion_instance_2.fromString('dk.cachet.carp.input.sex');
    // Inline function 'kotlin.collections.map' call
    var this_0 = values_2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'dk.cachet.carp.common.application.data.input.CarpInputDataTypes.SEX.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.q(tmp$ret$0);
    }
    var tmp_1 = new SelectOne('Sex', toSet(destination));
    var tmp_2 = getKClass(Sex);
    var tmp_3 = CarpInputDataTypes$SEX$lambda;
    tmp.SEX = this.add(tmp_0, tmp_1, tmp_2, tmp_3, CarpInputDataTypes$SEX$lambda_0);
  }
  protoOf(CarpInputDataTypes).m1i = function () {
    return this.CARP_NAMESPACE;
  };
  protoOf(CarpInputDataTypes).y1m = function () {
    return this.x1m_1;
  };
  protoOf(CarpInputDataTypes).z1m = function () {
    return this.SEX;
  };
  var CarpInputDataTypes_instance;
  function CarpInputDataTypes_getInstance() {
    if (CarpInputDataTypes_instance == null)
      new CarpInputDataTypes();
    return CarpInputDataTypes_instance;
  }
  function Companion_22() {
  }
  protoOf(Companion_22).m16 = function () {
    return new CustomInputSerializer([]);
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    return Companion_instance_23;
  }
  function CustomInput(input) {
    this.input = input;
  }
  protoOf(CustomInput).n1n = function () {
    return this.input;
  };
  protoOf(CustomInput).od = function () {
    return this.input;
  };
  protoOf(CustomInput).o1n = function (input) {
    return new CustomInput(input);
  };
  protoOf(CustomInput).copy = function (input, $super) {
    input = input === VOID ? this.input : input;
    return this.o1n(input);
  };
  protoOf(CustomInput).toString = function () {
    return 'CustomInput(input=' + toString(this.input) + ')';
  };
  protoOf(CustomInput).hashCode = function () {
    return hashCode(this.input);
  };
  protoOf(CustomInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomInput))
      return false;
    var tmp0_other_with_cast = other instanceof CustomInput ? other : THROW_CCE();
    if (!equals(this.input, tmp0_other_with_cast.input))
      return false;
    return true;
  };
  function CustomInputSerializer$descriptor$lambda($this$buildClassSerialDescriptor) {
    // Inline function 'kotlinx.serialization.descriptors.element' call
    var elementName = 'dataType';
    var annotations = emptyList();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(PrimitiveClasses_getInstance().j7(), arrayOf([]), false));
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).pi();
    $this$buildClassSerialDescriptor.tk(elementName, descriptor, annotations, false);
    $this$buildClassSerialDescriptor.dj('input', buildSerialDescriptor('dk.cachet.carp.input.custom.value', CONTEXTUAL_getInstance(), []));
    return Unit_instance;
  }
  function CustomInputSerializer(supportedDataTypes) {
    var tmp = this;
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(supportedDataTypes.length), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var inductionVariable = 0;
    var last = supportedDataTypes.length;
    while (inductionVariable < last) {
      var element = supportedDataTypes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'dk.cachet.carp.common.application.data.input.CustomInputSerializer.dataTypeMap.<anonymous>' call
      var pair = to(ensureNotNull(element.i6()), serializer_0(element));
      destination.n2(pair.md_1, pair.nd_1);
    }
    tmp.p1n_1 = destination;
    var tmp_0 = this;
    tmp_0.q1n_1 = buildClassSerialDescriptor('dk.cachet.carp.input.custom', [], CustomInputSerializer$descriptor$lambda);
  }
  protoOf(CustomInputSerializer).pi = function () {
    return this.q1n_1;
  };
  protoOf(CustomInputSerializer).ri = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.q1n_1;
    var composite = decoder.xl(descriptor);
    // Inline function 'dk.cachet.carp.common.application.data.input.CustomInputSerializer.deserialize.<anonymous>' call
    var index = composite.pm(this.q1n_1);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index === 0)) {
      // Inline function 'dk.cachet.carp.common.application.data.input.CustomInputSerializer.deserialize.<anonymous>.<anonymous>' call
      var message = 'Cannot read input before its data type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var dataType = composite.hm(this.q1n_1, 0);
    composite.pm(this.q1n_1);
    var serializer = this.r1n(dataType);
    var input = composite.km(this.q1n_1, 1, serializer);
    var result = new CustomInput(input);
    composite.yl(descriptor);
    return result;
  };
  protoOf(CustomInputSerializer).s1n = function (encoder, value) {
    var descriptor = this.q1n_1;
    var composite = encoder.xl(descriptor);
    // Inline function 'dk.cachet.carp.common.application.data.input.CustomInputSerializer.serialize.<anonymous>' call
    var input = value.input;
    var inputKlass = ensureNotNull(getKClassFromExpression(input).i6());
    composite.nn(this.q1n_1, 0, inputKlass);
    var tmp = this.r1n(inputKlass);
    var serializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    composite.pn(this.q1n_1, 1, serializer, input);
    composite.yl(descriptor);
    return Unit_instance;
  };
  protoOf(CustomInputSerializer).qi = function (encoder, value) {
    return this.s1n(encoder, value instanceof CustomInput ? value : THROW_CCE());
  };
  protoOf(CustomInputSerializer).r1n = function (dataType) {
    var tmp0_elvis_lhs = this.p1n_1.x2(dataType);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw UnsupportedOperationException_init_$Create$('No serializer registered for custom input data type: ' + dataType);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function get_CUSTOM_INPUT_TYPE_NAME() {
    return CUSTOM_INPUT_TYPE_NAME;
  }
  var CUSTOM_INPUT_TYPE_NAME;
  function InputDataTypeList_init_$Init$($this) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp$ret$0 = ArrayList_init_$Create$_0();
    InputDataTypeList.call($this, tmp$ret$0);
    return $this;
  }
  function create() {
    return InputDataTypeList_init_$Init$(objectCreate(protoOf(InputDataTypeList)));
  }
  function InputDataTypeList(list) {
    this.list = list;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.a1n_1 = LinkedHashMap_init_$Create$();
    this.inputElements = this.a1n_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.b1n_1 = LinkedHashMap_init_$Create$();
    this.dataClasses = this.b1n_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.c1n_1 = LinkedHashMap_init_$Create$();
    this.inputToDataConverters = this.c1n_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.d1n_1 = LinkedHashMap_init_$Create$();
    this.dataToInputConverters = this.d1n_1;
  }
  protoOf(InputDataTypeList).e1n = function () {
    return this.list;
  };
  protoOf(InputDataTypeList).n = function () {
    return this.list.n();
  };
  protoOf(InputDataTypeList).f1n = function (element) {
    return this.list.p(element);
  };
  protoOf(InputDataTypeList).p = function (element) {
    if (!(element instanceof NamespacedId))
      return false;
    return this.f1n(element instanceof NamespacedId ? element : THROW_CCE());
  };
  protoOf(InputDataTypeList).g1n = function (elements) {
    return this.list.x(elements);
  };
  protoOf(InputDataTypeList).x = function (elements) {
    return this.g1n(elements);
  };
  protoOf(InputDataTypeList).c1 = function (index) {
    return this.list.c1(index);
  };
  protoOf(InputDataTypeList).h1n = function (element) {
    return this.list.x1(element);
  };
  protoOf(InputDataTypeList).x1 = function (element) {
    if (!(element instanceof NamespacedId))
      return -1;
    return this.h1n(element instanceof NamespacedId ? element : THROW_CCE());
  };
  protoOf(InputDataTypeList).y = function () {
    return this.list.y();
  };
  protoOf(InputDataTypeList).t = function () {
    return this.list.t();
  };
  protoOf(InputDataTypeList).i1n = function (element) {
    return this.list.y1(element);
  };
  protoOf(InputDataTypeList).y1 = function (element) {
    if (!(element instanceof NamespacedId))
      return -1;
    return this.i1n(element instanceof NamespacedId ? element : THROW_CCE());
  };
  protoOf(InputDataTypeList).z1 = function () {
    return this.list.z1();
  };
  protoOf(InputDataTypeList).a2 = function (index) {
    return this.list.a2(index);
  };
  protoOf(InputDataTypeList).b2 = function (fromIndex, toIndex) {
    return this.list.b2(fromIndex, toIndex);
  };
  protoOf(InputDataTypeList).j1n = function () {
    return this.inputElements;
  };
  protoOf(InputDataTypeList).k1n = function () {
    return this.dataClasses;
  };
  protoOf(InputDataTypeList).l1n = function () {
    return this.inputToDataConverters;
  };
  protoOf(InputDataTypeList).m1n = function () {
    return this.dataToInputConverters;
  };
  protoOf(InputDataTypeList).add = function (inputDataType, inputElement, dataClass, inputToData, dataToInput) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dk.cachet.carp.common.application.data.input.InputDataTypeList.add.<anonymous>' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.a1n_1.u2(inputDataType)) {
      // Inline function 'dk.cachet.carp.common.application.data.input.InputDataTypeList.add.<anonymous>.<anonymous>' call
      var message = 'The specified input data type is already registered in this list.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.list.q(inputDataType);
    // Inline function 'kotlin.collections.set' call
    this.a1n_1.n2(inputDataType, inputElement);
    // Inline function 'kotlin.collections.set' call
    this.b1n_1.n2(inputDataType, dataClass);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.c1n_1;
    var value = typeof inputToData === 'function' ? inputToData : THROW_CCE();
    this_0.n2(inputDataType, value);
    // Inline function 'kotlin.collections.set' call
    var this_1 = this.d1n_1;
    var value_0 = typeof dataToInput === 'function' ? dataToInput : THROW_CCE();
    this_1.n2(inputDataType, value_0);
    return inputDataType;
  };
  function _get_$cachedSerializer__te6jhj_2($this) {
    return $this.t1n_1.r2();
  }
  function Sex$Companion$_anonymous__7n1xwp() {
    var tmp = values_2();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [null, null, null];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [null, null, null];
    return createAnnotatedEnumSerializer('dk.cachet.carp.input.sex', tmp, tmp_0, tmp$ret$5, null);
  }
  var Sex_Male_instance;
  var Sex_Female_instance;
  var Sex_Intersex_instance;
  function Companion_23() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.t1n_1 = lazy(tmp_0, Sex$Companion$_anonymous__7n1xwp);
  }
  protoOf(Companion_23).m16 = function () {
    return _get_$cachedSerializer__te6jhj_2(this);
  };
  protoOf(Companion_23).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    Sex_initEntries();
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
  }
  function values_2() {
    return [Sex_Male_getInstance(), Sex_Female_getInstance(), Sex_Intersex_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'Male':
        return Sex_Male_getInstance();
      case 'Female':
        return Sex_Female_getInstance();
      case 'Intersex':
        return Sex_Intersex_getInstance();
      default:
        Sex_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Sex_entriesInitialized;
  function Sex_initEntries() {
    if (Sex_entriesInitialized)
      return Unit_instance;
    Sex_entriesInitialized = true;
    Sex_Male_instance = new Sex('Male', 0);
    Sex_Female_instance = new Sex('Female', 1);
    Sex_Intersex_instance = new Sex('Intersex', 2);
    Companion_getInstance_24();
  }
  function Sex(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Sex_Male_getInstance() {
    Sex_initEntries();
    return Sex_Male_instance;
  }
  function Sex_Female_getInstance() {
    Sex_initEntries();
    return Sex_Female_instance;
  }
  function Sex_Intersex_getInstance() {
    Sex_initEntries();
    return Sex_Intersex_instance;
  }
  function InputElement() {
  }
  function Companion_24() {
    Companion_instance_25 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x1n_1 = [null, new LinkedHashSetSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_24).m16 = function () {
    return $serializer_getInstance_15();
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_24();
    return Companion_instance_25;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.data.input.elements.SelectOne', this, 2);
    tmp0_serialDesc.nt('prompt', false);
    tmp0_serialDesc.nt('options', false);
    this.y1n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).pi = function () {
    return this.y1n_1;
  };
  protoOf($serializer_15).cu = function () {
    var tmp0_cached = Companion_getInstance_25().x1n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1]];
  };
  protoOf($serializer_15).ri = function (decoder) {
    var tmp0_desc = this.y1n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_25().x1n_1;
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
    return SelectOne_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_15).z1n = function (encoder, value) {
    var tmp0_desc = this.y1n_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().x1n_1;
    tmp1_output.nn(tmp0_desc, 0, value.a1o_1);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.options);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_15).qi = function (encoder, value) {
    return this.z1n(encoder, value instanceof SelectOne ? value : THROW_CCE());
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function SelectOne_init_$Init$(seen1, prompt, options, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_15().y1n_1);
    }
    $this.a1o_1 = prompt;
    $this.options = options;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.options.y()) {
      // Inline function 'dk.cachet.carp.common.application.data.input.elements.SelectOne.<init>.<anonymous>' call
      var message = 'At least one option needs to be specified.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function SelectOne_init_$Create$(seen1, prompt, options, serializationConstructorMarker) {
    return SelectOne_init_$Init$(seen1, prompt, options, serializationConstructorMarker, objectCreate(protoOf(SelectOne)));
  }
  function SelectOne(prompt, options) {
    Companion_getInstance_25();
    this.a1o_1 = prompt;
    this.options = options;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.options.y()) {
      // Inline function 'dk.cachet.carp.common.application.data.input.elements.SelectOne.<anonymous>' call
      var message = 'At least one option needs to be specified.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(SelectOne).w1n = function () {
    return this.a1o_1;
  };
  protoOf(SelectOne).b1o = function () {
    return this.options;
  };
  protoOf(SelectOne).isValid = function (input) {
    return this.options.p(input);
  };
  protoOf(SelectOne).getDataClass = function () {
    return PrimitiveClasses_getInstance().j7();
  };
  protoOf(SelectOne).od = function () {
    return this.a1o_1;
  };
  protoOf(SelectOne).pd = function () {
    return this.options;
  };
  protoOf(SelectOne).c1o = function (prompt, options) {
    return new SelectOne(prompt, options);
  };
  protoOf(SelectOne).copy = function (prompt, options, $super) {
    prompt = prompt === VOID ? this.a1o_1 : prompt;
    options = options === VOID ? this.options : options;
    return this.c1o(prompt, options);
  };
  protoOf(SelectOne).toString = function () {
    return 'SelectOne(prompt=' + this.a1o_1 + ', options=' + this.options + ')';
  };
  protoOf(SelectOne).hashCode = function () {
    var result = getStringHashCode(this.a1o_1);
    result = imul(result, 31) + hashCode(this.options) | 0;
    return result;
  };
  protoOf(SelectOne).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectOne))
      return false;
    var tmp0_other_with_cast = other instanceof SelectOne ? other : THROW_CCE();
    if (!(this.a1o_1 === tmp0_other_with_cast.a1o_1))
      return false;
    if (!equals(this.options, tmp0_other_with_cast.options))
      return false;
    return true;
  };
  function Companion_25() {
  }
  protoOf(Companion_25).m16 = function () {
    return $serializer_getInstance_16();
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    return Companion_instance_26;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.data.input.elements.Text', this, 1);
    tmp0_serialDesc.nt('prompt', false);
    this.d1o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).pi = function () {
    return this.d1o_1;
  };
  protoOf($serializer_16).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  protoOf($serializer_16).ri = function (decoder) {
    var tmp0_desc = this.d1o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xl(tmp0_desc);
    if (tmp5_input.om()) {
      tmp4_local0 = tmp5_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.hm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yl(tmp0_desc);
    return Text_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_16).e1o = function (encoder, value) {
    var tmp0_desc = this.d1o_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.f1o_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_16).qi = function (encoder, value) {
    return this.e1o(encoder, value instanceof Text ? value : THROW_CCE());
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function Text_init_$Init$(seen1, prompt, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_16().d1o_1);
    }
    $this.f1o_1 = prompt;
    return $this;
  }
  function Text_init_$Create$(seen1, prompt, serializationConstructorMarker) {
    return Text_init_$Init$(seen1, prompt, serializationConstructorMarker, objectCreate(protoOf(Text)));
  }
  function Text(prompt) {
    this.f1o_1 = prompt;
  }
  protoOf(Text).w1n = function () {
    return this.f1o_1;
  };
  protoOf(Text).isValid = function (input) {
    return true;
  };
  protoOf(Text).getDataClass = function () {
    return PrimitiveClasses_getInstance().j7();
  };
  protoOf(Text).od = function () {
    return this.f1o_1;
  };
  protoOf(Text).e1f = function (prompt) {
    return new Text(prompt);
  };
  protoOf(Text).copy = function (prompt, $super) {
    prompt = prompt === VOID ? this.f1o_1 : prompt;
    return this.e1f(prompt);
  };
  protoOf(Text).toString = function () {
    return 'Text(prompt=' + this.f1o_1 + ')';
  };
  protoOf(Text).hashCode = function () {
    return getStringHashCode(this.f1o_1);
  };
  protoOf(Text).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Text))
      return false;
    var tmp0_other_with_cast = other instanceof Text ? other : THROW_CCE();
    if (!(this.f1o_1 === tmp0_other_with_cast.f1o_1))
      return false;
    return true;
  };
  function Sensors() {
    Sensors_instance = this;
    DataTypeSamplingSchemeMap.call(this);
    this.SIGNAL_STRENGTH = this.m1f(new NoOptionsSamplingScheme(CarpDataTypes_getInstance().SIGNAL_STRENGTH));
  }
  protoOf(Sensors).k1j = function () {
    return this.SIGNAL_STRENGTH;
  };
  var Sensors_instance;
  function Sensors_getInstance() {
    if (Sensors_instance == null)
      new Sensors();
    return Sensors_instance;
  }
  function Tasks() {
    Tasks_instance = this;
    TaskConfigurationList_init_$Init$(this);
  }
  var Tasks_instance;
  function Tasks_getInstance() {
    if (Tasks_instance == null)
      new Tasks();
    return Tasks_instance;
  }
  function Companion_26() {
    Companion_instance_27 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = NamespacedIdSerializer_getInstance();
    var tmp_1 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o1o_1 = [null, null, new LinkedHashMapSerializer(tmp_0, PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$2))];
  }
  protoOf(Companion_26).m16 = function () {
    return $serializer_getInstance_17();
  };
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_26();
    return Companion_instance_27;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.AltBeacon', this, 3);
    tmp0_serialDesc.nt('roleName', false);
    tmp0_serialDesc.nt('isOptional', true);
    tmp0_serialDesc.nt('defaultSamplingConfiguration', true);
    this.p1o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).pi = function () {
    return this.p1o_1;
  };
  protoOf($serializer_17).cu = function () {
    var tmp0_cached = Companion_getInstance_27().o1o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[2]];
  };
  protoOf($serializer_17).ri = function (decoder) {
    var tmp0_desc = this.p1o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    var tmp8_cached = Companion_getInstance_27().o1o_1;
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.zl(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.hm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.zl(tmp0_desc, 1);
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
    return AltBeacon_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_17).q1o = function (encoder, value) {
    var tmp0_desc = this.p1o_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().o1o_1;
    tmp1_output.nn(tmp0_desc, 0, value.r1o_1);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.s1o_1 === false)) {
      tmp1_output.fn(tmp0_desc, 1, value.s1o_1);
    }
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !equals(value.t1o_1, emptyMap())) {
      tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.t1o_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_17).qi = function (encoder, value) {
    return this.q1o(encoder, value instanceof AltBeacon ? value : THROW_CCE());
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function AltBeacon_init_$Init$(seen1, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_17().p1o_1);
    }
    DeviceConfiguration_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.r1o_1 = roleName;
    if (0 === (seen1 & 2))
      $this.s1o_1 = false;
    else
      $this.s1o_1 = isOptional;
    if (0 === (seen1 & 4))
      $this.t1o_1 = emptyMap();
    else
      $this.t1o_1 = defaultSamplingConfiguration;
    return $this;
  }
  function AltBeacon_init_$Create$(seen1, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker) {
    return AltBeacon_init_$Init$(seen1, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(AltBeacon)));
  }
  function AltBeacon(roleName, isOptional) {
    Companion_getInstance_27();
    isOptional = isOptional === VOID ? false : isOptional;
    DeviceConfiguration.call(this);
    this.r1o_1 = roleName;
    this.s1o_1 = isOptional;
    this.t1o_1 = emptyMap();
  }
  protoOf(AltBeacon).u1o = function () {
    return this.r1o_1;
  };
  protoOf(AltBeacon).v1o = function () {
    return this.s1o_1;
  };
  protoOf(AltBeacon).getSupportedDataTypes = function () {
    return Sensors_getInstance().l2();
  };
  protoOf(AltBeacon).getDataTypeSamplingSchemes = function () {
    return Sensors_getInstance();
  };
  protoOf(AltBeacon).w1o = function () {
    return this.t1o_1;
  };
  protoOf(AltBeacon).createDeviceRegistrationBuilder = function () {
    return new AltBeaconDeviceRegistrationBuilder();
  };
  protoOf(AltBeacon).getRegistrationClass = function () {
    return getKClass(AltBeaconDeviceRegistration);
  };
  protoOf(AltBeacon).isValidRegistration = function (registration) {
    return Trilean_TRUE_getInstance();
  };
  protoOf(AltBeacon).od = function () {
    return this.r1o_1;
  };
  protoOf(AltBeacon).pd = function () {
    return this.s1o_1;
  };
  protoOf(AltBeacon).x1o = function (roleName, isOptional) {
    return new AltBeacon(roleName, isOptional);
  };
  protoOf(AltBeacon).copy = function (roleName, isOptional, $super) {
    roleName = roleName === VOID ? this.r1o_1 : roleName;
    isOptional = isOptional === VOID ? this.s1o_1 : isOptional;
    return this.x1o(roleName, isOptional);
  };
  protoOf(AltBeacon).toString = function () {
    return 'AltBeacon(roleName=' + this.r1o_1 + ', isOptional=' + this.s1o_1 + ')';
  };
  protoOf(AltBeacon).hashCode = function () {
    var result = getStringHashCode(this.r1o_1);
    result = imul(result, 31) + getBooleanHashCode(this.s1o_1) | 0;
    return result;
  };
  protoOf(AltBeacon).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AltBeacon))
      return false;
    var tmp0_other_with_cast = other instanceof AltBeacon ? other : THROW_CCE();
    if (!(this.r1o_1 === tmp0_other_with_cast.r1o_1))
      return false;
    if (!(this.s1o_1 === tmp0_other_with_cast.s1o_1))
      return false;
    return true;
  };
  function Companion_27() {
    Companion_instance_28 = this;
    this.REFERENCE_RSS_RANGE = numberRangeToNumber(-127, 0);
  }
  protoOf(Companion_27).z1o = function () {
    return this.REFERENCE_RSS_RANGE;
  };
  protoOf(Companion_27).m16 = function () {
    return $serializer_getInstance_18();
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    if (Companion_instance_28 == null)
      new Companion_27();
    return Companion_instance_28;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration', this, 8);
    tmp0_serialDesc.nt('registrationCreatedOn', false);
    tmp0_serialDesc.nt('manufacturerId', false);
    tmp0_serialDesc.nt('organizationId', false);
    tmp0_serialDesc.nt('majorId', false);
    tmp0_serialDesc.nt('minorId', false);
    tmp0_serialDesc.nt('referenceRssi', false);
    tmp0_serialDesc.nt('deviceDisplayName', false);
    tmp0_serialDesc.nt('deviceId', false);
    this.a1p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).pi = function () {
    return this.a1p_1;
  };
  protoOf($serializer_18).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantIso8601Serializer_getInstance(), ShortSerializer_getInstance(), UUIDSerializer_getInstance(), ShortSerializer_getInstance(), ShortSerializer_getInstance(), ShortSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance()];
  };
  protoOf($serializer_18).ri = function (decoder) {
    var tmp0_desc = this.a1p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.xl(tmp0_desc);
    if (tmp12_input.om()) {
      tmp4_local0 = tmp12_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.bm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.jm(tmp0_desc, 2, UUIDSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.bm(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.bm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.bm(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.lm(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.hm(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.bm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.jm(tmp0_desc, 2, UUIDSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.bm(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.bm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.bm(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.lm(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.hm(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.yl(tmp0_desc);
    return AltBeaconDeviceRegistration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_18).b1p = function (encoder, value) {
    var tmp0_desc = this.a1p_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), value.registrationCreatedOn);
    tmp1_output.hn(tmp0_desc, 1, value.manufacturerId);
    tmp1_output.pn(tmp0_desc, 2, UUIDSerializer_getInstance(), value.organizationId);
    tmp1_output.hn(tmp0_desc, 3, value.majorId);
    tmp1_output.hn(tmp0_desc, 4, value.minorId);
    tmp1_output.hn(tmp0_desc, 5, value.referenceRssi);
    tmp1_output.rn(tmp0_desc, 6, StringSerializer_getInstance(), value.c1p_1);
    tmp1_output.nn(tmp0_desc, 7, value.d1p_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_18).qi = function (encoder, value) {
    return this.b1p(encoder, value instanceof AltBeaconDeviceRegistration ? value : THROW_CCE());
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function AltBeaconDeviceRegistration_init_$Init$(seen1, registrationCreatedOn, manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, deviceId, serializationConstructorMarker, $this) {
    if (!(255 === (255 & seen1))) {
      throwMissingFieldException(seen1, 255, $serializer_getInstance_18().a1p_1);
    }
    DeviceRegistration_init_$Init$(seen1, registrationCreatedOn, serializationConstructorMarker, $this);
    $this.manufacturerId = manufacturerId;
    $this.organizationId = organizationId;
    $this.majorId = majorId;
    $this.minorId = minorId;
    $this.referenceRssi = referenceRssi;
    $this.c1p_1 = deviceDisplayName;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = Companion_getInstance_28().REFERENCE_RSS_RANGE;
    var value = $this.referenceRssi;
    // Inline function 'kotlin.contracts.contract' call
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), value)) {
      // Inline function 'dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration.<init>.<anonymous>' call
      var message = 'Reference RSSI needs to be in the range from -127 to 0.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.d1p_1 = deviceId;
    return $this;
  }
  function AltBeaconDeviceRegistration_init_$Create$(seen1, registrationCreatedOn, manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, deviceId, serializationConstructorMarker) {
    return AltBeaconDeviceRegistration_init_$Init$(seen1, registrationCreatedOn, manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, deviceId, serializationConstructorMarker, objectCreate(protoOf(AltBeaconDeviceRegistration)));
  }
  function AltBeaconDeviceRegistration(manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName) {
    Companion_getInstance_28();
    deviceDisplayName = deviceDisplayName === VOID ? null : deviceDisplayName;
    DeviceRegistration.call(this);
    this.manufacturerId = manufacturerId;
    this.organizationId = organizationId;
    this.majorId = majorId;
    this.minorId = minorId;
    this.referenceRssi = referenceRssi;
    this.c1p_1 = deviceDisplayName;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = Companion_getInstance_28().REFERENCE_RSS_RANGE;
    var value = this.referenceRssi;
    // Inline function 'kotlin.contracts.contract' call
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), value)) {
      // Inline function 'dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration.<anonymous>' call
      var message = 'Reference RSSI needs to be in the range from -127 to 0.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.d1p_1 = '' + this.manufacturerId + ':' + this.organizationId + ':' + this.majorId + ':' + this.minorId;
  }
  protoOf(AltBeaconDeviceRegistration).e1p = function () {
    return this.manufacturerId;
  };
  protoOf(AltBeaconDeviceRegistration).f1p = function () {
    return this.organizationId;
  };
  protoOf(AltBeaconDeviceRegistration).g1p = function () {
    return this.majorId;
  };
  protoOf(AltBeaconDeviceRegistration).h1p = function () {
    return this.minorId;
  };
  protoOf(AltBeaconDeviceRegistration).i1p = function () {
    return this.referenceRssi;
  };
  protoOf(AltBeaconDeviceRegistration).j1p = function () {
    return this.c1p_1;
  };
  protoOf(AltBeaconDeviceRegistration).k1p = function () {
    return this.d1p_1;
  };
  protoOf(AltBeaconDeviceRegistration).od = function () {
    return this.manufacturerId;
  };
  protoOf(AltBeaconDeviceRegistration).pd = function () {
    return this.organizationId;
  };
  protoOf(AltBeaconDeviceRegistration).r1g = function () {
    return this.majorId;
  };
  protoOf(AltBeaconDeviceRegistration).q1h = function () {
    return this.minorId;
  };
  protoOf(AltBeaconDeviceRegistration).r1m = function () {
    return this.referenceRssi;
  };
  protoOf(AltBeaconDeviceRegistration).l1p = function () {
    return this.c1p_1;
  };
  protoOf(AltBeaconDeviceRegistration).m1p = function (manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName) {
    return new AltBeaconDeviceRegistration(manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName);
  };
  protoOf(AltBeaconDeviceRegistration).copy = function (manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, $super) {
    manufacturerId = manufacturerId === VOID ? this.manufacturerId : manufacturerId;
    organizationId = organizationId === VOID ? this.organizationId : organizationId;
    majorId = majorId === VOID ? this.majorId : majorId;
    minorId = minorId === VOID ? this.minorId : minorId;
    referenceRssi = referenceRssi === VOID ? this.referenceRssi : referenceRssi;
    deviceDisplayName = deviceDisplayName === VOID ? this.c1p_1 : deviceDisplayName;
    return this.m1p(manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName);
  };
  protoOf(AltBeaconDeviceRegistration).toString = function () {
    return 'AltBeaconDeviceRegistration(manufacturerId=' + this.manufacturerId + ', organizationId=' + this.organizationId + ', majorId=' + this.majorId + ', minorId=' + this.minorId + ', referenceRssi=' + this.referenceRssi + ', deviceDisplayName=' + this.c1p_1 + ')';
  };
  protoOf(AltBeaconDeviceRegistration).hashCode = function () {
    var result = this.manufacturerId;
    result = imul(result, 31) + this.organizationId.hashCode() | 0;
    result = imul(result, 31) + this.majorId | 0;
    result = imul(result, 31) + this.minorId | 0;
    result = imul(result, 31) + this.referenceRssi | 0;
    result = imul(result, 31) + (this.c1p_1 == null ? 0 : getStringHashCode(this.c1p_1)) | 0;
    return result;
  };
  protoOf(AltBeaconDeviceRegistration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AltBeaconDeviceRegistration))
      return false;
    var tmp0_other_with_cast = other instanceof AltBeaconDeviceRegistration ? other : THROW_CCE();
    if (!(this.manufacturerId === tmp0_other_with_cast.manufacturerId))
      return false;
    if (!this.organizationId.equals(tmp0_other_with_cast.organizationId))
      return false;
    if (!(this.majorId === tmp0_other_with_cast.majorId))
      return false;
    if (!(this.minorId === tmp0_other_with_cast.minorId))
      return false;
    if (!(this.referenceRssi === tmp0_other_with_cast.referenceRssi))
      return false;
    if (!(this.c1p_1 == tmp0_other_with_cast.c1p_1))
      return false;
    return true;
  };
  function Companion_28() {
  }
  protoOf(Companion_28).m16 = function () {
    return NotSerializable_getInstance();
  };
  var Companion_instance_29;
  function Companion_getInstance_29() {
    return Companion_instance_29;
  }
  function AltBeaconDeviceRegistrationBuilder() {
    DeviceRegistrationBuilder.call(this);
    this.manufacturerId = 0;
    this.organizationId = new UUID('00000000-0000-0000-0000-000000000000');
    this.majorId = 0;
    this.minorId = 0;
    this.referenceRssi = 0;
  }
  protoOf(AltBeaconDeviceRegistrationBuilder).o1p = function (_set____db54di) {
    this.manufacturerId = _set____db54di;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).e1p = function () {
    return this.manufacturerId;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).p1p = function (_set____db54di) {
    this.organizationId = _set____db54di;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).f1p = function () {
    return this.organizationId;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).q1p = function (_set____db54di) {
    this.majorId = _set____db54di;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).g1p = function () {
    return this.majorId;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).r1p = function (_set____db54di) {
    this.minorId = _set____db54di;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).h1p = function () {
    return this.minorId;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).s1p = function (_set____db54di) {
    this.referenceRssi = _set____db54di;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).i1p = function () {
    return this.referenceRssi;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).build = function () {
    return new AltBeaconDeviceRegistration(this.manufacturerId, this.organizationId, this.majorId, this.minorId, this.referenceRssi, this.deviceDisplayName);
  };
  function Sensors_0() {
    Sensors_instance_0 = this;
    DataTypeSamplingSchemeMap.call(this);
    this.HEART_RATE = this.m1f(new NoOptionsSamplingScheme(CarpDataTypes_getInstance().HEART_RATE));
    this.INTERBEAT_INTERVAL = this.m1f(new NoOptionsSamplingScheme(CarpDataTypes_getInstance().INTERBEAT_INTERVAL));
    this.SENSOR_SKIN_CONTACT = this.m1f(new NoOptionsSamplingScheme(CarpDataTypes_getInstance().SENSOR_SKIN_CONTACT));
  }
  protoOf(Sensors_0).w1i = function () {
    return this.HEART_RATE;
  };
  protoOf(Sensors_0).y1i = function () {
    return this.INTERBEAT_INTERVAL;
  };
  protoOf(Sensors_0).a1j = function () {
    return this.SENSOR_SKIN_CONTACT;
  };
  var Sensors_instance_0;
  function Sensors_getInstance_0() {
    if (Sensors_instance_0 == null)
      new Sensors_0();
    return Sensors_instance_0;
  }
  function Tasks_0() {
    Tasks_instance_0 = this;
    TaskConfigurationList_init_$Init$(this);
  }
  var Tasks_instance_0;
  function Tasks_getInstance_0() {
    if (Tasks_instance_0 == null)
      new Tasks_0();
    return Tasks_instance_0;
  }
  function Companion_29() {
    Companion_instance_30 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = NamespacedIdSerializer_getInstance();
    var tmp_1 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w1p_1 = [null, null, new LinkedHashMapSerializer(tmp_0, PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$2))];
  }
  protoOf(Companion_29).m16 = function () {
    return $serializer_getInstance_19();
  };
  var Companion_instance_30;
  function Companion_getInstance_30() {
    if (Companion_instance_30 == null)
      new Companion_29();
    return Companion_instance_30;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.BLEHeartRateDevice', this, 3);
    tmp0_serialDesc.nt('roleName', false);
    tmp0_serialDesc.nt('isOptional', true);
    tmp0_serialDesc.nt('defaultSamplingConfiguration', true);
    this.x1p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).pi = function () {
    return this.x1p_1;
  };
  protoOf($serializer_19).cu = function () {
    var tmp0_cached = Companion_getInstance_30().w1p_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[2]];
  };
  protoOf($serializer_19).ri = function (decoder) {
    var tmp0_desc = this.x1p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    var tmp8_cached = Companion_getInstance_30().w1p_1;
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.zl(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.hm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.zl(tmp0_desc, 1);
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
    return BLEHeartRateDevice_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_19).y1p = function (encoder, value) {
    var tmp0_desc = this.x1p_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().w1p_1;
    tmp1_output.nn(tmp0_desc, 0, value.z1p_1);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.a1q_1 === false)) {
      tmp1_output.fn(tmp0_desc, 1, value.a1q_1);
    }
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !equals(value.b1q_1, emptyMap())) {
      tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.b1q_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_19).qi = function (encoder, value) {
    return this.y1p(encoder, value instanceof BLEHeartRateDevice ? value : THROW_CCE());
  };
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function BLEHeartRateDevice_init_$Init$(seen1, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_19().x1p_1);
    }
    DeviceConfiguration_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.z1p_1 = roleName;
    if (0 === (seen1 & 2))
      $this.a1q_1 = false;
    else
      $this.a1q_1 = isOptional;
    if (0 === (seen1 & 4))
      $this.b1q_1 = emptyMap();
    else
      $this.b1q_1 = defaultSamplingConfiguration;
    return $this;
  }
  function BLEHeartRateDevice_init_$Create$(seen1, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker) {
    return BLEHeartRateDevice_init_$Init$(seen1, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(BLEHeartRateDevice)));
  }
  function BLEHeartRateDevice(roleName, isOptional) {
    Companion_getInstance_30();
    isOptional = isOptional === VOID ? false : isOptional;
    DeviceConfiguration.call(this);
    this.z1p_1 = roleName;
    this.a1q_1 = isOptional;
    this.b1q_1 = emptyMap();
  }
  protoOf(BLEHeartRateDevice).u1o = function () {
    return this.z1p_1;
  };
  protoOf(BLEHeartRateDevice).v1o = function () {
    return this.a1q_1;
  };
  protoOf(BLEHeartRateDevice).getSupportedDataTypes = function () {
    return Sensors_getInstance_0().l2();
  };
  protoOf(BLEHeartRateDevice).getDataTypeSamplingSchemes = function () {
    return Sensors_getInstance_0();
  };
  protoOf(BLEHeartRateDevice).w1o = function () {
    return this.b1q_1;
  };
  protoOf(BLEHeartRateDevice).createDeviceRegistrationBuilder = function () {
    return new MACAddressDeviceRegistrationBuilder();
  };
  protoOf(BLEHeartRateDevice).getRegistrationClass = function () {
    return getKClass(MACAddressDeviceRegistration);
  };
  protoOf(BLEHeartRateDevice).isValidRegistration = function (registration) {
    return Trilean_TRUE_getInstance();
  };
  protoOf(BLEHeartRateDevice).od = function () {
    return this.z1p_1;
  };
  protoOf(BLEHeartRateDevice).pd = function () {
    return this.a1q_1;
  };
  protoOf(BLEHeartRateDevice).x1o = function (roleName, isOptional) {
    return new BLEHeartRateDevice(roleName, isOptional);
  };
  protoOf(BLEHeartRateDevice).copy = function (roleName, isOptional, $super) {
    roleName = roleName === VOID ? this.z1p_1 : roleName;
    isOptional = isOptional === VOID ? this.a1q_1 : isOptional;
    return this.x1o(roleName, isOptional);
  };
  protoOf(BLEHeartRateDevice).toString = function () {
    return 'BLEHeartRateDevice(roleName=' + this.z1p_1 + ', isOptional=' + this.a1q_1 + ')';
  };
  protoOf(BLEHeartRateDevice).hashCode = function () {
    var result = getStringHashCode(this.z1p_1);
    result = imul(result, 31) + getBooleanHashCode(this.a1q_1) | 0;
    return result;
  };
  protoOf(BLEHeartRateDevice).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BLEHeartRateDevice))
      return false;
    var tmp0_other_with_cast = other instanceof BLEHeartRateDevice ? other : THROW_CCE();
    if (!(this.z1p_1 === tmp0_other_with_cast.z1p_1))
      return false;
    if (!(this.a1q_1 === tmp0_other_with_cast.a1q_1))
      return false;
    return true;
  };
  function Companion_30() {
  }
  protoOf(Companion_30).m16 = function () {
    return $serializer_getInstance_20();
  };
  var Companion_instance_31;
  function Companion_getInstance_31() {
    return Companion_instance_31;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.BLESerialNumberDeviceRegistration', this, 4);
    tmp0_serialDesc.nt('registrationCreatedOn', false);
    tmp0_serialDesc.nt('serialNumber', false);
    tmp0_serialDesc.nt('deviceDisplayName', false);
    tmp0_serialDesc.nt('deviceId', false);
    this.c1q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).pi = function () {
    return this.c1q_1;
  };
  protoOf($serializer_20).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantIso8601Serializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance()];
  };
  protoOf($serializer_20).ri = function (decoder) {
    var tmp0_desc = this.c1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.hm(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.hm(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return BLESerialNumberDeviceRegistration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_20).d1q = function (encoder, value) {
    var tmp0_desc = this.c1q_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), value.registrationCreatedOn);
    tmp1_output.nn(tmp0_desc, 1, value.serialNumber);
    tmp1_output.rn(tmp0_desc, 2, StringSerializer_getInstance(), value.e1q_1);
    tmp1_output.nn(tmp0_desc, 3, value.f1q_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_20).qi = function (encoder, value) {
    return this.d1q(encoder, value instanceof BLESerialNumberDeviceRegistration ? value : THROW_CCE());
  };
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function BLESerialNumberDeviceRegistration_init_$Init$(seen1, registrationCreatedOn, serialNumber, deviceDisplayName, deviceId, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_20().c1q_1);
    }
    DeviceRegistration_init_$Init$(seen1, registrationCreatedOn, serializationConstructorMarker, $this);
    $this.serialNumber = serialNumber;
    $this.e1q_1 = deviceDisplayName;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = $this.serialNumber;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(this_0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.f1q_1 = deviceId;
    return $this;
  }
  function BLESerialNumberDeviceRegistration_init_$Create$(seen1, registrationCreatedOn, serialNumber, deviceDisplayName, deviceId, serializationConstructorMarker) {
    return BLESerialNumberDeviceRegistration_init_$Init$(seen1, registrationCreatedOn, serialNumber, deviceDisplayName, deviceId, serializationConstructorMarker, objectCreate(protoOf(BLESerialNumberDeviceRegistration)));
  }
  function BLESerialNumberDeviceRegistration(serialNumber, deviceDisplayName) {
    deviceDisplayName = deviceDisplayName === VOID ? null : deviceDisplayName;
    DeviceRegistration.call(this);
    this.serialNumber = serialNumber;
    this.e1q_1 = deviceDisplayName;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.serialNumber;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(this_0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.f1q_1 = this.serialNumber;
  }
  protoOf(BLESerialNumberDeviceRegistration).g1q = function () {
    return this.serialNumber;
  };
  protoOf(BLESerialNumberDeviceRegistration).j1p = function () {
    return this.e1q_1;
  };
  protoOf(BLESerialNumberDeviceRegistration).k1p = function () {
    return this.f1q_1;
  };
  protoOf(BLESerialNumberDeviceRegistration).od = function () {
    return this.serialNumber;
  };
  protoOf(BLESerialNumberDeviceRegistration).pd = function () {
    return this.e1q_1;
  };
  protoOf(BLESerialNumberDeviceRegistration).h1q = function (serialNumber, deviceDisplayName) {
    return new BLESerialNumberDeviceRegistration(serialNumber, deviceDisplayName);
  };
  protoOf(BLESerialNumberDeviceRegistration).copy = function (serialNumber, deviceDisplayName, $super) {
    serialNumber = serialNumber === VOID ? this.serialNumber : serialNumber;
    deviceDisplayName = deviceDisplayName === VOID ? this.e1q_1 : deviceDisplayName;
    return this.h1q(serialNumber, deviceDisplayName);
  };
  protoOf(BLESerialNumberDeviceRegistration).toString = function () {
    return 'BLESerialNumberDeviceRegistration(serialNumber=' + this.serialNumber + ', deviceDisplayName=' + this.e1q_1 + ')';
  };
  protoOf(BLESerialNumberDeviceRegistration).hashCode = function () {
    var result = getStringHashCode(this.serialNumber);
    result = imul(result, 31) + (this.e1q_1 == null ? 0 : getStringHashCode(this.e1q_1)) | 0;
    return result;
  };
  protoOf(BLESerialNumberDeviceRegistration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BLESerialNumberDeviceRegistration))
      return false;
    var tmp0_other_with_cast = other instanceof BLESerialNumberDeviceRegistration ? other : THROW_CCE();
    if (!(this.serialNumber === tmp0_other_with_cast.serialNumber))
      return false;
    if (!(this.e1q_1 == tmp0_other_with_cast.e1q_1))
      return false;
    return true;
  };
  function Companion_31() {
  }
  protoOf(Companion_31).m16 = function () {
    return NotSerializable_getInstance();
  };
  var Companion_instance_32;
  function Companion_getInstance_32() {
    return Companion_instance_32;
  }
  function BLESerialNumberDeviceRegistrationBuilder() {
    DeviceRegistrationBuilder.call(this);
    this.serialNumber = '';
  }
  protoOf(BLESerialNumberDeviceRegistrationBuilder).i1q = function (_set____db54di) {
    this.serialNumber = _set____db54di;
  };
  protoOf(BLESerialNumberDeviceRegistrationBuilder).g1q = function () {
    return this.serialNumber;
  };
  protoOf(BLESerialNumberDeviceRegistrationBuilder).build = function () {
    return new BLESerialNumberDeviceRegistration(this.serialNumber, this.deviceDisplayName);
  };
  function Sensors_1() {
    Sensors_instance_1 = this;
    DataTypeSamplingSchemeMap.call(this);
  }
  var Sensors_instance_1;
  function Sensors_getInstance_1() {
    if (Sensors_instance_1 == null)
      new Sensors_1();
    return Sensors_instance_1;
  }
  function Tasks_1() {
    Tasks_instance_1 = this;
    TaskConfigurationList_init_$Init$(this);
  }
  var Tasks_instance_1;
  function Tasks_getInstance_1() {
    if (Tasks_instance_1 == null)
      new Tasks_1();
    return Tasks_instance_1;
  }
  function Companion_32() {
    Companion_instance_33 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = NamespacedIdSerializer_getInstance();
    var tmp_1 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j1q_1 = [null, null, null, new LinkedHashMapSerializer(tmp_0, PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$2))];
  }
  protoOf(Companion_32).m16 = function () {
    return $serializer_getInstance_21();
  };
  var Companion_instance_33;
  function Companion_getInstance_33() {
    if (Companion_instance_33 == null)
      new Companion_32();
    return Companion_instance_33;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.CustomProtocolDevice', this, 4);
    tmp0_serialDesc.nt('isPrimaryDevice', false);
    tmp0_serialDesc.nt('roleName', false);
    tmp0_serialDesc.nt('isOptional', true);
    tmp0_serialDesc.nt('defaultSamplingConfiguration', true);
    this.k1q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).pi = function () {
    return this.k1q_1;
  };
  protoOf($serializer_21).cu = function () {
    var tmp0_cached = Companion_getInstance_33().j1q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[3]];
  };
  protoOf($serializer_21).ri = function (decoder) {
    var tmp0_desc = this.k1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_33().j1q_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.zl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.zl(tmp0_desc, 2);
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
            tmp4_local0 = tmp8_input.zl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.zl(tmp0_desc, 2);
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
    return CustomProtocolDevice_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_21).l1q = function (encoder, value) {
    var tmp0_desc = this.k1q_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_33().j1q_1;
    tmp1_output.fn(tmp0_desc, 0, value.m1q_1);
    tmp1_output.nn(tmp0_desc, 1, value.o1q_1);
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.p1q_1 === false)) {
      tmp1_output.fn(tmp0_desc, 2, value.p1q_1);
    }
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !equals(value.q1q_1, emptyMap())) {
      tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.q1q_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_21).qi = function (encoder, value) {
    return this.l1q(encoder, value instanceof CustomProtocolDevice ? value : THROW_CCE());
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function CustomProtocolDevice_init_$Init$(seen1, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_21().k1q_1);
    }
    PrimaryDeviceConfiguration_init_$Init$(seen1, isPrimaryDevice, serializationConstructorMarker, $this);
    $this.o1q_1 = roleName;
    if (0 === (seen1 & 4))
      $this.p1q_1 = false;
    else
      $this.p1q_1 = isOptional;
    if (0 === (seen1 & 8))
      $this.q1q_1 = emptyMap();
    else
      $this.q1q_1 = defaultSamplingConfiguration;
    return $this;
  }
  function CustomProtocolDevice_init_$Create$(seen1, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker) {
    return CustomProtocolDevice_init_$Init$(seen1, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(CustomProtocolDevice)));
  }
  function CustomProtocolDevice(roleName, isOptional) {
    Companion_getInstance_33();
    isOptional = isOptional === VOID ? false : isOptional;
    PrimaryDeviceConfiguration.call(this);
    this.o1q_1 = roleName;
    this.p1q_1 = isOptional;
    this.q1q_1 = emptyMap();
  }
  protoOf(CustomProtocolDevice).u1o = function () {
    return this.o1q_1;
  };
  protoOf(CustomProtocolDevice).v1o = function () {
    return this.p1q_1;
  };
  protoOf(CustomProtocolDevice).getSupportedDataTypes = function () {
    return Sensors_getInstance_1().l2();
  };
  protoOf(CustomProtocolDevice).getDataTypeSamplingSchemes = function () {
    return Sensors_getInstance_1();
  };
  protoOf(CustomProtocolDevice).w1o = function () {
    return this.q1q_1;
  };
  protoOf(CustomProtocolDevice).createDeviceRegistrationBuilder = function () {
    return new DefaultDeviceRegistrationBuilder();
  };
  protoOf(CustomProtocolDevice).getRegistrationClass = function () {
    return getKClass(DefaultDeviceRegistration);
  };
  protoOf(CustomProtocolDevice).isValidRegistration = function (registration) {
    return Trilean_TRUE_getInstance();
  };
  protoOf(CustomProtocolDevice).od = function () {
    return this.o1q_1;
  };
  protoOf(CustomProtocolDevice).pd = function () {
    return this.p1q_1;
  };
  protoOf(CustomProtocolDevice).x1o = function (roleName, isOptional) {
    return new CustomProtocolDevice(roleName, isOptional);
  };
  protoOf(CustomProtocolDevice).copy = function (roleName, isOptional, $super) {
    roleName = roleName === VOID ? this.o1q_1 : roleName;
    isOptional = isOptional === VOID ? this.p1q_1 : isOptional;
    return this.x1o(roleName, isOptional);
  };
  protoOf(CustomProtocolDevice).toString = function () {
    return 'CustomProtocolDevice(roleName=' + this.o1q_1 + ', isOptional=' + this.p1q_1 + ')';
  };
  protoOf(CustomProtocolDevice).hashCode = function () {
    var result = getStringHashCode(this.o1q_1);
    result = imul(result, 31) + getBooleanHashCode(this.p1q_1) | 0;
    return result;
  };
  protoOf(CustomProtocolDevice).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomProtocolDevice))
      return false;
    var tmp0_other_with_cast = other instanceof CustomProtocolDevice ? other : THROW_CCE();
    if (!(this.o1q_1 === tmp0_other_with_cast.o1q_1))
      return false;
    if (!(this.p1q_1 === tmp0_other_with_cast.p1q_1))
      return false;
    return true;
  };
  function Companion_33() {
  }
  protoOf(Companion_33).m16 = function () {
    return $serializer_getInstance_22();
  };
  var Companion_instance_34;
  function Companion_getInstance_34() {
    return Companion_instance_34;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.DefaultDeviceRegistration', this, 3);
    tmp0_serialDesc.nt('registrationCreatedOn', false);
    tmp0_serialDesc.nt('deviceDisplayName', false);
    tmp0_serialDesc.nt('deviceId', false);
    this.s1q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).pi = function () {
    return this.s1q_1;
  };
  protoOf($serializer_22).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantIso8601Serializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance()];
  };
  protoOf($serializer_22).ri = function (decoder) {
    var tmp0_desc = this.s1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.lm(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.lm(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
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
    return DefaultDeviceRegistration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_22).t1q = function (encoder, value) {
    var tmp0_desc = this.s1q_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), value.registrationCreatedOn);
    tmp1_output.rn(tmp0_desc, 1, StringSerializer_getInstance(), value.u1q_1);
    tmp1_output.nn(tmp0_desc, 2, value.v1q_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_22).qi = function (encoder, value) {
    return this.t1q(encoder, value instanceof DefaultDeviceRegistration ? value : THROW_CCE());
  };
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function DefaultDeviceRegistration_init_$Init$(seen1, registrationCreatedOn, deviceDisplayName, deviceId, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_22().s1q_1);
    }
    DeviceRegistration_init_$Init$(seen1, registrationCreatedOn, serializationConstructorMarker, $this);
    $this.u1q_1 = deviceDisplayName;
    $this.v1q_1 = deviceId;
    return $this;
  }
  function DefaultDeviceRegistration_init_$Create$(seen1, registrationCreatedOn, deviceDisplayName, deviceId, serializationConstructorMarker) {
    return DefaultDeviceRegistration_init_$Init$(seen1, registrationCreatedOn, deviceDisplayName, deviceId, serializationConstructorMarker, objectCreate(protoOf(DefaultDeviceRegistration)));
  }
  function DefaultDeviceRegistration(deviceDisplayName, deviceId) {
    deviceDisplayName = deviceDisplayName === VOID ? null : deviceDisplayName;
    deviceId = deviceId === VOID ? Companion_instance_8.randomUUID().toString() : deviceId;
    DeviceRegistration.call(this);
    this.u1q_1 = deviceDisplayName;
    this.v1q_1 = deviceId;
  }
  protoOf(DefaultDeviceRegistration).j1p = function () {
    return this.u1q_1;
  };
  protoOf(DefaultDeviceRegistration).k1p = function () {
    return this.v1q_1;
  };
  protoOf(DefaultDeviceRegistration).od = function () {
    return this.u1q_1;
  };
  protoOf(DefaultDeviceRegistration).pd = function () {
    return this.v1q_1;
  };
  protoOf(DefaultDeviceRegistration).w1q = function (deviceDisplayName, deviceId) {
    return new DefaultDeviceRegistration(deviceDisplayName, deviceId);
  };
  protoOf(DefaultDeviceRegistration).copy = function (deviceDisplayName, deviceId, $super) {
    deviceDisplayName = deviceDisplayName === VOID ? this.u1q_1 : deviceDisplayName;
    deviceId = deviceId === VOID ? this.v1q_1 : deviceId;
    return this.w1q(deviceDisplayName, deviceId);
  };
  protoOf(DefaultDeviceRegistration).toString = function () {
    return 'DefaultDeviceRegistration(deviceDisplayName=' + this.u1q_1 + ', deviceId=' + this.v1q_1 + ')';
  };
  protoOf(DefaultDeviceRegistration).hashCode = function () {
    var result = this.u1q_1 == null ? 0 : getStringHashCode(this.u1q_1);
    result = imul(result, 31) + getStringHashCode(this.v1q_1) | 0;
    return result;
  };
  protoOf(DefaultDeviceRegistration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DefaultDeviceRegistration))
      return false;
    var tmp0_other_with_cast = other instanceof DefaultDeviceRegistration ? other : THROW_CCE();
    if (!(this.u1q_1 == tmp0_other_with_cast.u1q_1))
      return false;
    if (!(this.v1q_1 === tmp0_other_with_cast.v1q_1))
      return false;
    return true;
  };
  function Companion_34() {
  }
  protoOf(Companion_34).m16 = function () {
    return NotSerializable_getInstance();
  };
  var Companion_instance_35;
  function Companion_getInstance_35() {
    return Companion_instance_35;
  }
  function DefaultDeviceRegistrationBuilder() {
    DeviceRegistrationBuilder.call(this);
    this.deviceId = Companion_instance_8.randomUUID().toString();
  }
  protoOf(DefaultDeviceRegistrationBuilder).x1q = function (_set____db54di) {
    this.deviceId = _set____db54di;
  };
  protoOf(DefaultDeviceRegistrationBuilder).k1p = function () {
    return this.deviceId;
  };
  protoOf(DefaultDeviceRegistrationBuilder).build = function () {
    return new DefaultDeviceRegistration(this.deviceDisplayName, this.deviceId);
  };
  function _get_$cachedSerializer__te6jhj_3($this) {
    return $this.y1q_1.r2();
  }
  function DeviceConfiguration$Companion$_anonymous__ghmh69() {
    var tmp = getKClass(DeviceConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion_35() {
    Companion_instance_36 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.y1q_1 = lazy(tmp_0, DeviceConfiguration$Companion$_anonymous__ghmh69);
  }
  protoOf(Companion_35).z1q = function (typeSerial0, typeSerial1) {
    return _get_$cachedSerializer__te6jhj_3(this);
  };
  protoOf(Companion_35).nu = function (typeParamsSerializers) {
    return this.z1q(typeParamsSerializers[0], typeParamsSerializers[1]);
  };
  var Companion_instance_36;
  function Companion_getInstance_36() {
    if (Companion_instance_36 == null)
      new Companion_35();
    return Companion_instance_36;
  }
  function DeviceConfiguration_init_$Init$(seen1, serializationConstructorMarker, $this) {
    return $this;
  }
  function DeviceConfiguration$createRegistration$lambda($this$null) {
    return Unit_instance;
  }
  function DeviceConfiguration() {
    Companion_getInstance_36();
  }
  protoOf(DeviceConfiguration).validateDefaultSamplingConfiguration = function () {
    var canBeValidated = this.getSupportedDataTypes();
    // Inline function 'kotlin.collections.iterator' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = this.defaultSamplingConfiguration;
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.p2().t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.common.application.devices.DeviceConfiguration.validateDefaultSamplingConfiguration.<anonymous>' call
      if (canBeValidated.p(element.q2())) {
        destination.n2(element.q2(), element.r2());
      }
    }
    var tmp0_iterator_0 = destination.p2().t();
    while (tmp0_iterator_0.u()) {
      var tmp1_loop_parameter = tmp0_iterator_0.v();
      // Inline function 'kotlin.collections.component1' call
      var dataType = tmp1_loop_parameter.q2();
      // Inline function 'kotlin.collections.component2' call
      var samplingConfiguration = tmp1_loop_parameter.r2();
      // Inline function 'kotlin.checkNotNull' call
      var value = this.getDataTypeSamplingSchemes().x2(dataType);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'kotlin.checkNotNull.<anonymous>' call
          var message = 'Required value was null.';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp$ret$8 = value;
          break $l$block;
        }
      }
      var samplingScheme = tmp$ret$8;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!samplingScheme.isValid(samplingConfiguration)) {
        // Inline function 'dk.cachet.carp.common.application.devices.DeviceConfiguration.validateDefaultSamplingConfiguration.<anonymous>' call
        var message_0 = 'The sampling configuration for data type `' + dataType + '` is invalid.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
  };
  protoOf(DeviceConfiguration).y1o = function (builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.createDeviceRegistrationBuilder();
    // Inline function 'kotlin.contracts.contract' call
    builder(this_0);
    return this_0.build();
  };
  protoOf(DeviceConfiguration).createRegistration = function (builder, $super) {
    var tmp;
    if (builder === VOID) {
      tmp = DeviceConfiguration$createRegistration$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    return this.y1o(builder);
  };
  protoOf(DeviceConfiguration).isDefinitelyInvalidRegistration = function (registration) {
    var isValidType = this.getRegistrationClass().j6(registration);
    var anyDevice = this instanceof DeviceConfiguration ? this : THROW_CCE();
    return !isValidType ? true : anyDevice.isValidRegistration(registration).equals(Trilean_FALSE_getInstance());
  };
  function DeviceConfigurationBuilder$samplingConfigurationBuilder$lambda($this$null) {
    return Unit_instance;
  }
  function DeviceConfigurationBuilder() {
    var tmp = this;
    tmp.a1r_1 = DeviceConfigurationBuilder$samplingConfigurationBuilder$lambda;
  }
  protoOf(DeviceConfigurationBuilder).defaultSamplingConfiguration = function (builder) {
    this.a1r_1 = builder;
  };
  protoOf(DeviceConfigurationBuilder).buildSamplingConfiguration = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = this.createSamplingConfigurationMapBuilder();
    // Inline function 'kotlin.contracts.contract' call
    this.a1r_1(this_0);
    return this_0.pr();
  };
  function _get_$cachedSerializer__te6jhj_4($this) {
    return $this.c1r_1.r2();
  }
  function DeviceRegistration$Companion$_anonymous__ywvna8() {
    var tmp = getKClass(DeviceRegistration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion_36() {
    Companion_instance_37 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.c1r_1 = lazy(tmp_0, DeviceRegistration$Companion$_anonymous__ywvna8);
  }
  protoOf(Companion_36).m16 = function () {
    return _get_$cachedSerializer__te6jhj_4(this);
  };
  protoOf(Companion_36).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_37;
  function Companion_getInstance_37() {
    if (Companion_instance_37 == null)
      new Companion_36();
    return Companion_instance_37;
  }
  function DeviceRegistration_init_$Init$(seen1, registrationCreatedOn, serializationConstructorMarker, $this) {
    $this.registrationCreatedOn = registrationCreatedOn;
    return $this;
  }
  function DeviceRegistration() {
    Companion_getInstance_37();
    this.registrationCreatedOn = System_instance.q13();
  }
  protoOf(DeviceRegistration).n1p = function () {
    return this.registrationCreatedOn;
  };
  function Companion_37() {
  }
  protoOf(Companion_37).d1r = function (typeSerial0) {
    return NotSerializable_getInstance();
  };
  protoOf(Companion_37).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  var Companion_instance_38;
  function Companion_getInstance_38() {
    return Companion_instance_38;
  }
  function DeviceRegistrationBuilder() {
    this.deviceDisplayName = null;
  }
  protoOf(DeviceRegistrationBuilder).t1p = function (_set____db54di) {
    this.deviceDisplayName = _set____db54di;
  };
  protoOf(DeviceRegistrationBuilder).j1p = function () {
    return this.deviceDisplayName;
  };
  function Companion_38() {
  }
  protoOf(Companion_38).m16 = function () {
    return $serializer_getInstance_23();
  };
  var Companion_instance_39;
  function Companion_getInstance_39() {
    return Companion_instance_39;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration', this, 4);
    tmp0_serialDesc.nt('registrationCreatedOn', false);
    tmp0_serialDesc.nt('macAddress', false);
    tmp0_serialDesc.nt('deviceDisplayName', false);
    tmp0_serialDesc.nt('deviceId', false);
    this.e1r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).pi = function () {
    return this.e1r_1;
  };
  protoOf($serializer_23).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantIso8601Serializer_getInstance(), MACAddressSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance()];
  };
  protoOf($serializer_23).ri = function (decoder) {
    var tmp0_desc = this.e1r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, MACAddressSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.hm(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, MACAddressSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.hm(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return MACAddressDeviceRegistration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_23).f1r = function (encoder, value) {
    var tmp0_desc = this.e1r_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), value.registrationCreatedOn);
    tmp1_output.pn(tmp0_desc, 1, MACAddressSerializer_getInstance(), value.macAddress);
    tmp1_output.rn(tmp0_desc, 2, StringSerializer_getInstance(), value.g1r_1);
    tmp1_output.nn(tmp0_desc, 3, value.h1r_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_23).qi = function (encoder, value) {
    return this.f1r(encoder, value instanceof MACAddressDeviceRegistration ? value : THROW_CCE());
  };
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function MACAddressDeviceRegistration_init_$Init$(seen1, registrationCreatedOn, macAddress, deviceDisplayName, deviceId, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_23().e1r_1);
    }
    DeviceRegistration_init_$Init$(seen1, registrationCreatedOn, serializationConstructorMarker, $this);
    $this.macAddress = macAddress;
    $this.g1r_1 = deviceDisplayName;
    $this.h1r_1 = deviceId;
    return $this;
  }
  function MACAddressDeviceRegistration_init_$Create$(seen1, registrationCreatedOn, macAddress, deviceDisplayName, deviceId, serializationConstructorMarker) {
    return MACAddressDeviceRegistration_init_$Init$(seen1, registrationCreatedOn, macAddress, deviceDisplayName, deviceId, serializationConstructorMarker, objectCreate(protoOf(MACAddressDeviceRegistration)));
  }
  function MACAddressDeviceRegistration(macAddress, deviceDisplayName) {
    deviceDisplayName = deviceDisplayName === VOID ? null : deviceDisplayName;
    DeviceRegistration.call(this);
    this.macAddress = macAddress;
    this.g1r_1 = deviceDisplayName;
    this.h1r_1 = this.macAddress.address;
  }
  protoOf(MACAddressDeviceRegistration).i1r = function () {
    return this.macAddress;
  };
  protoOf(MACAddressDeviceRegistration).j1p = function () {
    return this.g1r_1;
  };
  protoOf(MACAddressDeviceRegistration).k1p = function () {
    return this.h1r_1;
  };
  protoOf(MACAddressDeviceRegistration).od = function () {
    return this.macAddress;
  };
  protoOf(MACAddressDeviceRegistration).pd = function () {
    return this.g1r_1;
  };
  protoOf(MACAddressDeviceRegistration).j1r = function (macAddress, deviceDisplayName) {
    return new MACAddressDeviceRegistration(macAddress, deviceDisplayName);
  };
  protoOf(MACAddressDeviceRegistration).copy = function (macAddress, deviceDisplayName, $super) {
    macAddress = macAddress === VOID ? this.macAddress : macAddress;
    deviceDisplayName = deviceDisplayName === VOID ? this.g1r_1 : deviceDisplayName;
    return this.j1r(macAddress, deviceDisplayName);
  };
  protoOf(MACAddressDeviceRegistration).toString = function () {
    return 'MACAddressDeviceRegistration(macAddress=' + this.macAddress + ', deviceDisplayName=' + this.g1r_1 + ')';
  };
  protoOf(MACAddressDeviceRegistration).hashCode = function () {
    var result = this.macAddress.hashCode();
    result = imul(result, 31) + (this.g1r_1 == null ? 0 : getStringHashCode(this.g1r_1)) | 0;
    return result;
  };
  protoOf(MACAddressDeviceRegistration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MACAddressDeviceRegistration))
      return false;
    var tmp0_other_with_cast = other instanceof MACAddressDeviceRegistration ? other : THROW_CCE();
    if (!this.macAddress.equals(tmp0_other_with_cast.macAddress))
      return false;
    if (!(this.g1r_1 == tmp0_other_with_cast.g1r_1))
      return false;
    return true;
  };
  function Companion_39() {
  }
  protoOf(Companion_39).m16 = function () {
    return NotSerializable_getInstance();
  };
  var Companion_instance_40;
  function Companion_getInstance_40() {
    return Companion_instance_40;
  }
  function MACAddressDeviceRegistrationBuilder() {
    DeviceRegistrationBuilder.call(this);
    this.macAddress = '';
  }
  protoOf(MACAddressDeviceRegistrationBuilder).k1r = function (_set____db54di) {
    this.macAddress = _set____db54di;
  };
  protoOf(MACAddressDeviceRegistrationBuilder).i1r = function () {
    return this.macAddress;
  };
  protoOf(MACAddressDeviceRegistrationBuilder).build = function () {
    return new MACAddressDeviceRegistration(Companion_instance_1.parse(this.macAddress), this.deviceDisplayName);
  };
  function _get_$cachedSerializer__te6jhj_5($this) {
    return $this.l1r_1.r2();
  }
  function PrimaryDeviceConfiguration$Companion$_anonymous__301rn5() {
    var tmp = getKClass(PrimaryDeviceConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion_40() {
    Companion_instance_41 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.l1r_1 = lazy(tmp_0, PrimaryDeviceConfiguration$Companion$_anonymous__301rn5);
  }
  protoOf(Companion_40).z1q = function (typeSerial0, typeSerial1) {
    return _get_$cachedSerializer__te6jhj_5(this);
  };
  protoOf(Companion_40).nu = function (typeParamsSerializers) {
    return this.z1q(typeParamsSerializers[0], typeParamsSerializers[1]);
  };
  var Companion_instance_41;
  function Companion_getInstance_41() {
    if (Companion_instance_41 == null)
      new Companion_40();
    return Companion_instance_41;
  }
  function PrimaryDeviceConfiguration_init_$Init$(seen1, isPrimaryDevice, serializationConstructorMarker, $this) {
    DeviceConfiguration_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.m1q_1 = isPrimaryDevice;
    return $this;
  }
  function PrimaryDeviceConfiguration() {
    Companion_getInstance_41();
    DeviceConfiguration.call(this);
    this.m1q_1 = true;
  }
  protoOf(PrimaryDeviceConfiguration).r1q = function () {
    return this.m1q_1;
  };
  protoOf(PrimaryDeviceConfiguration).atStartOfStudy = function () {
    return create_1(this, Companion_getInstance().wf_1);
  };
  function isPrimary(_this__u8e3s4) {
    // Inline function 'kotlin.contracts.contract' call
    return _this__u8e3s4 instanceof PrimaryDeviceConfiguration;
  }
  function Smartphone$Tasks$WEB$lambda() {
    return new WebTaskBuilder();
  }
  function Companion_41() {
    Companion_instance_42 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = NamespacedIdSerializer_getInstance();
    var tmp_1 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m1r_1 = [null, null, null, new LinkedHashMapSerializer(tmp_0, PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$2))];
  }
  protoOf(Companion_41).create = function (roleName, builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new SmartphoneBuilder();
    // Inline function 'kotlin.contracts.contract' call
    builder(this_0);
    var smartphoneBuilder = this_0;
    var configuration = smartphoneBuilder.buildSamplingConfiguration();
    return new Smartphone(roleName, smartphoneBuilder.isOptional, configuration);
  };
  protoOf(Companion_41).m16 = function () {
    return $serializer_getInstance_24();
  };
  var Companion_instance_42;
  function Companion_getInstance_42() {
    if (Companion_instance_42 == null)
      new Companion_41();
    return Companion_instance_42;
  }
  function Sensors_2() {
    Sensors_instance_2 = this;
    DataTypeSamplingSchemeMap.call(this);
    this.GEOLOCATION = this.m1f(new AdaptiveGranularitySamplingScheme(CarpDataTypes_getInstance().GEOLOCATION));
    this.STEP_COUNT = this.m1f(new NoOptionsSamplingScheme(CarpDataTypes_getInstance().STEP_COUNT));
    var tmp = this;
    var tmp_0 = CarpDataTypes_getInstance().NON_GRAVITATIONAL_ACCELERATION;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration_0(200, DurationUnit_MILLISECONDS_getInstance());
    tmp.NON_GRAVITATIONAL_ACCELERATION = this.m1f(new IntervalSamplingScheme(tmp_0, tmp$ret$0));
    var tmp_1 = this;
    var tmp_2 = CarpDataTypes_getInstance().ACCELERATION;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$1 = toDuration_0(200, DurationUnit_MILLISECONDS_getInstance());
    tmp_1.ACCELERATION = this.m1f(new IntervalSamplingScheme(tmp_2, tmp$ret$1));
    var tmp_3 = this;
    var tmp_4 = CarpDataTypes_getInstance().ANGULAR_VELOCITY;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$2 = toDuration_0(200, DurationUnit_MILLISECONDS_getInstance());
    tmp_3.ANGULAR_VELOCITY = this.m1f(new IntervalSamplingScheme(tmp_4, tmp$ret$2));
  }
  protoOf(Sensors_2).o1i = function () {
    return this.GEOLOCATION;
  };
  protoOf(Sensors_2).q1i = function () {
    return this.STEP_COUNT;
  };
  protoOf(Sensors_2).c1j = function () {
    return this.NON_GRAVITATIONAL_ACCELERATION;
  };
  protoOf(Sensors_2).g1j = function () {
    return this.ACCELERATION;
  };
  protoOf(Sensors_2).i1j = function () {
    return this.ANGULAR_VELOCITY;
  };
  var Sensors_instance_2;
  function Sensors_getInstance_2() {
    if (Sensors_instance_2 == null)
      new Sensors_2();
    return Sensors_instance_2;
  }
  function Tasks_2() {
    Tasks_instance_2 = this;
    TaskConfigurationList_init_$Init$(this);
    var tmp = this;
    tmp.WEB = this.add(Smartphone$Tasks$WEB$lambda);
  }
  protoOf(Tasks_2).r1r = function () {
    return this.WEB;
  };
  var Tasks_instance_2;
  function Tasks_getInstance_2() {
    if (Tasks_instance_2 == null)
      new Tasks_2();
    return Tasks_instance_2;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.Smartphone', this, 4);
    tmp0_serialDesc.nt('isPrimaryDevice', false);
    tmp0_serialDesc.nt('roleName', false);
    tmp0_serialDesc.nt('isOptional', true);
    tmp0_serialDesc.nt('defaultSamplingConfiguration', true);
    this.s1r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).pi = function () {
    return this.s1r_1;
  };
  protoOf($serializer_24).cu = function () {
    var tmp0_cached = Companion_getInstance_42().m1r_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[3]];
  };
  protoOf($serializer_24).ri = function (decoder) {
    var tmp0_desc = this.s1r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_42().m1r_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.zl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.zl(tmp0_desc, 2);
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
            tmp4_local0 = tmp8_input.zl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.zl(tmp0_desc, 2);
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
    return Smartphone_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_24).t1r = function (encoder, value) {
    var tmp0_desc = this.s1r_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_42().m1r_1;
    tmp1_output.fn(tmp0_desc, 0, value.m1q_1);
    tmp1_output.nn(tmp0_desc, 1, value.v1r_1);
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.w1r_1 === false)) {
      tmp1_output.fn(tmp0_desc, 2, value.w1r_1);
    }
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !equals(value.x1r_1, emptyMap())) {
      tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.x1r_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_24).qi = function (encoder, value) {
    return this.t1r(encoder, value instanceof Smartphone ? value : THROW_CCE());
  };
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function Smartphone_init_$Init$(seen1, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_24().s1r_1);
    }
    PrimaryDeviceConfiguration_init_$Init$(seen1, isPrimaryDevice, serializationConstructorMarker, $this);
    $this.v1r_1 = roleName;
    if (0 === (seen1 & 4))
      $this.w1r_1 = false;
    else
      $this.w1r_1 = isOptional;
    if (0 === (seen1 & 8))
      $this.x1r_1 = emptyMap();
    else
      $this.x1r_1 = defaultSamplingConfiguration;
    return $this;
  }
  function Smartphone_init_$Create$(seen1, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker) {
    return Smartphone_init_$Init$(seen1, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(Smartphone)));
  }
  function Smartphone(roleName, isOptional, defaultSamplingConfiguration) {
    Companion_getInstance_42();
    isOptional = isOptional === VOID ? false : isOptional;
    defaultSamplingConfiguration = defaultSamplingConfiguration === VOID ? emptyMap() : defaultSamplingConfiguration;
    PrimaryDeviceConfiguration.call(this);
    this.v1r_1 = roleName;
    this.w1r_1 = isOptional;
    this.x1r_1 = defaultSamplingConfiguration;
  }
  protoOf(Smartphone).u1o = function () {
    return this.v1r_1;
  };
  protoOf(Smartphone).v1o = function () {
    return this.w1r_1;
  };
  protoOf(Smartphone).w1o = function () {
    return this.x1r_1;
  };
  protoOf(Smartphone).getSupportedDataTypes = function () {
    return Sensors_getInstance_2().l2();
  };
  protoOf(Smartphone).getDataTypeSamplingSchemes = function () {
    return Sensors_getInstance_2();
  };
  protoOf(Smartphone).createDeviceRegistrationBuilder = function () {
    return new DefaultDeviceRegistrationBuilder();
  };
  protoOf(Smartphone).getRegistrationClass = function () {
    return getKClass(DefaultDeviceRegistration);
  };
  protoOf(Smartphone).isValidRegistration = function (registration) {
    return Trilean_TRUE_getInstance();
  };
  protoOf(Smartphone).od = function () {
    return this.v1r_1;
  };
  protoOf(Smartphone).pd = function () {
    return this.w1r_1;
  };
  protoOf(Smartphone).r1g = function () {
    return this.x1r_1;
  };
  protoOf(Smartphone).y1r = function (roleName, isOptional, defaultSamplingConfiguration) {
    return new Smartphone(roleName, isOptional, defaultSamplingConfiguration);
  };
  protoOf(Smartphone).copy = function (roleName, isOptional, defaultSamplingConfiguration, $super) {
    roleName = roleName === VOID ? this.v1r_1 : roleName;
    isOptional = isOptional === VOID ? this.w1r_1 : isOptional;
    defaultSamplingConfiguration = defaultSamplingConfiguration === VOID ? this.x1r_1 : defaultSamplingConfiguration;
    return this.y1r(roleName, isOptional, defaultSamplingConfiguration);
  };
  protoOf(Smartphone).toString = function () {
    return 'Smartphone(roleName=' + this.v1r_1 + ', isOptional=' + this.w1r_1 + ', defaultSamplingConfiguration=' + this.x1r_1 + ')';
  };
  protoOf(Smartphone).hashCode = function () {
    var result = getStringHashCode(this.v1r_1);
    result = imul(result, 31) + getBooleanHashCode(this.w1r_1) | 0;
    result = imul(result, 31) + hashCode(this.x1r_1) | 0;
    return result;
  };
  protoOf(Smartphone).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Smartphone))
      return false;
    var tmp0_other_with_cast = other instanceof Smartphone ? other : THROW_CCE();
    if (!(this.v1r_1 === tmp0_other_with_cast.v1r_1))
      return false;
    if (!(this.w1r_1 === tmp0_other_with_cast.w1r_1))
      return false;
    if (!equals(this.x1r_1, tmp0_other_with_cast.x1r_1))
      return false;
    return true;
  };
  function SmartphoneBuilder() {
    DeviceConfigurationBuilder.call(this);
    this.isOptional = false;
  }
  protoOf(SmartphoneBuilder).z1r = function (_set____db54di) {
    this.isOptional = _set____db54di;
  };
  protoOf(SmartphoneBuilder).v1o = function () {
    return this.isOptional;
  };
  protoOf(SmartphoneBuilder).createSamplingConfigurationMapBuilder = function () {
    return new SmartphoneSamplingConfigurationMapBuilder();
  };
  function SmartphoneSamplingConfigurationMapBuilder() {
    SamplingConfigurationMapBuilder.call(this);
  }
  protoOf(SmartphoneSamplingConfigurationMapBuilder).geolocation = function (builder) {
    return this.a1s(Sensors_getInstance_2().GEOLOCATION, builder);
  };
  protoOf(SmartphoneSamplingConfigurationMapBuilder).nonGravitationalAcceleration = function (builder) {
    return this.a1s(Sensors_getInstance_2().NON_GRAVITATIONAL_ACCELERATION, builder);
  };
  protoOf(SmartphoneSamplingConfigurationMapBuilder).acceleration = function (builder) {
    return this.a1s(Sensors_getInstance_2().ACCELERATION, builder);
  };
  protoOf(SmartphoneSamplingConfigurationMapBuilder).angularVelocity = function (builder) {
    return this.a1s(Sensors_getInstance_2().ANGULAR_VELOCITY, builder);
  };
  function Sensors_3() {
    Sensors_instance_3 = this;
    DataTypeSamplingSchemeMap.call(this);
  }
  var Sensors_instance_3;
  function Sensors_getInstance_3() {
    if (Sensors_instance_3 == null)
      new Sensors_3();
    return Sensors_instance_3;
  }
  function Tasks_3() {
    Tasks_instance_3 = this;
    TaskConfigurationList_init_$Init$(this);
  }
  var Tasks_instance_3;
  function Tasks_getInstance_3() {
    if (Tasks_instance_3 == null)
      new Tasks_3();
    return Tasks_instance_3;
  }
  function Companion_42() {
    Companion_instance_43 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = NamespacedIdSerializer_getInstance();
    var tmp_1 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b1s_1 = [null, null, null, new LinkedHashMapSerializer(tmp_0, PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$2))];
  }
  protoOf(Companion_42).m16 = function () {
    return $serializer_getInstance_25();
  };
  var Companion_instance_43;
  function Companion_getInstance_43() {
    if (Companion_instance_43 == null)
      new Companion_42();
    return Companion_instance_43;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.Website', this, 4);
    tmp0_serialDesc.nt('isPrimaryDevice', false);
    tmp0_serialDesc.nt('roleName', false);
    tmp0_serialDesc.nt('isOptional', true);
    tmp0_serialDesc.nt('defaultSamplingConfiguration', true);
    this.c1s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).pi = function () {
    return this.c1s_1;
  };
  protoOf($serializer_25).cu = function () {
    var tmp0_cached = Companion_getInstance_43().b1s_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[3]];
  };
  protoOf($serializer_25).ri = function (decoder) {
    var tmp0_desc = this.c1s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_43().b1s_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.zl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.zl(tmp0_desc, 2);
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
            tmp4_local0 = tmp8_input.zl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.zl(tmp0_desc, 2);
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
    return Website_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_25).d1s = function (encoder, value) {
    var tmp0_desc = this.c1s_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_43().b1s_1;
    tmp1_output.fn(tmp0_desc, 0, value.m1q_1);
    tmp1_output.nn(tmp0_desc, 1, value.f1s_1);
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.g1s_1 === false)) {
      tmp1_output.fn(tmp0_desc, 2, value.g1s_1);
    }
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !equals(value.h1s_1, emptyMap())) {
      tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.h1s_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_25).qi = function (encoder, value) {
    return this.d1s(encoder, value instanceof Website ? value : THROW_CCE());
  };
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 == null)
      new $serializer_25();
    return $serializer_instance_25;
  }
  function Website_init_$Init$(seen1, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_25().c1s_1);
    }
    PrimaryDeviceConfiguration_init_$Init$(seen1, isPrimaryDevice, serializationConstructorMarker, $this);
    $this.f1s_1 = roleName;
    if (0 === (seen1 & 4))
      $this.g1s_1 = false;
    else
      $this.g1s_1 = isOptional;
    if (0 === (seen1 & 8))
      $this.h1s_1 = emptyMap();
    else
      $this.h1s_1 = defaultSamplingConfiguration;
    return $this;
  }
  function Website_init_$Create$(seen1, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker) {
    return Website_init_$Init$(seen1, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(Website)));
  }
  function Website(roleName, isOptional) {
    Companion_getInstance_43();
    isOptional = isOptional === VOID ? false : isOptional;
    PrimaryDeviceConfiguration.call(this);
    this.f1s_1 = roleName;
    this.g1s_1 = isOptional;
    this.h1s_1 = emptyMap();
  }
  protoOf(Website).u1o = function () {
    return this.f1s_1;
  };
  protoOf(Website).v1o = function () {
    return this.g1s_1;
  };
  protoOf(Website).getSupportedDataTypes = function () {
    return Sensors_getInstance_3().l2();
  };
  protoOf(Website).getDataTypeSamplingSchemes = function () {
    return Sensors_getInstance_3();
  };
  protoOf(Website).w1o = function () {
    return this.h1s_1;
  };
  protoOf(Website).createDeviceRegistrationBuilder = function () {
    return new WebsiteDeviceRegistrationBuilder();
  };
  protoOf(Website).getRegistrationClass = function () {
    return getKClass(WebsiteDeviceRegistration);
  };
  protoOf(Website).isValidRegistration = function (registration) {
    return Trilean_TRUE_getInstance();
  };
  protoOf(Website).od = function () {
    return this.f1s_1;
  };
  protoOf(Website).pd = function () {
    return this.g1s_1;
  };
  protoOf(Website).x1o = function (roleName, isOptional) {
    return new Website(roleName, isOptional);
  };
  protoOf(Website).copy = function (roleName, isOptional, $super) {
    roleName = roleName === VOID ? this.f1s_1 : roleName;
    isOptional = isOptional === VOID ? this.g1s_1 : isOptional;
    return this.x1o(roleName, isOptional);
  };
  protoOf(Website).toString = function () {
    return 'Website(roleName=' + this.f1s_1 + ', isOptional=' + this.g1s_1 + ')';
  };
  protoOf(Website).hashCode = function () {
    var result = getStringHashCode(this.f1s_1);
    result = imul(result, 31) + getBooleanHashCode(this.g1s_1) | 0;
    return result;
  };
  protoOf(Website).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Website))
      return false;
    var tmp0_other_with_cast = other instanceof Website ? other : THROW_CCE();
    if (!(this.f1s_1 === tmp0_other_with_cast.f1s_1))
      return false;
    if (!(this.g1s_1 === tmp0_other_with_cast.g1s_1))
      return false;
    return true;
  };
  function Companion_43() {
  }
  protoOf(Companion_43).m16 = function () {
    return $serializer_getInstance_26();
  };
  var Companion_instance_44;
  function Companion_getInstance_44() {
    return Companion_instance_44;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration', this, 5);
    tmp0_serialDesc.nt('registrationCreatedOn', false);
    tmp0_serialDesc.nt('url', false);
    tmp0_serialDesc.nt('userAgent', false);
    tmp0_serialDesc.nt('deviceDisplayName', false);
    tmp0_serialDesc.nt('deviceId', false);
    this.i1s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).pi = function () {
    return this.i1s_1;
  };
  protoOf($serializer_26).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantIso8601Serializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance()];
  };
  protoOf($serializer_26).ri = function (decoder) {
    var tmp0_desc = this.i1s_1;
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
      tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.hm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.hm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.lm(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.hm(tmp0_desc, 4);
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
            tmp5_local1 = tmp9_input.hm(tmp0_desc, 1);
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
            tmp8_local4 = tmp9_input.hm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yl(tmp0_desc);
    return WebsiteDeviceRegistration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_26).j1s = function (encoder, value) {
    var tmp0_desc = this.i1s_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), value.registrationCreatedOn);
    tmp1_output.nn(tmp0_desc, 1, value.url);
    tmp1_output.nn(tmp0_desc, 2, value.userAgent);
    tmp1_output.rn(tmp0_desc, 3, StringSerializer_getInstance(), value.k1s_1);
    tmp1_output.nn(tmp0_desc, 4, value.l1s_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_26).qi = function (encoder, value) {
    return this.j1s(encoder, value instanceof WebsiteDeviceRegistration ? value : THROW_CCE());
  };
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 == null)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function WebsiteDeviceRegistration_init_$Init$(seen1, registrationCreatedOn, url, userAgent, deviceDisplayName, deviceId, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_26().i1s_1);
    }
    DeviceRegistration_init_$Init$(seen1, registrationCreatedOn, serializationConstructorMarker, $this);
    $this.url = url;
    $this.userAgent = userAgent;
    $this.k1s_1 = deviceDisplayName;
    $this.l1s_1 = deviceId;
    return $this;
  }
  function WebsiteDeviceRegistration_init_$Create$(seen1, registrationCreatedOn, url, userAgent, deviceDisplayName, deviceId, serializationConstructorMarker) {
    return WebsiteDeviceRegistration_init_$Init$(seen1, registrationCreatedOn, url, userAgent, deviceDisplayName, deviceId, serializationConstructorMarker, objectCreate(protoOf(WebsiteDeviceRegistration)));
  }
  function WebsiteDeviceRegistration(url, userAgent, deviceDisplayName) {
    deviceDisplayName = deviceDisplayName === VOID ? userAgent : deviceDisplayName;
    DeviceRegistration.call(this);
    this.url = url;
    this.userAgent = userAgent;
    this.k1s_1 = deviceDisplayName;
    this.l1s_1 = this.url;
  }
  protoOf(WebsiteDeviceRegistration).m1s = function () {
    return this.url;
  };
  protoOf(WebsiteDeviceRegistration).n1s = function () {
    return this.userAgent;
  };
  protoOf(WebsiteDeviceRegistration).j1p = function () {
    return this.k1s_1;
  };
  protoOf(WebsiteDeviceRegistration).k1p = function () {
    return this.l1s_1;
  };
  protoOf(WebsiteDeviceRegistration).od = function () {
    return this.url;
  };
  protoOf(WebsiteDeviceRegistration).pd = function () {
    return this.userAgent;
  };
  protoOf(WebsiteDeviceRegistration).r1g = function () {
    return this.k1s_1;
  };
  protoOf(WebsiteDeviceRegistration).o1s = function (url, userAgent, deviceDisplayName) {
    return new WebsiteDeviceRegistration(url, userAgent, deviceDisplayName);
  };
  protoOf(WebsiteDeviceRegistration).copy = function (url, userAgent, deviceDisplayName, $super) {
    url = url === VOID ? this.url : url;
    userAgent = userAgent === VOID ? this.userAgent : userAgent;
    deviceDisplayName = deviceDisplayName === VOID ? this.k1s_1 : deviceDisplayName;
    return this.o1s(url, userAgent, deviceDisplayName);
  };
  protoOf(WebsiteDeviceRegistration).toString = function () {
    return 'WebsiteDeviceRegistration(url=' + this.url + ', userAgent=' + this.userAgent + ', deviceDisplayName=' + this.k1s_1 + ')';
  };
  protoOf(WebsiteDeviceRegistration).hashCode = function () {
    var result = getStringHashCode(this.url);
    result = imul(result, 31) + getStringHashCode(this.userAgent) | 0;
    result = imul(result, 31) + (this.k1s_1 == null ? 0 : getStringHashCode(this.k1s_1)) | 0;
    return result;
  };
  protoOf(WebsiteDeviceRegistration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebsiteDeviceRegistration))
      return false;
    var tmp0_other_with_cast = other instanceof WebsiteDeviceRegistration ? other : THROW_CCE();
    if (!(this.url === tmp0_other_with_cast.url))
      return false;
    if (!(this.userAgent === tmp0_other_with_cast.userAgent))
      return false;
    if (!(this.k1s_1 == tmp0_other_with_cast.k1s_1))
      return false;
    return true;
  };
  function Companion_44() {
  }
  protoOf(Companion_44).m16 = function () {
    return NotSerializable_getInstance();
  };
  var Companion_instance_45;
  function Companion_getInstance_45() {
    return Companion_instance_45;
  }
  function WebsiteDeviceRegistrationBuilder() {
    DeviceRegistrationBuilder.call(this);
    this.url = '';
    this.userAgent = '';
  }
  protoOf(WebsiteDeviceRegistrationBuilder).p1s = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(WebsiteDeviceRegistrationBuilder).m1s = function () {
    return this.url;
  };
  protoOf(WebsiteDeviceRegistrationBuilder).q1s = function (_set____db54di) {
    this.userAgent = _set____db54di;
  };
  protoOf(WebsiteDeviceRegistrationBuilder).n1s = function () {
    return this.userAgent;
  };
  protoOf(WebsiteDeviceRegistrationBuilder).build = function () {
    return new WebsiteDeviceRegistration(this.url, this.userAgent, this.deviceDisplayName);
  };
  function AdaptiveGranularitySamplingScheme$_init_$lambda_r4perr() {
    return new GranularitySamplingConfigurationBuilder(Granularity_Balanced_getInstance());
  }
  function AdaptiveGranularitySamplingScheme(dataType) {
    BatteryAwareSamplingScheme.call(this, dataType, AdaptiveGranularitySamplingScheme$_init_$lambda_r4perr, new GranularitySamplingConfiguration(Granularity_Balanced_getInstance()), new GranularitySamplingConfiguration(Granularity_Coarse_getInstance()));
  }
  protoOf(AdaptiveGranularitySamplingScheme).isValidBatteryLevelConfiguration = function (configuration) {
    return true;
  };
  function BatteryAwareSamplingScheme(dataType, builder, normal, low, critical) {
    critical = critical === VOID ? null : critical;
    DataTypeSamplingScheme.call(this, dataType, new BatteryAwareSamplingConfiguration(normal, low, critical));
    this.r1s_1 = builder;
    this.normal = normal;
    this.low = low;
    this.critical = critical;
    this.s1s_1 = getKClassFromExpression(this.normal);
  }
  protoOf(BatteryAwareSamplingScheme).t1s = function () {
    return this.normal;
  };
  protoOf(BatteryAwareSamplingScheme).u1s = function () {
    return this.low;
  };
  protoOf(BatteryAwareSamplingScheme).v1s = function () {
    return this.critical;
  };
  protoOf(BatteryAwareSamplingScheme).createSamplingConfigurationBuilder = function () {
    return new BatteryAwareSamplingConfigurationBuilder(this.r1s_1, this.normal, this.low, this.critical);
  };
  protoOf(BatteryAwareSamplingScheme).isValid = function (configuration) {
    if (!(configuration instanceof BatteryAwareSamplingConfiguration))
      return false;
    var correctTypes = (this.s1s_1.j6(configuration.normal) ? this.s1s_1.j6(configuration.low) : false) ? configuration.critical == null ? true : this.s1s_1.j6(configuration.critical) : false;
    if (!correctTypes)
      return false;
    var tmp;
    var tmp_0;
    var tmp_1 = configuration.normal;
    if (this.isValidBatteryLevelConfiguration(isInterface(tmp_1, SamplingConfiguration) ? tmp_1 : THROW_CCE())) {
      var tmp_2 = configuration.low;
      tmp_0 = this.isValidBatteryLevelConfiguration(isInterface(tmp_2, SamplingConfiguration) ? tmp_2 : THROW_CCE());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_3;
      if (configuration.critical == null) {
        tmp_3 = true;
      } else {
        var tmp_4 = configuration.critical;
        tmp_3 = this.isValidBatteryLevelConfiguration((!(tmp_4 == null) ? isInterface(tmp_4, SamplingConfiguration) : false) ? tmp_4 : THROW_CCE());
      }
      tmp = tmp_3;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer_27.call($this);
    $this.a1t_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, objectCreate(protoOf($serializer_27)));
  }
  function Companion_45() {
    Companion_instance_46 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfiguration', null, 3);
    tmp0_serialDesc.nt('normal', false);
    tmp0_serialDesc.nt('low', false);
    tmp0_serialDesc.nt('critical', true);
    this.b1t_1 = tmp0_serialDesc;
  }
  protoOf(Companion_45).d1r = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  protoOf(Companion_45).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  protoOf(Companion_45).c1t = function () {
    return this.b1t_1;
  };
  var Companion_instance_46;
  function Companion_getInstance_46() {
    if (Companion_instance_46 == null)
      new Companion_45();
    return Companion_instance_46;
  }
  function $serializer_27() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfiguration', this, 3);
    tmp0_serialDesc.nt('normal', false);
    tmp0_serialDesc.nt('low', false);
    tmp0_serialDesc.nt('critical', true);
    this.z1s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).pi = function () {
    return this.z1s_1;
  };
  protoOf($serializer_27).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.a1t_1, this.a1t_1, get_nullable(this.a1t_1)];
  };
  protoOf($serializer_27).ri = function (decoder) {
    var tmp0_desc = this.z1s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, this.a1t_1, tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, this.a1t_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.lm(tmp0_desc, 2, this.a1t_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, this.a1t_1, tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, this.a1t_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.lm(tmp0_desc, 2, this.a1t_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return BatteryAwareSamplingConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_27).d1t = function (encoder, value) {
    var tmp0_desc = this.z1s_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, this.a1t_1, value.normal);
    tmp1_output.pn(tmp0_desc, 1, this.a1t_1, value.low);
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.critical == null)) {
      tmp1_output.rn(tmp0_desc, 2, this.a1t_1, value.critical);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_27).qi = function (encoder, value) {
    return this.d1t(encoder, value instanceof BatteryAwareSamplingConfiguration ? value : THROW_CCE());
  };
  protoOf($serializer_27).du = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.a1t_1];
  };
  function BatteryAwareSamplingConfiguration_init_$Init$(seen1, normal, low, critical, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, Companion_getInstance_46().b1t_1);
    }
    $this.normal = normal;
    $this.low = low;
    if (0 === (seen1 & 4))
      $this.critical = null;
    else
      $this.critical = critical;
    return $this;
  }
  function BatteryAwareSamplingConfiguration_init_$Create$(seen1, normal, low, critical, serializationConstructorMarker) {
    return BatteryAwareSamplingConfiguration_init_$Init$(seen1, normal, low, critical, serializationConstructorMarker, objectCreate(protoOf(BatteryAwareSamplingConfiguration)));
  }
  function BatteryAwareSamplingConfiguration(normal, low, critical) {
    Companion_getInstance_46();
    critical = critical === VOID ? null : critical;
    this.normal = normal;
    this.low = low;
    this.critical = critical;
  }
  protoOf(BatteryAwareSamplingConfiguration).t1s = function () {
    return this.normal;
  };
  protoOf(BatteryAwareSamplingConfiguration).u1s = function () {
    return this.low;
  };
  protoOf(BatteryAwareSamplingConfiguration).v1s = function () {
    return this.critical;
  };
  protoOf(BatteryAwareSamplingConfiguration).od = function () {
    return this.normal;
  };
  protoOf(BatteryAwareSamplingConfiguration).pd = function () {
    return this.low;
  };
  protoOf(BatteryAwareSamplingConfiguration).r1g = function () {
    return this.critical;
  };
  protoOf(BatteryAwareSamplingConfiguration).e1t = function (normal, low, critical) {
    return new BatteryAwareSamplingConfiguration(normal, low, critical);
  };
  protoOf(BatteryAwareSamplingConfiguration).copy = function (normal, low, critical, $super) {
    normal = normal === VOID ? this.normal : normal;
    low = low === VOID ? this.low : low;
    critical = critical === VOID ? this.critical : critical;
    return this.e1t(normal, low, critical);
  };
  protoOf(BatteryAwareSamplingConfiguration).toString = function () {
    return 'BatteryAwareSamplingConfiguration(normal=' + this.normal + ', low=' + this.low + ', critical=' + this.critical + ')';
  };
  protoOf(BatteryAwareSamplingConfiguration).hashCode = function () {
    var result = hashCode(this.normal);
    result = imul(result, 31) + hashCode(this.low) | 0;
    result = imul(result, 31) + (this.critical == null ? 0 : hashCode(this.critical)) | 0;
    return result;
  };
  protoOf(BatteryAwareSamplingConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BatteryAwareSamplingConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof BatteryAwareSamplingConfiguration ? other : THROW_CCE();
    if (!equals(this.normal, tmp0_other_with_cast.normal))
      return false;
    if (!equals(this.low, tmp0_other_with_cast.low))
      return false;
    if (!equals(this.critical, tmp0_other_with_cast.critical))
      return false;
    return true;
  };
  function createConfiguration($this, builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.f1t_1();
    // Inline function 'kotlin.contracts.contract' call
    builder(this_0);
    return this_0.pr();
  }
  function BatteryAwareSamplingConfigurationBuilder(createBuilder, normal, low, critical) {
    this.f1t_1 = createBuilder;
    this.g1t_1 = normal;
    this.h1t_1 = low;
    this.i1t_1 = critical;
  }
  protoOf(BatteryAwareSamplingConfigurationBuilder).batteryNormal = function (builder) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    this.g1t_1 = createConfiguration(this, builder);
    return Unit_instance;
  };
  protoOf(BatteryAwareSamplingConfigurationBuilder).batteryLow = function (builder) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    this.h1t_1 = createConfiguration(this, builder);
    return Unit_instance;
  };
  protoOf(BatteryAwareSamplingConfigurationBuilder).batteryCritical = function (builder) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    this.i1t_1 = createConfiguration(this, builder);
    return Unit_instance;
  };
  protoOf(BatteryAwareSamplingConfigurationBuilder).allBatteryLevels = function (builder) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it = createConfiguration(this, builder);
    this.g1t_1 = it;
    this.h1t_1 = it;
    this.i1t_1 = it;
    return Unit_instance;
  };
  protoOf(BatteryAwareSamplingConfigurationBuilder).pr = function () {
    return new BatteryAwareSamplingConfiguration(this.g1t_1, this.h1t_1, this.i1t_1);
  };
  function DataTypeSamplingScheme(dataType, default_0) {
    this.dataType = dataType;
    this.default = default_0;
  }
  protoOf(DataTypeSamplingScheme).w1s = function () {
    return this.dataType;
  };
  protoOf(DataTypeSamplingScheme).x1s = function () {
    return this.default;
  };
  protoOf(DataTypeSamplingScheme).samplingConfiguration = function (builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.createSamplingConfigurationBuilder();
    // Inline function 'kotlin.contracts.contract' call
    builder(this_0);
    return this_0.j1t(this);
  };
  protoOf(DataTypeSamplingScheme).y1s = function (samplingConfigurationBuilder) {
    var tmp;
    if (samplingConfigurationBuilder == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme.measure.<anonymous>' call
      tmp = this.samplingConfiguration(samplingConfigurationBuilder);
    }
    return new DataStream(this.dataType.type, tmp);
  };
  protoOf(DataTypeSamplingScheme).measure = function (samplingConfigurationBuilder, $super) {
    samplingConfigurationBuilder = samplingConfigurationBuilder === VOID ? null : samplingConfigurationBuilder;
    return this.y1s(samplingConfigurationBuilder);
  };
  function DataTypeSamplingSchemeMap$_init_$lambda_1hed5t(scheme) {
    return scheme.dataType.type;
  }
  function DataTypeSamplingSchemeMap() {
    EnumObjectMap_init_$Init$(DataTypeSamplingSchemeMap$_init_$lambda_1hed5t, this);
  }
  function GranularitySamplingScheme(dataType, defaultGranularity) {
    DataTypeSamplingScheme.call(this, dataType, new GranularitySamplingConfiguration(defaultGranularity));
    this.defaultGranularity = defaultGranularity;
  }
  protoOf(GranularitySamplingScheme).k1t = function () {
    return this.defaultGranularity;
  };
  protoOf(GranularitySamplingScheme).createSamplingConfigurationBuilder = function () {
    return new GranularitySamplingConfigurationBuilder(this.defaultGranularity);
  };
  protoOf(GranularitySamplingScheme).isValid = function (configuration) {
    return configuration instanceof GranularitySamplingConfiguration;
  };
  function _get_$cachedSerializer__te6jhj_6($this) {
    return $this.l1t_1.r2();
  }
  function Granularity$Companion$_anonymous__61tclb() {
    return createSimpleEnumSerializer('dk.cachet.carp.common.application.sampling.Granularity', values_3());
  }
  var Granularity_Detailed_instance;
  var Granularity_Balanced_instance;
  var Granularity_Coarse_instance;
  function Companion_46() {
    Companion_instance_47 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.l1t_1 = lazy(tmp_0, Granularity$Companion$_anonymous__61tclb);
  }
  protoOf(Companion_46).m16 = function () {
    return _get_$cachedSerializer__te6jhj_6(this);
  };
  protoOf(Companion_46).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_47;
  function Companion_getInstance_47() {
    Granularity_initEntries();
    if (Companion_instance_47 == null)
      new Companion_46();
    return Companion_instance_47;
  }
  function values_3() {
    return [Granularity_Detailed_getInstance(), Granularity_Balanced_getInstance(), Granularity_Coarse_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'Detailed':
        return Granularity_Detailed_getInstance();
      case 'Balanced':
        return Granularity_Balanced_getInstance();
      case 'Coarse':
        return Granularity_Coarse_getInstance();
      default:
        Granularity_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Granularity_entriesInitialized;
  function Granularity_initEntries() {
    if (Granularity_entriesInitialized)
      return Unit_instance;
    Granularity_entriesInitialized = true;
    Granularity_Detailed_instance = new Granularity('Detailed', 0);
    Granularity_Balanced_instance = new Granularity('Balanced', 1);
    Granularity_Coarse_instance = new Granularity('Coarse', 2);
    Companion_getInstance_47();
  }
  function Granularity(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_47() {
    Companion_instance_48 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o1t_1 = [Companion_getInstance_47().m16()];
  }
  protoOf(Companion_47).m16 = function () {
    return $serializer_getInstance_27();
  };
  var Companion_instance_48;
  function Companion_getInstance_48() {
    if (Companion_instance_48 == null)
      new Companion_47();
    return Companion_instance_48;
  }
  function $serializer_28() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration', this, 1);
    tmp0_serialDesc.nt('granularity', false);
    this.p1t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).pi = function () {
    return this.p1t_1;
  };
  protoOf($serializer_28).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_48().o1t_1[0]];
  };
  protoOf($serializer_28).ri = function (decoder) {
    var tmp0_desc = this.p1t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xl(tmp0_desc);
    var tmp6_cached = Companion_getInstance_48().o1t_1;
    if (tmp5_input.om()) {
      tmp4_local0 = tmp5_input.jm(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.jm(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yl(tmp0_desc);
    return GranularitySamplingConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_28).q1t = function (encoder, value) {
    var tmp0_desc = this.p1t_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_48().o1t_1;
    tmp1_output.pn(tmp0_desc, 0, tmp2_cached[0], value.granularity);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_28).qi = function (encoder, value) {
    return this.q1t(encoder, value instanceof GranularitySamplingConfiguration ? value : THROW_CCE());
  };
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_28();
    return $serializer_instance_27;
  }
  function GranularitySamplingConfiguration_init_$Init$(seen1, granularity, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_27().p1t_1);
    }
    $this.granularity = granularity;
    return $this;
  }
  function GranularitySamplingConfiguration_init_$Create$(seen1, granularity, serializationConstructorMarker) {
    return GranularitySamplingConfiguration_init_$Init$(seen1, granularity, serializationConstructorMarker, objectCreate(protoOf(GranularitySamplingConfiguration)));
  }
  function GranularitySamplingConfiguration(granularity) {
    Companion_getInstance_48();
    this.granularity = granularity;
  }
  protoOf(GranularitySamplingConfiguration).r1t = function () {
    return this.granularity;
  };
  protoOf(GranularitySamplingConfiguration).od = function () {
    return this.granularity;
  };
  protoOf(GranularitySamplingConfiguration).s1t = function (granularity) {
    return new GranularitySamplingConfiguration(granularity);
  };
  protoOf(GranularitySamplingConfiguration).copy = function (granularity, $super) {
    granularity = granularity === VOID ? this.granularity : granularity;
    return this.s1t(granularity);
  };
  protoOf(GranularitySamplingConfiguration).toString = function () {
    return 'GranularitySamplingConfiguration(granularity=' + this.granularity + ')';
  };
  protoOf(GranularitySamplingConfiguration).hashCode = function () {
    return this.granularity.hashCode();
  };
  protoOf(GranularitySamplingConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GranularitySamplingConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof GranularitySamplingConfiguration ? other : THROW_CCE();
    if (!this.granularity.equals(tmp0_other_with_cast.granularity))
      return false;
    return true;
  };
  function GranularitySamplingConfigurationBuilder(granularity) {
    this.granularity = granularity;
  }
  protoOf(GranularitySamplingConfigurationBuilder).t1t = function (_set____db54di) {
    this.granularity = _set____db54di;
  };
  protoOf(GranularitySamplingConfigurationBuilder).r1t = function () {
    return this.granularity;
  };
  protoOf(GranularitySamplingConfigurationBuilder).pr = function () {
    return new GranularitySamplingConfiguration(this.granularity);
  };
  function Granularity_Detailed_getInstance() {
    Granularity_initEntries();
    return Granularity_Detailed_instance;
  }
  function Granularity_Balanced_getInstance() {
    Granularity_initEntries();
    return Granularity_Balanced_instance;
  }
  function Granularity_Coarse_getInstance() {
    Granularity_initEntries();
    return Granularity_Coarse_instance;
  }
  function IntervalSamplingScheme(dataType, defaultMeasureInterval, validOptions) {
    validOptions = validOptions === VOID ? null : validOptions;
    DataTypeSamplingScheme.call(this, dataType, new IntervalSamplingConfiguration(defaultMeasureInterval));
    this.defaultMeasureInterval = defaultMeasureInterval;
    this.validOptions = validOptions;
    if (!(this.validOptions == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!this.validOptions.y()) {
        // Inline function 'dk.cachet.carp.common.application.sampling.IntervalSamplingScheme.<anonymous>' call
        var message = 'If only a fixed set of options are valid, at least one option needs to be present.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.validOptions.p(new Duration(this.defaultMeasureInterval))) {
        // Inline function 'dk.cachet.carp.common.application.sampling.IntervalSamplingScheme.<anonymous>' call
        var message_0 = 'If only a fixed set of options are valid, the default interval needs to be one of the options.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
  }
  protoOf(IntervalSamplingScheme).u1t = function () {
    return this.defaultMeasureInterval;
  };
  protoOf(IntervalSamplingScheme).v1t = function () {
    return this.validOptions;
  };
  protoOf(IntervalSamplingScheme).createSamplingConfigurationBuilder = function () {
    return new IntervalSamplingConfigurationBuilder(this.defaultMeasureInterval, this.validOptions);
  };
  protoOf(IntervalSamplingScheme).isValid = function (configuration) {
    var tmp;
    if (configuration instanceof IntervalSamplingConfiguration) {
      tmp = this.validOptions == null ? true : this.validOptions.p(new Duration(configuration.interval));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function Companion_48() {
  }
  protoOf(Companion_48).m16 = function () {
    return $serializer_getInstance_28();
  };
  var Companion_instance_49;
  function Companion_getInstance_49() {
    return Companion_instance_49;
  }
  function $serializer_29() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.sampling.IntervalSamplingConfiguration', this, 1);
    tmp0_serialDesc.nt('interval', false);
    this.w1t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_29).pi = function () {
    return this.w1t_1;
  };
  protoOf($serializer_29).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DurationSerializer_getInstance()];
  };
  protoOf($serializer_29).ri = function (decoder) {
    var tmp0_desc = this.w1t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xl(tmp0_desc);
    if (tmp5_input.om()) {
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp4_local0;
      var tmp_1 = tmp5_input.jm(tmp0_desc, 0, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp4_local0 = tmp_1 == null ? null : tmp_1.ag_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp4_local0;
            var tmp_4 = tmp5_input.jm(tmp0_desc, 0, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp4_local0 = tmp_4 == null ? null : tmp_4.ag_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yl(tmp0_desc);
    return IntervalSamplingConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_29).x1t = function (encoder, value) {
    var tmp0_desc = this.w1t_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, DurationSerializer_getInstance(), new Duration(value.interval));
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_29).qi = function (encoder, value) {
    return this.x1t(encoder, value instanceof IntervalSamplingConfiguration ? value : THROW_CCE());
  };
  var $serializer_instance_28;
  function $serializer_getInstance_28() {
    if ($serializer_instance_28 == null)
      new $serializer_29();
    return $serializer_instance_28;
  }
  function IntervalSamplingConfiguration_init_$Init$(seen1, interval, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_28().w1t_1);
    }
    $this.interval = interval;
    return $this;
  }
  function IntervalSamplingConfiguration_init_$Create$(seen1, interval, serializationConstructorMarker) {
    return IntervalSamplingConfiguration_init_$Init$(seen1, interval, serializationConstructorMarker, objectCreate(protoOf(IntervalSamplingConfiguration)));
  }
  function IntervalSamplingConfiguration(interval) {
    this.interval = interval;
  }
  protoOf(IntervalSamplingConfiguration).y1t = function () {
    return this.interval;
  };
  protoOf(IntervalSamplingConfiguration).b1g = function () {
    return this.interval;
  };
  protoOf(IntervalSamplingConfiguration).c1g = function (interval) {
    return new IntervalSamplingConfiguration(interval);
  };
  protoOf(IntervalSamplingConfiguration).copy = function (interval, $super) {
    interval = interval === VOID ? this.interval : interval;
    return this.c1g(interval);
  };
  protoOf(IntervalSamplingConfiguration).toString = function () {
    return 'IntervalSamplingConfiguration(interval=' + new Duration(this.interval) + ')';
  };
  protoOf(IntervalSamplingConfiguration).hashCode = function () {
    return Duration__hashCode_impl_u4exz6(this.interval);
  };
  protoOf(IntervalSamplingConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntervalSamplingConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof IntervalSamplingConfiguration ? other : THROW_CCE();
    if (!equals(this.interval, tmp0_other_with_cast.interval))
      return false;
    return true;
  };
  function IntervalSamplingConfigurationBuilder(interval, validOptions) {
    this.interval = interval;
    this.validOptions = validOptions;
  }
  protoOf(IntervalSamplingConfigurationBuilder).z1t = function (_set____db54di) {
    this.interval = _set____db54di;
  };
  protoOf(IntervalSamplingConfigurationBuilder).y1t = function () {
    return this.interval;
  };
  protoOf(IntervalSamplingConfigurationBuilder).v1t = function () {
    return this.validOptions;
  };
  protoOf(IntervalSamplingConfigurationBuilder).nearestOption = function (interval) {
    var tmp;
    if (this.validOptions == null) {
      tmp = interval;
    } else {
      // Inline function 'kotlin.checkNotNull' call
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.minByOrNull' call
        var iterator = this.validOptions.t();
        if (!iterator.u()) {
          tmp$ret$0 = null;
          break $l$block_0;
        }
        var minElem = iterator.v().ag_1;
        if (!iterator.u()) {
          tmp$ret$0 = minElem;
          break $l$block_0;
        }
        // Inline function 'dk.cachet.carp.common.application.sampling.IntervalSamplingConfigurationBuilder.nearestOption.<anonymous>' call
        var it = minElem;
        var minValue = _Duration___get_absoluteValue__impl__vr7i6w(Duration__minus_impl_q5cfm7(interval, it));
        do {
          var e = iterator.v().ag_1;
          // Inline function 'dk.cachet.carp.common.application.sampling.IntervalSamplingConfigurationBuilder.nearestOption.<anonymous>' call
          var v = _Duration___get_absoluteValue__impl__vr7i6w(Duration__minus_impl_q5cfm7(interval, e));
          if (compareTo(new Duration(minValue), new Duration(v)) > 0) {
            minElem = e;
            minValue = v;
          }
        }
         while (iterator.u());
        tmp$ret$0 = minElem;
      }
      var tmp_0 = tmp$ret$0;
      var value = tmp_0 == null ? null : new Duration(tmp_0);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.checkNotNull' call
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'kotlin.checkNotNull.<anonymous>' call
          var message = 'Required value was null.';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp$ret$4 = value.ag_1;
          break $l$block_1;
        }
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  };
  protoOf(IntervalSamplingConfigurationBuilder).pr = function () {
    return new IntervalSamplingConfiguration(this.interval);
  };
  function NoOptionsSamplingScheme(dataType) {
    DataTypeSamplingScheme.call(this, dataType, NoOptionsSamplingConfiguration_getInstance());
  }
  protoOf(NoOptionsSamplingScheme).createSamplingConfigurationBuilder = function () {
    return NoOptionsSamplingConfigurationBuilder_instance;
  };
  protoOf(NoOptionsSamplingScheme).isValid = function (configuration) {
    return configuration instanceof NoOptionsSamplingConfiguration;
  };
  function _get_$cachedSerializer__te6jhj_7($this) {
    return $this.a1u_1.r2();
  }
  function NoOptionsSamplingConfiguration$_anonymous__twr9d1() {
    var tmp = NoOptionsSamplingConfiguration_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer_init_$Create$('dk.cachet.carp.common.application.sampling.NoOptionsSamplingConfiguration', tmp, tmp$ret$2);
  }
  function NoOptionsSamplingConfiguration() {
    NoOptionsSamplingConfiguration_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.a1u_1 = lazy(tmp_0, NoOptionsSamplingConfiguration$_anonymous__twr9d1);
  }
  protoOf(NoOptionsSamplingConfiguration).m16 = function () {
    return _get_$cachedSerializer__te6jhj_7(this);
  };
  protoOf(NoOptionsSamplingConfiguration).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var NoOptionsSamplingConfiguration_instance;
  function NoOptionsSamplingConfiguration_getInstance() {
    if (NoOptionsSamplingConfiguration_instance == null)
      new NoOptionsSamplingConfiguration();
    return NoOptionsSamplingConfiguration_instance;
  }
  function NoOptionsSamplingConfigurationBuilder() {
  }
  protoOf(NoOptionsSamplingConfigurationBuilder).pr = function () {
    return NoOptionsSamplingConfiguration_getInstance();
  };
  var NoOptionsSamplingConfigurationBuilder_instance;
  function NoOptionsSamplingConfigurationBuilder_getInstance() {
    return NoOptionsSamplingConfigurationBuilder_instance;
  }
  function SamplingConfiguration() {
  }
  function SamplingConfigurationMapBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.b1r_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SamplingConfigurationMapBuilder).a1s = function (samplingScheme, builder) {
    var configuration = samplingScheme.samplingConfiguration(builder);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.b1r_1;
    var key = samplingScheme.dataType.type;
    this_0.n2(key, configuration);
    return configuration;
  };
  protoOf(SamplingConfigurationMapBuilder).pr = function () {
    return toMap(this.b1r_1);
  };
  function SamplingConfigurationBuilder() {
  }
  function get_ApiVersionRegex() {
    _init_properties_ApiVersion_kt__kxx60y();
    return ApiVersionRegex;
  }
  var ApiVersionRegex;
  function Companion_49() {
  }
  protoOf(Companion_49).fromString = function (apiVersion) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!get_ApiVersionRegex().m8(apiVersion)) {
      // Inline function 'dk.cachet.carp.common.application.services.Companion.fromString.<anonymous>' call
      var message = 'Invalid API version string representation.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_container = split(apiVersion, charArrayOf([_Char___init__impl__6a9atx(46)]));
    // Inline function 'kotlin.collections.component1' call
    var major = tmp0_container.c1(0);
    // Inline function 'kotlin.collections.component2' call
    var minor = tmp0_container.c1(1);
    return new ApiVersion(toInt(major), toInt(minor));
  };
  protoOf(Companion_49).m16 = function () {
    return ApiVersionSerializer_getInstance();
  };
  var Companion_instance_50;
  function Companion_getInstance_50() {
    return Companion_instance_50;
  }
  function ApiVersion(major, minor) {
    this.major = major;
    this.minor = minor;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.major >= 0 ? this.minor >= 0 : false)) {
      // Inline function 'dk.cachet.carp.common.application.services.ApiVersion.<anonymous>' call
      var message = 'Major and minor number must be positive.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ApiVersion).b1u = function () {
    return this.major;
  };
  protoOf(ApiVersion).c1u = function () {
    return this.minor;
  };
  protoOf(ApiVersion).isMoreRecent = function (otherVersion) {
    return this.major > otherVersion.major ? true : this.major === otherVersion.major ? this.minor > otherVersion.minor : false;
  };
  protoOf(ApiVersion).toString = function () {
    return '' + this.major + '.' + this.minor;
  };
  protoOf(ApiVersion).od = function () {
    return this.major;
  };
  protoOf(ApiVersion).pd = function () {
    return this.minor;
  };
  protoOf(ApiVersion).d1u = function (major, minor) {
    return new ApiVersion(major, minor);
  };
  protoOf(ApiVersion).copy = function (major, minor, $super) {
    major = major === VOID ? this.major : major;
    minor = minor === VOID ? this.minor : minor;
    return this.d1u(major, minor);
  };
  protoOf(ApiVersion).hashCode = function () {
    var result = this.major;
    result = imul(result, 31) + this.minor | 0;
    return result;
  };
  protoOf(ApiVersion).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ApiVersion))
      return false;
    var tmp0_other_with_cast = other instanceof ApiVersion ? other : THROW_CCE();
    if (!(this.major === tmp0_other_with_cast.major))
      return false;
    if (!(this.minor === tmp0_other_with_cast.minor))
      return false;
    return true;
  };
  function ApiVersionSerializer$$$delegate_0$lambda(version) {
    return Companion_instance_50.fromString(version);
  }
  function _no_name_provided__qut3iv_5($fromString) {
    StringConversionSerializer.call(this, get_NAMESPACE() + '.' + ensureNotNull(getKClass(ApiVersion).i6()), $fromString);
  }
  function ApiVersionSerializer() {
    ApiVersionSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = ApiVersionSerializer$$$delegate_0$lambda;
    tmp.e1u_1 = new _no_name_provided__qut3iv_5(fromString);
  }
  protoOf(ApiVersionSerializer).pi = function () {
    return this.e1u_1.pi();
  };
  protoOf(ApiVersionSerializer).ri = function (decoder) {
    return this.e1u_1.ri(decoder);
  };
  protoOf(ApiVersionSerializer).f1u = function (encoder, value) {
    this.e1u_1.qi(encoder, value);
  };
  protoOf(ApiVersionSerializer).qi = function (encoder, value) {
    return this.f1u(encoder, value instanceof ApiVersion ? value : THROW_CCE());
  };
  var ApiVersionSerializer_instance;
  function ApiVersionSerializer_getInstance() {
    if (ApiVersionSerializer_instance == null)
      new ApiVersionSerializer();
    return ApiVersionSerializer_instance;
  }
  var properties_initialized_ApiVersion_kt_fkqmn4;
  function _init_properties_ApiVersion_kt__kxx60y() {
    if (!properties_initialized_ApiVersion_kt_fkqmn4) {
      properties_initialized_ApiVersion_kt_fkqmn4 = true;
      ApiVersionRegex = Regex_init_$Create$('(\\d)\\.(\\d)');
    }
  }
  function Companion_50() {
    Companion_instance_51 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h1u_1 = [null, new ArrayListSerializer(Companion_getInstance_55().m16()), null, null];
  }
  protoOf(Companion_50).m16 = function () {
    return $serializer_getInstance_29();
  };
  var Companion_instance_51;
  function Companion_getInstance_51() {
    if (Companion_instance_51 == null)
      new Companion_50();
    return Companion_instance_51;
  }
  function $serializer_30() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.tasks.BackgroundTask', this, 4);
    tmp0_serialDesc.nt('name', false);
    tmp0_serialDesc.nt('measures', true);
    tmp0_serialDesc.nt('description', true);
    tmp0_serialDesc.nt('duration', true);
    this.i1u_1 = tmp0_serialDesc;
  }
  protoOf($serializer_30).pi = function () {
    return this.i1u_1;
  };
  protoOf($serializer_30).cu = function () {
    var tmp0_cached = Companion_getInstance_51().h1u_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1], get_nullable(StringSerializer_getInstance()), DurationSerializer_getInstance()];
  };
  protoOf($serializer_30).ri = function (decoder) {
    var tmp0_desc = this.i1u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_51().h1u_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp7_local3;
      var tmp_1 = tmp8_input.jm(tmp0_desc, 3, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp7_local3 = tmp_1 == null ? null : tmp_1.ag_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.hm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp7_local3;
            var tmp_4 = tmp8_input.jm(tmp0_desc, 3, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp7_local3 = tmp_4 == null ? null : tmp_4.ag_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return BackgroundTask_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_30).j1u = function (encoder, value) {
    var tmp0_desc = this.i1u_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_51().h1u_1;
    tmp1_output.nn(tmp0_desc, 0, value.k1u_1);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !equals(value.l1u_1, emptyList())) {
      tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.l1u_1);
    }
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.m1u_1 == null)) {
      tmp1_output.rn(tmp0_desc, 2, StringSerializer_getInstance(), value.m1u_1);
    }
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !equals(value.duration, Companion_getInstance().xf_1)) {
      tmp1_output.pn(tmp0_desc, 3, DurationSerializer_getInstance(), new Duration(value.duration));
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_30).qi = function (encoder, value) {
    return this.j1u(encoder, value instanceof BackgroundTask ? value : THROW_CCE());
  };
  var $serializer_instance_29;
  function $serializer_getInstance_29() {
    if ($serializer_instance_29 == null)
      new $serializer_30();
    return $serializer_instance_29;
  }
  function BackgroundTask_init_$Init$(seen1, name, measures, description, duration, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_29().i1u_1);
    }
    $this.k1u_1 = name;
    if (0 === (seen1 & 2))
      $this.l1u_1 = emptyList();
    else
      $this.l1u_1 = measures;
    if (0 === (seen1 & 4))
      $this.m1u_1 = null;
    else
      $this.m1u_1 = description;
    if (0 === (seen1 & 8))
      $this.duration = Companion_getInstance().xf_1;
    else
      $this.duration = duration;
    return $this;
  }
  function BackgroundTask_init_$Create$(seen1, name, measures, description, duration, serializationConstructorMarker) {
    return BackgroundTask_init_$Init$(seen1, name, measures, description, duration, serializationConstructorMarker, objectCreate(protoOf(BackgroundTask)));
  }
  function BackgroundTask(name, measures, description, duration) {
    Companion_getInstance_51();
    measures = measures === VOID ? emptyList() : measures;
    description = description === VOID ? null : description;
    duration = duration === VOID ? Companion_getInstance().xf_1 : duration;
    this.k1u_1 = name;
    this.l1u_1 = measures;
    this.m1u_1 = description;
    this.duration = duration;
  }
  protoOf(BackgroundTask).ra = function () {
    return this.k1u_1;
  };
  protoOf(BackgroundTask).n1u = function () {
    return this.l1u_1;
  };
  protoOf(BackgroundTask).o1u = function () {
    return this.m1u_1;
  };
  protoOf(BackgroundTask).p1u = function () {
    return this.duration;
  };
  protoOf(BackgroundTask).od = function () {
    return this.k1u_1;
  };
  protoOf(BackgroundTask).pd = function () {
    return this.l1u_1;
  };
  protoOf(BackgroundTask).r1g = function () {
    return this.m1u_1;
  };
  protoOf(BackgroundTask).q1u = function () {
    return this.duration;
  };
  protoOf(BackgroundTask).r1u = function (name, measures, description, duration) {
    return new BackgroundTask(name, measures, description, duration);
  };
  protoOf(BackgroundTask).copy = function (name, measures, description, duration, $super) {
    name = name === VOID ? this.k1u_1 : name;
    measures = measures === VOID ? this.l1u_1 : measures;
    description = description === VOID ? this.m1u_1 : description;
    duration = duration === VOID ? this.duration : duration;
    return this.r1u(name, measures, description, duration);
  };
  protoOf(BackgroundTask).toString = function () {
    return 'BackgroundTask(name=' + this.k1u_1 + ', measures=' + this.l1u_1 + ', description=' + this.m1u_1 + ', duration=' + new Duration(this.duration) + ')';
  };
  protoOf(BackgroundTask).hashCode = function () {
    var result = getStringHashCode(this.k1u_1);
    result = imul(result, 31) + hashCode(this.l1u_1) | 0;
    result = imul(result, 31) + (this.m1u_1 == null ? 0 : getStringHashCode(this.m1u_1)) | 0;
    result = imul(result, 31) + Duration__hashCode_impl_u4exz6(this.duration) | 0;
    return result;
  };
  protoOf(BackgroundTask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BackgroundTask))
      return false;
    var tmp0_other_with_cast = other instanceof BackgroundTask ? other : THROW_CCE();
    if (!(this.k1u_1 === tmp0_other_with_cast.k1u_1))
      return false;
    if (!equals(this.l1u_1, tmp0_other_with_cast.l1u_1))
      return false;
    if (!(this.m1u_1 == tmp0_other_with_cast.m1u_1))
      return false;
    if (!equals(this.duration, tmp0_other_with_cast.duration))
      return false;
    return true;
  };
  function BackgroundTaskBuilder(duration) {
    duration = duration === VOID ? Companion_getInstance().xf_1 : duration;
    TaskConfigurationBuilder.call(this);
    this.duration = duration;
  }
  protoOf(BackgroundTaskBuilder).s1u = function (_set____db54di) {
    this.duration = _set____db54di;
  };
  protoOf(BackgroundTaskBuilder).p1u = function () {
    return this.duration;
  };
  protoOf(BackgroundTaskBuilder).build = function (name) {
    return new BackgroundTask(name, this.measures, this.description, this.duration);
  };
  function Companion_51() {
    Companion_instance_52 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v1u_1 = [null, null, null, new ArrayListSerializer(Companion_getInstance_55().m16())];
  }
  protoOf(Companion_51).m16 = function () {
    return $serializer_getInstance_30();
  };
  var Companion_instance_52;
  function Companion_getInstance_52() {
    if (Companion_instance_52 == null)
      new Companion_51();
    return Companion_instance_52;
  }
  function $serializer_31() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.tasks.CustomProtocolTask', this, 4);
    tmp0_serialDesc.nt('name', false);
    tmp0_serialDesc.nt('studyProtocol', false);
    tmp0_serialDesc.nt('description', true);
    tmp0_serialDesc.nt('measures', true);
    this.w1u_1 = tmp0_serialDesc;
  }
  protoOf($serializer_31).pi = function () {
    return this.w1u_1;
  };
  protoOf($serializer_31).cu = function () {
    var tmp0_cached = Companion_getInstance_52().v1u_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[3]];
  };
  protoOf($serializer_31).ri = function (decoder) {
    var tmp0_desc = this.w1u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_52().v1u_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
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
            tmp4_local0 = tmp8_input.hm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
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
    return CustomProtocolTask_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_31).x1u = function (encoder, value) {
    var tmp0_desc = this.w1u_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_52().v1u_1;
    tmp1_output.nn(tmp0_desc, 0, value.y1u_1);
    tmp1_output.nn(tmp0_desc, 1, value.studyProtocol);
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.z1u_1 == null)) {
      tmp1_output.rn(tmp0_desc, 2, StringSerializer_getInstance(), value.z1u_1);
    }
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !equals(value.a1v_1, emptyList())) {
      tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.a1v_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_31).qi = function (encoder, value) {
    return this.x1u(encoder, value instanceof CustomProtocolTask ? value : THROW_CCE());
  };
  var $serializer_instance_30;
  function $serializer_getInstance_30() {
    if ($serializer_instance_30 == null)
      new $serializer_31();
    return $serializer_instance_30;
  }
  function CustomProtocolTask_init_$Init$(seen1, name, studyProtocol, description, measures, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_30().w1u_1);
    }
    $this.y1u_1 = name;
    $this.studyProtocol = studyProtocol;
    if (0 === (seen1 & 4))
      $this.z1u_1 = null;
    else
      $this.z1u_1 = description;
    if (0 === (seen1 & 8))
      $this.a1v_1 = emptyList();
    else
      $this.a1v_1 = measures;
    return $this;
  }
  function CustomProtocolTask_init_$Create$(seen1, name, studyProtocol, description, measures, serializationConstructorMarker) {
    return CustomProtocolTask_init_$Init$(seen1, name, studyProtocol, description, measures, serializationConstructorMarker, objectCreate(protoOf(CustomProtocolTask)));
  }
  function CustomProtocolTask(name, studyProtocol) {
    Companion_getInstance_52();
    this.y1u_1 = name;
    this.studyProtocol = studyProtocol;
    this.z1u_1 = null;
    this.a1v_1 = emptyList();
  }
  protoOf(CustomProtocolTask).ra = function () {
    return this.y1u_1;
  };
  protoOf(CustomProtocolTask).b1v = function () {
    return this.studyProtocol;
  };
  protoOf(CustomProtocolTask).o1u = function () {
    return this.z1u_1;
  };
  protoOf(CustomProtocolTask).n1u = function () {
    return this.a1v_1;
  };
  protoOf(CustomProtocolTask).od = function () {
    return this.y1u_1;
  };
  protoOf(CustomProtocolTask).pd = function () {
    return this.studyProtocol;
  };
  protoOf(CustomProtocolTask).r1f = function (name, studyProtocol) {
    return new CustomProtocolTask(name, studyProtocol);
  };
  protoOf(CustomProtocolTask).copy = function (name, studyProtocol, $super) {
    name = name === VOID ? this.y1u_1 : name;
    studyProtocol = studyProtocol === VOID ? this.studyProtocol : studyProtocol;
    return this.r1f(name, studyProtocol);
  };
  protoOf(CustomProtocolTask).toString = function () {
    return 'CustomProtocolTask(name=' + this.y1u_1 + ', studyProtocol=' + this.studyProtocol + ')';
  };
  protoOf(CustomProtocolTask).hashCode = function () {
    var result = getStringHashCode(this.y1u_1);
    result = imul(result, 31) + getStringHashCode(this.studyProtocol) | 0;
    return result;
  };
  protoOf(CustomProtocolTask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomProtocolTask))
      return false;
    var tmp0_other_with_cast = other instanceof CustomProtocolTask ? other : THROW_CCE();
    if (!(this.y1u_1 === tmp0_other_with_cast.y1u_1))
      return false;
    if (!(this.studyProtocol === tmp0_other_with_cast.studyProtocol))
      return false;
    return true;
  };
  function Companion_52() {
    Companion_instance_53 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c1v_1 = [null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_52).m16 = function () {
    return $serializer_getInstance_31();
  };
  var Companion_instance_53;
  function Companion_getInstance_53() {
    if (Companion_instance_53 == null)
      new Companion_52();
    return Companion_instance_53;
  }
  function $serializer_32() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.tasks.Measure.DataStream', this, 2);
    tmp0_serialDesc.nt('type', false);
    tmp0_serialDesc.nt('overrideSamplingConfiguration', true);
    this.d1v_1 = tmp0_serialDesc;
  }
  protoOf($serializer_32).pi = function () {
    return this.d1v_1;
  };
  protoOf($serializer_32).cu = function () {
    var tmp0_cached = Companion_getInstance_53().c1v_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [NamespacedIdSerializer_getInstance(), get_nullable(tmp0_cached[1])];
  };
  protoOf($serializer_32).ri = function (decoder) {
    var tmp0_desc = this.d1v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_53().c1v_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, NamespacedIdSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, NamespacedIdSerializer_getInstance(), tmp4_local0);
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
    return DataStream_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_32).e1v = function (encoder, value) {
    var tmp0_desc = this.d1v_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_53().c1v_1;
    tmp1_output.pn(tmp0_desc, 0, NamespacedIdSerializer_getInstance(), value.type);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.overrideSamplingConfiguration == null)) {
      tmp1_output.rn(tmp0_desc, 1, tmp2_cached[1], value.overrideSamplingConfiguration);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_32).qi = function (encoder, value) {
    return this.e1v(encoder, value instanceof DataStream ? value : THROW_CCE());
  };
  var $serializer_instance_31;
  function $serializer_getInstance_31() {
    if ($serializer_instance_31 == null)
      new $serializer_32();
    return $serializer_instance_31;
  }
  function DataStream_init_$Init$(seen1, type, overrideSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_31().d1v_1);
    }
    Measure_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.type = type;
    if (0 === (seen1 & 2))
      $this.overrideSamplingConfiguration = null;
    else
      $this.overrideSamplingConfiguration = overrideSamplingConfiguration;
    return $this;
  }
  function DataStream_init_$Create$(seen1, type, overrideSamplingConfiguration, serializationConstructorMarker) {
    return DataStream_init_$Init$(seen1, type, overrideSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(DataStream)));
  }
  function Companion_53() {
  }
  protoOf(Companion_53).m16 = function () {
    return $serializer_getInstance_32();
  };
  var Companion_instance_54;
  function Companion_getInstance_54() {
    return Companion_instance_54;
  }
  function $serializer_33() {
    $serializer_instance_32 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.tasks.Measure.TriggerData', this, 1);
    tmp0_serialDesc.nt('triggerId', false);
    this.f1v_1 = tmp0_serialDesc;
  }
  protoOf($serializer_33).pi = function () {
    return this.f1v_1;
  };
  protoOf($serializer_33).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance()];
  };
  protoOf($serializer_33).ri = function (decoder) {
    var tmp0_desc = this.f1v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_input = decoder.xl(tmp0_desc);
    if (tmp5_input.om()) {
      tmp4_local0 = tmp5_input.cm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.cm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yl(tmp0_desc);
    return TriggerData_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_33).g1v = function (encoder, value) {
    var tmp0_desc = this.f1v_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.in(tmp0_desc, 0, value.triggerId);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_33).qi = function (encoder, value) {
    return this.g1v(encoder, value instanceof TriggerData ? value : THROW_CCE());
  };
  var $serializer_instance_32;
  function $serializer_getInstance_32() {
    if ($serializer_instance_32 == null)
      new $serializer_33();
    return $serializer_instance_32;
  }
  function TriggerData_init_$Init$(seen1, triggerId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_32().f1v_1);
    }
    Measure_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.triggerId = triggerId;
    return $this;
  }
  function TriggerData_init_$Create$(seen1, triggerId, serializationConstructorMarker) {
    return TriggerData_init_$Init$(seen1, triggerId, serializationConstructorMarker, objectCreate(protoOf(TriggerData)));
  }
  function _get_$cachedSerializer__te6jhj_8($this) {
    return $this.g1u_1.r2();
  }
  function Measure$Companion$_anonymous__jo0vzl() {
    var tmp = getKClass(Measure);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(DataStream), getKClass(TriggerData)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_31(), $serializer_getInstance_32()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.common.application.tasks.Measure', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function DataStream(type, overrideSamplingConfiguration) {
    Companion_getInstance_53();
    overrideSamplingConfiguration = overrideSamplingConfiguration === VOID ? null : overrideSamplingConfiguration;
    Measure.call(this);
    this.type = type;
    this.overrideSamplingConfiguration = overrideSamplingConfiguration;
  }
  protoOf(DataStream).w1j = function () {
    return this.type;
  };
  protoOf(DataStream).h1v = function () {
    return this.overrideSamplingConfiguration;
  };
  protoOf(DataStream).od = function () {
    return this.type;
  };
  protoOf(DataStream).pd = function () {
    return this.overrideSamplingConfiguration;
  };
  protoOf(DataStream).i1v = function (type, overrideSamplingConfiguration) {
    return new DataStream(type, overrideSamplingConfiguration);
  };
  protoOf(DataStream).copy = function (type, overrideSamplingConfiguration, $super) {
    type = type === VOID ? this.type : type;
    overrideSamplingConfiguration = overrideSamplingConfiguration === VOID ? this.overrideSamplingConfiguration : overrideSamplingConfiguration;
    return this.i1v(type, overrideSamplingConfiguration);
  };
  protoOf(DataStream).toString = function () {
    return 'DataStream(type=' + this.type + ', overrideSamplingConfiguration=' + this.overrideSamplingConfiguration + ')';
  };
  protoOf(DataStream).hashCode = function () {
    var result = this.type.hashCode();
    result = imul(result, 31) + (this.overrideSamplingConfiguration == null ? 0 : hashCode(this.overrideSamplingConfiguration)) | 0;
    return result;
  };
  protoOf(DataStream).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataStream))
      return false;
    var tmp0_other_with_cast = other instanceof DataStream ? other : THROW_CCE();
    if (!this.type.equals(tmp0_other_with_cast.type))
      return false;
    if (!equals(this.overrideSamplingConfiguration, tmp0_other_with_cast.overrideSamplingConfiguration))
      return false;
    return true;
  };
  function TriggerData(triggerId) {
    Measure.call(this);
    this.triggerId = triggerId;
  }
  protoOf(TriggerData).n1m = function () {
    return this.triggerId;
  };
  protoOf(TriggerData).od = function () {
    return this.triggerId;
  };
  protoOf(TriggerData).e1g = function (triggerId) {
    return new TriggerData(triggerId);
  };
  protoOf(TriggerData).copy = function (triggerId, $super) {
    triggerId = triggerId === VOID ? this.triggerId : triggerId;
    return this.e1g(triggerId);
  };
  protoOf(TriggerData).toString = function () {
    return 'TriggerData(triggerId=' + this.triggerId + ')';
  };
  protoOf(TriggerData).hashCode = function () {
    return this.triggerId;
  };
  protoOf(TriggerData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TriggerData))
      return false;
    var tmp0_other_with_cast = other instanceof TriggerData ? other : THROW_CCE();
    if (!(this.triggerId === tmp0_other_with_cast.triggerId))
      return false;
    return true;
  };
  function Companion_54() {
    Companion_instance_55 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.g1u_1 = lazy(tmp_0, Measure$Companion$_anonymous__jo0vzl);
  }
  protoOf(Companion_54).m16 = function () {
    return _get_$cachedSerializer__te6jhj_8(this);
  };
  protoOf(Companion_54).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_55;
  function Companion_getInstance_55() {
    if (Companion_instance_55 == null)
      new Companion_54();
    return Companion_instance_55;
  }
  function Measure_init_$Init$(seen1, serializationConstructorMarker, $this) {
    return $this;
  }
  function Measure() {
    Companion_getInstance_55();
  }
  function TaskConfiguration() {
  }
  function getAllExpectedDataTypes(_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.measures;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.t();
    while (tmp0_iterator.u()) {
      var item = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.common.application.tasks.getAllExpectedDataTypes.<anonymous>' call
      var tmp;
      if (item instanceof TriggerData) {
        tmp = CarpDataTypes_getInstance().TRIGGERED_TASK.type;
      } else {
        if (item instanceof DataStream) {
          tmp = item.type;
        } else {
          noWhenBranchMatchedException();
        }
      }
      var tmp$ret$0 = tmp;
      destination.q(tmp$ret$0);
    }
    return toSet(plus(destination, CarpDataTypes_getInstance().COMPLETED_TASK.type));
  }
  function TaskConfigurationBuilder() {
    this.measures = emptyList();
    this.description = null;
  }
  protoOf(TaskConfigurationBuilder).t1u = function (_set____db54di) {
    this.measures = _set____db54di;
  };
  protoOf(TaskConfigurationBuilder).n1u = function () {
    return this.measures;
  };
  protoOf(TaskConfigurationBuilder).u1u = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(TaskConfigurationBuilder).o1u = function () {
    return this.description;
  };
  function TaskConfigurationList_init_$Init$($this) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp$ret$0 = ArrayList_init_$Create$_0();
    TaskConfigurationList.call($this, tmp$ret$0);
    return $this;
  }
  function create_0() {
    return TaskConfigurationList_init_$Init$(objectCreate(protoOf(TaskConfigurationList)));
  }
  function TaskConfigurationList$BACKGROUND$lambda() {
    return new BackgroundTaskBuilder();
  }
  function TaskConfigurationList(list) {
    this.i1o_1 = list;
    var tmp = this;
    tmp.BACKGROUND = this.add(TaskConfigurationList$BACKGROUND$lambda);
  }
  protoOf(TaskConfigurationList).n = function () {
    return this.i1o_1.n();
  };
  protoOf(TaskConfigurationList).j1o = function (element) {
    return this.i1o_1.p(element);
  };
  protoOf(TaskConfigurationList).p = function (element) {
    if (!(element instanceof SupportedTaskConfiguration))
      return false;
    return this.j1o(element instanceof SupportedTaskConfiguration ? element : THROW_CCE());
  };
  protoOf(TaskConfigurationList).k1o = function (elements) {
    return this.i1o_1.x(elements);
  };
  protoOf(TaskConfigurationList).x = function (elements) {
    return this.k1o(elements);
  };
  protoOf(TaskConfigurationList).c1 = function (index) {
    return this.i1o_1.c1(index);
  };
  protoOf(TaskConfigurationList).l1o = function (element) {
    return this.i1o_1.x1(element);
  };
  protoOf(TaskConfigurationList).x1 = function (element) {
    if (!(element instanceof SupportedTaskConfiguration))
      return -1;
    return this.l1o(element instanceof SupportedTaskConfiguration ? element : THROW_CCE());
  };
  protoOf(TaskConfigurationList).y = function () {
    return this.i1o_1.y();
  };
  protoOf(TaskConfigurationList).t = function () {
    return this.i1o_1.t();
  };
  protoOf(TaskConfigurationList).m1o = function (element) {
    return this.i1o_1.y1(element);
  };
  protoOf(TaskConfigurationList).y1 = function (element) {
    if (!(element instanceof SupportedTaskConfiguration))
      return -1;
    return this.m1o(element instanceof SupportedTaskConfiguration ? element : THROW_CCE());
  };
  protoOf(TaskConfigurationList).z1 = function () {
    return this.i1o_1.z1();
  };
  protoOf(TaskConfigurationList).a2 = function (index) {
    return this.i1o_1.a2(index);
  };
  protoOf(TaskConfigurationList).b2 = function (fromIndex, toIndex) {
    return this.i1o_1.b2(fromIndex, toIndex);
  };
  protoOf(TaskConfigurationList).n1o = function () {
    return this.BACKGROUND;
  };
  protoOf(TaskConfigurationList).add = function (builder) {
    // Inline function 'kotlin.also' call
    var this_0 = new SupportedTaskConfiguration(builder);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dk.cachet.carp.common.application.tasks.TaskConfigurationList.add.<anonymous>' call
    this.i1o_1.q(this_0);
    return this_0;
  };
  function SupportedTaskConfiguration(createBuilder) {
    this.j1v_1 = createBuilder;
  }
  protoOf(SupportedTaskConfiguration).create = function (name, builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.j1v_1();
    // Inline function 'kotlin.contracts.contract' call
    builder(this_0);
    return this_0.build(name);
  };
  function markup($this, name) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = name.toUpperCase();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dk.cachet.carp.common.application.tasks.Companion.markup.<anonymous>' call
    return '{{' + replace(tmp$ret$1, _Char___init__impl__6a9atx(32), _Char___init__impl__6a9atx(45)) + '}}';
  }
  var UrlVariable_PARTICIPANT_ID_instance;
  var UrlVariable_DEPLOYMENT_ID_instance;
  var UrlVariable_TRIGGER_ID_instance;
  function values_4() {
    return [UrlVariable_PARTICIPANT_ID_getInstance(), UrlVariable_DEPLOYMENT_ID_getInstance(), UrlVariable_TRIGGER_ID_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'PARTICIPANT_ID':
        return UrlVariable_PARTICIPANT_ID_getInstance();
      case 'DEPLOYMENT_ID':
        return UrlVariable_DEPLOYMENT_ID_getInstance();
      case 'TRIGGER_ID':
        return UrlVariable_TRIGGER_ID_getInstance();
      default:
        UrlVariable_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var UrlVariable_entriesInitialized;
  function UrlVariable_initEntries() {
    if (UrlVariable_entriesInitialized)
      return Unit_instance;
    UrlVariable_entriesInitialized = true;
    UrlVariable_PARTICIPANT_ID_instance = new UrlVariable('PARTICIPANT_ID', 0, markup(Companion_getInstance_56(), 'participant id'));
    UrlVariable_DEPLOYMENT_ID_instance = new UrlVariable('DEPLOYMENT_ID', 1, markup(Companion_getInstance_56(), 'deployment id'));
    UrlVariable_TRIGGER_ID_instance = new UrlVariable('TRIGGER_ID', 2, markup(Companion_getInstance_56(), 'trigger id'));
  }
  function Companion_55() {
    Companion_instance_56 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k1v_1 = [null, null, null, new ArrayListSerializer(Companion_getInstance_55().m16())];
  }
  protoOf(Companion_55).m16 = function () {
    return $serializer_getInstance_33();
  };
  var Companion_instance_56;
  function Companion_getInstance_56() {
    if (Companion_instance_56 == null)
      new Companion_55();
    return Companion_instance_56;
  }
  function UrlVariable(name, ordinal, pattern) {
    Enum.call(this, name, ordinal);
    this.pattern = pattern;
  }
  protoOf(UrlVariable).n1v = function () {
    return this.pattern;
  };
  function $serializer_34() {
    $serializer_instance_33 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.tasks.WebTask', this, 4);
    tmp0_serialDesc.nt('name', false);
    tmp0_serialDesc.nt('url', false);
    tmp0_serialDesc.nt('description', true);
    tmp0_serialDesc.nt('measures', true);
    this.o1v_1 = tmp0_serialDesc;
  }
  protoOf($serializer_34).pi = function () {
    return this.o1v_1;
  };
  protoOf($serializer_34).cu = function () {
    var tmp0_cached = Companion_getInstance_56().k1v_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[3]];
  };
  protoOf($serializer_34).ri = function (decoder) {
    var tmp0_desc = this.o1v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_56().k1v_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
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
            tmp4_local0 = tmp8_input.hm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
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
    return WebTask_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_34).p1v = function (encoder, value) {
    var tmp0_desc = this.o1v_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_56().k1v_1;
    tmp1_output.nn(tmp0_desc, 0, value.q1v_1);
    tmp1_output.nn(tmp0_desc, 1, value.url);
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.r1v_1 == null)) {
      tmp1_output.rn(tmp0_desc, 2, StringSerializer_getInstance(), value.r1v_1);
    }
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !equals(value.s1v_1, emptyList())) {
      tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.s1v_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_34).qi = function (encoder, value) {
    return this.p1v(encoder, value instanceof WebTask ? value : THROW_CCE());
  };
  var $serializer_instance_33;
  function $serializer_getInstance_33() {
    if ($serializer_instance_33 == null)
      new $serializer_34();
    return $serializer_instance_33;
  }
  function WebTask_init_$Init$(seen1, name, url, description, measures, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_33().o1v_1);
    }
    $this.q1v_1 = name;
    $this.url = url;
    if (0 === (seen1 & 4))
      $this.r1v_1 = null;
    else
      $this.r1v_1 = description;
    if (0 === (seen1 & 8))
      $this.s1v_1 = emptyList();
    else
      $this.s1v_1 = measures;
    return $this;
  }
  function WebTask_init_$Create$(seen1, name, url, description, measures, serializationConstructorMarker) {
    return WebTask_init_$Init$(seen1, name, url, description, measures, serializationConstructorMarker, objectCreate(protoOf(WebTask)));
  }
  function UrlVariable_PARTICIPANT_ID_getInstance() {
    UrlVariable_initEntries();
    return UrlVariable_PARTICIPANT_ID_instance;
  }
  function UrlVariable_DEPLOYMENT_ID_getInstance() {
    UrlVariable_initEntries();
    return UrlVariable_DEPLOYMENT_ID_instance;
  }
  function UrlVariable_TRIGGER_ID_getInstance() {
    UrlVariable_initEntries();
    return UrlVariable_TRIGGER_ID_instance;
  }
  function WebTask(name, url, description, measures) {
    Companion_getInstance_56();
    description = description === VOID ? null : description;
    measures = measures === VOID ? emptyList() : measures;
    this.q1v_1 = name;
    this.url = url;
    this.r1v_1 = description;
    this.s1v_1 = measures;
  }
  protoOf(WebTask).ra = function () {
    return this.q1v_1;
  };
  protoOf(WebTask).m1s = function () {
    return this.url;
  };
  protoOf(WebTask).o1u = function () {
    return this.r1v_1;
  };
  protoOf(WebTask).n1u = function () {
    return this.s1v_1;
  };
  protoOf(WebTask).constructUrl = function (participantId, studyDeploymentId, triggerId) {
    return replace_0(replace_0(replace_0(this.url, UrlVariable_PARTICIPANT_ID_getInstance().pattern, participantId.toString()), UrlVariable_DEPLOYMENT_ID_getInstance().pattern, studyDeploymentId.toString()), UrlVariable_TRIGGER_ID_getInstance().pattern, triggerId.toString());
  };
  protoOf(WebTask).od = function () {
    return this.q1v_1;
  };
  protoOf(WebTask).pd = function () {
    return this.url;
  };
  protoOf(WebTask).r1g = function () {
    return this.r1v_1;
  };
  protoOf(WebTask).q1h = function () {
    return this.s1v_1;
  };
  protoOf(WebTask).t1v = function (name, url, description, measures) {
    return new WebTask(name, url, description, measures);
  };
  protoOf(WebTask).copy = function (name, url, description, measures, $super) {
    name = name === VOID ? this.q1v_1 : name;
    url = url === VOID ? this.url : url;
    description = description === VOID ? this.r1v_1 : description;
    measures = measures === VOID ? this.s1v_1 : measures;
    return this.t1v(name, url, description, measures);
  };
  protoOf(WebTask).toString = function () {
    return 'WebTask(name=' + this.q1v_1 + ', url=' + this.url + ', description=' + this.r1v_1 + ', measures=' + this.s1v_1 + ')';
  };
  protoOf(WebTask).hashCode = function () {
    var result = getStringHashCode(this.q1v_1);
    result = imul(result, 31) + getStringHashCode(this.url) | 0;
    result = imul(result, 31) + (this.r1v_1 == null ? 0 : getStringHashCode(this.r1v_1)) | 0;
    result = imul(result, 31) + hashCode(this.s1v_1) | 0;
    return result;
  };
  protoOf(WebTask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebTask))
      return false;
    var tmp0_other_with_cast = other instanceof WebTask ? other : THROW_CCE();
    if (!(this.q1v_1 === tmp0_other_with_cast.q1v_1))
      return false;
    if (!(this.url === tmp0_other_with_cast.url))
      return false;
    if (!(this.r1v_1 == tmp0_other_with_cast.r1v_1))
      return false;
    if (!equals(this.s1v_1, tmp0_other_with_cast.s1v_1))
      return false;
    return true;
  };
  function WebTaskBuilder() {
    TaskConfigurationBuilder.call(this);
    this.url = '';
  }
  protoOf(WebTaskBuilder).p1s = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(WebTaskBuilder).m1s = function () {
    return this.url;
  };
  protoOf(WebTaskBuilder).build = function (name) {
    return new WebTask(name, this.url, this.description, this.measures);
  };
  function ElapsedTimeTrigger_init_$Init$(sourceDevice, elapsedTime, $this) {
    ElapsedTimeTrigger.call($this, sourceDevice.roleName, elapsedTime);
    return $this;
  }
  function create_1(sourceDevice, elapsedTime) {
    return ElapsedTimeTrigger_init_$Init$(sourceDevice, elapsedTime, objectCreate(protoOf(ElapsedTimeTrigger)));
  }
  function Companion_56() {
  }
  protoOf(Companion_56).m16 = function () {
    return $serializer_getInstance_34();
  };
  var Companion_instance_57;
  function Companion_getInstance_57() {
    return Companion_instance_57;
  }
  function $serializer_35() {
    $serializer_instance_34 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.triggers.ElapsedTimeTrigger', this, 2);
    tmp0_serialDesc.nt('sourceDeviceRoleName', false);
    tmp0_serialDesc.nt('elapsedTime', false);
    this.u1v_1 = tmp0_serialDesc;
  }
  protoOf($serializer_35).pi = function () {
    return this.u1v_1;
  };
  protoOf($serializer_35).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), DurationSerializer_getInstance()];
  };
  protoOf($serializer_35).ri = function (decoder) {
    var tmp0_desc = this.u1v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp5_local1;
      var tmp_1 = tmp7_input.jm(tmp0_desc, 1, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp5_local1 = tmp_1 == null ? null : tmp_1.ag_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
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
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp5_local1;
            var tmp_4 = tmp7_input.jm(tmp0_desc, 1, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp5_local1 = tmp_4 == null ? null : tmp_4.ag_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return ElapsedTimeTrigger_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_35).v1v = function (encoder, value) {
    var tmp0_desc = this.u1v_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.x1v_1);
    tmp1_output.pn(tmp0_desc, 1, DurationSerializer_getInstance(), new Duration(value.elapsedTime));
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_35).qi = function (encoder, value) {
    return this.v1v(encoder, value instanceof ElapsedTimeTrigger ? value : THROW_CCE());
  };
  var $serializer_instance_34;
  function $serializer_getInstance_34() {
    if ($serializer_instance_34 == null)
      new $serializer_35();
    return $serializer_instance_34;
  }
  function ElapsedTimeTrigger_init_$Init$_0(seen1, sourceDeviceRoleName, elapsedTime, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_34().u1v_1);
    }
    TriggerConfiguration_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.x1v_1 = sourceDeviceRoleName;
    $this.elapsedTime = elapsedTime;
    $this.y1v_1 = true;
    return $this;
  }
  function ElapsedTimeTrigger_init_$Create$(seen1, sourceDeviceRoleName, elapsedTime, serializationConstructorMarker) {
    return ElapsedTimeTrigger_init_$Init$_0(seen1, sourceDeviceRoleName, elapsedTime, serializationConstructorMarker, objectCreate(protoOf(ElapsedTimeTrigger)));
  }
  function ElapsedTimeTrigger(sourceDeviceRoleName, elapsedTime) {
    TriggerConfiguration.call(this);
    this.x1v_1 = sourceDeviceRoleName;
    this.elapsedTime = elapsedTime;
    this.y1v_1 = true;
  }
  protoOf(ElapsedTimeTrigger).z1v = function () {
    return this.x1v_1;
  };
  protoOf(ElapsedTimeTrigger).a1g = function () {
    return this.elapsedTime;
  };
  protoOf(ElapsedTimeTrigger).a1w = function () {
    return this.y1v_1;
  };
  protoOf(ElapsedTimeTrigger).od = function () {
    return this.x1v_1;
  };
  protoOf(ElapsedTimeTrigger).b1w = function () {
    return this.elapsedTime;
  };
  protoOf(ElapsedTimeTrigger).c1w = function (sourceDeviceRoleName, elapsedTime) {
    return new ElapsedTimeTrigger(sourceDeviceRoleName, elapsedTime);
  };
  protoOf(ElapsedTimeTrigger).copy = function (sourceDeviceRoleName, elapsedTime, $super) {
    sourceDeviceRoleName = sourceDeviceRoleName === VOID ? this.x1v_1 : sourceDeviceRoleName;
    elapsedTime = elapsedTime === VOID ? this.elapsedTime : elapsedTime;
    return this.c1w(sourceDeviceRoleName, elapsedTime);
  };
  protoOf(ElapsedTimeTrigger).toString = function () {
    return 'ElapsedTimeTrigger(sourceDeviceRoleName=' + this.x1v_1 + ', elapsedTime=' + new Duration(this.elapsedTime) + ')';
  };
  protoOf(ElapsedTimeTrigger).hashCode = function () {
    var result = getStringHashCode(this.x1v_1);
    result = imul(result, 31) + Duration__hashCode_impl_u4exz6(this.elapsedTime) | 0;
    return result;
  };
  protoOf(ElapsedTimeTrigger).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElapsedTimeTrigger))
      return false;
    var tmp0_other_with_cast = other instanceof ElapsedTimeTrigger ? other : THROW_CCE();
    if (!(this.x1v_1 === tmp0_other_with_cast.x1v_1))
      return false;
    if (!equals(this.elapsedTime, tmp0_other_with_cast.elapsedTime))
      return false;
    return true;
  };
  function Companion_57() {
  }
  protoOf(Companion_57).m16 = function () {
    return $serializer_getInstance_35();
  };
  var Companion_instance_58;
  function Companion_getInstance_58() {
    return Companion_instance_58;
  }
  function $serializer_36() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.triggers.ManualTrigger', this, 3);
    tmp0_serialDesc.nt('sourceDeviceRoleName', false);
    tmp0_serialDesc.nt('label', false);
    tmp0_serialDesc.nt('description', true);
    this.d1w_1 = tmp0_serialDesc;
  }
  protoOf($serializer_36).pi = function () {
    return this.d1w_1;
  };
  protoOf($serializer_36).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_36).ri = function (decoder) {
    var tmp0_desc = this.d1w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.hm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lm(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return ManualTrigger_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_36).e1w = function (encoder, value) {
    var tmp0_desc = this.d1w_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.g1w_1);
    tmp1_output.nn(tmp0_desc, 1, value.label);
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.description == null)) {
      tmp1_output.rn(tmp0_desc, 2, StringSerializer_getInstance(), value.description);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_36).qi = function (encoder, value) {
    return this.e1w(encoder, value instanceof ManualTrigger ? value : THROW_CCE());
  };
  var $serializer_instance_35;
  function $serializer_getInstance_35() {
    if ($serializer_instance_35 == null)
      new $serializer_36();
    return $serializer_instance_35;
  }
  function ManualTrigger_init_$Init$(seen1, sourceDeviceRoleName, label, description, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_35().d1w_1);
    }
    TriggerConfiguration_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.g1w_1 = sourceDeviceRoleName;
    $this.label = label;
    if (0 === (seen1 & 4))
      $this.description = null;
    else
      $this.description = description;
    $this.h1w_1 = true;
    return $this;
  }
  function ManualTrigger_init_$Create$(seen1, sourceDeviceRoleName, label, description, serializationConstructorMarker) {
    return ManualTrigger_init_$Init$(seen1, sourceDeviceRoleName, label, description, serializationConstructorMarker, objectCreate(protoOf(ManualTrigger)));
  }
  function ManualTrigger(sourceDeviceRoleName, label, description) {
    description = description === VOID ? null : description;
    TriggerConfiguration.call(this);
    this.g1w_1 = sourceDeviceRoleName;
    this.label = label;
    this.description = description;
    this.h1w_1 = true;
  }
  protoOf(ManualTrigger).z1v = function () {
    return this.g1w_1;
  };
  protoOf(ManualTrigger).i1w = function () {
    return this.label;
  };
  protoOf(ManualTrigger).o1u = function () {
    return this.description;
  };
  protoOf(ManualTrigger).a1w = function () {
    return this.h1w_1;
  };
  protoOf(ManualTrigger).od = function () {
    return this.g1w_1;
  };
  protoOf(ManualTrigger).pd = function () {
    return this.label;
  };
  protoOf(ManualTrigger).r1g = function () {
    return this.description;
  };
  protoOf(ManualTrigger).o1s = function (sourceDeviceRoleName, label, description) {
    return new ManualTrigger(sourceDeviceRoleName, label, description);
  };
  protoOf(ManualTrigger).copy = function (sourceDeviceRoleName, label, description, $super) {
    sourceDeviceRoleName = sourceDeviceRoleName === VOID ? this.g1w_1 : sourceDeviceRoleName;
    label = label === VOID ? this.label : label;
    description = description === VOID ? this.description : description;
    return this.o1s(sourceDeviceRoleName, label, description);
  };
  protoOf(ManualTrigger).toString = function () {
    return 'ManualTrigger(sourceDeviceRoleName=' + this.g1w_1 + ', label=' + this.label + ', description=' + this.description + ')';
  };
  protoOf(ManualTrigger).hashCode = function () {
    var result = getStringHashCode(this.g1w_1);
    result = imul(result, 31) + getStringHashCode(this.label) | 0;
    result = imul(result, 31) + (this.description == null ? 0 : getStringHashCode(this.description)) | 0;
    return result;
  };
  protoOf(ManualTrigger).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ManualTrigger))
      return false;
    var tmp0_other_with_cast = other instanceof ManualTrigger ? other : THROW_CCE();
    if (!(this.g1w_1 === tmp0_other_with_cast.g1w_1))
      return false;
    if (!(this.label === tmp0_other_with_cast.label))
      return false;
    if (!(this.description == tmp0_other_with_cast.description))
      return false;
    return true;
  };
  function ScheduledTrigger_init_$Init$(sourceDevice, time, recurrenceRule, $this) {
    ScheduledTrigger.call($this, sourceDevice.roleName, time, recurrenceRule);
    return $this;
  }
  function create_2(sourceDevice, time, recurrenceRule) {
    return ScheduledTrigger_init_$Init$(sourceDevice, time, recurrenceRule, objectCreate(protoOf(ScheduledTrigger)));
  }
  function Companion_58() {
  }
  protoOf(Companion_58).m16 = function () {
    return $serializer_getInstance_36();
  };
  var Companion_instance_59;
  function Companion_getInstance_59() {
    return Companion_instance_59;
  }
  function $serializer_37() {
    $serializer_instance_36 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.triggers.ScheduledTrigger', this, 3);
    tmp0_serialDesc.nt('sourceDeviceRoleName', false);
    tmp0_serialDesc.nt('time', false);
    tmp0_serialDesc.nt('recurrenceRule', false);
    this.j1w_1 = tmp0_serialDesc;
  }
  protoOf($serializer_37).pi = function () {
    return this.j1w_1;
  };
  protoOf($serializer_37).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), TimeOfDaySerializer_getInstance(), RecurrenceRuleSerializer_getInstance()];
  };
  protoOf($serializer_37).ri = function (decoder) {
    var tmp0_desc = this.j1w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, TimeOfDaySerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, RecurrenceRuleSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.hm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, TimeOfDaySerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.jm(tmp0_desc, 2, RecurrenceRuleSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return ScheduledTrigger_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_37).k1w = function (encoder, value) {
    var tmp0_desc = this.j1w_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.m1w_1);
    tmp1_output.pn(tmp0_desc, 1, TimeOfDaySerializer_getInstance(), value.time);
    tmp1_output.pn(tmp0_desc, 2, RecurrenceRuleSerializer_getInstance(), value.recurrenceRule);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_37).qi = function (encoder, value) {
    return this.k1w(encoder, value instanceof ScheduledTrigger ? value : THROW_CCE());
  };
  var $serializer_instance_36;
  function $serializer_getInstance_36() {
    if ($serializer_instance_36 == null)
      new $serializer_37();
    return $serializer_instance_36;
  }
  function ScheduledTrigger_init_$Init$_0(seen1, sourceDeviceRoleName, time, recurrenceRule, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_36().j1w_1);
    }
    TriggerConfiguration_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.m1w_1 = sourceDeviceRoleName;
    $this.time = time;
    $this.recurrenceRule = recurrenceRule;
    $this.n1w_1 = true;
    return $this;
  }
  function ScheduledTrigger_init_$Create$(seen1, sourceDeviceRoleName, time, recurrenceRule, serializationConstructorMarker) {
    return ScheduledTrigger_init_$Init$_0(seen1, sourceDeviceRoleName, time, recurrenceRule, serializationConstructorMarker, objectCreate(protoOf(ScheduledTrigger)));
  }
  function ScheduledTrigger(sourceDeviceRoleName, time, recurrenceRule) {
    TriggerConfiguration.call(this);
    this.m1w_1 = sourceDeviceRoleName;
    this.time = time;
    this.recurrenceRule = recurrenceRule;
    this.n1w_1 = true;
  }
  protoOf(ScheduledTrigger).z1v = function () {
    return this.m1w_1;
  };
  protoOf(ScheduledTrigger).o1w = function () {
    return this.time;
  };
  protoOf(ScheduledTrigger).p1w = function () {
    return this.recurrenceRule;
  };
  protoOf(ScheduledTrigger).a1w = function () {
    return this.n1w_1;
  };
  protoOf(ScheduledTrigger).od = function () {
    return this.m1w_1;
  };
  protoOf(ScheduledTrigger).pd = function () {
    return this.time;
  };
  protoOf(ScheduledTrigger).r1g = function () {
    return this.recurrenceRule;
  };
  protoOf(ScheduledTrigger).q1w = function (sourceDeviceRoleName, time, recurrenceRule) {
    return new ScheduledTrigger(sourceDeviceRoleName, time, recurrenceRule);
  };
  protoOf(ScheduledTrigger).copy = function (sourceDeviceRoleName, time, recurrenceRule, $super) {
    sourceDeviceRoleName = sourceDeviceRoleName === VOID ? this.m1w_1 : sourceDeviceRoleName;
    time = time === VOID ? this.time : time;
    recurrenceRule = recurrenceRule === VOID ? this.recurrenceRule : recurrenceRule;
    return this.q1w(sourceDeviceRoleName, time, recurrenceRule);
  };
  protoOf(ScheduledTrigger).toString = function () {
    return 'ScheduledTrigger(sourceDeviceRoleName=' + this.m1w_1 + ', time=' + this.time + ', recurrenceRule=' + this.recurrenceRule + ')';
  };
  protoOf(ScheduledTrigger).hashCode = function () {
    var result = getStringHashCode(this.m1w_1);
    result = imul(result, 31) + this.time.hashCode() | 0;
    result = imul(result, 31) + this.recurrenceRule.hashCode() | 0;
    return result;
  };
  protoOf(ScheduledTrigger).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScheduledTrigger))
      return false;
    var tmp0_other_with_cast = other instanceof ScheduledTrigger ? other : THROW_CCE();
    if (!(this.m1w_1 === tmp0_other_with_cast.m1w_1))
      return false;
    if (!this.time.equals(tmp0_other_with_cast.time))
      return false;
    if (!this.recurrenceRule.equals(tmp0_other_with_cast.recurrenceRule))
      return false;
    return true;
  };
  var Control_Start_instance;
  var Control_Stop_instance;
  function values_5() {
    return [Control_Start_getInstance(), Control_Stop_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'Start':
        return Control_Start_getInstance();
      case 'Stop':
        return Control_Stop_getInstance();
      default:
        Control_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Control_entriesInitialized;
  function Control_initEntries() {
    if (Control_entriesInitialized)
      return Unit_instance;
    Control_entriesInitialized = true;
    Control_Start_instance = new Control('Start', 0);
    Control_Stop_instance = new Control('Stop', 1);
  }
  function Control(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_59() {
    Companion_instance_60 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t1w_1 = [null, null, null, createSimpleEnumSerializer('dk.cachet.carp.common.application.triggers.TaskControl.Control', values_5())];
  }
  protoOf(Companion_59).m16 = function () {
    return $serializer_getInstance_37();
  };
  var Companion_instance_60;
  function Companion_getInstance_60() {
    if (Companion_instance_60 == null)
      new Companion_59();
    return Companion_instance_60;
  }
  function $serializer_38() {
    $serializer_instance_37 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.triggers.TaskControl', this, 4);
    tmp0_serialDesc.nt('triggerId', false);
    tmp0_serialDesc.nt('taskName', false);
    tmp0_serialDesc.nt('destinationDeviceRoleName', false);
    tmp0_serialDesc.nt('control', false);
    this.u1w_1 = tmp0_serialDesc;
  }
  protoOf($serializer_38).pi = function () {
    return this.u1w_1;
  };
  protoOf($serializer_38).cu = function () {
    var tmp0_cached = Companion_getInstance_60().t1w_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[3]];
  };
  protoOf($serializer_38).ri = function (decoder) {
    var tmp0_desc = this.u1w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_60().t1w_1;
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.cm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
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
            tmp4_local0 = tmp8_input.cm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.hm(tmp0_desc, 1);
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
    return TaskControl_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_38).v1w = function (encoder, value) {
    var tmp0_desc = this.u1w_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_60().t1w_1;
    tmp1_output.in(tmp0_desc, 0, value.triggerId);
    tmp1_output.nn(tmp0_desc, 1, value.taskName);
    tmp1_output.nn(tmp0_desc, 2, value.destinationDeviceRoleName);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.control);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_38).qi = function (encoder, value) {
    return this.v1w(encoder, value instanceof TaskControl ? value : THROW_CCE());
  };
  var $serializer_instance_37;
  function $serializer_getInstance_37() {
    if ($serializer_instance_37 == null)
      new $serializer_38();
    return $serializer_instance_37;
  }
  function TaskControl_init_$Init$(seen1, triggerId, taskName, destinationDeviceRoleName, control, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_37().u1w_1);
    }
    $this.triggerId = triggerId;
    $this.taskName = taskName;
    $this.destinationDeviceRoleName = destinationDeviceRoleName;
    $this.control = control;
    return $this;
  }
  function TaskControl_init_$Create$(seen1, triggerId, taskName, destinationDeviceRoleName, control, serializationConstructorMarker) {
    return TaskControl_init_$Init$(seen1, triggerId, taskName, destinationDeviceRoleName, control, serializationConstructorMarker, objectCreate(protoOf(TaskControl)));
  }
  function Control_Start_getInstance() {
    Control_initEntries();
    return Control_Start_instance;
  }
  function Control_Stop_getInstance() {
    Control_initEntries();
    return Control_Stop_instance;
  }
  function TaskControl(triggerId, taskName, destinationDeviceRoleName, control) {
    Companion_getInstance_60();
    this.triggerId = triggerId;
    this.taskName = taskName;
    this.destinationDeviceRoleName = destinationDeviceRoleName;
    this.control = control;
  }
  protoOf(TaskControl).n1m = function () {
    return this.triggerId;
  };
  protoOf(TaskControl).s1j = function () {
    return this.taskName;
  };
  protoOf(TaskControl).o1m = function () {
    return this.destinationDeviceRoleName;
  };
  protoOf(TaskControl).p1m = function () {
    return this.control;
  };
  protoOf(TaskControl).od = function () {
    return this.triggerId;
  };
  protoOf(TaskControl).pd = function () {
    return this.taskName;
  };
  protoOf(TaskControl).r1g = function () {
    return this.destinationDeviceRoleName;
  };
  protoOf(TaskControl).q1h = function () {
    return this.control;
  };
  protoOf(TaskControl).w1w = function (triggerId, taskName, destinationDeviceRoleName, control) {
    return new TaskControl(triggerId, taskName, destinationDeviceRoleName, control);
  };
  protoOf(TaskControl).copy = function (triggerId, taskName, destinationDeviceRoleName, control, $super) {
    triggerId = triggerId === VOID ? this.triggerId : triggerId;
    taskName = taskName === VOID ? this.taskName : taskName;
    destinationDeviceRoleName = destinationDeviceRoleName === VOID ? this.destinationDeviceRoleName : destinationDeviceRoleName;
    control = control === VOID ? this.control : control;
    return this.w1w(triggerId, taskName, destinationDeviceRoleName, control);
  };
  protoOf(TaskControl).toString = function () {
    return 'TaskControl(triggerId=' + this.triggerId + ', taskName=' + this.taskName + ', destinationDeviceRoleName=' + this.destinationDeviceRoleName + ', control=' + this.control + ')';
  };
  protoOf(TaskControl).hashCode = function () {
    var result = this.triggerId;
    result = imul(result, 31) + getStringHashCode(this.taskName) | 0;
    result = imul(result, 31) + getStringHashCode(this.destinationDeviceRoleName) | 0;
    result = imul(result, 31) + this.control.hashCode() | 0;
    return result;
  };
  protoOf(TaskControl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TaskControl))
      return false;
    var tmp0_other_with_cast = other instanceof TaskControl ? other : THROW_CCE();
    if (!(this.triggerId === tmp0_other_with_cast.triggerId))
      return false;
    if (!(this.taskName === tmp0_other_with_cast.taskName))
      return false;
    if (!(this.destinationDeviceRoleName === tmp0_other_with_cast.destinationDeviceRoleName))
      return false;
    if (!this.control.equals(tmp0_other_with_cast.control))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj_9($this) {
    return $this.x1w_1.r2();
  }
  function TriggerConfiguration$Companion$_anonymous__dodx4h() {
    var tmp = getKClass(TriggerConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion_60() {
    Companion_instance_61 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.x1w_1 = lazy(tmp_0, TriggerConfiguration$Companion$_anonymous__dodx4h);
  }
  protoOf(Companion_60).d1r = function (typeSerial0) {
    return _get_$cachedSerializer__te6jhj_9(this);
  };
  protoOf(Companion_60).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  var Companion_instance_61;
  function Companion_getInstance_61() {
    if (Companion_instance_61 == null)
      new Companion_60();
    return Companion_instance_61;
  }
  function TriggerConfiguration_init_$Init$(seen1, serializationConstructorMarker, $this) {
    $this.y1w_1 = false;
    return $this;
  }
  function TriggerConfiguration() {
    Companion_getInstance_61();
    this.y1w_1 = false;
  }
  protoOf(TriggerConfiguration).a1w = function () {
    return this.y1w_1;
  };
  function _get_$cachedSerializer__te6jhj_10($this) {
    return $this.z1w_1.r2();
  }
  function AccountIdentity$Companion$_anonymous__b7om4k() {
    var tmp = getKClass(AccountIdentity);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion_61() {
    Companion_instance_62 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.z1w_1 = lazy(tmp_0, AccountIdentity$Companion$_anonymous__b7om4k);
  }
  protoOf(Companion_61).fromEmailAddress = function (emailAddress) {
    return create_3(emailAddress);
  };
  protoOf(Companion_61).fromUsername = function (username) {
    return create_4(username);
  };
  protoOf(Companion_61).m16 = function () {
    return _get_$cachedSerializer__te6jhj_10(this);
  };
  protoOf(Companion_61).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_62;
  function Companion_getInstance_62() {
    if (Companion_instance_62 == null)
      new Companion_61();
    return Companion_instance_62;
  }
  function AccountIdentity_init_$Init$(seen1, serializationConstructorMarker, $this) {
    return $this;
  }
  function AccountIdentity() {
    Companion_getInstance_62();
  }
  function EmailAccountIdentity_init_$Init$(emailAddress, $this) {
    EmailAccountIdentity.call($this, new EmailAddress(emailAddress));
    return $this;
  }
  function create_3(emailAddress) {
    return EmailAccountIdentity_init_$Init$(emailAddress, objectCreate(protoOf(EmailAccountIdentity)));
  }
  function Companion_62() {
  }
  protoOf(Companion_62).m16 = function () {
    return $serializer_getInstance_38();
  };
  var Companion_instance_63;
  function Companion_getInstance_63() {
    return Companion_instance_63;
  }
  function $serializer_39() {
    $serializer_instance_38 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.EmailAccountIdentity', this, 1);
    tmp0_serialDesc.nt('emailAddress', false);
    this.a1x_1 = tmp0_serialDesc;
  }
  protoOf($serializer_39).pi = function () {
    return this.a1x_1;
  };
  protoOf($serializer_39).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [EmailAddressSerializer_getInstance()];
  };
  protoOf($serializer_39).ri = function (decoder) {
    var tmp0_desc = this.a1x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xl(tmp0_desc);
    if (tmp5_input.om()) {
      tmp4_local0 = tmp5_input.jm(tmp0_desc, 0, EmailAddressSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.jm(tmp0_desc, 0, EmailAddressSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yl(tmp0_desc);
    return EmailAccountIdentity_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_39).b1x = function (encoder, value) {
    var tmp0_desc = this.a1x_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, EmailAddressSerializer_getInstance(), value.emailAddress);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_39).qi = function (encoder, value) {
    return this.b1x(encoder, value instanceof EmailAccountIdentity ? value : THROW_CCE());
  };
  var $serializer_instance_38;
  function $serializer_getInstance_38() {
    if ($serializer_instance_38 == null)
      new $serializer_39();
    return $serializer_instance_38;
  }
  function EmailAccountIdentity_init_$Init$_0(seen1, emailAddress, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_38().a1x_1);
    }
    AccountIdentity_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.emailAddress = emailAddress;
    return $this;
  }
  function EmailAccountIdentity_init_$Create$(seen1, emailAddress, serializationConstructorMarker) {
    return EmailAccountIdentity_init_$Init$_0(seen1, emailAddress, serializationConstructorMarker, objectCreate(protoOf(EmailAccountIdentity)));
  }
  function EmailAccountIdentity(emailAddress) {
    AccountIdentity.call(this);
    this.emailAddress = emailAddress;
  }
  protoOf(EmailAccountIdentity).c1x = function () {
    return this.emailAddress;
  };
  protoOf(EmailAccountIdentity).od = function () {
    return this.emailAddress;
  };
  protoOf(EmailAccountIdentity).d1x = function (emailAddress) {
    return new EmailAccountIdentity(emailAddress);
  };
  protoOf(EmailAccountIdentity).copy = function (emailAddress, $super) {
    emailAddress = emailAddress === VOID ? this.emailAddress : emailAddress;
    return this.d1x(emailAddress);
  };
  protoOf(EmailAccountIdentity).toString = function () {
    return 'EmailAccountIdentity(emailAddress=' + this.emailAddress + ')';
  };
  protoOf(EmailAccountIdentity).hashCode = function () {
    return this.emailAddress.hashCode();
  };
  protoOf(EmailAccountIdentity).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmailAccountIdentity))
      return false;
    var tmp0_other_with_cast = other instanceof EmailAccountIdentity ? other : THROW_CCE();
    if (!this.emailAddress.equals(tmp0_other_with_cast.emailAddress))
      return false;
    return true;
  };
  function UsernameAccountIdentity_init_$Init$(username, $this) {
    UsernameAccountIdentity.call($this, new Username(username));
    return $this;
  }
  function create_4(username) {
    return UsernameAccountIdentity_init_$Init$(username, objectCreate(protoOf(UsernameAccountIdentity)));
  }
  function Companion_63() {
  }
  protoOf(Companion_63).m16 = function () {
    return $serializer_getInstance_39();
  };
  var Companion_instance_64;
  function Companion_getInstance_64() {
    return Companion_instance_64;
  }
  function $serializer_40() {
    $serializer_instance_39 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.UsernameAccountIdentity', this, 1);
    tmp0_serialDesc.nt('username', false);
    this.e1x_1 = tmp0_serialDesc;
  }
  protoOf($serializer_40).pi = function () {
    return this.e1x_1;
  };
  protoOf($serializer_40).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UsernameSerializer_getInstance()];
  };
  protoOf($serializer_40).ri = function (decoder) {
    var tmp0_desc = this.e1x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xl(tmp0_desc);
    if (tmp5_input.om()) {
      tmp4_local0 = tmp5_input.jm(tmp0_desc, 0, UsernameSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.jm(tmp0_desc, 0, UsernameSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yl(tmp0_desc);
    return UsernameAccountIdentity_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_40).f1x = function (encoder, value) {
    var tmp0_desc = this.e1x_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, UsernameSerializer_getInstance(), value.username);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_40).qi = function (encoder, value) {
    return this.f1x(encoder, value instanceof UsernameAccountIdentity ? value : THROW_CCE());
  };
  var $serializer_instance_39;
  function $serializer_getInstance_39() {
    if ($serializer_instance_39 == null)
      new $serializer_40();
    return $serializer_instance_39;
  }
  function UsernameAccountIdentity_init_$Init$_0(seen1, username, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_39().e1x_1);
    }
    AccountIdentity_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.username = username;
    return $this;
  }
  function UsernameAccountIdentity_init_$Create$(seen1, username, serializationConstructorMarker) {
    return UsernameAccountIdentity_init_$Init$_0(seen1, username, serializationConstructorMarker, objectCreate(protoOf(UsernameAccountIdentity)));
  }
  function UsernameAccountIdentity(username) {
    AccountIdentity.call(this);
    this.username = username;
  }
  protoOf(UsernameAccountIdentity).g1x = function () {
    return this.username;
  };
  protoOf(UsernameAccountIdentity).od = function () {
    return this.username;
  };
  protoOf(UsernameAccountIdentity).h1x = function (username) {
    return new UsernameAccountIdentity(username);
  };
  protoOf(UsernameAccountIdentity).copy = function (username, $super) {
    username = username === VOID ? this.username : username;
    return this.h1x(username);
  };
  protoOf(UsernameAccountIdentity).toString = function () {
    return 'UsernameAccountIdentity(username=' + this.username + ')';
  };
  protoOf(UsernameAccountIdentity).hashCode = function () {
    return this.username.hashCode();
  };
  protoOf(UsernameAccountIdentity).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UsernameAccountIdentity))
      return false;
    var tmp0_other_with_cast = other instanceof UsernameAccountIdentity ? other : THROW_CCE();
    if (!this.username.equals(tmp0_other_with_cast.username))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj_11($this) {
    return $this.i1x_1.r2();
  }
  function AssignedTo$All$_anonymous__xzl6z5() {
    var tmp = All_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer_init_$Create$('dk.cachet.carp.common.application.users.AssignedTo.All', tmp, tmp$ret$2);
  }
  function Companion_64() {
    Companion_instance_65 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j1x_1 = [new LinkedHashSetSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_64).m16 = function () {
    return $serializer_getInstance_40();
  };
  var Companion_instance_65;
  function Companion_getInstance_65() {
    if (Companion_instance_65 == null)
      new Companion_64();
    return Companion_instance_65;
  }
  function $serializer_41() {
    $serializer_instance_40 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.AssignedTo.Roles', this, 1);
    tmp0_serialDesc.nt('roleNames', false);
    this.k1x_1 = tmp0_serialDesc;
  }
  protoOf($serializer_41).pi = function () {
    return this.k1x_1;
  };
  protoOf($serializer_41).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_65().j1x_1[0]];
  };
  protoOf($serializer_41).ri = function (decoder) {
    var tmp0_desc = this.k1x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xl(tmp0_desc);
    var tmp6_cached = Companion_getInstance_65().j1x_1;
    if (tmp5_input.om()) {
      tmp4_local0 = tmp5_input.jm(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.jm(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yl(tmp0_desc);
    return Roles_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_41).l1x = function (encoder, value) {
    var tmp0_desc = this.k1x_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_65().j1x_1;
    tmp1_output.pn(tmp0_desc, 0, tmp2_cached[0], value.roleNames);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_41).qi = function (encoder, value) {
    return this.l1x(encoder, value instanceof Roles ? value : THROW_CCE());
  };
  var $serializer_instance_40;
  function $serializer_getInstance_40() {
    if ($serializer_instance_40 == null)
      new $serializer_41();
    return $serializer_instance_40;
  }
  function Roles_init_$Init$(seen1, roleNames, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_40().k1x_1);
    }
    AssignedTo_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.roleNames = roleNames;
    return $this;
  }
  function Roles_init_$Create$(seen1, roleNames, serializationConstructorMarker) {
    return Roles_init_$Init$(seen1, roleNames, serializationConstructorMarker, objectCreate(protoOf(Roles)));
  }
  function _get_$cachedSerializer__te6jhj_12($this) {
    return $this.m1x_1.r2();
  }
  function AssignedTo$Companion$_anonymous__eiup2e() {
    var tmp = getKClass(AssignedTo);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(All), getKClass(Roles)];
    // Inline function 'kotlin.arrayOf' call
    var tmp_1 = All_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = [ObjectSerializer_init_$Create$('dk.cachet.carp.common.application.users.AssignedTo.All', tmp_1, tmp$ret$5), $serializer_getInstance_40()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.common.application.users.AssignedTo', tmp, tmp_0, tmp_2, tmp$ret$11);
  }
  function All() {
    All_instance = this;
    AssignedTo.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.i1x_1 = lazy(tmp_0, AssignedTo$All$_anonymous__xzl6z5);
  }
  protoOf(All).m16 = function () {
    return _get_$cachedSerializer__te6jhj_11(this);
  };
  protoOf(All).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var All_instance;
  function All_getInstance() {
    if (All_instance == null)
      new All();
    return All_instance;
  }
  function Roles(roleNames) {
    Companion_getInstance_65();
    AssignedTo.call(this);
    this.roleNames = roleNames;
  }
  protoOf(Roles).n1x = function () {
    return this.roleNames;
  };
  protoOf(Roles).od = function () {
    return this.roleNames;
  };
  protoOf(Roles).o1x = function (roleNames) {
    return new Roles(roleNames);
  };
  protoOf(Roles).copy = function (roleNames, $super) {
    roleNames = roleNames === VOID ? this.roleNames : roleNames;
    return this.o1x(roleNames);
  };
  protoOf(Roles).toString = function () {
    return 'Roles(roleNames=' + this.roleNames + ')';
  };
  protoOf(Roles).hashCode = function () {
    return hashCode(this.roleNames);
  };
  protoOf(Roles).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Roles))
      return false;
    var tmp0_other_with_cast = other instanceof Roles ? other : THROW_CCE();
    if (!equals(this.roleNames, tmp0_other_with_cast.roleNames))
      return false;
    return true;
  };
  function Companion_65() {
    Companion_instance_66 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.m1x_1 = lazy(tmp_0, AssignedTo$Companion$_anonymous__eiup2e);
  }
  protoOf(Companion_65).m16 = function () {
    return _get_$cachedSerializer__te6jhj_12(this);
  };
  protoOf(Companion_65).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_66;
  function Companion_getInstance_66() {
    if (Companion_instance_66 == null)
      new Companion_65();
    return Companion_instance_66;
  }
  function AssignedTo_init_$Init$(seen1, serializationConstructorMarker, $this) {
    return $this;
  }
  function AssignedTo() {
    Companion_getInstance_66();
  }
  function Companion_66() {
    Companion_instance_67 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q1x_1 = [Companion_getInstance_70().m16(), Companion_getInstance_66().m16()];
  }
  protoOf(Companion_66).m16 = function () {
    return $serializer_getInstance_41();
  };
  var Companion_instance_67;
  function Companion_getInstance_67() {
    if (Companion_instance_67 == null)
      new Companion_66();
    return Companion_instance_67;
  }
  function $serializer_42() {
    $serializer_instance_41 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.ExpectedParticipantData', this, 2);
    tmp0_serialDesc.nt('attribute', false);
    tmp0_serialDesc.nt('assignedTo', true);
    this.r1x_1 = tmp0_serialDesc;
  }
  protoOf($serializer_42).pi = function () {
    return this.r1x_1;
  };
  protoOf($serializer_42).cu = function () {
    var tmp0_cached = Companion_getInstance_67().q1x_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1]];
  };
  protoOf($serializer_42).ri = function (decoder) {
    var tmp0_desc = this.r1x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_67().q1x_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
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
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
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
    return ExpectedParticipantData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_42).s1x = function (encoder, value) {
    var tmp0_desc = this.r1x_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_67().q1x_1;
    tmp1_output.pn(tmp0_desc, 0, tmp2_cached[0], value.attribute);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !equals(value.assignedTo, All_getInstance())) {
      tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.assignedTo);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_42).qi = function (encoder, value) {
    return this.s1x(encoder, value instanceof ExpectedParticipantData ? value : THROW_CCE());
  };
  var $serializer_instance_41;
  function $serializer_getInstance_41() {
    if ($serializer_instance_41 == null)
      new $serializer_42();
    return $serializer_instance_41;
  }
  function ExpectedParticipantData_init_$Init$(seen1, attribute, assignedTo, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_41().r1x_1);
    }
    $this.attribute = attribute;
    if (0 === (seen1 & 2))
      $this.assignedTo = All_getInstance();
    else
      $this.assignedTo = assignedTo;
    return $this;
  }
  function ExpectedParticipantData_init_$Create$(seen1, attribute, assignedTo, serializationConstructorMarker) {
    return ExpectedParticipantData_init_$Init$(seen1, attribute, assignedTo, serializationConstructorMarker, objectCreate(protoOf(ExpectedParticipantData)));
  }
  function ExpectedParticipantData(attribute, assignedTo) {
    Companion_getInstance_67();
    assignedTo = assignedTo === VOID ? All_getInstance() : assignedTo;
    this.attribute = attribute;
    this.assignedTo = assignedTo;
  }
  protoOf(ExpectedParticipantData).t1x = function () {
    return this.attribute;
  };
  protoOf(ExpectedParticipantData).u1x = function () {
    return this.assignedTo;
  };
  protoOf(ExpectedParticipantData).v1x = function () {
    return this.attribute.inputDataType;
  };
  protoOf(ExpectedParticipantData).od = function () {
    return this.attribute;
  };
  protoOf(ExpectedParticipantData).pd = function () {
    return this.assignedTo;
  };
  protoOf(ExpectedParticipantData).w1x = function (attribute, assignedTo) {
    return new ExpectedParticipantData(attribute, assignedTo);
  };
  protoOf(ExpectedParticipantData).copy = function (attribute, assignedTo, $super) {
    attribute = attribute === VOID ? this.attribute : attribute;
    assignedTo = assignedTo === VOID ? this.assignedTo : assignedTo;
    return this.w1x(attribute, assignedTo);
  };
  protoOf(ExpectedParticipantData).toString = function () {
    return 'ExpectedParticipantData(attribute=' + this.attribute + ', assignedTo=' + this.assignedTo + ')';
  };
  protoOf(ExpectedParticipantData).hashCode = function () {
    var result = hashCode(this.attribute);
    result = imul(result, 31) + hashCode(this.assignedTo) | 0;
    return result;
  };
  protoOf(ExpectedParticipantData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExpectedParticipantData))
      return false;
    var tmp0_other_with_cast = other instanceof ExpectedParticipantData ? other : THROW_CCE();
    if (!equals(this.attribute, tmp0_other_with_cast.attribute))
      return false;
    if (!equals(this.assignedTo, tmp0_other_with_cast.assignedTo))
      return false;
    return true;
  };
  function hasNoConflicts(_this__u8e3s4, exceptionOnConflict) {
    exceptionOnConflict = exceptionOnConflict === VOID ? false : exceptionOnConflict;
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var tmp0_iterator = _this__u8e3s4.t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.common.application.users.hasNoConflicts.<anonymous>' call
      var key = element.inputDataType;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.x2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination.n2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.q(element);
    }
    var expectedDataByInputType = destination;
    var tmp$ret$5;
    $l$block_2: {
      // Inline function 'kotlin.collections.all' call
      if (expectedDataByInputType.y()) {
        tmp$ret$5 = true;
        break $l$block_2;
      }
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = expectedDataByInputType.p2().t();
      while (tmp0_iterator_0.u()) {
        var element_0 = tmp0_iterator_0.v();
        // Inline function 'dk.cachet.carp.common.application.users.hasNoConflicts.<anonymous>' call
        var tmp0_safe_receiver = firstOrNull(element_0.r2());
        var firstAttribute = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.attribute;
        var tmp$ret$7;
        $l$block_1: {
          // Inline function 'kotlin.collections.all' call
          var this_0 = element_0.r2();
          var tmp_0;
          if (isInterface(this_0, Collection)) {
            tmp_0 = this_0.y();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$7 = true;
            break $l$block_1;
          }
          var tmp0_iterator_1 = this_0.t();
          while (tmp0_iterator_1.u()) {
            var element_1 = tmp0_iterator_1.v();
            // Inline function 'dk.cachet.carp.common.application.users.hasNoConflicts.<anonymous>.<anonymous>' call
            if (!equals(element_1.attribute, firstAttribute)) {
              tmp$ret$7 = false;
              break $l$block_1;
            }
          }
          tmp$ret$7 = true;
        }
        if (!tmp$ret$7) {
          tmp$ret$5 = false;
          break $l$block_2;
        }
      }
      tmp$ret$5 = true;
    }
    var noConflictingAttributes = tmp$ret$5;
    if (exceptionOnConflict) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!noConflictingAttributes) {
        // Inline function 'dk.cachet.carp.common.application.users.hasNoConflicts.<anonymous>' call
        var message = 'Expected data contains differing participant attributes with the same input data type.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp$ret$11;
    $l$block_4: {
      // Inline function 'kotlin.collections.all' call
      if (expectedDataByInputType.y()) {
        tmp$ret$11 = true;
        break $l$block_4;
      }
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_2 = expectedDataByInputType.p2().t();
      while (tmp0_iterator_2.u()) {
        var element_2 = tmp0_iterator_2.v();
        // Inline function 'dk.cachet.carp.common.application.users.hasNoConflicts.<anonymous>' call
        // Inline function 'kotlin.collections.component2' call
        var expectedData = element_2.r2();
        var tmp_1;
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(expectedData, 10));
        var tmp0_iterator_3 = expectedData.t();
        while (tmp0_iterator_3.u()) {
          var item = tmp0_iterator_3.v();
          // Inline function 'dk.cachet.carp.common.application.users.hasNoConflicts.<anonymous>.<anonymous>' call
          var tmp$ret$14 = item.assignedTo;
          destination_0.q(tmp$ret$14);
        }
        if (destination_0.p(All_getInstance())) {
          tmp_1 = expectedData.n() === 1;
        } else {
          // Inline function 'kotlin.collections.flatMap' call
          // Inline function 'kotlin.collections.flatMapTo' call
          var destination_1 = ArrayList_init_$Create$_0();
          var tmp0_iterator_4 = expectedData.t();
          while (tmp0_iterator_4.u()) {
            var element_3 = tmp0_iterator_4.v();
            // Inline function 'dk.cachet.carp.common.application.users.hasNoConflicts.<anonymous>.<anonymous>' call
            var tmp_2 = element_3.assignedTo;
            var list_0 = (tmp_2 instanceof Roles ? tmp_2 : THROW_CCE()).roleNames;
            addAll(destination_1, list_0);
          }
          var canBeInputBy = destination_1;
          tmp_1 = canBeInputBy.n() === distinct(canBeInputBy).n();
        }
        if (!tmp_1) {
          tmp$ret$11 = false;
          break $l$block_4;
        }
      }
      tmp$ret$11 = true;
    }
    var noMultipleInputType = tmp$ret$11;
    if (exceptionOnConflict) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!noMultipleInputType) {
        // Inline function 'dk.cachet.carp.common.application.users.hasNoConflicts.<anonymous>' call
        var message_0 = 'Expected data contains attributes of the same input data type which are assigned to the same role.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    return noConflictingAttributes ? noMultipleInputType : false;
  }
  function Companion_67() {
  }
  protoOf(Companion_67).m16 = function () {
    return $serializer_getInstance_42();
  };
  var Companion_instance_68;
  function Companion_getInstance_68() {
    return Companion_instance_68;
  }
  function $serializer_43() {
    $serializer_instance_42 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.ParticipantAttribute.DefaultParticipantAttribute', this, 1);
    tmp0_serialDesc.nt('inputDataType', false);
    this.x1x_1 = tmp0_serialDesc;
  }
  protoOf($serializer_43).pi = function () {
    return this.x1x_1;
  };
  protoOf($serializer_43).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [NamespacedIdSerializer_getInstance()];
  };
  protoOf($serializer_43).ri = function (decoder) {
    var tmp0_desc = this.x1x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xl(tmp0_desc);
    if (tmp5_input.om()) {
      tmp4_local0 = tmp5_input.jm(tmp0_desc, 0, NamespacedIdSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.jm(tmp0_desc, 0, NamespacedIdSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yl(tmp0_desc);
    return DefaultParticipantAttribute_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_43).y1x = function (encoder, value) {
    var tmp0_desc = this.x1x_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, NamespacedIdSerializer_getInstance(), value.z1x_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_43).qi = function (encoder, value) {
    return this.y1x(encoder, value instanceof DefaultParticipantAttribute ? value : THROW_CCE());
  };
  var $serializer_instance_42;
  function $serializer_getInstance_42() {
    if ($serializer_instance_42 == null)
      new $serializer_43();
    return $serializer_instance_42;
  }
  function DefaultParticipantAttribute_init_$Init$(seen1, inputDataType, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_42().x1x_1);
    }
    ParticipantAttribute_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.z1x_1 = inputDataType;
    return $this;
  }
  function DefaultParticipantAttribute_init_$Create$(seen1, inputDataType, serializationConstructorMarker) {
    return DefaultParticipantAttribute_init_$Init$(seen1, inputDataType, serializationConstructorMarker, objectCreate(protoOf(DefaultParticipantAttribute)));
  }
  function $serializer_init_$Init$_0(typeSerial0, $this) {
    $serializer_44.call($this);
    $this.b1y_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$_0(typeSerial0) {
    return $serializer_init_$Init$_0(typeSerial0, objectCreate(protoOf($serializer_44)));
  }
  function Companion_68() {
    Companion_instance_69 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(InputElement);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c1y_1 = [PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2), null];
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.ParticipantAttribute.CustomParticipantAttribute', null, 2);
    tmp0_serialDesc.nt('input', false);
    tmp0_serialDesc.nt('inputDataType', true);
    this.d1y_1 = tmp0_serialDesc;
  }
  protoOf(Companion_68).d1r = function (typeSerial0) {
    return $serializer_init_$Create$_0(typeSerial0);
  };
  protoOf(Companion_68).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  protoOf(Companion_68).c1t = function () {
    return this.d1y_1;
  };
  var Companion_instance_69;
  function Companion_getInstance_69() {
    if (Companion_instance_69 == null)
      new Companion_68();
    return Companion_instance_69;
  }
  function $serializer_44() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.ParticipantAttribute.CustomParticipantAttribute', this, 2);
    tmp0_serialDesc.nt('input', false);
    tmp0_serialDesc.nt('inputDataType', true);
    this.a1y_1 = tmp0_serialDesc;
  }
  protoOf($serializer_44).pi = function () {
    return this.a1y_1;
  };
  protoOf($serializer_44).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_69().c1y_1[0], NamespacedIdSerializer_getInstance()];
  };
  protoOf($serializer_44).ri = function (decoder) {
    var tmp0_desc = this.a1y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_69().c1y_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, NamespacedIdSerializer_getInstance(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, NamespacedIdSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return CustomParticipantAttribute_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_44).e1y = function (encoder, value) {
    var tmp0_desc = this.a1y_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_69().c1y_1;
    tmp1_output.pn(tmp0_desc, 0, tmp2_cached[0], value.input);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !value.f1y_1.equals(new NamespacedId(get_CUSTOM_INPUT_TYPE_NAME(), replace_0(Companion_instance_8.randomUUID().toString(), '-', '')))) {
      tmp1_output.pn(tmp0_desc, 1, NamespacedIdSerializer_getInstance(), value.f1y_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_44).qi = function (encoder, value) {
    return this.e1y(encoder, value instanceof CustomParticipantAttribute ? value : THROW_CCE());
  };
  protoOf($serializer_44).du = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.b1y_1];
  };
  function CustomParticipantAttribute_init_$Init$(seen1, input, inputDataType, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, Companion_getInstance_69().d1y_1);
    }
    ParticipantAttribute_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.input = input;
    if (0 === (seen1 & 2))
      $this.f1y_1 = new NamespacedId(get_CUSTOM_INPUT_TYPE_NAME(), replace_0(Companion_instance_8.randomUUID().toString(), '-', ''));
    else
      $this.f1y_1 = inputDataType;
    return $this;
  }
  function CustomParticipantAttribute_init_$Create$(seen1, input, inputDataType, serializationConstructorMarker) {
    return CustomParticipantAttribute_init_$Init$(seen1, input, inputDataType, serializationConstructorMarker, objectCreate(protoOf(CustomParticipantAttribute)));
  }
  function _get_$cachedSerializer__te6jhj_13($this) {
    return $this.p1x_1.r2();
  }
  function ParticipantAttribute$Companion$_anonymous__7dlyl6() {
    var tmp = getKClass(ParticipantAttribute);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(CustomParticipantAttribute), getKClass(DefaultParticipantAttribute)];
    // Inline function 'kotlin.arrayOf' call
    var tmp_1 = PrimitiveClasses_getInstance().z6();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = [$serializer_init_$Create$_0(PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$5)), $serializer_getInstance_42()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.common.application.users.ParticipantAttribute', tmp, tmp_0, tmp_2, tmp$ret$11);
  }
  function DefaultParticipantAttribute(inputDataType) {
    ParticipantAttribute.call(this);
    this.z1x_1 = inputDataType;
  }
  protoOf(DefaultParticipantAttribute).v1x = function () {
    return this.z1x_1;
  };
  protoOf(DefaultParticipantAttribute).od = function () {
    return this.z1x_1;
  };
  protoOf(DefaultParticipantAttribute).g1y = function (inputDataType) {
    return new DefaultParticipantAttribute(inputDataType);
  };
  protoOf(DefaultParticipantAttribute).copy = function (inputDataType, $super) {
    inputDataType = inputDataType === VOID ? this.z1x_1 : inputDataType;
    return this.g1y(inputDataType);
  };
  protoOf(DefaultParticipantAttribute).toString = function () {
    return 'DefaultParticipantAttribute(inputDataType=' + this.z1x_1 + ')';
  };
  protoOf(DefaultParticipantAttribute).hashCode = function () {
    return this.z1x_1.hashCode();
  };
  protoOf(DefaultParticipantAttribute).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DefaultParticipantAttribute))
      return false;
    var tmp0_other_with_cast = other instanceof DefaultParticipantAttribute ? other : THROW_CCE();
    if (!this.z1x_1.equals(tmp0_other_with_cast.z1x_1))
      return false;
    return true;
  };
  function CustomParticipantAttribute(input) {
    Companion_getInstance_69();
    ParticipantAttribute.call(this);
    this.input = input;
    this.f1y_1 = new NamespacedId(get_CUSTOM_INPUT_TYPE_NAME(), replace_0(Companion_instance_8.randomUUID().toString(), '-', ''));
  }
  protoOf(CustomParticipantAttribute).n1n = function () {
    return this.input;
  };
  protoOf(CustomParticipantAttribute).v1x = function () {
    return this.f1y_1;
  };
  protoOf(CustomParticipantAttribute).od = function () {
    return this.input;
  };
  protoOf(CustomParticipantAttribute).h1y = function (input) {
    return new CustomParticipantAttribute(input);
  };
  protoOf(CustomParticipantAttribute).copy = function (input, $super) {
    input = input === VOID ? this.input : input;
    return this.h1y(input);
  };
  protoOf(CustomParticipantAttribute).toString = function () {
    return 'CustomParticipantAttribute(input=' + this.input + ')';
  };
  protoOf(CustomParticipantAttribute).hashCode = function () {
    return hashCode(this.input);
  };
  protoOf(CustomParticipantAttribute).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomParticipantAttribute))
      return false;
    var tmp0_other_with_cast = other instanceof CustomParticipantAttribute ? other : THROW_CCE();
    if (!equals(this.input, tmp0_other_with_cast.input))
      return false;
    return true;
  };
  function isValidCustomData($this, inputElement, data) {
    return inputElement.getDataClass().j6(data.input);
  }
  function Companion_69() {
    Companion_instance_70 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.p1x_1 = lazy(tmp_0, ParticipantAttribute$Companion$_anonymous__7dlyl6);
  }
  protoOf(Companion_69).m16 = function () {
    return _get_$cachedSerializer__te6jhj_13(this);
  };
  protoOf(Companion_69).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var Companion_instance_70;
  function Companion_getInstance_70() {
    if (Companion_instance_70 == null)
      new Companion_69();
    return Companion_instance_70;
  }
  function ParticipantAttribute_init_$Init$(seen1, serializationConstructorMarker, $this) {
    return $this;
  }
  function ParticipantAttribute() {
    Companion_getInstance_70();
  }
  protoOf(ParticipantAttribute).getInputElement = function (registeredInputDataTypes) {
    var tmp;
    if (this instanceof DefaultParticipantAttribute) {
      var tmp1_elvis_lhs = registeredInputDataTypes.inputElements.x2(this.inputDataType);
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw UnsupportedOperationException_init_$Create$("No input element for '" + this.inputDataType + "' registered.");
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (this instanceof CustomParticipantAttribute) {
        tmp = this.input;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  protoOf(ParticipantAttribute).isValidInput = function (registeredInputDataTypes, input) {
    var tmp = this.getInputElement(registeredInputDataTypes);
    var inputElement = isInterface(tmp, InputElement) ? tmp : THROW_CCE();
    if (input == null)
      return true;
    var isExpectedDataType = inputElement.getDataClass().j6(input);
    return isExpectedDataType ? inputElement.isValid(input) : false;
  };
  protoOf(ParticipantAttribute).inputToData = function (registeredInputDataTypes, input) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.isValidInput(registeredInputDataTypes, input)) {
      // Inline function 'dk.cachet.carp.common.application.users.ParticipantAttribute.inputToData.<anonymous>' call
      var message = 'Input value does not match constraints for the specified input data type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (input == null)
      return null;
    if (this instanceof CustomParticipantAttribute)
      return new CustomInput(input);
    var tmp0_elvis_lhs = registeredInputDataTypes.inputToDataConverters.x2(this.inputDataType);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw UnsupportedOperationException_init_$Create$("No data converter for '" + this.inputDataType + "' registered.");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var converter = tmp;
    return converter(input);
  };
  protoOf(ParticipantAttribute).isValidData = function (registeredInputDataTypes, data) {
    var inputElement = this.getInputElement(registeredInputDataTypes);
    if (data == null)
      return true;
    var tmp;
    if (this instanceof CustomParticipantAttribute) {
      var tmp_0;
      if (data instanceof CustomInput) {
        tmp_0 = isValidCustomData(this, inputElement, data);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (this instanceof DefaultParticipantAttribute) {
        // Inline function 'kotlin.checkNotNull' call
        var value = registeredInputDataTypes.dataClasses.x2(this.inputDataType);
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (value == null) {
            // Inline function 'kotlin.checkNotNull.<anonymous>' call
            var message = 'Required value was null.';
            throw IllegalStateException_init_$Create$(toString(message));
          } else {
            tmp$ret$1 = value;
            break $l$block;
          }
        }
        var dataClass = tmp$ret$1;
        tmp = dataClass.j6(data);
      } else {
        noWhenBranchMatchedException();
      }
    }
    var isCorrectDataType = tmp;
    if (!isCorrectDataType)
      return false;
    var input = this.dataToInput(registeredInputDataTypes, data);
    return this.isValidInput(registeredInputDataTypes, input);
  };
  protoOf(ParticipantAttribute).dataToInput = function (registeredInputDataTypes, data) {
    var tmp = this.getInputElement(registeredInputDataTypes);
    var inputElement = isInterface(tmp, InputElement) ? tmp : THROW_CCE();
    if (data == null)
      return null;
    if (this instanceof CustomParticipantAttribute) {
      // Inline function 'kotlin.require' call
      var tmp_0;
      if (data instanceof CustomInput) {
        tmp_0 = isValidCustomData(this, inputElement, data);
      } else {
        tmp_0 = false;
      }
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp_0) {
        // Inline function 'dk.cachet.carp.common.application.users.ParticipantAttribute.dataToInput.<anonymous>' call
        var message = 'Data is not of expected type for this attribute.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      return data.input;
    }
    var tmp0_elvis_lhs = registeredInputDataTypes.dataToInputConverters.x2(this.inputDataType);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw UnsupportedOperationException_init_$Create$("No data converter for '" + this.inputDataType + "' registered.");
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var converter = tmp_1;
    // Inline function 'kotlin.checkNotNull' call
    var value = registeredInputDataTypes.dataClasses.x2(this.inputDataType);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        var message_0 = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$2 = value;
        break $l$block;
      }
    }
    var dataClass = tmp$ret$2;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!dataClass.j6(data)) {
      // Inline function 'dk.cachet.carp.common.application.users.ParticipantAttribute.dataToInput.<anonymous>' call
      var message_1 = 'Data is not of expected type for this attribute.';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return converter(data);
  };
  function Companion_70() {
  }
  protoOf(Companion_70).m16 = function () {
    return $serializer_getInstance_43();
  };
  var Companion_instance_71;
  function Companion_getInstance_71() {
    return Companion_instance_71;
  }
  function $serializer_45() {
    $serializer_instance_43 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.ParticipantRole', this, 2);
    tmp0_serialDesc.nt('role', false);
    tmp0_serialDesc.nt('isOptional', false);
    this.i1y_1 = tmp0_serialDesc;
  }
  protoOf($serializer_45).pi = function () {
    return this.i1y_1;
  };
  protoOf($serializer_45).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  protoOf($serializer_45).ri = function (decoder) {
    var tmp0_desc = this.i1y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.hm(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.hm(tmp0_desc, 0);
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
    return ParticipantRole_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_45).j1y = function (encoder, value) {
    var tmp0_desc = this.i1y_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.role);
    tmp1_output.fn(tmp0_desc, 1, value.isOptional);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_45).qi = function (encoder, value) {
    return this.j1y(encoder, value instanceof ParticipantRole ? value : THROW_CCE());
  };
  var $serializer_instance_43;
  function $serializer_getInstance_43() {
    if ($serializer_instance_43 == null)
      new $serializer_45();
    return $serializer_instance_43;
  }
  function ParticipantRole_init_$Init$(seen1, role, isOptional, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_43().i1y_1);
    }
    $this.role = role;
    $this.isOptional = isOptional;
    return $this;
  }
  function ParticipantRole_init_$Create$(seen1, role, isOptional, serializationConstructorMarker) {
    return ParticipantRole_init_$Init$(seen1, role, isOptional, serializationConstructorMarker, objectCreate(protoOf(ParticipantRole)));
  }
  function ParticipantRole(role, isOptional) {
    this.role = role;
    this.isOptional = isOptional;
  }
  protoOf(ParticipantRole).k1y = function () {
    return this.role;
  };
  protoOf(ParticipantRole).v1o = function () {
    return this.isOptional;
  };
  protoOf(ParticipantRole).od = function () {
    return this.role;
  };
  protoOf(ParticipantRole).pd = function () {
    return this.isOptional;
  };
  protoOf(ParticipantRole).x1o = function (role, isOptional) {
    return new ParticipantRole(role, isOptional);
  };
  protoOf(ParticipantRole).copy = function (role, isOptional, $super) {
    role = role === VOID ? this.role : role;
    isOptional = isOptional === VOID ? this.isOptional : isOptional;
    return this.x1o(role, isOptional);
  };
  protoOf(ParticipantRole).toString = function () {
    return 'ParticipantRole(role=' + this.role + ', isOptional=' + this.isOptional + ')';
  };
  protoOf(ParticipantRole).hashCode = function () {
    var result = getStringHashCode(this.role);
    result = imul(result, 31) + getBooleanHashCode(this.isOptional) | 0;
    return result;
  };
  protoOf(ParticipantRole).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParticipantRole))
      return false;
    var tmp0_other_with_cast = other instanceof ParticipantRole ? other : THROW_CCE();
    if (!(this.role === tmp0_other_with_cast.role))
      return false;
    if (!(this.isOptional === tmp0_other_with_cast.isOptional))
      return false;
    return true;
  };
  function Companion_71() {
  }
  protoOf(Companion_71).m16 = function () {
    return UsernameSerializer_getInstance();
  };
  var Companion_instance_72;
  function Companion_getInstance_72() {
    return Companion_instance_72;
  }
  function Username(name) {
    this.name = name;
  }
  protoOf(Username).ra = function () {
    return this.name;
  };
  protoOf(Username).toString = function () {
    return this.name;
  };
  protoOf(Username).od = function () {
    return this.name;
  };
  protoOf(Username).e1f = function (name) {
    return new Username(name);
  };
  protoOf(Username).copy = function (name, $super) {
    name = name === VOID ? this.name : name;
    return this.e1f(name);
  };
  protoOf(Username).hashCode = function () {
    return getStringHashCode(this.name);
  };
  protoOf(Username).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Username))
      return false;
    var tmp0_other_with_cast = other instanceof Username ? other : THROW_CCE();
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    return true;
  };
  function UsernameSerializer$$$delegate_0$lambda(it) {
    return new Username(it);
  }
  function _no_name_provided__qut3iv_6($fromString) {
    StringConversionSerializer.call(this, get_NAMESPACE() + '.' + ensureNotNull(getKClass(Username).i6()), $fromString);
  }
  function UsernameSerializer() {
    UsernameSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = UsernameSerializer$$$delegate_0$lambda;
    tmp.l1y_1 = new _no_name_provided__qut3iv_6(fromString);
  }
  protoOf(UsernameSerializer).pi = function () {
    return this.l1y_1.pi();
  };
  protoOf(UsernameSerializer).ri = function (decoder) {
    return this.l1y_1.ri(decoder);
  };
  protoOf(UsernameSerializer).m1y = function (encoder, value) {
    this.l1y_1.qi(encoder, value);
  };
  protoOf(UsernameSerializer).qi = function (encoder, value) {
    return this.m1y(encoder, value instanceof Username ? value : THROW_CCE());
  };
  var UsernameSerializer_instance;
  function UsernameSerializer_getInstance() {
    if (UsernameSerializer_instance == null)
      new UsernameSerializer();
    return UsernameSerializer_instance;
  }
  function AggregateRoot(id, createdOn) {
    this.n1y_1 = id;
    this.o1y_1 = createdOn;
    this.p1y_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.q1y_1 = ArrayList_init_$Create$_0();
  }
  protoOf(AggregateRoot).r1y = function (snapshot) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.p1y_1 == null)) {
      // Inline function 'dk.cachet.carp.common.domain.AggregateRoot.wasLoadedFromSnapshot.<anonymous>' call
      var message = 'An aggregate root should only be loaded from a snapshot once.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.q1y_1.n() === 0)) {
      // Inline function 'dk.cachet.carp.common.domain.AggregateRoot.wasLoadedFromSnapshot.<anonymous>' call
      var message_0 = 'The snapshot an aggregate root was loaded from should be set before executing any operations on it.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    this.p1y_1 = snapshot.version;
  };
  protoOf(AggregateRoot).s1y = function (event) {
    return this.q1y_1.q(event);
  };
  protoOf(AggregateRoot).t1y = function (_this__u8e3s4, value, createEvent) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dk.cachet.carp.common.domain.AggregateRoot.eventIf.<anonymous>' call
    if (equals(_this__u8e3s4, value)) {
      this.s1y(createEvent());
    }
    return _this__u8e3s4;
  };
  protoOf(AggregateRoot).u1y = function () {
    var toProcess = toList(this.q1y_1);
    this.q1y_1.w1();
    return toProcess;
  };
  function ExtractUniqueKeyMap(keyOf, keyPresentError) {
    this.v1y_1 = keyOf;
    this.w1y_1 = keyPresentError;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x1y_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExtractUniqueKeyMap).y1y = function (element) {
    var key = this.v1y_1(element);
    var storedElement = this.x1y_1.x2(key);
    if (!(storedElement == null)) {
      if (element === storedElement) {
        return false;
      }
      throw this.w1y_1(key);
    }
    // Inline function 'kotlin.collections.set' call
    this.x1y_1.n2(key, element);
    return true;
  };
  protoOf(ExtractUniqueKeyMap).p2 = function () {
    return this.x1y_1.p2();
  };
  protoOf(ExtractUniqueKeyMap).l2 = function () {
    return this.x1y_1.l2();
  };
  protoOf(ExtractUniqueKeyMap).n = function () {
    return this.x1y_1.n();
  };
  protoOf(ExtractUniqueKeyMap).m2 = function () {
    return this.x1y_1.m2();
  };
  protoOf(ExtractUniqueKeyMap).u2 = function (key) {
    return this.x1y_1.u2(key);
  };
  protoOf(ExtractUniqueKeyMap).x2 = function (key) {
    return this.x1y_1.x2(key);
  };
  protoOf(ExtractUniqueKeyMap).y = function () {
    return this.x1y_1.y();
  };
  function Snapshot() {
  }
  function ReflectionAvailable() {
  }
  function reflectIfAvailable() {
    return Reflection_instance.c1z_1 ? new ReflectionAvailable() : null;
  }
  function ApplicationDataSerializer() {
    this.d1z_1 = get_nullable(serializer_1(StringCompanionObject_instance)).pi();
  }
  protoOf(ApplicationDataSerializer).pi = function () {
    return this.d1z_1;
  };
  protoOf(ApplicationDataSerializer).ri = function (decoder) {
    if (!decoder.il())
      return null;
    if (!isInterface(decoder, JsonDecoder))
      return decoder.nm(get_nullable(serializer_1(StringCompanionObject_instance)));
    var jsonElement = decoder.i16();
    var originalString = toString(jsonElement);
    var tmp;
    if (jsonElement instanceof JsonObject) {
      tmp = originalString;
    } else {
      // Inline function 'kotlin.text.substring' call
      var endIndex = originalString.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp = originalString.substring(1, endIndex);
    }
    return tmp;
  };
  protoOf(ApplicationDataSerializer).e1z = function (encoder, value) {
    if (value == null) {
      encoder.tm();
      return Unit_instance;
    }
    if (!isInterface(encoder, JsonEncoder)) {
      encoder.sn(get_nullable(serializer_1(StringCompanionObject_instance)), value);
      return Unit_instance;
    }
    var json = encoder.h16();
    var isJsonObject = startsWith(value, '{');
    if (isJsonObject) {
      try {
        var jsonElement = json.k14(value);
        encoder.p17(jsonElement);
      } catch ($p) {
        if ($p instanceof SerializationException) {
          var _ = $p;
          isJsonObject = false;
        } else {
          throw $p;
        }
      }
    }
    if (!isJsonObject) {
      encoder.cn(value);
    }
  };
  protoOf(ApplicationDataSerializer).qi = function (encoder, value) {
    return this.e1z(encoder, (value == null ? true : typeof value === 'string') ? value : THROW_CCE());
  };
  function StringConversionSerializer(serialName, fromString) {
    this.f1f_1 = fromString;
    this.g1f_1 = PrimitiveSerialDescriptor(serialName, STRING_getInstance());
  }
  protoOf(StringConversionSerializer).pi = function () {
    return this.g1f_1;
  };
  protoOf(StringConversionSerializer).qi = function (encoder, value) {
    return encoder.cn(toString_0(value));
  };
  protoOf(StringConversionSerializer).ri = function (decoder) {
    return this.f1f_1(decoder.sl());
  };
  function get_NAMESPACE() {
    return NAMESPACE;
  }
  var NAMESPACE;
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.f1z_1 = PrimitiveSerialDescriptor(get_NAMESPACE() + '.' + ensureNotNull(getKClass(Duration).i6()), STRING_getInstance());
  }
  protoOf(DurationSerializer).pi = function () {
    return this.f1z_1;
  };
  protoOf(DurationSerializer).eo = function (decoder) {
    return Companion_getInstance().zf(decoder.sl());
  };
  protoOf(DurationSerializer).ri = function (decoder) {
    return new Duration(this.eo(decoder));
  };
  protoOf(DurationSerializer).do = function (encoder, value) {
    return encoder.cn(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).qi = function (encoder, value) {
    return this.do(encoder, value instanceof Duration ? value.ag_1 : THROW_CCE());
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function NotSerializable() {
    NotSerializable_instance = this;
    this.g1z_1 = SerializationException_init_$Create$('Types annotated as `@Serializable( with = NotSerializable::class )` are never expected to be serialized. The serializer is only defined since the compiler does not know this, causing a compilation error.');
    this.h1z_1 = buildClassSerialDescriptor('This should never be serialized.', []);
  }
  protoOf(NotSerializable).pi = function () {
    return this.h1z_1;
  };
  protoOf(NotSerializable).ri = function (decoder) {
    throw this.g1z_1;
  };
  protoOf(NotSerializable).i1z = function (encoder, value) {
    throw this.g1z_1;
  };
  protoOf(NotSerializable).qi = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.i1z(encoder, tmp);
  };
  var NotSerializable_instance;
  function NotSerializable_getInstance() {
    if (NotSerializable_instance == null)
      new NotSerializable();
    return NotSerializable_instance;
  }
  function ignoreTypeParameters(createSerializer) {
    return new ignoreTypeParameters$1(createSerializer);
  }
  function ignoreTypeParameters$1($createSerializer) {
    var tmp = this;
    var tmp_0 = NotSerializable_getInstance();
    tmp.j1z_1 = $createSerializer(isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
    this.k1z_1 = this.j1z_1.pi();
  }
  protoOf(ignoreTypeParameters$1).pi = function () {
    return this.k1z_1;
  };
  protoOf(ignoreTypeParameters$1).qi = function (encoder, value) {
    return encoder.qn(this.j1z_1, value);
  };
  protoOf(ignoreTypeParameters$1).ri = function (decoder) {
    return decoder.wl(this.j1z_1);
  };
  function PolymorphicEnumSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.dj('value', this$0.l1z_1.pi());
      return Unit_instance;
    };
  }
  function PolymorphicEnumSerializer(enumSerializer) {
    this.l1z_1 = enumSerializer;
    var tmp = this;
    var tmp_0 = this.l1z_1.pi().qj();
    tmp.m1z_1 = buildClassSerialDescriptor(tmp_0, [], PolymorphicEnumSerializer$descriptor$lambda(this));
  }
  protoOf(PolymorphicEnumSerializer).pi = function () {
    return this.m1z_1;
  };
  protoOf(PolymorphicEnumSerializer).ri = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.m1z_1;
    var composite = decoder.xl(descriptor);
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.PolymorphicEnumSerializer.deserialize.<anonymous>' call
    composite.pm(this.m1z_1);
    var result = composite.km(this.m1z_1, 0, this.l1z_1);
    composite.yl(descriptor);
    return result;
  };
  protoOf(PolymorphicEnumSerializer).xs = function (encoder, value) {
    var descriptor = this.m1z_1;
    var composite = encoder.xl(descriptor);
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.PolymorphicEnumSerializer.serialize.<anonymous>' call
    composite.pn(this.m1z_1, 0, this.l1z_1, value);
    composite.yl(descriptor);
    return Unit_instance;
  };
  protoOf(PolymorphicEnumSerializer).qi = function (encoder, value) {
    return this.xs(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  function get_COMMON_SERIAL_MODULE() {
    _init_properties_Serialization_kt__ucz2pu();
    return COMMON_SERIAL_MODULE;
  }
  var COMMON_SERIAL_MODULE;
  function set_JSON(_set____db54di) {
    _init_properties_Serialization_kt__ucz2pu();
    JSON_0 = _set____db54di;
  }
  function get_JSON() {
    _init_properties_Serialization_kt__ucz2pu();
    return JSON_0;
  }
  var JSON_0;
  function createDefaultJSON(module_0) {
    module_0 = module_0 === VOID ? null : module_0;
    _init_properties_Serialization_kt__ucz2pu();
    var jsonSerializersModule = module_0 == null ? get_COMMON_SERIAL_MODULE() : plus_0(get_COMMON_SERIAL_MODULE(), module_0);
    return Json(VOID, createDefaultJSON$lambda(jsonSerializersModule));
  }
  function COMMON_SERIAL_MODULE$_anonymous_$registerPrimaryDeviceConfigurationSubclasses_kw10xt(_this__u8e3s4) {
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz = getKClass(CustomProtocolDevice);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(CustomProtocolDevice), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    _this__u8e3s4.k12(clazz, tmp$ret$1);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_0 = getKClass(Smartphone);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(createKType(getKClass(Smartphone), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    _this__u8e3s4.k12(clazz_0, tmp$ret$4);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_1 = getKClass(Website);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(createKType(getKClass(Website), arrayOf([]), false));
    var tmp$ret$7 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    _this__u8e3s4.k12(clazz_1, tmp$ret$7);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_2 = getKClass(CustomPrimaryDeviceConfiguration);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer(createKType(getKClass(CustomPrimaryDeviceConfiguration), arrayOf([]), false));
    var tmp$ret$10 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    _this__u8e3s4.k12(clazz_2, tmp$ret$10);
  }
  function COMMON_SERIAL_MODULE$lambda(it) {
    _init_properties_Serialization_kt__ucz2pu();
    return DataSerializer_getInstance();
  }
  function COMMON_SERIAL_MODULE$lambda_0(it) {
    _init_properties_Serialization_kt__ucz2pu();
    return DeviceConfigurationSerializer_getInstance();
  }
  function COMMON_SERIAL_MODULE$lambda_1(it) {
    _init_properties_Serialization_kt__ucz2pu();
    return PrimaryDeviceConfigurationSerializer_getInstance();
  }
  function COMMON_SERIAL_MODULE$lambda_2(it) {
    _init_properties_Serialization_kt__ucz2pu();
    return DeviceRegistrationSerializer_getInstance();
  }
  function COMMON_SERIAL_MODULE$lambda_3(it) {
    _init_properties_Serialization_kt__ucz2pu();
    return SamplingConfigurationSerializer_getInstance();
  }
  function COMMON_SERIAL_MODULE$lambda_4(it) {
    _init_properties_Serialization_kt__ucz2pu();
    return TaskConfigurationSerializer_getInstance();
  }
  function COMMON_SERIAL_MODULE$lambda_5(it) {
    _init_properties_Serialization_kt__ucz2pu();
    return TriggerConfigurationSerializer_getInstance();
  }
  function createDefaultJSON$lambda($jsonSerializersModule) {
    return function ($this$Json) {
      $this$Json.j15_1 = '__type';
      $this$Json.q15_1 = $jsonSerializersModule;
      return Unit_instance;
    };
  }
  var properties_initialized_Serialization_kt_xannds;
  function _init_properties_Serialization_kt__ucz2pu() {
    if (!properties_initialized_Serialization_kt_xannds) {
      properties_initialized_Serialization_kt_xannds = true;
      // Inline function 'kotlinx.serialization.modules.SerializersModule' call
      var builder = new SerializersModuleBuilder();
      // Inline function 'dk.cachet.carp.common.infrastructure.serialization.COMMON_SERIAL_MODULE.<anonymous>' call
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass = getKClass(Data);
      var builder_0 = new PolymorphicModuleBuilder(baseClass, null);
      // Inline function 'dk.cachet.carp.common.infrastructure.serialization.COMMON_SERIAL_MODULE.<anonymous>.<anonymous>' call
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz = getKClass(Acceleration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_0 = serializer(createKType(getKClass(Acceleration), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
      builder_0.k12(clazz, tmp$ret$1);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_0 = getKClass(AngularVelocity);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(createKType(getKClass(AngularVelocity), arrayOf([]), false));
      var tmp$ret$4 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      builder_0.k12(clazz_0, tmp$ret$4);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_1 = getKClass(CompletedTask);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(createKType(getKClass(CompletedTask), arrayOf([]), false));
      var tmp$ret$7 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      builder_0.k12(clazz_1, tmp$ret$7);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_2 = getKClass(ECG);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_3 = serializer(createKType(getKClass(ECG), arrayOf([]), false));
      var tmp$ret$10 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
      builder_0.k12(clazz_2, tmp$ret$10);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_3 = getKClass(EDA);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_4 = serializer(createKType(getKClass(EDA), arrayOf([]), false));
      var tmp$ret$13 = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
      builder_0.k12(clazz_3, tmp$ret$13);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_4 = getKClass(Geolocation);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_5 = serializer(createKType(getKClass(Geolocation), arrayOf([]), false));
      var tmp$ret$16 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
      builder_0.k12(clazz_4, tmp$ret$16);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_5 = getKClass(HeartRate);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_6 = serializer(createKType(getKClass(HeartRate), arrayOf([]), false));
      var tmp$ret$19 = isInterface(this_6, KSerializer) ? this_6 : THROW_CCE();
      builder_0.k12(clazz_5, tmp$ret$19);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_6 = getKClass(InterbeatInterval);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_7 = serializer(createKType(getKClass(InterbeatInterval), arrayOf([]), false));
      var tmp$ret$22 = isInterface(this_7, KSerializer) ? this_7 : THROW_CCE();
      builder_0.k12(clazz_6, tmp$ret$22);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_7 = getKClass(NonGravitationalAcceleration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_8 = serializer(createKType(getKClass(NonGravitationalAcceleration), arrayOf([]), false));
      var tmp$ret$25 = isInterface(this_8, KSerializer) ? this_8 : THROW_CCE();
      builder_0.k12(clazz_7, tmp$ret$25);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_8 = getKClass(NoData);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_9 = serializer(createKType(getKClass(NoData), arrayOf([]), false));
      var tmp$ret$28 = isInterface(this_9, KSerializer) ? this_9 : THROW_CCE();
      builder_0.k12(clazz_8, tmp$ret$28);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_9 = getKClass(PPG);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_10 = serializer(createKType(getKClass(PPG), arrayOf([]), false));
      var tmp$ret$31 = isInterface(this_10, KSerializer) ? this_10 : THROW_CCE();
      builder_0.k12(clazz_9, tmp$ret$31);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_10 = getKClass(SignalStrength);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_11 = serializer(createKType(getKClass(SignalStrength), arrayOf([]), false));
      var tmp$ret$34 = isInterface(this_11, KSerializer) ? this_11 : THROW_CCE();
      builder_0.k12(clazz_10, tmp$ret$34);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_11 = getKClass(SensorSkinContact);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_12 = serializer(createKType(getKClass(SensorSkinContact), arrayOf([]), false));
      var tmp$ret$37 = isInterface(this_12, KSerializer) ? this_12 : THROW_CCE();
      builder_0.k12(clazz_11, tmp$ret$37);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_12 = getKClass(StepCount);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_13 = serializer(createKType(getKClass(StepCount), arrayOf([]), false));
      var tmp$ret$40 = isInterface(this_13, KSerializer) ? this_13 : THROW_CCE();
      builder_0.k12(clazz_12, tmp$ret$40);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_13 = getKClass(TriggeredTask);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_14 = serializer(createKType(getKClass(TriggeredTask), arrayOf([]), false));
      var tmp$ret$43 = isInterface(this_14, KSerializer) ? this_14 : THROW_CCE();
      builder_0.k12(clazz_13, tmp$ret$43);
      builder_0.k12(getKClass(CustomInput), new CustomInputSerializer([PrimitiveClasses_getInstance().j7(), PrimitiveClasses_getInstance().f7()]));
      builder_0.k12(getKClass(Sex), new PolymorphicEnumSerializer(Companion_getInstance_24().m16()));
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_14 = getKClass(CustomData);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_15 = serializer(createKType(getKClass(CustomData), arrayOf([]), false));
      var tmp$ret$46 = isInterface(this_15, KSerializer) ? this_15 : THROW_CCE();
      builder_0.k12(clazz_14, tmp$ret$46);
      builder_0.l12(COMMON_SERIAL_MODULE$lambda);
      builder_0.m12(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_0 = getKClass(InputElement);
      var builder_1 = new PolymorphicModuleBuilder(baseClass_0, null);
      // Inline function 'dk.cachet.carp.common.infrastructure.serialization.COMMON_SERIAL_MODULE.<anonymous>.<anonymous>' call
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_15 = getKClass(SelectOne);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_16 = serializer(createKType(getKClass(SelectOne), arrayOf([]), false));
      var tmp$ret$49 = isInterface(this_16, KSerializer) ? this_16 : THROW_CCE();
      builder_1.k12(clazz_15, tmp$ret$49);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_16 = getKClass(Text);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_17 = serializer(createKType(getKClass(Text), arrayOf([]), false));
      var tmp$ret$52 = isInterface(this_17, KSerializer) ? this_17 : THROW_CCE();
      builder_1.k12(clazz_16, tmp$ret$52);
      builder_1.m12(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_1 = getKClass(DeviceConfiguration);
      var builder_2 = new PolymorphicModuleBuilder(baseClass_1, null);
      // Inline function 'dk.cachet.carp.common.infrastructure.serialization.COMMON_SERIAL_MODULE.<anonymous>.<anonymous>' call
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_17 = getKClass(AltBeacon);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_18 = serializer(createKType(getKClass(AltBeacon), arrayOf([]), false));
      var tmp$ret$55 = isInterface(this_18, KSerializer) ? this_18 : THROW_CCE();
      builder_2.k12(clazz_17, tmp$ret$55);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_18 = getKClass(BLEHeartRateDevice);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_19 = serializer(createKType(getKClass(BLEHeartRateDevice), arrayOf([]), false));
      var tmp$ret$58 = isInterface(this_19, KSerializer) ? this_19 : THROW_CCE();
      builder_2.k12(clazz_18, tmp$ret$58);
      COMMON_SERIAL_MODULE$_anonymous_$registerPrimaryDeviceConfigurationSubclasses_kw10xt(builder_2);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_19 = getKClass(CustomDeviceConfiguration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_20 = serializer(createKType(getKClass(CustomDeviceConfiguration), arrayOf([]), false));
      var tmp$ret$61 = isInterface(this_20, KSerializer) ? this_20 : THROW_CCE();
      builder_2.k12(clazz_19, tmp$ret$61);
      builder_2.l12(COMMON_SERIAL_MODULE$lambda_0);
      builder_2.m12(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_2 = getKClass(PrimaryDeviceConfiguration);
      var builder_3 = new PolymorphicModuleBuilder(baseClass_2, null);
      // Inline function 'dk.cachet.carp.common.infrastructure.serialization.COMMON_SERIAL_MODULE.<anonymous>.<anonymous>' call
      COMMON_SERIAL_MODULE$_anonymous_$registerPrimaryDeviceConfigurationSubclasses_kw10xt(builder_3);
      builder_3.l12(COMMON_SERIAL_MODULE$lambda_1);
      builder_3.m12(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_3 = getKClass(DeviceRegistration);
      var builder_4 = new PolymorphicModuleBuilder(baseClass_3, null);
      // Inline function 'dk.cachet.carp.common.infrastructure.serialization.COMMON_SERIAL_MODULE.<anonymous>.<anonymous>' call
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_20 = getKClass(AltBeaconDeviceRegistration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_21 = serializer(createKType(getKClass(AltBeaconDeviceRegistration), arrayOf([]), false));
      var tmp$ret$64 = isInterface(this_21, KSerializer) ? this_21 : THROW_CCE();
      builder_4.k12(clazz_20, tmp$ret$64);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_21 = getKClass(BLESerialNumberDeviceRegistration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_22 = serializer(createKType(getKClass(BLESerialNumberDeviceRegistration), arrayOf([]), false));
      var tmp$ret$67 = isInterface(this_22, KSerializer) ? this_22 : THROW_CCE();
      builder_4.k12(clazz_21, tmp$ret$67);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_22 = getKClass(DefaultDeviceRegistration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_23 = serializer(createKType(getKClass(DefaultDeviceRegistration), arrayOf([]), false));
      var tmp$ret$70 = isInterface(this_23, KSerializer) ? this_23 : THROW_CCE();
      builder_4.k12(clazz_22, tmp$ret$70);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_23 = getKClass(MACAddressDeviceRegistration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_24 = serializer(createKType(getKClass(MACAddressDeviceRegistration), arrayOf([]), false));
      var tmp$ret$73 = isInterface(this_24, KSerializer) ? this_24 : THROW_CCE();
      builder_4.k12(clazz_23, tmp$ret$73);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_24 = getKClass(WebsiteDeviceRegistration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_25 = serializer(createKType(getKClass(WebsiteDeviceRegistration), arrayOf([]), false));
      var tmp$ret$76 = isInterface(this_25, KSerializer) ? this_25 : THROW_CCE();
      builder_4.k12(clazz_24, tmp$ret$76);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_25 = getKClass(CustomDeviceRegistration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_26 = serializer(createKType(getKClass(CustomDeviceRegistration), arrayOf([]), false));
      var tmp$ret$79 = isInterface(this_26, KSerializer) ? this_26 : THROW_CCE();
      builder_4.k12(clazz_25, tmp$ret$79);
      builder_4.l12(COMMON_SERIAL_MODULE$lambda_2);
      builder_4.m12(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_4 = getKClass(SamplingConfiguration);
      var builder_5 = new PolymorphicModuleBuilder(baseClass_4, null);
      // Inline function 'dk.cachet.carp.common.infrastructure.serialization.COMMON_SERIAL_MODULE.<anonymous>.<anonymous>' call
      var tmp = getKClass(BatteryAwareSamplingConfiguration);
      var tmp_0 = Companion_getInstance_46().d1r(new PolymorphicSerializer(getKClass(SamplingConfiguration)));
      builder_5.k12(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_26 = getKClass(GranularitySamplingConfiguration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_27 = serializer(createKType(getKClass(GranularitySamplingConfiguration), arrayOf([]), false));
      var tmp$ret$82 = isInterface(this_27, KSerializer) ? this_27 : THROW_CCE();
      builder_5.k12(clazz_26, tmp$ret$82);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_27 = getKClass(IntervalSamplingConfiguration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_28 = serializer(createKType(getKClass(IntervalSamplingConfiguration), arrayOf([]), false));
      var tmp$ret$85 = isInterface(this_28, KSerializer) ? this_28 : THROW_CCE();
      builder_5.k12(clazz_27, tmp$ret$85);
      builder_5.k12(getKClass(NoOptionsSamplingConfiguration), NoOptionsSamplingConfiguration_getInstance().m16());
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_28 = getKClass(CustomSamplingConfiguration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_29 = serializer(createKType(getKClass(CustomSamplingConfiguration), arrayOf([]), false));
      var tmp$ret$88 = isInterface(this_29, KSerializer) ? this_29 : THROW_CCE();
      builder_5.k12(clazz_28, tmp$ret$88);
      builder_5.l12(COMMON_SERIAL_MODULE$lambda_3);
      builder_5.m12(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_5 = getKClass(TaskConfiguration);
      var builder_6 = new PolymorphicModuleBuilder(baseClass_5, null);
      // Inline function 'dk.cachet.carp.common.infrastructure.serialization.COMMON_SERIAL_MODULE.<anonymous>.<anonymous>' call
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_29 = getKClass(BackgroundTask);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_30 = serializer(createKType(getKClass(BackgroundTask), arrayOf([]), false));
      var tmp$ret$91 = isInterface(this_30, KSerializer) ? this_30 : THROW_CCE();
      builder_6.k12(clazz_29, tmp$ret$91);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_30 = getKClass(CustomProtocolTask);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_31 = serializer(createKType(getKClass(CustomProtocolTask), arrayOf([]), false));
      var tmp$ret$94 = isInterface(this_31, KSerializer) ? this_31 : THROW_CCE();
      builder_6.k12(clazz_30, tmp$ret$94);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_31 = getKClass(WebTask);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_32 = serializer(createKType(getKClass(WebTask), arrayOf([]), false));
      var tmp$ret$97 = isInterface(this_32, KSerializer) ? this_32 : THROW_CCE();
      builder_6.k12(clazz_31, tmp$ret$97);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_32 = getKClass(CustomTaskConfiguration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_33 = serializer(createKType(getKClass(CustomTaskConfiguration), arrayOf([]), false));
      var tmp$ret$100 = isInterface(this_33, KSerializer) ? this_33 : THROW_CCE();
      builder_6.k12(clazz_32, tmp$ret$100);
      builder_6.l12(COMMON_SERIAL_MODULE$lambda_4);
      builder_6.m12(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_6 = getKClass(TriggerConfiguration);
      var builder_7 = new PolymorphicModuleBuilder(baseClass_6, null);
      // Inline function 'dk.cachet.carp.common.infrastructure.serialization.COMMON_SERIAL_MODULE.<anonymous>.<anonymous>' call
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_33 = getKClass(ElapsedTimeTrigger);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_34 = serializer(createKType(getKClass(ElapsedTimeTrigger), arrayOf([]), false));
      var tmp$ret$103 = isInterface(this_34, KSerializer) ? this_34 : THROW_CCE();
      builder_7.k12(clazz_33, tmp$ret$103);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_34 = getKClass(ManualTrigger);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_35 = serializer(createKType(getKClass(ManualTrigger), arrayOf([]), false));
      var tmp$ret$106 = isInterface(this_35, KSerializer) ? this_35 : THROW_CCE();
      builder_7.k12(clazz_34, tmp$ret$106);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_35 = getKClass(ScheduledTrigger);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_36 = serializer(createKType(getKClass(ScheduledTrigger), arrayOf([]), false));
      var tmp$ret$109 = isInterface(this_36, KSerializer) ? this_36 : THROW_CCE();
      builder_7.k12(clazz_35, tmp$ret$109);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_36 = getKClass(CustomTriggerConfiguration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_37 = serializer(createKType(getKClass(CustomTriggerConfiguration), arrayOf([]), false));
      var tmp$ret$112 = isInterface(this_37, KSerializer) ? this_37 : THROW_CCE();
      builder_7.k12(clazz_36, tmp$ret$112);
      builder_7.l12(COMMON_SERIAL_MODULE$lambda_5);
      builder_7.m12(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_7 = getKClass(AccountIdentity);
      var builder_8 = new PolymorphicModuleBuilder(baseClass_7, null);
      // Inline function 'dk.cachet.carp.common.infrastructure.serialization.COMMON_SERIAL_MODULE.<anonymous>.<anonymous>' call
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_37 = getKClass(UsernameAccountIdentity);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_38 = serializer(createKType(getKClass(UsernameAccountIdentity), arrayOf([]), false));
      var tmp$ret$115 = isInterface(this_38, KSerializer) ? this_38 : THROW_CCE();
      builder_8.k12(clazz_37, tmp$ret$115);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_38 = getKClass(EmailAccountIdentity);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_39 = serializer(createKType(getKClass(EmailAccountIdentity), arrayOf([]), false));
      var tmp$ret$118 = isInterface(this_39, KSerializer) ? this_39 : THROW_CCE();
      builder_8.k12(clazz_38, tmp$ret$118);
      builder_8.m12(builder);
      COMMON_SERIAL_MODULE = builder.pr();
      JSON_0 = createDefaultJSON();
    }
  }
  function Companion_72() {
  }
  var Companion_instance_73;
  function Companion_getInstance_73() {
    return Companion_instance_73;
  }
  function CustomData(className, jsonSource, serializer) {
    this.n1z_1 = className;
    this.o1z_1 = jsonSource;
    this.p1z_1 = serializer;
  }
  protoOf(CustomData).q1z = function () {
    return this.o1z_1;
  };
  protoOf(CustomData).toString = function () {
    return 'CustomData(className=' + this.n1z_1 + ', jsonSource=' + this.o1z_1 + ', serializer=' + this.p1z_1 + ')';
  };
  protoOf(CustomData).hashCode = function () {
    var result = getStringHashCode(this.n1z_1);
    result = imul(result, 31) + getStringHashCode(this.o1z_1) | 0;
    result = imul(result, 31) + hashCode(this.p1z_1) | 0;
    return result;
  };
  protoOf(CustomData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomData))
      return false;
    var tmp0_other_with_cast = other instanceof CustomData ? other : THROW_CCE();
    if (!(this.n1z_1 === tmp0_other_with_cast.n1z_1))
      return false;
    if (!(this.o1z_1 === tmp0_other_with_cast.o1z_1))
      return false;
    if (!equals(this.p1z_1, tmp0_other_with_cast.p1z_1))
      return false;
    return true;
  };
  function _no_name_provided__qut3iv_7() {
    UnknownPolymorphicSerializer.call(this, getKClass(Data), getKClass(CustomData));
  }
  protoOf(_no_name_provided__qut3iv_7).s1z = function (className, json, serializer) {
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.DataSerializer.$$delegate_0.<anonymous>' call
    return new CustomData(className, json, serializer);
  };
  function DataSerializer() {
    DataSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createUnknownPolymorphicSerializer' call
    tmp.v1z_1 = new _no_name_provided__qut3iv_7();
  }
  protoOf(DataSerializer).pi = function () {
    return this.v1z_1.pi();
  };
  protoOf(DataSerializer).ri = function (decoder) {
    return this.v1z_1.ri(decoder);
  };
  protoOf(DataSerializer).w1z = function (encoder, value) {
    this.v1z_1.u1z(encoder, value);
  };
  protoOf(DataSerializer).qi = function (encoder, value) {
    return this.w1z(encoder, (!(value == null) ? isInterface(value, Data) : false) ? value : THROW_CCE());
  };
  var DataSerializer_instance;
  function DataSerializer_getInstance() {
    if (DataSerializer_instance == null)
      new DataSerializer();
    return DataSerializer_instance;
  }
  function Companion_73() {
  }
  var Companion_instance_74;
  function Companion_getInstance_74() {
    return Companion_instance_74;
  }
  function CustomPrimaryDeviceConfiguration$lambda($this$Json) {
    $this$Json.c15_1 = true;
    return Unit_instance;
  }
  function CustomPrimaryDeviceConfiguration(className, jsonSource, serializer) {
    PrimaryDeviceConfiguration.call(this);
    this.y1z_1 = className;
    this.z1z_1 = jsonSource;
    this.a20_1 = serializer;
    var json = Json(this.a20_1, CustomPrimaryDeviceConfiguration$lambda);
    var baseMembers = json.j14(Companion_getInstance_78().m16(), this.z1z_1);
    this.b20_1 = baseMembers.f20_1;
    this.c20_1 = baseMembers.g20_1;
    this.d20_1 = baseMembers.h20_1;
  }
  protoOf(CustomPrimaryDeviceConfiguration).q1z = function () {
    return this.z1z_1;
  };
  protoOf(CustomPrimaryDeviceConfiguration).u1o = function () {
    return this.b20_1;
  };
  protoOf(CustomPrimaryDeviceConfiguration).v1o = function () {
    return this.c20_1;
  };
  protoOf(CustomPrimaryDeviceConfiguration).w1o = function () {
    return this.d20_1;
  };
  protoOf(CustomPrimaryDeviceConfiguration).getSupportedDataTypes = function () {
    return emptySet();
  };
  protoOf(CustomPrimaryDeviceConfiguration).getDataTypeSamplingSchemes = function () {
    throw UnsupportedOperationException_init_$Create$('The concrete type of this device is not known. Therefore, sampling schemes are unknown.');
  };
  protoOf(CustomPrimaryDeviceConfiguration).createDeviceRegistrationBuilder = function () {
    throw UnsupportedOperationException_init_$Create$('The concrete type of this device is not known. Therefore, it is unknown which registration builder is required.');
  };
  protoOf(CustomPrimaryDeviceConfiguration).getRegistrationClass = function () {
    return getKClass(DeviceRegistration);
  };
  protoOf(CustomPrimaryDeviceConfiguration).isValidRegistration = function (registration) {
    return Trilean_UNKNOWN_getInstance();
  };
  protoOf(CustomPrimaryDeviceConfiguration).toString = function () {
    return 'CustomPrimaryDeviceConfiguration(className=' + this.y1z_1 + ', jsonSource=' + this.z1z_1 + ', serializer=' + this.a20_1 + ')';
  };
  protoOf(CustomPrimaryDeviceConfiguration).hashCode = function () {
    var result = getStringHashCode(this.y1z_1);
    result = imul(result, 31) + getStringHashCode(this.z1z_1) | 0;
    result = imul(result, 31) + hashCode(this.a20_1) | 0;
    return result;
  };
  protoOf(CustomPrimaryDeviceConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomPrimaryDeviceConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof CustomPrimaryDeviceConfiguration ? other : THROW_CCE();
    if (!(this.y1z_1 === tmp0_other_with_cast.y1z_1))
      return false;
    if (!(this.z1z_1 === tmp0_other_with_cast.z1z_1))
      return false;
    if (!equals(this.a20_1, tmp0_other_with_cast.a20_1))
      return false;
    return true;
  };
  function Companion_74() {
  }
  var Companion_instance_75;
  function Companion_getInstance_75() {
    return Companion_instance_75;
  }
  function CustomDeviceConfiguration$lambda($this$Json) {
    $this$Json.c15_1 = true;
    return Unit_instance;
  }
  function CustomDeviceConfiguration(className, jsonSource, serializer) {
    DeviceConfiguration.call(this);
    this.i20_1 = className;
    this.j20_1 = jsonSource;
    this.k20_1 = serializer;
    var json = Json(this.k20_1, CustomDeviceConfiguration$lambda);
    var baseMembers = json.j14(Companion_getInstance_78().m16(), this.j20_1);
    this.l20_1 = baseMembers.f20_1;
    this.m20_1 = baseMembers.g20_1;
    this.n20_1 = baseMembers.h20_1;
  }
  protoOf(CustomDeviceConfiguration).q1z = function () {
    return this.j20_1;
  };
  protoOf(CustomDeviceConfiguration).u1o = function () {
    return this.l20_1;
  };
  protoOf(CustomDeviceConfiguration).v1o = function () {
    return this.m20_1;
  };
  protoOf(CustomDeviceConfiguration).w1o = function () {
    return this.n20_1;
  };
  protoOf(CustomDeviceConfiguration).getSupportedDataTypes = function () {
    return emptySet();
  };
  protoOf(CustomDeviceConfiguration).getDataTypeSamplingSchemes = function () {
    throw UnsupportedOperationException_init_$Create$('The concrete type of this device is not known. Therefore, sampling schemes are unknown.');
  };
  protoOf(CustomDeviceConfiguration).createDeviceRegistrationBuilder = function () {
    throw UnsupportedOperationException_init_$Create$('The concrete type of this device is not known. Therefore, it is unknown which registration builder is required.');
  };
  protoOf(CustomDeviceConfiguration).getRegistrationClass = function () {
    return getKClass(DeviceRegistration);
  };
  protoOf(CustomDeviceConfiguration).isValidRegistration = function (registration) {
    return Trilean_UNKNOWN_getInstance();
  };
  protoOf(CustomDeviceConfiguration).toString = function () {
    return 'CustomDeviceConfiguration(className=' + this.i20_1 + ', jsonSource=' + this.j20_1 + ', serializer=' + this.k20_1 + ')';
  };
  protoOf(CustomDeviceConfiguration).hashCode = function () {
    var result = getStringHashCode(this.i20_1);
    result = imul(result, 31) + getStringHashCode(this.j20_1) | 0;
    result = imul(result, 31) + hashCode(this.k20_1) | 0;
    return result;
  };
  protoOf(CustomDeviceConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomDeviceConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof CustomDeviceConfiguration ? other : THROW_CCE();
    if (!(this.i20_1 === tmp0_other_with_cast.i20_1))
      return false;
    if (!(this.j20_1 === tmp0_other_with_cast.j20_1))
      return false;
    if (!equals(this.k20_1, tmp0_other_with_cast.k20_1))
      return false;
    return true;
  };
  function DeviceConfigurationSerializer() {
    DeviceConfigurationSerializer_instance = this;
    UnknownPolymorphicSerializer.call(this, getKClass(DeviceConfiguration), getKClass(DeviceConfiguration), false);
  }
  protoOf(DeviceConfigurationSerializer).s1z = function (className, json, serializer) {
    var tmp = serializer.k14(json);
    var jsonObject = tmp instanceof JsonObject ? tmp : THROW_CCE();
    var isPrimaryDevice = jsonObject.k16('isPrimaryDevice');
    var tmp_0;
    if (isPrimaryDevice) {
      tmp_0 = new CustomPrimaryDeviceConfiguration(className, json, serializer);
    } else {
      tmp_0 = new CustomDeviceConfiguration(className, json, serializer);
    }
    return tmp_0;
  };
  var DeviceConfigurationSerializer_instance;
  function DeviceConfigurationSerializer_getInstance() {
    if (DeviceConfigurationSerializer_instance == null)
      new DeviceConfigurationSerializer();
    return DeviceConfigurationSerializer_instance;
  }
  function _no_name_provided__qut3iv_8() {
    UnknownPolymorphicSerializer.call(this, getKClass(PrimaryDeviceConfiguration), getKClass(CustomPrimaryDeviceConfiguration));
  }
  protoOf(_no_name_provided__qut3iv_8).s1z = function (className, json, serializer) {
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.PrimaryDeviceConfigurationSerializer.$$delegate_0.<anonymous>' call
    return new CustomPrimaryDeviceConfiguration(className, json, serializer);
  };
  function PrimaryDeviceConfigurationSerializer() {
    PrimaryDeviceConfigurationSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createUnknownPolymorphicSerializer' call
    tmp.q20_1 = new _no_name_provided__qut3iv_8();
  }
  protoOf(PrimaryDeviceConfigurationSerializer).pi = function () {
    return this.q20_1.pi();
  };
  protoOf(PrimaryDeviceConfigurationSerializer).ri = function (decoder) {
    return this.q20_1.ri(decoder);
  };
  protoOf(PrimaryDeviceConfigurationSerializer).r20 = function (encoder, value) {
    this.q20_1.u1z(encoder, value);
  };
  protoOf(PrimaryDeviceConfigurationSerializer).qi = function (encoder, value) {
    return this.r20(encoder, value instanceof PrimaryDeviceConfiguration ? value : THROW_CCE());
  };
  var PrimaryDeviceConfigurationSerializer_instance;
  function PrimaryDeviceConfigurationSerializer_getInstance() {
    if (PrimaryDeviceConfigurationSerializer_instance == null)
      new PrimaryDeviceConfigurationSerializer();
    return PrimaryDeviceConfigurationSerializer_instance;
  }
  function Companion_75() {
  }
  protoOf(Companion_75).m16 = function () {
    return $serializer_getInstance_44();
  };
  var Companion_instance_76;
  function Companion_getInstance_76() {
    return Companion_instance_76;
  }
  function $serializer_46() {
    $serializer_instance_44 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.infrastructure.serialization.CustomDeviceRegistration.BaseMembers', this, 3);
    tmp0_serialDesc.nt('registrationCreatedOn', false);
    tmp0_serialDesc.nt('deviceId', false);
    tmp0_serialDesc.nt('deviceDisplayName', false);
    this.s20_1 = tmp0_serialDesc;
  }
  protoOf($serializer_46).pi = function () {
    return this.s20_1;
  };
  protoOf($serializer_46).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantIso8601Serializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_46).ri = function (decoder) {
    var tmp0_desc = this.s20_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.hm(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.hm(tmp0_desc, 1);
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
    return BaseMembers_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_46).t20 = function (encoder, value) {
    var tmp0_desc = this.s20_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), value.registrationCreatedOn);
    tmp1_output.nn(tmp0_desc, 1, value.u20_1);
    tmp1_output.rn(tmp0_desc, 2, StringSerializer_getInstance(), value.v20_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_46).qi = function (encoder, value) {
    return this.t20(encoder, value instanceof BaseMembers ? value : THROW_CCE());
  };
  var $serializer_instance_44;
  function $serializer_getInstance_44() {
    if ($serializer_instance_44 == null)
      new $serializer_46();
    return $serializer_instance_44;
  }
  function BaseMembers_init_$Init$(seen1, registrationCreatedOn, deviceId, deviceDisplayName, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_44().s20_1);
    }
    DeviceRegistration_init_$Init$(seen1, registrationCreatedOn, serializationConstructorMarker, $this);
    $this.u20_1 = deviceId;
    $this.v20_1 = deviceDisplayName;
    return $this;
  }
  function BaseMembers_init_$Create$(seen1, registrationCreatedOn, deviceId, deviceDisplayName, serializationConstructorMarker) {
    return BaseMembers_init_$Init$(seen1, registrationCreatedOn, deviceId, deviceDisplayName, serializationConstructorMarker, objectCreate(protoOf(BaseMembers)));
  }
  function BaseMembers() {
  }
  protoOf(BaseMembers).k1p = function () {
    return this.u20_1;
  };
  protoOf(BaseMembers).j1p = function () {
    return this.v20_1;
  };
  protoOf(BaseMembers).toString = function () {
    return 'BaseMembers(deviceId=' + this.u20_1 + ', deviceDisplayName=' + this.v20_1 + ')';
  };
  protoOf(BaseMembers).hashCode = function () {
    var result = getStringHashCode(this.u20_1);
    result = imul(result, 31) + (this.v20_1 == null ? 0 : getStringHashCode(this.v20_1)) | 0;
    return result;
  };
  protoOf(BaseMembers).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BaseMembers))
      return false;
    var tmp0_other_with_cast = other instanceof BaseMembers ? other : THROW_CCE();
    if (!(this.u20_1 === tmp0_other_with_cast.u20_1))
      return false;
    if (!(this.v20_1 == tmp0_other_with_cast.v20_1))
      return false;
    return true;
  };
  function Companion_76() {
  }
  var Companion_instance_77;
  function Companion_getInstance_77() {
    return Companion_instance_77;
  }
  function CustomDeviceRegistration$lambda($this$Json) {
    $this$Json.c15_1 = true;
    return Unit_instance;
  }
  function CustomDeviceRegistration(className, jsonSource, serializer) {
    DeviceRegistration.call(this);
    this.w20_1 = className;
    this.x20_1 = jsonSource;
    this.y20_1 = serializer;
    var json = Json(this.y20_1, CustomDeviceRegistration$lambda);
    var baseMembers = json.j14(Companion_instance_76.m16(), this.x20_1);
    this.z20_1 = baseMembers.u20_1;
    this.a21_1 = baseMembers.v20_1;
  }
  protoOf(CustomDeviceRegistration).q1z = function () {
    return this.x20_1;
  };
  protoOf(CustomDeviceRegistration).k1p = function () {
    return this.z20_1;
  };
  protoOf(CustomDeviceRegistration).j1p = function () {
    return this.a21_1;
  };
  protoOf(CustomDeviceRegistration).toString = function () {
    return 'CustomDeviceRegistration(className=' + this.w20_1 + ', jsonSource=' + this.x20_1 + ', serializer=' + this.y20_1 + ')';
  };
  protoOf(CustomDeviceRegistration).hashCode = function () {
    var result = getStringHashCode(this.w20_1);
    result = imul(result, 31) + getStringHashCode(this.x20_1) | 0;
    result = imul(result, 31) + hashCode(this.y20_1) | 0;
    return result;
  };
  protoOf(CustomDeviceRegistration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomDeviceRegistration))
      return false;
    var tmp0_other_with_cast = other instanceof CustomDeviceRegistration ? other : THROW_CCE();
    if (!(this.w20_1 === tmp0_other_with_cast.w20_1))
      return false;
    if (!(this.x20_1 === tmp0_other_with_cast.x20_1))
      return false;
    if (!equals(this.y20_1, tmp0_other_with_cast.y20_1))
      return false;
    return true;
  };
  function _no_name_provided__qut3iv_9() {
    UnknownPolymorphicSerializer.call(this, getKClass(DeviceRegistration), getKClass(CustomDeviceRegistration));
  }
  protoOf(_no_name_provided__qut3iv_9).s1z = function (className, json, serializer) {
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.DeviceRegistrationSerializer.$$delegate_0.<anonymous>' call
    return new CustomDeviceRegistration(className, json, serializer);
  };
  function DeviceRegistrationSerializer() {
    DeviceRegistrationSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createUnknownPolymorphicSerializer' call
    tmp.c21_1 = new _no_name_provided__qut3iv_9();
  }
  protoOf(DeviceRegistrationSerializer).pi = function () {
    return this.c21_1.pi();
  };
  protoOf(DeviceRegistrationSerializer).ri = function (decoder) {
    return this.c21_1.ri(decoder);
  };
  protoOf(DeviceRegistrationSerializer).d21 = function (encoder, value) {
    this.c21_1.u1z(encoder, value);
  };
  protoOf(DeviceRegistrationSerializer).qi = function (encoder, value) {
    return this.d21(encoder, value instanceof DeviceRegistration ? value : THROW_CCE());
  };
  var DeviceRegistrationSerializer_instance;
  function DeviceRegistrationSerializer_getInstance() {
    if (DeviceRegistrationSerializer_instance == null)
      new DeviceRegistrationSerializer();
    return DeviceRegistrationSerializer_instance;
  }
  function Companion_77() {
    Companion_instance_78 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = NamespacedIdSerializer_getInstance();
    var tmp_1 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e20_1 = [null, null, new LinkedHashMapSerializer(tmp_0, PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$2))];
  }
  protoOf(Companion_77).m16 = function () {
    return $serializer_getInstance_45();
  };
  var Companion_instance_78;
  function Companion_getInstance_78() {
    if (Companion_instance_78 == null)
      new Companion_77();
    return Companion_instance_78;
  }
  function $serializer_47() {
    $serializer_instance_45 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.infrastructure.serialization.BaseMembers', this, 3);
    tmp0_serialDesc.nt('roleName', false);
    tmp0_serialDesc.nt('isOptional', true);
    tmp0_serialDesc.nt('defaultSamplingConfiguration', true);
    this.e21_1 = tmp0_serialDesc;
  }
  protoOf($serializer_47).pi = function () {
    return this.e21_1;
  };
  protoOf($serializer_47).cu = function () {
    var tmp0_cached = Companion_getInstance_78().e20_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[2]];
  };
  protoOf($serializer_47).ri = function (decoder) {
    var tmp0_desc = this.e21_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    var tmp8_cached = Companion_getInstance_78().e20_1;
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.zl(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.hm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.zl(tmp0_desc, 1);
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
    return BaseMembers_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_47).f21 = function (encoder, value) {
    var tmp0_desc = this.e21_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_78().e20_1;
    tmp1_output.nn(tmp0_desc, 0, value.f20_1);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.g20_1 === false)) {
      tmp1_output.fn(tmp0_desc, 1, value.g20_1);
    }
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !equals(value.h20_1, emptyMap())) {
      tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.h20_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_47).qi = function (encoder, value) {
    return this.f21(encoder, value instanceof BaseMembers_0 ? value : THROW_CCE());
  };
  var $serializer_instance_45;
  function $serializer_getInstance_45() {
    if ($serializer_instance_45 == null)
      new $serializer_47();
    return $serializer_instance_45;
  }
  function BaseMembers_init_$Init$_0(seen1, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_45().e21_1);
    }
    DeviceConfiguration_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.f20_1 = roleName;
    if (0 === (seen1 & 2))
      $this.g20_1 = false;
    else
      $this.g20_1 = isOptional;
    if (0 === (seen1 & 4))
      $this.h20_1 = emptyMap();
    else
      $this.h20_1 = defaultSamplingConfiguration;
    return $this;
  }
  function BaseMembers_init_$Create$_0(seen1, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker) {
    return BaseMembers_init_$Init$_0(seen1, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(BaseMembers_0)));
  }
  function BaseMembers_0() {
  }
  protoOf(BaseMembers_0).u1o = function () {
    return this.f20_1;
  };
  protoOf(BaseMembers_0).v1o = function () {
    return this.g20_1;
  };
  protoOf(BaseMembers_0).w1o = function () {
    return this.h20_1;
  };
  protoOf(BaseMembers_0).getSupportedDataTypes = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(BaseMembers_0).getDataTypeSamplingSchemes = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(BaseMembers_0).createDeviceRegistrationBuilder = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(BaseMembers_0).getRegistrationClass = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(BaseMembers_0).isValidRegistration = function (registration) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(BaseMembers_0).toString = function () {
    return 'BaseMembers(roleName=' + this.f20_1 + ', isOptional=' + this.g20_1 + ', defaultSamplingConfiguration=' + this.h20_1 + ')';
  };
  protoOf(BaseMembers_0).hashCode = function () {
    var result = getStringHashCode(this.f20_1);
    result = imul(result, 31) + getBooleanHashCode(this.g20_1) | 0;
    result = imul(result, 31) + hashCode(this.h20_1) | 0;
    return result;
  };
  protoOf(BaseMembers_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BaseMembers_0))
      return false;
    var tmp0_other_with_cast = other instanceof BaseMembers_0 ? other : THROW_CCE();
    if (!(this.f20_1 === tmp0_other_with_cast.f20_1))
      return false;
    if (!(this.g20_1 === tmp0_other_with_cast.g20_1))
      return false;
    if (!equals(this.h20_1, tmp0_other_with_cast.h20_1))
      return false;
    return true;
  };
  function Companion_78() {
    Companion_instance_79 = this;
    this.g21_1 = SerializationException_init_$Create$('' + getKClass(UnknownPolymorphicSerializer).i6() + ' only supports JSON serialization, ' + 'configured to use a class discriminator for polymorphism.');
  }
  var Companion_instance_79;
  function Companion_getInstance_79() {
    if (Companion_instance_79 == null)
      new Companion_78();
    return Companion_instance_79;
  }
  function getClassDiscriminator($this, json) {
    if (json.f14_1.z15_1)
      throw Companion_getInstance_79().g21_1;
    return json.f14_1.a16_1;
  }
  function UnknownPolymorphicSerializer$serialize$lambda($unknownTypeFields, $jsonSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp0_iterator = $unknownTypeFields.l2().t();
      while (tmp0_iterator.u()) {
        var element = tmp0_iterator.v();
        // Inline function 'dk.cachet.carp.common.infrastructure.serialization.UnknownPolymorphicSerializer.serialize.<anonymous>.<anonymous>' call
        $this$buildClassSerialDescriptor.dj(element, $jsonSerializer.pi());
      }
      return Unit_instance;
    };
  }
  function UnknownPolymorphicSerializer(baseClass, wrapperClass, verifyUnknownPolymorphicWrapper) {
    Companion_getInstance_79();
    verifyUnknownPolymorphicWrapper = verifyUnknownPolymorphicWrapper === VOID ? true : verifyUnknownPolymorphicWrapper;
    var reflect = reflectIfAvailable();
    if (!(reflect == null) ? verifyUnknownPolymorphicWrapper : false) {
      // Inline function 'dk.cachet.carp.common.infrastructure.reflect.ReflectionAvailable.extendsType' call
      throw UnsupportedOperationException_init_$Create$_0();
    }
    this.t1z_1 = buildClassSerialDescriptor('dk.cachet.carp.common.infrastructure.serialization.UnknownPolymorphicSerializer<' + baseClass.i6() + '>', []);
  }
  protoOf(UnknownPolymorphicSerializer).pi = function () {
    return this.t1z_1;
  };
  protoOf(UnknownPolymorphicSerializer).u1z = function (encoder, value) {
    if (!isInterface(encoder, JsonEncoder)) {
      throw Companion_getInstance_79().g21_1;
    }
    var classDiscriminator = getClassDiscriminator(this, encoder.h16());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isInterface(value, UnknownPolymorphicWrapper)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = Default_getInstance().k14(value.q1z());
    var unknown = tmp instanceof JsonObject ? tmp : THROW_CCE();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = unknown.p2().t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.common.infrastructure.serialization.UnknownPolymorphicSerializer.serialize.<anonymous>' call
      if (!(element.q2() === classDiscriminator)) {
        destination.n2(element.q2(), element.r2());
      }
    }
    var unknownTypeFields = destination;
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_safe_receiver = unknown.l16(classDiscriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var value_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n16();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (value_0 == null) {
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        var message_0 = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$6 = value_0;
        break $l$block;
      }
    }
    var unknownType = tmp$ret$6;
    var jsonSerializer = Companion_instance.m16();
    var overrideDescriptor = buildClassSerialDescriptor(unknownType, [], UnknownPolymorphicSerializer$serialize$lambda(unknownTypeFields, jsonSerializer));
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var composite = encoder.xl(overrideDescriptor);
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.UnknownPolymorphicSerializer.serialize.<anonymous>' call
    var id = 0;
    var tmp0_iterator_0 = unknownTypeFields.m2().t();
    while (tmp0_iterator_0.u()) {
      var field = tmp0_iterator_0.v();
      var tmp1 = id;
      id = tmp1 + 1 | 0;
      composite.pn(overrideDescriptor, tmp1, Companion_instance.m16(), field);
    }
    composite.yl(overrideDescriptor);
  };
  protoOf(UnknownPolymorphicSerializer).qi = function (encoder, value) {
    return this.u1z(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(UnknownPolymorphicSerializer).ri = function (decoder) {
    if (!isInterface(decoder, JsonDecoder)) {
      throw Companion_getInstance_79().g21_1;
    }
    var classDiscriminator = getClassDiscriminator(this, decoder.h16());
    var jsonElement = decoder.i16();
    var jsonSource = toString(jsonElement);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      var tmp0_safe_receiver = get_jsonObject(jsonElement).l16(classDiscriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var value = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n16();
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'dk.cachet.carp.common.infrastructure.serialization.UnknownPolymorphicSerializer.deserialize.<anonymous>' call
        var message = "Can't deserialize type which was serialized non-polymorphically.";
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    var className = tmp$ret$1;
    return this.s1z(className, jsonSource, decoder.h16());
  };
  function UnknownPolymorphicWrapper() {
  }
  function Companion_79() {
  }
  var Companion_instance_80;
  function Companion_getInstance_80() {
    return Companion_instance_80;
  }
  function CustomSamplingConfiguration(className, jsonSource, serializer) {
    this.h21_1 = className;
    this.i21_1 = jsonSource;
    this.j21_1 = serializer;
  }
  protoOf(CustomSamplingConfiguration).q1z = function () {
    return this.i21_1;
  };
  protoOf(CustomSamplingConfiguration).toString = function () {
    return 'CustomSamplingConfiguration(className=' + this.h21_1 + ', jsonSource=' + this.i21_1 + ', serializer=' + this.j21_1 + ')';
  };
  protoOf(CustomSamplingConfiguration).hashCode = function () {
    var result = getStringHashCode(this.h21_1);
    result = imul(result, 31) + getStringHashCode(this.i21_1) | 0;
    result = imul(result, 31) + hashCode(this.j21_1) | 0;
    return result;
  };
  protoOf(CustomSamplingConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomSamplingConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof CustomSamplingConfiguration ? other : THROW_CCE();
    if (!(this.h21_1 === tmp0_other_with_cast.h21_1))
      return false;
    if (!(this.i21_1 === tmp0_other_with_cast.i21_1))
      return false;
    if (!equals(this.j21_1, tmp0_other_with_cast.j21_1))
      return false;
    return true;
  };
  function _no_name_provided__qut3iv_10() {
    UnknownPolymorphicSerializer.call(this, getKClass(SamplingConfiguration), getKClass(CustomSamplingConfiguration));
  }
  protoOf(_no_name_provided__qut3iv_10).s1z = function (className, json, serializer) {
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.SamplingConfigurationSerializer.$$delegate_0.<anonymous>' call
    return new CustomSamplingConfiguration(className, json, serializer);
  };
  function SamplingConfigurationSerializer() {
    SamplingConfigurationSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createUnknownPolymorphicSerializer' call
    tmp.l21_1 = new _no_name_provided__qut3iv_10();
  }
  protoOf(SamplingConfigurationSerializer).pi = function () {
    return this.l21_1.pi();
  };
  protoOf(SamplingConfigurationSerializer).ri = function (decoder) {
    return this.l21_1.ri(decoder);
  };
  protoOf(SamplingConfigurationSerializer).m21 = function (encoder, value) {
    this.l21_1.u1z(encoder, value);
  };
  protoOf(SamplingConfigurationSerializer).qi = function (encoder, value) {
    return this.m21(encoder, (!(value == null) ? isInterface(value, SamplingConfiguration) : false) ? value : THROW_CCE());
  };
  var SamplingConfigurationSerializer_instance;
  function SamplingConfigurationSerializer_getInstance() {
    if (SamplingConfigurationSerializer_instance == null)
      new SamplingConfigurationSerializer();
    return SamplingConfigurationSerializer_instance;
  }
  function Companion_80() {
    Companion_instance_81 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n21_1 = [null, new ArrayListSerializer(Companion_getInstance_55().m16()), null];
  }
  protoOf(Companion_80).m16 = function () {
    return $serializer_getInstance_46();
  };
  var Companion_instance_81;
  function Companion_getInstance_81() {
    if (Companion_instance_81 == null)
      new Companion_80();
    return Companion_instance_81;
  }
  function $serializer_48() {
    $serializer_instance_46 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.infrastructure.serialization.CustomTaskConfiguration.BaseMembers', this, 3);
    tmp0_serialDesc.nt('name', false);
    tmp0_serialDesc.nt('measures', true);
    tmp0_serialDesc.nt('description', true);
    this.o21_1 = tmp0_serialDesc;
  }
  protoOf($serializer_48).pi = function () {
    return this.o21_1;
  };
  protoOf($serializer_48).cu = function () {
    var tmp0_cached = Companion_getInstance_81().n21_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1], get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_48).ri = function (decoder) {
    var tmp0_desc = this.o21_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    var tmp8_cached = Companion_getInstance_81().n21_1;
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
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
            tmp4_local0 = tmp7_input.hm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jm(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
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
    return BaseMembers_init_$Create$_1(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_48).p21 = function (encoder, value) {
    var tmp0_desc = this.o21_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_81().n21_1;
    tmp1_output.nn(tmp0_desc, 0, value.q21_1);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !equals(value.r21_1, emptyList())) {
      tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.r21_1);
    }
    if (tmp1_output.vn(tmp0_desc, 2) ? true : !(value.s21_1 == null)) {
      tmp1_output.rn(tmp0_desc, 2, StringSerializer_getInstance(), value.s21_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_48).qi = function (encoder, value) {
    return this.p21(encoder, value instanceof BaseMembers_1 ? value : THROW_CCE());
  };
  var $serializer_instance_46;
  function $serializer_getInstance_46() {
    if ($serializer_instance_46 == null)
      new $serializer_48();
    return $serializer_instance_46;
  }
  function BaseMembers_init_$Init$_1(seen1, name, measures, description, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_46().o21_1);
    }
    $this.q21_1 = name;
    if (0 === (seen1 & 2))
      $this.r21_1 = emptyList();
    else
      $this.r21_1 = measures;
    if (0 === (seen1 & 4))
      $this.s21_1 = null;
    else
      $this.s21_1 = description;
    return $this;
  }
  function BaseMembers_init_$Create$_1(seen1, name, measures, description, serializationConstructorMarker) {
    return BaseMembers_init_$Init$_1(seen1, name, measures, description, serializationConstructorMarker, objectCreate(protoOf(BaseMembers_1)));
  }
  function BaseMembers_1() {
  }
  protoOf(BaseMembers_1).ra = function () {
    return this.q21_1;
  };
  protoOf(BaseMembers_1).n1u = function () {
    return this.r21_1;
  };
  protoOf(BaseMembers_1).o1u = function () {
    return this.s21_1;
  };
  protoOf(BaseMembers_1).toString = function () {
    return 'BaseMembers(name=' + this.q21_1 + ', measures=' + this.r21_1 + ', description=' + this.s21_1 + ')';
  };
  protoOf(BaseMembers_1).hashCode = function () {
    var result = getStringHashCode(this.q21_1);
    result = imul(result, 31) + hashCode(this.r21_1) | 0;
    result = imul(result, 31) + (this.s21_1 == null ? 0 : getStringHashCode(this.s21_1)) | 0;
    return result;
  };
  protoOf(BaseMembers_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BaseMembers_1))
      return false;
    var tmp0_other_with_cast = other instanceof BaseMembers_1 ? other : THROW_CCE();
    if (!(this.q21_1 === tmp0_other_with_cast.q21_1))
      return false;
    if (!equals(this.r21_1, tmp0_other_with_cast.r21_1))
      return false;
    if (!(this.s21_1 == tmp0_other_with_cast.s21_1))
      return false;
    return true;
  };
  function Companion_81() {
  }
  var Companion_instance_82;
  function Companion_getInstance_82() {
    return Companion_instance_82;
  }
  function CustomTaskConfiguration$lambda($this$Json) {
    $this$Json.c15_1 = true;
    return Unit_instance;
  }
  function CustomTaskConfiguration(className, jsonSource, serializer) {
    this.t21_1 = className;
    this.u21_1 = jsonSource;
    this.v21_1 = serializer;
    this.y21_1 = null;
    var json = Json(this.v21_1, CustomTaskConfiguration$lambda);
    var baseMembers = json.j14(Companion_getInstance_81().m16(), this.u21_1);
    this.w21_1 = baseMembers.q21_1;
    this.x21_1 = baseMembers.r21_1;
  }
  protoOf(CustomTaskConfiguration).q1z = function () {
    return this.u21_1;
  };
  protoOf(CustomTaskConfiguration).ra = function () {
    return this.w21_1;
  };
  protoOf(CustomTaskConfiguration).n1u = function () {
    return this.x21_1;
  };
  protoOf(CustomTaskConfiguration).o1u = function () {
    return this.y21_1;
  };
  protoOf(CustomTaskConfiguration).toString = function () {
    return 'CustomTaskConfiguration(className=' + this.t21_1 + ', jsonSource=' + this.u21_1 + ', serializer=' + this.v21_1 + ')';
  };
  protoOf(CustomTaskConfiguration).hashCode = function () {
    var result = getStringHashCode(this.t21_1);
    result = imul(result, 31) + getStringHashCode(this.u21_1) | 0;
    result = imul(result, 31) + hashCode(this.v21_1) | 0;
    return result;
  };
  protoOf(CustomTaskConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomTaskConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof CustomTaskConfiguration ? other : THROW_CCE();
    if (!(this.t21_1 === tmp0_other_with_cast.t21_1))
      return false;
    if (!(this.u21_1 === tmp0_other_with_cast.u21_1))
      return false;
    if (!equals(this.v21_1, tmp0_other_with_cast.v21_1))
      return false;
    return true;
  };
  function _no_name_provided__qut3iv_11() {
    UnknownPolymorphicSerializer.call(this, getKClass(TaskConfiguration), getKClass(CustomTaskConfiguration));
  }
  protoOf(_no_name_provided__qut3iv_11).s1z = function (className, json, serializer) {
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.TaskConfigurationSerializer.$$delegate_0.<anonymous>' call
    return new CustomTaskConfiguration(className, json, serializer);
  };
  function TaskConfigurationSerializer() {
    TaskConfigurationSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createUnknownPolymorphicSerializer' call
    tmp.a22_1 = new _no_name_provided__qut3iv_11();
  }
  protoOf(TaskConfigurationSerializer).pi = function () {
    return this.a22_1.pi();
  };
  protoOf(TaskConfigurationSerializer).ri = function (decoder) {
    return this.a22_1.ri(decoder);
  };
  protoOf(TaskConfigurationSerializer).b22 = function (encoder, value) {
    this.a22_1.u1z(encoder, value);
  };
  protoOf(TaskConfigurationSerializer).qi = function (encoder, value) {
    return this.b22(encoder, (!(value == null) ? isInterface(value, TaskConfiguration) : false) ? value : THROW_CCE());
  };
  var TaskConfigurationSerializer_instance;
  function TaskConfigurationSerializer_getInstance() {
    if (TaskConfigurationSerializer_instance == null)
      new TaskConfigurationSerializer();
    return TaskConfigurationSerializer_instance;
  }
  function Companion_82() {
  }
  protoOf(Companion_82).m16 = function () {
    return $serializer_getInstance_47();
  };
  var Companion_instance_83;
  function Companion_getInstance_83() {
    return Companion_instance_83;
  }
  function $serializer_49() {
    $serializer_instance_47 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.infrastructure.serialization.CustomTriggerConfiguration.BaseMembers', this, 1);
    tmp0_serialDesc.nt('sourceDeviceRoleName', false);
    this.c22_1 = tmp0_serialDesc;
  }
  protoOf($serializer_49).pi = function () {
    return this.c22_1;
  };
  protoOf($serializer_49).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  protoOf($serializer_49).ri = function (decoder) {
    var tmp0_desc = this.c22_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xl(tmp0_desc);
    if (tmp5_input.om()) {
      tmp4_local0 = tmp5_input.hm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.hm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yl(tmp0_desc);
    return BaseMembers_init_$Create$_2(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_49).d22 = function (encoder, value) {
    var tmp0_desc = this.c22_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.f22_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_49).qi = function (encoder, value) {
    return this.d22(encoder, value instanceof BaseMembers_2 ? value : THROW_CCE());
  };
  var $serializer_instance_47;
  function $serializer_getInstance_47() {
    if ($serializer_instance_47 == null)
      new $serializer_49();
    return $serializer_instance_47;
  }
  function BaseMembers_init_$Init$_2(seen1, sourceDeviceRoleName, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_47().c22_1);
    }
    TriggerConfiguration_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.f22_1 = sourceDeviceRoleName;
    return $this;
  }
  function BaseMembers_init_$Create$_2(seen1, sourceDeviceRoleName, serializationConstructorMarker) {
    return BaseMembers_init_$Init$_2(seen1, sourceDeviceRoleName, serializationConstructorMarker, objectCreate(protoOf(BaseMembers_2)));
  }
  function BaseMembers_2() {
  }
  protoOf(BaseMembers_2).z1v = function () {
    return this.f22_1;
  };
  protoOf(BaseMembers_2).toString = function () {
    return 'BaseMembers(sourceDeviceRoleName=' + this.f22_1 + ')';
  };
  protoOf(BaseMembers_2).hashCode = function () {
    return getStringHashCode(this.f22_1);
  };
  protoOf(BaseMembers_2).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BaseMembers_2))
      return false;
    var tmp0_other_with_cast = other instanceof BaseMembers_2 ? other : THROW_CCE();
    if (!(this.f22_1 === tmp0_other_with_cast.f22_1))
      return false;
    return true;
  };
  function Companion_83() {
  }
  var Companion_instance_84;
  function Companion_getInstance_84() {
    return Companion_instance_84;
  }
  function CustomTriggerConfiguration$lambda($this$Json) {
    $this$Json.c15_1 = true;
    return Unit_instance;
  }
  function CustomTriggerConfiguration(className, jsonSource, serializer) {
    TriggerConfiguration.call(this);
    this.h22_1 = className;
    this.i22_1 = jsonSource;
    this.j22_1 = serializer;
    var json = Json(this.j22_1, CustomTriggerConfiguration$lambda);
    var baseMembers = json.j14(Companion_instance_83.m16(), this.i22_1);
    this.k22_1 = baseMembers.f22_1;
  }
  protoOf(CustomTriggerConfiguration).q1z = function () {
    return this.i22_1;
  };
  protoOf(CustomTriggerConfiguration).z1v = function () {
    return this.k22_1;
  };
  protoOf(CustomTriggerConfiguration).toString = function () {
    return 'CustomTriggerConfiguration(className=' + this.h22_1 + ', jsonSource=' + this.i22_1 + ', serializer=' + this.j22_1 + ')';
  };
  protoOf(CustomTriggerConfiguration).hashCode = function () {
    var result = getStringHashCode(this.h22_1);
    result = imul(result, 31) + getStringHashCode(this.i22_1) | 0;
    result = imul(result, 31) + hashCode(this.j22_1) | 0;
    return result;
  };
  protoOf(CustomTriggerConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomTriggerConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof CustomTriggerConfiguration ? other : THROW_CCE();
    if (!(this.h22_1 === tmp0_other_with_cast.h22_1))
      return false;
    if (!(this.i22_1 === tmp0_other_with_cast.i22_1))
      return false;
    if (!equals(this.j22_1, tmp0_other_with_cast.j22_1))
      return false;
    return true;
  };
  function _no_name_provided__qut3iv_12() {
    UnknownPolymorphicSerializer.call(this, getKClass(TriggerConfiguration), getKClass(CustomTriggerConfiguration));
  }
  protoOf(_no_name_provided__qut3iv_12).s1z = function (className, json, serializer) {
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.TriggerConfigurationSerializer.$$delegate_0.<anonymous>' call
    return new CustomTriggerConfiguration(className, json, serializer);
  };
  function TriggerConfigurationSerializer() {
    TriggerConfigurationSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createUnknownPolymorphicSerializer' call
    tmp.m22_1 = new _no_name_provided__qut3iv_12();
  }
  protoOf(TriggerConfigurationSerializer).pi = function () {
    return this.m22_1.pi();
  };
  protoOf(TriggerConfigurationSerializer).ri = function (decoder) {
    return this.m22_1.ri(decoder);
  };
  protoOf(TriggerConfigurationSerializer).n22 = function (encoder, value) {
    this.m22_1.u1z(encoder, value);
  };
  protoOf(TriggerConfigurationSerializer).qi = function (encoder, value) {
    return this.n22(encoder, value instanceof TriggerConfiguration ? value : THROW_CCE());
  };
  var TriggerConfigurationSerializer_instance;
  function TriggerConfigurationSerializer_getInstance() {
    if (TriggerConfigurationSerializer_instance == null)
      new TriggerConfigurationSerializer();
    return TriggerConfigurationSerializer_instance;
  }
  function ApplicationServiceRequest() {
  }
  protoOf(ApplicationServiceRequest).matchesServiceRequest = function (request) {
    var requestObjectName = getKClassFromExpression(this).i6();
    var tmp = request.callableName;
    var tmp_0;
    if (requestObjectName == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.replaceFirstChar' call
      var tmp_1;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(requestObjectName) > 0) {
        // Inline function 'dk.cachet.carp.common.infrastructure.services.ApplicationServiceRequest.matchesServiceRequest.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        var this_0 = charSequenceGet(requestObjectName, 0);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$4 = toString_1(this_0).toLowerCase();
        var tmp_2 = toString(tmp$ret$4);
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = tmp_2 + requestObjectName.substring(1);
      } else {
        tmp_1 = requestObjectName;
      }
      tmp_0 = tmp_1;
    }
    return tmp === tmp_0;
  };
  var API_VERSION_FIELD;
  function DefaultUUIDFactory$randomUUID$lambda(match) {
    var random = Math.random() * 16 | 0;
    var char = match.r2() === 'x' ? random : random & 3 | 8;
    var tmp = char.toString(16);
    return (!(tmp == null) ? isCharSequence(tmp) : false) ? tmp : THROW_CCE();
  }
  function DefaultUUIDFactory() {
    this.d1h_1 = 16;
  }
  protoOf(DefaultUUIDFactory).e1h = function () {
    // Inline function 'kotlin.text.replace' call
    var this_0 = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    var regex = Regex_init_$Create$('[xy]');
    var transform = DefaultUUIDFactory$randomUUID$lambda;
    var uuidString = regex.p8(this_0, transform);
    return new UUID(uuidString);
  };
  var DefaultUUIDFactory_instance;
  function DefaultUUIDFactory_getInstance() {
    return DefaultUUIDFactory_instance;
  }
  function Reflection() {
    this.c1z_1 = false;
  }
  var Reflection_instance;
  function Reflection_getInstance() {
    return Reflection_instance;
  }
  //region block: post-declaration
  protoOf($serializer).du = typeParametersSerializers;
  protoOf($serializer_0).du = typeParametersSerializers;
  defineProp(protoOf(Frequency), 'name', protoOf(Frequency).ra);
  defineProp(protoOf(Frequency), 'ordinal', protoOf(Frequency).sa);
  defineProp(protoOf(Trilean), 'name', protoOf(Trilean).ra);
  defineProp(protoOf(Trilean), 'ordinal', protoOf(Trilean).sa);
  protoOf($serializer_1).du = typeParametersSerializers;
  defineProp(protoOf(Acceleration), 'sensorSpecificData', function () {
    return this.p1h();
  });
  protoOf($serializer_2).du = typeParametersSerializers;
  defineProp(protoOf(AngularVelocity), 'sensorSpecificData', function () {
    return this.p1h();
  });
  protoOf($serializer_3).du = typeParametersSerializers;
  defineProp(protoOf(DataTimeType), 'name', protoOf(DataTimeType).ra);
  defineProp(protoOf(DataTimeType), 'ordinal', protoOf(DataTimeType).sa);
  protoOf($serializer_4).du = typeParametersSerializers;
  defineProp(protoOf(ECG), 'sensorSpecificData', function () {
    return this.p1h();
  });
  protoOf($serializer_5).du = typeParametersSerializers;
  defineProp(protoOf(EDA), 'sensorSpecificData', function () {
    return this.p1h();
  });
  protoOf($serializer_6).du = typeParametersSerializers;
  defineProp(protoOf(Geolocation), 'sensorSpecificData', function () {
    return this.p1h();
  });
  protoOf($serializer_7).du = typeParametersSerializers;
  defineProp(protoOf(HeartRate), 'sensorSpecificData', function () {
    return this.p1h();
  });
  protoOf($serializer_8).du = typeParametersSerializers;
  defineProp(protoOf(InterbeatInterval), 'sensorSpecificData', function () {
    return this.p1h();
  });
  protoOf($serializer_9).du = typeParametersSerializers;
  defineProp(protoOf(NonGravitationalAcceleration), 'sensorSpecificData', function () {
    return this.p1h();
  });
  protoOf($serializer_10).du = typeParametersSerializers;
  defineProp(protoOf(PPG), 'sensorSpecificData', function () {
    return this.p1h();
  });
  protoOf($serializer_11).du = typeParametersSerializers;
  defineProp(protoOf(SensorSkinContact), 'sensorSpecificData', function () {
    return this.p1h();
  });
  protoOf($serializer_12).du = typeParametersSerializers;
  defineProp(protoOf(SignalStrength), 'sensorSpecificData', function () {
    return this.p1h();
  });
  protoOf($serializer_13).du = typeParametersSerializers;
  defineProp(protoOf(StepCount), 'sensorSpecificData', function () {
    return this.p1h();
  });
  protoOf($serializer_14).du = typeParametersSerializers;
  defineProp(protoOf(Sex), 'name', protoOf(Sex).ra);
  defineProp(protoOf(Sex), 'ordinal', protoOf(Sex).sa);
  protoOf($serializer_15).du = typeParametersSerializers;
  defineProp(protoOf(SelectOne), 'prompt', function () {
    return this.w1n();
  });
  protoOf($serializer_16).du = typeParametersSerializers;
  defineProp(protoOf(Text), 'prompt', function () {
    return this.w1n();
  });
  protoOf($serializer_17).du = typeParametersSerializers;
  defineProp(protoOf(DeviceConfiguration), 'roleName', function () {
    return this.u1o();
  });
  defineProp(protoOf(DeviceConfiguration), 'isOptional', function () {
    return this.v1o();
  });
  defineProp(protoOf(DeviceConfiguration), 'defaultSamplingConfiguration', function () {
    return this.w1o();
  });
  protoOf($serializer_18).du = typeParametersSerializers;
  defineProp(protoOf(DeviceRegistration), 'deviceId', function () {
    return this.k1p();
  });
  defineProp(protoOf(DeviceRegistration), 'deviceDisplayName', function () {
    return this.j1p();
  });
  protoOf($serializer_19).du = typeParametersSerializers;
  protoOf($serializer_20).du = typeParametersSerializers;
  protoOf($serializer_21).du = typeParametersSerializers;
  protoOf($serializer_22).du = typeParametersSerializers;
  protoOf($serializer_23).du = typeParametersSerializers;
  protoOf($serializer_24).du = typeParametersSerializers;
  protoOf($serializer_25).du = typeParametersSerializers;
  protoOf($serializer_26).du = typeParametersSerializers;
  defineProp(protoOf(Companion_45), '$cachedDescriptor', protoOf(Companion_45).c1t);
  protoOf(BatteryAwareSamplingConfigurationBuilder).j1t = build;
  defineProp(protoOf(Granularity), 'name', protoOf(Granularity).ra);
  defineProp(protoOf(Granularity), 'ordinal', protoOf(Granularity).sa);
  protoOf($serializer_28).du = typeParametersSerializers;
  protoOf(GranularitySamplingConfigurationBuilder).j1t = build;
  protoOf($serializer_29).du = typeParametersSerializers;
  protoOf(IntervalSamplingConfigurationBuilder).j1t = build;
  protoOf(NoOptionsSamplingConfigurationBuilder).j1t = build;
  protoOf($serializer_30).du = typeParametersSerializers;
  defineProp(protoOf(BackgroundTask), 'name', function () {
    return this.ra();
  });
  defineProp(protoOf(BackgroundTask), 'measures', function () {
    return this.n1u();
  });
  defineProp(protoOf(BackgroundTask), 'description', function () {
    return this.o1u();
  });
  protoOf($serializer_31).du = typeParametersSerializers;
  defineProp(protoOf(CustomProtocolTask), 'name', function () {
    return this.ra();
  });
  defineProp(protoOf(CustomProtocolTask), 'description', function () {
    return this.o1u();
  });
  defineProp(protoOf(CustomProtocolTask), 'measures', function () {
    return this.n1u();
  });
  protoOf($serializer_32).du = typeParametersSerializers;
  protoOf($serializer_33).du = typeParametersSerializers;
  defineProp(protoOf(UrlVariable), 'name', protoOf(UrlVariable).ra);
  defineProp(protoOf(UrlVariable), 'ordinal', protoOf(UrlVariable).sa);
  protoOf($serializer_34).du = typeParametersSerializers;
  defineProp(protoOf(WebTask), 'name', function () {
    return this.ra();
  });
  defineProp(protoOf(WebTask), 'description', function () {
    return this.o1u();
  });
  defineProp(protoOf(WebTask), 'measures', function () {
    return this.n1u();
  });
  protoOf($serializer_35).du = typeParametersSerializers;
  defineProp(protoOf(TriggerConfiguration), 'requiresPrimaryDevice', function () {
    return this.a1w();
  });
  defineProp(protoOf(TriggerConfiguration), 'sourceDeviceRoleName', function () {
    return this.z1v();
  });
  protoOf($serializer_36).du = typeParametersSerializers;
  protoOf($serializer_37).du = typeParametersSerializers;
  defineProp(protoOf(Control), 'name', protoOf(Control).ra);
  defineProp(protoOf(Control), 'ordinal', protoOf(Control).sa);
  protoOf($serializer_38).du = typeParametersSerializers;
  protoOf($serializer_39).du = typeParametersSerializers;
  protoOf($serializer_40).du = typeParametersSerializers;
  protoOf($serializer_41).du = typeParametersSerializers;
  protoOf($serializer_42).du = typeParametersSerializers;
  defineProp(protoOf(ExpectedParticipantData), 'inputDataType', protoOf(ExpectedParticipantData).v1x);
  protoOf($serializer_43).du = typeParametersSerializers;
  defineProp(protoOf(Companion_68), '$cachedDescriptor', protoOf(Companion_68).c1t);
  defineProp(protoOf(ParticipantAttribute), 'inputDataType', function () {
    return this.v1x();
  });
  protoOf($serializer_45).du = typeParametersSerializers;
  protoOf($serializer_46).du = typeParametersSerializers;
  protoOf($serializer_47).du = typeParametersSerializers;
  protoOf($serializer_48).du = typeParametersSerializers;
  defineProp(protoOf(BaseMembers_1), 'name', function () {
    return this.ra();
  });
  defineProp(protoOf(BaseMembers_1), 'measures', function () {
    return this.n1u();
  });
  defineProp(protoOf(BaseMembers_1), 'description', function () {
    return this.o1u();
  });
  defineProp(protoOf(CustomTaskConfiguration), 'name', function () {
    return this.ra();
  });
  defineProp(protoOf(CustomTaskConfiguration), 'measures', function () {
    return this.n1u();
  });
  defineProp(protoOf(CustomTaskConfiguration), 'description', function () {
    return this.o1u();
  });
  protoOf($serializer_49).du = typeParametersSerializers;
  defineProp(protoOf(ApplicationServiceRequest), 'apiVersion', function () {
    return this.o22();
  });
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_23 = new Companion_22();
  CUSTOM_INPUT_TYPE_NAME = 'dk.cachet.carp.input.custom';
  Companion_instance_26 = new Companion_25();
  Companion_instance_29 = new Companion_28();
  Companion_instance_31 = new Companion_30();
  Companion_instance_32 = new Companion_31();
  Companion_instance_34 = new Companion_33();
  Companion_instance_35 = new Companion_34();
  Companion_instance_38 = new Companion_37();
  Companion_instance_39 = new Companion_38();
  Companion_instance_40 = new Companion_39();
  Companion_instance_44 = new Companion_43();
  Companion_instance_45 = new Companion_44();
  Companion_instance_49 = new Companion_48();
  NoOptionsSamplingConfigurationBuilder_instance = new NoOptionsSamplingConfigurationBuilder();
  Companion_instance_50 = new Companion_49();
  Companion_instance_54 = new Companion_53();
  Companion_instance_57 = new Companion_56();
  Companion_instance_58 = new Companion_57();
  Companion_instance_59 = new Companion_58();
  Companion_instance_63 = new Companion_62();
  Companion_instance_64 = new Companion_63();
  Companion_instance_68 = new Companion_67();
  Companion_instance_71 = new Companion_70();
  Companion_instance_72 = new Companion_71();
  NAMESPACE = 'dk.cachet.carp.common';
  Companion_instance_73 = new Companion_72();
  Companion_instance_74 = new Companion_73();
  Companion_instance_75 = new Companion_74();
  Companion_instance_76 = new Companion_75();
  Companion_instance_77 = new Companion_76();
  Companion_instance_80 = new Companion_79();
  Companion_instance_82 = new Companion_81();
  Companion_instance_83 = new Companion_82();
  Companion_instance_84 = new Companion_83();
  API_VERSION_FIELD = 'apiVersion';
  DefaultUUIDFactory_instance = new DefaultUUIDFactory();
  Reflection_instance = new Reflection();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    $dk$cachet$carp$common$application.EmailAddress = EmailAddress;
    defineProp($dk$cachet$carp$common$application.EmailAddress, 'Companion', Companion_getInstance_0);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    $dk$cachet$carp$common$application.toEpochMicroseconds = toEpochMicroseconds;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    $dk$cachet$carp$common$application.MACAddress = MACAddress;
    defineProp($dk$cachet$carp$common$application.MACAddress, 'Companion', Companion_getInstance_1);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    $dk$cachet$carp$common$application.NamespacedId = NamespacedId;
    defineProp($dk$cachet$carp$common$application.NamespacedId, 'Companion', Companion_getInstance_2);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    $dk$cachet$carp$common$application.RecurrenceRule = RecurrenceRule;
    defineProp($dk$cachet$carp$common$application.RecurrenceRule, 'Companion', Companion_getInstance_6);
    $dk$cachet$carp$common$application.RecurrenceRule.Frequency = Frequency;
    $dk$cachet$carp$common$application.RecurrenceRule.Frequency.values = values;
    $dk$cachet$carp$common$application.RecurrenceRule.Frequency.valueOf = valueOf;
    defineProp($dk$cachet$carp$common$application.RecurrenceRule.Frequency, 'SECONDLY', Frequency_SECONDLY_getInstance);
    defineProp($dk$cachet$carp$common$application.RecurrenceRule.Frequency, 'MINUTELY', Frequency_MINUTELY_getInstance);
    defineProp($dk$cachet$carp$common$application.RecurrenceRule.Frequency, 'HOURLY', Frequency_HOURLY_getInstance);
    defineProp($dk$cachet$carp$common$application.RecurrenceRule.Frequency, 'DAILY', Frequency_DAILY_getInstance);
    defineProp($dk$cachet$carp$common$application.RecurrenceRule.Frequency, 'WEEKLY', Frequency_WEEKLY_getInstance);
    defineProp($dk$cachet$carp$common$application.RecurrenceRule.Frequency, 'MONTHLY', Frequency_MONTHLY_getInstance);
    defineProp($dk$cachet$carp$common$application.RecurrenceRule.Frequency, 'YEARLY', Frequency_YEARLY_getInstance);
    $dk$cachet$carp$common$application.RecurrenceRule.End = End;
    $dk$cachet$carp$common$application.RecurrenceRule.End.Until = Until;
    defineProp($dk$cachet$carp$common$application.RecurrenceRule.End.Until, 'Companion', Companion_getInstance_3);
    $dk$cachet$carp$common$application.RecurrenceRule.End.Count = Count;
    defineProp($dk$cachet$carp$common$application.RecurrenceRule.End.Count, 'Companion', Companion_getInstance_4);
    defineProp($dk$cachet$carp$common$application.RecurrenceRule.End, 'Never', Never_getInstance);
    defineProp($dk$cachet$carp$common$application.RecurrenceRule.End, 'Companion', Companion_getInstance_5);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    $dk$cachet$carp$common$application.TimeOfDay = TimeOfDay;
    defineProp($dk$cachet$carp$common$application.TimeOfDay, 'Companion', Companion_getInstance_7);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    $dk$cachet$carp$common$application.Trilean = Trilean;
    $dk$cachet$carp$common$application.Trilean.values = values_0;
    $dk$cachet$carp$common$application.Trilean.valueOf = valueOf_0;
    defineProp($dk$cachet$carp$common$application.Trilean, 'TRUE', Trilean_TRUE_getInstance);
    defineProp($dk$cachet$carp$common$application.Trilean, 'FALSE', Trilean_FALSE_getInstance);
    defineProp($dk$cachet$carp$common$application.Trilean, 'UNKNOWN', Trilean_UNKNOWN_getInstance);
    $dk$cachet$carp$common$application.toTrilean = toTrilean;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    $dk$cachet$carp$common$application.UUID = UUID;
    defineProp($dk$cachet$carp$common$application.UUID, 'Companion', Companion_getInstance_8);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.Acceleration = Acceleration;
    defineProp($dk$cachet$carp$common$application$data.Acceleration, 'Companion', Companion_getInstance_9);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.AngularVelocity = AngularVelocity;
    defineProp($dk$cachet$carp$common$application$data.AngularVelocity, 'Companion', Companion_getInstance_10);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    defineProp($dk$cachet$carp$common$application$data, 'CarpDataTypes', CarpDataTypes_getInstance);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.CompletedTask = CompletedTask;
    defineProp($dk$cachet$carp$common$application$data.CompletedTask, 'Companion', Companion_getInstance_11);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.DataTypeMetaData = DataTypeMetaData;
    $dk$cachet$carp$common$application$data.DataTimeType = DataTimeType;
    $dk$cachet$carp$common$application$data.DataTimeType.values = values_1;
    $dk$cachet$carp$common$application$data.DataTimeType.valueOf = valueOf_1;
    defineProp($dk$cachet$carp$common$application$data.DataTimeType, 'POINT', DataTimeType_POINT_getInstance);
    defineProp($dk$cachet$carp$common$application$data.DataTimeType, 'TIME_SPAN', DataTimeType_TIME_SPAN_getInstance);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.DataTypeMetaDataMap = DataTypeMetaDataMap;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.ECG = ECG;
    defineProp($dk$cachet$carp$common$application$data.ECG, 'Companion', Companion_getInstance_12);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.EDA = EDA;
    defineProp($dk$cachet$carp$common$application$data.EDA, 'Companion', Companion_getInstance_13);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.Geolocation = Geolocation;
    defineProp($dk$cachet$carp$common$application$data.Geolocation, 'Companion', Companion_getInstance_14);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.HeartRate = HeartRate;
    defineProp($dk$cachet$carp$common$application$data.HeartRate, 'Companion', Companion_getInstance_15);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.InterbeatInterval = InterbeatInterval;
    defineProp($dk$cachet$carp$common$application$data.InterbeatInterval, 'Companion', Companion_getInstance_16);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.NonGravitationalAcceleration = NonGravitationalAcceleration;
    defineProp($dk$cachet$carp$common$application$data.NonGravitationalAcceleration, 'Companion', Companion_getInstance_17);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.PPG = PPG;
    defineProp($dk$cachet$carp$common$application$data.PPG, 'Companion', Companion_getInstance_18);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.SensorSkinContact = SensorSkinContact;
    defineProp($dk$cachet$carp$common$application$data.SensorSkinContact, 'Companion', Companion_getInstance_19);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.SignalStrength = SignalStrength;
    defineProp($dk$cachet$carp$common$application$data.SignalStrength, 'Companion', Companion_getInstance_20);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.StepCount = StepCount;
    defineProp($dk$cachet$carp$common$application$data.StepCount, 'Companion', Companion_getInstance_21);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    $dk$cachet$carp$common$application$data.TriggeredTask = TriggeredTask;
    defineProp($dk$cachet$carp$common$application$data.TriggeredTask, 'Companion', Companion_getInstance_22);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    var $dk$cachet$carp$common$application$data$input = $dk$cachet$carp$common$application$data.input || ($dk$cachet$carp$common$application$data.input = {});
    defineProp($dk$cachet$carp$common$application$data$input, 'CarpInputDataTypes', CarpInputDataTypes_getInstance);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    var $dk$cachet$carp$common$application$data$input = $dk$cachet$carp$common$application$data.input || ($dk$cachet$carp$common$application$data.input = {});
    $dk$cachet$carp$common$application$data$input.CustomInput = CustomInput;
    defineProp($dk$cachet$carp$common$application$data$input.CustomInput, 'Companion', Companion_getInstance_23);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    var $dk$cachet$carp$common$application$data$input = $dk$cachet$carp$common$application$data.input || ($dk$cachet$carp$common$application$data.input = {});
    $dk$cachet$carp$common$application$data$input.InputDataTypeList = InputDataTypeList;
    $dk$cachet$carp$common$application$data$input.InputDataTypeList.create = create;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    var $dk$cachet$carp$common$application$data$input = $dk$cachet$carp$common$application$data.input || ($dk$cachet$carp$common$application$data.input = {});
    $dk$cachet$carp$common$application$data$input.Sex = Sex;
    $dk$cachet$carp$common$application$data$input.Sex.values = values_2;
    $dk$cachet$carp$common$application$data$input.Sex.valueOf = valueOf_2;
    defineProp($dk$cachet$carp$common$application$data$input.Sex, 'Male', Sex_Male_getInstance);
    defineProp($dk$cachet$carp$common$application$data$input.Sex, 'Female', Sex_Female_getInstance);
    defineProp($dk$cachet$carp$common$application$data$input.Sex, 'Intersex', Sex_Intersex_getInstance);
    defineProp($dk$cachet$carp$common$application$data$input.Sex, 'Companion', Companion_getInstance_24);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    var $dk$cachet$carp$common$application$data$input = $dk$cachet$carp$common$application$data.input || ($dk$cachet$carp$common$application$data.input = {});
    var $dk$cachet$carp$common$application$data$input$elements = $dk$cachet$carp$common$application$data$input.elements || ($dk$cachet$carp$common$application$data$input.elements = {});
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    var $dk$cachet$carp$common$application$data$input = $dk$cachet$carp$common$application$data.input || ($dk$cachet$carp$common$application$data.input = {});
    var $dk$cachet$carp$common$application$data$input$elements = $dk$cachet$carp$common$application$data$input.elements || ($dk$cachet$carp$common$application$data$input.elements = {});
    $dk$cachet$carp$common$application$data$input$elements.SelectOne = SelectOne;
    defineProp($dk$cachet$carp$common$application$data$input$elements.SelectOne, 'Companion', Companion_getInstance_25);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$data = $dk$cachet$carp$common$application.data || ($dk$cachet$carp$common$application.data = {});
    var $dk$cachet$carp$common$application$data$input = $dk$cachet$carp$common$application$data.input || ($dk$cachet$carp$common$application$data.input = {});
    var $dk$cachet$carp$common$application$data$input$elements = $dk$cachet$carp$common$application$data$input.elements || ($dk$cachet$carp$common$application$data$input.elements = {});
    $dk$cachet$carp$common$application$data$input$elements.Text = Text;
    defineProp($dk$cachet$carp$common$application$data$input$elements.Text, 'Companion', Companion_getInstance_26);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$devices = $dk$cachet$carp$common$application.devices || ($dk$cachet$carp$common$application.devices = {});
    $dk$cachet$carp$common$application$devices.AltBeacon = AltBeacon;
    defineProp($dk$cachet$carp$common$application$devices.AltBeacon, 'Sensors', Sensors_getInstance);
    defineProp($dk$cachet$carp$common$application$devices.AltBeacon, 'Tasks', Tasks_getInstance);
    defineProp($dk$cachet$carp$common$application$devices.AltBeacon, 'Companion', Companion_getInstance_27);
    $dk$cachet$carp$common$application$devices.AltBeaconDeviceRegistration = AltBeaconDeviceRegistration;
    defineProp($dk$cachet$carp$common$application$devices.AltBeaconDeviceRegistration, 'Companion', Companion_getInstance_28);
    $dk$cachet$carp$common$application$devices.AltBeaconDeviceRegistrationBuilder = AltBeaconDeviceRegistrationBuilder;
    defineProp($dk$cachet$carp$common$application$devices.AltBeaconDeviceRegistrationBuilder, 'Companion', Companion_getInstance_29);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$devices = $dk$cachet$carp$common$application.devices || ($dk$cachet$carp$common$application.devices = {});
    $dk$cachet$carp$common$application$devices.BLEHeartRateDevice = BLEHeartRateDevice;
    defineProp($dk$cachet$carp$common$application$devices.BLEHeartRateDevice, 'Sensors', Sensors_getInstance_0);
    defineProp($dk$cachet$carp$common$application$devices.BLEHeartRateDevice, 'Tasks', Tasks_getInstance_0);
    defineProp($dk$cachet$carp$common$application$devices.BLEHeartRateDevice, 'Companion', Companion_getInstance_30);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$devices = $dk$cachet$carp$common$application.devices || ($dk$cachet$carp$common$application.devices = {});
    $dk$cachet$carp$common$application$devices.BLESerialNumberDeviceRegistration = BLESerialNumberDeviceRegistration;
    defineProp($dk$cachet$carp$common$application$devices.BLESerialNumberDeviceRegistration, 'Companion', Companion_getInstance_31);
    $dk$cachet$carp$common$application$devices.BLESerialNumberDeviceRegistrationBuilder = BLESerialNumberDeviceRegistrationBuilder;
    defineProp($dk$cachet$carp$common$application$devices.BLESerialNumberDeviceRegistrationBuilder, 'Companion', Companion_getInstance_32);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$devices = $dk$cachet$carp$common$application.devices || ($dk$cachet$carp$common$application.devices = {});
    $dk$cachet$carp$common$application$devices.CustomProtocolDevice = CustomProtocolDevice;
    defineProp($dk$cachet$carp$common$application$devices.CustomProtocolDevice, 'Sensors', Sensors_getInstance_1);
    defineProp($dk$cachet$carp$common$application$devices.CustomProtocolDevice, 'Tasks', Tasks_getInstance_1);
    defineProp($dk$cachet$carp$common$application$devices.CustomProtocolDevice, 'Companion', Companion_getInstance_33);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$devices = $dk$cachet$carp$common$application.devices || ($dk$cachet$carp$common$application.devices = {});
    $dk$cachet$carp$common$application$devices.DefaultDeviceRegistration = DefaultDeviceRegistration;
    defineProp($dk$cachet$carp$common$application$devices.DefaultDeviceRegistration, 'Companion', Companion_getInstance_34);
    $dk$cachet$carp$common$application$devices.DefaultDeviceRegistrationBuilder = DefaultDeviceRegistrationBuilder;
    defineProp($dk$cachet$carp$common$application$devices.DefaultDeviceRegistrationBuilder, 'Companion', Companion_getInstance_35);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$devices = $dk$cachet$carp$common$application.devices || ($dk$cachet$carp$common$application.devices = {});
    $dk$cachet$carp$common$application$devices.DeviceConfiguration = DeviceConfiguration;
    defineProp($dk$cachet$carp$common$application$devices.DeviceConfiguration, 'Companion', Companion_getInstance_36);
    $dk$cachet$carp$common$application$devices.DeviceConfigurationBuilder = DeviceConfigurationBuilder;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$devices = $dk$cachet$carp$common$application.devices || ($dk$cachet$carp$common$application.devices = {});
    $dk$cachet$carp$common$application$devices.DeviceRegistration = DeviceRegistration;
    defineProp($dk$cachet$carp$common$application$devices.DeviceRegistration, 'Companion', Companion_getInstance_37);
    $dk$cachet$carp$common$application$devices.DeviceRegistrationBuilder = DeviceRegistrationBuilder;
    defineProp($dk$cachet$carp$common$application$devices.DeviceRegistrationBuilder, 'Companion', Companion_getInstance_38);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$devices = $dk$cachet$carp$common$application.devices || ($dk$cachet$carp$common$application.devices = {});
    $dk$cachet$carp$common$application$devices.MACAddressDeviceRegistration = MACAddressDeviceRegistration;
    defineProp($dk$cachet$carp$common$application$devices.MACAddressDeviceRegistration, 'Companion', Companion_getInstance_39);
    $dk$cachet$carp$common$application$devices.MACAddressDeviceRegistrationBuilder = MACAddressDeviceRegistrationBuilder;
    defineProp($dk$cachet$carp$common$application$devices.MACAddressDeviceRegistrationBuilder, 'Companion', Companion_getInstance_40);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$devices = $dk$cachet$carp$common$application.devices || ($dk$cachet$carp$common$application.devices = {});
    $dk$cachet$carp$common$application$devices.PrimaryDeviceConfiguration = PrimaryDeviceConfiguration;
    defineProp($dk$cachet$carp$common$application$devices.PrimaryDeviceConfiguration, 'Companion', Companion_getInstance_41);
    $dk$cachet$carp$common$application$devices.isPrimary = isPrimary;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$devices = $dk$cachet$carp$common$application.devices || ($dk$cachet$carp$common$application.devices = {});
    $dk$cachet$carp$common$application$devices.Smartphone = Smartphone;
    defineProp($dk$cachet$carp$common$application$devices.Smartphone, 'Companion', Companion_getInstance_42);
    defineProp($dk$cachet$carp$common$application$devices.Smartphone, 'Sensors', Sensors_getInstance_2);
    defineProp($dk$cachet$carp$common$application$devices.Smartphone, 'Tasks', Tasks_getInstance_2);
    $dk$cachet$carp$common$application$devices.SmartphoneBuilder = SmartphoneBuilder;
    $dk$cachet$carp$common$application$devices.SmartphoneSamplingConfigurationMapBuilder = SmartphoneSamplingConfigurationMapBuilder;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$devices = $dk$cachet$carp$common$application.devices || ($dk$cachet$carp$common$application.devices = {});
    $dk$cachet$carp$common$application$devices.Website = Website;
    defineProp($dk$cachet$carp$common$application$devices.Website, 'Sensors', Sensors_getInstance_3);
    defineProp($dk$cachet$carp$common$application$devices.Website, 'Tasks', Tasks_getInstance_3);
    defineProp($dk$cachet$carp$common$application$devices.Website, 'Companion', Companion_getInstance_43);
    $dk$cachet$carp$common$application$devices.WebsiteDeviceRegistration = WebsiteDeviceRegistration;
    defineProp($dk$cachet$carp$common$application$devices.WebsiteDeviceRegistration, 'Companion', Companion_getInstance_44);
    $dk$cachet$carp$common$application$devices.WebsiteDeviceRegistrationBuilder = WebsiteDeviceRegistrationBuilder;
    defineProp($dk$cachet$carp$common$application$devices.WebsiteDeviceRegistrationBuilder, 'Companion', Companion_getInstance_45);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$sampling = $dk$cachet$carp$common$application.sampling || ($dk$cachet$carp$common$application.sampling = {});
    $dk$cachet$carp$common$application$sampling.AdaptiveGranularitySamplingScheme = AdaptiveGranularitySamplingScheme;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$sampling = $dk$cachet$carp$common$application.sampling || ($dk$cachet$carp$common$application.sampling = {});
    $dk$cachet$carp$common$application$sampling.BatteryAwareSamplingScheme = BatteryAwareSamplingScheme;
    $dk$cachet$carp$common$application$sampling.BatteryAwareSamplingConfiguration = BatteryAwareSamplingConfiguration;
    defineProp($dk$cachet$carp$common$application$sampling.BatteryAwareSamplingConfiguration, 'Companion', Companion_getInstance_46);
    $dk$cachet$carp$common$application$sampling.BatteryAwareSamplingConfigurationBuilder = BatteryAwareSamplingConfigurationBuilder;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$sampling = $dk$cachet$carp$common$application.sampling || ($dk$cachet$carp$common$application.sampling = {});
    $dk$cachet$carp$common$application$sampling.DataTypeSamplingScheme = DataTypeSamplingScheme;
    $dk$cachet$carp$common$application$sampling.DataTypeSamplingSchemeMap = DataTypeSamplingSchemeMap;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$sampling = $dk$cachet$carp$common$application.sampling || ($dk$cachet$carp$common$application.sampling = {});
    $dk$cachet$carp$common$application$sampling.GranularitySamplingScheme = GranularitySamplingScheme;
    $dk$cachet$carp$common$application$sampling.Granularity = Granularity;
    $dk$cachet$carp$common$application$sampling.Granularity.values = values_3;
    $dk$cachet$carp$common$application$sampling.Granularity.valueOf = valueOf_3;
    defineProp($dk$cachet$carp$common$application$sampling.Granularity, 'Detailed', Granularity_Detailed_getInstance);
    defineProp($dk$cachet$carp$common$application$sampling.Granularity, 'Balanced', Granularity_Balanced_getInstance);
    defineProp($dk$cachet$carp$common$application$sampling.Granularity, 'Coarse', Granularity_Coarse_getInstance);
    defineProp($dk$cachet$carp$common$application$sampling.Granularity, 'Companion', Companion_getInstance_47);
    $dk$cachet$carp$common$application$sampling.GranularitySamplingConfiguration = GranularitySamplingConfiguration;
    defineProp($dk$cachet$carp$common$application$sampling.GranularitySamplingConfiguration, 'Companion', Companion_getInstance_48);
    $dk$cachet$carp$common$application$sampling.GranularitySamplingConfigurationBuilder = GranularitySamplingConfigurationBuilder;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$sampling = $dk$cachet$carp$common$application.sampling || ($dk$cachet$carp$common$application.sampling = {});
    $dk$cachet$carp$common$application$sampling.IntervalSamplingScheme = IntervalSamplingScheme;
    $dk$cachet$carp$common$application$sampling.IntervalSamplingConfiguration = IntervalSamplingConfiguration;
    defineProp($dk$cachet$carp$common$application$sampling.IntervalSamplingConfiguration, 'Companion', Companion_getInstance_49);
    $dk$cachet$carp$common$application$sampling.IntervalSamplingConfigurationBuilder = IntervalSamplingConfigurationBuilder;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$sampling = $dk$cachet$carp$common$application.sampling || ($dk$cachet$carp$common$application.sampling = {});
    $dk$cachet$carp$common$application$sampling.NoOptionsSamplingScheme = NoOptionsSamplingScheme;
    defineProp($dk$cachet$carp$common$application$sampling, 'NoOptionsSamplingConfiguration', NoOptionsSamplingConfiguration_getInstance);
    defineProp($dk$cachet$carp$common$application$sampling, 'NoOptionsSamplingConfigurationBuilder', NoOptionsSamplingConfigurationBuilder_getInstance);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$sampling = $dk$cachet$carp$common$application.sampling || ($dk$cachet$carp$common$application.sampling = {});
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$services = $dk$cachet$carp$common$application.services || ($dk$cachet$carp$common$application.services = {});
    $dk$cachet$carp$common$application$services.ApiVersion = ApiVersion;
    defineProp($dk$cachet$carp$common$application$services.ApiVersion, 'Companion', Companion_getInstance_50);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$tasks = $dk$cachet$carp$common$application.tasks || ($dk$cachet$carp$common$application.tasks = {});
    $dk$cachet$carp$common$application$tasks.BackgroundTask = BackgroundTask;
    defineProp($dk$cachet$carp$common$application$tasks.BackgroundTask, 'Companion', Companion_getInstance_51);
    $dk$cachet$carp$common$application$tasks.BackgroundTaskBuilder = BackgroundTaskBuilder;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$tasks = $dk$cachet$carp$common$application.tasks || ($dk$cachet$carp$common$application.tasks = {});
    $dk$cachet$carp$common$application$tasks.CustomProtocolTask = CustomProtocolTask;
    defineProp($dk$cachet$carp$common$application$tasks.CustomProtocolTask, 'Companion', Companion_getInstance_52);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$tasks = $dk$cachet$carp$common$application.tasks || ($dk$cachet$carp$common$application.tasks = {});
    $dk$cachet$carp$common$application$tasks.Measure = Measure;
    $dk$cachet$carp$common$application$tasks.Measure.DataStream = DataStream;
    defineProp($dk$cachet$carp$common$application$tasks.Measure.DataStream, 'Companion', Companion_getInstance_53);
    $dk$cachet$carp$common$application$tasks.Measure.TriggerData = TriggerData;
    defineProp($dk$cachet$carp$common$application$tasks.Measure.TriggerData, 'Companion', Companion_getInstance_54);
    defineProp($dk$cachet$carp$common$application$tasks.Measure, 'Companion', Companion_getInstance_55);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$tasks = $dk$cachet$carp$common$application.tasks || ($dk$cachet$carp$common$application.tasks = {});
    $dk$cachet$carp$common$application$tasks.getAllExpectedDataTypes = getAllExpectedDataTypes;
    $dk$cachet$carp$common$application$tasks.TaskConfigurationBuilder = TaskConfigurationBuilder;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$tasks = $dk$cachet$carp$common$application.tasks || ($dk$cachet$carp$common$application.tasks = {});
    $dk$cachet$carp$common$application$tasks.TaskConfigurationList = TaskConfigurationList;
    $dk$cachet$carp$common$application$tasks.TaskConfigurationList.create = create_0;
    $dk$cachet$carp$common$application$tasks.SupportedTaskConfiguration = SupportedTaskConfiguration;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$tasks = $dk$cachet$carp$common$application.tasks || ($dk$cachet$carp$common$application.tasks = {});
    $dk$cachet$carp$common$application$tasks.WebTask = WebTask;
    defineProp($dk$cachet$carp$common$application$tasks.WebTask, 'Companion', Companion_getInstance_56);
    $dk$cachet$carp$common$application$tasks.WebTask.UrlVariable = UrlVariable;
    $dk$cachet$carp$common$application$tasks.WebTask.UrlVariable.values = values_4;
    $dk$cachet$carp$common$application$tasks.WebTask.UrlVariable.valueOf = valueOf_4;
    defineProp($dk$cachet$carp$common$application$tasks.WebTask.UrlVariable, 'PARTICIPANT_ID', UrlVariable_PARTICIPANT_ID_getInstance);
    defineProp($dk$cachet$carp$common$application$tasks.WebTask.UrlVariable, 'DEPLOYMENT_ID', UrlVariable_DEPLOYMENT_ID_getInstance);
    defineProp($dk$cachet$carp$common$application$tasks.WebTask.UrlVariable, 'TRIGGER_ID', UrlVariable_TRIGGER_ID_getInstance);
    $dk$cachet$carp$common$application$tasks.WebTaskBuilder = WebTaskBuilder;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$triggers = $dk$cachet$carp$common$application.triggers || ($dk$cachet$carp$common$application.triggers = {});
    $dk$cachet$carp$common$application$triggers.ElapsedTimeTrigger = ElapsedTimeTrigger;
    $dk$cachet$carp$common$application$triggers.ElapsedTimeTrigger.create = create_1;
    defineProp($dk$cachet$carp$common$application$triggers.ElapsedTimeTrigger, 'Companion', Companion_getInstance_57);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$triggers = $dk$cachet$carp$common$application.triggers || ($dk$cachet$carp$common$application.triggers = {});
    $dk$cachet$carp$common$application$triggers.ManualTrigger = ManualTrigger;
    defineProp($dk$cachet$carp$common$application$triggers.ManualTrigger, 'Companion', Companion_getInstance_58);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$triggers = $dk$cachet$carp$common$application.triggers || ($dk$cachet$carp$common$application.triggers = {});
    $dk$cachet$carp$common$application$triggers.ScheduledTrigger = ScheduledTrigger;
    $dk$cachet$carp$common$application$triggers.ScheduledTrigger.create = create_2;
    defineProp($dk$cachet$carp$common$application$triggers.ScheduledTrigger, 'Companion', Companion_getInstance_59);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$triggers = $dk$cachet$carp$common$application.triggers || ($dk$cachet$carp$common$application.triggers = {});
    $dk$cachet$carp$common$application$triggers.TaskControl = TaskControl;
    $dk$cachet$carp$common$application$triggers.TaskControl.Control = Control;
    $dk$cachet$carp$common$application$triggers.TaskControl.Control.values = values_5;
    $dk$cachet$carp$common$application$triggers.TaskControl.Control.valueOf = valueOf_5;
    defineProp($dk$cachet$carp$common$application$triggers.TaskControl.Control, 'Start', Control_Start_getInstance);
    defineProp($dk$cachet$carp$common$application$triggers.TaskControl.Control, 'Stop', Control_Stop_getInstance);
    defineProp($dk$cachet$carp$common$application$triggers.TaskControl, 'Companion', Companion_getInstance_60);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$triggers = $dk$cachet$carp$common$application.triggers || ($dk$cachet$carp$common$application.triggers = {});
    $dk$cachet$carp$common$application$triggers.TriggerConfiguration = TriggerConfiguration;
    defineProp($dk$cachet$carp$common$application$triggers.TriggerConfiguration, 'Companion', Companion_getInstance_61);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$users = $dk$cachet$carp$common$application.users || ($dk$cachet$carp$common$application.users = {});
    $dk$cachet$carp$common$application$users.AccountIdentity = AccountIdentity;
    defineProp($dk$cachet$carp$common$application$users.AccountIdentity, 'Companion', Companion_getInstance_62);
    $dk$cachet$carp$common$application$users.EmailAccountIdentity = EmailAccountIdentity;
    $dk$cachet$carp$common$application$users.EmailAccountIdentity.create = create_3;
    defineProp($dk$cachet$carp$common$application$users.EmailAccountIdentity, 'Companion', Companion_getInstance_63);
    $dk$cachet$carp$common$application$users.UsernameAccountIdentity = UsernameAccountIdentity;
    $dk$cachet$carp$common$application$users.UsernameAccountIdentity.create = create_4;
    defineProp($dk$cachet$carp$common$application$users.UsernameAccountIdentity, 'Companion', Companion_getInstance_64);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$users = $dk$cachet$carp$common$application.users || ($dk$cachet$carp$common$application.users = {});
    $dk$cachet$carp$common$application$users.AssignedTo = AssignedTo;
    defineProp($dk$cachet$carp$common$application$users.AssignedTo, 'All', All_getInstance);
    $dk$cachet$carp$common$application$users.AssignedTo.Roles = Roles;
    defineProp($dk$cachet$carp$common$application$users.AssignedTo.Roles, 'Companion', Companion_getInstance_65);
    defineProp($dk$cachet$carp$common$application$users.AssignedTo, 'Companion', Companion_getInstance_66);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$users = $dk$cachet$carp$common$application.users || ($dk$cachet$carp$common$application.users = {});
    $dk$cachet$carp$common$application$users.ExpectedParticipantData = ExpectedParticipantData;
    defineProp($dk$cachet$carp$common$application$users.ExpectedParticipantData, 'Companion', Companion_getInstance_67);
    $dk$cachet$carp$common$application$users.hasNoConflicts = hasNoConflicts;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$users = $dk$cachet$carp$common$application.users || ($dk$cachet$carp$common$application.users = {});
    $dk$cachet$carp$common$application$users.ParticipantAttribute = ParticipantAttribute;
    $dk$cachet$carp$common$application$users.ParticipantAttribute.DefaultParticipantAttribute = DefaultParticipantAttribute;
    defineProp($dk$cachet$carp$common$application$users.ParticipantAttribute.DefaultParticipantAttribute, 'Companion', Companion_getInstance_68);
    $dk$cachet$carp$common$application$users.ParticipantAttribute.CustomParticipantAttribute = CustomParticipantAttribute;
    defineProp($dk$cachet$carp$common$application$users.ParticipantAttribute.CustomParticipantAttribute, 'Companion', Companion_getInstance_69);
    defineProp($dk$cachet$carp$common$application$users.ParticipantAttribute, 'Companion', Companion_getInstance_70);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$users = $dk$cachet$carp$common$application.users || ($dk$cachet$carp$common$application.users = {});
    $dk$cachet$carp$common$application$users.ParticipantRole = ParticipantRole;
    defineProp($dk$cachet$carp$common$application$users.ParticipantRole, 'Companion', Companion_getInstance_71);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$application = $dk$cachet$carp$common.application || ($dk$cachet$carp$common.application = {});
    var $dk$cachet$carp$common$application$users = $dk$cachet$carp$common$application.users || ($dk$cachet$carp$common$application.users = {});
    $dk$cachet$carp$common$application$users.Username = Username;
    defineProp($dk$cachet$carp$common$application$users.Username, 'Companion', Companion_getInstance_72);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$domain = $dk$cachet$carp$common.domain || ($dk$cachet$carp$common.domain = {});
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$infrastructure = $dk$cachet$carp$common.infrastructure || ($dk$cachet$carp$common.infrastructure = {});
    var $dk$cachet$carp$common$infrastructure$serialization = $dk$cachet$carp$common$infrastructure.serialization || ($dk$cachet$carp$common$infrastructure.serialization = {});
    defineProp($dk$cachet$carp$common$infrastructure$serialization, 'JSON', get_JSON, set_JSON);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$common = $dk$cachet$carp.common || ($dk$cachet$carp.common = {});
    var $dk$cachet$carp$common$infrastructure = $dk$cachet$carp$common.infrastructure || ($dk$cachet$carp$common.infrastructure = {});
    var $dk$cachet$carp$common$infrastructure$services = $dk$cachet$carp$common$infrastructure.services || ($dk$cachet$carp$common$infrastructure.services = {});
    $dk$cachet$carp$common$infrastructure$services.ApplicationServiceRequest = ApplicationServiceRequest;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = Data;
  _.$_$.b = PrimaryDeviceConfiguration;
  _.$_$.c = isPrimary;
  _.$_$.d = ApiVersion;
  _.$_$.e = TaskConfiguration;
  _.$_$.f = TaskControl;
  _.$_$.g = TriggerConfiguration;
  _.$_$.h = All;
  _.$_$.i = Roles;
  _.$_$.j = hasNoConflicts;
  _.$_$.k = UUID;
  _.$_$.l = toEpochMicroseconds;
  _.$_$.m = AggregateRoot;
  _.$_$.n = ExtractUniqueKeyMap;
  _.$_$.o = Snapshot;
  _.$_$.p = ApplicationDataSerializer;
  _.$_$.q = CustomData;
  _.$_$.r = ignoreTypeParameters;
  _.$_$.s = ApplicationServiceRequest;
  _.$_$.t = DataTimeType_POINT_getInstance;
  _.$_$.u = DataTimeType_TIME_SPAN_getInstance;
  _.$_$.v = Companion_getInstance_36;
  _.$_$.w = Companion_getInstance_37;
  _.$_$.x = Companion_getInstance_41;
  _.$_$.y = ApiVersionSerializer_getInstance;
  _.$_$.z = $serializer_getInstance_37;
  _.$_$.a1 = Companion_getInstance_62;
  _.$_$.b1 = All_getInstance;
  _.$_$.c1 = Companion_getInstance_66;
  _.$_$.d1 = $serializer_getInstance_41;
  _.$_$.e1 = $serializer_getInstance_43;
  _.$_$.f1 = UsernameSerializer_getInstance;
  _.$_$.g1 = EmailAddressSerializer_getInstance;
  _.$_$.h1 = Companion_instance_2;
  _.$_$.i1 = NamespacedIdSerializer_getInstance;
  _.$_$.j1 = Companion_instance_8;
  _.$_$.k1 = UUIDSerializer_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=carp-common-generated.js.map
