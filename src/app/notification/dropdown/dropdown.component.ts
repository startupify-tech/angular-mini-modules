import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import {Observable} from 'rxjs';

import { NotificationService } from '../notification.service';
import { Notification } from '../notification.model';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

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

    this.authService.setPollingData2(this.pollingData);
  }



}
