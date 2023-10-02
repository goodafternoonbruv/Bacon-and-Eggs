class List
{
    constructor(first)
    {
        this.first = first;
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
        while (curr.next != null)
        {
            curr.next = user;
        }
        setNext();
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
        let next;
    }

    setNext(user)
    {
        next = user;
    }

}

function storeAsCsv(event)
{
    event.preventDefault();
    console.log(event);
}