// 2.8. Basic operators, maths. Task.

alert("2.8. Basic operators, maths. Task.");

// --- Task 1. The postfix and prefix forms (importance: 5) ---
/*
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?

a = 2
b = 2
c = 2  (++a returns new value)
d = 1  (b++ returns old value)
*/

{
  let a = 1;
  let b = 1;

  let c = ++a;
  let d = b++;

  alert(a); // 2
  alert(b); // 2
  alert(c); // 2
  alert(d); // 1
}

// --- Task 2. Assignment result (importance: 3) ---
/*
let a = 2;
let x = 1 + (a *= 2);

a *= 2 → a = 4
x = 1 + 4 = 5
*/

{
  let a = 2;
  let x = 1 + (a *= 2);

  alert(a); // 4
  alert(x); // 5
}

// --- Task 3. Type conversions (importance: 5) ---

{
  alert("" + 1 + 0); // "10"
  alert("" - 1 + 0); // -1
  alert(true + false); // 1
  alert(6 / "3"); // 2
  alert("2" * "3"); // 6
  alert(4 + 5 + "px"); // "9px"
  alert("$" + 4 + 5); // "$45"
  alert("4" - 2); // 2
  alert("4px" - 2); // NaN
  alert("  -9  " + 5); // "  -9  5"
  alert("  -9  " - 5); // -14
  alert(null + 1); // 1
  alert(undefined + 1); // NaN
  alert(" \t \n" - 2); // -2
}

// --- Task 4. Fix the addition (importance: 5) ---
/*
prompt returns strings → "1" + "2" = "12"
Need Number / unary +
*/

{
  let a = +prompt("First number?", 1);
  let b = +prompt("Second number?", 2);

  alert(a + b); // 3
}

alert("The End of 2.8. Basic operators, maths. Task.");
