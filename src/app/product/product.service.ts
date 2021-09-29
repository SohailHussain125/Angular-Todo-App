import { Injectable, TemplateRef } from '@angular/core';
import { Observable, Subject, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  modal = new Subject<{ open: boolean; template: TemplateRef<any> }>();
  flag = new BehaviorSubject<{ v: boolean, a: string }>({ a: "true", v: true });
  flag2 = new Observable<{ name: string, age: number }>();

  apiUrl: string = 'http://localhost:4000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  createProduct(data): Observable<any> {
    console.log(data, ">>>");
    let API_URL = `${this.apiUrl}/create-product`;
    let formData = new FormData();
    formData.append(`image`, data.file)
    formData.append(`name`, data.name)
    formData.append(`price`, data.price)
    formData.append(`description`, data.description)
    return this.http.post(API_URL, formData)
      .pipe(
        catchError(this.error)
      )
  }

  updateProduct(data, id): Observable<any> {
    let API_URL = `${this.apiUrl}/update-product/${id}`;
    let formData = new FormData();
    formData.append(`image`, data.file)
    formData.append(`name`, data.name)
    formData.append(`price`, data.price)
    formData.append(`description`, data.description)
    return this.http.put(API_URL, formData)
      .pipe(
        catchError(this.error)
      )
  }

  deleteProduct(id): Observable<any> {
    let API_URL = `${this.apiUrl}/delete-product/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.error)
    )
  }

  getProduct() {
    let API_URL = `${this.apiUrl}/getAll-product`;
    return this.http.get(API_URL)
      .pipe(
        catchError(this.error)
      )
  }

  getByIdProduct(id) {
    let API_URL = `${this.apiUrl}/getbyId-product/${id}`;
    return this.http.get(API_URL).pipe(
      catchError(this.error)
    )
  }
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

