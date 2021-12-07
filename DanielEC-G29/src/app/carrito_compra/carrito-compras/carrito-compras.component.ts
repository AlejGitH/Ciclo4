import { Component, OnInit } from '@angular/core';
import {ServioapiService} from '../../servicos/servioapi.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  libro:any[] = [];
  constructor(private servioapiService:ServioapiService) { 
    this.libro = this.servioapiService.getLibro();
  }

  ngOnInit(): void {
  }

}
