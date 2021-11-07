import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrenPageRoutingModule } from './tren-routing.module';

import { TrenPage } from './tren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrenPageRoutingModule
  ],
  declarations: [TrenPage]
})
export class TrenPageModule {}
