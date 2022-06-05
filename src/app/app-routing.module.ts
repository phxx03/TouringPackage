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
    path: 'tour-detail',
    loadChildren: () => import('./tour-detail/tour-detail.module').then( m => m.TourDetailPageModule)
  },
  {
    path: 'tour-form',
    loadChildren: () => import('./tour-form/tour-form.module').then( m => m.TourFormPageModule)
  },
  {
    path: 'tour-chackout',
    loadChildren: () => import('./tour-chackout/tour-chackout.module').then( m => m.TourChackoutPageModule)
  },
  {
    path: 'receive',
    loadChildren: () => import('./receive/receive.module').then( m => m.ReceivePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
