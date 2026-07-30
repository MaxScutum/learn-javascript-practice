// 5.2. Numbers. Task.

alert("5.2. Numbers. Task.");

// --- Task 1. Sum numbers from the visitor (importance: 5) ---
/*
Create a script that prompts for two numbers and shows their sum.

Gotcha: prompt returns a string.
"1" + "2" => "12"
Need Number() / + before adding.
*/

{
  let first = +prompt("First number?", 0);
  let second = +prompt("Second number?", 0);

  alert(first + second);
}

// --- Task 2. Why 6.35.toFixed(1) == 6.3? (importance: 4) ---
/*
alert(1.35.toFixed(1)); // 1.4
alert(6.35.toFixed(1)); // 6.3  — why not 6.4?

Answer: precision loss.
6.35 is stored as a number slightly less than 6.35,
so toFixed(1) rounds down to 6.3.

Right way: round via a closer intermediate precision, e.g.:
Math.round(6.35 * 10) / 10
*/

{
  alert((1.35).toFixed(1)); // 1.4
  alert((6.35).toFixed(1)); // 6.3

  alert((6.35).toFixed(20)); // shows it is a bit less than 6.35

  alert(Math.round(6.35 * 10) / 10); // 6.4
}

// --- Task 3. Repeat until the input is a number (importance: 5) ---
/*
Create readNumber():
- prompt until a valid number is entered
- return it as a number
- empty string or Cancel → return null
*/

function readNumber() {
  let value;

  while (true) {
    value = prompt("Enter a number", "");

    if (value === null || value === "") {
      return null;
    }

    if (isFinite(value)) {
      return +value;
    }
  }
}

{
  alert(readNumber());
}

// --- Task 4. An occasional infinite loop (importance: 4) ---
/*
let i = 0;
while (i != 10) {
  i += 0.2;
}

Why infinite?
Because of float precision: i never becomes exactly 10.
e.g. 9.999999999999998 != 10 forever.

Don't use == / != with floats from repeated +0.2.
*/

{
  let counter = 0;
  let value = 0;

  while (value != 10 && counter < 60) {
    value += 0.2;
    counter++;
  }

  alert("After " + counter + " steps, value = " + value);
  alert("value == 10 ? " + (value == 10)); // false
}

// --- Task 5. A random number from min to max (importance: 2) ---
/*
random(min, max): float from min to max (not including max)
Formula: min + Math.random() * (max - min)
*/

function random(min, max) {
  return min + Math.random() * (max - min);
}

{
  alert(random(1, 5));
  alert(random(1, 5));
  alert(random(1, 5));
}

// --- Task 6. A random integer from min to max (importance: 2) ---
/*
randomInteger(min, max): integer including both min and max.
Same probability for each value.

One correct way:
Math.floor(min + Math.random() * (max + 1 - min))
*/

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

{
  alert(randomInteger(1, 5));
  alert(randomInteger(1, 5));
  alert(randomInteger(1, 5));
}

alert("The End of 5.2. Numbers. Task.");
