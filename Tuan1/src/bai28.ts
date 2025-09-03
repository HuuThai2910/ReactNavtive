export class AnimalProtected {
    protected makeSound(): void {
        console.log("Generic animal sound");
    }
}

export class DogProtected extends AnimalProtected {
    makeSound(): void {
        console.log("Woof!");
    }
}

export class CatProtected extends AnimalProtected {
    makeSound(): void {
        console.log("Meow!");
    }
}
