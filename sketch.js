let userManager;
let theHobbies = [];
let hobbyList = ["Sports", "Dancing", "Singing", "Music", "Art", "Outdoors/Traveling", "Fishing", "Board Games", "Reading", "Gaming"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  userManager = new List(); //create list

  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw()
{
  createHobbies();
}

function createHobbies()
{
  let j = 0;
  for (let i = 0; i<360; i+=36) //loops to define position on screen
  {
    let r = 300;
    let x = r*cos(i);
    let y = r*sin(i);

    let pos = createVector(x, y); //converts x and y into a vector
    let hobby = new Hobbies(pos, hobbyList[j], j); //created a hobby with the appripriate name
    theHobbies[j] = hobby; //adds the hobby to the list
    j++;
  }


  translate(width/2, height/2);
  for (let i=0; i<theHobbies.length; i++)
  {
    theHobbies[i].display();
    //print(theHobbies[i]);
  }
}


class Hobbies
{
  constructor(pos, name, hobbyNum)
  {
    this.pos = pos;
    this.name = name;
  }

  display()
  {
    strokeWeight(5);
    stroke(0);
    fill(0);
    ellipse(this.pos.x, this.pos.y, 5);
    noStroke();
    text(this.name, this.pos.x-30, this.pos.y-15);
  }
}