let users = [];
let i = 0;

function getUserNames() {
    userManager.curr = userManager.first;
    while (userManager.curr != null) {
        users[i] = userManager.curr.firstName;
        users[i + 1] = userManager.curr.lastName;
        i += 2;
        userManager.curr = userManager.curr.next;
    }
}

function search() {
    let query = select('#searchInput').value().toLowerCase();
    let results = users.filter(user => user.toLowerCase().includes(query));

    // Display search results
    let resultsDiv = select('#results');
    resultsDiv.html(""); // Clear previous results

    let DisplayResults = 0;

    if (query !== "") {
        for (let user of results) {
            if (DisplayResults < 5) {
                let resultP = createP(user);
                resultsDiv.child(resultP);
                DisplayResults++;
            } else {
                break;
            }
        }
    }
}
