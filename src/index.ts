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
    return `Name:${this.name}, Salary:${this.salary}, ProgrammingLanguage:${this.programmingLanguage}`;
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

// ***************** 8 *****************
class student {
  public name: string;
  private grades: number[];
  protected school: string;
  readonly studentId: number;
  constructor(
    name: string,
    grades: number[],
    school: string,
    studentId: number
  ) {
    this.name = name;
    this.grades = grades;
    this.school = school;
    this.studentId = studentId;
  }
  get showGrades() {
    return this.grades;
  }
  addGrade(grade: number) {
    return this.grades.push(grade);
  }
  avgGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((acc, num) => {
      return acc + num;
    }, 0);

    return sum / this.grades.length;
  }
}
const studentOne = new student("Salman", [10, 20, 30, 40], "Govt", 101);
console.log(studentOne.avgGrade());
studentOne.addGrade(10);
console.log(studentOne.avgGrade());
console.log(studentOne.showGrades);
studentOne.addGrade(53);
console.log(studentOne.showGrades);

// ***************** 9 *****************
type response =
  | { success: true; data: string }
  | { success: false; error: string };
function handleResponse(obj: response): void {
  if (obj.success) {
    console.log(`Data Recieved`);
  } else {
    console.log(`Error getting data`);
  }
}

handleResponse({ success: false, error: "Data Recieved" });

// ***************** 10 *****************

abstract class Animal {
  protected species: string;
  constructor(species: string) {
    this.species = species;
  }
  abstract makeSound(): string;
  get getSpecies() {
    return this.species;
  }
}
class Dog extends Animal {
  makeSound(): string {
    return `Woof`;
  }
}
class Cat extends Animal {
  makeSound(): string {
    return `Meow`;
  }
}
const Dog1 = new Dog("Canis");
console.log(Dog1.getSpecies);
console.log(Dog1.makeSound());

const Cat1 = new Cat("Felis");
console.log(Cat1.getSpecies);
console.log(Cat1.makeSound());

// ***************** 11 *****************

function findIndex<T>(arr: T[], value: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return 0;
}
console.log(findIndex([1, 2, 3, 4], 2));
console.log(findIndex(["apple", "banana", "pear"], "pear"));

// ***************** 12 *****************

interface Car {
  drive(): string;
}
interface Bike {
  ride(): string;
}
function useVehicle(item: Car | Bike): string {
  if ("drive" in item) {
    return item.drive();
  } else {
    return item.ride();
  }
}
class Tesla implements Car {
  drive(): string {
    return `Car is driving`;
  }
}

class Honda implements Bike {
  ride(): string {
    return `Bike is riding`;
  }
}
const TeslaCar = new Tesla();
const HondaBike = new Honda();
console.log(useVehicle(TeslaCar));
console.log(useVehicle(HondaBike));

// ***************** 12 *****************

interface Person {
  name: string;
  age: number;
}
interface employeeInterface {
  jobTitle: string;
}

type FullTimeEmployee = Person & employeeInterface;
function describeEmployee(emp: FullTimeEmployee): string {
  return `Name:${emp.name}, Age:${emp.age}, Job Title:${emp.jobTitle}`;
}
const employee1: FullTimeEmployee = {
  name: "Salman",
  age: 20,
  jobTitle: "Developer",
};
console.log(describeEmployee(employee1));

// ***************** 13 *****************

interface Dogy {
  bark(): string;
}
interface Caty {
  meow(): string;
}
type Pet = Dogy | Caty;
function makeSound(pet: Pet) {
  if ("bark" in pet) {
    return pet.bark();
  } else {
    return pet.meow();
  }
}
const Dog2: Dogy = {
  bark() {
    return `Woof!`;
  },
};
const Cat2: Caty = {
  meow() {
    return `Meow!`;
  },
};
console.log(makeSound(Dog2));
console.log(makeSound(Cat2));

// ***************** 15 *****************

interface Shape {
  calculateArea(): number;
  get Type(): string;
}
class Circle implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  calculateArea(): number {
    return this.radius * this.radius * 3.17;
  }
  get Type(): string {
    return `Circle`;
  }
}
const newCircle = new Circle(10);
console.log(`Radius: ${newCircle.calculateArea()}`);
console.log(`Type: ${newCircle.Type}`);
