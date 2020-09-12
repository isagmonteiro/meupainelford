import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfcadPageRoutingModule } from './confcad-routing.module';

import { ConfcadPage } from './confcad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfcadPageRoutingModule
  ],
  declarations: [ConfcadPage]
})
export class ConfcadPageModule {}
