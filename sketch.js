let userManager;
let theHobbies = [];
let hobbyList = ["Sports", "Dancing", "Singing", "Music", "Art", "Outdoors/Traveling", "Fishing", "Board Games", "Reading", "Gaming"];
let h = [true, true, false, false, false, false, true, false, false, true]

function preload() {
  userManager = new List(); //create list
  getData();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  createHobbies();
  graph();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  displayUser();
  drawHobbies();
}

function createHobbies() {
  let j = 0;
  for (let i = 0; i < 360; i += 36) //loops to define position on screen
  {
    let r = 300;
    let x = r * cos(i);
    let y = r * sin(i);

    let pos = createVector(x, y); //converts x and y into a vector
    let hobby = new Hobbies(pos, hobbyList[j], j); //created a hobby with the appripriate name
    theHobbies[j] = hobby; //adds the hobby to the list
    j++;
  }
}

function drawHobbies() {
  for (let i = 0; i < theHobbies.length; i++) {
    theHobbies[i].display();
  }
}

function graph() {
  let x = 0;
  let y = 0;
  let j = 0;
  userManager.curr = userManager.first;

  while (userManager.curr != null) {
    for (let i = 0; i < userManager.curr.hobbies.length; i++) {
      if (userManager.curr.hobbies[i] == true) {
        x = x + theHobbies[i].pos.x;
        y = y + theHobbies[i].pos.y;
        j++;
      }
    }

    x = x / j;
    y = y / j;
    let position = createVector(x, y);
    userManager.curr.pos = position;
    //print(position);

    userManager.curr = userManager.curr.next;
  }


}

function displayUser() {
  translate(width / 2, height / 2);
  userManager.curr = userManager.first;
  while (userManager.curr != null) {
    userManager.curr.display();
    userManager.curr = userManager.curr.next;
  }
}


class Hobbies {
  constructor(pos, name, hobbyNum) {
    this.pos = pos;
    this.name = name;
  }

  display() {
    strokeWeight(5);
    stroke(0);
    fill(0);
    ellipse(this.pos.x, this.pos.y, 5);
    noStroke();
    text(this.name, this.pos.x - 30, this.pos.y - 15);


  }
}