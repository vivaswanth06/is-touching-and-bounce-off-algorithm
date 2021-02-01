function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(400, 200, 50, 100);
  movingrec = createSprite(200,200,50,70);
  movingrec.shapeColor = "green"
  fixedRectangle.shapeColor = "green"
  fixedRectangle.velocityX = 1;
  fixedRectangle.velocityY = 1;
}

function draw() {
  background(220);  
  movingrec.x = mouseX;
  movingrec.y = mouseY;
  
  console.log(movingrec.x - fixedRectangle.x);
  console.log((fixedRectangle.width + movingrec.width)/2);

  if(movingrec.x - fixedRectangle.x <= (fixedRectangle.width + movingrec.width)/2 && fixedRectangle.x - movingrec.x <= (movingrec.width/2 + fixedRectangle.width /2) && movingrec.y - fixedRectangle.y <= (fixedRectangle.height + movingrec.height)/2 && fixedRectangle.y - movingrec.y <= (movingrec.height/2 + fixedRectangle.height /2)){
    movingrec.shapeColor = "red"
    fixedRectangle.shapeColor = "red"
  }else{
    movingrec.shapeColor = "green"
    fixedRectangle.shapeColor = "green"
  }

if(movingrec.x - fixedRectangle.x <= (fixedRectangle.width + movingrec.width)/2 && fixedRectangle.x - movingrec.x <= (movingrec.width/2 + fixedRectangle.width /2)){
  movingrec.velocityX = movingrec.velocityX * (-1);
  fixedRectangle.velocityX = fixedRectangle.velocityX * (-1);
}

if(movingrec.y - fixedRectangle.y <= (fixedRectangle.height + movingrec.height)/2 && fixedRectangle.y - movingrec.y <= (movingrec.height/2 + fixedRectangle.height /2)){
  movingrec.velocityY = movingrec.velocityY * (-1);
  fixedRectangle.velocityY = fixedRectangle.velocityY * (-1);

}

  drawSprites();
}