import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faLocationPin, faContactCard, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.scss']
})
export class BaselayoutComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faLocationPin = faLocationPin as IconProp;
  faContactCard = faContactCard as IconProp;
  faPhone = faPhone as IconProp;
  faUser = faUser as IconProp;

  constructor() { }
 
  ngOnInit(): void {
  }

}
