import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatedralPageRoutingModule } from './catedral-routing.module';

import { CatedralPage } from './catedral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatedralPageRoutingModule
  ],
  declarations: [CatedralPage]
})
export class CatedralPageModule {}
