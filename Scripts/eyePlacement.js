var eyeRotation = function (mouseXPosition, mouseYPosition, angle) {
  if (mouseYPosition <= 50) {
    if (mouseXPosition < 50) {
      $('.iris').css({'transform' : 'rotate(' + (270 + angle) + 'deg)'});
    }	else {
      $('.iris').css({'transform' : 'rotate(' + (90 + angle) + 'deg)'});
    }
  } else {
    if (mouseXPosition < 50) {
      $('.iris').css({'transform' : 'rotate(' + (270 + angle) + 'deg)'});
    }	else {
      $('.iris').css({'transform' : 'rotate(' + (90 + angle) + 'deg)'});
    }
  }
}


var eyePlacement = function(mouseXPosition, mouseYPosition) {
  $('.iris').css('left', 'calc(' + mouseXPosition + '% + ' + (-14 - 53/100 * mouseXPosition) + 'px)');
  $('.iris').css('top', 'calc((' + mouseYPosition + '%) - (' + mouseYPosition / 100 * $('.iris').css('height').replace('px', "") + 'px)');
}
