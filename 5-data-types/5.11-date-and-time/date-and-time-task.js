// 5.11. Date and time. Task.

alert("5.11. Date and time. Task.");

// --- Task 1. Create a date (importance: 5) ---
/*
Feb 20, 2012, 3:12am, local timezone
month = 1 (February)
*/

{
  let date = new Date(2012, 1, 20, 3, 12);
  alert(date);
}

// --- Task 2. Show a weekday (importance: 5) ---

function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

{
  let date = new Date(2012, 0, 3); // 3 Jan 2012
  alert(getWeekDay(date)); // TU
}

// --- Task 3. European weekday (importance: 5) ---
/*
Monday = 1 ... Sunday = 7
*/

function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}

{
  let date = new Date(2012, 0, 3); // 3 Jan 2012
  alert(getLocalDay(date)); // 2
}

// --- Task 4. Which day of month was many days ago? (importance: 4) ---
/*
Do not modify the given date → clone it.
*/

function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

{
  let date = new Date(2015, 0, 2);

  alert(getDateAgo(date, 1)); // 1
  alert(getDateAgo(date, 2)); // 31
  alert(getDateAgo(date, 365)); // 2
}

// --- Task 5. Last day of month? (importance: 5) ---
/*
Trick: day 0 of next month = last day of current month.
*/

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

{
  alert(getLastDayOfMonth(2012, 1)); // 29
  alert(getLastDayOfMonth(2013, 1)); // 28
  alert(getLastDayOfMonth(2012, 0)); // 31
}

// --- Task 6. How many seconds have passed today? (importance: 5) ---

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((now - today) / 1000);
}

{
  alert(getSecondsToday());
}

// --- Task 7. How many seconds till tomorrow? (importance: 5) ---

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.round((tomorrow - now) / 1000);
}

{
  alert(getSecondsToTomorrow());
}

// --- Task 8. Format the relative date (importance: 4) ---

function formatDate(date) {
  let diff = new Date() - date;

  if (diff < 1000) {
    return "right now";
  }

  let sec = Math.floor(diff / 1000);
  if (sec < 60) {
    return sec + " sec. ago";
  }

  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + " min. ago";
  }

  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2));

  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}

{
  alert(formatDate(new Date(new Date() - 1))); // right now
  alert(formatDate(new Date(new Date() - 30 * 1000))); // 30 sec. ago
  alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // 5 min. ago
  alert(formatDate(new Date(new Date() - 86400 * 1000))); // DD.MM.YY HH:mm
}

alert("The End of 5.11. Date and time. Task.");
