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
var offset = 0;
var direction = "right";

function moveHeading() {
  $("#heading").offset({ left: offset, top: offset });

  if (direction === "right") {
    $("#heading").offset({ left: leftOffset });

    leftOffset++;
    if (leftOffset > 200) {
      leftOffset = 200;
    }
  } else if (direction === "down") {
    $("heading").offset({ top: topOffset });

    topOffset++;
    if (topOffset > 200) {
      topOffset = 200;
    }
  }
}

setInterval(moveHeading, 10);
