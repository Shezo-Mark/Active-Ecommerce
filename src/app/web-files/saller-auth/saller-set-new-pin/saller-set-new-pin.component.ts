import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SallerAuthService } from '../../../services/saller-auth.service';

@Component({
  selector: 'app-saller-set-new-pin',
  standalone: false,
  templateUrl: './saller-set-new-pin.component.html',
  styleUrl: './saller-set-new-pin.component.scss'
})
export class SallerSetNewPinComponent {
  constructor(private route: ActivatedRoute, public saller:SallerAuthService) {}

  PasswordToggler =  false;
  ConfirmPasswordToggler =  false;
   SetPasswordMisMatch: boolean = false;
   userId: any= '';
   PasseordToggle(event: Event){
    event.preventDefault();
   this.PasswordToggler = !this.PasswordToggler;
   }
  ConfirmPasseordToggle(event: Event){
    event.preventDefault();
   this.ConfirmPasswordToggler = !this.ConfirmPasswordToggler;
   }
   ForgetUserId(){
    this.userId = this.route.snapshot.paramMap.get('userId');
    console.log('User ID:', this.userId);
   }
   SetPasswordMatched={
      password: '',
      cpassword: ''
   }
   CheckMatchPassword(){
    this.SetPasswordMisMatch = this.SetPasswordMatched.password == this.SetPasswordMatched.cpassword;
   }
   SellerSetPassword(data: any){
   this.saller.SallerSetPinBck(this.userId , data.value).subscribe((res) => {
    if(res){
      debugger
      console.log(res)
    }
   })
   }
   ngOnInit() {
    this.ForgetUserId();
  }
}
