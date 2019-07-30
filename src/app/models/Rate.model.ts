export class Rate {
    id: number;
    value: number;
    vint_id: number;
    user_id: number;

    static createRate(value: number, vint_id, user_id): Rate {
        const rate = new Rate();
        rate.value = value;
        rate.vint_id = vint_id;
        rate.user_id = user_id;
        return rate;
    }
}