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
function handleResponse(obj) {
    if (obj.success) {
        console.log(`Data Recieved`);
    }
    else {
        console.log(`Error getting data`);
    }
}
handleResponse({ success: false, error: "Data Recieved" });
class Animal {
    constructor(species) {
        this.species = species;
    }
    get getSpecies() {
        return this.species;
    }
}
class Dog extends Animal {
    makeSound() {
        return `Woof`;
    }
}
class Cat extends Animal {
    makeSound() {
        return `Meow`;
    }
}
const Dog1 = new Dog("Canis");
console.log(Dog1.getSpecies);
console.log(Dog1.makeSound());
const Cat1 = new Cat("Felis");
console.log(Cat1.getSpecies);
console.log(Cat1.makeSound());
function findIndex(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return 0;
}
console.log(findIndex([1, 2, 3, 4], 2));
console.log(findIndex(["apple", "banana", "pear"], "pear"));
function useVehicle(item) {
    if ("drive" in item) {
        return item.drive();
    }
    else {
        return item.ride();
    }
}
class Tesla {
    drive() {
        return `Car is driving`;
    }
}
class Honda {
    ride() {
        return `Bike is riding`;
    }
}
const TeslaCar = new Tesla();
const HondaBike = new Honda();
console.log(useVehicle(TeslaCar));
console.log(useVehicle(HondaBike));
function describeEmployee(emp) {
    return `Name:${emp.name}, Age:${emp.age}, Job Title:${emp.jobTitle}`;
}
const employee1 = {
    name: "Salman",
    age: 20,
    jobTitle: "Developer",
};
console.log(describeEmployee(employee1));
function makeSound(pet) {
    if ("bark" in pet) {
        return pet.bark();
    }
    else {
        return pet.meow();
    }
}
const Dog2 = {
    bark() {
        return `Woof!`;
    },
};
const Cat2 = {
    meow() {
        return `Meow!`;
    },
};
console.log(makeSound(Dog2));
console.log(makeSound(Cat2));
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return this.radius * this.radius * 3.17;
    }
    get Type() {
        return `Circle`;
    }
}
const newCircle = new Circle(10);
console.log(`Radius: ${newCircle.calculateArea()}`);
console.log(`Type: ${newCircle.Type}`);
//# sourceMappingURL=index.js.map