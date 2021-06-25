import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { Post } from '../post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  post: Post = new Post();
  msg!: string;
  @ViewChild('frm')
  form: NgForm;

  constructor(public postService: PostsService, public router: Router) {}

  ngOnInit(): void {}

  addPost() {
    this.postService.addPost(this.post).subscribe(res => {
      if (res) {
        this.msg = res;
        this.router.navigateByUrl('/posts');
      }
    });

    this.post = new Post();
    this.form.reset();
  }
}
