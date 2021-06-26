import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { Post } from '../post';
import { tagDropdownArray } from './../util/tagArray';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  post: Post = new Post();
  dropdownTags = [];
  selectedTags: [] = [];
  dropdownSettings: IDropdownSettings;
  msg!: string;
  @ViewChild('frm')
  form: NgForm;

  constructor(public postService: PostsService, public router: Router) {}

  ngOnInit(): void {
    this.dropdownTags = tagDropdownArray;

    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }

  addPost() {
    console.log(this.selectedTags);
    if (this.selectedTags.length === 0) {
      this.post.tags.push('other');
    } else {
      this.post.tags = this.selectedTags;
    }

    this.postService.addPost(this.post).subscribe(
      res => {
        console.log('res', res);
        this.msg = 'Post added!';
        this.router.navigateByUrl('/posts');
      },
      HttpError => {
        this.msg = HttpError.error;
      }
    );

    this.post = new Post();
    this.form.reset();
  }
}
