let userManager;
function setup() {
  //load data
  createCanvas(windowWidth, windowHeight);
  userManager = new List(); //create list
  getData();
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw()
{
  Match();
}

function Match()
{
  strokeWeight(5);
  stroke(80, 80, 190);
  translate(width/2, height/2);
  let d = 36;
  for (let i = 0; i<360; i++)
  {
    if(d == 36)
    {
    let r = 300;
    let x = r*cos(i);
    let y = r*sin(i);
    print(i/36);
    
    point(x, y);
    d = 0;
    }
    d++;

  }

  let xPos = windowWidth/2;
  let yPos = windowHeight/2;
  point(xPos, yPos);
}