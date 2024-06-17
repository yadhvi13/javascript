class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password ;
    }

    addCourse(){
        console.log(`New Course was added by ${this.username}`);
    }
}

const unknown = new teacher("chai","chai@gmai.com","123")
unknown.addCourse()
const masalaChai = new User("masalachai")
masalaChai.logMe()

console.log(unknown === masalaChai);
console.log(unknown === teacher);
console.log(unknown instanceof teacher);