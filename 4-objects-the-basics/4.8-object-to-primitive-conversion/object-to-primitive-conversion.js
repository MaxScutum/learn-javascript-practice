// 4.8. Object to primitive conversion

/*
What happens when objects are added obj1 + obj2,
subtracted obj1 - obj2 or printed with alert(obj)?

JavaScript doesn't allow customizing operators on objects.
Objects are auto-converted to primitives, then the operation runs.

Important limitation: obj1 + obj2 can't result in another object.
*/

alert("4.8. Object to primitive conversion");

// Conversion rules

/*
No conversion to boolean: all objects are true in boolean context.
Only numeric and string conversions exist.

Numeric conversion:
- subtraction, math functions
- Date objects can be subtracted

String conversion:
- alert(obj) and similar contexts
*/

{
  let user = { name: "John" };

  alert(Boolean(user)); // true
}

// Hints

/*
Three conversion hints:

"string"
- alert(obj)
- anotherObj[obj] = 123

"number"
- Number(obj), +obj
- date1 - date2
- user1 > user2

"default"
- obj1 + obj2 (binary plus)
- user == 1

< and > use "number" hint (historical reason).
Most built-in objects treat "default" like "number".
*/

// Symbol.toPrimitive

/*
Conversion algorithm:
1. Call obj[Symbol.toPrimitive](hint) if exists
2. If hint is "string": toString, then valueOf
3. If hint is "number" or "default": valueOf, then toString

Symbol.toPrimitive handles all hints if it exists.
*/

{
  let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    },
  };

  alert(user); // hint: string -> {name: "John"}
  alert(+user); // hint: number -> 1000
  alert(user + 500); // hint: default -> 1500
}

// Default toString and valueOf

/*
By default:
- toString() returns "[object Object]"
- valueOf() returns the object itself (ignored in conversion)
*/

{
  let user = { name: "John" };

  alert(user); // [object Object]
  alert(user.valueOf() === user); // true
}

// toString / valueOf customization

/*
If no Symbol.toPrimitive:
- "string" hint: toString first, then valueOf
- "number"/"default": valueOf first, then toString
*/

{
  let user = {
    name: "John",
    money: 1000,

    toString() {
      return `{name: "${this.name}"}`;
    },

    valueOf() {
      return this.money;
    },
  };

  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // valueOf -> 1500
}

// Catch-all toString

/*
Often one toString is enough for all conversions
if Symbol.toPrimitive and valueOf are absent.
*/

{
  let user = {
    name: "John",

    toString() {
      return this.name;
    },
  };

  alert(user); // John
  alert(user + 500); // John500
}

// Further conversions

/*
Many operators convert operands again after object-to-primitive.

let obj = {
  toString() {
    return "2";
  }
};

alert(obj * 2); // 4
"2" * 2 -> 2 * 2

alert(obj + 2); // "22"
"2" + 2 -> string concatenation
*/

{
  let obj = {
    toString() {
      return "2";
    },
  };

  alert(obj * 2); // 4
  alert(obj + 2); // 22
}

/*
Summary:
- Objects convert to primitives automatically in many operations.
- Hints: "string", "number", "default".
- Algorithm: Symbol.toPrimitive -> toString/valueOf.
- Methods must return a primitive, not an object.
- Often enough to implement only toString() for logging/debugging.
*/

alert("The End of 4.8. Object to primitive conversion.");
