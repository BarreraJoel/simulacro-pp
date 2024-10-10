import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, Firestore, orderBy, OrderByDirection, query, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService<T> {

  private path: string = "";
  private firestore: Firestore = inject(Firestore);
  private lista: Observable<T[]> | null = null;

  public init(path: string, criterio?: string, orden?: OrderByDirection) {
    this.path = path;
    if (criterio && orden) {
      this.lista = collectionData(query(collection(this.firestore, this.path), orderBy(criterio, orden))) as Observable<T[]>;
    }
    else {
      this.lista = collectionData(query(collection(this.firestore, this.path))) as Observable<T[]>;
    }
  }

  public agregar(elemento: any) {
    const lista = collection(this.firestore, this.path);
    return addDoc(lista, elemento);
  }

  public async modificar(id: string, nuevoElemento: any) {
    const lista = collection(this.firestore, this.path);
    const documento = doc(lista, id);
    return await updateDoc(documento, nuevoElemento);
  }

  public get() {
    return this.lista;
  }

}
