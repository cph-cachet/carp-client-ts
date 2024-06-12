import extend from "@cachet/carp-protocols-core-generated";
import carpCommon from "@cachet/carp-common";
// Set namespace objects of dependent imported modules, so that they aren't "undefined" at runtime.
extend.dk.cachet.carp.common = carpCommon.dk.cachet.carp.common;
// Re-export augmented types.
export { default } from "@cachet/carp-protocols-core-generated";
//# sourceMappingURL=index.js.map