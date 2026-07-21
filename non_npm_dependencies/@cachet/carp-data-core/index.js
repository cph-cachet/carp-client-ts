import extend from "@cachet/carp-data-core-generated";
import kotlinStdLib from "@cachet/carp-kotlin";
import carpCommon from "@cachet/carp-common";
// Set namespace objects of dependent imported modules, so that they aren't "undefined" at runtime.
extend.kotlin = kotlinStdLib;
extend.dk.cachet.carp.common = carpCommon.dk.cachet.carp.common;
// Export facade.
export { default } from "@cachet/carp-data-core-generated";
//# sourceMappingURL=index.js.map