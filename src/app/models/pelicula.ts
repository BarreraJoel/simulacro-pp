import { Actor } from "./actor";

export interface Pelicula {
    id: string,
    nombre: string,
    tipo: TipoPelicula,
    fechaEstreno: string,
    cantPublico: number,
    foto: string,
    protagonista: string
}

export enum TipoPelicula {
    Terror = 0,
    Amor = 1,
    Comedia = 2,
    Otros = 3
}
