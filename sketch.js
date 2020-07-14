var ground;
var G1,G2,G3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	
	ground = createSprite(400,height-40,width,20)
	ground.shapeColor=color("white")

	G1=createSprite(650,640,200,20)
	G1.shapeColor=color("red")
	
	G2=createSprite(550,600,20,100)
	G2.shapeColor=color("red")
	
	G3=createSprite(750,600,20,100)
    G3.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
}



