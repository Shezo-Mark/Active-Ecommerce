import { Component } from '@angular/core';
import { every } from 'rxjs';
import { SallerAuthService } from '../../../services/saller-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saller-login',
  standalone: false,
  templateUrl: './saller-login.component.html',
  styleUrl: './saller-login.component.scss'
})
export class SallerLoginComponent {
  PasswordToggler =  false;
  showsuccessMessage = '';
  showerrorMessage = '';
  constructor(public saller:SallerAuthService, public router:Router){}
   PasseordToggle(event: Event){
    // event.preventDefault();
   this.PasswordToggler = !this.PasswordToggler;
   }
   SallerSignIn(data: any){
     this.saller.SallerLoginBck(data.value).subscribe(res =>  {
         if(res && res.length > 0){
          let loginuser={
            name: res[0].name,
            email:res[0].email,
            password:res[0].password
          }
          localStorage.setItem('userData', JSON.stringify(loginuser));
          this.showsuccessMessage = 'Login success fully'
           setTimeout(() => {this.showsuccessMessage = '';}, 2000);
           setTimeout(() => {this.router.navigate(['/admin'])}, 2000);
         }else{
          this.showerrorMessage = 'Login faild';
           setTimeout(() => {this.showerrorMessage = '';}, 2000);
        }
     })
   }
   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

   }
}
