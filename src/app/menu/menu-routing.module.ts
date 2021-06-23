import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {path: 'welcome', loadChildren: () => import('../welcome/welcome.module').then( m => m.WelcomePageModule)},
      {path: 'psv_login', loadChildren: () => import('../psv/login/login.module').then( m => m.LoginPageModule)},
      {path: 'commuter_login', loadChildren: () => import('../commuter/login/login.module').then( m => m.LoginPageModule)},
      
    ]
  },
  {path: '', redirectTo: 'menu/welcome'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
