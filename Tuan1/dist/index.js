"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
console.log("----------Bai 1---------------");
var person = new bai1_1.Person("Thai", 21);
person.displayInfo();
console.log("----------Bai 2---------------");
var student = new bai2_1.Student("Thai", 21, 10);
student.displayAllInfo();
console.log("----------Bai 3---------------");
var car = new bai3_1.Car("Mercerdes", "C300", 2025);
console.log(car);
console.log("----------Bai 4---------------");
var rectangle = new bai4_1.Rectangle(10, 15);
console.log("Calculate: " + rectangle.area());
console.log("Perimeter: " + rectangle.perimeter());
console.log("----------Bai 5---------------");
var bankAccount = new bai5_1.BankAccount(200);
console.log("Deposit: " + bankAccount.deposit(100));
console.log("Withdraw: " + bankAccount.withdraw(100));
console.log("----------Bai 6---------------");
var book = new bai6_1.Book("Muvo dich", "Amorim", 2025);
book.displayInfo();
console.log("----------Bai 7---------------");
var user = new bai7_1.User("Huu Thai");
user.$name = "Thai";
console.log(user.$name);
console.log("----------Bai 8---------------");
const products = [
    new bai8_1.Product("Mouse", 50),
    new bai8_1.Product("Keyboard", 120),
    new bai8_1.Product("Monitor", 250),
    new bai8_1.Product("USB Cable", 30),
    new bai8_1.Product("Webcam", 150)
];
const expensiveProducts = products.filter(product => product.price > 100);
console.log("\n===================== Bai 08 =====================");
console.log("Products with price > 100:");
expensiveProducts.forEach(product => product.displayInfo());
