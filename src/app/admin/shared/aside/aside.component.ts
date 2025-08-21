import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone: false,
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
   constructor(public router: Router){}
    asideList = [
      { name: 'Dashboard', route: '/admin', icon: 'fa-solid fa-house', active: false},
      { name: 'Bills Records', route: '/admin/bills', icon: 'fa-solid fa-toolbox', active: false},

      {
        name: 'Products', open: false,
        children: [
          { name: 'Add Products', route: '/admin/add-product' },
          { name: 'All Products', route: '/admin/products' }
        ]
      },

      {
        name: 'Users', open: false,
        children: [
          { name: 'Administrator', route: '/admin/users/admins' },
          { name: 'All Managers', route: '/admin/users/managers' }
        ]
      },

      { name: 'Payment Details', route: '/admin/payments', icon: 'fa-solid fa-credit-card', active: false}
    ];
      toggleDropdown(item: any) {
        // debugger
        this.asideList.forEach(el => {
          // debugger
          if (el !== item) el.open = false; // close others
        });
        item.open = !item.open; // toggle clicked one
      }
      toggleLinks(item: any) {
        // debugger
        this.asideList.forEach(el => {
          // debugger
          if (el !== item) el.active = false; // close others
        });
        item.active = !item.active; // toggle clicked one
      }
      ngOnInit(): void {
      }
}
