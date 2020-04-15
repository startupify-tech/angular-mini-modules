import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NotificationService } from '../notification.service';
import { Notification } from '../notification.model';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

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
