//------------------Class List------------------//
class List {
    constructor() {
        let first = null;
        this.curr = this.first;
        this.long = 0;
    }

    addUser(user) {
        if (this.first == null) {
            this.first = user;
        } else {
            this.curr = this.first;

            while (this.curr.next) {
                this.curr = this.curr.next;
            }
            this.curr.next = user;
        }
    }

}

//-------------------------Class User--------------------------//

class User {
    constructor(firstName, lastName, age, gender, interest, hobbies) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interest = interest;
        this.hobbies = hobbies;
        this.next = null;
        this.pos = null;
        this.MSatches = [];
        this.dist = 0;
    }

    setNext(user) {
        this.next = user;
    }

    display() {
        fill(0);
        ellipse(this.pos.x, this.pos.y, 5)
        //text(this.firstName, this.pos.x - 10, this.pos.y - 10);
    }

}

//-------------------File and Data Management----------------------//

function storeAsCsv(event) {
    event.preventDefault();
    console.log(event);
}


async function getData() {
    const response = await fetch("MatchMaker Responses.csv");
    const data = await response.text();

    const rows = data.split('\n').slice(1);

    rows.forEach(elt => {

        const row = elt.split(',');
        const firstName = row[0];
        const lastName = row[1];
        const age = row[2];
        const Hobby1 = row[3];
        const Hobby2 = row[4];
        const Hobby3 = row[5];
        const Hobby4 = row[6];
        const Hobby5 = row[7];
        const Hobby6 = row[8];
        const Hobby7 = row[9];
        const Hobby8 = row[10];
        const Hobby9 = row[11];
        const Hobby10 = row[12];
        const gender = row[13];
        const interest = row[14];

        let hobbyColection = [Hobby1, Hobby2, Hobby3, Hobby4, Hobby5, Hobby6, Hobby7, Hobby8, Hobby9, Hobby10];
        let hobbies = [false, false, false, false, false, false, false, false, false, false];

        for (let i = 0; i < hobbyColection.length; i++) {
            if (hobbyColection[i] == "True") {
                hobbies[i] = true;
            } else {
                hobbies[i] = false;
            }
        }
        let user = new User(firstName, lastName, age, gender, interest, hobbies);
        userManager.addUser(user);
    });
}