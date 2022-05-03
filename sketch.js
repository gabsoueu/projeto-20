var engine, world;
var block1, block2, block3, plane;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
   

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic:true
	}
    plane = Bodies.rectangle(400,600,800,10,plane_options);
	World.add(world,plane);

	var block1_opitions = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
    block1 = Bodies.circle(220,10,10,block1_opitions);
	World.add(world,block1);
	
	var block2_opitions = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	block2 = Bodies.rectangle(110,50,10,10,block2_opitions);
	World.add(world,block2);
	
	var block3_opitions = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}
	block3 = Bodies.rectangle(350,50,10,10,block3_opitions);
	World.add(world,block3);
	

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  Engine.update(engine);
  background(0);
  
  ellipse(block1.position.x, block1.position.y, 10 );
  rect(block2.position.x, block2.position.y, 10, 10 );
  rect(block3.position.x, block3.position.y, 10, 10 );
  rect(plane.position.x, plane.position.y, 800, 10 );
  
}



