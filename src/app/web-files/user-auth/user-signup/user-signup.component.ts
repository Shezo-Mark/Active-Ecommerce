import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../../../services/user-auth.service';

@Component({
  selector: 'app-user-signup',
  standalone: false,
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.scss'
})
export class UserSignupComponent {
  constructor(public user:UserAuthService){}
  showpassword: boolean =  false;
  confirmshowpassword: boolean =  false;
  SuccessMessage=  '';
  ErrorMessage=  '';
  passwordMismatch = false;
   UserRagister = new FormGroup ({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
   });

     ngOnInit() {
      this.UserRagister.get('password')?.valueChanges.subscribe(() => this.checkPasswords());
      this.UserRagister.get('confirmPassword')?.valueChanges.subscribe(() => this.checkPasswords());
    }
    checkPasswords() {
      const pass = this.UserRagister.get('password')?.value;
      const confirmPass = this.UserRagister.get('confirmPassword')?.value;
      this.passwordMismatch = pass !== confirmPass;
    }
    UserRagisterForm(){
    if(this.UserRagister.invalid || this.passwordMismatch){
       console.log('Form Invalid');
            this.ErrorMessage = 'Form Submit Faild';
        setTimeout(() => {
          this.ErrorMessage=  '';
        }, 1000);
       this.UserRagister.markAllAsTouched();
       return
    }else{
      this.user.UserRagisterBck(this.UserRagister.value).subscribe((res) => {
        console.log('Backend Response', res);
        this.SuccessMessage = 'Form Submit Successfully';
        setTimeout(() => {
          this.SuccessMessage=  '';
        }, 2000);
        this.UserRagister.reset();
      }, (err) => {
        console.error('Backend Error', err);
       this.ErrorMessage = 'Form Submit Faild';
        setTimeout(() => {
          this.ErrorMessage=  '';
        }, 1000);
      }
    )
    }
   }
 PasswordToggler(){
  this.showpassword = !this.showpassword;
 }
 ConfirmPasswordToggler(){
  this.confirmshowpassword = !this.confirmshowpassword;
 }

}
