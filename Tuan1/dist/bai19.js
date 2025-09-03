"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatPoly = exports.DogPoly = exports.AnimalPoly = void 0;
class AnimalPoly {
    makeSound() {
        console.log("Some animal sound");
    }
}
exports.AnimalPoly = AnimalPoly;
class DogPoly extends AnimalPoly {
    makeSound() {
        console.log("Woof!");
    }
}
exports.DogPoly = DogPoly;
class CatPoly extends AnimalPoly {
    makeSound() {
        console.log("Meow!");
    }
}
exports.CatPoly = CatPoly;
