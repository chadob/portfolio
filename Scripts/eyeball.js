$(function() {
	//variable declarations
	var eyeHeight = 120, eyeX = 50, eyeY = 100, halfLineLength, angle = 0, heightWidthSetter, hypoOffset, yOffset, xOffset, xRotate, yRotate, mouseYPosition, mouseXPosition, pupilSize = 40, irisSize=80;

	//code for eye following cursor
	$(document).mousemove(function(e) {
    window.x = e.pageX;
  	window.y = e.pageY;
    mouseXPosition = Math.round(window.x / $(window).width() * 100);
    mouseYPosition = Math.round(window.y / $(window).height() * 100);
		xRotate = mouseXPosition - eyeX; //50 is eye x position
		yRotate = mouseYPosition - eyeY + ( (eyeHeight / 2) / $(window).height()); //0 is eye y position
		angle = Math.atan(yRotate/xRotate) / (Math.PI / 180);
		eyeRotation(mouseXPosition, mouseYPosition, angle);
		eyeSize(xRotate, yRotate, angle, mouseXPosition, mouseYPosition, irisSize, pupilSize, eyeHeight);
		eyePlacement(mouseXPosition, mouseYPosition);
	});
});
