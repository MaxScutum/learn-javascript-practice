// 2.5. Data types. Task.

alert("2.5. Data types. Task.");

// --- Task. String quotes (importance: 5) ---
/*
What is the output?

let name = "Ilya";

alert(`hello ${1}`); // ?
alert(`hello ${"name"}`); // ?
alert(`hello ${name}`); // ?

Answers:
hello 1          — expression 1
hello name       — string "name", not the variable
hello Ilya       — variable name
*/

{
  let name = "Ilya";

  alert(`hello ${1}`); // hello 1
  alert(`hello ${"name"}`); // hello name
  alert(`hello ${name}`); // hello Ilya
}

alert("The End of 2.5. Data types. Task.");
