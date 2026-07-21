/// <reference path="kotlin-kotlin-stdlib.d.ts" />
import extend from "@cachet/kotlin-kotlin-stdlib";
// Facade with better method names and type conversions for internal types.
export var kotlinExport;
(function (kotlinExport) {
    /**
     * @deprecated Use {@link BigInt} constructor or bigint literal instead.
     */
    kotlinExport.toLong = (number) => BigInt(number);
    /**
     * @deprecated Use {@link KtMap} and initialize using JS arrays instead.
     */
    class Pair {
        constructor(first, second) {
            let kotlinPair = new extend.$_$.Pair(first, second);
            return kotlinPair;
        }
    }
    kotlinExport.Pair = Pair;
})(kotlinExport || (kotlinExport = {}));
(function (kotlinExport) {
    var collections;
    (function (collections) {
        collections.KtList = extend.kotlin.collections.KtList;
        collections.KtSet = extend.kotlin.collections.KtSet;
        collections.KtMap = extend.kotlin.collections.KtMap;
        /**
         * @deprecated Use {@link KtList.fromJsArray} instead.
         */
        function listOf(array) { return collections.KtList.fromJsArray(array); }
        collections.listOf = listOf;
        /**
         * @deprecated Use {@link KtSet.fromJsSet} instead.
         */
        function setOf(array) { return collections.KtSet.fromJsSet(new Set(array)); }
        collections.setOf = setOf;
        /**
         * @deprecated Use {@link KtMap.fromJsMap} instead.
         */
        function mapOf(pairs) {
            return collections.KtMap.fromJsMap(new Map(pairs.map(pair => [pair.first, pair.second])));
        }
        collections.mapOf = mapOf;
    })(collections = kotlinExport.collections || (kotlinExport.collections = {}));
})(kotlinExport || (kotlinExport = {}));
(function (kotlinExport) {
    var time;
    (function (time) {
        let Clock;
        (function (Clock) {
            Clock.System = extend.$_$.System_instance;
        })(Clock = time.Clock || (time.Clock = {}));
        let Duration;
        (function (Duration) {
            Duration.Companion = extend.$_$.Companion_getInstance_17();
            Duration.parseIsoString = Duration.Companion.tg;
            Duration.ZERO = Duration.Companion.mg_1;
            Duration.INFINITE = Duration.Companion.ng_1;
        })(Duration = time.Duration || (time.Duration = {}));
    })(time = kotlinExport.time || (kotlinExport.time = {}));
})(kotlinExport || (kotlinExport = {}));
// Implement base interfaces in internal types.
BigInt.prototype.toNumber = function () { return Number(this); };
BigInt.prototype.toDurationString = function () { return extend.$_$.Duration__toString_impl_8d916b(this); };
extend.$_$.System.prototype.now = function () { return this.lg(); };
extend.$_$.Instant.prototype.toEpochMilliseconds = function () { return this.ih(); };
Object.defineProperty(BigInt.prototype, "inWholeMilliseconds", {
    get: function inWholeMilliseconds() {
        return extend.$_$._Duration___get_inWholeMilliseconds__impl__msfiry(this);
    }
});
Object.defineProperty(BigInt.prototype, "inWholeMicroseconds", {
    get: function inWholeMicroseconds() {
        return extend.$_$._Duration___get_inWholeMicroseconds__impl__8oe8vv(this);
    }
});
extend.$_$.EmptyList.prototype.contains = function (value) { return false; };
extend.$_$.EmptyList.prototype.size = function () { return 0; };
extend.$_$.EmptyList.prototype.toArray = function () { return []; };
extend.$_$.AbstractMutableList.prototype.contains = function (value) { return this.asJsReadonlyArrayView().includes(value); };
extend.$_$.AbstractMutableList.prototype.size = function () { return this.asJsReadonlyArrayView().length; };
extend.$_$.EmptySet.prototype.contains = function (value) { return false; };
extend.$_$.EmptySet.prototype.size = function () { return 0; };
extend.$_$.EmptySet.prototype.toArray = function () { return []; };
extend.$_$.HashSet.prototype.contains = function (value) { return this.asJsReadonlySetView().has(value); };
extend.$_$.HashSet.prototype.size = function () { return this.asJsReadonlySetView().size; };
extend.$_$.HashMap.prototype.get = function (key) { return this.asJsReadonlyMapView().get(key); };
Object.defineProperty(extend.$_$.HashMap.prototype, "keys", {
    get: function keys() { return extend.kotlin.collections.KtSet.fromJsSet(new Set(this.asJsReadonlyMapView().keys())); }
});
Object.defineProperty(extend.$_$.HashMap.prototype, "values", {
    get: function values() { return extend.kotlin.collections.KtList.fromJsArray([...this.asJsReadonlyMapView().values()]); }
});
// Export facade.
export default kotlinExport;
//# sourceMappingURL=index.js.map