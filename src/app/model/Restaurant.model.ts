import { Vin } from './Vin.model';

export class Restaurant {
    id: number;
    nom: string;
    type: string;
    adresse: string;
    code_postal: number;
    ville: string;
    no_telephone: string;
    carte_des_vins: Array<Vin>;
}