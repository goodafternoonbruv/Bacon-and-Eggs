let users = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Catherine"
];

<<<<<<< HEAD
function setup() {
    noCanvas();
    let input = select('#searchInput');
    input.input(search);
}
=======
>>>>>>> be4087ddfa675fed4c4df415c7092d748ed09672

function search() {
    let query = select('#searchInput').value().toLowerCase();
    let results = users.filter(user => user.toLowerCase().includes(query));

    // Display search results
    let resultsDiv = select('#results');
    resultsDiv.html("");
    for (let user of results) {
        let resultP = createP(user);
        resultsDiv.child(resultP);
    }
}



