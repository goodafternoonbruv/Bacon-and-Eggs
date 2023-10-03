  class List {
    constructor() {
        let first = null;
        this.curr = this.first;
        //addData();
    }

    addUser(user) {
        if (this.first == null) {
            this.first = user;
        } else 
        {
            this.curr = this.first;

            while (this.curr.next)
            {
                this.curr = this.curr.next;
            }
            this.curr.next = user;
        }
        print(user);
    }

}

class User {
    constructor(firstName, lastName, age, gender, hobbies) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.hobbies = hobbies;
        this.next = null;
    }

    setNext(user) {
        this.next = user;
    }

}




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

        let hobbies = [Hobby1, Hobby2, Hobby3, Hobby4, Hobby5, Hobby6];
        let user = new User(firstName, lastName, age, 0, hobbies);
        userManager.addUser(user);
    });


}