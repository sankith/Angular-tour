import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getToken } from "./local-storage.manager";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(getToken())
      if(getToken() != null && getToken() == "true" ){
        return true;
      }
      else{
        this.router.navigate(['/adminlogin'],{ queryParams: { returnUrl: state.url }})
        return false;
      }
  }
  
}
