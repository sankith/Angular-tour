import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ColDef, SizeColumnsToFitGridStrategy, SizeColumnsToFitProvidedWidthStrategy, SizeColumnsToContentStrategy, PaginationNumberFormatterParams, GridApi, GridReadyEvent } from 'ag-grid-community';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.scss']
})
export class TrainDetailsComponent implements OnInit {

  showJourneyForm: boolean = false;

  //Start : Grid Declaration
  defaultColDef: ColDef = {
    filter: false,
    floatingFilter: false,
  }

  autoSizeStrategy:
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy = {
    type: 'fitGridWidth',
    // type: 'fitCellContents'
  };

  paginationPageSize = 10;
  paginationPageSizeSelector: number[] | boolean = [10, 20, 30, 40];
  paginationNumberFormatter: (
    params: PaginationNumberFormatterParams
  ) => string = (params: PaginationNumberFormatterParams) => {
    return '[' + params.value.toLocaleString() + ']';
  };

  rowData: any[] = [
    {'tour_name': 'Kashi', 'start_name': '10-03-2024', 'train_no': '12792', 'journey_date': '10-03-2024', 'download': 'Yes'},
    {'tour_name': 'Kashi', 'start_name': '10-03-2024', 'train_no': '12792', 'journey_date': '10-03-2024', 'download': 'Yes'},
    {'tour_name': 'Kashi', 'start_name': '10-03-2024', 'train_no': '12792', 'journey_date': '10-03-2024', 'download': 'Yes'},
    {'tour_name': 'Kashi', 'start_name': '10-03-2024', 'train_no': '12792', 'journey_date': '10-03-2024', 'download': 'Yes'},
    {'tour_name': 'Kashi', 'start_name': '10-03-2024', 'train_no': '12792', 'journey_date': '10-03-2024', 'download': 'Yes'},

  ];

  colDefs: ColDef[] = [
    { headerName: 'Tour Name' , field: 'tour_name'},
    { headerName: 'Start Date' , field: 'start_name', filter: 'agDateColumnFilter'},
    { headerName: 'Train No', field: 'train_no'},
    { headerName: 'Journey Date', field: 'journey_date', filter: 'agDateColumnFilter'},
    { headerName: 'Download', field: 'download'}
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
  
  onSubmit(template : NgForm){
    console.log(template.value)
    this.rowData.push(template.value);
    this.gridApi.setGridOption('rowData',this.rowData);
    template.reset()
    this.showJourneyForm = false;
  }

  addTrainDetailsForm(){
    this.showJourneyForm = !this.showJourneyForm;
  }

}
