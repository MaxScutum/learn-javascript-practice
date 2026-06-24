// 2.11. Logical operators

// || (OR)

alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

// OR returns the first truthy value
alert(undefined || 0 || 5); // 5
alert(null || "no value"); // "no value"

let a = 1;
let b = 0;
let result = a || b;
alert(result); // 1

let aA = true;
let bB = false;
let resultA = aA || bB;
alert(resultA); // true
