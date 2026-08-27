// 5.8. WeakMap and WeakSet

/*
GC keeps values in memory while they are reachable.

If an object is only referenced from Array/Map as a key/item,
it stays alive.

WeakMap/WeakSet do NOT keep object keys/values alive.
If no other references exist — GC can remove them.
*/

alert("5.8. WeakMap and WeakSet");

// Reachability reminder

{
  let john = { name: "John" };
  john = null;
  alert("john was overwritten → object can be GC'd");
}

{
  let john = { name: "John" };
  let array = [john];
  john = null;

  // still reachable via array[0]
  alert(array[0].name); // John
}

{
  let john = { name: "John" };
  let map = new Map();
  map.set(john, "...");
  john = null;

  // still reachable via Map key
  alert([...map.keys()][0].name); // John
}

// WeakMap

/*
Keys MUST be objects (not primitives).

Methods only:
- weakMap.get(key)
- weakMap.set(key, value)
- weakMap.delete(key)
- weakMap.has(key)

NO keys()/values()/entries()/size/forEach
Because GC timing is unknown → size is unknown.
*/

{
  let weakMap = new WeakMap();
  let obj = {};

  weakMap.set(obj, "ok");
  alert(weakMap.get(obj)); // ok

  try {
    weakMap.set("test", "Whoops");
  } catch (err) {
    alert("string key error: " + err.name); // TypeError
  }
}

{
  let john = { name: "John" };
  let weakMap = new WeakMap();

  weakMap.set(john, "...");
  john = null;

  // john can be removed from memory + WeakMap automatically
  alert("john is only a WeakMap key → can be GC'd");
}

// Use case 1: extra data storage

/*
Store side data for objects owned by other code.
When object dies — data dies too.
*/

{
  let visitsCountMap = new WeakMap();

  function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
  }

  let john = { name: "John" };
  countUser(john);
  countUser(john);

  alert(visitsCountMap.get(john)); // 2

  john = null;
  // no manual cleanup needed
  alert("visits data for john can disappear with GC");
}

// Use case 2: caching

{
  let cache = new WeakMap();

  function process(obj) {
    if (!cache.has(obj)) {
      let result = obj; // pretend heavy computation
      cache.set(obj, result);
    }
    return cache.get(obj);
  }

  let obj = { id: 1 };
  let result1 = process(obj);
  let result2 = process(obj);

  alert(result1 === result2); // true (from cache)

  obj = null;
  // cached entry can be GC'd automatically
  alert("cache entry for obj can disappear with GC");
}

// WeakSet

/*
Like Set, but:
- only objects
- object stays only while reachable elsewhere
- has: add / has / delete
- NO size / keys / iteration
*/

{
  let visitedSet = new WeakSet();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  visitedSet.add(john);
  visitedSet.add(pete);
  visitedSet.add(john); // again — still one entry

  alert(visitedSet.has(john)); // true
  alert(visitedSet.has(mary)); // false

  john = null;
  // john is removed from visitedSet automatically (when GC runs)
  alert("john removed from WeakSet after GC");
}

/*
Summary:
WeakMap — Map-like, object keys only, auto-cleanup
WeakSet — Set-like, objects only, auto-cleanup

Both:
- no full iteration / size
- operations on single elements only
- used as secondary storage for objects owned elsewhere
*/

alert("The End of 5.8. WeakMap and WeakSet.");
