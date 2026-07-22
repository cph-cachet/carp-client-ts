(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@cachet/kotlin-kotlin-stdlib', '@cachet/kotlinx-serialization-kotlinx-serialization-core', '@cachet/kotlinx-serialization-kotlinx-serialization-json'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@cachet/kotlin-kotlin-stdlib'), require('@cachet/kotlinx-serialization-kotlinx-serialization-core'), require('@cachet/kotlinx-serialization-kotlinx-serialization-json'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'carp-common-generated'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'carp-common-generated'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'carp-common-generated'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'carp-common-generated'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'carp-common-generated'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'carp-common-generated'.");
    }
    globalThis['carp-common-generated'] = factory(typeof globalThis['carp-common-generated'] === 'undefined' ? {} : globalThis['carp-common-generated'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.b9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h8;
  var VOID = kotlin_kotlin.$_$.b;
  var getStringHashCode = kotlin_kotlin.$_$.e8;
  var initMetadataForClass = kotlin_kotlin.$_$.g8;
  var getKClass = kotlin_kotlin.$_$.q9;
  var ensureNotNull = kotlin_kotlin.$_$.hc;
  var THROW_CCE = kotlin_kotlin.$_$.sb;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var initMetadataForObject = kotlin_kotlin.$_$.m8;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i3;
  var KtMap = kotlin_kotlin.$_$.l4;
  var isInterface = kotlin_kotlin.$_$.v8;
  var toString = kotlin_kotlin.$_$.d9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s3;
  var Unit_instance = kotlin_kotlin.$_$.u2;
  var fromInt = kotlin_kotlin.$_$.e7;
  var multiply = kotlin_kotlin.$_$.h7;
  var add = kotlin_kotlin.$_$.a7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.j;
  var charArrayOf = kotlin_kotlin.$_$.q7;
  var split = kotlin_kotlin.$_$.la;
  var replace = kotlin_kotlin.$_$.ja;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.m3;
  var defineProp = kotlin_kotlin.$_$.y7;
  var isCharSequence = kotlin_kotlin.$_$.r8;
  var trim = kotlin_kotlin.$_$.eb;
  var joinToString = kotlin_kotlin.$_$.w5;
  var last = kotlin_kotlin.$_$.a6;
  var THROW_IAE = kotlin_kotlin.$_$.tb;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var Duration = kotlin_kotlin.$_$.fb;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var objectCreate = kotlin_kotlin.$_$.a9;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var ObjectSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var _Duration___get_inWholeMicroseconds__impl__8oe8vv = kotlin_kotlin.$_$.e;
  var Duration__hashCode_impl_u4exz6 = kotlin_kotlin.$_$.d;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.x2;
  var lazy = kotlin_kotlin.$_$.lc;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var substring = kotlin_kotlin.$_$.pa;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w4;
  var mapCapacity = kotlin_kotlin.$_$.c6;
  var coerceAtLeast = kotlin_kotlin.$_$.f9;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.h3;
  var to = kotlin_kotlin.$_$.qc;
  var listOf = kotlin_kotlin.$_$.b6;
  var Collection = kotlin_kotlin.$_$.d4;
  var distinct = kotlin_kotlin.$_$.k5;
  var toInt = kotlin_kotlin.$_$.va;
  var Companion_getInstance = kotlin_kotlin.$_$.k2;
  var toLong = kotlin_kotlin.$_$.xa;
  var DurationUnit_MICROSECONDS_getInstance = kotlin_kotlin.$_$.v2;
  var toDuration = kotlin_kotlin.$_$.hb;
  var Enum = kotlin_kotlin.$_$.nb;
  var equals = kotlin_kotlin.$_$.z7;
  var hashCode = kotlin_kotlin.$_$.f8;
  var padStart = kotlin_kotlin.$_$.ga;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var toString_0 = kotlin_kotlin.$_$.pc;
  var getNumberHashCode = kotlin_kotlin.$_$.c8;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var initMetadataForInterface = kotlin_kotlin.$_$.k8;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var getBooleanHashCode = kotlin_kotlin.$_$.b8;
  var ShortSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.y2;
  var toSet = kotlin_kotlin.$_$.t6;
  var emptyList = kotlin_kotlin.$_$.l5;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i2;
  var arrayOf = kotlin_kotlin.$_$.ec;
  var createKType = kotlin_kotlin.$_$.o9;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d3;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var getKClassFromExpression = kotlin_kotlin.$_$.p9;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.a4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.z2;
  var KtList = kotlin_kotlin.$_$.i4;
  var createAnnotatedEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var emptyMap = kotlin_kotlin.$_$.m5;
  var numberRangeToNumber = kotlin_kotlin.$_$.y8;
  var InstantSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var ClosedRange = kotlin_kotlin.$_$.e9;
  var contains = kotlin_kotlin.$_$.i9;
  var System_instance = kotlin_kotlin.$_$.j2;
  var isBlank = kotlin_kotlin.$_$.ea;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v3;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.w2;
  var toDuration_0 = kotlin_kotlin.$_$.ib;
  var Duration__toString_impl_8d916b = kotlin_kotlin.$_$.i;
  var Duration__minus_impl_q5cfm7 = kotlin_kotlin.$_$.g;
  var _Duration___get_absoluteValue__impl__vr7i6w = kotlin_kotlin.$_$.c;
  var compareTo = kotlin_kotlin.$_$.w7;
  var toMap = kotlin_kotlin.$_$.r6;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nc;
  var plus = kotlin_kotlin.$_$.i6;
  var replace_0 = kotlin_kotlin.$_$.ia;
  var firstOrNull = kotlin_kotlin.$_$.o5;
  var addAll = kotlin_kotlin.$_$.q4;
  var toList = kotlin_kotlin.$_$.p6;
  var asJsReadonlyMapView = kotlin_kotlin.$_$.k4;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.g2;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var JsonDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var substring_0 = kotlin_kotlin.$_$.qa;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var JsonEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var startsWith = kotlin_kotlin.$_$.ma;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.h;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var plus_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var PolymorphicModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var PolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var emptySet = kotlin_kotlin.$_$.n5;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.z3;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var charSequenceLength = kotlin_kotlin.$_$.u7;
  var charCodeAt = kotlin_kotlin.$_$.s7;
  var toString_1 = kotlin_kotlin.$_$.m;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(ApplicationData, 'ApplicationData');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(EmailAddress, 'EmailAddress', VOID, VOID, VOID, VOID, VOID, {0: EmailAddressSerializer_getInstance});
  initMetadataForClass(StringConversionSerializer, 'StringConversionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(EmailAddressSerializer$$inlined$createCarpStringPrimitiveSerializer$1, VOID, VOID, StringConversionSerializer);
  initMetadataForObject(EmailAddressSerializer, 'EmailAddressSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(EnumObjectMap, 'EnumObjectMap', VOID, VOID, [KtMap]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(MACAddress, 'MACAddress', VOID, VOID, VOID, VOID, VOID, {0: MACAddressSerializer_getInstance});
  initMetadataForClass(MACAddressSerializer$$inlined$createCarpStringPrimitiveSerializer$1, VOID, VOID, StringConversionSerializer);
  initMetadataForObject(MACAddressSerializer, 'MACAddressSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(NamespacedId, 'NamespacedId', VOID, VOID, VOID, VOID, VOID, {0: NamespacedIdSerializer_getInstance});
  initMetadataForClass(NamespacedIdSerializer$$inlined$createCarpStringPrimitiveSerializer$1, VOID, VOID, StringConversionSerializer);
  initMetadataForObject(NamespacedIdSerializer, 'NamespacedIdSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(End, 'End', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_6});
  initMetadataForClass(Until, 'Until', VOID, End, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForClass(Count, 'Count', VOID, End, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForObject(Never, 'Never', VOID, End, [SerializerFactory], VOID, VOID, {0: Never_getInstance});
  initMetadataForCompanion(Companion_5, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Frequency, 'Frequency', VOID, Enum);
  initMetadataForClass(RecurrenceRule, 'RecurrenceRule', VOID, VOID, VOID, VOID, VOID, {0: RecurrenceRuleSerializer_getInstance});
  initMetadataForClass(RecurrenceRuleSerializer$$inlined$createCarpStringPrimitiveSerializer$1, VOID, VOID, StringConversionSerializer);
  initMetadataForObject(RecurrenceRuleSerializer, 'RecurrenceRuleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(TimeOfDay, 'TimeOfDay', VOID, VOID, VOID, VOID, VOID, {0: TimeOfDaySerializer_getInstance});
  initMetadataForClass(TimeOfDaySerializer$$inlined$createCarpStringPrimitiveSerializer$1, VOID, VOID, StringConversionSerializer);
  initMetadataForObject(TimeOfDaySerializer, 'TimeOfDaySerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(Trilean, 'Trilean', VOID, Enum);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(UUID, 'UUID', VOID, VOID, VOID, VOID, VOID, {0: UUIDSerializer_getInstance});
  initMetadataForClass(UUIDSerializer$$inlined$createCarpStringPrimitiveSerializer$1, VOID, VOID, StringConversionSerializer);
  initMetadataForObject(UUIDSerializer, 'UUIDSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForInterface(Data, 'Data');
  initMetadataForInterface(SensorData, 'SensorData', VOID, VOID, [Data]);
  initMetadataForClass(Acceleration, 'Acceleration', VOID, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AngularVelocity, 'AngularVelocity', VOID, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForClass(DataTypeMetaDataMap, 'DataTypeMetaDataMap', DataTypeMetaDataMap, EnumObjectMap);
  initMetadataForObject(CarpDataTypes, 'CarpDataTypes', VOID, DataTypeMetaDataMap);
  initMetadataForCompanion(Companion_11);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CompletedTask, 'CompletedTask', VOID, VOID, [Data], VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForObject(NoData, 'NoData', VOID, VOID, [Data, SerializerFactory], VOID, VOID, {0: NoData_getInstance});
  initMetadataForClass(DataTypeMetaData, 'DataTypeMetaData');
  initMetadataForClass(DataTimeType, 'DataTimeType', VOID, Enum);
  initMetadataForCompanion(Companion_12);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ECG, 'ECG', VOID, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_13);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EDA, 'EDA', VOID, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_14);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Geolocation, 'Geolocation', VOID, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_15);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(HeartRate, 'HeartRate', VOID, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_16);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(InterbeatInterval, 'InterbeatInterval', InterbeatInterval, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForCompanion(Companion_17);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NonGravitationalAcceleration, 'NonGravitationalAcceleration', VOID, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForCompanion(Companion_18);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PPG, 'PPG', VOID, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForCompanion(Companion_19);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SensorSkinContact, 'SensorSkinContact', VOID, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForCompanion(Companion_20);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SignalStrength, 'SignalStrength', VOID, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_12});
  initMetadataForCompanion(Companion_21);
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StepCount, 'StepCount', VOID, VOID, [SensorData], VOID, VOID, {0: $serializer_getInstance_13});
  initMetadataForCompanion(Companion_22);
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TriggeredTask, 'TriggeredTask', VOID, VOID, [Data], VOID, VOID, {0: $serializer_getInstance_14});
  initMetadataForClass(InputDataTypeList, 'InputDataTypeList', create, VOID, [KtList]);
  initMetadataForObject(CarpInputDataTypes, 'CarpInputDataTypes', VOID, InputDataTypeList);
  initMetadataForClass(CustomInput, 'CustomInput', VOID, VOID, [Data]);
  initMetadataForClass(CustomInputSerializer, 'CustomInputSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_23, VOID, [SerializerFactory]);
  initMetadataForClass(Sex, 'Sex', VOID, Enum, [Data], VOID, VOID, {0: Companion_getInstance_24});
  initMetadataForInterface(InputElement, 'InputElement');
  initMetadataForCompanion(Companion_24);
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SelectOne, 'SelectOne', VOID, VOID, [InputElement], VOID, VOID, {0: $serializer_getInstance_15});
  initMetadataForCompanion(Companion_25);
  initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Text, 'Text', VOID, VOID, [InputElement], VOID, VOID, {0: $serializer_getInstance_16});
  initMetadataForClass(DataTypeSamplingSchemeMap, 'DataTypeSamplingSchemeMap', DataTypeSamplingSchemeMap, EnumObjectMap);
  initMetadataForObject(Sensors, 'Sensors', VOID, DataTypeSamplingSchemeMap);
  initMetadataForClass(TaskConfigurationList, 'TaskConfigurationList', create_0, VOID, [KtList]);
  initMetadataForObject(Tasks, 'Tasks', VOID, TaskConfigurationList);
  initMetadataForCompanion(Companion_26);
  initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DeviceConfiguration, 'DeviceConfiguration', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_36});
  initMetadataForClass(AltBeacon, 'AltBeacon', VOID, DeviceConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_17});
  initMetadataForCompanion(Companion_27);
  initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DeviceRegistration, 'DeviceRegistration', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_37});
  initMetadataForClass(AltBeaconDeviceRegistration, 'AltBeaconDeviceRegistration', VOID, DeviceRegistration, VOID, VOID, VOID, {0: $serializer_getInstance_18});
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(DeviceRegistrationBuilder, 'DeviceRegistrationBuilder', VOID, VOID, VOID, VOID, VOID, {0: NotSerializable_getInstance});
  initMetadataForClass(AltBeaconDeviceRegistrationBuilder, 'AltBeaconDeviceRegistrationBuilder', AltBeaconDeviceRegistrationBuilder, DeviceRegistrationBuilder, VOID, VOID, VOID, {0: NotSerializable_getInstance});
  initMetadataForObject(Sensors_0, 'Sensors', VOID, DataTypeSamplingSchemeMap);
  initMetadataForObject(Tasks_0, 'Tasks', VOID, TaskConfigurationList);
  initMetadataForCompanion(Companion_29);
  initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BLEHeartRateDevice, 'BLEHeartRateDevice', VOID, DeviceConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_19});
  initMetadataForCompanion(Companion_30);
  initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BLESerialNumberDeviceRegistration, 'BLESerialNumberDeviceRegistration', VOID, DeviceRegistration, VOID, VOID, VOID, {0: $serializer_getInstance_20});
  initMetadataForCompanion(Companion_31);
  initMetadataForClass(BLESerialNumberDeviceRegistrationBuilder, 'BLESerialNumberDeviceRegistrationBuilder', BLESerialNumberDeviceRegistrationBuilder, DeviceRegistrationBuilder, VOID, VOID, VOID, {0: NotSerializable_getInstance});
  initMetadataForObject(Sensors_1, 'Sensors', VOID, DataTypeSamplingSchemeMap);
  initMetadataForObject(Tasks_1, 'Tasks', VOID, TaskConfigurationList);
  initMetadataForCompanion(Companion_32);
  initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PrimaryDeviceConfiguration, 'PrimaryDeviceConfiguration', VOID, DeviceConfiguration, VOID, VOID, VOID, {0: Companion_getInstance_41});
  initMetadataForClass(CustomProtocolDevice, 'CustomProtocolDevice', VOID, PrimaryDeviceConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_21});
  initMetadataForCompanion(Companion_33);
  initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DefaultDeviceRegistration, 'DefaultDeviceRegistration', DefaultDeviceRegistration, DeviceRegistration, VOID, VOID, VOID, {0: $serializer_getInstance_22});
  initMetadataForCompanion(Companion_34);
  initMetadataForClass(DefaultDeviceRegistrationBuilder, 'DefaultDeviceRegistrationBuilder', DefaultDeviceRegistrationBuilder, DeviceRegistrationBuilder, VOID, VOID, VOID, {0: NotSerializable_getInstance});
  initMetadataForCompanion(Companion_35, VOID, [SerializerFactory]);
  initMetadataForClass(DeviceConfigurationBuilder, 'DeviceConfigurationBuilder');
  initMetadataForCompanion(Companion_36, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_37, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_38);
  initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(MACAddressDeviceRegistration, 'MACAddressDeviceRegistration', VOID, DeviceRegistration, VOID, VOID, VOID, {0: $serializer_getInstance_23});
  initMetadataForCompanion(Companion_39);
  initMetadataForClass(MACAddressDeviceRegistrationBuilder, 'MACAddressDeviceRegistrationBuilder', MACAddressDeviceRegistrationBuilder, DeviceRegistrationBuilder, VOID, VOID, VOID, {0: NotSerializable_getInstance});
  initMetadataForCompanion(Companion_40, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_41);
  initMetadataForObject(Sensors_2, 'Sensors', VOID, DataTypeSamplingSchemeMap);
  initMetadataForObject(Tasks_2, 'Tasks', VOID, TaskConfigurationList);
  initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Smartphone, 'Smartphone', VOID, PrimaryDeviceConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_24});
  initMetadataForClass(SmartphoneBuilder, 'SmartphoneBuilder', SmartphoneBuilder, DeviceConfigurationBuilder);
  initMetadataForClass(SamplingConfigurationMapBuilder, 'SamplingConfigurationMapBuilder', SamplingConfigurationMapBuilder);
  initMetadataForClass(SmartphoneSamplingConfigurationMapBuilder, 'SmartphoneSamplingConfigurationMapBuilder', SmartphoneSamplingConfigurationMapBuilder, SamplingConfigurationMapBuilder);
  initMetadataForObject(Sensors_3, 'Sensors', VOID, DataTypeSamplingSchemeMap);
  initMetadataForObject(Tasks_3, 'Tasks', VOID, TaskConfigurationList);
  initMetadataForCompanion(Companion_42);
  initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Website, 'Website', VOID, PrimaryDeviceConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_25});
  initMetadataForCompanion(Companion_43);
  initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(WebsiteDeviceRegistration, 'WebsiteDeviceRegistration', VOID, DeviceRegistration, VOID, VOID, VOID, {0: $serializer_getInstance_26});
  initMetadataForCompanion(Companion_44);
  initMetadataForClass(WebsiteDeviceRegistrationBuilder, 'WebsiteDeviceRegistrationBuilder', WebsiteDeviceRegistrationBuilder, DeviceRegistrationBuilder, VOID, VOID, VOID, {0: NotSerializable_getInstance});
  initMetadataForClass(DataTypeSamplingScheme, 'DataTypeSamplingScheme');
  initMetadataForClass(BatteryAwareSamplingScheme, 'BatteryAwareSamplingScheme', VOID, DataTypeSamplingScheme);
  initMetadataForClass(AdaptiveGranularitySamplingScheme, 'AdaptiveGranularitySamplingScheme', VOID, BatteryAwareSamplingScheme);
  initMetadataForCompanion(Companion_45, VOID, [SerializerFactory]);
  initMetadataForClass($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForInterface(SamplingConfiguration, 'SamplingConfiguration');
  initMetadataForClass(BatteryAwareSamplingConfiguration, 'BatteryAwareSamplingConfiguration', VOID, VOID, [SamplingConfiguration], VOID, VOID, {0: Companion_getInstance_46});
  function build(samplingScheme) {
    var configuration = this.l1u();
    // Inline function 'kotlin.require' call
    if (!samplingScheme.isValid(configuration)) {
      var message = 'The configured sampling configuration is invalid for the corresponding sampling scheme.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return configuration;
  }
  initMetadataForInterface(SamplingConfigurationBuilder, 'SamplingConfigurationBuilder');
  initMetadataForClass(BatteryAwareSamplingConfigurationBuilder, 'BatteryAwareSamplingConfigurationBuilder', VOID, VOID, [SamplingConfigurationBuilder]);
  initMetadataForClass(GranularitySamplingScheme, 'GranularitySamplingScheme', VOID, DataTypeSamplingScheme);
  initMetadataForCompanion(Companion_46, VOID, [SerializerFactory]);
  initMetadataForClass(Granularity, 'Granularity', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_47});
  initMetadataForCompanion(Companion_47);
  initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GranularitySamplingConfiguration, 'GranularitySamplingConfiguration', VOID, VOID, [SamplingConfiguration], VOID, VOID, {0: $serializer_getInstance_27});
  initMetadataForClass(GranularitySamplingConfigurationBuilder, 'GranularitySamplingConfigurationBuilder', VOID, VOID, [SamplingConfigurationBuilder]);
  initMetadataForClass(IntervalSamplingScheme, 'IntervalSamplingScheme', VOID, DataTypeSamplingScheme);
  initMetadataForCompanion(Companion_48);
  initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(IntervalSamplingConfiguration, 'IntervalSamplingConfiguration', VOID, VOID, [SamplingConfiguration], VOID, VOID, {0: $serializer_getInstance_28});
  initMetadataForClass(IntervalSamplingConfigurationBuilder, 'IntervalSamplingConfigurationBuilder', VOID, VOID, [SamplingConfigurationBuilder]);
  initMetadataForClass(NoOptionsSamplingScheme, 'NoOptionsSamplingScheme', VOID, DataTypeSamplingScheme);
  initMetadataForObject(NoOptionsSamplingConfiguration, 'NoOptionsSamplingConfiguration', VOID, VOID, [SamplingConfiguration, SerializerFactory], VOID, VOID, {0: NoOptionsSamplingConfiguration_getInstance});
  initMetadataForObject(NoOptionsSamplingConfigurationBuilder, 'NoOptionsSamplingConfigurationBuilder', VOID, VOID, [SamplingConfigurationBuilder]);
  initMetadataForCompanion(Companion_49);
  initMetadataForClass(ApiVersion, 'ApiVersion', VOID, VOID, VOID, VOID, VOID, {0: ApiVersionSerializer_getInstance});
  initMetadataForClass(ApiVersionSerializer$$inlined$createCarpStringPrimitiveSerializer$1, VOID, VOID, StringConversionSerializer);
  initMetadataForObject(ApiVersionSerializer, 'ApiVersionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(ApplicationService, 'ApplicationService');
  initMetadataForCompanion(Companion_50);
  initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForInterface(TaskConfiguration, 'TaskConfiguration');
  initMetadataForClass(BackgroundTask, 'BackgroundTask', VOID, VOID, [TaskConfiguration], VOID, VOID, {0: $serializer_getInstance_29});
  initMetadataForClass(TaskConfigurationBuilder, 'TaskConfigurationBuilder');
  initMetadataForClass(BackgroundTaskBuilder, 'BackgroundTaskBuilder', BackgroundTaskBuilder, TaskConfigurationBuilder);
  initMetadataForCompanion(Companion_51);
  initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CustomProtocolTask, 'CustomProtocolTask', VOID, VOID, [TaskConfiguration], VOID, VOID, {0: $serializer_getInstance_30});
  initMetadataForCompanion(Companion_52);
  initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_53);
  initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Measure, 'Measure', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_55});
  initMetadataForClass(DataStream, 'DataStream', VOID, Measure, VOID, VOID, VOID, {0: $serializer_getInstance_31});
  initMetadataForClass(TriggerData, 'TriggerData', VOID, Measure, VOID, VOID, VOID, {0: $serializer_getInstance_32});
  initMetadataForCompanion(Companion_54, VOID, [SerializerFactory]);
  initMetadataForClass(SupportedTaskConfiguration, 'SupportedTaskConfiguration');
  initMetadataForCompanion(Companion_55);
  initMetadataForClass(UrlVariable, 'UrlVariable', VOID, Enum);
  initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(WebTask, 'WebTask', VOID, VOID, [TaskConfiguration], VOID, VOID, {0: $serializer_getInstance_33});
  initMetadataForClass(WebTaskBuilder, 'WebTaskBuilder', WebTaskBuilder, TaskConfigurationBuilder);
  initMetadataForCompanion(Companion_56);
  initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TriggerConfiguration, 'TriggerConfiguration', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_61});
  initMetadataForClass(ElapsedTimeTrigger, 'ElapsedTimeTrigger', VOID, TriggerConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_34});
  initMetadataForCompanion(Companion_57);
  initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ManualTrigger, 'ManualTrigger', VOID, TriggerConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_35});
  initMetadataForCompanion(Companion_58);
  initMetadataForObject($serializer_37, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ScheduledTrigger, 'ScheduledTrigger', VOID, TriggerConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_36});
  initMetadataForClass(Control, 'Control', VOID, Enum);
  initMetadataForCompanion(Companion_59);
  initMetadataForObject($serializer_38, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TaskControl, 'TaskControl', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_37});
  initMetadataForCompanion(Companion_60, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_61);
  initMetadataForInterface(AccountIdentity, 'AccountIdentity');
  initMetadataForCompanion(Companion_62);
  initMetadataForObject($serializer_39, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EmailAccountIdentity, 'EmailAccountIdentity', VOID, VOID, [AccountIdentity], VOID, VOID, {0: $serializer_getInstance_38});
  initMetadataForCompanion(Companion_63);
  initMetadataForObject($serializer_40, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UsernameAccountIdentity, 'UsernameAccountIdentity', VOID, VOID, [AccountIdentity], VOID, VOID, {0: $serializer_getInstance_39});
  initMetadataForCompanion(Companion_64);
  initMetadataForObject($serializer_41, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AssignedTo, 'AssignedTo', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_66});
  initMetadataForObject(All, 'All', VOID, AssignedTo, [SerializerFactory], VOID, VOID, {0: All_getInstance});
  initMetadataForClass(Roles, 'Roles', VOID, AssignedTo, VOID, VOID, VOID, {0: $serializer_getInstance_40});
  initMetadataForCompanion(Companion_65, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_66);
  initMetadataForObject($serializer_42, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ExpectedParticipantData, 'ExpectedParticipantData', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_41});
  initMetadataForCompanion(Companion_67);
  initMetadataForObject($serializer_43, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_68, VOID, [SerializerFactory]);
  initMetadataForClass($serializer_44, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ParticipantAttribute, 'ParticipantAttribute', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_70});
  initMetadataForClass(DefaultParticipantAttribute, 'DefaultParticipantAttribute', VOID, ParticipantAttribute, VOID, VOID, VOID, {0: $serializer_getInstance_42});
  initMetadataForClass(CustomParticipantAttribute, 'CustomParticipantAttribute', VOID, ParticipantAttribute, VOID, VOID, VOID, {0: Companion_getInstance_69});
  initMetadataForCompanion(Companion_69, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_70);
  initMetadataForObject($serializer_45, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ParticipantRole, 'ParticipantRole', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_43});
  initMetadataForCompanion(Companion_71);
  initMetadataForClass(Username, 'Username', VOID, VOID, VOID, VOID, VOID, {0: UsernameSerializer_getInstance});
  initMetadataForClass(UsernameSerializer$$inlined$createCarpStringPrimitiveSerializer$1, VOID, VOID, StringConversionSerializer);
  initMetadataForObject(UsernameSerializer, 'UsernameSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(AggregateRoot, 'AggregateRoot');
  initMetadataForClass(ExtractUniqueKeyMap, 'ExtractUniqueKeyMap', VOID, VOID, [KtMap]);
  initMetadataForInterface(Snapshot, 'Snapshot');
  initMetadataForClass(ReflectionAvailable, 'ReflectionAvailable');
  initMetadataForClass(ApplicationDataSerializer, 'ApplicationDataSerializer', ApplicationDataSerializer, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(NotSerializable, 'NotSerializable', VOID, VOID, [KSerializer]);
  initMetadataForClass(ignoreTypeParameters$1, VOID, VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicEnumSerializer, 'PolymorphicEnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_72);
  initMetadataForInterface(UnknownPolymorphicWrapper, 'UnknownPolymorphicWrapper');
  initMetadataForClass(CustomData, 'CustomData', VOID, VOID, [Data, UnknownPolymorphicWrapper], VOID, VOID, {0: DataSerializer_getInstance});
  initMetadataForClass(UnknownPolymorphicSerializer, 'UnknownPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(DataSerializer$$inlined$createUnknownPolymorphicSerializer$1, VOID, VOID, UnknownPolymorphicSerializer);
  initMetadataForObject(DataSerializer, 'DataSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_73);
  initMetadataForClass(CustomPrimaryDeviceConfiguration, 'CustomPrimaryDeviceConfiguration', VOID, PrimaryDeviceConfiguration, [UnknownPolymorphicWrapper], VOID, VOID, {0: PrimaryDeviceConfigurationSerializer_getInstance});
  initMetadataForCompanion(Companion_74);
  initMetadataForClass(CustomDeviceConfiguration, 'CustomDeviceConfiguration', VOID, DeviceConfiguration, [UnknownPolymorphicWrapper], VOID, VOID, {0: DeviceConfigurationSerializer_getInstance});
  initMetadataForObject(DeviceConfigurationSerializer, 'DeviceConfigurationSerializer', VOID, UnknownPolymorphicSerializer);
  initMetadataForClass(PrimaryDeviceConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1, VOID, VOID, UnknownPolymorphicSerializer);
  initMetadataForObject(PrimaryDeviceConfigurationSerializer, 'PrimaryDeviceConfigurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_75);
  initMetadataForObject($serializer_46, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BaseMembers, 'BaseMembers', VOID, DeviceRegistration, VOID, VOID, VOID, {0: $serializer_getInstance_44});
  initMetadataForCompanion(Companion_76);
  initMetadataForClass(CustomDeviceRegistration, 'CustomDeviceRegistration', VOID, DeviceRegistration, [UnknownPolymorphicWrapper], VOID, VOID, {0: DeviceRegistrationSerializer_getInstance});
  initMetadataForClass(DeviceRegistrationSerializer$$inlined$createUnknownPolymorphicSerializer$1, VOID, VOID, UnknownPolymorphicSerializer);
  initMetadataForObject(DeviceRegistrationSerializer, 'DeviceRegistrationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_77);
  initMetadataForObject($serializer_47, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BaseMembers_0, 'BaseMembers', VOID, DeviceConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_45});
  initMetadataForCompanion(Companion_78);
  initMetadataForCompanion(Companion_79);
  initMetadataForClass(CustomSamplingConfiguration, 'CustomSamplingConfiguration', VOID, VOID, [SamplingConfiguration, UnknownPolymorphicWrapper], VOID, VOID, {0: SamplingConfigurationSerializer_getInstance});
  initMetadataForClass(SamplingConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1, VOID, VOID, UnknownPolymorphicSerializer);
  initMetadataForObject(SamplingConfigurationSerializer, 'SamplingConfigurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_80);
  initMetadataForObject($serializer_48, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BaseMembers_1, 'BaseMembers', VOID, VOID, [TaskConfiguration], VOID, VOID, {0: $serializer_getInstance_46});
  initMetadataForCompanion(Companion_81);
  initMetadataForClass(CustomTaskConfiguration, 'CustomTaskConfiguration', VOID, VOID, [TaskConfiguration, UnknownPolymorphicWrapper], VOID, VOID, {0: TaskConfigurationSerializer_getInstance});
  initMetadataForClass(TaskConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1, VOID, VOID, UnknownPolymorphicSerializer);
  initMetadataForObject(TaskConfigurationSerializer, 'TaskConfigurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_82);
  initMetadataForObject($serializer_49, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BaseMembers_2, 'BaseMembers', VOID, TriggerConfiguration, VOID, VOID, VOID, {0: $serializer_getInstance_47});
  initMetadataForCompanion(Companion_83);
  initMetadataForClass(CustomTriggerConfiguration, 'CustomTriggerConfiguration', VOID, TriggerConfiguration, [UnknownPolymorphicWrapper], VOID, VOID, {0: TriggerConfigurationSerializer_getInstance});
  initMetadataForClass(TriggerConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1, VOID, VOID, UnknownPolymorphicSerializer);
  initMetadataForObject(TriggerConfigurationSerializer, 'TriggerConfigurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ApplicationServiceRequest, 'ApplicationServiceRequest');
  initMetadataForObject(DefaultUUIDFactory, 'DefaultUUIDFactory');
  initMetadataForObject(Reflection, 'Reflection');
  //endregion
  function Companion() {
  }
  protoOf(Companion).i18 = function () {
    return new ApplicationDataSerializer();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function ApplicationData(data) {
    this.data = data;
  }
  protoOf(ApplicationData).x1h = function () {
    return this.data;
  };
  protoOf(ApplicationData).sd = function () {
    return this.data;
  };
  protoOf(ApplicationData).y1h = function (data) {
    return new ApplicationData(data);
  };
  protoOf(ApplicationData).copy = function (data, $super) {
    data = data === VOID ? this.data : data;
    return $super === VOID ? this.y1h(data) : $super.y1h.call(this, data);
  };
  protoOf(ApplicationData).toString = function () {
    return 'ApplicationData(data=' + this.data + ')';
  };
  protoOf(ApplicationData).hashCode = function () {
    return getStringHashCode(this.data);
  };
  protoOf(ApplicationData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ApplicationData))
      return false;
    if (!(this.data === other.data))
      return false;
    return true;
  };
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function EmailAddress(address) {
    this.address = address;
  }
  protoOf(EmailAddress).z1h = function () {
    return this.address;
  };
  protoOf(EmailAddress).toString = function () {
    return this.address;
  };
  protoOf(EmailAddress).sd = function () {
    return this.address;
  };
  protoOf(EmailAddress).y1h = function (address) {
    return new EmailAddress(address);
  };
  protoOf(EmailAddress).copy = function (address, $super) {
    address = address === VOID ? this.address : address;
    return $super === VOID ? this.y1h(address) : $super.y1h.call(this, address);
  };
  protoOf(EmailAddress).hashCode = function () {
    return getStringHashCode(this.address);
  };
  protoOf(EmailAddress).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmailAddress))
      return false;
    if (!(this.address === other.address))
      return false;
    return true;
  };
  function EmailAddressSerializer$$$delegate_0$lambda(it) {
    return new EmailAddress(it);
  }
  function EmailAddressSerializer$$inlined$createCarpStringPrimitiveSerializer$1($fromString) {
    StringConversionSerializer.call(this, 'dk.cachet.carp.common.' + ensureNotNull(getKClass(EmailAddress).m()), $fromString);
  }
  function EmailAddressSerializer() {
    EmailAddressSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = EmailAddressSerializer$$$delegate_0$lambda;
    tmp.c1i_1 = new EmailAddressSerializer$$inlined$createCarpStringPrimitiveSerializer$1(fromString);
  }
  protoOf(EmailAddressSerializer).mk = function () {
    return this.c1i_1.mk();
  };
  protoOf(EmailAddressSerializer).d1i = function (encoder, value) {
    this.c1i_1.nk(encoder, value);
  };
  protoOf(EmailAddressSerializer).nk = function (encoder, value) {
    return this.d1i(encoder, value instanceof EmailAddress ? value : THROW_CCE());
  };
  protoOf(EmailAddressSerializer).ok = function (decoder) {
    return this.c1i_1.ok(decoder);
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
    this.e1i_1 = map;
    this.f1i_1 = keyOf;
  }
  protoOf(EnumObjectMap).g1i = function () {
    return this.f1i_1;
  };
  protoOf(EnumObjectMap).h1i = function (item) {
    // Inline function 'kotlin.also' call
    var key = this.f1i_1(item);
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.e1i_1;
    // Inline function 'kotlin.require' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).o2(key)) {
      var message = 'An item with the same key is already present.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.e1i_1.k2(key, item);
    return item;
  };
  protoOf(EnumObjectMap).p = function () {
    return this.e1i_1.p();
  };
  protoOf(EnumObjectMap).o2 = function (key) {
    return this.e1i_1.o2(key);
  };
  protoOf(EnumObjectMap).p2 = function (value) {
    return this.e1i_1.p2(value);
  };
  protoOf(EnumObjectMap).q2 = function (key) {
    return this.e1i_1.q2(key);
  };
  protoOf(EnumObjectMap).asJsReadonlyMapView = function () {
    return this.e1i_1.asJsReadonlyMapView();
  };
  protoOf(EnumObjectMap).a1 = function () {
    return this.e1i_1.a1();
  };
  protoOf(EnumObjectMap).m2 = function () {
    return this.e1i_1.m2();
  };
  protoOf(EnumObjectMap).n2 = function () {
    return this.e1i_1.n2();
  };
  protoOf(EnumObjectMap).f1 = function () {
    return this.e1i_1.f1();
  };
  function toEpochMicroseconds(_this__u8e3s4) {
    // Inline function 'kotlin.Long.times' call
    var this_0 = _this__u8e3s4.gh_1;
    var tmp0 = multiply(this_0, fromInt(1000000));
    // Inline function 'kotlin.Long.plus' call
    var other = _this__u8e3s4.hh_1 / 1000 | 0;
    return add(tmp0, fromInt(other));
  }
  function get_MACAddressRegex() {
    _init_properties_MACAddress_kt__8ida7v();
    return MACAddressRegex;
  }
  var MACAddressRegex;
  function Companion_1() {
    this.i1i_1 = 6;
  }
  protoOf(Companion_1).parse = function (address) {
    // Inline function 'kotlin.require' call
    if (!(split(address, charArrayOf([_Char___init__impl__6a9atx(58)])).a1() === 6 || split(address, charArrayOf([_Char___init__impl__6a9atx(45)])).a1() === 6)) {
      var message = 'Invalid MAC address string representation: expected six groups of two hexadecimal digits (upper or lower case), separated by hyphens (-) or colons (:).';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = address.toUpperCase();
    var recommendedFormatting = replace(tmp$ret$2, _Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(45));
    return new MACAddress(recommendedFormatting);
  };
  protoOf(Companion_1).i18 = function () {
    return MACAddressSerializer_getInstance();
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function MACAddress(address) {
    this.address = address;
    // Inline function 'kotlin.require' call
    if (!get_MACAddressRegex().ib(this.address)) {
      var message = 'Invalid MAC address string representation: expected six groups of two upper case hexadecimal digits, separated by hyphens (-).';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(MACAddress).z1h = function () {
    return this.address;
  };
  protoOf(MACAddress).toString = function () {
    return this.address;
  };
  protoOf(MACAddress).sd = function () {
    return this.address;
  };
  protoOf(MACAddress).y1h = function (address) {
    return new MACAddress(address);
  };
  protoOf(MACAddress).copy = function (address, $super) {
    address = address === VOID ? this.address : address;
    return $super === VOID ? this.y1h(address) : $super.y1h.call(this, address);
  };
  protoOf(MACAddress).hashCode = function () {
    return getStringHashCode(this.address);
  };
  protoOf(MACAddress).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MACAddress))
      return false;
    if (!(this.address === other.address))
      return false;
    return true;
  };
  function MACAddressSerializer$$$delegate_0$lambda(it) {
    return new MACAddress(it);
  }
  function MACAddressSerializer$$inlined$createCarpStringPrimitiveSerializer$1($fromString) {
    StringConversionSerializer.call(this, 'dk.cachet.carp.common.' + ensureNotNull(getKClass(MACAddress).m()), $fromString);
  }
  function MACAddressSerializer() {
    MACAddressSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = MACAddressSerializer$$$delegate_0$lambda;
    tmp.j1i_1 = new MACAddressSerializer$$inlined$createCarpStringPrimitiveSerializer$1(fromString);
  }
  protoOf(MACAddressSerializer).mk = function () {
    return this.j1i_1.mk();
  };
  protoOf(MACAddressSerializer).k1i = function (encoder, value) {
    this.j1i_1.nk(encoder, value);
  };
  protoOf(MACAddressSerializer).nk = function (encoder, value) {
    return this.k1i(encoder, value instanceof MACAddress ? value : THROW_CCE());
  };
  protoOf(MACAddressSerializer).ok = function (decoder) {
    return this.j1i_1.ok(decoder);
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
  function Companion_2() {
  }
  protoOf(Companion_2).fromString = function (fullyQualifiedName) {
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = toString(trim(isCharSequence(fullyQualifiedName) ? fullyQualifiedName : THROW_CCE())).toLowerCase();
    var segments = split(tmp$ret$1, charArrayOf([_Char___init__impl__6a9atx(46)]));
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.require' call
    if (!(segments.a1() > 1)) {
      var message = 'A namespace needs to be specified.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var namespace = joinToString(segments.i2(0, segments.a1() - 1 | 0), '.');
    var name = last(segments);
    return new NamespacedId(namespace, name);
  };
  protoOf(Companion_2).i18 = function () {
    return NamespacedIdSerializer_getInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function NamespacedId(namespace, name) {
    this.namespace = namespace;
    this.name = name;
    // Inline function 'kotlin.require' call
    if (!get_namespaceRegex().ib(this.namespace)) {
      var message = 'Invalid namespace representation: expected lowercase alpha-numeric (underscore included) words delimited by dots.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!get_nameRegex().ib(this.name)) {
      var message_0 = 'Invalid name representation: expected a single lowercase alpha-numeric (underscore included) word.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NamespacedId).l1i = function () {
    return this.namespace;
  };
  protoOf(NamespacedId).k = function () {
    return this.name;
  };
  protoOf(NamespacedId).toString = function () {
    return this.namespace + '.' + this.name;
  };
  protoOf(NamespacedId).sd = function () {
    return this.namespace;
  };
  protoOf(NamespacedId).td = function () {
    return this.name;
  };
  protoOf(NamespacedId).m1i = function (namespace, name) {
    return new NamespacedId(namespace, name);
  };
  protoOf(NamespacedId).copy = function (namespace, name, $super) {
    namespace = namespace === VOID ? this.namespace : namespace;
    name = name === VOID ? this.name : name;
    return $super === VOID ? this.m1i(namespace, name) : $super.m1i.call(this, namespace, name);
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
    if (!(this.namespace === other.namespace))
      return false;
    if (!(this.name === other.name))
      return false;
    return true;
  };
  function NamespacedIdSerializer$$$delegate_0$lambda(s) {
    return Companion_instance_3.fromString(s);
  }
  function NamespacedIdSerializer$$inlined$createCarpStringPrimitiveSerializer$1($fromString) {
    StringConversionSerializer.call(this, 'dk.cachet.carp.common.' + ensureNotNull(getKClass(NamespacedId).m()), $fromString);
  }
  function NamespacedIdSerializer() {
    NamespacedIdSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = NamespacedIdSerializer$$$delegate_0$lambda;
    tmp.n1i_1 = new NamespacedIdSerializer$$inlined$createCarpStringPrimitiveSerializer$1(fromString);
  }
  protoOf(NamespacedIdSerializer).mk = function () {
    return this.n1i_1.mk();
  };
  protoOf(NamespacedIdSerializer).o1i = function (encoder, value) {
    this.n1i_1.nk(encoder, value);
  };
  protoOf(NamespacedIdSerializer).nk = function (encoder, value) {
    return this.o1i(encoder, value instanceof NamespacedId ? value : THROW_CCE());
  };
  protoOf(NamespacedIdSerializer).ok = function (decoder) {
    return this.n1i_1.ok(decoder);
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
        THROW_IAE('No enum constant dk.cachet.carp.common.application.RecurrenceRule.Frequency.' + value);
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
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.RecurrenceRule.End.Until', this, 1);
    tmp0_serialDesc.pv('elapsedTime', false);
    this.p1i_1 = tmp0_serialDesc;
  }
  protoOf($serializer).q1i = function (encoder, value) {
    var tmp0_desc = this.p1i_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, DurationSerializer_getInstance(), new Duration(value.elapsedTime));
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer).nk = function (encoder, value) {
    return this.q1i(encoder, value instanceof Until ? value : THROW_CCE());
  };
  protoOf($serializer).ok = function (decoder) {
    var tmp0_desc = this.p1i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xn(tmp0_desc);
    if (tmp5_input.no()) {
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp4_local0;
      var tmp_1 = tmp5_input.jo(tmp0_desc, 0, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp4_local0 = tmp_1 == null ? null : tmp_1.sg_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp4_local0;
            var tmp_4 = tmp5_input.jo(tmp0_desc, 0, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp4_local0 = tmp_4 == null ? null : tmp_4.sg_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return Until_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer).mk = function () {
    return this.p1i_1;
  };
  protoOf($serializer).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DurationSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Until_init_$Init$(seen0, elapsedTime, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance().p1i_1);
    }
    End_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.elapsedTime = elapsedTime;
    return $this;
  }
  function Until_init_$Create$(seen0, elapsedTime, serializationConstructorMarker) {
    return Until_init_$Init$(seen0, elapsedTime, serializationConstructorMarker, objectCreate(protoOf(Until)));
  }
  function Companion_4() {
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.RecurrenceRule.End.Count', this, 1);
    tmp0_serialDesc.pv('count', false);
    this.r1i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).s1i = function (encoder, value) {
    var tmp0_desc = this.r1i_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.hp(tmp0_desc, 0, value.count);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_0).nk = function (encoder, value) {
    return this.s1i(encoder, value instanceof Count ? value : THROW_CCE());
  };
  protoOf($serializer_0).ok = function (decoder) {
    var tmp0_desc = this.r1i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_input = decoder.xn(tmp0_desc);
    if (tmp5_input.no()) {
      tmp4_local0 = tmp5_input.co(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.co(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return Count_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_0).mk = function () {
    return this.r1i_1;
  };
  protoOf($serializer_0).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Count_init_$Init$(seen0, count, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_0().r1i_1);
    }
    End_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.count = count;
    // Inline function 'kotlin.require' call
    if (!($this.count >= 1)) {
      var message = 'Count needs to be 1 or more.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function Count_init_$Create$(seen0, count, serializationConstructorMarker) {
    return Count_init_$Init$(seen0, count, serializationConstructorMarker, objectCreate(protoOf(Count)));
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.t1i_1.s2();
  }
  function RecurrenceRule$End$Never$_anonymous__iky2dw() {
    var tmp = Never_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return ObjectSerializer_init_$Create$('dk.cachet.carp.common.application.RecurrenceRule.End.Never', tmp, tmp$ret$0);
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.u1i_1.s2();
  }
  function RecurrenceRule$End$Companion$_anonymous__f3mbfw() {
    var tmp = getKClass(End);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(Count), getKClass(Never), getKClass(Until)];
    var tmp_1 = $serializer_getInstance_0();
    var tmp_2 = Never_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = [];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = [tmp_1, ObjectSerializer_init_$Create$('dk.cachet.carp.common.application.RecurrenceRule.End.Never', tmp_2, tmp$ret$3), $serializer_getInstance()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$9 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.common.application.RecurrenceRule.End', tmp, tmp_0, tmp_3, tmp$ret$9);
  }
  function Until(elapsedTime) {
    End.call(this);
    this.elapsedTime = elapsedTime;
  }
  protoOf(Until).v1i = function () {
    return this.elapsedTime;
  };
  protoOf(Until).toString = function () {
    return 'UNTIL=' + _Duration___get_inWholeMicroseconds__impl__8oe8vv(this.elapsedTime).toString();
  };
  protoOf(Until).w1i = function () {
    return this.elapsedTime;
  };
  protoOf(Until).x1i = function (elapsedTime) {
    return new Until(elapsedTime);
  };
  protoOf(Until).copy = function (elapsedTime, $super) {
    elapsedTime = elapsedTime === VOID ? this.elapsedTime : elapsedTime;
    return $super === VOID ? this.x1i(elapsedTime) : $super.x1i.call(this, new Duration(elapsedTime));
  };
  protoOf(Until).hashCode = function () {
    return Duration__hashCode_impl_u4exz6(this.elapsedTime);
  };
  protoOf(Until).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Until))
      return false;
    if (!(this.elapsedTime === other.elapsedTime))
      return false;
    return true;
  };
  function Count(count) {
    End.call(this);
    this.count = count;
    // Inline function 'kotlin.require' call
    if (!(this.count >= 1)) {
      var message = 'Count needs to be 1 or more.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(Count).y1i = function () {
    return this.count;
  };
  protoOf(Count).toString = function () {
    return 'COUNT=' + this.count;
  };
  protoOf(Count).sd = function () {
    return this.count;
  };
  protoOf(Count).z1i = function (count) {
    return new Count(count);
  };
  protoOf(Count).copy = function (count, $super) {
    count = count === VOID ? this.count : count;
    return $super === VOID ? this.z1i(count) : $super.z1i.call(this, count);
  };
  protoOf(Count).hashCode = function () {
    return this.count;
  };
  protoOf(Count).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Count))
      return false;
    if (!(this.count === other.count))
      return false;
    return true;
  };
  function Never() {
    Never_instance = this;
    End.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.t1i_1 = lazy(tmp_0, RecurrenceRule$End$Never$_anonymous__iky2dw);
  }
  protoOf(Never).i18 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Never).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Never_instance;
  function Never_getInstance() {
    if (Never_instance == null)
      new Never();
    return Never_instance;
  }
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.u1i_1 = lazy(tmp_0, RecurrenceRule$End$Companion$_anonymous__f3mbfw);
  }
  protoOf(Companion_5).i18 = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_5).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function End_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).a1j = function (interval, end) {
    return new RecurrenceRule(Frequency_SECONDLY_getInstance(), interval, end);
  };
  protoOf(Companion_6).secondly = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return $super === VOID ? this.a1j(interval, end) : $super.a1j.call(this, interval, end);
  };
  protoOf(Companion_6).b1j = function (interval, end) {
    return new RecurrenceRule(Frequency_MINUTELY_getInstance(), interval, end);
  };
  protoOf(Companion_6).minutely = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return $super === VOID ? this.b1j(interval, end) : $super.b1j.call(this, interval, end);
  };
  protoOf(Companion_6).c1j = function (interval, end) {
    return new RecurrenceRule(Frequency_HOURLY_getInstance(), interval, end);
  };
  protoOf(Companion_6).hourly = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return $super === VOID ? this.c1j(interval, end) : $super.c1j.call(this, interval, end);
  };
  protoOf(Companion_6).d1j = function (interval, end) {
    return new RecurrenceRule(Frequency_DAILY_getInstance(), interval, end);
  };
  protoOf(Companion_6).daily = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return $super === VOID ? this.d1j(interval, end) : $super.d1j.call(this, interval, end);
  };
  protoOf(Companion_6).e1j = function (interval, end) {
    return new RecurrenceRule(Frequency_WEEKLY_getInstance(), interval, end);
  };
  protoOf(Companion_6).weekly = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return $super === VOID ? this.e1j(interval, end) : $super.e1j.call(this, interval, end);
  };
  protoOf(Companion_6).f1j = function (interval, end) {
    return new RecurrenceRule(Frequency_MONTHLY_getInstance(), interval, end);
  };
  protoOf(Companion_6).monthly = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return $super === VOID ? this.f1j(interval, end) : $super.f1j.call(this, interval, end);
  };
  protoOf(Companion_6).g1j = function (interval, end) {
    return new RecurrenceRule(Frequency_YEARLY_getInstance(), interval, end);
  };
  protoOf(Companion_6).yearly = function (interval, end, $super) {
    interval = interval === VOID ? 1 : interval;
    end = end === VOID ? Never_getInstance() : end;
    return $super === VOID ? this.g1j(interval, end) : $super.g1j.call(this, interval, end);
  };
  protoOf(Companion_6).fromString = function (rrule) {
    // Inline function 'kotlin.require' call
    if (!get_RecurrenceRuleRegex().ib(rrule)) {
      var message = 'Invalid or unsupported RecurrenceRule string representation.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.associate' call
    var this_0 = split(substring(rrule, 6), charArrayOf([_Char___init__impl__6a9atx(59)]));
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = this_0.r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      var par = split(element, charArrayOf([_Char___init__impl__6a9atx(61)]));
      // Inline function 'kotlin.collections.count' call
      // Inline function 'kotlin.require' call
      if (!(par.a1() === 2)) {
        var message_0 = 'Invalid RRULE parameter format.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(par.b1(0), par.b1(1));
      destination.k2(pair.first, pair.second);
    }
    var parameters = destination;
    var supportedParameters = listOf(['FREQ', 'INTERVAL', 'UNTIL', 'COUNT']);
    var tmp0 = parameters.m2();
    var tmp$ret$9;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$9 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0.r();
      while (_iterator__ex2g4s_0.s()) {
        var element_0 = _iterator__ex2g4s_0.t();
        if (!supportedParameters.o1(element_0)) {
          tmp$ret$9 = false;
          break $l$block_0;
        }
      }
      tmp$ret$9 = true;
    }
    // Inline function 'kotlin.require' call
    if (!tmp$ret$9) {
      var message_1 = 'Invalid or unsupported RRULE parameter found.';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.count' call
    var tmp_0 = distinct(parameters.m2()).a1();
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.require' call
    if (!(tmp_0 === parameters.m2().a1())) {
      var message_2 = 'RRULE does not allow repeating the same parameter multiple times.';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    var tmp0_elvis_lhs = parameters.q2('FREQ');
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
    var _iterator__ex2g4s_1 = parameters.f1().r();
    while (_iterator__ex2g4s_1.s()) {
      var par_0 = _iterator__ex2g4s_1.t();
      switch (par_0.r2()) {
        case 'INTERVAL':
          interval = toInt(par_0.s2());
          break;
        case 'UNTIL':
          Companion_getInstance();
          // Inline function 'kotlin.time.Companion.microseconds' call

          var this_1 = toLong(par_0.s2());
          until = toDuration(this_1, DurationUnit_MICROSECONDS_getInstance());
          break;
        case 'COUNT':
          count = toInt(par_0.s2());
          break;
      }
    }
    var tmp_2;
    var tmp_3 = until;
    if ((tmp_3 == null ? null : new Duration(tmp_3)) == null) {
      tmp_2 = true;
    } else {
      tmp_2 = count == null;
    }
    // Inline function 'kotlin.require' call
    if (!tmp_2) {
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
  protoOf(Companion_6).i18 = function () {
    return RecurrenceRuleSerializer_getInstance();
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function Frequency(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function End() {
    Companion_getInstance_6();
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
    if (!(this.interval >= 1)) {
      var message = 'Interval needs to be 1 or more.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(RecurrenceRule).j1j = function () {
    return this.frequency;
  };
  protoOf(RecurrenceRule).k1j = function () {
    return this.interval;
  };
  protoOf(RecurrenceRule).l1j = function () {
    return this.end;
  };
  protoOf(RecurrenceRule).toString = function () {
    var rule = 'RRULE:FREQ=' + this.frequency.toString();
    if (!(this.interval === 1))
      rule = rule + (';INTERVAL=' + this.interval);
    if (!equals(this.end, Never_getInstance()))
      rule = rule + (';' + toString(this.end));
    return rule;
  };
  protoOf(RecurrenceRule).sd = function () {
    return this.frequency;
  };
  protoOf(RecurrenceRule).td = function () {
    return this.interval;
  };
  protoOf(RecurrenceRule).m1j = function () {
    return this.end;
  };
  protoOf(RecurrenceRule).n1j = function (frequency, interval, end) {
    return new RecurrenceRule(frequency, interval, end);
  };
  protoOf(RecurrenceRule).copy = function (frequency, interval, end, $super) {
    frequency = frequency === VOID ? this.frequency : frequency;
    interval = interval === VOID ? this.interval : interval;
    end = end === VOID ? this.end : end;
    return $super === VOID ? this.n1j(frequency, interval, end) : $super.n1j.call(this, frequency, interval, end);
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
    if (!this.frequency.equals(other.frequency))
      return false;
    if (!(this.interval === other.interval))
      return false;
    if (!equals(this.end, other.end))
      return false;
    return true;
  };
  function RecurrenceRuleSerializer$$$delegate_0$lambda(s) {
    return Companion_instance_7.fromString(s);
  }
  function RecurrenceRuleSerializer$$inlined$createCarpStringPrimitiveSerializer$1($fromString) {
    StringConversionSerializer.call(this, 'dk.cachet.carp.common.' + ensureNotNull(getKClass(RecurrenceRule).m()), $fromString);
  }
  function RecurrenceRuleSerializer() {
    RecurrenceRuleSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = RecurrenceRuleSerializer$$$delegate_0$lambda;
    tmp.o1j_1 = new RecurrenceRuleSerializer$$inlined$createCarpStringPrimitiveSerializer$1(fromString);
  }
  protoOf(RecurrenceRuleSerializer).mk = function () {
    return this.o1j_1.mk();
  };
  protoOf(RecurrenceRuleSerializer).p1j = function (encoder, value) {
    this.o1j_1.nk(encoder, value);
  };
  protoOf(RecurrenceRuleSerializer).nk = function (encoder, value) {
    return this.p1j(encoder, value instanceof RecurrenceRule ? value : THROW_CCE());
  };
  protoOf(RecurrenceRuleSerializer).ok = function (decoder) {
    return this.o1j_1.ok(decoder);
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
  function Companion_7() {
  }
  protoOf(Companion_7).fromString = function (time) {
    // Inline function 'kotlin.require' call
    if (!get_TimeOfDayRegex().ib(time)) {
      var message = 'Invalid TimeOfDay string representation.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var _destruct__k2r9zo = split(time, charArrayOf([_Char___init__impl__6a9atx(58)]));
    // Inline function 'kotlin.collections.component1' call
    var hour = _destruct__k2r9zo.b1(0);
    // Inline function 'kotlin.collections.component2' call
    var minutes = _destruct__k2r9zo.b1(1);
    // Inline function 'kotlin.collections.component3' call
    var seconds = _destruct__k2r9zo.b1(2);
    return new TimeOfDay(toInt(hour), toInt(minutes), toInt(seconds));
  };
  protoOf(Companion_7).i18 = function () {
    return TimeOfDaySerializer_getInstance();
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function TimeOfDay(hour, minutes, seconds) {
    minutes = minutes === VOID ? 0 : minutes;
    seconds = seconds === VOID ? 0 : seconds;
    this.hour = hour;
    this.minutes = minutes;
    this.seconds = seconds;
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
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'The hour needs be between 0 and 23, and minutes and seconds between 0 and 59';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(TimeOfDay).q1j = function () {
    return this.hour;
  };
  protoOf(TimeOfDay).r1j = function () {
    return this.minutes;
  };
  protoOf(TimeOfDay).s1j = function () {
    return this.seconds;
  };
  protoOf(TimeOfDay).toString = function () {
    var hour = padStart(this.hour.toString(), 2, _Char___init__impl__6a9atx(48));
    var minutes = padStart(this.minutes.toString(), 2, _Char___init__impl__6a9atx(48));
    var seconds = padStart(this.seconds.toString(), 2, _Char___init__impl__6a9atx(48));
    return hour + ':' + minutes + ':' + seconds;
  };
  protoOf(TimeOfDay).sd = function () {
    return this.hour;
  };
  protoOf(TimeOfDay).td = function () {
    return this.minutes;
  };
  protoOf(TimeOfDay).m1j = function () {
    return this.seconds;
  };
  protoOf(TimeOfDay).t1j = function (hour, minutes, seconds) {
    return new TimeOfDay(hour, minutes, seconds);
  };
  protoOf(TimeOfDay).copy = function (hour, minutes, seconds, $super) {
    hour = hour === VOID ? this.hour : hour;
    minutes = minutes === VOID ? this.minutes : minutes;
    seconds = seconds === VOID ? this.seconds : seconds;
    return $super === VOID ? this.t1j(hour, minutes, seconds) : $super.t1j.call(this, hour, minutes, seconds);
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
    if (!(this.hour === other.hour))
      return false;
    if (!(this.minutes === other.minutes))
      return false;
    if (!(this.seconds === other.seconds))
      return false;
    return true;
  };
  function TimeOfDaySerializer$$$delegate_0$lambda(s) {
    return Companion_instance_8.fromString(s);
  }
  function TimeOfDaySerializer$$inlined$createCarpStringPrimitiveSerializer$1($fromString) {
    StringConversionSerializer.call(this, 'dk.cachet.carp.common.' + ensureNotNull(getKClass(TimeOfDay).m()), $fromString);
  }
  function TimeOfDaySerializer() {
    TimeOfDaySerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = TimeOfDaySerializer$$$delegate_0$lambda;
    tmp.u1j_1 = new TimeOfDaySerializer$$inlined$createCarpStringPrimitiveSerializer$1(fromString);
  }
  protoOf(TimeOfDaySerializer).mk = function () {
    return this.u1j_1.mk();
  };
  protoOf(TimeOfDaySerializer).v1j = function (encoder, value) {
    this.u1j_1.nk(encoder, value);
  };
  protoOf(TimeOfDaySerializer).nk = function (encoder, value) {
    return this.v1j(encoder, value instanceof TimeOfDay ? value : THROW_CCE());
  };
  protoOf(TimeOfDaySerializer).ok = function (decoder) {
    return this.u1j_1.ok(decoder);
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
        THROW_IAE('No enum constant dk.cachet.carp.common.application.Trilean.' + value);
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
  function Companion_8() {
  }
  protoOf(Companion_8).parse = function (uuid) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = uuid.toLowerCase();
    return new UUID(tmp$ret$0);
  };
  protoOf(Companion_8).randomUUID = function () {
    return DefaultUUIDFactory_instance.z1j();
  };
  protoOf(Companion_8).i18 = function () {
    return UUIDSerializer_getInstance();
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function UUID(stringRepresentation) {
    this.stringRepresentation = stringRepresentation;
    // Inline function 'kotlin.require' call
    if (!get_UUIDRegex().ib(this.stringRepresentation)) {
      var message = 'Invalid UUID string representation.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UUID).a1k = function () {
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
  function UUIDSerializer$$inlined$createCarpStringPrimitiveSerializer$1($fromString) {
    StringConversionSerializer.call(this, 'dk.cachet.carp.common.' + ensureNotNull(getKClass(UUID).m()), $fromString);
  }
  function UUIDSerializer() {
    UUIDSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = UUIDSerializer$$$delegate_0$lambda;
    tmp.b1k_1 = new UUIDSerializer$$inlined$createCarpStringPrimitiveSerializer$1(fromString);
  }
  protoOf(UUIDSerializer).mk = function () {
    return this.b1k_1.mk();
  };
  protoOf(UUIDSerializer).c1k = function (encoder, value) {
    this.b1k_1.nk(encoder, value);
  };
  protoOf(UUIDSerializer).nk = function (encoder, value) {
    return this.c1k(encoder, value instanceof UUID ? value : THROW_CCE());
  };
  protoOf(UUIDSerializer).ok = function (decoder) {
    return this.b1k_1.ok(decoder);
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
  function Acceleration$Companion$$childSerializers$_anonymous__t43dey() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.d1k_1 = [null, null, null, lazy(tmp_0, Acceleration$Companion$$childSerializers$_anonymous__t43dey)];
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.acceleration', this, 4);
    tmp0_serialDesc.pv('x', false);
    tmp0_serialDesc.pv('y', false);
    tmp0_serialDesc.pv('z', false);
    tmp0_serialDesc.pv('sensorSpecificData', true);
    this.e1k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).f1k = function (encoder, value) {
    var tmp0_desc = this.e1k_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().d1k_1;
    tmp1_output.kp(tmp0_desc, 0, value.x);
    tmp1_output.kp(tmp0_desc, 1, value.y);
    tmp1_output.kp(tmp0_desc, 2, value.z);
    if (tmp1_output.up(tmp0_desc, 3) ? true : !(value.g1k_1 == null)) {
      tmp1_output.qp(tmp0_desc, 3, tmp2_cached[3].s2(), value.g1k_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_1).nk = function (encoder, value) {
    return this.f1k(encoder, value instanceof Acceleration ? value : THROW_CCE());
  };
  protoOf($serializer_1).ok = function (decoder) {
    var tmp0_desc = this.e1k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_10().d1k_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.fo(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.fo(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.fo(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, tmp9_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.fo(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.fo(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.fo(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, tmp9_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return Acceleration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_1).mk = function () {
    return this.e1k_1;
  };
  protoOf($serializer_1).ew = function () {
    var tmp0_cached = Companion_getInstance_10().d1k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(tmp0_cached[3].s2())];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Acceleration_init_$Init$(seen0, x, y, z, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_1().e1k_1);
    }
    $this.x = x;
    $this.y = y;
    $this.z = z;
    if (0 === (seen0 & 8))
      $this.g1k_1 = null;
    else
      $this.g1k_1 = sensorSpecificData;
    return $this;
  }
  function Acceleration_init_$Create$(seen0, x, y, z, sensorSpecificData, serializationConstructorMarker) {
    return Acceleration_init_$Init$(seen0, x, y, z, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(Acceleration)));
  }
  function Acceleration(x, y, z, sensorSpecificData) {
    Companion_getInstance_10();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.x = x;
    this.y = y;
    this.z = z;
    this.g1k_1 = sensorSpecificData;
  }
  protoOf(Acceleration).h1k = function () {
    return this.x;
  };
  protoOf(Acceleration).i1k = function () {
    return this.y;
  };
  protoOf(Acceleration).j1k = function () {
    return this.z;
  };
  protoOf(Acceleration).k1k = function () {
    return this.g1k_1;
  };
  protoOf(Acceleration).sd = function () {
    return this.x;
  };
  protoOf(Acceleration).td = function () {
    return this.y;
  };
  protoOf(Acceleration).m1j = function () {
    return this.z;
  };
  protoOf(Acceleration).l1k = function () {
    return this.g1k_1;
  };
  protoOf(Acceleration).m1k = function (x, y, z, sensorSpecificData) {
    return new Acceleration(x, y, z, sensorSpecificData);
  };
  protoOf(Acceleration).copy = function (x, y, z, sensorSpecificData, $super) {
    x = x === VOID ? this.x : x;
    y = y === VOID ? this.y : y;
    z = z === VOID ? this.z : z;
    sensorSpecificData = sensorSpecificData === VOID ? this.g1k_1 : sensorSpecificData;
    return $super === VOID ? this.m1k(x, y, z, sensorSpecificData) : $super.m1k.call(this, x, y, z, sensorSpecificData);
  };
  protoOf(Acceleration).toString = function () {
    return 'Acceleration(x=' + this.x + ', y=' + this.y + ', z=' + this.z + ', sensorSpecificData=' + toString_0(this.g1k_1) + ')';
  };
  protoOf(Acceleration).hashCode = function () {
    var result = getNumberHashCode(this.x);
    result = imul(result, 31) + getNumberHashCode(this.y) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z) | 0;
    result = imul(result, 31) + (this.g1k_1 == null ? 0 : hashCode(this.g1k_1)) | 0;
    return result;
  };
  protoOf(Acceleration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Acceleration))
      return false;
    if (!equals(this.x, other.x))
      return false;
    if (!equals(this.y, other.y))
      return false;
    if (!equals(this.z, other.z))
      return false;
    if (!equals(this.g1k_1, other.g1k_1))
      return false;
    return true;
  };
  function AngularVelocity$Companion$$childSerializers$_anonymous__kb69v9() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n1k_1 = [null, null, null, lazy(tmp_0, AngularVelocity$Companion$$childSerializers$_anonymous__kb69v9)];
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.angularvelocity', this, 4);
    tmp0_serialDesc.pv('x', false);
    tmp0_serialDesc.pv('y', false);
    tmp0_serialDesc.pv('z', false);
    tmp0_serialDesc.pv('sensorSpecificData', true);
    this.o1k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).p1k = function (encoder, value) {
    var tmp0_desc = this.o1k_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().n1k_1;
    tmp1_output.kp(tmp0_desc, 0, value.x);
    tmp1_output.kp(tmp0_desc, 1, value.y);
    tmp1_output.kp(tmp0_desc, 2, value.z);
    if (tmp1_output.up(tmp0_desc, 3) ? true : !(value.q1k_1 == null)) {
      tmp1_output.qp(tmp0_desc, 3, tmp2_cached[3].s2(), value.q1k_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_2).nk = function (encoder, value) {
    return this.p1k(encoder, value instanceof AngularVelocity ? value : THROW_CCE());
  };
  protoOf($serializer_2).ok = function (decoder) {
    var tmp0_desc = this.o1k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_11().n1k_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.fo(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.fo(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.fo(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, tmp9_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.fo(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.fo(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.fo(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, tmp9_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return AngularVelocity_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).mk = function () {
    return this.o1k_1;
  };
  protoOf($serializer_2).ew = function () {
    var tmp0_cached = Companion_getInstance_11().n1k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(tmp0_cached[3].s2())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function AngularVelocity_init_$Init$(seen0, x, y, z, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_2().o1k_1);
    }
    $this.x = x;
    $this.y = y;
    $this.z = z;
    if (0 === (seen0 & 8))
      $this.q1k_1 = null;
    else
      $this.q1k_1 = sensorSpecificData;
    return $this;
  }
  function AngularVelocity_init_$Create$(seen0, x, y, z, sensorSpecificData, serializationConstructorMarker) {
    return AngularVelocity_init_$Init$(seen0, x, y, z, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(AngularVelocity)));
  }
  function AngularVelocity(x, y, z, sensorSpecificData) {
    Companion_getInstance_11();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.x = x;
    this.y = y;
    this.z = z;
    this.q1k_1 = sensorSpecificData;
  }
  protoOf(AngularVelocity).h1k = function () {
    return this.x;
  };
  protoOf(AngularVelocity).i1k = function () {
    return this.y;
  };
  protoOf(AngularVelocity).j1k = function () {
    return this.z;
  };
  protoOf(AngularVelocity).k1k = function () {
    return this.q1k_1;
  };
  protoOf(AngularVelocity).sd = function () {
    return this.x;
  };
  protoOf(AngularVelocity).td = function () {
    return this.y;
  };
  protoOf(AngularVelocity).m1j = function () {
    return this.z;
  };
  protoOf(AngularVelocity).l1k = function () {
    return this.q1k_1;
  };
  protoOf(AngularVelocity).m1k = function (x, y, z, sensorSpecificData) {
    return new AngularVelocity(x, y, z, sensorSpecificData);
  };
  protoOf(AngularVelocity).copy = function (x, y, z, sensorSpecificData, $super) {
    x = x === VOID ? this.x : x;
    y = y === VOID ? this.y : y;
    z = z === VOID ? this.z : z;
    sensorSpecificData = sensorSpecificData === VOID ? this.q1k_1 : sensorSpecificData;
    return $super === VOID ? this.m1k(x, y, z, sensorSpecificData) : $super.m1k.call(this, x, y, z, sensorSpecificData);
  };
  protoOf(AngularVelocity).toString = function () {
    return 'AngularVelocity(x=' + this.x + ', y=' + this.y + ', z=' + this.z + ', sensorSpecificData=' + toString_0(this.q1k_1) + ')';
  };
  protoOf(AngularVelocity).hashCode = function () {
    var result = getNumberHashCode(this.x);
    result = imul(result, 31) + getNumberHashCode(this.y) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z) | 0;
    result = imul(result, 31) + (this.q1k_1 == null ? 0 : hashCode(this.q1k_1)) | 0;
    return result;
  };
  protoOf(AngularVelocity).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AngularVelocity))
      return false;
    if (!equals(this.x, other.x))
      return false;
    if (!equals(this.y, other.y))
      return false;
    if (!equals(this.z, other.z))
      return false;
    if (!equals(this.q1k_1, other.q1k_1))
      return false;
    return true;
  };
  function CarpDataTypes() {
    CarpDataTypes_instance = this;
    DataTypeMetaDataMap.call(this);
    this.CARP_NAMESPACE = 'dk.cachet.carp';
    this.t1k_1 = 'dk.cachet.carp.geolocation';
    this.GEOLOCATION = this.add('dk.cachet.carp.geolocation', 'Geolocation', DataTimeType_POINT_getInstance());
    this.u1k_1 = 'dk.cachet.carp.stepcount';
    this.STEP_COUNT = this.add('dk.cachet.carp.stepcount', 'Step count', DataTimeType_TIME_SPAN_getInstance());
    this.v1k_1 = 'dk.cachet.carp.ecg';
    this.ECG = this.add('dk.cachet.carp.ecg', 'Electrocardiography (ECG)', DataTimeType_POINT_getInstance());
    this.w1k_1 = 'dk.cachet.carp.ppg';
    this.PPG = this.add('dk.cachet.carp.ppg', 'Photoplethysmography (PPG)', DataTimeType_POINT_getInstance());
    this.x1k_1 = 'dk.cachet.carp.heartrate';
    this.HEART_RATE = this.add('dk.cachet.carp.heartrate', 'Heart rate', DataTimeType_POINT_getInstance());
    this.y1k_1 = 'dk.cachet.carp.interbeatinterval';
    this.INTERBEAT_INTERVAL = this.add('dk.cachet.carp.interbeatinterval', 'Interbeat interval', DataTimeType_TIME_SPAN_getInstance());
    this.z1k_1 = 'dk.cachet.carp.sensorskincontact';
    this.SENSOR_SKIN_CONTACT = this.add('dk.cachet.carp.sensorskincontact', 'Sensor skin contact', DataTimeType_POINT_getInstance());
    this.a1l_1 = 'dk.cachet.carp.nongravitationalacceleration';
    this.NON_GRAVITATIONAL_ACCELERATION = this.add('dk.cachet.carp.nongravitationalacceleration', 'Acceleration without gravity', DataTimeType_POINT_getInstance());
    this.b1l_1 = 'dk.cachet.carp.eda';
    this.EDA = this.add('dk.cachet.carp.eda', 'Electrodermal activity', DataTimeType_POINT_getInstance());
    this.c1l_1 = 'dk.cachet.carp.acceleration';
    this.ACCELERATION = this.add('dk.cachet.carp.acceleration', 'Acceleration including gravity', DataTimeType_POINT_getInstance());
    this.d1l_1 = 'dk.cachet.carp.angularvelocity';
    this.ANGULAR_VELOCITY = this.add('dk.cachet.carp.angularvelocity', 'Angular velocity', DataTimeType_POINT_getInstance());
    this.e1l_1 = 'dk.cachet.carp.signalstrength';
    this.SIGNAL_STRENGTH = this.add('dk.cachet.carp.signalstrength', 'Signal strength', DataTimeType_POINT_getInstance());
    this.f1l_1 = 'dk.cachet.carp.triggeredtask';
    this.TRIGGERED_TASK = this.add('dk.cachet.carp.triggeredtask', 'Triggered task', DataTimeType_POINT_getInstance());
    this.g1l_1 = 'dk.cachet.carp.completedtask';
    this.COMPLETED_TASK = this.add('dk.cachet.carp.completedtask', 'Completed task', DataTimeType_TIME_SPAN_getInstance());
  }
  protoOf(CarpDataTypes).h1l = function () {
    return this.CARP_NAMESPACE;
  };
  protoOf(CarpDataTypes).i1l = function () {
    return this.t1k_1;
  };
  protoOf(CarpDataTypes).j1l = function () {
    return this.GEOLOCATION;
  };
  protoOf(CarpDataTypes).k1l = function () {
    return this.u1k_1;
  };
  protoOf(CarpDataTypes).l1l = function () {
    return this.STEP_COUNT;
  };
  protoOf(CarpDataTypes).m1l = function () {
    return this.v1k_1;
  };
  protoOf(CarpDataTypes).n1l = function () {
    return this.ECG;
  };
  protoOf(CarpDataTypes).o1l = function () {
    return this.w1k_1;
  };
  protoOf(CarpDataTypes).p1l = function () {
    return this.PPG;
  };
  protoOf(CarpDataTypes).q1l = function () {
    return this.x1k_1;
  };
  protoOf(CarpDataTypes).r1l = function () {
    return this.HEART_RATE;
  };
  protoOf(CarpDataTypes).s1l = function () {
    return this.y1k_1;
  };
  protoOf(CarpDataTypes).t1l = function () {
    return this.INTERBEAT_INTERVAL;
  };
  protoOf(CarpDataTypes).u1l = function () {
    return this.z1k_1;
  };
  protoOf(CarpDataTypes).v1l = function () {
    return this.SENSOR_SKIN_CONTACT;
  };
  protoOf(CarpDataTypes).w1l = function () {
    return this.a1l_1;
  };
  protoOf(CarpDataTypes).x1l = function () {
    return this.NON_GRAVITATIONAL_ACCELERATION;
  };
  protoOf(CarpDataTypes).y1l = function () {
    return this.b1l_1;
  };
  protoOf(CarpDataTypes).z1l = function () {
    return this.EDA;
  };
  protoOf(CarpDataTypes).a1m = function () {
    return this.c1l_1;
  };
  protoOf(CarpDataTypes).b1m = function () {
    return this.ACCELERATION;
  };
  protoOf(CarpDataTypes).c1m = function () {
    return this.d1l_1;
  };
  protoOf(CarpDataTypes).d1m = function () {
    return this.ANGULAR_VELOCITY;
  };
  protoOf(CarpDataTypes).e1m = function () {
    return this.e1l_1;
  };
  protoOf(CarpDataTypes).f1m = function () {
    return this.SIGNAL_STRENGTH;
  };
  protoOf(CarpDataTypes).g1m = function () {
    return this.f1l_1;
  };
  protoOf(CarpDataTypes).h1m = function () {
    return this.TRIGGERED_TASK;
  };
  protoOf(CarpDataTypes).i1m = function () {
    return this.g1l_1;
  };
  protoOf(CarpDataTypes).j1m = function () {
    return this.COMPLETED_TASK;
  };
  var CarpDataTypes_instance;
  function CarpDataTypes_getInstance() {
    if (CarpDataTypes_instance == null)
      new CarpDataTypes();
    return CarpDataTypes_instance;
  }
  function CompletedTask$Companion$$childSerializers$_anonymous__my3oxy() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_11() {
    Companion_instance_12 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k1m_1 = [null, lazy(tmp_0, CompletedTask$Companion$$childSerializers$_anonymous__my3oxy)];
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.completedtask', this, 2);
    tmp0_serialDesc.pv('taskName', false);
    tmp0_serialDesc.pv('taskData', true);
    this.l1m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).m1m = function (encoder, value) {
    var tmp0_desc = this.l1m_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().k1m_1;
    tmp1_output.mp(tmp0_desc, 0, value.taskName);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.taskData == null)) {
      tmp1_output.qp(tmp0_desc, 1, tmp2_cached[1].s2(), value.taskData);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_3).nk = function (encoder, value) {
    return this.m1m(encoder, value instanceof CompletedTask ? value : THROW_CCE());
  };
  protoOf($serializer_3).ok = function (decoder) {
    var tmp0_desc = this.l1m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_12().k1m_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.ho(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.ho(tmp0_desc, 0);
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
    return CompletedTask_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).mk = function () {
    return this.l1m_1;
  };
  protoOf($serializer_3).ew = function () {
    var tmp0_cached = Companion_getInstance_12().k1m_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(tmp0_cached[1].s2())];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function CompletedTask_init_$Init$(seen0, taskName, taskData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_3().l1m_1);
    }
    $this.taskName = taskName;
    if (0 === (seen0 & 2))
      $this.taskData = null;
    else
      $this.taskData = taskData;
    return $this;
  }
  function CompletedTask_init_$Create$(seen0, taskName, taskData, serializationConstructorMarker) {
    return CompletedTask_init_$Init$(seen0, taskName, taskData, serializationConstructorMarker, objectCreate(protoOf(CompletedTask)));
  }
  function CompletedTask(taskName, taskData) {
    Companion_getInstance_12();
    taskData = taskData === VOID ? null : taskData;
    this.taskName = taskName;
    this.taskData = taskData;
  }
  protoOf(CompletedTask).n1m = function () {
    return this.taskName;
  };
  protoOf(CompletedTask).o1m = function () {
    return this.taskData;
  };
  protoOf(CompletedTask).sd = function () {
    return this.taskName;
  };
  protoOf(CompletedTask).td = function () {
    return this.taskData;
  };
  protoOf(CompletedTask).p1m = function (taskName, taskData) {
    return new CompletedTask(taskName, taskData);
  };
  protoOf(CompletedTask).copy = function (taskName, taskData, $super) {
    taskName = taskName === VOID ? this.taskName : taskName;
    taskData = taskData === VOID ? this.taskData : taskData;
    return $super === VOID ? this.p1m(taskName, taskData) : $super.p1m.call(this, taskName, taskData);
  };
  protoOf(CompletedTask).toString = function () {
    return 'CompletedTask(taskName=' + this.taskName + ', taskData=' + toString_0(this.taskData) + ')';
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
    if (!(this.taskName === other.taskName))
      return false;
    if (!equals(this.taskData, other.taskData))
      return false;
    return true;
  };
  function Data() {
  }
  function SensorData() {
  }
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.q1m_1.s2();
  }
  function NoData$_anonymous__smq75g() {
    var tmp = NoData_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return ObjectSerializer_init_$Create$('dk.cachet.carp.common.application.data.NoData', tmp, tmp$ret$0);
  }
  function NoData() {
    NoData_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.q1m_1 = lazy(tmp_0, NoData$_anonymous__smq75g);
  }
  protoOf(NoData).i18 = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(NoData).pw = function (typeParamsSerializers) {
    return this.i18();
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
  protoOf(DataTypeMetaData).r1m = function () {
    return this.type;
  };
  protoOf(DataTypeMetaData).s1m = function () {
    return this.displayName;
  };
  protoOf(DataTypeMetaData).t1m = function () {
    return this.timeType;
  };
  protoOf(DataTypeMetaData).sd = function () {
    return this.type;
  };
  protoOf(DataTypeMetaData).td = function () {
    return this.displayName;
  };
  protoOf(DataTypeMetaData).m1j = function () {
    return this.timeType;
  };
  protoOf(DataTypeMetaData).u1m = function (type, displayName, timeType) {
    return new DataTypeMetaData(type, displayName, timeType);
  };
  protoOf(DataTypeMetaData).copy = function (type, displayName, timeType, $super) {
    type = type === VOID ? this.type : type;
    displayName = displayName === VOID ? this.displayName : displayName;
    timeType = timeType === VOID ? this.timeType : timeType;
    return $super === VOID ? this.u1m(type, displayName, timeType) : $super.u1m.call(this, type, displayName, timeType);
  };
  protoOf(DataTypeMetaData).toString = function () {
    return 'DataTypeMetaData(type=' + this.type.toString() + ', displayName=' + this.displayName + ', timeType=' + this.timeType.toString() + ')';
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
    if (!this.type.equals(other.type))
      return false;
    if (!(this.displayName === other.displayName))
      return false;
    if (!this.timeType.equals(other.timeType))
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
        THROW_IAE('No enum constant dk.cachet.carp.common.application.data.DataTimeType.' + value);
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
    return protoOf(EnumObjectMap).h1i.call(this, new DataTypeMetaData(Companion_instance_3.fromString(fullyQualifiedName), displayName, timeType));
  };
  function ECG$Companion$$childSerializers$_anonymous__rl78db() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_12() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x1m_1 = [null, lazy(tmp_0, ECG$Companion$$childSerializers$_anonymous__rl78db)];
  }
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.ecg', this, 2);
    tmp0_serialDesc.pv('milliVolt', false);
    tmp0_serialDesc.pv('sensorSpecificData', true);
    this.y1m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).z1m = function (encoder, value) {
    var tmp0_desc = this.y1m_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().x1m_1;
    tmp1_output.kp(tmp0_desc, 0, value.milliVolt);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.a1n_1 == null)) {
      tmp1_output.qp(tmp0_desc, 1, tmp2_cached[1].s2(), value.a1n_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_4).nk = function (encoder, value) {
    return this.z1m(encoder, value instanceof ECG ? value : THROW_CCE());
  };
  protoOf($serializer_4).ok = function (decoder) {
    var tmp0_desc = this.y1m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_13().x1m_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.fo(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.fo(tmp0_desc, 0);
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
    return ECG_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).mk = function () {
    return this.y1m_1;
  };
  protoOf($serializer_4).ew = function () {
    var tmp0_cached = Companion_getInstance_13().x1m_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), get_nullable(tmp0_cached[1].s2())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function ECG_init_$Init$(seen0, milliVolt, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_4().y1m_1);
    }
    $this.milliVolt = milliVolt;
    if (0 === (seen0 & 2))
      $this.a1n_1 = null;
    else
      $this.a1n_1 = sensorSpecificData;
    return $this;
  }
  function ECG_init_$Create$(seen0, milliVolt, sensorSpecificData, serializationConstructorMarker) {
    return ECG_init_$Init$(seen0, milliVolt, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(ECG)));
  }
  function ECG(milliVolt, sensorSpecificData) {
    Companion_getInstance_13();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.milliVolt = milliVolt;
    this.a1n_1 = sensorSpecificData;
  }
  protoOf(ECG).b1n = function () {
    return this.milliVolt;
  };
  protoOf(ECG).k1k = function () {
    return this.a1n_1;
  };
  protoOf(ECG).sd = function () {
    return this.milliVolt;
  };
  protoOf(ECG).td = function () {
    return this.a1n_1;
  };
  protoOf(ECG).c1n = function (milliVolt, sensorSpecificData) {
    return new ECG(milliVolt, sensorSpecificData);
  };
  protoOf(ECG).copy = function (milliVolt, sensorSpecificData, $super) {
    milliVolt = milliVolt === VOID ? this.milliVolt : milliVolt;
    sensorSpecificData = sensorSpecificData === VOID ? this.a1n_1 : sensorSpecificData;
    return $super === VOID ? this.c1n(milliVolt, sensorSpecificData) : $super.c1n.call(this, milliVolt, sensorSpecificData);
  };
  protoOf(ECG).toString = function () {
    return 'ECG(milliVolt=' + this.milliVolt + ', sensorSpecificData=' + toString_0(this.a1n_1) + ')';
  };
  protoOf(ECG).hashCode = function () {
    var result = getNumberHashCode(this.milliVolt);
    result = imul(result, 31) + (this.a1n_1 == null ? 0 : hashCode(this.a1n_1)) | 0;
    return result;
  };
  protoOf(ECG).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ECG))
      return false;
    if (!equals(this.milliVolt, other.milliVolt))
      return false;
    if (!equals(this.a1n_1, other.a1n_1))
      return false;
    return true;
  };
  function EDA$Companion$$childSerializers$_anonymous__8mdw6w() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_13() {
    Companion_instance_14 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.d1n_1 = [null, lazy(tmp_0, EDA$Companion$$childSerializers$_anonymous__8mdw6w)];
  }
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.eda', this, 2);
    tmp0_serialDesc.pv('microSiemens', false);
    tmp0_serialDesc.pv('sensorSpecificData', true);
    this.e1n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).f1n = function (encoder, value) {
    var tmp0_desc = this.e1n_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().d1n_1;
    tmp1_output.kp(tmp0_desc, 0, value.microSiemens);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.g1n_1 == null)) {
      tmp1_output.qp(tmp0_desc, 1, tmp2_cached[1].s2(), value.g1n_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_5).nk = function (encoder, value) {
    return this.f1n(encoder, value instanceof EDA ? value : THROW_CCE());
  };
  protoOf($serializer_5).ok = function (decoder) {
    var tmp0_desc = this.e1n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_14().d1n_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.fo(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.fo(tmp0_desc, 0);
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
    return EDA_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_5).mk = function () {
    return this.e1n_1;
  };
  protoOf($serializer_5).ew = function () {
    var tmp0_cached = Companion_getInstance_14().d1n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), get_nullable(tmp0_cached[1].s2())];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function EDA_init_$Init$(seen0, microSiemens, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_5().e1n_1);
    }
    $this.microSiemens = microSiemens;
    if (0 === (seen0 & 2))
      $this.g1n_1 = null;
    else
      $this.g1n_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    if (!($this.microSiemens >= 0)) {
      var message = 'EDA conductance in microsiemens needs to be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function EDA_init_$Create$(seen0, microSiemens, sensorSpecificData, serializationConstructorMarker) {
    return EDA_init_$Init$(seen0, microSiemens, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(EDA)));
  }
  function EDA(microSiemens, sensorSpecificData) {
    Companion_getInstance_14();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.microSiemens = microSiemens;
    this.g1n_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    if (!(this.microSiemens >= 0)) {
      var message = 'EDA conductance in microsiemens needs to be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(EDA).h1n = function () {
    return this.microSiemens;
  };
  protoOf(EDA).k1k = function () {
    return this.g1n_1;
  };
  protoOf(EDA).sd = function () {
    return this.microSiemens;
  };
  protoOf(EDA).td = function () {
    return this.g1n_1;
  };
  protoOf(EDA).c1n = function (microSiemens, sensorSpecificData) {
    return new EDA(microSiemens, sensorSpecificData);
  };
  protoOf(EDA).copy = function (microSiemens, sensorSpecificData, $super) {
    microSiemens = microSiemens === VOID ? this.microSiemens : microSiemens;
    sensorSpecificData = sensorSpecificData === VOID ? this.g1n_1 : sensorSpecificData;
    return $super === VOID ? this.c1n(microSiemens, sensorSpecificData) : $super.c1n.call(this, microSiemens, sensorSpecificData);
  };
  protoOf(EDA).toString = function () {
    return 'EDA(microSiemens=' + this.microSiemens + ', sensorSpecificData=' + toString_0(this.g1n_1) + ')';
  };
  protoOf(EDA).hashCode = function () {
    var result = getNumberHashCode(this.microSiemens);
    result = imul(result, 31) + (this.g1n_1 == null ? 0 : hashCode(this.g1n_1)) | 0;
    return result;
  };
  protoOf(EDA).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EDA))
      return false;
    if (!equals(this.microSiemens, other.microSiemens))
      return false;
    if (!equals(this.g1n_1, other.g1n_1))
      return false;
    return true;
  };
  function Geolocation$Companion$$childSerializers$_anonymous__awtjmk() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_14() {
    Companion_instance_15 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i1n_1 = [null, null, lazy(tmp_0, Geolocation$Companion$$childSerializers$_anonymous__awtjmk)];
    this.MIN_LATITUDE = -90.0;
    this.MAX_LATITUDE = 90.0;
    this.MIN_LONGITUDE = -180.0;
    this.MAX_LONGITUDE = 180.0;
  }
  protoOf(Companion_14).j1n = function () {
    return this.MIN_LATITUDE;
  };
  protoOf(Companion_14).k1n = function () {
    return this.MAX_LATITUDE;
  };
  protoOf(Companion_14).l1n = function () {
    return this.MIN_LONGITUDE;
  };
  protoOf(Companion_14).m1n = function () {
    return this.MAX_LONGITUDE;
  };
  protoOf(Companion_14).i18 = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_14();
    return Companion_instance_15;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.geolocation', this, 3);
    tmp0_serialDesc.pv('latitude', false);
    tmp0_serialDesc.pv('longitude', false);
    tmp0_serialDesc.pv('sensorSpecificData', true);
    this.n1n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).o1n = function (encoder, value) {
    var tmp0_desc = this.n1n_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().i1n_1;
    tmp1_output.kp(tmp0_desc, 0, value.latitude);
    tmp1_output.kp(tmp0_desc, 1, value.longitude);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.p1n_1 == null)) {
      tmp1_output.qp(tmp0_desc, 2, tmp2_cached[2].s2(), value.p1n_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_6).nk = function (encoder, value) {
    return this.o1n(encoder, value instanceof Geolocation ? value : THROW_CCE());
  };
  protoOf($serializer_6).ok = function (decoder) {
    var tmp0_desc = this.n1n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_15().i1n_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.fo(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.fo(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.fo(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.fo(tmp0_desc, 1);
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
    return Geolocation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).mk = function () {
    return this.n1n_1;
  };
  protoOf($serializer_6).ew = function () {
    var tmp0_cached = Companion_getInstance_15().i1n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(tmp0_cached[2].s2())];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function Geolocation_init_$Init$(seen0, latitude, longitude, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_6().n1n_1);
    }
    $this.latitude = latitude;
    $this.longitude = longitude;
    if (0 === (seen0 & 4))
      $this.p1n_1 = null;
    else
      $this.p1n_1 = sensorSpecificData;
    var containsArg = $this.latitude;
    // Inline function 'kotlin.require' call
    if (!(-90.0 <= containsArg ? containsArg <= 90.0 : false)) {
      var message = 'Latitude needs to lie between -90 and 90 decimal degrees.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsArg_0 = $this.longitude;
    // Inline function 'kotlin.require' call
    if (!(-180.0 <= containsArg_0 ? containsArg_0 <= 180.0 : false)) {
      var message_0 = 'Longitude needs to lie between -180 and 180 decimal degrees.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return $this;
  }
  function Geolocation_init_$Create$(seen0, latitude, longitude, sensorSpecificData, serializationConstructorMarker) {
    return Geolocation_init_$Init$(seen0, latitude, longitude, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(Geolocation)));
  }
  function Geolocation(latitude, longitude, sensorSpecificData) {
    Companion_getInstance_15();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.latitude = latitude;
    this.longitude = longitude;
    this.p1n_1 = sensorSpecificData;
    var containsArg = this.latitude;
    // Inline function 'kotlin.require' call
    if (!(-90.0 <= containsArg ? containsArg <= 90.0 : false)) {
      var message = 'Latitude needs to lie between -90 and 90 decimal degrees.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsArg_0 = this.longitude;
    // Inline function 'kotlin.require' call
    if (!(-180.0 <= containsArg_0 ? containsArg_0 <= 180.0 : false)) {
      var message_0 = 'Longitude needs to lie between -180 and 180 decimal degrees.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(Geolocation).q1n = function () {
    return this.latitude;
  };
  protoOf(Geolocation).r1n = function () {
    return this.longitude;
  };
  protoOf(Geolocation).k1k = function () {
    return this.p1n_1;
  };
  protoOf(Geolocation).sd = function () {
    return this.latitude;
  };
  protoOf(Geolocation).td = function () {
    return this.longitude;
  };
  protoOf(Geolocation).m1j = function () {
    return this.p1n_1;
  };
  protoOf(Geolocation).s1n = function (latitude, longitude, sensorSpecificData) {
    return new Geolocation(latitude, longitude, sensorSpecificData);
  };
  protoOf(Geolocation).copy = function (latitude, longitude, sensorSpecificData, $super) {
    latitude = latitude === VOID ? this.latitude : latitude;
    longitude = longitude === VOID ? this.longitude : longitude;
    sensorSpecificData = sensorSpecificData === VOID ? this.p1n_1 : sensorSpecificData;
    return $super === VOID ? this.s1n(latitude, longitude, sensorSpecificData) : $super.s1n.call(this, latitude, longitude, sensorSpecificData);
  };
  protoOf(Geolocation).toString = function () {
    return 'Geolocation(latitude=' + this.latitude + ', longitude=' + this.longitude + ', sensorSpecificData=' + toString_0(this.p1n_1) + ')';
  };
  protoOf(Geolocation).hashCode = function () {
    var result = getNumberHashCode(this.latitude);
    result = imul(result, 31) + getNumberHashCode(this.longitude) | 0;
    result = imul(result, 31) + (this.p1n_1 == null ? 0 : hashCode(this.p1n_1)) | 0;
    return result;
  };
  protoOf(Geolocation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Geolocation))
      return false;
    if (!equals(this.latitude, other.latitude))
      return false;
    if (!equals(this.longitude, other.longitude))
      return false;
    if (!equals(this.p1n_1, other.p1n_1))
      return false;
    return true;
  };
  function HeartRate$Companion$$childSerializers$_anonymous__py9u78() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_15() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t1n_1 = [null, lazy(tmp_0, HeartRate$Companion$$childSerializers$_anonymous__py9u78)];
  }
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.heartrate', this, 2);
    tmp0_serialDesc.pv('bpm', false);
    tmp0_serialDesc.pv('sensorSpecificData', true);
    this.u1n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).v1n = function (encoder, value) {
    var tmp0_desc = this.u1n_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().t1n_1;
    tmp1_output.hp(tmp0_desc, 0, value.bpm);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.w1n_1 == null)) {
      tmp1_output.qp(tmp0_desc, 1, tmp2_cached[1].s2(), value.w1n_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_7).nk = function (encoder, value) {
    return this.v1n(encoder, value instanceof HeartRate ? value : THROW_CCE());
  };
  protoOf($serializer_7).ok = function (decoder) {
    var tmp0_desc = this.u1n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_16().t1n_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.co(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.co(tmp0_desc, 0);
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
    return HeartRate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_7).mk = function () {
    return this.u1n_1;
  };
  protoOf($serializer_7).ew = function () {
    var tmp0_cached = Companion_getInstance_16().t1n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), get_nullable(tmp0_cached[1].s2())];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function HeartRate_init_$Init$(seen0, bpm, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_7().u1n_1);
    }
    $this.bpm = bpm;
    if (0 === (seen0 & 2))
      $this.w1n_1 = null;
    else
      $this.w1n_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    if (!($this.bpm >= 0)) {
      var message = 'Beats per minute needs to be a positive number.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function HeartRate_init_$Create$(seen0, bpm, sensorSpecificData, serializationConstructorMarker) {
    return HeartRate_init_$Init$(seen0, bpm, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(HeartRate)));
  }
  function HeartRate(bpm, sensorSpecificData) {
    Companion_getInstance_16();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.bpm = bpm;
    this.w1n_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    if (!(this.bpm >= 0)) {
      var message = 'Beats per minute needs to be a positive number.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(HeartRate).x1n = function () {
    return this.bpm;
  };
  protoOf(HeartRate).k1k = function () {
    return this.w1n_1;
  };
  protoOf(HeartRate).sd = function () {
    return this.bpm;
  };
  protoOf(HeartRate).td = function () {
    return this.w1n_1;
  };
  protoOf(HeartRate).y1n = function (bpm, sensorSpecificData) {
    return new HeartRate(bpm, sensorSpecificData);
  };
  protoOf(HeartRate).copy = function (bpm, sensorSpecificData, $super) {
    bpm = bpm === VOID ? this.bpm : bpm;
    sensorSpecificData = sensorSpecificData === VOID ? this.w1n_1 : sensorSpecificData;
    return $super === VOID ? this.y1n(bpm, sensorSpecificData) : $super.y1n.call(this, bpm, sensorSpecificData);
  };
  protoOf(HeartRate).toString = function () {
    return 'HeartRate(bpm=' + this.bpm + ', sensorSpecificData=' + toString_0(this.w1n_1) + ')';
  };
  protoOf(HeartRate).hashCode = function () {
    var result = this.bpm;
    result = imul(result, 31) + (this.w1n_1 == null ? 0 : hashCode(this.w1n_1)) | 0;
    return result;
  };
  protoOf(HeartRate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeartRate))
      return false;
    if (!(this.bpm === other.bpm))
      return false;
    if (!equals(this.w1n_1, other.w1n_1))
      return false;
    return true;
  };
  function InterbeatInterval$Companion$$childSerializers$_anonymous__1kyokz() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_16() {
    Companion_instance_17 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.z1n_1 = [lazy(tmp_0, InterbeatInterval$Companion$$childSerializers$_anonymous__1kyokz)];
  }
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_16();
    return Companion_instance_17;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.interbeatinterval', this, 1);
    tmp0_serialDesc.pv('sensorSpecificData', true);
    this.a1o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).b1o = function (encoder, value) {
    var tmp0_desc = this.a1o_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_17().z1n_1;
    if (tmp1_output.up(tmp0_desc, 0) ? true : !(value.c1o_1 == null)) {
      tmp1_output.qp(tmp0_desc, 0, tmp2_cached[0].s2(), value.c1o_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_8).nk = function (encoder, value) {
    return this.b1o(encoder, value instanceof InterbeatInterval ? value : THROW_CCE());
  };
  protoOf($serializer_8).ok = function (decoder) {
    var tmp0_desc = this.a1o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xn(tmp0_desc);
    var tmp6_cached = Companion_getInstance_17().z1n_1;
    if (tmp5_input.no()) {
      tmp4_local0 = tmp5_input.lo(tmp0_desc, 0, tmp6_cached[0].s2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.lo(tmp0_desc, 0, tmp6_cached[0].s2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return InterbeatInterval_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_8).mk = function () {
    return this.a1o_1;
  };
  protoOf($serializer_8).ew = function () {
    var tmp0_cached = Companion_getInstance_17().z1n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].s2())];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function InterbeatInterval_init_$Init$(seen0, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().a1o_1);
    }
    if (0 === (seen0 & 1))
      $this.c1o_1 = null;
    else
      $this.c1o_1 = sensorSpecificData;
    return $this;
  }
  function InterbeatInterval_init_$Create$(seen0, sensorSpecificData, serializationConstructorMarker) {
    return InterbeatInterval_init_$Init$(seen0, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(InterbeatInterval)));
  }
  function InterbeatInterval(sensorSpecificData) {
    Companion_getInstance_17();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.c1o_1 = sensorSpecificData;
  }
  protoOf(InterbeatInterval).k1k = function () {
    return this.c1o_1;
  };
  protoOf(InterbeatInterval).sd = function () {
    return this.c1o_1;
  };
  protoOf(InterbeatInterval).d1o = function (sensorSpecificData) {
    return new InterbeatInterval(sensorSpecificData);
  };
  protoOf(InterbeatInterval).copy = function (sensorSpecificData, $super) {
    sensorSpecificData = sensorSpecificData === VOID ? this.c1o_1 : sensorSpecificData;
    return $super === VOID ? this.d1o(sensorSpecificData) : $super.d1o.call(this, sensorSpecificData);
  };
  protoOf(InterbeatInterval).toString = function () {
    return 'InterbeatInterval(sensorSpecificData=' + toString_0(this.c1o_1) + ')';
  };
  protoOf(InterbeatInterval).hashCode = function () {
    return this.c1o_1 == null ? 0 : hashCode(this.c1o_1);
  };
  protoOf(InterbeatInterval).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InterbeatInterval))
      return false;
    if (!equals(this.c1o_1, other.c1o_1))
      return false;
    return true;
  };
  function NonGravitationalAcceleration$Companion$$childSerializers$_anonymous__d4spem() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_17() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e1o_1 = [null, null, null, lazy(tmp_0, NonGravitationalAcceleration$Companion$$childSerializers$_anonymous__d4spem)];
  }
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.nongravitationalacceleration', this, 4);
    tmp0_serialDesc.pv('x', false);
    tmp0_serialDesc.pv('y', false);
    tmp0_serialDesc.pv('z', false);
    tmp0_serialDesc.pv('sensorSpecificData', true);
    this.f1o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).g1o = function (encoder, value) {
    var tmp0_desc = this.f1o_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_18().e1o_1;
    tmp1_output.kp(tmp0_desc, 0, value.x);
    tmp1_output.kp(tmp0_desc, 1, value.y);
    tmp1_output.kp(tmp0_desc, 2, value.z);
    if (tmp1_output.up(tmp0_desc, 3) ? true : !(value.h1o_1 == null)) {
      tmp1_output.qp(tmp0_desc, 3, tmp2_cached[3].s2(), value.h1o_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_9).nk = function (encoder, value) {
    return this.g1o(encoder, value instanceof NonGravitationalAcceleration ? value : THROW_CCE());
  };
  protoOf($serializer_9).ok = function (decoder) {
    var tmp0_desc = this.f1o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_18().e1o_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.fo(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.fo(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.fo(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, tmp9_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.fo(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.fo(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.fo(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, tmp9_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return NonGravitationalAcceleration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_9).mk = function () {
    return this.f1o_1;
  };
  protoOf($serializer_9).ew = function () {
    var tmp0_cached = Companion_getInstance_18().e1o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(tmp0_cached[3].s2())];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function NonGravitationalAcceleration_init_$Init$(seen0, x, y, z, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_9().f1o_1);
    }
    $this.x = x;
    $this.y = y;
    $this.z = z;
    if (0 === (seen0 & 8))
      $this.h1o_1 = null;
    else
      $this.h1o_1 = sensorSpecificData;
    return $this;
  }
  function NonGravitationalAcceleration_init_$Create$(seen0, x, y, z, sensorSpecificData, serializationConstructorMarker) {
    return NonGravitationalAcceleration_init_$Init$(seen0, x, y, z, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(NonGravitationalAcceleration)));
  }
  function NonGravitationalAcceleration(x, y, z, sensorSpecificData) {
    Companion_getInstance_18();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.x = x;
    this.y = y;
    this.z = z;
    this.h1o_1 = sensorSpecificData;
  }
  protoOf(NonGravitationalAcceleration).h1k = function () {
    return this.x;
  };
  protoOf(NonGravitationalAcceleration).i1k = function () {
    return this.y;
  };
  protoOf(NonGravitationalAcceleration).j1k = function () {
    return this.z;
  };
  protoOf(NonGravitationalAcceleration).k1k = function () {
    return this.h1o_1;
  };
  protoOf(NonGravitationalAcceleration).sd = function () {
    return this.x;
  };
  protoOf(NonGravitationalAcceleration).td = function () {
    return this.y;
  };
  protoOf(NonGravitationalAcceleration).m1j = function () {
    return this.z;
  };
  protoOf(NonGravitationalAcceleration).l1k = function () {
    return this.h1o_1;
  };
  protoOf(NonGravitationalAcceleration).m1k = function (x, y, z, sensorSpecificData) {
    return new NonGravitationalAcceleration(x, y, z, sensorSpecificData);
  };
  protoOf(NonGravitationalAcceleration).copy = function (x, y, z, sensorSpecificData, $super) {
    x = x === VOID ? this.x : x;
    y = y === VOID ? this.y : y;
    z = z === VOID ? this.z : z;
    sensorSpecificData = sensorSpecificData === VOID ? this.h1o_1 : sensorSpecificData;
    return $super === VOID ? this.m1k(x, y, z, sensorSpecificData) : $super.m1k.call(this, x, y, z, sensorSpecificData);
  };
  protoOf(NonGravitationalAcceleration).toString = function () {
    return 'NonGravitationalAcceleration(x=' + this.x + ', y=' + this.y + ', z=' + this.z + ', sensorSpecificData=' + toString_0(this.h1o_1) + ')';
  };
  protoOf(NonGravitationalAcceleration).hashCode = function () {
    var result = getNumberHashCode(this.x);
    result = imul(result, 31) + getNumberHashCode(this.y) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z) | 0;
    result = imul(result, 31) + (this.h1o_1 == null ? 0 : hashCode(this.h1o_1)) | 0;
    return result;
  };
  protoOf(NonGravitationalAcceleration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NonGravitationalAcceleration))
      return false;
    if (!equals(this.x, other.x))
      return false;
    if (!equals(this.y, other.y))
      return false;
    if (!equals(this.z, other.z))
      return false;
    if (!equals(this.h1o_1, other.h1o_1))
      return false;
    return true;
  };
  function PPG$Companion$$childSerializers$_anonymous__rd1zpf() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), DoubleSerializer_getInstance());
  }
  function PPG$Companion$$childSerializers$_anonymous__rd1zpf_0() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_18() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, PPG$Companion$$childSerializers$_anonymous__rd1zpf);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i1o_1 = [tmp_1, lazy(tmp_2, PPG$Companion$$childSerializers$_anonymous__rd1zpf_0)];
  }
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.ppg', this, 2);
    tmp0_serialDesc.pv('lightSources', false);
    tmp0_serialDesc.pv('sensorSpecificData', true);
    this.j1o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).k1o = function (encoder, value) {
    var tmp0_desc = this.j1o_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().i1o_1;
    tmp1_output.op(tmp0_desc, 0, tmp2_cached[0].s2(), value.lightSources);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.l1o_1 == null)) {
      tmp1_output.qp(tmp0_desc, 1, tmp2_cached[1].s2(), value.l1o_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_10).nk = function (encoder, value) {
    return this.k1o(encoder, value instanceof PPG ? value : THROW_CCE());
  };
  protoOf($serializer_10).ok = function (decoder) {
    var tmp0_desc = this.j1o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_19().i1o_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, tmp7_cached[0].s2(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, tmp7_cached[0].s2(), tmp4_local0);
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
    return PPG_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_10).mk = function () {
    return this.j1o_1;
  };
  protoOf($serializer_10).ew = function () {
    var tmp0_cached = Companion_getInstance_19().i1o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].s2(), get_nullable(tmp0_cached[1].s2())];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function PPG_init_$Init$(seen0, lightSources, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_10().j1o_1);
    }
    $this.lightSources = lightSources;
    if (0 === (seen0 & 2))
      $this.l1o_1 = null;
    else
      $this.l1o_1 = sensorSpecificData;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!$this.lightSources.p()) {
      var message = 'Data for at least one light sources needs to be provided.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PPG_init_$Create$(seen0, lightSources, sensorSpecificData, serializationConstructorMarker) {
    return PPG_init_$Init$(seen0, lightSources, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(PPG)));
  }
  function PPG(lightSources, sensorSpecificData) {
    Companion_getInstance_19();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.lightSources = lightSources;
    this.l1o_1 = sensorSpecificData;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.lightSources.p()) {
      var message = 'Data for at least one light sources needs to be provided.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(PPG).m1o = function () {
    return this.lightSources;
  };
  protoOf(PPG).k1k = function () {
    return this.l1o_1;
  };
  protoOf(PPG).sd = function () {
    return this.lightSources;
  };
  protoOf(PPG).td = function () {
    return this.l1o_1;
  };
  protoOf(PPG).n1o = function (lightSources, sensorSpecificData) {
    return new PPG(lightSources, sensorSpecificData);
  };
  protoOf(PPG).copy = function (lightSources, sensorSpecificData, $super) {
    lightSources = lightSources === VOID ? this.lightSources : lightSources;
    sensorSpecificData = sensorSpecificData === VOID ? this.l1o_1 : sensorSpecificData;
    return $super === VOID ? this.n1o(lightSources, sensorSpecificData) : $super.n1o.call(this, lightSources, sensorSpecificData);
  };
  protoOf(PPG).toString = function () {
    return 'PPG(lightSources=' + toString(this.lightSources) + ', sensorSpecificData=' + toString_0(this.l1o_1) + ')';
  };
  protoOf(PPG).hashCode = function () {
    var result = hashCode(this.lightSources);
    result = imul(result, 31) + (this.l1o_1 == null ? 0 : hashCode(this.l1o_1)) | 0;
    return result;
  };
  protoOf(PPG).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PPG))
      return false;
    if (!equals(this.lightSources, other.lightSources))
      return false;
    if (!equals(this.l1o_1, other.l1o_1))
      return false;
    return true;
  };
  function SensorSkinContact$Companion$$childSerializers$_anonymous__rfaov3() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_19() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o1o_1 = [null, lazy(tmp_0, SensorSkinContact$Companion$$childSerializers$_anonymous__rfaov3)];
  }
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_19();
    return Companion_instance_20;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.sensorskincontact', this, 2);
    tmp0_serialDesc.pv('contact', false);
    tmp0_serialDesc.pv('sensorSpecificData', true);
    this.p1o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).q1o = function (encoder, value) {
    var tmp0_desc = this.p1o_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().o1o_1;
    tmp1_output.ep(tmp0_desc, 0, value.contact);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.r1o_1 == null)) {
      tmp1_output.qp(tmp0_desc, 1, tmp2_cached[1].s2(), value.r1o_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_11).nk = function (encoder, value) {
    return this.q1o(encoder, value instanceof SensorSkinContact ? value : THROW_CCE());
  };
  protoOf($serializer_11).ok = function (decoder) {
    var tmp0_desc = this.p1o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_20().o1o_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.zn(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.zn(tmp0_desc, 0);
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
    return SensorSkinContact_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).mk = function () {
    return this.p1o_1;
  };
  protoOf($serializer_11).ew = function () {
    var tmp0_cached = Companion_getInstance_20().o1o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), get_nullable(tmp0_cached[1].s2())];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function SensorSkinContact_init_$Init$(seen0, contact, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_11().p1o_1);
    }
    $this.contact = contact;
    if (0 === (seen0 & 2))
      $this.r1o_1 = null;
    else
      $this.r1o_1 = sensorSpecificData;
    return $this;
  }
  function SensorSkinContact_init_$Create$(seen0, contact, sensorSpecificData, serializationConstructorMarker) {
    return SensorSkinContact_init_$Init$(seen0, contact, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(SensorSkinContact)));
  }
  function SensorSkinContact(contact, sensorSpecificData) {
    Companion_getInstance_20();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.contact = contact;
    this.r1o_1 = sensorSpecificData;
  }
  protoOf(SensorSkinContact).s1o = function () {
    return this.contact;
  };
  protoOf(SensorSkinContact).k1k = function () {
    return this.r1o_1;
  };
  protoOf(SensorSkinContact).sd = function () {
    return this.contact;
  };
  protoOf(SensorSkinContact).td = function () {
    return this.r1o_1;
  };
  protoOf(SensorSkinContact).t1o = function (contact, sensorSpecificData) {
    return new SensorSkinContact(contact, sensorSpecificData);
  };
  protoOf(SensorSkinContact).copy = function (contact, sensorSpecificData, $super) {
    contact = contact === VOID ? this.contact : contact;
    sensorSpecificData = sensorSpecificData === VOID ? this.r1o_1 : sensorSpecificData;
    return $super === VOID ? this.t1o(contact, sensorSpecificData) : $super.t1o.call(this, contact, sensorSpecificData);
  };
  protoOf(SensorSkinContact).toString = function () {
    return 'SensorSkinContact(contact=' + this.contact + ', sensorSpecificData=' + toString_0(this.r1o_1) + ')';
  };
  protoOf(SensorSkinContact).hashCode = function () {
    var result = getBooleanHashCode(this.contact);
    result = imul(result, 31) + (this.r1o_1 == null ? 0 : hashCode(this.r1o_1)) | 0;
    return result;
  };
  protoOf(SensorSkinContact).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SensorSkinContact))
      return false;
    if (!(this.contact === other.contact))
      return false;
    if (!equals(this.r1o_1, other.r1o_1))
      return false;
    return true;
  };
  function SignalStrength$Companion$$childSerializers$_anonymous__4t0sgx() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_20() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.u1o_1 = [null, lazy(tmp_0, SignalStrength$Companion$$childSerializers$_anonymous__4t0sgx)];
  }
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_20();
    return Companion_instance_21;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.signalstrength', this, 2);
    tmp0_serialDesc.pv('rssi', false);
    tmp0_serialDesc.pv('sensorSpecificData', true);
    this.v1o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).w1o = function (encoder, value) {
    var tmp0_desc = this.v1o_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().u1o_1;
    tmp1_output.gp(tmp0_desc, 0, value.rssi);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.x1o_1 == null)) {
      tmp1_output.qp(tmp0_desc, 1, tmp2_cached[1].s2(), value.x1o_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_12).nk = function (encoder, value) {
    return this.w1o(encoder, value instanceof SignalStrength ? value : THROW_CCE());
  };
  protoOf($serializer_12).ok = function (decoder) {
    var tmp0_desc = this.v1o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_21().u1o_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.bo(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.bo(tmp0_desc, 0);
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
    return SignalStrength_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_12).mk = function () {
    return this.v1o_1;
  };
  protoOf($serializer_12).ew = function () {
    var tmp0_cached = Companion_getInstance_21().u1o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ShortSerializer_getInstance(), get_nullable(tmp0_cached[1].s2())];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function SignalStrength_init_$Init$(seen0, rssi, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_12().v1o_1);
    }
    $this.rssi = rssi;
    if (0 === (seen0 & 2))
      $this.x1o_1 = null;
    else
      $this.x1o_1 = sensorSpecificData;
    return $this;
  }
  function SignalStrength_init_$Create$(seen0, rssi, sensorSpecificData, serializationConstructorMarker) {
    return SignalStrength_init_$Init$(seen0, rssi, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(SignalStrength)));
  }
  function SignalStrength(rssi, sensorSpecificData) {
    Companion_getInstance_21();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.rssi = rssi;
    this.x1o_1 = sensorSpecificData;
  }
  protoOf(SignalStrength).y1o = function () {
    return this.rssi;
  };
  protoOf(SignalStrength).k1k = function () {
    return this.x1o_1;
  };
  protoOf(SignalStrength).sd = function () {
    return this.rssi;
  };
  protoOf(SignalStrength).td = function () {
    return this.x1o_1;
  };
  protoOf(SignalStrength).z1o = function (rssi, sensorSpecificData) {
    return new SignalStrength(rssi, sensorSpecificData);
  };
  protoOf(SignalStrength).copy = function (rssi, sensorSpecificData, $super) {
    rssi = rssi === VOID ? this.rssi : rssi;
    sensorSpecificData = sensorSpecificData === VOID ? this.x1o_1 : sensorSpecificData;
    return $super === VOID ? this.z1o(rssi, sensorSpecificData) : $super.z1o.call(this, rssi, sensorSpecificData);
  };
  protoOf(SignalStrength).toString = function () {
    return 'SignalStrength(rssi=' + this.rssi + ', sensorSpecificData=' + toString_0(this.x1o_1) + ')';
  };
  protoOf(SignalStrength).hashCode = function () {
    var result = this.rssi;
    result = imul(result, 31) + (this.x1o_1 == null ? 0 : hashCode(this.x1o_1)) | 0;
    return result;
  };
  protoOf(SignalStrength).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SignalStrength))
      return false;
    if (!(this.rssi === other.rssi))
      return false;
    if (!equals(this.x1o_1, other.x1o_1))
      return false;
    return true;
  };
  function StepCount$Companion$$childSerializers$_anonymous__apxryf() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_21() {
    Companion_instance_22 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a1p_1 = [null, lazy(tmp_0, StepCount$Companion$$childSerializers$_anonymous__apxryf)];
  }
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_21();
    return Companion_instance_22;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.stepcount', this, 2);
    tmp0_serialDesc.pv('steps', false);
    tmp0_serialDesc.pv('sensorSpecificData', true);
    this.b1p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).c1p = function (encoder, value) {
    var tmp0_desc = this.b1p_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().a1p_1;
    tmp1_output.hp(tmp0_desc, 0, value.steps);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.d1p_1 == null)) {
      tmp1_output.qp(tmp0_desc, 1, tmp2_cached[1].s2(), value.d1p_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_13).nk = function (encoder, value) {
    return this.c1p(encoder, value instanceof StepCount ? value : THROW_CCE());
  };
  protoOf($serializer_13).ok = function (decoder) {
    var tmp0_desc = this.b1p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_22().a1p_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.co(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.co(tmp0_desc, 0);
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
    return StepCount_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_13).mk = function () {
    return this.b1p_1;
  };
  protoOf($serializer_13).ew = function () {
    var tmp0_cached = Companion_getInstance_22().a1p_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), get_nullable(tmp0_cached[1].s2())];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function StepCount_init_$Init$(seen0, steps, sensorSpecificData, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_13().b1p_1);
    }
    $this.steps = steps;
    if (0 === (seen0 & 2))
      $this.d1p_1 = null;
    else
      $this.d1p_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    if (!($this.steps >= 0)) {
      var message = 'Number of steps needs to be a positive number.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function StepCount_init_$Create$(seen0, steps, sensorSpecificData, serializationConstructorMarker) {
    return StepCount_init_$Init$(seen0, steps, sensorSpecificData, serializationConstructorMarker, objectCreate(protoOf(StepCount)));
  }
  function StepCount(steps, sensorSpecificData) {
    Companion_getInstance_22();
    sensorSpecificData = sensorSpecificData === VOID ? null : sensorSpecificData;
    this.steps = steps;
    this.d1p_1 = sensorSpecificData;
    // Inline function 'kotlin.require' call
    if (!(this.steps >= 0)) {
      var message = 'Number of steps needs to be a positive number.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(StepCount).e1p = function () {
    return this.steps;
  };
  protoOf(StepCount).k1k = function () {
    return this.d1p_1;
  };
  protoOf(StepCount).sd = function () {
    return this.steps;
  };
  protoOf(StepCount).td = function () {
    return this.d1p_1;
  };
  protoOf(StepCount).y1n = function (steps, sensorSpecificData) {
    return new StepCount(steps, sensorSpecificData);
  };
  protoOf(StepCount).copy = function (steps, sensorSpecificData, $super) {
    steps = steps === VOID ? this.steps : steps;
    sensorSpecificData = sensorSpecificData === VOID ? this.d1p_1 : sensorSpecificData;
    return $super === VOID ? this.y1n(steps, sensorSpecificData) : $super.y1n.call(this, steps, sensorSpecificData);
  };
  protoOf(StepCount).toString = function () {
    return 'StepCount(steps=' + this.steps + ', sensorSpecificData=' + toString_0(this.d1p_1) + ')';
  };
  protoOf(StepCount).hashCode = function () {
    var result = this.steps;
    result = imul(result, 31) + (this.d1p_1 == null ? 0 : hashCode(this.d1p_1)) | 0;
    return result;
  };
  protoOf(StepCount).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StepCount))
      return false;
    if (!(this.steps === other.steps))
      return false;
    if (!equals(this.d1p_1, other.d1p_1))
      return false;
    return true;
  };
  function TriggeredTask$Companion$$childSerializers$_anonymous__fpri0e() {
    return createSimpleEnumSerializer('dk.cachet.carp.common.application.triggers.TaskControl.Control', values_5());
  }
  function TriggeredTask$Companion$$childSerializers$_anonymous__fpri0e_0() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_22() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, TriggeredTask$Companion$$childSerializers$_anonymous__fpri0e);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f1p_1 = [null, null, null, tmp_1, lazy(tmp_2, TriggeredTask$Companion$$childSerializers$_anonymous__fpri0e_0)];
  }
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_22();
    return Companion_instance_23;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.triggeredtask', this, 5);
    tmp0_serialDesc.pv('triggerId', false);
    tmp0_serialDesc.pv('taskName', false);
    tmp0_serialDesc.pv('destinationDeviceRoleName', false);
    tmp0_serialDesc.pv('control', false);
    tmp0_serialDesc.pv('triggerData', true);
    this.g1p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).h1p = function (encoder, value) {
    var tmp0_desc = this.g1p_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().f1p_1;
    tmp1_output.hp(tmp0_desc, 0, value.triggerId);
    tmp1_output.mp(tmp0_desc, 1, value.taskName);
    tmp1_output.mp(tmp0_desc, 2, value.destinationDeviceRoleName);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.control);
    if (tmp1_output.up(tmp0_desc, 4) ? true : !(value.triggerData == null)) {
      tmp1_output.qp(tmp0_desc, 4, tmp2_cached[4].s2(), value.triggerData);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_14).nk = function (encoder, value) {
    return this.h1p(encoder, value instanceof TriggeredTask ? value : THROW_CCE());
  };
  protoOf($serializer_14).ok = function (decoder) {
    var tmp0_desc = this.g1p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xn(tmp0_desc);
    var tmp10_cached = Companion_getInstance_23().f1p_1;
    if (tmp9_input.no()) {
      tmp4_local0 = tmp9_input.co(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ho(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ho(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.lo(tmp0_desc, 4, tmp10_cached[4].s2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.co(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ho(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ho(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.lo(tmp0_desc, 4, tmp10_cached[4].s2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return TriggeredTask_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_14).mk = function () {
    return this.g1p_1;
  };
  protoOf($serializer_14).ew = function () {
    var tmp0_cached = Companion_getInstance_23().f1p_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[3].s2(), get_nullable(tmp0_cached[4].s2())];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function TriggeredTask_init_$Init$(seen0, triggerId, taskName, destinationDeviceRoleName, control, triggerData, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_14().g1p_1);
    }
    $this.triggerId = triggerId;
    $this.taskName = taskName;
    $this.destinationDeviceRoleName = destinationDeviceRoleName;
    $this.control = control;
    if (0 === (seen0 & 16))
      $this.triggerData = null;
    else
      $this.triggerData = triggerData;
    return $this;
  }
  function TriggeredTask_init_$Create$(seen0, triggerId, taskName, destinationDeviceRoleName, control, triggerData, serializationConstructorMarker) {
    return TriggeredTask_init_$Init$(seen0, triggerId, taskName, destinationDeviceRoleName, control, triggerData, serializationConstructorMarker, objectCreate(protoOf(TriggeredTask)));
  }
  function TriggeredTask(triggerId, taskName, destinationDeviceRoleName, control, triggerData) {
    Companion_getInstance_23();
    triggerData = triggerData === VOID ? null : triggerData;
    this.triggerId = triggerId;
    this.taskName = taskName;
    this.destinationDeviceRoleName = destinationDeviceRoleName;
    this.control = control;
    this.triggerData = triggerData;
  }
  protoOf(TriggeredTask).i1p = function () {
    return this.triggerId;
  };
  protoOf(TriggeredTask).n1m = function () {
    return this.taskName;
  };
  protoOf(TriggeredTask).j1p = function () {
    return this.destinationDeviceRoleName;
  };
  protoOf(TriggeredTask).k1p = function () {
    return this.control;
  };
  protoOf(TriggeredTask).l1p = function () {
    return this.triggerData;
  };
  protoOf(TriggeredTask).sd = function () {
    return this.triggerId;
  };
  protoOf(TriggeredTask).td = function () {
    return this.taskName;
  };
  protoOf(TriggeredTask).m1j = function () {
    return this.destinationDeviceRoleName;
  };
  protoOf(TriggeredTask).l1k = function () {
    return this.control;
  };
  protoOf(TriggeredTask).m1p = function () {
    return this.triggerData;
  };
  protoOf(TriggeredTask).n1p = function (triggerId, taskName, destinationDeviceRoleName, control, triggerData) {
    return new TriggeredTask(triggerId, taskName, destinationDeviceRoleName, control, triggerData);
  };
  protoOf(TriggeredTask).copy = function (triggerId, taskName, destinationDeviceRoleName, control, triggerData, $super) {
    triggerId = triggerId === VOID ? this.triggerId : triggerId;
    taskName = taskName === VOID ? this.taskName : taskName;
    destinationDeviceRoleName = destinationDeviceRoleName === VOID ? this.destinationDeviceRoleName : destinationDeviceRoleName;
    control = control === VOID ? this.control : control;
    triggerData = triggerData === VOID ? this.triggerData : triggerData;
    return $super === VOID ? this.n1p(triggerId, taskName, destinationDeviceRoleName, control, triggerData) : $super.n1p.call(this, triggerId, taskName, destinationDeviceRoleName, control, triggerData);
  };
  protoOf(TriggeredTask).toString = function () {
    return 'TriggeredTask(triggerId=' + this.triggerId + ', taskName=' + this.taskName + ', destinationDeviceRoleName=' + this.destinationDeviceRoleName + ', control=' + this.control.toString() + ', triggerData=' + toString_0(this.triggerData) + ')';
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
    if (!(this.triggerId === other.triggerId))
      return false;
    if (!(this.taskName === other.taskName))
      return false;
    if (!(this.destinationDeviceRoleName === other.destinationDeviceRoleName))
      return false;
    if (!this.control.equals(other.control))
      return false;
    if (!equals(this.triggerData, other.triggerData))
      return false;
    return true;
  };
  function CarpInputDataTypes$SEX$lambda(it) {
    return valueOf_2(it);
  }
  function CarpInputDataTypes$SEX$lambda_0(it) {
    return it.b3_1;
  }
  function CarpInputDataTypes() {
    CarpInputDataTypes_instance = this;
    InputDataTypeList_init_$Init$(this);
    this.CARP_NAMESPACE = 'dk.cachet.carp.input';
    this.s1p_1 = 'dk.cachet.carp.input.sex';
    var tmp = this;
    var tmp_0 = Companion_instance_3.fromString('dk.cachet.carp.input.sex');
    // Inline function 'kotlin.collections.map' call
    var this_0 = values_2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$2 = toString(item);
      destination.y(tmp$ret$2);
    }
    var tmp_1 = new SelectOne('Sex', toSet(destination));
    var tmp_2 = getKClass(Sex);
    var tmp_3 = CarpInputDataTypes$SEX$lambda;
    tmp.SEX = this.add(tmp_0, tmp_1, tmp_2, tmp_3, CarpInputDataTypes$SEX$lambda_0);
  }
  protoOf(CarpInputDataTypes).h1l = function () {
    return this.CARP_NAMESPACE;
  };
  protoOf(CarpInputDataTypes).t1p = function () {
    return this.s1p_1;
  };
  protoOf(CarpInputDataTypes).u1p = function () {
    return this.SEX;
  };
  var CarpInputDataTypes_instance;
  function CarpInputDataTypes_getInstance() {
    if (CarpInputDataTypes_instance == null)
      new CarpInputDataTypes();
    return CarpInputDataTypes_instance;
  }
  function CustomInput(input) {
    this.input = input;
  }
  protoOf(CustomInput).i1q = function () {
    return this.input;
  };
  protoOf(CustomInput).sd = function () {
    return this.input;
  };
  protoOf(CustomInput).j1q = function (input) {
    return new CustomInput(input);
  };
  protoOf(CustomInput).copy = function (input, $super) {
    input = input === VOID ? this.input : input;
    return $super === VOID ? this.j1q(input) : $super.j1q.call(this, input);
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
    if (!equals(this.input, other.input))
      return false;
    return true;
  };
  function CustomInputSerializer$descriptor$lambda($this$buildClassSerialDescriptor) {
    // Inline function 'kotlinx.serialization.descriptors.element' call
    var elementName = 'dataType';
    var annotations = emptyList();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(PrimitiveClasses_getInstance().fa(), arrayOf([]), false));
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).mk();
    $this$buildClassSerialDescriptor.tm(elementName, descriptor, annotations, false);
    $this$buildClassSerialDescriptor.al('input', buildSerialDescriptor('dk.cachet.carp.input.custom.value', CONTEXTUAL_getInstance(), []));
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
      var pair = to(ensureNotNull(element.m()), serializer_0(element));
      destination.k2(pair.first, pair.second);
    }
    tmp.k1q_1 = destination;
    var tmp_0 = this;
    tmp_0.l1q_1 = buildClassSerialDescriptor('dk.cachet.carp.input.custom', [], CustomInputSerializer$descriptor$lambda);
  }
  protoOf(CustomInputSerializer).mk = function () {
    return this.l1q_1;
  };
  protoOf(CustomInputSerializer).ok = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.l1q_1;
    var composite = decoder.xn(descriptor);
    var index = composite.oo(this.l1q_1);
    // Inline function 'kotlin.require' call
    if (!(index === 0)) {
      var message = 'Cannot read input before its data type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var dataType = composite.ho(this.l1q_1, 0);
    composite.oo(this.l1q_1);
    var serializer = this.m1q(dataType);
    var input = composite.ko(this.l1q_1, 1, serializer);
    var result = new CustomInput(input);
    composite.yn(descriptor);
    return result;
  };
  protoOf(CustomInputSerializer).n1q = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.l1q_1;
    var composite = encoder.xn(descriptor);
    var input = value.input;
    var inputKlass = ensureNotNull(getKClassFromExpression(input).m());
    composite.mp(this.l1q_1, 0, inputKlass);
    var tmp = this.m1q(inputKlass);
    var serializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    composite.op(this.l1q_1, 1, serializer, input);
    composite.yn(descriptor);
    return Unit_instance;
  };
  protoOf(CustomInputSerializer).nk = function (encoder, value) {
    return this.n1q(encoder, value instanceof CustomInput ? value : THROW_CCE());
  };
  protoOf(CustomInputSerializer).m1q = function (dataType) {
    var tmp0_elvis_lhs = this.k1q_1.q2(dataType);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw UnsupportedOperationException_init_$Create$('No serializer registered for custom input data type: ' + dataType);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
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
    tmp.v1p_1 = LinkedHashMap_init_$Create$();
    this.inputElements = this.v1p_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.w1p_1 = LinkedHashMap_init_$Create$();
    this.dataClasses = this.w1p_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.x1p_1 = LinkedHashMap_init_$Create$();
    this.inputToDataConverters = this.x1p_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.y1p_1 = LinkedHashMap_init_$Create$();
    this.dataToInputConverters = this.y1p_1;
  }
  protoOf(InputDataTypeList).z1p = function () {
    return this.list;
  };
  protoOf(InputDataTypeList).a1q = function () {
    return this.inputElements;
  };
  protoOf(InputDataTypeList).b1q = function () {
    return this.dataClasses;
  };
  protoOf(InputDataTypeList).c1q = function () {
    return this.inputToDataConverters;
  };
  protoOf(InputDataTypeList).d1q = function () {
    return this.dataToInputConverters;
  };
  protoOf(InputDataTypeList).add = function (inputDataType, inputElement, dataClass, inputToData, dataToInput) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.require' call
    if (!!this.v1p_1.o2(inputDataType)) {
      var message = 'The specified input data type is already registered in this list.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.list.y(inputDataType);
    // Inline function 'kotlin.collections.set' call
    this.v1p_1.k2(inputDataType, inputElement);
    // Inline function 'kotlin.collections.set' call
    this.w1p_1.k2(inputDataType, dataClass);
    var tmp0 = this.x1p_1;
    // Inline function 'kotlin.collections.set' call
    var value = typeof inputToData === 'function' ? inputToData : THROW_CCE();
    tmp0.k2(inputDataType, value);
    var tmp0_0 = this.y1p_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = typeof dataToInput === 'function' ? dataToInput : THROW_CCE();
    tmp0_0.k2(inputDataType, value_0);
    return inputDataType;
  };
  protoOf(InputDataTypeList).p = function () {
    return this.list.p();
  };
  protoOf(InputDataTypeList).e1q = function (element) {
    return this.list.o1(element);
  };
  protoOf(InputDataTypeList).o1 = function (element) {
    if (!(element instanceof NamespacedId))
      return false;
    return this.e1q(element instanceof NamespacedId ? element : THROW_CCE());
  };
  protoOf(InputDataTypeList).r = function () {
    return this.list.r();
  };
  protoOf(InputDataTypeList).f1q = function (elements) {
    return this.list.e2(elements);
  };
  protoOf(InputDataTypeList).e2 = function (elements) {
    return this.f1q(elements);
  };
  protoOf(InputDataTypeList).b1 = function (index) {
    return this.list.b1(index);
  };
  protoOf(InputDataTypeList).g1q = function (element) {
    return this.list.d1(element);
  };
  protoOf(InputDataTypeList).d1 = function (element) {
    if (!(element instanceof NamespacedId))
      return -1;
    return this.g1q(element instanceof NamespacedId ? element : THROW_CCE());
  };
  protoOf(InputDataTypeList).h1q = function (element) {
    return this.list.f2(element);
  };
  protoOf(InputDataTypeList).f2 = function (element) {
    if (!(element instanceof NamespacedId))
      return -1;
    return this.h1q(element instanceof NamespacedId ? element : THROW_CCE());
  };
  protoOf(InputDataTypeList).g2 = function () {
    return this.list.g2();
  };
  protoOf(InputDataTypeList).h2 = function (index) {
    return this.list.h2(index);
  };
  protoOf(InputDataTypeList).i2 = function (fromIndex, toIndex) {
    return this.list.i2(fromIndex, toIndex);
  };
  protoOf(InputDataTypeList).asJsReadonlyArrayView = function () {
    return this.list.asJsReadonlyArrayView();
  };
  protoOf(InputDataTypeList).a1 = function () {
    return this.list.a1();
  };
  function _get_$cachedSerializer__te6jhj_2($this) {
    return $this.o1q_1.s2();
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
    var tmp$ret$3 = [null, null, null];
    return createAnnotatedEnumSerializer('dk.cachet.carp.input.sex', tmp, tmp_0, tmp$ret$3, null);
  }
  var Sex_Male_instance;
  var Sex_Female_instance;
  var Sex_Intersex_instance;
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
        THROW_IAE('No enum constant dk.cachet.carp.common.application.data.input.Sex.' + value);
        break;
    }
  }
  function Companion_23() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.o1q_1 = lazy(tmp_0, Sex$Companion$_anonymous__7n1xwp);
  }
  protoOf(Companion_23).i18 = function () {
    return _get_$cachedSerializer__te6jhj_2(this);
  };
  protoOf(Companion_23).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    Sex_initEntries();
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
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
  function SelectOne$Companion$$childSerializers$_anonymous__ufors0() {
    return new LinkedHashSetSerializer(StringSerializer_getInstance());
  }
  function Companion_24() {
    Companion_instance_25 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t1q_1 = [null, lazy(tmp_0, SelectOne$Companion$$childSerializers$_anonymous__ufors0)];
  }
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_24();
    return Companion_instance_25;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.data.input.elements.SelectOne', this, 2);
    tmp0_serialDesc.pv('prompt', false);
    tmp0_serialDesc.pv('options', false);
    this.u1q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).v1q = function (encoder, value) {
    var tmp0_desc = this.u1q_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().t1q_1;
    tmp1_output.mp(tmp0_desc, 0, value.w1q_1);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.options);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_15).nk = function (encoder, value) {
    return this.v1q(encoder, value instanceof SelectOne ? value : THROW_CCE());
  };
  protoOf($serializer_15).ok = function (decoder) {
    var tmp0_desc = this.u1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_25().t1q_1;
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
    return SelectOne_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_15).mk = function () {
    return this.u1q_1;
  };
  protoOf($serializer_15).ew = function () {
    var tmp0_cached = Companion_getInstance_25().t1q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].s2()];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function SelectOne_init_$Init$(seen0, prompt, options, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_15().u1q_1);
    }
    $this.w1q_1 = prompt;
    $this.options = options;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!$this.options.p()) {
      var message = 'At least one option needs to be specified.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function SelectOne_init_$Create$(seen0, prompt, options, serializationConstructorMarker) {
    return SelectOne_init_$Init$(seen0, prompt, options, serializationConstructorMarker, objectCreate(protoOf(SelectOne)));
  }
  function SelectOne(prompt, options) {
    Companion_getInstance_25();
    this.w1q_1 = prompt;
    this.options = options;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.options.p()) {
      var message = 'At least one option needs to be specified.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(SelectOne).r1q = function () {
    return this.w1q_1;
  };
  protoOf(SelectOne).x1q = function () {
    return this.options;
  };
  protoOf(SelectOne).isValid = function (input) {
    return this.options.o1(input);
  };
  protoOf(SelectOne).s1q = function () {
    return PrimitiveClasses_getInstance().fa();
  };
  protoOf(SelectOne).sd = function () {
    return this.w1q_1;
  };
  protoOf(SelectOne).td = function () {
    return this.options;
  };
  protoOf(SelectOne).y1q = function (prompt, options) {
    return new SelectOne(prompt, options);
  };
  protoOf(SelectOne).copy = function (prompt, options, $super) {
    prompt = prompt === VOID ? this.w1q_1 : prompt;
    options = options === VOID ? this.options : options;
    return $super === VOID ? this.y1q(prompt, options) : $super.y1q.call(this, prompt, options);
  };
  protoOf(SelectOne).toString = function () {
    return 'SelectOne(prompt=' + this.w1q_1 + ', options=' + toString(this.options) + ')';
  };
  protoOf(SelectOne).hashCode = function () {
    var result = getStringHashCode(this.w1q_1);
    result = imul(result, 31) + hashCode(this.options) | 0;
    return result;
  };
  protoOf(SelectOne).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectOne))
      return false;
    if (!(this.w1q_1 === other.w1q_1))
      return false;
    if (!equals(this.options, other.options))
      return false;
    return true;
  };
  function Companion_25() {
  }
  var Companion_instance_26;
  function Companion_getInstance_26() {
    return Companion_instance_26;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.data.input.elements.Text', this, 1);
    tmp0_serialDesc.pv('prompt', false);
    this.z1q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).a1r = function (encoder, value) {
    var tmp0_desc = this.z1q_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.mp(tmp0_desc, 0, value.b1r_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_16).nk = function (encoder, value) {
    return this.a1r(encoder, value instanceof Text ? value : THROW_CCE());
  };
  protoOf($serializer_16).ok = function (decoder) {
    var tmp0_desc = this.z1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xn(tmp0_desc);
    if (tmp5_input.no()) {
      tmp4_local0 = tmp5_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return Text_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_16).mk = function () {
    return this.z1q_1;
  };
  protoOf($serializer_16).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function Text_init_$Init$(seen0, prompt, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_16().z1q_1);
    }
    $this.b1r_1 = prompt;
    return $this;
  }
  function Text_init_$Create$(seen0, prompt, serializationConstructorMarker) {
    return Text_init_$Init$(seen0, prompt, serializationConstructorMarker, objectCreate(protoOf(Text)));
  }
  function Text(prompt) {
    this.b1r_1 = prompt;
  }
  protoOf(Text).r1q = function () {
    return this.b1r_1;
  };
  protoOf(Text).isValid = function (input) {
    return true;
  };
  protoOf(Text).s1q = function () {
    return PrimitiveClasses_getInstance().fa();
  };
  protoOf(Text).sd = function () {
    return this.b1r_1;
  };
  protoOf(Text).y1h = function (prompt) {
    return new Text(prompt);
  };
  protoOf(Text).copy = function (prompt, $super) {
    prompt = prompt === VOID ? this.b1r_1 : prompt;
    return $super === VOID ? this.y1h(prompt) : $super.y1h.call(this, prompt);
  };
  protoOf(Text).toString = function () {
    return 'Text(prompt=' + this.b1r_1 + ')';
  };
  protoOf(Text).hashCode = function () {
    return getStringHashCode(this.b1r_1);
  };
  protoOf(Text).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Text))
      return false;
    if (!(this.b1r_1 === other.b1r_1))
      return false;
    return true;
  };
  function AltBeacon$Companion$$childSerializers$_anonymous__8qkp9f() {
    var tmp = NamespacedIdSerializer_getInstance();
    var tmp_0 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashMapSerializer(tmp, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$0));
  }
  function Sensors() {
    Sensors_instance = this;
    DataTypeSamplingSchemeMap.call(this);
    this.SIGNAL_STRENGTH = this.h1i(new NoOptionsSamplingScheme(CarpDataTypes_getInstance().SIGNAL_STRENGTH));
  }
  protoOf(Sensors).f1m = function () {
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
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k1r_1 = [null, null, lazy(tmp_0, AltBeacon$Companion$$childSerializers$_anonymous__8qkp9f)];
  }
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_26();
    return Companion_instance_27;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.AltBeacon', this, 3);
    tmp0_serialDesc.pv('roleName', false);
    tmp0_serialDesc.pv('isOptional', true);
    tmp0_serialDesc.pv('defaultSamplingConfiguration', true);
    this.l1r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).m1r = function (encoder, value) {
    var tmp0_desc = this.l1r_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().k1r_1;
    tmp1_output.mp(tmp0_desc, 0, value.n1r_1);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.o1r_1 === false)) {
      tmp1_output.ep(tmp0_desc, 1, value.o1r_1);
    }
    if (tmp1_output.up(tmp0_desc, 2) ? true : !equals(value.p1r_1, emptyMap())) {
      tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.p1r_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_17).nk = function (encoder, value) {
    return this.m1r(encoder, value instanceof AltBeacon ? value : THROW_CCE());
  };
  protoOf($serializer_17).ok = function (decoder) {
    var tmp0_desc = this.l1r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_27().k1r_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.zn(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.zn(tmp0_desc, 1);
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
    return AltBeacon_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_17).mk = function () {
    return this.l1r_1;
  };
  protoOf($serializer_17).ew = function () {
    var tmp0_cached = Companion_getInstance_27().k1r_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[2].s2()];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function AltBeacon_init_$Init$(seen0, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_17().l1r_1);
    }
    DeviceConfiguration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.n1r_1 = roleName;
    if (0 === (seen0 & 2))
      $this.o1r_1 = false;
    else
      $this.o1r_1 = isOptional;
    if (0 === (seen0 & 4))
      $this.p1r_1 = emptyMap();
    else
      $this.p1r_1 = defaultSamplingConfiguration;
    return $this;
  }
  function AltBeacon_init_$Create$(seen0, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker) {
    return AltBeacon_init_$Init$(seen0, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(AltBeacon)));
  }
  function AltBeacon(roleName, isOptional) {
    Companion_getInstance_27();
    isOptional = isOptional === VOID ? false : isOptional;
    DeviceConfiguration.call(this);
    this.n1r_1 = roleName;
    this.o1r_1 = isOptional;
    this.p1r_1 = emptyMap();
  }
  protoOf(AltBeacon).q1r = function () {
    return this.n1r_1;
  };
  protoOf(AltBeacon).r1r = function () {
    return this.o1r_1;
  };
  protoOf(AltBeacon).getSupportedDataTypes = function () {
    return Sensors_getInstance().m2();
  };
  protoOf(AltBeacon).getDataTypeSamplingSchemes = function () {
    return Sensors_getInstance();
  };
  protoOf(AltBeacon).s1r = function () {
    return this.p1r_1;
  };
  protoOf(AltBeacon).createDeviceRegistrationBuilder = function () {
    return new AltBeaconDeviceRegistrationBuilder();
  };
  protoOf(AltBeacon).t1r = function () {
    return getKClass(AltBeaconDeviceRegistration);
  };
  protoOf(AltBeacon).isValidRegistration = function (registration) {
    return Trilean_TRUE_getInstance();
  };
  protoOf(AltBeacon).sd = function () {
    return this.n1r_1;
  };
  protoOf(AltBeacon).td = function () {
    return this.o1r_1;
  };
  protoOf(AltBeacon).u1r = function (roleName, isOptional) {
    return new AltBeacon(roleName, isOptional);
  };
  protoOf(AltBeacon).copy = function (roleName, isOptional, $super) {
    roleName = roleName === VOID ? this.n1r_1 : roleName;
    isOptional = isOptional === VOID ? this.o1r_1 : isOptional;
    return $super === VOID ? this.u1r(roleName, isOptional) : $super.u1r.call(this, roleName, isOptional);
  };
  protoOf(AltBeacon).toString = function () {
    return 'AltBeacon(roleName=' + this.n1r_1 + ', isOptional=' + this.o1r_1 + ')';
  };
  protoOf(AltBeacon).hashCode = function () {
    var result = getStringHashCode(this.n1r_1);
    result = imul(result, 31) + getBooleanHashCode(this.o1r_1) | 0;
    return result;
  };
  protoOf(AltBeacon).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AltBeacon))
      return false;
    if (!(this.n1r_1 === other.n1r_1))
      return false;
    if (!(this.o1r_1 === other.o1r_1))
      return false;
    return true;
  };
  function AltBeaconDeviceRegistration$Companion$$childSerializers$_anonymous__wdgowe() {
    return Companion_instance_0.i18();
  }
  function Companion_27() {
    Companion_instance_28 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w1r_1 = [null, null, null, null, null, null, lazy(tmp_0, AltBeaconDeviceRegistration$Companion$$childSerializers$_anonymous__wdgowe), null, null];
    this.REFERENCE_RSS_RANGE = numberRangeToNumber(-127, 0);
  }
  protoOf(Companion_27).x1r = function () {
    return this.REFERENCE_RSS_RANGE;
  };
  protoOf(Companion_27).i18 = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration', this, 9);
    tmp0_serialDesc.pv('manufacturerId', false);
    tmp0_serialDesc.pv('organizationId', false);
    tmp0_serialDesc.pv('majorId', false);
    tmp0_serialDesc.pv('minorId', false);
    tmp0_serialDesc.pv('referenceRssi', false);
    tmp0_serialDesc.pv('deviceDisplayName', true);
    tmp0_serialDesc.pv('additionalSpecifications', true);
    tmp0_serialDesc.pv('registrationCreatedOn', false);
    tmp0_serialDesc.pv('deviceId', false);
    this.y1r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).z1r = function (encoder, value) {
    var tmp0_desc = this.y1r_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().w1r_1;
    tmp1_output.gp(tmp0_desc, 0, value.manufacturerId);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.organizationId);
    tmp1_output.gp(tmp0_desc, 2, value.majorId);
    tmp1_output.gp(tmp0_desc, 3, value.minorId);
    tmp1_output.gp(tmp0_desc, 4, value.referenceRssi);
    if (tmp1_output.up(tmp0_desc, 5) ? true : !(value.a1s_1 == null)) {
      tmp1_output.qp(tmp0_desc, 5, StringSerializer_getInstance(), value.a1s_1);
    }
    if (tmp1_output.up(tmp0_desc, 6) ? true : !(value.b1s_1 == null)) {
      tmp1_output.qp(tmp0_desc, 6, tmp2_cached[6].s2(), value.b1s_1);
    }
    tmp1_output.op(tmp0_desc, 7, InstantSerializer_getInstance(), value.c1s_1);
    tmp1_output.mp(tmp0_desc, 8, value.d1s_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_18).nk = function (encoder, value) {
    return this.z1r(encoder, value instanceof AltBeaconDeviceRegistration ? value : THROW_CCE());
  };
  protoOf($serializer_18).ok = function (decoder) {
    var tmp0_desc = this.y1r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_local4 = 0;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_input = decoder.xn(tmp0_desc);
    var tmp14_cached = Companion_getInstance_28().w1r_1;
    if (tmp13_input.no()) {
      tmp4_local0 = tmp13_input.bo(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.bo(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.bo(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.bo(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.lo(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.lo(tmp0_desc, 6, tmp14_cached[6].s2(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.jo(tmp0_desc, 7, InstantSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.ho(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.bo(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.bo(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.bo(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.bo(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.lo(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.lo(tmp0_desc, 6, tmp14_cached[6].s2(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.jo(tmp0_desc, 7, InstantSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.ho(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.yn(tmp0_desc);
    return AltBeaconDeviceRegistration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_18).mk = function () {
    return this.y1r_1;
  };
  protoOf($serializer_18).ew = function () {
    var tmp0_cached = Companion_getInstance_28().w1r_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ShortSerializer_getInstance(), UUIDSerializer_getInstance(), ShortSerializer_getInstance(), ShortSerializer_getInstance(), ShortSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[6].s2()), InstantSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function AltBeaconDeviceRegistration_init_$Init$(seen0, manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, additionalSpecifications, registrationCreatedOn, deviceId, serializationConstructorMarker, $this) {
    if (!(415 === (415 & seen0))) {
      throwMissingFieldException(seen0, 415, $serializer_getInstance_18().y1r_1);
    }
    DeviceRegistration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.manufacturerId = manufacturerId;
    $this.organizationId = organizationId;
    $this.majorId = majorId;
    $this.minorId = minorId;
    $this.referenceRssi = referenceRssi;
    if (0 === (seen0 & 32))
      $this.a1s_1 = null;
    else
      $this.a1s_1 = deviceDisplayName;
    if (0 === (seen0 & 64))
      $this.b1s_1 = null;
    else
      $this.b1s_1 = additionalSpecifications;
    $this.c1s_1 = registrationCreatedOn;
    var tmp0 = Companion_getInstance_28().REFERENCE_RSS_RANGE;
    // Inline function 'kotlin.ranges.contains' call
    var value = $this.referenceRssi;
    // Inline function 'kotlin.require' call
    if (!contains(isInterface(tmp0, ClosedRange) ? tmp0 : THROW_CCE(), value)) {
      var message = 'Reference RSSI needs to be in the range from -127 to 0.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.d1s_1 = deviceId;
    return $this;
  }
  function AltBeaconDeviceRegistration_init_$Create$(seen0, manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, additionalSpecifications, registrationCreatedOn, deviceId, serializationConstructorMarker) {
    return AltBeaconDeviceRegistration_init_$Init$(seen0, manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, additionalSpecifications, registrationCreatedOn, deviceId, serializationConstructorMarker, objectCreate(protoOf(AltBeaconDeviceRegistration)));
  }
  function AltBeaconDeviceRegistration(manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, additionalSpecifications, registrationCreatedOn) {
    Companion_getInstance_28();
    deviceDisplayName = deviceDisplayName === VOID ? null : deviceDisplayName;
    additionalSpecifications = additionalSpecifications === VOID ? null : additionalSpecifications;
    registrationCreatedOn = registrationCreatedOn === VOID ? System_instance.lg() : registrationCreatedOn;
    DeviceRegistration.call(this);
    this.manufacturerId = manufacturerId;
    this.organizationId = organizationId;
    this.majorId = majorId;
    this.minorId = minorId;
    this.referenceRssi = referenceRssi;
    this.a1s_1 = deviceDisplayName;
    this.b1s_1 = additionalSpecifications;
    this.c1s_1 = registrationCreatedOn;
    var tmp0 = Companion_getInstance_28().REFERENCE_RSS_RANGE;
    // Inline function 'kotlin.ranges.contains' call
    var value = this.referenceRssi;
    // Inline function 'kotlin.require' call
    if (!contains(isInterface(tmp0, ClosedRange) ? tmp0 : THROW_CCE(), value)) {
      var message = 'Reference RSSI needs to be in the range from -127 to 0.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.d1s_1 = '' + this.manufacturerId + ':' + this.organizationId.toString() + ':' + this.majorId + ':' + this.minorId;
  }
  protoOf(AltBeaconDeviceRegistration).e1s = function () {
    return this.manufacturerId;
  };
  protoOf(AltBeaconDeviceRegistration).f1s = function () {
    return this.organizationId;
  };
  protoOf(AltBeaconDeviceRegistration).g1s = function () {
    return this.majorId;
  };
  protoOf(AltBeaconDeviceRegistration).h1s = function () {
    return this.minorId;
  };
  protoOf(AltBeaconDeviceRegistration).i1s = function () {
    return this.referenceRssi;
  };
  protoOf(AltBeaconDeviceRegistration).j1s = function () {
    return this.a1s_1;
  };
  protoOf(AltBeaconDeviceRegistration).k1s = function () {
    return this.b1s_1;
  };
  protoOf(AltBeaconDeviceRegistration).l1s = function () {
    return this.c1s_1;
  };
  protoOf(AltBeaconDeviceRegistration).m1s = function () {
    return this.d1s_1;
  };
  protoOf(AltBeaconDeviceRegistration).sd = function () {
    return this.manufacturerId;
  };
  protoOf(AltBeaconDeviceRegistration).td = function () {
    return this.organizationId;
  };
  protoOf(AltBeaconDeviceRegistration).m1j = function () {
    return this.majorId;
  };
  protoOf(AltBeaconDeviceRegistration).l1k = function () {
    return this.minorId;
  };
  protoOf(AltBeaconDeviceRegistration).m1p = function () {
    return this.referenceRssi;
  };
  protoOf(AltBeaconDeviceRegistration).n1s = function () {
    return this.a1s_1;
  };
  protoOf(AltBeaconDeviceRegistration).o1s = function () {
    return this.b1s_1;
  };
  protoOf(AltBeaconDeviceRegistration).p1s = function () {
    return this.c1s_1;
  };
  protoOf(AltBeaconDeviceRegistration).q1s = function (manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, additionalSpecifications, registrationCreatedOn) {
    return new AltBeaconDeviceRegistration(manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, additionalSpecifications, registrationCreatedOn);
  };
  protoOf(AltBeaconDeviceRegistration).copy = function (manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, additionalSpecifications, registrationCreatedOn, $super) {
    manufacturerId = manufacturerId === VOID ? this.manufacturerId : manufacturerId;
    organizationId = organizationId === VOID ? this.organizationId : organizationId;
    majorId = majorId === VOID ? this.majorId : majorId;
    minorId = minorId === VOID ? this.minorId : minorId;
    referenceRssi = referenceRssi === VOID ? this.referenceRssi : referenceRssi;
    deviceDisplayName = deviceDisplayName === VOID ? this.a1s_1 : deviceDisplayName;
    additionalSpecifications = additionalSpecifications === VOID ? this.b1s_1 : additionalSpecifications;
    registrationCreatedOn = registrationCreatedOn === VOID ? this.c1s_1 : registrationCreatedOn;
    return $super === VOID ? this.q1s(manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, additionalSpecifications, registrationCreatedOn) : $super.q1s.call(this, manufacturerId, organizationId, majorId, minorId, referenceRssi, deviceDisplayName, additionalSpecifications, registrationCreatedOn);
  };
  protoOf(AltBeaconDeviceRegistration).toString = function () {
    return 'AltBeaconDeviceRegistration(manufacturerId=' + this.manufacturerId + ', organizationId=' + this.organizationId.toString() + ', majorId=' + this.majorId + ', minorId=' + this.minorId + ', referenceRssi=' + this.referenceRssi + ', deviceDisplayName=' + this.a1s_1 + ', additionalSpecifications=' + toString_0(this.b1s_1) + ', registrationCreatedOn=' + this.c1s_1.toString() + ')';
  };
  protoOf(AltBeaconDeviceRegistration).hashCode = function () {
    var result = this.manufacturerId;
    result = imul(result, 31) + this.organizationId.hashCode() | 0;
    result = imul(result, 31) + this.majorId | 0;
    result = imul(result, 31) + this.minorId | 0;
    result = imul(result, 31) + this.referenceRssi | 0;
    result = imul(result, 31) + (this.a1s_1 == null ? 0 : getStringHashCode(this.a1s_1)) | 0;
    result = imul(result, 31) + (this.b1s_1 == null ? 0 : this.b1s_1.hashCode()) | 0;
    result = imul(result, 31) + this.c1s_1.hashCode() | 0;
    return result;
  };
  protoOf(AltBeaconDeviceRegistration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AltBeaconDeviceRegistration))
      return false;
    if (!(this.manufacturerId === other.manufacturerId))
      return false;
    if (!this.organizationId.equals(other.organizationId))
      return false;
    if (!(this.majorId === other.majorId))
      return false;
    if (!(this.minorId === other.minorId))
      return false;
    if (!(this.referenceRssi === other.referenceRssi))
      return false;
    if (!(this.a1s_1 == other.a1s_1))
      return false;
    if (!equals(this.b1s_1, other.b1s_1))
      return false;
    if (!this.c1s_1.equals(other.c1s_1))
      return false;
    return true;
  };
  function Companion_28() {
  }
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
  protoOf(AltBeaconDeviceRegistrationBuilder).r1s = function (_set____db54di) {
    this.manufacturerId = _set____db54di;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).e1s = function () {
    return this.manufacturerId;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).s1s = function (_set____db54di) {
    this.organizationId = _set____db54di;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).f1s = function () {
    return this.organizationId;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).t1s = function (_set____db54di) {
    this.majorId = _set____db54di;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).g1s = function () {
    return this.majorId;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).u1s = function (_set____db54di) {
    this.minorId = _set____db54di;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).h1s = function () {
    return this.minorId;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).v1s = function (_set____db54di) {
    this.referenceRssi = _set____db54di;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).i1s = function () {
    return this.referenceRssi;
  };
  protoOf(AltBeaconDeviceRegistrationBuilder).build = function () {
    return new AltBeaconDeviceRegistration(this.manufacturerId, this.organizationId, this.majorId, this.minorId, this.referenceRssi, this.deviceDisplayName, this.additionalSpecifications);
  };
  function BLEHeartRateDevice$Companion$$childSerializers$_anonymous__dij2gn() {
    var tmp = NamespacedIdSerializer_getInstance();
    var tmp_0 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashMapSerializer(tmp, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$0));
  }
  function Sensors_0() {
    Sensors_instance_0 = this;
    DataTypeSamplingSchemeMap.call(this);
    this.HEART_RATE = this.h1i(new NoOptionsSamplingScheme(CarpDataTypes_getInstance().HEART_RATE));
    this.INTERBEAT_INTERVAL = this.h1i(new NoOptionsSamplingScheme(CarpDataTypes_getInstance().INTERBEAT_INTERVAL));
    this.SENSOR_SKIN_CONTACT = this.h1i(new NoOptionsSamplingScheme(CarpDataTypes_getInstance().SENSOR_SKIN_CONTACT));
  }
  protoOf(Sensors_0).r1l = function () {
    return this.HEART_RATE;
  };
  protoOf(Sensors_0).t1l = function () {
    return this.INTERBEAT_INTERVAL;
  };
  protoOf(Sensors_0).v1l = function () {
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
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a1t_1 = [null, null, lazy(tmp_0, BLEHeartRateDevice$Companion$$childSerializers$_anonymous__dij2gn)];
  }
  var Companion_instance_30;
  function Companion_getInstance_30() {
    if (Companion_instance_30 == null)
      new Companion_29();
    return Companion_instance_30;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.BLEHeartRateDevice', this, 3);
    tmp0_serialDesc.pv('roleName', false);
    tmp0_serialDesc.pv('isOptional', true);
    tmp0_serialDesc.pv('defaultSamplingConfiguration', true);
    this.b1t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).c1t = function (encoder, value) {
    var tmp0_desc = this.b1t_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().a1t_1;
    tmp1_output.mp(tmp0_desc, 0, value.d1t_1);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.e1t_1 === false)) {
      tmp1_output.ep(tmp0_desc, 1, value.e1t_1);
    }
    if (tmp1_output.up(tmp0_desc, 2) ? true : !equals(value.f1t_1, emptyMap())) {
      tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.f1t_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_19).nk = function (encoder, value) {
    return this.c1t(encoder, value instanceof BLEHeartRateDevice ? value : THROW_CCE());
  };
  protoOf($serializer_19).ok = function (decoder) {
    var tmp0_desc = this.b1t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_30().a1t_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.zn(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.zn(tmp0_desc, 1);
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
    return BLEHeartRateDevice_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_19).mk = function () {
    return this.b1t_1;
  };
  protoOf($serializer_19).ew = function () {
    var tmp0_cached = Companion_getInstance_30().a1t_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[2].s2()];
  };
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function BLEHeartRateDevice_init_$Init$(seen0, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_19().b1t_1);
    }
    DeviceConfiguration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.d1t_1 = roleName;
    if (0 === (seen0 & 2))
      $this.e1t_1 = false;
    else
      $this.e1t_1 = isOptional;
    if (0 === (seen0 & 4))
      $this.f1t_1 = emptyMap();
    else
      $this.f1t_1 = defaultSamplingConfiguration;
    return $this;
  }
  function BLEHeartRateDevice_init_$Create$(seen0, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker) {
    return BLEHeartRateDevice_init_$Init$(seen0, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(BLEHeartRateDevice)));
  }
  function BLEHeartRateDevice(roleName, isOptional) {
    Companion_getInstance_30();
    isOptional = isOptional === VOID ? false : isOptional;
    DeviceConfiguration.call(this);
    this.d1t_1 = roleName;
    this.e1t_1 = isOptional;
    this.f1t_1 = emptyMap();
  }
  protoOf(BLEHeartRateDevice).q1r = function () {
    return this.d1t_1;
  };
  protoOf(BLEHeartRateDevice).r1r = function () {
    return this.e1t_1;
  };
  protoOf(BLEHeartRateDevice).getSupportedDataTypes = function () {
    return Sensors_getInstance_0().m2();
  };
  protoOf(BLEHeartRateDevice).getDataTypeSamplingSchemes = function () {
    return Sensors_getInstance_0();
  };
  protoOf(BLEHeartRateDevice).s1r = function () {
    return this.f1t_1;
  };
  protoOf(BLEHeartRateDevice).createDeviceRegistrationBuilder = function () {
    return new MACAddressDeviceRegistrationBuilder();
  };
  protoOf(BLEHeartRateDevice).t1r = function () {
    return getKClass(MACAddressDeviceRegistration);
  };
  protoOf(BLEHeartRateDevice).isValidRegistration = function (registration) {
    return Trilean_TRUE_getInstance();
  };
  protoOf(BLEHeartRateDevice).sd = function () {
    return this.d1t_1;
  };
  protoOf(BLEHeartRateDevice).td = function () {
    return this.e1t_1;
  };
  protoOf(BLEHeartRateDevice).u1r = function (roleName, isOptional) {
    return new BLEHeartRateDevice(roleName, isOptional);
  };
  protoOf(BLEHeartRateDevice).copy = function (roleName, isOptional, $super) {
    roleName = roleName === VOID ? this.d1t_1 : roleName;
    isOptional = isOptional === VOID ? this.e1t_1 : isOptional;
    return $super === VOID ? this.u1r(roleName, isOptional) : $super.u1r.call(this, roleName, isOptional);
  };
  protoOf(BLEHeartRateDevice).toString = function () {
    return 'BLEHeartRateDevice(roleName=' + this.d1t_1 + ', isOptional=' + this.e1t_1 + ')';
  };
  protoOf(BLEHeartRateDevice).hashCode = function () {
    var result = getStringHashCode(this.d1t_1);
    result = imul(result, 31) + getBooleanHashCode(this.e1t_1) | 0;
    return result;
  };
  protoOf(BLEHeartRateDevice).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BLEHeartRateDevice))
      return false;
    if (!(this.d1t_1 === other.d1t_1))
      return false;
    if (!(this.e1t_1 === other.e1t_1))
      return false;
    return true;
  };
  function BLESerialNumberDeviceRegistration$Companion$$childSerializers$_anonymous__d04mgz() {
    return Companion_instance_0.i18();
  }
  function Companion_30() {
    Companion_instance_31 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g1t_1 = [null, null, lazy(tmp_0, BLESerialNumberDeviceRegistration$Companion$$childSerializers$_anonymous__d04mgz), null, null];
  }
  var Companion_instance_31;
  function Companion_getInstance_31() {
    if (Companion_instance_31 == null)
      new Companion_30();
    return Companion_instance_31;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.BLESerialNumberDeviceRegistration', this, 5);
    tmp0_serialDesc.pv('serialNumber', false);
    tmp0_serialDesc.pv('deviceDisplayName', true);
    tmp0_serialDesc.pv('additionalSpecifications', true);
    tmp0_serialDesc.pv('registrationCreatedOn', false);
    tmp0_serialDesc.pv('deviceId', false);
    this.h1t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).i1t = function (encoder, value) {
    var tmp0_desc = this.h1t_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_31().g1t_1;
    tmp1_output.mp(tmp0_desc, 0, value.serialNumber);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.j1t_1 == null)) {
      tmp1_output.qp(tmp0_desc, 1, StringSerializer_getInstance(), value.j1t_1);
    }
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.k1t_1 == null)) {
      tmp1_output.qp(tmp0_desc, 2, tmp2_cached[2].s2(), value.k1t_1);
    }
    tmp1_output.op(tmp0_desc, 3, InstantSerializer_getInstance(), value.l1t_1);
    tmp1_output.mp(tmp0_desc, 4, value.m1t_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_20).nk = function (encoder, value) {
    return this.i1t(encoder, value instanceof BLESerialNumberDeviceRegistration ? value : THROW_CCE());
  };
  protoOf($serializer_20).ok = function (decoder) {
    var tmp0_desc = this.h1t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xn(tmp0_desc);
    var tmp10_cached = Companion_getInstance_31().g1t_1;
    if (tmp9_input.no()) {
      tmp4_local0 = tmp9_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.lo(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.lo(tmp0_desc, 2, tmp10_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ho(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.lo(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.lo(tmp0_desc, 2, tmp10_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ho(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return BLESerialNumberDeviceRegistration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_20).mk = function () {
    return this.h1t_1;
  };
  protoOf($serializer_20).ew = function () {
    var tmp0_cached = Companion_getInstance_31().g1t_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2].s2()), InstantSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function BLESerialNumberDeviceRegistration_init_$Init$(seen0, serialNumber, deviceDisplayName, additionalSpecifications, registrationCreatedOn, deviceId, serializationConstructorMarker, $this) {
    if (!(25 === (25 & seen0))) {
      throwMissingFieldException(seen0, 25, $serializer_getInstance_20().h1t_1);
    }
    DeviceRegistration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.serialNumber = serialNumber;
    if (0 === (seen0 & 2))
      $this.j1t_1 = null;
    else
      $this.j1t_1 = deviceDisplayName;
    if (0 === (seen0 & 4))
      $this.k1t_1 = null;
    else
      $this.k1t_1 = additionalSpecifications;
    $this.l1t_1 = registrationCreatedOn;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = $this.serialNumber;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.m1t_1 = deviceId;
    return $this;
  }
  function BLESerialNumberDeviceRegistration_init_$Create$(seen0, serialNumber, deviceDisplayName, additionalSpecifications, registrationCreatedOn, deviceId, serializationConstructorMarker) {
    return BLESerialNumberDeviceRegistration_init_$Init$(seen0, serialNumber, deviceDisplayName, additionalSpecifications, registrationCreatedOn, deviceId, serializationConstructorMarker, objectCreate(protoOf(BLESerialNumberDeviceRegistration)));
  }
  function BLESerialNumberDeviceRegistration(serialNumber, deviceDisplayName, additionalSpecifications, registrationCreatedOn) {
    Companion_getInstance_31();
    deviceDisplayName = deviceDisplayName === VOID ? null : deviceDisplayName;
    additionalSpecifications = additionalSpecifications === VOID ? null : additionalSpecifications;
    registrationCreatedOn = registrationCreatedOn === VOID ? System_instance.lg() : registrationCreatedOn;
    DeviceRegistration.call(this);
    this.serialNumber = serialNumber;
    this.j1t_1 = deviceDisplayName;
    this.k1t_1 = additionalSpecifications;
    this.l1t_1 = registrationCreatedOn;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.serialNumber;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.m1t_1 = this.serialNumber;
  }
  protoOf(BLESerialNumberDeviceRegistration).n1t = function () {
    return this.serialNumber;
  };
  protoOf(BLESerialNumberDeviceRegistration).j1s = function () {
    return this.j1t_1;
  };
  protoOf(BLESerialNumberDeviceRegistration).k1s = function () {
    return this.k1t_1;
  };
  protoOf(BLESerialNumberDeviceRegistration).l1s = function () {
    return this.l1t_1;
  };
  protoOf(BLESerialNumberDeviceRegistration).m1s = function () {
    return this.m1t_1;
  };
  protoOf(BLESerialNumberDeviceRegistration).sd = function () {
    return this.serialNumber;
  };
  protoOf(BLESerialNumberDeviceRegistration).td = function () {
    return this.j1t_1;
  };
  protoOf(BLESerialNumberDeviceRegistration).m1j = function () {
    return this.k1t_1;
  };
  protoOf(BLESerialNumberDeviceRegistration).l1k = function () {
    return this.l1t_1;
  };
  protoOf(BLESerialNumberDeviceRegistration).o1t = function (serialNumber, deviceDisplayName, additionalSpecifications, registrationCreatedOn) {
    return new BLESerialNumberDeviceRegistration(serialNumber, deviceDisplayName, additionalSpecifications, registrationCreatedOn);
  };
  protoOf(BLESerialNumberDeviceRegistration).copy = function (serialNumber, deviceDisplayName, additionalSpecifications, registrationCreatedOn, $super) {
    serialNumber = serialNumber === VOID ? this.serialNumber : serialNumber;
    deviceDisplayName = deviceDisplayName === VOID ? this.j1t_1 : deviceDisplayName;
    additionalSpecifications = additionalSpecifications === VOID ? this.k1t_1 : additionalSpecifications;
    registrationCreatedOn = registrationCreatedOn === VOID ? this.l1t_1 : registrationCreatedOn;
    return $super === VOID ? this.o1t(serialNumber, deviceDisplayName, additionalSpecifications, registrationCreatedOn) : $super.o1t.call(this, serialNumber, deviceDisplayName, additionalSpecifications, registrationCreatedOn);
  };
  protoOf(BLESerialNumberDeviceRegistration).toString = function () {
    return 'BLESerialNumberDeviceRegistration(serialNumber=' + this.serialNumber + ', deviceDisplayName=' + this.j1t_1 + ', additionalSpecifications=' + toString_0(this.k1t_1) + ', registrationCreatedOn=' + this.l1t_1.toString() + ')';
  };
  protoOf(BLESerialNumberDeviceRegistration).hashCode = function () {
    var result = getStringHashCode(this.serialNumber);
    result = imul(result, 31) + (this.j1t_1 == null ? 0 : getStringHashCode(this.j1t_1)) | 0;
    result = imul(result, 31) + (this.k1t_1 == null ? 0 : this.k1t_1.hashCode()) | 0;
    result = imul(result, 31) + this.l1t_1.hashCode() | 0;
    return result;
  };
  protoOf(BLESerialNumberDeviceRegistration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BLESerialNumberDeviceRegistration))
      return false;
    if (!(this.serialNumber === other.serialNumber))
      return false;
    if (!(this.j1t_1 == other.j1t_1))
      return false;
    if (!equals(this.k1t_1, other.k1t_1))
      return false;
    if (!this.l1t_1.equals(other.l1t_1))
      return false;
    return true;
  };
  function Companion_31() {
  }
  var Companion_instance_32;
  function Companion_getInstance_32() {
    return Companion_instance_32;
  }
  function BLESerialNumberDeviceRegistrationBuilder() {
    DeviceRegistrationBuilder.call(this);
    this.serialNumber = '';
  }
  protoOf(BLESerialNumberDeviceRegistrationBuilder).p1t = function (_set____db54di) {
    this.serialNumber = _set____db54di;
  };
  protoOf(BLESerialNumberDeviceRegistrationBuilder).n1t = function () {
    return this.serialNumber;
  };
  protoOf(BLESerialNumberDeviceRegistrationBuilder).build = function () {
    return new BLESerialNumberDeviceRegistration(this.serialNumber, this.deviceDisplayName, this.additionalSpecifications);
  };
  function CustomProtocolDevice$Companion$$childSerializers$_anonymous__u6yqmj() {
    var tmp = NamespacedIdSerializer_getInstance();
    var tmp_0 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashMapSerializer(tmp, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$0));
  }
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
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q1t_1 = [null, null, null, lazy(tmp_0, CustomProtocolDevice$Companion$$childSerializers$_anonymous__u6yqmj)];
  }
  var Companion_instance_33;
  function Companion_getInstance_33() {
    if (Companion_instance_33 == null)
      new Companion_32();
    return Companion_instance_33;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.CustomProtocolDevice', this, 4);
    tmp0_serialDesc.pv('isPrimaryDevice', false);
    tmp0_serialDesc.pv('roleName', false);
    tmp0_serialDesc.pv('isOptional', true);
    tmp0_serialDesc.pv('defaultSamplingConfiguration', true);
    this.r1t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).s1t = function (encoder, value) {
    var tmp0_desc = this.r1t_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_33().q1t_1;
    tmp1_output.ep(tmp0_desc, 0, value.t1t_1);
    tmp1_output.mp(tmp0_desc, 1, value.v1t_1);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.w1t_1 === false)) {
      tmp1_output.ep(tmp0_desc, 2, value.w1t_1);
    }
    if (tmp1_output.up(tmp0_desc, 3) ? true : !equals(value.x1t_1, emptyMap())) {
      tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.x1t_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_21).nk = function (encoder, value) {
    return this.s1t(encoder, value instanceof CustomProtocolDevice ? value : THROW_CCE());
  };
  protoOf($serializer_21).ok = function (decoder) {
    var tmp0_desc = this.r1t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_33().q1t_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.zn(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.zn(tmp0_desc, 2);
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
            tmp4_local0 = tmp8_input.zn(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.zn(tmp0_desc, 2);
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
    return CustomProtocolDevice_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_21).mk = function () {
    return this.r1t_1;
  };
  protoOf($serializer_21).ew = function () {
    var tmp0_cached = Companion_getInstance_33().q1t_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[3].s2()];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function CustomProtocolDevice_init_$Init$(seen0, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_21().r1t_1);
    }
    PrimaryDeviceConfiguration_init_$Init$(seen0, isPrimaryDevice, serializationConstructorMarker, $this);
    $this.v1t_1 = roleName;
    if (0 === (seen0 & 4))
      $this.w1t_1 = false;
    else
      $this.w1t_1 = isOptional;
    if (0 === (seen0 & 8))
      $this.x1t_1 = emptyMap();
    else
      $this.x1t_1 = defaultSamplingConfiguration;
    return $this;
  }
  function CustomProtocolDevice_init_$Create$(seen0, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker) {
    return CustomProtocolDevice_init_$Init$(seen0, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(CustomProtocolDevice)));
  }
  function CustomProtocolDevice(roleName, isOptional) {
    Companion_getInstance_33();
    isOptional = isOptional === VOID ? false : isOptional;
    PrimaryDeviceConfiguration.call(this);
    this.v1t_1 = roleName;
    this.w1t_1 = isOptional;
    this.x1t_1 = emptyMap();
  }
  protoOf(CustomProtocolDevice).q1r = function () {
    return this.v1t_1;
  };
  protoOf(CustomProtocolDevice).r1r = function () {
    return this.w1t_1;
  };
  protoOf(CustomProtocolDevice).getSupportedDataTypes = function () {
    return Sensors_getInstance_1().m2();
  };
  protoOf(CustomProtocolDevice).getDataTypeSamplingSchemes = function () {
    return Sensors_getInstance_1();
  };
  protoOf(CustomProtocolDevice).s1r = function () {
    return this.x1t_1;
  };
  protoOf(CustomProtocolDevice).createDeviceRegistrationBuilder = function () {
    return new DefaultDeviceRegistrationBuilder();
  };
  protoOf(CustomProtocolDevice).t1r = function () {
    return getKClass(DefaultDeviceRegistration);
  };
  protoOf(CustomProtocolDevice).isValidRegistration = function (registration) {
    return Trilean_TRUE_getInstance();
  };
  protoOf(CustomProtocolDevice).sd = function () {
    return this.v1t_1;
  };
  protoOf(CustomProtocolDevice).td = function () {
    return this.w1t_1;
  };
  protoOf(CustomProtocolDevice).u1r = function (roleName, isOptional) {
    return new CustomProtocolDevice(roleName, isOptional);
  };
  protoOf(CustomProtocolDevice).copy = function (roleName, isOptional, $super) {
    roleName = roleName === VOID ? this.v1t_1 : roleName;
    isOptional = isOptional === VOID ? this.w1t_1 : isOptional;
    return $super === VOID ? this.u1r(roleName, isOptional) : $super.u1r.call(this, roleName, isOptional);
  };
  protoOf(CustomProtocolDevice).toString = function () {
    return 'CustomProtocolDevice(roleName=' + this.v1t_1 + ', isOptional=' + this.w1t_1 + ')';
  };
  protoOf(CustomProtocolDevice).hashCode = function () {
    var result = getStringHashCode(this.v1t_1);
    result = imul(result, 31) + getBooleanHashCode(this.w1t_1) | 0;
    return result;
  };
  protoOf(CustomProtocolDevice).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomProtocolDevice))
      return false;
    if (!(this.v1t_1 === other.v1t_1))
      return false;
    if (!(this.w1t_1 === other.w1t_1))
      return false;
    return true;
  };
  function DefaultDeviceRegistration$Companion$$childSerializers$_anonymous__2dfzl2() {
    return Companion_instance_0.i18();
  }
  function Companion_33() {
    Companion_instance_34 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.z1t_1 = [null, lazy(tmp_0, DefaultDeviceRegistration$Companion$$childSerializers$_anonymous__2dfzl2), null, null];
  }
  var Companion_instance_34;
  function Companion_getInstance_34() {
    if (Companion_instance_34 == null)
      new Companion_33();
    return Companion_instance_34;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.DefaultDeviceRegistration', this, 4);
    tmp0_serialDesc.pv('deviceDisplayName', true);
    tmp0_serialDesc.pv('additionalSpecifications', true);
    tmp0_serialDesc.pv('deviceId', false);
    tmp0_serialDesc.pv('registrationCreatedOn', false);
    this.a1u_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).b1u = function (encoder, value) {
    var tmp0_desc = this.a1u_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_34().z1t_1;
    if (tmp1_output.up(tmp0_desc, 0) ? true : !(value.c1u_1 == null)) {
      tmp1_output.qp(tmp0_desc, 0, StringSerializer_getInstance(), value.c1u_1);
    }
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.d1u_1 == null)) {
      tmp1_output.qp(tmp0_desc, 1, tmp2_cached[1].s2(), value.d1u_1);
    }
    tmp1_output.mp(tmp0_desc, 2, value.e1u_1);
    tmp1_output.op(tmp0_desc, 3, InstantSerializer_getInstance(), value.f1u_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_22).nk = function (encoder, value) {
    return this.b1u(encoder, value instanceof DefaultDeviceRegistration ? value : THROW_CCE());
  };
  protoOf($serializer_22).ok = function (decoder) {
    var tmp0_desc = this.a1u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_34().z1t_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.lo(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.lo(tmp0_desc, 1, tmp9_cached[1].s2(), tmp5_local1);
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
            tmp4_local0 = tmp8_input.lo(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.lo(tmp0_desc, 1, tmp9_cached[1].s2(), tmp5_local1);
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
    return DefaultDeviceRegistration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_22).mk = function () {
    return this.a1u_1;
  };
  protoOf($serializer_22).ew = function () {
    var tmp0_cached = Companion_getInstance_34().z1t_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[1].s2()), StringSerializer_getInstance(), InstantSerializer_getInstance()];
  };
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function DefaultDeviceRegistration_init_$Init$(seen0, deviceDisplayName, additionalSpecifications, deviceId, registrationCreatedOn, serializationConstructorMarker, $this) {
    if (!(12 === (12 & seen0))) {
      throwMissingFieldException(seen0, 12, $serializer_getInstance_22().a1u_1);
    }
    DeviceRegistration_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.c1u_1 = null;
    else
      $this.c1u_1 = deviceDisplayName;
    if (0 === (seen0 & 2))
      $this.d1u_1 = null;
    else
      $this.d1u_1 = additionalSpecifications;
    $this.e1u_1 = deviceId;
    $this.f1u_1 = registrationCreatedOn;
    return $this;
  }
  function DefaultDeviceRegistration_init_$Create$(seen0, deviceDisplayName, additionalSpecifications, deviceId, registrationCreatedOn, serializationConstructorMarker) {
    return DefaultDeviceRegistration_init_$Init$(seen0, deviceDisplayName, additionalSpecifications, deviceId, registrationCreatedOn, serializationConstructorMarker, objectCreate(protoOf(DefaultDeviceRegistration)));
  }
  function DefaultDeviceRegistration(deviceDisplayName, additionalSpecifications, deviceId, registrationCreatedOn) {
    Companion_getInstance_34();
    deviceDisplayName = deviceDisplayName === VOID ? null : deviceDisplayName;
    additionalSpecifications = additionalSpecifications === VOID ? null : additionalSpecifications;
    deviceId = deviceId === VOID ? Companion_instance_9.randomUUID().toString() : deviceId;
    registrationCreatedOn = registrationCreatedOn === VOID ? System_instance.lg() : registrationCreatedOn;
    DeviceRegistration.call(this);
    this.c1u_1 = deviceDisplayName;
    this.d1u_1 = additionalSpecifications;
    this.e1u_1 = deviceId;
    this.f1u_1 = registrationCreatedOn;
  }
  protoOf(DefaultDeviceRegistration).j1s = function () {
    return this.c1u_1;
  };
  protoOf(DefaultDeviceRegistration).k1s = function () {
    return this.d1u_1;
  };
  protoOf(DefaultDeviceRegistration).m1s = function () {
    return this.e1u_1;
  };
  protoOf(DefaultDeviceRegistration).l1s = function () {
    return this.f1u_1;
  };
  protoOf(DefaultDeviceRegistration).sd = function () {
    return this.c1u_1;
  };
  protoOf(DefaultDeviceRegistration).td = function () {
    return this.d1u_1;
  };
  protoOf(DefaultDeviceRegistration).m1j = function () {
    return this.e1u_1;
  };
  protoOf(DefaultDeviceRegistration).l1k = function () {
    return this.f1u_1;
  };
  protoOf(DefaultDeviceRegistration).g1u = function (deviceDisplayName, additionalSpecifications, deviceId, registrationCreatedOn) {
    return new DefaultDeviceRegistration(deviceDisplayName, additionalSpecifications, deviceId, registrationCreatedOn);
  };
  protoOf(DefaultDeviceRegistration).copy = function (deviceDisplayName, additionalSpecifications, deviceId, registrationCreatedOn, $super) {
    deviceDisplayName = deviceDisplayName === VOID ? this.c1u_1 : deviceDisplayName;
    additionalSpecifications = additionalSpecifications === VOID ? this.d1u_1 : additionalSpecifications;
    deviceId = deviceId === VOID ? this.e1u_1 : deviceId;
    registrationCreatedOn = registrationCreatedOn === VOID ? this.f1u_1 : registrationCreatedOn;
    return $super === VOID ? this.g1u(deviceDisplayName, additionalSpecifications, deviceId, registrationCreatedOn) : $super.g1u.call(this, deviceDisplayName, additionalSpecifications, deviceId, registrationCreatedOn);
  };
  protoOf(DefaultDeviceRegistration).toString = function () {
    return 'DefaultDeviceRegistration(deviceDisplayName=' + this.c1u_1 + ', additionalSpecifications=' + toString_0(this.d1u_1) + ', deviceId=' + this.e1u_1 + ', registrationCreatedOn=' + this.f1u_1.toString() + ')';
  };
  protoOf(DefaultDeviceRegistration).hashCode = function () {
    var result = this.c1u_1 == null ? 0 : getStringHashCode(this.c1u_1);
    result = imul(result, 31) + (this.d1u_1 == null ? 0 : this.d1u_1.hashCode()) | 0;
    result = imul(result, 31) + getStringHashCode(this.e1u_1) | 0;
    result = imul(result, 31) + this.f1u_1.hashCode() | 0;
    return result;
  };
  protoOf(DefaultDeviceRegistration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DefaultDeviceRegistration))
      return false;
    if (!(this.c1u_1 == other.c1u_1))
      return false;
    if (!equals(this.d1u_1, other.d1u_1))
      return false;
    if (!(this.e1u_1 === other.e1u_1))
      return false;
    if (!this.f1u_1.equals(other.f1u_1))
      return false;
    return true;
  };
  function Companion_34() {
  }
  var Companion_instance_35;
  function Companion_getInstance_35() {
    return Companion_instance_35;
  }
  function DefaultDeviceRegistrationBuilder() {
    DeviceRegistrationBuilder.call(this);
    this.deviceId = Companion_instance_9.randomUUID().toString();
  }
  protoOf(DefaultDeviceRegistrationBuilder).h1u = function (_set____db54di) {
    this.deviceId = _set____db54di;
  };
  protoOf(DefaultDeviceRegistrationBuilder).m1s = function () {
    return this.deviceId;
  };
  protoOf(DefaultDeviceRegistrationBuilder).build = function () {
    return new DefaultDeviceRegistration(this.deviceDisplayName, this.additionalSpecifications, this.deviceId);
  };
  function Companion_35() {
  }
  protoOf(Companion_35).i1u = function (typeSerial0, typeSerial1) {
    var tmp = getKClass(DeviceConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  };
  protoOf(Companion_35).pw = function (typeParamsSerializers) {
    return this.i1u(typeParamsSerializers[0], typeParamsSerializers[1]);
  };
  var Companion_instance_36;
  function Companion_getInstance_36() {
    return Companion_instance_36;
  }
  function DeviceConfiguration_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function DeviceConfiguration$createRegistration$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function DeviceConfiguration() {
  }
  protoOf(DeviceConfiguration).validateDefaultSamplingConfiguration = function () {
    var canBeValidated = this.getSupportedDataTypes();
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.defaultSamplingConfiguration;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.f1().r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      if (canBeValidated.o1(element.r2())) {
        destination.k2(element.r2(), element.s2());
      }
    }
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = destination.f1().r();
    while (_iterator__ex2g4s_0.s()) {
      var _destruct__k2r9zo = _iterator__ex2g4s_0.t();
      // Inline function 'kotlin.collections.component1' call
      var dataType = _destruct__k2r9zo.r2();
      // Inline function 'kotlin.collections.component2' call
      var samplingConfiguration = _destruct__k2r9zo.s2();
      // Inline function 'kotlin.checkNotNull' call
      var tmp0_0 = this.getDataTypeSamplingSchemes().q2(dataType);
      var tmp$ret$8;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0_0 == null) {
          var message = 'Required value was null.';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp$ret$8 = tmp0_0;
          break $l$block;
        }
      }
      var samplingScheme = tmp$ret$8;
      // Inline function 'kotlin.check' call
      if (!samplingScheme.isValid(samplingConfiguration)) {
        var message_0 = 'The sampling configuration for data type `' + dataType.toString() + '` is invalid.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
  };
  protoOf(DeviceConfiguration).v1r = function (builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.createDeviceRegistrationBuilder();
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
    return $super === VOID ? this.v1r(builder) : $super.v1r.call(this, builder);
  };
  protoOf(DeviceConfiguration).isDefinitelyInvalidRegistration = function (registration) {
    var isValidType = this.t1r().i9(registration);
    var anyDevice = this instanceof DeviceConfiguration ? this : THROW_CCE();
    return !isValidType || anyDevice.isValidRegistration(registration).equals(Trilean_FALSE_getInstance());
  };
  function DeviceConfigurationBuilder$samplingConfigurationBuilder$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function DeviceConfigurationBuilder() {
    var tmp = this;
    tmp.j1u_1 = DeviceConfigurationBuilder$samplingConfigurationBuilder$lambda;
  }
  protoOf(DeviceConfigurationBuilder).defaultSamplingConfiguration = function (builder) {
    this.j1u_1 = builder;
  };
  protoOf(DeviceConfigurationBuilder).buildSamplingConfiguration = function () {
    var tmp0 = this.createSamplingConfigurationMapBuilder();
    // Inline function 'kotlin.apply' call
    this.j1u_1(tmp0);
    return tmp0.l1u();
  };
  function _get_$cachedSerializer__te6jhj_3($this) {
    return $this.m1u_1.s2();
  }
  function DeviceRegistration$Companion$_anonymous__ywvna8() {
    var tmp = getKClass(DeviceRegistration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_36() {
    Companion_instance_37 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.m1u_1 = lazy(tmp_0, DeviceRegistration$Companion$_anonymous__ywvna8);
  }
  protoOf(Companion_36).i18 = function () {
    return _get_$cachedSerializer__te6jhj_3(this);
  };
  protoOf(Companion_36).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_37;
  function Companion_getInstance_37() {
    if (Companion_instance_37 == null)
      new Companion_36();
    return Companion_instance_37;
  }
  function DeviceRegistration_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function DeviceRegistration() {
    Companion_getInstance_37();
  }
  function Companion_37() {
  }
  protoOf(Companion_37).n1u = function (typeSerial0) {
    return NotSerializable_getInstance();
  };
  protoOf(Companion_37).pw = function (typeParamsSerializers) {
    return this.n1u(typeParamsSerializers[0]);
  };
  var Companion_instance_38;
  function Companion_getInstance_38() {
    return Companion_instance_38;
  }
  function DeviceRegistrationBuilder() {
    this.deviceDisplayName = null;
    this.additionalSpecifications = null;
  }
  protoOf(DeviceRegistrationBuilder).w1s = function (_set____db54di) {
    this.deviceDisplayName = _set____db54di;
  };
  protoOf(DeviceRegistrationBuilder).j1s = function () {
    return this.deviceDisplayName;
  };
  protoOf(DeviceRegistrationBuilder).x1s = function (_set____db54di) {
    this.additionalSpecifications = _set____db54di;
  };
  protoOf(DeviceRegistrationBuilder).k1s = function () {
    return this.additionalSpecifications;
  };
  function MACAddressDeviceRegistration$Companion$$childSerializers$_anonymous__oijeye() {
    return Companion_instance_0.i18();
  }
  function Companion_38() {
    Companion_instance_39 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o1u_1 = [null, null, lazy(tmp_0, MACAddressDeviceRegistration$Companion$$childSerializers$_anonymous__oijeye), null, null];
  }
  var Companion_instance_39;
  function Companion_getInstance_39() {
    if (Companion_instance_39 == null)
      new Companion_38();
    return Companion_instance_39;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration', this, 5);
    tmp0_serialDesc.pv('macAddress', false);
    tmp0_serialDesc.pv('deviceDisplayName', true);
    tmp0_serialDesc.pv('additionalSpecifications', true);
    tmp0_serialDesc.pv('registrationCreatedOn', false);
    tmp0_serialDesc.pv('deviceId', false);
    this.p1u_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).q1u = function (encoder, value) {
    var tmp0_desc = this.p1u_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_39().o1u_1;
    tmp1_output.op(tmp0_desc, 0, MACAddressSerializer_getInstance(), value.macAddress);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.r1u_1 == null)) {
      tmp1_output.qp(tmp0_desc, 1, StringSerializer_getInstance(), value.r1u_1);
    }
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.s1u_1 == null)) {
      tmp1_output.qp(tmp0_desc, 2, tmp2_cached[2].s2(), value.s1u_1);
    }
    tmp1_output.op(tmp0_desc, 3, InstantSerializer_getInstance(), value.t1u_1);
    tmp1_output.mp(tmp0_desc, 4, value.u1u_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_23).nk = function (encoder, value) {
    return this.q1u(encoder, value instanceof MACAddressDeviceRegistration ? value : THROW_CCE());
  };
  protoOf($serializer_23).ok = function (decoder) {
    var tmp0_desc = this.p1u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xn(tmp0_desc);
    var tmp10_cached = Companion_getInstance_39().o1u_1;
    if (tmp9_input.no()) {
      tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, MACAddressSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.lo(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.lo(tmp0_desc, 2, tmp10_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ho(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, MACAddressSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.lo(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.lo(tmp0_desc, 2, tmp10_cached[2].s2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, InstantSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ho(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return MACAddressDeviceRegistration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_23).mk = function () {
    return this.p1u_1;
  };
  protoOf($serializer_23).ew = function () {
    var tmp0_cached = Companion_getInstance_39().o1u_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [MACAddressSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2].s2()), InstantSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function MACAddressDeviceRegistration_init_$Init$(seen0, macAddress, deviceDisplayName, additionalSpecifications, registrationCreatedOn, deviceId, serializationConstructorMarker, $this) {
    if (!(25 === (25 & seen0))) {
      throwMissingFieldException(seen0, 25, $serializer_getInstance_23().p1u_1);
    }
    DeviceRegistration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.macAddress = macAddress;
    if (0 === (seen0 & 2))
      $this.r1u_1 = null;
    else
      $this.r1u_1 = deviceDisplayName;
    if (0 === (seen0 & 4))
      $this.s1u_1 = null;
    else
      $this.s1u_1 = additionalSpecifications;
    $this.t1u_1 = registrationCreatedOn;
    $this.u1u_1 = deviceId;
    return $this;
  }
  function MACAddressDeviceRegistration_init_$Create$(seen0, macAddress, deviceDisplayName, additionalSpecifications, registrationCreatedOn, deviceId, serializationConstructorMarker) {
    return MACAddressDeviceRegistration_init_$Init$(seen0, macAddress, deviceDisplayName, additionalSpecifications, registrationCreatedOn, deviceId, serializationConstructorMarker, objectCreate(protoOf(MACAddressDeviceRegistration)));
  }
  function MACAddressDeviceRegistration(macAddress, deviceDisplayName, additionalSpecifications, registrationCreatedOn) {
    Companion_getInstance_39();
    deviceDisplayName = deviceDisplayName === VOID ? null : deviceDisplayName;
    additionalSpecifications = additionalSpecifications === VOID ? null : additionalSpecifications;
    registrationCreatedOn = registrationCreatedOn === VOID ? System_instance.lg() : registrationCreatedOn;
    DeviceRegistration.call(this);
    this.macAddress = macAddress;
    this.r1u_1 = deviceDisplayName;
    this.s1u_1 = additionalSpecifications;
    this.t1u_1 = registrationCreatedOn;
    this.u1u_1 = this.macAddress.address;
  }
  protoOf(MACAddressDeviceRegistration).v1u = function () {
    return this.macAddress;
  };
  protoOf(MACAddressDeviceRegistration).j1s = function () {
    return this.r1u_1;
  };
  protoOf(MACAddressDeviceRegistration).k1s = function () {
    return this.s1u_1;
  };
  protoOf(MACAddressDeviceRegistration).l1s = function () {
    return this.t1u_1;
  };
  protoOf(MACAddressDeviceRegistration).m1s = function () {
    return this.u1u_1;
  };
  protoOf(MACAddressDeviceRegistration).sd = function () {
    return this.macAddress;
  };
  protoOf(MACAddressDeviceRegistration).td = function () {
    return this.r1u_1;
  };
  protoOf(MACAddressDeviceRegistration).m1j = function () {
    return this.s1u_1;
  };
  protoOf(MACAddressDeviceRegistration).l1k = function () {
    return this.t1u_1;
  };
  protoOf(MACAddressDeviceRegistration).w1u = function (macAddress, deviceDisplayName, additionalSpecifications, registrationCreatedOn) {
    return new MACAddressDeviceRegistration(macAddress, deviceDisplayName, additionalSpecifications, registrationCreatedOn);
  };
  protoOf(MACAddressDeviceRegistration).copy = function (macAddress, deviceDisplayName, additionalSpecifications, registrationCreatedOn, $super) {
    macAddress = macAddress === VOID ? this.macAddress : macAddress;
    deviceDisplayName = deviceDisplayName === VOID ? this.r1u_1 : deviceDisplayName;
    additionalSpecifications = additionalSpecifications === VOID ? this.s1u_1 : additionalSpecifications;
    registrationCreatedOn = registrationCreatedOn === VOID ? this.t1u_1 : registrationCreatedOn;
    return $super === VOID ? this.w1u(macAddress, deviceDisplayName, additionalSpecifications, registrationCreatedOn) : $super.w1u.call(this, macAddress, deviceDisplayName, additionalSpecifications, registrationCreatedOn);
  };
  protoOf(MACAddressDeviceRegistration).toString = function () {
    return 'MACAddressDeviceRegistration(macAddress=' + this.macAddress.toString() + ', deviceDisplayName=' + this.r1u_1 + ', additionalSpecifications=' + toString_0(this.s1u_1) + ', registrationCreatedOn=' + this.t1u_1.toString() + ')';
  };
  protoOf(MACAddressDeviceRegistration).hashCode = function () {
    var result = this.macAddress.hashCode();
    result = imul(result, 31) + (this.r1u_1 == null ? 0 : getStringHashCode(this.r1u_1)) | 0;
    result = imul(result, 31) + (this.s1u_1 == null ? 0 : this.s1u_1.hashCode()) | 0;
    result = imul(result, 31) + this.t1u_1.hashCode() | 0;
    return result;
  };
  protoOf(MACAddressDeviceRegistration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MACAddressDeviceRegistration))
      return false;
    if (!this.macAddress.equals(other.macAddress))
      return false;
    if (!(this.r1u_1 == other.r1u_1))
      return false;
    if (!equals(this.s1u_1, other.s1u_1))
      return false;
    if (!this.t1u_1.equals(other.t1u_1))
      return false;
    return true;
  };
  function Companion_39() {
  }
  var Companion_instance_40;
  function Companion_getInstance_40() {
    return Companion_instance_40;
  }
  function MACAddressDeviceRegistrationBuilder() {
    DeviceRegistrationBuilder.call(this);
    this.macAddress = '';
  }
  protoOf(MACAddressDeviceRegistrationBuilder).x1u = function (_set____db54di) {
    this.macAddress = _set____db54di;
  };
  protoOf(MACAddressDeviceRegistrationBuilder).v1u = function () {
    return this.macAddress;
  };
  protoOf(MACAddressDeviceRegistrationBuilder).build = function () {
    return new MACAddressDeviceRegistration(Companion_instance_2.parse(this.macAddress), this.deviceDisplayName, this.additionalSpecifications);
  };
  function Companion_40() {
  }
  protoOf(Companion_40).y1u = function (typeSerial0, typeSerial1) {
    var tmp = getKClass(PrimaryDeviceConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  };
  protoOf(Companion_40).pw = function (typeParamsSerializers) {
    return this.y1u(typeParamsSerializers[0], typeParamsSerializers[1]);
  };
  var Companion_instance_41;
  function Companion_getInstance_41() {
    return Companion_instance_41;
  }
  function PrimaryDeviceConfiguration_init_$Init$(seen0, isPrimaryDevice, serializationConstructorMarker, $this) {
    DeviceConfiguration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.t1t_1 = isPrimaryDevice;
    return $this;
  }
  function PrimaryDeviceConfiguration() {
    DeviceConfiguration.call(this);
    this.t1t_1 = true;
  }
  protoOf(PrimaryDeviceConfiguration).y1t = function () {
    return this.t1t_1;
  };
  protoOf(PrimaryDeviceConfiguration).atStartOfStudy = function () {
    return create_1(this, Companion_getInstance().mg_1);
  };
  function isPrimary(_this__u8e3s4) {
    return _this__u8e3s4 instanceof PrimaryDeviceConfiguration;
  }
  function Smartphone$Companion$$childSerializers$_anonymous__2fex9h() {
    var tmp = NamespacedIdSerializer_getInstance();
    var tmp_0 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashMapSerializer(tmp, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$0));
  }
  function Smartphone$Tasks$WEB$lambda() {
    return new WebTaskBuilder();
  }
  function Companion_41() {
    Companion_instance_42 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.z1u_1 = [null, null, null, lazy(tmp_0, Smartphone$Companion$$childSerializers$_anonymous__2fex9h)];
  }
  protoOf(Companion_41).create = function (roleName, builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new SmartphoneBuilder();
    builder(this_0);
    var smartphoneBuilder = this_0;
    var configuration = smartphoneBuilder.buildSamplingConfiguration();
    return new Smartphone(roleName, smartphoneBuilder.isOptional, configuration);
  };
  protoOf(Companion_41).i18 = function () {
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
    this.GEOLOCATION = this.h1i(new AdaptiveGranularitySamplingScheme(CarpDataTypes_getInstance().GEOLOCATION));
    this.STEP_COUNT = this.h1i(new NoOptionsSamplingScheme(CarpDataTypes_getInstance().STEP_COUNT));
    var tmp = this;
    var tmp_0 = CarpDataTypes_getInstance().NON_GRAVITATIONAL_ACCELERATION;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration_0(200, DurationUnit_MILLISECONDS_getInstance());
    tmp.NON_GRAVITATIONAL_ACCELERATION = this.h1i(new IntervalSamplingScheme(tmp_0, tmp$ret$0));
    var tmp_1 = this;
    var tmp_2 = CarpDataTypes_getInstance().ACCELERATION;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$1 = toDuration_0(200, DurationUnit_MILLISECONDS_getInstance());
    tmp_1.ACCELERATION = this.h1i(new IntervalSamplingScheme(tmp_2, tmp$ret$1));
    var tmp_3 = this;
    var tmp_4 = CarpDataTypes_getInstance().ANGULAR_VELOCITY;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$2 = toDuration_0(200, DurationUnit_MILLISECONDS_getInstance());
    tmp_3.ANGULAR_VELOCITY = this.h1i(new IntervalSamplingScheme(tmp_4, tmp$ret$2));
  }
  protoOf(Sensors_2).j1l = function () {
    return this.GEOLOCATION;
  };
  protoOf(Sensors_2).l1l = function () {
    return this.STEP_COUNT;
  };
  protoOf(Sensors_2).x1l = function () {
    return this.NON_GRAVITATIONAL_ACCELERATION;
  };
  protoOf(Sensors_2).b1m = function () {
    return this.ACCELERATION;
  };
  protoOf(Sensors_2).d1m = function () {
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
  protoOf(Tasks_2).e1v = function () {
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
    tmp0_serialDesc.pv('isPrimaryDevice', false);
    tmp0_serialDesc.pv('roleName', false);
    tmp0_serialDesc.pv('isOptional', true);
    tmp0_serialDesc.pv('defaultSamplingConfiguration', true);
    this.f1v_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).g1v = function (encoder, value) {
    var tmp0_desc = this.f1v_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_42().z1u_1;
    tmp1_output.ep(tmp0_desc, 0, value.t1t_1);
    tmp1_output.mp(tmp0_desc, 1, value.i1v_1);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.j1v_1 === false)) {
      tmp1_output.ep(tmp0_desc, 2, value.j1v_1);
    }
    if (tmp1_output.up(tmp0_desc, 3) ? true : !equals(value.k1v_1, emptyMap())) {
      tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.k1v_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_24).nk = function (encoder, value) {
    return this.g1v(encoder, value instanceof Smartphone ? value : THROW_CCE());
  };
  protoOf($serializer_24).ok = function (decoder) {
    var tmp0_desc = this.f1v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_42().z1u_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.zn(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.zn(tmp0_desc, 2);
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
            tmp4_local0 = tmp8_input.zn(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.zn(tmp0_desc, 2);
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
    return Smartphone_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_24).mk = function () {
    return this.f1v_1;
  };
  protoOf($serializer_24).ew = function () {
    var tmp0_cached = Companion_getInstance_42().z1u_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[3].s2()];
  };
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function Smartphone_init_$Init$(seen0, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_24().f1v_1);
    }
    PrimaryDeviceConfiguration_init_$Init$(seen0, isPrimaryDevice, serializationConstructorMarker, $this);
    $this.i1v_1 = roleName;
    if (0 === (seen0 & 4))
      $this.j1v_1 = false;
    else
      $this.j1v_1 = isOptional;
    if (0 === (seen0 & 8))
      $this.k1v_1 = emptyMap();
    else
      $this.k1v_1 = defaultSamplingConfiguration;
    return $this;
  }
  function Smartphone_init_$Create$(seen0, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker) {
    return Smartphone_init_$Init$(seen0, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(Smartphone)));
  }
  function Smartphone(roleName, isOptional, defaultSamplingConfiguration) {
    Companion_getInstance_42();
    isOptional = isOptional === VOID ? false : isOptional;
    defaultSamplingConfiguration = defaultSamplingConfiguration === VOID ? emptyMap() : defaultSamplingConfiguration;
    PrimaryDeviceConfiguration.call(this);
    this.i1v_1 = roleName;
    this.j1v_1 = isOptional;
    this.k1v_1 = defaultSamplingConfiguration;
  }
  protoOf(Smartphone).q1r = function () {
    return this.i1v_1;
  };
  protoOf(Smartphone).r1r = function () {
    return this.j1v_1;
  };
  protoOf(Smartphone).s1r = function () {
    return this.k1v_1;
  };
  protoOf(Smartphone).getSupportedDataTypes = function () {
    return Sensors_getInstance_2().m2();
  };
  protoOf(Smartphone).getDataTypeSamplingSchemes = function () {
    return Sensors_getInstance_2();
  };
  protoOf(Smartphone).createDeviceRegistrationBuilder = function () {
    return new DefaultDeviceRegistrationBuilder();
  };
  protoOf(Smartphone).t1r = function () {
    return getKClass(DefaultDeviceRegistration);
  };
  protoOf(Smartphone).isValidRegistration = function (registration) {
    return Trilean_TRUE_getInstance();
  };
  protoOf(Smartphone).sd = function () {
    return this.i1v_1;
  };
  protoOf(Smartphone).td = function () {
    return this.j1v_1;
  };
  protoOf(Smartphone).m1j = function () {
    return this.k1v_1;
  };
  protoOf(Smartphone).l1v = function (roleName, isOptional, defaultSamplingConfiguration) {
    return new Smartphone(roleName, isOptional, defaultSamplingConfiguration);
  };
  protoOf(Smartphone).copy = function (roleName, isOptional, defaultSamplingConfiguration, $super) {
    roleName = roleName === VOID ? this.i1v_1 : roleName;
    isOptional = isOptional === VOID ? this.j1v_1 : isOptional;
    defaultSamplingConfiguration = defaultSamplingConfiguration === VOID ? this.k1v_1 : defaultSamplingConfiguration;
    return $super === VOID ? this.l1v(roleName, isOptional, defaultSamplingConfiguration) : $super.l1v.call(this, roleName, isOptional, defaultSamplingConfiguration);
  };
  protoOf(Smartphone).toString = function () {
    return 'Smartphone(roleName=' + this.i1v_1 + ', isOptional=' + this.j1v_1 + ', defaultSamplingConfiguration=' + toString(this.k1v_1) + ')';
  };
  protoOf(Smartphone).hashCode = function () {
    var result = getStringHashCode(this.i1v_1);
    result = imul(result, 31) + getBooleanHashCode(this.j1v_1) | 0;
    result = imul(result, 31) + hashCode(this.k1v_1) | 0;
    return result;
  };
  protoOf(Smartphone).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Smartphone))
      return false;
    if (!(this.i1v_1 === other.i1v_1))
      return false;
    if (!(this.j1v_1 === other.j1v_1))
      return false;
    if (!equals(this.k1v_1, other.k1v_1))
      return false;
    return true;
  };
  function SmartphoneBuilder() {
    DeviceConfigurationBuilder.call(this);
    this.isOptional = false;
  }
  protoOf(SmartphoneBuilder).m1v = function (_set____db54di) {
    this.isOptional = _set____db54di;
  };
  protoOf(SmartphoneBuilder).r1r = function () {
    return this.isOptional;
  };
  protoOf(SmartphoneBuilder).createSamplingConfigurationMapBuilder = function () {
    return new SmartphoneSamplingConfigurationMapBuilder();
  };
  function SmartphoneSamplingConfigurationMapBuilder() {
    SamplingConfigurationMapBuilder.call(this);
  }
  protoOf(SmartphoneSamplingConfigurationMapBuilder).geolocation = function (builder) {
    return this.n1v(Sensors_getInstance_2().GEOLOCATION, builder);
  };
  protoOf(SmartphoneSamplingConfigurationMapBuilder).nonGravitationalAcceleration = function (builder) {
    return this.n1v(Sensors_getInstance_2().NON_GRAVITATIONAL_ACCELERATION, builder);
  };
  protoOf(SmartphoneSamplingConfigurationMapBuilder).acceleration = function (builder) {
    return this.n1v(Sensors_getInstance_2().ACCELERATION, builder);
  };
  protoOf(SmartphoneSamplingConfigurationMapBuilder).angularVelocity = function (builder) {
    return this.n1v(Sensors_getInstance_2().ANGULAR_VELOCITY, builder);
  };
  function Website$Companion$$childSerializers$_anonymous__qoveb5() {
    var tmp = NamespacedIdSerializer_getInstance();
    var tmp_0 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashMapSerializer(tmp, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$0));
  }
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
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o1v_1 = [null, null, null, lazy(tmp_0, Website$Companion$$childSerializers$_anonymous__qoveb5)];
  }
  var Companion_instance_43;
  function Companion_getInstance_43() {
    if (Companion_instance_43 == null)
      new Companion_42();
    return Companion_instance_43;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.Website', this, 4);
    tmp0_serialDesc.pv('isPrimaryDevice', false);
    tmp0_serialDesc.pv('roleName', false);
    tmp0_serialDesc.pv('isOptional', true);
    tmp0_serialDesc.pv('defaultSamplingConfiguration', true);
    this.p1v_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).q1v = function (encoder, value) {
    var tmp0_desc = this.p1v_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_43().o1v_1;
    tmp1_output.ep(tmp0_desc, 0, value.t1t_1);
    tmp1_output.mp(tmp0_desc, 1, value.s1v_1);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.t1v_1 === false)) {
      tmp1_output.ep(tmp0_desc, 2, value.t1v_1);
    }
    if (tmp1_output.up(tmp0_desc, 3) ? true : !equals(value.u1v_1, emptyMap())) {
      tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.u1v_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_25).nk = function (encoder, value) {
    return this.q1v(encoder, value instanceof Website ? value : THROW_CCE());
  };
  protoOf($serializer_25).ok = function (decoder) {
    var tmp0_desc = this.p1v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_43().o1v_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.zn(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.zn(tmp0_desc, 2);
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
            tmp4_local0 = tmp8_input.zn(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.zn(tmp0_desc, 2);
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
    return Website_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_25).mk = function () {
    return this.p1v_1;
  };
  protoOf($serializer_25).ew = function () {
    var tmp0_cached = Companion_getInstance_43().o1v_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[3].s2()];
  };
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 == null)
      new $serializer_25();
    return $serializer_instance_25;
  }
  function Website_init_$Init$(seen0, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_25().p1v_1);
    }
    PrimaryDeviceConfiguration_init_$Init$(seen0, isPrimaryDevice, serializationConstructorMarker, $this);
    $this.s1v_1 = roleName;
    if (0 === (seen0 & 4))
      $this.t1v_1 = false;
    else
      $this.t1v_1 = isOptional;
    if (0 === (seen0 & 8))
      $this.u1v_1 = emptyMap();
    else
      $this.u1v_1 = defaultSamplingConfiguration;
    return $this;
  }
  function Website_init_$Create$(seen0, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker) {
    return Website_init_$Init$(seen0, isPrimaryDevice, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(Website)));
  }
  function Website(roleName, isOptional) {
    Companion_getInstance_43();
    isOptional = isOptional === VOID ? false : isOptional;
    PrimaryDeviceConfiguration.call(this);
    this.s1v_1 = roleName;
    this.t1v_1 = isOptional;
    this.u1v_1 = emptyMap();
  }
  protoOf(Website).q1r = function () {
    return this.s1v_1;
  };
  protoOf(Website).r1r = function () {
    return this.t1v_1;
  };
  protoOf(Website).getSupportedDataTypes = function () {
    return Sensors_getInstance_3().m2();
  };
  protoOf(Website).getDataTypeSamplingSchemes = function () {
    return Sensors_getInstance_3();
  };
  protoOf(Website).s1r = function () {
    return this.u1v_1;
  };
  protoOf(Website).createDeviceRegistrationBuilder = function () {
    return new WebsiteDeviceRegistrationBuilder();
  };
  protoOf(Website).t1r = function () {
    return getKClass(WebsiteDeviceRegistration);
  };
  protoOf(Website).isValidRegistration = function (registration) {
    return Trilean_TRUE_getInstance();
  };
  protoOf(Website).sd = function () {
    return this.s1v_1;
  };
  protoOf(Website).td = function () {
    return this.t1v_1;
  };
  protoOf(Website).u1r = function (roleName, isOptional) {
    return new Website(roleName, isOptional);
  };
  protoOf(Website).copy = function (roleName, isOptional, $super) {
    roleName = roleName === VOID ? this.s1v_1 : roleName;
    isOptional = isOptional === VOID ? this.t1v_1 : isOptional;
    return $super === VOID ? this.u1r(roleName, isOptional) : $super.u1r.call(this, roleName, isOptional);
  };
  protoOf(Website).toString = function () {
    return 'Website(roleName=' + this.s1v_1 + ', isOptional=' + this.t1v_1 + ')';
  };
  protoOf(Website).hashCode = function () {
    var result = getStringHashCode(this.s1v_1);
    result = imul(result, 31) + getBooleanHashCode(this.t1v_1) | 0;
    return result;
  };
  protoOf(Website).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Website))
      return false;
    if (!(this.s1v_1 === other.s1v_1))
      return false;
    if (!(this.t1v_1 === other.t1v_1))
      return false;
    return true;
  };
  function WebsiteDeviceRegistration$Companion$$childSerializers$_anonymous__7t1a9s() {
    return Companion_instance_0.i18();
  }
  function Companion_43() {
    Companion_instance_44 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v1v_1 = [null, null, null, lazy(tmp_0, WebsiteDeviceRegistration$Companion$$childSerializers$_anonymous__7t1a9s), null, null];
  }
  var Companion_instance_44;
  function Companion_getInstance_44() {
    if (Companion_instance_44 == null)
      new Companion_43();
    return Companion_instance_44;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration', this, 6);
    tmp0_serialDesc.pv('url', false);
    tmp0_serialDesc.pv('userAgent', false);
    tmp0_serialDesc.pv('deviceDisplayName', true);
    tmp0_serialDesc.pv('additionalSpecifications', true);
    tmp0_serialDesc.pv('registrationCreatedOn', false);
    tmp0_serialDesc.pv('deviceId', false);
    this.w1v_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).x1v = function (encoder, value) {
    var tmp0_desc = this.w1v_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_44().v1v_1;
    tmp1_output.mp(tmp0_desc, 0, value.url);
    tmp1_output.mp(tmp0_desc, 1, value.userAgent);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.y1v_1 === value.userAgent)) {
      tmp1_output.qp(tmp0_desc, 2, StringSerializer_getInstance(), value.y1v_1);
    }
    if (tmp1_output.up(tmp0_desc, 3) ? true : !(value.z1v_1 == null)) {
      tmp1_output.qp(tmp0_desc, 3, tmp2_cached[3].s2(), value.z1v_1);
    }
    tmp1_output.op(tmp0_desc, 4, InstantSerializer_getInstance(), value.a1w_1);
    tmp1_output.mp(tmp0_desc, 5, value.b1w_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_26).nk = function (encoder, value) {
    return this.x1v(encoder, value instanceof WebsiteDeviceRegistration ? value : THROW_CCE());
  };
  protoOf($serializer_26).ok = function (decoder) {
    var tmp0_desc = this.w1v_1;
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
    var tmp11_cached = Companion_getInstance_44().v1v_1;
    if (tmp10_input.no()) {
      tmp4_local0 = tmp10_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.ho(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.lo(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.lo(tmp0_desc, 3, tmp11_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.jo(tmp0_desc, 4, InstantSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.ho(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.ho(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.lo(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.lo(tmp0_desc, 3, tmp11_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.jo(tmp0_desc, 4, InstantSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.ho(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.yn(tmp0_desc);
    return WebsiteDeviceRegistration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_26).mk = function () {
    return this.w1v_1;
  };
  protoOf($serializer_26).ew = function () {
    var tmp0_cached = Companion_getInstance_44().v1v_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3].s2()), InstantSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 == null)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function WebsiteDeviceRegistration_init_$Init$(seen0, url, userAgent, deviceDisplayName, additionalSpecifications, registrationCreatedOn, deviceId, serializationConstructorMarker, $this) {
    if (!(51 === (51 & seen0))) {
      throwMissingFieldException(seen0, 51, $serializer_getInstance_26().w1v_1);
    }
    DeviceRegistration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.url = url;
    $this.userAgent = userAgent;
    if (0 === (seen0 & 4))
      $this.y1v_1 = $this.userAgent;
    else
      $this.y1v_1 = deviceDisplayName;
    if (0 === (seen0 & 8))
      $this.z1v_1 = null;
    else
      $this.z1v_1 = additionalSpecifications;
    $this.a1w_1 = registrationCreatedOn;
    $this.b1w_1 = deviceId;
    return $this;
  }
  function WebsiteDeviceRegistration_init_$Create$(seen0, url, userAgent, deviceDisplayName, additionalSpecifications, registrationCreatedOn, deviceId, serializationConstructorMarker) {
    return WebsiteDeviceRegistration_init_$Init$(seen0, url, userAgent, deviceDisplayName, additionalSpecifications, registrationCreatedOn, deviceId, serializationConstructorMarker, objectCreate(protoOf(WebsiteDeviceRegistration)));
  }
  function WebsiteDeviceRegistration(url, userAgent, deviceDisplayName, additionalSpecifications, registrationCreatedOn) {
    Companion_getInstance_44();
    deviceDisplayName = deviceDisplayName === VOID ? userAgent : deviceDisplayName;
    additionalSpecifications = additionalSpecifications === VOID ? null : additionalSpecifications;
    registrationCreatedOn = registrationCreatedOn === VOID ? System_instance.lg() : registrationCreatedOn;
    DeviceRegistration.call(this);
    this.url = url;
    this.userAgent = userAgent;
    this.y1v_1 = deviceDisplayName;
    this.z1v_1 = additionalSpecifications;
    this.a1w_1 = registrationCreatedOn;
    this.b1w_1 = this.url;
  }
  protoOf(WebsiteDeviceRegistration).c1w = function () {
    return this.url;
  };
  protoOf(WebsiteDeviceRegistration).d1w = function () {
    return this.userAgent;
  };
  protoOf(WebsiteDeviceRegistration).j1s = function () {
    return this.y1v_1;
  };
  protoOf(WebsiteDeviceRegistration).k1s = function () {
    return this.z1v_1;
  };
  protoOf(WebsiteDeviceRegistration).l1s = function () {
    return this.a1w_1;
  };
  protoOf(WebsiteDeviceRegistration).m1s = function () {
    return this.b1w_1;
  };
  protoOf(WebsiteDeviceRegistration).sd = function () {
    return this.url;
  };
  protoOf(WebsiteDeviceRegistration).td = function () {
    return this.userAgent;
  };
  protoOf(WebsiteDeviceRegistration).m1j = function () {
    return this.y1v_1;
  };
  protoOf(WebsiteDeviceRegistration).l1k = function () {
    return this.z1v_1;
  };
  protoOf(WebsiteDeviceRegistration).m1p = function () {
    return this.a1w_1;
  };
  protoOf(WebsiteDeviceRegistration).e1w = function (url, userAgent, deviceDisplayName, additionalSpecifications, registrationCreatedOn) {
    return new WebsiteDeviceRegistration(url, userAgent, deviceDisplayName, additionalSpecifications, registrationCreatedOn);
  };
  protoOf(WebsiteDeviceRegistration).copy = function (url, userAgent, deviceDisplayName, additionalSpecifications, registrationCreatedOn, $super) {
    url = url === VOID ? this.url : url;
    userAgent = userAgent === VOID ? this.userAgent : userAgent;
    deviceDisplayName = deviceDisplayName === VOID ? this.y1v_1 : deviceDisplayName;
    additionalSpecifications = additionalSpecifications === VOID ? this.z1v_1 : additionalSpecifications;
    registrationCreatedOn = registrationCreatedOn === VOID ? this.a1w_1 : registrationCreatedOn;
    return $super === VOID ? this.e1w(url, userAgent, deviceDisplayName, additionalSpecifications, registrationCreatedOn) : $super.e1w.call(this, url, userAgent, deviceDisplayName, additionalSpecifications, registrationCreatedOn);
  };
  protoOf(WebsiteDeviceRegistration).toString = function () {
    return 'WebsiteDeviceRegistration(url=' + this.url + ', userAgent=' + this.userAgent + ', deviceDisplayName=' + this.y1v_1 + ', additionalSpecifications=' + toString_0(this.z1v_1) + ', registrationCreatedOn=' + this.a1w_1.toString() + ')';
  };
  protoOf(WebsiteDeviceRegistration).hashCode = function () {
    var result = getStringHashCode(this.url);
    result = imul(result, 31) + getStringHashCode(this.userAgent) | 0;
    result = imul(result, 31) + (this.y1v_1 == null ? 0 : getStringHashCode(this.y1v_1)) | 0;
    result = imul(result, 31) + (this.z1v_1 == null ? 0 : this.z1v_1.hashCode()) | 0;
    result = imul(result, 31) + this.a1w_1.hashCode() | 0;
    return result;
  };
  protoOf(WebsiteDeviceRegistration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebsiteDeviceRegistration))
      return false;
    if (!(this.url === other.url))
      return false;
    if (!(this.userAgent === other.userAgent))
      return false;
    if (!(this.y1v_1 == other.y1v_1))
      return false;
    if (!equals(this.z1v_1, other.z1v_1))
      return false;
    if (!this.a1w_1.equals(other.a1w_1))
      return false;
    return true;
  };
  function Companion_44() {
  }
  var Companion_instance_45;
  function Companion_getInstance_45() {
    return Companion_instance_45;
  }
  function WebsiteDeviceRegistrationBuilder() {
    DeviceRegistrationBuilder.call(this);
    this.url = '';
    this.userAgent = '';
  }
  protoOf(WebsiteDeviceRegistrationBuilder).f1w = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(WebsiteDeviceRegistrationBuilder).c1w = function () {
    return this.url;
  };
  protoOf(WebsiteDeviceRegistrationBuilder).g1w = function (_set____db54di) {
    this.userAgent = _set____db54di;
  };
  protoOf(WebsiteDeviceRegistrationBuilder).d1w = function () {
    return this.userAgent;
  };
  protoOf(WebsiteDeviceRegistrationBuilder).build = function () {
    return new WebsiteDeviceRegistration(this.url, this.userAgent, this.deviceDisplayName, this.additionalSpecifications);
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
    this.h1w_1 = builder;
    this.normal = normal;
    this.low = low;
    this.critical = critical;
    this.i1w_1 = getKClassFromExpression(this.normal);
  }
  protoOf(BatteryAwareSamplingScheme).j1w = function () {
    return this.normal;
  };
  protoOf(BatteryAwareSamplingScheme).k1w = function () {
    return this.low;
  };
  protoOf(BatteryAwareSamplingScheme).l1w = function () {
    return this.critical;
  };
  protoOf(BatteryAwareSamplingScheme).createSamplingConfigurationBuilder = function () {
    return new BatteryAwareSamplingConfigurationBuilder(this.h1w_1, this.normal, this.low, this.critical);
  };
  protoOf(BatteryAwareSamplingScheme).isValid = function (configuration) {
    if (!(configuration instanceof BatteryAwareSamplingConfiguration))
      return false;
    var correctTypes = this.i1w_1.i9(configuration.normal) && this.i1w_1.i9(configuration.low) && (configuration.critical == null || this.i1w_1.i9(configuration.critical));
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
    $this.q1w_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, objectCreate(protoOf($serializer_27)));
  }
  function Companion_45() {
    Companion_instance_46 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfiguration', null, 3);
    tmp0_serialDesc.pv('normal', false);
    tmp0_serialDesc.pv('low', false);
    tmp0_serialDesc.pv('critical', true);
    this.r1w_1 = tmp0_serialDesc;
  }
  protoOf(Companion_45).s1w = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  protoOf(Companion_45).pw = function (typeParamsSerializers) {
    return this.s1w(typeParamsSerializers[0]);
  };
  var Companion_instance_46;
  function Companion_getInstance_46() {
    if (Companion_instance_46 == null)
      new Companion_45();
    return Companion_instance_46;
  }
  function $serializer_27() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfiguration', this, 3);
    tmp0_serialDesc.pv('normal', false);
    tmp0_serialDesc.pv('low', false);
    tmp0_serialDesc.pv('critical', true);
    this.p1w_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).t1w = function (encoder, value) {
    var tmp0_desc = this.p1w_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, this.q1w_1, value.normal);
    tmp1_output.op(tmp0_desc, 1, this.q1w_1, value.low);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.critical == null)) {
      tmp1_output.qp(tmp0_desc, 2, this.q1w_1, value.critical);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_27).nk = function (encoder, value) {
    return this.t1w(encoder, value instanceof BatteryAwareSamplingConfiguration ? value : THROW_CCE());
  };
  protoOf($serializer_27).ok = function (decoder) {
    var tmp0_desc = this.p1w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, this.q1w_1, tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, this.q1w_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.lo(tmp0_desc, 2, this.q1w_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, this.q1w_1, tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, this.q1w_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.lo(tmp0_desc, 2, this.q1w_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return BatteryAwareSamplingConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_27).mk = function () {
    return this.p1w_1;
  };
  protoOf($serializer_27).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.q1w_1, this.q1w_1, get_nullable(this.q1w_1)];
  };
  protoOf($serializer_27).fw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.q1w_1];
  };
  function BatteryAwareSamplingConfiguration_init_$Init$(seen0, normal, low, critical, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_46().r1w_1);
    }
    $this.normal = normal;
    $this.low = low;
    if (0 === (seen0 & 4))
      $this.critical = null;
    else
      $this.critical = critical;
    return $this;
  }
  function BatteryAwareSamplingConfiguration_init_$Create$(seen0, normal, low, critical, serializationConstructorMarker) {
    return BatteryAwareSamplingConfiguration_init_$Init$(seen0, normal, low, critical, serializationConstructorMarker, objectCreate(protoOf(BatteryAwareSamplingConfiguration)));
  }
  function BatteryAwareSamplingConfiguration(normal, low, critical) {
    Companion_getInstance_46();
    critical = critical === VOID ? null : critical;
    this.normal = normal;
    this.low = low;
    this.critical = critical;
  }
  protoOf(BatteryAwareSamplingConfiguration).j1w = function () {
    return this.normal;
  };
  protoOf(BatteryAwareSamplingConfiguration).k1w = function () {
    return this.low;
  };
  protoOf(BatteryAwareSamplingConfiguration).l1w = function () {
    return this.critical;
  };
  protoOf(BatteryAwareSamplingConfiguration).sd = function () {
    return this.normal;
  };
  protoOf(BatteryAwareSamplingConfiguration).td = function () {
    return this.low;
  };
  protoOf(BatteryAwareSamplingConfiguration).m1j = function () {
    return this.critical;
  };
  protoOf(BatteryAwareSamplingConfiguration).u1w = function (normal, low, critical) {
    return new BatteryAwareSamplingConfiguration(normal, low, critical);
  };
  protoOf(BatteryAwareSamplingConfiguration).copy = function (normal, low, critical, $super) {
    normal = normal === VOID ? this.normal : normal;
    low = low === VOID ? this.low : low;
    critical = critical === VOID ? this.critical : critical;
    return $super === VOID ? this.u1w(normal, low, critical) : $super.u1w.call(this, normal, low, critical);
  };
  protoOf(BatteryAwareSamplingConfiguration).toString = function () {
    return 'BatteryAwareSamplingConfiguration(normal=' + toString(this.normal) + ', low=' + toString(this.low) + ', critical=' + toString_0(this.critical) + ')';
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
    if (!equals(this.normal, other.normal))
      return false;
    if (!equals(this.low, other.low))
      return false;
    if (!equals(this.critical, other.critical))
      return false;
    return true;
  };
  function createConfiguration($this, builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.v1w_1();
    builder(this_0);
    return this_0.l1u();
  }
  function BatteryAwareSamplingConfigurationBuilder(createBuilder, normal, low, critical) {
    this.v1w_1 = createBuilder;
    this.w1w_1 = normal;
    this.x1w_1 = low;
    this.y1w_1 = critical;
  }
  protoOf(BatteryAwareSamplingConfigurationBuilder).batteryNormal = function (builder) {
    // Inline function 'kotlin.let' call
    this.w1w_1 = createConfiguration(this, builder);
    return Unit_instance;
  };
  protoOf(BatteryAwareSamplingConfigurationBuilder).batteryLow = function (builder) {
    // Inline function 'kotlin.let' call
    this.x1w_1 = createConfiguration(this, builder);
    return Unit_instance;
  };
  protoOf(BatteryAwareSamplingConfigurationBuilder).batteryCritical = function (builder) {
    // Inline function 'kotlin.let' call
    this.y1w_1 = createConfiguration(this, builder);
    return Unit_instance;
  };
  protoOf(BatteryAwareSamplingConfigurationBuilder).allBatteryLevels = function (builder) {
    // Inline function 'kotlin.let' call
    var it = createConfiguration(this, builder);
    this.w1w_1 = it;
    this.x1w_1 = it;
    this.y1w_1 = it;
    return Unit_instance;
  };
  protoOf(BatteryAwareSamplingConfigurationBuilder).l1u = function () {
    return new BatteryAwareSamplingConfiguration(this.w1w_1, this.x1w_1, this.y1w_1);
  };
  function DataTypeSamplingScheme(dataType, default_0) {
    this.dataType = dataType;
    this.default = default_0;
  }
  protoOf(DataTypeSamplingScheme).m1w = function () {
    return this.dataType;
  };
  protoOf(DataTypeSamplingScheme).n1w = function () {
    return this.default;
  };
  protoOf(DataTypeSamplingScheme).samplingConfiguration = function (builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.createSamplingConfigurationBuilder();
    builder(this_0);
    return this_0.z1w(this);
  };
  protoOf(DataTypeSamplingScheme).o1w = function (samplingConfigurationBuilder) {
    var tmp;
    if (samplingConfigurationBuilder == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.samplingConfiguration(samplingConfigurationBuilder);
    }
    return new DataStream(this.dataType.type, tmp);
  };
  protoOf(DataTypeSamplingScheme).measure = function (samplingConfigurationBuilder, $super) {
    samplingConfigurationBuilder = samplingConfigurationBuilder === VOID ? null : samplingConfigurationBuilder;
    return $super === VOID ? this.o1w(samplingConfigurationBuilder) : $super.o1w.call(this, samplingConfigurationBuilder);
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
  protoOf(GranularitySamplingScheme).a1x = function () {
    return this.defaultGranularity;
  };
  protoOf(GranularitySamplingScheme).createSamplingConfigurationBuilder = function () {
    return new GranularitySamplingConfigurationBuilder(this.defaultGranularity);
  };
  protoOf(GranularitySamplingScheme).isValid = function (configuration) {
    return configuration instanceof GranularitySamplingConfiguration;
  };
  function _get_$cachedSerializer__te6jhj_4($this) {
    return $this.b1x_1.s2();
  }
  function Granularity$Companion$_anonymous__61tclb() {
    return createSimpleEnumSerializer('dk.cachet.carp.common.application.sampling.Granularity', values_3());
  }
  var Granularity_Detailed_instance;
  var Granularity_Balanced_instance;
  var Granularity_Coarse_instance;
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
        THROW_IAE('No enum constant dk.cachet.carp.common.application.sampling.Granularity.' + value);
        break;
    }
  }
  function Companion_46() {
    Companion_instance_47 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.b1x_1 = lazy(tmp_0, Granularity$Companion$_anonymous__61tclb);
  }
  protoOf(Companion_46).i18 = function () {
    return _get_$cachedSerializer__te6jhj_4(this);
  };
  protoOf(Companion_46).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_47;
  function Companion_getInstance_47() {
    Granularity_initEntries();
    if (Companion_instance_47 == null)
      new Companion_46();
    return Companion_instance_47;
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
  function GranularitySamplingConfiguration$Companion$$childSerializers$_anonymous__kcv7nt() {
    return Companion_getInstance_47().i18();
  }
  function Companion_47() {
    Companion_instance_48 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e1x_1 = [lazy(tmp_0, GranularitySamplingConfiguration$Companion$$childSerializers$_anonymous__kcv7nt)];
  }
  var Companion_instance_48;
  function Companion_getInstance_48() {
    if (Companion_instance_48 == null)
      new Companion_47();
    return Companion_instance_48;
  }
  function $serializer_28() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration', this, 1);
    tmp0_serialDesc.pv('granularity', false);
    this.f1x_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).g1x = function (encoder, value) {
    var tmp0_desc = this.f1x_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_48().e1x_1;
    tmp1_output.op(tmp0_desc, 0, tmp2_cached[0].s2(), value.granularity);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_28).nk = function (encoder, value) {
    return this.g1x(encoder, value instanceof GranularitySamplingConfiguration ? value : THROW_CCE());
  };
  protoOf($serializer_28).ok = function (decoder) {
    var tmp0_desc = this.f1x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xn(tmp0_desc);
    var tmp6_cached = Companion_getInstance_48().e1x_1;
    if (tmp5_input.no()) {
      tmp4_local0 = tmp5_input.jo(tmp0_desc, 0, tmp6_cached[0].s2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.jo(tmp0_desc, 0, tmp6_cached[0].s2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return GranularitySamplingConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_28).mk = function () {
    return this.f1x_1;
  };
  protoOf($serializer_28).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_48().e1x_1[0].s2()];
  };
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_28();
    return $serializer_instance_27;
  }
  function GranularitySamplingConfiguration_init_$Init$(seen0, granularity, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_27().f1x_1);
    }
    $this.granularity = granularity;
    return $this;
  }
  function GranularitySamplingConfiguration_init_$Create$(seen0, granularity, serializationConstructorMarker) {
    return GranularitySamplingConfiguration_init_$Init$(seen0, granularity, serializationConstructorMarker, objectCreate(protoOf(GranularitySamplingConfiguration)));
  }
  function GranularitySamplingConfiguration(granularity) {
    Companion_getInstance_48();
    this.granularity = granularity;
  }
  protoOf(GranularitySamplingConfiguration).h1x = function () {
    return this.granularity;
  };
  protoOf(GranularitySamplingConfiguration).sd = function () {
    return this.granularity;
  };
  protoOf(GranularitySamplingConfiguration).i1x = function (granularity) {
    return new GranularitySamplingConfiguration(granularity);
  };
  protoOf(GranularitySamplingConfiguration).copy = function (granularity, $super) {
    granularity = granularity === VOID ? this.granularity : granularity;
    return $super === VOID ? this.i1x(granularity) : $super.i1x.call(this, granularity);
  };
  protoOf(GranularitySamplingConfiguration).toString = function () {
    return 'GranularitySamplingConfiguration(granularity=' + this.granularity.toString() + ')';
  };
  protoOf(GranularitySamplingConfiguration).hashCode = function () {
    return this.granularity.hashCode();
  };
  protoOf(GranularitySamplingConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GranularitySamplingConfiguration))
      return false;
    if (!this.granularity.equals(other.granularity))
      return false;
    return true;
  };
  function GranularitySamplingConfigurationBuilder(granularity) {
    this.granularity = granularity;
  }
  protoOf(GranularitySamplingConfigurationBuilder).j1x = function (_set____db54di) {
    this.granularity = _set____db54di;
  };
  protoOf(GranularitySamplingConfigurationBuilder).h1x = function () {
    return this.granularity;
  };
  protoOf(GranularitySamplingConfigurationBuilder).l1u = function () {
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
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.require' call
      if (!!this.validOptions.p()) {
        var message = 'If only a fixed set of options are valid, at least one option needs to be present.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.validOptions.o1(new Duration(this.defaultMeasureInterval))) {
        var message_0 = 'If only a fixed set of options are valid, the default interval needs to be one of the options.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
  }
  protoOf(IntervalSamplingScheme).k1x = function () {
    return this.defaultMeasureInterval;
  };
  protoOf(IntervalSamplingScheme).l1x = function () {
    return this.validOptions;
  };
  protoOf(IntervalSamplingScheme).createSamplingConfigurationBuilder = function () {
    return new IntervalSamplingConfigurationBuilder(this.defaultMeasureInterval, this.validOptions);
  };
  protoOf(IntervalSamplingScheme).isValid = function (configuration) {
    var tmp;
    if (configuration instanceof IntervalSamplingConfiguration) {
      tmp = this.validOptions == null || this.validOptions.o1(new Duration(configuration.interval));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function Companion_48() {
  }
  var Companion_instance_49;
  function Companion_getInstance_49() {
    return Companion_instance_49;
  }
  function $serializer_29() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.sampling.IntervalSamplingConfiguration', this, 1);
    tmp0_serialDesc.pv('interval', false);
    this.m1x_1 = tmp0_serialDesc;
  }
  protoOf($serializer_29).n1x = function (encoder, value) {
    var tmp0_desc = this.m1x_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, DurationSerializer_getInstance(), new Duration(value.interval));
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_29).nk = function (encoder, value) {
    return this.n1x(encoder, value instanceof IntervalSamplingConfiguration ? value : THROW_CCE());
  };
  protoOf($serializer_29).ok = function (decoder) {
    var tmp0_desc = this.m1x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xn(tmp0_desc);
    if (tmp5_input.no()) {
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp4_local0;
      var tmp_1 = tmp5_input.jo(tmp0_desc, 0, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp4_local0 = tmp_1 == null ? null : tmp_1.sg_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp4_local0;
            var tmp_4 = tmp5_input.jo(tmp0_desc, 0, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp4_local0 = tmp_4 == null ? null : tmp_4.sg_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return IntervalSamplingConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_29).mk = function () {
    return this.m1x_1;
  };
  protoOf($serializer_29).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DurationSerializer_getInstance()];
  };
  var $serializer_instance_28;
  function $serializer_getInstance_28() {
    if ($serializer_instance_28 == null)
      new $serializer_29();
    return $serializer_instance_28;
  }
  function IntervalSamplingConfiguration_init_$Init$(seen0, interval, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_28().m1x_1);
    }
    $this.interval = interval;
    return $this;
  }
  function IntervalSamplingConfiguration_init_$Create$(seen0, interval, serializationConstructorMarker) {
    return IntervalSamplingConfiguration_init_$Init$(seen0, interval, serializationConstructorMarker, objectCreate(protoOf(IntervalSamplingConfiguration)));
  }
  function IntervalSamplingConfiguration(interval) {
    this.interval = interval;
  }
  protoOf(IntervalSamplingConfiguration).o1x = function () {
    return this.interval;
  };
  protoOf(IntervalSamplingConfiguration).w1i = function () {
    return this.interval;
  };
  protoOf(IntervalSamplingConfiguration).x1i = function (interval) {
    return new IntervalSamplingConfiguration(interval);
  };
  protoOf(IntervalSamplingConfiguration).copy = function (interval, $super) {
    interval = interval === VOID ? this.interval : interval;
    return $super === VOID ? this.x1i(interval) : $super.x1i.call(this, new Duration(interval));
  };
  protoOf(IntervalSamplingConfiguration).toString = function () {
    return 'IntervalSamplingConfiguration(interval=' + Duration__toString_impl_8d916b(this.interval) + ')';
  };
  protoOf(IntervalSamplingConfiguration).hashCode = function () {
    return Duration__hashCode_impl_u4exz6(this.interval);
  };
  protoOf(IntervalSamplingConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntervalSamplingConfiguration))
      return false;
    if (!(this.interval === other.interval))
      return false;
    return true;
  };
  function IntervalSamplingConfigurationBuilder(interval, validOptions) {
    this.interval = interval;
    this.validOptions = validOptions;
  }
  protoOf(IntervalSamplingConfigurationBuilder).p1x = function (_set____db54di) {
    this.interval = _set____db54di;
  };
  protoOf(IntervalSamplingConfigurationBuilder).o1x = function () {
    return this.interval;
  };
  protoOf(IntervalSamplingConfigurationBuilder).l1x = function () {
    return this.validOptions;
  };
  protoOf(IntervalSamplingConfigurationBuilder).nearestOption = function (interval) {
    var tmp;
    if (this.validOptions == null) {
      tmp = interval;
    } else {
      var tmp0 = this.validOptions;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.minByOrNull' call
        var iterator = tmp0.r();
        if (!iterator.s()) {
          tmp$ret$0 = null;
          break $l$block_0;
        }
        var minElem = iterator.t();
        if (!iterator.s()) {
          var tmp_0 = minElem;
          tmp$ret$0 = tmp_0 == null ? null : tmp_0.sg_1;
          break $l$block_0;
        }
        var it = minElem.sg_1;
        var minValue = new Duration(_Duration___get_absoluteValue__impl__vr7i6w(Duration__minus_impl_q5cfm7(interval, it)));
        do {
          var e = iterator.t();
          var it_0 = e.sg_1;
          var v = new Duration(_Duration___get_absoluteValue__impl__vr7i6w(Duration__minus_impl_q5cfm7(interval, it_0)));
          if (compareTo(minValue, v) > 0) {
            minElem = e;
            minValue = v;
          }
        }
         while (iterator.s());
        var tmp_1 = minElem;
        tmp$ret$0 = tmp_1 == null ? null : tmp_1.sg_1;
      }
      var tmp_2 = tmp$ret$0;
      // Inline function 'kotlin.checkNotNull' call
      var tmp0_0 = tmp_2 == null ? null : new Duration(tmp_2);
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0_0 == null) {
          var message = 'Required value was null.';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      tmp = tmp$ret$4.sg_1;
    }
    return tmp;
  };
  protoOf(IntervalSamplingConfigurationBuilder).l1u = function () {
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
  function _get_$cachedSerializer__te6jhj_5($this) {
    return $this.q1x_1.s2();
  }
  function NoOptionsSamplingConfiguration$_anonymous__twr9d1() {
    var tmp = NoOptionsSamplingConfiguration_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return ObjectSerializer_init_$Create$('dk.cachet.carp.common.application.sampling.NoOptionsSamplingConfiguration', tmp, tmp$ret$0);
  }
  function NoOptionsSamplingConfiguration() {
    NoOptionsSamplingConfiguration_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.q1x_1 = lazy(tmp_0, NoOptionsSamplingConfiguration$_anonymous__twr9d1);
  }
  protoOf(NoOptionsSamplingConfiguration).i18 = function () {
    return _get_$cachedSerializer__te6jhj_5(this);
  };
  protoOf(NoOptionsSamplingConfiguration).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var NoOptionsSamplingConfiguration_instance;
  function NoOptionsSamplingConfiguration_getInstance() {
    if (NoOptionsSamplingConfiguration_instance == null)
      new NoOptionsSamplingConfiguration();
    return NoOptionsSamplingConfiguration_instance;
  }
  function NoOptionsSamplingConfigurationBuilder() {
  }
  protoOf(NoOptionsSamplingConfigurationBuilder).l1u = function () {
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
    tmp.k1u_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SamplingConfigurationMapBuilder).n1v = function (samplingScheme, builder) {
    var configuration = samplingScheme.samplingConfiguration(builder);
    var tmp0 = this.k1u_1;
    // Inline function 'kotlin.collections.set' call
    var key = samplingScheme.dataType.type;
    tmp0.k2(key, configuration);
    return configuration;
  };
  protoOf(SamplingConfigurationMapBuilder).l1u = function () {
    return toMap(this.k1u_1);
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
    if (!get_ApiVersionRegex().ib(apiVersion)) {
      var message = 'Invalid API version string representation.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var _destruct__k2r9zo = split(apiVersion, charArrayOf([_Char___init__impl__6a9atx(46)]));
    // Inline function 'kotlin.collections.component1' call
    var major = _destruct__k2r9zo.b1(0);
    // Inline function 'kotlin.collections.component2' call
    var minor = _destruct__k2r9zo.b1(1);
    return new ApiVersion(toInt(major), toInt(minor));
  };
  protoOf(Companion_49).i18 = function () {
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
    if (!(this.major >= 0 && this.minor >= 0)) {
      var message = 'Major and minor number must be positive.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ApiVersion).r1x = function () {
    return this.major;
  };
  protoOf(ApiVersion).s1x = function () {
    return this.minor;
  };
  protoOf(ApiVersion).isMoreRecent = function (otherVersion) {
    return this.major > otherVersion.major ? true : this.major === otherVersion.major && this.minor > otherVersion.minor;
  };
  protoOf(ApiVersion).toString = function () {
    return '' + this.major + '.' + this.minor;
  };
  protoOf(ApiVersion).sd = function () {
    return this.major;
  };
  protoOf(ApiVersion).td = function () {
    return this.minor;
  };
  protoOf(ApiVersion).t1x = function (major, minor) {
    return new ApiVersion(major, minor);
  };
  protoOf(ApiVersion).copy = function (major, minor, $super) {
    major = major === VOID ? this.major : major;
    minor = minor === VOID ? this.minor : minor;
    return $super === VOID ? this.t1x(major, minor) : $super.t1x.call(this, major, minor);
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
    if (!(this.major === other.major))
      return false;
    if (!(this.minor === other.minor))
      return false;
    return true;
  };
  function ApiVersionSerializer$$$delegate_0$lambda(version) {
    return Companion_instance_50.fromString(version);
  }
  function ApiVersionSerializer$$inlined$createCarpStringPrimitiveSerializer$1($fromString) {
    StringConversionSerializer.call(this, 'dk.cachet.carp.common.' + ensureNotNull(getKClass(ApiVersion).m()), $fromString);
  }
  function ApiVersionSerializer() {
    ApiVersionSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = ApiVersionSerializer$$$delegate_0$lambda;
    tmp.u1x_1 = new ApiVersionSerializer$$inlined$createCarpStringPrimitiveSerializer$1(fromString);
  }
  protoOf(ApiVersionSerializer).mk = function () {
    return this.u1x_1.mk();
  };
  protoOf(ApiVersionSerializer).v1x = function (encoder, value) {
    this.u1x_1.nk(encoder, value);
  };
  protoOf(ApiVersionSerializer).nk = function (encoder, value) {
    return this.v1x(encoder, value instanceof ApiVersion ? value : THROW_CCE());
  };
  protoOf(ApiVersionSerializer).ok = function (decoder) {
    return this.u1x_1.ok(decoder);
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
  function ApplicationService() {
  }
  function BackgroundTask$Companion$$childSerializers$_anonymous__oc5avr() {
    return new ArrayListSerializer(Companion_getInstance_55().i18());
  }
  function Companion_50() {
    Companion_instance_51 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x1x_1 = [null, lazy(tmp_0, BackgroundTask$Companion$$childSerializers$_anonymous__oc5avr), null, null];
  }
  var Companion_instance_51;
  function Companion_getInstance_51() {
    if (Companion_instance_51 == null)
      new Companion_50();
    return Companion_instance_51;
  }
  function $serializer_30() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.tasks.BackgroundTask', this, 4);
    tmp0_serialDesc.pv('name', false);
    tmp0_serialDesc.pv('measures', true);
    tmp0_serialDesc.pv('description', true);
    tmp0_serialDesc.pv('duration', true);
    this.y1x_1 = tmp0_serialDesc;
  }
  protoOf($serializer_30).z1x = function (encoder, value) {
    var tmp0_desc = this.y1x_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_51().x1x_1;
    tmp1_output.mp(tmp0_desc, 0, value.a1y_1);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !equals(value.b1y_1, emptyList())) {
      tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.b1y_1);
    }
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.c1y_1 == null)) {
      tmp1_output.qp(tmp0_desc, 2, StringSerializer_getInstance(), value.c1y_1);
    }
    if (tmp1_output.up(tmp0_desc, 3) ? true : !(value.duration === Companion_getInstance().ng_1)) {
      tmp1_output.op(tmp0_desc, 3, DurationSerializer_getInstance(), new Duration(value.duration));
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_30).nk = function (encoder, value) {
    return this.z1x(encoder, value instanceof BackgroundTask ? value : THROW_CCE());
  };
  protoOf($serializer_30).ok = function (decoder) {
    var tmp0_desc = this.y1x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_51().x1x_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, tmp9_cached[1].s2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lo(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp7_local3;
      var tmp_1 = tmp8_input.jo(tmp0_desc, 3, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp7_local3 = tmp_1 == null ? null : tmp_1.sg_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, tmp9_cached[1].s2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lo(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp7_local3;
            var tmp_4 = tmp8_input.jo(tmp0_desc, 3, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp7_local3 = tmp_4 == null ? null : tmp_4.sg_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return BackgroundTask_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_30).mk = function () {
    return this.y1x_1;
  };
  protoOf($serializer_30).ew = function () {
    var tmp0_cached = Companion_getInstance_51().x1x_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].s2(), get_nullable(StringSerializer_getInstance()), DurationSerializer_getInstance()];
  };
  var $serializer_instance_29;
  function $serializer_getInstance_29() {
    if ($serializer_instance_29 == null)
      new $serializer_30();
    return $serializer_instance_29;
  }
  function BackgroundTask_init_$Init$(seen0, name, measures, description, duration, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_29().y1x_1);
    }
    $this.a1y_1 = name;
    if (0 === (seen0 & 2))
      $this.b1y_1 = emptyList();
    else
      $this.b1y_1 = measures;
    if (0 === (seen0 & 4))
      $this.c1y_1 = null;
    else
      $this.c1y_1 = description;
    if (0 === (seen0 & 8))
      $this.duration = Companion_getInstance().ng_1;
    else
      $this.duration = duration;
    return $this;
  }
  function BackgroundTask_init_$Create$(seen0, name, measures, description, duration, serializationConstructorMarker) {
    return BackgroundTask_init_$Init$(seen0, name, measures, description, duration, serializationConstructorMarker, objectCreate(protoOf(BackgroundTask)));
  }
  function BackgroundTask(name, measures, description, duration) {
    Companion_getInstance_51();
    measures = measures === VOID ? emptyList() : measures;
    description = description === VOID ? null : description;
    duration = duration === VOID ? Companion_getInstance().ng_1 : duration;
    this.a1y_1 = name;
    this.b1y_1 = measures;
    this.c1y_1 = description;
    this.duration = duration;
  }
  protoOf(BackgroundTask).k = function () {
    return this.a1y_1;
  };
  protoOf(BackgroundTask).d1y = function () {
    return this.b1y_1;
  };
  protoOf(BackgroundTask).e1y = function () {
    return this.c1y_1;
  };
  protoOf(BackgroundTask).f1y = function () {
    return this.duration;
  };
  protoOf(BackgroundTask).sd = function () {
    return this.a1y_1;
  };
  protoOf(BackgroundTask).td = function () {
    return this.b1y_1;
  };
  protoOf(BackgroundTask).m1j = function () {
    return this.c1y_1;
  };
  protoOf(BackgroundTask).g1y = function () {
    return this.duration;
  };
  protoOf(BackgroundTask).h1y = function (name, measures, description, duration) {
    return new BackgroundTask(name, measures, description, duration);
  };
  protoOf(BackgroundTask).copy = function (name, measures, description, duration, $super) {
    name = name === VOID ? this.a1y_1 : name;
    measures = measures === VOID ? this.b1y_1 : measures;
    description = description === VOID ? this.c1y_1 : description;
    duration = duration === VOID ? this.duration : duration;
    return $super === VOID ? this.h1y(name, measures, description, duration) : $super.h1y.call(this, name, measures, description, new Duration(duration));
  };
  protoOf(BackgroundTask).toString = function () {
    return 'BackgroundTask(name=' + this.a1y_1 + ', measures=' + toString(this.b1y_1) + ', description=' + this.c1y_1 + ', duration=' + Duration__toString_impl_8d916b(this.duration) + ')';
  };
  protoOf(BackgroundTask).hashCode = function () {
    var result = getStringHashCode(this.a1y_1);
    result = imul(result, 31) + hashCode(this.b1y_1) | 0;
    result = imul(result, 31) + (this.c1y_1 == null ? 0 : getStringHashCode(this.c1y_1)) | 0;
    result = imul(result, 31) + Duration__hashCode_impl_u4exz6(this.duration) | 0;
    return result;
  };
  protoOf(BackgroundTask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BackgroundTask))
      return false;
    if (!(this.a1y_1 === other.a1y_1))
      return false;
    if (!equals(this.b1y_1, other.b1y_1))
      return false;
    if (!(this.c1y_1 == other.c1y_1))
      return false;
    if (!(this.duration === other.duration))
      return false;
    return true;
  };
  function BackgroundTaskBuilder(duration) {
    duration = duration === VOID ? Companion_getInstance().ng_1 : duration;
    TaskConfigurationBuilder.call(this);
    this.duration = duration;
  }
  protoOf(BackgroundTaskBuilder).i1y = function (_set____db54di) {
    this.duration = _set____db54di;
  };
  protoOf(BackgroundTaskBuilder).f1y = function () {
    return this.duration;
  };
  protoOf(BackgroundTaskBuilder).build = function (name) {
    return new BackgroundTask(name, this.measures, this.description, this.duration);
  };
  function CustomProtocolTask$Companion$$childSerializers$_anonymous__ygm4o4() {
    return new ArrayListSerializer(Companion_getInstance_55().i18());
  }
  function Companion_51() {
    Companion_instance_52 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.l1y_1 = [null, null, null, lazy(tmp_0, CustomProtocolTask$Companion$$childSerializers$_anonymous__ygm4o4)];
  }
  var Companion_instance_52;
  function Companion_getInstance_52() {
    if (Companion_instance_52 == null)
      new Companion_51();
    return Companion_instance_52;
  }
  function $serializer_31() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.tasks.CustomProtocolTask', this, 4);
    tmp0_serialDesc.pv('name', false);
    tmp0_serialDesc.pv('studyProtocol', false);
    tmp0_serialDesc.pv('description', true);
    tmp0_serialDesc.pv('measures', true);
    this.m1y_1 = tmp0_serialDesc;
  }
  protoOf($serializer_31).n1y = function (encoder, value) {
    var tmp0_desc = this.m1y_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_52().l1y_1;
    tmp1_output.mp(tmp0_desc, 0, value.o1y_1);
    tmp1_output.mp(tmp0_desc, 1, value.studyProtocol);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.p1y_1 == null)) {
      tmp1_output.qp(tmp0_desc, 2, StringSerializer_getInstance(), value.p1y_1);
    }
    if (tmp1_output.up(tmp0_desc, 3) ? true : !equals(value.q1y_1, emptyList())) {
      tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.q1y_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_31).nk = function (encoder, value) {
    return this.n1y(encoder, value instanceof CustomProtocolTask ? value : THROW_CCE());
  };
  protoOf($serializer_31).ok = function (decoder) {
    var tmp0_desc = this.m1y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_52().l1y_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lo(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
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
            tmp4_local0 = tmp8_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lo(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
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
    return CustomProtocolTask_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_31).mk = function () {
    return this.m1y_1;
  };
  protoOf($serializer_31).ew = function () {
    var tmp0_cached = Companion_getInstance_52().l1y_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[3].s2()];
  };
  var $serializer_instance_30;
  function $serializer_getInstance_30() {
    if ($serializer_instance_30 == null)
      new $serializer_31();
    return $serializer_instance_30;
  }
  function CustomProtocolTask_init_$Init$(seen0, name, studyProtocol, description, measures, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_30().m1y_1);
    }
    $this.o1y_1 = name;
    $this.studyProtocol = studyProtocol;
    if (0 === (seen0 & 4))
      $this.p1y_1 = null;
    else
      $this.p1y_1 = description;
    if (0 === (seen0 & 8))
      $this.q1y_1 = emptyList();
    else
      $this.q1y_1 = measures;
    return $this;
  }
  function CustomProtocolTask_init_$Create$(seen0, name, studyProtocol, description, measures, serializationConstructorMarker) {
    return CustomProtocolTask_init_$Init$(seen0, name, studyProtocol, description, measures, serializationConstructorMarker, objectCreate(protoOf(CustomProtocolTask)));
  }
  function CustomProtocolTask(name, studyProtocol) {
    Companion_getInstance_52();
    this.o1y_1 = name;
    this.studyProtocol = studyProtocol;
    this.p1y_1 = null;
    this.q1y_1 = emptyList();
  }
  protoOf(CustomProtocolTask).k = function () {
    return this.o1y_1;
  };
  protoOf(CustomProtocolTask).r1y = function () {
    return this.studyProtocol;
  };
  protoOf(CustomProtocolTask).e1y = function () {
    return this.p1y_1;
  };
  protoOf(CustomProtocolTask).d1y = function () {
    return this.q1y_1;
  };
  protoOf(CustomProtocolTask).sd = function () {
    return this.o1y_1;
  };
  protoOf(CustomProtocolTask).td = function () {
    return this.studyProtocol;
  };
  protoOf(CustomProtocolTask).m1i = function (name, studyProtocol) {
    return new CustomProtocolTask(name, studyProtocol);
  };
  protoOf(CustomProtocolTask).copy = function (name, studyProtocol, $super) {
    name = name === VOID ? this.o1y_1 : name;
    studyProtocol = studyProtocol === VOID ? this.studyProtocol : studyProtocol;
    return $super === VOID ? this.m1i(name, studyProtocol) : $super.m1i.call(this, name, studyProtocol);
  };
  protoOf(CustomProtocolTask).toString = function () {
    return 'CustomProtocolTask(name=' + this.o1y_1 + ', studyProtocol=' + this.studyProtocol + ')';
  };
  protoOf(CustomProtocolTask).hashCode = function () {
    var result = getStringHashCode(this.o1y_1);
    result = imul(result, 31) + getStringHashCode(this.studyProtocol) | 0;
    return result;
  };
  protoOf(CustomProtocolTask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomProtocolTask))
      return false;
    if (!(this.o1y_1 === other.o1y_1))
      return false;
    if (!(this.studyProtocol === other.studyProtocol))
      return false;
    return true;
  };
  function Measure$DataStream$Companion$$childSerializers$_anonymous__amy85i() {
    var tmp = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_52() {
    Companion_instance_53 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s1y_1 = [null, lazy(tmp_0, Measure$DataStream$Companion$$childSerializers$_anonymous__amy85i)];
  }
  var Companion_instance_53;
  function Companion_getInstance_53() {
    if (Companion_instance_53 == null)
      new Companion_52();
    return Companion_instance_53;
  }
  function $serializer_32() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.tasks.Measure.DataStream', this, 2);
    tmp0_serialDesc.pv('type', false);
    tmp0_serialDesc.pv('overrideSamplingConfiguration', true);
    this.t1y_1 = tmp0_serialDesc;
  }
  protoOf($serializer_32).u1y = function (encoder, value) {
    var tmp0_desc = this.t1y_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_53().s1y_1;
    tmp1_output.op(tmp0_desc, 0, NamespacedIdSerializer_getInstance(), value.type);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.overrideSamplingConfiguration == null)) {
      tmp1_output.qp(tmp0_desc, 1, tmp2_cached[1].s2(), value.overrideSamplingConfiguration);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_32).nk = function (encoder, value) {
    return this.u1y(encoder, value instanceof DataStream ? value : THROW_CCE());
  };
  protoOf($serializer_32).ok = function (decoder) {
    var tmp0_desc = this.t1y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_53().s1y_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, NamespacedIdSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, NamespacedIdSerializer_getInstance(), tmp4_local0);
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
    return DataStream_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_32).mk = function () {
    return this.t1y_1;
  };
  protoOf($serializer_32).ew = function () {
    var tmp0_cached = Companion_getInstance_53().s1y_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [NamespacedIdSerializer_getInstance(), get_nullable(tmp0_cached[1].s2())];
  };
  var $serializer_instance_31;
  function $serializer_getInstance_31() {
    if ($serializer_instance_31 == null)
      new $serializer_32();
    return $serializer_instance_31;
  }
  function DataStream_init_$Init$(seen0, type, overrideSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_31().t1y_1);
    }
    Measure_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.type = type;
    if (0 === (seen0 & 2))
      $this.overrideSamplingConfiguration = null;
    else
      $this.overrideSamplingConfiguration = overrideSamplingConfiguration;
    return $this;
  }
  function DataStream_init_$Create$(seen0, type, overrideSamplingConfiguration, serializationConstructorMarker) {
    return DataStream_init_$Init$(seen0, type, overrideSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(DataStream)));
  }
  function Companion_53() {
  }
  var Companion_instance_54;
  function Companion_getInstance_54() {
    return Companion_instance_54;
  }
  function $serializer_33() {
    $serializer_instance_32 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.tasks.Measure.TriggerData', this, 1);
    tmp0_serialDesc.pv('triggerId', false);
    this.v1y_1 = tmp0_serialDesc;
  }
  protoOf($serializer_33).w1y = function (encoder, value) {
    var tmp0_desc = this.v1y_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.hp(tmp0_desc, 0, value.triggerId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_33).nk = function (encoder, value) {
    return this.w1y(encoder, value instanceof TriggerData ? value : THROW_CCE());
  };
  protoOf($serializer_33).ok = function (decoder) {
    var tmp0_desc = this.v1y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_input = decoder.xn(tmp0_desc);
    if (tmp5_input.no()) {
      tmp4_local0 = tmp5_input.co(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.co(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return TriggerData_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_33).mk = function () {
    return this.v1y_1;
  };
  protoOf($serializer_33).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance()];
  };
  var $serializer_instance_32;
  function $serializer_getInstance_32() {
    if ($serializer_instance_32 == null)
      new $serializer_33();
    return $serializer_instance_32;
  }
  function TriggerData_init_$Init$(seen0, triggerId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_32().v1y_1);
    }
    Measure_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.triggerId = triggerId;
    return $this;
  }
  function TriggerData_init_$Create$(seen0, triggerId, serializationConstructorMarker) {
    return TriggerData_init_$Init$(seen0, triggerId, serializationConstructorMarker, objectCreate(protoOf(TriggerData)));
  }
  function _get_$cachedSerializer__te6jhj_6($this) {
    return $this.w1x_1.s2();
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
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.common.application.tasks.Measure', tmp, tmp_0, tmp_1, tmp$ret$6);
  }
  function DataStream(type, overrideSamplingConfiguration) {
    Companion_getInstance_53();
    overrideSamplingConfiguration = overrideSamplingConfiguration === VOID ? null : overrideSamplingConfiguration;
    Measure.call(this);
    this.type = type;
    this.overrideSamplingConfiguration = overrideSamplingConfiguration;
  }
  protoOf(DataStream).r1m = function () {
    return this.type;
  };
  protoOf(DataStream).x1y = function () {
    return this.overrideSamplingConfiguration;
  };
  protoOf(DataStream).sd = function () {
    return this.type;
  };
  protoOf(DataStream).td = function () {
    return this.overrideSamplingConfiguration;
  };
  protoOf(DataStream).y1y = function (type, overrideSamplingConfiguration) {
    return new DataStream(type, overrideSamplingConfiguration);
  };
  protoOf(DataStream).copy = function (type, overrideSamplingConfiguration, $super) {
    type = type === VOID ? this.type : type;
    overrideSamplingConfiguration = overrideSamplingConfiguration === VOID ? this.overrideSamplingConfiguration : overrideSamplingConfiguration;
    return $super === VOID ? this.y1y(type, overrideSamplingConfiguration) : $super.y1y.call(this, type, overrideSamplingConfiguration);
  };
  protoOf(DataStream).toString = function () {
    return 'DataStream(type=' + this.type.toString() + ', overrideSamplingConfiguration=' + toString_0(this.overrideSamplingConfiguration) + ')';
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
    if (!this.type.equals(other.type))
      return false;
    if (!equals(this.overrideSamplingConfiguration, other.overrideSamplingConfiguration))
      return false;
    return true;
  };
  function TriggerData(triggerId) {
    Measure.call(this);
    this.triggerId = triggerId;
  }
  protoOf(TriggerData).i1p = function () {
    return this.triggerId;
  };
  protoOf(TriggerData).sd = function () {
    return this.triggerId;
  };
  protoOf(TriggerData).z1i = function (triggerId) {
    return new TriggerData(triggerId);
  };
  protoOf(TriggerData).copy = function (triggerId, $super) {
    triggerId = triggerId === VOID ? this.triggerId : triggerId;
    return $super === VOID ? this.z1i(triggerId) : $super.z1i.call(this, triggerId);
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
    if (!(this.triggerId === other.triggerId))
      return false;
    return true;
  };
  function Companion_54() {
    Companion_instance_55 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.w1x_1 = lazy(tmp_0, Measure$Companion$_anonymous__jo0vzl);
  }
  protoOf(Companion_54).i18 = function () {
    return _get_$cachedSerializer__te6jhj_6(this);
  };
  protoOf(Companion_54).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_55;
  function Companion_getInstance_55() {
    if (Companion_instance_55 == null)
      new Companion_54();
    return Companion_instance_55;
  }
  function Measure_init_$Init$(seen0, serializationConstructorMarker, $this) {
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
    var _iterator__ex2g4s = this_0.r();
    while (_iterator__ex2g4s.s()) {
      var item = _iterator__ex2g4s.t();
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
      var tmp$ret$2 = tmp;
      destination.y(tmp$ret$2);
    }
    return toSet(plus(destination, CarpDataTypes_getInstance().COMPLETED_TASK.type));
  }
  function TaskConfigurationBuilder() {
    this.measures = emptyList();
    this.description = null;
  }
  protoOf(TaskConfigurationBuilder).j1y = function (_set____db54di) {
    this.measures = _set____db54di;
  };
  protoOf(TaskConfigurationBuilder).d1y = function () {
    return this.measures;
  };
  protoOf(TaskConfigurationBuilder).k1y = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(TaskConfigurationBuilder).e1y = function () {
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
    this.e1r_1 = list;
    var tmp = this;
    tmp.BACKGROUND = this.add(TaskConfigurationList$BACKGROUND$lambda);
  }
  protoOf(TaskConfigurationList).f1r = function () {
    return this.BACKGROUND;
  };
  protoOf(TaskConfigurationList).add = function (builder) {
    // Inline function 'kotlin.also' call
    var this_0 = new SupportedTaskConfiguration(builder);
    this.e1r_1.y(this_0);
    return this_0;
  };
  protoOf(TaskConfigurationList).p = function () {
    return this.e1r_1.p();
  };
  protoOf(TaskConfigurationList).g1r = function (element) {
    return this.e1r_1.o1(element);
  };
  protoOf(TaskConfigurationList).o1 = function (element) {
    if (!(element instanceof SupportedTaskConfiguration))
      return false;
    return this.g1r(element instanceof SupportedTaskConfiguration ? element : THROW_CCE());
  };
  protoOf(TaskConfigurationList).r = function () {
    return this.e1r_1.r();
  };
  protoOf(TaskConfigurationList).h1r = function (elements) {
    return this.e1r_1.e2(elements);
  };
  protoOf(TaskConfigurationList).e2 = function (elements) {
    return this.h1r(elements);
  };
  protoOf(TaskConfigurationList).b1 = function (index) {
    return this.e1r_1.b1(index);
  };
  protoOf(TaskConfigurationList).i1r = function (element) {
    return this.e1r_1.d1(element);
  };
  protoOf(TaskConfigurationList).d1 = function (element) {
    if (!(element instanceof SupportedTaskConfiguration))
      return -1;
    return this.i1r(element instanceof SupportedTaskConfiguration ? element : THROW_CCE());
  };
  protoOf(TaskConfigurationList).j1r = function (element) {
    return this.e1r_1.f2(element);
  };
  protoOf(TaskConfigurationList).f2 = function (element) {
    if (!(element instanceof SupportedTaskConfiguration))
      return -1;
    return this.j1r(element instanceof SupportedTaskConfiguration ? element : THROW_CCE());
  };
  protoOf(TaskConfigurationList).g2 = function () {
    return this.e1r_1.g2();
  };
  protoOf(TaskConfigurationList).h2 = function (index) {
    return this.e1r_1.h2(index);
  };
  protoOf(TaskConfigurationList).i2 = function (fromIndex, toIndex) {
    return this.e1r_1.i2(fromIndex, toIndex);
  };
  protoOf(TaskConfigurationList).asJsReadonlyArrayView = function () {
    return this.e1r_1.asJsReadonlyArrayView();
  };
  protoOf(TaskConfigurationList).a1 = function () {
    return this.e1r_1.a1();
  };
  function SupportedTaskConfiguration(createBuilder) {
    this.z1y_1 = createBuilder;
  }
  protoOf(SupportedTaskConfiguration).create = function (name, builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.z1y_1();
    builder(this_0);
    return this_0.build(name);
  };
  function markup($this, name) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = name.toUpperCase();
    // Inline function 'kotlin.let' call
    return '{{' + replace(tmp$ret$0, _Char___init__impl__6a9atx(32), _Char___init__impl__6a9atx(45)) + '}}';
  }
  function WebTask$Companion$$childSerializers$_anonymous__8wtldd() {
    return new ArrayListSerializer(Companion_getInstance_55().i18());
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
        THROW_IAE('No enum constant dk.cachet.carp.common.application.tasks.WebTask.UrlVariable.' + value);
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
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a1z_1 = [null, null, null, lazy(tmp_0, WebTask$Companion$$childSerializers$_anonymous__8wtldd)];
  }
  protoOf(Companion_55).i18 = function () {
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
  protoOf(UrlVariable).d1z = function () {
    return this.pattern;
  };
  function $serializer_34() {
    $serializer_instance_33 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.tasks.WebTask', this, 4);
    tmp0_serialDesc.pv('name', false);
    tmp0_serialDesc.pv('url', false);
    tmp0_serialDesc.pv('description', true);
    tmp0_serialDesc.pv('measures', true);
    this.e1z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_34).f1z = function (encoder, value) {
    var tmp0_desc = this.e1z_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_56().a1z_1;
    tmp1_output.mp(tmp0_desc, 0, value.g1z_1);
    tmp1_output.mp(tmp0_desc, 1, value.url);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.h1z_1 == null)) {
      tmp1_output.qp(tmp0_desc, 2, StringSerializer_getInstance(), value.h1z_1);
    }
    if (tmp1_output.up(tmp0_desc, 3) ? true : !equals(value.i1z_1, emptyList())) {
      tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.i1z_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_34).nk = function (encoder, value) {
    return this.f1z(encoder, value instanceof WebTask ? value : THROW_CCE());
  };
  protoOf($serializer_34).ok = function (decoder) {
    var tmp0_desc = this.e1z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_56().a1z_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lo(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
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
            tmp4_local0 = tmp8_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lo(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
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
    return WebTask_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_34).mk = function () {
    return this.e1z_1;
  };
  protoOf($serializer_34).ew = function () {
    var tmp0_cached = Companion_getInstance_56().a1z_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[3].s2()];
  };
  var $serializer_instance_33;
  function $serializer_getInstance_33() {
    if ($serializer_instance_33 == null)
      new $serializer_34();
    return $serializer_instance_33;
  }
  function WebTask_init_$Init$(seen0, name, url, description, measures, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_33().e1z_1);
    }
    $this.g1z_1 = name;
    $this.url = url;
    if (0 === (seen0 & 4))
      $this.h1z_1 = null;
    else
      $this.h1z_1 = description;
    if (0 === (seen0 & 8))
      $this.i1z_1 = emptyList();
    else
      $this.i1z_1 = measures;
    return $this;
  }
  function WebTask_init_$Create$(seen0, name, url, description, measures, serializationConstructorMarker) {
    return WebTask_init_$Init$(seen0, name, url, description, measures, serializationConstructorMarker, objectCreate(protoOf(WebTask)));
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
    this.g1z_1 = name;
    this.url = url;
    this.h1z_1 = description;
    this.i1z_1 = measures;
  }
  protoOf(WebTask).k = function () {
    return this.g1z_1;
  };
  protoOf(WebTask).c1w = function () {
    return this.url;
  };
  protoOf(WebTask).e1y = function () {
    return this.h1z_1;
  };
  protoOf(WebTask).d1y = function () {
    return this.i1z_1;
  };
  protoOf(WebTask).constructUrl = function (participantId, studyDeploymentId, triggerId) {
    return replace_0(replace_0(replace_0(this.url, UrlVariable_PARTICIPANT_ID_getInstance().pattern, participantId.toString()), UrlVariable_DEPLOYMENT_ID_getInstance().pattern, studyDeploymentId.toString()), UrlVariable_TRIGGER_ID_getInstance().pattern, triggerId.toString());
  };
  protoOf(WebTask).sd = function () {
    return this.g1z_1;
  };
  protoOf(WebTask).td = function () {
    return this.url;
  };
  protoOf(WebTask).m1j = function () {
    return this.h1z_1;
  };
  protoOf(WebTask).l1k = function () {
    return this.i1z_1;
  };
  protoOf(WebTask).j1z = function (name, url, description, measures) {
    return new WebTask(name, url, description, measures);
  };
  protoOf(WebTask).copy = function (name, url, description, measures, $super) {
    name = name === VOID ? this.g1z_1 : name;
    url = url === VOID ? this.url : url;
    description = description === VOID ? this.h1z_1 : description;
    measures = measures === VOID ? this.i1z_1 : measures;
    return $super === VOID ? this.j1z(name, url, description, measures) : $super.j1z.call(this, name, url, description, measures);
  };
  protoOf(WebTask).toString = function () {
    return 'WebTask(name=' + this.g1z_1 + ', url=' + this.url + ', description=' + this.h1z_1 + ', measures=' + toString(this.i1z_1) + ')';
  };
  protoOf(WebTask).hashCode = function () {
    var result = getStringHashCode(this.g1z_1);
    result = imul(result, 31) + getStringHashCode(this.url) | 0;
    result = imul(result, 31) + (this.h1z_1 == null ? 0 : getStringHashCode(this.h1z_1)) | 0;
    result = imul(result, 31) + hashCode(this.i1z_1) | 0;
    return result;
  };
  protoOf(WebTask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebTask))
      return false;
    if (!(this.g1z_1 === other.g1z_1))
      return false;
    if (!(this.url === other.url))
      return false;
    if (!(this.h1z_1 == other.h1z_1))
      return false;
    if (!equals(this.i1z_1, other.i1z_1))
      return false;
    return true;
  };
  function WebTaskBuilder() {
    TaskConfigurationBuilder.call(this);
    this.url = '';
  }
  protoOf(WebTaskBuilder).f1w = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(WebTaskBuilder).c1w = function () {
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
  var Companion_instance_57;
  function Companion_getInstance_57() {
    return Companion_instance_57;
  }
  function $serializer_35() {
    $serializer_instance_34 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.triggers.ElapsedTimeTrigger', this, 2);
    tmp0_serialDesc.pv('sourceDeviceRoleName', false);
    tmp0_serialDesc.pv('elapsedTime', false);
    this.k1z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_35).l1z = function (encoder, value) {
    var tmp0_desc = this.k1z_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.mp(tmp0_desc, 0, value.n1z_1);
    tmp1_output.op(tmp0_desc, 1, DurationSerializer_getInstance(), new Duration(value.elapsedTime));
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_35).nk = function (encoder, value) {
    return this.l1z(encoder, value instanceof ElapsedTimeTrigger ? value : THROW_CCE());
  };
  protoOf($serializer_35).ok = function (decoder) {
    var tmp0_desc = this.k1z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp5_local1;
      var tmp_1 = tmp7_input.jo(tmp0_desc, 1, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp5_local1 = tmp_1 == null ? null : tmp_1.sg_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
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
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp5_local1;
            var tmp_4 = tmp7_input.jo(tmp0_desc, 1, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp5_local1 = tmp_4 == null ? null : tmp_4.sg_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return ElapsedTimeTrigger_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_35).mk = function () {
    return this.k1z_1;
  };
  protoOf($serializer_35).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), DurationSerializer_getInstance()];
  };
  var $serializer_instance_34;
  function $serializer_getInstance_34() {
    if ($serializer_instance_34 == null)
      new $serializer_35();
    return $serializer_instance_34;
  }
  function ElapsedTimeTrigger_init_$Init$_0(seen0, sourceDeviceRoleName, elapsedTime, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_34().k1z_1);
    }
    TriggerConfiguration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.n1z_1 = sourceDeviceRoleName;
    $this.elapsedTime = elapsedTime;
    $this.o1z_1 = true;
    return $this;
  }
  function ElapsedTimeTrigger_init_$Create$(seen0, sourceDeviceRoleName, elapsedTime, serializationConstructorMarker) {
    return ElapsedTimeTrigger_init_$Init$_0(seen0, sourceDeviceRoleName, elapsedTime, serializationConstructorMarker, objectCreate(protoOf(ElapsedTimeTrigger)));
  }
  function ElapsedTimeTrigger(sourceDeviceRoleName, elapsedTime) {
    TriggerConfiguration.call(this);
    this.n1z_1 = sourceDeviceRoleName;
    this.elapsedTime = elapsedTime;
    this.o1z_1 = true;
  }
  protoOf(ElapsedTimeTrigger).p1z = function () {
    return this.n1z_1;
  };
  protoOf(ElapsedTimeTrigger).v1i = function () {
    return this.elapsedTime;
  };
  protoOf(ElapsedTimeTrigger).q1z = function () {
    return this.o1z_1;
  };
  protoOf(ElapsedTimeTrigger).sd = function () {
    return this.n1z_1;
  };
  protoOf(ElapsedTimeTrigger).r1z = function () {
    return this.elapsedTime;
  };
  protoOf(ElapsedTimeTrigger).toString = function () {
    return 'ElapsedTimeTrigger(sourceDeviceRoleName=' + this.n1z_1 + ', elapsedTime=' + Duration__toString_impl_8d916b(this.elapsedTime) + ')';
  };
  protoOf(ElapsedTimeTrigger).hashCode = function () {
    var result = getStringHashCode(this.n1z_1);
    result = imul(result, 31) + Duration__hashCode_impl_u4exz6(this.elapsedTime) | 0;
    return result;
  };
  protoOf(ElapsedTimeTrigger).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElapsedTimeTrigger))
      return false;
    if (!(this.n1z_1 === other.n1z_1))
      return false;
    if (!(this.elapsedTime === other.elapsedTime))
      return false;
    return true;
  };
  function Companion_57() {
  }
  var Companion_instance_58;
  function Companion_getInstance_58() {
    return Companion_instance_58;
  }
  function $serializer_36() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.triggers.ManualTrigger', this, 3);
    tmp0_serialDesc.pv('sourceDeviceRoleName', false);
    tmp0_serialDesc.pv('label', false);
    tmp0_serialDesc.pv('description', true);
    this.s1z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_36).t1z = function (encoder, value) {
    var tmp0_desc = this.s1z_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.mp(tmp0_desc, 0, value.v1z_1);
    tmp1_output.mp(tmp0_desc, 1, value.label);
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.description == null)) {
      tmp1_output.qp(tmp0_desc, 2, StringSerializer_getInstance(), value.description);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_36).nk = function (encoder, value) {
    return this.t1z(encoder, value instanceof ManualTrigger ? value : THROW_CCE());
  };
  protoOf($serializer_36).ok = function (decoder) {
    var tmp0_desc = this.s1z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lo(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lo(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return ManualTrigger_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_36).mk = function () {
    return this.s1z_1;
  };
  protoOf($serializer_36).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_35;
  function $serializer_getInstance_35() {
    if ($serializer_instance_35 == null)
      new $serializer_36();
    return $serializer_instance_35;
  }
  function ManualTrigger_init_$Init$(seen0, sourceDeviceRoleName, label, description, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_35().s1z_1);
    }
    TriggerConfiguration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.v1z_1 = sourceDeviceRoleName;
    $this.label = label;
    if (0 === (seen0 & 4))
      $this.description = null;
    else
      $this.description = description;
    $this.w1z_1 = true;
    return $this;
  }
  function ManualTrigger_init_$Create$(seen0, sourceDeviceRoleName, label, description, serializationConstructorMarker) {
    return ManualTrigger_init_$Init$(seen0, sourceDeviceRoleName, label, description, serializationConstructorMarker, objectCreate(protoOf(ManualTrigger)));
  }
  function ManualTrigger(sourceDeviceRoleName, label, description) {
    description = description === VOID ? null : description;
    TriggerConfiguration.call(this);
    this.v1z_1 = sourceDeviceRoleName;
    this.label = label;
    this.description = description;
    this.w1z_1 = true;
  }
  protoOf(ManualTrigger).p1z = function () {
    return this.v1z_1;
  };
  protoOf(ManualTrigger).x1z = function () {
    return this.label;
  };
  protoOf(ManualTrigger).e1y = function () {
    return this.description;
  };
  protoOf(ManualTrigger).q1z = function () {
    return this.w1z_1;
  };
  protoOf(ManualTrigger).sd = function () {
    return this.v1z_1;
  };
  protoOf(ManualTrigger).td = function () {
    return this.label;
  };
  protoOf(ManualTrigger).m1j = function () {
    return this.description;
  };
  protoOf(ManualTrigger).y1z = function (sourceDeviceRoleName, label, description) {
    return new ManualTrigger(sourceDeviceRoleName, label, description);
  };
  protoOf(ManualTrigger).copy = function (sourceDeviceRoleName, label, description, $super) {
    sourceDeviceRoleName = sourceDeviceRoleName === VOID ? this.v1z_1 : sourceDeviceRoleName;
    label = label === VOID ? this.label : label;
    description = description === VOID ? this.description : description;
    return $super === VOID ? this.y1z(sourceDeviceRoleName, label, description) : $super.y1z.call(this, sourceDeviceRoleName, label, description);
  };
  protoOf(ManualTrigger).toString = function () {
    return 'ManualTrigger(sourceDeviceRoleName=' + this.v1z_1 + ', label=' + this.label + ', description=' + this.description + ')';
  };
  protoOf(ManualTrigger).hashCode = function () {
    var result = getStringHashCode(this.v1z_1);
    result = imul(result, 31) + getStringHashCode(this.label) | 0;
    result = imul(result, 31) + (this.description == null ? 0 : getStringHashCode(this.description)) | 0;
    return result;
  };
  protoOf(ManualTrigger).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ManualTrigger))
      return false;
    if (!(this.v1z_1 === other.v1z_1))
      return false;
    if (!(this.label === other.label))
      return false;
    if (!(this.description == other.description))
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
  var Companion_instance_59;
  function Companion_getInstance_59() {
    return Companion_instance_59;
  }
  function $serializer_37() {
    $serializer_instance_36 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.triggers.ScheduledTrigger', this, 3);
    tmp0_serialDesc.pv('sourceDeviceRoleName', false);
    tmp0_serialDesc.pv('time', false);
    tmp0_serialDesc.pv('recurrenceRule', false);
    this.z1z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_37).a20 = function (encoder, value) {
    var tmp0_desc = this.z1z_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.mp(tmp0_desc, 0, value.c20_1);
    tmp1_output.op(tmp0_desc, 1, TimeOfDaySerializer_getInstance(), value.time);
    tmp1_output.op(tmp0_desc, 2, RecurrenceRuleSerializer_getInstance(), value.recurrenceRule);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_37).nk = function (encoder, value) {
    return this.a20(encoder, value instanceof ScheduledTrigger ? value : THROW_CCE());
  };
  protoOf($serializer_37).ok = function (decoder) {
    var tmp0_desc = this.z1z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, TimeOfDaySerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jo(tmp0_desc, 2, RecurrenceRuleSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, TimeOfDaySerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.jo(tmp0_desc, 2, RecurrenceRuleSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return ScheduledTrigger_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_37).mk = function () {
    return this.z1z_1;
  };
  protoOf($serializer_37).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), TimeOfDaySerializer_getInstance(), RecurrenceRuleSerializer_getInstance()];
  };
  var $serializer_instance_36;
  function $serializer_getInstance_36() {
    if ($serializer_instance_36 == null)
      new $serializer_37();
    return $serializer_instance_36;
  }
  function ScheduledTrigger_init_$Init$_0(seen0, sourceDeviceRoleName, time, recurrenceRule, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_36().z1z_1);
    }
    TriggerConfiguration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.c20_1 = sourceDeviceRoleName;
    $this.time = time;
    $this.recurrenceRule = recurrenceRule;
    $this.d20_1 = true;
    return $this;
  }
  function ScheduledTrigger_init_$Create$(seen0, sourceDeviceRoleName, time, recurrenceRule, serializationConstructorMarker) {
    return ScheduledTrigger_init_$Init$_0(seen0, sourceDeviceRoleName, time, recurrenceRule, serializationConstructorMarker, objectCreate(protoOf(ScheduledTrigger)));
  }
  function ScheduledTrigger(sourceDeviceRoleName, time, recurrenceRule) {
    TriggerConfiguration.call(this);
    this.c20_1 = sourceDeviceRoleName;
    this.time = time;
    this.recurrenceRule = recurrenceRule;
    this.d20_1 = true;
  }
  protoOf(ScheduledTrigger).p1z = function () {
    return this.c20_1;
  };
  protoOf(ScheduledTrigger).e20 = function () {
    return this.time;
  };
  protoOf(ScheduledTrigger).f20 = function () {
    return this.recurrenceRule;
  };
  protoOf(ScheduledTrigger).q1z = function () {
    return this.d20_1;
  };
  protoOf(ScheduledTrigger).sd = function () {
    return this.c20_1;
  };
  protoOf(ScheduledTrigger).td = function () {
    return this.time;
  };
  protoOf(ScheduledTrigger).m1j = function () {
    return this.recurrenceRule;
  };
  protoOf(ScheduledTrigger).toString = function () {
    return 'ScheduledTrigger(sourceDeviceRoleName=' + this.c20_1 + ', time=' + this.time.toString() + ', recurrenceRule=' + this.recurrenceRule.toString() + ')';
  };
  protoOf(ScheduledTrigger).hashCode = function () {
    var result = getStringHashCode(this.c20_1);
    result = imul(result, 31) + this.time.hashCode() | 0;
    result = imul(result, 31) + this.recurrenceRule.hashCode() | 0;
    return result;
  };
  protoOf(ScheduledTrigger).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScheduledTrigger))
      return false;
    if (!(this.c20_1 === other.c20_1))
      return false;
    if (!this.time.equals(other.time))
      return false;
    if (!this.recurrenceRule.equals(other.recurrenceRule))
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
        THROW_IAE('No enum constant dk.cachet.carp.common.application.triggers.TaskControl.Control.' + value);
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
  function TaskControl$Companion$$childSerializers$_anonymous__7sh2ky() {
    return createSimpleEnumSerializer('dk.cachet.carp.common.application.triggers.TaskControl.Control', values_5());
  }
  function Control(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_59() {
    Companion_instance_60 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i20_1 = [null, null, null, lazy(tmp_0, TaskControl$Companion$$childSerializers$_anonymous__7sh2ky)];
  }
  var Companion_instance_60;
  function Companion_getInstance_60() {
    if (Companion_instance_60 == null)
      new Companion_59();
    return Companion_instance_60;
  }
  function $serializer_38() {
    $serializer_instance_37 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.triggers.TaskControl', this, 4);
    tmp0_serialDesc.pv('triggerId', false);
    tmp0_serialDesc.pv('taskName', false);
    tmp0_serialDesc.pv('destinationDeviceRoleName', false);
    tmp0_serialDesc.pv('control', false);
    this.j20_1 = tmp0_serialDesc;
  }
  protoOf($serializer_38).k20 = function (encoder, value) {
    var tmp0_desc = this.j20_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_60().i20_1;
    tmp1_output.hp(tmp0_desc, 0, value.triggerId);
    tmp1_output.mp(tmp0_desc, 1, value.taskName);
    tmp1_output.mp(tmp0_desc, 2, value.destinationDeviceRoleName);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.control);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_38).nk = function (encoder, value) {
    return this.k20(encoder, value instanceof TaskControl ? value : THROW_CCE());
  };
  protoOf($serializer_38).ok = function (decoder) {
    var tmp0_desc = this.j20_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_60().i20_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.co(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
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
            tmp4_local0 = tmp8_input.co(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ho(tmp0_desc, 1);
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
    return TaskControl_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_38).mk = function () {
    return this.j20_1;
  };
  protoOf($serializer_38).ew = function () {
    var tmp0_cached = Companion_getInstance_60().i20_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[3].s2()];
  };
  var $serializer_instance_37;
  function $serializer_getInstance_37() {
    if ($serializer_instance_37 == null)
      new $serializer_38();
    return $serializer_instance_37;
  }
  function TaskControl_init_$Init$(seen0, triggerId, taskName, destinationDeviceRoleName, control, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_37().j20_1);
    }
    $this.triggerId = triggerId;
    $this.taskName = taskName;
    $this.destinationDeviceRoleName = destinationDeviceRoleName;
    $this.control = control;
    return $this;
  }
  function TaskControl_init_$Create$(seen0, triggerId, taskName, destinationDeviceRoleName, control, serializationConstructorMarker) {
    return TaskControl_init_$Init$(seen0, triggerId, taskName, destinationDeviceRoleName, control, serializationConstructorMarker, objectCreate(protoOf(TaskControl)));
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
  protoOf(TaskControl).i1p = function () {
    return this.triggerId;
  };
  protoOf(TaskControl).n1m = function () {
    return this.taskName;
  };
  protoOf(TaskControl).j1p = function () {
    return this.destinationDeviceRoleName;
  };
  protoOf(TaskControl).k1p = function () {
    return this.control;
  };
  protoOf(TaskControl).sd = function () {
    return this.triggerId;
  };
  protoOf(TaskControl).td = function () {
    return this.taskName;
  };
  protoOf(TaskControl).m1j = function () {
    return this.destinationDeviceRoleName;
  };
  protoOf(TaskControl).l1k = function () {
    return this.control;
  };
  protoOf(TaskControl).l20 = function (triggerId, taskName, destinationDeviceRoleName, control) {
    return new TaskControl(triggerId, taskName, destinationDeviceRoleName, control);
  };
  protoOf(TaskControl).copy = function (triggerId, taskName, destinationDeviceRoleName, control, $super) {
    triggerId = triggerId === VOID ? this.triggerId : triggerId;
    taskName = taskName === VOID ? this.taskName : taskName;
    destinationDeviceRoleName = destinationDeviceRoleName === VOID ? this.destinationDeviceRoleName : destinationDeviceRoleName;
    control = control === VOID ? this.control : control;
    return $super === VOID ? this.l20(triggerId, taskName, destinationDeviceRoleName, control) : $super.l20.call(this, triggerId, taskName, destinationDeviceRoleName, control);
  };
  protoOf(TaskControl).toString = function () {
    return 'TaskControl(triggerId=' + this.triggerId + ', taskName=' + this.taskName + ', destinationDeviceRoleName=' + this.destinationDeviceRoleName + ', control=' + this.control.toString() + ')';
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
    if (!(this.triggerId === other.triggerId))
      return false;
    if (!(this.taskName === other.taskName))
      return false;
    if (!(this.destinationDeviceRoleName === other.destinationDeviceRoleName))
      return false;
    if (!this.control.equals(other.control))
      return false;
    return true;
  };
  function Companion_60() {
  }
  protoOf(Companion_60).m20 = function (typeSerial0) {
    var tmp = getKClass(TriggerConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  };
  protoOf(Companion_60).pw = function (typeParamsSerializers) {
    return this.m20(typeParamsSerializers[0]);
  };
  var Companion_instance_61;
  function Companion_getInstance_61() {
    return Companion_instance_61;
  }
  function TriggerConfiguration_init_$Init$(seen0, serializationConstructorMarker, $this) {
    $this.n20_1 = false;
    return $this;
  }
  function TriggerConfiguration() {
    this.n20_1 = false;
  }
  protoOf(TriggerConfiguration).q1z = function () {
    return this.n20_1;
  };
  function Companion_61() {
  }
  protoOf(Companion_61).fromEmailAddress = function (emailAddress) {
    return create_3(emailAddress);
  };
  protoOf(Companion_61).fromUsername = function (username) {
    return create_4(username);
  };
  var Companion_instance_62;
  function Companion_getInstance_62() {
    return Companion_instance_62;
  }
  function AccountIdentity() {
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
  var Companion_instance_63;
  function Companion_getInstance_63() {
    return Companion_instance_63;
  }
  function $serializer_39() {
    $serializer_instance_38 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.EmailAccountIdentity', this, 1);
    tmp0_serialDesc.pv('emailAddress', false);
    this.o20_1 = tmp0_serialDesc;
  }
  protoOf($serializer_39).p20 = function (encoder, value) {
    var tmp0_desc = this.o20_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, EmailAddressSerializer_getInstance(), value.emailAddress);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_39).nk = function (encoder, value) {
    return this.p20(encoder, value instanceof EmailAccountIdentity ? value : THROW_CCE());
  };
  protoOf($serializer_39).ok = function (decoder) {
    var tmp0_desc = this.o20_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xn(tmp0_desc);
    if (tmp5_input.no()) {
      tmp4_local0 = tmp5_input.jo(tmp0_desc, 0, EmailAddressSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.jo(tmp0_desc, 0, EmailAddressSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return EmailAccountIdentity_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_39).mk = function () {
    return this.o20_1;
  };
  protoOf($serializer_39).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [EmailAddressSerializer_getInstance()];
  };
  var $serializer_instance_38;
  function $serializer_getInstance_38() {
    if ($serializer_instance_38 == null)
      new $serializer_39();
    return $serializer_instance_38;
  }
  function EmailAccountIdentity_init_$Init$_0(seen0, emailAddress, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_38().o20_1);
    }
    $this.emailAddress = emailAddress;
    return $this;
  }
  function EmailAccountIdentity_init_$Create$(seen0, emailAddress, serializationConstructorMarker) {
    return EmailAccountIdentity_init_$Init$_0(seen0, emailAddress, serializationConstructorMarker, objectCreate(protoOf(EmailAccountIdentity)));
  }
  function EmailAccountIdentity(emailAddress) {
    this.emailAddress = emailAddress;
  }
  protoOf(EmailAccountIdentity).q20 = function () {
    return this.emailAddress;
  };
  protoOf(EmailAccountIdentity).sd = function () {
    return this.emailAddress;
  };
  protoOf(EmailAccountIdentity).r20 = function (emailAddress) {
    return new EmailAccountIdentity(emailAddress);
  };
  protoOf(EmailAccountIdentity).copy = function (emailAddress, $super) {
    emailAddress = emailAddress === VOID ? this.emailAddress : emailAddress;
    return $super === VOID ? this.r20(emailAddress) : $super.r20.call(this, emailAddress);
  };
  protoOf(EmailAccountIdentity).toString = function () {
    return 'EmailAccountIdentity(emailAddress=' + this.emailAddress.toString() + ')';
  };
  protoOf(EmailAccountIdentity).hashCode = function () {
    return this.emailAddress.hashCode();
  };
  protoOf(EmailAccountIdentity).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmailAccountIdentity))
      return false;
    if (!this.emailAddress.equals(other.emailAddress))
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
  var Companion_instance_64;
  function Companion_getInstance_64() {
    return Companion_instance_64;
  }
  function $serializer_40() {
    $serializer_instance_39 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.UsernameAccountIdentity', this, 1);
    tmp0_serialDesc.pv('username', false);
    this.s20_1 = tmp0_serialDesc;
  }
  protoOf($serializer_40).t20 = function (encoder, value) {
    var tmp0_desc = this.s20_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, UsernameSerializer_getInstance(), value.username);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_40).nk = function (encoder, value) {
    return this.t20(encoder, value instanceof UsernameAccountIdentity ? value : THROW_CCE());
  };
  protoOf($serializer_40).ok = function (decoder) {
    var tmp0_desc = this.s20_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xn(tmp0_desc);
    if (tmp5_input.no()) {
      tmp4_local0 = tmp5_input.jo(tmp0_desc, 0, UsernameSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.jo(tmp0_desc, 0, UsernameSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return UsernameAccountIdentity_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_40).mk = function () {
    return this.s20_1;
  };
  protoOf($serializer_40).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UsernameSerializer_getInstance()];
  };
  var $serializer_instance_39;
  function $serializer_getInstance_39() {
    if ($serializer_instance_39 == null)
      new $serializer_40();
    return $serializer_instance_39;
  }
  function UsernameAccountIdentity_init_$Init$_0(seen0, username, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_39().s20_1);
    }
    $this.username = username;
    return $this;
  }
  function UsernameAccountIdentity_init_$Create$(seen0, username, serializationConstructorMarker) {
    return UsernameAccountIdentity_init_$Init$_0(seen0, username, serializationConstructorMarker, objectCreate(protoOf(UsernameAccountIdentity)));
  }
  function UsernameAccountIdentity(username) {
    this.username = username;
  }
  protoOf(UsernameAccountIdentity).u20 = function () {
    return this.username;
  };
  protoOf(UsernameAccountIdentity).sd = function () {
    return this.username;
  };
  protoOf(UsernameAccountIdentity).v20 = function (username) {
    return new UsernameAccountIdentity(username);
  };
  protoOf(UsernameAccountIdentity).copy = function (username, $super) {
    username = username === VOID ? this.username : username;
    return $super === VOID ? this.v20(username) : $super.v20.call(this, username);
  };
  protoOf(UsernameAccountIdentity).toString = function () {
    return 'UsernameAccountIdentity(username=' + this.username.toString() + ')';
  };
  protoOf(UsernameAccountIdentity).hashCode = function () {
    return this.username.hashCode();
  };
  protoOf(UsernameAccountIdentity).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UsernameAccountIdentity))
      return false;
    if (!this.username.equals(other.username))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj_7($this) {
    return $this.w20_1.s2();
  }
  function AssignedTo$All$_anonymous__xzl6z5() {
    var tmp = All_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return ObjectSerializer_init_$Create$('dk.cachet.carp.common.application.users.AssignedTo.All', tmp, tmp$ret$0);
  }
  function AssignedTo$Roles$Companion$$childSerializers$_anonymous__oljz7s() {
    return new LinkedHashSetSerializer(StringSerializer_getInstance());
  }
  function Companion_64() {
    Companion_instance_65 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x20_1 = [lazy(tmp_0, AssignedTo$Roles$Companion$$childSerializers$_anonymous__oljz7s)];
  }
  var Companion_instance_65;
  function Companion_getInstance_65() {
    if (Companion_instance_65 == null)
      new Companion_64();
    return Companion_instance_65;
  }
  function $serializer_41() {
    $serializer_instance_40 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.AssignedTo.Roles', this, 1);
    tmp0_serialDesc.pv('roleNames', false);
    this.y20_1 = tmp0_serialDesc;
  }
  protoOf($serializer_41).z20 = function (encoder, value) {
    var tmp0_desc = this.y20_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_65().x20_1;
    tmp1_output.op(tmp0_desc, 0, tmp2_cached[0].s2(), value.roleNames);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_41).nk = function (encoder, value) {
    return this.z20(encoder, value instanceof Roles ? value : THROW_CCE());
  };
  protoOf($serializer_41).ok = function (decoder) {
    var tmp0_desc = this.y20_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xn(tmp0_desc);
    var tmp6_cached = Companion_getInstance_65().x20_1;
    if (tmp5_input.no()) {
      tmp4_local0 = tmp5_input.jo(tmp0_desc, 0, tmp6_cached[0].s2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.jo(tmp0_desc, 0, tmp6_cached[0].s2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return Roles_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_41).mk = function () {
    return this.y20_1;
  };
  protoOf($serializer_41).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_65().x20_1[0].s2()];
  };
  var $serializer_instance_40;
  function $serializer_getInstance_40() {
    if ($serializer_instance_40 == null)
      new $serializer_41();
    return $serializer_instance_40;
  }
  function Roles_init_$Init$(seen0, roleNames, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_40().y20_1);
    }
    AssignedTo_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.roleNames = roleNames;
    return $this;
  }
  function Roles_init_$Create$(seen0, roleNames, serializationConstructorMarker) {
    return Roles_init_$Init$(seen0, roleNames, serializationConstructorMarker, objectCreate(protoOf(Roles)));
  }
  function _get_$cachedSerializer__te6jhj_8($this) {
    return $this.a21_1.s2();
  }
  function AssignedTo$Companion$_anonymous__eiup2e() {
    var tmp = getKClass(AssignedTo);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(All), getKClass(Roles)];
    var tmp_1 = All_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = [];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = [ObjectSerializer_init_$Create$('dk.cachet.carp.common.application.users.AssignedTo.All', tmp_1, tmp$ret$3), $serializer_getInstance_40()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$9 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.common.application.users.AssignedTo', tmp, tmp_0, tmp_2, tmp$ret$9);
  }
  function All() {
    All_instance = this;
    AssignedTo.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.w20_1 = lazy(tmp_0, AssignedTo$All$_anonymous__xzl6z5);
  }
  protoOf(All).i18 = function () {
    return _get_$cachedSerializer__te6jhj_7(this);
  };
  protoOf(All).pw = function (typeParamsSerializers) {
    return this.i18();
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
  protoOf(Roles).b21 = function () {
    return this.roleNames;
  };
  protoOf(Roles).sd = function () {
    return this.roleNames;
  };
  protoOf(Roles).c21 = function (roleNames) {
    return new Roles(roleNames);
  };
  protoOf(Roles).copy = function (roleNames, $super) {
    roleNames = roleNames === VOID ? this.roleNames : roleNames;
    return $super === VOID ? this.c21(roleNames) : $super.c21.call(this, roleNames);
  };
  protoOf(Roles).toString = function () {
    return 'Roles(roleNames=' + toString(this.roleNames) + ')';
  };
  protoOf(Roles).hashCode = function () {
    return hashCode(this.roleNames);
  };
  protoOf(Roles).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Roles))
      return false;
    if (!equals(this.roleNames, other.roleNames))
      return false;
    return true;
  };
  function Companion_65() {
    Companion_instance_66 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.a21_1 = lazy(tmp_0, AssignedTo$Companion$_anonymous__eiup2e);
  }
  protoOf(Companion_65).i18 = function () {
    return _get_$cachedSerializer__te6jhj_8(this);
  };
  protoOf(Companion_65).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_66;
  function Companion_getInstance_66() {
    if (Companion_instance_66 == null)
      new Companion_65();
    return Companion_instance_66;
  }
  function AssignedTo_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function AssignedTo() {
    Companion_getInstance_66();
  }
  function ExpectedParticipantData$Companion$$childSerializers$_anonymous__pmwret() {
    return Companion_getInstance_70().i18();
  }
  function ExpectedParticipantData$Companion$$childSerializers$_anonymous__pmwret_0() {
    return Companion_getInstance_66().i18();
  }
  function Companion_66() {
    Companion_instance_67 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ExpectedParticipantData$Companion$$childSerializers$_anonymous__pmwret);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e21_1 = [tmp_1, lazy(tmp_2, ExpectedParticipantData$Companion$$childSerializers$_anonymous__pmwret_0)];
  }
  var Companion_instance_67;
  function Companion_getInstance_67() {
    if (Companion_instance_67 == null)
      new Companion_66();
    return Companion_instance_67;
  }
  function $serializer_42() {
    $serializer_instance_41 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.ExpectedParticipantData', this, 2);
    tmp0_serialDesc.pv('attribute', false);
    tmp0_serialDesc.pv('assignedTo', true);
    this.f21_1 = tmp0_serialDesc;
  }
  protoOf($serializer_42).g21 = function (encoder, value) {
    var tmp0_desc = this.f21_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_67().e21_1;
    tmp1_output.op(tmp0_desc, 0, tmp2_cached[0].s2(), value.attribute);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !equals(value.assignedTo, All_getInstance())) {
      tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.assignedTo);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_42).nk = function (encoder, value) {
    return this.g21(encoder, value instanceof ExpectedParticipantData ? value : THROW_CCE());
  };
  protoOf($serializer_42).ok = function (decoder) {
    var tmp0_desc = this.f21_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_67().e21_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, tmp7_cached[0].s2(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, tmp7_cached[0].s2(), tmp4_local0);
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
    return ExpectedParticipantData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_42).mk = function () {
    return this.f21_1;
  };
  protoOf($serializer_42).ew = function () {
    var tmp0_cached = Companion_getInstance_67().e21_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].s2(), tmp0_cached[1].s2()];
  };
  var $serializer_instance_41;
  function $serializer_getInstance_41() {
    if ($serializer_instance_41 == null)
      new $serializer_42();
    return $serializer_instance_41;
  }
  function ExpectedParticipantData_init_$Init$(seen0, attribute, assignedTo, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_41().f21_1);
    }
    $this.attribute = attribute;
    if (0 === (seen0 & 2))
      $this.assignedTo = All_getInstance();
    else
      $this.assignedTo = assignedTo;
    return $this;
  }
  function ExpectedParticipantData_init_$Create$(seen0, attribute, assignedTo, serializationConstructorMarker) {
    return ExpectedParticipantData_init_$Init$(seen0, attribute, assignedTo, serializationConstructorMarker, objectCreate(protoOf(ExpectedParticipantData)));
  }
  function ExpectedParticipantData(attribute, assignedTo) {
    Companion_getInstance_67();
    assignedTo = assignedTo === VOID ? All_getInstance() : assignedTo;
    this.attribute = attribute;
    this.assignedTo = assignedTo;
  }
  protoOf(ExpectedParticipantData).h21 = function () {
    return this.attribute;
  };
  protoOf(ExpectedParticipantData).i21 = function () {
    return this.assignedTo;
  };
  protoOf(ExpectedParticipantData).j21 = function () {
    return this.attribute.inputDataType;
  };
  protoOf(ExpectedParticipantData).sd = function () {
    return this.attribute;
  };
  protoOf(ExpectedParticipantData).td = function () {
    return this.assignedTo;
  };
  protoOf(ExpectedParticipantData).k21 = function (attribute, assignedTo) {
    return new ExpectedParticipantData(attribute, assignedTo);
  };
  protoOf(ExpectedParticipantData).copy = function (attribute, assignedTo, $super) {
    attribute = attribute === VOID ? this.attribute : attribute;
    assignedTo = assignedTo === VOID ? this.assignedTo : assignedTo;
    return $super === VOID ? this.k21(attribute, assignedTo) : $super.k21.call(this, attribute, assignedTo);
  };
  protoOf(ExpectedParticipantData).toString = function () {
    return 'ExpectedParticipantData(attribute=' + toString(this.attribute) + ', assignedTo=' + toString(this.assignedTo) + ')';
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
    if (!equals(this.attribute, other.attribute))
      return false;
    if (!equals(this.assignedTo, other.assignedTo))
      return false;
    return true;
  };
  function hasNoConflicts(_this__u8e3s4, exceptionOnConflict) {
    exceptionOnConflict = exceptionOnConflict === VOID ? false : exceptionOnConflict;
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = _this__u8e3s4.r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      var key = element.inputDataType;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.q2(key);
      var tmp;
      if (value == null) {
        var answer = ArrayList_init_$Create$_0();
        destination.k2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.y(element);
    }
    var expectedDataByInputType = destination;
    var tmp$ret$5;
    $l$block_2: {
      // Inline function 'kotlin.collections.all' call
      if (expectedDataByInputType.p()) {
        tmp$ret$5 = true;
        break $l$block_2;
      }
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_0 = expectedDataByInputType.f1().r();
      while (_iterator__ex2g4s_0.s()) {
        var element_0 = _iterator__ex2g4s_0.t();
        var tmp0_safe_receiver = firstOrNull(element_0.s2());
        var firstAttribute = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.attribute;
        var tmp0 = element_0.s2();
        var tmp$ret$8;
        $l$block_1: {
          // Inline function 'kotlin.collections.all' call
          var tmp_0;
          if (isInterface(tmp0, Collection)) {
            tmp_0 = tmp0.p();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$8 = true;
            break $l$block_1;
          }
          var _iterator__ex2g4s_1 = tmp0.r();
          while (_iterator__ex2g4s_1.s()) {
            var element_1 = _iterator__ex2g4s_1.t();
            if (!equals(element_1.attribute, firstAttribute)) {
              tmp$ret$8 = false;
              break $l$block_1;
            }
          }
          tmp$ret$8 = true;
        }
        if (!tmp$ret$8) {
          tmp$ret$5 = false;
          break $l$block_2;
        }
      }
      tmp$ret$5 = true;
    }
    var noConflictingAttributes = tmp$ret$5;
    if (exceptionOnConflict) {
      // Inline function 'kotlin.require' call
      if (!noConflictingAttributes) {
        var message = 'Expected data contains differing participant attributes with the same input data type.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp$ret$12;
    $l$block_4: {
      // Inline function 'kotlin.collections.all' call
      if (expectedDataByInputType.p()) {
        tmp$ret$12 = true;
        break $l$block_4;
      }
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_2 = expectedDataByInputType.f1().r();
      while (_iterator__ex2g4s_2.s()) {
        var element_2 = _iterator__ex2g4s_2.t();
        // Inline function 'kotlin.collections.component2' call
        var expectedData = element_2.s2();
        var tmp_1;
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(expectedData, 10));
        var _iterator__ex2g4s_3 = expectedData.r();
        while (_iterator__ex2g4s_3.s()) {
          var item = _iterator__ex2g4s_3.t();
          var tmp$ret$18 = item.assignedTo;
          destination_0.y(tmp$ret$18);
        }
        if (destination_0.o1(All_getInstance())) {
          tmp_1 = expectedData.a1() === 1;
        } else {
          // Inline function 'kotlin.collections.flatMap' call
          // Inline function 'kotlin.collections.flatMapTo' call
          var destination_1 = ArrayList_init_$Create$_0();
          var _iterator__ex2g4s_4 = expectedData.r();
          while (_iterator__ex2g4s_4.s()) {
            var element_3 = _iterator__ex2g4s_4.t();
            var tmp_2 = element_3.assignedTo;
            var list_0 = (tmp_2 instanceof Roles ? tmp_2 : THROW_CCE()).roleNames;
            addAll(destination_1, list_0);
          }
          var canBeInputBy = destination_1;
          tmp_1 = canBeInputBy.a1() === distinct(canBeInputBy).a1();
        }
        if (!tmp_1) {
          tmp$ret$12 = false;
          break $l$block_4;
        }
      }
      tmp$ret$12 = true;
    }
    var noMultipleInputType = tmp$ret$12;
    if (exceptionOnConflict) {
      // Inline function 'kotlin.require' call
      if (!noMultipleInputType) {
        var message_0 = 'Expected data contains attributes of the same input data type which are assigned to the same role.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    return noConflictingAttributes && noMultipleInputType;
  }
  function Companion_67() {
  }
  var Companion_instance_68;
  function Companion_getInstance_68() {
    return Companion_instance_68;
  }
  function $serializer_43() {
    $serializer_instance_42 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.ParticipantAttribute.DefaultParticipantAttribute', this, 1);
    tmp0_serialDesc.pv('inputDataType', false);
    this.l21_1 = tmp0_serialDesc;
  }
  protoOf($serializer_43).m21 = function (encoder, value) {
    var tmp0_desc = this.l21_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, NamespacedIdSerializer_getInstance(), value.n21_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_43).nk = function (encoder, value) {
    return this.m21(encoder, value instanceof DefaultParticipantAttribute ? value : THROW_CCE());
  };
  protoOf($serializer_43).ok = function (decoder) {
    var tmp0_desc = this.l21_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xn(tmp0_desc);
    if (tmp5_input.no()) {
      tmp4_local0 = tmp5_input.jo(tmp0_desc, 0, NamespacedIdSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.jo(tmp0_desc, 0, NamespacedIdSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return DefaultParticipantAttribute_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_43).mk = function () {
    return this.l21_1;
  };
  protoOf($serializer_43).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [NamespacedIdSerializer_getInstance()];
  };
  var $serializer_instance_42;
  function $serializer_getInstance_42() {
    if ($serializer_instance_42 == null)
      new $serializer_43();
    return $serializer_instance_42;
  }
  function DefaultParticipantAttribute_init_$Init$(seen0, inputDataType, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_42().l21_1);
    }
    ParticipantAttribute_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.n21_1 = inputDataType;
    return $this;
  }
  function DefaultParticipantAttribute_init_$Create$(seen0, inputDataType, serializationConstructorMarker) {
    return DefaultParticipantAttribute_init_$Init$(seen0, inputDataType, serializationConstructorMarker, objectCreate(protoOf(DefaultParticipantAttribute)));
  }
  function $serializer_init_$Init$_0(typeSerial0, $this) {
    $serializer_44.call($this);
    $this.p21_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$_0(typeSerial0) {
    return $serializer_init_$Init$_0(typeSerial0, objectCreate(protoOf($serializer_44)));
  }
  function Companion_68() {
    Companion_instance_69 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.ParticipantAttribute.CustomParticipantAttribute', null, 2);
    tmp0_serialDesc.pv('input', false);
    tmp0_serialDesc.pv('inputDataType', true);
    this.q21_1 = tmp0_serialDesc;
  }
  protoOf(Companion_68).n1u = function (typeSerial0) {
    return $serializer_init_$Create$_0(typeSerial0);
  };
  protoOf(Companion_68).pw = function (typeParamsSerializers) {
    return this.n1u(typeParamsSerializers[0]);
  };
  var Companion_instance_69;
  function Companion_getInstance_69() {
    if (Companion_instance_69 == null)
      new Companion_68();
    return Companion_instance_69;
  }
  function $serializer_44() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.ParticipantAttribute.CustomParticipantAttribute', this, 2);
    tmp0_serialDesc.pv('input', false);
    tmp0_serialDesc.pv('inputDataType', true);
    this.o21_1 = tmp0_serialDesc;
  }
  protoOf($serializer_44).r21 = function (encoder, value) {
    var tmp0_desc = this.o21_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp = getKClass(InputElement);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    tmp1_output.op(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0), value.input);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !value.s21_1.equals(new NamespacedId('dk.cachet.carp.input.custom', replace_0(Companion_instance_9.randomUUID().toString(), '-', '')))) {
      tmp1_output.op(tmp0_desc, 1, NamespacedIdSerializer_getInstance(), value.s21_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_44).nk = function (encoder, value) {
    return this.r21(encoder, value instanceof CustomParticipantAttribute ? value : THROW_CCE());
  };
  protoOf($serializer_44).ok = function (decoder) {
    var tmp0_desc = this.o21_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      var tmp = getKClass(InputElement);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, NamespacedIdSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            var tmp_0 = getKClass(InputElement);
            // Inline function 'kotlin.arrayOf' call

            // Inline function 'kotlin.js.unsafeCast' call

            // Inline function 'kotlin.js.asDynamic' call

            var tmp$ret$3 = [];
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$3), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, NamespacedIdSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return CustomParticipantAttribute_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_44).mk = function () {
    return this.o21_1;
  };
  protoOf($serializer_44).ew = function () {
    var tmp = getKClass(InputElement);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0), NamespacedIdSerializer_getInstance()];
  };
  protoOf($serializer_44).fw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.p21_1];
  };
  function CustomParticipantAttribute_init_$Init$(seen0, input, inputDataType, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, Companion_getInstance_69().q21_1);
    }
    ParticipantAttribute_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.input = input;
    if (0 === (seen0 & 2))
      $this.s21_1 = new NamespacedId('dk.cachet.carp.input.custom', replace_0(Companion_instance_9.randomUUID().toString(), '-', ''));
    else
      $this.s21_1 = inputDataType;
    return $this;
  }
  function CustomParticipantAttribute_init_$Create$(seen0, input, inputDataType, serializationConstructorMarker) {
    return CustomParticipantAttribute_init_$Init$(seen0, input, inputDataType, serializationConstructorMarker, objectCreate(protoOf(CustomParticipantAttribute)));
  }
  function _get_$cachedSerializer__te6jhj_9($this) {
    return $this.d21_1.s2();
  }
  function ParticipantAttribute$Companion$_anonymous__7dlyl6() {
    var tmp = getKClass(ParticipantAttribute);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(CustomParticipantAttribute), getKClass(DefaultParticipantAttribute)];
    var tmp_1 = PrimitiveClasses_getInstance().u9();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = [];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = [$serializer_init_$Create$_0(PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$3)), $serializer_getInstance_42()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$9 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.common.application.users.ParticipantAttribute', tmp, tmp_0, tmp_2, tmp$ret$9);
  }
  function DefaultParticipantAttribute(inputDataType) {
    ParticipantAttribute.call(this);
    this.n21_1 = inputDataType;
  }
  protoOf(DefaultParticipantAttribute).j21 = function () {
    return this.n21_1;
  };
  protoOf(DefaultParticipantAttribute).sd = function () {
    return this.n21_1;
  };
  protoOf(DefaultParticipantAttribute).t21 = function (inputDataType) {
    return new DefaultParticipantAttribute(inputDataType);
  };
  protoOf(DefaultParticipantAttribute).copy = function (inputDataType, $super) {
    inputDataType = inputDataType === VOID ? this.n21_1 : inputDataType;
    return $super === VOID ? this.t21(inputDataType) : $super.t21.call(this, inputDataType);
  };
  protoOf(DefaultParticipantAttribute).toString = function () {
    return 'DefaultParticipantAttribute(inputDataType=' + this.n21_1.toString() + ')';
  };
  protoOf(DefaultParticipantAttribute).hashCode = function () {
    return this.n21_1.hashCode();
  };
  protoOf(DefaultParticipantAttribute).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DefaultParticipantAttribute))
      return false;
    if (!this.n21_1.equals(other.n21_1))
      return false;
    return true;
  };
  function CustomParticipantAttribute(input) {
    Companion_getInstance_69();
    ParticipantAttribute.call(this);
    this.input = input;
    this.s21_1 = new NamespacedId('dk.cachet.carp.input.custom', replace_0(Companion_instance_9.randomUUID().toString(), '-', ''));
  }
  protoOf(CustomParticipantAttribute).i1q = function () {
    return this.input;
  };
  protoOf(CustomParticipantAttribute).j21 = function () {
    return this.s21_1;
  };
  protoOf(CustomParticipantAttribute).sd = function () {
    return this.input;
  };
  protoOf(CustomParticipantAttribute).u21 = function (input) {
    return new CustomParticipantAttribute(input);
  };
  protoOf(CustomParticipantAttribute).copy = function (input, $super) {
    input = input === VOID ? this.input : input;
    return $super === VOID ? this.u21(input) : $super.u21.call(this, input);
  };
  protoOf(CustomParticipantAttribute).toString = function () {
    return 'CustomParticipantAttribute(input=' + toString(this.input) + ')';
  };
  protoOf(CustomParticipantAttribute).hashCode = function () {
    return hashCode(this.input);
  };
  protoOf(CustomParticipantAttribute).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomParticipantAttribute))
      return false;
    if (!equals(this.input, other.input))
      return false;
    return true;
  };
  function isValidCustomData($this, inputElement, data) {
    return inputElement.s1q().i9(data.input);
  }
  function Companion_69() {
    Companion_instance_70 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.d21_1 = lazy(tmp_0, ParticipantAttribute$Companion$_anonymous__7dlyl6);
  }
  protoOf(Companion_69).i18 = function () {
    return _get_$cachedSerializer__te6jhj_9(this);
  };
  protoOf(Companion_69).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_70;
  function Companion_getInstance_70() {
    if (Companion_instance_70 == null)
      new Companion_69();
    return Companion_instance_70;
  }
  function ParticipantAttribute_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function ParticipantAttribute() {
    Companion_getInstance_70();
  }
  protoOf(ParticipantAttribute).getInputElement = function (registeredInputDataTypes) {
    var tmp;
    if (this instanceof DefaultParticipantAttribute) {
      var tmp1_elvis_lhs = registeredInputDataTypes.inputElements.q2(this.n21_1);
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw UnsupportedOperationException_init_$Create$("No input element for '" + this.n21_1.toString() + "' registered.");
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
    var isExpectedDataType = inputElement.s1q().i9(input);
    return isExpectedDataType && inputElement.isValid(input);
  };
  protoOf(ParticipantAttribute).inputToData = function (registeredInputDataTypes, input) {
    // Inline function 'kotlin.require' call
    if (!this.isValidInput(registeredInputDataTypes, input)) {
      var message = 'Input value does not match constraints for the specified input data type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (input == null)
      return null;
    if (this instanceof CustomParticipantAttribute)
      return new CustomInput(input);
    var tmp0_elvis_lhs = registeredInputDataTypes.inputToDataConverters.q2(this.inputDataType);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw UnsupportedOperationException_init_$Create$("No data converter for '" + this.inputDataType.toString() + "' registered.");
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
        var tmp0 = registeredInputDataTypes.dataClasses.q2(this.n21_1);
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (tmp0 == null) {
            var message = 'Required value was null.';
            throw IllegalStateException_init_$Create$(toString(message));
          } else {
            tmp$ret$1 = tmp0;
            break $l$block;
          }
        }
        var dataClass = tmp$ret$1;
        tmp = dataClass.i9(data);
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
      var tmp_0;
      if (data instanceof CustomInput) {
        tmp_0 = isValidCustomData(this, inputElement, data);
      } else {
        tmp_0 = false;
      }
      // Inline function 'kotlin.require' call
      if (!tmp_0) {
        var message = 'Data is not of expected type for this attribute.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      return data.input;
    }
    var tmp0_elvis_lhs = registeredInputDataTypes.dataToInputConverters.q2(this.inputDataType);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw UnsupportedOperationException_init_$Create$("No data converter for '" + this.inputDataType.toString() + "' registered.");
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var converter = tmp_1;
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = registeredInputDataTypes.dataClasses.q2(this.inputDataType);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message_0 = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp0;
        break $l$block;
      }
    }
    var dataClass = tmp$ret$3;
    // Inline function 'kotlin.require' call
    if (!dataClass.i9(data)) {
      var message_1 = 'Data is not of expected type for this attribute.';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return converter(data);
  };
  function Companion_70() {
  }
  var Companion_instance_71;
  function Companion_getInstance_71() {
    return Companion_instance_71;
  }
  function $serializer_45() {
    $serializer_instance_43 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.application.users.ParticipantRole', this, 2);
    tmp0_serialDesc.pv('role', false);
    tmp0_serialDesc.pv('isOptional', false);
    this.v21_1 = tmp0_serialDesc;
  }
  protoOf($serializer_45).w21 = function (encoder, value) {
    var tmp0_desc = this.v21_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.mp(tmp0_desc, 0, value.role);
    tmp1_output.ep(tmp0_desc, 1, value.isOptional);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_45).nk = function (encoder, value) {
    return this.w21(encoder, value instanceof ParticipantRole ? value : THROW_CCE());
  };
  protoOf($serializer_45).ok = function (decoder) {
    var tmp0_desc = this.v21_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.zn(tmp0_desc, 1);
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
            tmp5_local1 = tmp6_input.zn(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return ParticipantRole_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_45).mk = function () {
    return this.v21_1;
  };
  protoOf($serializer_45).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_43;
  function $serializer_getInstance_43() {
    if ($serializer_instance_43 == null)
      new $serializer_45();
    return $serializer_instance_43;
  }
  function ParticipantRole_init_$Init$(seen0, role, isOptional, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_43().v21_1);
    }
    $this.role = role;
    $this.isOptional = isOptional;
    return $this;
  }
  function ParticipantRole_init_$Create$(seen0, role, isOptional, serializationConstructorMarker) {
    return ParticipantRole_init_$Init$(seen0, role, isOptional, serializationConstructorMarker, objectCreate(protoOf(ParticipantRole)));
  }
  function ParticipantRole(role, isOptional) {
    this.role = role;
    this.isOptional = isOptional;
  }
  protoOf(ParticipantRole).x21 = function () {
    return this.role;
  };
  protoOf(ParticipantRole).r1r = function () {
    return this.isOptional;
  };
  protoOf(ParticipantRole).sd = function () {
    return this.role;
  };
  protoOf(ParticipantRole).td = function () {
    return this.isOptional;
  };
  protoOf(ParticipantRole).u1r = function (role, isOptional) {
    return new ParticipantRole(role, isOptional);
  };
  protoOf(ParticipantRole).copy = function (role, isOptional, $super) {
    role = role === VOID ? this.role : role;
    isOptional = isOptional === VOID ? this.isOptional : isOptional;
    return $super === VOID ? this.u1r(role, isOptional) : $super.u1r.call(this, role, isOptional);
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
    if (!(this.role === other.role))
      return false;
    if (!(this.isOptional === other.isOptional))
      return false;
    return true;
  };
  function Companion_71() {
  }
  var Companion_instance_72;
  function Companion_getInstance_72() {
    return Companion_instance_72;
  }
  function Username(name) {
    this.name = name;
  }
  protoOf(Username).k = function () {
    return this.name;
  };
  protoOf(Username).toString = function () {
    return this.name;
  };
  protoOf(Username).sd = function () {
    return this.name;
  };
  protoOf(Username).y1h = function (name) {
    return new Username(name);
  };
  protoOf(Username).copy = function (name, $super) {
    name = name === VOID ? this.name : name;
    return $super === VOID ? this.y1h(name) : $super.y1h.call(this, name);
  };
  protoOf(Username).hashCode = function () {
    return getStringHashCode(this.name);
  };
  protoOf(Username).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Username))
      return false;
    if (!(this.name === other.name))
      return false;
    return true;
  };
  function UsernameSerializer$$$delegate_0$lambda(it) {
    return new Username(it);
  }
  function UsernameSerializer$$inlined$createCarpStringPrimitiveSerializer$1($fromString) {
    StringConversionSerializer.call(this, 'dk.cachet.carp.common.' + ensureNotNull(getKClass(Username).m()), $fromString);
  }
  function UsernameSerializer() {
    UsernameSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createCarpStringPrimitiveSerializer' call
    var fromString = UsernameSerializer$$$delegate_0$lambda;
    tmp.y21_1 = new UsernameSerializer$$inlined$createCarpStringPrimitiveSerializer$1(fromString);
  }
  protoOf(UsernameSerializer).mk = function () {
    return this.y21_1.mk();
  };
  protoOf(UsernameSerializer).z21 = function (encoder, value) {
    this.y21_1.nk(encoder, value);
  };
  protoOf(UsernameSerializer).nk = function (encoder, value) {
    return this.z21(encoder, value instanceof Username ? value : THROW_CCE());
  };
  protoOf(UsernameSerializer).ok = function (decoder) {
    return this.y21_1.ok(decoder);
  };
  var UsernameSerializer_instance;
  function UsernameSerializer_getInstance() {
    if (UsernameSerializer_instance == null)
      new UsernameSerializer();
    return UsernameSerializer_instance;
  }
  function AggregateRoot(id, createdOn) {
    this.a22_1 = id;
    this.b22_1 = createdOn;
    this.c22_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d22_1 = ArrayList_init_$Create$_0();
  }
  protoOf(AggregateRoot).e22 = function (snapshot) {
    // Inline function 'kotlin.check' call
    if (!(this.c22_1 == null)) {
      var message = 'An aggregate root should only be loaded from a snapshot once.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!(this.d22_1.a1() === 0)) {
      var message_0 = 'The snapshot an aggregate root was loaded from should be set before executing any operations on it.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    this.c22_1 = snapshot.version;
  };
  protoOf(AggregateRoot).f22 = function (event) {
    return this.d22_1.y(event);
  };
  protoOf(AggregateRoot).g22 = function (_this__u8e3s4, value, createEvent) {
    // Inline function 'kotlin.also' call
    if (equals(_this__u8e3s4, value)) {
      this.f22(createEvent());
    }
    return _this__u8e3s4;
  };
  protoOf(AggregateRoot).h22 = function () {
    var toProcess = toList(this.d22_1);
    this.d22_1.x2();
    return toProcess;
  };
  function ExtractUniqueKeyMap(keyOf, keyPresentError) {
    this.i22_1 = keyOf;
    this.j22_1 = keyPresentError;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k22_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExtractUniqueKeyMap).l22 = function (element) {
    var key = this.i22_1(element);
    var storedElement = this.k22_1.q2(key);
    if (!(storedElement == null)) {
      if (element === storedElement) {
        return false;
      }
      throw this.j22_1(key);
    }
    // Inline function 'kotlin.collections.set' call
    this.k22_1.k2(key, element);
    return true;
  };
  protoOf(ExtractUniqueKeyMap).f1 = function () {
    return this.k22_1.f1();
  };
  protoOf(ExtractUniqueKeyMap).m2 = function () {
    return this.k22_1.m2();
  };
  protoOf(ExtractUniqueKeyMap).a1 = function () {
    return this.k22_1.a1();
  };
  protoOf(ExtractUniqueKeyMap).n2 = function () {
    return this.k22_1.n2();
  };
  protoOf(ExtractUniqueKeyMap).o2 = function (key) {
    return this.k22_1.o2(key);
  };
  protoOf(ExtractUniqueKeyMap).p2 = function (value) {
    return this.k22_1.p2(value);
  };
  protoOf(ExtractUniqueKeyMap).q2 = function (key) {
    return this.k22_1.q2(key);
  };
  protoOf(ExtractUniqueKeyMap).p = function () {
    return this.k22_1.p();
  };
  function Snapshot() {
  }
  function ReflectionAvailable() {
  }
  function reflectIfAvailable() {
    return Reflection_instance.p22_1 ? new ReflectionAvailable() : null;
  }
  function ApplicationDataSerializer() {
    this.q22_1 = get_nullable(serializer_1(StringCompanionObject_instance)).mk();
  }
  protoOf(ApplicationDataSerializer).mk = function () {
    return this.q22_1;
  };
  protoOf(ApplicationDataSerializer).ok = function (decoder) {
    if (!decoder.in())
      return null;
    if (!isInterface(decoder, JsonDecoder))
      return new ApplicationData(decoder.wn(serializer_1(StringCompanionObject_instance)));
    var jsonElement = decoder.d18();
    var originalString = toString(jsonElement);
    var tmp;
    if (jsonElement instanceof JsonObject) {
      tmp = originalString;
    } else {
      tmp = substring_0(originalString, 1, originalString.length - 1 | 0);
    }
    var data = tmp;
    return new ApplicationData(data);
  };
  protoOf(ApplicationDataSerializer).r22 = function (encoder, value) {
    if (value == null) {
      encoder.so();
      return Unit_instance;
    }
    if (!isInterface(encoder, JsonEncoder)) {
      encoder.rp(get_nullable(serializer_1(StringCompanionObject_instance)), value.data);
      return Unit_instance;
    }
    var json = encoder.c18();
    var isJsonObject = startsWith(value.data, '{');
    if (isJsonObject) {
      try {
        var jsonElement = json.z15(value.data);
        encoder.l19(jsonElement);
      } catch ($p) {
        if ($p instanceof SerializationException) {
          var _unused_var__etf5q3 = $p;
          isJsonObject = false;
        } else {
          throw $p;
        }
      }
    }
    if (!isJsonObject) {
      encoder.bp(value.data);
    }
  };
  protoOf(ApplicationDataSerializer).nk = function (encoder, value) {
    return this.r22(encoder, (value == null ? true : value instanceof ApplicationData) ? value : THROW_CCE());
  };
  function StringConversionSerializer(serialName, fromString) {
    this.a1i_1 = fromString;
    this.b1i_1 = PrimitiveSerialDescriptor(serialName, STRING_getInstance());
  }
  protoOf(StringConversionSerializer).mk = function () {
    return this.b1i_1;
  };
  protoOf(StringConversionSerializer).nk = function (encoder, value) {
    return encoder.bp(toString_0(value));
  };
  protoOf(StringConversionSerializer).ok = function (decoder) {
    return this.a1i_1(decoder.sn());
  };
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.s22_1 = PrimitiveSerialDescriptor('dk.cachet.carp.common.' + ensureNotNull(getKClass(Duration).m()), STRING_getInstance());
  }
  protoOf(DurationSerializer).mk = function () {
    return this.s22_1;
  };
  protoOf(DurationSerializer).dq = function (decoder) {
    return Companion_getInstance().tg(decoder.sn());
  };
  protoOf(DurationSerializer).ok = function (decoder) {
    return new Duration(this.dq(decoder));
  };
  protoOf(DurationSerializer).cq = function (encoder, value) {
    return encoder.bp(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).nk = function (encoder, value) {
    return this.cq(encoder, value instanceof Duration ? value.sg_1 : THROW_CCE());
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function ignoreTypeParameters(createSerializer) {
    return new ignoreTypeParameters$1(createSerializer);
  }
  function NotSerializable() {
    NotSerializable_instance = this;
    this.t22_1 = SerializationException_init_$Create$('Types annotated as `@Serializable( with = NotSerializable::class )` are never expected to be serialized. The serializer is only defined since the compiler does not know this, causing a compilation error.');
    this.u22_1 = buildClassSerialDescriptor('This should never be serialized.', []);
  }
  protoOf(NotSerializable).mk = function () {
    return this.u22_1;
  };
  protoOf(NotSerializable).ok = function (decoder) {
    throw this.t22_1;
  };
  protoOf(NotSerializable).v22 = function (encoder, value) {
    throw this.t22_1;
  };
  protoOf(NotSerializable).nk = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.v22(encoder, tmp);
  };
  var NotSerializable_instance;
  function NotSerializable_getInstance() {
    if (NotSerializable_instance == null)
      new NotSerializable();
    return NotSerializable_instance;
  }
  function ignoreTypeParameters$1($createSerializer) {
    var tmp = this;
    var tmp_0 = NotSerializable_getInstance();
    tmp.w22_1 = $createSerializer(isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
    this.x22_1 = this.w22_1.mk();
  }
  protoOf(ignoreTypeParameters$1).mk = function () {
    return this.x22_1;
  };
  protoOf(ignoreTypeParameters$1).nk = function (encoder, value) {
    return encoder.pp(this.w22_1, value);
  };
  protoOf(ignoreTypeParameters$1).ok = function (decoder) {
    return decoder.wn(this.w22_1);
  };
  function PolymorphicEnumSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.al('value', this$0.y22_1.mk());
      return Unit_instance;
    };
  }
  function PolymorphicEnumSerializer(enumSerializer) {
    this.y22_1 = enumSerializer;
    var tmp = this;
    var tmp_0 = this.y22_1.mk().nl();
    tmp.z22_1 = buildClassSerialDescriptor(tmp_0, [], PolymorphicEnumSerializer$descriptor$lambda(this));
  }
  protoOf(PolymorphicEnumSerializer).mk = function () {
    return this.z22_1;
  };
  protoOf(PolymorphicEnumSerializer).ok = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.z22_1;
    var composite = decoder.xn(descriptor);
    composite.oo(this.z22_1);
    var result = composite.ko(this.z22_1, 0, this.y22_1);
    composite.yn(descriptor);
    return result;
  };
  protoOf(PolymorphicEnumSerializer).zu = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.z22_1;
    var composite = encoder.xn(descriptor);
    composite.op(this.z22_1, 0, this.y22_1, value);
    composite.yn(descriptor);
    return Unit_instance;
  };
  protoOf(PolymorphicEnumSerializer).nk = function (encoder, value) {
    return this.zu(encoder, value instanceof Enum ? value : THROW_CCE());
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
  function COMMON_SERIAL_MODULE$registerPrimaryDeviceConfigurationSubclasses(_this__u8e3s4) {
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz = getKClass(CustomProtocolDevice);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(CustomProtocolDevice), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    _this__u8e3s4.m14(clazz, tmp$ret$1);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_0 = getKClass(Smartphone);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(createKType(getKClass(Smartphone), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    _this__u8e3s4.m14(clazz_0, tmp$ret$4);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_1 = getKClass(Website);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(createKType(getKClass(Website), arrayOf([]), false));
    var tmp$ret$7 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    _this__u8e3s4.m14(clazz_1, tmp$ret$7);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_2 = getKClass(CustomPrimaryDeviceConfiguration);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer(createKType(getKClass(CustomPrimaryDeviceConfiguration), arrayOf([]), false));
    var tmp$ret$10 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    _this__u8e3s4.m14(clazz_2, tmp$ret$10);
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
      $this$Json.x16_1 = '__type';
      $this$Json.h17_1 = $jsonSerializersModule;
      return Unit_instance;
    };
  }
  var properties_initialized_Serialization_kt_xannds;
  function _init_properties_Serialization_kt__ucz2pu() {
    if (!properties_initialized_Serialization_kt_xannds) {
      properties_initialized_Serialization_kt_xannds = true;
      // Inline function 'kotlinx.serialization.modules.SerializersModule' call
      var builder = new SerializersModuleBuilder();
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass = getKClass(Data);
      var builder_0 = new PolymorphicModuleBuilder(baseClass, null);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz = getKClass(Acceleration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_0 = serializer(createKType(getKClass(Acceleration), arrayOf([]), false));
      var tmp$ret$5 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
      builder_0.m14(clazz, tmp$ret$5);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_0 = getKClass(AngularVelocity);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(createKType(getKClass(AngularVelocity), arrayOf([]), false));
      var tmp$ret$8 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      builder_0.m14(clazz_0, tmp$ret$8);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_1 = getKClass(CompletedTask);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(createKType(getKClass(CompletedTask), arrayOf([]), false));
      var tmp$ret$11 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      builder_0.m14(clazz_1, tmp$ret$11);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_2 = getKClass(ECG);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_3 = serializer(createKType(getKClass(ECG), arrayOf([]), false));
      var tmp$ret$14 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
      builder_0.m14(clazz_2, tmp$ret$14);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_3 = getKClass(EDA);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_4 = serializer(createKType(getKClass(EDA), arrayOf([]), false));
      var tmp$ret$17 = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
      builder_0.m14(clazz_3, tmp$ret$17);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_4 = getKClass(Geolocation);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_5 = serializer(createKType(getKClass(Geolocation), arrayOf([]), false));
      var tmp$ret$20 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
      builder_0.m14(clazz_4, tmp$ret$20);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_5 = getKClass(HeartRate);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_6 = serializer(createKType(getKClass(HeartRate), arrayOf([]), false));
      var tmp$ret$23 = isInterface(this_6, KSerializer) ? this_6 : THROW_CCE();
      builder_0.m14(clazz_5, tmp$ret$23);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_6 = getKClass(InterbeatInterval);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_7 = serializer(createKType(getKClass(InterbeatInterval), arrayOf([]), false));
      var tmp$ret$26 = isInterface(this_7, KSerializer) ? this_7 : THROW_CCE();
      builder_0.m14(clazz_6, tmp$ret$26);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_7 = getKClass(NonGravitationalAcceleration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_8 = serializer(createKType(getKClass(NonGravitationalAcceleration), arrayOf([]), false));
      var tmp$ret$29 = isInterface(this_8, KSerializer) ? this_8 : THROW_CCE();
      builder_0.m14(clazz_7, tmp$ret$29);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_8 = getKClass(NoData);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_9 = serializer(createKType(getKClass(NoData), arrayOf([]), false));
      var tmp$ret$32 = isInterface(this_9, KSerializer) ? this_9 : THROW_CCE();
      builder_0.m14(clazz_8, tmp$ret$32);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_9 = getKClass(PPG);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_10 = serializer(createKType(getKClass(PPG), arrayOf([]), false));
      var tmp$ret$35 = isInterface(this_10, KSerializer) ? this_10 : THROW_CCE();
      builder_0.m14(clazz_9, tmp$ret$35);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_10 = getKClass(SignalStrength);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_11 = serializer(createKType(getKClass(SignalStrength), arrayOf([]), false));
      var tmp$ret$38 = isInterface(this_11, KSerializer) ? this_11 : THROW_CCE();
      builder_0.m14(clazz_10, tmp$ret$38);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_11 = getKClass(SensorSkinContact);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_12 = serializer(createKType(getKClass(SensorSkinContact), arrayOf([]), false));
      var tmp$ret$41 = isInterface(this_12, KSerializer) ? this_12 : THROW_CCE();
      builder_0.m14(clazz_11, tmp$ret$41);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_12 = getKClass(StepCount);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_13 = serializer(createKType(getKClass(StepCount), arrayOf([]), false));
      var tmp$ret$44 = isInterface(this_13, KSerializer) ? this_13 : THROW_CCE();
      builder_0.m14(clazz_12, tmp$ret$44);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_13 = getKClass(TriggeredTask);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_14 = serializer(createKType(getKClass(TriggeredTask), arrayOf([]), false));
      var tmp$ret$47 = isInterface(this_14, KSerializer) ? this_14 : THROW_CCE();
      builder_0.m14(clazz_13, tmp$ret$47);
      builder_0.m14(getKClass(CustomInput), new CustomInputSerializer([PrimitiveClasses_getInstance().fa(), PrimitiveClasses_getInstance().aa()]));
      builder_0.m14(getKClass(Sex), new PolymorphicEnumSerializer(Companion_getInstance_24().i18()));
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_14 = getKClass(CustomData);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_15 = serializer(createKType(getKClass(CustomData), arrayOf([]), false));
      var tmp$ret$50 = isInterface(this_15, KSerializer) ? this_15 : THROW_CCE();
      builder_0.m14(clazz_14, tmp$ret$50);
      builder_0.n14(COMMON_SERIAL_MODULE$lambda);
      builder_0.o14(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_0 = getKClass(InputElement);
      var builder_1 = new PolymorphicModuleBuilder(baseClass_0, null);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_15 = getKClass(SelectOne);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_16 = serializer(createKType(getKClass(SelectOne), arrayOf([]), false));
      var tmp$ret$55 = isInterface(this_16, KSerializer) ? this_16 : THROW_CCE();
      builder_1.m14(clazz_15, tmp$ret$55);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_16 = getKClass(Text);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_17 = serializer(createKType(getKClass(Text), arrayOf([]), false));
      var tmp$ret$58 = isInterface(this_17, KSerializer) ? this_17 : THROW_CCE();
      builder_1.m14(clazz_16, tmp$ret$58);
      builder_1.o14(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_1 = getKClass(DeviceConfiguration);
      var builder_2 = new PolymorphicModuleBuilder(baseClass_1, null);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_17 = getKClass(AltBeacon);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_18 = serializer(createKType(getKClass(AltBeacon), arrayOf([]), false));
      var tmp$ret$63 = isInterface(this_18, KSerializer) ? this_18 : THROW_CCE();
      builder_2.m14(clazz_17, tmp$ret$63);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_18 = getKClass(BLEHeartRateDevice);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_19 = serializer(createKType(getKClass(BLEHeartRateDevice), arrayOf([]), false));
      var tmp$ret$66 = isInterface(this_19, KSerializer) ? this_19 : THROW_CCE();
      builder_2.m14(clazz_18, tmp$ret$66);
      COMMON_SERIAL_MODULE$registerPrimaryDeviceConfigurationSubclasses(builder_2);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_19 = getKClass(CustomDeviceConfiguration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_20 = serializer(createKType(getKClass(CustomDeviceConfiguration), arrayOf([]), false));
      var tmp$ret$69 = isInterface(this_20, KSerializer) ? this_20 : THROW_CCE();
      builder_2.m14(clazz_19, tmp$ret$69);
      builder_2.n14(COMMON_SERIAL_MODULE$lambda_0);
      builder_2.o14(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_2 = getKClass(PrimaryDeviceConfiguration);
      var builder_3 = new PolymorphicModuleBuilder(baseClass_2, null);
      COMMON_SERIAL_MODULE$registerPrimaryDeviceConfigurationSubclasses(builder_3);
      builder_3.n14(COMMON_SERIAL_MODULE$lambda_1);
      builder_3.o14(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_3 = getKClass(DeviceRegistration);
      var builder_4 = new PolymorphicModuleBuilder(baseClass_3, null);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_20 = getKClass(AltBeaconDeviceRegistration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_21 = serializer(createKType(getKClass(AltBeaconDeviceRegistration), arrayOf([]), false));
      var tmp$ret$76 = isInterface(this_21, KSerializer) ? this_21 : THROW_CCE();
      builder_4.m14(clazz_20, tmp$ret$76);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_21 = getKClass(BLESerialNumberDeviceRegistration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_22 = serializer(createKType(getKClass(BLESerialNumberDeviceRegistration), arrayOf([]), false));
      var tmp$ret$79 = isInterface(this_22, KSerializer) ? this_22 : THROW_CCE();
      builder_4.m14(clazz_21, tmp$ret$79);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_22 = getKClass(DefaultDeviceRegistration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_23 = serializer(createKType(getKClass(DefaultDeviceRegistration), arrayOf([]), false));
      var tmp$ret$82 = isInterface(this_23, KSerializer) ? this_23 : THROW_CCE();
      builder_4.m14(clazz_22, tmp$ret$82);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_23 = getKClass(MACAddressDeviceRegistration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_24 = serializer(createKType(getKClass(MACAddressDeviceRegistration), arrayOf([]), false));
      var tmp$ret$85 = isInterface(this_24, KSerializer) ? this_24 : THROW_CCE();
      builder_4.m14(clazz_23, tmp$ret$85);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_24 = getKClass(WebsiteDeviceRegistration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_25 = serializer(createKType(getKClass(WebsiteDeviceRegistration), arrayOf([]), false));
      var tmp$ret$88 = isInterface(this_25, KSerializer) ? this_25 : THROW_CCE();
      builder_4.m14(clazz_24, tmp$ret$88);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_25 = getKClass(CustomDeviceRegistration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_26 = serializer(createKType(getKClass(CustomDeviceRegistration), arrayOf([]), false));
      var tmp$ret$91 = isInterface(this_26, KSerializer) ? this_26 : THROW_CCE();
      builder_4.m14(clazz_25, tmp$ret$91);
      builder_4.n14(COMMON_SERIAL_MODULE$lambda_2);
      builder_4.o14(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_4 = getKClass(SamplingConfiguration);
      var builder_5 = new PolymorphicModuleBuilder(baseClass_4, null);
      var tmp = getKClass(BatteryAwareSamplingConfiguration);
      var tmp_0 = Companion_getInstance_46().s1w(new PolymorphicSerializer(getKClass(SamplingConfiguration)));
      builder_5.m14(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_26 = getKClass(GranularitySamplingConfiguration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_27 = serializer(createKType(getKClass(GranularitySamplingConfiguration), arrayOf([]), false));
      var tmp$ret$96 = isInterface(this_27, KSerializer) ? this_27 : THROW_CCE();
      builder_5.m14(clazz_26, tmp$ret$96);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_27 = getKClass(IntervalSamplingConfiguration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_28 = serializer(createKType(getKClass(IntervalSamplingConfiguration), arrayOf([]), false));
      var tmp$ret$99 = isInterface(this_28, KSerializer) ? this_28 : THROW_CCE();
      builder_5.m14(clazz_27, tmp$ret$99);
      builder_5.m14(getKClass(NoOptionsSamplingConfiguration), NoOptionsSamplingConfiguration_getInstance().i18());
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_28 = getKClass(CustomSamplingConfiguration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_29 = serializer(createKType(getKClass(CustomSamplingConfiguration), arrayOf([]), false));
      var tmp$ret$102 = isInterface(this_29, KSerializer) ? this_29 : THROW_CCE();
      builder_5.m14(clazz_28, tmp$ret$102);
      builder_5.n14(COMMON_SERIAL_MODULE$lambda_3);
      builder_5.o14(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_5 = getKClass(TaskConfiguration);
      var builder_6 = new PolymorphicModuleBuilder(baseClass_5, null);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_29 = getKClass(BackgroundTask);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_30 = serializer(createKType(getKClass(BackgroundTask), arrayOf([]), false));
      var tmp$ret$107 = isInterface(this_30, KSerializer) ? this_30 : THROW_CCE();
      builder_6.m14(clazz_29, tmp$ret$107);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_30 = getKClass(CustomProtocolTask);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_31 = serializer(createKType(getKClass(CustomProtocolTask), arrayOf([]), false));
      var tmp$ret$110 = isInterface(this_31, KSerializer) ? this_31 : THROW_CCE();
      builder_6.m14(clazz_30, tmp$ret$110);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_31 = getKClass(WebTask);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_32 = serializer(createKType(getKClass(WebTask), arrayOf([]), false));
      var tmp$ret$113 = isInterface(this_32, KSerializer) ? this_32 : THROW_CCE();
      builder_6.m14(clazz_31, tmp$ret$113);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_32 = getKClass(CustomTaskConfiguration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_33 = serializer(createKType(getKClass(CustomTaskConfiguration), arrayOf([]), false));
      var tmp$ret$116 = isInterface(this_33, KSerializer) ? this_33 : THROW_CCE();
      builder_6.m14(clazz_32, tmp$ret$116);
      builder_6.n14(COMMON_SERIAL_MODULE$lambda_4);
      builder_6.o14(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_6 = getKClass(TriggerConfiguration);
      var builder_7 = new PolymorphicModuleBuilder(baseClass_6, null);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_33 = getKClass(ElapsedTimeTrigger);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_34 = serializer(createKType(getKClass(ElapsedTimeTrigger), arrayOf([]), false));
      var tmp$ret$121 = isInterface(this_34, KSerializer) ? this_34 : THROW_CCE();
      builder_7.m14(clazz_33, tmp$ret$121);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_34 = getKClass(ManualTrigger);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_35 = serializer(createKType(getKClass(ManualTrigger), arrayOf([]), false));
      var tmp$ret$124 = isInterface(this_35, KSerializer) ? this_35 : THROW_CCE();
      builder_7.m14(clazz_34, tmp$ret$124);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_35 = getKClass(ScheduledTrigger);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_36 = serializer(createKType(getKClass(ScheduledTrigger), arrayOf([]), false));
      var tmp$ret$127 = isInterface(this_36, KSerializer) ? this_36 : THROW_CCE();
      builder_7.m14(clazz_35, tmp$ret$127);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_36 = getKClass(CustomTriggerConfiguration);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_37 = serializer(createKType(getKClass(CustomTriggerConfiguration), arrayOf([]), false));
      var tmp$ret$130 = isInterface(this_37, KSerializer) ? this_37 : THROW_CCE();
      builder_7.m14(clazz_36, tmp$ret$130);
      builder_7.n14(COMMON_SERIAL_MODULE$lambda_5);
      builder_7.o14(builder);
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass_7 = getKClass(AccountIdentity);
      var builder_8 = new PolymorphicModuleBuilder(baseClass_7, null);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_37 = getKClass(UsernameAccountIdentity);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_38 = serializer(createKType(getKClass(UsernameAccountIdentity), arrayOf([]), false));
      var tmp$ret$135 = isInterface(this_38, KSerializer) ? this_38 : THROW_CCE();
      builder_8.m14(clazz_37, tmp$ret$135);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_38 = getKClass(EmailAccountIdentity);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_39 = serializer(createKType(getKClass(EmailAccountIdentity), arrayOf([]), false));
      var tmp$ret$138 = isInterface(this_39, KSerializer) ? this_39 : THROW_CCE();
      builder_8.m14(clazz_38, tmp$ret$138);
      builder_8.o14(builder);
      COMMON_SERIAL_MODULE = builder.qt();
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
    this.a23_1 = className;
    this.b23_1 = jsonSource;
    this.c23_1 = serializer;
  }
  protoOf(CustomData).d23 = function () {
    return this.b23_1;
  };
  protoOf(CustomData).toString = function () {
    return 'CustomData(className=' + this.a23_1 + ', jsonSource=' + this.b23_1 + ', serializer=' + toString(this.c23_1) + ')';
  };
  protoOf(CustomData).hashCode = function () {
    var result = getStringHashCode(this.a23_1);
    result = imul(result, 31) + getStringHashCode(this.b23_1) | 0;
    result = imul(result, 31) + hashCode(this.c23_1) | 0;
    return result;
  };
  protoOf(CustomData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomData))
      return false;
    if (!(this.a23_1 === other.a23_1))
      return false;
    if (!(this.b23_1 === other.b23_1))
      return false;
    if (!equals(this.c23_1, other.c23_1))
      return false;
    return true;
  };
  function DataSerializer$$inlined$createUnknownPolymorphicSerializer$1() {
    UnknownPolymorphicSerializer.call(this, getKClass(Data), getKClass(CustomData));
  }
  protoOf(DataSerializer$$inlined$createUnknownPolymorphicSerializer$1).f23 = function (className, json, serializer) {
    return new CustomData(className, json, serializer);
  };
  function DataSerializer() {
    DataSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createUnknownPolymorphicSerializer' call
    tmp.i23_1 = new DataSerializer$$inlined$createUnknownPolymorphicSerializer$1();
  }
  protoOf(DataSerializer).mk = function () {
    return this.i23_1.mk();
  };
  protoOf(DataSerializer).j23 = function (encoder, value) {
    this.i23_1.h23(encoder, value);
  };
  protoOf(DataSerializer).nk = function (encoder, value) {
    return this.j23(encoder, (!(value == null) ? isInterface(value, Data) : false) ? value : THROW_CCE());
  };
  protoOf(DataSerializer).ok = function (decoder) {
    return this.i23_1.ok(decoder);
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
    $this$Json.s16_1 = true;
    return Unit_instance;
  }
  function CustomPrimaryDeviceConfiguration(className, jsonSource, serializer) {
    PrimaryDeviceConfiguration.call(this);
    this.l23_1 = className;
    this.m23_1 = jsonSource;
    this.n23_1 = serializer;
    var json = Json(this.n23_1, CustomPrimaryDeviceConfiguration$lambda);
    var baseMembers = json.y15(Companion_getInstance_78().i18(), this.m23_1);
    this.o23_1 = baseMembers.s23_1;
    this.p23_1 = baseMembers.t23_1;
    this.q23_1 = baseMembers.u23_1;
  }
  protoOf(CustomPrimaryDeviceConfiguration).d23 = function () {
    return this.m23_1;
  };
  protoOf(CustomPrimaryDeviceConfiguration).q1r = function () {
    return this.o23_1;
  };
  protoOf(CustomPrimaryDeviceConfiguration).r1r = function () {
    return this.p23_1;
  };
  protoOf(CustomPrimaryDeviceConfiguration).s1r = function () {
    return this.q23_1;
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
  protoOf(CustomPrimaryDeviceConfiguration).t1r = function () {
    return getKClass(DeviceRegistration);
  };
  protoOf(CustomPrimaryDeviceConfiguration).isValidRegistration = function (registration) {
    return Trilean_UNKNOWN_getInstance();
  };
  protoOf(CustomPrimaryDeviceConfiguration).toString = function () {
    return 'CustomPrimaryDeviceConfiguration(className=' + this.l23_1 + ', jsonSource=' + this.m23_1 + ', serializer=' + toString(this.n23_1) + ')';
  };
  protoOf(CustomPrimaryDeviceConfiguration).hashCode = function () {
    var result = getStringHashCode(this.l23_1);
    result = imul(result, 31) + getStringHashCode(this.m23_1) | 0;
    result = imul(result, 31) + hashCode(this.n23_1) | 0;
    return result;
  };
  protoOf(CustomPrimaryDeviceConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomPrimaryDeviceConfiguration))
      return false;
    if (!(this.l23_1 === other.l23_1))
      return false;
    if (!(this.m23_1 === other.m23_1))
      return false;
    if (!equals(this.n23_1, other.n23_1))
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
    $this$Json.s16_1 = true;
    return Unit_instance;
  }
  function CustomDeviceConfiguration(className, jsonSource, serializer) {
    DeviceConfiguration.call(this);
    this.v23_1 = className;
    this.w23_1 = jsonSource;
    this.x23_1 = serializer;
    var json = Json(this.x23_1, CustomDeviceConfiguration$lambda);
    var baseMembers = json.y15(Companion_getInstance_78().i18(), this.w23_1);
    this.y23_1 = baseMembers.s23_1;
    this.z23_1 = baseMembers.t23_1;
    this.a24_1 = baseMembers.u23_1;
  }
  protoOf(CustomDeviceConfiguration).d23 = function () {
    return this.w23_1;
  };
  protoOf(CustomDeviceConfiguration).q1r = function () {
    return this.y23_1;
  };
  protoOf(CustomDeviceConfiguration).r1r = function () {
    return this.z23_1;
  };
  protoOf(CustomDeviceConfiguration).s1r = function () {
    return this.a24_1;
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
  protoOf(CustomDeviceConfiguration).t1r = function () {
    return getKClass(DeviceRegistration);
  };
  protoOf(CustomDeviceConfiguration).isValidRegistration = function (registration) {
    return Trilean_UNKNOWN_getInstance();
  };
  protoOf(CustomDeviceConfiguration).toString = function () {
    return 'CustomDeviceConfiguration(className=' + this.v23_1 + ', jsonSource=' + this.w23_1 + ', serializer=' + toString(this.x23_1) + ')';
  };
  protoOf(CustomDeviceConfiguration).hashCode = function () {
    var result = getStringHashCode(this.v23_1);
    result = imul(result, 31) + getStringHashCode(this.w23_1) | 0;
    result = imul(result, 31) + hashCode(this.x23_1) | 0;
    return result;
  };
  protoOf(CustomDeviceConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomDeviceConfiguration))
      return false;
    if (!(this.v23_1 === other.v23_1))
      return false;
    if (!(this.w23_1 === other.w23_1))
      return false;
    if (!equals(this.x23_1, other.x23_1))
      return false;
    return true;
  };
  function DeviceConfigurationSerializer() {
    DeviceConfigurationSerializer_instance = this;
    UnknownPolymorphicSerializer.call(this, getKClass(DeviceConfiguration), getKClass(DeviceConfiguration), false);
  }
  protoOf(DeviceConfigurationSerializer).f23 = function (className, json, serializer) {
    var tmp = serializer.z15(json);
    var jsonObject = tmp instanceof JsonObject ? tmp : THROW_CCE();
    var isPrimaryDevice = jsonObject.f18('isPrimaryDevice');
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
  function PrimaryDeviceConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1() {
    UnknownPolymorphicSerializer.call(this, getKClass(PrimaryDeviceConfiguration), getKClass(CustomPrimaryDeviceConfiguration));
  }
  protoOf(PrimaryDeviceConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1).f23 = function (className, json, serializer) {
    return new CustomPrimaryDeviceConfiguration(className, json, serializer);
  };
  function PrimaryDeviceConfigurationSerializer() {
    PrimaryDeviceConfigurationSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createUnknownPolymorphicSerializer' call
    tmp.d24_1 = new PrimaryDeviceConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1();
  }
  protoOf(PrimaryDeviceConfigurationSerializer).mk = function () {
    return this.d24_1.mk();
  };
  protoOf(PrimaryDeviceConfigurationSerializer).e24 = function (encoder, value) {
    this.d24_1.h23(encoder, value);
  };
  protoOf(PrimaryDeviceConfigurationSerializer).nk = function (encoder, value) {
    return this.e24(encoder, value instanceof PrimaryDeviceConfiguration ? value : THROW_CCE());
  };
  protoOf(PrimaryDeviceConfigurationSerializer).ok = function (decoder) {
    return this.d24_1.ok(decoder);
  };
  var PrimaryDeviceConfigurationSerializer_instance;
  function PrimaryDeviceConfigurationSerializer_getInstance() {
    if (PrimaryDeviceConfigurationSerializer_instance == null)
      new PrimaryDeviceConfigurationSerializer();
    return PrimaryDeviceConfigurationSerializer_instance;
  }
  function CustomDeviceRegistration$BaseMembers$Companion$$childSerializers$_anonymous__xnxsh2() {
    return Companion_instance_0.i18();
  }
  function Companion_75() {
    Companion_instance_76 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f24_1 = [null, null, null, lazy(tmp_0, CustomDeviceRegistration$BaseMembers$Companion$$childSerializers$_anonymous__xnxsh2)];
  }
  protoOf(Companion_75).i18 = function () {
    return $serializer_getInstance_44();
  };
  var Companion_instance_76;
  function Companion_getInstance_76() {
    if (Companion_instance_76 == null)
      new Companion_75();
    return Companion_instance_76;
  }
  function $serializer_46() {
    $serializer_instance_44 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.infrastructure.serialization.CustomDeviceRegistration.BaseMembers', this, 4);
    tmp0_serialDesc.pv('deviceId', false);
    tmp0_serialDesc.pv('deviceDisplayName', true);
    tmp0_serialDesc.pv('registrationCreatedOn', false);
    tmp0_serialDesc.pv('additionalSpecifications', true);
    this.g24_1 = tmp0_serialDesc;
  }
  protoOf($serializer_46).h24 = function (encoder, value) {
    var tmp0_desc = this.g24_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_76().f24_1;
    tmp1_output.mp(tmp0_desc, 0, value.i24_1);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.j24_1 == null)) {
      tmp1_output.qp(tmp0_desc, 1, StringSerializer_getInstance(), value.j24_1);
    }
    tmp1_output.op(tmp0_desc, 2, InstantSerializer_getInstance(), value.k24_1);
    if (tmp1_output.up(tmp0_desc, 3) ? true : !(value.l24_1 == null)) {
      tmp1_output.qp(tmp0_desc, 3, tmp2_cached[3].s2(), value.l24_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_46).nk = function (encoder, value) {
    return this.h24(encoder, value instanceof BaseMembers ? value : THROW_CCE());
  };
  protoOf($serializer_46).ok = function (decoder) {
    var tmp0_desc = this.g24_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_76().f24_1;
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.lo(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.jo(tmp0_desc, 2, InstantSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, tmp9_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.lo(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.jo(tmp0_desc, 2, InstantSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, tmp9_cached[3].s2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return BaseMembers_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_46).mk = function () {
    return this.g24_1;
  };
  protoOf($serializer_46).ew = function () {
    var tmp0_cached = Companion_getInstance_76().f24_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), InstantSerializer_getInstance(), get_nullable(tmp0_cached[3].s2())];
  };
  var $serializer_instance_44;
  function $serializer_getInstance_44() {
    if ($serializer_instance_44 == null)
      new $serializer_46();
    return $serializer_instance_44;
  }
  function BaseMembers_init_$Init$(seen0, deviceId, deviceDisplayName, registrationCreatedOn, additionalSpecifications, serializationConstructorMarker, $this) {
    if (!(5 === (5 & seen0))) {
      throwMissingFieldException(seen0, 5, $serializer_getInstance_44().g24_1);
    }
    DeviceRegistration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.i24_1 = deviceId;
    if (0 === (seen0 & 2))
      $this.j24_1 = null;
    else
      $this.j24_1 = deviceDisplayName;
    $this.k24_1 = registrationCreatedOn;
    if (0 === (seen0 & 8))
      $this.l24_1 = null;
    else
      $this.l24_1 = additionalSpecifications;
    return $this;
  }
  function BaseMembers_init_$Create$(seen0, deviceId, deviceDisplayName, registrationCreatedOn, additionalSpecifications, serializationConstructorMarker) {
    return BaseMembers_init_$Init$(seen0, deviceId, deviceDisplayName, registrationCreatedOn, additionalSpecifications, serializationConstructorMarker, objectCreate(protoOf(BaseMembers)));
  }
  function BaseMembers() {
  }
  protoOf(BaseMembers).m1s = function () {
    return this.i24_1;
  };
  protoOf(BaseMembers).j1s = function () {
    return this.j24_1;
  };
  protoOf(BaseMembers).l1s = function () {
    return this.k24_1;
  };
  protoOf(BaseMembers).k1s = function () {
    return this.l24_1;
  };
  protoOf(BaseMembers).toString = function () {
    return 'BaseMembers(deviceId=' + this.i24_1 + ', deviceDisplayName=' + this.j24_1 + ', registrationCreatedOn=' + this.k24_1.toString() + ', additionalSpecifications=' + toString_0(this.l24_1) + ')';
  };
  protoOf(BaseMembers).hashCode = function () {
    var result = getStringHashCode(this.i24_1);
    result = imul(result, 31) + (this.j24_1 == null ? 0 : getStringHashCode(this.j24_1)) | 0;
    result = imul(result, 31) + this.k24_1.hashCode() | 0;
    result = imul(result, 31) + (this.l24_1 == null ? 0 : this.l24_1.hashCode()) | 0;
    return result;
  };
  protoOf(BaseMembers).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BaseMembers))
      return false;
    if (!(this.i24_1 === other.i24_1))
      return false;
    if (!(this.j24_1 == other.j24_1))
      return false;
    if (!this.k24_1.equals(other.k24_1))
      return false;
    if (!equals(this.l24_1, other.l24_1))
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
    $this$Json.s16_1 = true;
    return Unit_instance;
  }
  function CustomDeviceRegistration(className, jsonSource, serializer) {
    DeviceRegistration.call(this);
    this.m24_1 = className;
    this.n24_1 = jsonSource;
    this.o24_1 = serializer;
    var json = Json(this.o24_1, CustomDeviceRegistration$lambda);
    var baseMembers = json.y15(Companion_getInstance_76().i18(), this.n24_1);
    this.p24_1 = baseMembers.i24_1;
    this.q24_1 = baseMembers.j24_1;
    this.r24_1 = baseMembers.k24_1;
    this.s24_1 = baseMembers.l24_1;
  }
  protoOf(CustomDeviceRegistration).d23 = function () {
    return this.n24_1;
  };
  protoOf(CustomDeviceRegistration).m1s = function () {
    return this.p24_1;
  };
  protoOf(CustomDeviceRegistration).j1s = function () {
    return this.q24_1;
  };
  protoOf(CustomDeviceRegistration).l1s = function () {
    return this.r24_1;
  };
  protoOf(CustomDeviceRegistration).k1s = function () {
    return this.s24_1;
  };
  protoOf(CustomDeviceRegistration).toString = function () {
    return 'CustomDeviceRegistration(className=' + this.m24_1 + ', jsonSource=' + this.n24_1 + ', serializer=' + toString(this.o24_1) + ')';
  };
  protoOf(CustomDeviceRegistration).hashCode = function () {
    var result = getStringHashCode(this.m24_1);
    result = imul(result, 31) + getStringHashCode(this.n24_1) | 0;
    result = imul(result, 31) + hashCode(this.o24_1) | 0;
    return result;
  };
  protoOf(CustomDeviceRegistration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomDeviceRegistration))
      return false;
    if (!(this.m24_1 === other.m24_1))
      return false;
    if (!(this.n24_1 === other.n24_1))
      return false;
    if (!equals(this.o24_1, other.o24_1))
      return false;
    return true;
  };
  function DeviceRegistrationSerializer$$inlined$createUnknownPolymorphicSerializer$1() {
    UnknownPolymorphicSerializer.call(this, getKClass(DeviceRegistration), getKClass(CustomDeviceRegistration));
  }
  protoOf(DeviceRegistrationSerializer$$inlined$createUnknownPolymorphicSerializer$1).f23 = function (className, json, serializer) {
    return new CustomDeviceRegistration(className, json, serializer);
  };
  function DeviceRegistrationSerializer() {
    DeviceRegistrationSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createUnknownPolymorphicSerializer' call
    tmp.u24_1 = new DeviceRegistrationSerializer$$inlined$createUnknownPolymorphicSerializer$1();
  }
  protoOf(DeviceRegistrationSerializer).mk = function () {
    return this.u24_1.mk();
  };
  protoOf(DeviceRegistrationSerializer).v24 = function (encoder, value) {
    this.u24_1.h23(encoder, value);
  };
  protoOf(DeviceRegistrationSerializer).nk = function (encoder, value) {
    return this.v24(encoder, value instanceof DeviceRegistration ? value : THROW_CCE());
  };
  protoOf(DeviceRegistrationSerializer).ok = function (decoder) {
    return this.u24_1.ok(decoder);
  };
  var DeviceRegistrationSerializer_instance;
  function DeviceRegistrationSerializer_getInstance() {
    if (DeviceRegistrationSerializer_instance == null)
      new DeviceRegistrationSerializer();
    return DeviceRegistrationSerializer_instance;
  }
  function BaseMembers$Companion$$childSerializers$_anonymous__7wikri() {
    var tmp = NamespacedIdSerializer_getInstance();
    var tmp_0 = getKClass(SamplingConfiguration);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return new LinkedHashMapSerializer(tmp, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$0));
  }
  function Companion_77() {
    Companion_instance_78 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r23_1 = [null, null, lazy(tmp_0, BaseMembers$Companion$$childSerializers$_anonymous__7wikri)];
  }
  protoOf(Companion_77).i18 = function () {
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
    tmp0_serialDesc.pv('roleName', false);
    tmp0_serialDesc.pv('isOptional', true);
    tmp0_serialDesc.pv('defaultSamplingConfiguration', true);
    this.w24_1 = tmp0_serialDesc;
  }
  protoOf($serializer_47).x24 = function (encoder, value) {
    var tmp0_desc = this.w24_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_78().r23_1;
    tmp1_output.mp(tmp0_desc, 0, value.s23_1);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.t23_1 === false)) {
      tmp1_output.ep(tmp0_desc, 1, value.t23_1);
    }
    if (tmp1_output.up(tmp0_desc, 2) ? true : !equals(value.u23_1, emptyMap())) {
      tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.u23_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_47).nk = function (encoder, value) {
    return this.x24(encoder, value instanceof BaseMembers_0 ? value : THROW_CCE());
  };
  protoOf($serializer_47).ok = function (decoder) {
    var tmp0_desc = this.w24_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_78().r23_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.zn(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.zn(tmp0_desc, 1);
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
    return BaseMembers_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_47).mk = function () {
    return this.w24_1;
  };
  protoOf($serializer_47).ew = function () {
    var tmp0_cached = Companion_getInstance_78().r23_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[2].s2()];
  };
  var $serializer_instance_45;
  function $serializer_getInstance_45() {
    if ($serializer_instance_45 == null)
      new $serializer_47();
    return $serializer_instance_45;
  }
  function BaseMembers_init_$Init$_0(seen0, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_45().w24_1);
    }
    DeviceConfiguration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.s23_1 = roleName;
    if (0 === (seen0 & 2))
      $this.t23_1 = false;
    else
      $this.t23_1 = isOptional;
    if (0 === (seen0 & 4))
      $this.u23_1 = emptyMap();
    else
      $this.u23_1 = defaultSamplingConfiguration;
    return $this;
  }
  function BaseMembers_init_$Create$_0(seen0, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker) {
    return BaseMembers_init_$Init$_0(seen0, roleName, isOptional, defaultSamplingConfiguration, serializationConstructorMarker, objectCreate(protoOf(BaseMembers_0)));
  }
  function BaseMembers_0() {
  }
  protoOf(BaseMembers_0).q1r = function () {
    return this.s23_1;
  };
  protoOf(BaseMembers_0).r1r = function () {
    return this.t23_1;
  };
  protoOf(BaseMembers_0).s1r = function () {
    return this.u23_1;
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
  protoOf(BaseMembers_0).t1r = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(BaseMembers_0).isValidRegistration = function (registration) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(BaseMembers_0).toString = function () {
    return 'BaseMembers(roleName=' + this.s23_1 + ', isOptional=' + this.t23_1 + ', defaultSamplingConfiguration=' + toString(this.u23_1) + ')';
  };
  protoOf(BaseMembers_0).hashCode = function () {
    var result = getStringHashCode(this.s23_1);
    result = imul(result, 31) + getBooleanHashCode(this.t23_1) | 0;
    result = imul(result, 31) + hashCode(this.u23_1) | 0;
    return result;
  };
  protoOf(BaseMembers_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BaseMembers_0))
      return false;
    if (!(this.s23_1 === other.s23_1))
      return false;
    if (!(this.t23_1 === other.t23_1))
      return false;
    if (!equals(this.u23_1, other.u23_1))
      return false;
    return true;
  };
  function Companion_78() {
    Companion_instance_79 = this;
    this.y24_1 = SerializationException_init_$Create$('' + getKClass(UnknownPolymorphicSerializer).m() + ' only supports JSON serialization, ' + 'configured to use a class discriminator for polymorphism.');
  }
  var Companion_instance_79;
  function Companion_getInstance_79() {
    if (Companion_instance_79 == null)
      new Companion_78();
    return Companion_instance_79;
  }
  function getClassDiscriminator($this, json) {
    if (json.u15_1.s17_1)
      throw Companion_getInstance_79().y24_1;
    return json.u15_1.t17_1;
  }
  function UnknownPolymorphicSerializer$serialize$lambda($unknownTypeFields, $jsonSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $unknownTypeFields.m2().r();
      while (_iterator__ex2g4s.s()) {
        var element = _iterator__ex2g4s.t();
        $this$buildClassSerialDescriptor.al(element, $jsonSerializer.mk());
      }
      return Unit_instance;
    };
  }
  function UnknownPolymorphicSerializer(baseClass, wrapperClass, verifyUnknownPolymorphicWrapper) {
    Companion_getInstance_79();
    verifyUnknownPolymorphicWrapper = verifyUnknownPolymorphicWrapper === VOID ? true : verifyUnknownPolymorphicWrapper;
    var reflect = reflectIfAvailable();
    if (!(reflect == null) && verifyUnknownPolymorphicWrapper) {
      // Inline function 'dk.cachet.carp.common.infrastructure.reflect.ReflectionAvailable.extendsType' call
      // Inline function 'dk.cachet.carp.common.infrastructure.reflect.Reflection.extendsType' call
      throw UnsupportedOperationException_init_$Create$_0();
    }
    this.g23_1 = buildClassSerialDescriptor('dk.cachet.carp.common.infrastructure.serialization.UnknownPolymorphicSerializer<' + baseClass.m() + '>', []);
  }
  protoOf(UnknownPolymorphicSerializer).mk = function () {
    return this.g23_1;
  };
  protoOf(UnknownPolymorphicSerializer).h23 = function (encoder, value) {
    if (!isInterface(encoder, JsonEncoder)) {
      throw Companion_getInstance_79().y24_1;
    }
    var classDiscriminator = getClassDiscriminator(this, encoder.c18());
    // Inline function 'kotlin.check' call
    if (!isInterface(value, UnknownPolymorphicWrapper)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var tmp = Default_getInstance().z15(value.d23());
    var unknown = tmp instanceof JsonObject ? tmp : THROW_CCE();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = unknown.f1().r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      if (!(element.r2() === classDiscriminator)) {
        destination.k2(element.r2(), element.s2());
      }
    }
    var unknownTypeFields = destination;
    var tmp0_safe_receiver = unknown.h18(classDiscriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p18();
    var tmp$ret$6;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$6 = tmp0;
        break $l$block;
      }
    }
    var unknownType = tmp$ret$6;
    var jsonSerializer = Companion_instance.i18();
    var overrideDescriptor = buildClassSerialDescriptor(unknownType, [], UnknownPolymorphicSerializer$serialize$lambda(unknownTypeFields, jsonSerializer));
    var overrideEncoder = encoder.dp(overrideDescriptor);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var composite = overrideEncoder.xn(overrideDescriptor);
    var id = 0;
    var _iterator__ex2g4s_0 = unknownTypeFields.n2().r();
    while (_iterator__ex2g4s_0.s()) {
      var field = _iterator__ex2g4s_0.t();
      var _unary__edvuaz = id;
      id = _unary__edvuaz + 1 | 0;
      composite.op(overrideDescriptor, _unary__edvuaz, Companion_instance.i18(), field);
    }
    composite.yn(overrideDescriptor);
  };
  protoOf(UnknownPolymorphicSerializer).nk = function (encoder, value) {
    return this.h23(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(UnknownPolymorphicSerializer).ok = function (decoder) {
    if (!isInterface(decoder, JsonDecoder)) {
      throw Companion_getInstance_79().y24_1;
    }
    var classDiscriminator = getClassDiscriminator(this, decoder.c18());
    var jsonElement = decoder.d18();
    var jsonSource = toString(jsonElement);
    var tmp0_safe_receiver = get_jsonObject(jsonElement).h18(classDiscriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var tmp0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p18();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = "Can't deserialize type which was serialized non-polymorphically.";
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    var className = tmp$ret$0;
    return this.f23(className, jsonSource, decoder.c18());
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
    this.z24_1 = className;
    this.a25_1 = jsonSource;
    this.b25_1 = serializer;
  }
  protoOf(CustomSamplingConfiguration).d23 = function () {
    return this.a25_1;
  };
  protoOf(CustomSamplingConfiguration).toString = function () {
    return 'CustomSamplingConfiguration(className=' + this.z24_1 + ', jsonSource=' + this.a25_1 + ', serializer=' + toString(this.b25_1) + ')';
  };
  protoOf(CustomSamplingConfiguration).hashCode = function () {
    var result = getStringHashCode(this.z24_1);
    result = imul(result, 31) + getStringHashCode(this.a25_1) | 0;
    result = imul(result, 31) + hashCode(this.b25_1) | 0;
    return result;
  };
  protoOf(CustomSamplingConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomSamplingConfiguration))
      return false;
    if (!(this.z24_1 === other.z24_1))
      return false;
    if (!(this.a25_1 === other.a25_1))
      return false;
    if (!equals(this.b25_1, other.b25_1))
      return false;
    return true;
  };
  function SamplingConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1() {
    UnknownPolymorphicSerializer.call(this, getKClass(SamplingConfiguration), getKClass(CustomSamplingConfiguration));
  }
  protoOf(SamplingConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1).f23 = function (className, json, serializer) {
    return new CustomSamplingConfiguration(className, json, serializer);
  };
  function SamplingConfigurationSerializer() {
    SamplingConfigurationSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createUnknownPolymorphicSerializer' call
    tmp.d25_1 = new SamplingConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1();
  }
  protoOf(SamplingConfigurationSerializer).mk = function () {
    return this.d25_1.mk();
  };
  protoOf(SamplingConfigurationSerializer).e25 = function (encoder, value) {
    this.d25_1.h23(encoder, value);
  };
  protoOf(SamplingConfigurationSerializer).nk = function (encoder, value) {
    return this.e25(encoder, (!(value == null) ? isInterface(value, SamplingConfiguration) : false) ? value : THROW_CCE());
  };
  protoOf(SamplingConfigurationSerializer).ok = function (decoder) {
    return this.d25_1.ok(decoder);
  };
  var SamplingConfigurationSerializer_instance;
  function SamplingConfigurationSerializer_getInstance() {
    if (SamplingConfigurationSerializer_instance == null)
      new SamplingConfigurationSerializer();
    return SamplingConfigurationSerializer_instance;
  }
  function CustomTaskConfiguration$BaseMembers$Companion$$childSerializers$_anonymous__eitxk6() {
    return new ArrayListSerializer(Companion_getInstance_55().i18());
  }
  function Companion_80() {
    Companion_instance_81 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f25_1 = [null, lazy(tmp_0, CustomTaskConfiguration$BaseMembers$Companion$$childSerializers$_anonymous__eitxk6), null];
  }
  protoOf(Companion_80).i18 = function () {
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
    tmp0_serialDesc.pv('name', false);
    tmp0_serialDesc.pv('measures', true);
    tmp0_serialDesc.pv('description', true);
    this.g25_1 = tmp0_serialDesc;
  }
  protoOf($serializer_48).h25 = function (encoder, value) {
    var tmp0_desc = this.g25_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_81().f25_1;
    tmp1_output.mp(tmp0_desc, 0, value.i25_1);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !equals(value.j25_1, emptyList())) {
      tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.j25_1);
    }
    if (tmp1_output.up(tmp0_desc, 2) ? true : !(value.k25_1 == null)) {
      tmp1_output.qp(tmp0_desc, 2, StringSerializer_getInstance(), value.k25_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_48).nk = function (encoder, value) {
    return this.h25(encoder, value instanceof BaseMembers_1 ? value : THROW_CCE());
  };
  protoOf($serializer_48).ok = function (decoder) {
    var tmp0_desc = this.g25_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_81().f25_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, tmp8_cached[1].s2(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.jo(tmp0_desc, 1, tmp8_cached[1].s2(), tmp5_local1);
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
    return BaseMembers_init_$Create$_1(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_48).mk = function () {
    return this.g25_1;
  };
  protoOf($serializer_48).ew = function () {
    var tmp0_cached = Companion_getInstance_81().f25_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].s2(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_46;
  function $serializer_getInstance_46() {
    if ($serializer_instance_46 == null)
      new $serializer_48();
    return $serializer_instance_46;
  }
  function BaseMembers_init_$Init$_1(seen0, name, measures, description, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_46().g25_1);
    }
    $this.i25_1 = name;
    if (0 === (seen0 & 2))
      $this.j25_1 = emptyList();
    else
      $this.j25_1 = measures;
    if (0 === (seen0 & 4))
      $this.k25_1 = null;
    else
      $this.k25_1 = description;
    return $this;
  }
  function BaseMembers_init_$Create$_1(seen0, name, measures, description, serializationConstructorMarker) {
    return BaseMembers_init_$Init$_1(seen0, name, measures, description, serializationConstructorMarker, objectCreate(protoOf(BaseMembers_1)));
  }
  function BaseMembers_1() {
  }
  protoOf(BaseMembers_1).k = function () {
    return this.i25_1;
  };
  protoOf(BaseMembers_1).d1y = function () {
    return this.j25_1;
  };
  protoOf(BaseMembers_1).e1y = function () {
    return this.k25_1;
  };
  protoOf(BaseMembers_1).toString = function () {
    return 'BaseMembers(name=' + this.i25_1 + ', measures=' + toString(this.j25_1) + ', description=' + this.k25_1 + ')';
  };
  protoOf(BaseMembers_1).hashCode = function () {
    var result = getStringHashCode(this.i25_1);
    result = imul(result, 31) + hashCode(this.j25_1) | 0;
    result = imul(result, 31) + (this.k25_1 == null ? 0 : getStringHashCode(this.k25_1)) | 0;
    return result;
  };
  protoOf(BaseMembers_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BaseMembers_1))
      return false;
    if (!(this.i25_1 === other.i25_1))
      return false;
    if (!equals(this.j25_1, other.j25_1))
      return false;
    if (!(this.k25_1 == other.k25_1))
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
    $this$Json.s16_1 = true;
    return Unit_instance;
  }
  function CustomTaskConfiguration(className, jsonSource, serializer) {
    this.l25_1 = className;
    this.m25_1 = jsonSource;
    this.n25_1 = serializer;
    this.q25_1 = null;
    var json = Json(this.n25_1, CustomTaskConfiguration$lambda);
    var baseMembers = json.y15(Companion_getInstance_81().i18(), this.m25_1);
    this.o25_1 = baseMembers.i25_1;
    this.p25_1 = baseMembers.j25_1;
  }
  protoOf(CustomTaskConfiguration).d23 = function () {
    return this.m25_1;
  };
  protoOf(CustomTaskConfiguration).k = function () {
    return this.o25_1;
  };
  protoOf(CustomTaskConfiguration).d1y = function () {
    return this.p25_1;
  };
  protoOf(CustomTaskConfiguration).e1y = function () {
    return this.q25_1;
  };
  protoOf(CustomTaskConfiguration).toString = function () {
    return 'CustomTaskConfiguration(className=' + this.l25_1 + ', jsonSource=' + this.m25_1 + ', serializer=' + toString(this.n25_1) + ')';
  };
  protoOf(CustomTaskConfiguration).hashCode = function () {
    var result = getStringHashCode(this.l25_1);
    result = imul(result, 31) + getStringHashCode(this.m25_1) | 0;
    result = imul(result, 31) + hashCode(this.n25_1) | 0;
    return result;
  };
  protoOf(CustomTaskConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomTaskConfiguration))
      return false;
    if (!(this.l25_1 === other.l25_1))
      return false;
    if (!(this.m25_1 === other.m25_1))
      return false;
    if (!equals(this.n25_1, other.n25_1))
      return false;
    return true;
  };
  function TaskConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1() {
    UnknownPolymorphicSerializer.call(this, getKClass(TaskConfiguration), getKClass(CustomTaskConfiguration));
  }
  protoOf(TaskConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1).f23 = function (className, json, serializer) {
    return new CustomTaskConfiguration(className, json, serializer);
  };
  function TaskConfigurationSerializer() {
    TaskConfigurationSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createUnknownPolymorphicSerializer' call
    tmp.s25_1 = new TaskConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1();
  }
  protoOf(TaskConfigurationSerializer).mk = function () {
    return this.s25_1.mk();
  };
  protoOf(TaskConfigurationSerializer).t25 = function (encoder, value) {
    this.s25_1.h23(encoder, value);
  };
  protoOf(TaskConfigurationSerializer).nk = function (encoder, value) {
    return this.t25(encoder, (!(value == null) ? isInterface(value, TaskConfiguration) : false) ? value : THROW_CCE());
  };
  protoOf(TaskConfigurationSerializer).ok = function (decoder) {
    return this.s25_1.ok(decoder);
  };
  var TaskConfigurationSerializer_instance;
  function TaskConfigurationSerializer_getInstance() {
    if (TaskConfigurationSerializer_instance == null)
      new TaskConfigurationSerializer();
    return TaskConfigurationSerializer_instance;
  }
  function Companion_82() {
  }
  protoOf(Companion_82).i18 = function () {
    return $serializer_getInstance_47();
  };
  var Companion_instance_83;
  function Companion_getInstance_83() {
    return Companion_instance_83;
  }
  function $serializer_49() {
    $serializer_instance_47 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.common.infrastructure.serialization.CustomTriggerConfiguration.BaseMembers', this, 1);
    tmp0_serialDesc.pv('sourceDeviceRoleName', false);
    this.u25_1 = tmp0_serialDesc;
  }
  protoOf($serializer_49).v25 = function (encoder, value) {
    var tmp0_desc = this.u25_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.mp(tmp0_desc, 0, value.x25_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_49).nk = function (encoder, value) {
    return this.v25(encoder, value instanceof BaseMembers_2 ? value : THROW_CCE());
  };
  protoOf($serializer_49).ok = function (decoder) {
    var tmp0_desc = this.u25_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.xn(tmp0_desc);
    if (tmp5_input.no()) {
      tmp4_local0 = tmp5_input.ho(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.ho(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.yn(tmp0_desc);
    return BaseMembers_init_$Create$_2(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_49).mk = function () {
    return this.u25_1;
  };
  protoOf($serializer_49).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  var $serializer_instance_47;
  function $serializer_getInstance_47() {
    if ($serializer_instance_47 == null)
      new $serializer_49();
    return $serializer_instance_47;
  }
  function BaseMembers_init_$Init$_2(seen0, sourceDeviceRoleName, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_47().u25_1);
    }
    TriggerConfiguration_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.x25_1 = sourceDeviceRoleName;
    return $this;
  }
  function BaseMembers_init_$Create$_2(seen0, sourceDeviceRoleName, serializationConstructorMarker) {
    return BaseMembers_init_$Init$_2(seen0, sourceDeviceRoleName, serializationConstructorMarker, objectCreate(protoOf(BaseMembers_2)));
  }
  function BaseMembers_2() {
  }
  protoOf(BaseMembers_2).p1z = function () {
    return this.x25_1;
  };
  protoOf(BaseMembers_2).toString = function () {
    return 'BaseMembers(sourceDeviceRoleName=' + this.x25_1 + ')';
  };
  protoOf(BaseMembers_2).hashCode = function () {
    return getStringHashCode(this.x25_1);
  };
  protoOf(BaseMembers_2).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BaseMembers_2))
      return false;
    if (!(this.x25_1 === other.x25_1))
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
    $this$Json.s16_1 = true;
    return Unit_instance;
  }
  function CustomTriggerConfiguration(className, jsonSource, serializer) {
    TriggerConfiguration.call(this);
    this.z25_1 = className;
    this.a26_1 = jsonSource;
    this.b26_1 = serializer;
    var json = Json(this.b26_1, CustomTriggerConfiguration$lambda);
    var baseMembers = json.y15(Companion_instance_83.i18(), this.a26_1);
    this.c26_1 = baseMembers.x25_1;
  }
  protoOf(CustomTriggerConfiguration).d23 = function () {
    return this.a26_1;
  };
  protoOf(CustomTriggerConfiguration).p1z = function () {
    return this.c26_1;
  };
  protoOf(CustomTriggerConfiguration).toString = function () {
    return 'CustomTriggerConfiguration(className=' + this.z25_1 + ', jsonSource=' + this.a26_1 + ', serializer=' + toString(this.b26_1) + ')';
  };
  protoOf(CustomTriggerConfiguration).hashCode = function () {
    var result = getStringHashCode(this.z25_1);
    result = imul(result, 31) + getStringHashCode(this.a26_1) | 0;
    result = imul(result, 31) + hashCode(this.b26_1) | 0;
    return result;
  };
  protoOf(CustomTriggerConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomTriggerConfiguration))
      return false;
    if (!(this.z25_1 === other.z25_1))
      return false;
    if (!(this.a26_1 === other.a26_1))
      return false;
    if (!equals(this.b26_1, other.b26_1))
      return false;
    return true;
  };
  function TriggerConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1() {
    UnknownPolymorphicSerializer.call(this, getKClass(TriggerConfiguration), getKClass(CustomTriggerConfiguration));
  }
  protoOf(TriggerConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1).f23 = function (className, json, serializer) {
    return new CustomTriggerConfiguration(className, json, serializer);
  };
  function TriggerConfigurationSerializer() {
    TriggerConfigurationSerializer_instance = this;
    var tmp = this;
    // Inline function 'dk.cachet.carp.common.infrastructure.serialization.createUnknownPolymorphicSerializer' call
    tmp.e26_1 = new TriggerConfigurationSerializer$$inlined$createUnknownPolymorphicSerializer$1();
  }
  protoOf(TriggerConfigurationSerializer).mk = function () {
    return this.e26_1.mk();
  };
  protoOf(TriggerConfigurationSerializer).f26 = function (encoder, value) {
    this.e26_1.h23(encoder, value);
  };
  protoOf(TriggerConfigurationSerializer).nk = function (encoder, value) {
    return this.f26(encoder, value instanceof TriggerConfiguration ? value : THROW_CCE());
  };
  protoOf(TriggerConfigurationSerializer).ok = function (decoder) {
    return this.e26_1.ok(decoder);
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
    var requestObjectName = getKClassFromExpression(this).m();
    var tmp = request.callableName;
    var tmp_0;
    if (requestObjectName == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.replaceFirstChar' call
      var tmp_1;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(requestObjectName) > 0) {
        // Inline function 'kotlin.text.lowercase' call
        var this_0 = charCodeAt(requestObjectName, 0);
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$2 = toString_1(this_0).toLowerCase();
        tmp_1 = toString(tmp$ret$2) + substring(requestObjectName, 1);
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
    var char = match.s2() === 'x' ? random : random & 3 | 8;
    var tmp = char.toString(16);
    return (!(tmp == null) ? isCharSequence(tmp) : false) ? tmp : THROW_CCE();
  }
  function DefaultUUIDFactory() {
    this.y1j_1 = 16;
  }
  protoOf(DefaultUUIDFactory).z1j = function () {
    var tmp0 = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    var tmp2 = Regex_init_$Create$('[xy]');
    // Inline function 'kotlin.text.replace' call
    var transform = DefaultUUIDFactory$randomUUID$lambda;
    var uuidString = tmp2.lb(tmp0, transform);
    return new UUID(uuidString);
  };
  var DefaultUUIDFactory_instance;
  function DefaultUUIDFactory_getInstance() {
    return DefaultUUIDFactory_instance;
  }
  function Reflection() {
    this.p22_1 = false;
  }
  var Reflection_instance;
  function Reflection_getInstance() {
    return Reflection_instance;
  }
  //region block: post-declaration
  protoOf($serializer).fw = typeParametersSerializers;
  protoOf($serializer_0).fw = typeParametersSerializers;
  defineProp(protoOf(Frequency), 'name', protoOf(Frequency).k);
  defineProp(protoOf(Frequency), 'ordinal', protoOf(Frequency).d3);
  defineProp(protoOf(Trilean), 'name', protoOf(Trilean).k);
  defineProp(protoOf(Trilean), 'ordinal', protoOf(Trilean).d3);
  protoOf($serializer_1).fw = typeParametersSerializers;
  defineProp(protoOf(Acceleration), 'sensorSpecificData', function () {
    return this.k1k();
  });
  protoOf($serializer_2).fw = typeParametersSerializers;
  defineProp(protoOf(AngularVelocity), 'sensorSpecificData', function () {
    return this.k1k();
  });
  protoOf($serializer_3).fw = typeParametersSerializers;
  defineProp(protoOf(DataTimeType), 'name', protoOf(DataTimeType).k);
  defineProp(protoOf(DataTimeType), 'ordinal', protoOf(DataTimeType).d3);
  protoOf($serializer_4).fw = typeParametersSerializers;
  defineProp(protoOf(ECG), 'sensorSpecificData', function () {
    return this.k1k();
  });
  protoOf($serializer_5).fw = typeParametersSerializers;
  defineProp(protoOf(EDA), 'sensorSpecificData', function () {
    return this.k1k();
  });
  protoOf($serializer_6).fw = typeParametersSerializers;
  defineProp(protoOf(Geolocation), 'sensorSpecificData', function () {
    return this.k1k();
  });
  protoOf($serializer_7).fw = typeParametersSerializers;
  defineProp(protoOf(HeartRate), 'sensorSpecificData', function () {
    return this.k1k();
  });
  protoOf($serializer_8).fw = typeParametersSerializers;
  defineProp(protoOf(InterbeatInterval), 'sensorSpecificData', function () {
    return this.k1k();
  });
  protoOf($serializer_9).fw = typeParametersSerializers;
  defineProp(protoOf(NonGravitationalAcceleration), 'sensorSpecificData', function () {
    return this.k1k();
  });
  protoOf($serializer_10).fw = typeParametersSerializers;
  defineProp(protoOf(PPG), 'sensorSpecificData', function () {
    return this.k1k();
  });
  protoOf($serializer_11).fw = typeParametersSerializers;
  defineProp(protoOf(SensorSkinContact), 'sensorSpecificData', function () {
    return this.k1k();
  });
  protoOf($serializer_12).fw = typeParametersSerializers;
  defineProp(protoOf(SignalStrength), 'sensorSpecificData', function () {
    return this.k1k();
  });
  protoOf($serializer_13).fw = typeParametersSerializers;
  defineProp(protoOf(StepCount), 'sensorSpecificData', function () {
    return this.k1k();
  });
  protoOf($serializer_14).fw = typeParametersSerializers;
  defineProp(protoOf(Sex), 'name', protoOf(Sex).k);
  defineProp(protoOf(Sex), 'ordinal', protoOf(Sex).d3);
  protoOf($serializer_15).fw = typeParametersSerializers;
  defineProp(protoOf(SelectOne), 'prompt', function () {
    return this.r1q();
  });
  protoOf($serializer_16).fw = typeParametersSerializers;
  defineProp(protoOf(Text), 'prompt', function () {
    return this.r1q();
  });
  protoOf($serializer_17).fw = typeParametersSerializers;
  defineProp(protoOf(DeviceConfiguration), 'roleName', function () {
    return this.q1r();
  });
  defineProp(protoOf(DeviceConfiguration), 'isOptional', function () {
    return this.r1r();
  });
  defineProp(protoOf(DeviceConfiguration), 'defaultSamplingConfiguration', function () {
    return this.s1r();
  });
  protoOf($serializer_18).fw = typeParametersSerializers;
  defineProp(protoOf(DeviceRegistration), 'deviceId', function () {
    return this.m1s();
  });
  defineProp(protoOf(DeviceRegistration), 'deviceDisplayName', function () {
    return this.j1s();
  });
  defineProp(protoOf(DeviceRegistration), 'registrationCreatedOn', function () {
    return this.l1s();
  });
  defineProp(protoOf(DeviceRegistration), 'additionalSpecifications', function () {
    return this.k1s();
  });
  protoOf($serializer_19).fw = typeParametersSerializers;
  protoOf($serializer_20).fw = typeParametersSerializers;
  protoOf($serializer_21).fw = typeParametersSerializers;
  protoOf($serializer_22).fw = typeParametersSerializers;
  protoOf($serializer_23).fw = typeParametersSerializers;
  protoOf($serializer_24).fw = typeParametersSerializers;
  protoOf($serializer_25).fw = typeParametersSerializers;
  protoOf($serializer_26).fw = typeParametersSerializers;
  protoOf(BatteryAwareSamplingConfigurationBuilder).z1w = build;
  defineProp(protoOf(Granularity), 'name', protoOf(Granularity).k);
  defineProp(protoOf(Granularity), 'ordinal', protoOf(Granularity).d3);
  protoOf($serializer_28).fw = typeParametersSerializers;
  protoOf(GranularitySamplingConfigurationBuilder).z1w = build;
  protoOf($serializer_29).fw = typeParametersSerializers;
  protoOf(IntervalSamplingConfigurationBuilder).z1w = build;
  protoOf(NoOptionsSamplingConfigurationBuilder).z1w = build;
  protoOf($serializer_30).fw = typeParametersSerializers;
  defineProp(protoOf(BackgroundTask), 'name', function () {
    return this.k();
  });
  defineProp(protoOf(BackgroundTask), 'measures', function () {
    return this.d1y();
  });
  defineProp(protoOf(BackgroundTask), 'description', function () {
    return this.e1y();
  });
  protoOf($serializer_31).fw = typeParametersSerializers;
  defineProp(protoOf(CustomProtocolTask), 'name', function () {
    return this.k();
  });
  defineProp(protoOf(CustomProtocolTask), 'description', function () {
    return this.e1y();
  });
  defineProp(protoOf(CustomProtocolTask), 'measures', function () {
    return this.d1y();
  });
  protoOf($serializer_32).fw = typeParametersSerializers;
  protoOf($serializer_33).fw = typeParametersSerializers;
  defineProp(protoOf(UrlVariable), 'name', protoOf(UrlVariable).k);
  defineProp(protoOf(UrlVariable), 'ordinal', protoOf(UrlVariable).d3);
  protoOf($serializer_34).fw = typeParametersSerializers;
  defineProp(protoOf(WebTask), 'name', function () {
    return this.k();
  });
  defineProp(protoOf(WebTask), 'description', function () {
    return this.e1y();
  });
  defineProp(protoOf(WebTask), 'measures', function () {
    return this.d1y();
  });
  protoOf($serializer_35).fw = typeParametersSerializers;
  defineProp(protoOf(TriggerConfiguration), 'requiresPrimaryDevice', function () {
    return this.q1z();
  });
  defineProp(protoOf(TriggerConfiguration), 'sourceDeviceRoleName', function () {
    return this.p1z();
  });
  protoOf($serializer_36).fw = typeParametersSerializers;
  protoOf($serializer_37).fw = typeParametersSerializers;
  defineProp(protoOf(Control), 'name', protoOf(Control).k);
  defineProp(protoOf(Control), 'ordinal', protoOf(Control).d3);
  protoOf($serializer_38).fw = typeParametersSerializers;
  protoOf($serializer_39).fw = typeParametersSerializers;
  protoOf($serializer_40).fw = typeParametersSerializers;
  protoOf($serializer_41).fw = typeParametersSerializers;
  protoOf($serializer_42).fw = typeParametersSerializers;
  defineProp(protoOf(ExpectedParticipantData), 'inputDataType', protoOf(ExpectedParticipantData).j21);
  protoOf($serializer_43).fw = typeParametersSerializers;
  defineProp(protoOf(ParticipantAttribute), 'inputDataType', function () {
    return this.j21();
  });
  protoOf($serializer_45).fw = typeParametersSerializers;
  protoOf(ExtractUniqueKeyMap).asJsReadonlyMapView = asJsReadonlyMapView;
  protoOf($serializer_46).fw = typeParametersSerializers;
  protoOf($serializer_47).fw = typeParametersSerializers;
  protoOf($serializer_48).fw = typeParametersSerializers;
  defineProp(protoOf(BaseMembers_1), 'name', function () {
    return this.k();
  });
  defineProp(protoOf(BaseMembers_1), 'measures', function () {
    return this.d1y();
  });
  defineProp(protoOf(BaseMembers_1), 'description', function () {
    return this.e1y();
  });
  defineProp(protoOf(CustomTaskConfiguration), 'name', function () {
    return this.k();
  });
  defineProp(protoOf(CustomTaskConfiguration), 'measures', function () {
    return this.d1y();
  });
  defineProp(protoOf(CustomTaskConfiguration), 'description', function () {
    return this.e1y();
  });
  protoOf($serializer_49).fw = typeParametersSerializers;
  defineProp(protoOf(ApplicationServiceRequest), 'apiVersion', function () {
    return this.g26();
  });
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  Companion_instance_26 = new Companion_25();
  Companion_instance_29 = new Companion_28();
  Companion_instance_32 = new Companion_31();
  Companion_instance_35 = new Companion_34();
  Companion_instance_36 = new Companion_35();
  Companion_instance_38 = new Companion_37();
  Companion_instance_40 = new Companion_39();
  Companion_instance_41 = new Companion_40();
  Companion_instance_45 = new Companion_44();
  Companion_instance_49 = new Companion_48();
  NoOptionsSamplingConfigurationBuilder_instance = new NoOptionsSamplingConfigurationBuilder();
  Companion_instance_50 = new Companion_49();
  Companion_instance_54 = new Companion_53();
  Companion_instance_57 = new Companion_56();
  Companion_instance_58 = new Companion_57();
  Companion_instance_59 = new Companion_58();
  Companion_instance_61 = new Companion_60();
  Companion_instance_62 = new Companion_61();
  Companion_instance_63 = new Companion_62();
  Companion_instance_64 = new Companion_63();
  Companion_instance_68 = new Companion_67();
  Companion_instance_71 = new Companion_70();
  Companion_instance_72 = new Companion_71();
  Companion_instance_73 = new Companion_72();
  Companion_instance_74 = new Companion_73();
  Companion_instance_75 = new Companion_74();
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
    var dk = _.dk || (_.dk = {});
    var cachet = dk.cachet || (dk.cachet = {});
    var carp = cachet.carp || (cachet.carp = {});
    var common = carp.common || (carp.common = {});
    var application = common.application || (common.application = {});
    application.ApplicationData = ApplicationData;
    var dk_0 = _.dk || (_.dk = {});
    var cachet_0 = dk_0.cachet || (dk_0.cachet = {});
    var carp_0 = cachet_0.carp || (cachet_0.carp = {});
    var common_0 = carp_0.common || (carp_0.common = {});
    var application_0 = common_0.application || (common_0.application = {});
    application_0.EmailAddress = EmailAddress;
    var dk_1 = _.dk || (_.dk = {});
    var cachet_1 = dk_1.cachet || (dk_1.cachet = {});
    var carp_1 = cachet_1.carp || (cachet_1.carp = {});
    var common_1 = carp_1.common || (carp_1.common = {});
    var application_1 = common_1.application || (common_1.application = {});
    application_1.toEpochMicroseconds = toEpochMicroseconds;
    var dk_2 = _.dk || (_.dk = {});
    var cachet_2 = dk_2.cachet || (dk_2.cachet = {});
    var carp_2 = cachet_2.carp || (cachet_2.carp = {});
    var common_2 = carp_2.common || (carp_2.common = {});
    var application_2 = common_2.application || (common_2.application = {});
    application_2.MACAddress = MACAddress;
    defineProp(application_2.MACAddress, 'Companion', Companion_getInstance_2, VOID, true);
    var dk_3 = _.dk || (_.dk = {});
    var cachet_3 = dk_3.cachet || (dk_3.cachet = {});
    var carp_3 = cachet_3.carp || (cachet_3.carp = {});
    var common_3 = carp_3.common || (carp_3.common = {});
    var application_3 = common_3.application || (common_3.application = {});
    application_3.NamespacedId = NamespacedId;
    defineProp(application_3.NamespacedId, 'Companion', Companion_getInstance_3, VOID, true);
    var dk_4 = _.dk || (_.dk = {});
    var cachet_4 = dk_4.cachet || (dk_4.cachet = {});
    var carp_4 = cachet_4.carp || (cachet_4.carp = {});
    var common_4 = carp_4.common || (carp_4.common = {});
    var application_4 = common_4.application || (common_4.application = {});
    application_4.RecurrenceRule = RecurrenceRule;
    defineProp(application_4.RecurrenceRule, 'Companion', Companion_getInstance_7, VOID, true);
    application_4.RecurrenceRule.Frequency = Frequency;
    application_4.RecurrenceRule.Frequency.values = values;
    application_4.RecurrenceRule.Frequency.valueOf = valueOf;
    defineProp(application_4.RecurrenceRule.Frequency, 'SECONDLY', Frequency_SECONDLY_getInstance, VOID, true);
    defineProp(application_4.RecurrenceRule.Frequency, 'MINUTELY', Frequency_MINUTELY_getInstance, VOID, true);
    defineProp(application_4.RecurrenceRule.Frequency, 'HOURLY', Frequency_HOURLY_getInstance, VOID, true);
    defineProp(application_4.RecurrenceRule.Frequency, 'DAILY', Frequency_DAILY_getInstance, VOID, true);
    defineProp(application_4.RecurrenceRule.Frequency, 'WEEKLY', Frequency_WEEKLY_getInstance, VOID, true);
    defineProp(application_4.RecurrenceRule.Frequency, 'MONTHLY', Frequency_MONTHLY_getInstance, VOID, true);
    defineProp(application_4.RecurrenceRule.Frequency, 'YEARLY', Frequency_YEARLY_getInstance, VOID, true);
    application_4.RecurrenceRule.End = End;
    application_4.RecurrenceRule.End.Until = Until;
    application_4.RecurrenceRule.End.Count = Count;
    defineProp(application_4.RecurrenceRule.End, 'Never', Never_getInstance, VOID, true);
    var dk_5 = _.dk || (_.dk = {});
    var cachet_5 = dk_5.cachet || (dk_5.cachet = {});
    var carp_5 = cachet_5.carp || (cachet_5.carp = {});
    var common_5 = carp_5.common || (carp_5.common = {});
    var application_5 = common_5.application || (common_5.application = {});
    application_5.TimeOfDay = TimeOfDay;
    defineProp(application_5.TimeOfDay, 'Companion', Companion_getInstance_8, VOID, true);
    var dk_6 = _.dk || (_.dk = {});
    var cachet_6 = dk_6.cachet || (dk_6.cachet = {});
    var carp_6 = cachet_6.carp || (cachet_6.carp = {});
    var common_6 = carp_6.common || (carp_6.common = {});
    var application_6 = common_6.application || (common_6.application = {});
    application_6.Trilean = Trilean;
    application_6.Trilean.values = values_0;
    application_6.Trilean.valueOf = valueOf_0;
    defineProp(application_6.Trilean, 'TRUE', Trilean_TRUE_getInstance, VOID, true);
    defineProp(application_6.Trilean, 'FALSE', Trilean_FALSE_getInstance, VOID, true);
    defineProp(application_6.Trilean, 'UNKNOWN', Trilean_UNKNOWN_getInstance, VOID, true);
    application_6.toTrilean = toTrilean;
    var dk_7 = _.dk || (_.dk = {});
    var cachet_7 = dk_7.cachet || (dk_7.cachet = {});
    var carp_7 = cachet_7.carp || (cachet_7.carp = {});
    var common_7 = carp_7.common || (carp_7.common = {});
    var application_7 = common_7.application || (common_7.application = {});
    application_7.UUID = UUID;
    defineProp(application_7.UUID, 'Companion', Companion_getInstance_9, VOID, true);
    var dk_8 = _.dk || (_.dk = {});
    var cachet_8 = dk_8.cachet || (dk_8.cachet = {});
    var carp_8 = cachet_8.carp || (cachet_8.carp = {});
    var common_8 = carp_8.common || (carp_8.common = {});
    var application_8 = common_8.application || (common_8.application = {});
    var data = application_8.data || (application_8.data = {});
    data.Acceleration = Acceleration;
    var dk_9 = _.dk || (_.dk = {});
    var cachet_9 = dk_9.cachet || (dk_9.cachet = {});
    var carp_9 = cachet_9.carp || (cachet_9.carp = {});
    var common_9 = carp_9.common || (carp_9.common = {});
    var application_9 = common_9.application || (common_9.application = {});
    var data_0 = application_9.data || (application_9.data = {});
    data_0.AngularVelocity = AngularVelocity;
    var dk_10 = _.dk || (_.dk = {});
    var cachet_10 = dk_10.cachet || (dk_10.cachet = {});
    var carp_10 = cachet_10.carp || (cachet_10.carp = {});
    var common_10 = carp_10.common || (carp_10.common = {});
    var application_10 = common_10.application || (common_10.application = {});
    var data_1 = application_10.data || (application_10.data = {});
    defineProp(data_1, 'CarpDataTypes', CarpDataTypes_getInstance, VOID, true);
    var dk_11 = _.dk || (_.dk = {});
    var cachet_11 = dk_11.cachet || (dk_11.cachet = {});
    var carp_11 = cachet_11.carp || (cachet_11.carp = {});
    var common_11 = carp_11.common || (carp_11.common = {});
    var application_11 = common_11.application || (common_11.application = {});
    var data_2 = application_11.data || (application_11.data = {});
    data_2.CompletedTask = CompletedTask;
    var dk_12 = _.dk || (_.dk = {});
    var cachet_12 = dk_12.cachet || (dk_12.cachet = {});
    var carp_12 = cachet_12.carp || (cachet_12.carp = {});
    var common_12 = carp_12.common || (carp_12.common = {});
    var application_12 = common_12.application || (common_12.application = {});
    var data_3 = application_12.data || (application_12.data = {});
    var dk_13 = _.dk || (_.dk = {});
    var cachet_13 = dk_13.cachet || (dk_13.cachet = {});
    var carp_13 = cachet_13.carp || (cachet_13.carp = {});
    var common_13 = carp_13.common || (carp_13.common = {});
    var application_13 = common_13.application || (common_13.application = {});
    var data_4 = application_13.data || (application_13.data = {});
    data_4.DataTypeMetaData = DataTypeMetaData;
    data_4.DataTimeType = DataTimeType;
    data_4.DataTimeType.values = values_1;
    data_4.DataTimeType.valueOf = valueOf_1;
    defineProp(data_4.DataTimeType, 'POINT', DataTimeType_POINT_getInstance, VOID, true);
    defineProp(data_4.DataTimeType, 'TIME_SPAN', DataTimeType_TIME_SPAN_getInstance, VOID, true);
    var dk_14 = _.dk || (_.dk = {});
    var cachet_14 = dk_14.cachet || (dk_14.cachet = {});
    var carp_14 = cachet_14.carp || (cachet_14.carp = {});
    var common_14 = carp_14.common || (carp_14.common = {});
    var application_14 = common_14.application || (common_14.application = {});
    var data_5 = application_14.data || (application_14.data = {});
    data_5.DataTypeMetaDataMap = DataTypeMetaDataMap;
    var dk_15 = _.dk || (_.dk = {});
    var cachet_15 = dk_15.cachet || (dk_15.cachet = {});
    var carp_15 = cachet_15.carp || (cachet_15.carp = {});
    var common_15 = carp_15.common || (carp_15.common = {});
    var application_15 = common_15.application || (common_15.application = {});
    var data_6 = application_15.data || (application_15.data = {});
    data_6.ECG = ECG;
    var dk_16 = _.dk || (_.dk = {});
    var cachet_16 = dk_16.cachet || (dk_16.cachet = {});
    var carp_16 = cachet_16.carp || (cachet_16.carp = {});
    var common_16 = carp_16.common || (carp_16.common = {});
    var application_16 = common_16.application || (common_16.application = {});
    var data_7 = application_16.data || (application_16.data = {});
    data_7.EDA = EDA;
    var dk_17 = _.dk || (_.dk = {});
    var cachet_17 = dk_17.cachet || (dk_17.cachet = {});
    var carp_17 = cachet_17.carp || (cachet_17.carp = {});
    var common_17 = carp_17.common || (carp_17.common = {});
    var application_17 = common_17.application || (common_17.application = {});
    var data_8 = application_17.data || (application_17.data = {});
    data_8.Geolocation = Geolocation;
    defineProp(data_8.Geolocation, 'Companion', Companion_getInstance_15, VOID, true);
    var dk_18 = _.dk || (_.dk = {});
    var cachet_18 = dk_18.cachet || (dk_18.cachet = {});
    var carp_18 = cachet_18.carp || (cachet_18.carp = {});
    var common_18 = carp_18.common || (carp_18.common = {});
    var application_18 = common_18.application || (common_18.application = {});
    var data_9 = application_18.data || (application_18.data = {});
    data_9.HeartRate = HeartRate;
    var dk_19 = _.dk || (_.dk = {});
    var cachet_19 = dk_19.cachet || (dk_19.cachet = {});
    var carp_19 = cachet_19.carp || (cachet_19.carp = {});
    var common_19 = carp_19.common || (carp_19.common = {});
    var application_19 = common_19.application || (common_19.application = {});
    var data_10 = application_19.data || (application_19.data = {});
    data_10.InterbeatInterval = InterbeatInterval;
    var dk_20 = _.dk || (_.dk = {});
    var cachet_20 = dk_20.cachet || (dk_20.cachet = {});
    var carp_20 = cachet_20.carp || (cachet_20.carp = {});
    var common_20 = carp_20.common || (carp_20.common = {});
    var application_20 = common_20.application || (common_20.application = {});
    var data_11 = application_20.data || (application_20.data = {});
    data_11.NonGravitationalAcceleration = NonGravitationalAcceleration;
    var dk_21 = _.dk || (_.dk = {});
    var cachet_21 = dk_21.cachet || (dk_21.cachet = {});
    var carp_21 = cachet_21.carp || (cachet_21.carp = {});
    var common_21 = carp_21.common || (carp_21.common = {});
    var application_21 = common_21.application || (common_21.application = {});
    var data_12 = application_21.data || (application_21.data = {});
    data_12.PPG = PPG;
    var dk_22 = _.dk || (_.dk = {});
    var cachet_22 = dk_22.cachet || (dk_22.cachet = {});
    var carp_22 = cachet_22.carp || (cachet_22.carp = {});
    var common_22 = carp_22.common || (carp_22.common = {});
    var application_22 = common_22.application || (common_22.application = {});
    var data_13 = application_22.data || (application_22.data = {});
    data_13.SensorSkinContact = SensorSkinContact;
    var dk_23 = _.dk || (_.dk = {});
    var cachet_23 = dk_23.cachet || (dk_23.cachet = {});
    var carp_23 = cachet_23.carp || (cachet_23.carp = {});
    var common_23 = carp_23.common || (carp_23.common = {});
    var application_23 = common_23.application || (common_23.application = {});
    var data_14 = application_23.data || (application_23.data = {});
    data_14.SignalStrength = SignalStrength;
    var dk_24 = _.dk || (_.dk = {});
    var cachet_24 = dk_24.cachet || (dk_24.cachet = {});
    var carp_24 = cachet_24.carp || (cachet_24.carp = {});
    var common_24 = carp_24.common || (carp_24.common = {});
    var application_24 = common_24.application || (common_24.application = {});
    var data_15 = application_24.data || (application_24.data = {});
    data_15.StepCount = StepCount;
    var dk_25 = _.dk || (_.dk = {});
    var cachet_25 = dk_25.cachet || (dk_25.cachet = {});
    var carp_25 = cachet_25.carp || (cachet_25.carp = {});
    var common_25 = carp_25.common || (carp_25.common = {});
    var application_25 = common_25.application || (common_25.application = {});
    var data_16 = application_25.data || (application_25.data = {});
    data_16.TriggeredTask = TriggeredTask;
    var dk_26 = _.dk || (_.dk = {});
    var cachet_26 = dk_26.cachet || (dk_26.cachet = {});
    var carp_26 = cachet_26.carp || (cachet_26.carp = {});
    var common_26 = carp_26.common || (carp_26.common = {});
    var application_26 = common_26.application || (common_26.application = {});
    var data_17 = application_26.data || (application_26.data = {});
    var input = data_17.input || (data_17.input = {});
    defineProp(input, 'CarpInputDataTypes', CarpInputDataTypes_getInstance, VOID, true);
    var dk_27 = _.dk || (_.dk = {});
    var cachet_27 = dk_27.cachet || (dk_27.cachet = {});
    var carp_27 = cachet_27.carp || (cachet_27.carp = {});
    var common_27 = carp_27.common || (carp_27.common = {});
    var application_27 = common_27.application || (common_27.application = {});
    var data_18 = application_27.data || (application_27.data = {});
    var input_0 = data_18.input || (data_18.input = {});
    input_0.CustomInput = CustomInput;
    var dk_28 = _.dk || (_.dk = {});
    var cachet_28 = dk_28.cachet || (dk_28.cachet = {});
    var carp_28 = cachet_28.carp || (cachet_28.carp = {});
    var common_28 = carp_28.common || (carp_28.common = {});
    var application_28 = common_28.application || (common_28.application = {});
    var data_19 = application_28.data || (application_28.data = {});
    var input_1 = data_19.input || (data_19.input = {});
    input_1.InputDataTypeList = InputDataTypeList;
    input_1.InputDataTypeList.create = create;
    var dk_29 = _.dk || (_.dk = {});
    var cachet_29 = dk_29.cachet || (dk_29.cachet = {});
    var carp_29 = cachet_29.carp || (cachet_29.carp = {});
    var common_29 = carp_29.common || (carp_29.common = {});
    var application_29 = common_29.application || (common_29.application = {});
    var data_20 = application_29.data || (application_29.data = {});
    var input_2 = data_20.input || (data_20.input = {});
    input_2.Sex = Sex;
    input_2.Sex.values = values_2;
    input_2.Sex.valueOf = valueOf_2;
    defineProp(input_2.Sex, 'Male', Sex_Male_getInstance, VOID, true);
    defineProp(input_2.Sex, 'Female', Sex_Female_getInstance, VOID, true);
    defineProp(input_2.Sex, 'Intersex', Sex_Intersex_getInstance, VOID, true);
    var dk_30 = _.dk || (_.dk = {});
    var cachet_30 = dk_30.cachet || (dk_30.cachet = {});
    var carp_30 = cachet_30.carp || (cachet_30.carp = {});
    var common_30 = carp_30.common || (carp_30.common = {});
    var application_30 = common_30.application || (common_30.application = {});
    var data_21 = application_30.data || (application_30.data = {});
    var input_3 = data_21.input || (data_21.input = {});
    var elements = input_3.elements || (input_3.elements = {});
    var dk_31 = _.dk || (_.dk = {});
    var cachet_31 = dk_31.cachet || (dk_31.cachet = {});
    var carp_31 = cachet_31.carp || (cachet_31.carp = {});
    var common_31 = carp_31.common || (carp_31.common = {});
    var application_31 = common_31.application || (common_31.application = {});
    var data_22 = application_31.data || (application_31.data = {});
    var input_4 = data_22.input || (data_22.input = {});
    var elements_0 = input_4.elements || (input_4.elements = {});
    elements_0.SelectOne = SelectOne;
    var dk_32 = _.dk || (_.dk = {});
    var cachet_32 = dk_32.cachet || (dk_32.cachet = {});
    var carp_32 = cachet_32.carp || (cachet_32.carp = {});
    var common_32 = carp_32.common || (carp_32.common = {});
    var application_32 = common_32.application || (common_32.application = {});
    var data_23 = application_32.data || (application_32.data = {});
    var input_5 = data_23.input || (data_23.input = {});
    var elements_1 = input_5.elements || (input_5.elements = {});
    elements_1.Text = Text;
    var dk_33 = _.dk || (_.dk = {});
    var cachet_33 = dk_33.cachet || (dk_33.cachet = {});
    var carp_33 = cachet_33.carp || (cachet_33.carp = {});
    var common_33 = carp_33.common || (carp_33.common = {});
    var application_33 = common_33.application || (common_33.application = {});
    var devices = application_33.devices || (application_33.devices = {});
    devices.AltBeacon = AltBeacon;
    defineProp(devices.AltBeacon, 'Sensors', Sensors_getInstance, VOID, true);
    defineProp(devices.AltBeacon, 'Tasks', Tasks_getInstance, VOID, true);
    devices.AltBeaconDeviceRegistration = AltBeaconDeviceRegistration;
    defineProp(devices.AltBeaconDeviceRegistration, 'Companion', Companion_getInstance_28, VOID, true);
    devices.AltBeaconDeviceRegistrationBuilder = AltBeaconDeviceRegistrationBuilder;
    var dk_34 = _.dk || (_.dk = {});
    var cachet_34 = dk_34.cachet || (dk_34.cachet = {});
    var carp_34 = cachet_34.carp || (cachet_34.carp = {});
    var common_34 = carp_34.common || (carp_34.common = {});
    var application_34 = common_34.application || (common_34.application = {});
    var devices_0 = application_34.devices || (application_34.devices = {});
    devices_0.BLEHeartRateDevice = BLEHeartRateDevice;
    defineProp(devices_0.BLEHeartRateDevice, 'Sensors', Sensors_getInstance_0, VOID, true);
    defineProp(devices_0.BLEHeartRateDevice, 'Tasks', Tasks_getInstance_0, VOID, true);
    var dk_35 = _.dk || (_.dk = {});
    var cachet_35 = dk_35.cachet || (dk_35.cachet = {});
    var carp_35 = cachet_35.carp || (cachet_35.carp = {});
    var common_35 = carp_35.common || (carp_35.common = {});
    var application_35 = common_35.application || (common_35.application = {});
    var devices_1 = application_35.devices || (application_35.devices = {});
    devices_1.BLESerialNumberDeviceRegistration = BLESerialNumberDeviceRegistration;
    devices_1.BLESerialNumberDeviceRegistrationBuilder = BLESerialNumberDeviceRegistrationBuilder;
    var dk_36 = _.dk || (_.dk = {});
    var cachet_36 = dk_36.cachet || (dk_36.cachet = {});
    var carp_36 = cachet_36.carp || (cachet_36.carp = {});
    var common_36 = carp_36.common || (carp_36.common = {});
    var application_36 = common_36.application || (common_36.application = {});
    var devices_2 = application_36.devices || (application_36.devices = {});
    devices_2.CustomProtocolDevice = CustomProtocolDevice;
    defineProp(devices_2.CustomProtocolDevice, 'Sensors', Sensors_getInstance_1, VOID, true);
    defineProp(devices_2.CustomProtocolDevice, 'Tasks', Tasks_getInstance_1, VOID, true);
    var dk_37 = _.dk || (_.dk = {});
    var cachet_37 = dk_37.cachet || (dk_37.cachet = {});
    var carp_37 = cachet_37.carp || (cachet_37.carp = {});
    var common_37 = carp_37.common || (carp_37.common = {});
    var application_37 = common_37.application || (common_37.application = {});
    var devices_3 = application_37.devices || (application_37.devices = {});
    devices_3.DefaultDeviceRegistration = DefaultDeviceRegistration;
    devices_3.DefaultDeviceRegistrationBuilder = DefaultDeviceRegistrationBuilder;
    var dk_38 = _.dk || (_.dk = {});
    var cachet_38 = dk_38.cachet || (dk_38.cachet = {});
    var carp_38 = cachet_38.carp || (cachet_38.carp = {});
    var common_38 = carp_38.common || (carp_38.common = {});
    var application_38 = common_38.application || (common_38.application = {});
    var devices_4 = application_38.devices || (application_38.devices = {});
    devices_4.DeviceConfiguration = DeviceConfiguration;
    devices_4.DeviceConfigurationBuilder = DeviceConfigurationBuilder;
    var dk_39 = _.dk || (_.dk = {});
    var cachet_39 = dk_39.cachet || (dk_39.cachet = {});
    var carp_39 = cachet_39.carp || (cachet_39.carp = {});
    var common_39 = carp_39.common || (carp_39.common = {});
    var application_39 = common_39.application || (common_39.application = {});
    var devices_5 = application_39.devices || (application_39.devices = {});
    devices_5.DeviceRegistration = DeviceRegistration;
    devices_5.DeviceRegistrationBuilder = DeviceRegistrationBuilder;
    var dk_40 = _.dk || (_.dk = {});
    var cachet_40 = dk_40.cachet || (dk_40.cachet = {});
    var carp_40 = cachet_40.carp || (cachet_40.carp = {});
    var common_40 = carp_40.common || (carp_40.common = {});
    var application_40 = common_40.application || (common_40.application = {});
    var devices_6 = application_40.devices || (application_40.devices = {});
    devices_6.MACAddressDeviceRegistration = MACAddressDeviceRegistration;
    devices_6.MACAddressDeviceRegistrationBuilder = MACAddressDeviceRegistrationBuilder;
    var dk_41 = _.dk || (_.dk = {});
    var cachet_41 = dk_41.cachet || (dk_41.cachet = {});
    var carp_41 = cachet_41.carp || (cachet_41.carp = {});
    var common_41 = carp_41.common || (carp_41.common = {});
    var application_41 = common_41.application || (common_41.application = {});
    var devices_7 = application_41.devices || (application_41.devices = {});
    devices_7.PrimaryDeviceConfiguration = PrimaryDeviceConfiguration;
    devices_7.isPrimary = isPrimary;
    var dk_42 = _.dk || (_.dk = {});
    var cachet_42 = dk_42.cachet || (dk_42.cachet = {});
    var carp_42 = cachet_42.carp || (cachet_42.carp = {});
    var common_42 = carp_42.common || (carp_42.common = {});
    var application_42 = common_42.application || (common_42.application = {});
    var devices_8 = application_42.devices || (application_42.devices = {});
    devices_8.Smartphone = Smartphone;
    defineProp(devices_8.Smartphone, 'Companion', Companion_getInstance_42, VOID, true);
    defineProp(devices_8.Smartphone, 'Sensors', Sensors_getInstance_2, VOID, true);
    defineProp(devices_8.Smartphone, 'Tasks', Tasks_getInstance_2, VOID, true);
    devices_8.SmartphoneBuilder = SmartphoneBuilder;
    devices_8.SmartphoneSamplingConfigurationMapBuilder = SmartphoneSamplingConfigurationMapBuilder;
    var dk_43 = _.dk || (_.dk = {});
    var cachet_43 = dk_43.cachet || (dk_43.cachet = {});
    var carp_43 = cachet_43.carp || (cachet_43.carp = {});
    var common_43 = carp_43.common || (carp_43.common = {});
    var application_43 = common_43.application || (common_43.application = {});
    var devices_9 = application_43.devices || (application_43.devices = {});
    devices_9.Website = Website;
    defineProp(devices_9.Website, 'Sensors', Sensors_getInstance_3, VOID, true);
    defineProp(devices_9.Website, 'Tasks', Tasks_getInstance_3, VOID, true);
    devices_9.WebsiteDeviceRegistration = WebsiteDeviceRegistration;
    devices_9.WebsiteDeviceRegistrationBuilder = WebsiteDeviceRegistrationBuilder;
    var dk_44 = _.dk || (_.dk = {});
    var cachet_44 = dk_44.cachet || (dk_44.cachet = {});
    var carp_44 = cachet_44.carp || (cachet_44.carp = {});
    var common_44 = carp_44.common || (carp_44.common = {});
    var application_44 = common_44.application || (common_44.application = {});
    var sampling = application_44.sampling || (application_44.sampling = {});
    sampling.AdaptiveGranularitySamplingScheme = AdaptiveGranularitySamplingScheme;
    var dk_45 = _.dk || (_.dk = {});
    var cachet_45 = dk_45.cachet || (dk_45.cachet = {});
    var carp_45 = cachet_45.carp || (cachet_45.carp = {});
    var common_45 = carp_45.common || (carp_45.common = {});
    var application_45 = common_45.application || (common_45.application = {});
    var sampling_0 = application_45.sampling || (application_45.sampling = {});
    sampling_0.BatteryAwareSamplingScheme = BatteryAwareSamplingScheme;
    sampling_0.BatteryAwareSamplingConfiguration = BatteryAwareSamplingConfiguration;
    sampling_0.BatteryAwareSamplingConfigurationBuilder = BatteryAwareSamplingConfigurationBuilder;
    var dk_46 = _.dk || (_.dk = {});
    var cachet_46 = dk_46.cachet || (dk_46.cachet = {});
    var carp_46 = cachet_46.carp || (cachet_46.carp = {});
    var common_46 = carp_46.common || (carp_46.common = {});
    var application_46 = common_46.application || (common_46.application = {});
    var sampling_1 = application_46.sampling || (application_46.sampling = {});
    sampling_1.DataTypeSamplingScheme = DataTypeSamplingScheme;
    sampling_1.DataTypeSamplingSchemeMap = DataTypeSamplingSchemeMap;
    var dk_47 = _.dk || (_.dk = {});
    var cachet_47 = dk_47.cachet || (dk_47.cachet = {});
    var carp_47 = cachet_47.carp || (cachet_47.carp = {});
    var common_47 = carp_47.common || (carp_47.common = {});
    var application_47 = common_47.application || (common_47.application = {});
    var sampling_2 = application_47.sampling || (application_47.sampling = {});
    sampling_2.GranularitySamplingScheme = GranularitySamplingScheme;
    sampling_2.Granularity = Granularity;
    sampling_2.Granularity.values = values_3;
    sampling_2.Granularity.valueOf = valueOf_3;
    defineProp(sampling_2.Granularity, 'Detailed', Granularity_Detailed_getInstance, VOID, true);
    defineProp(sampling_2.Granularity, 'Balanced', Granularity_Balanced_getInstance, VOID, true);
    defineProp(sampling_2.Granularity, 'Coarse', Granularity_Coarse_getInstance, VOID, true);
    sampling_2.GranularitySamplingConfiguration = GranularitySamplingConfiguration;
    sampling_2.GranularitySamplingConfigurationBuilder = GranularitySamplingConfigurationBuilder;
    var dk_48 = _.dk || (_.dk = {});
    var cachet_48 = dk_48.cachet || (dk_48.cachet = {});
    var carp_48 = cachet_48.carp || (cachet_48.carp = {});
    var common_48 = carp_48.common || (carp_48.common = {});
    var application_48 = common_48.application || (common_48.application = {});
    var sampling_3 = application_48.sampling || (application_48.sampling = {});
    sampling_3.IntervalSamplingScheme = IntervalSamplingScheme;
    sampling_3.IntervalSamplingConfiguration = IntervalSamplingConfiguration;
    sampling_3.IntervalSamplingConfigurationBuilder = IntervalSamplingConfigurationBuilder;
    var dk_49 = _.dk || (_.dk = {});
    var cachet_49 = dk_49.cachet || (dk_49.cachet = {});
    var carp_49 = cachet_49.carp || (cachet_49.carp = {});
    var common_49 = carp_49.common || (carp_49.common = {});
    var application_49 = common_49.application || (common_49.application = {});
    var sampling_4 = application_49.sampling || (application_49.sampling = {});
    sampling_4.NoOptionsSamplingScheme = NoOptionsSamplingScheme;
    defineProp(sampling_4, 'NoOptionsSamplingConfiguration', NoOptionsSamplingConfiguration_getInstance, VOID, true);
    defineProp(sampling_4, 'NoOptionsSamplingConfigurationBuilder', NoOptionsSamplingConfigurationBuilder_getInstance, VOID, true);
    var dk_50 = _.dk || (_.dk = {});
    var cachet_50 = dk_50.cachet || (dk_50.cachet = {});
    var carp_50 = cachet_50.carp || (cachet_50.carp = {});
    var common_50 = carp_50.common || (carp_50.common = {});
    var application_50 = common_50.application || (common_50.application = {});
    var sampling_5 = application_50.sampling || (application_50.sampling = {});
    var dk_51 = _.dk || (_.dk = {});
    var cachet_51 = dk_51.cachet || (dk_51.cachet = {});
    var carp_51 = cachet_51.carp || (cachet_51.carp = {});
    var common_51 = carp_51.common || (carp_51.common = {});
    var application_51 = common_51.application || (common_51.application = {});
    var services = application_51.services || (application_51.services = {});
    services.ApiVersion = ApiVersion;
    defineProp(services.ApiVersion, 'Companion', Companion_getInstance_50, VOID, true);
    var dk_52 = _.dk || (_.dk = {});
    var cachet_52 = dk_52.cachet || (dk_52.cachet = {});
    var carp_52 = cachet_52.carp || (cachet_52.carp = {});
    var common_52 = carp_52.common || (carp_52.common = {});
    var application_52 = common_52.application || (common_52.application = {});
    var services_0 = application_52.services || (application_52.services = {});
    var dk_53 = _.dk || (_.dk = {});
    var cachet_53 = dk_53.cachet || (dk_53.cachet = {});
    var carp_53 = cachet_53.carp || (cachet_53.carp = {});
    var common_53 = carp_53.common || (carp_53.common = {});
    var application_53 = common_53.application || (common_53.application = {});
    var tasks = application_53.tasks || (application_53.tasks = {});
    tasks.BackgroundTask = BackgroundTask;
    tasks.BackgroundTaskBuilder = BackgroundTaskBuilder;
    var dk_54 = _.dk || (_.dk = {});
    var cachet_54 = dk_54.cachet || (dk_54.cachet = {});
    var carp_54 = cachet_54.carp || (cachet_54.carp = {});
    var common_54 = carp_54.common || (carp_54.common = {});
    var application_54 = common_54.application || (common_54.application = {});
    var tasks_0 = application_54.tasks || (application_54.tasks = {});
    tasks_0.CustomProtocolTask = CustomProtocolTask;
    var dk_55 = _.dk || (_.dk = {});
    var cachet_55 = dk_55.cachet || (dk_55.cachet = {});
    var carp_55 = cachet_55.carp || (cachet_55.carp = {});
    var common_55 = carp_55.common || (carp_55.common = {});
    var application_55 = common_55.application || (common_55.application = {});
    var tasks_1 = application_55.tasks || (application_55.tasks = {});
    tasks_1.Measure = Measure;
    tasks_1.Measure.DataStream = DataStream;
    tasks_1.Measure.TriggerData = TriggerData;
    var dk_56 = _.dk || (_.dk = {});
    var cachet_56 = dk_56.cachet || (dk_56.cachet = {});
    var carp_56 = cachet_56.carp || (cachet_56.carp = {});
    var common_56 = carp_56.common || (carp_56.common = {});
    var application_56 = common_56.application || (common_56.application = {});
    var tasks_2 = application_56.tasks || (application_56.tasks = {});
    tasks_2.getAllExpectedDataTypes = getAllExpectedDataTypes;
    tasks_2.TaskConfigurationBuilder = TaskConfigurationBuilder;
    var dk_57 = _.dk || (_.dk = {});
    var cachet_57 = dk_57.cachet || (dk_57.cachet = {});
    var carp_57 = cachet_57.carp || (cachet_57.carp = {});
    var common_57 = carp_57.common || (carp_57.common = {});
    var application_57 = common_57.application || (common_57.application = {});
    var tasks_3 = application_57.tasks || (application_57.tasks = {});
    tasks_3.TaskConfigurationList = TaskConfigurationList;
    tasks_3.TaskConfigurationList.create = create_0;
    tasks_3.SupportedTaskConfiguration = SupportedTaskConfiguration;
    var dk_58 = _.dk || (_.dk = {});
    var cachet_58 = dk_58.cachet || (dk_58.cachet = {});
    var carp_58 = cachet_58.carp || (cachet_58.carp = {});
    var common_58 = carp_58.common || (carp_58.common = {});
    var application_58 = common_58.application || (common_58.application = {});
    var tasks_4 = application_58.tasks || (application_58.tasks = {});
    tasks_4.WebTask = WebTask;
    defineProp(tasks_4.WebTask, 'Companion', Companion_getInstance_56, VOID, true);
    tasks_4.WebTask.UrlVariable = UrlVariable;
    tasks_4.WebTask.UrlVariable.values = values_4;
    tasks_4.WebTask.UrlVariable.valueOf = valueOf_4;
    defineProp(tasks_4.WebTask.UrlVariable, 'PARTICIPANT_ID', UrlVariable_PARTICIPANT_ID_getInstance, VOID, true);
    defineProp(tasks_4.WebTask.UrlVariable, 'DEPLOYMENT_ID', UrlVariable_DEPLOYMENT_ID_getInstance, VOID, true);
    defineProp(tasks_4.WebTask.UrlVariable, 'TRIGGER_ID', UrlVariable_TRIGGER_ID_getInstance, VOID, true);
    tasks_4.WebTaskBuilder = WebTaskBuilder;
    var dk_59 = _.dk || (_.dk = {});
    var cachet_59 = dk_59.cachet || (dk_59.cachet = {});
    var carp_59 = cachet_59.carp || (cachet_59.carp = {});
    var common_59 = carp_59.common || (carp_59.common = {});
    var application_59 = common_59.application || (common_59.application = {});
    var triggers = application_59.triggers || (application_59.triggers = {});
    triggers.ElapsedTimeTrigger = ElapsedTimeTrigger;
    triggers.ElapsedTimeTrigger.create = create_1;
    var dk_60 = _.dk || (_.dk = {});
    var cachet_60 = dk_60.cachet || (dk_60.cachet = {});
    var carp_60 = cachet_60.carp || (cachet_60.carp = {});
    var common_60 = carp_60.common || (carp_60.common = {});
    var application_60 = common_60.application || (common_60.application = {});
    var triggers_0 = application_60.triggers || (application_60.triggers = {});
    triggers_0.ManualTrigger = ManualTrigger;
    var dk_61 = _.dk || (_.dk = {});
    var cachet_61 = dk_61.cachet || (dk_61.cachet = {});
    var carp_61 = cachet_61.carp || (cachet_61.carp = {});
    var common_61 = carp_61.common || (carp_61.common = {});
    var application_61 = common_61.application || (common_61.application = {});
    var triggers_1 = application_61.triggers || (application_61.triggers = {});
    triggers_1.ScheduledTrigger = ScheduledTrigger;
    triggers_1.ScheduledTrigger.create = create_2;
    var dk_62 = _.dk || (_.dk = {});
    var cachet_62 = dk_62.cachet || (dk_62.cachet = {});
    var carp_62 = cachet_62.carp || (cachet_62.carp = {});
    var common_62 = carp_62.common || (carp_62.common = {});
    var application_62 = common_62.application || (common_62.application = {});
    var triggers_2 = application_62.triggers || (application_62.triggers = {});
    triggers_2.TaskControl = TaskControl;
    triggers_2.TaskControl.Control = Control;
    triggers_2.TaskControl.Control.values = values_5;
    triggers_2.TaskControl.Control.valueOf = valueOf_5;
    defineProp(triggers_2.TaskControl.Control, 'Start', Control_Start_getInstance, VOID, true);
    defineProp(triggers_2.TaskControl.Control, 'Stop', Control_Stop_getInstance, VOID, true);
    var dk_63 = _.dk || (_.dk = {});
    var cachet_63 = dk_63.cachet || (dk_63.cachet = {});
    var carp_63 = cachet_63.carp || (cachet_63.carp = {});
    var common_63 = carp_63.common || (carp_63.common = {});
    var application_63 = common_63.application || (common_63.application = {});
    var triggers_3 = application_63.triggers || (application_63.triggers = {});
    triggers_3.TriggerConfiguration = TriggerConfiguration;
    var dk_64 = _.dk || (_.dk = {});
    var cachet_64 = dk_64.cachet || (dk_64.cachet = {});
    var carp_64 = cachet_64.carp || (cachet_64.carp = {});
    var common_64 = carp_64.common || (carp_64.common = {});
    var application_64 = common_64.application || (common_64.application = {});
    var users = application_64.users || (application_64.users = {});
    var AccountIdentity = {};
    users.AccountIdentity = AccountIdentity;
    defineProp(users.AccountIdentity, 'Companion', Companion_getInstance_62, VOID, true);
    users.EmailAccountIdentity = EmailAccountIdentity;
    users.EmailAccountIdentity.create = create_3;
    users.UsernameAccountIdentity = UsernameAccountIdentity;
    users.UsernameAccountIdentity.create = create_4;
    var dk_65 = _.dk || (_.dk = {});
    var cachet_65 = dk_65.cachet || (dk_65.cachet = {});
    var carp_65 = cachet_65.carp || (cachet_65.carp = {});
    var common_65 = carp_65.common || (carp_65.common = {});
    var application_65 = common_65.application || (common_65.application = {});
    var users_0 = application_65.users || (application_65.users = {});
    users_0.AssignedTo = AssignedTo;
    defineProp(users_0.AssignedTo, 'All', All_getInstance, VOID, true);
    users_0.AssignedTo.Roles = Roles;
    var dk_66 = _.dk || (_.dk = {});
    var cachet_66 = dk_66.cachet || (dk_66.cachet = {});
    var carp_66 = cachet_66.carp || (cachet_66.carp = {});
    var common_66 = carp_66.common || (carp_66.common = {});
    var application_66 = common_66.application || (common_66.application = {});
    var users_1 = application_66.users || (application_66.users = {});
    users_1.ExpectedParticipantData = ExpectedParticipantData;
    users_1.hasNoConflicts = hasNoConflicts;
    var dk_67 = _.dk || (_.dk = {});
    var cachet_67 = dk_67.cachet || (dk_67.cachet = {});
    var carp_67 = cachet_67.carp || (cachet_67.carp = {});
    var common_67 = carp_67.common || (carp_67.common = {});
    var application_67 = common_67.application || (common_67.application = {});
    var users_2 = application_67.users || (application_67.users = {});
    users_2.ParticipantAttribute = ParticipantAttribute;
    users_2.ParticipantAttribute.DefaultParticipantAttribute = DefaultParticipantAttribute;
    users_2.ParticipantAttribute.CustomParticipantAttribute = CustomParticipantAttribute;
    var dk_68 = _.dk || (_.dk = {});
    var cachet_68 = dk_68.cachet || (dk_68.cachet = {});
    var carp_68 = cachet_68.carp || (cachet_68.carp = {});
    var common_68 = carp_68.common || (carp_68.common = {});
    var application_68 = common_68.application || (common_68.application = {});
    var users_3 = application_68.users || (application_68.users = {});
    users_3.ParticipantRole = ParticipantRole;
    var dk_69 = _.dk || (_.dk = {});
    var cachet_69 = dk_69.cachet || (dk_69.cachet = {});
    var carp_69 = cachet_69.carp || (cachet_69.carp = {});
    var common_69 = carp_69.common || (carp_69.common = {});
    var application_69 = common_69.application || (common_69.application = {});
    var users_4 = application_69.users || (application_69.users = {});
    users_4.Username = Username;
    var dk_70 = _.dk || (_.dk = {});
    var cachet_70 = dk_70.cachet || (dk_70.cachet = {});
    var carp_70 = cachet_70.carp || (cachet_70.carp = {});
    var common_70 = carp_70.common || (carp_70.common = {});
    var domain = common_70.domain || (common_70.domain = {});
    var dk_71 = _.dk || (_.dk = {});
    var cachet_71 = dk_71.cachet || (dk_71.cachet = {});
    var carp_71 = cachet_71.carp || (cachet_71.carp = {});
    var common_71 = carp_71.common || (carp_71.common = {});
    var infrastructure = common_71.infrastructure || (common_71.infrastructure = {});
    var serialization = infrastructure.serialization || (infrastructure.serialization = {});
    defineProp(serialization, 'JSON', get_JSON, set_JSON, true);
    var dk_72 = _.dk || (_.dk = {});
    var cachet_72 = dk_72.cachet || (dk_72.cachet = {});
    var carp_72 = cachet_72.carp || (cachet_72.carp = {});
    var common_72 = carp_72.common || (carp_72.common = {});
    var infrastructure_0 = common_72.infrastructure || (common_72.infrastructure = {});
    var services_1 = infrastructure_0.services || (infrastructure_0.services = {});
    services_1.ApplicationServiceRequest = ApplicationServiceRequest;
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
  _.$_$.h = AccountIdentity;
  _.$_$.i = All;
  _.$_$.j = Roles;
  _.$_$.k = hasNoConflicts;
  _.$_$.l = UUID;
  _.$_$.m = toEpochMicroseconds;
  _.$_$.n = AggregateRoot;
  _.$_$.o = ExtractUniqueKeyMap;
  _.$_$.p = Snapshot;
  _.$_$.q = CustomData;
  _.$_$.r = ignoreTypeParameters;
  _.$_$.s = ApplicationServiceRequest;
  _.$_$.t = Companion_instance_36;
  _.$_$.u = Companion_getInstance_37;
  _.$_$.v = Companion_instance_41;
  _.$_$.w = ApiVersionSerializer_getInstance;
  _.$_$.x = $serializer_getInstance_37;
  _.$_$.y = All_getInstance;
  _.$_$.z = Companion_getInstance_66;
  _.$_$.a1 = $serializer_getInstance_41;
  _.$_$.b1 = $serializer_getInstance_43;
  _.$_$.c1 = UsernameSerializer_getInstance;
  _.$_$.d1 = Companion_instance_0;
  _.$_$.e1 = EmailAddressSerializer_getInstance;
  _.$_$.f1 = Companion_instance_3;
  _.$_$.g1 = NamespacedIdSerializer_getInstance;
  _.$_$.h1 = Companion_instance_9;
  _.$_$.i1 = UUIDSerializer_getInstance;
  _.$_$.j1 = DataTimeType_POINT_getInstance;
  _.$_$.k1 = DataTimeType_TIME_SPAN_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=carp-common-generated.js.map
