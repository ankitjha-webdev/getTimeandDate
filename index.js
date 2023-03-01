/*
Author: Ankit Jha
index.js (c) 2023
Desc: description
Created:  2023-02-28T13:04:44.355Z
Modified: !date!
*/

// For todays date;
Date.prototype.today = function () {
  return (
    this.getFullYear() +
    "-" +
    (this.getMonth() + 1 < 10 ? "0" : "") +
    (this.getMonth() + 1) +
    "-" +
    (this.getDate() < 10 ? "0" : "") +
    this.getDate()
  );
};

// For the time now
Date.prototype.timeNow = function () {
  return (
    (this.getHours() < 10 ? "0" : "") +
    this.getHours() +
    ":" +
    (this.getMinutes() < 10 ? "0" : "") +
    this.getMinutes() +
    ":" +
    (this.getSeconds() < 10 ? "0" : "") +
    this.getSeconds()
  );
};

// making new Date object
var newDate = new Date();

// storing user's time and date
const dateTime = "2023-03-01 12:00:00";
var dateParts = dateTime.split(" ");
var date = dateParts[0].split("-");
var time = dateParts[1].split(":");

// user's time and date to an object
var dateTimeObj = new Date(
  date[0],
  date[1] - 1,
  date[2],
  time[0],
  time[1],
  time[2],
  0
);

var tomorrow = new Date();

const compareTime = () => {
  if (newDate.timeNow() > dateTimeObj.timeNow()) {
    console.log("Order will Place today!!");
  } else {
    tomorrow.setDate(newDate.getDate() + 1);
  }
};

// function calling....
compareTime();

console.log(
  "---------------tomorrow-----------------",
  tomorrow.today(),
  tomorrow.timeNow()
);
