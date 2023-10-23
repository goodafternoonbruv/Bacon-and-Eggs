let userManager;
let theHobbies = [];
let hobbyList = ["Sports", "Dancing", "Singing", "Music", "Art", "Outdoors/Traveling", "Fishing", "Board Games", "Reading", "Gaming"];
let h = [true, true, false, false, false, false, true, false, false, true]
let displaySwitch = false;

function preload() {
  userManager = new List(); //create list
  getData();
}

///BEGGIN


// public/script.js

document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.getElementById('save-button');
  const form = document.getElementById('data-form');
  const responseMessage = document.getElementById('response-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting and reloading the page
    saveData();
  });

  function saveData() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const name = nameInput.value;
    const email = emailInput.value;

    if (name && email) {
      const data = { name, email };
      fetch('/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.text())
        .then((message) => {
          responseMessage.style.display = 'block';
          responseMessage.textContent = message;
        })
        .catch((error) => {
          responseMessage.style.display = 'block';
          responseMessage.textContent = 'Error saving data on the server';
        });
    }
  }
});


//ENF



function setup() {
  createCanvas(windowWidth, windowHeight);

<<<<<<< Updated upstream
=======
  getUserNames();
  let input = select('#searchInput');
  input.input(search);

  saveButton.mousePressed(saveData);


  // getUserNames();
>>>>>>> Stashed changes
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
  } else if (displaySwitch) {
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

let yList;
let scroll = 0;
function listUsers() {
  yList = 150;
  let i = 0;
  userManager.curr = userManager.first;
  while (userManager.curr != null) {
    if (yList >= 140) {
      if (mouseX >= 200 && mouseX <= 300 && mouseY >= i * 15 + yList - scroll - 13 && mouseY <= i * 15 + yList - scroll + 15) {
        fill(200);
        rect(200, i * 15 + yList - scroll - 13, 100, 16, 2);
        fill(0);
        text("Delete?", 130, i * 15 + yList - scroll);

        if (mouseIsPressed == true) {
          deleteUser(userManager.curr);
        }
      }
      // let button = createButton("Delete");
      // button.position(300, i * 15 + yList);
      // button.mousePressed(deleteUser(userManager.curr));

      fill(0);
      text(userManager.curr.firstName, 200, i * 15 + yList - scroll);
      text(userManager.curr.lastName, 250, i * 15 + yList - scroll);

      yList += 15;
      i++;
      userManager.curr = userManager.curr.next;
    }
  }
}

function mouseWheel(event) {
  scroll += event.delta - 100;
}

function deleteUser(user) {
  print(user.firstName + " " + user.lastName + " should be deleted");
  let curr = userManager.first;
  let prev;
  while (userManager.curr != null) {
    if (curr.firstName == user.firstName && curr.lastName == user.lastName && curr.age == user.age) {
      if (userManager.first.firstName == user.firstName && userManager.first.lastName == user.lastName && userManager.first.age == user.age) {
        userManager.first = curr.next;
      } else {
        prev.next = curr.next;
      }
      break;
    }

    prev = userManager.curr;
    userManager.curr = userManager.curr.next;
  }
}