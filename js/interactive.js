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
var counter = 1;

var printMessage = function () {
  
};