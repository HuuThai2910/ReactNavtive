"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = void 0;
class Employee {
    constructor(name) {
        this.name = name;
    }
}
class Manager extends Employee {
    manage() {
        console.log(`${this.name} is managing the team`);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    code() {
        console.log(`${this.name} is coding the team`);
    }
}
exports.Developer = Developer;
