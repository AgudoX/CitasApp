import { Injectable } from '@angular/core';
import { Cita } from '../interfaces/cita.interfaces';

@Injectable({
  providedIn: 'root'
})
export class FavoritasService {
  arrFavoritas: Cita[]
  constructor() {
    this.arrFavoritas = [

    ]
  }

  getAll() {
    return this.arrFavoritas;
  }

  add(pCita: Cita) {
    if (this.arrFavoritas.includes(pCita)) {
      return this.arrFavoritas
    } else {
      return this.arrFavoritas.push(pCita)
    }
  }
  remove(pId: number) {

    this.arrFavoritas = this.arrFavoritas.filter(quote => quote.id !== pId)
    return this.arrFavoritas

  }

}
