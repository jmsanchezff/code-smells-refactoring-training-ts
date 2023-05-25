import {Movie} from "./Movie";

export class Rental {
    constructor(movie: Movie, daysRented: number) {
        this.movie = movie;
        this.daysRented = daysRented;
    }

    public getDaysRented(): number {
        return this.daysRented;
    }

    public getMovie(): Movie {
        return this.movie;
    }

    getCost() {
        let rental_cost = 0;

        switch (this.getMovie().getPriceCode()) {
            case Movie.REGULAR:
                rental_cost = 2;
                if (this.getDaysRented() > 2) {
                    rental_cost += (this.getDaysRented() - 2) * 1.5;
                }
                break;
            case Movie.NEW_RELEASE:
                rental_cost = this.getDaysRented() * 3;
                break;
            case Movie.CHILDRENS:
                rental_cost = 1.5
                if (this.getDaysRented() > 3) {
                    rental_cost += (this.getDaysRented() - 3) * 1.5;
                }
                break;
        }
        return rental_cost;
    }

    private movie: Movie;
    private daysRented: number;
}