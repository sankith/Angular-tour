import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ColDef, SizeColumnsToFitGridStrategy, SizeColumnsToFitProvidedWidthStrategy, SizeColumnsToContentStrategy, PaginationNumberFormatterParams, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-tours-offered',
  templateUrl: './tours-details.component.html',
  styleUrls: ['./tours-details.component.scss']
})
export class ToursDetailsComponent implements OnInit {

   //Start : Form Declaration
   TourDetails = new FormGroup({
    tour : new FormControl('', Validators.required),
    package_cost : new FormControl('', Validators.required),
    start_date : new FormControl('', Validators.required),
    end_date : new FormControl('', Validators.required),
    no_of_days : new FormControl('', Validators.required),
  })
  //End : Form Declaration

  //Start : Grid Declaration
  defaultColDef: ColDef = {
    filter: true,
    floatingFilter: true,
  }

  autoSizeStrategy:
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy = {
    type: 'fitGridWidth',
    // type = 'fitCellContents'
  };

  paginationPageSize = 50;
  paginationPageSizeSelector: number[] | boolean = [50, 100, 150, 200];
  paginationNumberFormatter: (
    params: PaginationNumberFormatterParams
  ) => string = (params: PaginationNumberFormatterParams) => {
    return '[' + params.value.toLocaleString() + ']';
  };

  rowData: any[] = [
    {tour:'sankith',package_cost: '20000', start_date: '08/01/2000', end_date: '08/01/2000'},
    {tour:'sankith',package_cost: '25000', start_date: '08/01/2000', end_date: '08/01/2000'},
  ];

  colDefs: ColDef[] = [
    { headerName: 'Tour Name' , field: 'tour',
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true },
    { headerName: 'Package Cost' , field: 'package_cost' },
    { headerName: 'Start Date' , field: 'start_date', filter: 'agDateColumnFilter'},
    { headerName: 'End Date' , field: 'end_date', filter:'agDateColumnFilter' }
  ];
  showToursForm: boolean = false;
  gridApi!: GridApi;
  selectedRows: any[] = [];
  //End : Grid Declaration


  constructor() { }

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
  
  onSubmit(){
    console.log('submit main')
    this.rowData.push(this.TourDetails.value);
    this.gridApi.setGridOption('rowData',this.rowData);

    this.TourDetails.reset();
    this.showToursForm = false;
  }

  onSelectionChanged(){
    this.selectedRows = this.gridApi.getSelectedRows();
    console.log(this.selectedRows)
  }

  addTourForm(){
    this.showToursForm = !this.showToursForm;
  }
}
