// 3.6. Polyfills and transpilers

/*
The JavaScript language steadily evolves.
Engines implement the standard only partially / in different order.

As programmers we want modern features,
but older engines may not understand them.

Two tools:
- Transpilers
- Polyfills
*/

alert("3.6. Polyfills and transpilers");

// Transpilers

/*
A transpiler translates modern source code into older-syntax source code.

Example: nullish coalescing ?? (not in very old engines)

// before
height = height ?? 100;

// after transpile
height = (height !== undefined && height !== null) ? height : 100;

Popular transpiler: Babel.
Build tools like webpack can run it automatically on every change.
*/

{
  let height;

  // modern idea: height ?? 100
  // "transpiled" equivalent:
  height = height !== undefined && height !== null ? height : 100;

  alert(height); // 100
}

{
  let height = 0;

  // ?? keeps 0 (unlike ||)
  height = height !== undefined && height !== null ? height : 100;

  alert(height); // 0
}

// Polyfills

/*
New features can also be built-in functions, not only syntax.

Example: Math.trunc(n) cuts off the decimal part.
Math.trunc(1.23) -> 1

If the engine has no Math.trunc, we don't transpile —
we declare the missing function. Such a script is a polyfill.

Example polyfill:

if (!Math.trunc) {
  Math.trunc = function(number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}

Popular polyfill library: core-js
(include only features you need).
*/

{
  // demo of the polyfill idea (safe even if Math.trunc already exists)
  let truncPolyfill = function (number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };

  alert(truncPolyfill(1.23)); // 1
  alert(truncPolyfill(-1.23)); // -1

  if (Math.trunc) {
    alert(Math.trunc(1.23)); // 1 (native, modern engines)
  } else {
    alert("Math.trunc is missing in this engine");
  }
}

/*
Summary:
- Use modern / bleeding-edge features — that's fine.
- For modern syntax/operators → transpiler (e.g. Babel).
- For missing built-in functions → polyfill (e.g. core-js).
- Later: webpack + babel-loader is a common setup.

Support tables:
- https://compat-table.github.io/compat-table/es6/
- https://caniuse.com/

P.S. Chrome is usually most up-to-date with language features.
*/

alert("The End of 3.6. Polyfills and transpilers.");
