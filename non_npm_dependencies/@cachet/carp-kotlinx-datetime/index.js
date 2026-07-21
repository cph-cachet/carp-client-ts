import kotlin from "@cachet/carp-kotlin";
/**
 * @deprecated Use `kotlin.time` from `@cachet/carp-kotlin` instead.
 */
export var kotlinx;
(function (kotlinx) {
    var datetime;
    (function (datetime) {
        let Clock;
        (function (Clock) {
            Clock.System = kotlin.time.Clock.System;
        })(Clock = datetime.Clock || (datetime.Clock = {}));
    })(datetime = kotlinx.datetime || (kotlinx.datetime = {}));
})(kotlinx || (kotlinx = {}));
// Export deprecated compatibility facade.
export default kotlinx;
//# sourceMappingURL=index.js.map