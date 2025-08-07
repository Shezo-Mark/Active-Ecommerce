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
   PasseordToggle(event: Event){
    event.preventDefault();
   this.PasswordToggler = !this.PasswordToggler;
   }
  ConfirmPasseordToggle(event: Event){
    event.preventDefault();
   this.ConfirmPasswordToggler = !this.ConfirmPasswordToggler;
   }
   SallerSignUp(data: any){
     this.saller.SallerRagisterBck(data.value);
    // console.log(data.value)
   }
}
