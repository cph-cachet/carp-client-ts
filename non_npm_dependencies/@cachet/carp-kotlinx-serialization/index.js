/// <reference path="kotlinx-serialization-kotlinx-serialization-core.d.ts" />
/// <reference path="kotlinx-serialization-kotlinx-serialization-json.d.ts" />
import extendCore from "@cachet/kotlinx-serialization-kotlinx-serialization-core";
import extendJson from "@cachet/kotlinx-serialization-kotlinx-serialization-json";
// Facade with better method names and type conversions for internal types.
export var kotlinx;
(function (kotlinx) {
    var serialization;
    (function (serialization) {
        function getSerializer(type) {
            const associatedObjects = Object.values(type.$metadata$.associatedObjects);
            const companion = type.Companion !== undefined
                ? type.Companion
                : associatedObjects.find((o) => o.name.startsWith("Companion"))?.();
            const serializer = companion !== undefined
                ? companion.i18()
                : associatedObjects.find((o) => o.name.startsWith("$serializer"))?.();
            return serializer;
        }
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
extendJson.$_$.Json.prototype.encodeToString =
    function (serializer, value) {
        return this.x15(serializer, value);
    };
extendJson.$_$.Json.prototype.decodeFromString =
    function (serializer, string) {
        return this.y15(serializer, string);
    };
// Export facade.
export default kotlinx;
//# sourceMappingURL=index.js.map