import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from "./packages/packages.component";
import { PackageDetailsComponent } from "./packages/package-details/package-details.component"
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AuthGuardGuard } from "./services/auth-guard.guard";
import { BaselayoutComponent } from './baselayout/baselayout.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'packagedetails/:packagename', component: PackageDetailsComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    // canActivateChild:[AuthGuardGuard]
  },
  { path: 'adminlogin', component: LoginComponent},
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent }, // Wildcard route for a 404 page
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload', preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
