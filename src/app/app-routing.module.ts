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

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
