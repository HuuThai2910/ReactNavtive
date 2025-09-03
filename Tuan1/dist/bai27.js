"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const bai1_1 = require("./bai1");
class Teacher extends bai1_1.Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`This is ${this.name}, teaching ${this.subject}`);
    }
}
exports.Teacher = Teacher;
