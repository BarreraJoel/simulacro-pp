import { Component, inject, OnInit } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { DetalleComponent } from '../../components/detalle/detalle.component';
import { FirebaseService } from '../../services/firebase.service';
import { Pelicula, TipoPelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [TablaComponent, DetalleComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit {

  private _fire: FirebaseService<Pelicula> = inject(FirebaseService<Pelicula>);
  protected peliculas: Pelicula[] = [];
  protected columnas: string[] = ["Nombre", "Tipo", "Fecha de estreno", "Cantidad de público", "Foto", "Protagonista"];
  protected pelicula: Pelicula | null = null;

  constructor() {
    this._fire.init("peliculas");
    this._fire.get()?.subscribe(
      (response: Pelicula[]) => { this.peliculas = response; }
    );
  }

  async ngOnInit() {

    // let obj: Pelicula = {
    //   id: "",
    //   nombre: "Titanic",
    //   fechaEstreno: "14/02/1999",
    //   cantPublico: 80000,
    //   foto: "https://firebasestorage.googleapis.com/v0/b/simulacro-pp-barrera-joel.appspot.com/o/titanic.jpg?alt=media&token=1fabec1f-08fe-43b1-b9d5-43f588d0b05c",
    //   tipo: TipoPelicula.Amor,
    //   protagonista: "Leonardo DiCaprio"
    // };

    // const doc = await this._fire.agregar(obj);
    // obj.id = doc.id;
    // await this._fire.modificar(doc.id, obj);
  }

  protected recibirPeli(pelicula: Pelicula) {
    this.pelicula = pelicula;
  }

}
