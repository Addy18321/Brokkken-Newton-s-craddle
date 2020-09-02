const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird1, bird2, bird3, bird4, slingShot1, slingShot2, slingShot3, slingShot4;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird1 = new Bird(200,50);
    bird2 = new Bird(250,50);
    bird3 = new Bird(300,50);
    bird4 = new Bird(350,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot1 = new SlingShot(bird1.body,{x:200, y:50});
    slingshot2 = new SlingShot(bird2.body,{x:250, y:50});
    slingshot3 = new SlingShot(bird3.body,{x:300, y:50});
    slingshot4 = new SlingShot(bird4.body,{x:350, y:50});
}

function draw(){
    background("255");
    Engine.update(engine);
    //strokeWeight(4);
   

    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();
    
    //log6.display();
    slingshot1.display();    
    slingshot2.display(); 
    slingshot3.display();    
    slingshot4.display(); 
}

function mouseDragged(){
    Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32) {
        slingshot.attach(bird1.body);
    }
}


async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "yellow";
    }
    else{
        bg = "red";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}