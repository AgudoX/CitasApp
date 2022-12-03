import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/interfaces/cita.interfaces';
import { FavoritasService } from 'src/app/services/favoritas.service';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css']
})
export class FavoritasComponent implements OnInit {
  arrFavoritas: Cita[]
  constructor(private favoritas: FavoritasService) {
    this.arrFavoritas = []
  }

  ngOnInit(): void {
    this.arrFavoritas = this.favoritas.getAll()
  }


  remove(pId: number) {
    this.arrFavoritas = this.favoritas.remove(pId)
  }
}
