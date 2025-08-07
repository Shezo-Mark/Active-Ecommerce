import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  slides = [
    { image: '../../../assets/images/banner-slider/slider-1.webp' },
    { image: '../../../assets/images/banner-slider/slider-2.webp' },
    { image: '../../../assets/images/banner-slider/slider-3.webp' }
  ];
  TodayDeals = [
    { image: '../../../assets/images/deal-1.webp' },
    { image: '../../../assets/images/deal-2.webp' },
    { image: '../../../assets/images/deal-3.webp' },
    { image: '../../../assets/images/deal-4.webp' },
    { image: '../../../assets/images/deal-5.webp' },
    { image: '../../../assets/images/deal-6.webp' },
    { image: '../../../assets/images/deal-7.webp' },
    { image: '../../../assets/images/deal-8.webp' },
    { image: '../../../assets/images/deal-9.webp' },
    { image: '../../../assets/images/deal-10.webp' }
  ];

  TodayDealsOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplay: true,
    items: 7
  };
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1400,       // Smooth transition speed (ms)
    slideTransition: 'ease-in-out', // Smooth CSS transition
    items: 1
  };
}
