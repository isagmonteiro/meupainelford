import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistenciaPageRoutingModule } from './assistencia-routing.module';

import { AssistenciaPage } from './assistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistenciaPageRoutingModule
  ],
  declarations: [AssistenciaPage]
})
export class AssistenciaPageModule {}
