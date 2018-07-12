import { Payloads } from './Payloads';
import { OrbitParams } from './OrbitParams';

export interface SecondStage {
  blocks?: number;
  payloads?: Payloads[];
  orbit_params?: OrbitParams;
}
