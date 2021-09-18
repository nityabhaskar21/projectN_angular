import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from './post';
import { catchError } from 'rxjs/operators';
import { AuthenticateService } from './../user/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(
    public http: HttpClient,
    public authService: AuthenticateService
  ) {
    this.urlString = 'https://api-projectn.herokuapp.com/posts';
  }

  urlString: string;

  viewAllPosts(): Observable<any> {
    return this.http.get(this.urlString);
  }

  viewPostById(id: string): Observable<any> {
    return this.http.get(`${this.urlString}/${id}`);
  }

  addPost(post: Post): Observable<any> {
    return this.http
      .post(
        `${this.urlString}`,
        post,
        this.authService.setAuthorizationHeader()
      )
      .pipe(catchError(this.handleError));
  }

  updatePost(post: Post): Observable<any> {
    return this.http
      .put(
        `${this.urlString}/${post.id}`,
        post,
        this.authService.setAuthorizationHeader()
      )
      .pipe(catchError(this.handleError));
  }

  deletePostById(post: Post): Observable<any> {
    return this.http
      .delete(
        `${this.urlString}/${post.id}`,
        this.authService.setAuthorizationHeader()
      )
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error || 'Server error!');
  }
}
