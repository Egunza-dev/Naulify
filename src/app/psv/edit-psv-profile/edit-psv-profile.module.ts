import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPsvProfilePageRoutingModule } from './edit-psv-profile-routing.module';

import { EditPsvProfilePage } from './edit-psv-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditPsvProfilePageRoutingModule
  ],
  declarations: [EditPsvProfilePage]
})
export class EditPsvProfilePageModule {}
