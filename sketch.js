//global variables
var box;


function setup() {
  createCanvas(400, 400);
  //used to create sprite and initialize variables with a initial value
  box=createSprite(200,200,20,20);

}

function draw() {
  background(220);
  text(mouseX+','+mouseY,mouseX,mouseY);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x+=5;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x-=5;
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y-=5;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y+=5;
  }
  drawSprites();
}