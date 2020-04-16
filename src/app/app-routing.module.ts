import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationComponent } from './notification/notification.component';
import { DashboardComponent} from "./dashboard/dashboard.component";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  // { path: '', component: AuthComponent, },
  { path: 'dashboard', component: DashboardComponent,},
  { path: 'notifications', component: NotificationComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
