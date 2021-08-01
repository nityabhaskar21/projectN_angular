import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  msg!: string;
  @ViewChild('frm')
  form: NgForm;

  constructor(public userService: UsersService, public router: Router) {}

  ngOnInit(): void {}

  addUser() {}
}
