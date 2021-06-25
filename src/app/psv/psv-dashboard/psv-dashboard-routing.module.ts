import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsvDashboardPage } from './psv-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PsvDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsvDashboardPageRoutingModule {}
