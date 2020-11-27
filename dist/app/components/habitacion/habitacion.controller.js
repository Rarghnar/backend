"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const habitacion_repository_1 = __importDefault(require("./habitacion.repository"));
function getHabitaciones() {
    return habitacion_repository_1.default.getHabitaciones();
}
function getHabitacionById(id) {
    return habitacion_repository_1.default.getHabitacionById(id);
}
function patchHabitacion(id, habitacion) {
    return habitacion_repository_1.default.patchHabitacion(id, habitacion);
}
function deleteHabitacion(id) {
    return habitacion_repository_1.default.deleteHabitacion(id);
}
function addHabitaciones(habitacion) {
    habitacion.codigoHabitacion = habitacion.codigoHabitacion.toUpperCase();
    habitacion.createdAt = new Date();
    return habitacion_repository_1.default.addHabitacion(habitacion);
}
exports.default = { addHabitaciones, getHabitaciones, getHabitacionById, patchHabitacion, deleteHabitacion };
