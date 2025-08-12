import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SallerAuthComponent } from './saller-auth.component';
import { SallerLoginComponent } from './saller-login/saller-login.component';
import { SallerSignupComponent } from './saller-signup/saller-signup.component';
import { SallerForgetComponent } from './saller-forget/saller-forget.component';
import { SallerSetNewPinComponent } from './saller-set-new-pin/saller-set-new-pin.component';

const routes: Routes = [
  {
      path: '',
      component: SallerAuthComponent,
      children: [
        { path: '', component: SallerLoginComponent },
        { path: 'sign-up', component: SallerSignupComponent },
        { path: 'saller-forget', component: SallerForgetComponent },
        { path: 'set-pin/:userId', component: SallerSetNewPinComponent },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SallerAuthRoutingModule { }
