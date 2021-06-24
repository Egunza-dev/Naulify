import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsvRegistrationPageRoutingModule } from './psv-registration-routing.module';

import { PsvRegistrationPage } from './psv-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsvRegistrationPageRoutingModule
  ],
  declarations: [PsvRegistrationPage]
})
export class PsvRegistrationPageModule {}
