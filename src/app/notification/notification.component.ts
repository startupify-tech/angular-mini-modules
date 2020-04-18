import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import {Observable} from 'rxjs';

import { NotificationService } from './notification.service';
import { AuthService } from '../auth/auth.service';
import { Notification } from './notification.model';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[]=[];
  pollingData: any;

  constructor(private http:HttpClient,private notificationService: NotificationService, private authService: AuthService) {}

  ngOnInit(): void {
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
        console.log(error);
      }
    );

    this.authService.setPollingData1(this.pollingData);
  }

  onAddNotifications() {
    this.notificationService.createNotifications();
  }


}
