export interface OrbitParams {
  reference_system?: string;
  regime?: string;
  longtitude?: number;
  semi_major_axis_km?: number;
  eccentricity?: number;
  periapsis_km?: number;
  apoapsis_km?: number;
  inclination_deg?: number;
  period_min?: number;
  lifespan_years?: number;
}
