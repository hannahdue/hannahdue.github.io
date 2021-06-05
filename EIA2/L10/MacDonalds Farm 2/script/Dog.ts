namespace MacDonaldsFarm2 {
    
    export class Dog extends Animal {

        constructor() {
            super("Dog", "Meat", 0.5, "Woof");
        }

        doSpecialAction(): void {
            specialAction = "the dog napped in the shade instead of watching the goat, ";
        }
    }

}