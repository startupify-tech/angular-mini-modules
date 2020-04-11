import { Component, OnInit } from '@angular/core';
import { NotifyingService } from "../notifying.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications;

  constructor(private message: NotifyingService) {
    this.notifications = message.object;
   }

  ngOnInit(): void {
  }

}
