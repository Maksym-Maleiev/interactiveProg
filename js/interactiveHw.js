// #1: follow the clicks
/*
$("html").click(function (event) {
  $("#heading").offset({
    left: event.pageX,
    top: event.pageY,
  });
});
*/

// #2:create your own animation
var leftOffset = 0;
var topOffset = 0;
var direction = "right";

function moveHeading() {
  $("#heading").offset({ left: leftOffset, top: topOffset });

  if (direction === "right") {
    $("#heading").offset({ left: leftOffset });

    leftOffset++;
  }
}

setInterval(moveHeading, 10);
