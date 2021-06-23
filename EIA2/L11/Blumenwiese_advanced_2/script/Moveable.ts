namespace Blumenwiese_advanced_2 {

    export abstract class Moveable {

        protected position: Vector;
        protected velocity: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            this.position = _position;
            this.velocity = _velocity;
        }

        public abstract draw(): void;

        public abstract move(_timeslice: number): void;

    }

}