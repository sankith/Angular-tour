import { Component, TemplateRef } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

    const message = encodeURIComponent(`Hi,
    \nI Would like to know more details about the below tour.
    \nName: ${this.userDetails.controls['name'].value}
    \nEmail: ${this.userDetails.controls['email'].value}
    \nPhone: ${this.userDetails.controls['phone'].value}
    \nTour: ${this.userDetails.controls['tour'].value}`);

    let url =  `https://wa.me/9294000040?text=${message}`;
    window.open(url, "_blank");
    

    this.modalRef?.close();
  }

   
}
