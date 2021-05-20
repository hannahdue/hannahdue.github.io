namespace OldMacdonaldsFarm {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        console.log("Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg");

        hayAmount = 50;
        grainsAmount = 30;
        meatAmount = 2;

        let cow: Animal = new Animal("Cow", "Hay", 5, "Moo");
        let chicken: Animal = new Animal("Chicken", "Grains", 1, "Gackgack");
        let dog: Animal = new Animal("Dog", "Meat", 1, "Woof");
        let horse: Animal = new Animal("Horse", "Hay", 3, "Whieew");
        let pig: Animal = new Animal("Pig", "Grains", 1.5, "Grunt");
        let donkey: Animal = new Animal("Donkey", "Hay", 2.5, "Iaaah");

        cow.sing();
        chicken.sing();
        dog.sing();
        horse.sing();
        pig.sing();
        donkey.sing();

        cow.eat();
        chicken.eat();
        dog.eat();
        horse.eat();
        pig.eat();
        donkey.eat();

        console.log("Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg");
    }

}