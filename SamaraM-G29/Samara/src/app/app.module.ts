import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarPersonasComponent } from './registrar-personas/registrar-personas.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroService } from './registro.service';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr'; 

@NgModule({
  declarations: [
    AppComponent,
    RegistrarPersonasComponent,
    PaginaPrincipalComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ RegistroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
