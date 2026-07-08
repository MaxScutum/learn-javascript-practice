// 3.2. Coding Style.

/*
Our code must be as clean and easy to read as possible.
These are style preferences, not strict rules.
*/

// Curly Braces (Egyptian style)

/*
😠 Bad:
if (n < 0) {alert(`Power ${n} is not supported`);}

😠 Bad:
if (n < 0)
  alert(`Power ${n} is not supported`);

😏 Acceptable for very short code:
if (n < 0) alert(`Power ${n} is not supported`);

😃 Best:
if (n < 0) {
  alert(`Power ${n} is not supported`);
}
*/

{
  let power = -2;

  if (power < 0) {
    alert(`Power ${power} is not supported`);
  }
}

// Line Length

/*
let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;
*/

let description = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;

alert(description.trim());

/*
if (
  id === 123 &&
  moonPhase === 'Waning Gibbous' &&
  zodiacSign === 'Libra'
) {
  letTheSorceryBegin();
}
*/

{
  let id = 123;
  let moonPhase = "Waning Gibbous";
  let zodiacSign = "Libra";

  if (id === 123 && moonPhase === "Waning Gibbous" && zodiacSign === "Libra") {
    alert("Let the sorcery begin!");
  }
}

// Indents — vertical blocks in a function

/*
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
*/

function pow(base, exponent) {
  let result = 1;

  for (let step = 0; step < exponent; step++) {
    result *= base;
  }

  return result;
}

alert(pow(2, 3)); // 8

// Nesting Levels — continue instead of extra nesting

/*
for (let i = 0; i < 10; i++) {
  if (cond) {
    ...
  }
}

for (let i = 0; i < 10; i++) {
  if (!cond) continue;
  ...
}
*/

{
  let output = "";

  for (let index = 0; index < 10; index++) {
    if (index % 2 === 0) continue;
    output += index + " ";
  }

  alert(output); // 1 3 5 7 9
}

// Early return — more readable than else

/*
Option 1 (more nesting):
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    ...
    return result;
  }
}
*/

function powEarlyReturn(base, exponent) {
  if (exponent < 0) {
    alert("Negative exponent not supported");
    return;
  }

  let result = 1;

  for (let step = 0; step < exponent; step++) {
    result *= base;
  }

  return result;
}

alert(powEarlyReturn(2, 3)); // 8

// Function Placement — helpers after main code

let message = createGreeting("JavaScript");
showMessage(message);

function showMessage(text) {
  alert(text);
}

function createGreeting(topic) {
  return `Hello, ${topic}!`;
}

/*
Style Guides: Google, Airbnb, Idiomatic.JS, StandardJS
Automated Linters: ESLint, JSHint, JSLint
*/

alert("The End of 3.2. Coding Style.");
