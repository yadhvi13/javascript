const user = {
    username : "himmi",
    price: 299,
    welcomemessage : function(){
      //  console.log(`${this.username},welcome to website`);
      //  console.log(this);
    }
    
}
//user.welcomemessage()
//user.username = "sam"
//user.welcomemessage()

//console.log(this);
//........NODE environment(GLOBAL SCOPE)

/*
function chai(){
    let username = "oggy"
    console.log(this.username);
}
chai()
*/

/*
const chai = function(){
    let username = "oggy"
    console.log(this.username);
}
chai()
*/

const chai = () => {
    let username = "oggy"
    console.log(this);
}
//chai()
/*
const addnum = (num1,num2) => {
     return num1 + num2   (EXPLICIT return)
}
*/
const addnum = (num1,num2) => ( num1 + num2)
// implicit return    
//console.log(addnum(4,7));

//const array=[2,5,7,8]
//array.forEach(() => ())

let val = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = console.log(addNum(val,val2))
let result2 = console.log(addNum(10,2))
