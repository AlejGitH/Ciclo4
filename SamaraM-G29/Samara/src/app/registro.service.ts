import { Injectable } from '@angular/core';
import{ Modulo } from './modulo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {


  URL_viaje= 'http://localhost/Ciclo4Grupo8/API/crud';

  constructor(private http:HttpClient) { }

  GuardarDatos(usuario:Modulo){
    return this.http.post<Modulo>(this.URL_viaje + '/Insertardatos.php', usuario);
    
  }

  Login (username:String, contrasena:String){
    return this.http.get(`${this.URL_viaje}/Login.php?username=${username}&contrasena=${contrasena}`);
  }
}

