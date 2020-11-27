export interface Admin{

    _id: string;
    createdAt?: Date,
    //definition?: string;
    nombres: string;
    apellidos: string;
    sexo:string;
    telefono: number;
    direccion: string;
    cargo:string;
    email: string;
    rut: string;
    contraseña: string;
    contraseñaRepetida: string;
}