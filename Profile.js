  class List {
    constructor() {
        let first = null;
        this.curr = this.first;
        //addData();
    }

<<<<<<< HEAD
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


=======
>>>>>>> 889fac890643aa7ccc147a26623f99634b40f327
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


<<<<<<< HEAD

getData();
=======
>>>>>>> 889fac890643aa7ccc147a26623f99634b40f327

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