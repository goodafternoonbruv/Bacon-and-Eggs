let users = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
];

function draw() {
    // Optional: You can add dynamic content here.
}

function setup() {
    noCanvas();
    let input = select('#searchInput');
    input.input(search); // Use the 'input' event to call the search function while typing
}

function search() {
    let query = select('#searchInput').value().toLowerCase();
    let results = users.filter(user => user.toLowerCase().includes(query));

    // Display search results
    let resultsDiv = select('#results');
    resultsDiv.html(""); // Clear previous results
    for (let user of results) {
        let resultP = createP(user);
        resultsDiv.child(resultP);
    }
}



