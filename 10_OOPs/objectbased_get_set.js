const User = {
    _email : 'yogeeta@gmail.com',
    _password : "www",

    get email(){
      return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const USER = Object.create(User)
console.log(USER.email);