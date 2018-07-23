import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchComponent } from './launch/launch.component';
import { DetailsComponent } from './details/details.component';
import { IndividualLaunchResolve } from "./IndividualLaunchResolve";
import { UpcomingDetailsComponent } from './upcoming-details/upcoming-details.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchComponent
  },
  {
    path: 'launch/:flight_number',
    component: DetailsComponent,
    resolve: {
      individualLaunch: IndividualLaunchResolve,
    }
  },
  {
    path: 'upcomingLaunch/:flight_number',
    component: UpcomingDetailsComponent,
    resolve: {
      individualLaunch: IndividualLaunchResolve,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
