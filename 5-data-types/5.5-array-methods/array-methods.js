// 5.5. Array methods

/*
Array methods in groups:
add/remove, search, transform, iterate.
*/

alert("5.5. Array methods");

// Already known: push / pop / shift / unshift

// splice — insert / remove / replace

/*
arr.splice(start[, deleteCount, elem1, ..., elemN])
Modifies the array. Returns removed elements.
Negative indexes allowed.
delete arr[i] leaves a hole — use splice instead.
*/

{
  let arr = ["I", "go", "home"];
  delete arr[1];
  alert(arr[1]); // undefined
  alert(arr.length); // 3 (hole remains)
}

{
  let arr = ["I", "study", "JavaScript"];
  arr.splice(1, 1);
  alert(arr); // I,JavaScript
}

{
  let arr = ["I", "study", "JavaScript", "right", "now"];
  arr.splice(0, 3, "Let's", "dance");
  alert(arr); // Let's,dance,right,now
}

{
  let arr = ["I", "study", "JavaScript", "right", "now"];
  let removed = arr.splice(0, 2);
  alert(removed); // I,study
}

{
  let arr = ["I", "study", "JavaScript"];
  arr.splice(2, 0, "complex", "language");
  alert(arr); // I,study,complex,language,JavaScript
}

{
  let arr = [1, 2, 5];
  arr.splice(-1, 0, 3, 4);
  alert(arr); // 1,2,3,4,5
}

// slice — copy (does NOT modify)

/*
arr.slice([start], [end]) — end not included
arr.slice() — full copy
*/

{
  let arr = ["t", "e", "s", "t"];
  alert(arr.slice(1, 3)); // e,s
  alert(arr.slice(-2)); // s,t
  alert(arr); // t,e,s,t (unchanged)
}

// concat

{
  let arr = [1, 2];
  alert(arr.concat([3, 4])); // 1,2,3,4
  alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
  alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
}

{
  let arr = [1, 2];
  let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
  };
  alert(arr.concat(arrayLike)); // 1,2,something,else
}

// forEach

{
  let text = "";
  ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    text += `${item} is at index ${index} in ${array}\n`;
  });
  alert(text);
}

// Searching: indexOf / lastIndexOf / includes

/*
indexOf uses ===
includes handles NaN correctly
*/

{
  let arr = [1, 0, false];
  alert(arr.indexOf(0)); // 1
  alert(arr.indexOf(false)); // 2
  alert(arr.includes(1)); // true
}

{
  let fruits = ["Apple", "Orange", "Apple"];
  alert(fruits.indexOf("Apple")); // 0
  alert(fruits.lastIndexOf("Apple")); // 2
}

{
  let arr = [NaN];
  alert(arr.indexOf(NaN)); // -1
  alert(arr.includes(NaN)); // true
}

// find / findIndex / findLastIndex

{
  let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" },
  ];

  let user = users.find((item) => item.id == 1);
  alert(user.name); // John

  alert(users.findIndex((u) => u.name == "John")); // 0
  alert(users.findLastIndex((u) => u.name == "John")); // 3
}

// filter

{
  let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
  ];

  let someUsers = users.filter((item) => item.id < 3);
  alert(someUsers.length); // 2
}

// map

{
  let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
  alert(lengths); // 5,7,6
}

// sort

/*
Default: as strings → [1, 15, 2]
For numbers: (a, b) => a - b
For strings: localeCompare
sort modifies in place
*/

{
  let arr = [1, 2, 15];
  arr.sort();
  alert(arr); // 1,15,2
}

{
  let arr = [1, 2, 15];
  arr.sort((a, b) => a - b);
  alert(arr); // 1,2,15
}

{
  let countries = ["Österreich", "Andorra", "Vietnam"];
  alert(countries.sort((a, b) => (a > b ? 1 : -1))); // wrong order
  alert(countries.sort((a, b) => a.localeCompare(b))); // correct
}

// reverse

{
  let arr = [1, 2, 3, 4, 5];
  arr.reverse();
  alert(arr); // 5,4,3,2,1
}

// split / join

{
  let names = "Bilbo, Gandalf, Nazgul";
  let arr = names.split(", ");
  alert(arr); // Bilbo,Gandalf,Nazgul

  alert("test".split("")); // t,e,s,t
  alert(["Bilbo", "Gandalf", "Nazgul"].join(";")); // Bilbo;Gandalf;Nazgul
}

// reduce / reduceRight

/*
Always provide initial value (safer for empty arrays).
*/

{
  let arr = [1, 2, 3, 4, 5];
  let result = arr.reduce((sum, current) => sum + current, 0);
  alert(result); // 15
}

// Array.isArray

{
  alert(typeof {}); // object
  alert(typeof []); // object
  alert(Array.isArray({})); // false
  alert(Array.isArray([])); // true
}

// thisArg (rare)

{
  let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    },
  };

  let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];
  let soldiers = users.filter(army.canJoin, army);

  alert(soldiers.length); // 2
  alert(soldiers[0].age); // 20
  alert(soldiers[1].age); // 23
}

/*
Also useful later:
some / every, fill, copyWithin, flat / flatMap

Modify in place: sort, reverse, splice
*/

alert("The End of 5.5. Array methods.");
