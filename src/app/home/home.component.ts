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

  disableAnimation(){
    let elements = document.getElementsByClassName("upcoming")
    for (let index = 0; index < elements.length; index++) {
      const element = elements.item(index);
      element?.classList.add('pause');
    }   
  }

  enableAnimation(){
    let elements = document.getElementsByClassName("upcoming")
    for (let index = 0; index < elements.length; index++) {
      const element = elements.item(index);
      element?.classList.remove('pause')
    }   
  }
}
