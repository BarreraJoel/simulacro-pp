import { inject, Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private folder: string = "";
  private _storage: Storage = inject(Storage);
  private pathFoto: string = "";
  private nombre: string = "";

  init(path: string) {
    this.folder = path;
  }

  public get pathFotoSubida() : string{
    return this.pathFoto;
  }

  public set nombreFoto(nombre:string) {
    this.nombre = nombre;
  }

  async subirImagen(foto: any) {
    const imgRef = ref(this._storage, `${this.folder}/${this.nombre}`);
    await uploadBytes(imgRef, foto);

    this.pathFoto = await getDownloadURL(imgRef);
  }

  async getImagenes() {
    const imgRef = ref(this._storage, this.folder);
    return await listAll(imgRef);
  }

}
