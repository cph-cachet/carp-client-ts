import extend from "@cachet/carp-common-generated";
import kotlinStdLib from "@cachet/carp-kotlin";
// Set namespace objects of dependent imported modules, so that they aren't "undefined" at runtime.
extend.kotlin = kotlinStdLib;
// Re-export augmented types.
export { default } from "@cachet/carp-common-generated";
//# sourceMappingURL=index.js.map