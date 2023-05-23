"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const other_1 = require("./other");
const simple_crypto_js_1 = __importDefault(require("simple-crypto-js"));
const _secretKey = other_1.CONSTS.JWT_PRIVATE_KEY;
const encrypt = data => {
    const crypto = new simple_crypto_js_1.default(_secretKey);
    return crypto.encrypt(data);
};
exports.encrypt = encrypt;
const decrypt = data => {
    const crypto = new simple_crypto_js_1.default(_secretKey);
    return crypto.decrypt(data);
};
exports.decrypt = decrypt;
