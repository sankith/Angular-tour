import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  packageName!: string;
  faPlus = faPlus as IconProp;
  faMinus = faMinus as IconProp;
  constructor(private router:Router, private route:ActivatedRoute) {
    this.route.params.forEach(e => {
      this.packageName = e.packagename;
      if (this.packageName == undefined || this.packageName == ''){
        this.router.navigateByUrl('packages/kashi')
      }      
    })
   }

  ngOnInit(): void {
  }

}
