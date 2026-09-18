// 6.3. Variable scope, closure

/*
Functions can access outer variables.
Questions:
- if outer vars change later — which value does the function see?
- if called from another place — does it still see its original outer vars?

Here: let/const (var is different, later chapter).
*/

alert("6.3. Variable scope, closure");

// Code blocks

/*
Variables declared in {...} are visible only inside that block.
Same for if / for / while.
*/

{
  let message = "Hello";
  alert(message); // Hello
}

{
  let message = "Goodbye";
  alert(message); // Goodbye
}

{
  if (true) {
    let phrase = "Hello!";
    alert(phrase); // Hello!
  }
  // alert(phrase); // Error
}

{
  for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
  }
  // alert(i); // Error
}

// Nested functions

{
  function sayHiBye(firstName, lastName) {
    function getFullName() {
      return firstName + " " + lastName;
    }

    alert("Hello, " + getFullName());
    alert("Bye, " + getFullName());
  }

  sayHiBye("John", "Smith");
}

// makeCounter — classic closure example

{
  function makeCounter() {
    let count = 0;

    return function () {
      return count++;
    };
  }

  let counter = makeCounter();
  alert(counter()); // 0
  alert(counter()); // 1
  alert(counter()); // 2

  let counter2 = makeCounter();
  alert(counter2()); // 0  (independent)
  alert(counter()); // 3  (first counter continues)
}

/*
Lexical Environment (theory):

Every function / block / script has a Lexical Environment:
1) Environment Record — local vars as properties
2) reference to the outer Lexical Environment

Looking up a variable: inner → outer → ... → global

Function Declarations are fully initialized immediately
(can call before the line of declaration).

When a function is created, it gets hidden [[Environment]]
pointing to the Lexical Environment where it was born.
When called later, that link is still used.
*/

// Closure

/*
Closure = function that remembers outer variables and can access them.
In JS almost all functions are closures
(via [[Environment]]).
*/

// Garbage collection

/*
If a nested function stays reachable, its outer Lexical Environment
(and variables it uses) stay in memory too.
*/

{
  function f() {
    let value = 123;

    return function () {
      alert(value);
    };
  }

  let g = f(); // Lexical Environment of f stays alive
  g(); // 123

  g = null; // now it can be GC'd
  alert("g = null → memory can be cleaned");
}

{
  function f() {
    let value = Math.random();
    return function () {
      alert(value);
    };
  }

  let arr = [f(), f(), f()];
  // 3 functions → 3 Lexical Environments kept
  arr[0]();
  arr[1]();
  arr[2]();
}

/*
V8 optimization note:
unused outer variables may be removed,
so in debugger they can be "invisible".
*/

/*
Summary:
- block scope with let/const
- nested functions see outer vars
- returned function keeps its birth environment → closure
- each makeCounter() call → its own count
- reachable nested function keeps outer vars alive
*/

alert("The End of 6.3. Variable scope, closure.");
