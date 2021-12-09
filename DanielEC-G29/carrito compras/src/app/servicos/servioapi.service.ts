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
      preciounidad: "30.000",
      total: "30.000",
    },
    {
      imagen:"imagen2",
      nombre:"el jorobado",
      cantidad: "1",
      preciounidad: "45.000",
      total: "45.000",
    },
    {
      imagen:"imagen3",
      nombre:"Harry Poter",
      cantidad: "1",
      preciounidad: "40.000",
      total: "40.000",
    }

  ];

  constructor() { 
  }
  getLibro():any[]{
    return this.libro;
  }
}
