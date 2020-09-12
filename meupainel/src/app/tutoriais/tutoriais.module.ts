import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutoriaisPageRoutingModule } from './tutoriais-routing.module';

import { TutoriaisPage } from './tutoriais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutoriaisPageRoutingModule
  ],
  declarations: [TutoriaisPage]
})
export class TutoriaisPageModule {}
