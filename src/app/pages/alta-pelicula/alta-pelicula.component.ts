import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { Pelicula } from '../../models/pelicula';
import { Actor } from '../../models/actor';
import { TablaActoresComponent } from '../../components/tabla-actores/tabla-actores.component';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-alta-pelicula',
  standalone: true,
  imports: [ReactiveFormsModule, TablaActoresComponent],
  templateUrl: './alta-pelicula.component.html',
  styleUrl: './alta-pelicula.component.css'
})
export class AltaPeliculaComponent {

  protected frm: FormGroup = new FormGroup({});
  protected _fire: FirebaseService<Pelicula> = inject(FirebaseService<Pelicula>);
  protected _storage: StorageService = inject(StorageService);
  protected respuesta: string = "";
  private file: File | null = null;

  constructor(private fb: FormBuilder) {
    this.frm = this.fb.group({
      id: [""],
      nombre: ["", [Validators.required]],
      fechaEstreno: ["", [Validators.required]],
      cantPublico: ["", [Validators.required]],
      tipo: [0, [Validators.required]],
      auxFoto: [""],
      protagonista: [""],
    });
  }

  protected recibirActor(actor: Actor) {
    this.frm.get("protagonista")?.setValue(`${actor.nombre} ${actor.apellido}`);
    console.log(this.frm.value);
  }

  protected async enviar() {
    this._storage.init("peliculas");
    this._storage.nombreFoto = this.frm.get("nombre")?.value;
    await this._storage.subirImagen(this.file);

    this.frm.addControl("foto", new FormControl());
    this.frm.get("foto")?.setValue(this._storage.pathFotoSubida);
    this.frm.removeControl("auxFoto");

    this.frm.get("tipo")?.setValue(parseInt(this.frm.get("tipo")?.value));

    this._fire.init("peliculas");

    const doc = await this._fire.agregar(this.frm.value);
    this.frm.get("id")?.setValue(doc.id);

    await this._fire.modificar(doc.id, this.frm.value);
    this.respuesta = "Pelicula dada de alta";

    // this.frm.addControl("auxFoto", ["", Validators.required]);
    this.frm.reset();
  }

  protected cambiarFoto($event: any,) {
    const file: File = $event.target.files[0];
    this.file = file;
    console.log(this.file);
  }

} 
