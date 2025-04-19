import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AppService } from "../../services/app.service";

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {
  packageName!: string;
  faPlus = faPlus as IconProp;
  faMinus = faMinus as IconProp;
  constructor(private router:Router, private route:ActivatedRoute, private appService: AppService) {

    this.appService.setUrl(this.router.url);

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
