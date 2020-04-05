import { Component, OnInit } from '@angular/core';
import { MessagingService } from "./messaging.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  public tempMsg;

  constructor(private object: MessagingService) {

    this.tempMsg = this.object.message;
  }

  ngOnInit(): void {
  }

}
