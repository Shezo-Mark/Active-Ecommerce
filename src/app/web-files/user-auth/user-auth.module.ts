import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { UserAuthComponent } from './user-auth.component';
import { UserForgetComponent } from './user-forget/user-forget.component';
import { UserNewPinComponent } from './user-new-pin/user-new-pin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserAuthComponent,
    UserForgetComponent,
    UserNewPinComponent,
    UserSignupComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserAuthModule { }
