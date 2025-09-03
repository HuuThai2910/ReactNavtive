"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
class School {
    constructor(students, teachers) {
        this.students = [];
        this.teachers = [];
        this.students = students;
        this.teachers = teachers;
    }
    displayInfo() {
        console.log("Students:");
        this.students.forEach((s) => s.displayInfo());
        console.log("Teachers:");
        this.teachers.forEach((t) => t.introduce());
    }
}
exports.School = School;
