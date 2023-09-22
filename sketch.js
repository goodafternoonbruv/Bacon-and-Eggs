var x = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  windowResized();
}

function draw() {
  matchX()
  x+=9;
  //createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function menu() {
 
}

function matchX() {
  background(254, 201, 1);
  //translate(-(x),10)
  textFont("Helvetica")
  fill(0)
  noStroke();
  textSize(30);
  text("MaxMate",185,50);
  fill(200,0,0)
  stroke(10)
  fill(245);
  rect(50,70,400,400,10)
  fill(200)
  ellipse(240,200,70,70)
  rect(163,250,150,60,20)
  textSize(20)
  noStroke()
  fill(0)
  text("Maxwell",130,355);
    text("Age: 2",130,390);
    text("Match Rating: 10/10",130,430);
  textSize(25)
  fill(255,0,0)
  stroke(100,0,0)
  text("MATCH!",196,109);
}

function begin() {
  background(254, 201, 1);
  textFont("Helvetica")
  fill(0)
  noStroke();
  textSize(30);
  text("MaxMate",185,100);
  textSize(20)
  text("Find your Max, and Mate!",130,135);
  fill(255);
  rect(175,270,150,40,30)
  fill(0)
  text("Begin",230,296);
 
}
