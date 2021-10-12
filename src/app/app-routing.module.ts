import { LocationComponent } from './location/location.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '',   redirectTo: '/location', pathMatch: 'full'},
  { path: 'location', component: LocationComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', component: LocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
