// 6.6. Function object, NFE

/*
Functions are objects — callable "action objects".
Can call them AND treat as objects (properties, pass by reference).
*/

alert("6.6. Function object, NFE");

// The "name" property

{
  function sayHi() {
    alert("Hi");
  }

  alert(sayHi.name); // sayHi
}

{
  // contextual name — from assignment
  let sayHi = function () {
    alert("Hi");
  };

  alert(sayHi.name); // sayHi
}

{
  function f(sayHi = function () {}) {
    alert(sayHi.name); // sayHi
  }

  f();
}

{
  let user = {
    sayHi() {},
    sayBye: function () {},
  };

  alert(user.sayHi.name); // sayHi
  alert(user.sayBye.name); // sayBye
}

{
  // sometimes name can't be figured out
  let arr = [function () {}];
  alert(arr[0].name); // "" (empty)
}

// The "length" property

/*
Number of parameters in the definition.
Rest parameters are NOT counted.
*/

{
  function f1(a) {}
  function f2(a, b) {}
  function many(a, b, ...more) {}

  alert(f1.length); // 1
  alert(f2.length); // 2
  alert(many.length); // 2
}

{
  // polymorphism via handler.length
  function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  }

  ask(
    "Question?",
    () => alert("You said yes"),
    (result) => alert(result),
  );
}

// Custom properties

/*
Function property ≠ local variable.
Parallel worlds: sayHi.counter vs let counter.
*/

{
  function sayHi() {
    alert("Hi");
    sayHi.counter++;
  }
  sayHi.counter = 0;

  sayHi();
  sayHi();

  alert(`Called ${sayHi.counter} times`); // Called 2 times
}

{
  // counter via function property (instead of closure)
  function makeCounter() {
    function counter() {
      return counter.count++;
    }

    counter.count = 0;
    return counter;
  }

  let counter = makeCounter();
  alert(counter()); // 0
  alert(counter()); // 1
}

{
  // difference vs closure: external code CAN change count
  function makeCounter() {
    function counter() {
      return counter.count++;
    }

    counter.count = 0;
    return counter;
  }

  let counter = makeCounter();
  counter.count = 10;
  alert(counter()); // 10
}

// Named Function Expression (NFE)

/*
Function Expression with a name:
let sayHi = function func(who) { ... }

- still a Function Expression (not Declaration)
- name is visible ONLY inside the function
- reliable self-reference (recursion etc.)
*/

{
  let sayHi = function func(who) {
    alert(`Hello, ${who}`);
  };

  sayHi("John"); // Hello, John
  // func(); // Error — not visible outside
}

{
  // self-call via internal name
  let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Guest");
    }
  };

  sayHi(); // Hello, Guest
}

{
  // problem: outer variable may change
  let sayHi = function (who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      sayHi("Guest"); // uses outer sayHi
    }
  };

  let welcome = sayHi;
  sayHi = null;

  try {
    welcome(); // Error
  } catch (err) {
    alert("without NFE: " + err.name);
  }
}

{
  // fixed with NFE
  let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Guest"); // always this function
    }
  };

  let welcome = sayHi;
  sayHi = null;

  welcome(); // Hello, Guest
}

/*
No "internal name" syntax for Function Declaration.
Sometimes rewrite Declaration → NFE for reliable self-calls.

Summary:
- name — function name (or from context)
- length — params count (rest not counted)
- custom properties OK (libraries: $ , _)
- NFE = Function Expression + internal name
*/

alert("The End of 6.6. Function object, NFE");
