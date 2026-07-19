// 4.5. Constructor, operator "new". Task.

// --- Task 1. Two functions – one object (importance: 2) ---
/*
Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert(a == b); // true

If yes, provide an example.

Answer: YES.
If both constructors return the same external object,
that object is returned instead of this.
Objects are compared by reference, so a == b is true.
*/

{
  let obj = {};

  function A() {
    return obj;
  }

  function B() {
    return obj;
  }

  let a = new A();
  let b = new B();

  alert(a == b); // true
}

// --- Task 2. Create new Calculator (importance: 5) ---
/*
Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties a and b.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
*/

function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

{
  let calculator = new Calculator();
  calculator.read();

  alert("Sum=" + calculator.sum());
  alert("Mul=" + calculator.mul());
}

// --- Task 3. Create new Accumulator (importance: 5) ---
/*
Create a constructor function Accumulator(startingValue).

The object should:
- Store the current value in property value (starts from startingValue).
- read() uses prompt to read a new number and adds it to value.

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum
*/

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("How much to add?", 0);
  };
}

{
  let accumulator = new Accumulator(1);

  accumulator.read();
  accumulator.read();

  alert(accumulator.value);
}

alert("The End of 4.5. Constructor, operator new. Task.");
