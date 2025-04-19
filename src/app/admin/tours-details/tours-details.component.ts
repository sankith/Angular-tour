import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColDef, SizeColumnsToFitGridStrategy, SizeColumnsToFitProvidedWidthStrategy, SizeColumnsToContentStrategy, PaginationNumberFormatterParams, GridApi, GridReadyEvent, GridOptions } from 'ag-grid-community';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-tours-offered',
  templateUrl: './tours-details.component.html',
  styleUrls: ['./tours-details.component.scss']
})
export class ToursDetailsComponent implements OnInit {

  @ViewChild('customerDetailsTemplate') customerDetailsTemplate!: TemplateRef<void>;

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
    {tour:'Kashi',package_cost: '20000', start_date: '08/01/2000', end_date: '08/01/2000', customerDetails: [
      {name:'sankith',gender: 'Male', dob: '08/01/2000', phone: '9100837067', address: 'Nyalkal, Nizamabad', aadhaar: '919100837067'},
      {name:'praveen',gender: 'Male', dob: '08/01/2000', phone: '9100837067', address: 'Nyalkal, Nizamabad', aadhaar: '919100837067'},
    ]},
    {tour:'Nepal',package_cost: '25000', start_date: '08/01/2000', end_date: '08/01/2000', customerDetails: [
      {name:'prashanth',gender: 'Male', dob: '08/01/2000', phone: '9100837067', address: 'Nyalkal, Nizamabad', aadhaar: '919100837067'},
      {name:'kalyan',gender: 'Male', dob: '08/01/2000', phone: '9100837067', address: 'Nyalkal, Nizamabad', aadhaar: '919100837067'},
    ]},
  ];

  modalRowData: any[] = [];
  modalColDefs: ColDef[] = [
    { headerName: 'Name' , field: 'name',
    headerCheckboxSelection: true,
    checkboxSelection: true,
    showDisabledCheckboxes: true },
    { headerName: 'Gender' , field: 'gender' },
    { headerName: 'Date Of Birth' , field: 'dob', filter: 'agDateColumnFilter'},
    { headerName: 'Phone' , field: 'phone' },
    { headerName: 'Address' , field: 'address' },
    { headerName: 'Aadhaar' , field: 'aadhaar' },
  ];

  colDefs: ColDef[] = [
    { headerName: 'Tour Name' , field: 'tour',
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true,
      cellRenderer: 'agGroupCellRenderer' },
    { headerName: 'Package Cost' , field: 'package_cost' },
    { headerName: 'Start Date' , field: 'start_date', filter: 'agDateColumnFilter'},
    { headerName: 'End Date' , field: 'end_date', filter:'agDateColumnFilter' }
  ];
  showToursForm: boolean = false;
  gridApi!: GridApi;
  modalGridApi!: GridApi;
  selectedRows: any[] = [];
  modalSelectedRows: any[] = [];
  gridOptions: GridOptions;
  //End : Grid Declaration


  modalRef?: BsModalRef;
  config = {
    animated: true,
    ignoreBackdropClick: true,
    class: 'modal-xl'
  };

  constructor(private modalService: BsModalService, private router: Router, private appService: AppService) {
    this.appService.setUrl(this.router.url);

    this.gridOptions = {
      onRowClicked: event => {
        this.openModal();
        this.modalRowData = event.data.customerDetails;
      }
    };
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

  onModalGridReady(params: GridReadyEvent) {
    this.modalGridApi = params.api;
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

  onModalSelectionChanged(){
    this.modalSelectedRows = this.modalGridApi.getSelectedRows();
    console.log(this.modalSelectedRows)
  }

  addTourForm(){
    this.showToursForm = !this.showToursForm;
  }

  openModal() {
    this.modalRef = this.modalService.show(this.customerDetailsTemplate, this.config);
  }

  closeModal(){
    this.modalGridApi.deselectAll();
    this.modalRef?.hide();
  }

  unLinkCustomersToTour(){
    console.log(this.modalSelectedRows);
    this.closeModal();
  }
}
