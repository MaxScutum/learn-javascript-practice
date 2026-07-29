// 5.1. Methods of primitives. Task.

// Task: Can I add a string property?
/*
let str = "Hello";

str.test = 5;

alert(str.test);

Answer:
- without strict mode: alert shows undefined (string primitive can’t store extra fields)
- with "use strict": TypeError (writing to property of a primitive is forbidden)
*/

alert("Task: Can I add a string property?");

// Non-strict case (script in browser is usually non-strict by default)
{
  let str = "Hello";
  str.test = 5;

  alert("Non-strict: str.test = " + str.test); // undefined
}

// Strict mode case
{
  function strictCase() {
    "use strict";
    let str = "Hello";
    str.test = 5; // TypeError in strict mode
    return str.test;
  }

  try {
    alert("Strict: " + strictCase());
  } catch (e) {
    alert("Strict error: " + e.name);
  }
}

alert("The End of 5.1. Methods of primitives. Task.");
