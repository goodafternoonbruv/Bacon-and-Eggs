class List {
    constructor() {
        let first = null;
        this.curr = this.first;
        //addData();
    }

    // addData()
    // {
    //     while () //while file is being read
    //     {
    //         let user = new User(age, gender, hobbies);
    //         if (first == null)
    //         {
    //             user = first;
    //             curr = first;
    //         } else
    //         {
    //             curr.setNext(user);
    //             curr = curr.next;
    //         }

    //         curr = first;
    //         While (curr != null)
    //         {
    //             prinln(curr.firstName + " " + this.curr.lastName);
    //             curr = curr.next;
    //         }
    //     }
    // }

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
            this.curr.setNext(user);
        }
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

getData();

async function getData() {

    const response = await fetch("MatchMaker Responses.csv");
    const data = await response.text();
    //console.log(data);

    const rows = data.split('\n').slice(1);

    rows.forEach(elt => {

        const row = elt.split(',');
        console.log(row);
        //let user = new User();

    });

    // console.log(rows);

}