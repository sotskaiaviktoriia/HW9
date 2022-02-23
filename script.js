"use strict";

//Task1
const birthdayDate = new Date("2002-05-23");

const birthYear = birthdayDate.getFullYear();
const birthMounth = birthdayDate.getMonth() + 1;
const birthDay = birthdayDate.getDate();

console.log(`${birthDay}.0${birthMounth}.${birthYear}`);

//Task2
function getDiffDays(start, end) {
  const dateStart = new Date(start);
  const dateEnd = new Date(end);
  const oneDayMs = 86400000;

  const passedDays = (dateEnd.getTime() - dateStart.getTime()) / oneDayMs;

  if (
    dateStart.toString() === "Invalid Date" ||
    dateEnd.toString() === "Invalid Date"
  ) {
    console.error("Error: invalid date");
    return;
  }

  if (dateStart > dateEnd) {
    console.error("Error: your start date is later than end");
    return;
  }
  return passedDays;
}

console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end

//Task3
function isWeekend(date) {
  const newDate = new Date(date);
  const day = newDate.getDay();

  if (day === 0 || day === 6) {
    return true;
  } else {
    return false;
  }
}

console.log(isWeekend("2022-02-12")); // true
console.log(isWeekend("2022-02-13")); // true
console.log(isWeekend("2022-02-09")); // false
