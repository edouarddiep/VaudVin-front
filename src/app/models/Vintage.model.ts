// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
export class Vintage {
    vin_id: number;
    vin_year: number;
    fk_vin_win_id: number;

    static createVintage(year: number, wine_id: number): Vintage {
        const vintage = new Vintage();
        vintage.vin_year =  year;
        vintage.fk_vin_win_id =  wine_id;
        return vintage;
    }
}