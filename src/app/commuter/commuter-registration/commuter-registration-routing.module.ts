import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommuterRegistrationPage } from './commuter-registration.page';

const routes: Routes = [
  {
    path: '',
    component: CommuterRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommuterRegistrationPageRoutingModule {}
