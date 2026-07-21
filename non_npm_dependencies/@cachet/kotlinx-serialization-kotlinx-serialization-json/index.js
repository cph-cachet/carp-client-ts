(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@cachet/kotlinx-serialization-kotlinx-serialization-core', '@cachet/kotlin-kotlin-stdlib'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@cachet/kotlinx-serialization-kotlinx-serialization-core'), require('@cachet/kotlin-kotlin-stdlib'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var protoOf = kotlin_kotlin.$_$.b9;
  var initMetadataForObject = kotlin_kotlin.$_$.m8;
  var VOID = kotlin_kotlin.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.u2;
  var initMetadataForClass = kotlin_kotlin.$_$.g8;
  var toString = kotlin_kotlin.$_$.d9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s3;
  var charSequenceLength = kotlin_kotlin.$_$.u7;
  var charSequenceGet = kotlin_kotlin.$_$.t7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.j;
  var equals = kotlin_kotlin.$_$.z7;
  var toString_0 = kotlin_kotlin.$_$.pc;
  var Enum = kotlin_kotlin.$_$.nb;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var initMetadataForInterface = kotlin_kotlin.$_$.k8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o3;
  var hashCode = kotlin_kotlin.$_$.f8;
  var joinToString = kotlin_kotlin.$_$.w5;
  var THROW_CCE = kotlin_kotlin.$_$.sb;
  var KtMap = kotlin_kotlin.$_$.l4;
  var KtList = kotlin_kotlin.$_$.i4;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var getKClassFromExpression = kotlin_kotlin.$_$.p9;
  var getBooleanHashCode = kotlin_kotlin.$_$.b8;
  var getStringHashCode = kotlin_kotlin.$_$.e8;
  var toDouble = kotlin_kotlin.$_$.ta;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.g2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nc;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toLongOrNull = kotlin_kotlin.$_$.wa;
  var toULongOrNull = kotlin_kotlin.$_$.ab;
  var ULong = kotlin_kotlin.$_$.ac;
  var Companion_getInstance = kotlin_kotlin.$_$.s2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j1;
  var toDoubleOrNull = kotlin_kotlin.$_$.sa;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.ra;
  var isInterface = kotlin_kotlin.$_$.v8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v3;
  var KProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d8;
  var constructCallableReference = kotlin_kotlin.$_$.x7;
  var lazy = kotlin_kotlin.$_$.mc;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.p7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var defineProp = kotlin_kotlin.$_$.y7;
  var fromInt = kotlin_kotlin.$_$.e7;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.b1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i1;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.k1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.s;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r1;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.t1;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.v7;
  var coerceAtLeast = kotlin_kotlin.$_$.f9;
  var coerceAtMost = kotlin_kotlin.$_$.g9;
  var isBlank = kotlin_kotlin.$_$.ea;
  var Collection = kotlin_kotlin.$_$.d4;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var toSet = kotlin_kotlin.$_$.u6;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z2;
  var singleOrNull = kotlin_kotlin.$_$.l6;
  var emptyMap = kotlin_kotlin.$_$.m5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.k3;
  var getValue = kotlin_kotlin.$_$.r5;
  var copyOf = kotlin_kotlin.$_$.h5;
  var arrayCopy = kotlin_kotlin.$_$.r4;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.lb;
  var invoke = kotlin_kotlin.$_$.ic;
  var CoroutineImpl = kotlin_kotlin.$_$.y6;
  var DeepRecursiveScope = kotlin_kotlin.$_$.mb;
  var Unit = kotlin_kotlin.$_$.dc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var initMetadataForLambda = kotlin_kotlin.$_$.l8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.i8;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var getKClass = kotlin_kotlin.$_$.q9;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a3;
  var ensureNotNull = kotlin_kotlin.$_$.hc;
  var substringBefore = kotlin_kotlin.$_$.oa;
  var removeSuffix = kotlin_kotlin.$_$.ha;
  var substringAfter = kotlin_kotlin.$_$.na;
  var contains = kotlin_kotlin.$_$.aa;
  var plus = kotlin_kotlin.$_$.oc;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var convertToByte = kotlin_kotlin.$_$.b7;
  var convertToShort = kotlin_kotlin.$_$.d7;
  var convertToInt = kotlin_kotlin.$_$.c7;
  var IllegalArgumentException = kotlin_kotlin.$_$.ob;
  var isFinite = kotlin_kotlin.$_$.kc;
  var isFinite_0 = kotlin_kotlin.$_$.jc;
  var charCodeAt = kotlin_kotlin.$_$.s7;
  var toUInt = kotlin_kotlin.$_$.za;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a1;
  var toULong = kotlin_kotlin.$_$.bb;
  var toUByte = kotlin_kotlin.$_$.ya;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r;
  var toUShort = kotlin_kotlin.$_$.cb;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s1;
  var objectCreate = kotlin_kotlin.$_$.a9;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var toString_1 = kotlin_kotlin.$_$.m;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.r2;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.q2;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.t2;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var setOf = kotlin_kotlin.$_$.k6;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.l;
  var numberToChar = kotlin_kotlin.$_$.z8;
  var equals_0 = kotlin_kotlin.$_$.ba;
  var toByte = kotlin_kotlin.$_$.c9;
  var startsWith = kotlin_kotlin.$_$.ma;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var numberRangeToNumber = kotlin_kotlin.$_$.y8;
  var ClosedRange = kotlin_kotlin.$_$.e9;
  var contains_0 = kotlin_kotlin.$_$.h9;
  var single = kotlin_kotlin.$_$.ka;
  var Char = kotlin_kotlin.$_$.kb;
  var emptySet = kotlin_kotlin.$_$.n5;
  var plus_0 = kotlin_kotlin.$_$.g6;
  var toInt = kotlin_kotlin.$_$.va;
  var toList = kotlin_kotlin.$_$.p6;
  var enumEntries = kotlin_kotlin.$_$.z6;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var toNumber = kotlin_kotlin.$_$.m7;
  var last = kotlin_kotlin.$_$.a6;
  var removeLast = kotlin_kotlin.$_$.j6;
  var lastIndexOf = kotlin_kotlin.$_$.fa;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.k;
  var multiply = kotlin_kotlin.$_$.h7;
  var add = kotlin_kotlin.$_$.a7;
  var subtract = kotlin_kotlin.$_$.l7;
  var numberToLong = kotlin_kotlin.$_$.j7;
  var negate = kotlin_kotlin.$_$.i7;
  var charArray = kotlin_kotlin.$_$.r7;
  var indexOf = kotlin_kotlin.$_$.ca;
  var indexOf_0 = kotlin_kotlin.$_$.da;
  var substring = kotlin_kotlin.$_$.qa;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.n3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.b3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
  initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForObject(RedactedKey, 'RedactedKey');
  initMetadataForClass(JsonPath, 'JsonPath');
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
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
    this.u15_1 = configuration;
    this.v15_1 = serializersModule;
    this.w15_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).mo = function () {
    return this.v15_1;
  };
  protoOf(Json).x15 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.b16();
    }
  };
  protoOf(Json).y15 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.mk(), null);
    var result = input.wn(deserializer);
    lexer.p16();
    return result;
  };
  protoOf(Json).z15 = function (string) {
    return this.y15(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.j17();
    return new JsonImpl(conf, builder.h17_1);
  }
  function JsonBuilder(json) {
    this.q16_1 = json.u15_1.k17_1;
    this.r16_1 = json.u15_1.p17_1;
    this.s16_1 = json.u15_1.l17_1;
    this.t16_1 = json.u15_1.m17_1;
    this.u16_1 = json.u15_1.o17_1;
    this.v16_1 = json.u15_1.q17_1;
    this.w16_1 = json.u15_1.r17_1;
    this.x16_1 = json.u15_1.t17_1;
    this.y16_1 = json.u15_1.a18_1;
    this.z16_1 = json.u15_1.v17_1;
    this.a17_1 = json.u15_1.w17_1;
    this.b17_1 = json.u15_1.x17_1;
    this.c17_1 = json.u15_1.y17_1;
    this.d17_1 = json.u15_1.z17_1;
    this.e17_1 = json.u15_1.u17_1;
    this.f17_1 = json.u15_1.n17_1;
    this.g17_1 = json.u15_1.s17_1;
    this.h17_1 = json.mo();
    this.i17_1 = json.u15_1.b18_1;
  }
  protoOf(JsonBuilder).j17 = function () {
    if (this.g17_1) {
      // Inline function 'kotlin.require' call
      if (!(this.x16_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.y16_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.u16_1) {
      // Inline function 'kotlin.require' call
      if (!(this.v16_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.v16_1 === '    ')) {
      var tmp0 = this.v16_1;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$6 = false;
            break $l$block;
          }
        }
        tmp$ret$6 = true;
      }
      var allWhitespaces = tmp$ret$6;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.v16_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.q16_1, this.s16_1, this.t16_1, this.f17_1, this.u16_1, this.r16_1, this.v16_1, this.w16_1, this.g17_1, this.x16_1, this.e17_1, this.z16_1, this.a17_1, this.b17_1, this.c17_1, this.d17_1, this.y16_1, this.i17_1);
  };
  function validateConfiguration($this) {
    if (equals($this.mo(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.u15_1);
    $this.mo().x14(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonIgnoreUnknownKeys() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo) {
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
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    exceptionsWithDebugInfo = exceptionsWithDebugInfo === VOID ? true : exceptionsWithDebugInfo;
    this.k17_1 = encodeDefaults;
    this.l17_1 = ignoreUnknownKeys;
    this.m17_1 = isLenient;
    this.n17_1 = allowStructuredMapKeys;
    this.o17_1 = prettyPrint;
    this.p17_1 = explicitNulls;
    this.q17_1 = prettyPrintIndent;
    this.r17_1 = coerceInputValues;
    this.s17_1 = useArrayPolymorphism;
    this.t17_1 = classDiscriminator;
    this.u17_1 = allowSpecialFloatingPointValues;
    this.v17_1 = useAlternativeNames;
    this.w17_1 = namingStrategy;
    this.x17_1 = decodeEnumsCaseInsensitive;
    this.y17_1 = allowTrailingComma;
    this.z17_1 = allowComments;
    this.a18_1 = classDiscriminatorMode;
    this.b18_1 = exceptionsWithDebugInfo;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.k17_1 + ', ignoreUnknownKeys=' + this.l17_1 + ', isLenient=' + this.m17_1 + ', ' + ('allowStructuredMapKeys=' + this.n17_1 + ', prettyPrint=' + this.o17_1 + ', explicitNulls=' + this.p17_1 + ', ') + ("prettyPrintIndent='" + this.q17_1 + "', coerceInputValues=" + this.r17_1 + ', useArrayPolymorphism=' + this.s17_1 + ', ') + ("classDiscriminator='" + this.t17_1 + "', allowSpecialFloatingPointValues=" + this.u17_1 + ', ') + ('useAlternativeNames=' + this.v17_1 + ', namingStrategy=' + toString_0(this.w17_1) + ', decodeEnumsCaseInsensitive=' + this.x17_1 + ', ') + ('allowTrailingComma=' + this.y17_1 + ', allowComments=' + this.z17_1 + ', classDiscriminatorMode=' + this.a18_1.toString() + ', exceptionsWithDebugInfo=' + this.b18_1 + ')');
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
  function ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
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
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.r2();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.s2();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.q(_Char___init__impl__6a9atx(58));
    this_0.u(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.e18_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.e18_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.e18_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.e18_1.f1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).p = function () {
    return this.e18_1.p();
  };
  protoOf(JsonObject).f18 = function (key) {
    return this.e18_1.o2(key);
  };
  protoOf(JsonObject).o2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.f18((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).g18 = function (value) {
    return this.e18_1.p2(value);
  };
  protoOf(JsonObject).p2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.g18(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).h18 = function (key) {
    return this.e18_1.q2(key);
  };
  protoOf(JsonObject).q2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.h18((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.e18_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).a1 = function () {
    return this.e18_1.a1();
  };
  protoOf(JsonObject).m2 = function () {
    return this.e18_1.m2();
  };
  protoOf(JsonObject).n2 = function () {
    return this.e18_1.n2();
  };
  protoOf(JsonObject).f1 = function () {
    return this.e18_1.f1();
  };
  function Companion_0() {
  }
  protoOf(Companion_0).i18 = function () {
    return JsonElementSerializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonElement() {
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
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.j18_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.j18_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.j18_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.j18_1, ',', '[', ']');
  };
  protoOf(JsonArray).p = function () {
    return this.j18_1.p();
  };
  protoOf(JsonArray).k18 = function (element) {
    return this.j18_1.o1(element);
  };
  protoOf(JsonArray).o1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.k18(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).r = function () {
    return this.j18_1.r();
  };
  protoOf(JsonArray).l18 = function (elements) {
    return this.j18_1.e2(elements);
  };
  protoOf(JsonArray).e2 = function (elements) {
    return this.l18(elements);
  };
  protoOf(JsonArray).b1 = function (index) {
    return this.j18_1.b1(index);
  };
  protoOf(JsonArray).m18 = function (element) {
    return this.j18_1.d1(element);
  };
  protoOf(JsonArray).d1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.m18(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).n18 = function (element) {
    return this.j18_1.f2(element);
  };
  protoOf(JsonArray).f2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.n18(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).g2 = function () {
    return this.j18_1.g2();
  };
  protoOf(JsonArray).h2 = function (index) {
    return this.j18_1.h2(index);
  };
  protoOf(JsonArray).i2 = function (fromIndex, toIndex) {
    return this.j18_1.i2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.j18_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).a1 = function () {
    return this.j18_1.a1();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.o18_1 = 'null';
  }
  protoOf(JsonNull).p18 = function () {
    return this.o18_1;
  };
  protoOf(JsonNull).i18 = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.p18();
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
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.q18_1 = isString;
    this.r18_1 = coerceToInlineType;
    this.s18_1 = toString(body);
    if (!(this.r18_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.r18_1.fm()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).p18 = function () {
    return this.s18_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.q18_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.s18_1);
      tmp = this_0.toString();
    } else {
      tmp = this.s18_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.q18_1 === other.q18_1))
      return false;
    if (!(this.s18_1 === other.s18_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.q18_1);
    result = imul(31, result) + getStringHashCode(this.s18_1) | 0;
    return result;
  };
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.p18();
    }
    return tmp;
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.p18());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.p18()).t18();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.p18();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.p18());
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.al('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.al('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.al('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.al('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.al('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().u18_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().v18_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().w18_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().x18_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().y18_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.z18_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).mk = function () {
    return this.z18_1;
  };
  protoOf(JsonElementSerializer).a19 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.pp(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.pp(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.pp(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).nk = function (encoder, value) {
    return this.a19(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).ok = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.d18();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.b19_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).mk();
    this.c19_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).nl = function () {
    return this.c19_1;
  };
  protoOf(JsonObjectDescriptor).im = function (index) {
    return this.b19_1.im(index);
  };
  protoOf(JsonObjectDescriptor).jm = function (name) {
    return this.b19_1.jm(name);
  };
  protoOf(JsonObjectDescriptor).km = function (index) {
    return this.b19_1.km(index);
  };
  protoOf(JsonObjectDescriptor).lm = function (index) {
    return this.b19_1.lm(index);
  };
  protoOf(JsonObjectDescriptor).mm = function (index) {
    return this.b19_1.mm(index);
  };
  protoOf(JsonObjectDescriptor).em = function () {
    return this.b19_1.em();
  };
  protoOf(JsonObjectDescriptor).xl = function () {
    return this.b19_1.xl();
  };
  protoOf(JsonObjectDescriptor).fm = function () {
    return this.b19_1.fm();
  };
  protoOf(JsonObjectDescriptor).gm = function () {
    return this.b19_1.gm();
  };
  protoOf(JsonObjectDescriptor).hm = function () {
    return this.b19_1.hm();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.x18_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).mk = function () {
    return this.x18_1;
  };
  protoOf(JsonObjectSerializer).d19 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).nk(encoder, value);
  };
  protoOf(JsonObjectSerializer).nk = function (encoder, value) {
    return this.d19(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).ok = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ok(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.e19_1 = ListSerializer(JsonElementSerializer_getInstance()).mk();
    this.f19_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).nl = function () {
    return this.f19_1;
  };
  protoOf(JsonArrayDescriptor).im = function (index) {
    return this.e19_1.im(index);
  };
  protoOf(JsonArrayDescriptor).jm = function (name) {
    return this.e19_1.jm(name);
  };
  protoOf(JsonArrayDescriptor).km = function (index) {
    return this.e19_1.km(index);
  };
  protoOf(JsonArrayDescriptor).lm = function (index) {
    return this.e19_1.lm(index);
  };
  protoOf(JsonArrayDescriptor).mm = function (index) {
    return this.e19_1.mm(index);
  };
  protoOf(JsonArrayDescriptor).em = function () {
    return this.e19_1.em();
  };
  protoOf(JsonArrayDescriptor).xl = function () {
    return this.e19_1.xl();
  };
  protoOf(JsonArrayDescriptor).fm = function () {
    return this.e19_1.fm();
  };
  protoOf(JsonArrayDescriptor).gm = function () {
    return this.e19_1.gm();
  };
  protoOf(JsonArrayDescriptor).hm = function () {
    return this.e19_1.hm();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.y18_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).mk = function () {
    return this.y18_1;
  };
  protoOf(JsonArraySerializer).g19 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).nk(encoder, value);
  };
  protoOf(JsonArraySerializer).nk = function (encoder, value) {
    return this.g19(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).ok = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).ok(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.v18_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).mk = function () {
    return this.v18_1;
  };
  protoOf(JsonNullSerializer).h19 = function (encoder, value) {
    verify(encoder);
    encoder.so();
  };
  protoOf(JsonNullSerializer).nk = function (encoder, value) {
    return this.h19(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).ok = function (decoder) {
    verify_0(decoder);
    if (decoder.in()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.jn();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.u18_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).mk = function () {
    return this.u18_1;
  };
  protoOf(JsonPrimitiveSerializer).i19 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.pp(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.pp(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).nk = function (encoder, value) {
    return this.i19(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).ok = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.d18();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.c18().u15_1.b18_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.w18_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).mk = function () {
    return this.w18_1;
  };
  protoOf(JsonLiteralSerializer).j19 = function (encoder, value) {
    verify(encoder);
    if (value.q18_1) {
      return encoder.bp(value.s18_1);
    }
    if (!(value.r18_1 == null)) {
      return encoder.dp(value.r18_1).bp(value.s18_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.s18_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.xo(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.s18_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).uj_1;
      var tmp_1 = encoder.dp(serializer_0(Companion_getInstance()).mk());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$4 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.xo(tmp$ret$4);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.s18_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.zo(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.s18_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.to(tmp3_safe_receiver);
    }
    encoder.bp(value.s18_1);
  };
  protoOf(JsonLiteralSerializer).nk = function (encoder, value) {
    return this.j19(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).ok = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.d18();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.c18().u15_1.b18_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
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
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
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
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.k19_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.s2();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return constructCallableReference(function (p0) {
      return _get_original__l7ku1m(p0);
    }, 1, 0, 12);
  }
  function defer$1($deferred) {
    this.k19_1 = lazy($deferred);
  }
  protoOf(defer$1).nl = function () {
    return _get_original__l7ku1m(this).nl();
  };
  protoOf(defer$1).em = function () {
    return _get_original__l7ku1m(this).em();
  };
  protoOf(defer$1).gm = function () {
    return _get_original__l7ku1m(this).gm();
  };
  protoOf(defer$1).im = function (index) {
    return _get_original__l7ku1m(this).im(index);
  };
  protoOf(defer$1).jm = function (name) {
    return _get_original__l7ku1m(this).jm(name);
  };
  protoOf(defer$1).km = function (index) {
    return _get_original__l7ku1m(this).km(index);
  };
  protoOf(defer$1).lm = function (index) {
    return _get_original__l7ku1m(this).lm(index);
  };
  protoOf(defer$1).mm = function (index) {
    return _get_original__l7ku1m(this).mm(index);
  };
  function JsonEncoder() {
  }
  function JsonDecodingException(fullMessage, shortMessage, offset, path, input, hint) {
    JsonException.call(this, fullMessage);
    captureStack(this, JsonDecodingException);
    this.n19_1 = shortMessage;
    this.o19_1 = offset;
    this.p19_1 = path;
    this.q19_1 = input;
    this.r19_1 = hint;
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
    this.s19_1 = message;
    delete this.message;
  }
  protoOf(JsonException).f9 = function () {
    return this.s19_1;
  };
  function JsonEncodingException(shortMessage, classSerialName, hint) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    JsonException.call(this, formatEncodingException(shortMessage, hint));
    captureStack(this, JsonEncodingException);
    this.u19_1 = shortMessage;
    this.v19_1 = classSerialName;
    this.w19_1 = hint;
  }
  function Composer(writer) {
    this.x19_1 = writer;
    this.y19_1 = true;
  }
  protoOf(Composer).z19 = function () {
    this.y19_1 = true;
  };
  protoOf(Composer).a1a = function () {
    return Unit_instance;
  };
  protoOf(Composer).b1a = function () {
    this.y19_1 = false;
  };
  protoOf(Composer).c1a = function () {
    this.y19_1 = false;
  };
  protoOf(Composer).d1a = function () {
    return Unit_instance;
  };
  protoOf(Composer).e1a = function (v) {
    return this.x19_1.f1a(v);
  };
  protoOf(Composer).g1a = function (v) {
    return this.x19_1.h1a(v);
  };
  protoOf(Composer).i1a = function (v) {
    return this.x19_1.h1a(v.toString());
  };
  protoOf(Composer).j1a = function (v) {
    return this.x19_1.h1a(v.toString());
  };
  protoOf(Composer).k1a = function (v) {
    return this.x19_1.l1a(fromInt(v));
  };
  protoOf(Composer).m1a = function (v) {
    return this.x19_1.l1a(fromInt(v));
  };
  protoOf(Composer).n1a = function (v) {
    return this.x19_1.l1a(fromInt(v));
  };
  protoOf(Composer).o1a = function (v) {
    return this.x19_1.l1a(v);
  };
  protoOf(Composer).p1a = function (v) {
    return this.x19_1.h1a(v.toString());
  };
  protoOf(Composer).q1a = function (value) {
    return this.x19_1.r1a(value);
  };
  function Composer_0(sb, json) {
    return json.u15_1.o17_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.u1a_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).n1a = function (v) {
    if (this.u1a_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.q1a(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.g1a(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).o1a = function (v) {
    if (this.u1a_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.q1a(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.g1a(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).k1a = function (v) {
    if (this.u1a_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.q1a(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.g1a(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).m1a = function (v) {
    if (this.u1a_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.q1a(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.g1a(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.x1a_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).q1a = function (value) {
    if (this.x1a_1) {
      protoOf(Composer).q1a.call(this, value);
    } else {
      protoOf(Composer).g1a.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.a1b_1 = json;
    this.b1b_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).z19 = function () {
    this.y19_1 = true;
    this.b1b_1 = this.b1b_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).a1a = function () {
    this.b1b_1 = this.b1b_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).b1a = function () {
    this.y19_1 = false;
    this.g1a('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.b1b_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.g1a(this.a1b_1.u15_1.q17_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).c1a = function () {
    if (this.y19_1)
      this.y19_1 = false;
    else {
      this.b1a();
    }
  };
  protoOf(ComposerWithPrettyPrint).d1a = function () {
    this.e1a(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.d1b_1 = (!descriptor.mm(index) && descriptor.lm(index).xl());
    return $this.d1b_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, p0_0, p1);
    }, 2, 0, 13, 'readIfAbsent', [p0]);
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.c1b_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.d1b_1 = false;
  }
  protoOf(JsonElementMarker).e1b = function (index) {
    this.c1b_1.fu(index);
  };
  protoOf(JsonElementMarker).f1b = function () {
    return this.c1b_1.gu();
  };
  function decodingExceptionOf(shortMessage) {
    return new JsonDecodingException(formatDecodingException(-1, shortMessage, null, null, null), shortMessage, -1, null, null, null);
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
    var tmp2 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
  }
  function access$formatDecodingException$tJsonExceptionsKt(offset, shortMessage, path, hint, input) {
    return formatDecodingException(offset, shortMessage, path, hint, input);
  }
  function formatDecodingException(offset, shortMessage, path, hint, input) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (offset >= 0) {
      this_0.o('Unexpected JSON token at offset ' + offset + ': ');
    }
    this_0.o(shortMessage);
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(path == null || isBlank(path))) {
      this_0.o(' at path: ');
      this_0.o(path);
    }
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(hint == null || isBlank(hint))) {
      this_0.o('\n' + hint);
    }
    if (!(input == null)) {
      this_0.o('\nJSON input: ');
      this_0.o(input);
    }
    return this_0.toString();
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.g1b('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.l16_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.h1b(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidFloatingPointEncoded(value, key) {
    key = key === VOID ? null : key;
    return new JsonEncodingException(nonFiniteFpMessage(value, key), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.nl() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.em().toString() + "'"), keyDescriptor.nl(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
    return nonFiniteFpMessage(value, key);
  }
  function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input) {
    // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
    var tmp;
    if (_this__u8e3s4.k16_1.b18_1) {
      tmp = toString(minify(input, offset));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    return new JsonDecodingException(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint);
  }
  function formatEncodingException(shortMessage, hint) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (hint == null || isBlank(hint)) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    return shortMessage + tmp;
  }
  function nonFiniteFpMessage(value, key) {
    return 'Unexpected special floating-point value ' + toString(value) + (!(key == null) ? ' with key ' + key + '. ' : '. ') + 'By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification.';
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
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.u15_1.l17_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.hm();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.p();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.r();
        while (_iterator__ex2g4s.s()) {
          var element = _iterator__ex2g4s.t();
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$0);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.jm(name);
    if (!(index === -3))
      return index;
    if (!json.u15_1.v17_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.nl() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.im(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.em(), CLASS_getInstance()) ? json.u15_1.w17_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.j1b(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function getJsonEncodedNames(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.u15_1.x17_1 && equals(descriptor.em(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).q2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.j1b(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.gm();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.km(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.r();
        while (_iterator__ex2g4s.s()) {
          var element = _iterator__ex2g4s.t();
          if (element instanceof JsonNames) {
            destination.y(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1b_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
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
          tmp_0 = _this__u8e3s4.im(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.l1b(_this__u8e3s4, i, _this__u8e3s4.im(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.p()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      // Inline function 'kotlin.collections.mutableSetOf' call
      var trackingSet = LinkedHashSet_init_$Create$();
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.gm();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.im(tmp_2);
        var name = $strategy.l1b($this_serializationNamesIndices, tmp_2, baseName);
        if (!trackingSet.y(name))
          throw new JsonEncodingException("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)), $this_serializationNamesIndices.nl());
        tmp_1[tmp_2] = name;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.em(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).o2(name)) {
      throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.im(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.im(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.k2(name, index);
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
  function RedactedKey() {
  }
  var RedactedKey_instance;
  function RedactedKey_getInstance() {
    return RedactedKey_instance;
  }
  function resize($this) {
    var newSize = imul($this.p1b_1, 2);
    $this.n1b_1 = copyOf($this.n1b_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.o1b_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.o1b_1 = newIndices;
  }
  function JsonPath(configuration) {
    this.m1b_1 = configuration;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.n1b_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.o1b_1 = tmp_2;
    this.p1b_1 = -1;
  }
  protoOf(JsonPath).q1b = function (sd) {
    this.p1b_1 = this.p1b_1 + 1 | 0;
    var depth = this.p1b_1;
    if (depth === this.n1b_1.length) {
      resize(this);
    }
    this.n1b_1[depth] = sd;
  };
  protoOf(JsonPath).r1b = function (index) {
    this.o1b_1[this.p1b_1] = index;
  };
  protoOf(JsonPath).s1b = function (key) {
    var tmp;
    if (!(this.o1b_1[this.p1b_1] === -2)) {
      this.p1b_1 = this.p1b_1 + 1 | 0;
      tmp = this.p1b_1 === this.n1b_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.n1b_1[this.p1b_1] = this.m1b_1.b18_1 ? key : RedactedKey_instance;
    this.o1b_1[this.p1b_1] = -2;
  };
  protoOf(JsonPath).t1b = function () {
    if (this.o1b_1[this.p1b_1] === -2) {
      this.n1b_1[this.p1b_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).u1b = function () {
    var depth = this.p1b_1;
    if (this.o1b_1[depth] === -2) {
      this.o1b_1[depth] = -1;
      this.p1b_1 = this.p1b_1 - 1 | 0;
    }
    if (!(this.p1b_1 === -1)) {
      this.p1b_1 = this.p1b_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).v1b = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.o('$');
    // Inline function 'kotlin.repeat' call
    var times = this.p1b_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.n1b_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.em(), LIST_getInstance())) {
            if (!(this.o1b_1[index] === -1)) {
              this_0.o('[');
              this_0.ra(this.o1b_1[index]);
              this_0.o(']');
            }
          } else {
            var idx = this.o1b_1[index];
            if (idx >= 0) {
              this_0.o('.');
              this_0.o(element.im(idx));
            }
          }
        } else {
          if (element === RedactedKey_instance) {
            this_0.o('[<debug info disabled>]');
          } else {
            if (!(element === Tombstone_instance)) {
              this_0.o('[');
              this_0.o("'");
              this_0.u(element);
              this_0.o("'");
              this_0.o(']');
            }
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.v1b();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.em();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.m() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.w1b_1)
      return Unit_instance;
    if (!$this.x1b_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.m() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function JsonSerializersModuleValidator(configuration) {
    this.w1b_1 = configuration.s17_1;
    this.x1b_1 = !configuration.a18_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).h15 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).k15 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.mk();
    checkKind(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).l15 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).m15 = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().a1();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.pp(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.h1c_1.l1c(6);
    if ($this.h1c_1.m1c() === 4) {
      $this.h1c_1.h1b('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.h1c_1.n1c()) {
      var key = $this.i1c_1 ? $this.h1c_1.p1c() : $this.h1c_1.o1c();
      $this.h1c_1.l1c(5);
      var element = $this.q1c();
      // Inline function 'kotlin.collections.set' call
      result.k2(key, element);
      lastToken = $this.h1c_1.r1c();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.h1c_1.h1b('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.h1c_1.l1c(7);
    } else if (lastToken === 4) {
      if (!$this.j1c_1) {
        invalidTrailingComma($this.h1c_1);
      }
      $this.h1c_1.l1c(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, $receiver, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, $receiver, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function readArray($this) {
    var lastToken = $this.h1c_1.r1c();
    if ($this.h1c_1.m1c() === 4) {
      $this.h1c_1.h1b('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.h1c_1.n1c()) {
      var element = $this.q1c();
      result.y(element);
      lastToken = $this.h1c_1.r1c();
      if (!(lastToken === 4)) {
        var tmp0 = $this.h1c_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.l16_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.h1b(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.h1c_1.l1c(9);
    } else if (lastToken === 4) {
      if (!$this.j1c_1) {
        invalidTrailingComma($this.h1c_1, 'array');
      }
      $this.h1c_1.l1c(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.i1c_1 || !isString) {
      tmp = $this.h1c_1.p1c();
    } else {
      tmp = $this.h1c_1.o1c();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.o1d_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).s1d = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.t1d($this$DeepRecursiveFunction, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).w8 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.s1d(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0_subject = this.o1d_1.h1c_1.m1c();
            if (tmp0_subject === 1) {
              this.r1d_1 = readValue(this.o1d_1, true);
              this.i8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.r1d_1 = readValue(this.o1d_1, false);
                this.i8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.i8_1 = 1;
                  suspendResult = readObject_0(this.o1d_1, this.p1d_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.r1d_1 = readArray(this.o1d_1);
                    this.i8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.o1d_1.h1c_1.h1b("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.r1d_1 = suspendResult;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            return this.r1d_1;
          case 3:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).t1d = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.o1d_1, completion);
    i.p1d_1 = $this$DeepRecursiveFunction;
    i.q1d_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$DeepRecursiveFunction, it, $completion) {
      return i.s1d($this$DeepRecursiveFunction, it, $completion);
    }, 2);
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1d_1 = _this__u8e3s4;
    this.b1d_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.d1d_1 = this.a1d_1;
            this.e1d_1 = this.d1d_1.h1c_1.l1c(6);
            if (this.d1d_1.h1c_1.m1c() === 4) {
              this.d1d_1.h1c_1.h1b('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.c1d_1 = LinkedHashMap_init_$Create$();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.d1d_1.h1c_1.n1c()) {
              this.i8_1 = 4;
              continue $sm;
            }

            this.f1d_1 = this.d1d_1.i1c_1 ? this.d1d_1.h1c_1.p1c() : this.d1d_1.h1c_1.o1c();
            this.d1d_1.h1c_1.l1c(5);
            this.i8_1 = 2;
            suspendResult = this.b1d_1.wh(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.c1d_1;
            var key = this.f1d_1;
            tmp0.k2(key, element);
            this.e1d_1 = this.d1d_1.h1c_1.r1c();
            var tmp0_subject = this.e1d_1;
            if (tmp0_subject === 4) {
              this.i8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.i8_1 = 4;
                continue $sm;
              } else {
                this.d1d_1.h1c_1.h1b('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.i8_1 = 1;
            continue $sm;
          case 4:
            if (this.e1d_1 === 6) {
              this.d1d_1.h1c_1.l1c(7);
            } else if (this.e1d_1 === 4) {
              if (!this.d1d_1.j1c_1) {
                invalidTrailingComma(this.d1d_1.h1c_1);
              }
              this.d1d_1.h1c_1.l1c(7);
            }

            return new JsonObject(this.c1d_1);
          case 5:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 5) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.h1c_1 = lexer;
    this.i1c_1 = configuration.m17_1;
    this.j1c_1 = configuration.y17_1;
    this.k1c_1 = 0;
  }
  protoOf(JsonTreeReader).q1c = function () {
    var token = this.h1c_1.m1c();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.k1c_1 = this.k1c_1 + 1 | 0;
      if (this.k1c_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.k1c_1 = this.k1c_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.h1c_1.h1b('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.hm().r();
    while (_iterator__ex2g4s.s()) {
      var annotation = _iterator__ex2g4s.t();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.u1d_1;
    }
    return json.u15_1.t17_1;
  }
  function throwJsonElementPolymorphicException(serialName, element) {
    var tmp0_shortMessage = 'Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).m() + '.';
    throw new JsonEncodingException(tmp0_shortMessage, serialName, 'Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
  }
  function access$checkEncodingConflicts$tPolymorphicKt($receiver, serializer, actualSerializer, classDiscriminator) {
    return checkEncodingConflicts($receiver, serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0(kind) {
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
  function checkEncodingConflicts(_this__u8e3s4, serializer, actualSerializer, classDiscriminator) {
    if (getJsonEncodedNames(actualSerializer.mk(), _this__u8e3s4).o1(classDiscriminator)) {
      var baseName = serializer.mk().nl();
      var actualName = actualSerializer.mk().nl();
      var text = _this__u8e3s4.u15_1.a18_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
      var tmp0_shortMessage = "Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'.");
      var tmp1_hint = 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.';
      throw new JsonEncodingException(tmp0_shortMessage, actualName, tmp1_hint);
    }
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.i1b_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).v1d = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.i1b_1;
    var value_0 = this_0.q2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.k2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.k2(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).j1b = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.w1d(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.v1d(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).w1d = function (descriptor, key) {
    var tmp0_safe_receiver = this.i1b_1.q2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.q2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.x1d_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.x1d_1 === unknownKey) {
      $receiver.x1d_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.oo(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.e16_1.m1c() === 4) {
      $this.e16_1.h1b('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.g16_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.g16_1 === -1)) {
        hasComma = $this.e16_1.z1d();
      }
    } else {
      $this.e16_1.y1d(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.e16_1.n1c()) {
      if (decodingKey) {
        if ($this.g16_1 === -1) {
          var tmp0 = $this.e16_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.l16_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.h1b(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.e16_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.l16_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.h1b(tmp$ret$3, position_0);
          }
        }
      }
      $this.g16_1 = $this.g16_1 + 1 | 0;
      tmp = $this.g16_1;
    } else {
      if (hasComma && !$this.c16_1.u15_1.y17_1) {
        invalidTrailingComma($this.e16_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.c16_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.mm(index);
      var elementDescriptor = descriptor.lm(index);
      var tmp;
      if (isOptional && !elementDescriptor.xl()) {
        tmp = $this.e16_1.a1e(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.em(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.xl()) {
          tmp_0 = $this.e16_1.a1e(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.e16_1.b1e($this.i16_1.m17_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.u15_1.p17_1 && elementDescriptor.xl();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.e16_1.o1c();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.e16_1.z1d();
    while ($this.e16_1.n1c()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.e16_1.y1d(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.c16_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.i16_1.r17_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.e16_1.z1d();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.j16_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.e1b(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.c16_1.u15_1.y17_1) {
      invalidTrailingComma($this.e16_1);
    }
    var tmp1_safe_receiver = $this.j16_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f1b();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.c16_1) || trySkip($this, $this.h16_1, key)) {
      $this.e16_1.d1e($this.i16_1.m17_1);
    } else {
      $this.e16_1.m16_1.u1b();
      $this.e16_1.c1e(key);
    }
    return $this.e16_1.z1d();
  }
  function decodeListIndex($this) {
    var hasComma = $this.e16_1.z1d();
    var tmp;
    if ($this.e16_1.n1c()) {
      if (!($this.g16_1 === -1) && !hasComma) {
        $this.e16_1.h1b('Expected end of the array or comma');
      }
      $this.g16_1 = $this.g16_1 + 1 | 0;
      tmp = $this.g16_1;
    } else {
      if (hasComma && !$this.c16_1.u15_1.y17_1) {
        invalidTrailingComma($this.e16_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.i16_1.m17_1) {
      tmp = $this.e16_1.f1e();
    } else {
      tmp = $this.e16_1.e1e();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.c16_1 = json;
    this.d16_1 = mode;
    this.e16_1 = lexer;
    this.f16_1 = this.c16_1.mo();
    this.g16_1 = -1;
    this.h16_1 = discriminatorHolder;
    this.i16_1 = this.c16_1.u15_1;
    this.j16_1 = this.i16_1.p17_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).c18 = function () {
    return this.c16_1;
  };
  protoOf(StreamingJsonDecoder).mo = function () {
    return this.f16_1;
  };
  protoOf(StreamingJsonDecoder).d18 = function () {
    return (new JsonTreeReader(this.c16_1.u15_1, this.e16_1)).q1c();
  };
  protoOf(StreamingJsonDecoder).wn = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.c16_1.u15_1.s17_1;
      }
      if (tmp) {
        return deserializer.ok(this);
      }
      var discriminator = classDiscriminator(deserializer.mk(), this.c16_1);
      var tmp0_elvis_lhs = this.e16_1.g1e(discriminator, this.i16_1.m17_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.c18().u15_1.s17_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.ok(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.mk(), this.c18());
          var tmp2_0 = this.d18();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.mk().nl();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).m() + ', but had ' + getKClassFromExpression(tmp2_0).m() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.e16_1.m16_1.v1b();
            var tmp_2;
            if (this.c18().u15_1.b18_1) {
              var tmp$ret$6 = toString(tmp2_0);
              tmp_2 = toString(minify(tmp$ret$6));
            } else {
              tmp_2 = null;
            }
            var inputValue = tmp_2;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.h18(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_3;
          try {
            tmp_3 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_4;
            if ($p instanceof SerializationException) {
              var it = $p;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var shortMessage = ensureNotNull(it.message);
              var tmp_5;
              if (this.c18().u15_1.b18_1) {
                var tmp$ret$10 = jsonTree.toString();
                tmp_5 = toString(minify(tmp$ret$10));
              } else {
                tmp_5 = null;
              }
              var inputValue_0 = tmp_5;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_3;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.c18(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p_0) {
        var tmp_8;
        if ($p_0 instanceof SerializationException) {
          var it_0 = $p_0;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.e16_1.h1b(message, VOID, hint);
        } else {
          throw $p_0;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.h16_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.ok(this);
    } catch ($p_1) {
      if ($p_1 instanceof MissingFieldException) {
        var e = $p_1;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.e16_1.m16_1.v1b());
      } else {
        throw $p_1;
      }
    }
  };
  protoOf(StreamingJsonDecoder).xn = function (descriptor) {
    var newMode = switchMode(this.c16_1, descriptor);
    this.e16_1.m16_1.q1b(descriptor);
    this.e16_1.y1d(newMode.j1e_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.c3_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.c16_1, newMode, this.e16_1, descriptor, this.h16_1);
        break;
      default:
        var tmp_0;
        if (this.d16_1.equals(newMode) && this.c16_1.u15_1.p17_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.c16_1, newMode, this.e16_1, descriptor, this.h16_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).yn = function (descriptor) {
    if (descriptor.gm() === 0 && ignoreUnknownKeys(descriptor, this.c16_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.e16_1.z1d() && !this.c16_1.u15_1.y17_1) {
      invalidTrailingComma(this.e16_1, '');
    }
    this.e16_1.y1d(this.d16_1.k1e_1);
    this.e16_1.m16_1.u1b();
  };
  protoOf(StreamingJsonDecoder).in = function () {
    var tmp;
    var tmp0_safe_receiver = this.j16_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1b_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.e16_1.l1e();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).jn = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).jo = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.d16_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.e16_1.m16_1.t1b();
    }
    var value = protoOf(AbstractDecoder).jo.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.e16_1.m16_1.s1b(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).oo = function (descriptor) {
    var index;
    switch (this.d16_1.c3_1) {
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
    if (!this.d16_1.equals(WriteMode_MAP_getInstance())) {
      this.e16_1.m16_1.r1b(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).kn = function () {
    return this.e16_1.m1e();
  };
  protoOf(StreamingJsonDecoder).ln = function () {
    var value = this.e16_1.n1e();
    if (!(value === fromInt(convertToByte(value)))) {
      this.e16_1.h1b("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).mn = function () {
    var value = this.e16_1.n1e();
    if (!(value === fromInt(convertToShort(value)))) {
      this.e16_1.h1b("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).nn = function () {
    var value = this.e16_1.n1e();
    if (!(value === fromInt(convertToInt(value)))) {
      this.e16_1.h1b("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).on = function () {
    return this.e16_1.n1e();
  };
  protoOf(StreamingJsonDecoder).pn = function () {
    var tmp0 = this.e16_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p1c();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1b("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.c16_1.u15_1.u17_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.e16_1, result);
  };
  protoOf(StreamingJsonDecoder).qn = function () {
    var tmp0 = this.e16_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p1c();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1b("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.c16_1.u15_1.u17_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.e16_1, result);
  };
  protoOf(StreamingJsonDecoder).rn = function () {
    var string = this.e16_1.p1c();
    if (!(string.length === 1)) {
      this.e16_1.h1b("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).sn = function () {
    var tmp;
    if (this.i16_1.m17_1) {
      tmp = this.e16_1.f1e();
    } else {
      tmp = this.e16_1.o1c();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).un = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.e16_1, this.c16_1) : protoOf(AbstractDecoder).un.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).tn = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.c16_1, this.sn(), ' at path ' + this.e16_1.m16_1.v1b());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.o1e_1 = lexer;
    this.p1e_1 = json.mo();
  }
  protoOf(JsonDecoderForUnsignedTypes).mo = function () {
    return this.p1e_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).oo = function (descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).nn = function () {
    var tmp0 = this.o1e_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p1c();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1b("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).on = function () {
    var tmp0 = this.o1e_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p1c();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1b("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).ln = function () {
    var tmp0 = this.o1e_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p1c();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1b("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).mn = function () {
    var tmp0 = this.o1e_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p1c();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1b("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
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
  function encodeTypeInfo($this, discriminator, serialName) {
    $this.y1b_1.b1a();
    $this.bp(discriminator);
    $this.y1b_1.e1a(_Char___init__impl__6a9atx(58));
    $this.y1b_1.d1a();
    $this.bp(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.y1b_1 = composer;
    this.z1b_1 = json;
    this.a1c_1 = mode;
    this.b1c_1 = modeReuseCache;
    this.c1c_1 = this.z1b_1.mo();
    this.d1c_1 = this.z1b_1.u15_1;
    this.e1c_1 = false;
    this.f1c_1 = null;
    this.g1c_1 = null;
    var i = this.a1c_1.c3_1;
    if (!(this.b1c_1 == null)) {
      if (!(this.b1c_1[i] === null) || !(this.b1c_1[i] === this)) {
        this.b1c_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).c18 = function () {
    return this.z1b_1;
  };
  protoOf(StreamingJsonEncoder).mo = function () {
    return this.c1c_1;
  };
  protoOf(StreamingJsonEncoder).l19 = function (element) {
    var tmp;
    if (!(this.f1c_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.g1c_1, element);
    }
    this.pp(JsonElementSerializer_getInstance(), element);
  };
  protoOf(StreamingJsonEncoder).up = function (descriptor, index) {
    return this.d1c_1.k17_1;
  };
  protoOf(StreamingJsonEncoder).pp = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.c18().u15_1.s17_1) {
        serializer.nk(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.c18().u15_1.a18_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.c18().u15_1.a18_1.c3_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.mk().em();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.mk(), this.c18()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.mk()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        access$checkEncodingConflicts$tPolymorphicKt(this.c18(), serializer, actualSerializer, baseClassDiscriminator);
        checkKind_0(actualSerializer.mk().em());
        var serialName = actualSerializer.mk().nl();
        this.f1c_1 = baseClassDiscriminator;
        this.g1c_1 = serialName;
      }
      actualSerializer.nk(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).xn = function (descriptor) {
    var newMode = switchMode(this.z1b_1, descriptor);
    if (!(newMode.j1e_1 === _Char___init__impl__6a9atx(0))) {
      this.y1b_1.e1a(newMode.j1e_1);
      this.y1b_1.z19();
    }
    var discriminator = this.f1c_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.g1c_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.nl() : tmp0_elvis_lhs);
      this.f1c_1 = null;
      this.g1c_1 = null;
    }
    if (this.a1c_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.b1c_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.c3_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.y1b_1, this.z1b_1, newMode, this.b1c_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).yn = function (descriptor) {
    if (!(this.a1c_1.k1e_1 === _Char___init__impl__6a9atx(0))) {
      this.y1b_1.a1a();
      this.y1b_1.c1a();
      this.y1b_1.e1a(this.a1c_1.k1e_1);
    }
  };
  protoOf(StreamingJsonEncoder).qo = function (descriptor, index) {
    switch (this.a1c_1.c3_1) {
      case 1:
        if (!this.y1b_1.y19_1) {
          this.y1b_1.e1a(_Char___init__impl__6a9atx(44));
        }

        this.y1b_1.b1a();
        break;
      case 2:
        if (!this.y1b_1.y19_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.y1b_1.e1a(_Char___init__impl__6a9atx(44));
            this.y1b_1.b1a();
            tmp_0 = true;
          } else {
            this.y1b_1.e1a(_Char___init__impl__6a9atx(58));
            this.y1b_1.d1a();
            tmp_0 = false;
          }
          tmp.e1c_1 = tmp_0;
        } else {
          this.e1c_1 = true;
          this.y1b_1.b1a();
        }

        break;
      case 3:
        if (index === 0)
          this.e1c_1 = true;
        if (index === 1) {
          this.y1b_1.e1a(_Char___init__impl__6a9atx(44));
          this.y1b_1.d1a();
          this.e1c_1 = false;
        }

        break;
      default:
        if (!this.y1b_1.y19_1) {
          this.y1b_1.e1a(_Char___init__impl__6a9atx(44));
        }

        this.y1b_1.b1a();
        this.bp(getJsonElementName(descriptor, this.z1b_1, index));
        this.y1b_1.e1a(_Char___init__impl__6a9atx(58));
        this.y1b_1.d1a();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).qp = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.d1c_1.p17_1) {
      protoOf(AbstractEncoder).qp.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).dp = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.y1b_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.y1b_1;
      } else {
        var tmp0 = this.y1b_1.x19_1;
        var p1 = this.e1c_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$0 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$0, this.z1b_1, this.a1c_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.y1b_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.y1b_1;
      } else {
        var tmp0_0 = this.y1b_1.x19_1;
        var p1_0 = this.e1c_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$2 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$2, this.z1b_1, this.a1c_1, null);
    } else if (!(this.f1c_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.g1c_1 = descriptor.nl();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).dp.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).so = function () {
    this.y1b_1.g1a('null');
  };
  protoOf(StreamingJsonEncoder).to = function (value) {
    if (this.e1c_1) {
      this.bp(value.toString());
    } else {
      this.y1b_1.p1a(value);
    }
  };
  protoOf(StreamingJsonEncoder).uo = function (value) {
    if (this.e1c_1) {
      this.bp(value.toString());
    } else {
      this.y1b_1.k1a(value);
    }
  };
  protoOf(StreamingJsonEncoder).vo = function (value) {
    if (this.e1c_1) {
      this.bp(value.toString());
    } else {
      this.y1b_1.m1a(value);
    }
  };
  protoOf(StreamingJsonEncoder).wo = function (value) {
    if (this.e1c_1) {
      this.bp(value.toString());
    } else {
      this.y1b_1.n1a(value);
    }
  };
  protoOf(StreamingJsonEncoder).xo = function (value) {
    if (this.e1c_1) {
      this.bp(value.toString());
    } else {
      this.y1b_1.o1a(value);
    }
  };
  protoOf(StreamingJsonEncoder).yo = function (value) {
    if (this.e1c_1) {
      this.bp(value.toString());
    } else {
      this.y1b_1.i1a(value);
    }
    if (!this.d1c_1.u17_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).zo = function (value) {
    if (this.e1c_1) {
      this.bp(value.toString());
    } else {
      this.y1b_1.j1a(value);
    }
    if (!this.d1c_1.u17_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).ap = function (value) {
    this.bp(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).bp = function (value) {
    return this.y1b_1.q1a(value);
  };
  protoOf(StreamingJsonEncoder).cp = function (enumDescriptor, index) {
    this.bp(enumDescriptor.im(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.fm() && get_unsignedNumberDescriptors().o1(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.fm() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).mk(), serializer_0(Companion_getInstance()).mk(), serializer_2(Companion_getInstance_1()).mk(), serializer_3(Companion_getInstance_2()).mk()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.q(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.pa(value, lastPos, i);
          _this__u8e3s4.o(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.pa(value, lastPos, value.length);
    else
      _this__u8e3s4.o(value);
    _this__u8e3s4.q(_Char___init__impl__6a9atx(34));
  }
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
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
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
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$13 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$13);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$14 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$14);
      ESCAPE_MARKERS = this_7;
    }
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.mk())).wn(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var path = $this.w1e(tag);
    var tmp;
    if ($this.c18().u15_1.b18_1) {
      var tmp$ret$3 = toString($this.x1e());
      tmp = toString(minify(tmp$ret$3));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.s1e_1 = json;
    this.t1e_1 = value;
    this.u1e_1 = polymorphicDiscriminator;
    this.v1e_1 = this.c18().u15_1;
  }
  protoOf(AbstractJsonTreeDecoder).c18 = function () {
    return this.s1e_1;
  };
  protoOf(AbstractJsonTreeDecoder).s2 = function () {
    return this.t1e_1;
  };
  protoOf(AbstractJsonTreeDecoder).mo = function () {
    return this.c18().mo();
  };
  protoOf(AbstractJsonTreeDecoder).x1e = function () {
    var tmp0_safe_receiver = this.h12();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.y1e(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.s2() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).w1e = function (currentTag) {
    return this.j12() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).d18 = function () {
    return this.x1e();
  };
  protoOf(AbstractJsonTreeDecoder).wn = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.c18().u15_1.s17_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.ok(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.mk(), this.c18());
      var tmp2 = this.d18();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.mk().nl();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).m() + ', but had ' + getKClassFromExpression(tmp2).m() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.j12();
        var tmp_0;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var jsonTree = tmp2;
      var tmp0_safe_receiver = jsonTree.h18(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var shortMessage = ensureNotNull(it.message);
          var tmp_3;
          if (this.c18().u15_1.b18_1) {
            var tmp$ret$10 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$10));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_1;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.c18(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).i12 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).xn = function (descriptor) {
    var currentObject = this.x1e();
    var tmp0_subject = descriptor.em();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.c18();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.nl();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).m() + ', but had ' + getKClassFromExpression(currentObject).m() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.j12();
        var tmp_2;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$6 = toString(currentObject);
          tmp_2 = toString(minify(tmp$ret$6));
        } else {
          tmp_2 = null;
        }
        var inputValue = tmp_2;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.c18();
        var keyDescriptor = carrierDescriptor(descriptor.lm(0), this_0.mo());
        var keyKind = keyDescriptor.em();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.c18();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.nl();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).m() + ', but had ' + getKClassFromExpression(currentObject).m() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.j12();
            var tmp_6;
            if (this.c18().u15_1.b18_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject);
        } else {
          if (this_0.u15_1.n17_1) {
            var tmp_7 = this.c18();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.nl();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).m() + ', but had ' + getKClassFromExpression(currentObject).m() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.j12();
              var tmp_8;
              if (this.c18().u15_1.b18_1) {
                var tmp$ret$23 = toString(currentObject);
                tmp_8 = toString(minify(tmp$ret$23));
              } else {
                tmp_8 = null;
              }
              var inputValue_1 = tmp_8;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path_1, null, inputValue_1), tmp2_1, -1, path_1, inputValue_1, null);
            }
            tmp_3 = new JsonTreeListDecoder(tmp_7, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_3;
      } else {
        var tmp_9 = this.c18();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.nl();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).m() + ', but had ' + getKClassFromExpression(currentObject).m() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.j12();
          var tmp_10;
          if (this.c18().u15_1.b18_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, this.u1e_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).yn = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).in = function () {
    var tmp = this.x1e();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).z1e = function (tag, enumDescriptor) {
    var tmp = this.c18();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.y1e(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.nl();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).m() + ', but had ' + getKClassFromExpression(tmp2).m() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.w1e(tag);
      var tmp_0;
      if (this.c18().u15_1.b18_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.p18());
  };
  protoOf(AbstractJsonTreeDecoder).v12 = function (tag, enumDescriptor) {
    return this.z1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).a1f = function (tag) {
    return !(this.y1e(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).l12 = function (tag) {
    return this.a1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b1f = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).m() + ', but had ' + getKClassFromExpression(value).m() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w1e(tag);
        var tmp;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).m12 = function (tag) {
    return this.b1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c1f = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).m() + ', but had ' + getKClassFromExpression(value).m() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w1e(tag);
        var tmp;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToByte(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).n12 = function (tag) {
    return this.c1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d1f = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).m() + ', but had ' + getKClassFromExpression(value).m() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w1e(tag);
        var tmp;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToShort(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).o12 = function (tag) {
    return this.d1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e1f = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).m() + ', but had ' + getKClassFromExpression(value).m() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w1e(tag);
        var tmp;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToInt(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).p12 = function (tag) {
    return this.e1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f1f = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).m() + ', but had ' + getKClassFromExpression(value).m() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w1e(tag);
        var tmp;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).q12 = function (tag) {
    return this.f1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g1f = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).m() + ', but had ' + getKClassFromExpression(value).m() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w1e(tag);
        var tmp;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.c18().u15_1.u17_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.c18().u15_1.b18_1) {
      var tmp$ret$13 = toString(this.x1e());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).r12 = function (tag) {
    return this.g1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h1f = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).m() + ', but had ' + getKClassFromExpression(value).m() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w1e(tag);
        var tmp;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.c18().u15_1.u17_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.c18().u15_1.b18_1) {
      var tmp$ret$13 = toString(this.x1e());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).s12 = function (tag) {
    return this.h1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i1f = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).m() + ', but had ' + getKClassFromExpression(value).m() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w1e(tag);
        var tmp;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.p18()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.r1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).t12 = function (tag) {
    return this.i1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j1f = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.y1e(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).m() + ', but had ' + getKClassFromExpression(value).m() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.w1e(tag);
      var tmp;
      if (this.c18().u15_1.b18_1) {
        var tmp$ret$6 = toString(value);
        tmp = toString(minify(tmp$ret$6));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral)) {
      var tmp2_0 = "Expected string value for a non-null key '" + tag + "', got null literal instead";
      var tmp4 = this.w1e(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.c18().u15_1.b18_1) {
        var tmp$ret$10 = toString(this.x1e());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.q18_1 && !this.c18().u15_1.m17_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.w1e(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.c18().u15_1.b18_1) {
        var tmp$ret$14 = toString(this.x1e());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.s18_1;
  };
  protoOf(AbstractJsonTreeDecoder).u12 = function (tag) {
    return this.j1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k1f = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.c18();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.y1e(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.nl();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).m() + ', but had ' + getKClassFromExpression(tmp2).m() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w1e(tag);
        var tmp_1;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.p18());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.c18());
    } else {
      tmp = protoOf(NamedValueDecoder).w12.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).w12 = function (tag, inlineDescriptor) {
    return this.k1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).un = function (descriptor) {
    return !(this.h12() == null) ? protoOf(NamedValueDecoder).un.call(this, descriptor) : (new JsonPrimitiveDecoder(this.c18(), this.s2(), this.u1e_1)).un(descriptor);
  };
  function setForceNull($this, descriptor, index) {
    $this.u1f_1 = (!$this.c18().u15_1.p17_1 && !descriptor.mm(index) && descriptor.lm(index).xl());
    return $this.u1f_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.r1f_1 = value;
    this.s1f_1 = polyDescriptor;
    this.t1f_1 = 0;
    this.u1f_1 = false;
  }
  protoOf(JsonTreeDecoder).s2 = function () {
    return this.r1f_1;
  };
  protoOf(JsonTreeDecoder).oo = function (descriptor) {
    $l$loop: while (this.t1f_1 < descriptor.gm()) {
      var _unary__edvuaz = this.t1f_1;
      this.t1f_1 = _unary__edvuaz + 1 | 0;
      var name = this.c12(descriptor, _unary__edvuaz);
      var index = this.t1f_1 - 1 | 0;
      this.u1f_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.s2();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).o2(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.v1e_1.r17_1)
          return index;
        var tmp0 = this.c18();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.mm(index);
          var elementDescriptor = descriptor.lm(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.xl()) {
            var tmp_1 = this.v1f(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.em(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.xl()) {
              var tmp_3 = this.v1f(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.v1f(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$2 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.u15_1.p17_1 && elementDescriptor.xl();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$2 = true;
              break $l$block_2;
            }
          }
          tmp$ret$2 = false;
        }
        if (tmp$ret$2)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).in = function () {
    return !this.u1f_1 && protoOf(AbstractJsonTreeDecoder).in.call(this);
  };
  protoOf(JsonTreeDecoder).d12 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.c18());
    var baseName = descriptor.im(index);
    if (strategy == null) {
      if (!this.v1e_1.v17_1)
        return baseName;
      if (this.s2().m2().o1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.c18(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.s2().m2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.r();
      while (_iterator__ex2g4s.s()) {
        var element = _iterator__ex2g4s.t();
        if (deserializationNamesMap_0.q2(element) === index) {
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
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.l1b(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).y1e = function (tag) {
    return getValue(this.s2(), tag);
  };
  protoOf(JsonTreeDecoder).v1f = function (tag) {
    return this.s2().h18(tag);
  };
  protoOf(JsonTreeDecoder).xn = function (descriptor) {
    if (descriptor === this.s1f_1) {
      var tmp = this.c18();
      var tmp2 = this.x1e();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.s1f_1.nl();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).m() + ', but had ' + getKClassFromExpression(tmp2).m() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.j12();
        var tmp_0;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, this.u1e_1, this.s1f_1);
    }
    return protoOf(AbstractJsonTreeDecoder).xn.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).yn = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.c18())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.em();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.c18());
    var tmp_1;
    if (strategy == null && !this.v1e_1.v17_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.c18(), descriptor).m2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.c18()).w1d(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.s2().m2().r();
    while (_iterator__ex2g4s.s()) {
      var key = _iterator__ex2g4s.t();
      if (!names.o1(key) && !(key === this.u1e_1)) {
        var tmp2 = "Encountered an unknown key '" + key + "'";
        var tmp4 = this.j12();
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
        var tmp_3;
        if (this.c18().u15_1.b18_1) {
          var tmp$ret$4 = this.s2().toString();
          tmp_3 = toString(minify(tmp$ret$4));
        } else {
          tmp_3 = null;
        }
        var inputValue = tmp_3;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.c1g_1 = value;
    this.d1g_1 = this.c1g_1.a1();
    this.e1g_1 = -1;
  }
  protoOf(JsonTreeListDecoder).s2 = function () {
    return this.c1g_1;
  };
  protoOf(JsonTreeListDecoder).d12 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).y1e = function (tag) {
    return this.c1g_1.b1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).oo = function (descriptor) {
    while (this.e1g_1 < (this.d1g_1 - 1 | 0)) {
      this.e1g_1 = this.e1g_1 + 1 | 0;
      return this.e1g_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.l1g_1 = value;
    this.x12('primitive');
  }
  protoOf(JsonPrimitiveDecoder).s2 = function () {
    return this.l1g_1;
  };
  protoOf(JsonPrimitiveDecoder).oo = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).y1e = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.l1g_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.w1g_1 = value;
    this.x1g_1 = toList(this.w1g_1.m2());
    this.y1g_1 = imul(this.x1g_1.a1(), 2);
    this.z1g_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).s2 = function () {
    return this.w1g_1;
  };
  protoOf(JsonTreeMapDecoder).d12 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.x1g_1.b1(i);
  };
  protoOf(JsonTreeMapDecoder).oo = function (descriptor) {
    while (this.z1g_1 < (this.y1g_1 - 1 | 0)) {
      this.z1g_1 = this.z1g_1 + 1 | 0;
      return this.z1g_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).y1e = function (tag) {
    return (this.z1g_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.w1g_1, tag);
  };
  protoOf(JsonTreeMapDecoder).yn = function (descriptor) {
  };
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
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.j1e_1 = begin;
    this.k1e_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.em();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.lm(0), _this__u8e3s4.mo());
          var keyKind = keyDescriptor.em();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.u15_1.n17_1) {
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
    if (equals(_this__u8e3s4.em(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.fm()) {
      tmp = carrierDescriptor(_this__u8e3s4.lm(0), module_0);
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
    $this.a1h(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.a1h(lastPosition, currentPosition);
    var result = $this.o16_1.toString();
    $this.o16_1.ua(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.n16_1);
    $this.n16_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.b1h(), $this.l16_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.c1h(currentPosition);
    if (currentPosition === -1) {
      $this.h1b('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.b1h();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.b1h(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.h1b("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.o16_1.q(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.l16_1 = startPos;
      $this.d1h();
      if (($this.l16_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.h1b('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.l16_1);
    }
    $this.o16_1.q(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.h1b("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.c1h(start);
    if (current >= charSequenceLength($this.b1h()) || current === -1) {
      $this.h1b('EOF');
    }
    var tmp = $this.b1h();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.h1b("Expected valid boolean literal prefix, but had '" + $this.p1c() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.b1h()) - current | 0) < literalSuffix.length) {
      $this.h1b('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.b1h(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.h1b("Expected valid boolean literal prefix, but had '" + $this.p1c() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.l16_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer(configuration) {
    this.k16_1 = configuration;
    this.l16_1 = 0;
    this.m16_1 = new JsonPath(this.k16_1);
    this.n16_1 = null;
    this.o16_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).d1h = function () {
  };
  protoOf(AbstractJsonLexer).z1d = function () {
    var current = this.e1h();
    var source = this.b1h();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.l16_1 = this.l16_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).f1h = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).p16 = function () {
    var nextToken = this.r1c();
    if (!(nextToken === 10)) {
      this.h1b('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.b1h(), this.l16_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).l1c = function (expected) {
    var token = this.r1c();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.l16_1 > 0 ? this.l16_1 - 1 | 0 : this.l16_1;
      var s = this.l16_1 === charSequenceLength(this.b1h()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b1h(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.h1b(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).g1h = function (expected) {
    if (this.l16_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.l16_1;
        try {
          this.l16_1 = this.l16_1 - 1 | 0;
          tmp$ret$0 = this.p1c();
          break $l$block;
        }finally {
          this.l16_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.g1b("Expected string literal but 'null' literal was found", this.l16_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.l16_1 > 0 ? this.l16_1 - 1 | 0 : this.l16_1;
    var s = this.l16_1 === charSequenceLength(this.b1h()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b1h(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.h1b(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).m1c = function () {
    var source = this.b1h();
    var cpos = this.l16_1;
    $l$loop_0: while (true) {
      cpos = this.c1h(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.l16_1 = cpos;
      return charToTokenClass(ch);
    }
    this.l16_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).a1e = function (doConsume) {
    var current = this.e1h();
    current = this.c1h(current);
    var len = charSequenceLength(this.b1h()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.b1h(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.b1h(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.l16_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).l1e = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.a1e(doConsume) : $super.a1e.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).b1e = function (isLenient) {
    var token = this.m1c();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.p1c();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.o1c();
    }
    var string = tmp;
    this.n16_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).h1h = function () {
    this.n16_1 = null;
  };
  protoOf(AbstractJsonLexer).i1h = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.b1h();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).o1c = function () {
    if (!(this.n16_1 == null)) {
      return takePeeked(this);
    }
    return this.e1e();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.c1h(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.h1b('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.a1h(lastPosition, currentPosition);
          currentPosition = this.c1h(currentPosition);
          if (currentPosition === -1) {
            this.h1b('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.i1h(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.l16_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).f1e = function () {
    var result = this.p1c();
    if (result === 'null' && wasUnquotedString(this)) {
      this.h1b("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).p1c = function () {
    if (!(this.n16_1 == null)) {
      return takePeeked(this);
    }
    var current = this.e1h();
    if (current >= charSequenceLength(this.b1h()) || current === -1) {
      this.h1b('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.b1h(), current));
    if (token === 1) {
      return this.o1c();
    }
    if (!(token === 0)) {
      this.h1b('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.b1h(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.b1h(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.b1h())) {
        usedAppend = true;
        this.a1h(this.l16_1, current);
        var eof = this.c1h(current);
        if (eof === -1) {
          this.l16_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.i1h(this.l16_1, current);
    } else {
      tmp = decodedString(this, this.l16_1, current);
    }
    var result = tmp;
    this.l16_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).a1h = function (fromIndex, toIndex) {
    this.o16_1.pa(this.b1h(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).d1e = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.m1c();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.p1c();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.m1c();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.p1c();
        else
          this.e1e();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.y(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8)) {
          this.h1b('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6)) {
          this.h1b('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.h1b('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.r1c();
      if (tokenStack.a1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.b1h()) + "', currentPosition=" + this.l16_1 + ')';
  };
  protoOf(AbstractJsonLexer).c1e = function (key) {
    var processed = this.i1h(0, this.l16_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.g1b("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).g1b = function (message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.m16_1.v1b(), hint, this.b1h());
  };
  protoOf(AbstractJsonLexer).h1b = function (message, position, hint, $super) {
    position = position === VOID ? this.l16_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.g1b(message, position, hint) : $super.g1b.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).n1e = function () {
    var current = this.e1h();
    current = this.c1h(current);
    if (current >= charSequenceLength(this.b1h()) || current === -1) {
      this.h1b('EOF');
    }
    var tmp;
    if (charSequenceGet(this.b1h(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.b1h())) {
        this.h1b('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = 0n;
    var exponentAccumulator = 0n;
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.b1h()))) {
      var ch = charSequenceGet(this.b1h(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.h1b("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.h1b("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.h1b("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.h1b("Unexpected symbol '-' in numeric literal", current);
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
        this.h1b("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (accumulator > 0n) {
        this.h1b('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.h1b('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.h1b('EOF');
      }
      if (!(charSequenceGet(this.b1h(), current) === _Char___init__impl__6a9atx(34))) {
        this.h1b('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.l16_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(9223372036854775807n) || doubleAccumulator < toNumber(-9223372036854775808n)) {
        this.h1b('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.h1b("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!(accumulator === -9223372036854775808n)) {
      tmp_0 = negate(accumulator);
    } else {
      this.h1b('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).t18 = function () {
    var result = this.n1e();
    var next = this.r1c();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.l16_1 > 0 ? this.l16_1 - 1 | 0 : this.l16_1;
      var s = this.l16_1 === charSequenceLength(this.b1h()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b1h(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.h1b(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).m1e = function () {
    var current = this.e1h();
    if (current === charSequenceLength(this.b1h())) {
      this.h1b('EOF');
    }
    var tmp;
    if (charSequenceGet(this.b1h(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.l16_1 === charSequenceLength(this.b1h())) {
        this.h1b('EOF');
      }
      if (!(charSequenceGet(this.b1h(), this.l16_1) === _Char___init__impl__6a9atx(34))) {
        this.h1b('Expected closing quotation mark');
      }
      this.l16_1 = this.l16_1 + 1 | 0;
    }
    return result;
  };
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().k1h_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().j1h_1[c] : _Char___init__impl__6a9atx(0);
  }
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
      $this.j1h_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.k1h_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.j1h_1 = charArray(117);
    this.k1h_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source, configuration) {
    StringJsonLexer.call(this, source, configuration);
  }
  protoOf(StringJsonLexerWithComments).r1c = function () {
    var source = this.b1h();
    var cpos = this.e1h();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.l16_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).n1c = function () {
    var current = this.e1h();
    if (current >= this.b1h().length || current === -1)
      return false;
    return this.f1h(charCodeAt(this.b1h(), current));
  };
  protoOf(StringJsonLexerWithComments).y1d = function (expected) {
    var source = this.b1h();
    var current = this.e1h();
    if (current >= source.length || current === -1) {
      this.l16_1 = -1;
      this.g1h(expected);
    }
    var c = charCodeAt(source, current);
    this.l16_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.g1h(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).m1c = function () {
    var source = this.b1h();
    var cpos = this.e1h();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.l16_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).e1h = function () {
    var current = this.l16_1;
    if (current === -1)
      return current;
    var source = this.b1h();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.l16_1 = source.length;
            this.h1b('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.l16_1 = current;
    return current;
  };
  function StringJsonLexer(source, configuration) {
    AbstractJsonLexer.call(this, configuration);
    this.w1h_1 = source;
  }
  protoOf(StringJsonLexer).b1h = function () {
    return this.w1h_1;
  };
  protoOf(StringJsonLexer).c1h = function (position) {
    return position < this.b1h().length ? position : -1;
  };
  protoOf(StringJsonLexer).r1c = function () {
    var source = this.b1h();
    var cpos = this.l16_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.l16_1 = cpos;
      return charToTokenClass(c);
    }
    this.l16_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).n1c = function () {
    var current = this.l16_1;
    if (current === -1)
      return false;
    var source = this.b1h();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.l16_1 = current;
      return this.f1h(c);
    }
    this.l16_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).e1h = function () {
    var current = this.l16_1;
    if (current === -1)
      return current;
    var source = this.b1h();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.l16_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).y1d = function (expected) {
    if (this.l16_1 === -1) {
      this.g1h(expected);
    }
    var source = this.b1h();
    var cpos = this.l16_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.l16_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.g1h(expected);
    }
    this.l16_1 = -1;
    this.g1h(expected);
  };
  protoOf(StringJsonLexer).e1e = function () {
    this.y1d(_Char___init__impl__6a9atx(34));
    var current = this.l16_1;
    var closingQuote = indexOf_0(this.b1h(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.p1c();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.l16_1 > 0 ? this.l16_1 - 1 | 0 : this.l16_1;
      var s = this.l16_1 === charSequenceLength(this.b1h()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b1h(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.h1b(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.b1h(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.b1h(), this.l16_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.l16_1 = closingQuote + 1 | 0;
    return substring(this.b1h(), current, closingQuote);
  };
  protoOf(StringJsonLexer).g1e = function (keyToMatch, isLenient) {
    var positionSnapshot = this.l16_1;
    try {
      if (!(this.r1c() === 6))
        return null;
      var firstKey = this.b1e(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.h1h();
      if (!(this.r1c() === 5))
        return null;
      return this.b1e(isLenient);
    }finally {
      this.l16_1 = positionSnapshot;
      this.h1h();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.u15_1.z17_1 ? new StringJsonLexer(source, json.u15_1) : new StringJsonLexerWithComments(source, json.u15_1);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.w15_1;
  }
  function JsonToStringWriter() {
    this.a16_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).l1a = function (value) {
    this.a16_1.sa(value);
  };
  protoOf(JsonToStringWriter).f1a = function (char) {
    this.a16_1.q(char);
  };
  protoOf(JsonToStringWriter).h1a = function (text) {
    this.a16_1.o(text);
  };
  protoOf(JsonToStringWriter).r1a = function (text) {
    printQuoted(this.a16_1, text);
  };
  protoOf(JsonToStringWriter).b16 = function () {
    this.a16_1.va();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.a16_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).xl = get_isNullable;
  protoOf(defer$1).fm = get_isInline;
  protoOf(defer$1).hm = get_annotations;
  defineProp(protoOf(JsonException), 'message', function () {
    return this.f9();
  });
  protoOf(JsonSerializersModuleValidator).j15 = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  RedactedKey_instance = new RedactedKey();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  _.$_$.b = Companion_instance_0;
  _.$_$.c = JsonDecoder;
  _.$_$.d = JsonEncoder;
  _.$_$.e = JsonObject;
  _.$_$.f = Json_0;
  _.$_$.g = get_jsonObject;
  _.$_$.h = get_jsonPrimitive;
  //endregion
  _.$_$.Json = Json
  _.$_$.Default_getInstance = Default_getInstance
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
