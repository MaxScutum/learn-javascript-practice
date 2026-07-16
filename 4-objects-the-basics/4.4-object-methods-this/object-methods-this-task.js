// 4.4. Object methods, "this". Task.

// --- Task 1. Using "this" in object literal (importance: 5) ---
/*
Here makeUser returns an object.

What is the result of accessing user.ref.name? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // What will be the result?

Answer: Error — Cannot read property 'name' of undefined.

this is set at call-time. makeUser() is called as a function,
not as a method, so this is undefined (strict mode).
Object literal does not affect this.

Fix: make ref a method so this is the object before the dot.
*/

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user = makeUser();

alert(user.ref().name); // John

// --- Task 2. Create a calculator (importance: 5) ---
/*
Create an object calculator with three methods:

read() asks for two values and stores them as object properties a and b.
sum() returns the sum of stored values.
mul() multiplies stored values and returns the result.

let calculator = {
  // ... your code ...
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
*/

let calculator = {
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// --- Task 3. Chaining (importance: 2) ---
/*
We have an object ladder that allows going up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert(this.step);
  }
};

Change up, down and showStep so that calls can be chained:

ladder.up().up().down().showStep().down().showStep(); // shows 1, then 0

Solution: return this from each method.
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // shows 1, then 0

alert("The End of 4.4. Object methods, this. Task.");
