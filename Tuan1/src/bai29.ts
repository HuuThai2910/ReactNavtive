interface Movable {
    move(): void;
}

export class CarMovable implements Movable {
    move(): void {
        console.log("Car is moving");
    }
}

export class Robot implements Movable {
    move(): void {
        console.log("Robot is moving");
    }
}
