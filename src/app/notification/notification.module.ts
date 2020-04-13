import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationComponent } from './notification.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    NotificationComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationComponent,
    DropdownComponent
  ],
  // bootstrap: [NotificationComponent]
})
export class NotificationModule { }
