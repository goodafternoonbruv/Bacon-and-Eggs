let userManager;
let theHobbies = [];
let hobbyList = ["Sports", "Dancing", "Singing", "Music", "Art", "Outdoors/Traveling", "Fishing", "Board Games", "Reading", "Gaming"];
let tabSwitch = 0;

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
let displayingUser = null;

let bacon;
let pan;

function Switch(x) {
  if (currUser != null) {
    tabSwitch = x; //switches the tab based on html tabs pressed
  }
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

  signIn();
  //currUser = userManager.first;
  //displayingUser = currUser;

  bacon = loadImage('bacon.png');
  pan = loadImage('pan.png');
  makeUsers();
}

function makeUsers() {
  userManager.curr = userManager.first;
  while (userManager.curr != null) {
    print(userManager.curr);
    userManager.curr = userManager.curr.next;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//---------------------------Draw-------------------------------//

function draw() {
  background(235, 215, 192);

  if (tabSwitch == 0) {
    if (correct == false) {
      fill(240, 50, 50); //error message displayed if username or pasword is incorrect
      textSize(15);
      text("Username Or Password Is Incorrect", windowWidth / 2 - 100, windowHeight / 2 + 5);
    }
  } else if (tabSwitch == 1) {
    profileInfo();
    //displayUser(); //draws an ellipse representing the user to the screen
    //drawHobbies(); //draws the hobbies in a circle on the screen
  } else if (tabSwitch == 2) {
    displayMatches()
    //listUsers(); //displays a scrollable list of all users on the screen
  } else if (tabSwitch == 3) {
    displaySettings()
  }
}

//-----------------TabSwitch == 0, SignUp/LogIn--------------------//
let button;
let button1;
let logInButton;
function signIn() { //creates 2 buttons
  // button = createButton('Sign Up'); //one for creating an account
  // button.position(windowWidth / 2 - 100, windowHeight / 2);
  // button.mousePressed(logIn); //forward it to the signup form

  button1 = createButton('Log In'); //one for logging into an account
  button1.position(windowWidth / 2, windowHeight / 2);
  button1.mousePressed(logIn);
}

let userNameInput;
let passwordInput;
let correct = true;
function logIn() {
  // button.remove(); //deletes previous buttons
  button1.remove();

  logInButton = createButton("Log In"); //button for checking login credidentials
  logInButton.position(windowWidth / 2 - 20, windowHeight / 2 + 85);
  logInButton.mousePressed(searchUsers);

  userNameInput = createInput(''); //input for username
  userNameInput.position(windowWidth / 2 - 100, 400);
  userNameInput.size(200);

  //passwordInput = createInput(''); //input for password
  //passwordInput.position(windowWidth / 2 - 100, 430);
  //passwordInput.size(200);
}

function searchUsers() {
  userManager.curr = userManager.first;
  let curr = userManager.curr;
  while (curr != null) {
    if (userNameInput.value() === curr.username) { //checks if username and password match a currend user
      currUser = curr; //specifys the user that loged in. used for displaying info
      displayingUser = currUser;
      userNameInput.remove(); //removes inputs and buttons
      //passwordInput.remove();
      logInButton.remove();
      tabSwitch = 1; //switches to the profile page
      break;
      //}
    } else {
      correct = false; //if it does not match, it will display and error message
    }
    curr = curr.next;
  }
}

//-----------------TabSwitch == 1, Profile--------------------//

function profileInfo() {
  fill(170); //draws an anonymous prifile icon
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
  let y5 = (windowHeight / 2 - 75) - scroll;
  bezier(x1, y1, x2, y2, x3, y2, x4, y1);
  bezier(x1, y1, x5, y5, x6, y5, x4, y1); //end of profile pic

  textSize(25);
  fill(27, 27, 27);
  //displays the logged in users name
  let displayText = displayingUser.firstName + " " + displayingUser.lastName;
  let sWidth = textWidth(displayText); //gets the width of users name for formatting
  text(displayText, (windowWidth / 2) - (sWidth / 2), (windowHeight / 2 - 50) - scroll);

  //display age
  displayText = "Age: " + displayingUser.age;
  sWidth = textWidth(displayText);
  text(displayText, (windowWidth / 2) - (sWidth / 2), (windowHeight / 2 - 10) - scroll);

  //display gender and interest
  let userGender;
  let userInterest;
  if (displayingUser.gender == 0) { //converts gender numbers into strings
    userGender = "Male";
  } else if (displayingUser.gender == 1) {
    userGender = "Female";
  } else if (displayingUser.gender == 2) {
    userGender = "Other";
  }
  if (displayingUser.interest == 0) {
    userInterest = "Male";
  } else if (displayingUser.interest == 1) {
    userInterest = "Female";
  } else if (displayingUser.interest == 2) {
    userInterest = "Other";
  }
  displayText = userGender + " Interested in " + userInterest;
  sWidth = textWidth(displayText);
  text(displayText, (windowWidth / 2) - (sWidth / 2), (windowHeight / 2 + 30) - scroll);

  //display hobbies
  displayText = userHobbyList();
  sWidth = textWidth(displayText);
  text(displayText, (windowWidth / 2) - (sWidth / 2), (windowHeight / 2 + 70) - scroll);

  //divider between user info and user friends
  displayText = "==========Matches==========";
  sWidth = textWidth(displayText);
  text(displayText, (windowWidth / 2) - (sWidth / 2), (windowHeight / 2 + 115) - scroll);

  displayUserFriends();
  if (currUser != displayingUser) {
    backButton(); //button to return to own profile after looking at other profile
  }
}

function userHobbyList() {
  let userHobbies = [];
  let aHobby; //converst hobbies into strings
  if (displayingUser.hobbies[0] == true) {
    aHobby = " Sports";
    userHobbies.push(aHobby);
  }
  if (displayingUser.hobbies[1] == true) {
    aHobby = " Dancing";
    userHobbies.push(aHobby);
  }
  if (displayingUser.hobbies[2] == true) {
    aHobby = " Singing";
    userHobbies.push(aHobby);
  }
  if (displayingUser.hobbies[3] == true) {
    aHobby = " Music";
    userHobbies.push(aHobby);
  }
  if (displayingUser.hobbies[4] == true) {
    aHobby = " Art";
    userHobbies.push(aHobby);
  }
  if (displayingUser.hobbies[5] == true) {
    aHobby = " Outdoors/Traveling";
    userHobbies.push(aHobby);
  }
  if (displayingUser.hobbies[6] == true) {
    aHobby = " Fishing";
    userHobbies.push(aHobby);
  }
  if (displayingUser.hobbies[7] == true) {
    aHobby = " Board Games";
    userHobbies.push(aHobby);
  }
  if (displayingUser.hobbies[8] == true) {
    aHobby = " Reading";
    userHobbies.push(aHobby);
  }
  if (displayingUser.hobbies[9] == true) {
    aHobby = " Gaming";
    userHobbies.push(aHobby);
  }
  displayText = userHobbies;
  sWidth = textWidth(displayText);
  return displayText;
}

function displayUserFriends() {
  if (currUser == displayingUser) { //ensures user is on own profile
    for (let i = 0; i < displayingUser.friends.length; i++) {
      if (mouseX > windowWidth / 2 - 225 && mouseX < windowWidth / 2 + 225 && mouseY > i * 90 + (windowHeight / 2 + 130) - scroll && mouseY < i * 90 + (windowHeight / 2 + 130) - scroll + 75) {
        fill(266, 241, 141);
        if (mouseIsPressed) {
          displayingUser = currUser.friends[i];
        }
      } else {
        fill(246, 221, 121);
      }

      if (currUser == displayingUser) {
        rect(windowWidth / 2 - 225, i * 90 + (windowHeight / 2 + 130) - scroll, 450, 75, 8);


        fill(170); //anonymous profile pic
        ellipse(windowWidth / 2 - 190, i * 90 + (windowHeight / 2 + 168) - scroll, 60);
        fill(200);
        ellipse(windowWidth / 2 - 190, i * 90 + (windowHeight / 2 + 160) - scroll, 25);

        let x1 = windowWidth / 2 - 215;
        let x2 = (windowWidth / 2 - 190) - 9;
        let x3 = (windowWidth / 2 - 190) + 9;
        let x4 = windowWidth / 2 - 165;
        let y1 = i * 90 + (windowHeight / 2 + 185) - scroll;
        let y2 = i * 90 + (windowHeight / 2 + 173) - scroll;
        let y3 = i * 90 + (windowHeight / 2 + 203) - scroll;
        bezier(x1, y1, x2, y2, x3, y2, x4, y1);
        bezier(x1, y1, x2, y3, x3, y3, x4, y1); //end of pic

        //displays friends info
        let displayText = " | " + displayingUser.friends[i].firstName + " " + displayingUser.friends[i].lastName + " | " + displayingUser.friends[i].age;
        textSize(20);
        fill(27, 27, 27);
        text(displayText, windowWidth / 2 - 145, i * 90 + (windowHeight / 2 + 175) - scroll);
      }
    }
  }
}

function backButton() { //returns to own profile
  if (mouseX > 360 && mouseX < 490 && mouseY > 30 && mouseY < 80) {
    fill(260, 175, 140);
    if (mouseIsPressed) {
      displayingUser = currUser;
    }
  } else {
    fill(240, 155, 120);
  }
  rect(360, 30, 130, 50, 5)
  fill(27, 27, 27);
  textSize(25);
  text("Back", 393, 64);
}

//-----------------TabSwitch == 2, Matches--------------------//

let matchUser = null;
let m = 0; //m keeps track of position in users matches list (like i in for loop)
function displayMatches() {
  if (m == currUser.Matches.length) {
    m = 0; //resets m if reached the end of the list
  }

  if (currUser.Matches.length > 0) {
    matchUser = currUser.Matches[m];
    //draws 'match' (sizzle) and 'next' (flip) buttons
    if (mouseX > windowWidth / 10 && mouseX < windowWidth / 10 + 175 && mouseY > windowHeight / 2 - 150 && mouseY < windowHeight / 2 + 25) {
      fill(266, 241, 141);
    } else {
      fill(246, 221, 121);
    }
    rect(windowWidth / 10, windowHeight / 2 - 150, 175, 175, 10);
    if (mouseX > windowWidth - 350 && mouseX < windowWidth - 175 && mouseY > windowHeight / 2 - 150 && mouseY < windowHeight / 2 + 25) {
      fill(260, 175, 140);
    } else {
      fill(240, 155, 120);
    }
    rect(windowWidth - 350, windowHeight / 2 - 150, 175, 175, 10);
    fill(27, 27, 27);
    textSize(35);
    text("Flip", windowWidth / 10 + 55, windowHeight / 2 + 5);
    text("Sizzle", windowWidth - 311, windowHeight / 2 + 5);

    image(bacon, windowWidth - 310, windowHeight / 2 - 130);
    image(pan, windowWidth / 10 + 40, windowHeight / 2 - 130); //end of buttons

    //displays potential matches name
    textSize(69);
    fill(27, 27, 27);
    let displayText = currUser.Matches[m].firstName + " " + currUser.Matches[m].lastName;
    let sWidth = textWidth(displayText);
    text(displayText, (windowWidth / 2) - (sWidth / 2), 100);

    //displays age
    textSize(34);
    displayText = "Age: " + currUser.Matches[m].age;
    sWidth = textWidth(displayText);
    text(displayText, (windowWidth / 2) - (sWidth / 2), 165);

    //display gender
    let userGender;
    let userInterest;
    if (currUser.Matches[m].gender == 0) {
      userGender = "Male";
    } else if (currUser.Matches[m].gender == 1) {
      userGender = "Female";
    } else if (currUser.Matches[m].gender == 2) {
      userGender = "Other";
    }
    if (currUser.Matches[m].interest == 0) {
      userInterest = "Male";
    } else if (currUser.Matches[m].interest == 1) {
      userInterest = "Female";
    } else if (currUser.Matches[m].interest == 2) {
      userInterest = "Other";
    }
    textSize(23);
    displayText = userGender + " Interested in " + userInterest;
    sWidth = textWidth(displayText);
    text(displayText, (windowWidth / 2) - (sWidth / 2), 470); //end of gender display

    //display hobbies
    let userHobbies = [];
    let aHobby; //converst hobbies into strings
    if (currUser.Matches[m].hobbies[0] == true) {
      aHobby = " Sports";
      userHobbies.push(aHobby);
    }
    if (currUser.Matches[m].hobbies[1] == true) {
      aHobby = " Dancing";
      userHobbies.push(aHobby);
    }
    if (currUser.Matches[m].hobbies[2] == true) {
      aHobby = " Singing";
      userHobbies.push(aHobby);
    }
    if (currUser.Matches[m].hobbies[3] == true) {
      aHobby = " Music";
      userHobbies.push(aHobby);
    }
    if (currUser.Matches[m].hobbies[4] == true) {
      aHobby = " Art";
      userHobbies.push(aHobby);
    }
    if (currUser.Matches[m].hobbies[5] == true) {
      aHobby = " Outdoors/Traveling";
      userHobbies.push(aHobby);
    }
    if (currUser.Matches[m].hobbies[6] == true) {
      aHobby = " Fishing";
      userHobbies.push(aHobby);
    }
    if (currUser.Matches[m].hobbies[7] == true) {
      aHobby = " Board Games";
      userHobbies.push(aHobby);
    }
    if (currUser.Matches[m].hobbies[8] == true) {
      aHobby = " Reading";
      userHobbies.push(aHobby);
    }
    if (currUser.Matches[m].hobbies[9] == true) {
      aHobby = " Gaming";
      userHobbies.push(aHobby);
    }
    displayText = userHobbies;
    sWidth = textWidth(displayText);
    text(displayText, (windowWidth / 2) - (sWidth / 2), 500);

    //would be an message if a user did not have a profile pic,
    //but I did not include profile pic functionality
    //so this is a placeholder
    fill(231, 205, 167);
    rect(windowWidth / 2 - 220, windowHeight / 2 - 180, 440, 230)
    fill(240, 50, 50);
    textSize(20);
    displayText = "No User Image";
    sWidth = textWidth(displayText);
    text(displayText, (windowWidth / 2) - (sWidth / 2), 300);
  } else { //message if user match list is empty
    fill(240, 50, 50);
    displayText = "No More People To Match With";
    sWidth = textWidth(displayText);
    text(displayText, (windowWidth / 2) - (sWidth / 2), windowHeight / 2)
  }
}

function mouseClicked() {
  if (tabSwitch == 2) { //if on matching page,
    if (mouseX > windowWidth / 10 && mouseX < windowWidth / 10 + 175 && mouseY > windowHeight / 2 - 150 && mouseY < windowHeight / 2 + 25) {
      m++; //if flip is pressed, it advances through the list
    }
    if (mouseX > windowWidth - 350 && mouseX < windowWidth - 175 && mouseY > windowHeight / 2 - 150 && mouseY < windowHeight / 2 + 25) {
      //if sizzle is pressed, 
      //it add the match to the users friends and removes from the matches
      currUser.friends.push(matchUser);
      currUser.Matches.splice(m, 1);
      m++;
      if (m > currUser.Matches.length) {
        m = 0; //resets 'm' if it has reached the end of the list
      }
    }
  } else if (tabSwitch == 3) {
    if (mouseX > windowWidth / 2 + 125 && mouseX < windowWidth / 2 + 325 && mouseY > 165 && mouseY < 235) {
      userManager.curr = userManager.first
      let curr = userManager.curr;
      let prev = null;
      while (curr != null) {
        if (curr.username == currUser.username) {
          if (prev == null) { //if user is first in list
            userManager.first = curr.next;
            break;
          } else {
            prev.next = curr.next; //otherwise
            break;
          }
        }
        prev = curr; //iterate through list
        curr = curr.next;
      }
      currUser = null;
      tabSwitch = 0;
      signIn();
    }
  }
}

//-----------------TabSwitch == 3, Settings--------------------//

function displaySettings() {
  fill(27, 27, 27);
  textSize(55);
  text(currUser.firstName + " " + currUser.lastName + "'s Settings", windowWidth / 2 - 250, 70);

  //delete account butotn
  fill(231, 205, 167);
  rect(windowWidth / 2 - 400, 150, 800, 100, 25);
  fill(27, 27, 27);
  textSize(50);
  text("Delete Account", windowWidth / 2 - 375, 217);
  if (mouseX > windowWidth / 2 + 125 && mouseX < windowWidth / 2 + 325 && mouseY > 165 && mouseY < 235) {
    fill(260, 70, 70);
  } else {
    fill(240, 50, 50);
  }
  rect(windowWidth / 2 + 125, 165, 200, 70, 10);
  fill(27, 27, 27);
  text("Delete", windowWidth / 2 + 150, 217); //end delete account button
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

function mouseWheel(event) {
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
let numMatches = 500;
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
          user.Dist = d;
          // if (potentialMatches.length < numMatches) {
          //   potentialMatches.push(user);
          // } else {
          //   break;
          // }
          potentialMatches.push(user);
        }
        //--------------Interest Female-----------//
      } else if (curr.interest == 1) {
        for (let i = 0; i < femaleMaleUsers.length; i++) {
          let user = femaleMaleUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.Dist = d;
          // if (potentialMatches.length < numMatches) {
          //   potentialMatches.push(user);
          // } else {
          //   break;
          // }
          potentialMatches.push(user);
        }
        //------------Interest Other-------------//
      } else if (curr.interest == 2) {
        for (let i = 0; i < otherMaleUsers.length; i++) {
          let user = otherMaleUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.Dist = d;
          // if (potentialMatches.length < numMatches) {
          //   potentialMatches.push(user);
          // } else {
          //   break;
          // }
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
          user.Dist = d;
          // if (potentialMatches.length < numMatches) {
          //   potentialMatches.push(user);
          // } else {
          //   break;
          // }
          potentialMatches.push(user);
        }
        //--------------Interest Female-----------//
      } else if (curr.interest == 1) {
        for (let i = 0; i < femaleFemaleUsers.length; i++) {
          let user = femaleFemaleUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.Dist = d;
          // if (potentialMatches.length < numMatches) {
          //   potentialMatches.push(user);
          // } else {
          //   break;
          // }
          potentialMatches.push(user);
        }
        //------------Interest Other-------------//
      } else if (curr.interest == 2) {
        for (let i = 0; i < otherFemaleUsers.length; i++) {
          let user = otherFemaleUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.Dist = d;
          // if (potentialMatches.length < numMatches) {
          //   potentialMatches.push(user);
          // } else {
          //   break;
          // }
          potentialMatches.push(user);
        }
      }
      //---------------~!~Gender Other~!~------------//
    } else if (curr.gender == 2) {
      if (curr.interest == 0) {
        for (let i = 0; i < maleOtherUsers.length; i++) {
          let user = maleOtherUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.Dist = d;
          // if (potentialMatches.length < numMatches) {
          //   potentialMatches.push(user);
          // } else {
          //   break;
          // }
          potentialMatches.push(user);
        }
        //--------------Interest Female-----------//
      } else if (curr.interest == 1) {
        for (let i = 0; i < femaleOtherUsers.length; i++) {
          let user = femaleOtherUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.Dist = d;
          // if (potentialMatches.length < numMatches) {
          //   potentialMatches.push(user);
          // } else {
          //   break;
          // }
          potentialMatches.push(user);
        }
        //------------Interest Other-------------//
      } else if (curr.interest == 2) {
        for (let i = 0; i < otherOtherUsers.length; i++) {
          let user = otherOtherUsers[i];
          d = dist(curr.pos.x, curr.pos.y, curr.pos.z, user.pos.x, user.pos.y, user.pos.z);
          user.Dist = d;
          // if (potentialMatches.length < numMatches) {
          //   potentialMatches.push(user);
          // } else {
          //   break;
          // }
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
  let pivot = potentialMatches[round(low + (high - low) / 2)].Dist;
  while (i <= j) {
    //This while loop goes throung the list from left to right. As soon as it finds a number that is greater than the pivot, it stops.
    while (potentialMatches[i].Dist < pivot) {
      i++;
    }
    //This does the same as the previous while loop except it starts from the right and finds a number less than the pivot
    while (potentialMatches[j].Dist > pivot) {
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