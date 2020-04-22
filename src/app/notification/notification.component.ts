import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import {Subscription, Observable} from 'rxjs';

import { NotificationService } from './notification.service';
import { AuthService } from '../auth/auth.service';
import { Notification } from './notification.model';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {

  notifications: Notification[]=[];
  pollingData: Subscription;
  userSub: Subscription;
  pollingStopped: boolean = false;

  constructor(private http:HttpClient,private notificationService: NotificationService, private authService: AuthService) {}

  ngOnInit(): void {

    // this.notificationService.getNotifications().subscribe(
    //   notifications => {
    //     this.notifications = notifications;
    //     this.notifications.reverse();
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );

    this.userSub = this.authService.user.subscribe( user => {
      if(user) {
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
    this.pollingData = interval(5000)
    .pipe(
      startWith(0),
      switchMap(  () => this.notificationService.getNotifications()  )
    ).subscribe(
      notifications => {
        this.notifications = notifications;
        this.notifications.reverse();
      },
      error => {
        console.log("Polling Error:",error);
      }
    );

  }

  onStopPolling() {
    if(this.pollingData) {
      this.pollingData.unsubscribe();
      this.pollingStopped = true;
      console.log("polling stopped.");
    }
  }

  ngOnDestroy(): void {
    if(this.pollingStopped==false) {
      this.onStopPolling();
    }
    this.userSub.unsubscribe();
  }


}
