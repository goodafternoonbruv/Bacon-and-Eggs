//import{hi} from 'test.js';
var x = 0;
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  windowResized();
  hi();
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed == true)
  {
    hi();
  }
}

