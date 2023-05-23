export class Direction {
    private direction: string;

    constructor(direction: string) {
        this.direction = direction;
    }

    isFacingNorth() {
        return this.direction === "N";
    }

    isFacingSouth() {
        return this.direction === "S";
    }

    isFacingWest() {
        return this.direction === "W";
    }

}