import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPsvProfilePage } from './edit-psv-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EditPsvProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPsvProfilePageRoutingModule {}
