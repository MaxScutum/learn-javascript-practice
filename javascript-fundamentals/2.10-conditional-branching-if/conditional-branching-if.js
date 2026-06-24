// 2.10. Conditional branching: if, '?'

// The “if” statement

let year = prompt(
  "In which year was ECMAScript-2015 specification published?",
  "",
);

if (year == 2015) alert("You are right!");

let year2 = prompt(
  "In which year was ECMAScript-2015 specification published?",
  "",
);
if (year == 2015) {
  alert("That's correct!");
  alert("You're so smart!");
}

// Boolean conversion

/* A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”. */

alert(Boolean(0)); // false
alert(Boolean("")); // false
alert(Boolean(null)); // false
alert(Boolean(undefined)); // false
alert(Boolean(NaN)); // false
alert(Boolean("0")); // true
alert(Boolean("1")); // true
alert(Boolean("2")); // true
alert(Boolean(1)); // true
alert(Boolean(-1)); // true

// The “else” clause

let year3 = prompt(
  "In which year was the ECMAScript-2015 specification published?",
  "",
);

if (year3 == 2015) {
  alert("You guessed it right!");
} else {
  alert("How can you be so wrong?"); // any value except 2015
}
