import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
  {path:'contato',component:ContatoComponent},
  {path:'carrinho', component:CarrinhoComponent},
  {path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  {path:'', redirectTo: 'produtos', pathMatch:'full'},
  {path:'**', component: NotFoundComponent}
];
