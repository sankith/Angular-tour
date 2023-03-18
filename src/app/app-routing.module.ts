import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from "./packages/packages.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'packages', component: PackagesComponent },
  { path: 'packages/:packagename', component: PackagesComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
