import { Component } from '@angular/core';
import { AuthenticateService } from './user/authenticate.service';

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

  constructor(public authenticateService: AuthenticateService) {
    this.username = this.authenticateService.getTokenUsername();
    this.isLogged = this.authenticateService.isLogged();
  }
  ngOnInit(): void {}

  toggleLogout() {
    this.toggleButtonVisible = !this.toggleButtonVisible;
  }
}
