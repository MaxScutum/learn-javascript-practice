// 2.10. Conditional branching: if, '?'. Task.

/*
Using the if..else construct, write the code which asks: "What is the 'official' name of JavaScript?"
If the visitor enters "ECMAScript", then output "Right!", otherwise – output: "You don't know? 'ECMAScript'!"
*/

let value = prompt("What's the 'official' name of JavaScript?", "");
if (value === "ECMAScript") {
  alert("Right!");
} else {
  alert("You don't know? 'ECMAScript'!");
}

alert("The End of 2.10. Conditional branching: if, '?'. Task.");
