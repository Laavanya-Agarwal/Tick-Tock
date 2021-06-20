function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200)
  rotate (-90);

  hr = hour();
  mn = minute();
  sc = second();
  
  strokeWeight(7);
  noFill();
  line(0,0,100,0);

  //to show how many seconds have passed by
  stroke("red");
  scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);
  //to show how many minutes have passed by
  stroke("#72F23F");
  mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);
  //to show how many hours have passed by
  stroke("blue");
  hrAngle = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,hrAngle);

  //to show seconds hand
  push();
  rotate(scAngle);
  stroke("red");
  line(0,0,100,0);
  pop();
  //to show minutes hand
  push();
  rotate(mnAngle);
  stroke("#72F23F");
  line(0,0,75,0);
  pop();
  //to show hours hand
  push();
  rotate(hrAngle);
  stroke("blue");
  line(0,0,50,0);
  pop();
  
  //to keep a small gap between all the hands
  stroke("black");
  point (0,0);
  }