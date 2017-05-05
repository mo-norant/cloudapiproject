import { Injectable } from '@angular/core';
import { AuthserviceService } from './authservice.service'

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class OauthguardService implements CanActivate {

  constructor(private router: Router, private auth: AuthserviceService) { }

/*bron:
http://tphangout.com/angular-2-building-an-app-to-demonstrate-oauth-2/*/

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (next.url[0].path == 'login') {
      if (this.auth.isAuthenticated) {
        console.log('You are already logged in');
        return false;
      }
      else
        return true;
    }

    if (this.auth.isAuthenticated)
      return true;

    console.log('You must be logged in');
    this.router.navigate(['/login']);
    return false;
  }
}

