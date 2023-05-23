"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdatedProp = exports.getShipmentData = exports.getShipmentSchema = void 0;
const lodash_1 = __importDefault(require("lodash"));
const promise_memoize_1 = __importDefault(require("promise-memoize"));
const shipment_1 = require("../../models/shipment");
const schemaShipment_1 = require("../../models/schemaShipment");
const shipmentProps_1 = require("./shipmentProps");
function _getShipmentData(schemaShipment, gtmVersion, gtmData, domain) {
    return new Promise(function (resolve) {
        let { Header: ShipmentHeader, Remark, Refnum } = schemaShipment.ActualShipment.Shipment;
        let { Header: StopHeader } = schemaShipment.ActualShipment.ShipmentStop;
        let { Header: ShipUnitHeader } = schemaShipment.ActualShipment.ShipUnit;
        const xmlNs = schemaShipment.xmlNs;
        ShipmentHeader = ShipmentHeader.map(e => (0, shipmentProps_1.mapHeader)(e, 'Shipment : Header', gtmVersion, xmlNs, domain));
        StopHeader = StopHeader.map(e => (0, shipmentProps_1.mapHeader)(e, 'Shipment Stop : Header', gtmVersion, xmlNs, domain));
        ShipUnitHeader = ShipUnitHeader.map(e => (0, shipmentProps_1.mapHeader)(e, 'ShipUnit : Header', gtmVersion, xmlNs, domain));
        const remarkQuals = gtmData.match(/REMARKS="(.*?)"/)[1].split(',');
        Remark = remarkQuals.map((e, i) => (0, shipmentProps_1.mapRemark)(e, Remark, 'Shipment : Remark', gtmVersion, xmlNs, i, domain));
        const refnumQuals = gtmData.match(/SHIPMENT_REFNUMS="(.*?)"/)[1].split(',');
        Refnum = refnumQuals.map((e, i) => (0, shipmentProps_1.mapRefnum)(e, Refnum, 'Shipment : Refnum', gtmVersion, xmlNs, i, domain));
        resolve(lodash_1.default.uniqBy([...ShipmentHeader, ...Remark, ...Refnum, ...StopHeader, ...ShipUnitHeader], e => e.name));
    });
}
function _getUpdatedProp(ActualShipment, shipment, instance, domain) {
    return new Promise(async function (resolve) {
        const newPropAddedinGtm = lodash_1.default.differenceWith(ActualShipment, shipment, (a, b) => a.name === b.name);
        const newPropRemovedinGtm = lodash_1.default.differenceWith(shipment, ActualShipment, (a, b) => a.name === b.name);
        if (newPropAddedinGtm.length > 0) {
            const nshipment = await (0, shipment_1.Shipment)(domain, instance).insertMany(newPropAddedinGtm);
            resolve([...shipment, ...nshipment]);
        }
        else if (newPropRemovedinGtm.length > 0) {
            await (0, shipment_1.Shipment)(domain, instance).deleteMany({
                _id: { $in: [...newPropRemovedinGtm.map(d => d._id)] }
            });
            resolve(lodash_1.default.differenceWith(shipment, newPropRemovedinGtm, (a, b) => a.name === b.name));
        }
        else
            resolve(shipment);
    });
}
function _getShipmentSchema(gtmVersion) {
    return schemaShipment_1.SchemaShipment.findOne({ gtmVersion: gtmVersion }).sort({ _id: 1 });
}
exports.getShipmentSchema = (0, promise_memoize_1.default)(_getShipmentSchema, { maxAge: 60000 });
exports.getShipmentData = (0, promise_memoize_1.default)(_getShipmentData, { maxAge: 60000 });
exports.getUpdatedProp = (0, promise_memoize_1.default)(_getUpdatedProp, { maxAge: 60000 });
