import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';
import { Post } from './../post';

@Component({
  selector: 'app-viewall-posts',
  templateUrl: './viewall-posts.component.html',
  styleUrls: ['./viewall-posts.component.scss']
})
export class ViewallPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.viewAllPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }
}
