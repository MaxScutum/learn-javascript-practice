// 5.12. JSON methods, toJSON. Task.

alert("5.12. JSON methods, toJSON. Task.");

// --- Task 1. Turn the object into JSON and back (importance: 5) ---

{
  let user = {
    name: "John Smith",
    age: 35,
  };

  let user2 = JSON.parse(JSON.stringify(user));

  alert(user2.name); // John Smith
  alert(user2.age); // 35
  alert(JSON.stringify(user2));
}

// --- Task 2. Exclude backreferences (importance: 5) ---
/*
Remove properties that reference meetup (by value, not only by name).
First call has key === "" and value === meetup — keep it.
*/

{
  let room = {
    number: 23,
  };

  let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room,
  };

  room.occupiedBy = meetup;
  meetup.self = meetup;

  alert(
    JSON.stringify(meetup, function replacer(key, value) {
      return key != "" && value == meetup ? undefined : value;
    }),
  );
  /*
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */
}

alert("The End of 5.12. JSON methods, toJSON. Task.");
