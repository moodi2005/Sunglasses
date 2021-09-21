"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileDB = exports.responseBadRequest = exports.statusCodeBadRequest = exports.statusCodeOK = void 0;
const _1db_1 = require("../1db/1db");
exports.statusCodeOK = 200;
exports.statusCodeBadRequest = 400;
exports.responseBadRequest = {
    statusCode: exports.statusCodeBadRequest,
    message: "invalid url",
};
exports.profileDB = new _1db_1.OneDB("./data/profiles.json");
//# sourceMappingURL=type.js.map