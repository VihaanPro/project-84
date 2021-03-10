canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_height=70;
car1_width=120;
car1_Image=car1.png;
car1_x=10;
car1_y=10;

car2_height=70;
car2_width=120;
car2_Image=car2.png;
car2_x=10;
car2_y=100;

function add(){

   background_Img=new Image();
   background_Img.onload=uploadBackground();
   background_Img.src=background_image;

   car1_Img=new Image();
   car1_Img.onload=uploadcar1;
   car1_Img.src=car1_image;

   car2_Img=new Image();
   car2_Img.onload=uploadcar2;
   car2_Img.src=car2_image;
}


function uploadBackground(){


   ctx.drawImage(background_Img,0,0,canvas.width,canvas.height);
}

function uploadcar1(){


   ctx.drawImage(car1_image, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){


   ctx.drawImage(car2_image, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e){

keyPressed=e.keyCode;
console.log(keyPressed);

if(keyPressed=='38'){
   car1_up();
   console.log("up");
}
if(keyPressed=='40'){
    car1_down();
    console.log("down");
 }
 if(keyPressed=='37'){
    car1_left();
    console.log("left");
 }
 if(keyPressed=='39'){
    car1_right();
    console.log("right");
 }

 if(keyPressed=='87'){
   car2_up();
   console.log("w");
}
if(keyPressed=='88'){
    car2_down();
    console.log("x");
 }
 if(keyPressed=='65'){
    car2_left();
    console.log("a");
 }
 if(keyPressed=='68'){
    car2_right();
    console.log("d");
 }
}