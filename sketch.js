import{hi} from 'test.js';
export{hi};
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

