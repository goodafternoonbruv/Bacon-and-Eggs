import{hi} from 'test.js';
var x = 0;
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  windowResized();
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //mousePressed(hi());
  hi();
}

