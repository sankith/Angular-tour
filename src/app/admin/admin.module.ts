import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { QuillModule } from "ngx-quill";

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
    TabsModule.forRoot(),
    QuillModule.forRoot({
      modules: {
          syntax: false,
          toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ indent: '-1' }, { indent: '+1' }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'font': [] }],
              [{ 'align': [] }],
              ['clean'], 
          ]
      },
      theme: 'snow'
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
