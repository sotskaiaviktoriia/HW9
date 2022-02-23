"use strict";

//Task1
const birthdayDate = new Date("2002-05-23");

const birthYear = birthdayDate.getFullYear();
const birthMounth = birthdayDate.getMonth() + 1;
const birthDay = birthdayDate.getDate();

console.log(`${birthDay}.0${birthMounth}.${birthYear}`);
