import {Coordinates} from "./Coordinates";

export abstract class Direction {

    abstract rotateLeft(): Direction;

    abstract rotateRight(): Direction;

    abstract move(displacement: number, coordinates: Coordinates): Coordinates;

    static create(direction: string): Direction {
        if (direction === "N") {
            return new North();
        } else if (direction === "S") {
            return new South();
        } else if (direction === "W") {
            return new West();
        }
        return new East();
    }
}


class North extends Direction {
    rotateLeft(): Direction {
        return Direction.create("W")
    }

    rotateRight(): Direction {
        return  Direction.create("E")
    }

    move(displacement: number, coordinates: Coordinates): Coordinates {
        return coordinates.moveAlongY(displacement);
    }

}

class South extends Direction {
    rotateLeft(): Direction {
        return Direction.create("E");
    }

    rotateRight(): Direction {
        return Direction.create("W");
    }

    move(displacement: number, coordinates: Coordinates): Coordinates {
        return coordinates.moveAlongY(-displacement);
    }
}

class West extends Direction {

    rotateLeft(): Direction {
        return Direction.create("S");
    }

    rotateRight(): Direction {
        return Direction.create("N");
    }

    move(displacement: number, coordinates: Coordinates): Coordinates {
        return coordinates.moveAlongX(-displacement);
    }
}

class East extends Direction {

    rotateLeft(): Direction {
        return Direction.create("N");
    }

    rotateRight(): Direction {
        return Direction.create("S");
    }

    move(displacement: number, coordinates: Coordinates): Coordinates {
        return coordinates.moveAlongX(displacement);
    }
}