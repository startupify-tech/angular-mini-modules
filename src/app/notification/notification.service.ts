import { Injectable } from '@angular/core';
import { Notification } from './notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {

  constructor() { }

  public getNotifications() {
    let notification = new Notification();
    notification.title = "Daniel liked your post";
    notification.text = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.";
    notification.createdAt = Date.now();
    notification.targetUrl = "http://localhost:4200/";

    let notifications = [];
    notifications.push(notification);
    notifications.push(notification);
    notifications.push(notification);
    notifications.push(notification);
    notifications.push(notification);
    return notifications;
  }

}
