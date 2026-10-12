// 6.4. The old "var"

/*
Useful to understand old scripts.
Not for writing new code.
Prefer let / const.
*/

alert('6.4. The old "var"');

// var looks like let — but different inside

{
  var message = "Hi";
  alert(message); // Hi
}

// var has no block scope

/*
var is function-scoped or global-scoped.
Ignores {...} blocks (if, for, while...).
*/

{
  if (true) {
    var test = true;
  }

  alert(test); // true (still visible)
}

{
  // with let — only inside if
  if (true) {
    let testLet = true;
    alert(testLet); // true
  }
  // alert(testLet); // ReferenceError
}

{
  for (var i = 0; i < 10; i++) {
    var one = 1;
  }

  alert(i); // 10
  alert(one); // 1
}

{
  function sayHiBlock() {
    if (true) {
      var phrase = "Hello";
    }

    alert(phrase); // works (function-scoped)
  }

  sayHiBlock();
  // alert(phrase); // ReferenceError outside function
}

// var tolerates redeclarations

/*
let user; let user; → SyntaxError
var: second declaration is ignored
*/

{
  var user = "Pete";
  var user = "John"; // no error
  alert(user); // John
}

// Hoisting: declarations are raised, assignments are not

/*
var is processed at function start (or script start for globals).
Can use before the line with var → value is undefined until assignment.
*/

{
  function sayHiHoist1() {
    phrase = "Hello";
    alert(phrase); // Hello
    var phrase;
  }

  sayHiHoist1();
}

{
  // same as moving var to the top
  function sayHiHoist2() {
    var phrase;
    phrase = "Hello";
    alert(phrase); // Hello
  }

  sayHiHoist2();
}

{
  // even if var is inside if (false) — still hoisted
  function sayHiHoist3() {
    phrase = "Hello"; // (*)

    if (false) {
      var phrase;
    }

    alert(phrase); // Hello
  }

  sayHiHoist3();
}

{
  function sayHiUndefined() {
    alert(phrase); // undefined (exists, not assigned yet)

    var phrase = "Hello";
  }

  sayHiUndefined();
}

/*
var phrase = "Hello" = two steps:
1) declaration → hoisted to function start
2) assignment  → runs where the line is
*/

// IIFE — old way to emulate block scope

/*
Immediately-Invoked Function Expression.
Needed when only var existed.
Not needed with let/const today.
*/

{
  (function () {
    var msg = "Hello";
    alert(msg); // Hello
  })();

  // alert(msg); // ReferenceError (private to IIFE)
}

/*
Why parentheses?
"function" at start of a statement → Function Declaration
→ needs a name, can't call immediately.

(function(){...})() → Function Expression → can run at once.
*/

{
  (function () {
    alert("Parentheses around the function");
  })();

  (function () {
    alert("Parentheses around the whole thing");
  })();

  !(function () {
    alert("Bitwise NOT starts the expression");
  })();

  +(function () {
    alert("Unary plus starts the expression");
  })();
}

/*
Summary — var vs let/const:
1) no block scope → function or global
2) declarations hoisted to function/script start
3) minor global-object difference → next chapter (6.5)

Use let / const in new code.
*/

alert('The End of 6.4. The old "var"');
