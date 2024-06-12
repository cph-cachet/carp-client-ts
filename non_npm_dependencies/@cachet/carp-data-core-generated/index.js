(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'big.js', '@cachet/kotlin-kotlin-stdlib', '@cachet/kotlinx-serialization-kotlinx-serialization-core', '@cachet/carp-common-generated', '@cachet/Kotlin-DateTime-library-kotlinx-datetime'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('big.js'), require('@cachet/kotlin-kotlin-stdlib'), require('@cachet/kotlinx-serialization-kotlinx-serialization-core'), require('@cachet/carp-common-generated'), require('@cachet/Kotlin-DateTime-library-kotlinx-datetime'));
  else {
    if (typeof Big === 'undefined') {
      throw new Error("Error loading module 'carp-data-core-generated'. Its dependency 'big.js' was not found. Please, check whether 'big.js' is loaded prior to 'carp-data-core-generated'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'carp-data-core-generated'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'carp-data-core-generated'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'carp-data-core-generated'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'carp-data-core-generated'.");
    }
    if (typeof this['carp-common-generated'] === 'undefined') {
      throw new Error("Error loading module 'carp-data-core-generated'. Its dependency 'carp-common-generated' was not found. Please, check whether 'carp-common-generated' is loaded prior to 'carp-data-core-generated'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'carp-data-core-generated'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'carp-data-core-generated'.");
    }
    root['carp-data-core-generated'] = factory(typeof this['carp-data-core-generated'] === 'undefined' ? {} : this['carp-data-core-generated'], Big, this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['carp-common-generated'], this['Kotlin-DateTime-library-kotlinx-datetime']);
  }
}(this, function (_, Big, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_dk_cachet_carp_common_carp_common, kotlin_org_jetbrains_kotlinx_kotlinx_datetime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.m8;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var VOID = kotlin_kotlin.$_$.f;
  var flatMap = kotlin_kotlin.$_$.e9;
  var none = kotlin_kotlin.$_$.h9;
  var filter = kotlin_kotlin.$_$.d9;
  var interfaceMeta = kotlin_kotlin.$_$.s7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var asSequence = kotlin_kotlin.$_$.u4;
  var flatMap_0 = kotlin_kotlin.$_$.f9;
  var mutableListOf = kotlin_kotlin.$_$.g6;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var last = kotlin_kotlin.$_$.b6;
  var THROW_CCE = kotlin_kotlin.$_$.bb;
  var toString = kotlin_kotlin.$_$.r8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var isInterface = kotlin_kotlin.$_$.b8;
  var mapCapacity = kotlin_kotlin.$_$.d6;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var toList = kotlin_kotlin.$_$.i9;
  var equals = kotlin_kotlin.$_$.l7;
  var hashCode = kotlin_kotlin.$_$.r7;
  var defineProp = kotlin_kotlin.$_$.k7;
  var classMeta = kotlin_kotlin.$_$.i7;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var UUIDSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.k1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var NamespacedIdSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.i1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var objectCreate = kotlin_kotlin.$_$.k8;
  var getStringHashCode = kotlin_kotlin.$_$.q7;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var Long = kotlin_kotlin.$_$.ya;
  var toLong = kotlin_kotlin.$_$.p8;
  var until = kotlin_kotlin.$_$.y8;
  var Companion_getInstance = kotlin_kotlin.$_$.t3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Collection = kotlin_kotlin.$_$.g4;
  var asSequence_0 = kotlin_kotlin.$_$.v4;
  var mapIndexed = kotlin_kotlin.$_$.g9;
  var toList_0 = kotlin_kotlin.$_$.q6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var toList_1 = kotlin_kotlin.$_$.r6;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var IllegalStateException = kotlin_kotlin.$_$.xa;
  var ApiVersion = kotlin_dk_cachet_carp_common_carp_common.$_$.d;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var toSet = kotlin_kotlin.$_$.u6;
  var DataTimeType_TIME_SPAN_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.u;
  var DataTimeType_POINT_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.t;
  var toString_0 = kotlin_kotlin.$_$.yb;
  var Data = kotlin_dk_cachet_carp_common_carp_common.$_$.a;
  var getKClass = kotlin_kotlin.$_$.e;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var Companion_instance = kotlin_dk_cachet_carp_common_carp_common.$_$.h1;
  var CustomData = kotlin_dk_cachet_carp_common_carp_common.$_$.q;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var InstantIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var getNumberHashCode = kotlin_kotlin.$_$.o7;
  var ApiVersionSerializer_getInstance = kotlin_dk_cachet_carp_common_carp_common.$_$.y;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var ignoreTypeParameters = kotlin_dk_cachet_carp_common_carp_common.$_$.r;
  var Unit = kotlin_kotlin.$_$.mb;
  var arrayOf = kotlin_kotlin.$_$.nb;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var Set = kotlin_kotlin.$_$.r4;
  var UUID = kotlin_dk_cachet_carp_common_carp_common.$_$.k;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.ub;
  var ApplicationServiceRequest = kotlin_dk_cachet_carp_common_carp_common.$_$.s;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var toLong_0 = kotlin_kotlin.$_$.fa;
  var toEpochMicroseconds = kotlin_dk_cachet_carp_common_carp_common.$_$.l;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta, VOID, [SerializerFactory]);
  function iterator() {
    var tmp = this.sequences;
    return flatMap(tmp, DataStreamBatch$iterator$lambda).t();
  }
  function isEmpty() {
    return none(this);
  }
  function getDataStreamPoints(dataStream) {
    var tmp = this.sequences;
    var tmp_0 = filter(tmp, DataStreamBatch$getDataStreamPoints$lambda(dataStream));
    return flatMap(tmp_0, DataStreamBatch$getDataStreamPoints$lambda_0);
  }
  setMetadataFor(DataStreamBatch, 'DataStreamBatch', interfaceMeta, VOID, VOID, VOID, VOID, {0: DataStreamBatchSerializer_getInstance});
  setMetadataFor(MutableDataStreamBatch, 'MutableDataStreamBatch', classMeta, VOID, [DataStreamBatch], MutableDataStreamBatch);
  setMetadataFor(DataStreamBatchSerializer, 'DataStreamBatchSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(DataStreamId, 'DataStreamId', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor($serializer_0, '$serializer', classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(DataStreamPoint, 'DataStreamPoint', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_3});
  function get_range() {
    var tmp;
    if (this.measurements.y()) {
      tmp = Companion_getInstance().u9_1;
    } else {
      var tmp_0 = this.firstSequenceId;
      // Inline function 'kotlin.Long.plus' call
      var this_0 = this.firstSequenceId;
      var other = this.measurements.n();
      var tmp$ret$0 = this_0.za(toLong(other));
      tmp = until(tmp_0, tmp$ret$0);
    }
    return tmp;
  }
  function throwIfIllegalState() {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.firstSequenceId.r9(new Long(0, 0)) >= 0)) {
      // Inline function 'dk.cachet.carp.data.application.DataStreamSequence.throwIfIllegalState.<anonymous>' call
      var message = 'Sequence ID must be positive.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.triggerIds.y()) {
      // Inline function 'dk.cachet.carp.data.application.DataStreamSequence.throwIfIllegalState.<anonymous>' call
      var message_0 = 'Data always needs to be linked to at least one trigger that requested it.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var this_0 = this.measurements;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.y();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$3 = true;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.t();
      while (tmp0_iterator.u()) {
        var element = tmp0_iterator.v();
        // Inline function 'dk.cachet.carp.data.application.DataStreamSequence.throwIfIllegalState.<anonymous>' call
        if (!element.dataType.equals(this.dataStream.dataType)) {
          tmp$ret$3 = false;
          break $l$block_0;
        }
      }
      tmp$ret$3 = true;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp$ret$3) {
      // Inline function 'dk.cachet.carp.data.application.DataStreamSequence.throwIfIllegalState.<anonymous>' call
      var message_1 = 'Measurements all need to correspond to the data type of the data stream.';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function iterator_0() {
    var tmp = asSequence_0(this.measurements);
    return mapIndexed(tmp, DataStreamSequence$iterator$lambda(this)).t();
  }
  function isImmediatelyFollowedBy(sequence) {
    var tmp;
    if ((this.dataStream.equals(sequence.dataStream) ? equals(this.triggerIds, sequence.triggerIds) : false) ? this.syncPoint.equals(sequence.syncPoint) : false) {
      var tmp_0;
      if (this.range.equals(Companion_getInstance().u9_1)) {
        tmp_0 = this.firstSequenceId.equals(sequence.firstSequenceId);
      } else {
        // Inline function 'kotlin.Long.plus' call
        tmp_0 = this.range.ze_1.za(toLong(1)).equals(sequence.firstSequenceId);
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
  setMetadataFor(DataStreamSequence, 'DataStreamSequence', interfaceMeta);
  setMetadataFor(MutableDataStreamSequence, 'MutableDataStreamSequence', classMeta, VOID, [DataStreamSequence]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(DataStreamSequenceSnapshot, 'DataStreamSequenceSnapshot', classMeta, VOID, [DataStreamSequence], VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(DataStreamSequenceSerializer, 'DataStreamSequenceSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ExpectedDataStream, 'ExpectedDataStream', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor($serializer_3, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(DataStreamsConfiguration, 'DataStreamsConfiguration', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  setMetadataFor(Companion_6, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Measurement, 'Measurement', classMeta, VOID, VOID, VOID, VOID, {0: MeasurementSerializer_getInstance});
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor($serializer_4, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Surrogate, 'Surrogate', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  setMetadataFor(MeasurementSerializer, 'MeasurementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor($serializer_5, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(SyncPoint, 'SyncPoint', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor($serializer_6, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor($serializer_7, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor($serializer_8, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor($serializer_9, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor($serializer_10, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Serializer, 'Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DataStreamServiceRequest, 'DataStreamServiceRequest', classMeta, ApplicationServiceRequest, VOID, VOID, VOID, {0: Companion_getInstance_16});
  setMetadataFor(OpenDataStreams, 'OpenDataStreams', classMeta, DataStreamServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  setMetadataFor(AppendToDataStreams, 'AppendToDataStreams', classMeta, DataStreamServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  setMetadataFor(GetDataStream, 'GetDataStream', classMeta, DataStreamServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  setMetadataFor(CloseDataStreams, 'CloseDataStreams', classMeta, DataStreamServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  setMetadataFor(RemoveDataStreams, 'RemoveDataStreams', classMeta, DataStreamServiceRequest, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  setMetadataFor(Companion_14, 'Companion', objectMeta, VOID, [SerializerFactory]);
  //endregion
  function Companion() {
  }
  protoOf(Companion).m16 = function () {
    return DataStreamBatchSerializer_getInstance();
  };
  protoOf(Companion).nu = function (typeParamsSerializers) {
    return this.m16();
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
    return it.r2();
  }
  function MutableDataStreamBatch() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.h28_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(MutableDataStreamBatch).g28 = function () {
    var tmp = asSequence(this.h28_1);
    return flatMap_0(tmp, MutableDataStreamBatch$_get_sequences_$lambda_twur2e);
  };
  protoOf(MutableDataStreamBatch).appendSequence = function (sequence) {
    var sequenceList = this.h28_1.x2(sequence.dataStream);
    if (sequenceList == null) {
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.h28_1;
      var key = sequence.dataStream;
      var value = mutableListOf([sequence.toMutableDataStreamSequence()]);
      this_0.n2(key, value);
      return Unit_instance;
    }
    var tmp = last(sequenceList);
    var last_0 = tmp instanceof MutableDataStreamSequence ? tmp : THROW_CCE();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(last_0.range.ze_1.r9(sequence.range.ye_1) < 0)) {
      // Inline function 'dk.cachet.carp.data.application.MutableDataStreamBatch.appendSequence.<anonymous>' call
      var message = 'Sequence range start lies before the end of a previously appended sequence to the same data stream.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(last_0.k28_1.synchronizedOn.e14(sequence.syncPoint.synchronizedOn) <= 0)) {
      // Inline function 'dk.cachet.carp.data.application.MutableDataStreamBatch.appendSequence.<anonymous>' call
      var message_0 = "The sync point contained in this sequence can't have been obtained before a previous sync point.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (last_0.isImmediatelyFollowedBy(sequence)) {
      last_0.appendSequence(isInterface(sequence, DataStreamSequence) ? sequence : THROW_CCE());
    } else {
      sequenceList.q(sequence.toMutableDataStreamSequence());
    }
  };
  protoOf(MutableDataStreamBatch).appendBatch = function (batch) {
    var tmp;
    if (batch instanceof MutableDataStreamBatch) {
      var tmp$ret$5;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        // Inline function 'kotlin.collections.mapValues' call
        var this_0 = batch.h28_1;
        // Inline function 'kotlin.collections.mapValuesTo' call
        var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.n()));
        // Inline function 'kotlin.collections.associateByTo' call
        var tmp0_iterator = this_0.p2().t();
        while (tmp0_iterator.u()) {
          var element = tmp0_iterator.v();
          // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
          var tmp_0 = element.q2();
          // Inline function 'dk.cachet.carp.data.application.MutableDataStreamBatch.appendBatch.<anonymous>' call
          var tmp$ret$1 = last(element.r2());
          destination.n2(tmp_0, tmp$ret$1);
        }
        if (destination.y()) {
          tmp$ret$5 = true;
          break $l$block_0;
        }
        // Inline function 'kotlin.collections.iterator' call
        var tmp0_iterator_0 = destination.p2().t();
        while (tmp0_iterator_0.u()) {
          var element_0 = tmp0_iterator_0.v();
          // Inline function 'dk.cachet.carp.data.application.MutableDataStreamBatch.appendBatch.<anonymous>' call
          // Inline function 'kotlin.collections.component1' call
          var dataStream = element_0.q2();
          // Inline function 'kotlin.collections.component2' call
          var lastSequence = element_0.r2();
          var tmp0_safe_receiver = this.h28_1.x2(dataStream);
          var lastStoredSequence = tmp0_safe_receiver == null ? null : last(tmp0_safe_receiver);
          if (!(lastStoredSequence == null ? true : lastStoredSequence.range.ze_1.r9(lastSequence.range.ye_1) < 0)) {
            tmp$ret$5 = false;
            break $l$block_0;
          }
        }
        tmp$ret$5 = true;
      }
      tmp = tmp$ret$5;
    } else {
      var tmp$ret$13;
      $l$block_1: {
        // Inline function 'kotlin.sequences.all' call
        var tmp0_iterator_1 = batch.sequences.t();
        while (tmp0_iterator_1.u()) {
          var element_1 = tmp0_iterator_1.v();
          // Inline function 'dk.cachet.carp.data.application.MutableDataStreamBatch.appendBatch.<anonymous>' call
          // Inline function 'kotlin.let' call
          var tmp0_safe_receiver_0 = this.h28_1.x2(element_1.dataStream);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dk.cachet.carp.data.application.MutableDataStreamBatch.appendBatch.<anonymous>.<anonymous>' call
          var lastStoredSequence_0 = tmp0_safe_receiver_0 == null ? null : last(tmp0_safe_receiver_0);
          if (!(lastStoredSequence_0 == null ? true : lastStoredSequence_0.range.ze_1.r9(element_1.range.ye_1) < 0)) {
            tmp$ret$13 = false;
            break $l$block_1;
          }
        }
        tmp$ret$13 = true;
      }
      tmp = tmp$ret$13;
    }
    var containsNoPrecedingSequence = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!containsNoPrecedingSequence) {
      // Inline function 'dk.cachet.carp.data.application.MutableDataStreamBatch.appendBatch.<anonymous>' call
      var message = 'The batch contains a sequence of which the start precedes a previously appended sequence';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.sequences.forEach' call
    var tmp0_iterator_2 = batch.sequences.t();
    while (tmp0_iterator_2.u()) {
      var element_2 = tmp0_iterator_2.v();
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
  function DataStreamBatchSerializer() {
    DataStreamBatchSerializer_instance = this;
    this.n28_1 = ListSerializer(DataStreamSequenceSerializer_getInstance());
    this.o28_1 = this.n28_1.pi();
  }
  protoOf(DataStreamBatchSerializer).pi = function () {
    return this.o28_1;
  };
  protoOf(DataStreamBatchSerializer).p28 = function (encoder, value) {
    return encoder.qn(this.n28_1, toList(value.sequences));
  };
  protoOf(DataStreamBatchSerializer).qi = function (encoder, value) {
    return this.p28(encoder, (!(value == null) ? isInterface(value, DataStreamBatch) : false) ? value : THROW_CCE());
  };
  protoOf(DataStreamBatchSerializer).ri = function (decoder) {
    var batch = new MutableDataStreamBatch();
    var sequences = decoder.wl(this.n28_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = sequences.t();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
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
  protoOf(Companion_0).m16 = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.DataStreamId', this, 3);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('deviceRoleName', false);
    tmp0_serialDesc.nt('dataType', false);
    this.q28_1 = tmp0_serialDesc;
  }
  protoOf($serializer).pi = function () {
    return this.q28_1;
  };
  protoOf($serializer).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), StringSerializer_getInstance(), NamespacedIdSerializer_getInstance()];
  };
  protoOf($serializer).ri = function (decoder) {
    var tmp0_desc = this.q28_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.hm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, NamespacedIdSerializer_getInstance(), tmp6_local2);
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
            tmp5_local1 = tmp7_input.hm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, NamespacedIdSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return DataStreamId_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer).r28 = function (encoder, value) {
    var tmp0_desc = this.q28_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.nn(tmp0_desc, 1, value.deviceRoleName);
    tmp1_output.pn(tmp0_desc, 2, NamespacedIdSerializer_getInstance(), value.dataType);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer).qi = function (encoder, value) {
    return this.r28(encoder, value instanceof DataStreamId ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function DataStreamId_init_$Init$(seen1, studyDeploymentId, deviceRoleName, dataType, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance().q28_1);
    }
    $this.studyDeploymentId = studyDeploymentId;
    $this.deviceRoleName = deviceRoleName;
    $this.dataType = dataType;
    return $this;
  }
  function DataStreamId_init_$Create$(seen1, studyDeploymentId, deviceRoleName, dataType, serializationConstructorMarker) {
    return DataStreamId_init_$Init$(seen1, studyDeploymentId, deviceRoleName, dataType, serializationConstructorMarker, objectCreate(protoOf(DataStreamId)));
  }
  function DataStreamId(studyDeploymentId, deviceRoleName, dataType) {
    this.studyDeploymentId = studyDeploymentId;
    this.deviceRoleName = deviceRoleName;
    this.dataType = dataType;
  }
  protoOf(DataStreamId).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(DataStreamId).t28 = function () {
    return this.deviceRoleName;
  };
  protoOf(DataStreamId).w1s = function () {
    return this.dataType;
  };
  protoOf(DataStreamId).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(DataStreamId).pd = function () {
    return this.deviceRoleName;
  };
  protoOf(DataStreamId).r1g = function () {
    return this.dataType;
  };
  protoOf(DataStreamId).u28 = function (studyDeploymentId, deviceRoleName, dataType) {
    return new DataStreamId(studyDeploymentId, deviceRoleName, dataType);
  };
  protoOf(DataStreamId).copy = function (studyDeploymentId, deviceRoleName, dataType, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    deviceRoleName = deviceRoleName === VOID ? this.deviceRoleName : deviceRoleName;
    dataType = dataType === VOID ? this.dataType : dataType;
    return this.u28(studyDeploymentId, deviceRoleName, dataType);
  };
  protoOf(DataStreamId).toString = function () {
    return 'DataStreamId(studyDeploymentId=' + this.studyDeploymentId + ', deviceRoleName=' + this.deviceRoleName + ', dataType=' + this.dataType + ')';
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
    var tmp0_other_with_cast = other instanceof DataStreamId ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    if (!(this.deviceRoleName === tmp0_other_with_cast.deviceRoleName))
      return false;
    if (!this.dataType.equals(tmp0_other_with_cast.dataType))
      return false;
    return true;
  };
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer_0.call($this);
    $this.w28_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, objectCreate(protoOf($serializer_0)));
  }
  function Companion_1() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x28_1 = [null, null, null, null, new ArrayListSerializer(IntSerializer_getInstance()), null];
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.DataStreamPoint', null, 6);
    tmp0_serialDesc.nt('sequenceId', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('deviceRoleName', false);
    tmp0_serialDesc.nt('measurement', false);
    tmp0_serialDesc.nt('triggerIds', false);
    tmp0_serialDesc.nt('syncPoint', true);
    this.y28_1 = tmp0_serialDesc;
  }
  protoOf(Companion_1).d1r = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  protoOf(Companion_1).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  protoOf(Companion_1).c1t = function () {
    return this.y28_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function $serializer_0() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.DataStreamPoint', this, 6);
    tmp0_serialDesc.nt('sequenceId', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('deviceRoleName', false);
    tmp0_serialDesc.nt('measurement', false);
    tmp0_serialDesc.nt('triggerIds', false);
    tmp0_serialDesc.nt('syncPoint', true);
    this.v28_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).pi = function () {
    return this.v28_1;
  };
  protoOf($serializer_0).cu = function () {
    var tmp0_cached = Companion_getInstance_3().x28_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [LongSerializer_getInstance(), UUIDSerializer_getInstance(), StringSerializer_getInstance(), MeasurementSerializer_getInstance(), tmp0_cached[4], $serializer_getInstance_4()];
  };
  protoOf($serializer_0).ri = function (decoder) {
    var tmp0_desc = this.v28_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = new Long(0, 0);
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.xl(tmp0_desc);
    var tmp11_cached = Companion_getInstance_3().x28_1;
    if (tmp10_input.om()) {
      tmp4_local0 = tmp10_input.dm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.hm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.jm(tmp0_desc, 3, MeasurementSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.jm(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.jm(tmp0_desc, 5, $serializer_getInstance_4(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.dm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.jm(tmp0_desc, 1, UUIDSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.hm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.jm(tmp0_desc, 3, MeasurementSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.jm(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.jm(tmp0_desc, 5, $serializer_getInstance_4(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.yl(tmp0_desc);
    return DataStreamPoint_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_0).z28 = function (encoder, value) {
    var tmp0_desc = this.v28_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().x28_1;
    tmp1_output.jn(tmp0_desc, 0, value.sequenceId);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.nn(tmp0_desc, 2, value.deviceRoleName);
    tmp1_output.pn(tmp0_desc, 3, MeasurementSerializer_getInstance(), value.measurement);
    tmp1_output.pn(tmp0_desc, 4, tmp2_cached[4], value.triggerIds);
    if (tmp1_output.vn(tmp0_desc, 5) ? true : !value.syncPoint.equals(Companion_getInstance_10().UnixEpoch)) {
      tmp1_output.pn(tmp0_desc, 5, $serializer_getInstance_4(), value.syncPoint);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_0).qi = function (encoder, value) {
    return this.z28(encoder, value instanceof DataStreamPoint ? value : THROW_CCE());
  };
  protoOf($serializer_0).du = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.w28_1];
  };
  function DataStreamPoint_init_$Init$(seen1, sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, Companion_getInstance_3().y28_1);
    }
    $this.sequenceId = sequenceId;
    $this.studyDeploymentId = studyDeploymentId;
    $this.deviceRoleName = deviceRoleName;
    $this.measurement = measurement;
    $this.triggerIds = triggerIds;
    if (0 === (seen1 & 32))
      $this.syncPoint = Companion_getInstance_10().UnixEpoch;
    else
      $this.syncPoint = syncPoint;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.sequenceId.r9(new Long(0, 0)) >= 0)) {
      // Inline function 'dk.cachet.carp.data.application.DataStreamPoint.<init>.<anonymous>' call
      var message = 'Sequence ID must be positive.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.triggerIds.y()) {
      // Inline function 'dk.cachet.carp.data.application.DataStreamPoint.<init>.<anonymous>' call
      var message_0 = 'Data always needs to be linked to at least one trigger that requested it.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return $this;
  }
  function DataStreamPoint_init_$Create$(seen1, sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint, serializationConstructorMarker) {
    return DataStreamPoint_init_$Init$(seen1, sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint, serializationConstructorMarker, objectCreate(protoOf(DataStreamPoint)));
  }
  function DataStreamPoint(sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint) {
    Companion_getInstance_3();
    syncPoint = syncPoint === VOID ? Companion_getInstance_10().UnixEpoch : syncPoint;
    this.sequenceId = sequenceId;
    this.studyDeploymentId = studyDeploymentId;
    this.deviceRoleName = deviceRoleName;
    this.measurement = measurement;
    this.triggerIds = triggerIds;
    this.syncPoint = syncPoint;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.sequenceId.r9(new Long(0, 0)) >= 0)) {
      // Inline function 'dk.cachet.carp.data.application.DataStreamPoint.<anonymous>' call
      var message = 'Sequence ID must be positive.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.triggerIds.y()) {
      // Inline function 'dk.cachet.carp.data.application.DataStreamPoint.<anonymous>' call
      var message_0 = 'Data always needs to be linked to at least one trigger that requested it.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(DataStreamPoint).a29 = function () {
    return this.sequenceId;
  };
  protoOf(DataStreamPoint).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(DataStreamPoint).t28 = function () {
    return this.deviceRoleName;
  };
  protoOf(DataStreamPoint).b29 = function () {
    return this.measurement;
  };
  protoOf(DataStreamPoint).c29 = function () {
    return this.triggerIds;
  };
  protoOf(DataStreamPoint).d29 = function () {
    return this.syncPoint;
  };
  protoOf(DataStreamPoint).e29 = function () {
    return new DataStreamId(this.studyDeploymentId, this.deviceRoleName, this.measurement.dataType);
  };
  protoOf(DataStreamPoint).synchronize = function () {
    if (this.syncPoint.equals(Companion_getInstance_10().UnixEpoch))
      return this;
    return this.copy(VOID, VOID, VOID, this.measurement.synchronize(this.syncPoint), VOID, Companion_getInstance_10().UnixEpoch);
  };
  protoOf(DataStreamPoint).od = function () {
    return this.sequenceId;
  };
  protoOf(DataStreamPoint).pd = function () {
    return this.studyDeploymentId;
  };
  protoOf(DataStreamPoint).r1g = function () {
    return this.deviceRoleName;
  };
  protoOf(DataStreamPoint).q1h = function () {
    return this.measurement;
  };
  protoOf(DataStreamPoint).r1m = function () {
    return this.triggerIds;
  };
  protoOf(DataStreamPoint).l1p = function () {
    return this.syncPoint;
  };
  protoOf(DataStreamPoint).f29 = function (sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint) {
    return new DataStreamPoint(sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint);
  };
  protoOf(DataStreamPoint).copy = function (sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint, $super) {
    sequenceId = sequenceId === VOID ? this.sequenceId : sequenceId;
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    deviceRoleName = deviceRoleName === VOID ? this.deviceRoleName : deviceRoleName;
    measurement = measurement === VOID ? this.measurement : measurement;
    triggerIds = triggerIds === VOID ? this.triggerIds : triggerIds;
    syncPoint = syncPoint === VOID ? this.syncPoint : syncPoint;
    return this.f29(sequenceId, studyDeploymentId, deviceRoleName, measurement, triggerIds, syncPoint);
  };
  protoOf(DataStreamPoint).toString = function () {
    return 'DataStreamPoint(sequenceId=' + this.sequenceId.toString() + ', studyDeploymentId=' + this.studyDeploymentId + ', deviceRoleName=' + this.deviceRoleName + ', measurement=' + this.measurement + ', triggerIds=' + this.triggerIds + ', syncPoint=' + this.syncPoint + ')';
  };
  protoOf(DataStreamPoint).hashCode = function () {
    var result = this.sequenceId.hashCode();
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
    var tmp0_other_with_cast = other instanceof DataStreamPoint ? other : THROW_CCE();
    if (!this.sequenceId.equals(tmp0_other_with_cast.sequenceId))
      return false;
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    if (!(this.deviceRoleName === tmp0_other_with_cast.deviceRoleName))
      return false;
    if (!this.measurement.equals(tmp0_other_with_cast.measurement))
      return false;
    if (!equals(this.triggerIds, tmp0_other_with_cast.triggerIds))
      return false;
    if (!this.syncPoint.equals(tmp0_other_with_cast.syncPoint))
      return false;
    return true;
  };
  function DataStreamSequence$iterator$lambda(this$0) {
    return function (index, measurement) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = this$0.firstSequenceId.za(toLong(index));
      return new DataStreamPoint(tmp$ret$0, this$0.dataStream.studyDeploymentId, this$0.dataStream.deviceRoleName, measurement, this$0.triggerIds, this$0.syncPoint);
    };
  }
  function DataStreamSequence() {
  }
  function MutableDataStreamSequence(dataStream, firstSequenceId, triggerIds, syncPoint) {
    syncPoint = syncPoint === VOID ? Companion_getInstance_10().UnixEpoch : syncPoint;
    this.i28_1 = dataStream;
    this.j28_1 = firstSequenceId;
    this.k28_1 = syncPoint;
    this.l28_1 = toList_0(triggerIds);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m28_1 = ArrayList_init_$Create$();
    throwIfIllegalInitialization(this);
  }
  protoOf(MutableDataStreamSequence).e29 = function () {
    return this.i28_1;
  };
  protoOf(MutableDataStreamSequence).g29 = function () {
    return this.j28_1;
  };
  protoOf(MutableDataStreamSequence).d29 = function () {
    return this.k28_1;
  };
  protoOf(MutableDataStreamSequence).c29 = function () {
    return this.l28_1;
  };
  protoOf(MutableDataStreamSequence).h29 = function () {
    return this.m28_1;
  };
  protoOf(MutableDataStreamSequence).appendMeasurementsList = function (measurements) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(measurements, Collection)) {
        tmp = measurements.y();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = measurements.t();
      while (tmp0_iterator.u()) {
        var element = tmp0_iterator.v();
        // Inline function 'dk.cachet.carp.data.application.MutableDataStreamSequence.appendMeasurements.<anonymous>' call
        if (!element.dataType.equals(this.i28_1.dataType)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp$ret$0) {
      // Inline function 'dk.cachet.carp.data.application.MutableDataStreamSequence.appendMeasurements.<anonymous>' call
      var message = 'Measurements all need to correspond to the data type of the data stream.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.m28_1.r(measurements);
  };
  protoOf(MutableDataStreamSequence).appendMeasurements = function (measurements) {
    return this.appendMeasurementsList(toList_1(measurements));
  };
  protoOf(MutableDataStreamSequence).appendSequence = function (sequence) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.isImmediatelyFollowedBy(sequence)) {
      // Inline function 'dk.cachet.carp.data.application.MutableDataStreamSequence.appendSequence.<anonymous>' call
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
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i29_1 = [null, null, new ArrayListSerializer(MeasurementSerializer_getInstance()), new ArrayListSerializer(IntSerializer_getInstance()), null];
  }
  protoOf(Companion_2).m16 = function () {
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
    tmp0_serialDesc.nt('dataStream', false);
    tmp0_serialDesc.nt('firstSequenceId', false);
    tmp0_serialDesc.nt('measurements', false);
    tmp0_serialDesc.nt('triggerIds', false);
    tmp0_serialDesc.nt('syncPoint', true);
    this.j29_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).pi = function () {
    return this.j29_1;
  };
  protoOf($serializer_1).cu = function () {
    var tmp0_cached = Companion_getInstance_4().i29_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance(), LongSerializer_getInstance(), tmp0_cached[2], tmp0_cached[3], $serializer_getInstance_4()];
  };
  protoOf($serializer_1).ri = function (decoder) {
    var tmp0_desc = this.j29_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = new Long(0, 0);
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xl(tmp0_desc);
    var tmp10_cached = Companion_getInstance_4().i29_1;
    if (tmp9_input.om()) {
      tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.dm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jm(tmp0_desc, 2, tmp10_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jm(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.jm(tmp0_desc, 4, $serializer_getInstance_4(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.pm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jm(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.dm(tmp0_desc, 1);
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
            tmp8_local4 = tmp9_input.jm(tmp0_desc, 4, $serializer_getInstance_4(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yl(tmp0_desc);
    return DataStreamSequenceSnapshot_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_1).k29 = function (encoder, value) {
    var tmp0_desc = this.j29_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().i29_1;
    tmp1_output.pn(tmp0_desc, 0, $serializer_getInstance(), value.l29_1);
    tmp1_output.jn(tmp0_desc, 1, value.m29_1);
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.n29_1);
    tmp1_output.pn(tmp0_desc, 3, tmp2_cached[3], value.o29_1);
    if (tmp1_output.vn(tmp0_desc, 4) ? true : !value.p29_1.equals(Companion_getInstance_10().UnixEpoch)) {
      tmp1_output.pn(tmp0_desc, 4, $serializer_getInstance_4(), value.p29_1);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_1).qi = function (encoder, value) {
    return this.k29(encoder, value instanceof DataStreamSequenceSnapshot ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_1();
    return $serializer_instance_0;
  }
  function DataStreamSequenceSnapshot_init_$Init$(seen1, dataStream, firstSequenceId, measurements, triggerIds, syncPoint, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_0().j29_1);
    }
    $this.l29_1 = dataStream;
    $this.m29_1 = firstSequenceId;
    $this.n29_1 = measurements;
    $this.o29_1 = triggerIds;
    if (0 === (seen1 & 16))
      $this.p29_1 = Companion_getInstance_10().UnixEpoch;
    else
      $this.p29_1 = syncPoint;
    throwIfIllegalInitialization($this);
    return $this;
  }
  function DataStreamSequenceSnapshot_init_$Create$(seen1, dataStream, firstSequenceId, measurements, triggerIds, syncPoint, serializationConstructorMarker) {
    return DataStreamSequenceSnapshot_init_$Init$(seen1, dataStream, firstSequenceId, measurements, triggerIds, syncPoint, serializationConstructorMarker, objectCreate(protoOf(DataStreamSequenceSnapshot)));
  }
  function DataStreamSequenceSnapshot(dataStream, firstSequenceId, measurements, triggerIds, syncPoint) {
    Companion_getInstance_4();
    syncPoint = syncPoint === VOID ? Companion_getInstance_10().UnixEpoch : syncPoint;
    this.l29_1 = dataStream;
    this.m29_1 = firstSequenceId;
    this.n29_1 = measurements;
    this.o29_1 = triggerIds;
    this.p29_1 = syncPoint;
    throwIfIllegalInitialization(this);
  }
  protoOf(DataStreamSequenceSnapshot).e29 = function () {
    return this.l29_1;
  };
  protoOf(DataStreamSequenceSnapshot).g29 = function () {
    return this.m29_1;
  };
  protoOf(DataStreamSequenceSnapshot).h29 = function () {
    return this.n29_1;
  };
  protoOf(DataStreamSequenceSnapshot).c29 = function () {
    return this.o29_1;
  };
  protoOf(DataStreamSequenceSnapshot).d29 = function () {
    return this.p29_1;
  };
  protoOf(DataStreamSequenceSnapshot).equals = function (other) {
    return equalsOther(this, other);
  };
  protoOf(DataStreamSequenceSnapshot).hashCode = function () {
    return hashCode(this.n29_1);
  };
  function DataStreamSequenceSerializer() {
    DataStreamSequenceSerializer_instance = this;
    this.q29_1 = Companion_getInstance_4().m16();
    this.r29_1 = this.q29_1.pi();
  }
  protoOf(DataStreamSequenceSerializer).pi = function () {
    return this.r29_1;
  };
  protoOf(DataStreamSequenceSerializer).s29 = function (encoder, value) {
    return encoder.qn(this.q29_1, new DataStreamSequenceSnapshot(value.dataStream, value.firstSequenceId, value.measurements, value.triggerIds, value.syncPoint));
  };
  protoOf(DataStreamSequenceSerializer).qi = function (encoder, value) {
    return this.s29(encoder, (!(value == null) ? isInterface(value, DataStreamSequence) : false) ? value : THROW_CCE());
  };
  protoOf(DataStreamSequenceSerializer).ri = function (decoder) {
    return decoder.wl(this.q29_1);
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
    this.t29_1 = new ApiVersion(1, 1);
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function Companion_4() {
  }
  protoOf(Companion_4).fromDataStreamId = function (dataStream) {
    return new ExpectedDataStream(dataStream.deviceRoleName, dataStream.dataType);
  };
  protoOf(Companion_4).m16 = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function $serializer_2() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.DataStreamsConfiguration.ExpectedDataStream', this, 2);
    tmp0_serialDesc.nt('deviceRoleName', false);
    tmp0_serialDesc.nt('dataType', false);
    this.u29_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).pi = function () {
    return this.u29_1;
  };
  protoOf($serializer_2).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), NamespacedIdSerializer_getInstance()];
  };
  protoOf($serializer_2).ri = function (decoder) {
    var tmp0_desc = this.u29_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.hm(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.hm(tmp0_desc, 0);
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
    return ExpectedDataStream_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).v29 = function (encoder, value) {
    var tmp0_desc = this.u29_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.deviceRoleName);
    tmp1_output.pn(tmp0_desc, 1, NamespacedIdSerializer_getInstance(), value.dataType);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_2).qi = function (encoder, value) {
    return this.v29(encoder, value instanceof ExpectedDataStream ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_2();
    return $serializer_instance_1;
  }
  function ExpectedDataStream_init_$Init$(seen1, deviceRoleName, dataType, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_1().u29_1);
    }
    $this.deviceRoleName = deviceRoleName;
    $this.dataType = dataType;
    return $this;
  }
  function ExpectedDataStream_init_$Create$(seen1, deviceRoleName, dataType, serializationConstructorMarker) {
    return ExpectedDataStream_init_$Init$(seen1, deviceRoleName, dataType, serializationConstructorMarker, objectCreate(protoOf(ExpectedDataStream)));
  }
  function ExpectedDataStream(deviceRoleName, dataType) {
    this.deviceRoleName = deviceRoleName;
    this.dataType = dataType;
  }
  protoOf(ExpectedDataStream).t28 = function () {
    return this.deviceRoleName;
  };
  protoOf(ExpectedDataStream).w1s = function () {
    return this.dataType;
  };
  protoOf(ExpectedDataStream).od = function () {
    return this.deviceRoleName;
  };
  protoOf(ExpectedDataStream).pd = function () {
    return this.dataType;
  };
  protoOf(ExpectedDataStream).w29 = function (deviceRoleName, dataType) {
    return new ExpectedDataStream(deviceRoleName, dataType);
  };
  protoOf(ExpectedDataStream).copy = function (deviceRoleName, dataType, $super) {
    deviceRoleName = deviceRoleName === VOID ? this.deviceRoleName : deviceRoleName;
    dataType = dataType === VOID ? this.dataType : dataType;
    return this.w29(deviceRoleName, dataType);
  };
  protoOf(ExpectedDataStream).toString = function () {
    return 'ExpectedDataStream(deviceRoleName=' + this.deviceRoleName + ', dataType=' + this.dataType + ')';
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
    var tmp0_other_with_cast = other instanceof ExpectedDataStream ? other : THROW_CCE();
    if (!(this.deviceRoleName === tmp0_other_with_cast.deviceRoleName))
      return false;
    if (!this.dataType.equals(tmp0_other_with_cast.dataType))
      return false;
    return true;
  };
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x29_1 = [null, new LinkedHashSetSerializer($serializer_getInstance_1())];
  }
  protoOf(Companion_5).m16 = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function $serializer_3() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.DataStreamsConfiguration', this, 2);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('expectedDataStreams', false);
    this.y29_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).pi = function () {
    return this.y29_1;
  };
  protoOf($serializer_3).cu = function () {
    var tmp0_cached = Companion_getInstance_7().x29_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [UUIDSerializer_getInstance(), tmp0_cached[1]];
  };
  protoOf($serializer_3).ri = function (decoder) {
    var tmp0_desc = this.y29_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().x29_1;
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, UUIDSerializer_getInstance(), tmp4_local0);
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
    return DataStreamsConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).z29 = function (encoder, value) {
    var tmp0_desc = this.y29_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().x29_1;
    tmp1_output.pn(tmp0_desc, 0, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.expectedDataStreams);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_3).qi = function (encoder, value) {
    return this.z29(encoder, value instanceof DataStreamsConfiguration ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_3();
    return $serializer_instance_2;
  }
  function DataStreamsConfiguration_init_$Init$(seen1, studyDeploymentId, expectedDataStreams, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_2().y29_1);
    }
    $this.studyDeploymentId = studyDeploymentId;
    $this.expectedDataStreams = expectedDataStreams;
    return $this;
  }
  function DataStreamsConfiguration_init_$Create$(seen1, studyDeploymentId, expectedDataStreams, serializationConstructorMarker) {
    return DataStreamsConfiguration_init_$Init$(seen1, studyDeploymentId, expectedDataStreams, serializationConstructorMarker, objectCreate(protoOf(DataStreamsConfiguration)));
  }
  function DataStreamsConfiguration(studyDeploymentId, expectedDataStreams) {
    Companion_getInstance_7();
    this.studyDeploymentId = studyDeploymentId;
    this.expectedDataStreams = expectedDataStreams;
  }
  protoOf(DataStreamsConfiguration).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(DataStreamsConfiguration).a2a = function () {
    return this.expectedDataStreams;
  };
  protoOf(DataStreamsConfiguration).b2a = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.expectedDataStreams;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.t();
    while (tmp0_iterator.u()) {
      var item = tmp0_iterator.v();
      // Inline function 'dk.cachet.carp.data.application.DataStreamsConfiguration.<get-expectedDataStreamIds>.<anonymous>' call
      var tmp$ret$0 = new DataStreamId(this.studyDeploymentId, item.deviceRoleName, item.dataType);
      destination.q(tmp$ret$0);
    }
    return toSet(destination);
  };
  protoOf(DataStreamsConfiguration).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(DataStreamsConfiguration).pd = function () {
    return this.expectedDataStreams;
  };
  protoOf(DataStreamsConfiguration).c2a = function (studyDeploymentId, expectedDataStreams) {
    return new DataStreamsConfiguration(studyDeploymentId, expectedDataStreams);
  };
  protoOf(DataStreamsConfiguration).copy = function (studyDeploymentId, expectedDataStreams, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    expectedDataStreams = expectedDataStreams === VOID ? this.expectedDataStreams : expectedDataStreams;
    return this.c2a(studyDeploymentId, expectedDataStreams);
  };
  protoOf(DataStreamsConfiguration).toString = function () {
    return 'DataStreamsConfiguration(studyDeploymentId=' + this.studyDeploymentId + ', expectedDataStreams=' + this.expectedDataStreams + ')';
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
    var tmp0_other_with_cast = other instanceof DataStreamsConfiguration ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    if (!equals(this.expectedDataStreams, tmp0_other_with_cast.expectedDataStreams))
      return false;
    return true;
  };
  function Companion_6() {
  }
  protoOf(Companion_6).d1r = function (typeSerial0) {
    return MeasurementSerializer_getInstance();
  };
  protoOf(Companion_6).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function Measurement(sensorStartTime, sensorEndTime, dataType, data) {
    this.sensorStartTime = sensorStartTime;
    this.sensorEndTime = sensorEndTime;
    this.dataType = dataType;
    this.data = data;
    if (!(this.sensorEndTime == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.sensorEndTime.r9(this.sensorStartTime) >= 0)) {
        // Inline function 'dk.cachet.carp.data.application.Measurement.<anonymous>' call
        var message = 'If set, sensorEndTime needs to lie after sensorStartTime.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(Measurement).d2a = function () {
    return this.sensorStartTime;
  };
  protoOf(Measurement).e2a = function () {
    return this.sensorEndTime;
  };
  protoOf(Measurement).w1s = function () {
    return this.dataType;
  };
  protoOf(Measurement).f2a = function () {
    return this.data;
  };
  protoOf(Measurement).getDataTimeType = function () {
    return this.sensorEndTime == null ? DataTimeType_POINT_getInstance() : DataTimeType_TIME_SPAN_getInstance();
  };
  protoOf(Measurement).synchronize = function (syncPoint) {
    return this.copy(applyToTimestamp(syncPoint, this.sensorStartTime), this.sensorEndTime == null ? this.sensorEndTime : applyToTimestamp(syncPoint, this.sensorEndTime));
  };
  protoOf(Measurement).od = function () {
    return this.sensorStartTime;
  };
  protoOf(Measurement).pd = function () {
    return this.sensorEndTime;
  };
  protoOf(Measurement).r1g = function () {
    return this.dataType;
  };
  protoOf(Measurement).q1h = function () {
    return this.data;
  };
  protoOf(Measurement).g2a = function (sensorStartTime, sensorEndTime, dataType, data) {
    return new Measurement(sensorStartTime, sensorEndTime, dataType, data);
  };
  protoOf(Measurement).copy = function (sensorStartTime, sensorEndTime, dataType, data, $super) {
    sensorStartTime = sensorStartTime === VOID ? this.sensorStartTime : sensorStartTime;
    sensorEndTime = sensorEndTime === VOID ? this.sensorEndTime : sensorEndTime;
    dataType = dataType === VOID ? this.dataType : dataType;
    data = data === VOID ? this.data : data;
    return this.g2a(sensorStartTime, sensorEndTime, dataType, data);
  };
  protoOf(Measurement).toString = function () {
    return 'Measurement(sensorStartTime=' + this.sensorStartTime.toString() + ', sensorEndTime=' + toString_0(this.sensorEndTime) + ', dataType=' + this.dataType + ', data=' + this.data + ')';
  };
  protoOf(Measurement).hashCode = function () {
    var result = this.sensorStartTime.hashCode();
    result = imul(result, 31) + (this.sensorEndTime == null ? 0 : this.sensorEndTime.hashCode()) | 0;
    result = imul(result, 31) + this.dataType.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.data) | 0;
    return result;
  };
  protoOf(Measurement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Measurement))
      return false;
    var tmp0_other_with_cast = other instanceof Measurement ? other : THROW_CCE();
    if (!this.sensorStartTime.equals(tmp0_other_with_cast.sensorStartTime))
      return false;
    if (!equals(this.sensorEndTime, tmp0_other_with_cast.sensorEndTime))
      return false;
    if (!this.dataType.equals(tmp0_other_with_cast.dataType))
      return false;
    if (!equals(this.data, tmp0_other_with_cast.data))
      return false;
    return true;
  };
  function Companion_7() {
    Companion_instance_8 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_0 = getKClass(Data);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h2a_1 = [null, null, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$2)];
  }
  protoOf(Companion_7).m16 = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function $serializer_4() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.MeasurementSerializer.Surrogate', this, 3);
    tmp0_serialDesc.nt('sensorStartTime', false);
    tmp0_serialDesc.nt('sensorEndTime', true);
    tmp0_serialDesc.nt('data', false);
    this.i2a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).pi = function () {
    return this.i2a_1;
  };
  protoOf($serializer_4).cu = function () {
    var tmp0_cached = Companion_getInstance_9().h2a_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [LongSerializer_getInstance(), get_nullable(LongSerializer_getInstance()), tmp0_cached[2]];
  };
  protoOf($serializer_4).ri = function (decoder) {
    var tmp0_desc = this.i2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = new Long(0, 0);
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xl(tmp0_desc);
    var tmp8_cached = Companion_getInstance_9().h2a_1;
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.dm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.lm(tmp0_desc, 1, LongSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.dm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.lm(tmp0_desc, 1, LongSerializer_getInstance(), tmp5_local1);
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
    return Surrogate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_4).j2a = function (encoder, value) {
    var tmp0_desc = this.i2a_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().h2a_1;
    tmp1_output.jn(tmp0_desc, 0, value.k2a_1);
    if (tmp1_output.vn(tmp0_desc, 1) ? true : !(value.l2a_1 == null)) {
      tmp1_output.rn(tmp0_desc, 1, LongSerializer_getInstance(), value.l2a_1);
    }
    tmp1_output.pn(tmp0_desc, 2, tmp2_cached[2], value.m2a_1);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_4).qi = function (encoder, value) {
    return this.j2a(encoder, value instanceof Surrogate ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_4();
    return $serializer_instance_3;
  }
  function Surrogate_init_$Init$(seen1, sensorStartTime, sensorEndTime, data, serializationConstructorMarker, $this) {
    if (!(5 === (5 & seen1))) {
      throwMissingFieldException(seen1, 5, $serializer_getInstance_3().i2a_1);
    }
    $this.k2a_1 = sensorStartTime;
    if (0 === (seen1 & 2))
      $this.l2a_1 = null;
    else
      $this.l2a_1 = sensorEndTime;
    $this.m2a_1 = data;
    return $this;
  }
  function Surrogate_init_$Create$(seen1, sensorStartTime, sensorEndTime, data, serializationConstructorMarker) {
    return Surrogate_init_$Init$(seen1, sensorStartTime, sensorEndTime, data, serializationConstructorMarker, objectCreate(protoOf(Surrogate)));
  }
  function Surrogate(sensorStartTime, sensorEndTime, data) {
    Companion_getInstance_9();
    sensorEndTime = sensorEndTime === VOID ? null : sensorEndTime;
    this.k2a_1 = sensorStartTime;
    this.l2a_1 = sensorEndTime;
    this.m2a_1 = data;
  }
  function MeasurementSerializer() {
    MeasurementSerializer_instance = this;
    this.n2a_1 = Companion_getInstance_9().m16().pi();
  }
  protoOf(MeasurementSerializer).pi = function () {
    return this.n2a_1;
  };
  protoOf(MeasurementSerializer).o2a = function (encoder, value) {
    var surrogate = new Surrogate(value.sensorStartTime, value.sensorEndTime, value.data);
    encoder.qn(Companion_getInstance_9().m16(), surrogate);
  };
  protoOf(MeasurementSerializer).qi = function (encoder, value) {
    return this.o2a(encoder, value instanceof Measurement ? value : THROW_CCE());
  };
  protoOf(MeasurementSerializer).ri = function (decoder) {
    var surrogate = decoder.wl(Companion_getInstance_9().m16());
    var data = surrogate.m2a_1;
    var tmp;
    if (data instanceof CustomData) {
      tmp = Companion_instance.fromString(data.n1z_1);
    } else {
      tmp = getDataType(getKClassFromExpression(data));
    }
    var dataType = tmp;
    return new Measurement(surrogate.k2a_1, surrogate.l2a_1, dataType, data);
  };
  var MeasurementSerializer_instance;
  function MeasurementSerializer_getInstance() {
    if (MeasurementSerializer_instance == null)
      new MeasurementSerializer();
    return MeasurementSerializer_instance;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    this.UnixEpoch = new SyncPoint(Companion_getInstance_0().z13(new Long(0, 0)), new Long(0, 0));
  }
  protoOf(Companion_8).p2a = function () {
    return this.UnixEpoch;
  };
  protoOf(Companion_8).m16 = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.application.SyncPoint', this, 3);
    tmp0_serialDesc.nt('synchronizedOn', false);
    tmp0_serialDesc.nt('sensorTimestampAtSyncPoint', false);
    tmp0_serialDesc.nt('relativeClockSpeed', false);
    this.q2a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).pi = function () {
    return this.q2a_1;
  };
  protoOf($serializer_5).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [InstantIso8601Serializer_getInstance(), LongSerializer_getInstance(), DoubleSerializer_getInstance()];
  };
  protoOf($serializer_5).ri = function (decoder) {
    var tmp0_desc = this.q2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = new Long(0, 0);
    var tmp6_local2 = 0.0;
    var tmp7_input = decoder.xl(tmp0_desc);
    if (tmp7_input.om()) {
      tmp4_local0 = tmp7_input.jm(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.dm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.fm(tmp0_desc, 2);
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
            tmp5_local1 = tmp7_input.dm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.fm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return SyncPoint_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_5).r2a = function (encoder, value) {
    var tmp0_desc = this.q2a_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, InstantIso8601Serializer_getInstance(), value.synchronizedOn);
    tmp1_output.jn(tmp0_desc, 1, value.sensorTimestampAtSyncPoint);
    tmp1_output.ln(tmp0_desc, 2, value.relativeClockSpeed);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_5).qi = function (encoder, value) {
    return this.r2a(encoder, value instanceof SyncPoint ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_5();
    return $serializer_instance_4;
  }
  function SyncPoint_init_$Init$(seen1, synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_4().q2a_1);
    }
    $this.synchronizedOn = synchronizedOn;
    $this.sensorTimestampAtSyncPoint = sensorTimestampAtSyncPoint;
    $this.relativeClockSpeed = relativeClockSpeed;
    return $this;
  }
  function SyncPoint_init_$Create$(seen1, synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed, serializationConstructorMarker) {
    return SyncPoint_init_$Init$(seen1, synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed, serializationConstructorMarker, objectCreate(protoOf(SyncPoint)));
  }
  function SyncPoint(synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed) {
    Companion_getInstance_10();
    relativeClockSpeed = relativeClockSpeed === VOID ? 1.0 : relativeClockSpeed;
    this.synchronizedOn = synchronizedOn;
    this.sensorTimestampAtSyncPoint = sensorTimestampAtSyncPoint;
    this.relativeClockSpeed = relativeClockSpeed;
  }
  protoOf(SyncPoint).s2a = function () {
    return this.synchronizedOn;
  };
  protoOf(SyncPoint).t2a = function () {
    return this.sensorTimestampAtSyncPoint;
  };
  protoOf(SyncPoint).u2a = function () {
    return this.relativeClockSpeed;
  };
  protoOf(SyncPoint).od = function () {
    return this.synchronizedOn;
  };
  protoOf(SyncPoint).pd = function () {
    return this.sensorTimestampAtSyncPoint;
  };
  protoOf(SyncPoint).r1g = function () {
    return this.relativeClockSpeed;
  };
  protoOf(SyncPoint).v2a = function (synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed) {
    return new SyncPoint(synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed);
  };
  protoOf(SyncPoint).copy = function (synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed, $super) {
    synchronizedOn = synchronizedOn === VOID ? this.synchronizedOn : synchronizedOn;
    sensorTimestampAtSyncPoint = sensorTimestampAtSyncPoint === VOID ? this.sensorTimestampAtSyncPoint : sensorTimestampAtSyncPoint;
    relativeClockSpeed = relativeClockSpeed === VOID ? this.relativeClockSpeed : relativeClockSpeed;
    return this.v2a(synchronizedOn, sensorTimestampAtSyncPoint, relativeClockSpeed);
  };
  protoOf(SyncPoint).toString = function () {
    return 'SyncPoint(synchronizedOn=' + this.synchronizedOn + ', sensorTimestampAtSyncPoint=' + this.sensorTimestampAtSyncPoint.toString() + ', relativeClockSpeed=' + this.relativeClockSpeed + ')';
  };
  protoOf(SyncPoint).hashCode = function () {
    var result = this.synchronizedOn.hashCode();
    result = imul(result, 31) + this.sensorTimestampAtSyncPoint.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.relativeClockSpeed) | 0;
    return result;
  };
  protoOf(SyncPoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SyncPoint))
      return false;
    var tmp0_other_with_cast = other instanceof SyncPoint ? other : THROW_CCE();
    if (!this.synchronizedOn.equals(tmp0_other_with_cast.synchronizedOn))
      return false;
    if (!this.sensorTimestampAtSyncPoint.equals(tmp0_other_with_cast.sensorTimestampAtSyncPoint))
      return false;
    if (!equals(this.relativeClockSpeed, tmp0_other_with_cast.relativeClockSpeed))
      return false;
    return true;
  };
  function DataStreamServiceRequest$Companion$serializer$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.d1r(p0);
    };
    l.callableName = 'serializer';
    return l;
  }
  function Companion_9() {
  }
  protoOf(Companion_9).m16 = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    return Companion_instance_10;
  }
  function $serializer_6() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest.OpenDataStreams', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('configuration', false);
    this.x2a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).pi = function () {
    return this.x2a_1;
  };
  protoOf($serializer_6).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), $serializer_getInstance_2()];
  };
  protoOf($serializer_6).ri = function (decoder) {
    var tmp0_desc = this.x2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    if (tmp6_input.om()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, $serializer_getInstance_2(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.jm(tmp0_desc, 1, $serializer_getInstance_2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yl(tmp0_desc);
    return OpenDataStreams_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_6).y2a = function (encoder, value) {
    var tmp0_desc = this.x2a_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, $serializer_getInstance_2(), value.configuration);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_6).qi = function (encoder, value) {
    return this.y2a(encoder, value instanceof OpenDataStreams ? value : THROW_CCE());
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_6();
    return $serializer_instance_5;
  }
  function OpenDataStreams_init_$Init$(seen1, apiVersion, configuration, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_5().x2a_1);
    }
    DataStreamServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.configuration = configuration;
    return $this;
  }
  function OpenDataStreams_init_$Create$(seen1, apiVersion, configuration, serializationConstructorMarker) {
    return OpenDataStreams_init_$Init$(seen1, apiVersion, configuration, serializationConstructorMarker, objectCreate(protoOf(OpenDataStreams)));
  }
  function Companion_10() {
  }
  protoOf(Companion_10).m16 = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    return Companion_instance_11;
  }
  function $serializer_7() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest.AppendToDataStreams', this, 3);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentId', false);
    tmp0_serialDesc.nt('batch', false);
    this.a2b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).pi = function () {
    return this.a2b_1;
  };
  protoOf($serializer_7).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), UUIDSerializer_getInstance(), DataStreamBatchSerializer_getInstance()];
  };
  protoOf($serializer_7).ri = function (decoder) {
    var tmp0_desc = this.a2b_1;
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
      tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, DataStreamBatchSerializer_getInstance(), tmp6_local2);
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
            tmp6_local2 = tmp7_input.jm(tmp0_desc, 2, DataStreamBatchSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yl(tmp0_desc);
    return AppendToDataStreams_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_7).b2b = function (encoder, value) {
    var tmp0_desc = this.a2b_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, UUIDSerializer_getInstance(), value.studyDeploymentId);
    tmp1_output.pn(tmp0_desc, 2, DataStreamBatchSerializer_getInstance(), value.batch);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_7).qi = function (encoder, value) {
    return this.b2b(encoder, value instanceof AppendToDataStreams ? value : THROW_CCE());
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_7();
    return $serializer_instance_6;
  }
  function AppendToDataStreams_init_$Init$(seen1, apiVersion, studyDeploymentId, batch, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_6().a2b_1);
    }
    DataStreamServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentId = studyDeploymentId;
    $this.batch = batch;
    return $this;
  }
  function AppendToDataStreams_init_$Create$(seen1, apiVersion, studyDeploymentId, batch, serializationConstructorMarker) {
    return AppendToDataStreams_init_$Init$(seen1, apiVersion, studyDeploymentId, batch, serializationConstructorMarker, objectCreate(protoOf(AppendToDataStreams)));
  }
  function Companion_11() {
  }
  protoOf(Companion_11).m16 = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function $serializer_8() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest.GetDataStream', this, 4);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('dataStream', false);
    tmp0_serialDesc.nt('fromSequenceId', false);
    tmp0_serialDesc.nt('toSequenceIdInclusive', true);
    this.d2b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).pi = function () {
    return this.d2b_1;
  };
  protoOf($serializer_8).cu = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), $serializer_getInstance(), LongSerializer_getInstance(), get_nullable(LongSerializer_getInstance())];
  };
  protoOf($serializer_8).ri = function (decoder) {
    var tmp0_desc = this.d2b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = new Long(0, 0);
    var tmp7_local3 = null;
    var tmp8_input = decoder.xl(tmp0_desc);
    if (tmp8_input.om()) {
      tmp4_local0 = tmp8_input.jm(tmp0_desc, 0, ApiVersionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.dm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.lm(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
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
            tmp5_local1 = tmp8_input.jm(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.dm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.lm(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yl(tmp0_desc);
    return GetDataStream_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_8).e2b = function (encoder, value) {
    var tmp0_desc = this.d2b_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, $serializer_getInstance(), value.dataStream);
    tmp1_output.jn(tmp0_desc, 2, value.fromSequenceId);
    if (tmp1_output.vn(tmp0_desc, 3) ? true : !(value.toSequenceIdInclusive == null)) {
      tmp1_output.rn(tmp0_desc, 3, LongSerializer_getInstance(), value.toSequenceIdInclusive);
    }
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_8).qi = function (encoder, value) {
    return this.e2b(encoder, value instanceof GetDataStream ? value : THROW_CCE());
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_8();
    return $serializer_instance_7;
  }
  function GetDataStream_init_$Init$(seen1, apiVersion, dataStream, fromSequenceId, toSequenceIdInclusive, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_7().d2b_1);
    }
    DataStreamServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.dataStream = dataStream;
    $this.fromSequenceId = fromSequenceId;
    if (0 === (seen1 & 8))
      $this.toSequenceIdInclusive = null;
    else
      $this.toSequenceIdInclusive = toSequenceIdInclusive;
    return $this;
  }
  function GetDataStream_init_$Create$(seen1, apiVersion, dataStream, fromSequenceId, toSequenceIdInclusive, serializationConstructorMarker) {
    return GetDataStream_init_$Init$(seen1, apiVersion, dataStream, fromSequenceId, toSequenceIdInclusive, serializationConstructorMarker, objectCreate(protoOf(GetDataStream)));
  }
  function Companion_12() {
    Companion_instance_13 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g2b_1 = [null, new LinkedHashSetSerializer(UUIDSerializer_getInstance())];
  }
  protoOf(Companion_12).m16 = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function $serializer_9() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest.CloseDataStreams', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentIds', false);
    this.h2b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).pi = function () {
    return this.h2b_1;
  };
  protoOf($serializer_9).cu = function () {
    var tmp0_cached = Companion_getInstance_14().g2b_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), tmp0_cached[1]];
  };
  protoOf($serializer_9).ri = function (decoder) {
    var tmp0_desc = this.h2b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_14().g2b_1;
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
    return CloseDataStreams_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_9).i2b = function (encoder, value) {
    var tmp0_desc = this.h2b_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().g2b_1;
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.studyDeploymentIds);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_9).qi = function (encoder, value) {
    return this.i2b(encoder, value instanceof CloseDataStreams ? value : THROW_CCE());
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_9();
    return $serializer_instance_8;
  }
  function CloseDataStreams_init_$Init$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_8().h2b_1);
    }
    DataStreamServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentIds = studyDeploymentIds;
    return $this;
  }
  function CloseDataStreams_init_$Create$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker) {
    return CloseDataStreams_init_$Init$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker, objectCreate(protoOf(CloseDataStreams)));
  }
  function Companion_13() {
    Companion_instance_14 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k2b_1 = [null, new LinkedHashSetSerializer(UUIDSerializer_getInstance())];
  }
  protoOf(Companion_13).m16 = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function $serializer_10() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest.RemoveDataStreams', this, 2);
    tmp0_serialDesc.nt('apiVersion', false);
    tmp0_serialDesc.nt('studyDeploymentIds', false);
    this.l2b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).pi = function () {
    return this.l2b_1;
  };
  protoOf($serializer_10).cu = function () {
    var tmp0_cached = Companion_getInstance_15().k2b_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [ApiVersionSerializer_getInstance(), tmp0_cached[1]];
  };
  protoOf($serializer_10).ri = function (decoder) {
    var tmp0_desc = this.l2b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xl(tmp0_desc);
    var tmp7_cached = Companion_getInstance_15().k2b_1;
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
    return RemoveDataStreams_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_10).m2b = function (encoder, value) {
    var tmp0_desc = this.l2b_1;
    var tmp1_output = encoder.xl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().k2b_1;
    tmp1_output.pn(tmp0_desc, 0, ApiVersionSerializer_getInstance(), value.apiVersion);
    tmp1_output.pn(tmp0_desc, 1, tmp2_cached[1], value.studyDeploymentIds);
    tmp1_output.yl(tmp0_desc);
  };
  protoOf($serializer_10).qi = function (encoder, value) {
    return this.m2b(encoder, value instanceof RemoveDataStreams ? value : THROW_CCE());
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_10();
    return $serializer_instance_9;
  }
  function RemoveDataStreams_init_$Init$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_9().l2b_1);
    }
    DataStreamServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this);
    $this.studyDeploymentIds = studyDeploymentIds;
    return $this;
  }
  function RemoveDataStreams_init_$Create$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker) {
    return RemoveDataStreams_init_$Init$(seen1, apiVersion, studyDeploymentIds, serializationConstructorMarker, objectCreate(protoOf(RemoveDataStreams)));
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.w2a_1.r2();
  }
  function DataStreamServiceRequest$Companion$_anonymous__so08vp() {
    var tmp = getKClass(DataStreamServiceRequest);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(AppendToDataStreams), getKClass(CloseDataStreams), getKClass(GetDataStream), getKClass(OpenDataStreams), getKClass(RemoveDataStreams)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_6(), $serializer_getInstance_8(), $serializer_getInstance_7(), $serializer_getInstance_5(), $serializer_getInstance_9()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('dk.cachet.carp.data.infrastructure.DataStreamServiceRequest', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Serializer() {
    Serializer_instance = this;
    var tmp = this;
    tmp.o2b_1 = ignoreTypeParameters(DataStreamServiceRequest$Companion$serializer$ref(Companion_getInstance_16()));
  }
  protoOf(Serializer).pi = function () {
    return this.o2b_1.pi();
  };
  protoOf(Serializer).ri = function (decoder) {
    return this.o2b_1.ri(decoder);
  };
  protoOf(Serializer).p2b = function (encoder, value) {
    this.o2b_1.qi(encoder, value);
  };
  protoOf(Serializer).qi = function (encoder, value) {
    return this.p2b(encoder, value instanceof DataStreamServiceRequest ? value : THROW_CCE());
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
  protoOf(OpenDataStreams).q2b = function () {
    return this.configuration;
  };
  protoOf(OpenDataStreams).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Unit), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(OpenDataStreams).od = function () {
    return this.configuration;
  };
  protoOf(OpenDataStreams).r2b = function (configuration) {
    return new OpenDataStreams(configuration);
  };
  protoOf(OpenDataStreams).copy = function (configuration, $super) {
    configuration = configuration === VOID ? this.configuration : configuration;
    return this.r2b(configuration);
  };
  protoOf(OpenDataStreams).toString = function () {
    return 'OpenDataStreams(configuration=' + this.configuration + ')';
  };
  protoOf(OpenDataStreams).hashCode = function () {
    return this.configuration.hashCode();
  };
  protoOf(OpenDataStreams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpenDataStreams))
      return false;
    var tmp0_other_with_cast = other instanceof OpenDataStreams ? other : THROW_CCE();
    if (!this.configuration.equals(tmp0_other_with_cast.configuration))
      return false;
    return true;
  };
  function AppendToDataStreams(studyDeploymentId, batch) {
    DataStreamServiceRequest.call(this);
    this.studyDeploymentId = studyDeploymentId;
    this.batch = batch;
  }
  protoOf(AppendToDataStreams).s28 = function () {
    return this.studyDeploymentId;
  };
  protoOf(AppendToDataStreams).t2b = function () {
    return this.batch;
  };
  protoOf(AppendToDataStreams).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Unit), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(AppendToDataStreams).od = function () {
    return this.studyDeploymentId;
  };
  protoOf(AppendToDataStreams).pd = function () {
    return this.batch;
  };
  protoOf(AppendToDataStreams).u2b = function (studyDeploymentId, batch) {
    return new AppendToDataStreams(studyDeploymentId, batch);
  };
  protoOf(AppendToDataStreams).copy = function (studyDeploymentId, batch, $super) {
    studyDeploymentId = studyDeploymentId === VOID ? this.studyDeploymentId : studyDeploymentId;
    batch = batch === VOID ? this.batch : batch;
    return this.u2b(studyDeploymentId, batch);
  };
  protoOf(AppendToDataStreams).toString = function () {
    return 'AppendToDataStreams(studyDeploymentId=' + this.studyDeploymentId + ', batch=' + this.batch + ')';
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
    var tmp0_other_with_cast = other instanceof AppendToDataStreams ? other : THROW_CCE();
    if (!this.studyDeploymentId.equals(tmp0_other_with_cast.studyDeploymentId))
      return false;
    if (!equals(this.batch, tmp0_other_with_cast.batch))
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
  protoOf(GetDataStream).e29 = function () {
    return this.dataStream;
  };
  protoOf(GetDataStream).v2b = function () {
    return this.fromSequenceId;
  };
  protoOf(GetDataStream).w2b = function () {
    return this.toSequenceIdInclusive;
  };
  protoOf(GetDataStream).getResponseSerializer = function () {
    return DataStreamBatchSerializer_getInstance();
  };
  protoOf(GetDataStream).od = function () {
    return this.dataStream;
  };
  protoOf(GetDataStream).pd = function () {
    return this.fromSequenceId;
  };
  protoOf(GetDataStream).r1g = function () {
    return this.toSequenceIdInclusive;
  };
  protoOf(GetDataStream).x2b = function (dataStream, fromSequenceId, toSequenceIdInclusive) {
    return new GetDataStream(dataStream, fromSequenceId, toSequenceIdInclusive);
  };
  protoOf(GetDataStream).copy = function (dataStream, fromSequenceId, toSequenceIdInclusive, $super) {
    dataStream = dataStream === VOID ? this.dataStream : dataStream;
    fromSequenceId = fromSequenceId === VOID ? this.fromSequenceId : fromSequenceId;
    toSequenceIdInclusive = toSequenceIdInclusive === VOID ? this.toSequenceIdInclusive : toSequenceIdInclusive;
    return this.x2b(dataStream, fromSequenceId, toSequenceIdInclusive);
  };
  protoOf(GetDataStream).toString = function () {
    return 'GetDataStream(dataStream=' + this.dataStream + ', fromSequenceId=' + this.fromSequenceId.toString() + ', toSequenceIdInclusive=' + toString_0(this.toSequenceIdInclusive) + ')';
  };
  protoOf(GetDataStream).hashCode = function () {
    var result = this.dataStream.hashCode();
    result = imul(result, 31) + this.fromSequenceId.hashCode() | 0;
    result = imul(result, 31) + (this.toSequenceIdInclusive == null ? 0 : this.toSequenceIdInclusive.hashCode()) | 0;
    return result;
  };
  protoOf(GetDataStream).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetDataStream))
      return false;
    var tmp0_other_with_cast = other instanceof GetDataStream ? other : THROW_CCE();
    if (!this.dataStream.equals(tmp0_other_with_cast.dataStream))
      return false;
    if (!this.fromSequenceId.equals(tmp0_other_with_cast.fromSequenceId))
      return false;
    if (!equals(this.toSequenceIdInclusive, tmp0_other_with_cast.toSequenceIdInclusive))
      return false;
    return true;
  };
  function CloseDataStreams(studyDeploymentIds) {
    Companion_getInstance_14();
    DataStreamServiceRequest.call(this);
    this.studyDeploymentIds = studyDeploymentIds;
  }
  protoOf(CloseDataStreams).y2b = function () {
    return this.studyDeploymentIds;
  };
  protoOf(CloseDataStreams).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Unit), arrayOf([]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(CloseDataStreams).od = function () {
    return this.studyDeploymentIds;
  };
  protoOf(CloseDataStreams).z2b = function (studyDeploymentIds) {
    return new CloseDataStreams(studyDeploymentIds);
  };
  protoOf(CloseDataStreams).copy = function (studyDeploymentIds, $super) {
    studyDeploymentIds = studyDeploymentIds === VOID ? this.studyDeploymentIds : studyDeploymentIds;
    return this.z2b(studyDeploymentIds);
  };
  protoOf(CloseDataStreams).toString = function () {
    return 'CloseDataStreams(studyDeploymentIds=' + this.studyDeploymentIds + ')';
  };
  protoOf(CloseDataStreams).hashCode = function () {
    return hashCode(this.studyDeploymentIds);
  };
  protoOf(CloseDataStreams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseDataStreams))
      return false;
    var tmp0_other_with_cast = other instanceof CloseDataStreams ? other : THROW_CCE();
    if (!equals(this.studyDeploymentIds, tmp0_other_with_cast.studyDeploymentIds))
      return false;
    return true;
  };
  function RemoveDataStreams(studyDeploymentIds) {
    Companion_getInstance_15();
    DataStreamServiceRequest.call(this);
    this.studyDeploymentIds = studyDeploymentIds;
  }
  protoOf(RemoveDataStreams).y2b = function () {
    return this.studyDeploymentIds;
  };
  protoOf(RemoveDataStreams).getResponseSerializer = function () {
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Set), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UUID), arrayOf([]), false))]), false));
    return isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  };
  protoOf(RemoveDataStreams).od = function () {
    return this.studyDeploymentIds;
  };
  protoOf(RemoveDataStreams).z2b = function (studyDeploymentIds) {
    return new RemoveDataStreams(studyDeploymentIds);
  };
  protoOf(RemoveDataStreams).copy = function (studyDeploymentIds, $super) {
    studyDeploymentIds = studyDeploymentIds === VOID ? this.studyDeploymentIds : studyDeploymentIds;
    return this.z2b(studyDeploymentIds);
  };
  protoOf(RemoveDataStreams).toString = function () {
    return 'RemoveDataStreams(studyDeploymentIds=' + this.studyDeploymentIds + ')';
  };
  protoOf(RemoveDataStreams).hashCode = function () {
    return hashCode(this.studyDeploymentIds);
  };
  protoOf(RemoveDataStreams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RemoveDataStreams))
      return false;
    var tmp0_other_with_cast = other instanceof RemoveDataStreams ? other : THROW_CCE();
    if (!equals(this.studyDeploymentIds, tmp0_other_with_cast.studyDeploymentIds))
      return false;
    return true;
  };
  function Companion_14() {
    Companion_instance_15 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.w2a_1 = lazy(tmp_0, DataStreamServiceRequest$Companion$_anonymous__so08vp);
  }
  protoOf(Companion_14).d1r = function (typeSerial0) {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_14).nu = function (typeParamsSerializers) {
    return this.d1r(typeParamsSerializers[0]);
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_14();
    return Companion_instance_15;
  }
  function DataStreamServiceRequest_init_$Init$(seen1, apiVersion, serializationConstructorMarker, $this) {
    ApplicationServiceRequest.call($this);
    $this.s2b_1 = apiVersion;
    return $this;
  }
  function DataStreamServiceRequest() {
    Companion_getInstance_16();
    ApplicationServiceRequest.call(this);
    this.s2b_1 = Companion_getInstance_5().t29_1;
  }
  protoOf(DataStreamServiceRequest).o22 = function () {
    return this.s2b_1;
  };
  function getDataType(dataKlass) {
    var tmp;
    try {
      tmp = Companion_instance.fromString(serializer_0(dataKlass).pi().qj());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof SerializationException) {
        var _ = $p;
        throw IllegalArgumentException_init_$Create$('"' + dataKlass + '" isn\'t a serializable Data class.');
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function applyToTimestamp(_this__u8e3s4, timestamp) {
    var tmp = Big(_this__u8e3s4.relativeClockSpeed).times(Big(timestamp.v9(_this__u8e3s4.sensorTimestampAtSyncPoint))).toFixed();
    var excludingEpoch = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    return toLong_0(excludingEpoch).za(toEpochMicroseconds(_this__u8e3s4.synchronizedOn));
  }
  //region block: post-declaration
  protoOf(MutableDataStreamBatch).t = iterator;
  protoOf(MutableDataStreamBatch).isEmpty = isEmpty;
  protoOf(MutableDataStreamBatch).getDataStreamPoints = getDataStreamPoints;
  defineProp(protoOf(MutableDataStreamBatch), 'sequences', function () {
    return this.g28();
  });
  protoOf($serializer).du = typeParametersSerializers;
  defineProp(protoOf(Companion_1), '$cachedDescriptor', protoOf(Companion_1).c1t);
  defineProp(protoOf(DataStreamPoint), 'dataStream', protoOf(DataStreamPoint).e29);
  protoOf(MutableDataStreamSequence).q8 = get_range;
  protoOf(MutableDataStreamSequence).throwIfIllegalState = throwIfIllegalState;
  protoOf(MutableDataStreamSequence).t = iterator_0;
  protoOf(MutableDataStreamSequence).isImmediatelyFollowedBy = isImmediatelyFollowedBy;
  protoOf(MutableDataStreamSequence).toMutableDataStreamSequence = toMutableDataStreamSequence;
  defineProp(protoOf(MutableDataStreamSequence), 'dataStream', function () {
    return this.e29();
  });
  defineProp(protoOf(MutableDataStreamSequence), 'firstSequenceId', function () {
    return this.g29();
  });
  defineProp(protoOf(MutableDataStreamSequence), 'syncPoint', function () {
    return this.d29();
  });
  defineProp(protoOf(MutableDataStreamSequence), 'triggerIds', function () {
    return this.c29();
  });
  defineProp(protoOf(MutableDataStreamSequence), 'measurements', function () {
    return this.h29();
  });
  defineProp(protoOf(MutableDataStreamSequence), 'range', function () {
    return this.q8();
  });
  protoOf($serializer_1).du = typeParametersSerializers;
  protoOf(DataStreamSequenceSnapshot).q8 = get_range;
  protoOf(DataStreamSequenceSnapshot).throwIfIllegalState = throwIfIllegalState;
  protoOf(DataStreamSequenceSnapshot).t = iterator_0;
  protoOf(DataStreamSequenceSnapshot).isImmediatelyFollowedBy = isImmediatelyFollowedBy;
  protoOf(DataStreamSequenceSnapshot).toMutableDataStreamSequence = toMutableDataStreamSequence;
  defineProp(protoOf(DataStreamSequenceSnapshot), 'dataStream', function () {
    return this.e29();
  });
  defineProp(protoOf(DataStreamSequenceSnapshot), 'firstSequenceId', function () {
    return this.g29();
  });
  defineProp(protoOf(DataStreamSequenceSnapshot), 'measurements', function () {
    return this.h29();
  });
  defineProp(protoOf(DataStreamSequenceSnapshot), 'triggerIds', function () {
    return this.c29();
  });
  defineProp(protoOf(DataStreamSequenceSnapshot), 'syncPoint', function () {
    return this.d29();
  });
  defineProp(protoOf(DataStreamSequenceSnapshot), 'range', function () {
    return this.q8();
  });
  protoOf($serializer_2).du = typeParametersSerializers;
  protoOf($serializer_3).du = typeParametersSerializers;
  defineProp(protoOf(DataStreamsConfiguration), 'expectedDataStreamIds', protoOf(DataStreamsConfiguration).b2a);
  protoOf($serializer_4).du = typeParametersSerializers;
  protoOf($serializer_5).du = typeParametersSerializers;
  protoOf($serializer_6).du = typeParametersSerializers;
  protoOf($serializer_7).du = typeParametersSerializers;
  protoOf($serializer_8).du = typeParametersSerializers;
  protoOf($serializer_9).du = typeParametersSerializers;
  protoOf($serializer_10).du = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_5 = new Companion_4();
  Companion_instance_7 = new Companion_6();
  Companion_instance_10 = new Companion_9();
  Companion_instance_11 = new Companion_10();
  Companion_instance_12 = new Companion_11();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$data = $dk$cachet$carp.data || ($dk$cachet$carp.data = {});
    var $dk$cachet$carp$data$application = $dk$cachet$carp$data.application || ($dk$cachet$carp$data.application = {});
    $dk$cachet$carp$data$application.MutableDataStreamBatch = MutableDataStreamBatch;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$data = $dk$cachet$carp.data || ($dk$cachet$carp.data = {});
    var $dk$cachet$carp$data$application = $dk$cachet$carp$data.application || ($dk$cachet$carp$data.application = {});
    $dk$cachet$carp$data$application.DataStreamId = DataStreamId;
    defineProp($dk$cachet$carp$data$application.DataStreamId, 'Companion', Companion_getInstance_2);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$data = $dk$cachet$carp.data || ($dk$cachet$carp.data = {});
    var $dk$cachet$carp$data$application = $dk$cachet$carp$data.application || ($dk$cachet$carp$data.application = {});
    $dk$cachet$carp$data$application.DataStreamPoint = DataStreamPoint;
    defineProp($dk$cachet$carp$data$application.DataStreamPoint, 'Companion', Companion_getInstance_3);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$data = $dk$cachet$carp.data || ($dk$cachet$carp.data = {});
    var $dk$cachet$carp$data$application = $dk$cachet$carp$data.application || ($dk$cachet$carp$data.application = {});
    $dk$cachet$carp$data$application.MutableDataStreamSequence = MutableDataStreamSequence;
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$data = $dk$cachet$carp.data || ($dk$cachet$carp.data = {});
    var $dk$cachet$carp$data$application = $dk$cachet$carp$data.application || ($dk$cachet$carp$data.application = {});
    $dk$cachet$carp$data$application.DataStreamsConfiguration = DataStreamsConfiguration;
    $dk$cachet$carp$data$application.DataStreamsConfiguration.ExpectedDataStream = ExpectedDataStream;
    defineProp($dk$cachet$carp$data$application.DataStreamsConfiguration.ExpectedDataStream, 'Companion', Companion_getInstance_6);
    defineProp($dk$cachet$carp$data$application.DataStreamsConfiguration, 'Companion', Companion_getInstance_7);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$data = $dk$cachet$carp.data || ($dk$cachet$carp.data = {});
    var $dk$cachet$carp$data$application = $dk$cachet$carp$data.application || ($dk$cachet$carp$data.application = {});
    $dk$cachet$carp$data$application.Measurement = Measurement;
    defineProp($dk$cachet$carp$data$application.Measurement, 'Companion', Companion_getInstance_8);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$data = $dk$cachet$carp.data || ($dk$cachet$carp.data = {});
    var $dk$cachet$carp$data$application = $dk$cachet$carp$data.application || ($dk$cachet$carp$data.application = {});
    $dk$cachet$carp$data$application.SyncPoint = SyncPoint;
    defineProp($dk$cachet$carp$data$application.SyncPoint, 'Companion', Companion_getInstance_10);
    var $dk = _.dk || (_.dk = {});
    var $dk$cachet = $dk.cachet || ($dk.cachet = {});
    var $dk$cachet$carp = $dk$cachet.carp || ($dk$cachet.carp = {});
    var $dk$cachet$carp$data = $dk$cachet$carp.data || ($dk$cachet$carp.data = {});
    var $dk$cachet$carp$data$infrastructure = $dk$cachet$carp$data.infrastructure || ($dk$cachet$carp$data.infrastructure = {});
    $dk$cachet$carp$data$infrastructure.DataStreamServiceRequest = DataStreamServiceRequest;
    defineProp($dk$cachet$carp$data$infrastructure.DataStreamServiceRequest, 'Serializer', Serializer_getInstance);
    $dk$cachet$carp$data$infrastructure.DataStreamServiceRequest.OpenDataStreams = OpenDataStreams;
    defineProp($dk$cachet$carp$data$infrastructure.DataStreamServiceRequest.OpenDataStreams, 'Companion', Companion_getInstance_11);
    $dk$cachet$carp$data$infrastructure.DataStreamServiceRequest.AppendToDataStreams = AppendToDataStreams;
    defineProp($dk$cachet$carp$data$infrastructure.DataStreamServiceRequest.AppendToDataStreams, 'Companion', Companion_getInstance_12);
    $dk$cachet$carp$data$infrastructure.DataStreamServiceRequest.GetDataStream = GetDataStream;
    defineProp($dk$cachet$carp$data$infrastructure.DataStreamServiceRequest.GetDataStream, 'Companion', Companion_getInstance_13);
    $dk$cachet$carp$data$infrastructure.DataStreamServiceRequest.CloseDataStreams = CloseDataStreams;
    defineProp($dk$cachet$carp$data$infrastructure.DataStreamServiceRequest.CloseDataStreams, 'Companion', Companion_getInstance_14);
    $dk$cachet$carp$data$infrastructure.DataStreamServiceRequest.RemoveDataStreams = RemoveDataStreams;
    defineProp($dk$cachet$carp$data$infrastructure.DataStreamServiceRequest.RemoveDataStreams, 'Companion', Companion_getInstance_15);
    defineProp($dk$cachet$carp$data$infrastructure.DataStreamServiceRequest, 'Companion', Companion_getInstance_16);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=carp-data-core-generated.js.map
