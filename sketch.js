const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

var engine,world;
var particles=[],plinklos=[],divisions=[];
var divisonHeight=300
var plinklo


function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground = new Ground(width/2,height,width,20);
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Ground(k,height-divisonHeight/2,10,divisonHeight));
  }
  for(var j=40;j<=width;j=j+50){
    plinklos.push(new Plinklo(j,175,10));
  }
  for(var j=10;j<=width;j=j+50){
    plinklos.push(new Plinklo(j,240,10));
  }
  for(var j=40;j<=width;j=j+50){
    plinklos.push(new Plinklo(j,300,10));
  }
  for(var j=10;j<=width;j=j+50){
    plinklos.push(new Plinklo(j,365,10));
  }




}

function draw() {
  background(0,0,0);  

  Engine.update(engine);  
ground.Display();
for(var k=0;k<divisions.length;k++){
  divisions[k].Display();
}
for (var i = 0; i < plinklos.length; i++) {
     
  plinklos[i].display();
  
}

if(frameCount%40===0){
  particles.push(new Particle(random(100, 700), 10,10));
  
}

for (var j = 0; j < particles.length; j++) {

  particles[j].display();
}




}