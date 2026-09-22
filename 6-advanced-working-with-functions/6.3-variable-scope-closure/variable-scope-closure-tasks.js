// 6.3. Variable scope, closure. Task.

alert("6.3. Variable scope, closure. Task.");

// --- Task 1. Does a function pickup latest changes? (importance: 5) ---
/*
Answer: "Hi, Pete"
A function uses the current value of outer variables when it runs,
not when it was created.
*/

{
  let name = "John";

  function sayHi() {
    alert("Hi, " + name);
  }

  name = "Pete";
  sayHi(); // Hi, Pete
}

// --- Task 2. Which variables are available? (importance: 5) ---
/*
Answer: Pete
Nested function uses Lexical Environment of creation place,
not the call place.
*/

{
  function makeWorker() {
    let name = "Pete";

    return function () {
      alert(name);
    };
  }

  let name = "John";
  let work = makeWorker();
  work(); // Pete
}

// --- Task 3. Are counters independent? (importance: 5) ---
/*
Yes, independent.
Each makeCounter() has its own Lexical Environment / count.
counter2 → 0, then 1
*/

{
  function makeCounter() {
    let count = 0;
    return function () {
      return count++;
    };
  }

  let counter = makeCounter();
  let counter2 = makeCounter();

  alert(counter()); // 0
  alert(counter()); // 1
  alert(counter2()); // 0
  alert(counter2()); // 1
}

// --- Task 4. Counter object (importance: 5) ---
/*
Yes, works. Both methods close over the same count.
1, then 2, then 1
*/

{
  function Counter() {
    let count = 0;

    this.up = function () {
      return ++count;
    };
    this.down = function () {
      return --count;
    };
  }

  let counter = new Counter();

  alert(counter.up()); // 1
  alert(counter.up()); // 2
  alert(counter.down()); // 1
}

// --- Task 5. Function in if (importance: 5) ---
/*
In strict mode / browsers with block-scoped Function Declarations:
Error — sayHi is not visible outside if.

(In old non-strict browsers it might work differently.)
*/

{
  let phrase = "Hello";

  if (true) {
    let user = "John";

    function sayHi() {
      alert(`${phrase}, ${user}`);
    }

    sayHi(); // Hello, John  (works inside the block)
  }

  try {
    sayHi(); // Error in modern JS
  } catch (err) {
    alert("sayHi outside if: " + err.name);
  }
}

// --- Task 6. Sum with closures (importance: 4) ---

function sum(a) {
  return function (b) {
    return a + b;
  };
}

{
  alert(sum(1)(2)); // 3
  alert(sum(5)(-1)); // 4
}

// --- Task 7. Is variable visible? (importance: 4) ---
/*
Error (Temporal Dead Zone).
Local let x exists in the function from the start,
but is uninitialized until let x = 2.
So console.log(x) can't use outer x=1.
*/

{
  let x = 1;

  function func() {
    try {
      console.log(x);
      let x = 2;
    } catch (err) {
      alert("func(): " + err.name); // ReferenceError
    }
  }

  func();
}

// --- Task 8. Filter through function (importance: 5) ---

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

{
  let arr = [1, 2, 3, 4, 5, 6, 7];

  alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
  alert(arr.filter(inArray([1, 2, 10]))); // 1,2
}

// --- Task 9. Sort by field (importance: 5) ---

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

{
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];

  users.sort(byField("name"));
  alert(users.map((u) => u.name)); // Ann,John,Pete

  users.sort(byField("age"));
  alert(users.map((u) => u.name)); // Pete,Ann,John
}

// --- Task 10. Army of functions (importance: 5) ---
/*
Bug: all shooters share the same i from while.
After loop i === 10, so every shooter shows 10.

Fix: capture current i in a block-scoped variable
(or use for (let i = 0; ...)).
*/

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      alert(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

{
  let army = makeArmy();
  army[0](); // 0
  army[1](); // 1
  army[2](); // 2
}

alert("The End of 6.3. Variable scope, closure. Task.");
