import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  notifications: Notification[];
  // visibility:boolean = false;

  constructor(private notificationService: NotificationService) {
    this.notifications = notificationService.getNotifications();
  }

  ngOnInit(): void {
  }

  // onBell(event: Event){
  //   // console.log(event);
  //   this.visibility = (<MouseEvent>event).returnValue;
  //   console.log(this.visibility);
  // }

}
