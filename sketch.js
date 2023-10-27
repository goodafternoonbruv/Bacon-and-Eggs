let userManager;
let theHobbies = [];
let hobbyList = ["Sports", "Dancing", "Singing", "Music", "Art", "Outdoors/Traveling", "Fishing", "Board Games", "Reading", "Gaming"];
let displaySwitch = false;
let tabSwitch = 1;
let theUser = null;
let tab = 0;

let maleMaleUsers = [];
let maleFemaleUsers = [];
let maleOtherUsers = [];

let femaleMaleUsers = [];
let femaleFemaleUsers = [];
let femaleOtherUsers = [];

let otherMaleUsers = [];
let otherFemaleUsers = [];
let otherOtherUsers = [];

let currUser = null;

function Switch(x) {
  tabSwitch = x;
  scroll = 0;
}

//------------------PreLoad-------------------//

function preload() { //runs completely before setup
  userManager = new List(); //create list
  getData();
}

//-----------------Setup---------------------//

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

  //signIn();
  currUser = userManager.first;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//---------------------------Draw-------------------------------//

function draw() {
  background(235, 215, 192);

  if (tabSwitch == 0) {
    if (correct == false) {
      fill(240, 50, 50);
      text("Username Or Password Is Incorrect", windowWidth / 2 - 80, windowHeight / 2 + 5);
    }
    //displayUser(); //draws an ellipse representing the user to the screen
    //drawHobbies(); //draws the hobbies in a circle on the screen
  } else if (tabSwitch == 1) {
    profileInfo();
  } else if (tabSwitch == 2) {
    listUsers(); //displays a scrollable list of all users on the screen
  } else if (tabSwitch == 3) {
    print("settings YAY");
  }
}

//-----------------TabSwitch == 0--------------------//
let button;
let button1;
let logInButton;
function signIn() {
  button = createButton('Sign Up');
  button.position(windowWidth / 2 - 100, windowHeight / 2);
  button.mousePressed(logIn); //forward it to the form

  button1 = createButton('Log In');
  button1.position(windowWidth / 2 + 100, windowHeight / 2);
  button1.mousePressed(logIn);
}

let userNameInput;
let passwordInput;
let correct = true;
function logIn() {
  button.remove();
  button1.remove();

  logInButton = createButton("Log In");
  logInButton.position(windowWidth / 2 - 20, windowHeight / 2 + 85);
  logInButton.mousePressed(searchUsers);

  userNameInput = createInput('');
  userNameInput.position(windowWidth / 2 - 90, 400);
  userNameInput.size(200);

  passwordInput = createInput('');
  passwordInput.position(windowWidth / 2 - 90, 430);
  passwordInput.size(200);
}

function searchUsers() {
  userManager.curr = userManager.first;
  let curr = userManager.curr;
  while (curr != null) {
    print(passwordInput.value() + " " + curr.password);
    if (passwordInput.value() == curr.password) {
      print("true");
    } else {
      print("fales");
    }
    if (userNameInput.value() == curr.username && passwordInput.value() == curr.password) {
      currUser = curr;
      userNameInput.remove();
      passwordInput.remove();
      logInButton.remove();
      tabSwitch = 1;
      break;
    } else {
      correct = false;
    }
    curr = curr.next;
  }
  print(currUser);
}

//-----------------TabSwitch == 1--------------------//

