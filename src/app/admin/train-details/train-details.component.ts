import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.scss']
})
export class TrainDetailsComponent implements OnInit {

  constructor(private router: Router, private appService: AppService) {
    this.appService.setUrl(this.router.url);

  }

  ngOnInit(): void {
  }

}
