import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef, GridReadyEvent, PaginationNumberFormatterParams,
   SizeColumnsToContentStrategy, SizeColumnsToFitGridStrategy,
   SizeColumnsToFitProvidedWidthStrategy, GridApi } from 'ag-grid-community';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  @ViewChild('template') linkFormTemplate!:TemplateRef<any>;

  //Start : Form Declaration
  customerDetails = new FormGroup({
    name : new FormControl('', Validators.required),
    gender : new FormControl('', Validators.required),
    dob : new FormControl('', Validators.required),
    phone : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    aadhaar : new FormControl('', [Validators.required, Validators.maxLength(12), Validators.minLength(12)]),
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
    {name:'sankith',gender: 'Male', dob: '08/01/2000', phone: '9100837067', address: 'Nyalkal, Nizamabad', aadhaar: '919100837067'},
    {name:'sankith',gender: 'Male', dob: '08/01/2000', phone: '9100837067', address: 'Nyalkal, Nizamabad', aadhaar: '919100837067'},
  ];

  colDefs: ColDef[] = [
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
  showCustomerForm: boolean = false;
  gridApi!: GridApi;
  selectedRows: any[] = [];
  //End : Grid Declaration

  modalRef?: BsModalRef;
  config = {
    animated: true,
    ignoreBackdropClick: true,
    class: 'modal-md'
  };

  constructor(private router: Router, private appService: AppService,private modalService: BsModalService) {
    this.appService.setUrl(this.router.url);

  }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, this.config);

  }

  closeModal(){
    this.modalRef?.hide();
    this.gridApi.deselectAll();
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
    this.rowData.push(this.customerDetails.value);
    this.gridApi.setGridOption('rowData',this.rowData);

    this.customerDetails.reset();
    this.showCustomerForm = false;
  }

  onSubmitLinkCustomers(template : NgForm){
    console.log('submit customer')
    console.log(template.value)
    console.log(this.selectedRows)
    this.closeModal();

  }

  onSelectionChanged(){
    this.selectedRows = this.gridApi.getSelectedRows();
    console.log(this.selectedRows)
  }

  addCustomerForm(){
    this.showCustomerForm = !this.showCustomerForm;
  }
}
