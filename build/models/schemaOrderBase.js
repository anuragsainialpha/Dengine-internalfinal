"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaOrderBase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaOrderBase = new mongoose_1.default.Schema({
    xmlNs: {
        type: ['String']
    },
    gtmVersion: {
        type: 'Number'
    },
    TransOrder: {
        type: 'Mixed'
    }
});
exports.SchemaOrderBase = mongoose_1.default.model('SchemaOrderBase', schemaOrderBase, 'OrderBaseSchema');
