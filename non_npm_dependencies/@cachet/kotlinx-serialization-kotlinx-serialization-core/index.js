(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@cachet/kotlin-kotlin-stdlib'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@cachet/kotlin-kotlin-stdlib'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.b9;
  var initMetadataForInterface = kotlin_kotlin.$_$.k8;
  var VOID = kotlin_kotlin.$_$.b;
  var asList = kotlin_kotlin.$_$.s4;
  var objectCreate = kotlin_kotlin.$_$.a9;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.g2;
  var Unit_instance = kotlin_kotlin.$_$.u2;
  var constructCallableReference = kotlin_kotlin.$_$.x7;
  var emptyList = kotlin_kotlin.$_$.l5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.x2;
  var lazy = kotlin_kotlin.$_$.lc;
  var KProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d8;
  var toString = kotlin_kotlin.$_$.d9;
  var initMetadataForClass = kotlin_kotlin.$_$.g8;
  var getKClassFromExpression = kotlin_kotlin.$_$.p9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s3;
  var zip = kotlin_kotlin.$_$.w6;
  var toMap = kotlin_kotlin.$_$.s6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v3;
  var mapCapacity = kotlin_kotlin.$_$.c6;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.h3;
  var THROW_CCE = kotlin_kotlin.$_$.sb;
  var KtMap = kotlin_kotlin.$_$.l4;
  var isInterface = kotlin_kotlin.$_$.v8;
  var captureStack = kotlin_kotlin.$_$.p7;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.q3;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.r3;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.t3;
  var IllegalArgumentException = kotlin_kotlin.$_$.ob;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.y2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.o;
  var KClass = kotlin_kotlin.$_$.r9;
  var Triple = kotlin_kotlin.$_$.ub;
  var getKClass = kotlin_kotlin.$_$.q9;
  var Pair = kotlin_kotlin.$_$.qb;
  var Entry = kotlin_kotlin.$_$.j4;
  var KtMutableMap = kotlin_kotlin.$_$.n4;
  var LinkedHashMap = kotlin_kotlin.$_$.g4;
  var HashMap = kotlin_kotlin.$_$.e4;
  var KtSet = kotlin_kotlin.$_$.p4;
  var KtMutableSet = kotlin_kotlin.$_$.o4;
  var LinkedHashSet = kotlin_kotlin.$_$.h4;
  var HashSet = kotlin_kotlin.$_$.f4;
  var Collection = kotlin_kotlin.$_$.d4;
  var KtList = kotlin_kotlin.$_$.i4;
  var KtMutableList = kotlin_kotlin.$_$.m4;
  var ArrayList = kotlin_kotlin.$_$.c4;
  var copyToArray = kotlin_kotlin.$_$.j5;
  var Result = kotlin_kotlin.$_$.rb;
  var ensureNotNull = kotlin_kotlin.$_$.hc;
  var equals = kotlin_kotlin.$_$.z7;
  var getStringHashCode = kotlin_kotlin.$_$.e8;
  var isBlank = kotlin_kotlin.$_$.ea;
  var toList = kotlin_kotlin.$_$.q6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.z2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.f3;
  var toHashSet = kotlin_kotlin.$_$.o6;
  var toBooleanArray = kotlin_kotlin.$_$.n6;
  var withIndex = kotlin_kotlin.$_$.v6;
  var to = kotlin_kotlin.$_$.qc;
  var lazy_0 = kotlin_kotlin.$_$.mc;
  var contentEquals = kotlin_kotlin.$_$.x4;
  var initMetadataForObject = kotlin_kotlin.$_$.m8;
  var Char = kotlin_kotlin.$_$.kb;
  var Instant = kotlin_kotlin.$_$.gb;
  var Companion_getInstance = kotlin_kotlin.$_$.l2;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.h;
  var Duration = kotlin_kotlin.$_$.fb;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.k2;
  var Uuid = kotlin_kotlin.$_$.jb;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.m2;
  var toIntOrNull = kotlin_kotlin.$_$.ua;
  var hashCode = kotlin_kotlin.$_$.f8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.k3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.l3;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.j3;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.a3;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.g3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.c3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.d3;
  var isArray = kotlin_kotlin.$_$.n8;
  var arrayIterator = kotlin_kotlin.$_$.n7;
  var until = kotlin_kotlin.$_$.l9;
  var step = kotlin_kotlin.$_$.j9;
  var getValue = kotlin_kotlin.$_$.r5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h8;
  var get_lastIndex = kotlin_kotlin.$_$.x5;
  var shiftLeft = kotlin_kotlin.$_$.k7;
  var countTrailingZeroBits = kotlin_kotlin.$_$.fc;
  var getOrNull = kotlin_kotlin.$_$.q5;
  var indexOf = kotlin_kotlin.$_$.s5;
  var contentToString = kotlin_kotlin.$_$.z4;
  var Enum = kotlin_kotlin.$_$.nb;
  var joinToString = kotlin_kotlin.$_$.w5;
  var toString_0 = kotlin_kotlin.$_$.pc;
  var KTypeParameter = kotlin_kotlin.$_$.t9;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.e3;
  var booleanArray = kotlin_kotlin.$_$.o7;
  var emptyMap = kotlin_kotlin.$_$.m5;
  var contentHashCode = kotlin_kotlin.$_$.y4;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.n2;
  var isCharArray = kotlin_kotlin.$_$.q8;
  var charArray = kotlin_kotlin.$_$.r7;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.c2;
  var isDoubleArray = kotlin_kotlin.$_$.s8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.d2;
  var isFloatArray = kotlin_kotlin.$_$.t8;
  var Companion_instance = kotlin_kotlin.$_$.o2;
  var isLongArray = kotlin_kotlin.$_$.f7;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.s2;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.p1;
  var ULongArray = kotlin_kotlin.$_$.zb;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.l1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i1;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.n1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.e2;
  var isIntArray = kotlin_kotlin.$_$.u8;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.r2;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.g1;
  var UIntArray = kotlin_kotlin.$_$.xb;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.c1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.e1;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.f2;
  var isShortArray = kotlin_kotlin.$_$.w8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.t2;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.y1;
  var UShortArray = kotlin_kotlin.$_$.bc;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.u1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r1;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.w1;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.b2;
  var isByteArray = kotlin_kotlin.$_$.p8;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.q2;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.x;
  var UByteArray = kotlin_kotlin.$_$.vb;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.u;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.v;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.a2;
  var isBooleanArray = kotlin_kotlin.$_$.o8;
  var coerceAtLeast = kotlin_kotlin.$_$.f9;
  var copyOf = kotlin_kotlin.$_$.d5;
  var copyOf_0 = kotlin_kotlin.$_$.f5;
  var copyOf_1 = kotlin_kotlin.$_$.g5;
  var copyOf_2 = kotlin_kotlin.$_$.b5;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.q1;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.m1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.o1;
  var copyOf_3 = kotlin_kotlin.$_$.i5;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.h1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.d1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.f1;
  var copyOf_4 = kotlin_kotlin.$_$.a5;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.z1;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.v1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.x1;
  var copyOf_5 = kotlin_kotlin.$_$.e5;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.y;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.t;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.w;
  var copyOf_6 = kotlin_kotlin.$_$.c5;
  var Unit = kotlin_kotlin.$_$.dc;
  var trimIndent = kotlin_kotlin.$_$.db;
  var charSequenceLength = kotlin_kotlin.$_$.u7;
  var lastOrNull = kotlin_kotlin.$_$.z5;
  var get_lastIndex_0 = kotlin_kotlin.$_$.y5;
  var ULong = kotlin_kotlin.$_$.ac;
  var UInt = kotlin_kotlin.$_$.yb;
  var UByte = kotlin_kotlin.$_$.wb;
  var UShort = kotlin_kotlin.$_$.cc;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nc;
  var asSequence = kotlin_kotlin.$_$.t4;
  var get_js = kotlin_kotlin.$_$.x8;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i2;
  var findAssociatedObject = kotlin_kotlin.$_$.a;
  var get_indices = kotlin_kotlin.$_$.v5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.w3;
  var get_indices_0 = kotlin_kotlin.$_$.u5;
  var get_longArrayClass = kotlin_kotlin.$_$.g7;
  var mapOf = kotlin_kotlin.$_$.d6;
  var Companion_instance_0 = kotlin_kotlin.$_$.p2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.n;
  var createFailure = kotlin_kotlin.$_$.gc;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SealedClassSerializer$$inlined$groupingBy$1);
  initMetadataForClass(SealedClassSerializer, 'SealedClassSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.ok(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.jo(descriptor, index, deserializer, previousValue) : $super.jo.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.xn(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.nk(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.mk().xl();
    if (isNullabilitySupported) {
      return this.pp(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.so();
    } else {
      this.sp();
      this.pp(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForObject(InstantSerializer, 'InstantSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NoOpEncoder, 'NoOpEncoder', VOID, AbstractEncoder);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicModuleBuilder, 'PolymorphicModuleBuilder');
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.h15(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializersModuleBuilder, 'SerializersModuleBuilder', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', VOID, IllegalArgumentException);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function DeserializationStrategy() {
  }
  function SerializationStrategy() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this.qk_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.al('type', serializer_2(StringCompanionObject_instance).mk());
      $this$buildSerialDescriptor.al('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.pk_1.m() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.uk_1 = this$0.qk_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.pk_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.mk();
    }, 1, 0, 3);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.pk_1 = baseClass;
    this.qk_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.rk_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).bl = function () {
    return this.pk_1;
  };
  protoOf(PolymorphicSerializer).mk = function () {
    var tmp0 = this.rk_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.s2();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.pk_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.dl(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.bl());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.el(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(getKClassFromExpression(value), _this__u8e3s4.bl());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.gl_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this$0.jl_1.f1().r();
      while (_iterator__ex2g4s.s()) {
        var element = _iterator__ex2g4s.t();
        // Inline function 'kotlin.collections.component1' call
        var name = element.r2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.s2();
        $this$buildSerialDescriptor.al(name, serializer.mk());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.al('type', serializer_2(StringCompanionObject_instance).mk());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.fl_1.m() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.al('value', elementDescriptor);
      $this$buildSerialDescriptor.uk_1 = this$0.gl_1;
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function SealedClassSerializer$_get_descriptor_$ref_m511rz() {
    return constructCallableReference(function (p0) {
      return p0.mk();
    }, 1, 0, 4);
  }
  function SealedClassSerializer$$inlined$groupingBy$1($this) {
    this.kl_1 = $this;
  }
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).ll = function () {
    return this.kl_1.r();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).ml = function (element) {
    return element.s2().mk().nl();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).ol = function (element) {
    return this.ml(element);
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.fl_1 = baseClass;
    this.gl_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.hl_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.fl_1.m() + ' should be marked @Serializable');
    }
    this.il_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.il_1.f1();
    // Inline function 'kotlin.collections.aggregate' call
    var tmp0 = new SealedClassSerializer$$inlined$groupingBy$1(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.collections.aggregateTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.ll();
    while (_iterator__ex2g4s.s()) {
      var e = _iterator__ex2g4s.t();
      var key = tmp0.ol(e);
      var accumulator = destination.q2(key);
      accumulator == null && !destination.o2(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + toString(this.fl_1) + "' have the same serial name '" + key + "':" + (" '" + toString(accumulator.r2()) + "', '" + toString(e.r2()) + "'");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      destination.k2(key, e);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.a1()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = destination.f1().r();
    while (_iterator__ex2g4s_0.s()) {
      var element = _iterator__ex2g4s_0.t();
      var tmp_2 = element.r2();
      var tmp$ret$12 = element.s2().s2();
      destination_0.k2(tmp_2, tmp$ret$12);
    }
    tmp_1.jl_1 = destination_0;
  }
  protoOf(SealedClassSerializer).bl = function () {
    return this.fl_1;
  };
  protoOf(SealedClassSerializer).mk = function () {
    var tmp0 = this.hl_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, SealedClassSerializer$_get_descriptor_$ref_m511rz(), null);
    return tmp0.s2();
  };
  protoOf(SealedClassSerializer).dl = function (decoder, klassName) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.jl_1;
    var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).q2(klassName);
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).dl.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  protoOf(SealedClassSerializer).el = function (encoder, value) {
    var tmp0_elvis_lhs = this.il_1.q2(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).el.call(this, encoder, value) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, SerializationStrategy) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  };
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    var tmp0_message = missingFields.a1() === 1 ? "Field '" + missingFields.b1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing";
    MissingFieldException.call($this, tmp0_message, null, missingFields, serialName);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause, missingFields, serialName) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.pl_1 = missingFields;
    this.ql_1 = serialName;
  }
  protoOf(MissingFieldException).rl = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.pl_1, this.ql_1);
  };
  function serializer(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializer_0(type) {
    return serializer_1(EmptySerializersModule_0(), type);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializer_1(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.j();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.i();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.r();
    while (_iterator__ex2g4s.s()) {
      var item = _iterator__ex2g4s.t();
      var tmp$ret$2 = typeOrThrow(item);
      destination.y(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.p()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.tl(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.sl()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        tmp_1 = _Result___get_isFailure__impl__jpiriv(this_1) ? null : _Result___get_value__impl__bjfvqg(this_1);
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_2;
    if (typeArguments.p()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.tl(rootClass) : tmp0_elvis_lhs;
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_3 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      tmp_2 = tmp_3;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var serializers = tmp_4;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.ul(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_5;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp4_elvis_lhs;
      }
      tmp_2 = tmp_5;
    }
    var contextualSerializer = tmp_2;
    var tmp_6;
    if (contextualSerializer == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_6 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_6;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.r();
      while (_iterator__ex2g4s.s()) {
        var item = _iterator__ex2g4s.t();
        var tmp$ret$2 = serializer_1(_this__u8e3s4, item);
        destination.y(tmp$ret$2);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.r();
      while (_iterator__ex2g4s_0.s()) {
        var item_0 = _iterator__ex2g4s_0.t();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$5 = tmp_0;
        destination_0.y(tmp$ret$5);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.b1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.b1(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.b1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.b1(0), serializers.b1(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.b1(0), serializers.b1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.b1(0), serializers.b1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.b1(0), serializers.b1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.b1(0), serializers.b1(1), serializers.b1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.b1(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.b1(0).h();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().vl(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().vl(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().wl(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().wl(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.b1(0).h();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.b1(0).h();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.mk().xl()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function serializer_2(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function serializer_3(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function serializer_7(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_17(_this__u8e3s4) {
    return InstantSerializer_getInstance();
  }
  function serializer_18(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.tl(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.mk();
    }
    return tmp;
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.cm_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.yl_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.bm_1 = original;
    this.cm_1 = kClass;
    this.dm_1 = this.bm_1.nl() + '<' + this.cm_1.m() + '>';
  }
  protoOf(ContextDescriptor).nl = function () {
    return this.dm_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.bm_1, another.bm_1) && another.cm_1.equals(this.cm_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.cm_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.dm_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.cm_1) + ', original: ' + toString(this.bm_1) + ')';
  };
  protoOf(ContextDescriptor).em = function () {
    return this.bm_1.em();
  };
  protoOf(ContextDescriptor).xl = function () {
    return this.bm_1.xl();
  };
  protoOf(ContextDescriptor).fm = function () {
    return this.bm_1.fm();
  };
  protoOf(ContextDescriptor).gm = function () {
    return this.bm_1.gm();
  };
  protoOf(ContextDescriptor).hm = function () {
    return this.bm_1.hm();
  };
  protoOf(ContextDescriptor).im = function (index) {
    return this.bm_1.im(index);
  };
  protoOf(ContextDescriptor).jm = function (name) {
    return this.bm_1.jm(name);
  };
  protoOf(ContextDescriptor).km = function (index) {
    return this.bm_1.km(index);
  };
  protoOf(ContextDescriptor).lm = function (index) {
    return this.bm_1.lm(index);
  };
  protoOf(ContextDescriptor).mm = function (index) {
    return this.bm_1.mm(index);
  };
  function SerialDescriptor() {
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementNames$1($this_elementNames) {
    this.om_1 = $this_elementNames;
    this.nm_1 = $this_elementNames.gm();
  }
  protoOf(elementNames$1).s = function () {
    return this.nm_1 > 0;
  };
  protoOf(elementNames$1).t = function () {
    var tmp = this.om_1.gm();
    var _unary__edvuaz = this.nm_1;
    this.nm_1 = _unary__edvuaz - 1 | 0;
    return this.om_1.im(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.pm_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).r = function () {
    return new elementNames$1(this.pm_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.rm_1 = $this_elementDescriptors;
    this.qm_1 = $this_elementDescriptors.gm();
  }
  protoOf(elementDescriptors$1).s = function () {
    return this.qm_1 > 0;
  };
  protoOf(elementDescriptors$1).t = function () {
    var tmp = this.rm_1.gm();
    var _unary__edvuaz = this.qm_1;
    this.qm_1 = _unary__edvuaz - 1 | 0;
    return this.rm_1.lm(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.sm_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).r = function () {
    return new elementDescriptors$1(this.sm_1);
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.vk_1.a1(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.sk_1 = serialName;
    this.tk_1 = false;
    this.uk_1 = emptyList();
    this.vk_1 = ArrayList_init_$Create$_0();
    this.wk_1 = HashSet_init_$Create$();
    this.xk_1 = ArrayList_init_$Create$_0();
    this.yk_1 = ArrayList_init_$Create$_0();
    this.zk_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).tm = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.wk_1.y(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.sk_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.vk_1.y(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.xk_1.y(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.yk_1.y(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.zk_1.y(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).al = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.tm(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.tm.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.vk_1.a1(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.fn_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.s2();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.en_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 5);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.um_1 = serialName;
    this.vm_1 = kind;
    this.wm_1 = elementsCount;
    this.xm_1 = builder.uk_1;
    this.ym_1 = toHashSet(builder.vk_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.vk_1;
    tmp.zm_1 = copyToArray(this_0);
    this.an_1 = compactArray(builder.xk_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.yk_1;
    tmp_0.bn_1 = copyToArray(this_1);
    this.cn_1 = toBooleanArray(builder.zk_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.zm_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.r();
    while (_iterator__ex2g4s.s()) {
      var item = _iterator__ex2g4s.t();
      var tmp$ret$4 = to(item.jd_1, item.id_1);
      destination.y(tmp$ret$4);
    }
    tmp_1.dn_1 = toMap(destination);
    this.en_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.fn_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).nl = function () {
    return this.um_1;
  };
  protoOf(SerialDescriptorImpl).em = function () {
    return this.vm_1;
  };
  protoOf(SerialDescriptorImpl).gm = function () {
    return this.wm_1;
  };
  protoOf(SerialDescriptorImpl).hm = function () {
    return this.xm_1;
  };
  protoOf(SerialDescriptorImpl).gn = function () {
    return this.ym_1;
  };
  protoOf(SerialDescriptorImpl).im = function (index) {
    return getChecked(this.zm_1, index);
  };
  protoOf(SerialDescriptorImpl).jm = function (name) {
    var tmp0_elvis_lhs = this.dn_1.q2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).km = function (index) {
    return getChecked(this.bn_1, index);
  };
  protoOf(SerialDescriptorImpl).lm = function (index) {
    return getChecked(this.an_1, index);
  };
  protoOf(SerialDescriptorImpl).mm = function (index) {
    return getChecked_0(this.cn_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.nl() === other.nl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.en_1, other.en_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.gm() === other.gm())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.gm();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.lm(index).nl() === other.lm(index).nl())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.lm(index).em(), other.lm(index).em())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    return toStringImpl(this);
  };
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).m());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).hn = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).in = function () {
    return true;
  };
  protoOf(AbstractDecoder).jn = function () {
    return null;
  };
  protoOf(AbstractDecoder).kn = function () {
    var tmp = this.hn();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ln = function () {
    var tmp = this.hn();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).mn = function () {
    var tmp = this.hn();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).nn = function () {
    var tmp = this.hn();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).on = function () {
    var tmp = this.hn();
    return typeof tmp === 'bigint' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).pn = function () {
    var tmp = this.hn();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).qn = function () {
    var tmp = this.hn();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).rn = function () {
    var tmp = this.hn();
    return tmp instanceof Char ? tmp.r1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).sn = function () {
    var tmp = this.hn();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).tn = function (enumDescriptor) {
    var tmp = this.hn();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).un = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).vn = function (deserializer, previousValue) {
    return this.wn(deserializer);
  };
  protoOf(AbstractDecoder).xn = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).yn = function (descriptor) {
  };
  protoOf(AbstractDecoder).zn = function (descriptor, index) {
    return this.kn();
  };
  protoOf(AbstractDecoder).ao = function (descriptor, index) {
    return this.ln();
  };
  protoOf(AbstractDecoder).bo = function (descriptor, index) {
    return this.mn();
  };
  protoOf(AbstractDecoder).co = function (descriptor, index) {
    return this.nn();
  };
  protoOf(AbstractDecoder).do = function (descriptor, index) {
    return this.on();
  };
  protoOf(AbstractDecoder).eo = function (descriptor, index) {
    return this.pn();
  };
  protoOf(AbstractDecoder).fo = function (descriptor, index) {
    return this.qn();
  };
  protoOf(AbstractDecoder).go = function (descriptor, index) {
    return this.rn();
  };
  protoOf(AbstractDecoder).ho = function (descriptor, index) {
    return this.sn();
  };
  protoOf(AbstractDecoder).io = function (descriptor, index) {
    return this.un(descriptor.lm(index));
  };
  protoOf(AbstractDecoder).jo = function (descriptor, index, deserializer, previousValue) {
    return this.vn(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).lo = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.mk().xl();
    var tmp;
    if (isNullabilitySupported || this.in()) {
      tmp = this.vn(deserializer, previousValue);
    } else {
      tmp = this.jn();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).xn = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).yn = function (descriptor) {
  };
  protoOf(AbstractEncoder).qo = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).ro = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).so = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).to = function (value) {
    return this.ro(value);
  };
  protoOf(AbstractEncoder).uo = function (value) {
    return this.ro(value);
  };
  protoOf(AbstractEncoder).vo = function (value) {
    return this.ro(value);
  };
  protoOf(AbstractEncoder).wo = function (value) {
    return this.ro(value);
  };
  protoOf(AbstractEncoder).xo = function (value) {
    return this.ro(value);
  };
  protoOf(AbstractEncoder).yo = function (value) {
    return this.ro(value);
  };
  protoOf(AbstractEncoder).zo = function (value) {
    return this.ro(value);
  };
  protoOf(AbstractEncoder).ap = function (value) {
    return this.ro(new Char(value));
  };
  protoOf(AbstractEncoder).bp = function (value) {
    return this.ro(value);
  };
  protoOf(AbstractEncoder).cp = function (enumDescriptor, index) {
    return this.ro(index);
  };
  protoOf(AbstractEncoder).dp = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).ep = function (descriptor, index, value) {
    if (this.qo(descriptor, index)) {
      this.to(value);
    }
  };
  protoOf(AbstractEncoder).fp = function (descriptor, index, value) {
    if (this.qo(descriptor, index)) {
      this.uo(value);
    }
  };
  protoOf(AbstractEncoder).gp = function (descriptor, index, value) {
    if (this.qo(descriptor, index)) {
      this.vo(value);
    }
  };
  protoOf(AbstractEncoder).hp = function (descriptor, index, value) {
    if (this.qo(descriptor, index)) {
      this.wo(value);
    }
  };
  protoOf(AbstractEncoder).ip = function (descriptor, index, value) {
    if (this.qo(descriptor, index)) {
      this.xo(value);
    }
  };
  protoOf(AbstractEncoder).jp = function (descriptor, index, value) {
    if (this.qo(descriptor, index)) {
      this.yo(value);
    }
  };
  protoOf(AbstractEncoder).kp = function (descriptor, index, value) {
    if (this.qo(descriptor, index)) {
      this.zo(value);
    }
  };
  protoOf(AbstractEncoder).lp = function (descriptor, index, value) {
    if (this.qo(descriptor, index)) {
      this.ap(value);
    }
  };
  protoOf(AbstractEncoder).mp = function (descriptor, index, value) {
    if (this.qo(descriptor, index)) {
      this.bp(value);
    }
  };
  protoOf(AbstractEncoder).np = function (descriptor, index) {
    return this.qo(descriptor, index) ? this.dp(descriptor.lm(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).op = function (descriptor, index, serializer, value) {
    if (this.qo(descriptor, index)) {
      this.pp(serializer, value);
    }
  };
  protoOf(AbstractEncoder).qp = function (descriptor, index, serializer, value) {
    if (this.qo(descriptor, index)) {
      this.rp(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.ho($this.mk(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.ko($this.mk(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).cl = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer_0(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.mk();
    var composite = encoder.xn(descriptor);
    composite.mp(this.mk(), 0, actualSerializer.mk().nl());
    var tmp = this.mk();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$2 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.op(tmp, 1, tmp$ret$2, value);
    composite.yn(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).nk = function (encoder, value) {
    return this.cl(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).ok = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.mk();
    var composite = decoder.xn(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.no()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.oo(this.mk());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.ho(this.mk(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer(this, composite, klassName);
            value = composite.ko(this.mk(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp0_0 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_0 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$1 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$1;
    composite.yn(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).dl = function (decoder, klassName) {
    return decoder.mo().vp(this.bl(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).el = function (encoder, value) {
    return encoder.mo().wp(this.bl(), value);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.m() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.m() + "' has to be sealed and '@Serializable'."));
  }
  function throwSubtypeNotRegistered_0(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.m();
    throwSubtypeNotRegistered(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.xp_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).mk = function () {
    return this.xp_1;
  };
  protoOf(InstantSerializer).yp = function (encoder, value) {
    encoder.bp(value.toString());
  };
  protoOf(InstantSerializer).nk = function (encoder, value) {
    return this.yp(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).ok = function (decoder) {
    return Companion_getInstance().eh(decoder.sn());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.zp_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).mk = function () {
    return this.zp_1;
  };
  protoOf(NothingSerializer_0).aq = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).nk = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.aq(encoder, tmp);
  };
  protoOf(NothingSerializer_0).ok = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.bq_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).mk = function () {
    return this.bq_1;
  };
  protoOf(DurationSerializer).cq = function (encoder, value) {
    encoder.bp(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).nk = function (encoder, value) {
    return this.cq(encoder, value instanceof Duration ? value.sg_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).dq = function (decoder) {
    return Companion_getInstance_0().tg(decoder.sn());
  };
  protoOf(DurationSerializer).ok = function (decoder) {
    return new Duration(this.dq(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.eq_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).mk = function () {
    return this.eq_1;
  };
  protoOf(UuidSerializer).fq = function (encoder, value) {
    encoder.bp(value.toString());
  };
  protoOf(UuidSerializer).nk = function (encoder, value) {
    return this.fq(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).ok = function (decoder) {
    return Companion_getInstance_1().pi(decoder.sn());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).nl = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).nl = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).nl = function () {
    return 'kotlin.collections.HashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).nl = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.iq_1 = elementDescriptor;
    this.jq_1 = 1;
  }
  protoOf(ListLikeDescriptor).em = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).gm = function () {
    return this.jq_1;
  };
  protoOf(ListLikeDescriptor).im = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).jm = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).mm = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.nl() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).km = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.nl() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).lm = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.nl() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.iq_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.iq_1, other.iq_1) && this.nl() === other.nl())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.iq_1), 31) + getStringHashCode(this.nl()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.nl() + '(' + toString(this.iq_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.kq_1 = serialName;
    this.lq_1 = keyDescriptor;
    this.mq_1 = valueDescriptor;
    this.nq_1 = 2;
  }
  protoOf(MapLikeDescriptor).nl = function () {
    return this.kq_1;
  };
  protoOf(MapLikeDescriptor).em = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).gm = function () {
    return this.nq_1;
  };
  protoOf(MapLikeDescriptor).im = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).jm = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).mm = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.nl() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).km = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.nl() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).lm = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.nl() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.lq_1;
        break;
      case 1:
        tmp = this.mq_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.nl() === other.nl()))
      return false;
    if (!equals(this.lq_1, other.lq_1))
      return false;
    if (!equals(this.mq_1, other.mq_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.nl());
    result = imul(31, result) + hashCode(this.lq_1) | 0;
    result = imul(31, result) + hashCode(this.mq_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.nl() + '(' + toString(this.lq_1) + ', ' + toString(this.mq_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.wq_1 = primitive.nl() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).nl = function () {
    return this.wq_1;
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.yq_1 = new LinkedHashSetClassDesc(eSerializer.mk());
  }
  protoOf(LinkedHashSetSerializer).mk = function () {
    return this.yq_1;
  };
  protoOf(LinkedHashSetSerializer).zq = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).ar = function (_this__u8e3s4) {
    return _this__u8e3s4.a1();
  };
  protoOf(LinkedHashSetSerializer).br = function (_this__u8e3s4) {
    return this.ar(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).cr = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).dr = function (_this__u8e3s4) {
    return this.cr(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).er = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).fr = function (_this__u8e3s4) {
    return this.er((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).gr = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).hr = function (_this__u8e3s4, size) {
    return this.gr(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).ir = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y(element);
  };
  protoOf(LinkedHashSetSerializer).jr = function (_this__u8e3s4, index, element) {
    return this.ir(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.vr_1 = new LinkedHashMapClassDesc(kSerializer.mk(), vSerializer.mk());
  }
  protoOf(LinkedHashMapSerializer).mk = function () {
    return this.vr_1;
  };
  protoOf(LinkedHashMapSerializer).wr = function (_this__u8e3s4) {
    return _this__u8e3s4.a1();
  };
  protoOf(LinkedHashMapSerializer).xr = function (_this__u8e3s4) {
    return this.wr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).yr = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.f1().r();
  };
  protoOf(LinkedHashMapSerializer).zr = function (_this__u8e3s4) {
    return this.yr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).zq = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).as = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.a1(), 2);
  };
  protoOf(LinkedHashMapSerializer).br = function (_this__u8e3s4) {
    return this.as(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).bs = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).dr = function (_this__u8e3s4) {
    return this.bs(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).cs = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).fr = function (_this__u8e3s4) {
    return this.cs((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ds = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).hr = function (_this__u8e3s4, size) {
    return this.ds(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.js_1 = new ArrayListClassDesc(element.mk());
  }
  protoOf(ArrayListSerializer).mk = function () {
    return this.js_1;
  };
  protoOf(ArrayListSerializer).zq = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).ks = function (_this__u8e3s4) {
    return _this__u8e3s4.a1();
  };
  protoOf(ArrayListSerializer).br = function (_this__u8e3s4) {
    return this.ks(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ls = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).dr = function (_this__u8e3s4) {
    return this.ls(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ms = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).fr = function (_this__u8e3s4) {
    return this.ms((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ns = function (_this__u8e3s4, size) {
    return _this__u8e3s4.m5(size);
  };
  protoOf(ArrayListSerializer).hr = function (_this__u8e3s4, size) {
    return this.ns(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).os = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.z2(index, element);
  };
  protoOf(ArrayListSerializer).jr = function (_this__u8e3s4, index, element) {
    return this.os(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.qs_1 = new HashSetClassDesc(eSerializer.mk());
  }
  protoOf(HashSetSerializer).mk = function () {
    return this.qs_1;
  };
  protoOf(HashSetSerializer).zq = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).rs = function (_this__u8e3s4) {
    return _this__u8e3s4.a1();
  };
  protoOf(HashSetSerializer).br = function (_this__u8e3s4) {
    return this.rs(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).ss = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).dr = function (_this__u8e3s4) {
    return this.ss(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).er = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).fr = function (_this__u8e3s4) {
    return this.er((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).ts = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).hr = function (_this__u8e3s4, size) {
    return this.ts(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).us = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y(element);
  };
  protoOf(HashSetSerializer).jr = function (_this__u8e3s4, index, element) {
    return this.us(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.xs_1 = new HashMapClassDesc(kSerializer.mk(), vSerializer.mk());
  }
  protoOf(HashMapSerializer).mk = function () {
    return this.xs_1;
  };
  protoOf(HashMapSerializer).wr = function (_this__u8e3s4) {
    return _this__u8e3s4.a1();
  };
  protoOf(HashMapSerializer).xr = function (_this__u8e3s4) {
    return this.wr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).yr = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.f1().r();
  };
  protoOf(HashMapSerializer).zr = function (_this__u8e3s4) {
    return this.yr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).zq = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).ys = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.a1(), 2);
  };
  protoOf(HashMapSerializer).br = function (_this__u8e3s4) {
    return this.ys(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).zs = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).dr = function (_this__u8e3s4) {
    return this.zs(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).cs = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).fr = function (_this__u8e3s4) {
    return this.cs((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).at = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).hr = function (_this__u8e3s4, size) {
    return this.at(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.ct_1 = kClass;
    this.dt_1 = new ArrayClassDesc(eSerializer.mk());
  }
  protoOf(ReferenceArraySerializer).mk = function () {
    return this.dt_1;
  };
  protoOf(ReferenceArraySerializer).et = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).xr = function (_this__u8e3s4) {
    return this.et((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ft = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).zr = function (_this__u8e3s4) {
    return this.ft((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).zq = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).gt = function (_this__u8e3s4) {
    return _this__u8e3s4.a1();
  };
  protoOf(ReferenceArraySerializer).br = function (_this__u8e3s4) {
    return this.gt(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ht = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.ct_1);
  };
  protoOf(ReferenceArraySerializer).dr = function (_this__u8e3s4) {
    return this.ht(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).it = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).fr = function (_this__u8e3s4) {
    return this.it((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).jt = function (_this__u8e3s4, size) {
    return _this__u8e3s4.m5(size);
  };
  protoOf(ReferenceArraySerializer).hr = function (_this__u8e3s4, size) {
    return this.jt(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).kt = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.z2(index, element);
  };
  protoOf(ReferenceArraySerializer).jr = function (_this__u8e3s4, index, element) {
    return this.kt(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).lr = function (_this__u8e3s4) {
    return _this__u8e3s4.a1();
  };
  protoOf(CollectionSerializer).xr = function (_this__u8e3s4) {
    return this.lr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).mr = function (_this__u8e3s4) {
    return _this__u8e3s4.r();
  };
  protoOf(CollectionSerializer).zr = function (_this__u8e3s4) {
    return this.mr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.es_1 = keySerializer;
    this.fs_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).gs = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.i1_1;
    var last = progression.j1_1;
    var step_0 = progression.k1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.hs(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).pr = function (decoder, builder, startIndex, size) {
    return this.gs(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).hs = function (decoder, index, builder, checkIndex) {
    var key = decoder.ko(this.mk(), index, this.es_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.oo(this.mk());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.o2(key)) {
      var tmp_2 = this.fs_1.mk().em();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.jo(this.mk(), vIndex, this.fs_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.ko(this.mk(), vIndex, this.fs_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.k2(key, value);
  };
  protoOf(MapLikeSerializer).qr = function (decoder, index, builder, checkIndex) {
    return this.hs(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).or = function (encoder, value) {
    var size = this.xr(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.mk();
    var composite = encoder.tp(descriptor, size);
    var iterator = this.zr(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      // Inline function 'kotlin.collections.component1' call
      var k = element.r2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.s2();
      var tmp = this.mk();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.op(tmp, _unary__edvuaz, this.es_1, k);
      var tmp_0 = this.mk();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.op(tmp_0, _unary__edvuaz_0, this.fs_1, v);
    }
    composite.yn(descriptor);
  };
  protoOf(MapLikeSerializer).nk = function (encoder, value) {
    return this.or(encoder, value);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.nr_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).or = function (encoder, value) {
    var size = this.xr(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.mk();
    var composite = encoder.tp(descriptor, size);
    var iterator = this.zr(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.op(this.mk(), index, this.nr_1, iterator.t());
      }
       while (inductionVariable < size);
    composite.yn(descriptor);
  };
  protoOf(CollectionLikeSerializer).nk = function (encoder, value) {
    return this.or(encoder, value);
  };
  protoOf(CollectionLikeSerializer).pr = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.qr(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).qr = function (decoder, index, builder, checkIndex) {
    this.jr(builder, index, decoder.ko(this.mk(), index, this.nr_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.po($this.mk());
    $this.hr(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).sr = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.fr(previous);
    var builder = tmp1_elvis_lhs == null ? this.zq() : tmp1_elvis_lhs;
    var startIndex = this.br(builder);
    var compositeDecoder = decoder.xn(this.mk());
    if (compositeDecoder.no()) {
      this.pr(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.oo(this.mk());
        if (index === -1)
          break $l$loop;
        this.rr(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.yn(this.mk());
    return this.dr(builder);
  };
  protoOf(AbstractCollectionSerializer).ok = function (decoder) {
    return this.sr(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).rr = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.qr(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.qr.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.mt_1 = new PrimitiveArrayDescriptor(primitiveSerializer.mk());
  }
  protoOf(PrimitiveArraySerializer).mk = function () {
    return this.mt_1;
  };
  protoOf(PrimitiveArraySerializer).nt = function (_this__u8e3s4) {
    return _this__u8e3s4.ot();
  };
  protoOf(PrimitiveArraySerializer).br = function (_this__u8e3s4) {
    return this.nt(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).pt = function (_this__u8e3s4) {
    return _this__u8e3s4.qt();
  };
  protoOf(PrimitiveArraySerializer).dr = function (_this__u8e3s4) {
    return this.pt(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).rt = function (_this__u8e3s4, size) {
    return _this__u8e3s4.st(size);
  };
  protoOf(PrimitiveArraySerializer).hr = function (_this__u8e3s4, size) {
    return this.rt(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).tt = function (_this__u8e3s4) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).zr = function (_this__u8e3s4) {
    return this.tt(_this__u8e3s4);
  };
  protoOf(PrimitiveArraySerializer).ut = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).jr = function (_this__u8e3s4, index, element) {
    return this.ut(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).zq = function () {
    return this.fr(this.vt());
  };
  protoOf(PrimitiveArraySerializer).yt = function (encoder, value) {
    var size = this.xr(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.mt_1;
    var composite = encoder.tp(descriptor, size);
    this.xt(composite, value, size);
    composite.yn(descriptor);
  };
  protoOf(PrimitiveArraySerializer).nk = function (encoder, value) {
    return this.yt(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).or = function (encoder, value) {
    return this.yt(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).ok = function (decoder) {
    return this.sr(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).zt = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.ot() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.st(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.st.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_1 = this;
    this.au_1 = new BigInt64Array(0);
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = new BigInt64Array(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = shiftLeft(-1n, elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.eu_1[slot] = $this.eu_1[slot] | shiftLeft(1n, offsetInSlot);
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.eu_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.eu_1[slot];
        while (!(slotMarks === -1n)) {
          var indexInSlot = countTrailingZeroBits(~slotMarks);
          slotMarks = slotMarks | shiftLeft(1n, indexInSlot);
          var index = slotOffset + indexInSlot | 0;
          if ($this.cu_1($this.bu_1, index)) {
            $this.eu_1[slot] = slotMarks;
            return index;
          }
        }
        $this.eu_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.bu_1 = descriptor;
    this.cu_1 = readIfAbsent;
    var elementsCount = this.bu_1.gm();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = 0n;
      } else {
        tmp_0 = shiftLeft(-1n, elementsCount);
      }
      tmp.du_1 = tmp_0;
      this.eu_1 = Companion_getInstance_7().au_1;
    } else {
      this.du_1 = 0n;
      this.eu_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).fu = function (index) {
    if (index < 64) {
      this.du_1 = this.du_1 | shiftLeft(1n, index);
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).gu = function () {
    var elementsCount = this.bu_1.gm();
    while (!(this.du_1 === -1n)) {
      var index = countTrailingZeroBits(~this.du_1);
      this.du_1 = this.du_1 | shiftLeft(1n, index);
      if (this.cu_1(this.bu_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createAnnotatedEnumSerializer(serialName, values, names, entryAnnotations, classAnnotations) {
    var descriptor = new EnumDescriptor(serialName, values.length);
    if (classAnnotations == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable = 0;
      var last = classAnnotations.length;
      while (inductionVariable < last) {
        var element = classAnnotations[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        descriptor.tu(element);
      }
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var inductionVariable_0 = 0;
    var last_0 = values.length;
    while (inductionVariable_0 < last_0) {
      var item = values[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var tmp0_elvis_lhs = getOrNull(names, _unary__edvuaz);
      var elementName = tmp0_elvis_lhs == null ? item.b3_1 : tmp0_elvis_lhs;
      descriptor.uu(elementName);
      var tmp1_safe_receiver = getOrNull(entryAnnotations, _unary__edvuaz);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_1 = 0;
        var last_1 = tmp1_safe_receiver.length;
        while (inductionVariable_1 < last_1) {
          var element_0 = tmp1_safe_receiver[inductionVariable_1];
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          descriptor.vu(element_0);
        }
      }
    }
    return EnumSerializer_init_$Create$(serialName, values, descriptor);
  }
  function EnumSerializer_init_$Init$(serialName, values, descriptor, $this) {
    EnumSerializer.call($this, serialName, values);
    $this.xu_1 = descriptor;
    return $this;
  }
  function EnumSerializer_init_$Create$(serialName, values, descriptor) {
    return EnumSerializer_init_$Init$(serialName, values, descriptor, objectCreate(protoOf(EnumSerializer)));
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.wu_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.wu_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.uu(element.b3_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.xu_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.mk();
    }, 1, 0, 6);
  }
  function EnumSerializer(serialName, values) {
    this.wu_1 = values;
    this.xu_1 = null;
    var tmp = this;
    tmp.yu_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).mk = function () {
    var tmp0 = this.yu_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.s2();
  };
  protoOf(EnumSerializer).zu = function (encoder, value) {
    var index = indexOf(this.wu_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.mk().nl() + ', ' + ('must be one of ' + contentToString(this.wu_1)));
    }
    encoder.cp(this.mk(), index);
  };
  protoOf(EnumSerializer).nk = function (encoder, value) {
    return this.zu(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).ok = function (decoder) {
    var index = decoder.tn(this.mk());
    if (!(0 <= index ? index <= (this.wu_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.mk().nl() + ' enum values, ' + ('values size is ' + this.wu_1.length));
    }
    return this.wu_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.mk().nl() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.nv_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.s2();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.im(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return constructCallableReference(function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    }, 1, 0, 7);
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.mv_1 = ENUM_getInstance();
    var tmp = this;
    tmp.nv_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).em = function () {
    return this.mv_1;
  };
  protoOf(EnumDescriptor).lm = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.em() === ENUM_getInstance()))
      return false;
    if (!(this.nl() === other.nl()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.nl() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.nl());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.cw_1 = true;
  }
  protoOf(InlineClassDescriptor).fm = function () {
    return this.cw_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.nl() === other.nl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.cw_1 && contentEquals(this.ov(), other.ov()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.gm() === other.gm())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.gm();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.lm(index).nl() === other.lm(index).nl())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.lm(index).em(), other.lm(index).em())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.dw_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.dw_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).mk = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).nk = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ok = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.rl(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.gw_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).mo = function () {
    return this.gw_1;
  };
  protoOf(NoOpEncoder).ro = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).so = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).to = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).uo = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).vo = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).wo = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).xo = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).yo = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).zo = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ap = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).bp = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).cp = function (enumDescriptor, index) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.hw_1 = OBJECT_getInstance();
    this.iw_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).em = function () {
    return this.hw_1;
  };
  protoOf(NothingSerialDescriptor).nl = function () {
    return this.iw_1;
  };
  protoOf(NothingSerialDescriptor).gm = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).im = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).jm = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).mm = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).lm = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).km = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.iw_1) + imul(31, this.hw_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.jw_1 = serializer;
    this.kw_1 = new SerialDescriptorForNullable(this.jw_1.mk());
  }
  protoOf(NullableSerializer).mk = function () {
    return this.kw_1;
  };
  protoOf(NullableSerializer).lw = function (encoder, value) {
    if (!(value == null)) {
      encoder.sp();
      encoder.pp(this.jw_1, value);
    } else {
      encoder.so();
    }
  };
  protoOf(NullableSerializer).nk = function (encoder, value) {
    return this.lw(encoder, value);
  };
  protoOf(NullableSerializer).ok = function (decoder) {
    return decoder.in() ? decoder.wn(this.jw_1) : decoder.jn();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.jw_1, other.jw_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.jw_1);
  };
  function SerialDescriptorForNullable(original) {
    this.yl_1 = original;
    this.zl_1 = this.yl_1.nl() + '?';
    this.am_1 = cachedSerialNames(this.yl_1);
  }
  protoOf(SerialDescriptorForNullable).nl = function () {
    return this.zl_1;
  };
  protoOf(SerialDescriptorForNullable).gn = function () {
    return this.am_1;
  };
  protoOf(SerialDescriptorForNullable).xl = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.yl_1, other.yl_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.yl_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.yl_1), 31);
  };
  protoOf(SerialDescriptorForNullable).em = function () {
    return this.yl_1.em();
  };
  protoOf(SerialDescriptorForNullable).fm = function () {
    return this.yl_1.fm();
  };
  protoOf(SerialDescriptorForNullable).gm = function () {
    return this.yl_1.gm();
  };
  protoOf(SerialDescriptorForNullable).hm = function () {
    return this.yl_1.hm();
  };
  protoOf(SerialDescriptorForNullable).im = function (index) {
    return this.yl_1.im(index);
  };
  protoOf(SerialDescriptorForNullable).jm = function (name) {
    return this.yl_1.jm(name);
  };
  protoOf(SerialDescriptorForNullable).km = function (index) {
    return this.yl_1.km(index);
  };
  protoOf(SerialDescriptorForNullable).lm = function (index) {
    return this.yl_1.lm(index);
  };
  protoOf(SerialDescriptorForNullable).mm = function (index) {
    return this.yl_1.mm(index);
  };
  function ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, $this) {
    ObjectSerializer.call($this, serialName, objectInstance);
    $this.nw_1 = asList(classAnnotations);
    return $this;
  }
  function ObjectSerializer_init_$Create$(serialName, objectInstance, classAnnotations) {
    return ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, objectCreate(protoOf(ObjectSerializer)));
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.uk_1 = this$0.nw_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return constructCallableReference(function (p0) {
      return p0.mk();
    }, 1, 0, 8);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.mw_1 = objectInstance;
    this.nw_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ow_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).mk = function () {
    var tmp0 = this.ow_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.s2();
  };
  protoOf(ObjectSerializer).cl = function (encoder, value) {
    encoder.xn(this.mk()).yn(this.mk());
  };
  protoOf(ObjectSerializer).nk = function (encoder, value) {
    return this.cl(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).ok = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.mk();
    var composite = decoder.xn(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.no()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.oo(this.mk());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.yn(descriptor);
    return this.mw_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function serializerNotRegistered(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4));
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.h();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.rf_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.rf_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.p())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.gn();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.gm());
    var inductionVariable = 0;
    var last = _this__u8e3s4.gm();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.im(i);
        result.y(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.m();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.im(i);
          missingFields.y(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.nl());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.qu_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.s2();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.su_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.s2();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.lu_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.lu_1[i];
        indices.k2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.iu_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ew();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return constructCallableReference(function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    }, 1, 0, 9);
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.iu_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fw();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2 = item.mk();
          destination.y(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.ov();
    }, 1, 0, 10);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ov());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 11);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.hu_1 = serialName;
    this.iu_1 = generatedSerializer;
    this.ju_1 = elementsCount;
    this.ku_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.ju_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.lu_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.ju_1;
    tmp_3.mu_1 = Array(size);
    this.nu_1 = null;
    this.ou_1 = booleanArray(this.ju_1);
    this.pu_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.qu_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.ru_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.su_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).nl = function () {
    return this.hu_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).gm = function () {
    return this.ju_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).em = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).hm = function () {
    var tmp0_elvis_lhs = this.nu_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).gn = function () {
    return this.pu_1.m2();
  };
  protoOf(PluginGeneratedSerialDescriptor).ov = function () {
    var tmp0 = this.ru_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.s2();
  };
  protoOf(PluginGeneratedSerialDescriptor).pv = function (name, isOptional) {
    this.ku_1 = this.ku_1 + 1 | 0;
    this.lu_1[this.ku_1] = name;
    this.ou_1[this.ku_1] = isOptional;
    this.mu_1[this.ku_1] = null;
    if (this.ku_1 === (this.ju_1 - 1 | 0)) {
      this.pu_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).uu = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.pv(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.pv.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).vu = function (annotation) {
    // Inline function 'kotlin.let' call
    var it = this.mu_1[this.ku_1];
    var tmp;
    if (it == null) {
      var result = ArrayList_init_$Create$(1);
      this.mu_1[this.ku_1] = result;
      tmp = result;
    } else {
      tmp = it;
    }
    var list = tmp;
    list.y(annotation);
  };
  protoOf(PluginGeneratedSerialDescriptor).tu = function (a) {
    if (this.nu_1 == null) {
      this.nu_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.nu_1).y(a);
  };
  protoOf(PluginGeneratedSerialDescriptor).lm = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).mk();
  };
  protoOf(PluginGeneratedSerialDescriptor).mm = function (index) {
    return getChecked_0(this.ou_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).km = function (index) {
    var tmp0_elvis_lhs = getChecked(this.mu_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).im = function (index) {
    return getChecked(this.lu_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).jm = function (name) {
    var tmp0_elvis_lhs = this.pu_1.q2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.nl() === other.nl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.ov(), other.ov())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.gm() === other.gm())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.gm();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.lm(index).nl() === other.lm(index).nl())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.lm(index).em(), other.lm(index).em())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.nl());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.nl();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.r();
    while (_iterator__ex2g4s_0.s()) {
      var element_0 = _iterator__ex2g4s_0.t();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.em();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.gm());
    var tmp_0 = _this__u8e3s4.nl() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.im(i) + ': ' + $this_toStringImpl.lm(i).nl();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  function SerializerFactory() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).sw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).xr = function (_this__u8e3s4) {
    return this.sw((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).tw = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).fr = function (_this__u8e3s4) {
    return this.tw((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).vt = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).uw = function (decoder, index, builder, checkIndex) {
    builder.xw(decoder.go(this.mt_1, index));
  };
  protoOf(CharArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    return this.uw(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    return this.uw(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).yw = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.lp(this.mt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).xt = function (encoder, content, size) {
    return this.yw(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).bx = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).xr = function (_this__u8e3s4) {
    return this.bx((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).cx = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).fr = function (_this__u8e3s4) {
    return this.cx((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).vt = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    builder.gx(decoder.fo(this.mt_1, index));
  };
  protoOf(DoubleArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    return this.dx(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    return this.dx(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).hx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.kp(this.mt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).xt = function (encoder, content, size) {
    return this.hx(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).kx = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).xr = function (_this__u8e3s4) {
    return this.kx((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).lx = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).fr = function (_this__u8e3s4) {
    return this.lx((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).vt = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).mx = function (decoder, index, builder, checkIndex) {
    builder.px(decoder.eo(this.mt_1, index));
  };
  protoOf(FloatArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    return this.mx(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    return this.mx(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).qx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.jp(this.mt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).xt = function (encoder, content, size) {
    return this.qx(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_instance));
  }
  protoOf(LongArraySerializer_0).tx = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).xr = function (_this__u8e3s4) {
    return this.tx((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).ux = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).fr = function (_this__u8e3s4) {
    return this.ux((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).vt = function () {
    return new BigInt64Array(0);
  };
  protoOf(LongArraySerializer_0).vx = function (decoder, index, builder, checkIndex) {
    builder.yx(decoder.do(this.mt_1, index));
  };
  protoOf(LongArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    return this.vx(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    return this.vx(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).zx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ip(this.mt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).xt = function (encoder, content, size) {
    return this.zx(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_3()));
  }
  protoOf(ULongArraySerializer_0).cy = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).xr = function (_this__u8e3s4) {
    return this.cy(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.zj_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).dy = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).fr = function (_this__u8e3s4) {
    return this.dy(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.zj_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).ey = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).vt = function () {
    return new ULongArray(this.ey());
  };
  protoOf(ULongArraySerializer_0).fy = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.io(this.mt_1, index).on();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.iy(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    return this.fy(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    return this.fy(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).jy = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.np(this.mt_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.xo(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).xt = function (encoder, content, size) {
    return this.jy(encoder, content instanceof ULongArray ? content.zj_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).my = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).xr = function (_this__u8e3s4) {
    return this.my((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).ny = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).fr = function (_this__u8e3s4) {
    return this.ny((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).vt = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).oy = function (decoder, index, builder, checkIndex) {
    builder.ry(decoder.co(this.mt_1, index));
  };
  protoOf(IntArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    return this.oy(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    return this.oy(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).sy = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.hp(this.mt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).xt = function (encoder, content, size) {
    return this.sy(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_4()));
  }
  protoOf(UIntArraySerializer_0).vy = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).xr = function (_this__u8e3s4) {
    return this.vy(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.oj_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).wy = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).fr = function (_this__u8e3s4) {
    return this.wy(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.oj_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).xy = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).vt = function () {
    return new UIntArray(this.xy());
  };
  protoOf(UIntArraySerializer_0).yy = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.io(this.mt_1, index).nn();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.bz(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    return this.yy(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    return this.yy(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).cz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.np(this.mt_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.wo(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).xt = function (encoder, content, size) {
    return this.cz(encoder, content instanceof UIntArray ? content.oj_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).fz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).xr = function (_this__u8e3s4) {
    return this.fz((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).gz = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).fr = function (_this__u8e3s4) {
    return this.gz((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).vt = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).hz = function (decoder, index, builder, checkIndex) {
    builder.kz(decoder.bo(this.mt_1, index));
  };
  protoOf(ShortArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    return this.hz(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    return this.hz(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).lz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.gp(this.mt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).xt = function (encoder, content, size) {
    return this.lz(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_5()));
  }
  protoOf(UShortArraySerializer_0).oz = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).xr = function (_this__u8e3s4) {
    return this.oz(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.kk_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).pz = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).fr = function (_this__u8e3s4) {
    return this.pz(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.kk_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).qz = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).vt = function () {
    return new UShortArray(this.qz());
  };
  protoOf(UShortArraySerializer_0).rz = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.io(this.mt_1, index).mn();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.uz(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    return this.rz(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    return this.rz(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).vz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.np(this.mt_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.vo(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).xt = function (encoder, content, size) {
    return this.vz(encoder, content instanceof UShortArray ? content.kk_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).yz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).xr = function (_this__u8e3s4) {
    return this.yz((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).zz = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).fr = function (_this__u8e3s4) {
    return this.zz((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).vt = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).a10 = function (decoder, index, builder, checkIndex) {
    builder.d10(decoder.ao(this.mt_1, index));
  };
  protoOf(ByteArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    return this.a10(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    return this.a10(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).e10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.fp(this.mt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).xt = function (encoder, content, size) {
    return this.e10(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_6()));
  }
  protoOf(UByteArraySerializer_0).h10 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).xr = function (_this__u8e3s4) {
    return this.h10(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.dj_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).i10 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).fr = function (_this__u8e3s4) {
    return this.i10(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.dj_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).j10 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).vt = function () {
    return new UByteArray(this.j10());
  };
  protoOf(UByteArraySerializer_0).k10 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.io(this.mt_1, index).ln();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.n10(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    return this.k10(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    return this.k10(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).o10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.np(this.mt_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.uo(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).xt = function (encoder, content, size) {
    return this.o10(encoder, content instanceof UByteArray ? content.dj_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_14(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).r10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).xr = function (_this__u8e3s4) {
    return this.r10((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).s10 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).fr = function (_this__u8e3s4) {
    return this.s10((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).vt = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).t10 = function (decoder, index, builder, checkIndex) {
    builder.w10(decoder.zn(this.mt_1, index));
  };
  protoOf(BooleanArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    return this.t10(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    return this.t10(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).x10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ep(this.mt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).xt = function (encoder, content, size) {
    return this.x10(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.vw_1 = bufferWithData;
    this.ww_1 = bufferWithData.length;
    this.st(10);
  }
  protoOf(CharArrayBuilder).ot = function () {
    return this.ww_1;
  };
  protoOf(CharArrayBuilder).st = function (requiredCapacity) {
    if (this.vw_1.length < requiredCapacity)
      this.vw_1 = copyOf(this.vw_1, coerceAtLeast(requiredCapacity, imul(this.vw_1.length, 2)));
  };
  protoOf(CharArrayBuilder).xw = function (c) {
    this.zt();
    var tmp = this.vw_1;
    var _unary__edvuaz = this.ww_1;
    this.ww_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).qt = function () {
    return copyOf(this.vw_1, this.ww_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ex_1 = bufferWithData;
    this.fx_1 = bufferWithData.length;
    this.st(10);
  }
  protoOf(DoubleArrayBuilder).ot = function () {
    return this.fx_1;
  };
  protoOf(DoubleArrayBuilder).st = function (requiredCapacity) {
    if (this.ex_1.length < requiredCapacity)
      this.ex_1 = copyOf_0(this.ex_1, coerceAtLeast(requiredCapacity, imul(this.ex_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).gx = function (c) {
    this.zt();
    var tmp = this.ex_1;
    var _unary__edvuaz = this.fx_1;
    this.fx_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).qt = function () {
    return copyOf_0(this.ex_1, this.fx_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.nx_1 = bufferWithData;
    this.ox_1 = bufferWithData.length;
    this.st(10);
  }
  protoOf(FloatArrayBuilder).ot = function () {
    return this.ox_1;
  };
  protoOf(FloatArrayBuilder).st = function (requiredCapacity) {
    if (this.nx_1.length < requiredCapacity)
      this.nx_1 = copyOf_1(this.nx_1, coerceAtLeast(requiredCapacity, imul(this.nx_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).px = function (c) {
    this.zt();
    var tmp = this.nx_1;
    var _unary__edvuaz = this.ox_1;
    this.ox_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).qt = function () {
    return copyOf_1(this.nx_1, this.ox_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.wx_1 = bufferWithData;
    this.xx_1 = bufferWithData.length;
    this.st(10);
  }
  protoOf(LongArrayBuilder).ot = function () {
    return this.xx_1;
  };
  protoOf(LongArrayBuilder).st = function (requiredCapacity) {
    if (this.wx_1.length < requiredCapacity)
      this.wx_1 = copyOf_2(this.wx_1, coerceAtLeast(requiredCapacity, imul(this.wx_1.length, 2)));
  };
  protoOf(LongArrayBuilder).yx = function (c) {
    this.zt();
    var tmp = this.wx_1;
    var _unary__edvuaz = this.xx_1;
    this.xx_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).qt = function () {
    return copyOf_2(this.wx_1, this.xx_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.gy_1 = bufferWithData;
    this.hy_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.st(10);
  }
  protoOf(ULongArrayBuilder).ot = function () {
    return this.hy_1;
  };
  protoOf(ULongArrayBuilder).st = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.gy_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.gy_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.gy_1), 2));
      tmp.gy_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).iy = function (c) {
    this.zt();
    var tmp = this.gy_1;
    var _unary__edvuaz = this.hy_1;
    this.hy_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).y10 = function () {
    var tmp0 = this.gy_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.hy_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).qt = function () {
    return new ULongArray(this.y10());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.py_1 = bufferWithData;
    this.qy_1 = bufferWithData.length;
    this.st(10);
  }
  protoOf(IntArrayBuilder).ot = function () {
    return this.qy_1;
  };
  protoOf(IntArrayBuilder).st = function (requiredCapacity) {
    if (this.py_1.length < requiredCapacity)
      this.py_1 = copyOf_3(this.py_1, coerceAtLeast(requiredCapacity, imul(this.py_1.length, 2)));
  };
  protoOf(IntArrayBuilder).ry = function (c) {
    this.zt();
    var tmp = this.py_1;
    var _unary__edvuaz = this.qy_1;
    this.qy_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).qt = function () {
    return copyOf_3(this.py_1, this.qy_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.zy_1 = bufferWithData;
    this.az_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.st(10);
  }
  protoOf(UIntArrayBuilder).ot = function () {
    return this.az_1;
  };
  protoOf(UIntArrayBuilder).st = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.zy_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.zy_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.zy_1), 2));
      tmp.zy_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).bz = function (c) {
    this.zt();
    var tmp = this.zy_1;
    var _unary__edvuaz = this.az_1;
    this.az_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).z10 = function () {
    var tmp0 = this.zy_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.az_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).qt = function () {
    return new UIntArray(this.z10());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.iz_1 = bufferWithData;
    this.jz_1 = bufferWithData.length;
    this.st(10);
  }
  protoOf(ShortArrayBuilder).ot = function () {
    return this.jz_1;
  };
  protoOf(ShortArrayBuilder).st = function (requiredCapacity) {
    if (this.iz_1.length < requiredCapacity)
      this.iz_1 = copyOf_4(this.iz_1, coerceAtLeast(requiredCapacity, imul(this.iz_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).kz = function (c) {
    this.zt();
    var tmp = this.iz_1;
    var _unary__edvuaz = this.jz_1;
    this.jz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).qt = function () {
    return copyOf_4(this.iz_1, this.jz_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.sz_1 = bufferWithData;
    this.tz_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.st(10);
  }
  protoOf(UShortArrayBuilder).ot = function () {
    return this.tz_1;
  };
  protoOf(UShortArrayBuilder).st = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.sz_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.sz_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.sz_1), 2));
      tmp.sz_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).uz = function (c) {
    this.zt();
    var tmp = this.sz_1;
    var _unary__edvuaz = this.tz_1;
    this.tz_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).a11 = function () {
    var tmp0 = this.sz_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.tz_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).qt = function () {
    return new UShortArray(this.a11());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b10_1 = bufferWithData;
    this.c10_1 = bufferWithData.length;
    this.st(10);
  }
  protoOf(ByteArrayBuilder).ot = function () {
    return this.c10_1;
  };
  protoOf(ByteArrayBuilder).st = function (requiredCapacity) {
    if (this.b10_1.length < requiredCapacity)
      this.b10_1 = copyOf_5(this.b10_1, coerceAtLeast(requiredCapacity, imul(this.b10_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).d10 = function (c) {
    this.zt();
    var tmp = this.b10_1;
    var _unary__edvuaz = this.c10_1;
    this.c10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).qt = function () {
    return copyOf_5(this.b10_1, this.c10_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l10_1 = bufferWithData;
    this.m10_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.st(10);
  }
  protoOf(UByteArrayBuilder).ot = function () {
    return this.m10_1;
  };
  protoOf(UByteArrayBuilder).st = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.l10_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.l10_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.l10_1), 2));
      tmp.l10_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).n10 = function (c) {
    this.zt();
    var tmp = this.l10_1;
    var _unary__edvuaz = this.m10_1;
    this.m10_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).b11 = function () {
    var tmp0 = this.l10_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.m10_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).qt = function () {
    return new UByteArray(this.b11());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.u10_1 = bufferWithData;
    this.v10_1 = bufferWithData.length;
    this.st(10);
  }
  protoOf(BooleanArrayBuilder).ot = function () {
    return this.v10_1;
  };
  protoOf(BooleanArrayBuilder).st = function (requiredCapacity) {
    if (this.u10_1.length < requiredCapacity)
      this.u10_1 = copyOf_6(this.u10_1, coerceAtLeast(requiredCapacity, imul(this.u10_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).w10 = function (c) {
    this.zt();
    var tmp = this.u10_1;
    var _unary__edvuaz = this.v10_1;
    this.v10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).qt = function () {
    return copyOf_6(this.u10_1, this.v10_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.c11_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).mk = function () {
    return this.c11_1;
  };
  protoOf(StringSerializer).d11 = function (encoder, value) {
    return encoder.bp(value);
  };
  protoOf(StringSerializer).nk = function (encoder, value) {
    return this.d11(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).ok = function (decoder) {
    return decoder.sn();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.e11_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).mk = function () {
    return this.e11_1;
  };
  protoOf(BooleanSerializer).f11 = function (encoder, value) {
    return encoder.to(value);
  };
  protoOf(BooleanSerializer).nk = function (encoder, value) {
    return this.f11(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).ok = function (decoder) {
    return decoder.kn();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.g11_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).mk = function () {
    return this.g11_1.mk();
  };
  protoOf(UnitSerializer).h11 = function (encoder, value) {
    this.g11_1.cl(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).nk = function (encoder, value) {
    return this.h11(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).i11 = function (decoder) {
    this.g11_1.ok(decoder);
  };
  protoOf(UnitSerializer).ok = function (decoder) {
    this.i11(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.j11_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).mk = function () {
    return this.j11_1;
  };
  protoOf(IntSerializer).k11 = function (encoder, value) {
    return encoder.wo(value);
  };
  protoOf(IntSerializer).nk = function (encoder, value) {
    return this.k11(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).ok = function (decoder) {
    return decoder.nn();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.l11_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).mk = function () {
    return this.l11_1;
  };
  protoOf(LongSerializer).m11 = function (encoder, value) {
    return encoder.xo(value);
  };
  protoOf(LongSerializer).nk = function (encoder, value) {
    return this.m11(encoder, (!(value == null) ? typeof value === 'bigint' : false) ? value : THROW_CCE());
  };
  protoOf(LongSerializer).ok = function (decoder) {
    return decoder.on();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.n11_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).mk = function () {
    return this.n11_1;
  };
  protoOf(DoubleSerializer).o11 = function (encoder, value) {
    return encoder.zo(value);
  };
  protoOf(DoubleSerializer).nk = function (encoder, value) {
    return this.o11(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).ok = function (decoder) {
    return decoder.qn();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.p11_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).mk = function () {
    return this.p11_1;
  };
  protoOf(ShortSerializer).q11 = function (encoder, value) {
    return encoder.vo(value);
  };
  protoOf(ShortSerializer).nk = function (encoder, value) {
    return this.q11(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).ok = function (decoder) {
    return decoder.mn();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().q2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.r11_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.r11_1 = serialName;
    this.s11_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).nl = function () {
    return this.r11_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).em = function () {
    return this.s11_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).gm = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).im = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).jm = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).mm = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).lm = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).km = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.r11_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.r11_1 === other.r11_1 && equals(this.s11_1, other.s11_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.r11_1) + imul(31, this.s11_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().n2();
    var _iterator__ex2g4s = values.r();
    while (_iterator__ex2g4s.s()) {
      var primitive = _iterator__ex2g4s.t();
      var primitiveName = primitive.mk().nl();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).m() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.t11_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).mk = function () {
    return this.t11_1;
  };
  protoOf(ByteSerializer).u11 = function (encoder, value) {
    return encoder.uo(value);
  };
  protoOf(ByteSerializer).nk = function (encoder, value) {
    return this.u11(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).ok = function (decoder) {
    return decoder.ln();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.v11_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).mk = function () {
    return this.v11_1;
  };
  protoOf(CharSerializer).w11 = function (encoder, value) {
    return encoder.ap(value);
  };
  protoOf(CharSerializer).nk = function (encoder, value) {
    return this.w11(encoder, value instanceof Char ? value.r1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).x11 = function (decoder) {
    return decoder.rn();
  };
  protoOf(CharSerializer).ok = function (decoder) {
    return new Char(this.x11(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.y11_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).mk = function () {
    return this.y11_1;
  };
  protoOf(FloatSerializer).z11 = function (encoder, value) {
    return encoder.yo(value);
  };
  protoOf(FloatSerializer).nk = function (encoder, value) {
    return this.z11(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).ok = function (decoder) {
    return decoder.pn();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).c12 = function (_this__u8e3s4, index) {
    return this.e12(this.d12(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).e12 = function (nestedName) {
    var tmp0_elvis_lhs = this.h12();
    return this.i12(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).d12 = function (descriptor, index) {
    return descriptor.im(index);
  };
  protoOf(NamedValueDecoder).i12 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).j12 = function () {
    return this.f12_1.p() ? '$' : joinToString(this.f12_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.x12(tag);
    var r = block();
    if (!$this.g12_1) {
      $this.y12();
    }
    $this.g12_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.vn($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.mk().xl();
      var tmp;
      if (isNullabilitySupported || tmp0.in()) {
        tmp = this$0.vn($deserializer, $previousValue);
      } else {
        tmp = tmp0.jn();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.f12_1 = ArrayList_init_$Create$_0();
    this.g12_1 = false;
  }
  protoOf(TaggedDecoder).mo = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).k12 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).l12 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).m12 = function (tag) {
    var tmp = this.k12(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).n12 = function (tag) {
    var tmp = this.k12(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).o12 = function (tag) {
    var tmp = this.k12(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).p12 = function (tag) {
    var tmp = this.k12(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q12 = function (tag) {
    var tmp = this.k12(tag);
    return typeof tmp === 'bigint' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).r12 = function (tag) {
    var tmp = this.k12(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s12 = function (tag) {
    var tmp = this.k12(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t12 = function (tag) {
    var tmp = this.k12(tag);
    return tmp instanceof Char ? tmp.r1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).u12 = function (tag) {
    var tmp = this.k12(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v12 = function (tag, enumDescriptor) {
    var tmp = this.k12(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w12 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.x12(tag);
    return this;
  };
  protoOf(TaggedDecoder).vn = function (deserializer, previousValue) {
    return this.wn(deserializer);
  };
  protoOf(TaggedDecoder).un = function (descriptor) {
    return this.w12(this.y12(), descriptor);
  };
  protoOf(TaggedDecoder).in = function () {
    var tmp0_elvis_lhs = this.h12();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.l12(currentTag);
  };
  protoOf(TaggedDecoder).jn = function () {
    return null;
  };
  protoOf(TaggedDecoder).kn = function () {
    return this.m12(this.y12());
  };
  protoOf(TaggedDecoder).ln = function () {
    return this.n12(this.y12());
  };
  protoOf(TaggedDecoder).mn = function () {
    return this.o12(this.y12());
  };
  protoOf(TaggedDecoder).nn = function () {
    return this.p12(this.y12());
  };
  protoOf(TaggedDecoder).on = function () {
    return this.q12(this.y12());
  };
  protoOf(TaggedDecoder).pn = function () {
    return this.r12(this.y12());
  };
  protoOf(TaggedDecoder).qn = function () {
    return this.s12(this.y12());
  };
  protoOf(TaggedDecoder).rn = function () {
    return this.t12(this.y12());
  };
  protoOf(TaggedDecoder).sn = function () {
    return this.u12(this.y12());
  };
  protoOf(TaggedDecoder).tn = function (enumDescriptor) {
    return this.v12(this.y12(), enumDescriptor);
  };
  protoOf(TaggedDecoder).xn = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).yn = function (descriptor) {
  };
  protoOf(TaggedDecoder).zn = function (descriptor, index) {
    return this.m12(this.c12(descriptor, index));
  };
  protoOf(TaggedDecoder).ao = function (descriptor, index) {
    return this.n12(this.c12(descriptor, index));
  };
  protoOf(TaggedDecoder).bo = function (descriptor, index) {
    return this.o12(this.c12(descriptor, index));
  };
  protoOf(TaggedDecoder).co = function (descriptor, index) {
    return this.p12(this.c12(descriptor, index));
  };
  protoOf(TaggedDecoder).do = function (descriptor, index) {
    return this.q12(this.c12(descriptor, index));
  };
  protoOf(TaggedDecoder).eo = function (descriptor, index) {
    return this.r12(this.c12(descriptor, index));
  };
  protoOf(TaggedDecoder).fo = function (descriptor, index) {
    return this.s12(this.c12(descriptor, index));
  };
  protoOf(TaggedDecoder).go = function (descriptor, index) {
    return this.t12(this.c12(descriptor, index));
  };
  protoOf(TaggedDecoder).ho = function (descriptor, index) {
    return this.u12(this.c12(descriptor, index));
  };
  protoOf(TaggedDecoder).io = function (descriptor, index) {
    return this.w12(this.c12(descriptor, index), descriptor.lm(index));
  };
  protoOf(TaggedDecoder).jo = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.c12(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).lo = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.c12(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).h12 = function () {
    return lastOrNull(this.f12_1);
  };
  protoOf(TaggedDecoder).x12 = function (name) {
    this.f12_1.y(name);
  };
  protoOf(TaggedDecoder).y12 = function () {
    var r = this.f12_1.a3(get_lastIndex_0(this.f12_1));
    this.g12_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.z12_1 = key;
    this.a13_1 = value;
  }
  protoOf(MapEntry).r2 = function () {
    return this.z12_1;
  };
  protoOf(MapEntry).s2 = function () {
    return this.a13_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.z12_1) + ', value=' + toString_0(this.a13_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.z12_1 == null ? 0 : hashCode(this.z12_1);
    result = imul(result, 31) + (this.a13_1 == null ? 0 : hashCode(this.a13_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.z12_1, other.z12_1))
      return false;
    if (!equals(this.a13_1, other.a13_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.al('key', $keySerializer.mk());
      $this$buildSerialDescriptor.al('value', $valueSerializer.mk());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.d13_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).mk = function () {
    return this.d13_1;
  };
  protoOf(MapEntrySerializer_0).e13 = function (_this__u8e3s4) {
    return _this__u8e3s4.r2();
  };
  protoOf(MapEntrySerializer_0).f13 = function (_this__u8e3s4) {
    return this.e13((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).g13 = function (_this__u8e3s4) {
    return _this__u8e3s4.s2();
  };
  protoOf(MapEntrySerializer_0).h13 = function (_this__u8e3s4) {
    return this.g13((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).i13 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.al('first', $keySerializer.mk());
      $this$buildClassSerialDescriptor.al('second', $valueSerializer.mk());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.o13_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).mk = function () {
    return this.o13_1;
  };
  protoOf(PairSerializer_0).p13 = function (_this__u8e3s4) {
    return _this__u8e3s4.first;
  };
  protoOf(PairSerializer_0).f13 = function (_this__u8e3s4) {
    return this.p13(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).q13 = function (_this__u8e3s4) {
    return _this__u8e3s4.second;
  };
  protoOf(PairSerializer_0).h13 = function (_this__u8e3s4) {
    return this.q13(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).i13 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.ko($this.u13_1, 0, $this.r13_1);
    var b = composite.ko($this.u13_1, 1, $this.s13_1);
    var c = composite.ko($this.u13_1, 2, $this.t13_1);
    composite.yn($this.u13_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.oo($this.u13_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.ko($this.u13_1, 0, $this.r13_1);
          break;
        case 1:
          b = composite.ko($this.u13_1, 1, $this.s13_1);
          break;
        case 2:
          c = composite.ko($this.u13_1, 2, $this.t13_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.yn($this.u13_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    return new Triple(a, b, c);
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.al('first', this$0.r13_1.mk());
      $this$buildClassSerialDescriptor.al('second', this$0.s13_1.mk());
      $this$buildClassSerialDescriptor.al('third', this$0.t13_1.mk());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.r13_1 = aSerializer;
    this.s13_1 = bSerializer;
    this.t13_1 = cSerializer;
    var tmp = this;
    tmp.u13_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).mk = function () {
    return this.u13_1;
  };
  protoOf(TripleSerializer_0).v13 = function (encoder, value) {
    var structuredEncoder = encoder.xn(this.u13_1);
    structuredEncoder.op(this.u13_1, 0, this.r13_1, value.mi_1);
    structuredEncoder.op(this.u13_1, 1, this.s13_1, value.ni_1);
    structuredEncoder.op(this.u13_1, 2, this.t13_1, value.oi_1);
    structuredEncoder.yn(this.u13_1);
  };
  protoOf(TripleSerializer_0).nk = function (encoder, value) {
    return this.v13(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).ok = function (decoder) {
    var composite = decoder.xn(this.u13_1);
    if (composite.no()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.j13_1 = keySerializer;
    this.k13_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).l13 = function (encoder, value) {
    var structuredEncoder = encoder.xn(this.mk());
    structuredEncoder.op(this.mk(), 0, this.j13_1, this.f13(value));
    structuredEncoder.op(this.mk(), 1, this.k13_1, this.h13(value));
    structuredEncoder.yn(this.mk());
  };
  protoOf(KeyValueSerializer).nk = function (encoder, value) {
    return this.l13(encoder, value);
  };
  protoOf(KeyValueSerializer).ok = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.mk();
    var composite = decoder.xn(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.no()) {
        var key = composite.ko(this.mk(), 0, this.j13_1);
        var value = composite.ko(this.mk(), 1, this.k13_1);
        tmp$ret$1 = this.i13(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.oo(this.mk());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.ko(this.mk(), 0, this.j13_1);
            break;
          case 1:
            value_0 = composite.ko(this.mk(), 1, this.k13_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.i13(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.yn(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.w13_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_7(Companion_instance));
  }
  protoOf(ULongSerializer).mk = function () {
    return this.w13_1;
  };
  protoOf(ULongSerializer).x13 = function (encoder, value) {
    var tmp = encoder.dp(this.w13_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.xo(tmp$ret$0);
  };
  protoOf(ULongSerializer).nk = function (encoder, value) {
    return this.x13(encoder, value instanceof ULong ? value.uj_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).y13 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.un(this.w13_1).on();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).ok = function (decoder) {
    return new ULong(this.y13(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.z13_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_8(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).mk = function () {
    return this.z13_1;
  };
  protoOf(UIntSerializer).a14 = function (encoder, value) {
    var tmp = encoder.dp(this.z13_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.wo(tmp$ret$0);
  };
  protoOf(UIntSerializer).nk = function (encoder, value) {
    return this.a14(encoder, value instanceof UInt ? value.jj_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).b14 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.un(this.z13_1).nn();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).ok = function (decoder) {
    return new UInt(this.b14(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.c14_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_9(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).mk = function () {
    return this.c14_1;
  };
  protoOf(UByteSerializer).d14 = function (encoder, value) {
    var tmp = encoder.dp(this.c14_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.uo(tmp$ret$0);
  };
  protoOf(UByteSerializer).nk = function (encoder, value) {
    return this.d14(encoder, value instanceof UByte ? value.yi_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).e14 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.un(this.c14_1).ln();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).ok = function (decoder) {
    return new UByte(this.e14(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.f14_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_10(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).mk = function () {
    return this.f14_1;
  };
  protoOf(UShortSerializer).g14 = function (encoder, value) {
    var tmp = encoder.dp(this.f14_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.vo(tmp$ret$0);
  };
  protoOf(UShortSerializer).nk = function (encoder, value) {
    return this.g14(encoder, value instanceof UShort ? value.fk_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).h14 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.un(this.f14_1).mn();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).ok = function (decoder) {
    return new UShort(this.h14(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function PolymorphicModuleBuilder(baseClass, baseSerializer) {
    baseSerializer = baseSerializer === VOID ? null : baseSerializer;
    this.i14_1 = baseClass;
    this.j14_1 = baseSerializer;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k14_1 = ArrayList_init_$Create$_0();
    this.l14_1 = null;
  }
  protoOf(PolymorphicModuleBuilder).m14 = function (subclass, serializer) {
    this.k14_1.y(to(subclass, serializer));
  };
  protoOf(PolymorphicModuleBuilder).n14 = function (defaultDeserializerProvider) {
    // Inline function 'kotlin.require' call
    if (!(this.l14_1 == null)) {
      var message = 'Default deserializer provider is already registered for class ' + toString(this.i14_1) + ': ' + toString_0(this.l14_1);
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.l14_1 = defaultDeserializerProvider;
  };
  protoOf(PolymorphicModuleBuilder).o14 = function (builder) {
    if (!(this.j14_1 == null)) {
      builder.v14(this.i14_1, this.i14_1, this.j14_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.k14_1.r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      var kclass = element.sd();
      var serializer = element.td();
      var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var tmp$ret$2 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
      builder.v14(this.i14_1, tmp, tmp$ret$2);
    }
    var defaultDeserializer = this.l14_1;
    if (!(defaultDeserializer == null)) {
      builder.w14(this.i14_1, defaultDeserializer, false);
    }
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).tl = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.ul(kClass, typeArgumentsSerializers) : $super.ul.call(this, kClass, typeArgumentsSerializers);
  };
  function plus(_this__u8e3s4, other) {
    _init_properties_SerializersModule_kt__u78ha3();
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    builder.y14(_this__u8e3s4);
    builder.y14(other);
    return builder.qt();
  }
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.z14_1 = class2ContextualFactory;
    this.a15_1 = polyBase2Serializers;
    this.b15_1 = polyBase2DefaultSerializerProvider;
    this.c15_1 = polyBase2NamedSerializers;
    this.d15_1 = polyBase2DefaultDeserializerProvider;
    this.e15_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).sl = function () {
    return this.e15_1;
  };
  protoOf(SerialModuleImpl).wp = function (baseClass, value) {
    if (!baseClass.i9(value))
      return null;
    var tmp0_safe_receiver = this.a15_1.q2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.b15_1.q2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).vp = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.c15_1.q2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).q2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.d15_1.q2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).ul = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.z14_1.q2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f15(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).x14 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.z14_1.f1().r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.r2();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.s2();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.i15_1;
        collector.j15(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.h15(kclass, serial.g15_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.a15_1.f1().r();
    while (_iterator__ex2g4s_0.s()) {
      var element_0 = _iterator__ex2g4s_0.t();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.r2();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.s2();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.f1().r();
      while (_iterator__ex2g4s_1.s()) {
        var element_1 = _iterator__ex2g4s_1.t();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.r2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.s2();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$15 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.k15(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.b15_1.f1().r();
    while (_iterator__ex2g4s_2.s()) {
      var element_2 = _iterator__ex2g4s_2.t();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.r2();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.s2();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.l15(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.d15_1.f1().r();
    while (_iterator__ex2g4s_3.s()) {
      var element_3 = _iterator__ex2g4s_3.t();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.r2();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.s2();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.m15(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.i15_1 = serializer;
  }
  protoOf(Argless).f15 = function (typeArgumentsSerializers) {
    return this.i15_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.i15_1, this.i15_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.i15_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.g15_1 = provider;
  }
  protoOf(WithTypeArguments).f15 = function (typeArgumentsSerializers) {
    return this.g15_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function SerializersModuleBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.p14_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.q14_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.r14_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.s14_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.t14_1 = HashMap_init_$Create$();
    this.u14_1 = false;
  }
  protoOf(SerializersModuleBuilder).j15 = function (kClass, serializer) {
    return this.n15(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).h15 = function (kClass, provider) {
    return this.n15(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).k15 = function (baseClass, actualClass, actualSerializer) {
    this.v14(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).l15 = function (baseClass, defaultSerializerProvider) {
    this.o15(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).m15 = function (baseClass, defaultDeserializerProvider) {
    this.w14(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).y14 = function (module_0) {
    module_0.x14(this);
  };
  protoOf(SerializersModuleBuilder).p15 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.p14_1.q2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.p14_1.k2(forClass, provider);
    if (isInterface_0(forClass))
      this.u14_1 = true;
  };
  protoOf(SerializersModuleBuilder).n15 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.p15(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.p15.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).o15 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.r14_1.q2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.r14_1.k2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).w14 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.t14_1.q2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.t14_1.k2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).q15 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.mk().nl();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.q14_1;
    var value = this_0.q2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.k2(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.s14_1;
    var value_0 = this_1.q2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.k2(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    var previousSerializer = baseClassSerializers.q2(concreteClass);
    if (!(previousSerializer == null) && !equals(previousSerializer, concreteSerializer)) {
      if (allowOverwrite)
        names.l2(previousSerializer.mk().nl());
      else
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
    }
    var previousByName = names.q2(name);
    if (!(previousByName == null) && !equals(previousByName, concreteSerializer)) {
      // Inline function 'kotlin.sequences.find' call
      var tmp0 = asSequence(baseClassSerializers);
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var _iterator__ex2g4s = tmp0.r();
        while (_iterator__ex2g4s.s()) {
          var element = _iterator__ex2g4s.t();
          if (element.s2() === previousByName) {
            tmp$ret$7 = element;
            break $l$block;
          }
        }
        tmp$ret$7 = null;
      }
      var tmp0_safe_receiver = tmp$ret$7;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r2();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'Name ' + name + ' is registered in the module but no Kotlin class is associated with it.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var previousClass = tmp_1;
      if (allowOverwrite)
        baseClassSerializers.l2(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.k2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.k2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).v14 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.q15(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.q15.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).qt = function () {
    return new SerialModuleImpl(this.p14_1, this.q14_1, this.r14_1, this.s14_1, this.t14_1, this.u14_1);
  };
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + toString(concreteClass) + ' already registered in the scope of ' + toString(baseClass));
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass) {
    var tmp = SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, objectCreate(protoOf(SerializerAlreadyRegisteredException)));
    captureStack(tmp, SerializerAlreadyRegisteredException_init_$Create$);
    return tmp;
  }
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init_$Init$_0(msg, this);
    captureStack(this, SerializerAlreadyRegisteredException);
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.r15_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.r15_1.equals(tmp0_other_with_cast.r15_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.r15_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.r15_1) + ')';
  };
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().w9()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterfaceHack(_this__u8e3s4);
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().ea());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.pw(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().fa(), serializer_2(StringCompanionObject_instance)), to(getKClass(Char), serializer_11(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().ia(), CharArraySerializer()), to(PrimitiveClasses_getInstance().da(), serializer_12(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().oa(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().ca(), serializer_13(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().na(), FloatArraySerializer()), to(PrimitiveClasses_getInstance().ba(), serializer_7(Companion_instance)), to(get_longArrayClass(), LongArraySerializer()), to(getKClass(ULong), serializer_3(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().aa(), serializer_8(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().la(), IntArraySerializer()), to(getKClass(UInt), serializer_4(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().z9(), serializer_10(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().ka(), ShortArraySerializer()), to(getKClass(UShort), serializer_6(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().y9(), serializer_9(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().ja(), ByteArraySerializer()), to(getKClass(UByte), serializer_5(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().x9(), serializer_14(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().ha(), BooleanArraySerializer()), to(getKClass(Unit), serializer_15(Unit_instance)), to(PrimitiveClasses_getInstance().w9(), NothingSerializer()), to(getKClass(Duration), serializer_16(Companion_getInstance_0())), to(getKClass(Instant), serializer_17(Companion_getInstance())), to(getKClass(Uuid), serializer_18(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().w9())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.s15_1 = $factory;
  }
  protoOf(createCache$1).vl = function (key) {
    return this.s15_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.t15_1 = $factory;
  }
  protoOf(createParametrizedCache$1).wl = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.t15_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).xl = get_isNullable;
  protoOf(SerialDescriptorImpl).fm = get_isInline;
  protoOf(AbstractDecoder).ko = decodeSerializableElement$default;
  protoOf(AbstractDecoder).wn = decodeSerializableValue;
  protoOf(AbstractDecoder).no = decodeSequentially;
  protoOf(AbstractDecoder).po = decodeCollectionSize;
  protoOf(AbstractEncoder).sp = encodeNotNullMark;
  protoOf(AbstractEncoder).tp = beginCollection;
  protoOf(AbstractEncoder).pp = encodeSerializableValue;
  protoOf(AbstractEncoder).rp = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).up = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).xl = get_isNullable;
  protoOf(ListLikeDescriptor).fm = get_isInline;
  protoOf(ListLikeDescriptor).hm = get_annotations;
  protoOf(MapLikeDescriptor).xl = get_isNullable;
  protoOf(MapLikeDescriptor).fm = get_isInline;
  protoOf(MapLikeDescriptor).hm = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).xl = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).fm = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).fw = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).xl = get_isNullable;
  protoOf(NothingSerialDescriptor).fm = get_isInline;
  protoOf(NothingSerialDescriptor).hm = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).xl = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).fm = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).hm = get_annotations;
  protoOf(TaggedDecoder).ko = decodeSerializableElement$default;
  protoOf(TaggedDecoder).wn = decodeSerializableValue;
  protoOf(TaggedDecoder).no = decodeSequentially;
  protoOf(TaggedDecoder).po = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SEALED_getInstance;
  _.$_$.b = STRING_getInstance;
  _.$_$.c = CONTEXTUAL_getInstance;
  _.$_$.d = ENUM_getInstance;
  _.$_$.e = CLASS_getInstance;
  _.$_$.f = LIST_getInstance;
  _.$_$.g = MAP_getInstance;
  _.$_$.h = OBJECT_getInstance;
  _.$_$.i = BooleanSerializer_getInstance;
  _.$_$.j = DoubleSerializer_getInstance;
  _.$_$.k = InstantSerializer_getInstance;
  _.$_$.l = IntSerializer_getInstance;
  _.$_$.m = LongSerializer_getInstance;
  _.$_$.n = ShortSerializer_getInstance;
  _.$_$.o = StringSerializer_getInstance;
  _.$_$.p = UnitSerializer_getInstance;
  _.$_$.q = ObjectSerializer_init_$Create$;
  _.$_$.r = PolymorphicSerializer_init_$Create$;
  _.$_$.s = SealedClassSerializer_init_$Create$;
  _.$_$.t = SerializationException_init_$Init$_0;
  _.$_$.u = SerializationException_init_$Create$_0;
  _.$_$.v = UnknownFieldException_init_$Create$;
  _.$_$.w = ListSerializer;
  _.$_$.x = MapSerializer;
  _.$_$.y = SetSerializer;
  _.$_$.z = get_nullable;
  _.$_$.a1 = serializer_2;
  _.$_$.b1 = serializer_6;
  _.$_$.c1 = serializer_4;
  _.$_$.d1 = serializer_8;
  _.$_$.e1 = serializer_5;
  _.$_$.f1 = serializer_3;
  _.$_$.g1 = PolymorphicKind;
  _.$_$.h1 = PrimitiveKind;
  _.$_$.i1 = PrimitiveSerialDescriptor;
  _.$_$.j1 = get_annotations;
  _.$_$.k1 = get_isInline;
  _.$_$.l1 = get_isNullable;
  _.$_$.m1 = SerialDescriptor;
  _.$_$.n1 = ENUM;
  _.$_$.o1 = buildClassSerialDescriptor;
  _.$_$.p1 = buildSerialDescriptor;
  _.$_$.q1 = getContextualDescriptor;
  _.$_$.r1 = AbstractDecoder;
  _.$_$.s1 = AbstractEncoder;
  _.$_$.t1 = CompositeDecoder;
  _.$_$.u1 = CompositeEncoder;
  _.$_$.v1 = Decoder;
  _.$_$.w1 = Encoder;
  _.$_$.x1 = AbstractPolymorphicSerializer;
  _.$_$.y1 = ArrayListSerializer;
  _.$_$.z1 = ElementMarker;
  _.$_$.a2 = typeParametersSerializers;
  _.$_$.b2 = GeneratedSerializer;
  _.$_$.c2 = InlinePrimitiveDescriptor;
  _.$_$.d2 = LinkedHashMapSerializer;
  _.$_$.e2 = LinkedHashSetSerializer;
  _.$_$.f2 = NamedValueDecoder;
  _.$_$.g2 = PluginGeneratedSerialDescriptor;
  _.$_$.h2 = SerializerFactory;
  _.$_$.i2 = createAnnotatedEnumSerializer;
  _.$_$.j2 = createSimpleEnumSerializer;
  _.$_$.k2 = jsonCachedSerialNames;
  _.$_$.l2 = missingFieldExceptionWithNewMessage;
  _.$_$.m2 = throwMissingFieldException;
  _.$_$.n2 = EmptySerializersModule_0;
  _.$_$.o2 = PolymorphicModuleBuilder;
  _.$_$.p2 = SerializersModuleBuilder;
  _.$_$.q2 = contextual;
  _.$_$.r2 = SerializersModuleCollector;
  _.$_$.s2 = plus;
  _.$_$.t2 = DeserializationStrategy;
  _.$_$.u2 = KSerializer;
  _.$_$.v2 = MissingFieldException;
  _.$_$.w2 = PolymorphicSerializer;
  _.$_$.x2 = SerializableWith;
  _.$_$.y2 = SerializationException;
  _.$_$.z2 = SerializationStrategy;
  _.$_$.a3 = findPolymorphicSerializer;
  _.$_$.b3 = findPolymorphicSerializer_0;
  _.$_$.c3 = serializer_0;
  _.$_$.d3 = serializer;
  //endregion
  _.$_$.ListSerializer = ListSerializer
  _.$_$.MapSerializer = MapSerializer
  _.$_$.SetSerializer = SetSerializer
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
