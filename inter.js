function setup() {
    var slider1 = document.getElementById('mySlider1'); // mid piece, rAm1 radians / 20
    slider1.value = 0;

    var slider2 = document.getElementById('mySlider2'); // top piece, rAm2 radians / 20
    slider2.value = 0;

    function draw() {
        var rotationAm1 = slider1.value*0.1*Math.PI;
        var rotationAm2 = slider2.value*0.1*Math.PI;

        // console.log(rotationAm1);

        function drawPiece1 (){
            context.save();
            
            context.translate(195, 245);
            context.rotate(rotationAm1);

            // context.beginPath();
            // context.strokeStyle = "black";
            // context.lineWidth = 3;
            // context.moveTo(0, 0);
            // context.lineTo(1, 1);
            // context.stroke();

            context.translate(-195, -245);
            context.drawImage(p1Img, 65, 105)
            context.restore();
        }

        function drawPiece2() {
            context.save();
            
            context.translate(200, 240);
            context.rotate(rotationAm2);

            context.beginPath();
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.moveTo(0, 0);
            context.lineTo(1, 1);
            context.stroke();

            context.translate(-200, -250);
            context.drawImage(p2Img, 65, 105)
            context.restore();
        }

        function drawBack() {
            context.drawImage(backImg, 0, 0)
        }

        // Main Section
        drawBack();
        drawPiece1();
        drawPiece2();
    }

    // drawing code
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    canvas.width = canvas.width;
    // console.log("Working"); // debug
    slider1.addEventListener("input",draw);
    slider2.addEventListener("input",draw);
    draw();
}

var backImg = new Image();
backImg.src = './images/Volvelle_Bottom2.png'; // imgFile performerImg.src = './perform1small.png';

var p1Img = new Image();
p1Img.src = './images/Volvelle_Middle2.png'; // imgFile performerImg.src = './perform1small.png';

var p2Img = new Image();
p2Img.src = './images/Volvelle_Top2.png'; // imgFile performerImg.src = './perform1small.png';

timeout = setTimeout(setup, 250);
