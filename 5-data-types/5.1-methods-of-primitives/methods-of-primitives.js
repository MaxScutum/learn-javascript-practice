// 5.1. Methods of primitives

/*
JavaScript allows us to work with primitives (strings, numbers, etc.)
as if they were objects. They also provide methods to call as such.

But primitives are not objects.
*/

alert("5.1. Methods of primitives");

// Primitives vs objects

/*
A primitive:
- is a value of a primitive type
- primitive types: string, number, bigint, boolean, symbol, null, undefined

An object:
- can store multiple values as properties
- can be created with {} (and other object kinds exist)
- can store functions as methods
*/

{
  let john = {
    name: "John",
    sayHi: function () {
      alert("Hi buddy!");
    },
  };

  john.sayHi(); // Hi buddy!
}

// A primitive as an object (the wrapper trick)

/*
Paradox:
- we want to call methods on primitives
- but primitives must stay lightweight

Solution:
When you access a property/method of a primitive,
the engine creates a temporary “object wrapper” (String/Number/Boolean/…),
calls the method, then destroys the wrapper.
*/

{
  let str = "Hello";
  alert(str.toUpperCase()); // HELLO
}

{
  let n = 1.23456;
  alert(n.toFixed(2)); // 1.23
}

// Constructors String/Number/Boolean are for internal use only

/*
new Number(0) creates an object, which behaves differently:
typeof new Number(0) === "object"
Objects are always truthy in if.
*/

{
  alert(typeof 0); // number
  alert(typeof new Number(0)); // object
}

{
  let zero = new Number(0);

  if (zero) {
    alert("zero is truthy because it's an object");
  }
}

// Using without new (conversion is fine)

{
  let num = Number("123");
  alert(num); // 123
  alert(typeof num); // number
}

// null/undefined have no methods

/*
null and undefined have no wrapper objects.
Accessing property gives an error.
We'll show it using try/catch, so the script doesn't crash.
*/

{
  try {
    // This would throw:
    alert(null.test);
  } catch (e) {
    alert("null.test error: " + e.name);
  }
}

// Summary

/*
- Primitives (except null/undefined) have helpful methods.
- Formally, engines use temporary wrappers.
- In practice, JS engines optimize this heavily.
*/

alert("The End of 5.1. Methods of primitives.");
