
var ground, gameState
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world

	dustbin = new DustBin(720, 690, 100, 10)
	paper = new Paper(100,600,30)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  createEdgeSprites();
  dustbin.display();
  paper.display();
  drawSprites();

}


function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:132, y:-105});
  }
}


