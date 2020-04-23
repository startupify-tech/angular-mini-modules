import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NotificationComponent } from './notification.component';
import { NotificationDropdownComponent } from './notification-dropdown/notification-dropdown.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NotificationComponent,
    NotificationDropdownComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    NotificationComponent,
    NotificationDropdownComponent
  ]
})
export class NotificationModule { }
