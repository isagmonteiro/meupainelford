import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssistenciaPage } from './assistencia.page';

const routes: Routes = [
  {
    path: '',
    component: AssistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistenciaPageRoutingModule {}
