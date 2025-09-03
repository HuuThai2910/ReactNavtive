"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatProtected = exports.DogProtected = exports.AnimalProtected = void 0;
class AnimalProtected {
    makeSound() {
        console.log("Generic animal sound");
    }
}
exports.AnimalProtected = AnimalProtected;
class DogProtected extends AnimalProtected {
    makeSound() {
        console.log("Woof!");
    }
}
exports.DogProtected = DogProtected;
class CatProtected extends AnimalProtected {
    makeSound() {
        console.log("Meow!");
    }
}
exports.CatProtected = CatProtected;
