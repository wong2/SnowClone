!function(){
    var canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height= window.innerHeight;
    canvas.style.position = "absolute";
    canvas.style.top = "0px";
    canvas.style.left = "0px";
    document.body.appendChild(canvas);

    var context= canvas.getContext("2d");  

    context.globalAlpha = 0.8;
    context.fillStyle = "rgb(255, 255, 255)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.globalCompositeOperation = "destination-out";

    DrawLine.init(canvas);
}();
