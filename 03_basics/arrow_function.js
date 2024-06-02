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