import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @HostListener('window:scroll', ['']) navFixed(){
     if(window.scrollY > 33){
      this.navbarFixed = true;
      document.body.classList.add('headFixed');
      }else{
          this.navbarFixed = false;
          document.body.classList.remove('headFixed');
      }
     }
  IsCategoryOpen = false;
  IsCartOpen = false;
  navbarFixed = false;


    CategoryToggler() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // If scrolled more than 50px
    if (scrollTop > 50) {
      this.IsCategoryOpen = !this.IsCategoryOpen;
    } else {
      this.IsCategoryOpen = false;
    }
  }
  cartDropdown(){
     this.IsCartOpen = !this.IsCartOpen;
  }
    navItems = [
    { name: 'Home', route: '/' },
    { name: 'Flash', route: '/flash' },
    { name: 'Sale', route: '/sale' },
    { name: 'Blogs', route: '/blogs' },
    { name: 'All Brands', route: '/brands' },
    { name: 'All Categories', route: '/categories' },
    { name: 'All Sellers', route: '/sellers' },
    { name: 'Coupons', route: '/coupons' },
    { name: 'Today\'s', route: '/todays' },
    { name: 'Deal', route: '/deal' }
  ];
}
