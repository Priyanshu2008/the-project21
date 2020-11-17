var thickness,wall;
var speed,weight,bullet,damage;
function setup() {
  createCanvas(1000,800);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(800, 200, thickness, height/2);
speed = random(223,321);
weight = random(30,52)
thickness = random(22,83)


}

function draw() {
  background(255,255,255);  
  damage = 0.5*weight*speed*speed / (thickness * thickness * thickness);

bullet.shapeColor = "black";
bullet.velocityX = speed;
if(bullet.isTouching(wall)){
  bullet.velocityX  = 0;
}

if(damage < 10 && bullet.isTouching(wall) ) {
  bullet.shapeColor = "green";
 
}
if(damage > 10 && bullet.isTouching(wall) ) {
  bullet.shapeColor = "red";
 
}
console.log(damage) 
  drawSprites();
}
