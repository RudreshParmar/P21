var bullet,wall;
var bulletSpeed,bulletWeight,thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  bulletSpeed=random(223,321);
  bulletWeight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=bulletSpeed;
  bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "white";
}

function draw() {
  background("black");

  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  damage=(0.5*bulletWeight*bulletSpeed*bulletSpeed)/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
    textStyle("bold");
    textSize(30);
    fill(130, 130, 255);
    text("Wall is Weak", 700, 150);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
    textStyle("bold");
    textSize(30);
    fill(130, 130, 255);
    text("Wall is Strong", 700, 150);
  }
}
  drawSprites();
}

  function hasCollided(Lbullet,Lwall){
   bulletRightEdge=Lbullet.x+Lbullet.width;
   wallLeftEdge=Lwall.x
   if(bulletRightEdge>=wallLeftEdge){
     return true
   }
   return false;
  }