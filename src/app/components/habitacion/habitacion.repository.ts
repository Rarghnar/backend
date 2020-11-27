import { Habitacion } from '../../models/habitacion.model';
import habitacionSchema from "./habitacion.schema";


async function getHabitaciones() : Promise<Habitacion[]> {
    return habitacionSchema.find();
}


async function getHabitacionById(id : string): Promise<Habitacion | null>{
    return habitacionSchema.findOne({_id:id}); //mostrar todo
}

async function addHabitacion(habitacion: Habitacion): Promise<Habitacion> {
    return habitacionSchema.create<Habitacion>(habitacion);
}


async function deleteHabitacion(id: string) {
    return habitacionSchema.remove({ _id: id });
}

async function patchHabitacion(_id: string, habitacion: Partial<Habitacion>): Promise<Partial<Habitacion | null>>{
    return habitacionSchema.findByIdAndUpdate(_id, habitacion);
}

export default { getHabitaciones, addHabitacion, getHabitacionById, deleteHabitacion, patchHabitacion};