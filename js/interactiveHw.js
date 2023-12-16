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

var intervalId = setInterval(moveHeading, 18);

// #3: cancel the animation with a click

// $("html").click(function () {
//   $("#heading").offset({ left: leftOffset, top: topOffset });
//   clearInterval(intervalId);
// });

// #4: create a "title clicker" game

var clickNumber = 0;

var clickHandler = function () {
  for (var clickNumber = 0; clickNumber < 10; clickNumber++){
    if (clickNumber > 10) {
      alert("You win!!!");
    } else {
      console.log("Yeh, come on!")
    }
  }

  console.log("Click " + clickNumber + "!");
}

$("#heading").click(clickHandler);

// $("#heading").click(function (event) {
//   for (var event = 0; event < 10; event++ ) {
//     if()
//   }
// })