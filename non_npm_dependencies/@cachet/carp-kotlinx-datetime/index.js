/// <reference path="Kotlin-DateTime-library-kotlinx-datetime.d.ts" />
import extend from "@cachet/Kotlin-DateTime-library-kotlinx-datetime";
// Facade with better method names and type conversions for internal types.
export var kotlinx;
(function (kotlinx) {
    var datetime;
    (function (datetime) {
        let Clock;
        (function (Clock) {
            Clock.System = extend.$_$.System_getInstance();
        })(Clock = datetime.Clock || (datetime.Clock = {}));
    })(datetime = kotlinx.datetime || (kotlinx.datetime = {}));
})(kotlinx || (kotlinx = {}));
// Implement base interfaces in internal types.
extend.$_$.System.prototype.now = function () { return this.q13(); };
extend.$_$.Instant_0.prototype.toEpochMilliseconds = function () { return this.d14(); };
// Export facade.
export default kotlinx;
//# sourceMappingURL=index.js.map