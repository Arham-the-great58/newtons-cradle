
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope,ground, chain1,chain2,chain3,chain4,chain5;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);

	roof = new Roof(350,200,300,20);

	bobObject1 = new Bob(250,500,60);
	bobObject2 = new Bob(310,500,60);
	bobObject3 = new Bob(370,500,60);
	bobObject4 = new Bob(430,500,60);
	bobObject5 = new Bob(490,500,60);

	chain1 = new Rope(bobObject1.body,roof.body,-80,0);
	chain2 = new Rope(bobObject2.body,roof.body,-40,0);
	chain3 = new Rope(bobObject3.body,roof.body,0,0);
	chain4 = new Rope(bobObject4.body,roof.body,40,0);
	chain5 = new Rope(bobObject5.body,roof.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);

  ground.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

   roof.display();

}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-1000,y:-1000});


}
}
