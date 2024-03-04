import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ColDef, GridApi, GridReadyEvent, PaginationNumberFormatterParams, SizeColumnsToContentStrategy, SizeColumnsToFitGridStrategy, SizeColumnsToFitProvidedWidthStrategy } from 'ag-grid-community';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-schedule-visitingplaces',
  templateUrl: './schedule-visitingplaces.component.html',
  styleUrls: ['./schedule-visitingplaces.component.scss']
})
export class ScheduleVisitingplacesComponent implements OnInit {

  tourName?: string;
  type?: string;

  content = '<p>dcjhbdcjhechjefcnejc   <strong>edcecedcedc<em>dcedcdcedcdcde<u>dcdc</u><s><u>dcdcdccdcdc</u></s></em></strong><strong class="ql-size-small"><em><s><u>dcdcdcdcdcdc  </u></s></em></strong><span class="ql-size-small">      </span></p><ol><li><span class="ql-size-small">dcdccvv</span></li><li><span class="ql-size-small">dcdcv</span></li></ol><ul><li><span class="ql-size-small">ccvr</span></li><li><span class="ql-size-small">cfcrvr</span></li><li>cfcvfv</li><li>cfcv</li></ul><p class="ql-indent-5">decfef</p><p class="ql-indent-5 ql-align-center"><span style="color: rgb(230, 0, 0);">cdcvefdvcfdvfdv</span><span style="background-color: rgb(255, 255, 0);">cefvefvefvv</span>dcefve<span class="ql-font-serif">defvefve </span><span class="ql-font-monospace">ferfvrfrv  r</span></p>';

  //Start : Grid Declaration
  defaultColDef: ColDef = {
    filter: false,
    floatingFilter: false,
  }

  autoSizeStrategy:
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy = {
    // type: 'fitGridWidth',
    type: 'fitCellContents'
  };

  paginationPageSize = 10;
  paginationPageSizeSelector: number[] | boolean = [10, 20, 30, 40];
  paginationNumberFormatter: (
    params: PaginationNumberFormatterParams
  ) => string = (params: PaginationNumberFormatterParams) => {
    return '[' + params.value.toLocaleString() + ']';
  };

  rowData: any[] = [
    {'day': 1, 'schedule': this.content},
    {'day': 2, 'schedule': this.content},
    {'day': 3, 'schedule': this.content},
    {'day': 4, 'schedule': this.content},
    {'day': 5, 'schedule': this.content},

  ];

  colDefs: ColDef[] = [
    { headerName: 'Day' , field: 'day', cellStyle: {textAlign: 'center'}, minWidth: 25},
    { headerName: 'Schedule' , field: 'schedule', autoHeight: true, cellRenderer: (params: { data: { schedule: any; }; }) => {
      return params.data.schedule;
    } }
  ];

  showForm: boolean = false;
  gridApi!: GridApi;
  visitingPlaces: string[] = ['Kashi', 'Prayagraj', 'Ayodya', 'Gaya']; 
  //End : Grid Declaration


  constructor(private router: Router, private appService: AppService) {
    this.appService.setUrl(this.router.url);

  }

  ngOnInit(): void {
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    // this.http
    //   .get<any[]>(
    //     'https://www.ag-grid.com/example-assets/space-mission-data.json'
    //   )
    //   .subscribe((data) => (this.rowData = data));
  }
  
  addRowSchedule(newRow: any) {
    this.gridApi.applyTransaction({
      add: [newRow]
    });
  }

  addRowVisitingPlace(newRow: any){
    this.visitingPlaces.push(newRow['place'])
  }

  refreshData(){
    console.log(this.tourName, this.type);
  }



  addForm(){
    this.showForm = !this.showForm;
  }

  onSubmit(template : NgForm){
    if(this.type == 'Schedule'){
      console.log('schedule')
      console.log(template.value)
      this.addRowSchedule(template.value);
    }
    else if(this.type == 'Visiting Place'){
      console.log('Visiting Place')
      console.log(template.value)
      this.addRowVisitingPlace(template.value);
    }
    template.reset()
    this.showForm = false;
  }
}
