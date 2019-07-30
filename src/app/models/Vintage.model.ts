export class Vintage {
    id: number;
    year: number;
    wine_id: number;

    static createVintage(year: number, wine_id: number): Vintage {
        const vintage = new Vintage();
        vintage.id = null;
        vintage.year =  year;
        vintage.wine_id =  wine_id;
        return vintage;
    }
}