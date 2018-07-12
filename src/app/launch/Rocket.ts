import { FirstStage } from './FirstStage';
import { SecondStage } from './SecondStage';

export interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: FirstStage;
    second_stage: SecondStage;

}
