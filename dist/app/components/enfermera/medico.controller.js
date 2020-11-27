"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medico_repository_1 = __importDefault(require("./medico.repository"));
function getMedicos() {
    return medico_repository_1.default.getMedicos();
}
function addMedico(medico) {
    var _a, _b, _c, _d, _e, _f;
    medico.nombres = (_a = medico.nombres) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    medico.apellidos = (_b = medico.apellidos) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    medico.rut = (_c = medico.rut) === null || _c === void 0 ? void 0 : _c.toLowerCase();
    medico.contraseña = (_d = medico.contraseña) === null || _d === void 0 ? void 0 : _d.toLowerCase();
    medico.contraseñaRepetida = (_e = medico.contraseñaRepetida) === null || _e === void 0 ? void 0 : _e.toLowerCase();
    medico.email = (_f = medico.email) === null || _f === void 0 ? void 0 : _f.toLowerCase();
    medico.createdAt = new Date();
    return medico_repository_1.default.addMedico(medico);
}
exports.default = { addMedico, getMedicos };
