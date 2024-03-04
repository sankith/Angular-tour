import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { AboutComponent } from './about/about.component';
import { BaselayoutComponent } from './baselayout/baselayout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PackageDetailsComponent } from './packages/package-details/package-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { PopoverModule } from "ngx-bootstrap/popover";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    AboutComponent,
    BaselayoutComponent,
    PagenotfoundComponent,
    PackageDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
