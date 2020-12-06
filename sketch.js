const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,bird;
var box1,pig1, log1, box3,box4, pig2,log2;
var backgroundImg;
function preload(){
    backgroundImg = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    bird = new Bird(100,100);

    box1 = new Box(700,380,50,50);
    box2 = new Box(900,380,50,50);
    pig1 = new Pig(800,380);  
    
    log1 = new Log(800,360,250, PI/2);


    box3 = new Box(700,340,50,50);
    box4 = new Box(900,340,50,50);
    pig2 = new Pig(800,340);  
    
    log2 = new Log(800,330,250, PI/2);

    box5 = new Box(800,320,50,50);

    log3 = new Log(750,320,120,PI/7);
    log4 = new Log(850,320,120,-PI/7)


}

function draw(){
    background( backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    //ground.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}