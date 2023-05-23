"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("./logging"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = __importDefault(require("./db"));
const config_1 = __importDefault(require("./config"));
const validation_1 = __importDefault(require("./validation"));
const prod_1 = __importDefault(require("./prod"));
exports.default = app => {
    (0, logging_1.default)();
    (0, routes_1.default)(app);
    (0, db_1.default)();
    (0, config_1.default)();
    (0, validation_1.default)();
    (0, prod_1.default)(app);
};