function profileInfo() {
  //profile pic
  fill(170);
  ellipse(windowWidth / 2, 160 - scroll, 250);
  fill(200);
  ellipse(windowWidth / 2, 155 - scroll, 100);

  let x1 = (windowWidth / 2 - 85);
  let x2 = (windowWidth / 2 - 35);
  let x3 = (windowWidth / 2 + 35);
  let x4 = (windowWidth / 2 + 85);
  let y1 = (windowHeight / 2 - 121) - scroll;
  let y2 = (windowHeight / 2 - 160) - scroll;

  let x5 = (windowWidth / 2 - 35);
  let x6 = (windowWidth / 2 + 35);
  let y5 = (windowHeight / 2 - 73) - scroll;
  bezier(x1, y1, x2, y2, x3, y2, x4, y1);
  bezier(x1, y1, x5, y5, x6, y5, x4, y1);

  textSize(25);
  fill(27, 27, 27);
  //display first and last name
  let displayText = currUser.firstName + " " + currUser.lastName;
  let sWidth = textWidth(displayText);
  text(displayText, (windowWidth / 2) - (sWidth / 2), (windowHeight / 2 - 50) - scroll);

  //display age
  displayText = "Age: " + currUser.age;
  sWidth = textWidth(displayText);
  text(displayText, (windowWidth / 2) - (sWidth / 2), (windowHeight / 2 - 10) - scroll);

  //display gender and interest
  let userGender;
  let userInterest;
  if (currUser.gender == 0) {
    userGender = "Male";
  } else if (currUser.gender == 1) {
    userGender = "Female";
  } else if (currUser.gender == 2) {
    userGender = "Other";
  }
  if (currUser.interest == 0) {
    userInterest = "Male";
  } else if (currUser.interest == 1) {
    userInterest = "Female";
  } else if (currUser.interest == 2) {
    userInterest = "Other";
  }
  displayText = userGender + " Interested in " + userInterest;
  sWidth = textWidth(displayText);
  text(displayText, (windowWidth / 2) - (sWidth / 2), (windowHeight / 2 + 30) - scroll);

  //display hobbies
  let userHobbies = [];
  let aHobby
  if (currUser.hobbies[0] == true) {
    aHobby = " Sports";
    userHobbies.push(aHobby);
  }
  if (currUser.hobbies[1] == true) {
    aHobby = " Dancing";
    userHobbies.push(aHobby);
  }
  if (currUser.hobbies[2] == true) {
    aHobby = " Singing";
    userHobbies.push(aHobby);
  }
  if (currUser.hobbies[3] == true) {
    aHobby = " Music";
    userHobbies.push(aHobby);
  }
  if (currUser.hobbies[4] == true) {
    aHobby = " Art";
    userHobbies.push(aHobby);
  }
  if (currUser.hobbies[5] == true) {
    aHobby = " Outdoors/Traveling";
    userHobbies.push(aHobby);
  }
  if (currUser.hobbies[6] == true) {
    aHobby = " Fishing";
    userHobbies.push(aHobby);
  }
  if (currUser.hobbies[7] == true) {
    aHobby = " Board Games";
    userHobbies.push(aHobby);
  }
  if (currUser.hobbies[8] == true) {
    aHobby = " Reading";
    userHobbies.push(aHobby);
  }
  if (currUser.hobbies[9] == true) {
    aHobby = " Gaming";
    userHobbies.push(aHobby);
  }
  displayText = userHobbies;
  sWidth = textWidth(displayText);
  text(displayText, (windowWidth / 2) - (sWidth / 2), (windowHeight / 2 + 70) - scroll);
  //divider
  displayText = "=========================";
  sWidth = textWidth(displayText);
  text(displayText, (windowWidth / 2) - (sWidth / 2), (windowHeight / 2 + 110) - scroll);

  displayUserHobbies();
}

