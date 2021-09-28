import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const APIKEY = "e8067b53";

@Injectable({
  providedIn: 'root'
})
export class FooResolveService implements Resolve<any>{

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('productId');
    return this.httpClient.get(`http://localhost:4000/getbyId-product/${id}`).pipe(
      catchError( (err: any) => {
      void this.router.navigate(['/']);
      return '';
    }
    )
    );
  }
}
