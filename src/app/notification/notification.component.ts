import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[];

  constructor(private notificationService: NotificationService) {
    this.notifications = notificationService.getNotifications();
  }

  ngOnInit(): void {
  }

}
