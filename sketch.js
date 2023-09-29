let userManager;
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  windowResized();
  uploadData();
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

}

function uploadData()
{
  userManager = new List();
}