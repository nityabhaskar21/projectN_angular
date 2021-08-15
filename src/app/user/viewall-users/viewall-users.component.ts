import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-viewall-users',
  templateUrl: './viewall-users.component.html',
  styleUrls: ['./viewall-users.component.scss']
})
export class ViewallUsersComponent implements OnInit {
  users: User[] = [];
  constructor(public userService: UsersService) {}

  ngOnInit(): void {
    this.userService.viewAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }
}
