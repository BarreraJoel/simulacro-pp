import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Pais } from '../../models/pais';

@Component({
  selector: 'tabla-paises',
  standalone: true,
  imports: [],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent {

  private _api: ApiService<any[]> = inject(ApiService<any[]>);
  protected paises: any[] = [];
  @Output() enviarPais: EventEmitter<Pais> = new EventEmitter<Pais>();

  async ngOnInit() {
    const response = await this._api.get("https://restcountries.com/v3.1/lang/spanish");
    if (response) {
      this.paises = response.slice(0, 10);
    }
  }

  protected emit(pais: any) {
    this.enviarPais.emit({
      nombre: pais.name.common,
      foto: pais.flags.png
    });
  }

}
