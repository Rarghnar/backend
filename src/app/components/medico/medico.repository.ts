import { Medico } from "../../models/medico.model";
import medicoSchema from "./medico.schema";

async function getMedicos(): Promise<Medico[]>{
    return medicoSchema.find(); //mostrar todo
}

async function getMedicoById(id: string): Promise<Medico | null>{
    return medicoSchema.findOne({ _id: id });
}

async function addMedico(medico: Medico): Promise<Medico>{    //no necesario el async
    return medicoSchema.create<Medico>(medico);
}

async function deleteMedico(id:string) {
    return medicoSchema.remove({ _id: id });
}

async function patchMedico(_id: string, medico: Partial<Medico>): Promise<Partial<Medico | null>>{
    return medicoSchema.findByIdAndUpdate(_id, medico);
}

export default { addMedico , getMedicos, getMedicoById, deleteMedico, patchMedico};
