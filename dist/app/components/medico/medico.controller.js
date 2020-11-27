"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medico_repository_1 = __importDefault(require("./medico.repository"));
function getMedicos() {
    return medico_repository_1.default.getMedicos();
}
function getMedicoById(id) {
    return medico_repository_1.default.getMedicoById(id);
}
function patchMedico(id, medico) {
    return medico_repository_1.default.patchMedico(id, medico);
}
function deleteMedico(id) {
    return medico_repository_1.default.deleteMedico(id);
}
function addMedico(medico) {
    var _a, _b, _c, _d, _e, _f;
    medico.nombres = (_a = medico.nombres) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    medico.apellidos = (_b = medico.apellidos) === null || _b === void 0 ? void 0 : _b.toUpperCase();
    medico.sexo = (_c = medico.sexo) === null || _c === void 0 ? void 0 : _c.toUpperCase();
    medico.especialidad = (_d = medico.especialidad) === null || _d === void 0 ? void 0 : _d.toUpperCase();
    medico.direccion = (_e = medico.direccion) === null || _e === void 0 ? void 0 : _e.toUpperCase();
    medico.rut = (_f = medico.rut) === null || _f === void 0 ? void 0 : _f.toUpperCase();
    medico.createdAt = new Date();
    return medico_repository_1.default.addMedico(medico);
}
exports.default = { addMedico, getMedicos, getMedicoById, patchMedico, deleteMedico };
