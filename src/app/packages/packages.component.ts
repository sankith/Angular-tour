import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) {
    this.route.params.forEach(e => {
      console.log(e.packagename);
    })
   }

  ngOnInit(): void {
  }

}
