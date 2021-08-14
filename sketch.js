var bg,sleep,brush,gym,gym1,eat,drink,move,bath;
var astronaut




function preload() {
    //load images 
    bg=loadImage("images/iss.png")
    sleep=loadImage("images/sleep.png")
    brush=loadImage("images/brush.png")

    gym=loadAnimation("images/gym12.png","images/gym11.png")
    gym1=loadAnimation("images/gym1.png","images/gym2.png")
    eat=loadAnimation("images/eat1.png","images/eat2.png")
    move=loadAnimation("images/move.png")
    bath=loadAnimation("images/bath1.png","images/bath2.png")
}

function setup(){
    createCanvas(600,500);
    //create Astronaut sprite 
  astronaut = createSprite (300,230)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1
}

function draw() {
 background(bg);

 textSize(20);
  fill("red")
  
  text("Instructions:",20, 35);
  textSize(17);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

 if(keyDown("UP_ARROW")){
     astronaut.addAnimation("brushing",brush)
     astronaut.changeAnimation("brushing")
     astronaut.velocityX=0
     astronaut.velocityY=0
     astronaut.y = 350;
 }

if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym,gym1);
    astronaut.changeAnimation("gymming");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    astronaut.y = 350;
     }


 if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    astronaut.y = 350;
                }

if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    astronaut.y = 350;
}

if(keyDown("M")){
  astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
}


drawSprites();
}