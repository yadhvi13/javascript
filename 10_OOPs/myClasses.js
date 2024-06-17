// ES6

class User {
    constructor(username,email,password){
        this.username = username ;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const XYZ = new User("yadhvi","yadhvi.ch@gmail.com","123")
console.log(XYZ.encryptPassword());
console.log(XYZ.changeUsername());

// Behind the scene

function user(username,email,password){
     this.username= username;
     this.email = email;
     this.password = password
}
user.prototype.encryptPassword = function(){
     return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const X = new user("yadhvi","yadhvi.ch@gmail.com","123")
console.log(X.encryptPassword());
console.log(X.changeUsername());
