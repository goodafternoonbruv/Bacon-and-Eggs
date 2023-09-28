class List
{
    constructor(first)
    {
        this.first = first;
        this.curr = this.first;
        addData();
    }

    addData()
    {
        while 'file is reading'()
        {
            let user = new User(age, gender, hobbies);
            if (first == null)
            {
                user = first;
                curr = first;
            } else
            {
                curr.setNext(user);
                curr = curr.next;
            }
        }
    }

    addUser (user) {
        while (curr.next != null)
        {
            curr.next = user;

        }

    }

}

class User
{
    constructor(age, gender, hobbies)
    {
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