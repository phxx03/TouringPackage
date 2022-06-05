import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourChackoutPageRoutingModule } from './tour-chackout-routing.module';

import { TourChackoutPage } from './tour-chackout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourChackoutPageRoutingModule
  ],
  declarations: [TourChackoutPage]
})
export class TourChackoutPageModule {}
