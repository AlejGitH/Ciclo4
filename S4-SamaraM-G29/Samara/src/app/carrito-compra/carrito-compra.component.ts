import { Component, OnInit } from '@angular/core';
import {ServioapiService} from '../servicos/servioapi.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {
  libro:any[] = [];
  constructor(private servioapiService:ServioapiService) { 
    this.libro = this.servioapiService.getLibro();
  }

  ngOnInit(): void {
  }

}
