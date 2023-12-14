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
    $("#heading").offset({ left: offset });

    offset++;
    if (offset > 200) {
      offset = 0;
      direction = "down";
    }
  } else if (direction === "down") {
    $("heading").offset({ top: offset });

    offset++;
    if (offset > 200) {
      offset = 0;
      direction = "left";
    }
  }
}

setInterval(moveHeading, 10);
