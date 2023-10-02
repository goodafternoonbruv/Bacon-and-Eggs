let userManager;
function setup() {
  //load data
  createCanvas(windowWidth, windowHeight);
  windowResized();
  uploadData();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

}

function uploadData() {
  userManager = new List(); //create list
  //create user (link)
  let user = new User("Jamal", "Murry", 28, 0, [true, true, true, true, false, false, false, false, false, false]);
  //pass through user (link) to be added to the list
  userManager.addUser(user);

  user = new User("Brent", "Nickel", 63, 0, [false, false, false, false, false, false, true, true, false, true]);
  userManager.addUser(user);
}