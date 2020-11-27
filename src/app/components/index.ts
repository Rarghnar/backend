import {Express} from "express";
import medico from "./medico";
import paciente from "./paciente";
import enfermera from "./enfermera";
import habitacion from "./habitacion";
import cama from "./cama";
import admin from "./admin";

const components: Express[] = [
    medico,
    paciente,
    enfermera,
    habitacion,
    cama,
    admin,
    

];

export default components;