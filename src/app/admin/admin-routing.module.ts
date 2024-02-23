import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AdminComponent } from './admin/admin.component';
import { ScheduleVisitingplacesComponent } from './schedule-visitingplaces/schedule-visitingplaces.component';
import { ToursDetailsComponent } from './tours-details/tours-details.component';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { AuthGuardGuard } from '../services/auth-guard.guard';

const adminRoutes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardGuard],
    children: [
      { path: 'customer-details', component: CustomerDetailsComponent}, 
      { path: 'schedule', component: ScheduleVisitingplacesComponent}, 
      { path: 'tours-offered', component: ToursDetailsComponent}, 
      { path: 'train-details', component: TrainDetailsComponent},
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
