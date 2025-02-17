// ***************** 1 *****************
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function createUser(user: User): User {
  console.log(user);
  return user;
}

const newUser: User = {
  id: 5,
  name: "Salman",
  email: "salman@email.com",
  isActive: true,
};
createUser(newUser);

// ***************** 2 *****************
type input = string | number;
function processInput(input: input): string {
  if (typeof input === "number") {
    return `Number is: ${input.toString()}`;
  } else {
    return `String is: ${input}`;
  }
}
let result = processInput(42);
console.log(typeof result);

processInput("Hello");

// ***************** 3 *****************
class Vehicle {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getInfo(): string {
    return `make: ${this.make}, model: ${this.model}, year: ${this.year}`;
  }
}
const myVehicle = new Vehicle("japan", "M5 CS", 2024);
console.log(myVehicle.getInfo());

class car extends Vehicle {
  doors: number;
  constructor(make: string, model: string, year: number, doors: number) {
    super(make, model, year);
    this.doors = doors;
  }
  getInfo(): string {
    return `make: ${this.make}, model: ${this.model}, year: ${this.year}, doors:${this.doors}`;
  }
}
const myCar = new car("BMW", "M4", 2025, 4);
console.log(myCar.getInfo());

class bike extends Vehicle {
  hasSidecar: boolean;
  constructor(make: string, model: string, year: number, hasSidecar: boolean) {
    super(make, model, year);
    this.hasSidecar = hasSidecar;
  }
  getInfo(): string {
    return `make: ${this.make}, model: ${this.model}, year: ${this.year}, hasSieCar:${this.hasSidecar}`;
  }
}

const myBike = new bike("Honda", "CG 125", 2021, true);
console.log(myBike.getInfo());

// ***************** 4 *****************
class BankAccount {
  private balance: number;
  private readonly accountNumber: string;
  constructor(balance: number, account: string) {
    (this.balance = balance), (this.accountNumber = account);
  }
  get checkBalance() {
    return this.balance;
  }
  get checkAccountNo() {
    return this.accountNumber;
  }
  addMoney(amount: number) {
    return (this.balance += amount);
  }
  withDraw(amount: number) {
    return (this.balance -= amount);
  }
}
const myAcc = new BankAccount(10000, "salman12345");
console.log(myAcc.checkBalance);
console.log(myAcc.checkAccountNo);
myAcc.withDraw(2000);
console.log(myAcc.checkBalance);
myAcc.addMoney(4000);
console.log(myAcc.checkBalance);
// console.log(myAcc.accountNumber);

// ***************** 5 *****************

abstract class shape {
  protected color: string;
  constructor(color: string) {
    this.color = color;
  }
  abstract calculateArea(): void;
  get getColor() {
    return this.color;
  }
}

class circle extends shape {
  radius: number;
  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }
  calculateArea(): number {
    return this.radius * this.radius * 3.17;
  }
}
const myCircle = new circle("red", 15);
console.log(`Area: ${myCircle.calculateArea()}`);

class Rectangle extends shape {
  width: number;
  height: number;
  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }
}
const myReactangle = new Rectangle("orange", 10, 15);
console.log(`Area: ${myReactangle.calculateArea()}`);

// ***************** 6 *****************

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}
function createProduct(obj: Product): Product {
  return obj;
}
const myProduct: Product = {
  id: 3,
  name: "Bat",
  price: 1000,
  category: "Sports",
};
console.log(createProduct(myProduct));

// ***************** 7 *****************

class Employee {
  name: string;
  salary: number;
  constructor(name: string, salary: number) {
    (this.name = name), (this.salary = salary);
  }
  get getDetails(): string {
    return `Name:${this.name} Salary:${this.salary}`;
  }
}
class Developer extends Employee {
  programmingLanguage: string;
  constructor(name: string, salary: number, pL: string) {
    super(name, salary);
    this.programmingLanguage = pL;
  }
  get getDetails() {
    return `Name:${this.name}, Salary:${this.salary}, ProgrammingLanguage${this.programmingLanguage}`;
  }
}
const Developer1 = new Developer("Salman", 900000, "Javascript");
console.log(Developer1.getDetails);

class Designer extends Employee {
  toolUsed: string;
  constructor(name: string, salary: number, toolUsed: string) {
    super(name, salary);
    this.toolUsed = toolUsed;
  }
  get getDetails() {
    return `Name:${this.name}, Salary:${this.salary}, toolUsed:${this.toolUsed}`;
  }
}
const Designer1 = new Designer("Ali", 200000, "Adobe");
console.log(Designer1.getDetails);
