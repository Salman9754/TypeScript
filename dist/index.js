"use strict";
function createUser(user) {
    console.log(user);
    return user;
}
const newUser = {
    id: 5,
    name: "Salman",
    email: "salman@email.com",
    isActive: true,
};
createUser(newUser);
function processInput(input) {
    if (typeof input === "number") {
        return `Number is: ${input.toString()}`;
    }
    else {
        return `String is: ${input}`;
    }
}
let result = processInput(42);
console.log(typeof result);
processInput("Hello");
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `make: ${this.make}, model: ${this.model}, year: ${this.year}`;
    }
}
const myVehicle = new Vehicle("japan", "M5 CS", 2024);
console.log(myVehicle.getInfo());
class car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    getInfo() {
        return `make: ${this.make}, model: ${this.model}, year: ${this.year}, doors:${this.doors}`;
    }
}
const myCar = new car("BMW", "M4", 2025, 4);
console.log(myCar.getInfo());
class bike extends Vehicle {
    constructor(make, model, year, hasSidecar) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }
    getInfo() {
        return `make: ${this.make}, model: ${this.model}, year: ${this.year}, hasSieCar:${this.hasSidecar}`;
    }
}
const myBike = new bike("Honda", "CG 125", 2021, true);
console.log(myBike.getInfo());
class BankAccount {
    constructor(balance, account) {
        (this.balance = balance), (this.accountNumber = account);
    }
    get checkBalance() {
        return this.balance;
    }
    get checkAccountNo() {
        return this.accountNumber;
    }
    addMoney(amount) {
        return (this.balance += amount);
    }
    withDraw(amount) {
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
class shape {
    constructor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
}
class circle extends shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return this.radius * this.radius * 3.17;
    }
}
const myCircle = new circle("red", 15);
console.log(`Area: ${myCircle.calculateArea()}`);
class Rectangle extends shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const myReactangle = new Rectangle("orange", 10, 15);
console.log(`Area: ${myReactangle.calculateArea()}`);
function createProduct(obj) {
    return obj;
}
const myProduct = {
    id: 3,
    name: "Bat",
    price: 1000,
    category: "Sports",
};
console.log(createProduct(myProduct));
class Employee {
    constructor(name, salary) {
        (this.name = name), (this.salary = salary);
    }
    get getDetails() {
        return `Name:${this.name} Salary:${this.salary}`;
    }
}
class Developer extends Employee {
    constructor(name, salary, pL) {
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
    constructor(name, salary, toolUsed) {
        super(name, salary);
        this.toolUsed = toolUsed;
    }
    get getDetails() {
        return `Name:${this.name}, Salary:${this.salary}, toolUsed:${this.toolUsed}`;
    }
}
const Designer1 = new Designer("Ali", 200000, "Adobe");
console.log(Designer1.getDetails);
class student {
    constructor(name, grades, school, studentId) {
        this.name = name;
        this.grades = grades;
        this.school = school;
        this.studentId = studentId;
    }
    get showGrades() {
        return this.grades;
    }
    addGrade(grade) {
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
//# sourceMappingURL=index.js.map