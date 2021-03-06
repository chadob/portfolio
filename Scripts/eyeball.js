$(function() {
	//variable declarations
	var eyeHeight = 120, eyeX = 50, eyeY = 100, halfLineLength, angle = 0, heightWidthSetter, hypoOffset, yOffset, xOffset, xRotate, yRotate, mouseYPosition, mouseXPosition, pupilSize = 40, irisSize=80;

	//code for eye following cursor
	$(document).mousemove(function(e) {
    window.x = e.pageX;
  	window.y = e.pageY;
    mouseXPosition = Math.round(window.x / $('body').css('width').replace("px", "") * 100);
    mouseYPosition = Math.round(window.y / $('body').css('height').replace("px", "") * 100);
		xRotate = mouseXPosition - eyeX; //50 is eye x position
		yRotate = mouseYPosition - eyeY + ( (eyeHeight / 2) / $('body').css('height').replace("px", "")); //0 is eye y position
		angle = Math.atan(yRotate/xRotate) / (Math.PI / 180);
		eyeRotation(mouseXPosition, mouseYPosition, angle);
		eyeSize(xRotate, yRotate, angle, mouseXPosition, mouseYPosition, irisSize, pupilSize, eyeHeight);
		eyePlacement(mouseXPosition, mouseYPosition);
	});
});
