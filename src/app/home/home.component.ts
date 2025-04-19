import { Component, OnInit } from '@angular/core';
import {HostListener} from '@angular/core';
import { faFacebookSquare, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { AppService } from "../services/app.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  viewMore = false;

  constructor(private router: Router, private appService: AppService) { 
  }

  ngOnInit(): void {
    this.appService.setUrl(this.router.url);
  }
}
