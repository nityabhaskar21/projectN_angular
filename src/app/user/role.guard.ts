import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './authenticate.service';
import { User } from './user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  user: User = new User();
  constructor(
    private authService: AuthenticateService,
    private userService: UsersService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isLogged()) {
      let username = this.authService.getTokenUsername();
      if (username.length > 0) {
        this.userService.viewUserByUsername(username).subscribe(user => {
          this.user = user;
        });
      }
    }
    return true;
  }
}
