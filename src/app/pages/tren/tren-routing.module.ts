import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrenPage } from './tren.page';

const routes: Routes = [
  {
    path: '',
    component: TrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrenPageRoutingModule {}
