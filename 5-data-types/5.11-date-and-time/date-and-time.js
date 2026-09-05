// 5.11. Date and time

/*
Date stores date + time and methods to manage them.
Always both date and time together.
*/

alert("5.11. Date and time");

// Creation

/*
new Date()                         — now
new Date(ms)                       — timestamp from 01.01.1970 UTC
new Date(datestring)               — parse string
new Date(y, m, d, h, min, s, ms)   — local time
  month: 0..11
  only year+month required
*/

{
  let now = new Date();
  alert(now);
}

{
  let Jan01_1970 = new Date(0);
  alert(Jan01_1970);

  let Jan02_1970 = new Date(24 * 3600 * 1000);
  alert(Jan02_1970);

  let Dec31_1969 = new Date(-24 * 3600 * 1000);
  alert(Dec31_1969);
}

{
  let date = new Date("2017-01-26");
  alert(date);
}

{
  let date = new Date(2011, 0, 1, 2, 3, 4, 567);
  alert(date); // 1 Jan 2011, 02:03:04.567
}

// Access date components

/*
getFullYear(), getMonth() (0..11), getDate() (1..31)
getHours/Minutes/Seconds/Milliseconds
getDay() — weekday 0(Sun)..6(Sat)

UTC variants: getUTCFullYear(), getUTCHours(), ...

Special:
getTime() — timestamp (ms)
getTimezoneOffset() — UTC - local, in minutes
*/

{
  let date = new Date();
  alert(date.getFullYear());
  alert(date.getMonth());
  alert(date.getDate());
  alert(date.getDay());
  alert(date.getHours());
  alert(date.getUTCHours());
  alert(date.getTime());
  alert(date.getTimezoneOffset());
}

// Setting date components

/*
setFullYear / setMonth / setDate
setHours / setMinutes / setSeconds / setMilliseconds
setTime(ms)
+ UTC variants
*/

{
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  alert(today);
}

// Autocorrection

{
  let date = new Date(2013, 0, 32); // 32 Jan → 1 Feb
  alert(date);
}

{
  let date = new Date(2016, 1, 28);
  date.setDate(date.getDate() + 2);
  alert(date); // 1 Mar 2016
}

{
  let date = new Date();
  date.setSeconds(date.getSeconds() + 70);
  alert(date);
}

{
  let date = new Date(2016, 0, 2); // 2 Jan 2016
  date.setDate(1);
  alert(date);
  date.setDate(0); // last day of previous month
  alert(date); // 31 Dec 2015
}

// Date to number / diff

/*
+date === date.getTime()
date2 - date1 → diff in ms
*/

{
  let start = new Date();
  for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
  }
  let end = new Date();
  alert(`The loop took ${end - start} ms`);
}

// Date.now()

/*
Current timestamp without creating Date object.
Faster than new Date().getTime()
*/

{
  let start = Date.now();
  for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
  }
  let end = Date.now();
  alert(`The loop took ${end - start} ms`);
}

// Benchmark tip

/*
getTime() is faster than date-to-number conversion.
For reliable benches: alternate runs + heat-up.
*/

{
  function diffSubtract(date1, date2) {
    return date2 - date1;
  }

  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }

  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }

  // heat-up
  bench(diffSubtract);
  bench(diffGetTime);

  let time1 = 0;
  let time2 = 0;

  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }

  alert("Total time for diffSubtract: " + time1);
  alert("Total time for diffGetTime: " + time2);
}

// Date.parse

/*
Format: YYYY-MM-DDTHH:mm:ss.sssZ
Returns timestamp or NaN
*/

{
  let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
  alert(ms);

  let date = new Date(ms);
  alert(date);
}

/*
Summary:
- Date always has date + time
- months 0..11, weekday 0=Sunday
- autocorrects out-of-range values
- subtract dates → ms difference
- timestamps are in milliseconds
- Date.now() for fast current timestamp
- performance.now() for higher precision in browsers
*/

{
  alert(`Loading started ${performance.now()}ms ago`);
}

alert("The End of 5.11. Date and time.");
