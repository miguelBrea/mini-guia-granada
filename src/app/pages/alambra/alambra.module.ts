import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlambraPageRoutingModule } from './alambra-routing.module';

import { AlambraPage } from './alambra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlambraPageRoutingModule
  ],
  declarations: [AlambraPage]
})
export class AlambraPageModule {}
