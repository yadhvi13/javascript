/* const accountId = 144553
let accountEmail = "yogeeta@googole.com"
var accountPassowrd = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2//no allowed

accountEmail = "hc@hc.com"
accountPassword = "121234"
accountCity = "bangalore"
console.log(accountId);

/*  prefer not to use var 
because of issue in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
*/
/*
const id = Symbol('123');
const anotherId= Symbol('123');

console.log(id === anotherId);


const outsideTemp = null;
const myFunction = function(){
    console.log("hello world");
}
const heros = ["shaktiman","Naagraj","Doga"];
console.log(typeof anotherId);  */

//**********************************************/
/* stack memory(PRIMITIVE DATATYPES) and heap memory(NON-PRIMITIVE)*/
 let myYoutubename = "hiteshchaoudharydotcom"

 let anothername = "chaiaurcode"
 console.log(anothername);
 console.log(myYoutubename);


 let user = {
    email: "user@google.com",
    upi: "user@ybl",
 }
 let usertwo = user

 usertwo.email = "hitesh@google.com"
 console.log(user.email);
 console.log(usertwo.email);
