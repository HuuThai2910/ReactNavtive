export class AnimalPoly {
    makeSound(): void {
        console.log("Some animal sound");
    }
}

export class DogPoly extends AnimalPoly {
    makeSound(): void {
        console.log("Woof!");
    }
}

export class CatPoly extends AnimalPoly {
    makeSound(): void {
        console.log("Meow!");
    }
}
