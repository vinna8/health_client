import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /*login(token: string) {
    if (token) {
      const data = this.decodeToken(token);
      //sessionStorage.setItem('user', data.email);
      this.router.navigate(['dashboard']);
    }
  }

  private decodeToken(token: string) {
    console.log((token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')))
    return JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
  }*/

  login(): Observable<any>{
    const response = this.http.get<any>('http://localhost:3001/api/auth/google')
    console.log(response)
    return response
  }
}
