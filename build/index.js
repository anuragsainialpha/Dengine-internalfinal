"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROOT_DIR = void 0;
const winston_1 = __importDefault(require("winston"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const startup_1 = __importDefault(require("./startup"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
(0, startup_1.default)(app);
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('*', (req, res) => {
    return res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
const port = process.env.PORT || 6000;
const server = app.listen(port, listenerCallback());
function listenerCallback() {
    return () => winston_1.default.info(`Listening on port ${port}...`);
}
exports.default = server;
exports.ROOT_DIR = __dirname;
