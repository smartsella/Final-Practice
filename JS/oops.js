//1) class
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getDetails() {
    return `${this.name} scored ${this.marks}`;
  }
}

const s1 = new Student("Arun", 85);
console.log(s1.getDetails());

//2) object
//3) Encapsulaton
class BankAccount {
  #balance = 0; // private

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance());

//4) Inheritance
class Employee {
  constructor(name) {
    this.name = name;
  }

  work() {
    return "Employee working";
  }
}

class Developer extends Employee {
  code() {
    return `${this.name} is coding`;
  }
}

const dev = new Developer("Ravi");
console.log(dev.work());
console.log(dev.code());

//5) polybornism
class Animal {
  sound() {
    return "Animal sound";
  }
}

class Dog extends Animal {
  sound() {
    return "Bark";
  }
}

class Cat extends Animal {
  sound() {
    return "Meow";
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach((a) => console.log(a.sound()));

//6) abstraction
class Payment {
  pay() {
    throw "pay() must be implemented";
  }
}

class CardPayment extends Payment {
  pay() {
    return "Paid using Card";
  }
}

const payment = new CardPayment();
console.log(payment.pay());

//7) classes
//8) object
