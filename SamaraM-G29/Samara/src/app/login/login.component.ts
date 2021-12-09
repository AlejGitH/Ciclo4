import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {RegistroService } from '../registro.service';
import { Router } from '@angular/router';

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
    
    this.APIService.Login(username, contrasena).subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    }, error => {
      alert('Usuario o contraseña incorrectos');
      console.log(error);
    });
  }else{
    alert("Campos obligatorios")
  }
  

 }
  constructor(private APIService: RegistroService, private router:Router) { }


  ngOnInit(): void {
  }

  

}
