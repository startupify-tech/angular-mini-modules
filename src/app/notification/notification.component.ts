import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NotificationService } from './notification.service';
import { Notification } from './notification.model';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[]=[];

  constructor(private http:HttpClient,private notificationService: NotificationService) {}

  ngOnInit(): void {
    // this.notificationService.createNotifications()
    this.notificationService.getNotifications().subscribe(
      notifications => {
        this.notifications = notifications;
      },
      error => {
        console.log(error);
      }
    );
  }

}
