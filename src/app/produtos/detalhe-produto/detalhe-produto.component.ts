import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduto, IProdutoCarrinho } from '../../produstos';
import { ProdutosService } from '../../produtos.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotificacaoService } from '../../notificacao.service';
import { CarrinhoService } from '../../carrinho.service';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './detalhe-produto.component.html',
  styleUrl: './detalhe-produto.component.css'
})
export class DetalheProdutoComponent implements OnInit, OnChanges{

quant: number = 1;
produto: IProduto|undefined
id : any;

constructor(private produtoService : ProdutosService,
  private acticatedRouter : ActivatedRoute,
  private notificacaoService : NotificacaoService,
  private carrinhoService:CarrinhoService
  ){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.quant);
  }

ngOnInit(): void {
  this.id = this.acticatedRouter.snapshot.paramMap.get("id")
  this.produto = this.produtoService.getOne(this.id);

}
adcionarCarrinho(){
  this.notificacaoService.notificar("O produto foi adicionado ao carrinho!")
  const produto:IProdutoCarrinho = {
    ...this.produto!,
    quantidade : this.quant
  }
  this.carrinhoService.adicionarCarrinho(produto);
}

}
