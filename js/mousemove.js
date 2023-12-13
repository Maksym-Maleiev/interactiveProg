// $("html").mousemove(function (event) {
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY,
//   });
// });

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

function moveHeadingGor() {
  $("#heading").offset({ left: leftOffset});

  leftOffset++;

  if (leftOffset > 200) {
    leftOffset = 200;
  }
};

setInterval(moveHeadingGor, 10);

var topOffset = 0;

function moveHeadingVer() {
  $("#heading").offset({ top: topOffset});

  topOffset++;

  if (topOffset > 200) {
    topOffset = 200;
  }
};

setTimeout(moveHeadingVer, 2000);