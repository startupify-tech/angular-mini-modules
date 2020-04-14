import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotificationComponent } from './notification.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NotificationComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    NotificationComponent,
    DropdownComponent
  ],
  // bootstrap: [NotificationComponent]
})
export class NotificationModule { }
