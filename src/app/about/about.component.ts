import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faPlus = faPlus as IconProp;
  faMinus = faMinus as IconProp;

  constructor() { }

  ngOnInit(): void {
  }

}
