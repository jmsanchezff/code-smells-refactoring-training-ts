import {Rental} from "./Rental";

export class Customer {
    private readonly name: string;
    private rentals = Array<Rental>();

    constructor(name: string) {
        this.name = name;
    }

    public addRental(rental: Rental) {
        this.rentals.push(rental);
    }

    public getName(): string {
        return this.name;
    }

    public statement(): string {
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        let result = "Rental Record for " + this.getName() + "\n";

        for(const rental of this.rentals) {

            const thisAmount = rental.getCost()
            frequentRenterPoints += rental.getFrequentRenterPoints()

            result += "\t" + rental.getMovieTitle() + "\t"
                + new String(thisAmount.toFixed(1)) + "\n";

            totalAmount += thisAmount;

        }

        result += "You owed " + new String(totalAmount.toFixed(1)) + "\n";
        result += "You earned " + new String(frequentRenterPoints) + " frequent renter points\n";

        return result;
    }
}