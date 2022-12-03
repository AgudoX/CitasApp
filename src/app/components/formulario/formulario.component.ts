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
      titulo_libro: new FormControl('Blancanieves y los 7 enanitos', [Validators.required]),
      pagina: new FormControl(56),
      autor: new FormControl('Jesucristo', [Validators.required]),
      texto: new FormControl('Allá mueran ciegos reyes por un palmo más de tierra, que yo tengo por mio, cuanto abarca el mar bravio, a quien nadie impuso leyes', [Validators.required]),
      fecha_cita: new FormControl('1999-09-25', [Validators.required]),
      notas: new FormControl('Se la ha  sacado Espronceda')
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
