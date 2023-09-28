class List
{
    constructor(x, y, firstUser, currUser)
    {
        this.x = x;
        this.y = y;
        this.first = firstUser;
        this.curr = currUser;
    }

    function addUser (User) {
        while (curr.next != null)
        {
            curr.next = User;
        }

    }

}

class User
{
    constructor(age, gender, [])
    {
        this.age = age;
        this.gender = gender;
        this.hobbies = [];
    }

}