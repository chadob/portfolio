var eyeSize = function (xRotate, yRotate, angle, mouseXPosition, mouseYPosition, irisSize, pupilSize, eyeHeight ) {
  if (Math.abs(50 - mouseXPosition) > Math.abs(100 - ((eyeHeight / 2) / $('body').css('height').replace("px", "")) - mouseYPosition)) {
    heightWidthSetter = mouseXPosition;
  } else {
    heightWidthSetter = mouseYPosition;
  }
  if (heightWidthSetter < 50) {
    $('.iris').css('height', (.66 * irisSize) + (.34/50 * heightWidthSetter * irisSize) + "px");
    $('.pupil').css('height', (.66 * pupilSize) + (.34/50 * heightWidthSetter * pupilSize)  + "px");
  } else {
    $('.iris').css('height', (1.34 * irisSize - (.34/50 * heightWidthSetter * irisSize)) + "px");
    $('.pupil').css('height', (1.34 * pupilSize - (.34/50 * heightWidthSetter * pupilSize)) + "px");
  }
  // change shape for the iris and pupil
  $('.iris').css('border-radius', '75%');
  $('.pupil').css('border-radius', '75%');
}
