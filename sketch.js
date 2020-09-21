const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
const Render= Matter.Render;

var engine, world;
var umbrella
var maxDrops=100;

function preload(){
    
}

function setup(){
   var Canvas=createCanvas(400,400);
    
   engine= Engine.create();
   world= engine.world;

    umbrella= new Umbrella(200,320);
    drop=new Drop(200,-10)
    drop1=new Drop(230,0)
    drop2=new Drop(210,-20)
    drop3=new Drop(220,0)
    drop4=new Drop(150,-5)
    drop5=new Drop(170,-2)
    drop6=new Drop(190,0)
    drop7=new Drop(180,-10)

}

function draw(){
    background("white");
    Engine.update(engine);

    umbrella.display();
    drop.display();
    drop1.display();
    drop2.display();
    drop3.display();
    drop4.display();
    drop5.display();
    drop6.display();
    drop7.display();
 
}   

