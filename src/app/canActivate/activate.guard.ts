import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {

  constructor( private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if (sessionStorage.getItem('fName') === 'vikas') {
        return true;
      } else {
        alert('You are not autorized, so redirection to signIn page');
        this.router.navigateByUrl('/signIn');
      }
    }
}
