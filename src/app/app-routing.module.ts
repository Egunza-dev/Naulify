import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path: '', loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)},
  {
    path: 'psv-registration',
    loadChildren: () => import('./psv/psv-registration/psv-registration.module').then( m => m.PsvRegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./psv/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'psv-dashboard',
    loadChildren: () => import('./psv/psv-dashboard/psv-dashboard.module').then( m => m.PsvDashboardPageModule)
  },
  {
    path: 'commuter-registration',
    loadChildren: () => import('./commuter/commuter-registration/commuter-registration.module').then( m => m.CommuterRegistrationPageModule)
  },
  {
    path: 'commuter-verify-email',
    loadChildren: () => import('./commuter/commuter-verify-email/commuter-verify-email.module').then( m => m.CommuterVerifyEmailPageModule)
  },
  {
    path: 'commuter-dashboard',
    loadChildren: () => import('./commuter/commuter-dashboard/commuter-dashboard.module').then( m => m.CommuterDashboardPageModule)
  },
      

   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
