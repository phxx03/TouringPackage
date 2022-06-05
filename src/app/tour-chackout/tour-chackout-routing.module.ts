import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourChackoutPage } from './tour-chackout.page';

const routes: Routes = [
  {
    path: '',
    component: TourChackoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourChackoutPageRoutingModule {}
