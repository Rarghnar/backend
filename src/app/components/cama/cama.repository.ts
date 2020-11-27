import { Cama } from "../../models/cama.model";
import camaSchema from "./cama.schema";

async function getCamas(): Promise<Cama[]>{
    return camaSchema.find(); //mostrar todo
}

async function addCama(cama: Cama): Promise<Cama>{    
    return camaSchema.create<Cama>(cama);
}

async function modPaciente(_id: string, paciente: Partial<Cama>): Promise<Partial<Cama | null>> {
    return camaSchema.findByIdAndUpdate(_id, paciente);
}

export default { addCama , getCamas, modPaciente};