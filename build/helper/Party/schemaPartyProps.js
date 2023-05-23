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
        case path.search('AddressLines') !== -1:
            extract(path, Parent, 'AddressLines');
            break;
        default:
            extract(path, Parent, 'Header');
    }
    return Parent;
};
const getChilds = flattenJson => {
    const GtmContact = { Contact: {}, LocationRef: {} };
    lodash_1.default.keys(flattenJson)
        .map(path => {
        switch (true) {
            case path.search('GtmContact') === -1:
                break;
            case path.search('LocationRef') !== -1:
                getChild(path, flattenJson, GtmContact, 'LocationRef');
                break;
            default:
                getChild(path, flattenJson, GtmContact, 'Contact');
        }
        return GtmContact;
    })
        .filter(el => el !== undefined);
    GtmContact.Contact = extractProps(GtmContact.Contact);
    GtmContact.LocationRef = extractProps(GtmContact.LocationRef);
    return { GtmContact };
};
exports.getChilds = getChilds;
const getChild = (path, flattenJson, GtmContact, child) => {
    GtmContact[`${child}`][`${path}`] = flattenJson[`${path}`];
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
        case child === 'AddressLines':
            newPath = (0, other_1.convertPath)(path, 'AddressLines').newPath;
            newName = (0, other_1.convertPath)(path, 'AddressLines').newName;
            break;
        default:
            break;
    }
    if (!Parent[`${child}`])
        Parent[`${child}`] = [];
    Parent[`${child}`].push({ name: (0, renamer_1.getElementName)(newName), path: newPath });
    Parent[`${child}`] = lodash_1.default.uniqBy(Parent[`${child}`], 'name');
};
