import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LaunchComponent } from './launch/launch.component';
import { DetailsComponent } from './details/details.component';
import { IndividualLaunchResolve } from './IndividualLaunchResolve';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { UpcomingDetailsComponent } from './upcoming-details/upcoming-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    DetailsComponent,
    UpcomingDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    IndividualLaunchResolve,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
