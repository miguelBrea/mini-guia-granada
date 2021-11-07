import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatedralPage } from './catedral.page';

const routes: Routes = [
  {
    path: '',
    component: CatedralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatedralPageRoutingModule {}
