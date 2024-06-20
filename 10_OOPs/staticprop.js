class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username${this.username}`);
    }

    static createId(){
        return `123`
    }
}
const yogeeta = new User("yogeeta")
console.log(yogeeta.createId())


class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email= email
    }
}

const Class = new Teacher("Yadhvi", "yadhvi.ch@gmail.com")
Class.logMe();
console.log(Class.createId());