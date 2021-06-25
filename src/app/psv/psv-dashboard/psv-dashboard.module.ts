import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsvDashboardPageRoutingModule } from './psv-dashboard-routing.module';

import { PsvDashboardPage } from './psv-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsvDashboardPageRoutingModule
  ],
  declarations: [PsvDashboardPage]
})
export class PsvDashboardPageModule {}
