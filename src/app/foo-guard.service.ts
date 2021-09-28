import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs'

const APIKEY = "e8067b53";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const token = localStorage.getItem('token');
    if(token) {
      return of(true);
    } else {
      this.router.navigateByUrl('/'); 
      return of(false);
    }
  }


}