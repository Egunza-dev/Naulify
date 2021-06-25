import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommuterVerifyEmailPage } from './commuter-verify-email.page';

const routes: Routes = [
  {
    path: '',
    component: CommuterVerifyEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommuterVerifyEmailPageRoutingModule {}
