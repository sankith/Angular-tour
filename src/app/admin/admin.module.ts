import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminRoutingModule } from './admin-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AgGridModule } from "ag-grid-angular";
import { ModalModule } from "ngx-bootstrap/modal";
import { ToursDetailsComponent } from './tours-details/tours-details.component';
import { ScheduleVisitingplacesComponent } from './schedule-visitingplaces/schedule-visitingplaces.component';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { AdminComponent } from './admin/admin.component';
import { TabsModule } from "ngx-bootstrap/tabs";

@NgModule({
  declarations: [
    CustomerDetailsComponent,
    ToursDetailsComponent,
    ScheduleVisitingplacesComponent,
    TrainDetailsComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    AgGridModule,
    ModalModule.forRoot(),
    TabsModule.forRoot()
  ]
})
export class AdminModule { }
