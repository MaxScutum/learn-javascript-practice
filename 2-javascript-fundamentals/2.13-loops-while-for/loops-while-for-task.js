// 2.13. Loops: while and for. Task.

// --- Task 1. Last loop value (importance: 3) ---
/*
What is the last value alerted by this code? Why?

let i = 3;
while (i) {
  alert(i--);
}

Answer: 1.
The loop alerts 3, then 2, then 1.
When i becomes 0, the condition is falsy and the loop stops.
*/

{
  let counter = 3;
  while (counter) {
    alert(counter--);
  }
}
alert("Task 1 answer: last value is 1");

// --- Task 2. Which values does the while loop show? (importance: 4) ---
/*
For every loop iteration, write down which value it outputs.
Both loops alert the same values, or not?

The prefix form ++i:
let i = 0;
while (++i < 5) alert(i);

The postfix form i++:
let i = 0;
while (i++ < 5) alert(i);

Answer: NOT the same.
Prefix: 1, 2, 3, 4
Postfix: 1, 2, 3, 4, 5
*/

{
  let prefixNum = 0;
  while (++prefixNum < 5) alert(prefixNum);
}

{
  let postfixNum = 0;
  while (postfixNum++ < 5) alert(postfixNum);
}

alert("Task 2 answer: prefix → 1,2,3,4 | postfix → 1,2,3,4,5");

// --- Task 3. Which values get shown by the "for" loop? (importance: 4) ---
/*
For each loop write down which values it is going to show.
Both loops alert same values or not?

The postfix form:
for (let i = 0; i < 5; i++) alert(i);

The prefix form:
for (let i = 0; i < 5; ++i) alert(i);

Answer: YES, the same — 0, 1, 2, 3, 4.
*/

for (let indexPostfix = 0; indexPostfix < 5; indexPostfix++) {
  alert(indexPostfix);
}

for (let indexPrefix = 0; indexPrefix < 5; ++indexPrefix) {
  alert(indexPrefix);
}

alert("Task 3 answer: both loops show 0, 1, 2, 3, 4");

// --- Task 4. Output even numbers in the loop (importance: 5) ---
/*
Use the for loop to output even numbers from 2 to 10.
*/

for (let evenNum = 2; evenNum <= 10; evenNum += 2) {
  alert(evenNum);
}

// --- Task 5. Replace "for" with "while" (importance: 5) ---
/*
Rewrite the code changing the for loop to while without altering its behavior.

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}
*/

{
  let whileIndex = 0;
  while (whileIndex < 3) {
    alert(`number ${whileIndex}!`);
    whileIndex++;
  }
}

// --- Task 6. Repeat until the input is correct (importance: 5) ---
/*
Write a loop which prompts for a number greater than 100.
If the visitor enters another number – ask them to input again.

The loop must ask until either:
- the visitor enters a number greater than 100, or
- cancels the input / enters an empty line.
*/

let inputNum;
do {
  inputNum = prompt("Enter a number greater than 100", "");
} while (inputNum !== null && inputNum !== "" && +inputNum <= 100);

if (inputNum !== null && inputNum !== "") {
  alert("Correct: " + inputNum);
} else {
  alert("Input cancelled or empty");
}

// --- Task 7. Output prime numbers (importance: 3) ---
/*
An integer number greater than 1 is called a prime if it cannot be divided
without a remainder by anything except 1 and itself.

Write the code which outputs prime numbers in the interval from 2 to n.
For n = 10 the result will be 2, 3, 5, 7.
The code should work for any n.
*/

let n = 10;

for (let num = 2; num <= n; num++) {
  let isPrime = true;

  for (let divisor = 2; divisor < num; divisor++) {
    if (num % divisor === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    alert(num);
  }
}

alert("The End of 2.13. Loops: while and for. Task.");
