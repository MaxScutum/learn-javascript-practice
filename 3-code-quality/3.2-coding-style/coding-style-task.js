// 3.2. Coding Style. Task.

// --- Task. Bad style (importance: 4) ---
/*
What’s wrong with the code style below?

function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n))
}

Problems:
1. No spaces between arguments and operators: (x,n), result=1, i<n
2. Opening braces on a new line (not Egyptian style)
3. for loop body squeezed into one line without space
4. Missing semicolons after some statements
5. Long alert string is hard to read (should be split)
6. Helper functions are usually better after the main code
*/

// Fixed style version (Egyptian braces, spaces, early return, helpers after use)

let base = +prompt("x?", "");
let exponent = +prompt("n?", "");

if (exponent <= 0) {
  alert(
    `Power ${exponent} is not supported, ` +
      `please enter an integer number greater than zero`,
  );
} else {
  alert(pow(base, exponent));
}

function pow(base, exponent) {
  let result = 1;

  for (let step = 0; step < exponent; step++) {
    result *= base;
  }

  return result;
}

alert("The End of 3.2. Coding Style. Task.");
