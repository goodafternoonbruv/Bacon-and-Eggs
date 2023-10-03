  /*class List {
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


*/
getData();

async function getData() {

    const response = await fetch("MatchMaker Responses.csv");
    const data = await response.text();
    //console.log(data);

    const rows = data.split('\n').slice(1);

    rows.forEach(elt => {

        const row = elt.split(',');
<<<<<<< HEAD
        const firstName = row[0];
        const lastName = row[1];
        const Hobby1 = row[3];
        const Hobby2 = row[4];
        const Hobby3 = row[5];
        const Hobby4 = row[6];
        const Hobby5 = row[7];
        const Hobby6 = row[8];
        console.log(firstName, lastName);
=======
        console.log(row);
        //let user = new User();
>>>>>>> ec17581c85b04322d6545bb0ded1dd7dfb1def72

    });

    // console.log(rows);

}