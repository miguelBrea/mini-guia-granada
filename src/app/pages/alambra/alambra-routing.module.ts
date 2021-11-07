import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlambraPage } from './alambra.page';

const routes: Routes = [
  {
    path: '',
    component: AlambraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlambraPageRoutingModule {}
