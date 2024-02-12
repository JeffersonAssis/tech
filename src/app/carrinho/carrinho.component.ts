import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produstos';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit{
  total : number = 0;
  itensCarrinho : IProdutoCarrinho [] = [];
  quant: number =  1;

  constructor(
    public carrinhoService:CarrinhoService,
    private router:Router
  ){}

  ngOnInit(): void {
   this.itensCarrinho =  this.carrinhoService.abtemCarrinho();
   this.somaTotal();
  }

  remove(id: number){
    this.carrinhoService.removerItem(id);
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== id);
    this.somaTotal();
  }

  alterarQuant(id : number, quant: number){
    debugger;
    this.itensCarrinho.filter(item => {
      if(item.id == id){
        item.quantidade= Number(quant);
       this.remove(id)
       this.carrinhoService.adicionarCarrinho(item);

      } })


  }

  somaTotal(){
    this.total = this.itensCarrinho.reduce((prev,curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  comprar() {
    alert("Compra realizada com sucesso!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["/"]);
  }
}
