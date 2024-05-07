import { Routes, RouterModule } from '@angular/router';

import { AdicionarTransacaoComponent } from './paginas/adicionar-transacao/adicionar-transacao.component';
import { ListarTransacoesComponent } from './paginas/listar-transacoes/listar-transacoes.component';
import { DicasInvestimentoComponent } from './paginas/dicas-investimento/dicas-investimento.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'adicionar-transacao', component: AdicionarTransacaoComponent },
    { path: '', component: ListarTransacoesComponent },
    { path: 'dicas-investimento', component: DicasInvestimentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
