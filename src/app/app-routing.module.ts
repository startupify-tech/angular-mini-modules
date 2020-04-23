import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationComponent } from './notification/notification.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";


const routes: Routes = [
  { path: '', component: AuthComponent, outlet: 'auth' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'notifications', component: NotificationComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
