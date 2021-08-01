import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(public http: HttpClient) {
    this.urlString = 'https://api-projectn.herokuapp.com/users';
  }

  urlString: string;

  viewAllUsers(): Observable<any> {
    return this.http.get(this.urlString);
  }

  viewUserById(id: string): Observable<any> {
    return this.http.get(`${this.urlString}/${id}`);
  }

  addUser(user: User): Observable<any> {
    return this.http
      .post(`${this.urlString}`, user)
      .pipe(catchError(this.handleError));
  }

  updateUser(user: User): Observable<any> {
    return this.http
      .put(`${this.urlString}/${user.id}`, user)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error || 'Server error!');
  }
}
