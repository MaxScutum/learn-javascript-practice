// 2.6. Interaction: alert, prompt, confirm

/*
Browser UI helpers to interact with the user.
All are modal: pause the script until the window is closed.
*/

alert("2.6. Interaction: alert, prompt, confirm");

// alert

/*
Shows a message and waits for OK.
Visitor can't use the page until then.
*/

{
  alert("Hello");
}

// prompt

/*
result = prompt(title, [default])

Returns:
- entered text, if OK
- null, if Cancel / Esc

Always pass the 2nd argument (even "") for IE compatibility.
*/

{
  let age = prompt("How old are you?", 100);
  alert(`You are ${age} years old!`);
}

{
  let test = prompt("Test", ""); // second arg for IE
  alert(test);
}

// confirm

/*
result = confirm(question)

Returns:
- true  → OK
- false → Cancel / Esc
*/

{
  let isBoss = confirm("Are you the boss?");
  alert(isBoss);
}

/*
Summary:
alert(message)              → show message
prompt(title, default)      → text | null
confirm(question)           → true | false

Limitations:
- window position/look controlled by the browser
- can't customize the modal UI
*/

alert("The End of 2.6. Interaction: alert, prompt, confirm.");
