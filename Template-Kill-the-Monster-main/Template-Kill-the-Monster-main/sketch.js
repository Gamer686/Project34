const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world
var bgI;
var ground;
var superhero;
var monster;
function preload() {
bgI = loadImage("/Images/GamingBackground.png");

}

function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (200,400,2000,5);
  superhero = new Superhero(100,3,100,100);
monster = new Monster(380,200,100,100)
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER)
  background(bgI);
  ground.display();
superhero.display();
monster.display();
}

