// 5.8. WeakMap and WeakSet. Task.

alert("5.8. WeakMap and WeakSet. Task.");

// --- Task 1. Store "unread" flags (importance: 5) ---
/*
Store "was it read?" for message objects managed by other code.
Don't modify message objects.
When a message is removed / GC'd — info must disappear too.

Answer: WeakSet
- only need yes/no
- object as value
- auto-cleanup when message is gone
*/

{
  let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" },
  ];

  let readMessages = new WeakSet();

  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
  readMessages.add(messages[0]); // again — still one entry

  alert("Read message 0? " + readMessages.has(messages[0])); // true
  alert("Read message 2? " + readMessages.has(messages[2])); // false

  messages.shift();
  // messages[0] was removed from array → can be GC'd →
  // also disappears from WeakSet automatically
  alert("First message removed; WeakSet cleans it up with GC");
}

// --- Task 2. Store read dates (importance: 5) ---
/*
Now store "when was it read?" (Date), not just yes/no.
Must disappear when message is GC'd.
Don't modify message objects.

Answer: WeakMap
- message object = key
- Date = value
- auto-cleanup
*/

{
  let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" },
  ];

  let readMap = new WeakMap();

  readMap.set(messages[0], new Date(2019, 1, 1));

  alert(readMap.get(messages[0])); // date object
  alert("Message 1 has date? " + readMap.has(messages[1])); // false
}

alert("The End of 5.8. WeakMap and WeakSet. Task.");
