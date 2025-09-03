"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} say: Gau Gau`);
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    meow() {
        console.log(`${this.name} say: Meo Meo`);
    }
}
exports.Cat = Cat;
