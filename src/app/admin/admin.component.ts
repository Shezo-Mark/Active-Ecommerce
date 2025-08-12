import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor(public router:Router){}
Logout(): void{
  localStorage.removeItem('userData');
  this.router.navigate(['/saller']);
}
}
