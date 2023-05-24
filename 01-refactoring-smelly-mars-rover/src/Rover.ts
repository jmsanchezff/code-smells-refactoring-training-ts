import {Direction} from "./Direction";
import {Coordinates} from "./Coordinates";

export class Rover {
    private direction: Direction;
    private coordinates: Coordinates

    constructor(x: number, y: number, direction: string) {
        this.coordinates = new Coordinates(x, y)
        this.direction = Direction.create(direction)
    }

    public receive(commandsSequence: string) {
        for (let i = 0; i < commandsSequence.length; ++i) {
            const command = commandsSequence.substring(i, i + 1);

            if (command === "l") {
                this.direction = this.direction.rotateLeft()
            } else if (command === "r") {
                this.direction = this.direction.rotateRight()
            } else {

                // Displace Rover
                let displacement1 = -1;

                if (command === "f") {
                    displacement1 = 1;
                }
                let displacement = displacement1;
                this.coordinates = this.direction.move(displacement, this.coordinates);
            }
        }
    }
}