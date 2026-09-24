// 6.5. Global object

/*
Global object: variables/functions available everywhere.
Built-ins + environment APIs.

Browser: window
Node.js: global
Universal: globalThis (prefer in multi-env code)

Here we use window (browser).
*/

alert("6.5. Global object");

// Access properties directly

/*
alert(...) === window.alert(...)
*/

{
  alert("Hello");
  window.alert("Hello"); // same
}

// var (and Function Declaration) → property of global object

/*
Compatibility behavior.
Modern modules: does NOT happen.
Don't rely on it.
*/

var gVar = 5;
alert(window.gVar); // 5

function sayHiGlobal() {
  return "Hi from function declaration";
}
alert(window.sayHiGlobal()); // works (non-module script)

// let / const — NOT on the global object

{
  let gLet = 5;
  alert(window.gLet); // undefined
}

// Explicit global (only if truly needed)

/*
Assign as a property when something must be shared across scripts.
Prefer as few globals as possible.
*/

window.currentUser = {
  name: "John",
};

alert(currentUser.name); // John
alert(window.currentUser.name); // John (explicit, safer if local shadowing)

// Using for polyfills / feature detection

{
  if (!window.Promise) {
    alert("Your browser is really old!");
    // window.Promise = ... // custom polyfill
  } else {
    alert("Promise is supported");
  }
}

// Environment values live on the global object too

{
  alert(typeof Array); // function (built-in)
  alert(window.innerHeight); // browser window height (px)
}

// globalThis

{
  alert(globalThis === window); // true in browser
}

/*
Summary:
- Holds truly global values + built-ins + env APIs
- Names: globalThis / window / global
- Keep custom globals minimal
- var + Function Declarations (non-module) become window properties
- Prefer explicit window.x (or globalThis.x) when reading globals
*/

alert("The End of 6.5. Global object");
