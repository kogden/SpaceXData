import { Component, OnInit } from '@angular/core';

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


  constructor(private launchService: LaunchService) {
   }

  ngOnInit() {
    this.getLaunchData();
  }

  getLaunchData(): void {
    this.launchService.getLaunchData().subscribe(data => {
      this.launch$ = data;
  }
);
}


}
