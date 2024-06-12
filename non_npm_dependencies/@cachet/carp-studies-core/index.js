import extend from "@cachet/carp-studies-core-generated";
import carpCommon from "@cachet/carp-common";
import carpDeployments from "@cachet/carp-deployments-core";
// Set namespace objects of dependent imported modules, so that they aren't "undefined" at runtime.
extend.dk.cachet.carp.common = carpCommon.dk.cachet.carp.common;
extend.dk.cachet.carp.deployments = carpDeployments.dk.cachet.carp.deployments;
// Re-export augmented types.
export { default } from "@cachet/carp-studies-core-generated";
//# sourceMappingURL=index.js.map