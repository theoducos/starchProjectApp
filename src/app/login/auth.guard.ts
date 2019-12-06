import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.verifyLogin()){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }


  constructor(private router: Router, private authService: AuthService) {
  }

  verifyLogin(): boolean {
    if (!this.isLoggedIn()) {

      return false;
    } else if (this.isLoggedIn()) {
      return true;
    }
  }

  public isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedin') == 'true') {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
}
