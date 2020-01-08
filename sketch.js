var moving, fixed, rect;
var sq;
function setup() { 
  createCanvas(800,1000);
  moving=createSprite(470,400,20,50)
  fixed=createSprite(470,600,20,50)
rect=createSprite(200,200,20,40)
sq=createSprite(490, 200,20,20)
//moving.velocityY=1
//fixed.velocityY=-1
}

function draw() {
  background("red");  
  moving.y= mouseY
  moving.x=mouseX
isTouching(moving,rect)
 isTouching(moving,fixed);
 isTouching(moving,sq);
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object1.width/2+object2.width/2
    &&object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
    object1.shapeColor="green"
    object2.shapeColor="blue"
   // moving.velocityY=-1
    //fixed.velocityY=1
    }
   else{
   object1.shapeColor="white"
   object2.shapeColor="green"  
   }
}