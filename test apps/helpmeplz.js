let aliens = 1; // for the logic in the draw loop
let score = 0; // initial score variable
let json = {} // JSON object

jason.firstName = 'New'
jason.lastName = 'User'
json.Score = score; // assign score variable to Score JSON

function preload() {
    scoreJSON = loadJSON('assets/scores.json'); // load external JSON file
}

function setup() {
    createCanvas(600, 400)
}

function draw() {
    background(0)

    if (aliens == 0) {
        saveJSON(json, 'assets/scores.json'); //     
    }

    for (let i = 0; i < scoreJSON.scores; i++) {
        fill(255)
        textSize(24);
        text(scoreJSON.scores[i].firstName, 100, i * 50 + 100); // concatenate these three?
        text(scoreJSON.scores[i].lastName, 300, i * 50 + 100);
        text(scoreJSON.scores[i].Score, 600, i * 50 + 100);
    }    
}