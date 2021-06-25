import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommuterVerifyEmailPageRoutingModule } from './commuter-verify-email-routing.module';

import { CommuterVerifyEmailPage } from './commuter-verify-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommuterVerifyEmailPageRoutingModule
  ],
  declarations: [CommuterVerifyEmailPage]
})
export class CommuterVerifyEmailPageModule {}
