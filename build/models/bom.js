"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bom = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bomSchema = new mongoose_1.default.Schema({
    name: {
        type: 'String'
    },
    required: {
        type: 'Boolean'
    },
    disabled: {
        type: 'Boolean'
    },
    display: {
        type: 'Boolean'
    },
    type: {
        type: 'String'
    },
    displayText: {
        type: 'String'
    },
    defaultValue: {
        type: 'String'
    },
    path: {
        type: ['Mixed']
    },
    xmlNs: {
        type: ['String']
    },
    gtmVersion: {
        type: 'Number'
    }
});
const Bom = (domain, instance) => mongoose_1.default.model('Bom', bomSchema, `${domain}_Bom_${instance}`);
exports.Bom = Bom;
