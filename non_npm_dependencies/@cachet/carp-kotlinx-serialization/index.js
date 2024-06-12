/// <reference path="kotlinx-serialization-kotlinx-serialization-core.d.ts" />
/// <reference path="kotlinx-serialization-kotlinx-serialization-json.d.ts" />
import extendCore from "@cachet/kotlinx-serialization-kotlinx-serialization-core";
import extendJson from "@cachet/kotlinx-serialization-kotlinx-serialization-json";
// Facade with better method names and type conversions for internal types.
export var kotlinx;
(function (kotlinx) {
    var serialization;
    (function (serialization) {
        function getSerializer(type) { return type.Companion.m16(); }
        serialization.getSerializer = getSerializer;
    })(serialization = kotlinx.serialization || (kotlinx.serialization = {}));
})(kotlinx || (kotlinx = {}));
(function (kotlinx) {
    var serialization;
    (function (serialization) {
        var json;
        (function (json) {
            let Json;
            (function (Json) {
                Json.Default = extendJson.$_$.Default_getInstance();
            })(Json = json.Json || (json.Json = {}));
        })(json = serialization.json || (serialization.json = {}));
    })(serialization = kotlinx.serialization || (kotlinx.serialization = {}));
})(kotlinx || (kotlinx = {}));
(function (kotlinx) {
    var serialization;
    (function (serialization) {
        var builtins;
        (function (builtins) {
            builtins.ListSerializer = extendCore.$_$.ListSerializer;
            builtins.MapSerializer = extendCore.$_$.MapSerializer;
            builtins.SetSerializer = extendCore.$_$.SetSerializer;
        })(builtins = serialization.builtins || (serialization.builtins = {}));
    })(serialization = kotlinx.serialization || (kotlinx.serialization = {}));
})(kotlinx || (kotlinx = {}));
// Implement base interfaces in internal types.
extendJson.$_$.JsonImpl.prototype.encodeToString =
    function (serializer, value) {
        return this.i14(serializer, value);
    };
extendJson.$_$.JsonImpl.prototype.decodeFromString =
    function (serializer, string) {
        return this.j14(serializer, string);
    };
// Export facade.
export default kotlinx;
//# sourceMappingURL=index.js.map