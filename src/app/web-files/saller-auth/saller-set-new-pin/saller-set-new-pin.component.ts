import { Component } from '@angular/core';

@Component({
  selector: 'app-saller-set-new-pin',
  standalone: false,
  templateUrl: './saller-set-new-pin.component.html',
  styleUrl: './saller-set-new-pin.component.scss'
})
export class SallerSetNewPinComponent {
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
}
