canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;


car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
background_image = "racing.jpg";
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;


    car1_imgTag = new Image(); 
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;
}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height)
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1.width, car1.height)
}
window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
        if(keypressed == '38')
        {
            car1();
            console.log("up arrow key");
        }
        if(keypressed == '40')
        {
            car1();
            console.log("down arrow key");
        }
        if(keypressed == '37')
        {
            car1();
            console.log("left arrow key");
        }
        if(keypressed == '39')
        {
            car1();
            console.log("right arrow key");
        }
        if(keypressed == '87')
        {
            car2();
            console.log("key w");
        }
        if(keypressed == '88')
        {
            car2();
            console.log("key x");
        }
        if(keypressed == '89')
        {
            car2();
            console.log("key y");
        }
        if(keypressed == '90')
        {
            car2();
            console.log("key z");
        }
