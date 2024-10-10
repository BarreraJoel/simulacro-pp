import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, authState, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);
  private usuario: User | null = null;
  public get usuarioLogueado(): User | null { return this.usuario };

  constructor() {
    this.buscarUsuarioLogueado().subscribe(
      (user: User | null) => { this.usuario = user; }
    );
  }

  async registrar(usuario: { email: string, password: string }) {
    return await createUserWithEmailAndPassword(this.auth, usuario.email, usuario.password);
  }

  async login(usuario: { email: string, password: string }) {
    return await signInWithEmailAndPassword(this.auth, usuario.email, usuario.password);
  }

  logout() {
    return signOut(this.auth);
  }

  public buscarUsuarioLogueado() {
    return authState(this.auth);
  }

}