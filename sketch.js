const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var base;
var block1,  block2,  block3,  block4,  block5,  block6 , block7,  block8,  block9;
var polygon;
var rubber;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


//level1
block1 = new Box(600,322,30,40);
block2 = new Box(570,322,30,40);
block3 = new Box(630,322,30,40);
block4 = new Box(540,322,30,40);
block5 = new Box(660,322,30,40);

//level2
block6 = new Box(600,282,30,40); 
block7 = new Box(570,282,30,40); 
block8 = new Box(630,282,30,40); 

//level3
block9 = new Box(600,242,30,40); 



polygon = new Polygon(50,200,20);




rubber= new Slingshot(this.polygon, {x:100, y:200});



base = new Ground (600,350, 300, 15);

}

function draw(){
 background(0);
   
Engine.update(engine);


block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
fill("lightblue");
block6.display();
block7.display();
block8.display();
fill("lightpink");
block9.display();
base.display();
polygon.display();
fill("lightgreen");
rubber.display();




}