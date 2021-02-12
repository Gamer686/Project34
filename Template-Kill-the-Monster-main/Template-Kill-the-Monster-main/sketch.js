const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world
var bgI;
var ground;
function preload() {
bgI = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (200,400,600,5);
  
  engine.run(engine);
}

function draw() {
  rectMode(CENTER)
  background(bgI);
  ground.display();

}

