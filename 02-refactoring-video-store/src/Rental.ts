import {Movie} from "./Movie";

export class Rental {
    private movie: Movie;
    private readonly daysRented: number;

    constructor(movie: Movie, daysRented: number) {
        this.movie = movie;
        this.daysRented = daysRented;
    }

    getCost() {
        return this.movie.getCost(this.daysRented);
    }

    getFrequentRenterPoints() {
        return this.movie.getFrequentRenterPoints(this.daysRented);
    }

    getMovieTitle() {
        return this.movie.getTitle();
    }
}