// 3.1. Debugging in the browser.

/*
Debugging is the process of finding and fixing errors within a script.
Open DevTools: F12 (Mac: Cmd+Opt+I) → Sources panel.

Three main ways to pause a script:
1. A breakpoint (click on line number in Sources)
2. The debugger statement
3. An error (if dev tools are open)
*/

// The "debugger" command

/*
function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // the debugger stops here (only when DevTools is open)

  say(phrase);
}

function say(phrase) {
  alert(phrase);
}

hello("debugger");
*/

function hello(userName) {
  let phrase = `Hello, ${userName}!`;

  debugger; // open F12 → Sources before reload; execution pauses here

  say(phrase);
}

function say(phrase) {
  alert(phrase);
}

hello("debugger");

/*
Tracing the execution (buttons in DevTools right panel):
Resume       — F8  — continue execution
Step         — F9  — next statement
Step over    — F10 — next statement, skip going inside a function
Step into    — F11 — go inside function call
Step out     — Shift+F11 — run to end of current function
*/

// Logging

/*
To output something to console from our code, there's console.log.

for (let i = 0; i < 5; i++) {
  console.log("value,", i);
}

Open Console panel or press Esc in DevTools to see the output.
*/

for (let index = 0; index < 5; index++) {
  alert(`value, ${index}`);
}

/*
Summary:
- Use breakpoints and debugger to pause and inspect variables
- Use console.log to see output without stopping every line
- Regular users don't see console output — only you in DevTools
*/

alert("The End of 3.1. Debugging in the browser.");
