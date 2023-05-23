//@ts-nocheck

class Direction {
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

export class Rover {
    private y: number;
    private x: number;
    private direction: Direction;

    constructor(x: number, y: number, direction: string) {
        this.x = x;
        this.y = y;
        this.setDirection(direction);
    }

    private setDirection(direction: string) {
        this.direction = new Direction(direction)
    }


    public receive(commandsSequence: string) {
        for (let i = 0; i < commandsSequence.length; ++i) {
            const command = commandsSequence.substring(i, i + 1);

            if (command === "l") {
                // Rotate Rover
                if (this.direction.isFacingNorth()) {
                    this.setDirection("W");
                } else if (this.direction.isFacingSouth()) {
                    this.setDirection("E");
                } else if (this.direction.isFacingWest()) {
                    this.setDirection("S");
                } else {
                    this.setDirection("N");
                }
            } else if (command === "r") {
                // Rotate Rover
                if (this.direction.isFacingNorth()) {
                    this.setDirection("E");
                } else if (this.direction.isFacingSouth()) {
                    this.setDirection("W");
                } else if (this.direction.isFacingWest()) {
                    this.setDirection("N");
                } else {
                    this.setDirection("S");
                }
            } else {

                // Displace Rover
                let displacement1 = -1;

                if (command === "f") {
                    displacement1 = 1;
                }
                let displacement = displacement1;

                if (this.direction.isFacingNorth()) {
                    this.y += displacement;
                } else if (this.direction.isFacingSouth()) {
                    this.y -= displacement;
                } else if (this.direction.isFacingWest()) {
                    this.x -= displacement;
                } else {
                    this.x += displacement;
                }
            }
        }
    }
}