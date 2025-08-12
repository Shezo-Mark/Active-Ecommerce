import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SallerAuthService } from '../../../services/saller-auth.service';

@Component({
  selector: 'app-saller-forget',
  standalone: false,
  templateUrl: './saller-forget.component.html',
  styleUrl: './saller-forget.component.scss'
})
export class SallerForgetComponent {
  constructor(public saller:SallerAuthService, public router:Router){}
  errorMessage = '';
  SallerForget(data: any){

    this.saller.SallerForgetBck(data.value).subscribe((res) => {
      if(res && res.length>0){
        const userId = res[0].id || res[0].userId;
          let forgetemail={
            email:res[0].email
          }
        this.router.navigate(['/saller/set-pin', userId])
      }
      else{
         this.errorMessage='plesae enter correct email';
           setTimeout(() => {this.errorMessage = '';}, 2000);
      }
    })
  }
}
