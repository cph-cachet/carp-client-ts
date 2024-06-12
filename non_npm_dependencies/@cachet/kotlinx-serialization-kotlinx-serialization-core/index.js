(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@cachet/kotlin-kotlin-stdlib'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@cachet/kotlin-kotlin-stdlib'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.m8;
  var interfaceMeta = kotlin_kotlin.$_$.s7;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var VOID = kotlin_kotlin.$_$.f;
  var asList = kotlin_kotlin.$_$.t4;
  var objectCreate = kotlin_kotlin.$_$.k8;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.s3;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var emptyList = kotlin_kotlin.$_$.m5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.ub;
  var classMeta = kotlin_kotlin.$_$.i7;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.b9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p7;
  var THROW_CCE = kotlin_kotlin.$_$.bb;
  var Entry = kotlin_kotlin.$_$.m4;
  var isInterface = kotlin_kotlin.$_$.b8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var zip = kotlin_kotlin.$_$.w6;
  var toMap = kotlin_kotlin.$_$.t6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var toString = kotlin_kotlin.$_$.r8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var mapCapacity = kotlin_kotlin.$_$.d6;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var Map = kotlin_kotlin.$_$.n4;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.c7;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.e1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.g1;
  var IllegalArgumentException = kotlin_kotlin.$_$.wa;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var KClass = kotlin_kotlin.$_$.a9;
  var Triple = kotlin_kotlin.$_$.db;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.za;
  var LinkedHashMap = kotlin_kotlin.$_$.j4;
  var MutableMap = kotlin_kotlin.$_$.p4;
  var HashMap = kotlin_kotlin.$_$.h4;
  var LinkedHashSet = kotlin_kotlin.$_$.k4;
  var MutableSet = kotlin_kotlin.$_$.q4;
  var Set = kotlin_kotlin.$_$.r4;
  var HashSet = kotlin_kotlin.$_$.i4;
  var ArrayList = kotlin_kotlin.$_$.f4;
  var MutableList = kotlin_kotlin.$_$.o4;
  var List = kotlin_kotlin.$_$.l4;
  var Collection = kotlin_kotlin.$_$.g4;
  var copyToArray = kotlin_kotlin.$_$.k5;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.b2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.a2;
  var Result = kotlin_kotlin.$_$.ab;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var equals = kotlin_kotlin.$_$.l7;
  var getStringHashCode = kotlin_kotlin.$_$.q7;
  var isBlank = kotlin_kotlin.$_$.m9;
  var toList = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var toHashSet = kotlin_kotlin.$_$.p6;
  var toBooleanArray = kotlin_kotlin.$_$.o6;
  var withIndex = kotlin_kotlin.$_$.v6;
  var to = kotlin_kotlin.$_$.zb;
  var lazy_0 = kotlin_kotlin.$_$.vb;
  var contentEquals = kotlin_kotlin.$_$.y4;
  var until = kotlin_kotlin.$_$.z8;
  var joinToString = kotlin_kotlin.$_$.x5;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var Long = kotlin_kotlin.$_$.ya;
  var Char = kotlin_kotlin.$_$.ra;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.u1;
  var Duration = kotlin_kotlin.$_$.na;
  var Companion_getInstance = kotlin_kotlin.$_$.v3;
  var toIntOrNull = kotlin_kotlin.$_$.ca;
  var hashCode = kotlin_kotlin.$_$.r7;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.l;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.u;
  var isArray = kotlin_kotlin.$_$.t7;
  var arrayIterator = kotlin_kotlin.$_$.a7;
  var step = kotlin_kotlin.$_$.x8;
  var getValue = kotlin_kotlin.$_$.s5;
  var longArray = kotlin_kotlin.$_$.f8;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.x3;
  var get_lastIndex = kotlin_kotlin.$_$.y5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.ob;
  var getOrNull = kotlin_kotlin.$_$.r5;
  var indexOf = kotlin_kotlin.$_$.t5;
  var contentToString = kotlin_kotlin.$_$.a5;
  var Enum = kotlin_kotlin.$_$.va;
  var fillArrayVal = kotlin_kotlin.$_$.m7;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.p;
  var KTypeParameter = kotlin_kotlin.$_$.c9;
  var booleanArray = kotlin_kotlin.$_$.b7;
  var emptyMap = kotlin_kotlin.$_$.n5;
  var contentHashCode = kotlin_kotlin.$_$.z4;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.w3;
  var isCharArray = kotlin_kotlin.$_$.w7;
  var charArray = kotlin_kotlin.$_$.e7;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var isDoubleArray = kotlin_kotlin.$_$.y7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.p3;
  var isFloatArray = kotlin_kotlin.$_$.z7;
  var isLongArray = kotlin_kotlin.$_$.c8;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.b4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.b3;
  var ULongArray = kotlin_kotlin.$_$.ib;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.x2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.u2;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.z2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.v2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.q3;
  var isIntArray = kotlin_kotlin.$_$.a8;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.a4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.s2;
  var UIntArray = kotlin_kotlin.$_$.gb;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.o2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l2;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.q2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.m2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.r3;
  var isShortArray = kotlin_kotlin.$_$.d8;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.c4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.k3;
  var UShortArray = kotlin_kotlin.$_$.kb;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.g3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.d3;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.i3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.e3;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.n3;
  var isByteArray = kotlin_kotlin.$_$.v7;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.z3;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.j2;
  var UByteArray = kotlin_kotlin.$_$.eb;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.g2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c2;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.h2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.d2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.m3;
  var isBooleanArray = kotlin_kotlin.$_$.u7;
  var coerceAtLeast = kotlin_kotlin.$_$.t8;
  var copyOf = kotlin_kotlin.$_$.e5;
  var copyOf_0 = kotlin_kotlin.$_$.g5;
  var copyOf_1 = kotlin_kotlin.$_$.h5;
  var copyOf_2 = kotlin_kotlin.$_$.c5;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.c3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.y2;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.a3;
  var copyOf_3 = kotlin_kotlin.$_$.j5;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.t2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.p2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.r2;
  var copyOf_4 = kotlin_kotlin.$_$.b5;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.l3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.h3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.j3;
  var copyOf_5 = kotlin_kotlin.$_$.f5;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.k2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.f2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.i2;
  var copyOf_6 = kotlin_kotlin.$_$.d5;
  var Unit = kotlin_kotlin.$_$.mb;
  var trimIndent = kotlin_kotlin.$_$.la;
  var equals_0 = kotlin_kotlin.$_$.k9;
  var charSequenceLength = kotlin_kotlin.$_$.g7;
  var charSequenceGet = kotlin_kotlin.$_$.f7;
  var toString_0 = kotlin_kotlin.$_$.y1;
  var titlecase = kotlin_kotlin.$_$.y9;
  var isLowerCase = kotlin_kotlin.$_$.n9;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u3;
  var ULong = kotlin_kotlin.$_$.jb;
  var UInt = kotlin_kotlin.$_$.hb;
  var UShort = kotlin_kotlin.$_$.lb;
  var UByte = kotlin_kotlin.$_$.fb;
  var mapOf = kotlin_kotlin.$_$.e6;
  var lastOrNull = kotlin_kotlin.$_$.a6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.z5;
  var asSequence = kotlin_kotlin.$_$.u4;
  var get_js = kotlin_kotlin.$_$.e8;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.w5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var get_indices_0 = kotlin_kotlin.$_$.v5;
  var Companion_instance = kotlin_kotlin.$_$.y3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.z1;
  var createFailure = kotlin_kotlin.$_$.pb;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [SerializationStrategy, DeserializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, VOID, SerializationException_init_$Create$);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(elementNames$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.ri(this);
  }
  function decodeNullableSerializableValue(deserializer) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.pi().xj();
    var tmp;
    if (isNullabilitySupported ? true : this.il()) {
      // Inline function 'kotlinx.serialization.encoding.Decoder.decodeNullableSerializableValue.<anonymous>' call
      tmp = this.wl(deserializer);
    } else {
      tmp = this.jl();
    }
    return tmp;
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.jm(descriptor, index, deserializer, previousValue) : $super.jm.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.xl(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.qi(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.pi().xj();
    if (isNullabilitySupported) {
      return this.qn(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.tm();
    } else {
      this.tn();
      this.qn(serializer, value);
    }
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(NothingSerializer_0, 'NothingSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(HashSetClassDesc, 'HashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer);
  setMetadataFor(HashSetSerializer, 'HashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ElementMarker, 'ElementMarker', classMeta);
  setMetadataFor(EnumSerializer, 'EnumSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(EnumDescriptor, 'EnumDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NoOpEncoder, 'NoOpEncoder', objectMeta, AbstractEncoder);
  setMetadataFor(NothingSerialDescriptor, 'NothingSerialDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ULongArrayBuilder, 'ULongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UIntArrayBuilder, 'UIntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UShortArrayBuilder, 'UShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UByteArrayBuilder, 'UByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicModuleBuilder, 'PolymorphicModuleBuilder', classMeta);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.d13(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta);
  setMetadataFor(SerializersModuleBuilder, 'SerializersModuleBuilder', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', classMeta, IllegalArgumentException);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, VOID, 0);
  setMetadataFor(createCache$1, VOID, classMeta);
  setMetadataFor(createParametrizedCache$1, VOID, classMeta);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this.ti_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.dj('type', serializer_2(StringCompanionObject_instance).pi());
      $this$buildSerialDescriptor.dj('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.si_1.i6() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.xi_1 = this$0.ti_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.si_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.si_1 = baseClass;
    this.ti_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ui_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).ej = function () {
    return this.si_1;
  };
  protoOf(PolymorphicSerializer).pi = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ui_1;
    descriptor$factory();
    return this_0.r2();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.si_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.hj(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.ej());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.gj(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.ej());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.pi();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.jj_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = this$0.mj_1.p2().t();
      while (tmp0_iterator.u()) {
        var element = tmp0_iterator.v();
        // Inline function 'kotlinx.serialization.SealedClassSerializer.descriptor$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var name = element.q2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.r2();
        $this$buildSerialDescriptor.dj(name, serializer.pi());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.dj('type', serializer_2(StringCompanionObject_instance).pi());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.ij_1.i6() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.dj('value', elementDescriptor);
      $this$buildSerialDescriptor.xi_1 = this$0.jj_1;
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function _no_name_provided__qut3iv($this) {
    this.nj_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv).oj = function () {
    return this.nj_1.t();
  };
  protoOf(_no_name_provided__qut3iv).pj = function (element) {
    // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
    return element.r2().pi().qj();
  };
  protoOf(_no_name_provided__qut3iv).rj = function (element) {
    return this.pj((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.ij_1 = baseClass;
    this.jj_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.kj_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.ij_1.i6() + ' should be marked @Serializable');
    }
    this.lj_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.aggregate' call
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.lj_1.p2();
    // Inline function 'kotlin.collections.aggregateTo' call
    var this_1 = new _no_name_provided__qut3iv(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_1.oj();
    while (tmp0_iterator.u()) {
      var e = tmp0_iterator.v();
      var key = this_1.rj(e);
      var accumulator = destination.x2(key);
      // Inline function 'kotlin.collections.set' call
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      accumulator == null && !destination.u2(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + this.ij_1 + "' have the same serial name '" + key + "':" + (" '" + accumulator.q2() + "', '" + e.q2() + "'");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      destination.n2(key, e);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.n()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.p2().t();
    while (tmp0_iterator_0.u()) {
      var element = tmp0_iterator_0.v();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_2 = element.q2();
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      var tmp$ret$7 = element.r2().r2();
      destination_0.n2(tmp_2, tmp$ret$7);
    }
    tmp_1.mj_1 = destination_0;
  }
  protoOf(SealedClassSerializer).ej = function () {
    return this.ij_1;
  };
  protoOf(SealedClassSerializer).pi = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.kj_1;
    descriptor$factory_0();
    return this_0.r2();
  };
  protoOf(SealedClassSerializer).gj = function (decoder, klassName) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.mj_1;
    var tmp0_elvis_lhs = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).x2(klassName);
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).gj.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  protoOf(SealedClassSerializer).hj = function (encoder, value) {
    var tmp0_elvis_lhs = this.lj_1.x2(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).hj.call(this, encoder, value) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, SerializationStrategy) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.pi();
    }, null);
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
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.n() === 1 ? "Field '" + missingFields.c1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.sj_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.t();
      while (tmp0_iterator.u()) {
        var item = tmp0_iterator.v();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.q(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.t();
      while (tmp0_iterator_0.u()) {
        var item_0 = tmp0_iterator_0.v();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.q(tmp$ret$3);
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
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (((_this__u8e3s4.equals(getKClass(Collection)) ? true : _this__u8e3s4.equals(getKClass(List))) ? true : _this__u8e3s4.equals(getKClass(MutableList))) ? true : _this__u8e3s4.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.c1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.c1(0));
    } else if ((_this__u8e3s4.equals(getKClass(Set)) ? true : _this__u8e3s4.equals(getKClass(MutableSet))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.c1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.c1(0), serializers.c1(1));
    } else if ((_this__u8e3s4.equals(getKClass(Map)) ? true : _this__u8e3s4.equals(getKClass(MutableMap))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.c1(0), serializers.c1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.c1(0), serializers.c1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.c1(0), serializers.c1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.c1(0), serializers.c1(1), serializers.c1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.c1(0));
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
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.y6();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.x6();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.t();
    while (tmp0_iterator.u()) {
      var item = tmp0_iterator.v();
      var tmp$ret$0 = typeOrThrow(item);
      destination.q(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.y()) {
      tmp = findCachedSerializer(rootClass, isNullable);
    } else {
      // Inline function 'kotlin.Result.getOrNull' call
      var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
      var tmp_0;
      if (_Result___get_isFailure__impl__jpiriv(this_1)) {
        tmp_0 = null;
      } else {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      }
      tmp = tmp_0;
    }
    var cachedSerializer = tmp;
    if (cachedSerializer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return cachedSerializer;
    }
    var tmp_2;
    if (typeArguments.y()) {
      tmp_2 = _this__u8e3s4.uj(rootClass);
    } else {
      var tmp1_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var serializers = tmp_3;
      var tmp2_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      tmp_2 = tmp2_elvis_lhs == null ? _this__u8e3s4.tj(rootClass, serializers) : tmp2_elvis_lhs;
    }
    var contextualSerializer = tmp_2;
    var tmp_4;
    if (contextualSerializer == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_4 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp4_safe_receiver = tmp_4;
    return tmp4_safe_receiver == null ? null : nullable(tmp4_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializer_1(type) {
    return serializer(EmptySerializersModule_0(), type);
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.c1(0).w6();
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().vj(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().vj(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().wj(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().wj(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    return serializerOrNull(it);
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_safe_receiver = serializerOrNull(it);
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
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.c1(0).w6();
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
      return $types.c1(0).w6();
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
    if (_this__u8e3s4.pi().xj()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_2(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UByteSerializer_getInstance();
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
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.yj_1 = original;
    this.zj_1 = kClass;
    this.ak_1 = this.yj_1.qj() + '<' + this.zj_1.i6() + '>';
  }
  protoOf(ContextDescriptor).bk = function () {
    return this.yj_1.bk();
  };
  protoOf(ContextDescriptor).ck = function () {
    return this.yj_1.ck();
  };
  protoOf(ContextDescriptor).dk = function () {
    return this.yj_1.dk();
  };
  protoOf(ContextDescriptor).xj = function () {
    return this.yj_1.xj();
  };
  protoOf(ContextDescriptor).ek = function () {
    return this.yj_1.ek();
  };
  protoOf(ContextDescriptor).fk = function (index) {
    return this.yj_1.fk(index);
  };
  protoOf(ContextDescriptor).gk = function (index) {
    return this.yj_1.gk(index);
  };
  protoOf(ContextDescriptor).hk = function (name) {
    return this.yj_1.hk(name);
  };
  protoOf(ContextDescriptor).ik = function (index) {
    return this.yj_1.ik(index);
  };
  protoOf(ContextDescriptor).jk = function (index) {
    return this.yj_1.jk(index);
  };
  protoOf(ContextDescriptor).qj = function () {
    return this.ak_1;
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
    return equals(this.yj_1, another.yj_1) ? another.zj_1.equals(this.zj_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.zj_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.ak_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.zj_1 + ', original: ' + this.yj_1 + ')';
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.uj(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.pi();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.zj_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.kk_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4);
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_1(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.ok_1 = $this_elementDescriptors;
    this.nk_1 = $this_elementDescriptors.ck();
  }
  protoOf(elementDescriptors$1$1).u = function () {
    return this.nk_1 > 0;
  };
  protoOf(elementDescriptors$1$1).v = function () {
    var tmp = this.ok_1.ck();
    var tmp1 = this.nk_1;
    this.nk_1 = tmp1 - 1 | 0;
    return this.ok_1.gk(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementDescriptors) {
    this.pk_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv_0).t = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.pk_1);
  };
  function elementNames$1$1($this_elementNames) {
    this.rk_1 = $this_elementNames;
    this.qk_1 = $this_elementNames.ck();
  }
  protoOf(elementNames$1$1).u = function () {
    return this.qk_1 > 0;
  };
  protoOf(elementNames$1$1).v = function () {
    var tmp = this.rk_1.ck();
    var tmp1 = this.qk_1;
    this.qk_1 = tmp1 - 1 | 0;
    return this.rk_1.ik(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_1($this_elementNames) {
    this.sk_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_1).t = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1$1(this.sk_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.yi_1.n(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.vi_1 = serialName;
    this.wi_1 = false;
    this.xi_1 = emptyList();
    this.yi_1 = ArrayList_init_$Create$_0();
    this.zi_1 = HashSet_init_$Create$();
    this.aj_1 = ArrayList_init_$Create$_0();
    this.bj_1 = ArrayList_init_$Create$_0();
    this.cj_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).tk = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.zi_1.q(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.vi_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.yi_1.q(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.aj_1.q(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.bj_1.q(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.cj_1.q(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).dj = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.tk(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.tk.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.yi_1.n(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.fl_1;
    _hashCode$factory();
    return this_0.r2();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.el_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.ik(it) + ': ' + this$0.gk(it).qj();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.uk_1 = serialName;
    this.vk_1 = kind;
    this.wk_1 = elementsCount;
    this.xk_1 = builder.xi_1;
    this.yk_1 = toHashSet(builder.yi_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.yi_1;
    tmp.zk_1 = copyToArray(this_0);
    this.al_1 = compactArray(builder.aj_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.bj_1;
    tmp_0.bl_1 = copyToArray(this_1);
    this.cl_1 = toBooleanArray(builder.cj_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.zk_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.t();
    while (tmp0_iterator.u()) {
      var item = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.ed_1, item.dd_1);
      destination.q(tmp$ret$2);
    }
    tmp_1.dl_1 = toMap(destination);
    this.el_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.fl_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).qj = function () {
    return this.uk_1;
  };
  protoOf(SerialDescriptorImpl).ek = function () {
    return this.vk_1;
  };
  protoOf(SerialDescriptorImpl).ck = function () {
    return this.wk_1;
  };
  protoOf(SerialDescriptorImpl).bk = function () {
    return this.xk_1;
  };
  protoOf(SerialDescriptorImpl).gl = function () {
    return this.yk_1;
  };
  protoOf(SerialDescriptorImpl).ik = function (index) {
    return getChecked(this.zk_1, index);
  };
  protoOf(SerialDescriptorImpl).hk = function (name) {
    var tmp0_elvis_lhs = this.dl_1.x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).fk = function (index) {
    return getChecked(this.bl_1, index);
  };
  protoOf(SerialDescriptorImpl).gk = function (index) {
    return getChecked(this.al_1, index);
  };
  protoOf(SerialDescriptorImpl).jk = function (index) {
    return getChecked_0(this.cl_1, index);
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
      if (!(this.qj() === other.qj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.el_1, other.el_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ck() === other.ck())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ck();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.gk(index).qj() === other.gk(index).qj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.gk(index).ek(), other.gk(index).ek())) {
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
    var tmp = until(0, this.wk_1);
    var tmp_0 = this.uk_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
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
    return ensureNotNull(getKClassFromExpression(this).i6());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
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
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).hl = function () {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).il = function () {
    return true;
  };
  protoOf(AbstractDecoder).jl = function () {
    return null;
  };
  protoOf(AbstractDecoder).kl = function () {
    var tmp = this.hl();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ll = function () {
    var tmp = this.hl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ml = function () {
    var tmp = this.hl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).nl = function () {
    var tmp = this.hl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ol = function () {
    var tmp = this.hl();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).pl = function () {
    var tmp = this.hl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ql = function () {
    var tmp = this.hl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).rl = function () {
    var tmp = this.hl();
    return tmp instanceof Char ? tmp.fa_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).sl = function () {
    var tmp = this.hl();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).tl = function (enumDescriptor) {
    var tmp = this.hl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ul = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).vl = function (deserializer, previousValue) {
    return this.wl(deserializer);
  };
  protoOf(AbstractDecoder).xl = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).yl = function (descriptor) {
  };
  protoOf(AbstractDecoder).zl = function (descriptor, index) {
    return this.kl();
  };
  protoOf(AbstractDecoder).am = function (descriptor, index) {
    return this.ll();
  };
  protoOf(AbstractDecoder).bm = function (descriptor, index) {
    return this.ml();
  };
  protoOf(AbstractDecoder).cm = function (descriptor, index) {
    return this.nl();
  };
  protoOf(AbstractDecoder).dm = function (descriptor, index) {
    return this.ol();
  };
  protoOf(AbstractDecoder).em = function (descriptor, index) {
    return this.pl();
  };
  protoOf(AbstractDecoder).fm = function (descriptor, index) {
    return this.ql();
  };
  protoOf(AbstractDecoder).gm = function (descriptor, index) {
    return this.rl();
  };
  protoOf(AbstractDecoder).hm = function (descriptor, index) {
    return this.sl();
  };
  protoOf(AbstractDecoder).im = function (descriptor, index) {
    return this.ul(descriptor.gk(index));
  };
  protoOf(AbstractDecoder).jm = function (descriptor, index, deserializer, previousValue) {
    return this.vl(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).lm = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.pi().xj();
    var tmp;
    if (isNullabilitySupported ? true : this.il()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.vl(deserializer, previousValue);
    } else {
      tmp = this.jl();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).xl = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).yl = function (descriptor) {
  };
  protoOf(AbstractEncoder).rm = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).sm = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).tm = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).um = function (value) {
    return this.sm(value);
  };
  protoOf(AbstractEncoder).vm = function (value) {
    return this.sm(value);
  };
  protoOf(AbstractEncoder).wm = function (value) {
    return this.sm(value);
  };
  protoOf(AbstractEncoder).xm = function (value) {
    return this.sm(value);
  };
  protoOf(AbstractEncoder).ym = function (value) {
    return this.sm(value);
  };
  protoOf(AbstractEncoder).zm = function (value) {
    return this.sm(value);
  };
  protoOf(AbstractEncoder).an = function (value) {
    return this.sm(value);
  };
  protoOf(AbstractEncoder).bn = function (value) {
    return this.sm(new Char(value));
  };
  protoOf(AbstractEncoder).cn = function (value) {
    return this.sm(value);
  };
  protoOf(AbstractEncoder).dn = function (enumDescriptor, index) {
    return this.sm(index);
  };
  protoOf(AbstractEncoder).en = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).fn = function (descriptor, index, value) {
    if (this.rm(descriptor, index)) {
      this.um(value);
    }
  };
  protoOf(AbstractEncoder).gn = function (descriptor, index, value) {
    if (this.rm(descriptor, index)) {
      this.vm(value);
    }
  };
  protoOf(AbstractEncoder).hn = function (descriptor, index, value) {
    if (this.rm(descriptor, index)) {
      this.wm(value);
    }
  };
  protoOf(AbstractEncoder).in = function (descriptor, index, value) {
    if (this.rm(descriptor, index)) {
      this.xm(value);
    }
  };
  protoOf(AbstractEncoder).jn = function (descriptor, index, value) {
    if (this.rm(descriptor, index)) {
      this.ym(value);
    }
  };
  protoOf(AbstractEncoder).kn = function (descriptor, index, value) {
    if (this.rm(descriptor, index)) {
      this.zm(value);
    }
  };
  protoOf(AbstractEncoder).ln = function (descriptor, index, value) {
    if (this.rm(descriptor, index)) {
      this.an(value);
    }
  };
  protoOf(AbstractEncoder).mn = function (descriptor, index, value) {
    if (this.rm(descriptor, index)) {
      this.bn(value);
    }
  };
  protoOf(AbstractEncoder).nn = function (descriptor, index, value) {
    if (this.rm(descriptor, index)) {
      this.cn(value);
    }
  };
  protoOf(AbstractEncoder).on = function (descriptor, index) {
    return this.rm(descriptor, index) ? this.en(descriptor.gk(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).pn = function (descriptor, index, serializer, value) {
    if (this.rm(descriptor, index)) {
      this.qn(serializer, value);
    }
  };
  protoOf(AbstractEncoder).rn = function (descriptor, index, serializer, value) {
    if (this.rm(descriptor, index)) {
      this.sn(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    this.wn_1 = -1;
    this.xn_1 = -3;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    return Companion_instance_0;
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.hm($this.pi(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.km($this.pi(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).fj = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.pi();
    var composite = encoder.xl(descriptor);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.nn(this.pi(), 0, actualSerializer.pi().qj());
    var tmp = this.pi();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.pn(tmp, 1, tmp$ret$0, value);
    composite.yl(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).qi = function (encoder, value) {
    return this.fj(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).ri = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.pi();
    var composite = decoder.xl(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.om()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.pm(this.pi());
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.hm(this.pi(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var value_0 = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (value_0 == null) {
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  var message = 'Cannot read polymorphic value before its type token';
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = value_0;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              value = composite.km(this.pi(), index, serializer);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var value_1 = value;
        // Inline function 'kotlin.contracts.contract' call
        if (value_1 == null) {
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = value_1;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.yl(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).gj = function (decoder, klassName) {
    return decoder.mm().yn(this.ej(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).hj = function (encoder, value) {
    return encoder.mm().zn(this.ej(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.i6();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.i6() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.i6() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.ao_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).pi = function () {
    return this.ao_1;
  };
  protoOf(NothingSerializer_0).bo = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).qi = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.bo(encoder, tmp);
  };
  protoOf(NothingSerializer_0).ri = function (decoder) {
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
    this.co_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).pi = function () {
    return this.co_1;
  };
  protoOf(DurationSerializer).do = function (encoder, value) {
    encoder.cn(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).qi = function (encoder, value) {
    return this.do(encoder, value instanceof Duration ? value.ag_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).eo = function (decoder) {
    return Companion_getInstance().zf(decoder.sl());
  };
  protoOf(DurationSerializer).ri = function (decoder) {
    return new Duration(this.eo(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).qj = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).qj = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).qj = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).qj = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.ho_1 = elementDescriptor;
    this.io_1 = 1;
  }
  protoOf(ListLikeDescriptor).ek = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).ck = function () {
    return this.io_1;
  };
  protoOf(ListLikeDescriptor).ik = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).hk = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).jk = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.qj() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).fk = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.qj() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).gk = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.qj() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.ho_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.ho_1, other.ho_1) ? this.qj() === other.qj() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.ho_1), 31) + getStringHashCode(this.qj()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.qj() + '(' + this.ho_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.no_1 = serialName;
    this.oo_1 = keyDescriptor;
    this.po_1 = valueDescriptor;
    this.qo_1 = 2;
  }
  protoOf(MapLikeDescriptor).qj = function () {
    return this.no_1;
  };
  protoOf(MapLikeDescriptor).ek = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).ck = function () {
    return this.qo_1;
  };
  protoOf(MapLikeDescriptor).ik = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).hk = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).jk = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.qj() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).fk = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.qj() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).gk = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.qj() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.oo_1;
        break;
      case 1:
        tmp = this.po_1;
        break;
      default:
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
    if (!(this.qj() === other.qj()))
      return false;
    if (!equals(this.oo_1, other.oo_1))
      return false;
    if (!equals(this.po_1, other.po_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.qj());
    result = imul(31, result) + hashCode(this.oo_1) | 0;
    result = imul(31, result) + hashCode(this.po_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.qj() + '(' + this.oo_1 + ', ' + this.po_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.vo_1 = primitive.qj() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).qj = function () {
    return this.vo_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.xo_1 = new ArrayListClassDesc(element.pi());
  }
  protoOf(ArrayListSerializer).pi = function () {
    return this.xo_1;
  };
  protoOf(ArrayListSerializer).yo = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).zo = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(ArrayListSerializer).ap = function (_this__u8e3s4) {
    return this.zo(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).bp = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).cp = function (_this__u8e3s4) {
    return this.bp(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).dp = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).ep = function (_this__u8e3s4) {
    return this.dp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).fp = function (_this__u8e3s4, size) {
    return _this__u8e3s4.e3(size);
  };
  protoOf(ArrayListSerializer).gp = function (_this__u8e3s4, size) {
    return this.fp(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).hp = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.u1(index, element);
  };
  protoOf(ArrayListSerializer).ip = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.hp(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.tp_1 = new HashSetClassDesc(eSerializer.pi());
  }
  protoOf(HashSetSerializer).pi = function () {
    return this.tp_1;
  };
  protoOf(HashSetSerializer).yo = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).up = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(HashSetSerializer).ap = function (_this__u8e3s4) {
    return this.up(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).vp = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).cp = function (_this__u8e3s4) {
    return this.vp(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).wp = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).ep = function (_this__u8e3s4) {
    return this.wp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).xp = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).gp = function (_this__u8e3s4, size) {
    return this.xp(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).yp = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.q(element);
  };
  protoOf(HashSetSerializer).ip = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.yp(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.aq_1 = new LinkedHashSetClassDesc(eSerializer.pi());
  }
  protoOf(LinkedHashSetSerializer).pi = function () {
    return this.aq_1;
  };
  protoOf(LinkedHashSetSerializer).yo = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).bq = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(LinkedHashSetSerializer).ap = function (_this__u8e3s4) {
    return this.bq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).cq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).cp = function (_this__u8e3s4) {
    return this.cq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).wp = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).ep = function (_this__u8e3s4) {
    return this.wp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).dq = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).gp = function (_this__u8e3s4, size) {
    return this.dq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).eq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.q(element);
  };
  protoOf(LinkedHashSetSerializer).ip = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.eq(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.hq_1 = new HashMapClassDesc(kSerializer.pi(), vSerializer.pi());
  }
  protoOf(HashMapSerializer).pi = function () {
    return this.hq_1;
  };
  protoOf(HashMapSerializer).iq = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(HashMapSerializer).jq = function (_this__u8e3s4) {
    return this.iq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).kq = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.p2().t();
  };
  protoOf(HashMapSerializer).lq = function (_this__u8e3s4) {
    return this.kq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).yo = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).mq = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.n(), 2);
  };
  protoOf(HashMapSerializer).ap = function (_this__u8e3s4) {
    return this.mq(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).nq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).cp = function (_this__u8e3s4) {
    return this.nq(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).oq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).ep = function (_this__u8e3s4) {
    return this.oq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).pq = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).gp = function (_this__u8e3s4, size) {
    return this.pq(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.wq_1 = new LinkedHashMapClassDesc(kSerializer.pi(), vSerializer.pi());
  }
  protoOf(LinkedHashMapSerializer).pi = function () {
    return this.wq_1;
  };
  protoOf(LinkedHashMapSerializer).iq = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(LinkedHashMapSerializer).jq = function (_this__u8e3s4) {
    return this.iq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).kq = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.p2().t();
  };
  protoOf(LinkedHashMapSerializer).lq = function (_this__u8e3s4) {
    return this.kq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).yo = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).xq = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.n(), 2);
  };
  protoOf(LinkedHashMapSerializer).ap = function (_this__u8e3s4) {
    return this.xq(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).yq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).cp = function (_this__u8e3s4) {
    return this.yq(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).oq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).ep = function (_this__u8e3s4) {
    return this.oq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).zq = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).gp = function (_this__u8e3s4, size) {
    return this.zq(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.br_1 = kClass;
    this.cr_1 = new ArrayClassDesc(eSerializer.pi());
  }
  protoOf(ReferenceArraySerializer).pi = function () {
    return this.cr_1;
  };
  protoOf(ReferenceArraySerializer).dr = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).jq = function (_this__u8e3s4) {
    return this.dr((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).er = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).lq = function (_this__u8e3s4) {
    return this.er((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).yo = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).fr = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(ReferenceArraySerializer).ap = function (_this__u8e3s4) {
    return this.fr(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).gr = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.br_1);
  };
  protoOf(ReferenceArraySerializer).cp = function (_this__u8e3s4) {
    return this.gr(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).hr = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).ep = function (_this__u8e3s4) {
    return this.hr((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ir = function (_this__u8e3s4, size) {
    return _this__u8e3s4.e3(size);
  };
  protoOf(ReferenceArraySerializer).gp = function (_this__u8e3s4, size) {
    return this.ir(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).jr = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.u1(index, element);
  };
  protoOf(ReferenceArraySerializer).ip = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.jr(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).kp = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(CollectionSerializer).jq = function (_this__u8e3s4) {
    return this.kp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).lp = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  protoOf(CollectionSerializer).lq = function (_this__u8e3s4) {
    return this.lp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.qq_1 = keySerializer;
    this.rq_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).sq = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.y9_1;
    var last = progression.z9_1;
    var step_0 = progression.aa_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.tq(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).op = function (decoder, builder, startIndex, size) {
    return this.sq(decoder, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).tq = function (decoder, index, builder, checkIndex) {
    var key = decoder.km(this.pi(), index, this.qq_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.pm(this.pi());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0 === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
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
    if (builder.u2(key)) {
      var tmp_2 = this.rq_1.pi().ek();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.jm(this.pi(), vIndex, this.rq_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.km(this.pi(), vIndex, this.rq_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.n2(key, value);
  };
  protoOf(MapLikeSerializer).pp = function (decoder, index, builder, checkIndex) {
    return this.tq(decoder, index, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).np = function (encoder, value) {
    var size = this.jq(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.pi();
    var composite = encoder.un(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.lq(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.q2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.r2();
      var tmp = this.pi();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.pn(tmp, tmp0, this.qq_1, k);
      var tmp_0 = this.pi();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.pn(tmp_0, tmp1, this.rq_1, v);
    }
    composite.yl(descriptor);
  };
  protoOf(MapLikeSerializer).qi = function (encoder, value) {
    return this.np(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.mp_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).np = function (encoder, value) {
    var size = this.jq(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.pi();
    var composite = encoder.un(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.lq(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.pn(this.pi(), index, this.mp_1, iterator.v());
      }
       while (inductionVariable < size);
    composite.yl(descriptor);
  };
  protoOf(CollectionLikeSerializer).qi = function (encoder, value) {
    return this.np(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).op = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.pp(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).pp = function (decoder, index, builder, checkIndex) {
    this.ip(builder, index, decoder.km(this.pi(), index, this.mp_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.qm($this.pi());
    $this.gp(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).rp = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.ep(previous);
    var builder = tmp1_elvis_lhs == null ? this.yo() : tmp1_elvis_lhs;
    var startIndex = this.ap(builder);
    var compositeDecoder = decoder.xl(this.pi());
    if (compositeDecoder.om()) {
      this.op(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.pm(this.pi());
        if (index === -1)
          break $l$loop;
        this.qp(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.yl(this.pi());
    return this.cp(builder);
  };
  protoOf(AbstractCollectionSerializer).ri = function (decoder) {
    return this.rp(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).qp = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.pp(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.pp.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.lr_1 = new PrimitiveArrayDescriptor(primitiveSerializer.pi());
  }
  protoOf(PrimitiveArraySerializer).pi = function () {
    return this.lr_1;
  };
  protoOf(PrimitiveArraySerializer).mr = function (_this__u8e3s4) {
    return _this__u8e3s4.nr();
  };
  protoOf(PrimitiveArraySerializer).ap = function (_this__u8e3s4) {
    return this.mr(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).or = function (_this__u8e3s4) {
    return _this__u8e3s4.pr();
  };
  protoOf(PrimitiveArraySerializer).cp = function (_this__u8e3s4) {
    return this.or(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).qr = function (_this__u8e3s4, size) {
    return _this__u8e3s4.e3(size);
  };
  protoOf(PrimitiveArraySerializer).gp = function (_this__u8e3s4, size) {
    return this.qr(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).rr = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).lq = function (_this__u8e3s4) {
    return this.rr((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).sr = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).ip = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.sr(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).yo = function () {
    return this.ep(this.tr());
  };
  protoOf(PrimitiveArraySerializer).wr = function (encoder, value) {
    var size = this.jq(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.lr_1;
    var composite = encoder.un(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.vr(composite, value, size);
    composite.yl(descriptor);
  };
  protoOf(PrimitiveArraySerializer).qi = function (encoder, value) {
    return this.wr(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).np = function (encoder, value) {
    return this.wr(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).ri = function (decoder) {
    return this.rp(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).xr = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.nr() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.e3(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.e3.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.yr_1 = longArray(0);
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).eb(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.cs_1[slot] = $this.cs_1[slot].ib((new Long(1, 0)).eb(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.cs_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.cs_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.db());
          slotMarks = slotMarks.ib((new Long(1, 0)).eb(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.as_1($this.zr_1, index)) {
            $this.cs_1[slot] = slotMarks;
            return index;
          }
        }
        $this.cs_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.zr_1 = descriptor;
    this.as_1 = readIfAbsent;
    var elementsCount = this.zr_1.ck();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).eb(elementsCount);
      }
      tmp.bs_1 = tmp_0;
      this.cs_1 = Companion_getInstance_7().yr_1;
    } else {
      this.bs_1 = new Long(0, 0);
      this.cs_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).ds = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.bs_1 = this.bs_1.ib((new Long(1, 0)).eb(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).es = function () {
    var elementsCount = this.zr_1.ck();
    while (!this.bs_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.bs_1.db());
      this.bs_1 = this.bs_1.ib((new Long(1, 0)).eb(index));
      if (this.as_1(this.zr_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
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
        // Inline function 'kotlinx.serialization.internal.createAnnotatedEnumSerializer.<anonymous>' call
        descriptor.rs(element);
      }
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var inductionVariable_0 = 0;
    var last_0 = values.length;
    while (inductionVariable_0 < last_0) {
      var item = values[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'kotlinx.serialization.internal.createAnnotatedEnumSerializer.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp0_elvis_lhs = getOrNull(names, tmp1);
      var elementName = tmp0_elvis_lhs == null ? item.m9_1 : tmp0_elvis_lhs;
      descriptor.ss(elementName);
      var tmp1_safe_receiver = getOrNull(entryAnnotations, tmp1);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_1 = 0;
        var last_1 = tmp1_safe_receiver.length;
        while (inductionVariable_1 < last_1) {
          var element_0 = tmp1_safe_receiver[inductionVariable_1];
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.createAnnotatedEnumSerializer.<anonymous>.<anonymous>' call
          descriptor.ts(element_0);
        }
      }
    }
    return EnumSerializer_init_$Create$(serialName, values, descriptor);
  }
  function EnumSerializer_init_$Init$(serialName, values, descriptor, $this) {
    EnumSerializer.call($this, serialName, values);
    $this.vs_1 = descriptor;
    return $this;
  }
  function EnumSerializer_init_$Create$(serialName, values, descriptor) {
    return EnumSerializer_init_$Init$(serialName, values, descriptor, objectCreate(protoOf(EnumSerializer)));
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.us_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.us_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.serialization.internal.EnumSerializer.createUnmarkedDescriptor.<anonymous>' call
      d.ss(element.m9_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.vs_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.us_1 = values;
    this.vs_1 = null;
    var tmp = this;
    tmp.ws_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).pi = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ws_1;
    descriptor$factory_1();
    return this_0.r2();
  };
  protoOf(EnumSerializer).xs = function (encoder, value) {
    var index = indexOf(this.us_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0('' + value + ' is not a valid enum ' + this.pi().qj() + ', ' + ('must be one of ' + contentToString(this.us_1)));
    }
    encoder.dn(this.pi(), index);
  };
  protoOf(EnumSerializer).qi = function (encoder, value) {
    return this.xs(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).ri = function (decoder) {
    var index = decoder.tl(this.pi());
    if (!(0 <= index ? index <= (this.us_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.pi().qj() + ' enum values, ' + ('values size is ' + this.us_1.length));
    }
    return this.us_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.pi().qj() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.lt_1;
    elementDescriptors$factory();
    return this_0.r2();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.ik(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.kt_1 = ENUM_getInstance();
    var tmp = this;
    tmp.lt_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).ek = function () {
    return this.kt_1;
  };
  protoOf(EnumDescriptor).gk = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.ek() === ENUM_getInstance()))
      return false;
    if (!(this.qj() === other.qj()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.qj() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.qj());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = get_elementNames(this).t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.EnumDescriptor.hashCode.<anonymous>' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.pi();
    }, null);
  }
  function elementDescriptors$factory() {
    return getPropertyCallableRef('elementDescriptors', 1, KProperty1, function (receiver) {
      return _get_elementDescriptors__y23q9p(receiver);
    }, null);
  }
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.au_1 = true;
  }
  protoOf(InlineClassDescriptor).dk = function () {
    return this.au_1;
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
      if (!(this.qj() === other.qj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.au_1 ? contentEquals(this.mt(), other.mt()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ck() === other.ck())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ck();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.gk(index).qj() === other.gk(index).qj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.gk(index).ek(), other.gk(index).ek())) {
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
    this.bu_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.bu_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).pi = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).qi = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ri = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.eu_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).mm = function () {
    return this.eu_1;
  };
  protoOf(NoOpEncoder).sm = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).tm = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).um = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).vm = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).wm = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).xm = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ym = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).zm = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).an = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).bn = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).cn = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).dn = function (enumDescriptor, index) {
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
    this.fu_1 = OBJECT_getInstance();
    this.gu_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).ek = function () {
    return this.fu_1;
  };
  protoOf(NothingSerialDescriptor).qj = function () {
    return this.gu_1;
  };
  protoOf(NothingSerialDescriptor).ck = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).ik = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).hk = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).jk = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).gk = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).fk = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.gu_1) + imul(31, this.fu_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.hu_1 = serializer;
    this.iu_1 = new SerialDescriptorForNullable(this.hu_1.pi());
  }
  protoOf(NullableSerializer).pi = function () {
    return this.iu_1;
  };
  protoOf(NullableSerializer).ju = function (encoder, value) {
    if (!(value == null)) {
      encoder.tn();
      encoder.qn(this.hu_1, value);
    } else {
      encoder.tm();
    }
  };
  protoOf(NullableSerializer).qi = function (encoder, value) {
    return this.ju(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).ri = function (decoder) {
    return decoder.il() ? decoder.wl(this.hu_1) : decoder.jl();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.hu_1, other.hu_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.hu_1);
  };
  function SerialDescriptorForNullable(original) {
    this.kk_1 = original;
    this.lk_1 = this.kk_1.qj() + '?';
    this.mk_1 = cachedSerialNames(this.kk_1);
  }
  protoOf(SerialDescriptorForNullable).bk = function () {
    return this.kk_1.bk();
  };
  protoOf(SerialDescriptorForNullable).ck = function () {
    return this.kk_1.ck();
  };
  protoOf(SerialDescriptorForNullable).dk = function () {
    return this.kk_1.dk();
  };
  protoOf(SerialDescriptorForNullable).ek = function () {
    return this.kk_1.ek();
  };
  protoOf(SerialDescriptorForNullable).fk = function (index) {
    return this.kk_1.fk(index);
  };
  protoOf(SerialDescriptorForNullable).gk = function (index) {
    return this.kk_1.gk(index);
  };
  protoOf(SerialDescriptorForNullable).hk = function (name) {
    return this.kk_1.hk(name);
  };
  protoOf(SerialDescriptorForNullable).ik = function (index) {
    return this.kk_1.ik(index);
  };
  protoOf(SerialDescriptorForNullable).jk = function (index) {
    return this.kk_1.jk(index);
  };
  protoOf(SerialDescriptorForNullable).qj = function () {
    return this.lk_1;
  };
  protoOf(SerialDescriptorForNullable).gl = function () {
    return this.mk_1;
  };
  protoOf(SerialDescriptorForNullable).xj = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.kk_1, other.kk_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.kk_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.kk_1), 31);
  };
  function ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, $this) {
    ObjectSerializer.call($this, serialName, objectInstance);
    $this.lu_1 = asList(classAnnotations);
    return $this;
  }
  function ObjectSerializer_init_$Create$(serialName, objectInstance, classAnnotations) {
    return ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, objectCreate(protoOf(ObjectSerializer)));
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.xi_1 = this$0.lu_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.ku_1 = objectInstance;
    this.lu_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.mu_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).pi = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mu_1;
    descriptor$factory_2();
    return this_0.r2();
  };
  protoOf(ObjectSerializer).fj = function (encoder, value) {
    encoder.xl(this.pi()).yl(this.pi());
  };
  protoOf(ObjectSerializer).qi = function (encoder, value) {
    return this.fj(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).ri = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.pi();
    var composite = decoder.xl(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.om()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.pm(this.pi());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.yl(descriptor);
    return this.ku_1;
  };
  function descriptor$factory_2() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.pi();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.gl();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.ck());
    var inductionVariable = 0;
    var last = _this__u8e3s4.ck();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.ik(i);
        result.q(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.w6();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + t);
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      var value = _this__u8e3s4.lf_1;
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'kotlinx.serialization.internal.typeOrThrow.<anonymous>' call
        var message = 'Star projections in type arguments are not allowed, but had ' + _this__u8e3s4.lf_1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.i6();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.y())) {
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
  function serializerNotRegistered(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4));
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
          var element = descriptor.ik(i);
          missingFields.q(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.qj());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.os_1;
    childSerializers$factory();
    return this_0.r2();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.qs_1;
    _hashCode$factory_0();
    return this_0.r2();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.js_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.js_1[i];
        indices.n2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.gs_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cu();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.gs_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.du();
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
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.pi();
          destination.q(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.mt());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.ik(i) + ': ' + this$0.gk(i).qj();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.fs_1 = serialName;
    this.gs_1 = generatedSerializer;
    this.hs_1 = elementsCount;
    this.is_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.hs_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.js_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.hs_1;
    tmp_3.ks_1 = fillArrayVal(Array(size), null);
    this.ls_1 = null;
    this.ms_1 = booleanArray(this.hs_1);
    this.ns_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.os_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.ps_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.qs_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).qj = function () {
    return this.fs_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ck = function () {
    return this.hs_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ek = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).bk = function () {
    var tmp0_elvis_lhs = this.ls_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).gl = function () {
    return this.ns_1.l2();
  };
  protoOf(PluginGeneratedSerialDescriptor).mt = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ps_1;
    typeParameterDescriptors$factory();
    return this_0.r2();
  };
  protoOf(PluginGeneratedSerialDescriptor).nt = function (name, isOptional) {
    this.is_1 = this.is_1 + 1 | 0;
    this.js_1[this.is_1] = name;
    this.ms_1[this.is_1] = isOptional;
    this.ks_1[this.is_1] = null;
    if (this.is_1 === (this.hs_1 - 1 | 0)) {
      this.ns_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).ss = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.nt(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.nt.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).ts = function (annotation) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.pushAnnotation.<anonymous>' call
    var it = this.ks_1[this.is_1];
    var tmp;
    if (it == null) {
      var result = ArrayList_init_$Create$(1);
      this.ks_1[this.is_1] = result;
      tmp = result;
    } else {
      tmp = it;
    }
    var list = tmp;
    list.q(annotation);
  };
  protoOf(PluginGeneratedSerialDescriptor).rs = function (a) {
    if (this.ls_1 == null) {
      this.ls_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.ls_1).q(a);
  };
  protoOf(PluginGeneratedSerialDescriptor).gk = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).pi();
  };
  protoOf(PluginGeneratedSerialDescriptor).jk = function (index) {
    return getChecked_0(this.ms_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).fk = function (index) {
    var tmp0_elvis_lhs = getChecked(this.ks_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ik = function (index) {
    return getChecked(this.js_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).hk = function (name) {
    var tmp0_elvis_lhs = this.ns_1.x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
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
      if (!(this.qj() === other.qj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.mt(), other.mt())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ck() === other.ck())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ck();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.gk(index).qj() === other.gk(index).qj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.gk(index).ek(), other.gk(index).ek())) {
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
    var tmp = until(0, this.hs_1);
    var tmp_0 = this.qj() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.qj());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.qj();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.t();
    while (tmp0_iterator_0.u()) {
      var element_0 = tmp0_iterator_0.v();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.ek();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.mt();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
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
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).qu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).jq = function (_this__u8e3s4) {
    return this.qu((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).ru = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).ep = function (_this__u8e3s4) {
    return this.ru((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).tr = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    builder.vu(decoder.gm(this.lr_1, index));
  };
  protoOf(CharArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    return this.su(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).ur = function (decoder, index, builder, checkIndex) {
    return this.su(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).wu = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.mn(this.lr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).vr = function (encoder, content, size) {
    return this.wu(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).zu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).jq = function (_this__u8e3s4) {
    return this.zu((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).av = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).ep = function (_this__u8e3s4) {
    return this.av((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).tr = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).bv = function (decoder, index, builder, checkIndex) {
    builder.ev(decoder.fm(this.lr_1, index));
  };
  protoOf(DoubleArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    return this.bv(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).ur = function (decoder, index, builder, checkIndex) {
    return this.bv(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).fv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ln(this.lr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).vr = function (encoder, content, size) {
    return this.fv(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).iv = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).jq = function (_this__u8e3s4) {
    return this.iv((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).jv = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).ep = function (_this__u8e3s4) {
    return this.jv((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).tr = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).kv = function (decoder, index, builder, checkIndex) {
    builder.nv(decoder.em(this.lr_1, index));
  };
  protoOf(FloatArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    return this.kv(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).ur = function (decoder, index, builder, checkIndex) {
    return this.kv(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).ov = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.kn(this.lr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).vr = function (encoder, content, size) {
    return this.ov(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_0()));
  }
  protoOf(LongArraySerializer_0).rv = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).jq = function (_this__u8e3s4) {
    return this.rv((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).sv = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).ep = function (_this__u8e3s4) {
    return this.sv((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).tr = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).tv = function (decoder, index, builder, checkIndex) {
    builder.wv(decoder.dm(this.lr_1, index));
  };
  protoOf(LongArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    return this.tv(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).ur = function (decoder, index, builder, checkIndex) {
    return this.tv(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).xv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.jn(this.lr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).vr = function (encoder, content, size) {
    return this.xv(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_2()));
  }
  protoOf(ULongArraySerializer_0).aw = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).jq = function (_this__u8e3s4) {
    return this.aw(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.ai_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).bw = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).ep = function (_this__u8e3s4) {
    return this.bw(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.ai_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).cw = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).tr = function () {
    return new ULongArray(this.cw());
  };
  protoOf(ULongArraySerializer_0).dw = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.im(this.lr_1, index).ol();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.gw(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    return this.dw(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).ur = function (decoder, index, builder, checkIndex) {
    return this.dw(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).hw = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.on(this.lr_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.ym(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).vr = function (encoder, content, size) {
    return this.hw(encoder, content instanceof ULongArray ? content.ai_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).kw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).jq = function (_this__u8e3s4) {
    return this.kw((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).lw = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).ep = function (_this__u8e3s4) {
    return this.lw((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).tr = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).mw = function (decoder, index, builder, checkIndex) {
    builder.pw(decoder.cm(this.lr_1, index));
  };
  protoOf(IntArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    return this.mw(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).ur = function (decoder, index, builder, checkIndex) {
    return this.mw(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).qw = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.in(this.lr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).vr = function (encoder, content, size) {
    return this.qw(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_3()));
  }
  protoOf(UIntArraySerializer_0).tw = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).jq = function (_this__u8e3s4) {
    return this.tw(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.oh_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).uw = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).ep = function (_this__u8e3s4) {
    return this.uw(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.oh_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).vw = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).tr = function () {
    return new UIntArray(this.vw());
  };
  protoOf(UIntArraySerializer_0).ww = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.im(this.lr_1, index).nl();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.zw(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    return this.ww(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).ur = function (decoder, index, builder, checkIndex) {
    return this.ww(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).ax = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.on(this.lr_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.xm(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).vr = function (encoder, content, size) {
    return this.ax(encoder, content instanceof UIntArray ? content.oh_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).dx = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).jq = function (_this__u8e3s4) {
    return this.dx((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).ex = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).ep = function (_this__u8e3s4) {
    return this.ex((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).tr = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).fx = function (decoder, index, builder, checkIndex) {
    builder.ix(decoder.bm(this.lr_1, index));
  };
  protoOf(ShortArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    return this.fx(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).ur = function (decoder, index, builder, checkIndex) {
    return this.fx(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).jx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.hn(this.lr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).vr = function (encoder, content, size) {
    return this.jx(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_4()));
  }
  protoOf(UShortArraySerializer_0).mx = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).jq = function (_this__u8e3s4) {
    return this.mx(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.mi_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).nx = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).ep = function (_this__u8e3s4) {
    return this.nx(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.mi_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).ox = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).tr = function () {
    return new UShortArray(this.ox());
  };
  protoOf(UShortArraySerializer_0).px = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.im(this.lr_1, index).ml();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.sx(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    return this.px(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).ur = function (decoder, index, builder, checkIndex) {
    return this.px(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).tx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.on(this.lr_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.wm(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).vr = function (encoder, content, size) {
    return this.tx(encoder, content instanceof UShortArray ? content.mi_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).wx = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).jq = function (_this__u8e3s4) {
    return this.wx((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).xx = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).ep = function (_this__u8e3s4) {
    return this.xx((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).tr = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).yx = function (decoder, index, builder, checkIndex) {
    builder.by(decoder.am(this.lr_1, index));
  };
  protoOf(ByteArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    return this.yx(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).ur = function (decoder, index, builder, checkIndex) {
    return this.yx(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).cy = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.gn(this.lr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).vr = function (encoder, content, size) {
    return this.cy(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(Companion_getInstance_5()));
  }
  protoOf(UByteArraySerializer_0).fy = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).jq = function (_this__u8e3s4) {
    return this.fy(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.ch_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).gy = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).ep = function (_this__u8e3s4) {
    return this.gy(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.ch_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).hy = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).tr = function () {
    return new UByteArray(this.hy());
  };
  protoOf(UByteArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.im(this.lr_1, index).ll();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.ly(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    return this.iy(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).ur = function (decoder, index, builder, checkIndex) {
    return this.iy(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).my = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.on(this.lr_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.vm(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).vr = function (encoder, content, size) {
    return this.my(encoder, content instanceof UByteArray ? content.ch_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).py = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).jq = function (_this__u8e3s4) {
    return this.py((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).qy = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).ep = function (_this__u8e3s4) {
    return this.qy((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).tr = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    builder.uy(decoder.zl(this.lr_1, index));
  };
  protoOf(BooleanArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    return this.ry(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).ur = function (decoder, index, builder, checkIndex) {
    return this.ry(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).vy = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.fn(this.lr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).vr = function (encoder, content, size) {
    return this.vy(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.tu_1 = bufferWithData;
    this.uu_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(CharArrayBuilder).nr = function () {
    return this.uu_1;
  };
  protoOf(CharArrayBuilder).e3 = function (requiredCapacity) {
    if (this.tu_1.length < requiredCapacity)
      this.tu_1 = copyOf(this.tu_1, coerceAtLeast(requiredCapacity, imul(this.tu_1.length, 2)));
  };
  protoOf(CharArrayBuilder).vu = function (c) {
    this.xr();
    var tmp = this.tu_1;
    var tmp1 = this.uu_1;
    this.uu_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).pr = function () {
    return copyOf(this.tu_1, this.uu_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.cv_1 = bufferWithData;
    this.dv_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(DoubleArrayBuilder).nr = function () {
    return this.dv_1;
  };
  protoOf(DoubleArrayBuilder).e3 = function (requiredCapacity) {
    if (this.cv_1.length < requiredCapacity)
      this.cv_1 = copyOf_0(this.cv_1, coerceAtLeast(requiredCapacity, imul(this.cv_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).ev = function (c) {
    this.xr();
    var tmp = this.cv_1;
    var tmp1 = this.dv_1;
    this.dv_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).pr = function () {
    return copyOf_0(this.cv_1, this.dv_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.lv_1 = bufferWithData;
    this.mv_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(FloatArrayBuilder).nr = function () {
    return this.mv_1;
  };
  protoOf(FloatArrayBuilder).e3 = function (requiredCapacity) {
    if (this.lv_1.length < requiredCapacity)
      this.lv_1 = copyOf_1(this.lv_1, coerceAtLeast(requiredCapacity, imul(this.lv_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).nv = function (c) {
    this.xr();
    var tmp = this.lv_1;
    var tmp1 = this.mv_1;
    this.mv_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).pr = function () {
    return copyOf_1(this.lv_1, this.mv_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.uv_1 = bufferWithData;
    this.vv_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(LongArrayBuilder).nr = function () {
    return this.vv_1;
  };
  protoOf(LongArrayBuilder).e3 = function (requiredCapacity) {
    if (this.uv_1.length < requiredCapacity)
      this.uv_1 = copyOf_2(this.uv_1, coerceAtLeast(requiredCapacity, imul(this.uv_1.length, 2)));
  };
  protoOf(LongArrayBuilder).wv = function (c) {
    this.xr();
    var tmp = this.uv_1;
    var tmp1 = this.vv_1;
    this.vv_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).pr = function () {
    return copyOf_2(this.uv_1, this.vv_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ew_1 = bufferWithData;
    this.fw_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.e3(10);
  }
  protoOf(ULongArrayBuilder).nr = function () {
    return this.fw_1;
  };
  protoOf(ULongArrayBuilder).e3 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.ew_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.ew_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.ew_1), 2));
      tmp.ew_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).gw = function (c) {
    this.xr();
    var tmp = this.ew_1;
    var tmp1 = this.fw_1;
    this.fw_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).wy = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.ew_1;
    var newSize = this.fw_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
  };
  protoOf(ULongArrayBuilder).pr = function () {
    return new ULongArray(this.wy());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.nw_1 = bufferWithData;
    this.ow_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(IntArrayBuilder).nr = function () {
    return this.ow_1;
  };
  protoOf(IntArrayBuilder).e3 = function (requiredCapacity) {
    if (this.nw_1.length < requiredCapacity)
      this.nw_1 = copyOf_3(this.nw_1, coerceAtLeast(requiredCapacity, imul(this.nw_1.length, 2)));
  };
  protoOf(IntArrayBuilder).pw = function (c) {
    this.xr();
    var tmp = this.nw_1;
    var tmp1 = this.ow_1;
    this.ow_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).pr = function () {
    return copyOf_3(this.nw_1, this.ow_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.xw_1 = bufferWithData;
    this.yw_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.e3(10);
  }
  protoOf(UIntArrayBuilder).nr = function () {
    return this.yw_1;
  };
  protoOf(UIntArrayBuilder).e3 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.xw_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.xw_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.xw_1), 2));
      tmp.xw_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).zw = function (c) {
    this.xr();
    var tmp = this.xw_1;
    var tmp1 = this.yw_1;
    this.yw_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).xy = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.xw_1;
    var newSize = this.yw_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
  };
  protoOf(UIntArrayBuilder).pr = function () {
    return new UIntArray(this.xy());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.gx_1 = bufferWithData;
    this.hx_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(ShortArrayBuilder).nr = function () {
    return this.hx_1;
  };
  protoOf(ShortArrayBuilder).e3 = function (requiredCapacity) {
    if (this.gx_1.length < requiredCapacity)
      this.gx_1 = copyOf_4(this.gx_1, coerceAtLeast(requiredCapacity, imul(this.gx_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).ix = function (c) {
    this.xr();
    var tmp = this.gx_1;
    var tmp1 = this.hx_1;
    this.hx_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).pr = function () {
    return copyOf_4(this.gx_1, this.hx_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.qx_1 = bufferWithData;
    this.rx_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.e3(10);
  }
  protoOf(UShortArrayBuilder).nr = function () {
    return this.rx_1;
  };
  protoOf(UShortArrayBuilder).e3 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.qx_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.qx_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.qx_1), 2));
      tmp.qx_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).sx = function (c) {
    this.xr();
    var tmp = this.qx_1;
    var tmp1 = this.rx_1;
    this.rx_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).yy = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.qx_1;
    var newSize = this.rx_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
  };
  protoOf(UShortArrayBuilder).pr = function () {
    return new UShortArray(this.yy());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.zx_1 = bufferWithData;
    this.ay_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(ByteArrayBuilder).nr = function () {
    return this.ay_1;
  };
  protoOf(ByteArrayBuilder).e3 = function (requiredCapacity) {
    if (this.zx_1.length < requiredCapacity)
      this.zx_1 = copyOf_5(this.zx_1, coerceAtLeast(requiredCapacity, imul(this.zx_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).by = function (c) {
    this.xr();
    var tmp = this.zx_1;
    var tmp1 = this.ay_1;
    this.ay_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).pr = function () {
    return copyOf_5(this.zx_1, this.ay_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.jy_1 = bufferWithData;
    this.ky_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.e3(10);
  }
  protoOf(UByteArrayBuilder).nr = function () {
    return this.ky_1;
  };
  protoOf(UByteArrayBuilder).e3 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.jy_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.jy_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.jy_1), 2));
      tmp.jy_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).ly = function (c) {
    this.xr();
    var tmp = this.jy_1;
    var tmp1 = this.ky_1;
    this.ky_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).zy = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.jy_1;
    var newSize = this.ky_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
  };
  protoOf(UByteArrayBuilder).pr = function () {
    return new UByteArray(this.zy());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.sy_1 = bufferWithData;
    this.ty_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(BooleanArrayBuilder).nr = function () {
    return this.ty_1;
  };
  protoOf(BooleanArrayBuilder).e3 = function (requiredCapacity) {
    if (this.sy_1.length < requiredCapacity)
      this.sy_1 = copyOf_6(this.sy_1, coerceAtLeast(requiredCapacity, imul(this.sy_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).uy = function (c) {
    this.xr();
    var tmp = this.sy_1;
    var tmp1 = this.ty_1;
    this.ty_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).pr = function () {
    return copyOf_6(this.sy_1, this.ty_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().x2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.az_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).pi = function () {
    return this.az_1;
  };
  protoOf(StringSerializer).bz = function (encoder, value) {
    return encoder.cn(value);
  };
  protoOf(StringSerializer).qi = function (encoder, value) {
    return this.bz(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).ri = function (decoder) {
    return decoder.sl();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.cz_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).pi = function () {
    return this.cz_1;
  };
  protoOf(CharSerializer).dz = function (encoder, value) {
    return encoder.bn(value);
  };
  protoOf(CharSerializer).qi = function (encoder, value) {
    return this.dz(encoder, value instanceof Char ? value.fa_1 : THROW_CCE());
  };
  protoOf(CharSerializer).ez = function (decoder) {
    return decoder.rl();
  };
  protoOf(CharSerializer).ri = function (decoder) {
    return new Char(this.ez(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.fz_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).pi = function () {
    return this.fz_1;
  };
  protoOf(DoubleSerializer).gz = function (encoder, value) {
    return encoder.an(value);
  };
  protoOf(DoubleSerializer).qi = function (encoder, value) {
    return this.gz(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).ri = function (decoder) {
    return decoder.ql();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.hz_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).pi = function () {
    return this.hz_1;
  };
  protoOf(FloatSerializer).iz = function (encoder, value) {
    return encoder.zm(value);
  };
  protoOf(FloatSerializer).qi = function (encoder, value) {
    return this.iz(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).ri = function (decoder) {
    return decoder.pl();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.jz_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).pi = function () {
    return this.jz_1;
  };
  protoOf(LongSerializer).kz = function (encoder, value) {
    return encoder.ym(value);
  };
  protoOf(LongSerializer).qi = function (encoder, value) {
    return this.kz(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).ri = function (decoder) {
    return decoder.ol();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.lz_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).pi = function () {
    return this.lz_1;
  };
  protoOf(IntSerializer).mz = function (encoder, value) {
    return encoder.xm(value);
  };
  protoOf(IntSerializer).qi = function (encoder, value) {
    return this.mz(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).ri = function (decoder) {
    return decoder.nl();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.nz_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).pi = function () {
    return this.nz_1;
  };
  protoOf(ShortSerializer).oz = function (encoder, value) {
    return encoder.wm(value);
  };
  protoOf(ShortSerializer).qi = function (encoder, value) {
    return this.oz(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).ri = function (decoder) {
    return decoder.ml();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.pz_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).pi = function () {
    return this.pz_1;
  };
  protoOf(ByteSerializer).qz = function (encoder, value) {
    return encoder.vm(value);
  };
  protoOf(ByteSerializer).qi = function (encoder, value) {
    return this.qz(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).ri = function (decoder) {
    return decoder.ll();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.rz_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).pi = function () {
    return this.rz_1;
  };
  protoOf(BooleanSerializer).sz = function (encoder, value) {
    return encoder.um(value);
  };
  protoOf(BooleanSerializer).qi = function (encoder, value) {
    return this.sz(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).ri = function (decoder) {
    return decoder.kl();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.tz_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).pi = function () {
    return this.tz_1.pi();
  };
  protoOf(UnitSerializer).uz = function (decoder) {
    this.tz_1.ri(decoder);
  };
  protoOf(UnitSerializer).ri = function (decoder) {
    this.uz(decoder);
    return Unit_instance;
  };
  protoOf(UnitSerializer).vz = function (encoder, value) {
    this.tz_1.fj(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).qi = function (encoder, value) {
    return this.vz(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.wz_1 = serialName;
    this.xz_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).qj = function () {
    return this.wz_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).ek = function () {
    return this.xz_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).ck = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).ik = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).hk = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).jk = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).gk = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).fk = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.wz_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.wz_1 === other.wz_1 ? equals(this.xz_1, other.xz_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.wz_1) + imul(31, this.xz_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().l2();
    var tmp0_iterator = keys.t();
    while (tmp0_iterator.u()) {
      var primitive = tmp0_iterator.v();
      var simpleName = capitalize(ensureNotNull(primitive.i6()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var it = charSequenceGet(_this__u8e3s4, 0);
      var tmp$ret$1 = isLowerCase(it) ? titlecase(it) : toString_0(it);
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + _this__u8e3s4.substring(1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().j7(), serializer_2(StringCompanionObject_instance)), to(getKClass(Char), serializer_3(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().m7(), CharArraySerializer()), to(PrimitiveClasses_getInstance().h7(), serializer_4(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().s7(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().g7(), serializer_5(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().r7(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().q7(), LongArraySerializer()), to(getKClass(ULong), serializer_7(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().f7(), serializer_8(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().p7(), IntArraySerializer()), to(getKClass(UInt), serializer_9(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().e7(), serializer_10(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().o7(), ShortArraySerializer()), to(getKClass(UShort), serializer_11(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().d7(), serializer_12(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().n7(), ByteArraySerializer()), to(getKClass(UByte), serializer_13(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().c7(), serializer_14(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().l7(), BooleanArraySerializer()), to(getKClass(Unit), serializer_15(Unit_instance)), to(PrimitiveClasses_getInstance().b7(), NothingSerializer()), to(getKClass(Duration), serializer_16(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).a10 = function (_this__u8e3s4, index) {
    return this.c10(this.b10(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).c10 = function (nestedName) {
    var tmp0_elvis_lhs = this.f10();
    return this.g10(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).b10 = function (descriptor, index) {
    return descriptor.ik(index);
  };
  protoOf(NamedValueDecoder).g10 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.u10(tag);
    var r = block();
    if (!$this.e10_1) {
      $this.v10();
    }
    $this.e10_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.vl($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var this_0 = this$0;
      var isNullabilitySupported = $deserializer.pi().xj();
      var tmp;
      if (isNullabilitySupported ? true : this_0.il()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.vl($deserializer, $previousValue);
      } else {
        tmp = this_0.jl();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.d10_1 = ArrayList_init_$Create$_0();
    this.e10_1 = false;
  }
  protoOf(TaggedDecoder).mm = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).h10 = function (tag) {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).i10 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).j10 = function (tag) {
    var tmp = this.h10(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).k10 = function (tag) {
    var tmp = this.h10(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).l10 = function (tag) {
    var tmp = this.h10(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).m10 = function (tag) {
    var tmp = this.h10(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).n10 = function (tag) {
    var tmp = this.h10(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).o10 = function (tag) {
    var tmp = this.h10(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).p10 = function (tag) {
    var tmp = this.h10(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q10 = function (tag) {
    var tmp = this.h10(tag);
    return tmp instanceof Char ? tmp.fa_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).r10 = function (tag) {
    var tmp = this.h10(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s10 = function (tag, enumDescriptor) {
    var tmp = this.h10(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t10 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.u10(tag);
    return this;
  };
  protoOf(TaggedDecoder).vl = function (deserializer, previousValue) {
    return this.wl(deserializer);
  };
  protoOf(TaggedDecoder).ul = function (descriptor) {
    return this.t10(this.v10(), descriptor);
  };
  protoOf(TaggedDecoder).il = function () {
    var tmp0_elvis_lhs = this.f10();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.i10(currentTag);
  };
  protoOf(TaggedDecoder).jl = function () {
    return null;
  };
  protoOf(TaggedDecoder).kl = function () {
    return this.j10(this.v10());
  };
  protoOf(TaggedDecoder).ll = function () {
    return this.k10(this.v10());
  };
  protoOf(TaggedDecoder).ml = function () {
    return this.l10(this.v10());
  };
  protoOf(TaggedDecoder).nl = function () {
    return this.m10(this.v10());
  };
  protoOf(TaggedDecoder).ol = function () {
    return this.n10(this.v10());
  };
  protoOf(TaggedDecoder).pl = function () {
    return this.o10(this.v10());
  };
  protoOf(TaggedDecoder).ql = function () {
    return this.p10(this.v10());
  };
  protoOf(TaggedDecoder).rl = function () {
    return this.q10(this.v10());
  };
  protoOf(TaggedDecoder).sl = function () {
    return this.r10(this.v10());
  };
  protoOf(TaggedDecoder).tl = function (enumDescriptor) {
    return this.s10(this.v10(), enumDescriptor);
  };
  protoOf(TaggedDecoder).xl = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).yl = function (descriptor) {
  };
  protoOf(TaggedDecoder).zl = function (descriptor, index) {
    return this.j10(this.a10(descriptor, index));
  };
  protoOf(TaggedDecoder).am = function (descriptor, index) {
    return this.k10(this.a10(descriptor, index));
  };
  protoOf(TaggedDecoder).bm = function (descriptor, index) {
    return this.l10(this.a10(descriptor, index));
  };
  protoOf(TaggedDecoder).cm = function (descriptor, index) {
    return this.m10(this.a10(descriptor, index));
  };
  protoOf(TaggedDecoder).dm = function (descriptor, index) {
    return this.n10(this.a10(descriptor, index));
  };
  protoOf(TaggedDecoder).em = function (descriptor, index) {
    return this.o10(this.a10(descriptor, index));
  };
  protoOf(TaggedDecoder).fm = function (descriptor, index) {
    return this.p10(this.a10(descriptor, index));
  };
  protoOf(TaggedDecoder).gm = function (descriptor, index) {
    return this.q10(this.a10(descriptor, index));
  };
  protoOf(TaggedDecoder).hm = function (descriptor, index) {
    return this.r10(this.a10(descriptor, index));
  };
  protoOf(TaggedDecoder).im = function (descriptor, index) {
    return this.t10(this.a10(descriptor, index), descriptor.gk(index));
  };
  protoOf(TaggedDecoder).jm = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.a10(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).lm = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.a10(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).f10 = function () {
    return lastOrNull(this.d10_1);
  };
  protoOf(TaggedDecoder).u10 = function (name) {
    this.d10_1.q(name);
  };
  protoOf(TaggedDecoder).v10 = function () {
    var r = this.d10_1.f1(get_lastIndex_0(this.d10_1));
    this.e10_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.w10_1 = key;
    this.x10_1 = value;
  }
  protoOf(MapEntry).q2 = function () {
    return this.w10_1;
  };
  protoOf(MapEntry).r2 = function () {
    return this.x10_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.w10_1 + ', value=' + this.x10_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.w10_1 == null ? 0 : hashCode(this.w10_1);
    result = imul(result, 31) + (this.x10_1 == null ? 0 : hashCode(this.x10_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.w10_1, tmp0_other_with_cast.w10_1))
      return false;
    if (!equals(this.x10_1, tmp0_other_with_cast.x10_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.dj('key', $keySerializer.pi());
      $this$buildSerialDescriptor.dj('value', $valueSerializer.pi());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.a11_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).pi = function () {
    return this.a11_1;
  };
  protoOf(MapEntrySerializer_0).b11 = function (_this__u8e3s4) {
    return _this__u8e3s4.q2();
  };
  protoOf(MapEntrySerializer_0).c11 = function (_this__u8e3s4) {
    return this.b11((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).d11 = function (_this__u8e3s4) {
    return _this__u8e3s4.r2();
  };
  protoOf(MapEntrySerializer_0).e11 = function (_this__u8e3s4) {
    return this.d11((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).f11 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.dj('first', $keySerializer.pi());
      $this$buildClassSerialDescriptor.dj('second', $valueSerializer.pi());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.l11_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).pi = function () {
    return this.l11_1;
  };
  protoOf(PairSerializer_0).m11 = function (_this__u8e3s4) {
    return _this__u8e3s4.md_1;
  };
  protoOf(PairSerializer_0).c11 = function (_this__u8e3s4) {
    return this.m11(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).n11 = function (_this__u8e3s4) {
    return _this__u8e3s4.nd_1;
  };
  protoOf(PairSerializer_0).e11 = function (_this__u8e3s4) {
    return this.n11(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).f11 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.km($this.r11_1, 0, $this.o11_1);
    var b = composite.km($this.r11_1, 1, $this.p11_1);
    var c = composite.km($this.r11_1, 2, $this.q11_1);
    composite.yl($this.r11_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.pm($this.r11_1);
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.km($this.r11_1, 0, $this.o11_1);
        } else {
          if (index === 1) {
            b = composite.km($this.r11_1, 1, $this.p11_1);
          } else {
            if (index === 2) {
              c = composite.km($this.r11_1, 2, $this.q11_1);
            } else {
              throw SerializationException_init_$Create$_0('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.yl($this.r11_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.dj('first', this$0.o11_1.pi());
      $this$buildClassSerialDescriptor.dj('second', this$0.p11_1.pi());
      $this$buildClassSerialDescriptor.dj('third', this$0.q11_1.pi());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.o11_1 = aSerializer;
    this.p11_1 = bSerializer;
    this.q11_1 = cSerializer;
    var tmp = this;
    tmp.r11_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).pi = function () {
    return this.r11_1;
  };
  protoOf(TripleSerializer_0).s11 = function (encoder, value) {
    var structuredEncoder = encoder.xl(this.r11_1);
    structuredEncoder.pn(this.r11_1, 0, this.o11_1, value.qg_1);
    structuredEncoder.pn(this.r11_1, 1, this.p11_1, value.rg_1);
    structuredEncoder.pn(this.r11_1, 2, this.q11_1, value.sg_1);
    structuredEncoder.yl(this.r11_1);
  };
  protoOf(TripleSerializer_0).qi = function (encoder, value) {
    return this.s11(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).ri = function (decoder) {
    var composite = decoder.xl(this.r11_1);
    if (composite.om()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.g11_1 = keySerializer;
    this.h11_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).i11 = function (encoder, value) {
    var structuredEncoder = encoder.xl(this.pi());
    structuredEncoder.pn(this.pi(), 0, this.g11_1, this.c11(value));
    structuredEncoder.pn(this.pi(), 1, this.h11_1, this.e11(value));
    structuredEncoder.yl(this.pi());
  };
  protoOf(KeyValueSerializer).qi = function (encoder, value) {
    return this.i11(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).ri = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.pi();
    var composite = decoder.xl(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.om()) {
        var key = composite.km(this.pi(), 0, this.g11_1);
        var value = composite.km(this.pi(), 1, this.h11_1);
        tmp$ret$0 = this.f11(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.pm(this.pi());
        if (idx === -1) {
          break mainLoop;
        } else {
          if (idx === 0) {
            key_0 = composite.km(this.pi(), 0, this.g11_1);
          } else {
            if (idx === 1) {
              value_0 = composite.km(this.pi(), 1, this.h11_1);
            } else {
              throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
            }
          }
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.f11(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.yl(descriptor);
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
    this.t11_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).pi = function () {
    return this.t11_1;
  };
  protoOf(ULongSerializer).u11 = function (encoder, value) {
    var tmp = encoder.en(this.t11_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.ym(tmp$ret$0);
  };
  protoOf(ULongSerializer).qi = function (encoder, value) {
    return this.u11(encoder, value instanceof ULong ? value.vh_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).v11 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.ul(this.t11_1).ol();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).ri = function (decoder) {
    return new ULong(this.v11(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.w11_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_8(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).pi = function () {
    return this.w11_1;
  };
  protoOf(UIntSerializer).x11 = function (encoder, value) {
    var tmp = encoder.en(this.w11_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.xm(tmp$ret$0);
  };
  protoOf(UIntSerializer).qi = function (encoder, value) {
    return this.x11(encoder, value instanceof UInt ? value.jh_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).y11 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.ul(this.w11_1).nl();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).ri = function (decoder) {
    return new UInt(this.y11(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.z11_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_10(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).pi = function () {
    return this.z11_1;
  };
  protoOf(UShortSerializer).a12 = function (encoder, value) {
    var tmp = encoder.en(this.z11_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.wm(tmp$ret$0);
  };
  protoOf(UShortSerializer).qi = function (encoder, value) {
    return this.a12(encoder, value instanceof UShort ? value.hi_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).b12 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.ul(this.z11_1).ml();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).ri = function (decoder) {
    return new UShort(this.b12(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.c12_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_12(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).pi = function () {
    return this.c12_1;
  };
  protoOf(UByteSerializer).d12 = function (encoder, value) {
    var tmp = encoder.en(this.c12_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.vm(tmp$ret$0);
  };
  protoOf(UByteSerializer).qi = function (encoder, value) {
    return this.d12(encoder, value instanceof UByte ? value.xg_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).e12 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.ul(this.c12_1).ll();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).ri = function (decoder) {
    return new UByte(this.e12(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function PolymorphicModuleBuilder(baseClass, baseSerializer) {
    baseSerializer = baseSerializer === VOID ? null : baseSerializer;
    this.f12_1 = baseClass;
    this.g12_1 = baseSerializer;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h12_1 = ArrayList_init_$Create$_0();
    this.i12_1 = null;
    this.j12_1 = null;
  }
  protoOf(PolymorphicModuleBuilder).k12 = function (subclass, serializer) {
    this.h12_1.q(to(subclass, serializer));
  };
  protoOf(PolymorphicModuleBuilder).l12 = function (defaultDeserializerProvider) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j12_1 == null)) {
      // Inline function 'kotlinx.serialization.modules.PolymorphicModuleBuilder.defaultDeserializer.<anonymous>' call
      var message = 'Default deserializer provider is already registered for class ' + this.f12_1 + ': ' + this.j12_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.j12_1 = defaultDeserializerProvider;
  };
  protoOf(PolymorphicModuleBuilder).m12 = function (builder) {
    if (!(this.g12_1 == null)) {
      builder.s12(this.f12_1, this.f12_1, this.g12_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.h12_1.t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.modules.PolymorphicModuleBuilder.buildTo.<anonymous>' call
      var kclass = element.od();
      var serializer = element.pd();
      var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var tmp$ret$0 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
      builder.s12(this.f12_1, tmp, tmp$ret$0);
    }
    var defaultSerializer = this.i12_1;
    if (!(defaultSerializer == null)) {
      builder.t12(this.f12_1, defaultSerializer, false);
    }
    var defaultDeserializer = this.j12_1;
    if (!(defaultDeserializer == null)) {
      builder.u12(this.f12_1, defaultDeserializer, false);
    }
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).uj = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.tj(kClass, typeArgumentsSerializers) : $super.tj.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.w12_1 = class2ContextualFactory;
    this.x12_1 = polyBase2Serializers;
    this.y12_1 = polyBase2DefaultSerializerProvider;
    this.z12_1 = polyBase2NamedSerializers;
    this.a13_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).zn = function (baseClass, value) {
    if (!baseClass.j6(value))
      return null;
    var tmp0_safe_receiver = this.x12_1.x2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.y12_1.x2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).yn = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.z12_1.x2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, Map) ? tmp0_safe_receiver : THROW_CCE()).x2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.a13_1.x2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).tj = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.w12_1.x2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b13(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).v12 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.w12_1.p2().t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.q2();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.r2();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.e13_1;
        collector.f13(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.d13(kclass, serial.c13_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.x12_1.p2().t();
    while (tmp0_iterator_0.u()) {
      var element_0 = tmp0_iterator_0.v();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.q2();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.r2();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.p2().t();
      while (tmp0_iterator_1.u()) {
        var element_1 = tmp0_iterator_1.v();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.q2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.r2();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.g13(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.y12_1.p2().t();
    while (tmp0_iterator_2.u()) {
      var element_2 = tmp0_iterator_2.v();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.q2();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.r2();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.h13(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.a13_1.p2().t();
    while (tmp0_iterator_3.u()) {
      var element_3 = tmp0_iterator_3.v();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.q2();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.r2();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.i13(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.e13_1 = serializer;
  }
  protoOf(Argless).b13 = function (typeArgumentsSerializers) {
    return this.e13_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.e13_1, this.e13_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.e13_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.c13_1 = provider;
  }
  protoOf(WithTypeArguments).b13 = function (typeArgumentsSerializers) {
    return this.c13_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
  function plus(_this__u8e3s4, other) {
    _init_properties_SerializersModule_kt__u78ha3();
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    // Inline function 'kotlinx.serialization.modules.plus.<anonymous>' call
    builder.j13(_this__u8e3s4);
    builder.j13(other);
    return builder.pr();
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.n12_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.o12_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.p12_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.q12_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.r12_1 = HashMap_init_$Create$();
  }
  protoOf(SerializersModuleBuilder).f13 = function (kClass, serializer) {
    return this.k13(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).d13 = function (kClass, provider) {
    return this.k13(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).g13 = function (baseClass, actualClass, actualSerializer) {
    this.s12(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).h13 = function (baseClass, defaultSerializerProvider) {
    this.t12(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).i13 = function (baseClass, defaultDeserializerProvider) {
    this.u12(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).j13 = function (module_0) {
    module_0.v12(this);
  };
  protoOf(SerializersModuleBuilder).l13 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.n12_1.x2(forClass);
      if (!(previous == null) ? !equals(previous, provider) : false) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + forClass + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.n12_1.n2(forClass, provider);
  };
  protoOf(SerializersModuleBuilder).k13 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.l13(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.l13.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).t12 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.p12_1.x2(baseClass);
    if ((!(previous == null) ? !equals(previous, defaultSerializerProvider) : false) ? !allowOverwrite : false) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + baseClass + ' is already registered: ' + previous);
    }
    // Inline function 'kotlin.collections.set' call
    this.p12_1.n2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).u12 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.r12_1.x2(baseClass);
    if ((!(previous == null) ? !equals(previous, defaultDeserializerProvider) : false) ? !allowOverwrite : false) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + baseClass + ' is already registered: ' + previous);
    }
    // Inline function 'kotlin.collections.set' call
    this.r12_1.n2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).m13 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.pi().qj();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.o12_1;
    var value = this_0.x2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.n2(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    var previousSerializer = baseClassSerializers.x2(concreteClass);
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.q12_1;
    var value_0 = this_1.x2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.n2(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    if (allowOverwrite) {
      if (!(previousSerializer == null)) {
        names.o2(previousSerializer.pi().qj());
      }
      // Inline function 'kotlin.collections.set' call
      baseClassSerializers.n2(concreteClass, concreteSerializer);
      // Inline function 'kotlin.collections.set' call
      names.n2(name, concreteSerializer);
      return Unit_instance;
    }
    if (!(previousSerializer == null)) {
      if (!equals(previousSerializer, concreteSerializer)) {
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
      } else {
        names.o2(previousSerializer.pi().qj());
      }
    }
    var previousByName = names.x2(name);
    if (!(previousByName == null)) {
      // Inline function 'kotlin.sequences.find' call
      var this_2 = asSequence(ensureNotNull(this.o12_1.x2(baseClass)));
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var tmp0_iterator = this_2.t();
        while (tmp0_iterator.u()) {
          var element = tmp0_iterator.v();
          // Inline function 'kotlinx.serialization.modules.SerializersModuleBuilder.registerPolymorphicSerializer.<anonymous>' call
          if (element.r2() === previousByName) {
            tmp$ret$5 = element;
            break $l$block;
          }
        }
        tmp$ret$5 = null;
      }
      var conflictingClass = tmp$ret$5;
      throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers for base class '" + baseClass + "' " + ("have the same serial name '" + name + "': '" + concreteClass + "' and '" + conflictingClass + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.n2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.n2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).s12 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.m13(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.m13.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).pr = function () {
    return new SerialModuleImpl(this.n12_1, this.o12_1, this.p12_1, this.q12_1, this.r12_1);
  };
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + concreteClass + ' already registered in the scope of ' + baseClass);
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
    this.n13_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.n13_1.equals(tmp0_other_with_cast.n13_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.n13_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.n13_1 + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().b7()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().i7());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.nu(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
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
  function get_isInterface(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.o13_1 = $factory;
  }
  protoOf(createCache$1).vj = function (key) {
    return this.o13_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.p13_1 = $factory;
  }
  protoOf(createParametrizedCache$1).wj = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var value = this.p13_1(key, types);
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
  protoOf(SerialDescriptorImpl).xj = get_isNullable;
  protoOf(SerialDescriptorImpl).dk = get_isInline;
  protoOf(AbstractDecoder).km = decodeSerializableElement$default;
  protoOf(AbstractDecoder).wl = decodeSerializableValue;
  protoOf(AbstractDecoder).nm = decodeNullableSerializableValue;
  protoOf(AbstractDecoder).om = decodeSequentially;
  protoOf(AbstractDecoder).qm = decodeCollectionSize;
  protoOf(AbstractEncoder).tn = encodeNotNullMark;
  protoOf(AbstractEncoder).un = beginCollection;
  protoOf(AbstractEncoder).qn = encodeSerializableValue;
  protoOf(AbstractEncoder).sn = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).vn = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).xj = get_isNullable;
  protoOf(ListLikeDescriptor).dk = get_isInline;
  protoOf(ListLikeDescriptor).bk = get_annotations;
  protoOf(MapLikeDescriptor).xj = get_isNullable;
  protoOf(MapLikeDescriptor).dk = get_isInline;
  protoOf(MapLikeDescriptor).bk = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).xj = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).dk = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).du = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).xj = get_isNullable;
  protoOf(NothingSerialDescriptor).dk = get_isInline;
  protoOf(NothingSerialDescriptor).bk = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).xj = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).dk = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).bk = get_annotations;
  protoOf(TaggedDecoder).km = decodeSerializableElement$default;
  protoOf(TaggedDecoder).wl = decodeSerializableValue;
  protoOf(TaggedDecoder).nm = decodeNullableSerializableValue;
  protoOf(TaggedDecoder).om = decodeSequentially;
  protoOf(TaggedDecoder).qm = decodeCollectionSize;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ObjectSerializer_init_$Create$;
  _.$_$.b = PolymorphicSerializer_init_$Create$;
  _.$_$.c = SealedClassSerializer_init_$Create$;
  _.$_$.d = SerializationException_init_$Init$_0;
  _.$_$.e = SerializationException_init_$Create$_0;
  _.$_$.f = UnknownFieldException_init_$Create$;
  _.$_$.g = SEALED_getInstance;
  _.$_$.h = STRING_getInstance;
  _.$_$.i = CONTEXTUAL_getInstance;
  _.$_$.j = ENUM_getInstance;
  _.$_$.k = CLASS_getInstance;
  _.$_$.l = LIST_getInstance;
  _.$_$.m = MAP_getInstance;
  _.$_$.n = OBJECT_getInstance;
  _.$_$.o = Companion_instance_0;
  _.$_$.p = BooleanSerializer_getInstance;
  _.$_$.q = DoubleSerializer_getInstance;
  _.$_$.r = IntSerializer_getInstance;
  _.$_$.s = LongSerializer_getInstance;
  _.$_$.t = ShortSerializer_getInstance;
  _.$_$.u = StringSerializer_getInstance;
  _.$_$.v = UnitSerializer_getInstance;
  _.$_$.w = ListSerializer;
  _.$_$.x = MapSerializer;
  _.$_$.y = SetSerializer;
  _.$_$.z = get_nullable;
  _.$_$.a1 = serializer_2;
  _.$_$.b1 = serializer_11;
  _.$_$.c1 = serializer_9;
  _.$_$.d1 = serializer_8;
  _.$_$.e1 = serializer_13;
  _.$_$.f1 = serializer_7;
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
  _.$_$.l2 = throwMissingFieldException;
  _.$_$.m2 = EmptySerializersModule_0;
  _.$_$.n2 = PolymorphicModuleBuilder;
  _.$_$.o2 = SerializersModuleBuilder;
  _.$_$.p2 = contextual;
  _.$_$.q2 = SerializersModuleCollector;
  _.$_$.r2 = plus;
  _.$_$.s2 = DeserializationStrategy;
  _.$_$.t2 = KSerializer;
  _.$_$.u2 = MissingFieldException;
  _.$_$.v2 = PolymorphicSerializer;
  _.$_$.w2 = SealedClassSerializer;
  _.$_$.x2 = SerializationException;
  _.$_$.y2 = SerializationStrategy;
  _.$_$.z2 = findPolymorphicSerializer_0;
  _.$_$.a3 = findPolymorphicSerializer;
  _.$_$.b3 = serializer_1;
  _.$_$.c3 = serializer_0;
  //endregion
  _.$_$.ListSerializer = ListSerializer
  _.$_$.MapSerializer = MapSerializer
  _.$_$.SetSerializer = SetSerializer
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
