import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  email='';
  constructor(public router:Router){
    if(localStorage.getItem('userData')){
      let userData=JSON.parse(localStorage.getItem('userData')??'');
      this.email=userData.email;
    }

  }
}
