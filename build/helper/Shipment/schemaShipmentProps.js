"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChilds = void 0;
const renamer_1 = require("../renamer");
const lodash_1 = __importDefault(require("lodash"));
const other_1 = require("../other");
const extractProps = flattenJson => {
    const Parent = {};
    lodash_1.default.keys(flattenJson)
        .map(path => getProps(path, Parent))
        .filter(el => el !== undefined);
    return Parent;
};
const getProps = (path, Parent) => {
    switch (true) {
        case path.search('Remark') !== -1:
            extract(path, Parent, 'Remark');
            break;
        case path.search('Refnum') !== -1:
            extract(path, Parent, 'Refnum');
            break;
        default:
            extract(path, Parent, 'Header');
    }
    return Parent;
};
const getChilds = flattenJson => {
    const ActualShipment = { Shipment: {}, ShipmentStop: {}, ShipUnit: {} };
    lodash_1.default.keys(flattenJson)
        .map(path => {
        switch (true) {
            case path.search('ActualShipment') === -1:
                break;
            case path.search('ShipmentStop') !== -1:
                getChild(path, flattenJson, ActualShipment, 'ShipmentStop');
                break;
            case path.search('ShipUnit') !== -1:
                getChild(path, flattenJson, ActualShipment, 'ShipUnit');
                break;
            default:
                getChild(path, flattenJson, ActualShipment, 'Shipment');
        }
        return ActualShipment;
    })
        .filter(el => el !== undefined);
    ActualShipment.Shipment = extractProps(ActualShipment.Shipment);
    ActualShipment.ShipmentStop = extractProps(ActualShipment.ShipmentStop);
    ActualShipment.ShipUnit = extractProps(ActualShipment.ShipUnit);
    ActualShipment.Shipment.ShipmentStop = { ...ActualShipment.ShipmentStop };
    ActualShipment.Shipment.ShipUnit = { ...ActualShipment.ShipUnit };
    return { ActualShipment };
};
exports.getChilds = getChilds;
const getChild = (path, flattenJson, ActualShipment, child) => {
    ActualShipment[`${child}`][`${path}`] = flattenJson[`${path}`];
};
const extract = (path, Parent, child) => {
    let newPath = path;
    let newName = path;
    switch (true) {
        case child === 'Remark':
            newPath = (0, other_1.convertPath)(path, 'Remark').newPath;
            newName = (0, other_1.convertPath)(path, 'Remark').newName;
            break;
        case child === 'Refnum':
            newPath = (0, other_1.convertPath)(path, 'Refnum').newPath;
            newName = (0, other_1.convertPath)(path, 'Refnum').newName;
            break;
        default:
            break;
    }
    if (!Parent[`${child}`])
        Parent[`${child}`] = [];
    Parent[`${child}`].push({ name: (0, renamer_1.getElementName)(newName), path: newPath });
    Parent[`${child}`] = lodash_1.default.uniqBy(Parent[`${child}`], 'name');
};
