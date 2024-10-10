import { Pais } from "./pais";

export interface Actor {
    id: string,
    nombre: string,
    apellido: string,
    documento: string,
    edad: number,
    pais: Pais
}
