// 5.10. Destructuring assignment

/*
Unpack arrays/objects into variables.
Array itself is NOT modified — just a shorter way to copy items.
*/

alert("5.10. Destructuring assignment");

// Array destructuring

{
  let arr = ["John", "Smith"];
  let [firstName, surname] = arr;

  alert(firstName); // John
  alert(surname); // Smith
}

{
  let [firstName, surname] = "John Smith".split(" ");
  alert(firstName); // John
  alert(surname); // Smith
}

// Ignore elements with commas

{
  let [firstName, , title] = [
    "Julius",
    "Caesar",
    "Consul",
    "of the Roman Republic",
  ];

  alert(title); // Consul
}

// Works with any iterable

{
  let [a, b, c] = "abc";
  alert(a + b + c); // abc

  let [one, two, three] = new Set([1, 2, 3]);
  alert(one + "," + two + "," + three); // 1,2,3
}

// Assign to object properties

{
  let user = {};
  [user.name, user.surname] = "John Smith".split(" ");

  alert(user.name); // John
  alert(user.surname); // Smith
}

// Looping with entries()

{
  let user = {
    name: "John",
    age: 30,
  };

  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`);
  }
}

{
  let user = new Map();
  user.set("name", "John");
  user.set("age", "30");

  for (let [key, value] of user) {
    alert(`${key}:${value}`);
  }
}

// Swap variables

{
  let guest = "Jane";
  let admin = "Pete";

  [guest, admin] = [admin, guest];
  alert(`${guest} ${admin}`); // Pete Jane
}

// The rest '...'

{
  let [name1, name2, ...rest] = [
    "Julius",
    "Caesar",
    "Consul",
    "of the Roman Republic",
  ];

  alert(name1); // Julius
  alert(name2); // Caesar
  alert(rest[0]); // Consul
  alert(rest.length); // 2
}

// Default values

{
  let [firstName, surname] = [];
  alert(firstName); // undefined
  alert(surname); // undefined
}

{
  let [name = "Guest", surname = "Anonymous"] = ["Julius"];
  alert(name); // Julius
  alert(surname); // Anonymous
}

// Object destructuring

{
  let options = {
    title: "Menu",
    width: 100,
    height: 200,
  };

  let { title, width, height } = options;

  alert(title); // Menu
  alert(width); // 100
  alert(height); // 200
}

// Rename with colon: { prop: varName }

{
  let options = {
    title: "Menu",
    width: 100,
    height: 200,
  };

  let { width: w, height: h, title } = options;

  alert(title); // Menu
  alert(w); // 100
  alert(h); // 200
}

// Defaults for objects

{
  let options = {
    title: "Menu",
  };

  let { width = 100, height = 200, title } = options;

  alert(title); // Menu
  alert(width); // 100
  alert(height); // 200
}

// Colon + default

{
  let options = {
    title: "Menu",
  };

  let { width: w = 100, height: h = 200, title } = options;

  alert(title); // Menu
  alert(w); // 100
  alert(h); // 200
}

// Rest pattern for objects

{
  let options = {
    title: "Menu",
    height: 200,
    width: 100,
  };

  let { title, ...rest } = options;

  alert(title); // Menu
  alert(rest.height); // 200
  alert(rest.width); // 100
}

// Gotcha: without let, wrap in (...)

{
  let title, width, height;

  ({ title, width, height } = {
    title: "Menu",
    width: 200,
    height: 100,
  });

  alert(title); // Menu
}

// Nested destructuring

{
  let options = {
    size: {
      width: 100,
      height: 200,
    },
    items: ["Cake", "Donut"],
    extra: true,
  };

  let {
    size: { width, height },
    items: [item1, item2],
    title = "Menu",
  } = options;

  alert(title); // Menu
  alert(width); // 100
  alert(height); // 200
  alert(item1); // Cake
  alert(item2); // Donut
}

// Smart function parameters

{
  let options = {
    title: "My menu",
    items: ["Item1", "Item2"],
  };

  function showMenu({
    title = "Untitled",
    width = 200,
    height = 100,
    items = [],
  } = {}) {
    alert(`${title} ${width} ${height}`);
    alert(items);
  }

  showMenu(options); // My menu 200 100
  showMenu(); // Untitled 200 100  (default {} )
}

{
  let options = {
    title: "My menu",
    items: ["Item1", "Item2"],
  };

  function showMenu({
    title = "Untitled",
    width: w = 100,
    height: h = 200,
    items: [item1, item2],
  } = {}) {
    alert(`${title} ${w} ${h}`);
    alert(item1);
    alert(item2);
  }

  showMenu(options);
}

/*
Summary:
- arrays: [a, b] = arr, skip with ,, rest ..., defaults =
- objects: {a, b} = obj, rename a: x, rest ..., defaults
- without let: ({a, b} = obj)
- nested patterns + smart function params
*/

alert("The End of 5.10. Destructuring assignment.");
