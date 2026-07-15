// 4.1. Objects. Task.

// --- Task 1. Hello, object (importance: 5) ---
/*
Write each step on a separate line:

1. Create an empty object user.
2. Add property name with value John.
3. Add property surname with value Smith.
4. Change name to Pete.
5. Delete property name.
*/

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

alert(user.name); // undefined
alert(user.surname); // Smith

// --- Task 2. Check for emptiness (importance: 5) ---
/*
Write function isEmpty(obj) that returns true
if the object has no properties, otherwise false.

let schedule = {};
alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false
*/

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

// --- Task 3. Constant objects? (importance: 5) ---
/*
Can we change an object declared with const?

const user = {
  name: "John"
};

user.name = "Pete";

Answer: YES.
const protects the variable user, not the object contents.
*/

{
  const user = {
    name: "John",
  };

  user.name = "Pete";
  alert(user.name); // Pete
  alert("Answer: yes, object declared with const can be changed");
}

// --- Task 4. Sum object properties (importance: 5) ---
/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

Write code to sum all salaries.
Result should be 390.
If salaries is empty, result should be 0.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

// empty object case
let emptySalaries = {};
let emptySum = 0;

for (let key in emptySalaries) {
  emptySum += emptySalaries[key];
}

alert(emptySum); // 0

// --- Task 5. Multiply numeric properties by 2 (importance: 3) ---
/*
Create function multiplyNumeric(obj)
that multiplies all numeric properties by 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

Use typeof to check that the property value is a number.
The function should modify the object directly.
*/

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

alert(menu.width); // 400
alert(menu.height); // 600
alert(menu.title); // My menu

alert("The End of 4.1. Objects. Task.");
