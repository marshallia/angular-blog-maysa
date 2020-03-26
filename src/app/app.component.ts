import { Component } from '@angular/core';
import {AuthServiceService} from './auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogAngular';

  constructor(private authServiceService: AuthServiceService) {
  }

  logout() {
    this.authServiceService.logout();
  }

  isLogin():boolean{
    return this.authServiceService.isLogin();
  }
}
