import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrefecimentoPage } from './arrefecimento.page';

const routes: Routes = [
  {
    path: '',
    component: ArrefecimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrefecimentoPageRoutingModule {}
