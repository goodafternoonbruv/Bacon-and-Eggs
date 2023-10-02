class List
{
    constructor()
    {
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

    addUser (user) {
        while (this.curr.next != null)
        {
            curr = curr.next;
        }
        setNext(user);
        this.curr = this.curr.next;
    }

}

class User
{
    constructor(firstName, lastName, age, gender, hobbies)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.hobbies = hobbies;
        let next = null;
    }

    setNext(user)
    {
        this.next = user;
    }

}

function storeAsCsv(event)
{
    event.preventDefault();
    console.log(event);
}