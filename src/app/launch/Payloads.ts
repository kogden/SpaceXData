import { Customer } from './Customer';
import { OrbitParams } from './OrbitParams';

export interface Payloads {
  payload_id: string;
  reused: boolean;
  customers: Customer[];
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  orbit_params: OrbitParams;
}
