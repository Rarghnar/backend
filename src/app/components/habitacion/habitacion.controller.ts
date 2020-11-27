import habitacionRepository from "./habitacion.repository";
import { Habitacion } from '../../models/habitacion.model';

function getHabitaciones(): Promise<Habitacion[]> {
    return habitacionRepository.getHabitaciones();
    
}

function getHabitacionById(id: string): Promise<Habitacion | null>{
    return habitacionRepository.getHabitacionById(id);
}

function patchHabitacion(id: string, habitacion: Partial<Habitacion>): Promise<Partial<Habitacion | null>>{
    return habitacionRepository.patchHabitacion(id, habitacion);
}

function deleteHabitacion(id: string) {
    return habitacionRepository.deleteHabitacion(id);
}

function addHabitaciones(habitacion: Habitacion): Promise<Habitacion>{
    habitacion.codigoHabitacion = habitacion.codigoHabitacion.toUpperCase();    
    habitacion.createdAt = new Date();

    return habitacionRepository.addHabitacion(habitacion);    
}


export default { addHabitaciones, getHabitaciones, getHabitacionById, patchHabitacion, deleteHabitacion};
