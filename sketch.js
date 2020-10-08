
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin1,dustbin2,dustbin3
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,500,20)
ground = new Ground(width/2,height-50,width, 20)
dustbin1 = new Dustbin(width-100, height-80,100,20)
dustbin2 = new Dustbin(width-160,height-120,20,80)
	Engine.run(engine);
 dustbin3 = new Dustbin(width-40,height-120,20,80) 
}


function draw() {
  rectMode(CENTER);
  background(0);
 paper.display() 
 ground.display()
dustbin1.display()
dustbin2.display()
dustbin3.display()
 drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-80})
	}
}


