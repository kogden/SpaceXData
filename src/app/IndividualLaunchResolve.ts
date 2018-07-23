import { ActivatedRouteSnapshot } from "@angular/router";
import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { LaunchService } from "./launch/launch.service";
import { Launch } from "./launch/launch";
import { Observable } from "rxjs";

@Injectable()
export class IndividualLaunchResolve implements Resolve<Launch> {

  constructor(private launchService : LaunchService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Launch> {
    let id: string = route.params.flight_number;
    //debugger;
    return this.launchService.getIndividualLaunch(id);
  }
}
