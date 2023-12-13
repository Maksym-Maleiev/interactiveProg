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
var topOffset = 0;

function moveHeading() {
  $("#heading").offset({ left: leftOffset, top: topOffset});

  for (var leftOffset = 0; leftOffset < 200; leftOffset++){
  }
  
  for (var topOffset = 0; topOffset < 200; topOffset++){
 }
};

setInterval(moveHeading, 10);
