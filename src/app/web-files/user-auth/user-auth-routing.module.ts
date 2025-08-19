import { UserAuthComponent } from './user-auth.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserForgetComponent } from './user-forget/user-forget.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserNewPinComponent } from './user-new-pin/user-new-pin.component';

const routes: Routes = [
{
    path:'',
    component: UserAuthComponent,
    children: [
        { path: '', component: UserLoginComponent },
        { path: 'sign-up', component: UserSignupComponent },
        { path: 'user-forget', component: UserForgetComponent },
        { path: 'set-pin/:id', component: UserNewPinComponent },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
