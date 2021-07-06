import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageRoutesPageRoutingModule } from './manage-routes-routing.module';

import { ManageRoutesPage } from './manage-routes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ManageRoutesPageRoutingModule
  ],
  declarations: [ManageRoutesPage]
})
export class ManageRoutesPageModule {}
