import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-mini-modules';

  isLoggedIn: boolean = false;
  private user$: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user.subscribe( user => {
      this.isLoggedIn = !!user;
      console.log(!user);
      console.log(!!user);
    });

    this.authService.autoLogin();
  }

  onSignOut() {
    this.authService.signOut();
    this.isLoggedIn = false;
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }

}
