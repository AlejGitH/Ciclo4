import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ RegistrarPersonasComponent } from '../app/registrar-personas/registrar-personas.component';
import { LoginComponent} from '../app/login/login.component';
import { PaginaPrincipalComponent } from '../app/pagina-principal/pagina-principal.component';
import{ Pagina404Component } from '../app/pagina404/pagina404.component';
import { CarritoCompraComponent } from '../app/carrito-compra/carrito-compra.component'; 

const routes: Routes = [
  {path: '', component: PaginaPrincipalComponent},
  {path: 'Pagina_principal',component: PaginaPrincipalComponent},
  {path: 'formu_registrar',component: RegistrarPersonasComponent},
  {path: 'CarritoCompras', component: CarritoCompraComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component:Pagina404Component}
  


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
