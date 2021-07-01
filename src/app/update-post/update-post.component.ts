import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { tagDropdownArray } from './../util/tagArray';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  post: Post = new Post();
  dropdownTags = [];
  selectedTags: string[] = [];
  dropdownSettings: IDropdownSettings;
  msg!: string;
  @ViewChild('frm')
  form: NgForm;

  constructor(
    public postService: PostsService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dropdownTags = tagDropdownArray;

    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };

    this.activatedRoute.paramMap.subscribe(params =>
      this.postService.viewPostById(params.get('id')).subscribe(data => {
        this.post = data;
        this.selectedTags = this.post.tags;
        console.log('Get Post: ', this.post);
      })
    );
  }

  updatePost() {
    console.log(this.selectedTags);
    if (this.selectedTags.length === 0) {
      this.post.tags.push('other');
    } else {
      this.post.tags = this.selectedTags;
    }

    this.postService.updatePost(this.post).subscribe(
      res => {
        console.log('res', res);
        this.msg = 'Post updated!';
        this.router.navigateByUrl('/posts');
      },
      HttpError => {
        this.msg = HttpError.error.text;
        this.router.navigateByUrl('/posts');
        console.log('Error in update: ', HttpError);
      }
    );

    this.post = new Post();
    this.form.reset();
  }
}
