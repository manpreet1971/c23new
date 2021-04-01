const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground, box2;

function setup() {
    createCanvas(400, 400)
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100, 100, 50, 50);;
    box2 = new Box(250, 100, 10, 70);
   // ground = new Ground(10, 350, 800, 50);
    ground = new Ground(200, 350, 400, 50);
    ground.shapeColor = "green"

}
function draw() {
    background("yellow")
    Engine.update(engine);
   box1.display();
    box2.display();
    ground.display();
}

















// const Engine = Matter.Engine;
// const World= Matter.World;
// const Bodies = Matter.Bodies;

// var engine, world;
// var box1;

// function setup(){
//     var canvas = createCanvas(400,400);
//     engine = Engine.create();
//     world = engine.world;

//     box1 = new Box(200,300,50,50);
// }

// function draw(){
//     background(0);
//     Engine.update(engine);
//     box1.display();

// }