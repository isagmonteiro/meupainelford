import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrefecimentoPageRoutingModule } from './arrefecimento-routing.module';

import { ArrefecimentoPage } from './arrefecimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrefecimentoPageRoutingModule
  ],
  declarations: [ArrefecimentoPage]
})
export class ArrefecimentoPageModule {}
