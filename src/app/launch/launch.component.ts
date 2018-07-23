import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Launch } from './launch';
import { LaunchService } from './launch.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  providers: [ LaunchService ],
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  public launch$: Launch[];
  public upcomingLaunch$: Launch[];

  constructor(private launchService: LaunchService, private router: Router) {
   }

  ngOnInit() {
    this.getLaunchData();
  }

  getLaunchData(): void {
    this.launchService.getLaunchData().subscribe(data => {
      this.launch$ = data;
  }
);
    this.launchService.getUpcomingLaunchData().subscribe(data => {
      this.upcomingLaunch$ = data;
  }
  );
}

  getDate(launch) {
    let fullDate = launch.launch_date_utc;
    let splitDate = fullDate.split("T");
    return splitDate[0];
  }

  navigate(launch) {
    this.router.navigateByUrl('/launch/{{launch.flight_number}}');
  }

}
