
/*
let users = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Catherine",
    "Irene"
];
*/

let users = [];
let i = 0;
userManager.curr = userManager.first;
while (userManager.curr != null) {
    users[i] = userManager.curr.firstName;
    users[i + 1] = userManager.curr.lastName;
    i += 2;
    userManager.curr = userManager.curr.next;
}
print(users);


function search() {
    let query = select('#searchInput').value().toLowerCase();
    let results = users.filter(user => user.toLowerCase().includes(query));

    // Display search results
    let resultsDiv = select('#results');
    resultsDiv.html("");
    for (let user of results) {
        let resultP = createP(user);
        resultsDiv.child(resultP);
        print(firstName);
    }
}



