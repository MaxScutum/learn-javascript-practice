// 4.7. Symbol type

/*
By specification, only two primitive types may serve as object property keys:
- string
- symbol

Other types like number/boolean are auto-converted to string:
obj[1] == obj["1"] and obj[true] == obj["true"]

Now we explore symbols.
*/

alert("4.7. Symbol type");

// Symbols

/*
A symbol is a unique identifier.

Create:
let id = Symbol();
or with description:
let id = Symbol("id");
*/

{
  let id = Symbol("id");

  // Symbols are unique even with the same description.
  let id1 = Symbol("id");
  let id2 = Symbol("id");

  alert(id1 == id2); // false
  alert(id.description); // id
}

// Symbols don’t auto-convert to string

/*
This throws an error:
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

To show a symbol, use:
- id.toString()
- id.description
*/

{
  let id = Symbol("id");

  alert(id.toString()); // Symbol(id)
  alert(id.description); // id
}

// Hidden (safe) properties

/*
Symbols can be used as “hidden” property keys that other code
won’t accidentally access/overwrite.

Example:
*/

{
  let user = { name: "John" };
  let id = Symbol("id");

  user[id] = 1;

  alert(user[id]); // 1
}

/*
Benefit vs string key conflict:

If you used user.id with a string,
another script could overwrite it.
*/

{
  let user = { name: "John" };

  // Script A:
  user.id = "Our id value";

  // Script B:
  user.id = "Their id value";

  alert(user.id); // Their id value
}

// Symbols in an object literal

/*
In object literal, use computed property syntax:
[id]: value
*/

{
  let id = Symbol("id");

  let user = {
    name: "John",
    [id]: 123,
  };

  alert(user[id]); // 123
}

// Symbols are skipped by for..in and Object.keys

{
  let id = Symbol("id");

  let user = {
    name: "John",
    age: 30,
    [id]: 123,
  };

  for (let key in user) {
    alert(key); // name, age (no symbols)
  }

  alert("Direct: " + user[id]); // Direct: 123

  alert("Object.keys: " + Object.keys(user).join(", ")); // name, age
}

// Object.assign copies symbol properties too

{
  let id = Symbol("id");

  let user = {
    [id]: 123,
  };

  let clone = Object.assign({}, user);

  alert(clone[id]); // 123
}

// Global symbols: Symbol.for and Symbol.keyFor

/*
Global registry:
Symbol.for(key) returns the same symbol for the same key name.
*/

{
  let id = Symbol.for("id");
  let idAgain = Symbol.for("id");

  alert(id === idAgain); // true
}

/*
Symbol.keyFor(sym) returns the key name for a global symbol.
For non-global symbols it returns undefined.
*/

{
  let sym = Symbol.for("name");
  let sym2 = Symbol.for("id");

  alert(Symbol.keyFor(sym)); // name
  alert(Symbol.keyFor(sym2)); // id

  let localSymbol = Symbol("name");
  // alert(Symbol.keyFor(localSymbol)); // undefined
  alert(localSymbol.description); // name
}

// System symbols

/*
There are built-in system symbols accessible as Symbol.*.
For example: Symbol.toPrimitive exists.
*/

{
  alert("typeof Symbol.toPrimitive = " + typeof Symbol.toPrimitive); // symbol
}

/*
Summary:
- Symbol is a primitive unique identifier.
- Symbols can be used as “hidden” object keys.
- for..in and Object.keys ignore symbol properties.
- Object.assign copies them.
- Symbol.for creates/reuses symbols from a global registry.
- Symbol.keyFor finds the name of a global symbol.
*/

alert("The End of 4.7. Symbol type.");
