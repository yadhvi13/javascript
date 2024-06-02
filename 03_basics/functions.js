
//function SayMyName(){
//    console.log("h");
 //   console.log("i");
//    console.log("t");
//    console.log("e");
//    console.log("s");
//    console.log("h");
//}
//SayMyName()

//function addtwonum (number1,number2){ //--> parameters
//    console.log(number1 + number2);
//}
//const result = addtwonum(3,4) // ---> arguments
//console.log("Result: ", result);

function addtwonum (number1,number2){
   // let result = number1 + number2
    //return result
    //console.log('yogeeta'); //--> after return kuch nhi hota
     return number1+number2
}
const result = addtwonum(3,8)
//console.log("result :",result);



function loginusermessage(username = "sam "){
   if(username === undefined){
      console.log("please enter a username");
      return 
   }
   return`${username}just logged in`
}
//console.log(loginusermessage("yogeeta "));
//console.log(loginusermessage());


// REST OPERATOR or SPREAD OPERATOR ...
function calculatecartprice1(...num1){
   return num1
}
//console.log(calculatecartprice1(200,300,400,2000,3000));

// HOW IT TAKES VALUES
function calculatecartprice2(val1,val2,...num1){
   return num1
}
//console.log(calculatecartprice2(200,300,400,2000,3000));


const user = {
   username : "manku",
   price : 199,
}
function handleobject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleobject(user)
handleobject({
   username: "yadhvi",
   price: 200,
})

const myarray = [200,300,400,100,600]
function returnsecondvalue(getarray){
   return getarray[1]
}
console.log(returnsecondvalue(myarray));