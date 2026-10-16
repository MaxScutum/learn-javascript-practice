// 6.8. Scheduling: setTimeout and setInterval

/*
Not part of JS language spec — provided by the environment
(browsers, Node.js).

setTimeout  — run once after delay
setInterval — run repeatedly every delay

Delay is NOT guaranteed exactly (CPU load, background tab, battery…).
*/

alert("6.8. Scheduling: setTimeout and setInterval");

// setTimeout

/*
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

- func: function (string code is allowed but NOT recommended)
- delay: ms, default 0
- args: passed to the function
*/

{
  function sayHi() {
    alert("Hello");
  }

  setTimeout(sayHi, 1000);
}

{
  function sayHi(phrase, who) {
    alert(phrase + ", " + who);
  }

  setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
}

{
  // string — works, but don't use it
  // setTimeout("alert('Hello')", 1000);

  // prefer arrow / function reference
  setTimeout(() => alert("Hello (arrow)"), 1000);
}

/*
WRONG: setTimeout(sayHi(), 1000)
sayHi() runs NOW, result (often undefined) goes to setTimeout.
Pass the function, don't call it: setTimeout(sayHi, 1000)
*/

// clearTimeout

{
  let timerId = setTimeout(() => alert("never happens"), 1000);
  alert(timerId); // timer id (number in browser)

  clearTimeout(timerId);
  alert(timerId); // same id (not null after cancel)
}

// setInterval

/*
Same syntax as setTimeout, but repeats until clearInterval.
While alert is open, the timer often keeps ticking → next alert may appear ASAP.
*/

{
  let timerId = setInterval(() => alert("tick"), 2000);

  setTimeout(() => {
    clearInterval(timerId);
    alert("stop");
  }, 5000);
}

// Nested setTimeout — alternative to setInterval

/*
More flexible: schedule the NEXT call at the end of the current one.
Can change delay depending on the result.
Guarantees a pause BETWEEN end of one call and start of the next.

setInterval: delay includes function run time → real gap can be shorter.
If func takes longer than delay → calls may run with almost no pause.
*/

{
  let timerId = setTimeout(function tick() {
    alert("tick (nested)");
    timerId = setTimeout(tick, 2000);
  }, 2000);

  // stop after ~5s (optional demo)
  setTimeout(() => clearTimeout(timerId), 5000);
}

/*
Pseudocode — adaptive delay (server overload):

let delay = 5000;
let timerId = setTimeout(function request() {
  // ...send request...
  if (server overloaded) delay *= 2;
  timerId = setTimeout(request, delay);
}, delay);
*/

// Garbage collection

/*
Scheduler keeps an internal reference to the callback.
→ function (and its outer vars) stay in memory until:
  - setTimeout fires, or
  - clearInterval / clearTimeout cancels it
Cancel when you no longer need it.
*/

// Zero delay: setTimeout(func, 0) / setTimeout(func)

/*
Runs "as soon as possible", but AFTER the current script finishes.
*/

{
  setTimeout(() => alert("World"));
  alert("Hello"); // Hello first, then World
}

/*
Browser limit (historical):
after 5 nested zero-delay timers (or setInterval),
min delay is forced to ~4ms.
Does NOT apply the same way on the server (Node.js).
*/

{
  let start = Date.now();
  let times = [];

  setTimeout(function run() {
    times.push(Date.now() - start);

    if (start + 100 < Date.now()) {
      alert(times); // e.g. 1,1,1,1,9,15,... then 4+ ms gaps
    } else {
      setTimeout(run);
    }
  });
}

/*
Summary:
- setTimeout / setInterval(+ clear*)
- nested setTimeout = more precise gaps, more flexible
- setTimeout(f, 0) → after current script
- browser: nested timers → min ~4ms after 5th
- exact delay never guaranteed
*/

alert("The End of 6.8. Scheduling (more alerts may still come from timers)");
