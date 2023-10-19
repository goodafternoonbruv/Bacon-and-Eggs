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



