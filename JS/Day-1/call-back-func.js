const greet = (name, callback) => {
  callback(name);
};

const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

greet("Sella", sayHello);
