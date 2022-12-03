import { Injectable } from '@angular/core';
import { Cita } from '../interfaces/cita.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  arrCitas: Cita[]
  constructor() {
    this.arrCitas = [{
      id: 0,
      titulo_libro: 'Una noche en la opera',
      pagina: 37,
      autor: 'Groucho Marx',
      texto: 'Lo malo del amor es que muchos lo confunden con la gastritis y, cuando se han curado de la indisposición, se encuentran con que se han casado.',
      fecha_cita: new Date,
      notas: 'De las mejores citas de la Biblioteca de Puerto Hurraco actualmente'
    },
    {
      id: 1,
      titulo_libro: 'Discworld',
      pagina: 37,
      autor: 'Terry Pratchet',
      texto: 'El matrimonio es la principal causa del divorcio.',
      fecha_cita: new Date,
      notas: 'De las mejores citas de la Biblioteca de Puerto Hurraco actualmente'
    },
    {
      id: 2,
      titulo_libro: 'Crimen y castigo',
      pagina: 45,
      autor: 'Mijáilovich Dostoyevski',
      texto: 'La tolerancia llegará a tal nivel que las personas inteligentes tendrán prohibido pensar para no ofender a los imbéciles.',
      fecha_cita: new Date('1978-09-06'),
      notas: 'De las mejores citas de la Biblioteca de Puerto Hurraco actualmente'
    },
    {
      id: 3,
      titulo_libro: 'Sopa de Gansos',
      pagina: 33,
      autor: 'Groucho Marx',
      texto: '¿No es usted la señorita Smith, hija del banquero multimillonario Smith? ¿No? Perdone, por un momento pensé que me había enamorado de usted.',
      fecha_cita: new Date('1978-09-06'),
      notas: 'De las mejores citas de la Biblioteca de Puerto Hurraco actualmente'
    },
    {
      id: 4,
      titulo_libro: 'La sombra del viento',
      pagina: 37,
      autor: 'Carlos Ruiz Zafón',
      texto: 'A lo mejor si me pusiera yo a decorar el escaparate en calzoncillos conseguiriamos que alguna fémina ávida de literatuta y emociones fuertes entrase a hacer gasto, porque dicen los entendidos que el futuro de la literatura depende de las mujeres, y vive Dios que está por nacer fámula capaz de resistir el tirón agreste de este cuerpo serrano.',
      fecha_cita: new Date('1978-09-06'),
      notas: 'El gran Fermin.'
    },
    ]
  }

  getAll(): Cita[] {
    return this.arrCitas
  }

  create(pCita: Cita) {
    return this.arrCitas.push(pCita)

  }

  delete(pId: number) {
    this.arrCitas = this.arrCitas.filter(cita => pId !== cita.id)
    return this.arrCitas
  }
}
