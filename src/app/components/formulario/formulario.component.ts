import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cita } from 'src/app/interfaces/cita.interfaces';
import { CitasService } from 'src/app/services/citas.service';
@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup
  id: number
  constructor(private arrCitas: CitasService) {
    this.id = this.arrCitas.getAll().length
    this.formulario = new FormGroup({
      titulo_libro: new FormControl('', [Validators.required]),
      pagina: new FormControl(),
      autor: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
      fecha_cita: new FormControl('', [Validators.required]),
      notas: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    form.value.id = this.id++
    this.arrCitas.create(form.value)
    form.reset()
  }

}
