import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Router } from '@angular/router';
import { AppService } from "../services/app.service";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faPlus = faPlus as IconProp;
  faMinus = faMinus as IconProp;

  constructor(private router: Router, private appService: AppService) { 
  }

  ngOnInit(): void {
    this.appService.setUrl(this.router.url);
  }

}
