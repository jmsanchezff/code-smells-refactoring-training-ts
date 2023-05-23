//@ts-nocheck

class Direction {
    private direction: string;

    constructor(direction: string) {
        this.direction = direction;
    }
}

export class Rover {

    private direction: string;
    private y: number;
    private x: number;
    private directionType: Direction;

    constructor(x: number, y: number, direction: string) {
        this.x = x;
        this.y = y;
        this.setDirection(direction);
    }

    private setDirection(direction: string) {
        this.direction = direction;
        this.directionType = new Direction(direction)
    }


    public receive(commandsSequence: string) {
        for (let i = 0; i < commandsSequence.length; ++i) {
            const command = commandsSequence.substring(i, i + 1);

            if (command === "l") {
                // Rotate Rover
                if (this.direction === "N") {
                    this.setDirection("W");
                } else if (this.direction === "S") {
                    this.setDirection("E");
                } else if (this.direction === "W") {
                    this.setDirection("S");
                } else {
                    this.setDirection("N");
                }
            } else if (command === "r") {
                // Rotate Rover
                if (this.direction === "N") {
                    this.setDirection("E");
                } else if (this.direction === "S") {
                    this.setDirection("W");
                } else if (this.direction === "W") {
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

                if (this.direction === "N") {
                    this.y += displacement;
                } else if (this.direction === "S") {
                    this.y -= displacement;
                } else if (this.direction === "W") {
                    this.x -= displacement;
                } else {
                    this.x += displacement;
                }
            }
        }
    }

}