// Literals
const user = {
    username : "yogeeta",
    loginCount : 6,
    signedIn : true,

    getuserDetails : function(){
        //console.log("Got User Detials from database");
       // console.log(`Username: ${this.username}`);
      // console.log(this);
    }

}

//console.log(user.username);
//console.log(user.getuserDetails());
//console.log(this);


// ## Constructor Function()   ---- new
//const promiseOne = new Promise()
//const date = new Date()

function User(username , loginCount, isLoggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;

    this.greetings = function(){
       // console.log(`Welcome ${this.username}`);
    }

    return this
}
const userOne = new User("yogeeta",12,true)
const userTwo = new User("kanchan",10,false)
console.log(userOne.constructor);
//console.log(userTwo);


function Car(Model,Make,Year){
    this.Model = Model;
    this.Make = Make;
    this.Year = Year;
}
const auto = new Car("Accord","honda",1998);
console.log(auto instanceof Car);
console.log(auto instanceof Object);
