// #1: follow the clicks
/*
$("html").click(function (event) {
  $("#heading").offset({
    left: event.pageX,
    top: event.pageY,
  });
});
*/

// #2: create your own animation
var leftOffset = 0;
var topOffset = 0;
var direction = "right";

$("#heading").offset({ left: leftOffset, top: topOffset });

function moveHeading() {
  if (direction === "right") {
    $("#heading").offset({ left: leftOffset });

    leftOffset++;
    if (leftOffset > 200) {
      topOffset = 0;
      direction = "down";
    }
  } else if (direction === "down") {
    $("#heading").offset({ top: topOffset });

    topOffset++;
    if (topOffset > 200) {
      leftOffset = 200;
      direction = "left";
    }
  } else if (direction === "left") {
    $("#heading").offset({ left: leftOffset });

    leftOffset--;
    if (leftOffset < 0) {
      topOffset = 200;
      direction = "top";
    }
  } else if (direction === "top") {
    $("#heading").offset({ top: topOffset });

    topOffset--;
    if (topOffset < 0) {
      leftOffset = 0;
      direction = "right";
    }
  }
}

var intervalTime = 20;
var intervalId = setInterval(moveHeading, intervalTime);

// #3: cancel the animation with a click

// $("#heading").click(function () {
//   clearInterval(intervalId);
// });

// #4: create a "title clicker" game

var clickNumber = 0;
var newHeading = "You Win🎉";

$("#heading").click(function () {
  for (var i = 0; i < 1; i++){
    if (clickNumber === 4) {
      $("#heading").text(newHeading);
      clearInterval(intervalId);
    } else {
    setInterval(moveHeading, intervalTime++);
    clickNumber++;

    console.log("Click " + clickNumber + "!");     
      }
    }
  })