import { Component, OnInit } from '@angular/core';
import {HostListener} from '@angular/core';
import { faFacebookSquare, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

  constructor() { }

  ngOnInit(): void {
  }
}
