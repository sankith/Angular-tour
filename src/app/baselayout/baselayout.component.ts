import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { AppService } from "../services/app.service";

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.scss']
})
export class BaselayoutComponent implements OnInit {

  faLocationPin = faLocationPin as IconProp;
  router!: Route;
  currentUrl = '';

  constructor(private appService: AppService) { 
    this.appService.currenturl$.subscribe((value) => {
      this.currentUrl = value;
      if (typeof(this.currentUrl) == "string"){
        setTimeout(() => {
          let page = this.currentUrl.split('/')[1];
            this.changeActive(page == 'packagedetails' ? 'packages' : page)
          }, 3);
      }
    });
  }

 
  ngOnInit(): void {

    let element = document.getElementById('home')
    element?.classList.add('active')
  }

  changeActive(event: any){
    
    let ids = ['home', 'packages', 'packagedetails', 'about', 'admin']
    ids.forEach((id)=> {
      let element = document.getElementById(id)
      if (typeof(event) == "string"){
        if (id == event){
          element?.classList.add('active')
        }
        else{
          element?.classList.remove('active')
        }
      }
      else{
        if (id == event.target.parentElement.id || id == event.target.id){
        element?.classList.add('active')
        }
        else{
          element?.classList.remove('active')
        }
      }
    })
  }
}
