import { Medico } from "../../models/medico.model";
import medicoRepository from "./medico.repository";


function getMedicos(): Promise<Medico[]>{
    return medicoRepository.getMedicos();
}

function getMedicoById(id: string): Promise<Medico | null>{
    return medicoRepository.getMedicoById(id);
}

function patchMedico(id: string, medico: Partial<Medico>): Promise<Partial<Medico | null>>{
    return medicoRepository.patchMedico(id, medico);
}

function deleteMedico(id: string) {
    return medicoRepository.deleteMedico(id);
}

function addMedico(medico: Medico): Promise<Medico>{
    medico.nombres = medico.nombres?.toUpperCase();
    medico.apellidos = medico.apellidos?.toUpperCase();
    medico.sexo = medico.sexo?.toUpperCase();
    medico.especialidad = medico.especialidad?.toUpperCase();
    medico.direccion = medico.direccion?.toUpperCase();
    medico.rut = medico.rut?.toUpperCase();
    medico.createdAt = new Date();

    return medicoRepository.addMedico(medico);
}

export default { addMedico, getMedicos, getMedicoById, patchMedico, deleteMedico};
