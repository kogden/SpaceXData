import { Links } from "./Links";
import { Rocket } from "./Rocket";
import { LaunchSite } from "./LaunchSite";
import { Telemetry } from "./Telemetry";
import { Reuse } from "./Reuse";

export interface Launch {
  flight_number: number; // 64
  mission_name?: string; // CRS-15
  launch_year?: string; // 2018
  launch_date_utc?: string; // 2018-06-29TO9:42:00.000Z
  telemetry?: Telemetry; // flight_club: "https://www.flightclub.io/results/?code=CR15"
  launch_site?: LaunchSite; // CCAFS SLC 40
  launch_success?: boolean; // true
  site_name_long?: string; // Cape Canaveral Air Force Station Space Launch Complex 40
  links: Links; // ai-enabled-robot-companion-vegetation-monitor-to-space-station/
  details?: string;
  rocket?: Rocket;
  reuse?: Reuse;

  /*

  "Payload included MISSE-FF 2, ECOSTRESS, and a Latching End Effector. The refurbished booster
  featured a record 2.5 months period turnaround from its original launch of the TESS satellite —
  the fastest previous was 4.5 months. This was the last commercial flight of a Block 4 booster,
  which was expended into the Atlantic without landing legs and grid fins."

  */
}

// make own payload object
