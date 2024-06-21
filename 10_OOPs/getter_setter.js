class user{
    constructor(email,password){
        this.email = email,
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const USER = new user("yogeeta@gmail.com","yogeeta01")
console.log(USER.email);
console.log(USER.password);