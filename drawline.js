var DrawLine = function() {

	var isPainting = false;
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
            context = canvas.getContext("2d"),
            offsetLeft = canvas.offsetLeft,
            offsetTop = canvas.offsetTop;

            canvas.addEventListener("mousedown", function(e) {
                isPainting = true;
                _drawCircle(e.pageX, e.pageY);
            }, false);
            canvas.addEventListener("mouseup", function(e) {
                isPainting = false;
            }, false);
            canvas.addEventListener("mousemove", function(e) {
                if (isPainting) {
                    _drawCircle(e.pageX, e.pageY);
                }
            }, false);
        }
    }
} ();
