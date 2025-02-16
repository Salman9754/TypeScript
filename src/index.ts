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
    return this.balance += amount;
  }
   withDraw(amount: number) {
    return this.balance -= amount;
  }
}
const myAcc = new BankAccount(10000, "salman12345");
console.log(myAcc.checkBalance);
console.log(myAcc.checkAccountNo);
myAcc.withDraw(2000);
console.log(myAcc.checkBalance);
myAcc.addMoney(4000)
console.log(myAcc.checkBalance);
// console.log(myAcc.accountNumber);

// ***************** 5 *****************

