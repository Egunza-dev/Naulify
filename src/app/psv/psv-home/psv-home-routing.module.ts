import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsvHomePage } from './psv-home.page';

const routes: Routes = [
  {
    path: '',
    component: PsvHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsvHomePageRoutingModule {}
