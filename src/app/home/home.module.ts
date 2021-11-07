import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AlhambraComponent } from '../componets/alhambra/alhambra.component';
import { HomePageRoutingModule } from './home-routing.module';
import { CatedralComponent } from '../components/catedral/catedral.component';
import { TristeComponent } from '../components/triste/triste.component';
import { TrenComponent } from '../components/tren/tren.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
                 AlhambraComponent,
                 CatedralComponent,
                 TristeComponent,
                 TrenComponent]
})
export class HomePageModule {}
