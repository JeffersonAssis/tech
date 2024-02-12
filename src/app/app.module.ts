import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProdutosModule } from './produtos/produtos.module';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { AppComponent } from './app.component';
import { CarrinhoModule } from './carrinho/carrinho.module';


@NgModule({
  declarations: [],
  imports: [BrowserModule,MatSnackBarModule,
    CommonModule, MatSlideToggleModule, ProdutosModule, CarrinhoModule
  ], providers:[ ],
  bootstrap:[]
})
export class AppModule {

 }
