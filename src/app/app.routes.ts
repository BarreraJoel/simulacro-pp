import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "peliculas",
        loadComponent: () => import("./pages/peliculas/peliculas.component").then(m => m.PeliculasComponent)
    },
    // {
    //     path: "alta-pelicula",
    //     loadComponent: () => import("").then(m => m.)
    // },
    // {
    //     path: "actores",
    //     loadComponent: () => import("").then(m => m.)
    // },
    // {
    //     path: "alta-actor",
    //     loadComponent: () => import("").then(m => m.)
    // }
    {
        path: "",
        redirectTo: "peliculas",
        pathMatch: "full"
    }
];
