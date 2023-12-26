import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.scss']
})
export class BaselayoutComponent implements OnInit {

  faLocationPin = faLocationPin as IconProp;
  router!: Route;

  constructor() { }
 
  ngOnInit(): void {
    let element = document.getElementById('home')
    element?.classList.add('active')
  }

  changeActive(event: any){
    
    let ids = ['home', 'packages', 'aboutus']
    ids.forEach((id)=> {
      let element = document.getElementById(id)
      if (id == event.target.parentElement.id || id == event.target.id){
        element?.classList.add('active')
      }
      else{
        element?.classList.remove('active')
      }

    })
  }
}
