import { Component, OnInit } from "@angular/core";
import { LaunchService } from "../launch/launch.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Launch } from "../launch/launch";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  detailedLaunch$: Launch;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    let snapshot = this.route.snapshot;
    this.detailedLaunch$ = snapshot.data.individualLaunch;
  }
  // let id: string = this.route.snapshot.params.flight_number;
  // this.data.getIndividualLaunch(id).subscribe(data => {
  //          this.detailedLaunch$ = data;
  //          console.log(this.detailedLaunch$.mission_name);
  //          console.log(this.detailedLaunch$.links);
  //          console.log(this.detailedLaunch$.mission_name);
  //     });
  // };

  // this.route.params.subscribe(params => {
  //   this.detailedLaunch$ = <Launch>params;
  //   this.data
  //     .getIndividualLaunch(this.detailedLaunch$.flight_number)
  //     .subscribe(data => {
  //       this.detailedLaunch$ = data;
  //       console.log(this.detailedLaunch$.mission_name);
  //       console.log(this.detailedLaunch$.links);
  //       console.log(this.detailedLaunch$.mission_name);
  //     });
  // });

  getEmbedUrl() {
    if(this.detailedLaunch$.links.video_link){
      let videoCode = this.detailedLaunch$.links.video_link;
      videoCode = videoCode.replace("watch?v=", "embed/");
      console.log("Getting embed url... " + videoCode);
      return this.sanitizer.bypassSecurityTrustResourceUrl(videoCode);
    }else {
      console.log("No embed found");
      return "#";
    }
  }

  checkSuccess() {
    if (this.detailedLaunch$.launch_success) {
      return "Successful";
    } else {
      return "Failure";
    }
  }

  checkReuse(value) {
    if (value) {
      return "Successful";
    } else {
      return "False";
    }
  }
}
