"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdatedProp = exports.getOrderBaseData = exports.getOrderBaseSchema = void 0;
const lodash_1 = __importDefault(require("lodash"));
const promise_memoize_1 = __importDefault(require("promise-memoize"));
const orderBase_1 = require("../../models/orderBase");
const schemaOrderBase_1 = require("../../models/schemaOrderBase");
const orderBaseProps_1 = require("./orderBaseProps");
function _getOrderBaseData(schemaOrderBase, gtmVersion, gtmData, domain) {
    return new Promise(function (resolve) {
        let { Header: OrderBaseHeader, Remark: OrderBaseRemark, Refnum: OrderBaseRefnum } = schemaOrderBase.TransOrder.OrderBase;
        let { Header: LineHeader, Remark: LineRemark, Refnum: LineRefnum } = schemaOrderBase.TransOrder.OrderBaseLine;
        const xmlNs = schemaOrderBase.xmlNs;
        OrderBaseHeader = OrderBaseHeader.map(e => (0, orderBaseProps_1.mapHeader)(e, 'Order Base : Header', gtmVersion, xmlNs, domain));
        LineHeader = LineHeader.map(e => (0, orderBaseProps_1.mapHeader)(e, 'Order Base Line : Header', gtmVersion, xmlNs, domain));
        const remarkQuals = gtmData.match(/REMARKS="(.*?)"/)[1].split(',');
        OrderBaseRemark = remarkQuals.map((e, i) => (0, orderBaseProps_1.mapRemark)(e, OrderBaseRemark, 'Order Base : Remark', gtmVersion, xmlNs, i, '', domain));
        LineRemark = remarkQuals.map((e, i) => (0, orderBaseProps_1.mapRemark)(e, LineRemark, 'Order Base Line : Remark', gtmVersion, xmlNs, i, 'Line', domain));
        const RefnumQuals = gtmData.match(/REFNUMS="(.*?)"/)[1].split(',');
        OrderBaseRefnum = RefnumQuals.map((e, i) => (0, orderBaseProps_1.mapRefnum)(e, OrderBaseRefnum, 'Order Base : Refnum', gtmVersion, xmlNs, i, '', domain));
        const LineRefnumQuals = gtmData.match(/LINE_REFNUMS="(.*?)"/)[1].split(',');
        LineRefnum = LineRefnumQuals.map((e, i) => (0, orderBaseProps_1.mapRefnum)(e, LineRefnum, 'Order Base Line : Refnum', gtmVersion, xmlNs, i, 'Line', domain));
        resolve(lodash_1.default.uniqBy([
            ...OrderBaseHeader,
            ...OrderBaseRemark,
            ...OrderBaseRefnum,
            ...LineHeader,
            ...LineRemark,
            ...LineRefnum
        ], e => e.name));
    });
}
function _getUpdatedProp(TransOrder, orderBase, instance, domain) {
    return new Promise(async function (resolve) {
        const newPropAddedinGtm = lodash_1.default.differenceWith(TransOrder, orderBase, (a, b) => a.name === b.name);
        const newPropRemovedinGtm = lodash_1.default.differenceWith(orderBase, TransOrder, (a, b) => a.name === b.name);
        if (newPropAddedinGtm.length > 0) {
            const norderBase = await (0, orderBase_1.OrderBase)(domain, instance).insertMany(newPropAddedinGtm);
            resolve([...orderBase, ...norderBase]);
        }
        else if (newPropRemovedinGtm.length > 0) {
            await (0, orderBase_1.OrderBase)(domain, instance).deleteMany({ _id: { $in: [...newPropRemovedinGtm.map(d => d._id)] } });
            resolve(lodash_1.default.differenceWith(orderBase, newPropRemovedinGtm, (a, b) => a.name === b.name));
        }
        else
            resolve(orderBase);
    });
}
function _getOrderBaseSchema(gtmVersion) {
    return schemaOrderBase_1.SchemaOrderBase.findOne({ gtmVersion: gtmVersion }).sort({ _id: 1 });
}
exports.getOrderBaseSchema = (0, promise_memoize_1.default)(_getOrderBaseSchema, { maxAge: 60000 });
exports.getOrderBaseData = (0, promise_memoize_1.default)(_getOrderBaseData, { maxAge: 60000 });
exports.getUpdatedProp = (0, promise_memoize_1.default)(_getUpdatedProp, { maxAge: 60000 });
