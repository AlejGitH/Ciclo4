import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ RegistrarPersonasComponent } from '../app/registrar-personas/registrar-personas.component';
import { LoginComponent} from '../app/login/login.component';
import { PaginaPrincipalComponent } from '../app/pagina-principal/pagina-principal.component';

const routes: Routes = [
  {path: 'Pagina_principal',component: PaginaPrincipalComponent},
  {path: 'formu_registrar',component: RegistrarPersonasComponent},
  {path: 'login', component: LoginComponent},
  


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
