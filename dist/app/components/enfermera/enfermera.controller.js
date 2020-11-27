"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enfermera_repository_1 = __importDefault(require("./enfermera.repository"));
function getEnfermeras() {
    return enfermera_repository_1.default.getEnfermeras();
}
function getEnfermeraById(id) {
    return enfermera_repository_1.default.getEnfermeraById(id);
}
function patchEnfermera(id, enfermera) {
    return enfermera_repository_1.default.patchEnfermera(id, enfermera);
}
function deleteEnfermera(id) {
    return enfermera_repository_1.default.deleteEnfermera(id);
}
function addEnfermera(enfermera) {
    var _a, _b, _c, _d, _e, _f;
    enfermera.nombres = (_a = enfermera.nombres) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    enfermera.apellidos = (_b = enfermera.apellidos) === null || _b === void 0 ? void 0 : _b.toUpperCase();
    enfermera.rut = (_c = enfermera.rut) === null || _c === void 0 ? void 0 : _c.toUpperCase();
    enfermera.sexo = (_d = enfermera.sexo) === null || _d === void 0 ? void 0 : _d.toUpperCase();
    enfermera.direccion = (_e = enfermera.direccion) === null || _e === void 0 ? void 0 : _e.toUpperCase();
    enfermera.email = (_f = enfermera.email) === null || _f === void 0 ? void 0 : _f.toLowerCase();
    enfermera.createdAt = new Date();
    return enfermera_repository_1.default.addEnfermera(enfermera);
}
exports.default = { addEnfermera, getEnfermeras, getEnfermeraById, deleteEnfermera, patchEnfermera };
