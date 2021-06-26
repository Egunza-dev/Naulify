import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommuterDashboardPage } from './commuter-dashboard.page';

const routes: Routes =[
  {
    path: 'commuter-dashboard',
    component: CommuterDashboardPage,
    children: [
      {path: 'commuter-home', loadChildren: () => import('../commuter-home/commuter-home.module').then( m => m.CommuterHomePageModule)},
      
    ]
  },
  {path: '', redirectTo: 'commuter-dashboard/commuter-home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommuterDashboardPageRoutingModule {}
