import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";
import { Subscription } from 'rxjs';

import { NotificationService } from './notification.service';
import { AuthService } from '../auth/auth.service';
import { Notification } from './notification.model';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {

  notifications: Notification[] = [];
  notifications$: Subscription;
  user$: Subscription;
  pollingStopped = false;

  constructor(private notificationService: NotificationService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.authService.user.subscribe(user => {
      if (user) {
        this.onStartPolling();
      } else {
        this.onStopPolling();
      }
    });
  }

  onAddNotifications() {
    this.notificationService.createNotifications();
  }

  onStartPolling() {
    console.log("polling started.");
    this.notifications$ = interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.notificationService.getNotifications())
      ).subscribe(
        notifications => {
          this.notifications = notifications;
          this.notifications.reverse();
        },
        error => {
          console.log("Polling Error:", error);
        }
      );
  }

  onStopPolling() {
    if (this.notifications$) {
      this.notifications$.unsubscribe();
      this.pollingStopped = true;
      console.log("polling stopped.");
    }
  }

  ngOnDestroy(): void {
    if (this.pollingStopped == false) {
      this.onStopPolling();
    }
    this.user$.unsubscribe();
  }

}
