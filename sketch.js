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
  let user = new User("Jamal", "Murry", 28, 0, [true, true, true, true, false, false, false, false, false, false]);

  userManager = new List(user);
  userManager.curr = userManager.first;

  user = new User("Brent", "Nickel", 63, 0, [false, false, false, false, false, false, true, true, false, true]);

  while (userManager.curr != null)
  {
    userManager.curr = userManager.curr.next;
  }

  user = userManager.curr.next;
}