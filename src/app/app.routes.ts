import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "peliculas",
        loadComponent: () => import("./pages/peliculas/peliculas.component").then(m => m.PeliculasComponent)
    },
    {
        path: "alta-pelicula",
        loadComponent: () => import("./pages/alta-pelicula/alta-pelicula.component").then(m => m.AltaPeliculaComponent)
    },
    // {
    //     path: "actores",
    //     loadComponent: () => import("").then(m => m.)
    // },
    {
        path: "alta-actor",
        loadComponent: () => import("./pages/alta-actor/alta-actor.component").then(m => m.AltaActorComponent)
    },
    {
        path: "",
        redirectTo: "peliculas",
        pathMatch: "full"
    }
];
