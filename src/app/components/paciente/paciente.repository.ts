import { Paciente } from "../../models/paciente.model";
import pacienteSchema from "./paciente.schema";

async function getPaciente(): Promise<Paciente[]>{
    return pacienteSchema.find(); //mostrar todo
}

async function getPacienteById(id : string): Promise<Paciente | null>{
    return pacienteSchema.findOne({_id:id}); //mostrar todo
}

async function addPaciente(paciente: Paciente): Promise<Paciente>{    //no necesario el async
    return pacienteSchema.create<Paciente>(paciente);
}

async function deletePaciente(id: string) {
    return pacienteSchema.remove({ _id: id });
}

async function modPaciente(_id: string, paciente: Partial<Paciente>): Promise<Partial<Paciente | null>>{
    return pacienteSchema.findByIdAndUpdate(_id, paciente);
}
export default { addPaciente , getPaciente, getPacienteById, modPaciente, deletePaciente};