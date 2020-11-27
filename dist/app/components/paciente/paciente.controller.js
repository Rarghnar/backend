"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paciente_repository_1 = __importDefault(require("./paciente.repository"));
function getPacientes() {
    return paciente_repository_1.default.getPaciente();
}
function getPacienteById(id) {
    return paciente_repository_1.default.getPacienteById(id);
}
function modPaciente(id, paciente) {
    return paciente_repository_1.default.modPaciente(id, paciente);
}
function deletePaciente(id) {
    return paciente_repository_1.default.deletePaciente(id);
}
function addPaciente(paciente) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
    paciente.nombres = (_a = paciente.nombres) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    paciente.apellidos = (_b = paciente.apellidos) === null || _b === void 0 ? void 0 : _b.toUpperCase();
    paciente.mesNacimiento = (_c = paciente.mesNacimiento) === null || _c === void 0 ? void 0 : _c.toUpperCase();
    paciente.rut = (_d = paciente.rut) === null || _d === void 0 ? void 0 : _d.toUpperCase();
    paciente.sexo = (_e = paciente.sexo) === null || _e === void 0 ? void 0 : _e.toUpperCase();
    paciente.nacionalidad = (_f = paciente.nacionalidad) === null || _f === void 0 ? void 0 : _f.toUpperCase();
    paciente.provincia = (_g = paciente.provincia) === null || _g === void 0 ? void 0 : _g.toUpperCase();
    paciente.direccion = (_h = paciente.direccion) === null || _h === void 0 ? void 0 : _h.toUpperCase();
    paciente.nombresRepresentante = (_j = paciente.nombresRepresentante) === null || _j === void 0 ? void 0 : _j.toUpperCase();
    paciente.apellidosRepresentante = (_k = paciente.apellidosRepresentante) === null || _k === void 0 ? void 0 : _k.toUpperCase();
    paciente.rutRepresentante = (_l = paciente.rutRepresentante) === null || _l === void 0 ? void 0 : _l.toUpperCase();
    paciente.nombresDoctor = (_m = paciente.nombresDoctor) === null || _m === void 0 ? void 0 : _m.toUpperCase();
    paciente.apellidosDoctor = (_o = paciente.apellidosDoctor) === null || _o === void 0 ? void 0 : _o.toUpperCase();
    paciente.rutDoctor = (_p = paciente.rutDoctor) === null || _p === void 0 ? void 0 : _p.toUpperCase();
    paciente.tipoAtencionMedica = (_q = paciente.tipoAtencionMedica) === null || _q === void 0 ? void 0 : _q.toUpperCase();
    paciente.motivo = (_r = paciente.motivo) === null || _r === void 0 ? void 0 : _r.toUpperCase();
    paciente.fechaIngreso = (_s = paciente.fechaIngreso) === null || _s === void 0 ? void 0 : _s.toUpperCase();
    paciente.horaIngreso = (_t = paciente.horaIngreso) === null || _t === void 0 ? void 0 : _t.toUpperCase();
    paciente.fechaSalida = (_u = paciente.fechaSalida) === null || _u === void 0 ? void 0 : _u.toUpperCase();
    paciente.horaSalida = (_v = paciente.horaSalida) === null || _v === void 0 ? void 0 : _v.toUpperCase();
    paciente.cama = (_w = paciente.cama) === null || _w === void 0 ? void 0 : _w.toUpperCase();
    paciente.habitacion = (_x = paciente.habitacion) === null || _x === void 0 ? void 0 : _x.toUpperCase();
    paciente.ultimoChequeo = (_y = paciente.ultimoChequeo) === null || _y === void 0 ? void 0 : _y.toUpperCase();
    paciente.enfermeraEncargada = (_z = paciente.enfermeraEncargada) === null || _z === void 0 ? void 0 : _z.toUpperCase();
    paciente.enfermeraApellidos = (_0 = paciente.enfermeraApellidos) === null || _0 === void 0 ? void 0 : _0.toUpperCase();
    paciente.createdAt = new Date();
    return paciente_repository_1.default.addPaciente(paciente);
}
exports.default = { addPaciente, getPacientes, getPacienteById, modPaciente, deletePaciente };
