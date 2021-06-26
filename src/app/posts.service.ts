import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from './post';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(public http: HttpClient) {}

  viewAllPosts(): Observable<any> {
    return this.http.get('https://api-projectn.herokuapp.com/posts');
  }

  viewPostById(id: string): Observable<any> {
    return this.http.get(`https://api-projectn.herokuapp.com/posts/${id}`);
  }

  addPost(post: Post): Observable<any> {
    return this.http
      .post(`https://api-projectn.herokuapp.com/posts`, post)
      .pipe(catchError(this.handleError));
  }
  handleError(error) {
    return throwError(error || 'Server error!');
  }
}
