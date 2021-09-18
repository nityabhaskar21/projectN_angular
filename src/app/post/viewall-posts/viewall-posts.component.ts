import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';
import { Post } from './../post';
import { LoadingService } from '../../util/loading.service';

@Component({
  selector: 'app-viewall-posts',
  templateUrl: './viewall-posts.component.html',
  styleUrls: ['./viewall-posts.component.scss']
})
export class ViewallPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    public postsService: PostsService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.postsService.viewAllPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }
}
