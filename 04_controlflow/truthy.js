// Truthy or Falsy
/* const useremail = []
if (useremail) {
    console.log("Got User email");
}
else{
    console.log("dont have user email");
}

const useremail2 = ""
if (useremail2) {
    console.log("Got User email");
}
else{
    console.log("don't have user email");
}
/*
//falsy values
false,0,-0,BigInt 0n, "",null,undefined,NaN

#TRUTHY VALUE
"0" (string ke andr zero), "false"," ",[],{},function(){}


if (useremail.length=== 0) {
    console.log("array is empty");
}
*/ 
/*
const emptyobj = {}
if (Object.keys(emptyobj).length===0) {
    console.log("object is empty");
}
*/

// NULLISH COALESCING OPERATOR (??): null defined
let val1;
val1 = 5 ?? 10 
console.log(val1);

// TERNIARY OPERATOR

//condition ? true : false
const iceteaprice = 100
iceteaprice >= 80 ? console.log("less than 80") : console.log("more than 80");