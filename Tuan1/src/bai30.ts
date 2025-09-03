import { Student } from "./bai2";
import { Teacher } from "./bai27";

export class School {
    private students: Student[] = [];
    private teachers: Teacher[] = [];

    constructor(students: Student[], teachers: Teacher[]) {
        this.students = students;
        this.teachers = teachers;
    }

    displayInfo(): void {
        console.log("Students:");
        this.students.forEach((s) => s.displayInfo());
        console.log("Teachers:");
        this.teachers.forEach((t) => t.introduce());
    }
}
