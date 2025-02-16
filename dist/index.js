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
        return this.balance += amount;
    }
    withDraw(amount) {
        return this.balance -= amount;
    }
}
const myAcc = new BankAccount(10000, "salman12345");
console.log(myAcc.checkBalance);
console.log(myAcc.checkAccountNo);
myAcc.withDraw(2000);
console.log(myAcc.checkBalance);
myAcc.addMoney(4000);
console.log(myAcc.checkBalance);
//# sourceMappingURL=index.js.map