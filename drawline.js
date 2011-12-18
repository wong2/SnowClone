var DrawLine = function() {

	var context, offsetLeft, offsetTop;

	function _drawCircle(mouseX, mouseY) {
        var x = mouseX - offsetLeft,
            y = mouseY - offsetTop;
		context.beginPath();
		context.arc(x, y, 15, 0, Math.PI * 2);
		context.closePath();
		context.fill();
	}

	function _setLineStyle() {
		context.strokeStyle = "#df4b26";
		context.lineJoin = "round";
		context.lineWidth = 20;
	}

	return {
        init: function(canvas) {
            var isPainting = false;

            context = canvas.getContext("2d"),
            offsetLeft = canvas.offsetLeft,
            offsetTop = canvas.offsetTop;

            var isMobile = +("ontouchstart" in window);

            var events = {
                start: ["mousedown", "touchstart"],
                end:   ["mouseup", "touchend"],
                move:  ["mousemove", "touchmove"]
            };

            canvas.addEventListener(events.start[isMobile], function(e) {
                isPainting = true;
                e = isMobile?e.targetTouches[0]:e;
                _drawCircle(e.pageX, e.pageY);
            }, false);
            canvas.addEventListener(events.end[isMobile], function(e) {
                isPainting = false;
            }, false);
            canvas.addEventListener(events.move[isMobile], function(e) {
                if (isPainting) {
                    e = isMobile?e.targetTouches[0]:e;
                    _drawCircle(e.pageX, e.pageY);
                }
            }, false);
        }
    }
} ();
