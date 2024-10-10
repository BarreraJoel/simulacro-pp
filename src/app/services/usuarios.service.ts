// import { inject, Injectable } from '@angular/core';
// import { FirebaseService } from './firebase.service';
// import { Pelicula } from '../models/pelicula';
// import { AuthService } from './auth.service';
// import { firstValueFrom } from 'rxjs';
// import { User } from '@angular/fire/auth';

// @Injectable({
//   providedIn: 'root'
// })

// export class UsuariosService {
//   private _auth: AuthService = inject(AuthService);
//   public _fireUsuarios: FirebaseService<Pelicula> = inject(FirebaseService<Pelicula>);
//   private listaUsuarios: Usuario[] = [];
//   private usuarioAuth: User | null = null;
//   private usuario: Usuario | null = null;
//   public get listadoUsuarios(): Usuario[] { return this.listaUsuarios; }
//   public get usuarioActivo(): Usuario | null { return this.usuario; }

//   constructor() {
//     this._fireUsuarios.init("usuarios");
//     this.init();
//     this._auth.buscarUsuarioLogueado().subscribe(
//       (response: User | null) => {
//         this.usuarioAuth = response;
//         this.buscarUsuarioActivo();
//       }
//     );
//   }

//   private async init() {
//     await this.obtenerUsuarios();
//     this.buscarUsuarioActivo();
//   }

//   private async obtenerUsuarios() {
//     const obs = this._fireUsuarios.get();
//     if (obs) {
//       this.listaUsuarios = await firstValueFrom<Usuario[]>(obs);
//     }
//   }

//   private buscarUsuarioActivo() {
//     let mailUsuarioActivo = this.usuarioAuth?.email ? this.usuarioAuth.email : "";
//     for (const usuario of this.listaUsuarios) {
//       // if (mailUsuarioActivo == usuario.email) {
//       //   this.usuario = usuario;
//       //   break;
//       // }
//     }
//   }

// }
