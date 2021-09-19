import { Component } from '@angular/core';
import { AuthenticateService } from './user/authenticate.service';
import { ModalService } from './util/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectN-angular';
  username: string;
  isLogged: Boolean = false;
  toggleButtonVisible: Boolean = false;

  constructor(
    public authenticateService: AuthenticateService,
    public modalService: ModalService
  ) {
    this.username = this.authenticateService.getTokenUsername();
    this.isLogged = this.authenticateService.isLogged();
  }
  ngOnInit(): void {}

  toggleButton() {
    this.toggleButtonVisible = !this.toggleButtonVisible;
  }
}
