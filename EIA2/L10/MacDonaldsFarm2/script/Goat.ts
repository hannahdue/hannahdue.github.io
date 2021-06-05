namespace MacDonaldsFarm2 {
    
    export class Goat extends Animal {

        constructor() {
            super("Goat", "Grains", 4, "Baa");
        }

        doSpecialAction(): void {
            specialAction = "the goat escaped from the stable and went for a walk, ";
        }
    }

}