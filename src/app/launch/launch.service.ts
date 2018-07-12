import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Launch } from "./launch";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LaunchService {
  url = "https://api.spacexdata.com/v2/launches";

  constructor(private http: HttpClient) {}

  getLaunchData(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.url);
  }

  getIndividualLaunch(launchNumber) {
    console.log(this.url + "/all?flight_number=" + launchNumber);
    return this.http
      .get<Launch>(this.url + "/all?flight_number=" + launchNumber)
      .pipe(map(data => data[0]));
  }
}
