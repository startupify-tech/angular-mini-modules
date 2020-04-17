import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError, take, exhaustMap } from 'rxjs/operators';

import { Notification } from './notification.model';
import { AuthService } from "../auth/auth.service";


@Injectable({ providedIn: 'root' })
export class NotificationService {

  NOTIFICATION_END_POINT:string =  'https://ng-notifications-9cb2b.firebaseio.com/notification.json';

  constructor(private http:HttpClient, private authService: AuthService) {}

  createNotifications(){
    const notification = new Notification();
    notification.title = "Daniel liked your post";
    notification.text = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.";
    notification.createdAt = Date.now();
    notification.targetUrl = "http://localhost:4200/";
    this.http
      .post(
        this.NOTIFICATION_END_POINT,
        notification
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          console.log(error)
        }
      );
  }

  public getNotifications() {

    return this.http
    .get<{ [key: string]: Notification }>(this.NOTIFICATION_END_POINT)
    .pipe(
      map(responseData => {
        const notifications: Notification[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            notifications.push({ ...responseData[key]});
          }
        }
        return notifications;
      }));
    }

  }
