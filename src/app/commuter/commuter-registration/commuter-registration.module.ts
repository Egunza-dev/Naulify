import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommuterRegistrationPageRoutingModule } from './commuter-registration-routing.module';

import { CommuterRegistrationPage } from './commuter-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommuterRegistrationPageRoutingModule
  ],
  declarations: [CommuterRegistrationPage]
})
export class CommuterRegistrationPageModule {}
