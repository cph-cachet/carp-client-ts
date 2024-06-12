(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', '@cachet/kotlin-kotlin-stdlib', '@cachet/kotlinx-serialization-kotlinx-serialization-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('@cachet/kotlin-kotlin-stdlib'), require('@cachet/kotlinx-serialization-kotlinx-serialization-core'));
  else {
    if (typeof this['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    root['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof this['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : this['Kotlin-DateTime-library-kotlinx-datetime'], this['@js-joda/core'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(this, function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  var OffsetDateTime = $module$_js_joda_core_gcv2k.OffsetDateTime;
  var protoOf = kotlin_kotlin.$_$.m8;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.d1;
  var objectCreate = kotlin_kotlin.$_$.k8;
  var captureStack = kotlin_kotlin.$_$.c7;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.b1;
  var IllegalArgumentException = kotlin_kotlin.$_$.wa;
  var classMeta = kotlin_kotlin.$_$.i7;
  var VOID = kotlin_kotlin.$_$.f;
  var Long = kotlin_kotlin.$_$.ya;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var THROW_CCE = kotlin_kotlin.$_$.bb;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v1;
  var indexOf = kotlin_kotlin.$_$.l9;
  var charSequenceLength = kotlin_kotlin.$_$.g7;
  var charSequenceGet = kotlin_kotlin.$_$.f7;
  var toLong = kotlin_kotlin.$_$.p8;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var ArithmeticException = kotlin_kotlin.$_$.qa;
  var numberToLong = kotlin_kotlin.$_$.j8;
  var numberToInt = kotlin_kotlin.$_$.i8;
  var Comparable = kotlin_kotlin.$_$.sa;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.a1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(System, 'System', objectMeta);
  setMetadataFor(DateTimeFormatException, 'DateTimeFormatException', classMeta, IllegalArgumentException, VOID, DateTimeFormatException_init_$Create$);
  setMetadataFor(InstantIso8601Serializer, 'InstantIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Instant_0, 'Instant', classMeta, VOID, [Comparable], VOID, VOID, {0: InstantIso8601Serializer_getInstance});
  //endregion
  function System() {
  }
  protoOf(System).q13 = function () {
    return Companion_getInstance().q13();
  };
  var System_instance;
  function System_getInstance() {
    return System_instance;
  }
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(cause, $this) {
    IllegalArgumentException_init_$Init$_0(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(cause) {
    var tmp = DateTimeFormatException_init_$Init$_0(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function get_DISTANT_PAST_SECONDS() {
    return DISTANT_PAST_SECONDS;
  }
  var DISTANT_PAST_SECONDS;
  function get_DISTANT_FUTURE_SECONDS() {
    return DISTANT_FUTURE_SECONDS;
  }
  var DISTANT_FUTURE_SECONDS;
  function get_NANOS_PER_MILLI() {
    return NANOS_PER_MILLI;
  }
  var NANOS_PER_MILLI;
  function get_MILLIS_PER_ONE() {
    return MILLIS_PER_ONE;
  }
  var MILLIS_PER_ONE;
  function get_NANOS_PER_ONE() {
    return NANOS_PER_ONE;
  }
  var NANOS_PER_ONE;
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.v13_1 = PrimitiveSerialDescriptor('Instant', STRING_getInstance());
  }
  protoOf(InstantIso8601Serializer).pi = function () {
    return this.v13_1;
  };
  protoOf(InstantIso8601Serializer).ri = function (decoder) {
    return Companion_getInstance().w13(decoder.sl());
  };
  protoOf(InstantIso8601Serializer).x13 = function (encoder, value) {
    encoder.cn(value.toString());
  };
  protoOf(InstantIso8601Serializer).qi = function (encoder, value) {
    return this.x13(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function fixOffsetRepresentation($this, isoString) {
    var time = indexOf(isoString, _Char___init__impl__6a9atx(84), VOID, true);
    if (time === -1)
      return isoString;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable = charSequenceLength(isoString) - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlinx.datetime.Companion.fixOffsetRepresentation.<anonymous>' call
          var c = charSequenceGet(isoString, index);
          if (c === _Char___init__impl__6a9atx(43) ? true : c === _Char___init__impl__6a9atx(45)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$1 = -1;
    }
    var offset = tmp$ret$1;
    if (offset < time)
      return isoString;
    var separator = indexOf(isoString, _Char___init__impl__6a9atx(58), offset);
    return !(separator === -1) ? isoString : isoString + ':00';
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_PAST.<anonymous>' call
    var tmp$ret$1 = Instant.ofEpochSecond(get_DISTANT_PAST_SECONDS().f6(), 999999999);
    tmp.r13_1 = new Instant_0(tmp$ret$1);
    var tmp_0 = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_FUTURE.<anonymous>' call
    var tmp$ret$3 = Instant.ofEpochSecond(get_DISTANT_FUTURE_SECONDS().f6(), 0);
    tmp_0.s13_1 = new Instant_0(tmp$ret$3);
    this.t13_1 = new Instant_0(Instant.MIN);
    this.u13_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion).q13 = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  protoOf(Companion).w13 = function (isoString) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.parse.<anonymous>' call
      var tmp$ret$1 = OffsetDateTime.parse(fixOffsetRepresentation(Companion_getInstance(), isoString));
      tmp = new Instant_0(tmp$ret$1.toInstant());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion).y13 = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      // Inline function 'kotlin.floorDiv' call
      var other = toLong(get_NANOS_PER_ONE());
      var q = nanosecondAdjustment.p9(other);
      if (nanosecondAdjustment.jb(other).r9(new Long(0, 0)) < 0 ? !q.q9(other).equals(nanosecondAdjustment) : false) {
        q = q.bb();
      }
      var tmp$ret$0 = q;
      var secs = safeAdd(epochSeconds, tmp$ret$0);
      // Inline function 'kotlin.mod' call
      var other_0 = toLong(get_NANOS_PER_ONE());
      var r = nanosecondAdjustment.ab(other_0);
      var nos = r.za(other_0.hb(r.jb(other_0).hb(r.ib(r.cb())).fb(63))).da();
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromEpochSeconds.<anonymous>' call
      var tmp$ret$3 = Instant.ofEpochSecond(secs.f6(), nos);
      tmp = new Instant_0(tmp$ret$3);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (!isJodaDateTimeException(e)) {
          tmp_1 = !(e instanceof ArithmeticException);
        } else {
          tmp_1 = false;
        }
        if (tmp_1)
          throw e;
        tmp_0 = epochSeconds.r9(new Long(0, 0)) > 0 ? this.u13_1 : this.t13_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion).z13 = function (epochSeconds, nanosecondAdjustment, $super) {
    nanosecondAdjustment = nanosecondAdjustment === VOID ? new Long(0, 0) : nanosecondAdjustment;
    return $super === VOID ? this.y13(epochSeconds, nanosecondAdjustment) : $super.y13.call(this, epochSeconds, nanosecondAdjustment);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Instant_0(value) {
    Companion_getInstance();
    this.a14_1 = value;
  }
  protoOf(Instant_0).b14 = function () {
    return numberToLong(this.a14_1.epochSecond());
  };
  protoOf(Instant_0).c14 = function () {
    return numberToInt(this.a14_1.nano());
  };
  protoOf(Instant_0).d14 = function () {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.b14();
    var other = get_MILLIS_PER_ONE();
    var this_1 = this_0.q9(toLong(other));
    var other_0 = this.c14() / get_NANOS_PER_MILLI() | 0;
    return this_1.za(toLong(other_0));
  };
  protoOf(Instant_0).e14 = function (other) {
    return this.a14_1.compareTo(other.a14_1);
  };
  protoOf(Instant_0).d = function (other) {
    return this.e14(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = this.a14_1 === other.a14_1 ? true : this.a14_1.equals(other.a14_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return this.a14_1.hashCode();
  };
  protoOf(Instant_0).toString = function () {
    return this.a14_1.toString();
  };
  function isJodaDateTimeException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeException');
  }
  function isJodaDateTimeParseException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeParseException');
  }
  function safeAdd(a, b) {
    var sum = a.za(b);
    if (a.jb(sum).r9(new Long(0, 0)) < 0 ? a.jb(b).r9(new Long(0, 0)) >= 0 : false) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + a.toString() + ' + ' + b.toString());
    }
    return sum;
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: init
  System_instance = new System();
  DISTANT_PAST_SECONDS = new Long(-931914497, -750);
  DISTANT_FUTURE_SECONDS = new Long(1151527680, 720);
  NANOS_PER_MILLI = 1000000;
  MILLIS_PER_ONE = 1000;
  NANOS_PER_ONE = 1000000000;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = InstantIso8601Serializer_getInstance;
  _.$_$.b = System_instance;
  _.$_$.c = Companion_getInstance;
  //endregion
  _.$_$.System = System
  _.$_$.System_getInstance = System_getInstance
  _.$_$.Instant_0 = Instant_0
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
