namespace MacDonaldsFarm2 {
    
    export class Pig extends Animal {

        constructor() {
            super("Pig", "Grains", 4, "Grunt");
        }
        
        doSpecialAction(): void {
            specialAction = "the pig rolled around in the mud, ";
        }
    }

}