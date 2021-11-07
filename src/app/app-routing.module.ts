import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'alambra',
    loadChildren: () => import('./pages/alambra/alambra.module').then( m => m.AlambraPageModule)
  },
  {
    path: 'catedral',
    loadChildren: () => import('./pages/catedral/catedral.module').then( m => m.CatedralPageModule)
  },
  {
    path: 'triste',
    loadChildren: () => import('./pages/triste/triste.module').then( m => m.TristePageModule)
  },
  {
    path: 'tren',
    loadChildren: () => import('./pages/tren/tren.module').then( m => m.TrenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
