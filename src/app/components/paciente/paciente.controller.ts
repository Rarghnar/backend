import { Paciente } from "../../models/paciente.model";
import pacienteRepository from "./paciente.repository";


function getPacientes(): Promise<Paciente[]>{
    return pacienteRepository.getPaciente();
}
function getPacienteById(id:string): Promise<Paciente | null>{
    return pacienteRepository.getPacienteById(id);
}

function modPaciente(id: string, paciente: Partial<Paciente>): Promise<Partial<Paciente | null>> {
    return pacienteRepository.modPaciente(id, paciente);
}

function deletePaciente(id: string) {
    return pacienteRepository.deletePaciente(id);
}

function addPaciente(paciente: Paciente): Promise<Paciente>{
    paciente.nombres = paciente.nombres?.toUpperCase();
    paciente.apellidos = paciente.apellidos?.toUpperCase();
    paciente.mesNacimiento = paciente.mesNacimiento?.toUpperCase();
    paciente.rut = paciente.rut?.toUpperCase();
    paciente.sexo = paciente.sexo?.toUpperCase();
    paciente.nacionalidad = paciente.nacionalidad?.toUpperCase();
    paciente.provincia = paciente.provincia?.toUpperCase();
    paciente.direccion = paciente.direccion?.toUpperCase();
    paciente.nombresRepresentante = paciente.nombresRepresentante?.toUpperCase();
    paciente.apellidosRepresentante = paciente.apellidosRepresentante?.toUpperCase();
    paciente.rutRepresentante = paciente.rutRepresentante?.toUpperCase();
    paciente.nombresDoctor = paciente.nombresDoctor?.toUpperCase();
    paciente.apellidosDoctor = paciente.apellidosDoctor?.toUpperCase();
    paciente.rutDoctor = paciente.rutDoctor?.toUpperCase();
    paciente.tipoAtencionMedica = paciente.tipoAtencionMedica?.toUpperCase();
    paciente.motivo = paciente.motivo?.toUpperCase();
    paciente.fechaIngreso = paciente.fechaIngreso?.toUpperCase();
    paciente.horaIngreso = paciente.horaIngreso?.toUpperCase();
    paciente.fechaSalida = paciente.fechaSalida?.toUpperCase();
    paciente.horaSalida = paciente.horaSalida?.toUpperCase();
    paciente.cama = paciente.cama?.toUpperCase();    
    paciente.habitacion = paciente.habitacion?.toUpperCase();

    paciente.ultimoChequeo = paciente.ultimoChequeo?.toUpperCase();
    paciente.enfermeraEncargada = paciente.enfermeraEncargada?.toUpperCase();
    paciente.enfermeraApellidos = paciente.enfermeraApellidos?.toUpperCase();
    
    paciente.createdAt = new Date();

    return pacienteRepository.addPaciente(paciente);
}

export default { addPaciente, getPacientes, getPacienteById, modPaciente, deletePaciente};