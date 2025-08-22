import { Person } from "./bai1";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";

console.log("----------Bai 1---------------")
var person = new Person ("Thai", 21);
person.displayInfo();

console.log("----------Bai 2---------------")
var student = new Student("Thai", 21, 10);
student.displayAllInfo();

console.log("----------Bai 3---------------")
var car = new Car ("Mercerdes", "C300", 2025);
console.log(car);

console.log("----------Bai 4---------------")
var rectangle = new Rectangle(10, 15)
console.log("Calculate: " + rectangle.area());
console.log("Perimeter: " + rectangle.perimeter());


console.log("----------Bai 5---------------")
var bankAccount = new BankAccount(200)
console.log("Deposit: " + bankAccount.deposit(100));
console.log("Withdraw: " + bankAccount.withdraw(100));

console.log("----------Bai 6---------------")
var book = new Book("Muvo dich", "Amorim", 2025);
book.displayInfo()
