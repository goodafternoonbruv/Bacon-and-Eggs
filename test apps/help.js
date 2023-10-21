let jsonX;
function setup() {
    createCanvas(600, 300);
    let json = {};

    json.id = 0;
    json.species = 'Lion';
    json.name = 'I hate Lion';

    saveJSON(json, 'books-list.json'); // Saves Maybe to local drive for some times idk weird annoying thing tried on editor online and it will save YET THE LOAD WILL LOAD THE DAMN LOCAL FILE. Sorry if you don't understand this then don't worry just try it and if it doesn't work it probably be because you now have 9 random files called books-list.
    jsonX = loadJSON("books-list.json")
  }
 

  function load(){



    
  }

  function draw() {
    background(200);
    text(jsonX.name,15,15) // If ya see this it worked!
  }