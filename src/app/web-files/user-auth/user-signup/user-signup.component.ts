import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../../../services/user-auth.service';

@Component({
  selector: 'app-user-signup',
  standalone: false,
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.scss'
})
export class UserSignupComponent {
  constructor(public user:UserAuthService){}
   UserRagister = new FormGroup({
     name: new FormControl('', Validators.required),
     email: new FormControl('', Validators.required),
     phone: new FormControl('', Validators.required),
     password: new FormControl('', Validators.required),
   })
   UserRagisterForm(data: any){
   }
}
