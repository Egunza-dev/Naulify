import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsvDashboardPage } from './psv-dashboard.page';

const routes: Routes = [
  {
    path: 'psv-dashboard',
    component: PsvDashboardPage,
    children: [
      {path: 'psv-home', loadChildren: () => import('../psv-home/psv-home.module').then( m => m.PsvHomePageModule)},
      
    ]
  },
  {path: '', redirectTo: 'psv-dashboard/psv-home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsvDashboardPageRoutingModule {}
