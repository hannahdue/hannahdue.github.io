namespace MacDonaldsFarm2 {
    
    export class Goat extends Animal {

        constructor(_name: string, _food: string, _foodAmount: number, _sound: string) {
            super("Goat", "Grains", 4, "Baa");
        }

        doSpecialAction(): void {
            let goatText: string = "the goat escaped from the stable and went for a walk, ";
        }
    }

}