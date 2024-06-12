/// <reference path="kotlin-kotlin-stdlib.d.ts" />
import extend from "@cachet/kotlin-kotlin-stdlib";
// Facade with better method names and type conversions for internal types.
export var kotlin;
(function (kotlin) {
    kotlin.toLong = extend.$_$.toLong_0;
    class Pair {
        constructor(first, second) {
            let kotlinPair = new extend.$_$.Pair(first, second);
            kotlinPair.first = kotlinPair.md_1;
            kotlinPair.second = kotlinPair.nd_1;
            return kotlinPair;
        }
        get first() { return this.first; }
        get second() { return this.second; }
    }
    kotlin.Pair = Pair;
})(kotlin || (kotlin = {}));
(function (kotlin) {
    var collections;
    (function (collections) {
        collections.listOf = extend.$_$.listOf_0;
        collections.setOf = extend.$_$.setOf_0;
        collections.mapOf = function (pairs) {
            return extend.$_$.mapOf_0(pairs);
        };
    })(collections = kotlin.collections || (kotlin.collections = {}));
})(kotlin || (kotlin = {}));
(function (kotlin) {
    var time;
    (function (time) {
        let Duration;
        (function (Duration) {
            Duration.Companion = extend.$_$.Companion_getInstance_13();
            Duration.parseIsoString = Duration.Companion.zf;
            Duration.ZERO = Duration.Companion.wf_1;
            Duration.INFINITE = Duration.Companion.xf_1;
        })(Duration = time.Duration || (time.Duration = {}));
    })(time = kotlin.time || (kotlin.time = {}));
})(kotlin || (kotlin = {}));
// Implement base interfaces in internal types.
extend.$_$.Long.prototype.toNumber = function () { return this.da(); };
Object.defineProperty(extend.$_$.Long.prototype, "inWholeMilliseconds", {
    get: function inWholeMilliseconds() {
        return extend.$_$._Duration___get_inWholeMilliseconds__impl__msfiry(this).toNumber();
    }
});
Object.defineProperty(extend.$_$.Long.prototype, "inWholeMicroseconds", {
    get: function inWholeMicroseconds() {
        return extend.$_$._Duration___get_inWholeMicroseconds__impl__8oe8vv(this).toNumber();
    }
});
extend.$_$.EmptyList.prototype.contains = function (value) { return false; };
extend.$_$.EmptyList.prototype.size = function () { return 0; };
extend.$_$.EmptyList.prototype.toArray = function () { return []; };
extend.$_$.AbstractMutableList.prototype.contains = function (value) { return this.p(value); };
extend.$_$.AbstractMutableList.prototype.size = function () { return this.n(); };
extend.$_$.EmptySet.prototype.contains = function (value) { return false; };
extend.$_$.EmptySet.prototype.size = function () { return 0; };
extend.$_$.EmptySet.prototype.toArray = function () { return []; };
extend.$_$.HashSet.prototype.contains = function (value) { return this.p(value); };
extend.$_$.HashSet.prototype.size = function () { return this.n(); };
extend.$_$.HashMap.prototype.get = function (key) { return this.x2(key); };
Object.defineProperty(extend.$_$.HashMap.prototype, "keys", {
    get: function keys() { return this.l2(); }
});
Object.defineProperty(extend.$_$.HashMap.prototype, "values", {
    get: function values() { return this.m2(); }
});
// Export facade.
export default kotlin;
//# sourceMappingURL=index.js.map