import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsvDashboardPage } from './psv-dashboard.page';

const routes: Routes = [
  {
    path: 'psv-dashboard',
    component: PsvDashboardPage,
    children: [
      {path: 'psv-home', loadChildren: () => import('../psv-home/psv-home.module').then( m => m.PsvHomePageModule)},
      {
        path: 'edit-psv-profile',
        loadChildren: () => import('../edit-psv-profile/edit-psv-profile.module').then( m => m.EditPsvProfilePageModule)
      },
      {
        path: 'manage-routes',
        loadChildren: () => import('../manage-routes/manage-routes.module').then( m => m.ManageRoutesPageModule)
      },
      {
        path: 'generate-qr-code',
        loadChildren: () => import('../generate-qr-code/generate-qr-code.module').then( m => m.GenerateQrCodePageModule)
      },
  

      
    ]
  },
  {path: '', redirectTo: 'psv-dashboard/psv-home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsvDashboardPageRoutingModule {}
