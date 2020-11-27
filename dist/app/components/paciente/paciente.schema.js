"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// se copia con variacion a 
const definition = {
    createdAt: { type: Date },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    rut: { type: String, required: true },
    diaNacimiento: { type: Number, required: true },
    mesNacimiento: { type: String, required: true },
    anioNacimiento: { type: Number, required: true },
    sexo: { type: String, required: true },
    edad: { type: Number, required: true },
    nacionalidad: { type: String, required: true },
    provincia: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    nombresRepresentante: { type: String, required: false },
    apellidosRepresentante: { type: String, required: false },
    rutRepresentante: { type: String, required: false },
    telefonoRepresentante: { type: String, required: false },
    nombresDoctor: { type: String, required: true },
    apellidosDoctor: { type: String, required: true },
    rutDoctor: { type: String, required: true },
    tipoAtencionMedica: { type: String, required: true },
    motivo: { type: String, required: true },
    fechaIngreso: { type: String, required: true },
    horaIngreso: { type: String, required: true },
    cama: { type: String, required: true },
    habitacion: { type: String, required: true },
    fechaSalida: { type: String, required: false },
    horaSalida: { type: String, required: false },
    enfermeraEncargada: { type: String, required: false },
    enfermeraApellidos: { type: String, required: false },
    ultimoChequeo: { type: String, required: false },
    presionArterial: { type: String, required: false },
    ritmoCardiaco: { type: String, required: false },
    nivelInsulina: { type: String, required: false },
    camaLibre: { type: String, required: false }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Paciente', schema, 'paciente');
