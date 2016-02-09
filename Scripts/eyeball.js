$(function() {
	var halfLineLength, angle = 0, heightWidthSetter, hypoOffset, yOffset, xOffset, xRotate, yRotate, mouseYPosition, mouseXPosition, pupilSize = 40, irisSize=80;
	function lineCreation (lineNumber) {
		halfLineLength = 75;
		angle = angle + 20;
		hypoOffset = Math.sqrt((halfLineLength * halfLineLength + halfLineLength * halfLineLength) - ( 2 * halfLineLength * halfLineLength * Math.cos(Math.PI / 180 * angle)));
		yOffset = halfLineLength * Math.sin(Math.PI / 180 * angle);
		xOffset = Math.sqrt(hypoOffset * hypoOffset - yOffset * yOffset);
		$('#eyeball').append('<div class="line" id="line' + lineNumber + '"></div>');
		$('#line' + lineNumber).css('left', 'calc(50% - ('+ xOffset + 'px))');
		//alert($('#line' + lineNumber).css('left'));
		$('#line' + lineNumber).css('top', 'calc(50% + (' + yOffset + 'px))');
		($('#line' + lineNumber).css('transform', 'rotate('+angle+'deg)'));
	//	alert($('#line' + lineNumber).css('top'));
	}
/*	for (i=1; i < 19; i++) {
		lineCreation(i);
	}*/

	//code for eye following cursor
	$(document).mousemove(function(e) {
    window.x = e.pageX;
    window.y = e.pageY;
    mouseXPosition = Math.round(window.x / $('body').css('width').replace("px", "") * 100);
    mouseYPosition = Math.round(window.y / $('body').css('height').replace("px", "") * 100);
		xRotate = mouseXPosition - 50;
		yRotate = mouseYPosition - 50;
		angle = Math.atan(yRotate/xRotate) / (Math.PI / 180);

    //Decides which position is closest to the edge of the screen to determine height
		if (Math.abs(50 - mouseXPosition) > Math.abs(50 - mouseYPosition)) {
			heightWidthSetter = mouseXPosition;
		} else {
			heightWidthSetter = mouseYPosition;
		}
		if (heightWidthSetter < 50) {
		//	$('#iris').css('height', (heightWidthSetter + 50) / 100  * irisSize + "px");
		//	$('#irisBG').css('height', (heightWidthSetter + 50) / 100  * irisSize + "px");
		//	$('#pupil').css('height', (heightWidthSetter + 50) / 100  * pupilSize + "px");
			$('#iris').css('height', (.66 * irisSize) + (.34/50 * heightWidthSetter * irisSize) + "px");
			$('#irisBG').css('height', (.66 * irisSize) + (.34/50 * heightWidthSetter * irisSize) + "px");
			$('#pupil').css('height', (.66 * pupilSize) + (.34/50 * heightWidthSetter * pupilSize)  + "px");
		} else {
		//	$('#iris').css('height', ((heightWidthSetter - 150) / -1 / 100 * irisSize) + "px");
		//	$('#irisBG').css('height', ((heightWidthSetter - 150) / -1 / 100 * irisSize) + "px");
		//	$('#pupil').css('height', ((heightWidthSetter - 150) / -1 / 100 * pupilSize) + "px");
			$('#iris').css('height', (1.34 * irisSize - (.34/50 * heightWidthSetter * irisSize)) + "px");
			$('#irisBG').css('height', (1.34 * irisSize - (.34/50 * heightWidthSetter * irisSize)) + "px");
			$('#pupil').css('height', (1.34 * pupilSize - (.34/50 * heightWidthSetter * pupilSize)) + "px");
		}
		// change shape for the iris and pupil
		$('#iris').css('border-radius', '75%');
		$('#irisBG').css('border-radius', '75%');
		$('#pupil').css('border-radius', '75%');

		//code for rotation
		if (mouseYPosition <= 50) {
			if (mouseXPosition < 50) {
				$('#iris').css({'transform' : 'rotate(' + (270 + angle) + 'deg)'});
				$('#irisBG').css({'transform' : 'rotate(' + (270 + angle) + 'deg)'});
			}	else {
				$('#iris').css({'transform' : 'rotate(' + (90 + angle) + 'deg)'});
				$('#irisBG').css({'transform' : 'rotate(' + (90 + angle) + 'deg)'});
			}
		} else {
			if (mouseXPosition < 50) {
				$('#iris').css({'transform' : 'rotate(' + (270 + angle) + 'deg)'});
				$('#irisBG').css({'transform' : 'rotate(' + (270 + angle) + 'deg)'});
			}	else {
				$('#iris').css({'transform' : 'rotate(' + (90 + angle) + 'deg)'});
				$('#irisBG').css({'transform' : 'rotate(' + (90 + angle) + 'deg)'});
			}
		}
		//code for cursor position and eyeball position
	  $('#iris').css('left', 'calc(' + mouseXPosition + '% + ' + (-14 - 53/100 * mouseXPosition) + 'px)');
	  $('#irisBG').css('left', 'calc(' + mouseXPosition + '% + ' + (-14 - 53/100 * mouseXPosition) + 'px)');
		$('#iris').css('top', 'calc((' + mouseYPosition + '%) - (' + mouseYPosition / 100 * $('#iris').css('height').replace('px', "") + 'px)');
		$('#irisBG').css('top', 'calc((' + mouseYPosition + '%) - (' + mouseYPosition / 100 * $('#iris').css('height').replace('px', "") + 'px)');
	});
});
