import { Component, OnInit } from "@angular/core";
import { LaunchService } from "../launch/launch.service";
import { Observable } from "rxjs";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { Launch } from "../launch/launch";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  detailedLaunch$: Launch;

  constructor(
    private data: LaunchService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.detailedLaunch$ = <Launch>params;
      this.data
        .getIndividualLaunch(this.detailedLaunch$.flight_number)
        .subscribe(data => {
          this.detailedLaunch$ = data;
          console.log(this.detailedLaunch$.mission_name);
          console.log(this.detailedLaunch$.links);
          console.log(this.detailedLaunch$.mission_name);
        });
    });
  }

  getEmbedUrl(detailedLaunch$) {
    let videoCode = this.detailedLaunch$.links.video_link;
    videoCode = videoCode.replace("watch?v=", "embed/");
    console.log("GET EMBED URL" + videoCode);
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoCode);
  }

  checkSuccess() {
    if (this.detailedLaunch$.launch_success) {
      return "Successful";
    } else {
      return "Failure";
    }
  }

  checkReuse(value) {
    if(value) {
      return "Successful";
    } else {
      return "False";
    }
  }
}
