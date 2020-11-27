import { Enfermera } from "../../models/enfermera.model";
import enfermeraSchema from "./enfermera.schema";

async function getEnfermeras(): Promise<Enfermera[]>{
    return enfermeraSchema.find(); //mostrar todo
}

async function getEnfermeraById(id: string): Promise<Enfermera | null>{
    return enfermeraSchema.findOne({ _id: id });
}

async function addEnfermera(enfermera: Enfermera): Promise<Enfermera>{    //no necesario el async
    return enfermeraSchema.create<Enfermera>(enfermera);
}

async function deleteEnfermera(id: string) {
    return enfermeraSchema.remove({ _id: id });
}

async function patchEnfermera(_id: string, enfermera: Partial<Enfermera>): Promise<Partial<Enfermera | null>>{
    return enfermeraSchema.findByIdAndUpdate(_id, enfermera);
}

export default { addEnfermera , getEnfermeras, getEnfermeraById, deleteEnfermera, patchEnfermera};
