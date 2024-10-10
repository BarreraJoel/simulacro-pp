import { Component, inject } from '@angular/core';
import { TablaPaisesComponent } from '../../components/tabla-paises/tabla-paises.component';
import { Pais } from '../../models/pais';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { Actor } from '../../models/actor';

@Component({
  selector: 'app-alta-actor',
  standalone: true,
  imports: [TablaPaisesComponent, ReactiveFormsModule],
  templateUrl: './alta-actor.component.html',
  styleUrl: './alta-actor.component.css'
})
export class AltaActorComponent {

  protected frm: FormGroup = new FormGroup({});
  protected _fire: FirebaseService<Actor> = inject(FirebaseService<Actor>);
  protected respuesta: string = "";

  constructor(private fb: FormBuilder) {
    this.frm = this.fb.group({
      id: [""],
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      edad: ["", [Validators.required]],
      pais: [""],
    });
  }

  protected recibirPais(pais: Pais) {
    this.frm.get("pais")?.setValue(pais);
    console.log(this.frm.value);
  }

  protected async enviar() {
    this._fire.init("actores");
    const doc = await this._fire.agregar(this.frm.value);
    this.frm.get("id")?.setValue(doc.id);
    await this._fire.modificar(doc.id, this.frm.value);
    this.respuesta = "Actor dado de alta";
    this.frm.reset();
  }

}
