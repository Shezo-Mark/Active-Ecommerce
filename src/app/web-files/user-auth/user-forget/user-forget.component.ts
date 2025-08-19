import { Component } from '@angular/core';
import { UserAuthService } from '../../../services/user-auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-forget',
  standalone: false,
  templateUrl: './user-forget.component.html',
  styleUrl: './user-forget.component.scss'
})
export class UserForgetComponent {
  errorMessage: boolean = false;
  constructor(public user:UserAuthService, public router:Router){}
  UserForgetForm = new FormGroup<any>({
    email: new FormControl<any>('', [Validators.required, Validators.email]),
  })
  UserForget(){
    this.user.UserForgetBck(this.UserForgetForm.value).subscribe((res: any) => {
      if(res && res.length > 0){
        const useremailid = res[0];
        this.router.navigate(['/user/set-pin', useremailid.id]);
      }else{
        this.errorMessage = !this.errorMessage;
        setTimeout(() => {this.errorMessage = false }, 1000);
        console.log(this.errorMessage)
        return
      }
    })
  }
}
