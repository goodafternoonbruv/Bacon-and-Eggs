let userManager;
let theHobbies = [];
let hobbyList = ["Sports", "Dancing", "Singing", "Music", "Art", "Outdoors/Traveling", "Fishing", "Board Games", "Reading", "Gaming"];
let h = [true, true, false, false, false, false, true, false, false, true]
let displaySwitch = false;

function preload() {
  userManager = new List(); //create list
  getData();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let input = select('#searchInput');
  input.input(search.search);

  getUserNames();
  angleMode(DEGREES);
  createHobbies();
  graph();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//---------------------------Draw-------------------------------//

function draw() {
  background(235, 215, 192);
  if (displaySwitch == false) {
    displayUser();
    drawHobbies();
  } else if (displaySwitch == true) {
    listUsers();
  }
}

//----------------------------Hobby functions -------------------------------//

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
    x = x * 4;
    y = y * 4;
    let position = createVector(x, y);
    userManager.curr.pos = position;

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

//---------------------------Hobby Class-------------------------------//

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

//---------------------------User management-------------------------------//

function keyTyped() {
  if (key == 'q' || key == 'Q') {
    displaySwitch = false;
  } else if (key == 'w' || key == 'W') {
    displaySwitch = true;
  }
}

let scroll = 0;
function listUsers() {
  let i = 2;
  userManager.curr = userManager.first;
  while (userManager.curr != null) {
    if (i * 20 - scroll >= 30) {
      fill(0);
      text(userManager.curr.firstName, 200, i * 20 - scroll);
      text(userManager.curr.lastName, 250, i * 20 - scroll);
    }
    i++;
    userManager.curr = userManager.curr.next;
  }

  i = 2;
  userManager.curr = userManager.first;
  while (userManager.curr != null) {
    if (i * 20 - scroll >= 30) {
      if (mouseX >= 200 && mouseX <= 300 && mouseY >= i * 20 - scroll - 12 && mouseY <= i * 20 - scroll + 5) {
        fill(200);
        rect(200, i * 20 - scroll - 10, 100, 16);
        fill(0);
        text("Delete?", 130, i * 20 - scroll);

        if (mouseIsPressed == true) {
          deleteUser(userManager.curr);
          break;
        }
      }
    }
    i++;
    userManager.curr = userManager.curr.next;
  }
}

function mouseWheel(event) {
  scroll += event.delta / 3;
}

function deleteUser(user) {
  let curr = userManager.first;
  let prev = null;
  while (userManager.curr != null) {
    print(curr.firstName);
    if (curr.firstName == user.firstName && curr.lastName == user.lastName && curr.age == user.age) {
      print("Found correct user");
      if (prev == null) {
        print("User is first");
        userManager.first = user.next;
        break;
      } else {
        print("User is not first");
        prev.next = curr.next;
        break;
      }
    }
    prev = curr;
    curr = curr.next;
  }

  curr = userManager.first;
  while (curr != null) {
    print(curr);
    curr = curr.next;
  }
}