import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/tabset.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) {
    if(this.router.url.endsWith('/admin') || this.router.url.endsWith('/admin/')){
      this.router.navigate(['/admin/customer-details'])
    }


    setTimeout(() => {
      this.removeActive();
      if(this.router.url.endsWith('schedule')){
        let element = document.getElementById('schedule-link')
        element?.classList.add('active')
      }
      else if(this.router.url.endsWith('tours-offered')){
        let element = document.getElementById('tours-offered-link')
        element?.classList.add('active')
      }
      else if(this.router.url.endsWith('customer-details')){
        let element = document.getElementById('customer-details-link')
        element?.classList.add('active')
      }
      else if(this.router.url.endsWith('train-details')){
        let element = document.getElementById('train-details-link')
        element?.classList.add('active')
      }
    }, 500);
  }



  ngOnInit(): void {
  }

  removeActive(){
    ['schedule-link','customer-details-link','tours-offered-link','train-details-link'].forEach((value) => {
    let element = document.getElementById(value)
      element?.classList.remove('active')
    });
  } 

  toggleActiveTabs(id: string){
    this.removeActive();
    let element = document.getElementById(id)
    element?.classList.add('active')
  }

}
