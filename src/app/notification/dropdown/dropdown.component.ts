import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";

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
    interval(5000)
    .pipe(
      startWith(0),
      switchMap(  () => this.notificationService.getNotifications()  )
    ).subscribe(
      notifications => {
        this.notifications = notifications;
      },
      error => {
        console.log(error);
      }
    );
  }

}
