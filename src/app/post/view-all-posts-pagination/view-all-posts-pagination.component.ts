import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Location } from '@angular/common';
import { Post } from './../post';
import { LoadingService } from '../../util/loading.service';

@Component({
  selector: 'app-view-all-posts-pagination',
  templateUrl: './view-all-posts-pagination.component.html',
  styleUrls: ['./view-all-posts-pagination.component.scss']
})
export class ViewAllPostsPaginationComponent implements OnInit {
  posts: Post[] = [];
  pageno: number = 0;

  constructor(
    public postsService: PostsService,
    public loadingService: LoadingService,
    public route: ActivatedRoute,
    public router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pageno = +params.get('pageno');
      this.postsService.viewAllPostsByPage(this.pageno).subscribe(res => {
        if (this.pageno > res.total_no_of_pages - 1) {
          this.location.back();
        }
        this.posts = res.data;
        this.postsService.setTotalNoOfPages(res.total_no_of_pages);
      });
    });
  }

  counter(i: number) {
    return new Array(i);
  }
}
