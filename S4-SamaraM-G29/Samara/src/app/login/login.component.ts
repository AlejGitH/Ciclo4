import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {RegistroService } from '../registro.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var validar_username: any;
declare var validar_contrasena: any;
declare var validar_botonlogin: any;

declare var retorno_username: any;
declare var retorno_contrasena: any;
declare var retorno_botonlogin: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  retorno_username1="";
  retorno_contrasena1="";
  retorno_botonlogin1="";

  datosform1= new FormGroup({
  username: new FormControl(''),
  contrasena: new FormControl(''),
 });

 login(){
  let username =this.datosform1.value.username;
  let retorno_username= validar_username(username);
  this.retorno_username1 =retorno_username;

  let contrasena =this.datosform1.value.contrasena;
  let retorno_contrasena=validar_contrasena(contrasena);
  this.retorno_contrasena1= retorno_contrasena;

  let botonlogin = this.datosform1.value.botonlogin;
  let retorno_botonlogin=validar_botonlogin(username, contrasena);
  this.retorno_botonlogin1= retorno_botonlogin;

  if(this.retorno_botonlogin1){
  let username=this.datosform1.value.username;
  let contrasena=this.datosform1.value.contrasena;
  this.APIService.Login(username,contrasena).subscribe(data => {this.toastr.success('Se ingresó con éxito.', 'Ingreso válido'); this.router.navigate(['/'])});
 }else{
  this.toastr.error('El usuario no existe.', 'Error');
}
 }
  constructor(private APIService: RegistroService, private router:Router, private toastr:ToastrService) { }

 

  ngOnInit(): void {
    this.toastr.toastrConfig.positionClass = 'toast-top-center';
  }


}
