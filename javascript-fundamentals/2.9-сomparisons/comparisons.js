// 2.9. Comparisons

// Boolean is the result

alert(2 > 1); // true (correct)
alert(2 == 1); // false (wrong)
alert(2 != 1); // true (correct)

let result = 5 > 4; // assign the result of the comparison
alert(result); // true

// String comparison

alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true

// Comparison of different types

alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1

alert(true == 1); // true
alert(false == 0); // true

let a = 0;
alert(Boolean(a)); // false

let b = "0";
alert(Boolean(b)); // true

alert(a == b); // true!

// Strict equality

alert(0 == false); // true
alert("" == false); // true
alert(0 === false); // false, because the types are different

// Comparison with null and undefined

alert(null === undefined); // false
alert(null == undefined); // true
alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true
alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)

/*
Summary
- Comparison operators return a boolean value.
- Strings are compared letter-by-letter in the “dictionary” order.
- When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
- The values null and undefined are equal == to themselves and each other, but do not equal any other value.
- Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
*/

alert("The End of 2.9. Comparisons.");
