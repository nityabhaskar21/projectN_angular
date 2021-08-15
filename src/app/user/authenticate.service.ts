import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(public http: HttpClient, private jwthelper: JwtHelperService) {}

  loginUser(login: Login): Observable<any> {
    return this.http.post(
      `https://api-projectn.herokuapp.com/authenticate`,
      login
    );
  }

  addToken(token: string) {
    localStorage.setItem('token', token);
    this.getTokenUsername();
  }
  isLogged(): Boolean {
    let token = localStorage.getItem('token');
    if (!token || token.length == 0) return false;
    else if (this.isJwtTokenExpired(token)) return false;
    else return true;
  }
  removeToken() {
    localStorage.removeItem('token');
  }
  getToken(): string {
    if (this.isLogged() == true) {
      return localStorage.getItem('token');
    } else return '';
  }

  isJwtTokenExpired(token: string): any {
    if (token.length > 0) {
      let isTokenExpired: any = this.jwthelper.isTokenExpired(token);
      return isTokenExpired;
    } else {
      return true;
    }
  }

  getTokenUsername(): string {
    let token = this.getToken();
    if (token.length > 0) {
      let tokenData: any = this.jwthelper.decodeToken(token);
      return tokenData.sub;
    } else {
      return '';
    }
  }

  setAuthorizationHeader() {
    let token: string = this.getToken();
    if (!token || token.length == 0) return null;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return {
      headers,
      responseType: 'text' as 'json'
    };
  }
}
