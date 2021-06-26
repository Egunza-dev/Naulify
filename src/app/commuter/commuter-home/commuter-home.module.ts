import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommuterHomePageRoutingModule } from './commuter-home-routing.module';

import { CommuterHomePage } from './commuter-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommuterHomePageRoutingModule
  ],
  declarations: [CommuterHomePage]
})
export class CommuterHomePageModule {}
