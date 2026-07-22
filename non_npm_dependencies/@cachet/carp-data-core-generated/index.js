(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'big.js', '@cachet/kotlin-kotlin-stdlib', '@cachet/kotlinx-serialization-kotlinx-serialization-core', '@cachet/carp-common-generated'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('big.js'), require('@cachet/kotlin-kotlin-stdlib'), require('@cachet/kotlinx-serialization-kotlinx-serialization-core'), require('@cachet/carp-common-generated'));
  else {
    if (typeof Big === 'undefined') {
      throw new Error("Error loading module 'carp-data-core-generated'. Its dependency 'big.js' was not found. Please, check whether 'big.js' is loaded prior to 'carp-data-core-generated'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'carp-data-core-generated'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'carp-data-core-generated'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'carp-data-core-generated'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'carp-data-core-generated'.");
    }
    if (typeof globalThis['carp-common-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-data-core-generated'. Its dependency 'carp-common-generated' was not found. Please, check whether 'carp-common-generated' is loaded prior to 'carp-data-core-generated'.");
    }
    globalThis['carp-data-core-generated'] = factory(typeof globalThis['carp-data-core-generated'] === 'undefined' ? {} : globalThis['carp-data-core-generated'], Big, globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['carp-common-generated']);
  }
}(function (_, Big, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_dk_cachet_carp_common_carp_common) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.b9;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h8;
  var VOID = kotlin_kotlin.$_$.b;
  var flatMap = kotlin_kotlin.$_$.v9;
  var none = kotlin_kotlin.$_$.y9;
  var filter = kotlin_kotlin.$_$.u9;
  var initMetadataForInterface = kotlin_kotlin.$_$.k8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i3;
  var asSequence = kotlin_kotlin.$_$.t4;
  var flatMap_0 = kotlin_kotlin.$_$.w9;
  var mutableListOf = kotlin_kotlin.$_$.f6;
  var Unit_instance = kotlin_kotlin.$_$.u2;
  var last = kotlin_kotlin.$_$.a6;
  var THROW_CCE = kotlin_kotlin.$_$.sb;
  var toString = kotlin_kotlin.$_$.d9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s3;
  var isInterface = kotlin_kotlin.$_$.v8;
  var mapCapacity = kotlin_kotlin.$_$.c6;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.h3;
  var first = kotlin_kotlin.$_$.p5;
  var toList = kotlin_kotlin.$_$.z9;
  var equals = kotlin_kotlin.$_$.z7;
  var hashCode = kotlin_kotlin.$_$.f8;
  var defineProp = kotlin_kotlin.$_$.y7;
  var initMetadataForClass = kotlin_kotlin.$_$.g8;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var initMetadataForObject = kotlin_kotlin.$_$.m8;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var UUIDSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.i1;
  var NamespacedIdSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.g1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var objectCreate = kotlin_kotlin.$_$.a9;
  var getStringHashCode = kotlin_kotlin.$_$.e8;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.x2;
  var lazy = kotlin_kotlin.$_$.lc;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var getBigIntHashCode = kotlin_kotlin.$_$.a8;
  var fromInt = kotlin_kotlin.$_$.e7;
  var add = kotlin_kotlin.$_$.a7;
  var until = kotlin_kotlin.$_$.k9;
  var Companion_getInstance = kotlin_kotlin.$_$.h2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v3;
  var Collection = kotlin_kotlin.$_$.d4;
  var asSequence_0 = kotlin_kotlin.$_$.u4;
  var mapIndexed = kotlin_kotlin.$_$.x9;
  var toList_0 = kotlin_kotlin.$_$.p6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z2;
  var toList_1 = kotlin_kotlin.$_$.q6;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.p3;
  var IllegalStateException = kotlin_kotlin.$_$.pb;
  var ApiVersion = kotlin_dk_cachet_carp_common_carp_common.$_$.d;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var toString_0 = kotlin_kotlin.$_$.pc;
  var getBooleanHashCode = kotlin_kotlin.$_$.b8;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.y2;
  var toSet = kotlin_kotlin.$_$.t6;
  var DataTimeType_TIME_SPAN_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.k1;
  var DataTimeType_POINT_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.j1;
  var Data = kotlin_dk_cachet_carp_common_carp_common.$_$.a;
  var getKClass = kotlin_kotlin.$_$.q9;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var getKClassFromExpression = kotlin_kotlin.$_$.p9;
  var Companion_instance = kotlin_dk_cachet_carp_common_carp_common.$_$.f1;
  var CustomData = kotlin_dk_cachet_carp_common_carp_common.$_$.q;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.l2;
  var InstantSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var getNumberHashCode = kotlin_kotlin.$_$.c8;
  var constructCallableReference = kotlin_kotlin.$_$.x7;
  var ApiVersionSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.w;
  var ignoreTypeParameters = kotlin_dk_cachet_carp_common_carp_common.$_$.r;
  var Unit = kotlin_kotlin.$_$.dc;
  var arrayOf = kotlin_kotlin.$_$.ec;
  var createKType = kotlin_kotlin.$_$.o9;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var KtList = kotlin_kotlin.$_$.i4;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.n9;
  var KtSet = kotlin_kotlin.$_$.p4;
  var UUID = kotlin_dk_cachet_carp_common_carp_common.$_$.l;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var ApplicationServiceRequest = kotlin_dk_cachet_carp_common_carp_common.$_$.s;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d3;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var subtract = kotlin_kotlin.$_$.l7;
  var toLong = kotlin_kotlin.$_$.xa;
  var toEpochMicroseconds = kotlin_dk_cachet_carp_common_carp_common.$_$.m;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
  function iterator() {
    var tmp = this.sequences;
    return flatMap(tmp, DataStreamBatch$iterator$lambda).r();
  }
  function isEmpty() {
    return none(this);
  }
  function getDataStreamPoints(dataStream) {
    var tmp = this.sequences;
    var tmp_0 = filter(tmp, DataStreamBatch$getDataStreamPoints$lambda(dataStream));
    return flatMap(tmp_0, DataStreamBatch$getDataStreamPoints$lambda_0);
  }
  initMetadataForInterface(DataStreamBatch, 'DataStreamBatch', VOID, VOID, VOID, VOID, VOID, {0: DataStreamBatchSerializer_getInstance});
  initMetadataForClass(MutableDataStreamBatch, 'MutableDataStreamBatch', MutableDataStreamBatch, VOID, [DataStreamBatch]);
  initMetadataForObject(DataStreamBatchSerializer, 'DataStreamBatchSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DataStreamId, 'DataStreamId', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_1, VOID, [SerializerFactory]);
  initMetadataForClass($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DataStreamPoint, 'DataStreamPoint', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_3});
  function get_range() {
    var tmp;
    if (this.measurements.p()) {
      tmp = Companion_getInstance().h1_1;
    } else {
      var tmp_0 = this.firstSequenceId;
      var tmp0 = this.firstSequenceId;
      // Inline function 'kotlin.Long.plus' call
      var other = this.measurements.a1();
      var tmp$ret$0 = add(tmp0, fromInt(other));
      tmp = until(tmp_0, tmp$ret$0);
    }
    return tmp;
  }
  function throwIfIllegalState() {
    // Inline function 'kotlin.check' call
    if (!(this.firstSequenceId >= 0n)) {
      var message = 'Sequence ID must be positive.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.check' call
    if (!!this.triggerIds.p()) {
      var message_0 = 'Data always needs to be linked to at least one trigger that requested it.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp0 = this.measurements;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$5 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.r();
      while (_iterator__ex2g4s.s()) {
        var element = _iterator__ex2g4s.t();
        if (!element.dataType.equals(this.dataStream.dataType)) {
          tmp$ret$5 = false;
          break $l$block_0;
        }
      }
      tmp$ret$5 = true;
    }
    // Inline function 'kotlin.check' call
    if (!tmp$ret$5) {
      var message_1 = 'Measurements all need to correspond to the data type of the data stream.';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function iterator_0() {
    var tmp = asSequence_0(this.measurements);
    return mapIndexed(tmp, DataStreamSequence$iterator$lambda(this)).r();
  }
  function isImmediatelyFollowedBy(sequence) {
    var tmp;
    if (this.dataStream.equals(sequence.dataStream) && equals(this.triggerIds, sequence.triggerIds) && this.syncPoint.equals(sequence.syncPoint)) {
      var tmp_0;
      if (this.range.equals(Companion_getInstance().h1_1)) {
        tmp_0 = this.firstSequenceId === sequence.firstSequenceId;
      } else {
        // Inline function 'kotlin.Long.plus' call
        var this_0 = this.range.ff_1;
        tmp_0 = add(this_0, fromInt(1)) === sequence.firstSequenceId;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function toMutableDataStreamSequence() {
    var sequence = new MutableDataStreamSequence(this.dataStream, this.firstSequenceId, this.triggerIds, this.syncPoint);
    sequence.appendMeasurementsList(this.measurements);
    return sequence;
  }
  initMetadataForInterface(DataStreamSequence, 'DataStreamSequence');
  initMetadataForClass(MutableDataStreamSequence, 'MutableDataStreamSequence', VOID, VOID, [DataStreamSequence]);
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DataStreamSequenceSnapshot, 'DataStreamSequenceSnapshot', VOID, VOID, [DataStreamSequence], VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForObject(DataStreamSequenceSerializer, 'DataStreamSequenceSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DataStreamStatus, 'DataStreamStatus', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ExpectedDataStream, 'ExpectedDataStream', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DataStreamsConfiguration, 'DataStreamsConfiguration', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_7, VOID, [SerializerFactory]);
  initMetadataForClass(Measurement, 'Measurement', VOID, VOID, VOID, VOID, VOID, {0: MeasurementSerializer_getInstance});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Surrogate, 'Surrogate', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForObject(MeasurementSerializer, 'MeasurementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SyncPoint, 'SyncPoint', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_11);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_12);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_13);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_14);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_15);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(Serializer, 'Serializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(DataStreamServiceRequest, 'DataStreamServiceRequest', VOID, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_18});
  initMetadataForClass(OpenDataStreams, 'OpenDataStreams', VOID, DataStreamServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForClass(AppendToDataStreams, 'AppendToDataStreams', VOID, DataStreamServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForClass(GetDataStream, 'GetDataStream', VOID, DataStreamServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForClass(GetDataStreamsStatus, 'GetDataStreamsStatus', VOID, DataStreamServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForClass(CloseDataStreams, 'CloseDataStreams', VOID, DataStreamServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForClass(RemoveDataStreams, 'RemoveDataStreams', VOID, DataStreamServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForCompanion(Companion_16, VOID, [SerializerFactory]);
  //endregion
  function Companion() {
  }
  protoOf(Companion).i18 = function () {
    return DataStreamBatchSerializer_getInstance();
  };
  protoOf(Companion).pw = function (typeParamsSerializers) {
    return this.i18();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function DataStreamBatch$iterator$lambda(it) {
    return it;
  }
  function DataStreamBatch$getDataStreamPoints$lambda($dataStream) {
    return function (it) {
      return it.dataStream.equals($dataStream);
    };
  }
  function DataStreamBatch$getDataStreamPoints$lambda_0(it) {
    return it;
  }
  function DataStreamBatch() {
  }
  function MutableDataStreamBatch$_get_sequences_$lambda_twur2e(it) {
    return it.s2();
  }
  function MutableDataStreamBatch() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.p2q_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(MutableDataStreamBatch).o2q = function () {
    var tmp = asSequence(this.p2q_1);
    return flatMap_0(tmp, MutableDataStreamBatch$_get_sequences_$lambda_twur2e);
  };
  protoOf(MutableDataStreamBatch).appendSequence = function (sequence) {
    var sequenceList = this.p2q_1.q2(sequence.dataStream);
    if (sequenceList == null) {
      var tmp0 = this.p2q_1;
      var tmp2 = sequence.dataStream;
      // Inline function 'kotlin.collections.set' call
      var value = mutableListOf([sequence.toMutableDataStreamSequence()]);
      tmp0.k2(tmp2, value);
      return Unit_instance;
    }
    var tmp = last(sequenceList);
    var last_0 = tmp instanceof MutableDataStreamSequence ? tmp : THROW_CCE();
    // Inline function 'kotlin.require' call
    if (!(last_0.range.ff_1 < sequence.range.ef_1)) {
      var message = 'Sequence range start lies before the end of a previously appended sequence to the same data stream.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(last_0.s2q_1.synchronizedOn.jh(sequence.syncPoint.synchronizedOn) <= 0)) {
      var message_0 = "The sync point contained in this sequence can't have been obtained before a previous sync point.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (last_0.isImmediatelyFollowedBy(sequence)) {
      last_0.appendSequence(isInterface(sequence, DataStreamSequence) ? sequence : THROW_CCE());
    } else {
      sequenceList.y(sequence.toMutableDataStreamSequence());
    }
  };
  protoOf(MutableDataStreamBatch).appendBatch = function (batch) {
    var tmp;
    if (batch instanceof MutableDataStreamBatch) {
      // Inline function 'kotlin.collections.mapValues' call
      var this_0 = batch.p2q_1;
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.a1()));
      // Inline function 'kotlin.collections.associateByTo' call
      var _iterator__ex2g4s = this_0.f1().r();
      while (_iterator__ex2g4s.s()) {
        var element = _iterator__ex2g4s.t();
        var tmp_0 = element.r2();
        var tmp$ret$4 = first(element.s2());
        destination.k2(tmp_0, tmp$ret$4);
      }
      var tmp$ret$5;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        if (destination.p()) {
          tmp$ret$5 = true;
          break $l$block_0;
        }
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s_0 = destination.f1().r();
        while (_iterator__ex2g4s_0.s()) {
          var element_0 = _iterator__ex2g4s_0.t();
          // Inline function 'kotlin.collections.component1' call
          var dataStream = element_0.r2();
          // Inline function 'kotlin.collections.component2' call
          var firstNewSequence = element_0.s2();
          var tmp0_safe_receiver = this.p2q_1.q2(dataStream);
          var lastStoredSequence = tmp0_safe_receiver == null ? null : last(tmp0_safe_receiver);
          if (!(lastStoredSequence == null ? true : lastStoredSequence.range.ff_1 < firstNewSequence.range.ef_1)) {
            tmp$ret$5 = false;
            break $l$block_0;
          }
        }
        tmp$ret$5 = true;
      }
      tmp = tmp$ret$5;
    } else {
      var tmp0 = batch.sequences;
      var tmp$ret$10;
      $l$block_1: {
        // Inline function 'kotlin.sequences.all' call
        var _iterator__ex2g4s_1 = tmp0.r();
        while (_iterator__ex2g4s_1.s()) {
          var element_1 = _iterator__ex2g4s_1.t();
          var tmp0_safe_receiver_0 = this.p2q_1.q2(element_1.dataStream);
          // Inline function 'kotlin.let' call
          var lastStoredSequence_0 = tmp0_safe_receiver_0 == null ? null : last(tmp0_safe_receiver_0);
          if (!(lastStoredSequence_0 == null ? true : lastStoredSequence_0.range.ff_1 < element_1.range.ef_1)) {
            tmp$ret$10 = false;
            break $l$block_1;
          }
        }
        tmp$ret$10 = true;
      }
      tmp = tmp$ret$10;
    }
    var containsNoPrecedingSequence = tmp;
    // Inline function 'kotlin.require' call
    if (!containsNoPrecedingSequence) {
      var message = 'The batch contains a sequence of which the start precedes a previously appended sequence';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.sequences.forEach' call
    var _iterator__ex2g4s_2 = batch.sequences.r();
    while (_iterator__ex2g4s_2.s()) {
      var element_2 = _iterator__ex2g4s_2.t();
      this.appendSequence(element_2);
    }
  };
  protoOf(MutableDataStreamBatch).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, DataStreamBatch) : false))
      return false;
    return equals(toList(this), toList(other));
  };
  protoOf(MutableDataStreamBatch).hashCode = function () {
    return hashCode(this.sequences);
  };
  protoOf(MutableDataStreamBatch).r = function () {
    return this.r();
  };
  function DataStreamBatchSerializer() {
    DataStreamBatchSerializer_instance = this;
    this.v2q_1 = ListSerializer(DataStreamSequenceSerializer_getInstance());
    this.w2q_1 = this.v2q_1.mk();
  }
  protoOf(DataStreamBatchSerializer).mk = function () {
    return this.w2q_1;
  };
  protoOf(DataStreamBatchSerializer).x2q = function (encoder, value) {
    return encoder.pp(this.v2q_1, toList(value.sequences));
  };
  protoOf(DataStreamBatchSerializer).nk = function (encoder, value) {
    return this.x2q(encoder, (!(value == null) ? isInterface(value, DataStreamBatch) : false) ? value : THROW_CCE());
  };
  protoOf(DataStreamBatchSerializer).ok = function (decoder) {
    var batch = new MutableDataStreamBatch();
    var sequences = decoder.wn(this.v2q_1);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = sequences.r();
    while (_iterator__ex2g4s.s()) {
      var element = _iterator__ex2g4s.t();
      batch.appendSequence(element);
    }
    return batch;
  };
  var DataStreamBatchSerializer_instance;
  function DataStreamBatchSerializer_getInstance() {
    if (DataStreamBatchSerializer_instance == null)
      new DataStreamBatchSerializer();
    return DataStreamBatchSerializer_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.DataStreamId', this, 3);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('deviceRoleName', false);
    tmp0_serialDesc.pv('dataType', false);
    this.y2q_1 = tmp0_serialDesc;
  }
  protoOf($serializer).z2q = function (encoder, value) {
    var tmp0_desc = this.y2q_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.mp(tmp0_desc, 1, value.deviceRoleName);
    tmp1_output.op(tmp0_desc, 2, NamespacedIdSerializer_getInstance(), value.dataType);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer).nk = function (encoder, value) {
    return this.z2q(encoder, value instanceof DataStreamId ? value : THROW_CCE());
  };
  protoOf($serializer).ok = function (decoder) {
    var tmp0_desc = this.y2q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ho(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, NamespacedIdSerializer_getInstance(), tmp6_local2);
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
            tmp5_local1 = tmp7_input.ho(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, NamespacedIdSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return DataStreamId_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer).mk = function () {
    return this.y2q_1;
  };
  protoOf($serializer).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), StringSerializer_getInstance(), NamespacedIdSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function DataStreamId_init_$Init$(seen0, studyDeploymentId, deviceRoleName, dataType, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance().y2q_1);
    }
    $this.studyDeploymentId = studyDeploymentId;
    $this.deviceRoleName = deviceRoleName;
    $this.dataType = dataType;
    return $this;
  }
  function DataStreamId_init_$Create$(seen0, studyDeploymentId, deviceRoleName, dataType, serializationConstructorMarker) {
    return DataStreamId_init_$Init$(seen0, studyDeploymentId, deviceRoleName, dataType, serializationConstructorMarker, objectCreate(protoOf(DataStreamId)));
  }
  function DataStreamId(studyDeploymentId, deviceRoleName, dataType) {
    this.studyDeploymentId = studyDeploymentId;
    this.deviceRoleName = deviceRoleName;
    this.dataType = dataType;
  }
  protoOf(DataStreamId).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(DataStreamId).o2i = function () {
    return this.deviceRoleName;
  };
  protoOf(DataStreamId).m1w = function () {
    return this.dataType;
  };
  protoOf(DataStreamId).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(DataStreamId).td = function () {
    return this.deviceRoleName;
  };
  protoOf(DataStreamId).m1j = function () {
    return this.dataType;
  };
  protoOf(DataStreamId).a2r = function (studyDeploymentId, deviceRoleName, dataType) {
    return new DataStreamId(studyDeploymentId, deviceRoleName, dataType);
  };
  protoOf(DataStreamId).copy = function (studyDeploymentId, deviceRoleName, dataType, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    deviceRoleName = deviceRoleName === VOID ? this.deviceRoleName : deviceRoleName;
    dataType = dataType === VOID ? this.dataType : dataType;
    return $super === VOID ? this.a2r(studyDeploymentId, deviceRoleName, dataType) : $super.a2r.call(this, studyDeploymentId, deviceRoleName, dataType);
  };
  protoOf(DataStreamId).toString = function () {
    return 'DataStreamId(studyDeploymentId=' + this.studyDeploymentId.toString() + ', deviceRoleName=' + this.deviceRoleName + ', dataType=' + this.dataType.toString() + ')';
  };
  protoOf(DataStreamId).hashCode = function () {
    var result = this.studyDeploymentId.hashCode();
    result = imul(result, 31) + getStringHashCode(this.deviceRoleName) | 0;
    result = imul(result, 31) + this.dataType.hashCode() | 0;
    return result;
  };
  protoOf(DataStreamId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataStreamId))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    if (!(this.deviceRoleName === other.deviceRoleName))
      return false;
    if (!this.dataType.equals(other.dataType))
      return false;
    return true;
  };
  function DataStreamPoint$Companion$$childSerializers$_anonymous__a3lwfw() {
    return new ArrayListSerializer(IntSerializer_getInstance());
  }
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer_0.call($this);
    $this.c2r_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, objectCreate(protoOf($serializer_0)));
  }
  function Companion_1() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.d2r_1 = [null, null, null, null, lazy(tmp_0, DataStreamPoint$Companion$$childSerializers$_anonymous__a3lwfw), null];
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.DataStreamPoint', null, 6);
    tmp0_serialDesc.pv('sequenceId', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('deviceRoleName', false);
    tmp0_serialDesc.pv('measurement', false);
    tmp0_serialDesc.pv('triggerIds', false);
    tmp0_serialDesc.pv('syncPoint', true);
    this.e2r_1 = tmp0_serialDesc;
  }
  protoOf(Companion_1).m20 = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  protoOf(Companion_1).pw = function (typeParamsSerializers) {
    return this.m20(typeParamsSerializers[0]);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function $serializer_0() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.DataStreamPoint', this, 6);
    tmp0_serialDesc.pv('sequenceId', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('deviceRoleName', false);
    tmp0_serialDesc.pv('measurement', false);
    tmp0_serialDesc.pv('triggerIds', false);
    tmp0_serialDesc.pv('syncPoint', true);
    this.b2r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).f2r = function (encoder, value) {
    var tmp0_desc = this.b2r_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().d2r_1;
    tmp1_output.ip(tmp0_desc, 0, value.sequenceId);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.mp(tmp0_desc, 2, value.deviceRoleName);
    tmp1_output.op(tmp0_desc, 3, MeasurementSerializer_getInstance(), value.measurement);
    tmp1_output.op(tmp0_desc, 4, tmp2_cached[4].s2(), value.triggerIds);
    if (tmp1_output.up(tmp0_desc, 5) ? true : !value.syncPoint.equals(Companion_getInstance_11().UnixEpoch)) {
      tmp1_output.op(tmp0_desc, 5, $serializer_getInstance_5(), value.syncPoint);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_0).nk = function (encoder, value) {
    return this.f2r(encoder, value instanceof DataStreamPoint ? value : THROW_CCE());
  };
  protoOf($serializer_0).ok = function (decoder) {
    var tmp0_desc = this.b2r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0n;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.xn(tmp0_desc);
    var tmp11_cached = Companion_getInstance_3().d2r_1;
    if (tmp10_input.no()) {
      tmp4_local0 = tmp10_input.do(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.ho(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.jo(tmp0_desc, 3, MeasurementSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.jo(tmp0_desc, 4, tmp11_cached[4].s2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.jo(tmp0_desc, 5, $serializer_getInstance_5(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.do(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.jo(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.ho(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.jo(tmp0_desc, 3, MeasurementSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.jo(tmp0_desc, 4, tmp11_cached[4].s2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.jo(tmp0_desc, 5, $serializer_getInstance_5(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.yn(tmp0_desc);
    return DataStreamPoint_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_0).mk = function () {
    return this.b2r_1;
  };
  protoOf($serializer_0).ew = function () {
    var tmp0_cached = Companion_getInstance_3().d2r_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [LongSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), MeasurementSerializer_getInstance(), tmp0_cached[4].s2(), $serializer_getInstance_5()];
  };
  protoOf($serializer_0).fw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.c2r_1];
  };
  function DataStreamPoint_init_$Init$(seen0, sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, Companion_getInstance_3().e2r_1);
    }
    $this.sequenceId = sequenceId;
    $this.studyDeploymentId = studyDeploymentId;
    $this.deviceRoleName = deviceRoleName;
    $this.measurement = measurement;
    $this.triggerIds = triggerIds;
    if (0 === (seen0 & 32))
      $this.syncPoint = Companion_getInstance_11().UnixEpoch;
    else
      $this.syncPoint = syncPoint;
    // Inline function 'kotlin.require' call
    if (!($this.sequenceId >= 0n)) {
      var message = 'Sequence ID must be positive.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!$this.triggerIds.p()) {
      var message_0 = 'Data always needs to be linked to at least one trigger that requested it.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return $this;
  }
  function DataStreamPoint_init_$Create$(seen0, sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint, serializationConstructorMarker) {
    return DataStreamPoint_init_$Init$(seen0, sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint, serializationConstructorMarker, objectCreate(protoOf(DataStreamPoint)));
  }
  function DataStreamPoint(sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint) {
    Companion_getInstance_3();
    syncPoint = syncPoint === VOID ? Companion_getInstance_11().UnixEpoch : syncPoint;
    this.sequenceId = sequenceId;
    this.studyDeploymentId = studyDeploymentId;
    this.deviceRoleName = deviceRoleName;
    this.measurement = measurement;
    this.triggerIds = triggerIds;
    this.syncPoint = syncPoint;
    // Inline function 'kotlin.require' call
    if (!(this.sequenceId >= 0n)) {
      var message = 'Sequence ID must be positive.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.triggerIds.p()) {
      var message_0 = 'Data always needs to be linked to at least one trigger that requested it.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(DataStreamPoint).g2r = function () {
    return this.sequenceId;
  };
  protoOf(DataStreamPoint).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(DataStreamPoint).o2i = function () {
    return this.deviceRoleName;
  };
  protoOf(DataStreamPoint).h2r = function () {
    return this.measurement;
  };
  protoOf(DataStreamPoint).i2r = function () {
    return this.triggerIds;
  };
  protoOf(DataStreamPoint).j2r = function () {
    return this.syncPoint;
  };
  protoOf(DataStreamPoint).k2r = function () {
    return new DataStreamId(this.studyDeploymentId, this.deviceRoleName, this.measurement.dataType);
  };
  protoOf(DataStreamPoint).synchronize = function () {
    if (this.syncPoint.equals(Companion_getInstance_11().UnixEpoch))
      return this;
    return this.copy(VOID, VOID, VOID, this.measurement.synchronize(this.syncPoint), VOID, Companion_getInstance_11().UnixEpoch);
  };
  protoOf(DataStreamPoint).sd = function () {
    return this.sequenceId;
  };
  protoOf(DataStreamPoint).td = function () {
    return this.studyDeploymentId;
  };
  protoOf(DataStreamPoint).m1j = function () {
    return this.deviceRoleName;
  };
  protoOf(DataStreamPoint).l1k = function () {
    return this.measurement;
  };
  protoOf(DataStreamPoint).m1p = function () {
    return this.triggerIds;
  };
  protoOf(DataStreamPoint).n1s = function () {
    return this.syncPoint;
  };
  protoOf(DataStreamPoint).l2r = function (sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint) {
    return new DataStreamPoint(sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint);
  };
  protoOf(DataStreamPoint).copy = function (sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint, $super) {
    sequenceId = sequenceId === VOID ? this.sequenceId : sequenceId;
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    deviceRoleName = deviceRoleName === VOID ? this.deviceRoleName : deviceRoleName;
    measurement = measurement === VOID ? this.measurement : measurement;
    triggerIds = triggerIds === VOID ? this.triggerIds : triggerIds;
    syncPoint = syncPoint === VOID ? this.syncPoint : syncPoint;
    return $super === VOID ? this.l2r(sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint) : $super.l2r.call(this, sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint);
  };
  protoOf(DataStreamPoint).toString = function () {
    return 'DataStreamPoint(sequenceId=' + this.sequenceId.toString() + ', studyDeploymentId=' + this.studyDeploymentId.toString() + ', deviceRoleName=' + this.deviceRoleName + ', measurement=' + this.measurement.toString() + ', triggerIds=' + toString(this.triggerIds) + ', syncPoint=' + this.syncPoint.toString() + ')';
  };
  protoOf(DataStreamPoint).hashCode = function () {
    var result = getBigIntHashCode(this.sequenceId);
    result = imul(result, 31) + this.studyDeploymentId.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.deviceRoleName) | 0;
    result = imul(result, 31) + this.measurement.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.triggerIds) | 0;
    result = imul(result, 31) + this.syncPoint.hashCode() | 0;
    return result;
  };
  protoOf(DataStreamPoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataStreamPoint))
      return false;
    if (!(this.sequenceId === other.sequenceId))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    if (!(this.deviceRoleName === other.deviceRoleName))
      return false;
    if (!this.measurement.equals(other.measurement))
      return false;
    if (!equals(this.triggerIds, other.triggerIds))
      return false;
    if (!this.syncPoint.equals(other.syncPoint))
      return false;
    return true;
  };
  function DataStreamSequence$iterator$lambda(this$0) {
    return function (index, measurement) {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = this$0.firstSequenceId;
      var tmp$ret$0 = add(this_0, fromInt(index));
      return new DataStreamPoint(tmp$ret$0, this$0.dataStream.studyDeploymentId, this$0.dataStream.deviceRoleName, measurement, this$0.triggerIds, this$0.syncPoint);
    };
  }
  function DataStreamSequence() {
  }
  function MutableDataStreamSequence(dataStream, firstSequenceId, triggerIds, syncPoint) {
    syncPoint = syncPoint === VOID ? Companion_getInstance_11().UnixEpoch : syncPoint;
    this.q2q_1 = dataStream;
    this.r2q_1 = firstSequenceId;
    this.s2q_1 = syncPoint;
    this.t2q_1 = toList_0(triggerIds);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u2q_1 = ArrayList_init_$Create$();
    throwIfIllegalInitialization(this);
  }
  protoOf(MutableDataStreamSequence).k2r = function () {
    return this.q2q_1;
  };
  protoOf(MutableDataStreamSequence).m2r = function () {
    return this.r2q_1;
  };
  protoOf(MutableDataStreamSequence).j2r = function () {
    return this.s2q_1;
  };
  protoOf(MutableDataStreamSequence).i2r = function () {
    return this.t2q_1;
  };
  protoOf(MutableDataStreamSequence).n2r = function () {
    return this.u2q_1;
  };
  protoOf(MutableDataStreamSequence).appendMeasurementsList = function (measurements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(measurements, Collection)) {
        tmp = measurements.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = measurements.r();
      while (_iterator__ex2g4s.s()) {
        var element = _iterator__ex2g4s.t();
        if (!element.dataType.equals(this.q2q_1.dataType)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    // Inline function 'kotlin.require' call
    if (!tmp$ret$0) {
      var message = 'Measurements all need to correspond to the data type of the data stream.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.u2q_1.c1(measurements);
  };
  protoOf(MutableDataStreamSequence).appendMeasurements = function (measurements) {
    return this.appendMeasurementsList(toList_1(measurements));
  };
  protoOf(MutableDataStreamSequence).appendSequence = function (sequence) {
    // Inline function 'kotlin.require' call
    if (!this.isImmediatelyFollowedBy(sequence)) {
      var message = "Sequence doesn't match or doesn't immediately follow the last data point.";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.appendMeasurementsList(sequence.measurements);
  };
  protoOf(MutableDataStreamSequence).equals = function (other) {
    return equalsOther(this, other);
  };
  protoOf(MutableDataStreamSequence).hashCode = function () {
    return hashCode(this.measurements);
  };
  protoOf(MutableDataStreamSequence).r = function () {
    return this.r();
  };
  function DataStreamSequenceSerializer$DataStreamSequenceSnapshot$Companion$$childSerializers$_anonymous__raboh8() {
    return new ArrayListSerializer(MeasurementSerializer_getInstance());
  }
  function DataStreamSequenceSerializer$DataStreamSequenceSnapshot$Companion$$childSerializers$_anonymous__raboh8_0() {
    return new ArrayListSerializer(IntSerializer_getInstance());
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DataStreamSequenceSerializer$DataStreamSequenceSnapshot$Companion$$childSerializers$_anonymous__raboh8);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o2r_1 = [null, null, tmp_1, lazy(tmp_2, DataStreamSequenceSerializer$DataStreamSequenceSnapshot$Companion$$childSerializers$_anonymous__raboh8_0), null];
  }
  protoOf(Companion_2).i18 = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function $serializer_1() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.DataStreamSequenceSerializer.DataStreamSequenceSnapshot', this, 5);
    tmp0_serialDesc.pv('dataStream', false);
    tmp0_serialDesc.pv('firstSequenceId', false);
    tmp0_serialDesc.pv('measurements', false);
    tmp0_serialDesc.pv('triggerIds', false);
    tmp0_serialDesc.pv('syncPoint', true);
    this.p2r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).q2r = function (encoder, value) {
    var tmp0_desc = this.p2r_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().o2r_1;
    tmp1_output.op(tmp0_desc, 0, $serializer_getInstance(), value.r2r_1);
    tmp1_output.ip(tmp0_desc, 1, value.s2r_1);
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.t2r_1);
    tmp1_output.op(tmp0_desc, 3, tmp2_cached[3].s2(), value.u2r_1);
    if (tmp1_output.up(tmp0_desc, 4) ? true : !value.v2r_1.equals(Companion_getInstance_11().UnixEpoch)) {
      tmp1_output.op(tmp0_desc, 4, $serializer_getInstance_5(), value.v2r_1);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_1).nk = function (encoder, value) {
    return this.q2r(encoder, value instanceof DataStreamSequenceSnapshot ? value : THROW_CCE());
  };
  protoOf($serializer_1).ok = function (decoder) {
    var tmp0_desc = this.p2r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0n;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xn(tmp0_desc);
    var tmp10_cached = Companion_getInstance_4().o2r_1;
    if (tmp9_input.no()) {
      tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.do(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jo(tmp0_desc, 2, tmp10_cached[2].s2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jo(tmp0_desc, 3, tmp10_cached[3].s2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.jo(tmp0_desc, 4, $serializer_getInstance_5(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jo(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.do(tmp0_desc, 1);
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
            tmp8_local4 = tmp9_input.jo(tmp0_desc, 4, $serializer_getInstance_5(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yn(tmp0_desc);
    return DataStreamSequenceSnapshot_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_1).mk = function () {
    return this.p2r_1;
  };
  protoOf($serializer_1).ew = function () {
    var tmp0_cached = Companion_getInstance_4().o2r_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance(), LongSerializer_getInstance(), tmp0_cached[2].s2(), tmp0_cached[3].s2(), $serializer_getInstance_5()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_1();
    return $serializer_instance_0;
  }
  function DataStreamSequenceSnapshot_init_$Init$(seen0, dataStream, firstSequenceId, measurements, triggerIds, syncPoint, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_0().p2r_1);
    }
    $this.r2r_1 = dataStream;
    $this.s2r_1 = firstSequenceId;
    $this.t2r_1 = measurements;
    $this.u2r_1 = triggerIds;
    if (0 === (seen0 & 16))
      $this.v2r_1 = Companion_getInstance_11().UnixEpoch;
    else
      $this.v2r_1 = syncPoint;
    throwIfIllegalInitialization($this);
    return $this;
  }
  function DataStreamSequenceSnapshot_init_$Create$(seen0, dataStream, firstSequenceId, measurements, triggerIds, syncPoint, serializationConstructorMarker) {
    return DataStreamSequenceSnapshot_init_$Init$(seen0, dataStream, firstSequenceId, measurements, triggerIds, syncPoint, serializationConstructorMarker, objectCreate(protoOf(DataStreamSequenceSnapshot)));
  }
  function DataStreamSequenceSnapshot(dataStream, firstSequenceId, measurements, triggerIds, syncPoint) {
    Companion_getInstance_4();
    syncPoint = syncPoint === VOID ? Companion_getInstance_11().UnixEpoch : syncPoint;
    this.r2r_1 = dataStream;
    this.s2r_1 = firstSequenceId;
    this.t2r_1 = measurements;
    this.u2r_1 = triggerIds;
    this.v2r_1 = syncPoint;
    throwIfIllegalInitialization(this);
  }
  protoOf(DataStreamSequenceSnapshot).k2r = function () {
    return this.r2r_1;
  };
  protoOf(DataStreamSequenceSnapshot).m2r = function () {
    return this.s2r_1;
  };
  protoOf(DataStreamSequenceSnapshot).n2r = function () {
    return this.t2r_1;
  };
  protoOf(DataStreamSequenceSnapshot).i2r = function () {
    return this.u2r_1;
  };
  protoOf(DataStreamSequenceSnapshot).j2r = function () {
    return this.v2r_1;
  };
  protoOf(DataStreamSequenceSnapshot).equals = function (other) {
    return equalsOther(this, other);
  };
  protoOf(DataStreamSequenceSnapshot).hashCode = function () {
    return hashCode(this.t2r_1);
  };
  protoOf(DataStreamSequenceSnapshot).r = function () {
    return this.r();
  };
  function DataStreamSequenceSerializer() {
    DataStreamSequenceSerializer_instance = this;
    this.w2r_1 = Companion_getInstance_4().i18();
    this.x2r_1 = this.w2r_1.mk();
  }
  protoOf(DataStreamSequenceSerializer).mk = function () {
    return this.x2r_1;
  };
  protoOf(DataStreamSequenceSerializer).y2r = function (encoder, value) {
    return encoder.pp(this.w2r_1, new DataStreamSequenceSnapshot(value.dataStream, value.firstSequenceId, value.measurements, value.triggerIds, value.syncPoint));
  };
  protoOf(DataStreamSequenceSerializer).nk = function (encoder, value) {
    return this.y2r(encoder, (!(value == null) ? isInterface(value, DataStreamSequence) : false) ? value : THROW_CCE());
  };
  protoOf(DataStreamSequenceSerializer).ok = function (decoder) {
    return decoder.wn(this.w2r_1);
  };
  var DataStreamSequenceSerializer_instance;
  function DataStreamSequenceSerializer_getInstance() {
    if (DataStreamSequenceSerializer_instance == null)
      new DataStreamSequenceSerializer();
    return DataStreamSequenceSerializer_instance;
  }
  function throwIfIllegalInitialization(_this__u8e3s4) {
    var tmp;
    try {
      _this__u8e3s4.throwIfIllegalState();
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalStateException) {
        var ex = $p;
        throw IllegalArgumentException_init_$Create$_0(ex);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function equalsOther(_this__u8e3s4, other) {
    if (_this__u8e3s4 === other)
      return true;
    if (!(!(other == null) ? isInterface(other, DataStreamSequence) : false))
      return false;
    return equals(toList(_this__u8e3s4), toList(other));
  }
  function Companion_3() {
    Companion_instance_4 = this;
    this.z2r_1 = new ApiVersion(1, 1);
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function Companion_4() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function $serializer_2() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.DataStreamStatus', this, 3);
    tmp0_serialDesc.pv('dataStream', false);
    tmp0_serialDesc.pv('lastSequenceId', false);
    tmp0_serialDesc.pv('isOpen', false);
    this.a2s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).b2s = function (encoder, value) {
    var tmp0_desc = this.a2s_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, $serializer_getInstance(), value.dataStream);
    tmp1_output.qp(tmp0_desc, 1, LongSerializer_getInstance(), value.lastSequenceId);
    tmp1_output.ep(tmp0_desc, 2, value.isOpen);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_2).nk = function (encoder, value) {
    return this.b2s(encoder, value instanceof DataStreamStatus ? value : THROW_CCE());
  };
  protoOf($serializer_2).ok = function (decoder) {
    var tmp0_desc = this.a2s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_input = decoder.xn(tmp0_desc);
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.lo(tmp0_desc, 1, LongSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.lo(tmp0_desc, 1, LongSerializer_getInstance(), tmp5_local1);
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
    return DataStreamStatus_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_2).mk = function () {
    return this.a2s_1;
  };
  protoOf($serializer_2).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance(), get_nullable(LongSerializer_getInstance()), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_2();
    return $serializer_instance_1;
  }
  function DataStreamStatus_init_$Init$(seen0, dataStream, lastSequenceId, isOpen, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_1().a2s_1);
    }
    $this.dataStream = dataStream;
    $this.lastSequenceId = lastSequenceId;
    $this.isOpen = isOpen;
    return $this;
  }
  function DataStreamStatus_init_$Create$(seen0, dataStream, lastSequenceId, isOpen, serializationConstructorMarker) {
    return DataStreamStatus_init_$Init$(seen0, dataStream, lastSequenceId, isOpen, serializationConstructorMarker, objectCreate(protoOf(DataStreamStatus)));
  }
  function DataStreamStatus(dataStream, lastSequenceId, isOpen) {
    this.dataStream = dataStream;
    this.lastSequenceId = lastSequenceId;
    this.isOpen = isOpen;
  }
  protoOf(DataStreamStatus).k2r = function () {
    return this.dataStream;
  };
  protoOf(DataStreamStatus).c2s = function () {
    return this.lastSequenceId;
  };
  protoOf(DataStreamStatus).d2s = function () {
    return this.isOpen;
  };
  protoOf(DataStreamStatus).sd = function () {
    return this.dataStream;
  };
  protoOf(DataStreamStatus).td = function () {
    return this.lastSequenceId;
  };
  protoOf(DataStreamStatus).m1j = function () {
    return this.isOpen;
  };
  protoOf(DataStreamStatus).e2s = function (dataStream, lastSequenceId, isOpen) {
    return new DataStreamStatus(dataStream, lastSequenceId, isOpen);
  };
  protoOf(DataStreamStatus).copy = function (dataStream, lastSequenceId, isOpen, $super) {
    dataStream = dataStream === VOID ? this.dataStream : dataStream;
    lastSequenceId = lastSequenceId === VOID ? this.lastSequenceId : lastSequenceId;
    isOpen = isOpen === VOID ? this.isOpen : isOpen;
    return $super === VOID ? this.e2s(dataStream, lastSequenceId, isOpen) : $super.e2s.call(this, dataStream, lastSequenceId, isOpen);
  };
  protoOf(DataStreamStatus).toString = function () {
    return 'DataStreamStatus(dataStream=' + this.dataStream.toString() + ', lastSequenceId=' + toString_0(this.lastSequenceId) + ', isOpen=' + this.isOpen + ')';
  };
  protoOf(DataStreamStatus).hashCode = function () {
    var result = this.dataStream.hashCode();
    result = imul(result, 31) + (this.lastSequenceId == null ? 0 : getBigIntHashCode(this.lastSequenceId)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isOpen) | 0;
    return result;
  };
  protoOf(DataStreamStatus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataStreamStatus))
      return false;
    if (!this.dataStream.equals(other.dataStream))
      return false;
    if (!(this.lastSequenceId == other.lastSequenceId))
      return false;
    if (!(this.isOpen === other.isOpen))
      return false;
    return true;
  };
  function Companion_5() {
  }
  protoOf(Companion_5).fromDataStreamId = function (dataStream) {
    return new ExpectedDataStream(dataStream.deviceRoleName, dataStream.dataType);
  };
  protoOf(Companion_5).i18 = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function $serializer_3() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.DataStreamsConfiguration.ExpectedDataStream', this, 2);
    tmp0_serialDesc.pv('deviceRoleName', false);
    tmp0_serialDesc.pv('dataType', false);
    this.f2s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).g2s = function (encoder, value) {
    var tmp0_desc = this.f2s_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.mp(tmp0_desc, 0, value.deviceRoleName);
    tmp1_output.op(tmp0_desc, 1, NamespacedIdSerializer_getInstance(), value.dataType);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_3).nk = function (encoder, value) {
    return this.g2s(encoder, value instanceof ExpectedDataStream ? value : THROW_CCE());
  };
  protoOf($serializer_3).ok = function (decoder) {
    var tmp0_desc = this.f2s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.ho(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.ho(tmp0_desc, 0);
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
    return ExpectedDataStream_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).mk = function () {
    return this.f2s_1;
  };
  protoOf($serializer_3).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), NamespacedIdSerializer_getInstance()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_3();
    return $serializer_instance_2;
  }
  function ExpectedDataStream_init_$Init$(seen0, deviceRoleName, dataType, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_2().f2s_1);
    }
    $this.deviceRoleName = deviceRoleName;
    $this.dataType = dataType;
    return $this;
  }
  function ExpectedDataStream_init_$Create$(seen0, deviceRoleName, dataType, serializationConstructorMarker) {
    return ExpectedDataStream_init_$Init$(seen0, deviceRoleName, dataType, serializationConstructorMarker, objectCreate(protoOf(ExpectedDataStream)));
  }
  function DataStreamsConfiguration$Companion$$childSerializers$_anonymous__l91kyr() {
    return new LinkedHashSetSerializer($serializer_getInstance_2());
  }
  function ExpectedDataStream(deviceRoleName, dataType) {
    this.deviceRoleName = deviceRoleName;
    this.dataType = dataType;
  }
  protoOf(ExpectedDataStream).o2i = function () {
    return this.deviceRoleName;
  };
  protoOf(ExpectedDataStream).m1w = function () {
    return this.dataType;
  };
  protoOf(ExpectedDataStream).sd = function () {
    return this.deviceRoleName;
  };
  protoOf(ExpectedDataStream).td = function () {
    return this.dataType;
  };
  protoOf(ExpectedDataStream).h2s = function (deviceRoleName, dataType) {
    return new ExpectedDataStream(deviceRoleName, dataType);
  };
  protoOf(ExpectedDataStream).copy = function (deviceRoleName, dataType, $super) {
    deviceRoleName = deviceRoleName === VOID ? this.deviceRoleName : deviceRoleName;
    dataType = dataType === VOID ? this.dataType : dataType;
    return $super === VOID ? this.h2s(deviceRoleName, dataType) : $super.h2s.call(this, deviceRoleName, dataType);
  };
  protoOf(ExpectedDataStream).toString = function () {
    return 'ExpectedDataStream(deviceRoleName=' + this.deviceRoleName + ', dataType=' + this.dataType.toString() + ')';
  };
  protoOf(ExpectedDataStream).hashCode = function () {
    var result = getStringHashCode(this.deviceRoleName);
    result = imul(result, 31) + this.dataType.hashCode() | 0;
    return result;
  };
  protoOf(ExpectedDataStream).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExpectedDataStream))
      return false;
    if (!(this.deviceRoleName === other.deviceRoleName))
      return false;
    if (!this.dataType.equals(other.dataType))
      return false;
    return true;
  };
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i2s_1 = [null, lazy(tmp_0, DataStreamsConfiguration$Companion$$childSerializers$_anonymous__l91kyr)];
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function $serializer_4() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.DataStreamsConfiguration', this, 2);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('expectedDataStreams', false);
    this.j2s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).k2s = function (encoder, value) {
    var tmp0_desc = this.j2s_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().i2s_1;
    tmp1_output.op(tmp0_desc, 0, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.expectedDataStreams);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_4).nk = function (encoder, value) {
    return this.k2s(encoder, value instanceof DataStreamsConfiguration ? value : THROW_CCE());
  };
  protoOf($serializer_4).ok = function (decoder) {
    var tmp0_desc = this.j2s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_8().i2s_1;
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
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
    return DataStreamsConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).mk = function () {
    return this.j2s_1;
  };
  protoOf($serializer_4).ew = function () {
    var tmp0_cached = Companion_getInstance_8().i2s_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1].s2()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_4();
    return $serializer_instance_3;
  }
  function DataStreamsConfiguration_init_$Init$(seen0, studyDeploymentId, expectedDataStreams, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().j2s_1);
    }
    $this.studyDeploymentId = studyDeploymentId;
    $this.expectedDataStreams = expectedDataStreams;
    return $this;
  }
  function DataStreamsConfiguration_init_$Create$(seen0, studyDeploymentId, expectedDataStreams, serializationConstructorMarker) {
    return DataStreamsConfiguration_init_$Init$(seen0, studyDeploymentId, expectedDataStreams, serializationConstructorMarker, objectCreate(protoOf(DataStreamsConfiguration)));
  }
  function DataStreamsConfiguration(studyDeploymentId, expectedDataStreams) {
    Companion_getInstance_8();
    this.studyDeploymentId = studyDeploymentId;
    this.expectedDataStreams = expectedDataStreams;
  }
  protoOf(DataStreamsConfiguration).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(DataStreamsConfiguration).l2s = function () {
    return this.expectedDataStreams;
  };
  protoOf(DataStreamsConfiguration).m2s = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.expectedDataStreams;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.r();
    while (_iterator__ex2g4s.s()) {
      var item = _iterator__ex2g4s.t();
      var tmp$ret$2 = new DataStreamId(this.studyDeploymentId, item.deviceRoleName, item.dataType);
      destination.y(tmp$ret$2);
    }
    return toSet(destination);
  };
  protoOf(DataStreamsConfiguration).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(DataStreamsConfiguration).td = function () {
    return this.expectedDataStreams;
  };
  protoOf(DataStreamsConfiguration).n2s = function (studyDeploymentId, expectedDataStreams) {
    return new DataStreamsConfiguration(studyDeploymentId, expectedDataStreams);
  };
  protoOf(DataStreamsConfiguration).copy = function (studyDeploymentId, expectedDataStreams, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    expectedDataStreams = expectedDataStreams === VOID ? this.expectedDataStreams : expectedDataStreams;
    return $super === VOID ? this.n2s(studyDeploymentId, expectedDataStreams) : $super.n2s.call(this, studyDeploymentId, expectedDataStreams);
  };
  protoOf(DataStreamsConfiguration).toString = function () {
    return 'DataStreamsConfiguration(studyDeploymentId=' + this.studyDeploymentId.toString() + ', expectedDataStreams=' + toString(this.expectedDataStreams) + ')';
  };
  protoOf(DataStreamsConfiguration).hashCode = function () {
    var result = this.studyDeploymentId.hashCode();
    result = imul(result, 31) + hashCode(this.expectedDataStreams) | 0;
    return result;
  };
  protoOf(DataStreamsConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataStreamsConfiguration))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    if (!equals(this.expectedDataStreams, other.expectedDataStreams))
      return false;
    return true;
  };
  function Companion_7() {
  }
  protoOf(Companion_7).m20 = function (typeSerial0) {
    return MeasurementSerializer_getInstance();
  };
  protoOf(Companion_7).pw = function (typeParamsSerializers) {
    return this.m20(typeParamsSerializers[0]);
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function Measurement(sensorStartTime, sensorEndTime, dataType, data) {
    this.sensorStartTime = sensorStartTime;
    this.sensorEndTime = sensorEndTime;
    this.dataType = dataType;
    this.data = data;
    if (!(this.sensorEndTime == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.sensorEndTime >= this.sensorStartTime)) {
        var message = 'If set, sensorEndTime needs to lie after sensorStartTime.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(Measurement).o2s = function () {
    return this.sensorStartTime;
  };
  protoOf(Measurement).p2s = function () {
    return this.sensorEndTime;
  };
  protoOf(Measurement).m1w = function () {
    return this.dataType;
  };
  protoOf(Measurement).x1h = function () {
    return this.data;
  };
  protoOf(Measurement).getDataTimeType = function () {
    return this.sensorEndTime == null ? DataTimeType_POINT_getInstance() : DataTimeType_TIME_SPAN_getInstance();
  };
  protoOf(Measurement).synchronize = function (syncPoint) {
    return this.copy(applyToTimestamp(syncPoint, this.sensorStartTime), this.sensorEndTime == null ? this.sensorEndTime : applyToTimestamp(syncPoint, this.sensorEndTime));
  };
  protoOf(Measurement).sd = function () {
    return this.sensorStartTime;
  };
  protoOf(Measurement).td = function () {
    return this.sensorEndTime;
  };
  protoOf(Measurement).m1j = function () {
    return this.dataType;
  };
  protoOf(Measurement).l1k = function () {
    return this.data;
  };
  protoOf(Measurement).q2s = function (sensorStartTime, sensorEndTime, dataType, data) {
    return new Measurement(sensorStartTime, sensorEndTime, dataType, data);
  };
  protoOf(Measurement).copy = function (sensorStartTime, sensorEndTime, dataType, data, $super) {
    sensorStartTime = sensorStartTime === VOID ? this.sensorStartTime : sensorStartTime;
    sensorEndTime = sensorEndTime === VOID ? this.sensorEndTime : sensorEndTime;
    dataType = dataType === VOID ? this.dataType : dataType;
    data = data === VOID ? this.data : data;
    return $super === VOID ? this.q2s(sensorStartTime, sensorEndTime, dataType, data) : $super.q2s.call(this, sensorStartTime, sensorEndTime, dataType, data);
  };
  protoOf(Measurement).toString = function () {
    return 'Measurement(sensorStartTime=' + this.sensorStartTime.toString() + ', sensorEndTime=' + toString_0(this.sensorEndTime) + ', dataType=' + this.dataType.toString() + ', data=' + toString(this.data) + ')';
  };
  protoOf(Measurement).hashCode = function () {
    var result = getBigIntHashCode(this.sensorStartTime);
    result = imul(result, 31) + (this.sensorEndTime == null ? 0 : getBigIntHashCode(this.sensorEndTime)) | 0;
    result = imul(result, 31) + this.dataType.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.data) | 0;
    return result;
  };
  protoOf(Measurement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Measurement))
      return false;
    if (!(this.sensorStartTime === other.sensorStartTime))
      return false;
    if (!(this.sensorEndTime == other.sensorEndTime))
      return false;
    if (!this.dataType.equals(other.dataType))
      return false;
    if (!equals(this.data, other.data))
      return false;
    return true;
  };
  function MeasurementSerializer$Surrogate$Companion$$childSerializers$_anonymous__ja5gmg() {
    var tmp = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$0);
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r2s_1 = [null, null, lazy(tmp_0, MeasurementSerializer$Surrogate$Companion$$childSerializers$_anonymous__ja5gmg)];
  }
  protoOf(Companion_8).i18 = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function $serializer_5() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.MeasurementSerializer.Surrogate', this, 3);
    tmp0_serialDesc.pv('sensorStartTime', false);
    tmp0_serialDesc.pv('sensorEndTime', true);
    tmp0_serialDesc.pv('data', false);
    this.s2s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).t2s = function (encoder, value) {
    var tmp0_desc = this.s2s_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().r2s_1;
    tmp1_output.ip(tmp0_desc, 0, value.u2s_1);
    if (tmp1_output.up(tmp0_desc, 1) ? true : !(value.v2s_1 == null)) {
      tmp1_output.qp(tmp0_desc, 1, LongSerializer_getInstance(), value.v2s_1);
    }
    tmp1_output.op(tmp0_desc, 2, tmp2_cached[2].s2(), value.w2s_1);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_5).nk = function (encoder, value) {
    return this.t2s(encoder, value instanceof Surrogate ? value : THROW_CCE());
  };
  protoOf($serializer_5).ok = function (decoder) {
    var tmp0_desc = this.s2s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0n;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xn(tmp0_desc);
    var tmp8_cached = Companion_getInstance_10().r2s_1;
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.do(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.lo(tmp0_desc, 1, LongSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.do(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.lo(tmp0_desc, 1, LongSerializer_getInstance(), tmp5_local1);
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
    return Surrogate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_5).mk = function () {
    return this.s2s_1;
  };
  protoOf($serializer_5).ew = function () {
    var tmp0_cached = Companion_getInstance_10().r2s_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [LongSerializer_getInstance(), get_nullable(LongSerializer_getInstance()), tmp0_cached[2].s2()];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_5();
    return $serializer_instance_4;
  }
  function Surrogate_init_$Init$(seen0, sensorStartTime, sensorEndTime, data, serializationConstructorMarker, $this) {
    if (!(5 === (5 & seen0))) {
      throwMissingFieldException(seen0, 5, $serializer_getInstance_4().s2s_1);
    }
    $this.u2s_1 = sensorStartTime;
    if (0 === (seen0 & 2))
      $this.v2s_1 = null;
    else
      $this.v2s_1 = sensorEndTime;
    $this.w2s_1 = data;
    return $this;
  }
  function Surrogate_init_$Create$(seen0, sensorStartTime, sensorEndTime, data, serializationConstructorMarker) {
    return Surrogate_init_$Init$(seen0, sensorStartTime, sensorEndTime, data, serializationConstructorMarker, objectCreate(protoOf(Surrogate)));
  }
  function Surrogate(sensorStartTime, sensorEndTime, data) {
    Companion_getInstance_10();
    sensorEndTime = sensorEndTime === VOID ? null : sensorEndTime;
    this.u2s_1 = sensorStartTime;
    this.v2s_1 = sensorEndTime;
    this.w2s_1 = data;
  }
  function MeasurementSerializer() {
    MeasurementSerializer_instance = this;
    this.x2s_1 = Companion_getInstance_10().i18().mk();
  }
  protoOf(MeasurementSerializer).mk = function () {
    return this.x2s_1;
  };
  protoOf(MeasurementSerializer).y2s = function (encoder, value) {
    var surrogate = new Surrogate(value.sensorStartTime, value.sensorEndTime, value.data);
    encoder.pp(Companion_getInstance_10().i18(), surrogate);
  };
  protoOf(MeasurementSerializer).nk = function (encoder, value) {
    return this.y2s(encoder, value instanceof Measurement ? value : THROW_CCE());
  };
  protoOf(MeasurementSerializer).ok = function (decoder) {
    var surrogate = decoder.wn(Companion_getInstance_10().i18());
    var data = surrogate.w2s_1;
    var tmp;
    if (data instanceof CustomData) {
      tmp = Companion_instance.fromString(data.a23_1);
    } else {
      tmp = getDataType(getKClassFromExpression(data));
    }
    var dataType = tmp;
    return new Measurement(surrogate.u2s_1, surrogate.v2s_1, dataType, data);
  };
  var MeasurementSerializer_instance;
  function MeasurementSerializer_getInstance() {
    if (MeasurementSerializer_instance == null)
      new MeasurementSerializer();
    return MeasurementSerializer_instance;
  }
  function Companion_9() {
    Companion_instance_10 = this;
    this.UnixEpoch = new SyncPoint(Companion_getInstance_0().dh(0n), 0n);
  }
  protoOf(Companion_9).z2s = function () {
    return this.UnixEpoch;
  };
  protoOf(Companion_9).i18 = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function $serializer_6() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.SyncPoint', this, 3);
    tmp0_serialDesc.pv('synchronizedOn', false);
    tmp0_serialDesc.pv('sensorTimestampAtSyncPoint', false);
    tmp0_serialDesc.pv('relativeClockSpeed', false);
    this.a2t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).b2t = function (encoder, value) {
    var tmp0_desc = this.a2t_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, InstantSerializer_getInstance(), value.synchronizedOn);
    tmp1_output.ip(tmp0_desc, 1, value.sensorTimestampAtSyncPoint);
    tmp1_output.kp(tmp0_desc, 2, value.relativeClockSpeed);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_6).nk = function (encoder, value) {
    return this.b2t(encoder, value instanceof SyncPoint ? value : THROW_CCE());
  };
  protoOf($serializer_6).ok = function (decoder) {
    var tmp0_desc = this.a2t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0n;
    var tmp6_local2 = 0.0;
    var tmp7_input = decoder.xn(tmp0_desc);
    if (tmp7_input.no()) {
      tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, InstantSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.do(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.fo(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.oo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.jo(tmp0_desc, 0, InstantSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.do(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.fo(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return SyncPoint_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).mk = function () {
    return this.a2t_1;
  };
  protoOf($serializer_6).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantSerializer_getInstance(), LongSerializer_getInstance(), DoubleSerializer_getInstance()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_6();
    return $serializer_instance_5;
  }
  function SyncPoint_init_$Init$(seen0, synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_5().a2t_1);
    }
    $this.synchronizedOn = synchronizedOn;
    $this.sensorTimestampAtSyncPoint = sensorTimestampAtSyncPoint;
    $this.relativeClockSpeed = relativeClockSpeed;
    return $this;
  }
  function SyncPoint_init_$Create$(seen0, synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed, serializationConstructorMarker) {
    return SyncPoint_init_$Init$(seen0, synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed, serializationConstructorMarker, objectCreate(protoOf(SyncPoint)));
  }
  function SyncPoint(synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed) {
    Companion_getInstance_11();
    relativeClockSpeed = relativeClockSpeed === VOID ? 1.0 : relativeClockSpeed;
    this.synchronizedOn = synchronizedOn;
    this.sensorTimestampAtSyncPoint = sensorTimestampAtSyncPoint;
    this.relativeClockSpeed = relativeClockSpeed;
  }
  protoOf(SyncPoint).c2t = function () {
    return this.synchronizedOn;
  };
  protoOf(SyncPoint).d2t = function () {
    return this.sensorTimestampAtSyncPoint;
  };
  protoOf(SyncPoint).e2t = function () {
    return this.relativeClockSpeed;
  };
  protoOf(SyncPoint).sd = function () {
    return this.synchronizedOn;
  };
  protoOf(SyncPoint).td = function () {
    return this.sensorTimestampAtSyncPoint;
  };
  protoOf(SyncPoint).m1j = function () {
    return this.relativeClockSpeed;
  };
  protoOf(SyncPoint).f2t = function (synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed) {
    return new SyncPoint(synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed);
  };
  protoOf(SyncPoint).copy = function (synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed, $super) {
    synchronizedOn = synchronizedOn === VOID ? this.synchronizedOn : synchronizedOn;
    sensorTimestampAtSyncPoint = sensorTimestampAtSyncPoint === VOID ? this.sensorTimestampAtSyncPoint : sensorTimestampAtSyncPoint;
    relativeClockSpeed = relativeClockSpeed === VOID ? this.relativeClockSpeed : relativeClockSpeed;
    return $super === VOID ? this.f2t(synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed) : $super.f2t.call(this, synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed);
  };
  protoOf(SyncPoint).toString = function () {
    return 'SyncPoint(synchronizedOn=' + this.synchronizedOn.toString() + ', sensorTimestampAtSyncPoint=' + this.sensorTimestampAtSyncPoint.toString() + ', relativeClockSpeed=' + this.relativeClockSpeed + ')';
  };
  protoOf(SyncPoint).hashCode = function () {
    var result = this.synchronizedOn.hashCode();
    result = imul(result, 31) + getBigIntHashCode(this.sensorTimestampAtSyncPoint) | 0;
    result = imul(result, 31) + getNumberHashCode(this.relativeClockSpeed) | 0;
    return result;
  };
  protoOf(SyncPoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SyncPoint))
      return false;
    if (!this.synchronizedOn.equals(other.synchronizedOn))
      return false;
    if (!(this.sensorTimestampAtSyncPoint === other.sensorTimestampAtSyncPoint))
      return false;
    if (!equals(this.relativeClockSpeed, other.relativeClockSpeed))
      return false;
    return true;
  };
  function DataStreamServiceRequest$Companion$serializer$ref(p0) {
    return constructCallableReference(function (p0_0) {
      return p0.j2a(p0_0);
    }, 1, 0, 22, 'serializer', [p0]);
  }
  function Companion_10() {
  }
  var Companion_instance_11;
  function Companion_getInstance_12() {
    return Companion_instance_11;
  }
  function $serializer_7() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest.OpenDataStreams', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('configuration', false);
    this.g2t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).h2t = function (encoder, value) {
    var tmp0_desc = this.g2t_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, $serializer_getInstance_3(), value.configuration);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_7).nk = function (encoder, value) {
    return this.h2t(encoder, value instanceof OpenDataStreams ? value : THROW_CCE());
  };
  protoOf($serializer_7).ok = function (decoder) {
    var tmp0_desc = this.g2t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    if (tmp6_input.no()) {
      tmp4_local0 = tmp6_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, $serializer_getInstance_3(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.jo(tmp0_desc, 1, $serializer_getInstance_3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yn(tmp0_desc);
    return OpenDataStreams_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_7).mk = function () {
    return this.g2t_1;
  };
  protoOf($serializer_7).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), $serializer_getInstance_3()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_7();
    return $serializer_instance_6;
  }
  function OpenDataStreams_init_$Init$(seen0, apiVersion, configuration, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_6().g2t_1);
    }
    DataStreamServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.configuration = configuration;
    return $this;
  }
  function OpenDataStreams_init_$Create$(seen0, apiVersion, configuration, serializationConstructorMarker) {
    return OpenDataStreams_init_$Init$(seen0, apiVersion, configuration, serializationConstructorMarker, objectCreate(protoOf(OpenDataStreams)));
  }
  function Companion_11() {
  }
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function $serializer_8() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest.AppendToDataStreams', this, 3);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    tmp0_serialDesc.pv('batch', false);
    this.j2t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).k2t = function (encoder, value) {
    var tmp0_desc = this.j2t_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.op(tmp0_desc, 2, DataStreamBatchSerializer_getInstance(), value.batch);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_8).nk = function (encoder, value) {
    return this.k2t(encoder, value instanceof AppendToDataStreams ? value : THROW_CCE());
  };
  protoOf($serializer_8).ok = function (decoder) {
    var tmp0_desc = this.j2t_1;
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
      tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, DataStreamBatchSerializer_getInstance(), tmp6_local2);
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
            tmp6_local2 = tmp7_input.jo(tmp0_desc, 2, DataStreamBatchSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yn(tmp0_desc);
    return AppendToDataStreams_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_8).mk = function () {
    return this.j2t_1;
  };
  protoOf($serializer_8).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), DataStreamBatchSerializer_getInstance()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_8();
    return $serializer_instance_7;
  }
  function AppendToDataStreams_init_$Init$(seen0, apiVersion, studyDeploymentId, batch, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_7().j2t_1);
    }
    DataStreamServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    $this.batch = batch;
    return $this;
  }
  function AppendToDataStreams_init_$Create$(seen0, apiVersion, studyDeploymentId, batch, serializationConstructorMarker) {
    return AppendToDataStreams_init_$Init$(seen0, apiVersion, studyDeploymentId, batch, serializationConstructorMarker, objectCreate(protoOf(AppendToDataStreams)));
  }
  function Companion_12() {
  }
  var Companion_instance_13;
  function Companion_getInstance_14() {
    return Companion_instance_13;
  }
  function $serializer_9() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest.GetDataStream', this, 4);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('dataStream', false);
    tmp0_serialDesc.pv('fromSequenceId', false);
    tmp0_serialDesc.pv('toSequenceIdInclusive', true);
    this.m2t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).n2t = function (encoder, value) {
    var tmp0_desc = this.m2t_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, $serializer_getInstance(), value.dataStream);
    tmp1_output.ip(tmp0_desc, 2, value.fromSequenceId);
    if (tmp1_output.up(tmp0_desc, 3) ? true : !(value.toSequenceIdInclusive == null)) {
      tmp1_output.qp(tmp0_desc, 3, LongSerializer_getInstance(), value.toSequenceIdInclusive);
    }
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_9).nk = function (encoder, value) {
    return this.n2t(encoder, value instanceof GetDataStream ? value : THROW_CCE());
  };
  protoOf($serializer_9).ok = function (decoder) {
    var tmp0_desc = this.m2t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xn(tmp0_desc);
    if (tmp8_input.no()) {
      tmp4_local0 = tmp8_input.jo(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.do(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
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
            tmp5_local1 = tmp8_input.jo(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.do(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.lo(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yn(tmp0_desc);
    return GetDataStream_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_9).mk = function () {
    return this.m2t_1;
  };
  protoOf($serializer_9).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), $serializer_getInstance(), LongSerializer_getInstance(), get_nullable(LongSerializer_getInstance())];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_9();
    return $serializer_instance_8;
  }
  function GetDataStream_init_$Init$(seen0, apiVersion, dataStream, fromSequenceId, toSequenceIdInclusive, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_8().m2t_1);
    }
    DataStreamServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.dataStream = dataStream;
    $this.fromSequenceId = fromSequenceId;
    if (0 === (seen0 & 8))
      $this.toSequenceIdInclusive = null;
    else
      $this.toSequenceIdInclusive = toSequenceIdInclusive;
    return $this;
  }
  function GetDataStream_init_$Create$(seen0, apiVersion, dataStream, fromSequenceId, toSequenceIdInclusive, serializationConstructorMarker) {
    return GetDataStream_init_$Init$(seen0, apiVersion, dataStream, fromSequenceId, toSequenceIdInclusive, serializationConstructorMarker, objectCreate(protoOf(GetDataStream)));
  }
  function Companion_13() {
  }
  var Companion_instance_14;
  function Companion_getInstance_15() {
    return Companion_instance_14;
  }
  function $serializer_10() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest.GetDataStreamsStatus', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentId', false);
    this.p2t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).q2t = function (encoder, value) {
    var tmp0_desc = this.p2t_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_10).nk = function (encoder, value) {
    return this.q2t(encoder, value instanceof GetDataStreamsStatus ? value : THROW_CCE());
  };
  protoOf($serializer_10).ok = function (decoder) {
    var tmp0_desc = this.p2t_1;
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
    return GetDataStreamsStatus_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_10).mk = function () {
    return this.p2t_1;
  };
  protoOf($serializer_10).ew = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance()];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_10();
    return $serializer_instance_9;
  }
  function GetDataStreamsStatus_init_$Init$(seen0, apiVersion, studyDeploymentId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_9().p2t_1);
    }
    DataStreamServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    return $this;
  }
  function GetDataStreamsStatus_init_$Create$(seen0, apiVersion, studyDeploymentId, serializationConstructorMarker) {
    return GetDataStreamsStatus_init_$Init$(seen0, apiVersion, studyDeploymentId, serializationConstructorMarker, objectCreate(protoOf(GetDataStreamsStatus)));
  }
  function DataStreamServiceRequest$CloseDataStreams$Companion$$childSerializers$_anonymous__lxph9j() {
    return new LinkedHashSetSerializer(UUIDSerializer_getInstance());
  }
  function Companion_14() {
    Companion_instance_15 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s2t_1 = [null, lazy(tmp_0, DataStreamServiceRequest$CloseDataStreams$Companion$$childSerializers$_anonymous__lxph9j)];
  }
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_14();
    return Companion_instance_15;
  }
  function $serializer_11() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest.CloseDataStreams', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentIds', false);
    this.t2t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).u2t = function (encoder, value) {
    var tmp0_desc = this.t2t_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().s2t_1;
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.studyDeploymentIds);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_11).nk = function (encoder, value) {
    return this.u2t(encoder, value instanceof CloseDataStreams ? value : THROW_CCE());
  };
  protoOf($serializer_11).ok = function (decoder) {
    var tmp0_desc = this.t2t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_16().s2t_1;
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
    return CloseDataStreams_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).mk = function () {
    return this.t2t_1;
  };
  protoOf($serializer_11).ew = function () {
    var tmp0_cached = Companion_getInstance_16().s2t_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), tmp0_cached[1].s2()];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_11();
    return $serializer_instance_10;
  }
  function CloseDataStreams_init_$Init$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_10().t2t_1);
    }
    DataStreamServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentIds = studyDeploymentIds;
    return $this;
  }
  function CloseDataStreams_init_$Create$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker) {
    return CloseDataStreams_init_$Init$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker, objectCreate(protoOf(CloseDataStreams)));
  }
  function DataStreamServiceRequest$RemoveDataStreams$Companion$$childSerializers$_anonymous__zbrjc5() {
    return new LinkedHashSetSerializer(UUIDSerializer_getInstance());
  }
  function Companion_15() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w2t_1 = [null, lazy(tmp_0, DataStreamServiceRequest$RemoveDataStreams$Companion$$childSerializers$_anonymous__zbrjc5)];
  }
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function $serializer_12() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest.RemoveDataStreams', this, 2);
    tmp0_serialDesc.pv('apiVersion', false);
    tmp0_serialDesc.pv('studyDeploymentIds', false);
    this.x2t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).y2t = function (encoder, value) {
    var tmp0_desc = this.x2t_1;
    var tmp1_output = encoder.xn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_17().w2t_1;
    tmp1_output.op(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.op(tmp0_desc, 1, tmp2_cached[1].s2(), value.studyDeploymentIds);
    tmp1_output.yn(tmp0_desc);
  };
  protoOf($serializer_12).nk = function (encoder, value) {
    return this.y2t(encoder, value instanceof RemoveDataStreams ? value : THROW_CCE());
  };
  protoOf($serializer_12).ok = function (decoder) {
    var tmp0_desc = this.x2t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_17().w2t_1;
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
    return RemoveDataStreams_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_12).mk = function () {
    return this.x2t_1;
  };
  protoOf($serializer_12).ew = function () {
    var tmp0_cached = Companion_getInstance_17().w2t_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), tmp0_cached[1].s2()];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_12();
    return $serializer_instance_11;
  }
  function RemoveDataStreams_init_$Init$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_11().x2t_1);
    }
    DataStreamServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentIds = studyDeploymentIds;
    return $this;
  }
  function RemoveDataStreams_init_$Create$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker) {
    return RemoveDataStreams_init_$Init$(seen0, apiVersion, studyDeploymentIds, serializationConstructorMarker, objectCreate(protoOf(RemoveDataStreams)));
  }
  function Serializer() {
    Serializer_instance = this;
    var tmp = this;
    tmp.a2u_1 = ignoreTypeParameters(DataStreamServiceRequest$Companion$serializer$ref(Companion_instance_17));
  }
  protoOf(Serializer).mk = function () {
    return this.a2u_1.mk();
  };
  protoOf(Serializer).b2u = function (encoder, value) {
    this.a2u_1.nk(encoder, value);
  };
  protoOf(Serializer).nk = function (encoder, value) {
    return this.b2u(encoder, value instanceof DataStreamServiceRequest ? value : THROW_CCE());
  };
  protoOf(Serializer).ok = function (decoder) {
    return this.a2u_1.ok(decoder);
  };
  var Serializer_instance;
  function Serializer_getInstance() {
    if (Serializer_instance == null)
      new Serializer();
    return Serializer_instance;
  }
  function OpenDataStreams(configuration) {
    DataStreamServiceRequest.call(this);
    this.configuration = configuration;
  }
  protoOf(OpenDataStreams).m2d = function () {
    return this.configuration;
  };
  protoOf(OpenDataStreams).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Unit), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(OpenDataStreams).sd = function () {
    return this.configuration;
  };
  protoOf(OpenDataStreams).c2u = function (configuration) {
    return new OpenDataStreams(configuration);
  };
  protoOf(OpenDataStreams).copy = function (configuration, $super) {
    configuration = configuration === VOID ? this.configuration : configuration;
    return $super === VOID ? this.c2u(configuration) : $super.c2u.call(this, configuration);
  };
  protoOf(OpenDataStreams).toString = function () {
    return 'OpenDataStreams(configuration=' + this.configuration.toString() + ')';
  };
  protoOf(OpenDataStreams).hashCode = function () {
    return this.configuration.hashCode();
  };
  protoOf(OpenDataStreams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpenDataStreams))
      return false;
    if (!this.configuration.equals(other.configuration))
      return false;
    return true;
  };
  function AppendToDataStreams(studyDeploymentId, batch) {
    DataStreamServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
    this.batch = batch;
  }
  protoOf(AppendToDataStreams).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(AppendToDataStreams).e2u = function () {
    return this.batch;
  };
  protoOf(AppendToDataStreams).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Unit), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(AppendToDataStreams).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(AppendToDataStreams).td = function () {
    return this.batch;
  };
  protoOf(AppendToDataStreams).f2u = function (studyDeploymentId, batch) {
    return new AppendToDataStreams(studyDeploymentId, batch);
  };
  protoOf(AppendToDataStreams).copy = function (studyDeploymentId, batch, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    batch = batch === VOID ? this.batch : batch;
    return $super === VOID ? this.f2u(studyDeploymentId, batch) : $super.f2u.call(this, studyDeploymentId, batch);
  };
  protoOf(AppendToDataStreams).toString = function () {
    return 'AppendToDataStreams(studyDeploymentId=' + this.studyDeploymentId.toString() + ', batch=' + toString(this.batch) + ')';
  };
  protoOf(AppendToDataStreams).hashCode = function () {
    var result = this.studyDeploymentId.hashCode();
    result = imul(result, 31) + hashCode(this.batch) | 0;
    return result;
  };
  protoOf(AppendToDataStreams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AppendToDataStreams))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    if (!equals(this.batch, other.batch))
      return false;
    return true;
  };
  function GetDataStream(dataStream, fromSequenceId, toSequenceIdInclusive) {
    toSequenceIdInclusive = toSequenceIdInclusive === VOID ? null : toSequenceIdInclusive;
    DataStreamServiceRequest.call(this);
    this.dataStream = dataStream;
    this.fromSequenceId = fromSequenceId;
    this.toSequenceIdInclusive = toSequenceIdInclusive;
  }
  protoOf(GetDataStream).k2r = function () {
    return this.dataStream;
  };
  protoOf(GetDataStream).g2u = function () {
    return this.fromSequenceId;
  };
  protoOf(GetDataStream).h2u = function () {
    return this.toSequenceIdInclusive;
  };
  protoOf(GetDataStream).getResponseSerializer = function () {
    return DataStreamBatchSerializer_getInstance();
  };
  protoOf(GetDataStream).sd = function () {
    return this.dataStream;
  };
  protoOf(GetDataStream).td = function () {
    return this.fromSequenceId;
  };
  protoOf(GetDataStream).m1j = function () {
    return this.toSequenceIdInclusive;
  };
  protoOf(GetDataStream).i2u = function (dataStream, fromSequenceId, toSequenceIdInclusive) {
    return new GetDataStream(dataStream, fromSequenceId, toSequenceIdInclusive);
  };
  protoOf(GetDataStream).copy = function (dataStream, fromSequenceId, toSequenceIdInclusive, $super) {
    dataStream = dataStream === VOID ? this.dataStream : dataStream;
    fromSequenceId = fromSequenceId === VOID ? this.fromSequenceId : fromSequenceId;
    toSequenceIdInclusive = toSequenceIdInclusive === VOID ? this.toSequenceIdInclusive : toSequenceIdInclusive;
    return $super === VOID ? this.i2u(dataStream, fromSequenceId, toSequenceIdInclusive) : $super.i2u.call(this, dataStream, fromSequenceId, toSequenceIdInclusive);
  };
  protoOf(GetDataStream).toString = function () {
    return 'GetDataStream(dataStream=' + this.dataStream.toString() + ', fromSequenceId=' + this.fromSequenceId.toString() + ', toSequenceIdInclusive=' + toString_0(this.toSequenceIdInclusive) + ')';
  };
  protoOf(GetDataStream).hashCode = function () {
    var result = this.dataStream.hashCode();
    result = imul(result, 31) + getBigIntHashCode(this.fromSequenceId) | 0;
    result = imul(result, 31) + (this.toSequenceIdInclusive == null ? 0 : getBigIntHashCode(this.toSequenceIdInclusive)) | 0;
    return result;
  };
  protoOf(GetDataStream).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetDataStream))
      return false;
    if (!this.dataStream.equals(other.dataStream))
      return false;
    if (!(this.fromSequenceId === other.fromSequenceId))
      return false;
    if (!(this.toSequenceIdInclusive == other.toSequenceIdInclusive))
      return false;
    return true;
  };
  function GetDataStreamsStatus(studyDeploymentId) {
    DataStreamServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
  }
  protoOf(GetDataStreamsStatus).e2f = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetDataStreamsStatus).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(DataStreamStatus), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(GetDataStreamsStatus).sd = function () {
    return this.studyDeploymentId;
  };
  protoOf(GetDataStreamsStatus).u2b = function (studyDeploymentId) {
    return new GetDataStreamsStatus(studyDeploymentId);
  };
  protoOf(GetDataStreamsStatus).copy = function (studyDeploymentId, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    return $super === VOID ? this.u2b(studyDeploymentId) : $super.u2b.call(this, studyDeploymentId);
  };
  protoOf(GetDataStreamsStatus).toString = function () {
    return 'GetDataStreamsStatus(studyDeploymentId=' + this.studyDeploymentId.toString() + ')';
  };
  protoOf(GetDataStreamsStatus).hashCode = function () {
    return this.studyDeploymentId.hashCode();
  };
  protoOf(GetDataStreamsStatus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetDataStreamsStatus))
      return false;
    if (!this.studyDeploymentId.equals(other.studyDeploymentId))
      return false;
    return true;
  };
  function CloseDataStreams(studyDeploymentIds) {
    Companion_getInstance_16();
    DataStreamServiceRequest.call(this);
    this.studyDeploymentIds = studyDeploymentIds;
  }
  protoOf(CloseDataStreams).m2i = function () {
    return this.studyDeploymentIds;
  };
  protoOf(CloseDataStreams).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Unit), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(CloseDataStreams).sd = function () {
    return this.studyDeploymentIds;
  };
  protoOf(CloseDataStreams).n2i = function (studyDeploymentIds) {
    return new CloseDataStreams(studyDeploymentIds);
  };
  protoOf(CloseDataStreams).copy = function (studyDeploymentIds, $super) {
    studyDeploymentIds = studyDeploymentIds === VOID ? this.studyDeploymentIds : studyDeploymentIds;
    return $super === VOID ? this.n2i(studyDeploymentIds) : $super.n2i.call(this, studyDeploymentIds);
  };
  protoOf(CloseDataStreams).toString = function () {
    return 'CloseDataStreams(studyDeploymentIds=' + toString(this.studyDeploymentIds) + ')';
  };
  protoOf(CloseDataStreams).hashCode = function () {
    return hashCode(this.studyDeploymentIds);
  };
  protoOf(CloseDataStreams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseDataStreams))
      return false;
    if (!equals(this.studyDeploymentIds, other.studyDeploymentIds))
      return false;
    return true;
  };
  function RemoveDataStreams(studyDeploymentIds) {
    Companion_getInstance_17();
    DataStreamServiceRequest.call(this);
    this.studyDeploymentIds = studyDeploymentIds;
  }
  protoOf(RemoveDataStreams).m2i = function () {
    return this.studyDeploymentIds;
  };
  protoOf(RemoveDataStreams).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UUID), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(RemoveDataStreams).sd = function () {
    return this.studyDeploymentIds;
  };
  protoOf(RemoveDataStreams).n2i = function (studyDeploymentIds) {
    return new RemoveDataStreams(studyDeploymentIds);
  };
  protoOf(RemoveDataStreams).copy = function (studyDeploymentIds, $super) {
    studyDeploymentIds = studyDeploymentIds === VOID ? this.studyDeploymentIds : studyDeploymentIds;
    return $super === VOID ? this.n2i(studyDeploymentIds) : $super.n2i.call(this, studyDeploymentIds);
  };
  protoOf(RemoveDataStreams).toString = function () {
    return 'RemoveDataStreams(studyDeploymentIds=' + toString(this.studyDeploymentIds) + ')';
  };
  protoOf(RemoveDataStreams).hashCode = function () {
    return hashCode(this.studyDeploymentIds);
  };
  protoOf(RemoveDataStreams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RemoveDataStreams))
      return false;
    if (!equals(this.studyDeploymentIds, other.studyDeploymentIds))
      return false;
    return true;
  };
  function Companion_16() {
  }
  protoOf(Companion_16).j2a = function (typeSerial0) {
    var tmp = getKClass(DataStreamServiceRequest);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(AppendToDataStreams), getKClass(CloseDataStreams), getKClass(GetDataStream), getKClass(GetDataStreamsStatus), getKClass(OpenDataStreams), getKClass(RemoveDataStreams)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_7(), $serializer_getInstance_10(), $serializer_getInstance_8(), $serializer_getInstance_9(), $serializer_getInstance_6(), $serializer_getInstance_11()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$6);
  };
  protoOf(Companion_16).pw = function (typeParamsSerializers) {
    return this.j2a(typeParamsSerializers[0]);
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    return Companion_instance_17;
  }
  function DataStreamServiceRequest_init_$Init$(seen0, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.d2u_1 = apiVersion;
    return $this;
  }
  function DataStreamServiceRequest() {
    ApplicationServiceRequest.call(this);
    this.d2u_1 = Companion_getInstance_5().z2r_1;
  }
  protoOf(DataStreamServiceRequest).g26 = function () {
    return this.d2u_1;
  };
  function getDataType(dataKlass) {
    var tmp;
    try {
      tmp = Companion_instance.fromString(serializer_0(dataKlass).mk().nl());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof SerializationException) {
        var _unused_var__etf5q3 = $p;
        throw IllegalArgumentException_init_$Create$('"' + toString(dataKlass) + '" isn\'t a serializable Data class.');
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function applyToTimestamp(_this__u8e3s4, timestamp) {
    var bigClock = Big(_this__u8e3s4.relativeClockSpeed);
    var bigOffset = Big(subtract(timestamp, _this__u8e3s4.sensorTimestampAtSyncPoint));
    var tmp = bigClock.times(bigOffset).toFixed();
    var excludingEpoch = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    return add(toLong(excludingEpoch), toEpochMicroseconds(_this__u8e3s4.synchronizedOn));
  }
  //region block: post-declaration
  protoOf(MutableDataStreamBatch).r = iterator;
  protoOf(MutableDataStreamBatch).isEmpty = isEmpty;
  protoOf(MutableDataStreamBatch).getDataStreamPoints = getDataStreamPoints;
  defineProp(protoOf(MutableDataStreamBatch), 'sequences', function () {
    return this.o2q();
  });
  protoOf($serializer).fw = typeParametersSerializers;
  defineProp(protoOf(DataStreamPoint), 'dataStream', protoOf(DataStreamPoint).k2r);
  protoOf(MutableDataStreamSequence).mb = get_range;
  protoOf(MutableDataStreamSequence).throwIfIllegalState = throwIfIllegalState;
  protoOf(MutableDataStreamSequence).r = iterator_0;
  protoOf(MutableDataStreamSequence).isImmediatelyFollowedBy = isImmediatelyFollowedBy;
  protoOf(MutableDataStreamSequence).toMutableDataStreamSequence = toMutableDataStreamSequence;
  defineProp(protoOf(MutableDataStreamSequence), 'dataStream', function () {
    return this.k2r();
  });
  defineProp(protoOf(MutableDataStreamSequence), 'firstSequenceId', function () {
    return this.m2r();
  });
  defineProp(protoOf(MutableDataStreamSequence), 'syncPoint', function () {
    return this.j2r();
  });
  defineProp(protoOf(MutableDataStreamSequence), 'triggerIds', function () {
    return this.i2r();
  });
  defineProp(protoOf(MutableDataStreamSequence), 'measurements', function () {
    return this.n2r();
  });
  defineProp(protoOf(MutableDataStreamSequence), 'range', function () {
    return this.mb();
  });
  protoOf($serializer_1).fw = typeParametersSerializers;
  protoOf(DataStreamSequenceSnapshot).mb = get_range;
  protoOf(DataStreamSequenceSnapshot).throwIfIllegalState = throwIfIllegalState;
  protoOf(DataStreamSequenceSnapshot).r = iterator_0;
  protoOf(DataStreamSequenceSnapshot).isImmediatelyFollowedBy = isImmediatelyFollowedBy;
  protoOf(DataStreamSequenceSnapshot).toMutableDataStreamSequence = toMutableDataStreamSequence;
  defineProp(protoOf(DataStreamSequenceSnapshot), 'dataStream', function () {
    return this.k2r();
  });
  defineProp(protoOf(DataStreamSequenceSnapshot), 'firstSequenceId', function () {
    return this.m2r();
  });
  defineProp(protoOf(DataStreamSequenceSnapshot), 'measurements', function () {
    return this.n2r();
  });
  defineProp(protoOf(DataStreamSequenceSnapshot), 'triggerIds', function () {
    return this.i2r();
  });
  defineProp(protoOf(DataStreamSequenceSnapshot), 'syncPoint', function () {
    return this.j2r();
  });
  defineProp(protoOf(DataStreamSequenceSnapshot), 'range', function () {
    return this.mb();
  });
  protoOf($serializer_2).fw = typeParametersSerializers;
  protoOf($serializer_3).fw = typeParametersSerializers;
  protoOf($serializer_4).fw = typeParametersSerializers;
  defineProp(protoOf(DataStreamsConfiguration), 'expectedDataStreamIds', protoOf(DataStreamsConfiguration).m2s);
  protoOf($serializer_5).fw = typeParametersSerializers;
  protoOf($serializer_6).fw = typeParametersSerializers;
  protoOf($serializer_7).fw = typeParametersSerializers;
  protoOf($serializer_8).fw = typeParametersSerializers;
  protoOf($serializer_9).fw = typeParametersSerializers;
  protoOf($serializer_10).fw = typeParametersSerializers;
  protoOf($serializer_11).fw = typeParametersSerializers;
  protoOf($serializer_12).fw = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  Companion_instance_8 = new Companion_7();
  Companion_instance_11 = new Companion_10();
  Companion_instance_12 = new Companion_11();
  Companion_instance_13 = new Companion_12();
  Companion_instance_14 = new Companion_13();
  Companion_instance_17 = new Companion_16();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var dk = _.dk || (_.dk = {});
    var cachet = dk.cachet || (dk.cachet = {});
    var carp = cachet.carp || (cachet.carp = {});
    var data = carp.data || (carp.data = {});
    var application = data.application || (data.application = {});
    application.MutableDataStreamBatch = MutableDataStreamBatch;
    var dk_0 = _.dk || (_.dk = {});
    var cachet_0 = dk_0.cachet || (dk_0.cachet = {});
    var carp_0 = cachet_0.carp || (cachet_0.carp = {});
    var data_0 = carp_0.data || (carp_0.data = {});
    var application_0 = data_0.application || (data_0.application = {});
    application_0.DataStreamId = DataStreamId;
    var dk_1 = _.dk || (_.dk = {});
    var cachet_1 = dk_1.cachet || (dk_1.cachet = {});
    var carp_1 = cachet_1.carp || (cachet_1.carp = {});
    var data_1 = carp_1.data || (carp_1.data = {});
    var application_1 = data_1.application || (data_1.application = {});
    application_1.DataStreamPoint = DataStreamPoint;
    var dk_2 = _.dk || (_.dk = {});
    var cachet_2 = dk_2.cachet || (dk_2.cachet = {});
    var carp_2 = cachet_2.carp || (cachet_2.carp = {});
    var data_2 = carp_2.data || (carp_2.data = {});
    var application_2 = data_2.application || (data_2.application = {});
    application_2.MutableDataStreamSequence = MutableDataStreamSequence;
    var dk_3 = _.dk || (_.dk = {});
    var cachet_3 = dk_3.cachet || (dk_3.cachet = {});
    var carp_3 = cachet_3.carp || (cachet_3.carp = {});
    var data_3 = carp_3.data || (carp_3.data = {});
    var application_3 = data_3.application || (data_3.application = {});
    application_3.DataStreamStatus = DataStreamStatus;
    var dk_4 = _.dk || (_.dk = {});
    var cachet_4 = dk_4.cachet || (dk_4.cachet = {});
    var carp_4 = cachet_4.carp || (cachet_4.carp = {});
    var data_4 = carp_4.data || (carp_4.data = {});
    var application_4 = data_4.application || (data_4.application = {});
    application_4.DataStreamsConfiguration = DataStreamsConfiguration;
    application_4.DataStreamsConfiguration.ExpectedDataStream = ExpectedDataStream;
    defineProp(application_4.DataStreamsConfiguration.ExpectedDataStream, 'Companion', Companion_getInstance_7, VOID, true);
    var dk_5 = _.dk || (_.dk = {});
    var cachet_5 = dk_5.cachet || (dk_5.cachet = {});
    var carp_5 = cachet_5.carp || (cachet_5.carp = {});
    var data_5 = carp_5.data || (carp_5.data = {});
    var application_5 = data_5.application || (data_5.application = {});
    application_5.Measurement = Measurement;
    var dk_6 = _.dk || (_.dk = {});
    var cachet_6 = dk_6.cachet || (dk_6.cachet = {});
    var carp_6 = cachet_6.carp || (cachet_6.carp = {});
    var data_6 = carp_6.data || (carp_6.data = {});
    var application_6 = data_6.application || (data_6.application = {});
    application_6.SyncPoint = SyncPoint;
    defineProp(application_6.SyncPoint, 'Companion', Companion_getInstance_11, VOID, true);
    var dk_7 = _.dk || (_.dk = {});
    var cachet_7 = dk_7.cachet || (dk_7.cachet = {});
    var carp_7 = cachet_7.carp || (cachet_7.carp = {});
    var data_7 = carp_7.data || (carp_7.data = {});
    var infrastructure = data_7.infrastructure || (data_7.infrastructure = {});
    infrastructure.DataStreamServiceRequest = DataStreamServiceRequest;
    defineProp(infrastructure.DataStreamServiceRequest, 'Serializer', Serializer_getInstance, VOID, true);
    infrastructure.DataStreamServiceRequest.OpenDataStreams = OpenDataStreams;
    infrastructure.DataStreamServiceRequest.AppendToDataStreams = AppendToDataStreams;
    infrastructure.DataStreamServiceRequest.GetDataStream = GetDataStream;
    infrastructure.DataStreamServiceRequest.GetDataStreamsStatus = GetDataStreamsStatus;
    infrastructure.DataStreamServiceRequest.CloseDataStreams = CloseDataStreams;
    infrastructure.DataStreamServiceRequest.RemoveDataStreams = RemoveDataStreams;
    var dk_8 = _.dk || (_.dk = {});
    var cachet_8 = dk_8.cachet || (dk_8.cachet = {});
    var carp_8 = cachet_8.carp || (cachet_8.carp = {});
    var data_8 = carp_8.data || (carp_8.data = {});
    var application_7 = data_8.application || (data_8.application = {});
    application_7.applyToTimestamp = applyToTimestamp;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=carp-data-core-generated.js.map
