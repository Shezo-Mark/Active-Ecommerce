import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem('userData');
  if (user) {
    return true; // Allow route access
  } else {
    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
};
