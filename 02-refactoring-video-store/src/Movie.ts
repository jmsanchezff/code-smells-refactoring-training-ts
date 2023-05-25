export class Movie {
    public static CHILDRENS: number = 2;
    public static REGULAR: number = 0;
    public static NEW_RELEASE: number = 1;

    private readonly title: string;
    private readonly priceCode: number;

    constructor(title: string, priceCode: number) {
        this.title = title;
        this.priceCode = priceCode;
    }

    public getTitle(): string {
        return this.title;
    }

    getCost(daysRented: number) {
        let rental_cost = 0;
        switch (this.priceCode) {
            case Movie.REGULAR:
                rental_cost = 2;
                if (daysRented > 2) {
                    rental_cost += (daysRented - 2) * 1.5;
                }
                break;
            case Movie.NEW_RELEASE:
                rental_cost = daysRented * 3;
                break;
            case Movie.CHILDRENS:
                rental_cost = 1.5
                if (daysRented > 3) {
                    rental_cost += (daysRented - 3) * 1.5;
                }
                break;
        }
        return rental_cost;
    }

    getFrequentRenterPoints(daysRented: number) {
        if (this.priceCode == Movie.NEW_RELEASE && daysRented > 1) {
            return 2
        }
        return 1
    }

}