import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TristePageRoutingModule } from './triste-routing.module';

import { TristePage } from './triste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TristePageRoutingModule
  ],
  declarations: [TristePage]
})
export class TristePageModule {}
