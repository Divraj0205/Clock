var hr, mn ,sc;
var scAngle;
var mnAngle;
var scAngle;
var canvas;

function setup() {
  push();
  rotate(-90);
  canvas=createCanvas(600,600);
  pop();
  //createSprite(400, 200, 50, 50);
  
  
}

function draw() {
  background(0); 
  
  translate(300,300);
  //rotate(-0);

  hr=hour();
  mn=minute();
  sc=second();

  scAngle=map(sc,0,59,0,360);
  mnAngle=map(mn,0,59,0,360);
  hrAngle=map(hr%12,0,11,0,360);

  stroke("white");
  strokeWeight(8);
  noFill();
  //ellipse(300,300,400,400);

 

  angleMode(DEGREES);
  
  stroke("cyan");
  rotate(-90);
  arc(0,0,460,460,0,scAngle);
  push();
  //translate(0,0);
  rotate(scAngle);
  stroke("cyan");
  line(0,0,140,0);
  pop();

  stroke(102,255,0);
  arc(0,0,440,440,0,mnAngle);
  push();
  //translate(300,300);
  rotate(mnAngle);
  stroke(102,255,0);
  line(0,0,120,0);
  pop();

  stroke(102,255,207.5);
  arc(0,0,420,420,0,hrAngle);
  push();
  //translate(300,300);
  rotate(hrAngle);
  stroke(102,255,207.5);
  line(0,0,100,0);
  pop();
  

  drawSprites();

}