import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {RegistroService } from '../registro.service';
import { ToastrService } from 'ngx-toastr';

declare var validar_nombre: any;
declare var validar_username: any;
declare var validar_cedula: any;
declare var validar_email: any;
declare var validar_contrasena: any;
declare var validar_botonregistrar: any;


declare var retorno_nombre: any;
declare var retorno_username: any;
declare var retorno_cedula: any;
declare var retorno_email: any;
declare var retorno_contrasena: any;
declare var retorno_botonregistrar: any;


@Component({
  selector: 'app-registrar-personas',
  templateUrl: './registrar-personas.component.html',
  styleUrls: ['./registrar-personas.component.css']
})
export class RegistrarPersonasComponent implements OnInit {

 
  retorno_nombre1="";
  retorno_username1="";
  retorno_cedula1="";
  retorno_email1="";
  retorno_contrasena1="";
  retorno_botonregistrar1="";
  
datosform= new FormGroup({

  nombre: new FormControl(''),
  username: new FormControl(''),
  cedula: new FormControl(''),
  email: new FormControl(''),
  contrasena: new FormControl(''),
  
 });


  recibir_datos(){

 
    let nombre =this.datosform.value.nombre;
    let retorno_nombre= validar_nombre(nombre);
    this.retorno_nombre1=retorno_nombre;

    let username =this.datosform.value.username;
    let retorno_username= validar_username(username);
    this.retorno_username1 =retorno_username;

    let cedula =this.datosform.value.cedula;
    let retorno_cedula=validar_cedula(cedula);
    this.retorno_cedula1= retorno_cedula;

    let email =this.datosform.value.email;
    let retorno_email=validar_email(email);
    this.retorno_email1=retorno_email;

    let contrasena =this.datosform.value.contrasena;
    let retorno_contrasena=validar_contrasena(contrasena);
    this.retorno_contrasena1= retorno_contrasena;

    let botonregistrar = this.datosform.value.botonregistrar;
    let retorno_botonregistrar=validar_botonregistrar(nombre, username, cedula, email, contrasena);
    this.retorno_botonregistrar1= retorno_botonregistrar;

    if(this.retorno_botonregistrar1){
      this.APIService.GuardarDatos(this.datosform.value).subscribe(data => {this.toastr.success('Se registró con éxito.', 'Registro');});
    }else{
      this.toastr.error('Campos obligatorios.', 'Error');
    }
    
  }
  constructor(private APIService: RegistroService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.toastr.toastrConfig.positionClass = 'toast-top-center';
  }

}

