import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComprasComponent } from './carrito_compra/carrito-compras/carrito-compras.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComprasComponent,
    PaginaprincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
