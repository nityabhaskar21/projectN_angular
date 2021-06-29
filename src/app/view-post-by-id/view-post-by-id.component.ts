import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../util/loading.service';

import { Post } from './../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-view-post-by-id',
  templateUrl: './view-post-by-id.component.html',
  styleUrls: ['./view-post-by-id.component.scss']
})
export class ViewPostByIdComponent implements OnInit {
  post: Post;
  pid: string;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public postsService: PostsService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pid = params.get('id');
      this.postsService.viewPostById(this.pid).subscribe(post => {
        console.log(post);
        this.post = post;
      });
    });
  }
}
