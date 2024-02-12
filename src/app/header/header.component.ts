import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { BarraPesquisaComponent } from "../barra-pesquisa/barra-pesquisa.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterModule, BarraPesquisaComponent]
})
export class HeaderComponent {


  constructor(
    public carrinhoServece: CarrinhoService
  ){}


}
