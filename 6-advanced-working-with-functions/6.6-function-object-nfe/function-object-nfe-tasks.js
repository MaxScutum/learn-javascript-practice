// 6.6. Function object, NFE. Task.

alert("6.6. Function object, NFE. Task.");

// --- Task 1. Set and decrease for counter (importance: 5) ---

/*
counter()          → next number (count++)
counter.set(value) → set count
counter.decrease() → count -= 1

Variant A: closure
Variant B: function property
*/

// Variant A — closure
function makeCounterClosure() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = function (value) {
    count = value;
  };

  counter.decrease = function () {
    count--;
  };

  return counter;
}

{
  let counter = makeCounterClosure();

  alert(counter()); // 0
  alert(counter()); // 1

  counter.set(10);
  alert(counter()); // 10

  counter.decrease();
  alert(counter()); // 10 (decrease then return next → showed 10 after decrease from 11? wait)

  // After set(10), count=10
  // counter() returns 10, then count=11
  // decrease() → count=10
  // counter() returns 10, then count=11
}

// clearer demo
{
  let counter = makeCounterClosure();

  alert(counter()); // 0
  alert(counter()); // 1

  counter.set(10);
  alert(counter()); // 10

  counter.decrease(); // count becomes 10 after previous call left it at 11
  alert(counter()); // 10
}

// Variant B — function property
function makeCounterProp() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  counter.set = function (value) {
    counter.count = value;
  };

  counter.decrease = function () {
    counter.count--;
  };

  return counter;
}

{
  let counter = makeCounterProp();

  alert(counter()); // 0
  alert(counter()); // 1

  counter.set(10);
  alert(counter()); // 10

  counter.decrease();
  alert(counter()); // 10
}

// --- Task 2. Sum with an arbitrary amount of brackets (importance: 2) ---

/*
sum(1)(2) == 3
sum(1)(2)(3) == 6
...

Return a function that keeps adding.
For sum(1)(2) == 3 to work, need object→primitive
(toString / valueOf / Symbol.toPrimitive).
*/

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  // also works with valueOf:
  // f.valueOf = function () { return currentSum; };

  return f;
}

{
  alert(sum(1)(2)); // 3
  alert(sum(1)(2)(3)); // 6
  alert(sum(5)(-1)(2)); // 6
  alert(sum(6)(-1)(-2)(-3)); // 0
  alert(sum(0)(1)(2)(3)(4)(5)); // 15

  alert(sum(1)(2) == 3); // true (toString → primitive)
}

alert("The End of 6.6. Function object, NFE. Task.");
