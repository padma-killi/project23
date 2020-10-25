var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redside1,redside2,redbottom,redside1Sprite,redside2Sprite,redbottomSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
helicopterIMG=loadImage("helicopter.png")
packageIMG=loadImage("package.png")
}

function setup() {
createCanvas(800, 700);
rectMode(CENTER);


packageSprite=createSprite(width/2, 80, 10,10);
packageSprite.addImage(packageIMG)
packageSprite.scale=0.2

helicopterSprite=createSprite(width/2, 200, 10,10);
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.6

groundSprite=createSprite(width/2, height-35, width,10);
groundSprite.shapeColor=color(255)

redside1Sprite = createSprite(290, 610, 20, 100);
redside1Sprite.shapeColor=color("red");

redside2Sprite = createSprite(510,610,20,100);
redside2Sprite.shapeColor=color("red");

redbottomSprite = createSprite(400,650,200,20);
redbottomSprite.shapeColor=color("red");


engine = Engine.create();
world = engine.world;

packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
World.add(world, packageBody);


//Create a Ground
redbottom = Bodies.rectangle(400, 650, 200, 55, {isStatic:true});
World.add(world,redbottom);

redside1 = Bodies.rectangle(290, 610, 20, 100, {isStatic:true});
World.add(world,redside1);

redside2= Bodies.rectangle(510, 610, 20, 100, {isStatic:true});
World.add(world,redside2);

ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);
 
Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  redbottomSprite.x = redbottom.position.x
  redbottomSprite.y = redbottom.position.y
  redside1Sprite.x = redside1.position.x
  redside1Sprite.y = redside1.position.y
  redside2Sprite.x = redside2.position.x
  redside2Sprite.y = redside2.position.y
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y
  keyPressed();
  drawSprites();
   
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  // Look at the hints in the document and understand how to make the package body fall only on
   Matter.Body.setStatic(packageBody, false);

  }
}

