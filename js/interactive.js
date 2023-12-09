var timeUp = function () {
  alert("Time's up");
};

setTimeout(timeUp, 5000);

// ------------------
var doHomeworkAlarm = function () {
  alert("Hey! You need to do your homework!");
};

var timeoutId = setTimeout(doHomeworkAlarm, 60000);
clearTimeout(timeoutId);

// -----------------
/*
var counter = 1;

var printMessage = function () {
  console.log("You have been staring at your console for " + counter + " seconds");
  counter++;
};

var intervalId = setInterval(printMessage, 1000);
clearInterval(intervalId);
*/

// -----------------
var counter = 5;

var printMessage = function () {
  console.log("You have been staring at your console for " + counter + " seconds");
  counter++;
};

var intervalId = setInterval(printMessage, 5000);
clearInterval(intervalId);