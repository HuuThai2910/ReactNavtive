import { Person } from "./bai1";
import { Account } from "./bai10";
import { Cat, Dog } from "./bai11";
import { Bird, Fish } from "./bai12";
import { Circle, Square } from "./bai13";
import { Developer, Manager } from "./bai14";
import { Library } from "./bai15";
import { Box } from "./bai16";
import { Logger } from "./bai17";
import { MathUtil } from "./bai18";
import { AnimalPoly, CatPoly, DogPoly } from "./bai19";
import { Student } from "./bai2";
import { BikeVehicle, CarVehicle } from "./bai20";
import { Repository } from "./bai21";
import { Stack } from "./bai22";
import { CardPayment, CashPayment } from "./bai23";
import { AirConditioner, Fan } from "./bai24";
import { Shape } from "./bai25";
import { Order } from "./bai26";
import { Teacher } from "./bai27";
import { CatProtected, DogProtected } from "./bai28";
import { CarMovable, Robot } from "./bai29";
import { Car } from "./bai3";
import { School } from "./bai30";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";
import { Product } from "./bai8";
import { Animal } from "./bai9";

console.log("----------Bai 1---------------");
var person = new Person("Thai", 21);
person.displayInfo();

console.log("----------Bai 2---------------");
var student = new Student("Thai", 21, 10);
student.displayAllInfo();

console.log("----------Bai 3---------------");
var car = new Car("Mercerdes", "C300", 2025);
console.log(car);

console.log("----------Bai 4---------------");
var rectangle = new Rectangle(10, 15);
console.log("Calculate: " + rectangle.area());
console.log("Perimeter: " + rectangle.perimeter());

console.log("----------Bai 5---------------");
var bankAccount = new BankAccount(200);
console.log("Deposit: " + bankAccount.deposit(100));
console.log("Withdraw: " + bankAccount.withdraw(100));

console.log("----------Bai 6---------------");
var book = new Book("Muvo dich", "Amorim", 2025);
book.displayInfo();

console.log("----------Bai 7---------------");
var user = new User("Huu Thai");
user.$name = "Thai";
console.log(user.$name);

console.log("----------Bai 8---------------");
const products: Product[] = [
    new Product("Mouse", 50),
    new Product("Keyboard", 120),
    new Product("Monitor", 250),
    new Product("USB Cable", 30),
    new Product("Webcam", 150),
];

const expensiveProducts = products.filter((product) => product.price > 100);
console.log("Products with price > 100:");
expensiveProducts.forEach((product) => product.displayInfo());

console.log("----------Bai 9---------------");
var animal: Animal = {
    name: "husky",
    sound: () => console.log("Meo Meo"),
};
console.log("Name: " + animal.name);
animal.sound();
console.log("----------Bai 10---------------");
var account = new Account("HuuThai", "12345");
console.log(account);
console.log("----------Bai 11---------------");
const dog = new Dog("Dog");
const cat = new Cat("Cat");
dog.bark();
cat.meow();
console.log("----------Bai 12---------------");
const bird = new Bird();
const fish = new Fish();
bird.fly();
fish.swim();
console.log("----------Bai 13---------------");
const square = new Square(4);
const circle = new Circle(3);
console.log(`Square area: ${square.area()}`);
console.log(`Circle area: ${circle.area()}`);
console.log("----------Bai 14---------------");
const manager = new Manager("A");
const developer = new Developer("B");
manager.manage();
developer.code();
console.log("----------Bai 15---------------");
const library = new Library();
library.addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));
console.log(library.books);
console.log("----------Bai 16---------------");
const stringBox = new Box<string>("Hello");
const numberBox = new Box<number>(42);
console.log(`String box value: ${stringBox.getValue()}`);
console.log(`Number box value: ${numberBox.getValue()}`);
console.log("----------Bai 17---------------");
const logger = Logger.getInstance();
logger.log("Test message");
console.log("----------Bai 18---------------");
console.log(`Add: ${MathUtil.add(5, 3)}`);
console.log(`Subtract: ${MathUtil.subtract(5, 3)}`);
console.log(`Multiply: ${MathUtil.multiply(5, 3)}`);
console.log(`Divide: ${MathUtil.divide(6, 2)}`);
console.log("----------Bai 19---------------");
const animals: AnimalPoly[] = [new DogPoly(), new CatPoly()];
animals.forEach((animal) => animal.makeSound());
console.log("----------Bai 20---------------");
const carVehicle = new CarVehicle();
const bike = new BikeVehicle();
carVehicle.move();
bike.move();
console.log("----------Bai 21---------------");
const repo = new Repository<string>();
repo.add("Repo1");
repo.add("Repo2");
console.log("Repository items:", repo.getAll());
console.log("----------Bai 22---------------");
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(`Peek: ${stack.peek()}`);
console.log(`Pop: ${stack.pop()}`);
console.log(`Is empty: ${stack.isEmpty()}`);
console.log("----------Bai 23---------------");
const cash = new CashPayment();
const card = new CardPayment();
cash.pay(500);
card.pay(1000);
console.log("----------Bai 24---------------")
const fan = new Fan();
const ac = new AirConditioner();
fan.turnOn();
ac.turnOn();
console.log("----------Bai 25---------------")
Shape.describe();
console.log("----------Bai 26---------------")
const order = new Order([new Product("Laptop", 1200), new Product("Mouse", 50)]);
console.log(`Total price: ${order.getTotalPrice()}`);
console.log("----------Bai 27---------------")
const teacher = new Teacher("A", 45, "Math");
teacher.introduce();
console.log("----------Bai 28---------------")
const dogProtected = new DogProtected();
const catProtected = new CatProtected();
dogProtected.makeSound();
catProtected.makeSound()
console.log("----------Bai 29---------------")
const carMovable = new CarMovable();
const robot = new Robot();
carMovable.move();
robot.move();
console.log("----------Bai 30---------------")
const school = new School(
  [new Student("Alice", 20, 100), new Student("Bob", 19, 80)],
  [new Teacher("Ms. Smith", 45, "Math")]
);
school.displayInfo();