"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaTransaction = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaTransaction = new mongoose_1.default.Schema({
    xmlNs: {
        type: ['String']
    },
    gtmVersion: {
        type: 'Number'
    },
    GtmTransaction: {
        type: 'Mixed'
    }
});
exports.SchemaTransaction = mongoose_1.default.model('SchemaTransaction', schemaTransaction, 'TransactionSchema');
