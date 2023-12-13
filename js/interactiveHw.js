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

function moveHeading() {
  $("#heading").offset({ left: leftOffset, top: topOffset });

  leftOffset++;

  if (leftOffset > 200) {
    leftOffset = 200;
  } else {
    topOffset = 0;
  }

  topOffset++;

  if (topOffset > 200) {
    topOffset = 200;
  }

  if ((topOffset = 200)) {
    leftOffset < 200;
  }

  leftOffset--;
}

setInterval(moveHeading, 10);
