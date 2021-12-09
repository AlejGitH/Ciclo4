import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// servicio receptor de datos 
export class ServioapiService {

  private libro: any[] = [
    {
      imagen:"imagen",
      nombre:"espanto",
      cantidad: "2",
      preciounidad: "45000"
    },
    {
      imagen:"imagen2",
      nombre:"el jorobado",
      cantidad: "1",
      preciounidad: "45000"
    },
    {
      imagen:"imagen3",
      nombre:"Harry Poter",
      cantidad: "2",
      preciounidad: "40000"
    }

  ];

  constructor() { 
  }
  getLibro():any[]{
    return this.libro;
  }
}
