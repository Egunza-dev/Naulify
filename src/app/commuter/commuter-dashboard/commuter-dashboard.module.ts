import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommuterDashboardPageRoutingModule } from './commuter-dashboard-routing.module';

import { CommuterDashboardPage } from './commuter-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommuterDashboardPageRoutingModule
  ],
  declarations: [CommuterDashboardPage]
})
export class CommuterDashboardPageModule {}
