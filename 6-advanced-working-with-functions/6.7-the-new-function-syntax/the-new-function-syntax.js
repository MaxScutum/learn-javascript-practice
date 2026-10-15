// 6.7. The "new Function" syntax

/*
Rarely used, but sometimes no alternative.
Creates a function from strings at run time.
*/

alert('6.7. The "new Function" syntax');

// Syntax

/*
let func = new Function([arg1, arg2, ...argN], functionBody);
*/

{
  let sum = new Function("a", "b", "return a + b");
  alert(sum(1, 2)); // 3
}

{
  let sayHi = new Function('alert("Hello")');
  sayHi(); // Hello
}

/*
Historical forms — same meaning:
new Function('a', 'b', 'return a + b')
new Function('a,b', 'return a + b')
new Function('a , b', 'return a + b')
*/

{
  let sum1 = new Function("a", "b", "return a + b");
  let sum2 = new Function("a,b", "return a + b");
  let sum3 = new Function("a , b", "return a + b");

  alert(sum1(2, 3)); // 5
  alert(sum2(2, 3)); // 5
  alert(sum3(2, 3)); // 5
}

/*
Use cases:
- code received from a server
- dynamically compile a function from a template
*/

// Closure — special behavior

/*
Regular function: [[Environment]] → Lexical Environment where created.
new Function:      [[Environment]] → always the global one.

So new Function does NOT see outer local variables.
Pass data via arguments instead.
*/

{
  function getFunc() {
    let value = "test";

    let func = new Function("alert(value)");

    return func;
  }

  try {
    getFunc()(); // Error: value is not defined
  } catch (err) {
    alert("new Function: " + err.message);
  }
}

{
  // regular function — sees outer value
  function getFunc() {
    let value = "test";

    let func = function () {
      alert(value);
    };

    return func;
  }

  getFunc()(); // test
}

{
  // correct: pass via arguments
  function getFunc() {
    let value = "test";

    let func = new Function("value", "alert(value)");

    return func;
  }

  getFunc()("test"); // test
}

/*
Why no access to outer vars?
Minifiers rename locals (userName → a).
A string-built function couldn't find renamed vars.
Also: better architecture — explicit parameters.

Summary:
new Function(args..., body) — function from string.
[[Environment]] = global → no outer locals.
Pass data through arguments.
*/

alert('The End of 6.7. The "new Function" syntax');
