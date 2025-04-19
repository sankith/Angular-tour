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

  }

}
