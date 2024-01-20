import { Component, TemplateRef } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: true } }
  ]
})
export class AppComponent {
  faWhatsapp = faWhatsapp;
  title = 'srilaxminarshima';

  userDetails = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    tour: new FormControl(''),

  });

  modalRef?: NgbModalRef;
  config = {
    animation: true
  };
  constructor(private modalService: NgbModal) {}
 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.open(template, this.config);
  }

  onSubmit(){
    console.log(this.userDetails.value)

    let url =  'https://api.whatsapp.com/send?phone=9294000040'
    window.open(url, "_blank");
    

    this.modalRef?.close();
  }
}
