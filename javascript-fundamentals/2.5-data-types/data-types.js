// no error
let message = "hello";
message = 123456;
alert(message); // Dynamically typed

let n = 123;
n = 12.345;
alert(n); // The number type represents both integer and floating point numbers.

alert(1 / 0); // Infinity
alert(Infinity); // Infinity
alert(-Infinity); // -Infinity

alert("not a number" / 2); // NaN, such division is erroneous
alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("not a number" / 2 - 1); // NaN
alert(NaN - NaN); // NaN
alert(NaN + 2); // NaN

alert(9007199254740991 + 1); // 9007199254740992
alert(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
alert(bigInt); // BigInt

// String
const str = "Hello";
alert(str); // Hello

const str2 = 'Single quotes are ok too';
alert(str2); // Single quotes are ok too

const phrase = `can embed another ${str}`;
alert(phrase); // can embed another Hello

const nameUser = "John";
// embed a variable
alert(`Hello, ${nameUser}!`); // Hello, John!
// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3

// Boolean (logical type)
let nameFieldChecked = true; // yes, name field is checked
alert(nameFieldChecked); // true

let ageFieldChecked = false; // no, age field is not checked
alert(ageFieldChecked); // false

let isGreater = 4 > 1;
alert(isGreater); // true (the comparison result is "yes")

// The “null” value
let age = 10;
age = null;
alert(age); // null

// The “undefined” value
let age2 = 10;
age2 = undefined;
alert(age2); // undefined

// Objects and Symbols
const symbolValue2 = Symbol("id");
alert(symbolValue2.description); // Symbol(id)

// The typeof operator
typeof undefined;
alert(typeof undefined); // "undefined"
typeof 0;
alert(typeof 0); // "number"
typeof 10n;
alert(typeof 10n); // "bigint"
typeof true;
alert(typeof true); // "boolean"
typeof "foo";
alert(typeof "foo"); // "string"
typeof Symbol("id");
alert(typeof Symbol("id")); // "symbol"
typeof Math;
alert(typeof Math); // "object" (1)
typeof null;
alert(typeof null); // "object" (2)
typeof alert;
alert(typeof alert); // "function" (3)

const age3 = 20; // number
const name2 = "John"; // string
const isStudent = true; // boolean
const numbers = [1, 2, 3, 4, 5]; // object
const cars = ["Toyota", "Ford", "Chevrolet"]; // object
const undefinedValue = undefined; // undefined
const nullValue = null; // null
const symbolValue = Symbol("symbol"); // symbol
const bigintValue = 123456789012345678901234567890n; // bigint
const person = { name: "John", age: 20 }; // object
