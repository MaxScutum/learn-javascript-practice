// 5.7. Map and Set

/*
Objects — keyed collections
Arrays — ordered collections
Map / Set — when that's not enough
*/

alert("5.7. Map and Set");

// Map

/*
Map = key/value collection, keys of ANY type.

new Map()
map.set(key, value)  // returns map → chaining
map.get(key)
map.has(key)
map.delete(key)
map.clear()
map.size

Use map methods, not map[key].
Keys compared with SameValueZero (≈ ===, but NaN equals NaN).
*/

{
  let map = new Map();

  map.set("1", "str1");
  map.set(1, "num1");
  map.set(true, "bool1");

  alert(map.get(1)); // num1
  alert(map.get("1")); // str1
  alert(map.size); // 3
}

// Objects as keys

{
  let john = { name: "John" };
  let visitsCountMap = new Map();

  visitsCountMap.set(john, 123);
  alert(visitsCountMap.get(john)); // 123
}

{
  // Object can't really use objects as keys
  let john = { name: "John" };
  let ben = { name: "Ben" };
  let visitsCountObj = {};

  visitsCountObj[ben] = 234;
  visitsCountObj[john] = 123;

  alert(visitsCountObj["[object Object]"]); // 123 (overwritten)
}

// Chaining

{
  let map = new Map().set("1", "str1").set(1, "num1").set(true, "bool1");

  alert(map.size); // 3
}

// Iteration over Map

/*
map.keys() / map.values() / map.entries()
for..of uses entries by default
Insertion order is preserved
*/

{
  let recipeMap = new Map([
    ["cucumber", 500],
    ["tomatoes", 350],
    ["onion", 50],
  ]);

  let keys = "";
  for (let vegetable of recipeMap.keys()) {
    keys += vegetable + " ";
  }
  alert(keys); // cucumber tomatoes onion

  let values = "";
  for (let amount of recipeMap.values()) {
    values += amount + " ";
  }
  alert(values); // 500 350 50

  let entries = "";
  for (let entry of recipeMap) {
    entries += entry + " | ";
  }
  alert(entries);

  recipeMap.forEach((value, key) => {
    alert(`${key}: ${value}`);
  });
}

// Object.entries → Map, Object.fromEntries → Object

{
  let obj = {
    name: "John",
    age: 30,
  };

  let map = new Map(Object.entries(obj));
  alert(map.get("name")); // John
}

{
  let map = new Map();
  map.set("banana", 1);
  map.set("orange", 2);
  map.set("meat", 4);

  let obj = Object.fromEntries(map);
  alert(obj.orange); // 2
}

// Set

/*
Set = collection of UNIQUE values (no keys).

new Set([iterable])
set.add(value)
set.delete(value)
set.has(value)
set.clear()
set.size
*/

{
  let set = new Set();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  set.add(john);
  set.add(pete);
  set.add(mary);
  set.add(john);
  set.add(mary);

  alert(set.size); // 3

  let names = "";
  for (let user of set) {
    names += user.name + " ";
  }
  alert(names); // John Pete Mary
}

// Iteration over Set

{
  let set = new Set(["oranges", "apples", "bananas"]);

  let text = "";
  for (let value of set) {
    text += value + " ";
  }
  alert(text);

  // forEach(value, valueAgain, set) — value twice (Map compatibility)
  set.forEach((value) => {
    alert(value);
  });
}

/*
Summary:
Map — keyed values, any key type, size, insertion order
Set — unique values, fast uniqueness checks
Object.entries / Object.fromEntries for Object ↔ Map
*/

alert("The End of 5.7. Map and Set.");
