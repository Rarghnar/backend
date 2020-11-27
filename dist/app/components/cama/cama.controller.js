"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cama_repository_1 = __importDefault(require("./cama.repository"));
function getCamas() {
    return cama_repository_1.default.getCamas();
}
function modCama(id, cama) {
    return cama_repository_1.default.modPaciente(id, cama);
}
function addCama(cama) {
    var _a, _b, _c, _d, _e, _f, _g;
    cama.nombrePaciente = (_a = cama.nombrePaciente) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    cama.apellidosPaciente = (_b = cama.apellidosPaciente) === null || _b === void 0 ? void 0 : _b.toUpperCase();
    cama.rutPaciente = (_c = cama.rutPaciente) === null || _c === void 0 ? void 0 : _c.toUpperCase();
    cama.nombreMedicoEncargado = (_d = cama.nombreMedicoEncargado) === null || _d === void 0 ? void 0 : _d.toUpperCase();
    cama.rutMedicoEncargado = (_e = cama.rutMedicoEncargado) === null || _e === void 0 ? void 0 : _e.toUpperCase();
    cama.nombreEnfermeraEncargada = (_f = cama.nombreEnfermeraEncargada) === null || _f === void 0 ? void 0 : _f.toUpperCase();
    cama.rutEnfermeraEncargada = (_g = cama.rutEnfermeraEncargada) === null || _g === void 0 ? void 0 : _g.toUpperCase();
    cama.createdAt = new Date();
    return cama_repository_1.default.addCama(cama);
}
exports.default = { addCama, getCamas, modCama };
