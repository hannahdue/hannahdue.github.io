namespace MacDonaldsFarm2 {
    
    export class Pig extends Animal {

        constructor(_name: string, _food: string, _foodAmount: number, _sound: string) {
            super("Pig", "Grains", 4, "Grunt");
        }
        
        doSpecialAction(): void {
            let pigText: string = "the pig rolled around in the mud, ";
        }
    }

}