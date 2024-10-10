import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Actor } from '../../models/actor';

@Component({
  selector: 'tabla-actores',
  standalone: true,
  imports: [],
  templateUrl: './tabla-actores.component.html',
  styleUrl: './tabla-actores.component.css'
})
export class TablaActoresComponent {

  protected _fire: FirebaseService<Actor> = inject(FirebaseService<Actor>);
  protected actores: Actor[] = [];
  @Output() enviarActor: EventEmitter<Actor> = new EventEmitter<Actor>();

  async ngOnInit() {
    this._fire.init("actores");
    this._fire.get()?.subscribe(
      (response: Actor[]) => { this.actores = response; }
    );
  }

  protected emit(actor: Actor) {
    this.enviarActor.emit(actor);
  }

}
