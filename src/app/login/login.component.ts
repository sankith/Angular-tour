import { Component, OnInit } from '@angular/core';
import { setToken } from "../services/local-storage.manager";
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    // this.accountService.login(this.f.username.value, this.f.password.value)
    // .pipe(first())
    // .subscribe({
    //     next: () => {
    //         // Get return url from query parameters or default to home page
    //         const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //         this.router.navigateByUrl(returnUrl);
    //     },
    //     error: error => {
    //         this.alertService.error(error);
    //         this.loading = false;
    //     }
    // });
  }

  login(logininput : any){
    setToken(logininput.value)
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.router.navigateByUrl(returnUrl);
  }

}
