// $("html").mousemove(function (event) {
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY,
//   });
// });

// #1: follow the clicks
$("html").click(function (event) {
  $("#heading").offset({
    left: event.pageX,
    top: event.pageY,
  });
});

// #2: