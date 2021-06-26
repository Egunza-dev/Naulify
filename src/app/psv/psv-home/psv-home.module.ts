import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsvHomePageRoutingModule } from './psv-home-routing.module';

import { PsvHomePage } from './psv-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsvHomePageRoutingModule
  ],
  declarations: [PsvHomePage]
})
export class PsvHomePageModule {}
