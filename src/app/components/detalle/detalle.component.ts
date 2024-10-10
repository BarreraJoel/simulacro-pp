import { Component, Input } from '@angular/core';
import { Pelicula, TipoPelicula } from '../../models/pelicula';

@Component({
  selector: 'detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  @Input() columnas: string[] = [];
  @Input() item: Pelicula | null = null;

  protected getValue(tipo: TipoPelicula): string {
    let tipoPeli: string = "";
    switch (tipo) {
      case TipoPelicula.Amor:
        tipoPeli = "Amor";
        break;
      case TipoPelicula.Comedia:
        tipoPeli = "Comedia";
        break;
      case TipoPelicula.Terror:
        tipoPeli = "Terror";
        break;
      case TipoPelicula.Otros:
        tipoPeli = "Otros";
        break;
    }

    return tipoPeli;
  }

}
