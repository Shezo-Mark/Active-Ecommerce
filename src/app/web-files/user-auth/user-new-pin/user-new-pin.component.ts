import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../../../services/user-auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-new-pin',
  standalone: false,
  templateUrl: './user-new-pin.component.html',
  styleUrl: './user-new-pin.component.scss'
})
export class UserNewPinComponent {
  showpassword = false;
  confirmshowpassword = false;
  SetPasswordUserId: any;
  SetPasswordMisMatch: boolean = false;
  ShowSuccessMessage = '';
  ShowErrorMessage = '';
  constructor(public user:UserAuthService, public route:ActivatedRoute, public router:Router){}
  UserSetPin = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  UrlSnapUserId(){
    this.SetPasswordUserId = this.route.snapshot.paramMap.get('id');
  }
  PasswordToggler(event: any){
    event.preventDefault();
    this.showpassword = !this.showpassword;
  }

  ConfirmPasswordToggler(event: any){
    event.preventDefault();
    this.confirmshowpassword = !this.confirmshowpassword;
  };
   CheckMatchPassword(){
      const pass = this.UserSetPin.get('password')?.value;
      const confirmPass = this.UserSetPin.get('confirmPassword')?.value;
      this.SetPasswordMisMatch = pass !== confirmPass;
   }
  UserSetPinForm(){
     if(this.UserSetPin.invalid || this.SetPasswordMisMatch){
      console.log('Faild Pass update');
      setTimeout(() => {this.ShowErrorMessage = ''; }, 2000);
      return
     }else{
        this.user.UserSetPinBck(this.SetPasswordUserId, this.UserSetPin.value).subscribe((res) =>{
          if(res){
           this.ShowSuccessMessage = 'Password Updated';
           setTimeout(() => {this.ShowSuccessMessage = ''; }, 2000);
          }
        })
     }
  }
  ngOnInit(): void {
    this.UserSetPin.get('password')?.valueChanges.subscribe(() => {
      this.CheckMatchPassword();
    });
    this.UserSetPin.get('confirmPassword')?.valueChanges.subscribe(() => {
      this.CheckMatchPassword();
    });
    this.UrlSnapUserId();
  }
}
