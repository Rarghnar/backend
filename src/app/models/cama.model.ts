export interface Cama{

    _id:string;
    createdAt:Date,
    numeroDeCama?: Number,
    nombrePaciente?: string;
    apellidosPaciente?: string;
    rutPaciente?:string;
    nombreMedicoEncargado?: string;
    apellidosMedicoEncargado?: string;
    rutMedicoEncargado?:string;
    nombreEnfermeraEncargada?:string;
    rutEnfermeraEncargada?: string;
    camaLibre: string;


}