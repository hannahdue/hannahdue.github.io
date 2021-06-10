namespace Blumenwiese_inheritance {

    export class Moveable {

        position: Vector;
        velocity: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            this.position = _position;
            this.velocity = _velocity;
        }

        draw(): void {
            //console.log("draw");
        }

        move(_timeslice: number): void {
            //console.log("move")
        }

    }

}