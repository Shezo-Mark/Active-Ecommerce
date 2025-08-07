import { Component } from '@angular/core';
import { SallerAuthService } from '../../../services/saller-auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-saller-signup',
  standalone: false,
  templateUrl: './saller-signup.component.html',
  styleUrl: './saller-signup.component.scss'
})
export class SallerSignupComponent {
  constructor(public saller: SallerAuthService){}
  PasswordToggler =  false;
  ConfirmPasswordToggler =  false;
  passwordMismatch: boolean = false;
  successMessage = '';
   PasseordToggle(event: Event){
    event.preventDefault();
   this.PasswordToggler = !this.PasswordToggler;
   }
  ConfirmPasseordToggle(event: Event){
    event.preventDefault();
   this.ConfirmPasswordToggler = !this.ConfirmPasswordToggler;
   }
   matchPaswword = {
    password: '',
    cpassword: ''
   }
  checkPasswords() {
    this.passwordMismatch = this.matchPaswword.password !== this.matchPaswword.cpassword;
  }
   SallerSignUp(data: any){
     this.checkPasswords();
     if(data.invalid || this.passwordMismatch){
      return;
     }
     this.saller.SallerRagisterBck(data.value).subscribe((res) => {
       if(res){
        this.successMessage = "Registration successful!";
        data.resetForm();
        setTimeout(() => {this.successMessage = '';}, 2000);
       }
     });
    // console.log(data.value)
   }
}
