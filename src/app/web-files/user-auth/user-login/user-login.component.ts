import { Component } from '@angular/core';
import { UserAuthService } from '../../../services/user-auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  ShowSuccessMessage = '';
  ShowErrorMessage = '';
  PasswordToggler =  false;
  constructor(public user:UserAuthService){}
  UserLoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
  })
  UserLogin(){
     if(this.UserLoginForm.invalid){
      debugger
      return;
     }else{
      this.user.UserLogintBck(this.UserLoginForm.value).subscribe((res) =>{
         if(res && res.length > 0){
            const userData = {
            email: res[0].email,
            password: res[0].password,
           };
            localStorage.setItem('userdata', JSON.stringify(userData));
            this.ShowSuccessMessage = 'Login Successfully';
            setTimeout(() => {this.ShowSuccessMessage = ''; }, 2000);
         } else {
          console.warn('Login failed: no user data returned.');
            this.ShowErrorMessage = 'Please Enter correct User and Password';
            setTimeout(() => {this.ShowErrorMessage = ''; }, 2000);
         }
      })
     }
  }
  CheckPasswordToggler(){
    this.PasswordToggler =  !this.PasswordToggler;
  }
}
