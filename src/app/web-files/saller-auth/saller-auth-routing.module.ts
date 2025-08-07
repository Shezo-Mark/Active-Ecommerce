import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SallerAuthComponent } from './saller-auth.component';
import { SallerLoginComponent } from './saller-login/saller-login.component';
import { SallerSignupComponent } from './saller-signup/saller-signup.component';

const routes: Routes = [
  {
      path: '',
      component: SallerAuthComponent,
      children: [
        { path: '', component: SallerLoginComponent },
        { path: 'sign-up', component: SallerSignupComponent },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SallerAuthRoutingModule { }
