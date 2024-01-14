import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { style } from '@angular/animations';


@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor(private router: Router, private appService: AppService) { 
  }

  ngOnInit(): void {
    this.appService.setUrl(this.router.url);

    let ititnaries = document.getElementsByClassName('itinary-details');
    let firstItinaryDetails = ititnaries[0] as HTMLElement;
    let secondItinaryDetails = ititnaries[ititnaries.length -1] as HTMLElement;
    // firstItinaryDetails.style.borderTopLeftRadius = '5px';
    // firstItinaryDetails.style.borderTopRightRadius = '5px';
    // secondItinaryDetails.style.borderBottomLeftRadius = '5px';
    // secondItinaryDetails.style.borderBottomRightRadius = '5px';

  }

}
