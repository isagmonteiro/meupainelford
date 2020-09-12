import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfcadPage } from './confcad.page';

const routes: Routes = [
  {
    path: '',
    component: ConfcadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfcadPageRoutingModule {}
