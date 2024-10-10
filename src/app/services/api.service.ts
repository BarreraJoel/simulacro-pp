import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  private _http: HttpClient = inject(HttpClient);

  public async get(path: string): Promise<T | null> {
    let listado: T | null = null;

    await this._http.get<T>(path).forEach(
      (response: T) => { listado = response; }
    );

    return listado;
  }

}