import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  SallerName = '';
  constructor(public router:Router){
    if(localStorage.getItem('userData')){
       let userdata = JSON.parse(localStorage.getItem('userData') ||'' );
       this.SallerName = userdata.name;
    }
  }
Logout(): void{
  localStorage.removeItem('userData');
  this.router.navigate(['/saller']);
}
}
