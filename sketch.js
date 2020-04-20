const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,tower1,tower2,tower3,tower4,tower5,tower6,tower7,circle1,circle3,circle4,circle5,circle6;




function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world =engine.world;

  tower1 = new Tower(200,320,50,400);
  tower2 = new Tower(275,360,50,400);
  tower3 = new Tower(125,360,50,400);
  tower4 = new Tower(325,300,50,400);
  tower5 = new Tower(75,300,50,400);
  tower6 = new Tower(375,300,10,400);
  tower7 = new Tower(20,300,10,400);
  circle1 = new Circle(200,130,100);
  //circle2 = new Circle(175,155,50);
  circle3 = new Circle(275,135,50);
  circle4 = new Circle(125,135,50);
  circle5 = new Circle(325,62,75);
  circle6 = new Circle(75,62,75);


  
}

function draw() {
  background(0);  
  Engine.update(engine);
  tower1.display();
  tower2.display();
  tower3.display();
  tower4.display();
  tower5.display();
  tower6.display();
  tower7.display();
  circle1.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  drawSprites();
}