import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  @Output() enviarPeli: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  @Input() listado: Pelicula[] | null = null;
  @Input() columnas: string[] = [];

  protected emit(pelicula: Pelicula) {
    this.enviarPeli.emit(pelicula);
  }

}