function displayUserHobbies() {
  for (let i = 0; i < currUser.Matches.length; i++) {
    fill(246, 221, 121);
    rect(windowWidth / 2 - 225, i * 90 + (windowHeight / 2 + 130) - scroll, 450, 75, 8);

    fill(170);
    ellipse(windowWidth / 2 - 190, i * 90 + (windowHeight / 2 + 168) - scroll, 60);
    fill(200);
    ellipse(windowWidth / 2 - 190, i * 90 + (windowHeight / 2 + 160) - scroll, 25);
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

  while (userManager.curr != null) { //iterate through users
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

function sortUsers() { //insted of looking through all users for a match,
  //this sorts users to ensure the algo is only matching with proper gender and interests
  userManager.curr = userManager.first;
  let curr = userManager.curr;

  while (curr != null) { //sorts users based on their gender
    if (curr.gender == 0) {
      //-------------Gender Male---------//
      if (curr.interest == 0) {
        maleMaleUsers.push(curr);
      } else if (curr.interest == 1) {
        maleFemaleUsers.push(curr);
      } else if (curr.interest == 2) {
        maleOtherUsers.push(curr);
      }
      //i++;
    } else if (curr.gender == 1) {
      //--------------Gender Female-----------//
      if (curr.interest == 0) {
        femaleMaleUsers.push(curr);
      } else if (curr.interest == 1) {
        femaleFemaleUsers.push(curr);
      } else if (curr.interest == 2) {
        femaleOtherUsers.push(curr);
      }
      //j++;
    } else if (curr.gender == 2) {
      //---------------Gender Other--------------//
      if (curr.interest == 0) {
        otherMaleUsers.push(curr);
      } else if (curr.interest == 1) {
        otherFemaleUsers.push(curr);
      } else if (curr.interest == 2) {
        otherOtherUsers.push(curr);
      }
      //b++;
    }
    curr = curr.next;
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
  // if (tabSwitch == 1) {
  //   if (scroll <= 10 && scroll >= currUser.Matches.length * 50) {
  //     scroll += event.delta / 3; //calculates scroll
  //   }
  // } else {
  //   scroll += event.delta / 3; //calculates scroll
  // }
  scroll += event.delta / 3; //calculates scroll
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
    potentialMatches = []; //creates an list for users matches
    //--------------~!~Gender Male~!~-------------//
    if (curr.gender == 0) {
      //-------------Interest Male-----------//
      if (curr.interest == 0) {
        for (let i = 0; i < maleMaleUsers.length; i++) {
          let user = maleMaleUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.dist = d;
          potentialMatches.push(user);
        }
        //--------------Interest Female-----------//
      } else if (curr.interest == 1) {
        for (let i = 0; i < femaleMaleUsers.length; i++) {
          let user = femaleMaleUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.dist = d;
          potentialMatches.push(user);
        }
        //------------Interest Other-------------//
      } else if (curr.interest == 2) {
        for (let i = 0; i < otherMaleUsers.length; i++) {
          let user = otherMaleUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.dist = d;
          potentialMatches.push(user);
        }
      }
      //---------------~!~Gender Female~!~----------//
    } else if (curr.gender == 1) {
      //-------------Interest Male-----------//
      if (curr.interest == 0) {
        for (let i = 0; i < maleFemaleUsers.length; i++) {
          let user = maleFemaleUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.dist = d;
          potentialMatches.push(user);
        }
        //--------------Interest Female-----------//
      } else if (curr.interest == 1) {
        for (let i = 0; i < femaleFemaleUsers.length; i++) {
          let user = femaleFemaleUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.dist = d;
          potentialMatches.push(user);
        }
        //------------Interest Other-------------//
      } else if (curr.interest == 2) {
        for (let i = 0; i < otherFemaleUsers.length; i++) {
          let user = otherFemaleUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.dist = d;
          potentialMatches.push(user);
        }
      }
      //---------------~!~Gender Other~!~------------//
    } else if (curr.gender == 2) {
      if (curr.interest == 0) {
        for (let i = 0; i < maleOtherUsers.length; i++) {
          let user = maleOtherUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.dist = d;
          potentialMatches.push(user);
        }
        //--------------Interest Female-----------//
      } else if (curr.interest == 1) {
        for (let i = 0; i < femaleOtherUsers.length; i++) {
          let user = femaleOtherUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.dist = d;
          potentialMatches.push(user);
        }
        //------------Interest Other-------------//
      } else if (curr.interest == 2) {
        for (let i = 0; i < otherOtherUsers.length; i++) {
          let user = otherOtherUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.dist = d;
          potentialMatches.push(user);
        }
      }
    }

    quickSort(0, potentialMatches.length - 1);
    curr.Matches = potentialMatches;
    curr = curr.next;
  }
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