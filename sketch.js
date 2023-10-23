let userManager;
let theHobbies = [];
let hobbyList = ["Sports", "Dancing", "Singing", "Music", "Art", "Outdoors/Traveling", "Fishing", "Board Games", "Reading", "Gaming"];
let displaySwitch = false;
let maleUsers = [];
let femaleUsers = [];
let otherUsers = [];
let currUser = null;

function preload() {
  userManager = new List(); //create list
  getData();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  getUserNames(); //first and last name of each user for search
  let input = select('#searchInput');
  input.input(search);

  angleMode(DEGREES);
  createHobbies(); //creates 10 hobbies with coodinates to be displayed
  sortUsers(); //seperates users into male, female and other array lists
  graph(); //calculates and graphs each users postion
  sizzle(); //finds matches for each user
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//---------------------------Draw-------------------------------//

function draw() {
  background(235, 215, 192);
  if (displaySwitch == false) {
    displayUser(); //draws an ellipse representing the user to the screen
    drawHobbies(); //draws the hobbies in a circle on the screen
  } else if (displaySwitch == true) {
    listUsers(); //displays a scrollable list of all users on the screen
  }
}

//----------------------------Hobby functions -------------------------------//

function createHobbies() {
  let j = 0;
  for (let i = 0; i < 360; i += 36) //loops to define position on screen
  {
    let r = 300;
    let x = r * cos(i); //determines x and y positions on screen
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
        x = x + theHobbies[i].pos.x; //if the user has selected the hobby as true
        y = y + theHobbies[i].pos.y;
        j++;
      }
    }

    x = x / j; //calculates average of all x coordinates
    y = y / j;
    x = x * 3; //spaces out coodinates for better visuals
    y = y * 3;
    z = userManager.curr.age;
    let position = createVector(x, y, z); //creates and passes through a positon vector
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

function keyTyped() { //switches between graph of users and list of users
  if (key == 'q' || key == 'Q') {
    displaySwitch = false;
  } else if (key == 'w' || key == 'W') {
    displaySwitch = true;
  }
}

function sortUsers() {
  userManager.curr = userManager.first;
  let i = 0; //make three more arraylists each to make sure user interests match
  let j = 0;
  let b = 0;
  while (userManager.curr != null) { //sorts users based on their gender
    if (userManager.curr.gender == 0) {
      maleUsers[i] = userManager.curr;
      i++;
    } else if (userManager.curr.gender == 1) {
      femaleUsers[j] = userManager.curr;
      j++;
    } else if (userManager.curr.gender == 2) {
      otherUsers[b] = userManager.curr;
      b++;
    }
    userManager.curr = userManager.curr.next;
  }
}

let scroll = 0;
function listUsers() {
  let i = 2;
  userManager.curr = userManager.first;
  while (userManager.curr != null) { //displays user first name, last name and age
    if (i * 20 - scroll >= 30) {
      fill(0);
      text(userManager.curr.firstName, 200, i * 20 - scroll);
      text(userManager.curr.lastName, 250, i * 20 - scroll);
      text(userManager.curr.pos.z, 300, i * 20 - scroll);
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

        if (mouseIsPressed == true) { //deletes the user from the array list
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
  if (displaySwitch == true) {
    scroll += event.delta / 3; //calculates scroll
  }
}

function deleteUser(user) {
  let curr = userManager.first;
  let prev = null;
  while (userManager.curr != null) { //re refrences users to delete a user
    if (curr.firstName == user.firstName && curr.lastName == user.lastName && curr.age == user.age) {
      if (prev == null) { //if user is first in list
        userManager.first = user.next;
        break;
      } else {
        prev.next = curr.next;
        break;
      }
    }
    prev = curr;
    curr = curr.next;
  }

  curr = userManager.first;
  while (curr != null) {
    curr = curr.next;
  }
}

let potentialMatches;
function sizzle() {
  userManager.curr = userManager.first;
  let curr = userManager.curr;
  while (curr != null) {
    let i = 0;
    potentialMatches = [];
    if (curr.interest == 0) {
      for (let i = 0; i < maleUsers.length; i++) { //finds matches based on interest of user
        let user = maleUsers[i];
        d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
        user.dist = d;
        potentialMatches[i] = user;
      }
    } else if (curr.interest == 1) {
      for (let i = 0; i < femaleUsers.length; i++) {
        let user = femaleUsers[i];
        d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
        user.dist = d;
        potentialMatches[i] = user;
      }
    } else if (curr.interest == 2) {
      for (let i = 0; i < otherUsers.length; i++) {
        let user = otherUsers[i];
        d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
        user.dist = d;
        potentialMatches[i] = user;
      }
    }
    quickSort(0, potentialMatches.length - 1);
    //print("Sorted list:");
    //print(potentialMatches);
    curr.Matches = potentialMatches;
    print(curr.Matches);
    //loop through array list that is of the users interest
    //measure dist between each user and store in arraylist (maybe store object and assign variable?)
    //sort into order
    //put into instances matches arraylist

    curr = curr.next;
  }
  // curr = userManager.first;
  // while (curr != null) {
  //   curr.dist = 0;
  //   curr = curr.next;
  // }
}

function quickSort(low, high) {
  let i = low
  let j = high;
  //This determines the pivot by taking the value of the index in the middle of the array. Any numbers larger will go on the right side and any 
  let pivot = potentialMatches[round(low + (high - low) / 2)].dist;
  while (i <= j) {
    //This while loop goes throung the list from left to right. As soon as it finds a number that is greater than the pivot, it stops.
    while (potentialMatches[i].dist < pivot) {
      i++;
    }
    //This does the same as the previous while loop except it starts from the right and finds a number less than the pivot
    while (potentialMatches[j].dist > pivot) {
      j--;
    }
    //Before swapping the two numbers, it checks if 'i' and'j' have crossed. If they have, it means that the list has been sorted based on the pivot
    if (i <= j) {
      swap(i, j);
      i++;
      j--;
    }
  }
  //This prosses continues with the left half of the list untill there is only one number left. At this point, it moves on to the list to the right of the pivot number
  if (low < j) {
    quickSort(low, j);
  }
  if (i < high) {
    quickSort(i, high);
  }
}

function swap(a, b) {
  //The swap method works by storing one number in a variable, replacing it's origional spot with the new number, and then putting the number in the variable in the other numbers spot
  let temp = potentialMatches[a];
  potentialMatches[a] = potentialMatches[b];
  potentialMatches[b] = temp;
}