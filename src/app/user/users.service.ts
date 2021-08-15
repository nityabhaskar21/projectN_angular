import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from './user';
import { Login } from './login';
import { AuthenticateService } from './authenticate.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    public http: HttpClient,
    public authService: AuthenticateService,
    public router: Router
  ) {
    this.urlString = 'https://api-projectn.herokuapp.com/users';
  }

  urlString: string;

  viewAllUsers(): Observable<any> {
    return this.http.get(this.urlString).pipe(catchError(this.handleError));
  }

  viewUserById(id: string): Observable<any> {
    return this.http.get(
      `${this.urlString}/id/${id}`,
      this.authService.setAuthorizationHeader()
    );
  }

  viewUserByUsername(username: string): Observable<any> {
    return this.http.get(
      `${this.urlString}/username/${username}`,
      this.authService.setAuthorizationHeader()
    );
  }

  loginUser(login: Login): Promise<string> {
    return new Promise(resolve => {
      this.authService.loginUser(login).subscribe(
        (res: any) => {
          console.log('res from auth: ', res);
          let token = res.jwt;
          if (token && token.length != 0) {
            this.authService.addToken(token);
            this.router.navigateByUrl('/posts').then(() => {
              window.location.reload();
            });
            resolve('success');
          }
        },
        HttpError => {
          console.log('error: ', HttpError.error);
          resolve(HttpError.error);
        }
      );
    });
  }

  addUser(user: User): Observable<any> {
    return this.http
      .post(`${this.urlString}`, user)
      .pipe(catchError(this.handleError));
  }

  updateUserById(user: User): Observable<any> {
    return this.http
      .put(
        `${this.urlString}/id/${user.id}`,
        user,
        this.authService.setAuthorizationHeader()
      )
      .pipe(catchError(this.handleError));
  }

  updateUserByUsername(user: User): Observable<any> {
    return this.http
      .put(
        `${this.urlString}/username/${user.username}`,
        user,
        this.authService.setAuthorizationHeader()
      )
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error || 'Server error!');
  }
}
