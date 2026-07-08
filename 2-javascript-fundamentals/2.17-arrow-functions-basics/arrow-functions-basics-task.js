// 2.17. Arrow functions, the basics. Task.

// --- Rewrite with arrow functions (importance: 5) ---
/*
Replace Function Expressions with arrow functions:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution."),
);

alert("The End of 2.17. Arrow functions, the basics. Task.");
