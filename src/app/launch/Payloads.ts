import { Customer } from './Customer';

export interface Payloads {
  payload_id: string;
  reused: boolean;
  customers: Customer[];
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  orbit: string;
}
