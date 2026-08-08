// 5.5. Array methods. Task.

alert("5.5. Array methods. Task.");

// --- Task 1. camelize (importance: 5) ---
/*
camelize("background-color") == "backgroundColor"
Hint: split → transform → join
*/

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join("");
}

{
  alert(camelize("background-color")); // backgroundColor
  alert(camelize("list-style-image")); // listStyleImage
  alert(camelize("-webkit-transition")); // WebkitTransition
}

// --- Task 2. Filter range (importance: 4) ---

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

{
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);

  alert(filtered); // 3,1
  alert(arr); // 5,3,8,1
}

// --- Task 3. Filter range "in place" (importance: 4) ---

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

{
  let arr = [5, 3, 8, 1];
  filterRangeInPlace(arr, 1, 4);
  alert(arr); // 3,1
}

// --- Task 4. Sort in decreasing order (importance: 4) ---

{
  let arr = [5, 2, 1, -10, 8];
  arr.sort((a, b) => b - a);
  alert(arr); // 8,5,2,1,-10
}

// --- Task 5. Copy and sort array (importance: 5) ---

function copySorted(arr) {
  return arr.slice().sort();
}

{
  let arr = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr);

  alert(sorted); // CSS,HTML,JavaScript
  alert(arr); // HTML,JavaScript,CSS
}

// --- Task 6. Create an extendable calculator (importance: 5) ---

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" ");
    let a = +split[0];
    let op = split[1];
    let b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

{
  let calc = new Calculator();
  alert(calc.calculate("3 + 7")); // 10

  let powerCalc = new Calculator();
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);

  alert(powerCalc.calculate("2 ** 3")); // 8
}

// --- Task 7. Map to names (importance: 5) ---

{
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let users = [john, pete, mary];
  let names = users.map((user) => user.name);

  alert(names); // John,Pete,Mary
}

// --- Task 8. Map to objects (importance: 5) ---
/*
Catch with => : return object in parentheses:
user => ({ ... })
*/

{
  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };

  let users = [john, pete, mary];

  let usersMapped = users.map((user) => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  }));

  alert(usersMapped[0].id); // 1
  alert(usersMapped[0].fullName); // John Smith
}

// --- Task 9. Sort users by age (importance: 5) ---

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

{
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let arr = [pete, john, mary];
  sortByAge(arr);

  alert(arr[0].name); // John
  alert(arr[1].name); // Mary
  alert(arr[2].name); // Pete
}

// --- Task 10. Shuffle an array (importance: 3) ---
/*
Fisher–Yates for equal probability.
*/

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

{
  let arr = [1, 2, 3];
  shuffle(arr);
  alert(arr);
  shuffle(arr);
  alert(arr);
  shuffle(arr);
  alert(arr);
}

// --- Task 11. Get average age (importance: 4) ---

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

{
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };

  let arr = [john, pete, mary];
  alert(getAverageAge(arr)); // 28
}

// --- Task 12. Filter unique array members (importance: 4) ---

function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

{
  let strings = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
  ];

  alert(unique(strings)); // Hare,Krishna,:-O
}

// --- Task 13. Create keyed object from array (importance: 4) ---
/*
Use reduce. id is unique.
*/

function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

{
  let users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
  ];

  let usersById = groupById(users);
  alert(usersById.john.name); // John Smith
  alert(usersById.ann.age); // 24
}

alert("The End of 5.5. Array methods. Task.");
