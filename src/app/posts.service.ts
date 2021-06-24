import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(public http: HttpClient) {}

  viewAllPosts(): Observable<any> {
    return this.http.get('https://api-projectn.herokuapp.com/posts');
  }
}
