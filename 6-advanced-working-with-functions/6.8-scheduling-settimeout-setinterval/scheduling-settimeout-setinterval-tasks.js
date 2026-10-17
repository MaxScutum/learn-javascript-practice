// 6.8. Scheduling: setTimeout and setInterval. Task.

alert("6.8. Scheduling. Task.");

// --- Task 1. Output every second (importance: 5) ---

/*
printNumbers(from, to) — print from..to, one number per second.

Variant A: setInterval
Variant B: nested setTimeout
*/

// Variant A — setInterval
function printNumbersInterval(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// Variant B — nested setTimeout
function printNumbersTimeout(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

{
  // pick one to demo (many alerts!)
  printNumbersInterval(1, 3);
  // printNumbersTimeout(1, 3);
}

// --- Task 2. What will setTimeout show? (importance: 5) ---

/*
Answer: AFTER the loop.
setTimeout callback runs only when the current script finishes.
The heavy for-loop runs >100ms, so the timer is ready,
but the engine waits until the loop ends.

alert shows 100000000 (final value of i).
*/

{
  let i = 0;

  setTimeout(() => alert(i), 100); // 100000000

  for (let j = 0; j < 100000000; j++) {
    i++;
  }
}

alert("The End of 6.8. Scheduling. Task. (timers may still alert)");
