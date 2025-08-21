import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  standalone: false,
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent {
    Categories = [
      {name: 'New Arrivals', route: '/new-arrivals', icon: 'assets/images/icons/new-arrival.png'},
      { name: 'Living Room', route: '/living-room', icon: 'assets/images/icons/living-room.webp' },
      { name: 'Bedroom', route: '/bedroom', icon: 'assets/images/icons/bedroom.webp' },
      { name: 'Kitchen', route: '/kitchen', icon: 'assets/images/icons/kitchen.webp' },
      { name: 'Dining', route: '/dining', icon: 'assets/images/icons/dining.webp' },
      { name: 'Office', route: '/office', icon: 'assets/images/icons/office.webp' },
      { name: 'Outdoor & Patio', route: '/outdoor-patio', icon: 'assets/images/icons/outdoor-patio.webp' },
      { name: 'Small Spaces', route: '/small-spaces', icon: 'assets/images/icons/small-spaces.webp' },
      { name: 'Bathroom', route: '/bathroom', icon: 'assets/images/icons/bathroom.webp' },
      { name: 'Baby & Kids', route: '/baby-kids', icon: 'assets/images/icons/baby-kids.webp' },
    ]
}
