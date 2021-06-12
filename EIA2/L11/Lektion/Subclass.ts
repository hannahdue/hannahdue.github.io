namespace L11_Advanced {

    export class LivingRoom extends Room {
        wallColor: string = "pastel green";

        constructor() {
            super("9 sqm", "Living Room");

            console.log("The " + this.function + " is " + this.size + " big and has " + this.wallColor + " walls.");
        }
    }

}