import { Component } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-saller-login',
  standalone: false,
  templateUrl: './saller-login.component.html',
  styleUrl: './saller-login.component.scss'
})
export class SallerLoginComponent {
  PasswordToggler =  false;
   PasseordToggle(event: Event){
    // event.preventDefault();
   this.PasswordToggler = !this.PasswordToggler;
   }
}
