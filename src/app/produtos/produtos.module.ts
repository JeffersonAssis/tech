import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { CarrinhoComponent } from '../carrinho/carrinho.component';


@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    DetalheProdutoComponent,CarrinhoComponent
  ]
})
export class ProdutosModule { }
