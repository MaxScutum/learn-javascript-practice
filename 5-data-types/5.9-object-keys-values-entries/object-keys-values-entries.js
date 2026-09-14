// 5.9. Object.keys, values, entries

/*
Generic iteration helpers (also on Map/Set/Array):
.keys() / .values() / .entries()

For plain objects the syntax is different:
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
*/

alert("5.9. Object.keys, values, entries");

// Object.keys / values / entries

/*
Map:          map.keys()   → iterable
Object: Object.keys(obj)   → real Array

Why Object.keys(obj), not obj.keys()?
Flexibility: object may already have its own .values() method.
*/

{
  let user = {
    name: "John",
    age: 30,
  };

  alert(Object.keys(user)); // name,age
  alert(Object.values(user)); // John,30
  alert(Object.entries(user)); // name,John,age,30
}

{
  let user = {
    name: "John",
    age: 30,
  };

  for (let value of Object.values(user)) {
    alert(value); // John, then 30
  }
}

/*
These methods ignore Symbol keys (like for..in).
For symbols: Object.getOwnPropertySymbols(obj)
For all keys: Reflect.ownKeys(obj)
*/

{
  let id = Symbol("id");
  let user = {
    name: "John",
    [id]: 123,
  };

  alert(Object.keys(user)); // name
  alert(Object.getOwnPropertySymbols(user).toString()); // Symbol(id)
  alert(Reflect.ownKeys(user).toString()); // name,Symbol(id)
}

// Transforming objects

/*
Objects don't have map/filter.
Pattern:
1) Object.entries(obj)  → array of [key, value]
2) array methods (map, filter, ...)
3) Object.fromEntries(array) → object again
*/

{
  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };

  let doublePrices = Object.fromEntries(
    Object.entries(prices).map((entry) => [entry[0], entry[1] * 2]),
  );

  alert(doublePrices.meat); // 8
  alert(JSON.stringify(doublePrices)); // {"banana":2,"orange":4,"meat":8}
}

{
  // same with destructuring in map
  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };

  let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2]),
  );

  alert(doublePrices.banana); // 2
}

/*
Summary:
- Object.keys / values / entries → real arrays
- ignore Symbol keys
- transform objects via entries → map/filter → fromEntries
*/

alert("The End of 5.9. Object.keys, values, entries.");
