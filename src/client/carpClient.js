"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var endpoints_1 = require("@/endpoints");
var shared_1 = require("@/shared");
var protocols_1 = require("@/endpoints/protocols");
var CarpClient = /** @class */ (function () {
    function CarpClient(config) {
        this.config = config;
        if (!config.baseUrl) {
            throw new Error("Could not parse the base URL. Make sure to configure CarpClient properly.");
        }
        this.instance = axios_1.default.create({
            baseURL: config.baseUrl,
            headers: {
                "Content-Type": "application/json",
            },
        });
        this.instance.interceptors.response.use(function (response) { return response; }, function (e) {
            var _a, _b, _c;
            if (axios_1.default.isAxiosError(e)) {
                var axiosError = e;
                var sanitizedConfig = "";
                if ((_a = axiosError.response) === null || _a === void 0 ? void 0 : _a.config) {
                    sanitizedConfig = "\nRequest Config: ".concat(JSON.stringify((0, shared_1.sanitizeRequestConfig)(axiosError.response.config), null, 2));
                }
                // eslint-disable-next-line no-console
                console.error("[".concat((_b = axiosError.response) === null || _b === void 0 ? void 0 : _b.status, "] ").concat(axiosError.message, ": ").concat(JSON.stringify((_c = axiosError.response) === null || _c === void 0 ? void 0 : _c.data, null, 2)).concat(sanitizedConfig));
                return Promise.reject(new shared_1.CarpServiceError(axiosError)); // Wrap and re-throw the error
            }
            return Promise.reject(e);
        });
        this.registerEndpoints();
    }
    Object.defineProperty(CarpClient.prototype, "getInstance", {
        get: function () {
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    CarpClient.prototype.setAuthToken = function (token) {
        this.getInstance.defaults.headers.common.Authorization = "Bearer ".concat(token);
    };
    CarpClient.prototype.clearAuthToken = function () {
        delete this.getInstance.defaults.headers.common.Authorization;
    };
    CarpClient.prototype.registerEndpoints = function () {
        this.accounts = new endpoints_1.Accounts(this);
        this.studies = new endpoints_1.Studies(this);
        this.participation = new endpoints_1.Participation(this);
        this.study = new endpoints_1.Study(this);
        this.protocols = new protocols_1.default(this);
    };
    return CarpClient;
}());
exports.default = CarpClient;
