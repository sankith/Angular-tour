import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BaselayoutComponent } from './baselayout/baselayout.component'
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from "./packages/packages.component";
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', pathMatch: 'full', component: AboutComponent},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
