import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NotificationModule } from '../notification/notification.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NotificationModule,
    RouterModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
