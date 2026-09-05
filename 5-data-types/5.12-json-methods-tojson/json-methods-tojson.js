// 5.12. JSON methods, toJSON

/*
JSON — format to represent values/objects as strings.
JSON.stringify(value) → string
JSON.parse(str) → value
*/

alert("5.12. JSON methods, toJSON");

// Why not hand-made toString?

{
  let user = {
    name: "John",
    age: 30,
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    },
  };

  alert(user); // works, but hard to maintain for nested objects
}

// JSON.stringify

{
  let student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    spouse: null,
  };

  let json = JSON.stringify(student);

  alert(typeof json); // string
  alert(json);
}

/*
JSON differences from object literal:
- double quotes only
- property names must be quoted

Supported: objects, arrays, string, number, boolean, null
Skipped: methods, Symbol keys/values, undefined
*/

{
  alert(JSON.stringify(1)); // 1
  alert(JSON.stringify("test")); // "test"
  alert(JSON.stringify(true)); // true
  alert(JSON.stringify([1, 2, 3])); // [1,2,3]
}

{
  let user = {
    sayHi() {
      alert("Hello");
    },
    [Symbol("id")]: 123,
    something: undefined,
  };

  alert(JSON.stringify(user)); // {}
}

{
  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"],
    },
  };

  alert(JSON.stringify(meetup));
}

// Circular references → Error

{
  let room = { number: 23 };
  let meetup = {
    title: "Conference",
    participants: ["john", "ann"],
  };

  meetup.place = room;
  room.occupiedBy = meetup;

  try {
    JSON.stringify(meetup);
  } catch (err) {
    alert(err.name); // TypeError
  }
}

// replacer

/*
JSON.stringify(value[, replacer, space])
replacer: array of keys OR function(key, value)
*/

{
  let room = { number: 23 };
  let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room,
  };

  room.occupiedBy = meetup;

  alert(JSON.stringify(meetup, ["title", "participants"]));
  // name missing inside participants → empty objects

  alert(
    JSON.stringify(meetup, [
      "title",
      "participants",
      "place",
      "name",
      "number",
    ]),
  );
}

{
  let room = { number: 23 };
  let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room,
  };

  room.occupiedBy = meetup;

  alert(
    JSON.stringify(meetup, function replacer(key, value) {
      return key == "occupiedBy" ? undefined : value;
    }),
  );
}

// space — pretty formatting

{
  let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true,
    },
  };

  alert(JSON.stringify(user, null, 2));
}

// Custom toJSON

{
  let room = {
    number: 23,
    toJSON() {
      return this.number;
    },
  };

  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room,
  };

  alert(JSON.stringify(room)); // 23
  alert(JSON.stringify(meetup));
  // date uses built-in Date.toJSON → ISO string
  // room uses custom toJSON → 23
}

// JSON.parse

/*
JSON.parse(str[, reviver])
*/

{
  let numbers = "[0, 1, 2, 3]";
  numbers = JSON.parse(numbers);
  alert(numbers[1]); // 1
}

{
  let userData =
    '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
  let user = JSON.parse(userData);
  alert(user.friends[1]); // 1
}

// reviver — restore Date etc.

{
  let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

  let meetup = JSON.parse(str, function (key, value) {
    if (key == "date") return new Date(value);
    return value;
  });

  alert(meetup.date.getDate()); // works
}

{
  let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;

  schedule = JSON.parse(schedule, function (key, value) {
    if (key == "date") return new Date(value);
    return value;
  });

  alert(schedule.meetups[1].date.getDate()); // works
}

/*
Summary:
- stringify / parse for serialize ↔ deserialize
- skips methods, Symbol, undefined
- no circular refs (unless filtered by replacer)
- toJSON customizes encoding
- reviver customizes decoding
*/

alert("The End of 5.12. JSON methods, toJSON.");
