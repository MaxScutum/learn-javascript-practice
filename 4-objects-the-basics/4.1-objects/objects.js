// 4.1. Objects.

/*
There are 8 data types in JavaScript.
7 are primitive. Objects store collections of values.
A property is a "key: value" pair.
*/

// Object creation

/*
let user = new Object(); // constructor syntax
let user = {};           // literal syntax (usually used)
*/

let emptyUser = {};
alert("Empty object created: " + emptyUser);

// Literals and properties

/*
let user = {
  name: "John",
  age: 30
};

alert(user.name);
alert(user.age);

user.isAdmin = true;
delete user.age;
*/

let user = {
  name: "John",
  age: 30,
};

alert(user.name); // John
alert(user.age); // 30

user.isAdmin = true;
alert(user.isAdmin); // true

delete user.age;
alert(user.age); // undefined

// Multi-word property names need quotes

/*
let user = {
  name: "John",
  age: 30,
  "likes birds": true
};
*/

{
  let person = {
    name: "John",
    age: 30,
    "likes birds": true, // trailing comma is ok
  };

  alert(person["likes birds"]); // true
}

// const object can be changed

/*
const user = {
  name: "John"
};

user.name = "Pete";
alert(user.name); // Pete
*/

{
  const fixedUser = {
    name: "John",
  };

  fixedUser.name = "Pete";
  alert(fixedUser.name); // Pete
  // fixedUser = {}; // Error: Assignment to constant variable
}

// Square brackets

/*
let user = {};
user["likes birds"] = true;
alert(user["likes birds"]);
delete user["likes birds"];

let key = "likes birds";
user[key] = true;
*/

{
  let person = {};

  person["likes birds"] = true;
  alert(person["likes birds"]); // true

  delete person["likes birds"];
  alert(person["likes birds"]); // undefined

  let key = "likes birds";
  person[key] = true;
  alert(person[key]); // true
}

// Access by variable

/*
let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");
alert(user[key]);

alert(user.key); // undefined — dot notation does not use a variable
*/

{
  let person = {
    name: "John",
    age: 30,
  };

  let key = "name"; // instead of prompt
  alert(person[key]); // John
  alert(person.key); // undefined
}

// Computed properties

/*
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5,
};

alert(bag.apple); // 5 if fruit="apple"

let bag2 = {
  [fruit + "Computers"]: 5
};
*/

{
  let fruit = "apple";

  let bag = {
    [fruit]: 5,
  };

  alert(bag.apple); // 5

  let bagWithExpression = {
    [fruit + "Computers"]: 5,
  };

  alert(bagWithExpression.appleComputers); // 5
}

// Property value shorthand

/*
function makeUser(name, age) {
  return {
    name: name,
    age: age
  };
}

function makeUser(name, age) {
  return {
    name,
    age
  };
}
*/

function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
  };
}

{
  let person = makeUser("John", 30);
  alert(person.name); // John
  alert(person.age); // 30
}

// Property name restrictions

/*
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert(obj.for + obj.let + obj.return); // 6

let obj = {
  0: "Test" // same as "0": "Test"
};

alert(obj["0"]);
alert(obj[0]);
*/

{
  let reservedWordsObj = {
    for: 1,
    let: 2,
    return: 3,
  };

  alert(reservedWordsObj.for + reservedWordsObj.let + reservedWordsObj.return); // 6

  let numberKeyObj = {
    0: "Test",
  };

  alert(numberKeyObj["0"]); // Test
  alert(numberKeyObj[0]); // Test
}

// Property existence: "in"

/*
let user = {};
alert(user.noSuchProperty === undefined); // true

let user = { name: "John", age: 30 };
alert("age" in user); // true
alert("blabla" in user); // false

let obj = {
  test: undefined
};

alert(obj.test); // undefined
alert("test" in obj); // true
*/

{
  let person = {};
  alert(person.noSuchProperty === undefined); // true

  person = { name: "John", age: 30 };
  alert("age" in person); // true
  alert("blabla" in person); // false

  let key = "age";
  alert(key in person); // true

  let objWithUndefined = {
    test: undefined,
  };

  alert(objWithUndefined.test); // undefined
  alert("test" in objWithUndefined); // true
}

// for..in loop

/*
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  alert(key);
  alert(user[key]);
}
*/

{
  let person = {
    name: "John",
    age: 30,
    isAdmin: true,
  };

  for (let key in person) {
    alert(key); // name, age, isAdmin
    alert(person[key]); // John, 30, true
  }
}

// Property order

/*
Integer-like keys are sorted ascending.
Other keys keep creation order.

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
*/

{
  let codes = {
    49: "Germany",
    41: "Switzerland",
    44: "Great Britain",
    1: "USA",
  };

  let codesOrder = "";
  for (let code in codes) {
    codesOrder += code + " ";
  }
  alert("Integer keys order: " + codesOrder); // 1 41 44 49
}

/*
Fix: make keys non-integer with "+"

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA"
};

for (let code in codes) {
  alert(+code); // 49, 41, 44, 1
}
*/

{
  let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "USA",
  };

  let codesOrder = "";
  for (let code in codes) {
    codesOrder += +code + " ";
  }
  alert("Creation order with +prefix: " + codesOrder); // 49 41 44 1
}

{
  let person = {
    name: "John",
    surname: "Smith",
  };
  person.age = 25;

  let propsOrder = "";
  for (let prop in person) {
    propsOrder += prop + " ";
  }
  alert("Non-integer keys order: " + propsOrder); // name surname age
}

/*
Summary:
- Objects store key-value properties
- Access: obj.key or obj["key"]
- delete obj.key
- "key" in obj
- for (let key in obj)
- Prefer dot notation for simple known keys
- Use square brackets for computed / multi-word keys
*/

alert("The End of 4.1. Objects.");
