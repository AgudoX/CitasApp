import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/interfaces/cita.interfaces';
import { CitasService } from 'src/app/services/citas.service';
import { FavoritasService } from 'src/app/services/favoritas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {
  arrCitas: Cita[]
  constructor(private citasService: CitasService, private favoritas: FavoritasService) {
    this.arrCitas = []
  }

  ngOnInit(): void {

    this.arrCitas = this.citasService.getAll()
  }


  deletear(pCita: Cita, pId: number) {
    if (this.favoritas.getAll().includes(pCita)) {
      return Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'No puedes borrarla si está en favoritos',
        showConfirmButton: false,
        timer: 4000,
        background: '#f8dc6c ',
        color: '#701322',
      })
    } else {
      return this.arrCitas = this.citasService.delete(pId)
    }
  }

  addFavorite(pCita: Cita, pId: number) {

    if (this.favoritas.getAll().includes(pCita)) {
      return this.favoritas.remove(pId)
    } else {
      return this.favoritas.add(pCita)
    }
  }

  fav(pCita: Cita) {
    return (this.favoritas.getAll().includes(pCita)) ? true : false;

  }

} 
