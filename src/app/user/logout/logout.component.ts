import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { Location } from '@angular/common';
import { ModalService } from 'src/app/util/modal.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  msg!: string;
  username: string;
  constructor(
    public router: Router,
    public authService: AuthenticateService,
    private location: Location,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  logout() {
    if (this.authService.isLogged()) {
      this.authService.removeToken();
      this.msg = 'Logged Out!';
      this.router.navigateByUrl('/posts').then(() => {
        window.location.reload();
      });
    }
  }

  cancellogout() {
    this.modalService.cancellogout();
  }
}
