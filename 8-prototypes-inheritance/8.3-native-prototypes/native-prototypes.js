// 8.3. Native prototypes

/*
Built-in constructors store methods in .prototype.
Objects keep data; methods come from the prototype chain.
*/

alert("8.3. Native prototypes");

// Object.prototype

/*
{} === new Object()
[[Prototype]] → Object.prototype (toString, …)
Object.prototype.[[Prototype]] → null
*/

{
  let obj = {};
  alert(obj); // [object Object] ← Object.prototype.toString

  alert(obj.__proto__ === Object.prototype); // true
  alert(obj.toString === Object.prototype.toString); // true
  alert(Object.prototype.__proto__); // null
}

// Other built-ins: Array, Function, Date…

/*
arr → Array.prototype → Object.prototype → null
Array.prototype.toString overrides Object's (closer in chain)
*/

{
  let arr = [1, 2, 3];

  alert(arr.__proto__ === Array.prototype); // true
  alert(arr.__proto__.__proto__ === Object.prototype); // true
  alert(arr.__proto__.__proto__.__proto__); // null

  alert(arr); // 1,2,3 ← Array.prototype.toString
}

{
  function f() {}

  alert(f.__proto__ === Function.prototype); // true
  alert(f.__proto__.__proto__ === Object.prototype); // true
}

// Primitives

/*
string/number/boolean → temporary wrapper (String/Number/Boolean)
methods from String.prototype etc.
null / undefined — no wrappers, no methods
*/

{
  alert("hi".toUpperCase()); // HI (via String.prototype)

  try {
    null.toString();
  } catch (err) {
    alert("null: " + err.message);
  }
}

// Changing native prototypes — usually BAD

/*
Conflict risk if two libs add the same method.
OK only for polyfills (spec method missing in old engines).
*/

{
  String.prototype.show = function () {
    alert(this);
  };

  "BOOM!".show(); // BOOM!

  delete String.prototype.show; // clean up demo
}

{
  // polyfill example
  if (!String.prototype.repeat) {
    String.prototype.repeat = function (n) {
      return new Array(n + 1).join(this);
    };
  }

  alert("La".repeat(3)); // LaLaLa
}

// Borrowing from prototypes

/*
Take a native method and use it on array-like objects.
*/

{
  let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
  };

  obj.join = Array.prototype.join;

  alert(obj.join(",")); // Hello,world!
}

/*
Alternative: obj.__proto__ = Array.prototype
— but only if obj doesn't already inherit from something else
(one prototype only). Borrowing is more flexible.
*/

/*
Summary:
- methods live in built-in prototypes
- chain usually ends at Object.prototype → null
- primitives use wrapper prototypes (not null/undefined)
- don't modify natives except polyfills
- can borrow Array/Object methods for array-likes
*/

alert("The End of 8.3. Native prototypes");
