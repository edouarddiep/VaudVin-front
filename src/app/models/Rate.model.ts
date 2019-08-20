// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
export class Rate {
    rat_id: number;
    rat_value: number;
    rat_comment: string;
    fk_rat_vin_id: number;
    fk_rat_user_id: number;

    /** Fonction statique permettant d'instancier un Rate */
    static createRate(value: number, comment: string, vint_id, user_id): Rate {
        const rate = new Rate();
        rate.rat_value = value;
        rate.rat_comment = comment;
        rate.fk_rat_vin_id = vint_id;
        rate.fk_rat_user_id = user_id;
        return rate;
    }
}