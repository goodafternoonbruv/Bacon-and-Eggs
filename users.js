// Define lists of first names, last names, and hobbies
const firstNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack"];
const lastNames = ["Smith", "Johnson", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Jones"];
const hobbies = ["Reading", "Cooking", "Gaming", "Sports", "Music", "Painting", "Traveling", "Photography", "Hiking", "Dancing"];

// Function to generate a random number between 0 and 2 for interests
function randomInterest() {
    return Math.floor(Math.random() * 3);
}

// Function to generate a random username
function randomUsername(firstName, lastName) {
    const randomNum = Math.floor(Math.random() * 1000);
    return `${firstName.toLowerCase()}${lastName.toLowerCase()}${randomNum}`;
}

// Function to generate a random password
function randomPassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    return password;
}

// Function to generate user data for 1000 users
function generateUsers(numUsers) {
    const users = [];
    for (let i = 0; i < numUsers; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const age = Math.floor(Math.random() * 48) + 18; // Random age between 18 and 65
        const interests = Array.from({ length: 10 }, randomInterest);
        const username = randomUsername(firstName, lastName);
        const password = randomPassword();

        users.push({
            firstName,
            lastName,
            age,
            hobbies: hobbies.map(() => Math.random() < 0.5),
            interests,
            username,
            password,
        });
    }

    return users;
}

const usersData = generateUsers(1000);

// You can access the generated user data in the 'usersData' variable.
console.log(usersData);
