"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbXml = exports.wmServlet = void 0;
const curl = __importStar(require("curlrequest"));
const wmServlet = (baseURL, query, username, password) => {
    const uriParam = '/GC3/glog.integration.servlet.WMServlet';
    const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
    const options = {
        url: baseURL + uriParam,
        retries: 30,
        data: query,
        headers: { 'content-type': 'text/xml', Authorization: auth },
    };
    return new Promise((resolve, reject) => {
        const response = { data: '', error: '' };
        curl.request(options, function (err, data) {
            if (err) {
                response.error = err;
                reject(response);
            }
            else {
                response.data = data;
                resolve(response);
            }
        });
    });
};
exports.wmServlet = wmServlet;
const dbXml = (baseURL, query, username, password) => {
    const uriParam = '/GC3/glog.integration.servlet.DBXMLServlet?command=xmlExport';
    const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
    const options = {
        url: baseURL + uriParam,
        retries: 30,
        data: query,
        headers: { 'content-type': 'text/xml', Authorization: auth },
    };
    return new Promise((resolve, reject) => {
        const response = { data: '', error: '' };
        curl.request(options, function (err, data) {
            if (err) {
                response.error = err;
                reject(response);
            }
            else {
                response.data = data;
                resolve(response);
            }
        });
    });
};
exports.dbXml = dbXml;
