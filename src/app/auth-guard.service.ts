import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const user = this.authService.getUser();
    console.log(user.role);
    if (!this.authService.isAuthenticated() || (expectedRole && user.role !== expectedRole)) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
