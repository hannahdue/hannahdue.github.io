namespace Blumenwiese_advanced_2 {

    export abstract class Moveable {

        protected position: Vector;
        protected velocity: Vector;

        constructor(_position?: Vector, _velocity?: Vector) {
            if (_position)
                this.position = _position;
            if (_velocity)
                this.velocity = _velocity;
        }

        public abstract draw(): void;

        public abstract action(_timeslice: number): void;

    }

}