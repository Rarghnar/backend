export interface Enfermera{
    _id: string;
    createdAt?: Date,
    //definition?: string;

    nombres: string;
    apellidos: string;
    sexo: string;
    telefono: number;
    direccion: string;
    email: string;
    rut: string;
    contraseña: string;
    contraseñaRepetida: string;

    
}