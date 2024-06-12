(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@cachet/kotlinx-serialization-kotlinx-serialization-core', '@cachet/kotlin-kotlin-stdlib'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@cachet/kotlinx-serialization-kotlinx-serialization-core'), require('@cachet/kotlin-kotlin-stdlib'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var protoOf = kotlin_kotlin.$_$.m8;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var classMeta = kotlin_kotlin.$_$.i7;
  var VOID = kotlin_kotlin.$_$.f;
  var toString = kotlin_kotlin.$_$.r8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var charSequenceLength = kotlin_kotlin.$_$.g7;
  var charSequenceGet = kotlin_kotlin.$_$.f7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v1;
  var equals = kotlin_kotlin.$_$.l7;
  var Enum = kotlin_kotlin.$_$.va;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var interfaceMeta = kotlin_kotlin.$_$.s7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.z;
  var THROW_CCE = kotlin_kotlin.$_$.bb;
  var hashCode = kotlin_kotlin.$_$.r7;
  var joinToString = kotlin_kotlin.$_$.x5;
  var Map = kotlin_kotlin.$_$.n4;
  var List = kotlin_kotlin.$_$.l4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.ub;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getBooleanHashCode = kotlin_kotlin.$_$.n7;
  var getStringHashCode = kotlin_kotlin.$_$.q7;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.q3;
  var numberRangeToNumber = kotlin_kotlin.$_$.g8;
  var ClosedRange = kotlin_kotlin.$_$.s8;
  var isInterface = kotlin_kotlin.$_$.b8;
  var contains = kotlin_kotlin.$_$.v8;
  var toDouble = kotlin_kotlin.$_$.ba;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.s3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toLongOrNull = kotlin_kotlin.$_$.ea;
  var toULongOrNull = kotlin_kotlin.$_$.ia;
  var ULong = kotlin_kotlin.$_$.jb;
  var Companion_getInstance = kotlin_kotlin.$_$.b4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.v2;
  var toDoubleOrNull = kotlin_kotlin.$_$.aa;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.z9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var lazy_0 = kotlin_kotlin.$_$.vb;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var KProperty1 = kotlin_kotlin.$_$.b9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p7;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var toLong = kotlin_kotlin.$_$.p8;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.n2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.u2;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.w2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.e2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.d3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.f3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var captureStack = kotlin_kotlin.$_$.c7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var charSequenceSubSequence = kotlin_kotlin.$_$.h7;
  var coerceAtLeast = kotlin_kotlin.$_$.t8;
  var coerceAtMost = kotlin_kotlin.$_$.u8;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var singleOrNull = kotlin_kotlin.$_$.m6;
  var emptyMap = kotlin_kotlin.$_$.n5;
  var getValue = kotlin_kotlin.$_$.s5;
  var fillArrayVal = kotlin_kotlin.$_$.m7;
  var copyOf = kotlin_kotlin.$_$.i5;
  var copyOf_0 = kotlin_kotlin.$_$.j5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.ta;
  var invoke = kotlin_kotlin.$_$.rb;
  var CoroutineImpl = kotlin_kotlin.$_$.y6;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ua;
  var Unit = kotlin_kotlin.$_$.mb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var getKClass = kotlin_kotlin.$_$.e;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var substringBefore = kotlin_kotlin.$_$.x9;
  var removeSuffix = kotlin_kotlin.$_$.q9;
  var substringAfter = kotlin_kotlin.$_$.w9;
  var contains_0 = kotlin_kotlin.$_$.j9;
  var plus = kotlin_kotlin.$_$.xb;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var IllegalArgumentException = kotlin_kotlin.$_$.wa;
  var isFinite = kotlin_kotlin.$_$.tb;
  var isFinite_0 = kotlin_kotlin.$_$.sb;
  var toUInt = kotlin_kotlin.$_$.ha;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.m2;
  var toULong = kotlin_kotlin.$_$.ja;
  var toUByte = kotlin_kotlin.$_$.ga;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.d2;
  var toUShort = kotlin_kotlin.$_$.ka;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.e3;
  var objectCreate = kotlin_kotlin.$_$.k8;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wb;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a3;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var toString_0 = kotlin_kotlin.$_$.y1;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.a4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.z3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.c4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var setOf = kotlin_kotlin.$_$.l6;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.x1;
  var numberToChar = kotlin_kotlin.$_$.h8;
  var equals_0 = kotlin_kotlin.$_$.k9;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.n3;
  var toByte = kotlin_kotlin.$_$.o8;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.r3;
  var toShort = kotlin_kotlin.$_$.q8;
  var single = kotlin_kotlin.$_$.t9;
  var Char = kotlin_kotlin.$_$.ra;
  var emptySet = kotlin_kotlin.$_$.o5;
  var plus_0 = kotlin_kotlin.$_$.h6;
  var toInt = kotlin_kotlin.$_$.da;
  var toList = kotlin_kotlin.$_$.q6;
  var enumEntries = kotlin_kotlin.$_$.z6;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var last = kotlin_kotlin.$_$.b6;
  var removeLast = kotlin_kotlin.$_$.k6;
  var lastIndexOf = kotlin_kotlin.$_$.o9;
  var Long = kotlin_kotlin.$_$.ya;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.w1;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.x3;
  var numberToLong = kotlin_kotlin.$_$.j8;
  var charArray = kotlin_kotlin.$_$.e7;
  var indexOf = kotlin_kotlin.$_$.l9;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(ClassDiscriminatorMode, 'ClassDiscriminatorMode', classMeta, Enum);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNull_getInstance});
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Composer, 'Composer', classMeta);
  setMetadataFor(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', classMeta, Composer);
  setMetadataFor(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', classMeta, Composer);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta);
  setMetadataFor(JsonPath, 'JsonPath', classMeta, VOID, VOID, JsonPath);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(Key, 'Key', classMeta, VOID, VOID, Key);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, VOID, VOID, DescriptorSchemaCache);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
  setMetadataFor(JsonToStringWriter, 'JsonToStringWriter', classMeta, VOID, VOID, JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.f14_1 = configuration;
    this.g14_1 = serializersModule;
    this.h14_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).mm = function () {
    return this.g14_1;
  };
  protoOf(Json).i14 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.m14();
    }
  };
  protoOf(Json).j14 = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.pi(), null);
    var result = input.wl(deserializer);
    lexer.z14();
    return result;
  };
  protoOf(Json).k14 = function (string) {
    return this.j14(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.pr();
    return new JsonImpl(conf, builder.q15_1);
  }
  function JsonBuilder(json) {
    this.a15_1 = json.f14_1.r15_1;
    this.b15_1 = json.f14_1.w15_1;
    this.c15_1 = json.f14_1.s15_1;
    this.d15_1 = json.f14_1.t15_1;
    this.e15_1 = json.f14_1.u15_1;
    this.f15_1 = json.f14_1.v15_1;
    this.g15_1 = json.f14_1.x15_1;
    this.h15_1 = json.f14_1.y15_1;
    this.i15_1 = json.f14_1.z15_1;
    this.j15_1 = json.f14_1.a16_1;
    this.k15_1 = json.f14_1.g16_1;
    this.l15_1 = json.f14_1.b16_1;
    this.m15_1 = json.f14_1.c16_1;
    this.n15_1 = json.f14_1.d16_1;
    this.o15_1 = json.f14_1.e16_1;
    this.p15_1 = json.f14_1.f16_1;
    this.q15_1 = json.mm();
  }
  protoOf(JsonBuilder).pr = function () {
    if (this.i15_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.j15_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.k15_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.f15_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.g15_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.g15_1 === '    ')) {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = this.g15_1;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(((element === _Char___init__impl__6a9atx(32) ? true : element === _Char___init__impl__6a9atx(9)) ? true : element === _Char___init__impl__6a9atx(13)) ? true : element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$4 = false;
            break $l$block;
          }
        }
        tmp$ret$4 = true;
      }
      var allWhitespaces = tmp$ret$4;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.g15_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.a15_1, this.c15_1, this.d15_1, this.e15_1, this.f15_1, this.b15_1, this.g15_1, this.h15_1, this.i15_1, this.j15_1, this.l15_1, this.m15_1, this.n15_1, this.o15_1, this.p15_1, this.k15_1);
  };
  function validateConfiguration($this) {
    if (equals($this.mm(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.f14_1.z15_1, $this.f14_1.a16_1);
    $this.mm().v12(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, classDiscriminatorMode) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    this.r15_1 = encodeDefaults;
    this.s15_1 = ignoreUnknownKeys;
    this.t15_1 = isLenient;
    this.u15_1 = allowStructuredMapKeys;
    this.v15_1 = prettyPrint;
    this.w15_1 = explicitNulls;
    this.x15_1 = prettyPrintIndent;
    this.y15_1 = coerceInputValues;
    this.z15_1 = useArrayPolymorphism;
    this.a16_1 = classDiscriminator;
    this.b16_1 = allowSpecialFloatingPointValues;
    this.c16_1 = useAlternativeNames;
    this.d16_1 = namingStrategy;
    this.e16_1 = decodeEnumsCaseInsensitive;
    this.f16_1 = allowTrailingComma;
    this.g16_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.r15_1 + ', ignoreUnknownKeys=' + this.s15_1 + ', isLenient=' + this.t15_1 + ', ' + ('allowStructuredMapKeys=' + this.u15_1 + ', prettyPrint=' + this.v15_1 + ', explicitNulls=' + this.w15_1 + ', ') + ("prettyPrintIndent='" + this.x15_1 + "', coerceInputValues=" + this.y15_1 + ', useArrayPolymorphism=' + this.z15_1 + ', ') + ("classDiscriminator='" + this.a16_1 + "', allowSpecialFloatingPointValues=" + this.b16_1 + ', ') + ('useAlternativeNames=' + this.c16_1 + ', namingStrategy=' + this.d16_1 + ', decodeEnumsCaseInsensitive=' + this.e16_1 + ', ') + ('allowTrailingComma=' + this.f16_1 + ', classDiscriminatorMode=' + this.g16_1 + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var k = _name_for_destructuring_parameter_0__wldtmu.q2();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.r2();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.u5(_Char___init__impl__6a9atx(58));
    this_0.s5(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.j16_1 = content;
  }
  protoOf(JsonObject).p2 = function () {
    return this.j16_1.p2();
  };
  protoOf(JsonObject).l2 = function () {
    return this.j16_1.l2();
  };
  protoOf(JsonObject).n = function () {
    return this.j16_1.n();
  };
  protoOf(JsonObject).m2 = function () {
    return this.j16_1.m2();
  };
  protoOf(JsonObject).k16 = function (key) {
    return this.j16_1.u2(key);
  };
  protoOf(JsonObject).u2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.k16((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).l16 = function (key) {
    return this.j16_1.x2(key);
  };
  protoOf(JsonObject).x2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.l16((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).y = function () {
    return this.j16_1.y();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.j16_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.j16_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.j16_1.p2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function Companion_0() {
  }
  protoOf(Companion_0).m16 = function () {
    return JsonElementSerializer_getInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonElement() {
  }
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.n16();
  };
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_jsonObject(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonObject');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_7() {
    return Companion_instance_3;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.o16_1 = content;
  }
  protoOf(JsonArray).n = function () {
    return this.o16_1.n();
  };
  protoOf(JsonArray).p16 = function (element) {
    return this.o16_1.p(element);
  };
  protoOf(JsonArray).p = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.p16(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).q16 = function (elements) {
    return this.o16_1.x(elements);
  };
  protoOf(JsonArray).x = function (elements) {
    return this.q16(elements);
  };
  protoOf(JsonArray).c1 = function (index) {
    return this.o16_1.c1(index);
  };
  protoOf(JsonArray).r16 = function (element) {
    return this.o16_1.x1(element);
  };
  protoOf(JsonArray).x1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.r16(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).y = function () {
    return this.o16_1.y();
  };
  protoOf(JsonArray).t = function () {
    return this.o16_1.t();
  };
  protoOf(JsonArray).a2 = function (index) {
    return this.o16_1.a2(index);
  };
  protoOf(JsonArray).b2 = function (fromIndex, toIndex) {
    return this.o16_1.b2(fromIndex, toIndex);
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.o16_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.o16_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.o16_1, ',', '[', ']');
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.t16_1.r2();
  }
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.s16_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.t16_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).n16 = function () {
    return this.s16_1;
  };
  protoOf(JsonNull).m16 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(JsonNull).nu = function (typeParamsSerializers) {
    return this.m16();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.u16_1 = isString;
    this.v16_1 = coerceToInlineType;
    this.w16_1 = toString(body);
    if (!(this.v16_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.v16_1.dk()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).n16 = function () {
    return this.w16_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.u16_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.w16_1);
      tmp = this_0.toString();
    } else {
      tmp = this.w16_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.u16_1 === other.u16_1))
      return false;
    if (!(this.w16_1 === other.w16_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.u16_1);
    result = imul(31, result) + getStringHashCode(this.w16_1) | 0;
    return result;
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.n16());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.n16())).x16();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(IntCompanionObject_instance.MIN_VALUE, IntCompanionObject_instance.MAX_VALUE);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.n16() + ' is not an Int');
    return result.da();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.n16())).x16();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.n16();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.n16());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.n16();
    }
    return tmp;
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.dj('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.dj('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.dj('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.dj('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.dj('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().y16_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().z16_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().a17_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().b17_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().c17_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.d17_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).pi = function () {
    return this.d17_1;
  };
  protoOf(JsonElementSerializer).e17 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.qn(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.qn(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.qn(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).qi = function (encoder, value) {
    return this.e17(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).ri = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.i16();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.f17_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).pi();
    this.g17_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).bk = function () {
    return this.f17_1.bk();
  };
  protoOf(JsonObjectDescriptor).ck = function () {
    return this.f17_1.ck();
  };
  protoOf(JsonObjectDescriptor).dk = function () {
    return this.f17_1.dk();
  };
  protoOf(JsonObjectDescriptor).xj = function () {
    return this.f17_1.xj();
  };
  protoOf(JsonObjectDescriptor).ek = function () {
    return this.f17_1.ek();
  };
  protoOf(JsonObjectDescriptor).fk = function (index) {
    return this.f17_1.fk(index);
  };
  protoOf(JsonObjectDescriptor).gk = function (index) {
    return this.f17_1.gk(index);
  };
  protoOf(JsonObjectDescriptor).hk = function (name) {
    return this.f17_1.hk(name);
  };
  protoOf(JsonObjectDescriptor).ik = function (index) {
    return this.f17_1.ik(index);
  };
  protoOf(JsonObjectDescriptor).jk = function (index) {
    return this.f17_1.jk(index);
  };
  protoOf(JsonObjectDescriptor).qj = function () {
    return this.g17_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.b17_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).pi = function () {
    return this.b17_1;
  };
  protoOf(JsonObjectSerializer).h17 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).qi(encoder, value);
  };
  protoOf(JsonObjectSerializer).qi = function (encoder, value) {
    return this.h17(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).ri = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ri(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.y16_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).pi = function () {
    return this.y16_1;
  };
  protoOf(JsonPrimitiveSerializer).i17 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.qn(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.qn(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).qi = function (encoder, value) {
    return this.i17(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).ri = function (decoder) {
    var result = asJsonDecoder(decoder).i16();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.j17_1 = ListSerializer(JsonElementSerializer_getInstance()).pi();
    this.k17_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).bk = function () {
    return this.j17_1.bk();
  };
  protoOf(JsonArrayDescriptor).ck = function () {
    return this.j17_1.ck();
  };
  protoOf(JsonArrayDescriptor).dk = function () {
    return this.j17_1.dk();
  };
  protoOf(JsonArrayDescriptor).xj = function () {
    return this.j17_1.xj();
  };
  protoOf(JsonArrayDescriptor).ek = function () {
    return this.j17_1.ek();
  };
  protoOf(JsonArrayDescriptor).fk = function (index) {
    return this.j17_1.fk(index);
  };
  protoOf(JsonArrayDescriptor).gk = function (index) {
    return this.j17_1.gk(index);
  };
  protoOf(JsonArrayDescriptor).hk = function (name) {
    return this.j17_1.hk(name);
  };
  protoOf(JsonArrayDescriptor).ik = function (index) {
    return this.j17_1.ik(index);
  };
  protoOf(JsonArrayDescriptor).jk = function (index) {
    return this.j17_1.jk(index);
  };
  protoOf(JsonArrayDescriptor).qj = function () {
    return this.k17_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.c17_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).pi = function () {
    return this.c17_1;
  };
  protoOf(JsonArraySerializer).l17 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).qi(encoder, value);
  };
  protoOf(JsonArraySerializer).qi = function (encoder, value) {
    return this.l17(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).ri = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).ri(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.z16_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).pi = function () {
    return this.z16_1;
  };
  protoOf(JsonNullSerializer).m17 = function (encoder, value) {
    verify(encoder);
    encoder.tm();
  };
  protoOf(JsonNullSerializer).qi = function (encoder, value) {
    return this.m17(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).ri = function (decoder) {
    verify_0(decoder);
    if (decoder.il()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.jl();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.a17_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).pi = function () {
    return this.a17_1;
  };
  protoOf(JsonLiteralSerializer).n17 = function (encoder, value) {
    verify(encoder);
    if (value.u16_1) {
      return encoder.cn(value.w16_1);
    }
    if (!(value.v16_1 == null)) {
      return encoder.en(value.v16_1).cn(value.w16_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.w16_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.ym(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.w16_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).vh_1;
      var tmp_1 = encoder.en(serializer_0(Companion_getInstance()).pi());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.ym(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.w16_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.an(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.w16_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.um(tmp3_safe_receiver);
    }
    encoder.cn(value.w16_1);
  };
  protoOf(JsonLiteralSerializer).qi = function (encoder, value) {
    return this.n17(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).ri = function (decoder) {
    var result = asJsonDecoder(decoder).i16();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.o17_1;
    original$factory();
    return this_0.r2();
  }
  function defer$1($deferred) {
    this.o17_1 = lazy_0($deferred);
  }
  protoOf(defer$1).qj = function () {
    return _get_original__l7ku1m(this).qj();
  };
  protoOf(defer$1).ek = function () {
    return _get_original__l7ku1m(this).ek();
  };
  protoOf(defer$1).ck = function () {
    return _get_original__l7ku1m(this).ck();
  };
  protoOf(defer$1).ik = function (index) {
    return _get_original__l7ku1m(this).ik(index);
  };
  protoOf(defer$1).hk = function (name) {
    return _get_original__l7ku1m(this).hk(name);
  };
  protoOf(defer$1).fk = function (index) {
    return _get_original__l7ku1m(this).fk(index);
  };
  protoOf(defer$1).gk = function (index) {
    return _get_original__l7ku1m(this).gk(index);
  };
  protoOf(defer$1).jk = function (index) {
    return _get_original__l7ku1m(this).jk(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.q17_1 = writer;
    this.r17_1 = true;
  }
  protoOf(Composer).s17 = function () {
    this.r17_1 = true;
  };
  protoOf(Composer).t17 = function () {
    return Unit_instance;
  };
  protoOf(Composer).u17 = function () {
    this.r17_1 = false;
  };
  protoOf(Composer).v17 = function () {
    this.r17_1 = false;
  };
  protoOf(Composer).w17 = function () {
    return Unit_instance;
  };
  protoOf(Composer).x17 = function (v) {
    return this.q17_1.y17(v);
  };
  protoOf(Composer).z17 = function (v) {
    return this.q17_1.a18(v);
  };
  protoOf(Composer).b18 = function (v) {
    return this.q17_1.a18(v.toString());
  };
  protoOf(Composer).c18 = function (v) {
    return this.q17_1.a18(v.toString());
  };
  protoOf(Composer).d18 = function (v) {
    return this.q17_1.e18(toLong(v));
  };
  protoOf(Composer).f18 = function (v) {
    return this.q17_1.e18(toLong(v));
  };
  protoOf(Composer).g18 = function (v) {
    return this.q17_1.e18(toLong(v));
  };
  protoOf(Composer).h18 = function (v) {
    return this.q17_1.e18(v);
  };
  protoOf(Composer).i18 = function (v) {
    return this.q17_1.a18(v.toString());
  };
  protoOf(Composer).j18 = function (value) {
    return this.q17_1.k18(value);
  };
  function Composer_0(sb, json) {
    return json.f14_1.v15_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.n18_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).g18 = function (v) {
    if (this.n18_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.j18(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.z17(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).h18 = function (v) {
    if (this.n18_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.j18(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.z17(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).d18 = function (v) {
    if (this.n18_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.j18(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.z17(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).f18 = function (v) {
    if (this.n18_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.j18(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.z17(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.q18_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).j18 = function (value) {
    if (this.q18_1) {
      protoOf(Composer).j18.call(this, value);
    } else {
      protoOf(Composer).z17.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.t18_1 = json;
    this.u18_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).s17 = function () {
    this.r17_1 = true;
    this.u18_1 = this.u18_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).t17 = function () {
    this.u18_1 = this.u18_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).u17 = function () {
    this.r17_1 = false;
    this.z17('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.u18_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.z17(this.t18_1.f14_1.x15_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).v17 = function () {
    if (this.r17_1)
      this.r17_1 = false;
    else {
      this.u17();
    }
  };
  protoOf(ComposerWithPrettyPrint).w17 = function () {
    this.x17(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.w18_1 = !descriptor.jk(index) ? descriptor.gk(index).xj() : false;
    return $this.w18_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.v18_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.w18_1 = false;
  }
  protoOf(JsonElementMarker).ds = function (index) {
    this.v18_1.ds(index);
  };
  protoOf(JsonElementMarker).es = function () {
    return this.v18_1.es();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.x18('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.v14_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.y18('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.qj() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.ek() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n') + ('Current input: ' + minify(input)));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    // Inline function 'kotlin.text.substring' call
    var startIndex = coerceAtLeast(start_0, 0);
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex_0)) + suffix;
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.hk(name);
    if (!(index === -3))
      return index;
    if (!json.f14_1.c16_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.qj() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.ik(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.ek(), CLASS_getInstance()) ? json.f14_1.d16_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.a19(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.f14_1.e16_1 ? equals(descriptor.ek(), ENUM_getInstance()) : false;
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.a19(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.ck();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_0 = _this__u8e3s4.fk(i);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.t();
        while (tmp0_iterator.u()) {
          var element = tmp0_iterator.v();
          if (element instanceof JsonNames) {
            destination.q(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(destination);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b19_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp2_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp2_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.ik(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.c19(_this__u8e3s4, i, _this__u8e3s4.ik(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.y()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.ek(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).u2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.ik(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.ik(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildDeserializationNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.n2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.ck();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.ik(tmp_2);
        tmp_1[tmp_2] = $strategy.c19($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.f19_1, 2);
    $this.d19_1 = copyOf($this.d19_1, newSize);
    $this.e19_1 = copyOf_0($this.e19_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.d19_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.e19_1 = tmp_2;
    this.f19_1 = -1;
  }
  protoOf(JsonPath).g19 = function (sd) {
    this.f19_1 = this.f19_1 + 1 | 0;
    var depth = this.f19_1;
    if (depth === this.d19_1.length) {
      resize(this);
    }
    this.d19_1[depth] = sd;
  };
  protoOf(JsonPath).h19 = function (index) {
    this.e19_1[this.f19_1] = index;
  };
  protoOf(JsonPath).i19 = function (key) {
    var tmp;
    if (!(this.e19_1[this.f19_1] === -2)) {
      this.f19_1 = this.f19_1 + 1 | 0;
      tmp = this.f19_1 === this.d19_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.d19_1[this.f19_1] = key;
    this.e19_1[this.f19_1] = -2;
  };
  protoOf(JsonPath).j19 = function () {
    if (this.e19_1[this.f19_1] === -2) {
      this.d19_1[this.f19_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).k19 = function () {
    var depth = this.f19_1;
    if (this.e19_1[depth] === -2) {
      this.e19_1[depth] = -1;
      this.f19_1 = this.f19_1 - 1 | 0;
    }
    if (!(this.f19_1 === -1)) {
      this.f19_1 = this.f19_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).l19 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.t5('$');
    // Inline function 'kotlin.repeat' call
    var times = this.f19_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.d19_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.ek(), LIST_getInstance())) {
            if (!(this.e19_1[index] === -1)) {
              this_0.t5('[');
              this_0.w7(this.e19_1[index]);
              this_0.t5(']');
            }
          } else {
            var idx = this.e19_1[index];
            if (idx >= 0) {
              this_0.t5('.');
              this_0.t5(element.ik(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.t5('[');
            this_0.t5("'");
            this_0.s5(element);
            this_0.t5("'");
            this_0.t5(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.l19();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().n();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.qn(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.u19_1.y19(get_TC_BEGIN_OBJ());
    if ($this.u19_1.z19() === get_TC_COMMA()) {
      $this.u19_1.y18('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.u19_1.a1a()) {
      var key = $this.v19_1 ? $this.u19_1.c1a() : $this.u19_1.b1a();
      $this.u19_1.y19(get_TC_COLON());
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.d1a();
      // Inline function 'kotlin.collections.set' call
      result.n2(key, element);
      lastToken = $this.u19_1.e1a();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== get_TC_COMMA())
        if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.u19_1.y18('Expected end of the object or comma');
        }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.u19_1.y19(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      if (!$this.w19_1) {
        invalidTrailingComma($this.u19_1);
      }
      $this.u19_1.y19(get_TC_END_OBJ());
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.vb_1 = Unit_instance;
    tmp.wb_1 = null;
    return tmp.ec();
  }
  function readArray($this) {
    var lastToken = $this.u19_1.e1a();
    if ($this.u19_1.z19() === get_TC_COMMA()) {
      $this.u19_1.y18('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.u19_1.a1a()) {
      var element = $this.d1a();
      result.q(element);
      lastToken = $this.u19_1.e1a();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var this_0 = $this.u19_1;
        var condition = lastToken === get_TC_END_LIST();
        var position = this_0.v14_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          this_0.y18(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.u19_1.y19(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      if (!$this.w19_1) {
        invalidTrailingComma($this.u19_1, 'array');
      }
      $this.u19_1.y19(get_TC_END_LIST());
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.v19_1 ? true : !isString) {
      tmp = $this.u19_1.c1a();
    } else {
      tmp = $this.u19_1.b1a();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.b1b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).g1b = function ($this$$receiver, it, $completion) {
    var tmp = this.h1b($this$$receiver, it, $completion);
    tmp.vb_1 = Unit_instance;
    tmp.wb_1 = null;
    return tmp.ec();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).kg = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.g1b(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).ec = function () {
    var suspendResult = this.vb_1;
    $sm: do
      try {
        var tmp = this.tb_1;
        switch (tmp) {
          case 0:
            this.ub_1 = 3;
            this.e1b_1 = this.b1b_1.u19_1.z19();
            if (this.e1b_1 === get_TC_STRING()) {
              this.f1b_1 = readValue(this.b1b_1, true);
              this.tb_1 = 2;
              continue $sm;
            } else {
              if (this.e1b_1 === get_TC_OTHER()) {
                this.f1b_1 = readValue(this.b1b_1, false);
                this.tb_1 = 2;
                continue $sm;
              } else {
                if (this.e1b_1 === get_TC_BEGIN_OBJ()) {
                  this.tb_1 = 1;
                  suspendResult = readObject_0(this.c1b_1, this.b1b_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.e1b_1 === get_TC_BEGIN_LIST()) {
                    this.f1b_1 = readArray(this.b1b_1);
                    this.tb_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.b1b_1.u19_1.y18("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.f1b_1 = suspendResult;
            this.tb_1 = 2;
            continue $sm;
          case 2:
            return this.f1b_1;
          case 3:
            throw this.wb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ub_1 === 3) {
          throw e;
        } else {
          this.tb_1 = this.ub_1;
          this.wb_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).h1b = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.b1b_1, completion);
    i.c1b_1 = $this$$receiver;
    i.d1b_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.g1b($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1a_1 = _this__u8e3s4;
    this.o1a_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).ec = function () {
    var suspendResult = this.vb_1;
    $sm: do
      try {
        var tmp = this.tb_1;
        switch (tmp) {
          case 0:
            this.ub_1 = 5;
            var tmp_0 = this;
            tmp_0.p1a_1 = this.n1a_1;
            this.q1a_1 = this.p1a_1.u19_1.y19(get_TC_BEGIN_OBJ());
            if (this.p1a_1.u19_1.z19() === get_TC_COMMA()) {
              this.p1a_1.u19_1.y18('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.r1a_1 = LinkedHashMap_init_$Create$();
            this.tb_1 = 1;
            continue $sm;
          case 1:
            if (!this.p1a_1.u19_1.a1a()) {
              this.tb_1 = 4;
              continue $sm;
            }

            this.s1a_1 = this.p1a_1.v19_1 ? this.p1a_1.u19_1.c1a() : this.p1a_1.u19_1.b1a();
            this.p1a_1.u19_1.y19(get_TC_COLON());
            this.tb_1 = 2;
            suspendResult = this.o1a_1.cg(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var this_0 = this.r1a_1;
            var key = this.s1a_1;
            this_0.n2(key, element);
            this.q1a_1 = this.p1a_1.u19_1.e1a();
            var tmp0_subject = this.q1a_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.tb_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.tb_1 = 4;
                continue $sm;
              } else {
                this.p1a_1.u19_1.y18('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.tb_1 = 1;
            continue $sm;
          case 4:
            if (this.q1a_1 === get_TC_BEGIN_OBJ()) {
              this.p1a_1.u19_1.y19(get_TC_END_OBJ());
            } else if (this.q1a_1 === get_TC_COMMA()) {
              if (!this.p1a_1.w19_1) {
                invalidTrailingComma(this.p1a_1.u19_1);
              }
              this.p1a_1.u19_1.y19(get_TC_END_OBJ());
            }

            return new JsonObject(this.r1a_1);
          case 5:
            throw this.wb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ub_1 === 5) {
          throw e;
        } else {
          this.tb_1 = this.ub_1;
          this.wb_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.u19_1 = lexer;
    this.v19_1 = configuration.t15_1;
    this.w19_1 = configuration.f16_1;
    this.x19_1 = 0;
  }
  protoOf(JsonTreeReader).d1a = function () {
    var token = this.u19_1.z19();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      this.x19_1 = this.x19_1 + 1 | 0;
      if (this.x19_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.x19_1 = this.x19_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.u19_1.y18('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.bk().t();
    while (tmp0_iterator.u()) {
      var annotation = tmp0_iterator.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.i1b_1;
    }
    return json.f14_1.a16_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.h16().f14_1.z15_1;
    }
    if (tmp) {
      return deserializer.ri(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.pi(), _this__u8e3s4.h16());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = _this__u8e3s4.i16();
    var descriptor = deserializer.pi();
    if (!(value instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.qj() + ', but had ' + getKClassFromExpression(value));
    }
    var jsonTree = value;
    var tmp0_safe_receiver = jsonTree.l16(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
    var tmp_0;
    try {
      tmp_0 = findPolymorphicSerializer(deserializer, _this__u8e3s4, type);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof SerializationException) {
        var it = $p;
        throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
      } else {
        throw $p;
      }
    }
    var tmp_2 = tmp_0;
    var actualSerializer = isInterface(tmp_2, DeserializationStrategy) ? tmp_2 : THROW_CCE();
    return readPolymorphicJson(_this__u8e3s4.h16(), discriminator, jsonTree, actualSerializer);
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.pi()).p(classDiscriminator)) {
      var baseName = serializer.pi().qj();
      var actualName = actualSerializer.pi().qj();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.ek();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.i6() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.j1b_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.i6() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.ck();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.ik(i);
        if (name === $this.k1b_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.j1b_1 = useArrayPolymorphism;
    this.k1b_1 = discriminator;
  }
  protoOf(PolymorphismValidator).d13 = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).g13 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.pi();
    checkKind_0(this, descriptor, actualClass);
    if (!this.j1b_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).h13 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).i13 = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.z18_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).l1b = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.z18_1;
    var value_0 = this_0.x2(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.n2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var this_1 = tmp;
    var key_0 = key instanceof Key ? key : THROW_CCE();
    var value_1 = !(value == null) ? value : THROW_CCE();
    this_1.n2(key_0, value_1);
  };
  protoOf(DescriptorSchemaCache).a19 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.m1b(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.l1b(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).m1b = function (descriptor, key) {
    var tmp0_safe_receiver = this.z18_1.x2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.x2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.n1b_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.n1b_1 === unknownKey) {
      _this__u8e3s4.n1b_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.pm(descriptor);
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.p14_1.z19() === get_TC_COMMA()) {
      $this.p14_1.y18('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.r14_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.r14_1 === -1)) {
        hasComma = $this.p14_1.p1b();
      }
    } else {
      $this.p14_1.o1b(get_COLON());
    }
    var tmp;
    if ($this.p14_1.a1a()) {
      if (decodingKey) {
        if ($this.r14_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_0 = $this.p14_1;
          var condition = !hasComma;
          var position = this_0.v14_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            this_0.y18(tmp$ret$0, position);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_1 = $this.p14_1;
          var condition_0 = hasComma;
          var position_0 = this_1.v14_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            this_1.y18(tmp$ret$1, position_0);
          }
        }
      }
      $this.r14_1 = $this.r14_1 + 1 | 0;
      tmp = $this.r14_1;
    } else {
      if (hasComma ? !$this.n14_1.f14_1.f16_1 : false) {
        invalidTrailingComma($this.p14_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.n14_1;
      if (!descriptor.jk(index)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      var elementDescriptor = descriptor.gk(index);
      var tmp;
      if (!elementDescriptor.xj()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.p14_1.q1b(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (equals(elementDescriptor.ek(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.xj()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.p14_1.q1b(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_3;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.p14_1.r1b($this.t14_1.t15_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_3;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.p14_1.b1a();
          tmp$ret$0 = true;
          break $l$block_3;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.p14_1.p1b();
    while ($this.p14_1.a1a()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.p14_1.o1b(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.n14_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.t14_1.y15_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.p14_1.p1b();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.u14_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.ds(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma ? !$this.n14_1.f14_1.f16_1 : false) {
      invalidTrailingComma($this.p14_1);
    }
    var tmp1_safe_receiver = $this.u14_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.es();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.t14_1.s15_1 ? true : trySkip($this.s14_1, $this, key)) {
      $this.p14_1.t1b($this.t14_1.t15_1);
    } else {
      $this.p14_1.s1b(key);
    }
    return $this.p14_1.p1b();
  }
  function decodeListIndex($this) {
    var hasComma = $this.p14_1.p1b();
    var tmp;
    if ($this.p14_1.a1a()) {
      if (!($this.r14_1 === -1) ? !hasComma : false) {
        $this.p14_1.y18('Expected end of the array or comma');
      }
      $this.r14_1 = $this.r14_1 + 1 | 0;
      tmp = $this.r14_1;
    } else {
      if (hasComma ? !$this.n14_1.f14_1.f16_1 : false) {
        invalidTrailingComma($this.p14_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.t14_1.t15_1) {
      tmp = $this.p14_1.v1b();
    } else {
      tmp = $this.p14_1.u1b();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.n14_1 = json;
    this.o14_1 = mode;
    this.p14_1 = lexer;
    this.q14_1 = this.n14_1.mm();
    this.r14_1 = -1;
    this.s14_1 = discriminatorHolder;
    this.t14_1 = this.n14_1.f14_1;
    this.u14_1 = this.t14_1.w15_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).h16 = function () {
    return this.n14_1;
  };
  protoOf(StreamingJsonDecoder).mm = function () {
    return this.q14_1;
  };
  protoOf(StreamingJsonDecoder).i16 = function () {
    return (new JsonTreeReader(this.n14_1.f14_1, this.p14_1)).d1a();
  };
  protoOf(StreamingJsonDecoder).wl = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.n14_1.f14_1.z15_1;
      }
      if (tmp) {
        return deserializer.ri(this);
      }
      var discriminator = classDiscriminator(deserializer.pi(), this.n14_1);
      var tmp0_elvis_lhs = this.p14_1.w1b(discriminator, this.t14_1.t15_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type = tmp_0;
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it.message), _Char___init__impl__6a9atx(10), '');
          this.p14_1.y18(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp_3 = tmp_1;
      var actualSerializer = isInterface(tmp_3, DeserializationStrategy) ? tmp_3 : THROW_CCE();
      this.s14_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer.ri(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.sj_1, plus(e.message, ' at path: ') + this.p14_1.w14_1.l19(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).xl = function (descriptor) {
    var newMode = switchMode(this.n14_1, descriptor);
    this.p14_1.w14_1.g19(descriptor);
    this.p14_1.o1b(newMode.z1b_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.n9_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.n14_1, newMode, this.p14_1, descriptor, this.s14_1);
        break;
      default:
        var tmp_0;
        if (this.o14_1.equals(newMode) ? this.n14_1.f14_1.w15_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.n14_1, newMode, this.p14_1, descriptor, this.s14_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).yl = function (descriptor) {
    if (this.n14_1.f14_1.s15_1 ? descriptor.ck() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.p14_1.p1b() ? !this.n14_1.f14_1.f16_1 : false) {
      invalidTrailingComma(this.p14_1, '');
    }
    this.p14_1.o1b(this.o14_1.a1c_1);
    this.p14_1.w14_1.k19();
  };
  protoOf(StreamingJsonDecoder).il = function () {
    var tmp;
    var tmp0_safe_receiver = this.u14_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w18_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.p14_1.b1c();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).jl = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).jm = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.o14_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.p14_1.w14_1.j19();
    }
    var value = protoOf(AbstractDecoder).jm.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.p14_1.w14_1.i19(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).pm = function (descriptor) {
    var index;
    switch (this.o14_1.n9_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.o14_1.equals(WriteMode_MAP_getInstance())) {
      this.p14_1.w14_1.h19(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).kl = function () {
    return this.p14_1.c1c();
  };
  protoOf(StreamingJsonDecoder).ll = function () {
    var value = this.p14_1.x16();
    if (!value.equals(toLong(value.kb()))) {
      this.p14_1.y18("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.kb();
  };
  protoOf(StreamingJsonDecoder).ml = function () {
    var value = this.p14_1.x16();
    if (!value.equals(toLong(value.lb()))) {
      this.p14_1.y18("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.lb();
  };
  protoOf(StreamingJsonDecoder).nl = function () {
    var value = this.p14_1.x16();
    if (!value.equals(toLong(value.da()))) {
      this.p14_1.y18("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.da();
  };
  protoOf(StreamingJsonDecoder).ol = function () {
    return this.p14_1.x16();
  };
  protoOf(StreamingJsonDecoder).pl = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.p14_1;
      var input = this_0.c1a();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.y18("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.n14_1.f14_1.b16_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.p14_1, result);
  };
  protoOf(StreamingJsonDecoder).ql = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.p14_1;
      var input = this_0.c1a();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.y18("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.n14_1.f14_1.b16_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.p14_1, result);
  };
  protoOf(StreamingJsonDecoder).rl = function () {
    var string = this.p14_1.c1a();
    if (!(string.length === 1)) {
      this.p14_1.y18("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).sl = function () {
    var tmp;
    if (this.t14_1.t15_1) {
      tmp = this.p14_1.v1b();
    } else {
      tmp = this.p14_1.b1a();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).ul = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.p14_1, this.n14_1) : protoOf(AbstractDecoder).ul.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).tl = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.n14_1, this.sl(), ' at path ' + this.p14_1.w14_1.l19());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.d1c_1 = lexer;
    this.e1c_1 = json.mm();
  }
  protoOf(JsonDecoderForUnsignedTypes).mm = function () {
    return this.e1c_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).pm = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).nl = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.d1c_1;
      var input = this_0.c1a();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var this_1 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.y18("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).ol = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.d1c_1;
      var input = this_0.c1a();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var this_1 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.y18("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).ll = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.d1c_1;
      var input = this_0.c1a();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var this_1 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.y18("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).ml = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.d1c_1;
      var input = this_0.c1a();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var this_1 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.y18("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.m19_1.u17();
    $this.cn(ensureNotNull($this.t19_1));
    $this.m19_1.x17(get_COLON());
    $this.m19_1.w17();
    $this.cn(descriptor.qj());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.m19_1 = composer;
    this.n19_1 = json;
    this.o19_1 = mode;
    this.p19_1 = modeReuseCache;
    this.q19_1 = this.n19_1.mm();
    this.r19_1 = this.n19_1.f14_1;
    this.s19_1 = false;
    this.t19_1 = null;
    var i = this.o19_1.n9_1;
    if (!(this.p19_1 == null)) {
      if (!(this.p19_1[i] === null) ? true : !(this.p19_1[i] === this)) {
        this.p19_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).h16 = function () {
    return this.n19_1;
  };
  protoOf(StreamingJsonEncoder).mm = function () {
    return this.q19_1;
  };
  protoOf(StreamingJsonEncoder).p17 = function (element) {
    this.qn(JsonElementSerializer_getInstance(), element);
  };
  protoOf(StreamingJsonEncoder).vn = function (descriptor, index) {
    return this.r19_1.r15_1;
  };
  protoOf(StreamingJsonEncoder).qn = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.h16().f14_1.z15_1) {
        serializer.qi(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.h16().f14_1.g16_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.h16().f14_1.g16_1.n9_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.pi().ek();
            tmp_0 = equals(it, CLASS_getInstance()) ? true : equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.pi(), this.h16()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + serializer.pi() + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          validateIfSealed$accessor$1ad0flx(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.pi().ek());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        this.t19_1 = baseClassDiscriminator;
      }
      actualSerializer.qi(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).xl = function (descriptor) {
    var newMode = switchMode(this.n19_1, descriptor);
    if (!(newMode.z1b_1 === get_INVALID())) {
      this.m19_1.x17(newMode.z1b_1);
      this.m19_1.s17();
    }
    if (!(this.t19_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.t19_1 = null;
    }
    if (this.o19_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.p19_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.n9_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.m19_1, this.n19_1, newMode, this.p19_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).yl = function (descriptor) {
    if (!(this.o19_1.a1c_1 === get_INVALID())) {
      this.m19_1.t17();
      this.m19_1.v17();
      this.m19_1.x17(this.o19_1.a1c_1);
    }
  };
  protoOf(StreamingJsonEncoder).rm = function (descriptor, index) {
    switch (this.o19_1.n9_1) {
      case 1:
        if (!this.m19_1.r17_1) {
          this.m19_1.x17(get_COMMA());
        }

        this.m19_1.u17();
        break;
      case 2:
        if (!this.m19_1.r17_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.m19_1.x17(get_COMMA());
            this.m19_1.u17();
            tmp_0 = true;
          } else {
            this.m19_1.x17(get_COLON());
            this.m19_1.w17();
            tmp_0 = false;
          }
          tmp.s19_1 = tmp_0;
        } else {
          this.s19_1 = true;
          this.m19_1.u17();
        }

        break;
      case 3:
        if (index === 0)
          this.s19_1 = true;
        if (index === 1) {
          this.m19_1.x17(get_COMMA());
          this.m19_1.w17();
          this.s19_1 = false;
        }

        break;
      default:
        if (!this.m19_1.r17_1) {
          this.m19_1.x17(get_COMMA());
        }

        this.m19_1.u17();
        this.cn(getJsonElementName(descriptor, this.n19_1, index));
        this.m19_1.x17(get_COLON());
        this.m19_1.w17();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).rn = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.r19_1.w15_1) {
      protoOf(AbstractEncoder).rn.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).en = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.m19_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.m19_1;
      } else {
        tmp_0 = new ComposerForUnsignedNumbers(this.m19_1.q17_1, this.s19_1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.n19_1, this.o19_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.m19_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.m19_1;
      } else {
        tmp_2 = new ComposerForUnquotedLiterals(this.m19_1.q17_1, this.s19_1);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.n19_1, this.o19_1, null);
    } else {
      tmp = protoOf(AbstractEncoder).en.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).tm = function () {
    this.m19_1.z17(get_NULL());
  };
  protoOf(StreamingJsonEncoder).um = function (value) {
    if (this.s19_1) {
      this.cn(value.toString());
    } else {
      this.m19_1.i18(value);
    }
  };
  protoOf(StreamingJsonEncoder).vm = function (value) {
    if (this.s19_1) {
      this.cn(value.toString());
    } else {
      this.m19_1.d18(value);
    }
  };
  protoOf(StreamingJsonEncoder).wm = function (value) {
    if (this.s19_1) {
      this.cn(value.toString());
    } else {
      this.m19_1.f18(value);
    }
  };
  protoOf(StreamingJsonEncoder).xm = function (value) {
    if (this.s19_1) {
      this.cn(value.toString());
    } else {
      this.m19_1.g18(value);
    }
  };
  protoOf(StreamingJsonEncoder).ym = function (value) {
    if (this.s19_1) {
      this.cn(value.toString());
    } else {
      this.m19_1.h18(value);
    }
  };
  protoOf(StreamingJsonEncoder).zm = function (value) {
    if (this.s19_1) {
      this.cn(value.toString());
    } else {
      this.m19_1.b18(value);
    }
    if (!this.r19_1.b16_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.m19_1.q17_1));
    }
  };
  protoOf(StreamingJsonEncoder).an = function (value) {
    if (this.s19_1) {
      this.cn(value.toString());
    } else {
      this.m19_1.c18(value);
    }
    if (!this.r19_1.b16_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.m19_1.q17_1));
    }
  };
  protoOf(StreamingJsonEncoder).bn = function (value) {
    this.cn(toString_0(value));
  };
  protoOf(StreamingJsonEncoder).cn = function (value) {
    return this.m19_1.j18(value);
  };
  protoOf(StreamingJsonEncoder).dn = function (enumDescriptor, index) {
    this.cn(enumDescriptor.ik(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.dk() ? get_unsignedNumberDescriptors().p(_this__u8e3s4) : false;
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.dk() ? equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor()) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).pi(), serializer_0(Companion_getInstance()).pi(), serializer_2(Companion_getInstance_1()).pi(), serializer_3(Companion_getInstance_2()).pi()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.u5(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.u7(value, lastPos, i);
          _this__u8e3s4.t5(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.u7(value, lastPos, value.length);
    } else {
      _this__u8e3s4.t5(value);
    }
    _this__u8e3s4.u5(get_STRING());
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.arrayOfNulls' call
      var this_0 = fillArrayVal(Array(93), null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_0(c1) + toString_0(c2) + toString_0(c3) + toString_0(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      this_7[Char__toInt_impl_vasixd(this_8)] = 34;
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(92);
      this_7[Char__toInt_impl_vasixd(this_9)] = 92;
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(9);
      this_7[Char__toInt_impl_vasixd(this_10)] = 116;
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(8);
      this_7[Char__toInt_impl_vasixd(this_11)] = 98;
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(10);
      this_7[Char__toInt_impl_vasixd(this_12)] = 110;
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(13);
      this_7[Char__toInt_impl_vasixd(this_13)] = 114;
      this_7[12] = 102;
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.k1c()));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' literal when non-nullable " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.h1c_1 = json;
    this.i1c_1 = value;
    this.j1c_1 = this.h16().f14_1;
  }
  protoOf(AbstractJsonTreeDecoder).h16 = function () {
    return this.h1c_1;
  };
  protoOf(AbstractJsonTreeDecoder).r2 = function () {
    return this.i1c_1;
  };
  protoOf(AbstractJsonTreeDecoder).mm = function () {
    return this.h16().mm();
  };
  protoOf(AbstractJsonTreeDecoder).k1c = function () {
    var tmp0_safe_receiver = this.f10();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.l1c(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.r2() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).i16 = function () {
    return this.k1c();
  };
  protoOf(AbstractJsonTreeDecoder).wl = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).g10 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).xl = function (descriptor) {
    var currentObject = this.k1c();
    var tmp0_subject = descriptor.ek();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.h16();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.qj() + ', but had ' + getKClassFromExpression(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.h16();
        var keyDescriptor = carrierDescriptor(descriptor.gk(0), this_0.mm());
        var keyKind = keyDescriptor.ek();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.h16();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.qj() + ', but had ' + getKClassFromExpression(currentObject));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
        } else {
          if (this_0.f14_1.u15_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.h16();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.qj() + ', but had ' + getKClassFromExpression(currentObject));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.h16();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.qj() + ', but had ' + getKClassFromExpression(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).yl = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).il = function () {
    var tmp = this.k1c();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).m1c = function (tag) {
    var currentElement = this.l1c(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(this.k1c()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).n1c = function (tag, enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.h16(), this.m1c(tag).n16());
  };
  protoOf(AbstractJsonTreeDecoder).s10 = function (tag, enumDescriptor) {
    return this.n1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).o1c = function (tag) {
    return !(this.l1c(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).i10 = function (tag) {
    return this.o1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m1c(tag);
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).j10 = function (tag) {
    return this.p1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m1c(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ByteCompanionObject_instance.MIN_VALUE;
        if (result <= ByteCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).k10 = function (tag) {
    return this.q1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m1c(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ShortCompanionObject_instance.MIN_VALUE;
        if (result <= ShortCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).l10 = function (tag) {
    return this.r1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m1c(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        var tmp0_elvis_lhs = get_int(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).m10 = function (tag) {
    return this.s1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).t1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m1c(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        var tmp0_elvis_lhs = get_long(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).n10 = function (tag) {
    return this.t1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).u1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m1c(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        var tmp0_elvis_lhs = get_float(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.h16().f14_1.b16_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.k1c()));
  };
  protoOf(AbstractJsonTreeDecoder).o10 = function (tag) {
    return this.u1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).v1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m1c(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        var tmp0_elvis_lhs = get_double(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.h16().f14_1.b16_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.k1c()));
  };
  protoOf(AbstractJsonTreeDecoder).p10 = function (tag) {
    return this.v1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).w1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m1c(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = single(this_0.n16());
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).q10 = function (tag) {
    return this.w1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).x1c = function (tag) {
    var value = this.m1c(tag);
    if (!this.h16().f14_1.t15_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.u16_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(this.k1c()));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.k1c()));
    return value.n16();
  };
  protoOf(AbstractJsonTreeDecoder).r10 = function (tag) {
    return this.x1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).y1c = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.m1c(tag).n16()), this.h16()) : protoOf(NamedValueDecoder).t10.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).t10 = function (tag, inlineDescriptor) {
    return this.y1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).ul = function (descriptor) {
    return !(this.f10() == null) ? protoOf(NamedValueDecoder).ul.call(this, descriptor) : (new JsonPrimitiveDecoder(this.h16(), this.r2())).ul(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.h16();
      if (!descriptor.jk(index)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      var elementDescriptor = descriptor.gk(index);
      var tmp;
      if (!elementDescriptor.xj()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.l1c(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (equals(elementDescriptor.ek(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.xj()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.l1c(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = false;
          break $l$block_3;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.l1c(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_3;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$0 = true;
          break $l$block_3;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.i1d_1 = (!$this.h16().f14_1.w15_1 ? !descriptor.jk(index) : false) ? descriptor.gk(index).xj() : false;
    return $this.i1d_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.e1d_1 = value;
    this.f1d_1 = polyDiscriminator;
    this.g1d_1 = polyDescriptor;
    this.h1d_1 = 0;
    this.i1d_1 = false;
  }
  protoOf(JsonTreeDecoder).r2 = function () {
    return this.e1d_1;
  };
  protoOf(JsonTreeDecoder).pm = function (descriptor) {
    while (this.h1d_1 < descriptor.ck()) {
      var tmp1 = this.h1d_1;
      this.h1d_1 = tmp1 + 1 | 0;
      var name = this.a10(descriptor, tmp1);
      var index = this.h1d_1 - 1 | 0;
      this.i1d_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.r2();
      if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).u2(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.j1c_1.y15_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).il = function () {
    return !this.i1d_1 ? protoOf(AbstractJsonTreeDecoder).il.call(this) : false;
  };
  protoOf(JsonTreeDecoder).b10 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.h16());
    var baseName = descriptor.ik(index);
    if (strategy == null) {
      if (!this.j1c_1.c16_1)
        return baseName;
      if (this.r2().l2().p(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.h16(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.r2().l2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.t();
      while (tmp0_iterator.u()) {
        var element = tmp0_iterator.v();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.x2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.c19(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).l1c = function (tag) {
    return getValue(this.r2(), tag);
  };
  protoOf(JsonTreeDecoder).xl = function (descriptor) {
    if (descriptor === this.g1d_1) {
      var tmp = this.h16();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k1c();
      var descriptor_0 = this.g1d_1;
      if (!(value instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor_0.qj() + ', but had ' + getKClassFromExpression(value));
      }
      return new JsonTreeDecoder(tmp, value, this.f1d_1, this.g1d_1);
    }
    return protoOf(AbstractJsonTreeDecoder).xl.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).yl = function (descriptor) {
    var tmp;
    if (this.j1c_1.s15_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.ek();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.h16());
    var tmp_1;
    if (strategy == null ? !this.j1c_1.c16_1 : false) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.h16(), descriptor).l2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.h16()).m1b(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.r2().l2().t();
    while (tmp1_iterator.u()) {
      var key = tmp1_iterator.v();
      if (!names.p(key) ? !(key === this.f1d_1) : false) {
        throw UnknownKeyException(key, this.r2().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.o1d_1 = value;
    this.p1d_1 = this.o1d_1.n();
    this.q1d_1 = -1;
  }
  protoOf(JsonTreeListDecoder).r2 = function () {
    return this.o1d_1;
  };
  protoOf(JsonTreeListDecoder).b10 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).l1c = function (tag) {
    return this.o1d_1.c1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).pm = function (descriptor) {
    while (this.q1d_1 < (this.p1d_1 - 1 | 0)) {
      this.q1d_1 = this.q1d_1 + 1 | 0;
      return this.q1d_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.w1d_1 = value;
    this.u10(get_PRIMITIVE_TAG());
  }
  protoOf(JsonPrimitiveDecoder).r2 = function () {
    return this.w1d_1;
  };
  protoOf(JsonPrimitiveDecoder).pm = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).l1c = function (tag) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tag === get_PRIMITIVE_TAG())) {
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      var message = "This input can only handle primitives with '" + get_PRIMITIVE_TAG() + "' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.w1d_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.h1e_1 = value;
    this.i1e_1 = toList(this.h1e_1.l2());
    this.j1e_1 = imul(this.i1e_1.n(), 2);
    this.k1e_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).r2 = function () {
    return this.h1e_1;
  };
  protoOf(JsonTreeMapDecoder).b10 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.i1e_1.c1(i);
  };
  protoOf(JsonTreeMapDecoder).pm = function (descriptor) {
    while (this.k1e_1 < (this.j1e_1 - 1 | 0)) {
      this.k1e_1 = this.k1e_1 + 1 | 0;
      return this.k1e_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).l1c = function (tag) {
    return (this.k1e_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.h1e_1, tag);
  };
  protoOf(JsonTreeMapDecoder).yl = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.pi())).wl(deserializer);
  }
  function get_PRIMITIVE_TAG() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.z1b_1 = begin;
    this.a1c_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.ek();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.gk(0), _this__u8e3s4.mm());
          var keyKind = keyDescriptor.ek();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.f14_1.u15_1) {
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.ek(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.dk()) {
      tmp = carrierDescriptor(_this__u8e3s4.gk(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.l1e(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.l1e(lastPosition, currentPosition);
    var result = $this.y14_1.toString();
    $this.y14_1.z7(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.x14_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.x14_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.m1e(), $this.v14_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.n1e(currentPosition);
    if (currentPosition === -1) {
      $this.y18('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.m1e();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.m1e(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.y18("Invalid escaped char '" + toString_0(currentChar) + "'");
    }
    $this.y14_1.u5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.v14_1 = startPos;
      $this.o1e();
      if (($this.v14_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.y18('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.v14_1);
    }
    $this.y14_1.u5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.y18("Invalid toHexChar char '" + toString_0(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.n1e(start);
    if (current >= charSequenceLength($this.m1e()) ? true : current === -1) {
      $this.y18('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.m1e();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var this_0 = charSequenceGet(tmp, tmp0);
    var tmp1_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp1_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp1_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.y18("Expected valid boolean literal prefix, but had '" + $this.c1a() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.m1e()) - current | 0) < literalSuffix.length) {
      $this.y18('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.m1e(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.y18("Expected valid boolean literal prefix, but had '" + $this.c1a() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.v14_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.f6();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.f6();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.v14_1 = 0;
    this.w14_1 = new JsonPath();
    this.x14_1 = null;
    this.y14_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).o1e = function () {
  };
  protoOf(AbstractJsonLexer).p1e = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).z14 = function () {
    var nextToken = this.e1a();
    if (!(nextToken === 10)) {
      this.y18('Expected EOF after parsing, but had ' + toString_0(charSequenceGet(this.m1e(), this.v14_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).y19 = function (expected) {
    var token = this.e1a();
    if (!(token === expected)) {
      this.q1e(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).o1b = function (expected) {
    this.o1e();
    var source = this.m1e();
    var cpos = this.v14_1;
    $l$loop_0: while (true) {
      cpos = this.n1e(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.v14_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.r1e(expected);
    }
    this.v14_1 = cpos;
    this.r1e(expected);
  };
  protoOf(AbstractJsonLexer).r1e = function (expected) {
    if (this.v14_1 > 0 ? expected === _Char___init__impl__6a9atx(34) : false) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.v14_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.v14_1 = this.v14_1 - 1 | 0;
          tmp$ret$1 = this.c1a();
          break $l$block;
        }finally {
          this.v14_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.x18("Expected string literal but 'null' literal was found", this.v14_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.q1e(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).s1e = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.v14_1 - 1 | 0 : this.v14_1;
    var s = (this.v14_1 === charSequenceLength(this.m1e()) ? true : position < 0) ? 'EOF' : toString_0(charSequenceGet(this.m1e(), position));
    this.y18('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).q1e = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.s1e(expectedToken, wasConsumed) : $super.s1e.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).z19 = function () {
    var source = this.m1e();
    var cpos = this.v14_1;
    $l$loop_0: while (true) {
      cpos = this.n1e(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((ch === _Char___init__impl__6a9atx(32) ? true : ch === _Char___init__impl__6a9atx(10)) ? true : ch === _Char___init__impl__6a9atx(13)) ? true : ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.v14_1 = cpos;
      return charToTokenClass(ch);
    }
    this.v14_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).q1b = function (doConsume) {
    var current = this.t1e();
    current = this.n1e(current);
    var len = charSequenceLength(this.m1e()) - current | 0;
    if (len < 4 ? true : current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.m1e(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.m1e(), current + 4 | 0)) === 0 : false)
      return false;
    if (doConsume) {
      this.v14_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).b1c = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.q1b(doConsume) : $super.q1b.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).t1e = function () {
    var current = this.v14_1;
    $l$loop_0: while (true) {
      current = this.n1e(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.m1e(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.v14_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).r1b = function (isLenient) {
    var token = this.z19();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.c1a();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.b1a();
    }
    var string = tmp;
    this.x14_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).u1e = function () {
    this.x14_1 = null;
  };
  protoOf(AbstractJsonLexer).v1e = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.m1e();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).b1a = function () {
    if (!(this.x14_1 == null)) {
      return takePeeked(this);
    }
    return this.u1b();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.n1e(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.y18('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.l1e(lastPosition, currentPosition);
          currentPosition = this.n1e(currentPosition);
          if (currentPosition === -1) {
            this.y18('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.v1e(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.v14_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).v1b = function () {
    var result = this.c1a();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.y18("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).c1a = function () {
    if (!(this.x14_1 == null)) {
      return takePeeked(this);
    }
    var current = this.t1e();
    if (current >= charSequenceLength(this.m1e()) ? true : current === -1) {
      this.y18('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.m1e(), current));
    if (token === 1) {
      return this.b1a();
    }
    if (!(token === 0)) {
      this.y18('Expected beginning of the string, but got ' + toString_0(charSequenceGet(this.m1e(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.m1e(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.m1e())) {
        usedAppend = true;
        this.l1e(this.v14_1, current);
        var eof = this.n1e(current);
        if (eof === -1) {
          this.v14_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.v1e(this.v14_1, current);
    } else {
      tmp = decodedString(this, this.v14_1, current);
    }
    var result = tmp;
    this.v14_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).l1e = function (fromIndex, toIndex) {
    this.y14_1.u7(this.m1e(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).t1b = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.z19();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.c1a();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.z19();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.c1a();
        } else {
          this.u1b();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.q(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.v14_1, 'found ] instead of } at path: ' + this.w14_1, this.m1e());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.v14_1, 'found } instead of ] at path: ' + this.w14_1, this.m1e());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.y18('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.e1a();
      if (tokenStack.n() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.m1e() + "', currentPosition=" + this.v14_1 + ')';
  };
  protoOf(AbstractJsonLexer).s1b = function (key) {
    var processed = this.v1e(0, this.v14_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.x18("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).x18 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.w14_1.l19() + hintMessage, this.m1e());
  };
  protoOf(AbstractJsonLexer).y18 = function (message, position, hint, $super) {
    position = position === VOID ? this.v14_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.x18(message, position, hint) : $super.x18.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).x16 = function () {
    var current = this.t1e();
    current = this.n1e(current);
    if (current >= charSequenceLength(this.m1e()) ? true : current === -1) {
      this.y18('EOF');
    }
    var tmp;
    if (charSequenceGet(this.m1e(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.m1e())) {
        this.y18('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.m1e()))) {
      var ch = charSequenceGet(this.m1e(), current);
      if ((ch === _Char___init__impl__6a9atx(101) ? true : ch === _Char___init__impl__6a9atx(69)) ? !hasExponent : false) {
        if (current === start) {
          this.y18('Unexpected symbol ' + toString_0(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) ? hasExponent : false) {
        if (current === start) {
          this.y18("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) ? hasExponent : false) {
        if (current === start) {
          this.y18("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.y18("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.y18("Unexpected symbol '" + toString_0(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.plus' call
        // Inline function 'kotlin.Long.times' call
        exponentAccumulator = exponentAccumulator.q9(toLong(10)).za(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.q9(toLong(10)).v9(toLong(digit));
      if (accumulator.r9(new Long(0, 0)) > 0) {
        this.y18('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.y18('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.y18('EOF');
      }
      if (!(charSequenceGet(this.m1e(), current) === _Char___init__impl__6a9atx(34))) {
        this.y18('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.v14_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.f6() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      var tmp_0;
      Companion_getInstance_3();
      if (doubleAccumulator > (new Long(-1, 2147483647)).f6()) {
        tmp_0 = true;
      } else {
        Companion_getInstance_3();
        tmp_0 = doubleAccumulator < (new Long(0, -2147483648)).f6();
      }
      if (tmp_0) {
        this.y18('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.y18("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_3();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.cb();
      } else {
        this.y18('Numeric value overflow');
      }
    }
    return tmp_1;
  };
  protoOf(AbstractJsonLexer).c1c = function () {
    var current = this.t1e();
    if (current === charSequenceLength(this.m1e())) {
      this.y18('EOF');
    }
    var tmp;
    if (charSequenceGet(this.m1e(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.v14_1 === charSequenceLength(this.m1e())) {
        this.y18('EOF');
      }
      if (!(charSequenceGet(this.m1e(), this.v14_1) === _Char___init__impl__6a9atx(34))) {
        this.y18('Expected closing quotation mark');
      }
      this.v14_1 = this.v14_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().x1e_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().w1e_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.w1e_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.x1e_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.w1e_1 = charArray(117);
    this.x1e_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.c1f_1 = source;
  }
  protoOf(StringJsonLexer).m1e = function () {
    return this.c1f_1;
  };
  protoOf(StringJsonLexer).n1e = function (position) {
    return position < this.c1f_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).e1a = function () {
    var source = this.c1f_1;
    $l$loop: while (!(this.v14_1 === -1) ? this.v14_1 < source.length : false) {
      var tmp1 = this.v14_1;
      this.v14_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  protoOf(StringJsonLexer).p1b = function () {
    var current = this.t1e();
    if (current === this.c1f_1.length ? true : current === -1)
      return false;
    if (charSequenceGet(this.c1f_1, current) === _Char___init__impl__6a9atx(44)) {
      this.v14_1 = this.v14_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).a1a = function () {
    var current = this.v14_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.c1f_1.length) {
      var c = charSequenceGet(this.c1f_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.v14_1 = current;
      return this.p1e(c);
    }
    this.v14_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).t1e = function () {
    var current = this.v14_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.c1f_1.length) {
      var c = charSequenceGet(this.c1f_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.v14_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).o1b = function (expected) {
    if (this.v14_1 === -1) {
      this.r1e(expected);
    }
    var source = this.c1f_1;
    $l$loop: while (this.v14_1 < source.length) {
      var tmp1 = this.v14_1;
      this.v14_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_instance;
      this.r1e(expected);
    }
    this.v14_1 = -1;
    this.r1e(expected);
  };
  protoOf(StringJsonLexer).u1b = function () {
    this.o1b(get_STRING());
    var current = this.v14_1;
    var closingQuote = indexOf(this.c1f_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.c1a();
      this.s1e(get_TC_STRING(), false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.c1f_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.c1f_1, this.v14_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.v14_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.c1f_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).w1b = function (keyToMatch, isLenient) {
    var positionSnapshot = this.v14_1;
    try {
      if (!(this.e1a() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = this.r1b(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.u1e();
      if (!(this.e1a() === get_TC_COLON()))
        return null;
      return this.r1b(isLenient);
    }finally {
      this.v14_1 = positionSnapshot;
      this.u1e();
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.h14_1;
  }
  function JsonToStringWriter() {
    this.l14_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).e18 = function (value) {
    this.l14_1.x7(value);
  };
  protoOf(JsonToStringWriter).y17 = function (char) {
    this.l14_1.u5(char);
  };
  protoOf(JsonToStringWriter).a18 = function (text) {
    this.l14_1.t5(text);
  };
  protoOf(JsonToStringWriter).k18 = function (text) {
    printQuoted(this.l14_1, text);
  };
  protoOf(JsonToStringWriter).m14 = function () {
    this.l14_1.a8();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.l14_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).xj = get_isNullable;
  protoOf(defer$1).dk = get_isInline;
  protoOf(defer$1).bk = get_annotations;
  protoOf(PolymorphismValidator).f13 = contextual;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Tombstone_instance = new Tombstone();
  PRIMITIVE_TAG = 'primitive';
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  TC_OTHER = 0;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_END_OBJ = 7;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  _.$_$.b = Companion_instance_1;
  _.$_$.c = JsonDecoder;
  _.$_$.d = JsonEncoder;
  _.$_$.e = JsonObject;
  _.$_$.f = Json_0;
  _.$_$.g = get_jsonObject;
  _.$_$.h = get_jsonPrimitive;
  //endregion
  _.$_$.JsonImpl = JsonImpl
  _.$_$.Default_getInstance = Default_getInstance
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
