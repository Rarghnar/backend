import { Cama } from "../../models/cama.model";
import camaRepository from "./cama.repository";
import cama from './index';


function getCamas(): Promise<Cama[]>{
    return camaRepository.getCamas();    
}

function modCama(id: string, cama: Partial<Cama>): Promise<Partial<Cama | null>> {
    return camaRepository.modPaciente(id, cama);
}


function addCama(cama: Cama): Promise<Cama>{

    cama.nombrePaciente = cama.nombrePaciente?.toUpperCase();
    cama.apellidosPaciente = cama.apellidosPaciente?.toUpperCase();
    cama.rutPaciente = cama.rutPaciente?.toUpperCase();
    cama.nombreMedicoEncargado = cama.nombreMedicoEncargado?.toUpperCase();
    cama.rutMedicoEncargado = cama.rutMedicoEncargado?.toUpperCase();
    cama.nombreEnfermeraEncargada = cama.nombreEnfermeraEncargada?.toUpperCase();
    cama.rutEnfermeraEncargada = cama.rutEnfermeraEncargada?.toUpperCase();

    cama.createdAt = new Date();

    return camaRepository.addCama(cama);
}

export default { addCama, getCamas, modCama};