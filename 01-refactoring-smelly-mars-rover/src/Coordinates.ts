export class Coordinates {
    constructor(private x: number, private y: number) {
    }

    moveAlongY(displacement: number) {
        return new Coordinates(this.x, this.y + displacement);
    }

    moveAlongX(displacement: number) {
        return new Coordinates(this.x + displacement, this.y);
    }
}