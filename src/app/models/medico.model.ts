export interface Medico{

    _id: string;
    createdAt?: Date,
    //definition?: string;
    nombres: string;
    apellidos: string;
    sexo:string;
    telefono:number;
    especialidad: string;
    direccion: string;
    email: string;
    rut: string;
    contraseña: string;
    contraseñaRepetida: string;

    
}