var leftOffset = 200;

var moveHeading = function () {
  $("#heading").offset({ left: leftOffset });

  leftOffset++;

  if (leftOffset > 400) {
    leftOffset = 200;
  }
};

setInterval(moveHeading, 30);