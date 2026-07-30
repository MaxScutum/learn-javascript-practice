// 2.18. JavaScript specials

/*
Brief recap of features learned so far,
with attention to subtle moments.
*/

alert("2.18. JavaScript specials");

// Code structure

/*
Statements are delimited with semicolon.
Line-break often works too (ASI), but not always.

Most style guides: put semicolon after each statement.
Not required after code blocks {...}.
*/

{
  alert("Hello");
  alert("World");
}

/*
This can break without semicolon after alert(...):

alert("There will be an error after this message")
[1, 2].forEach(alert)

Safer with semicolon.
*/

{
  alert("There will be an error after this message");
  [1, 2].forEach(alert);
}

// Strict mode

/*
"use strict" at top of script/function → modern behavior.
Some features (classes) enable it implicitly.
*/

{
  function showStrict() {
    "use strict";
    alert("strict mode function ok");
  }

  showStrict();
}

// Variables

/*
let / const / var (old)
Dynamically typed.
8 types: number, bigint, string, boolean, null, undefined, object, symbol

typeof quirks:
typeof null == "object"
typeof function(){} == "function"
*/

{
  let value = 5;
  value = "John";
  alert(value); // John

  alert(typeof null); // object
  alert(typeof function () {}); // function
}

// Interaction

/*
prompt → string | null
confirm → true/false
alert → message
All modal.
*/

{
  let userName = prompt("Your name?", "Alice");
  let isTeaWanted = confirm("Do you want some tea?");

  alert("Visitor: " + userName);
  alert("Tea wanted: " + isTeaWanted);
}

// Operators

/*
+ with string → concatenation
== converts types (except null/undefined special case)
=== no conversion
?? — nullish coalescing
&& / || — short-circuit, return stopped value
*/

{
  alert("1" + 2); // 12
  alert(1 + "2"); // 12

  alert(0 == false); // true
  alert(0 == ""); // true
  alert(0 === false); // false

  alert(null == undefined); // true
  alert(null === undefined); // false

  let height;
  alert(height ?? 100); // 100

  alert(null || "default"); // default
  alert("hi" && "ok"); // ok
}

// Loops

/*
while / do..while / for
break / continue
labels for nested loops
*/

{
  let text = "";
  for (let i = 0; i < 3; i++) {
    text += i + " ";
  }
  alert(text); // 0 1 2
}

// switch

/*
Uses === (strict equality).
prompt returns a string → case 18 won't match "18"
*/

{
  let age = prompt("Your age?", "18");

  switch (age) {
    case 18:
      alert("Won't work"); // number !== string
      break;
    case "18":
      alert("This works!");
      break;
    default:
      alert("Any other value");
  }
}

// Functions

/*
1) Function Declaration
2) Function Expression
3) Arrow function

Local variables, default params.
No return → undefined.
*/

{
  function sumDecl(x, y) {
    return x + y;
  }

  let sumExpr = function (x, y) {
    return x + y;
  };

  let sumArrow = (x, y) => x + y;
  let double = (n) => n * 2;
  let sayHi = () => alert("Hello");

  alert(sumDecl(1, 2)); // 3
  alert(sumExpr(1, 2)); // 3
  alert(sumArrow(1, 2)); // 3
  alert(double(4)); // 8
  sayHi();
}

/*
Summary:
- semicolons matter (ASI edge cases)
- prefer "use strict"
- 8 types, typeof quirks
- prompt/confirm/alert
- == vs ===, ??, short-circuit
- loops + switch (===)
- declaration / expression / arrow
*/

alert("The End of 2.18. JavaScript specials.");
