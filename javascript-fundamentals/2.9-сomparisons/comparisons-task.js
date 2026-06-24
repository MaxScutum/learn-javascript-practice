// 2.9. Comparisons. Task.

alert(5 > 4); // true
alert("apple" > "pineapple"); // false
alert("2" > "12"); // true
alert(undefined == null); // true
alert(undefined === null); // false
alert(null == "\n0\n"); // false
alert(null === +"\n0\n"); // false

/*

Some of the reasons:

1.Obviously, true.
2. Dictionary comparison, hence false. "a" is smaller than "p".
3. Again, dictionary comparison, first char "2" is greater than the first char "1".
4. Values null and undefined equal each other only.
5. Strict equality is strict. Different types from both sides lead to false.
6. Similar to (4), null only equals undefined.
7. Strict equality of different types.

*/

alert("The End of 2.9. Comparisons. Task.");
