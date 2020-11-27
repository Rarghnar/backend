import { Enfermera } from "../../models/enfermera.model";
import enfermeraRepository from "./enfermera.repository";


function getEnfermeras(): Promise<Enfermera[]>{
    return enfermeraRepository.getEnfermeras();
}

function getEnfermeraById(id: string): Promise<Enfermera | null>{
    return enfermeraRepository.getEnfermeraById(id);
}

function patchEnfermera(id: string, enfermera: Partial<Enfermera>): Promise<Partial<Enfermera | null>>{
    return enfermeraRepository.patchEnfermera(id, enfermera);
}

function deleteEnfermera(id: string) {
    return enfermeraRepository.deleteEnfermera(id);
}

function addEnfermera(enfermera: Enfermera): Promise<Enfermera>{
    enfermera.nombres = enfermera.nombres?.toUpperCase();
    enfermera.apellidos = enfermera.apellidos?.toUpperCase();
    enfermera.rut = enfermera.rut?.toUpperCase();
    enfermera.sexo = enfermera.sexo?.toUpperCase();
    enfermera.direccion = enfermera.direccion?.toUpperCase();
    enfermera.email = enfermera.email?.toLowerCase()
    enfermera.createdAt = new Date();

    return enfermeraRepository.addEnfermera(enfermera);
}

export default { addEnfermera, getEnfermeras, getEnfermeraById, deleteEnfermera, patchEnfermera};
