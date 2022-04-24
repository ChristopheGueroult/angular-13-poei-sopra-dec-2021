import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private usersService: UsersService,
    private authService: AuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    console.log(JSON.parse(user ? user : ''));
    if (user) {
      this.authService.user$.next(JSON.parse(user));
    }
    this.authService.token$.next(token);
    if (token) {
      return true;
    } else {
      this.router.navigate(['sign-in']);
      return false;
    }
  }
}
