
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	paper = new Paper(50,680,10,10)
	dustbin = new Dustbin(600,680,200,20)
	dustbin2 = new Dustbin(500,640,20,100)
	dustbin3 = new Dustbin(700,640,20,100)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();

  
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
	}

    
  }


