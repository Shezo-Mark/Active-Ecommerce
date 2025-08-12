import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SallerAuthRoutingModule } from './saller-auth-routing.module';
import { SallerAuthComponent } from './saller-auth.component';
import { SallerLoginComponent } from './saller-login/saller-login.component';
import { SallerSignupComponent } from './saller-signup/saller-signup.component';
import { SallerForgetComponent } from './saller-forget/saller-forget.component';
import { SallerSetNewPinComponent } from './saller-set-new-pin/saller-set-new-pin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SallerAuthComponent,
    SallerLoginComponent,
    SallerSignupComponent,
    SallerForgetComponent,
    SallerSetNewPinComponent
  ],
  imports: [
    CommonModule,
    SallerAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SallerAuthModule { }
