var fixedRect, movingRect;
var wall1, wall2;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "Black";


  movingRect = createSprite(400, 700,80,30);
  movingRect.shapeColor = "Yellow";

  wall1 = createSprite (600,800,780,90);
  wall1.shapeColor = "red";

  wall2 = createSprite (600,30,780,90);
  wall2.shapeColor = "red";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background("Lightblue");  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }

  if (wall1.isTouching(movingRect) && movingRect.bounceOff(wall1)){
    movingRect.shapeColor = "green";
  }

  

  if (wall2.isTouching(fixedRect) && fixedRect.bounceOff(wall2)){
    fixedRect.shapeColor = "orange";
  }

  
  
  drawSprites();
}